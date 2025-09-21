import { UmbControllerBase } from '@umbraco-cms/backoffice/class-api';
/**
 * This abstract Controller holds the core to manage a multiple Extensions.
 * When one or more extensions are permitted to be used, then the extender of this class can instantiate the relevant single extension initiator relevant for this type.
 * @abstract
 * @class UmbBaseExtensionsInitializer
 */
export class UmbBaseExtensionsInitializer extends UmbControllerBase {
    #promiseResolvers;
    #extensionRegistry;
    #type;
    #filter;
    #single;
    #onChange;
    #permittedExts;
    #exposedPermittedExts;
    #changeDebounce;
    asPromise() {
        return new Promise((resolve) => {
            if (this.#permittedExts.length > 0) {
                resolve();
            }
            else {
                this.#promiseResolvers.push(resolve);
            }
        });
    }
    constructor(host, extensionRegistry, type, filter, onChange, controllerAlias, args = {}) {
        super(host, controllerAlias ?? 'extensionsInitializer_' + (Array.isArray(type) ? type.join('_') : type));
        this.#promiseResolvers = [];
        this.#single = false;
        this._extensions = [];
        this.#permittedExts = [];
        this.#gotManifests = (manifests) => {
            if (!manifests) {
                // Clean up:
                this._extensions.forEach((controller) => {
                    controller.destroy();
                });
                this._extensions.length = 0;
                // _permittedExts should have been cleared via the destroy callbacks.
                this.#permittedExts.length = 0;
                return;
            }
            // If we get no manifests and we have not exposed any extensions yet, then we should notify to let the listener know that we have our first response. [NL]
            if (manifests.length === 0 && this.#exposedPermittedExts === undefined) {
                this.#exposedPermittedExts = [];
                this.#onChange?.(this.#exposedPermittedExts);
            }
            // Clean up extensions that are no longer.
            this._extensions = this._extensions.filter((extension) => {
                if (!manifests.find((manifest) => manifest.alias === extension.alias)) {
                    extension.destroy();
                    // destroying the controller will, if permitted, make a last callback with isPermitted = false. This will also remove it from the _permittedExts array. [NL]
                    return false;
                }
                return true;
            });
            manifests.forEach((manifest) => {
                const existing = this._extensions.find((x) => x.alias === manifest.alias);
                if (!existing) {
                    this._extensions.push(this._createController(manifest));
                }
            });
        };
        this._extensionChanged = (isPermitted, controller) => {
            let hasChanged = false;
            // This might be called after this is destroyed, so we need to check if the _permittedExts is still available: [NL]
            const existingIndex = this.#permittedExts?.indexOf(controller);
            if (isPermitted) {
                if (existingIndex === -1) {
                    this.#permittedExts.push(controller);
                    hasChanged = true;
                }
            }
            else {
                if (existingIndex >= 0) {
                    this.#permittedExts.splice(existingIndex, 1);
                    hasChanged = true;
                }
            }
            if (hasChanged) {
                if (!this.#changeDebounce) {
                    this.#changeDebounce = requestAnimationFrame(this.#notifyChange);
                }
            }
        };
        this.#notifyChange = () => {
            this.#changeDebounce = undefined;
            // This means that we have been destroyed:
            if (this.#permittedExts === undefined)
                return;
            // The final list of permitted extensions to be displayed, this will be stripped from extensions that are overwritten by another extension and sorted accordingly. [NL]
            let approvedExtensions = [...this.#permittedExts];
            // Removal of overwritten extensions (Its important that this does not use the filtered list of extensions, as we want overridden approved extensions to clean up their overrides). [NL]
            this.#permittedExts.forEach((extCtrl) => {
                // Check if it overwrites another extension:
                // if so, look up the extension it overwrites, and remove it from the list. and check that for if it overwrites another extension and so on. [NL]
                if (extCtrl.overwrites.length > 0) {
                    extCtrl.overwrites.forEach((overwrite) => {
                        this.#removeOverwrittenExtensions(approvedExtensions, overwrite);
                    });
                }
            });
            // Sorting:
            approvedExtensions.sort((a, b) => b.weight - a.weight);
            if (this.#single && approvedExtensions.length > 1) {
                approvedExtensions = [approvedExtensions[0]];
            }
            this.#exposedPermittedExts = approvedExtensions;
            // TODO: Option to first resolve once all have responded are completed. [NL]
            if (this.#exposedPermittedExts.length > 0) {
                this.#promiseResolvers.forEach((x) => x());
                this.#promiseResolvers = [];
            }
            // Collect change calls.
            this.#onChange?.(this.#exposedPermittedExts);
        };
        this.#extensionRegistry = extensionRegistry;
        this.#type = type;
        this.#filter = filter;
        this.#onChange = onChange;
        this.#single = args.single ?? false;
    }
    _init() {
        let source;
        if (Array.isArray(this.#type)) {
            if (this.#filter) {
                source = this.#extensionRegistry.byTypesAndFilter(this.#type, this.#filter);
            }
            else {
                source = this.#extensionRegistry.byTypes(this.#type);
            }
        }
        else {
            if (this.#filter) {
                source = this.#extensionRegistry.byTypeAndFilter(this.#type, this.#filter);
            }
            else {
                source = this.#extensionRegistry.byType(this.#type);
            }
        }
        this.observe(source, this.#gotManifests, '_observeManifests');
    }
    #gotManifests;
    #notifyChange;
    #removeOverwrittenExtensions(list, alias) {
        const index = list.findIndex((a) => a.alias === alias);
        if (index !== -1) {
            const entry = list[index];
            // Remove this extension:
            list.splice(index, 1);
            // Then remove other extensions that this was replacing:
            if (entry.overwrites.length > 0) {
                entry.overwrites.forEach((overwrite) => {
                    this.#removeOverwrittenExtensions(list, overwrite);
                });
            }
        }
    }
    hostDisconnected() {
        super.hostDisconnected();
        if (this.#changeDebounce) {
            cancelAnimationFrame(this.#changeDebounce);
            this.#notifyChange();
        }
    }
    destroy() {
        // The this.#extensionRegistry is an indication of wether this is already destroyed. [NL]
        if (!this.#extensionRegistry)
            return;
        const oldPermittedExtsLength = this.#exposedPermittedExts?.length ?? 0;
        this._extensions.forEach((extension) => extension.destroy());
        this._extensions = undefined;
        this.#permittedExts = undefined;
        this.#exposedPermittedExts = undefined;
        if (this.#changeDebounce) {
            cancelAnimationFrame(this.#changeDebounce);
            this.#changeDebounce = undefined;
        }
        if (oldPermittedExtsLength > 0) {
            this.#onChange?.([]);
        }
        this.#promiseResolvers.length = 0;
        this.#filter = undefined;
        this.#onChange = undefined;
        this.#extensionRegistry = undefined;
        super.destroy();
    }
}
