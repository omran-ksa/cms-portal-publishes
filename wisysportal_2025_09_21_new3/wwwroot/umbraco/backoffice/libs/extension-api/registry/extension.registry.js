import { UmbBasicState } from '@umbraco-cms/backoffice/observable-api';
import { map, distinctUntilChanged, combineLatest, of, switchMap } from '@umbraco-cms/backoffice/external/rxjs';
/**
 *
 * @param {Array<ManifestBase>} previousValues - previous value
 * @param {Array<ManifestBase>} currentValues - current value
 * @returns {boolean} - true if value is assumed to be the same as previous value.
 */
function extensionArrayMemoization(previousValues, currentValues) {
    // If length is different, data is different:
    if (previousValues.length !== currentValues.length) {
        return false;
    }
    // is there some properties that differs?:
    if (previousValues.some((p) => {
        const n = currentValues.find((c) => c.alias === p.alias);
        if (!n) {
            return true;
        }
        if (p.conditions?.length !== n.conditions?.length) {
            return true;
        }
        return !(p === n);
    })) {
        return false;
    }
    return true;
}
/**
 *
 * @param {Array<ManifestBase>} previousValues - previous value
 * @param {Array<ManifestBase>} currentValues - current value
 * @returns {boolean} - true if value is assumed to be the same as previous value.
 */
function extensionAndKindMatchArrayMemoization(previousValues, currentValues) {
    // If length is different, data is different:
    if (previousValues.length !== currentValues.length) {
        return false;
    }
    // previousValue has an alias that is not present in currentValue:
    /* !! This is covered by the test below:
    if (previousValue.find((p) => !currentValue.find((c) => c.alias === p.alias))) {
        return false;
    }*/
    // if previousValue has different meta values:
    if (currentValues.some((currentValue) => {
        const previousValue = previousValues.find((c) => c.alias === currentValue.alias);
        // First check if we found a previous value, matching this alias.
        // Then checking __isMatchedWithKind, as this is much more performant than checking the whole object. (I assume the only change happening to an extension is the match with a kind, we do not want to watch for other changes)
        return (previousValue === undefined ||
            previousValue !== currentValue ||
            previousValue.alias !== currentValue.alias ||
            previousValue.__isMatchedWithKind !== currentValue.__isMatchedWithKind ||
            previousValue.conditions?.length !== currentValue.conditions?.length);
    })) {
        return false;
    }
    return true;
}
/**
 *
 * @param {Array<ManifestBase>} previousValue - previous value
 * @param {Array<ManifestBase>} currentValue - current value
 * @returns {boolean} - true if value is assumed to be the same as previous value.
 */
function extensionSingleMemoization(previousValue, currentValue) {
    return !(previousValue === undefined ||
        previousValue !== currentValue ||
        previousValue.alias !== currentValue.alias ||
        previousValue.conditions?.length !== currentValue.conditions?.length);
}
/**
 *
 * @param {Array<ManifestBase>} previousValue - previous value
 * @param {Array<ManifestBase>} currentValue - current value
 * @returns {boolean} - true if value is assumed to be the same as previous value.
 */
function extensionAndKindMatchSingleMemoization(previousValue, currentValue) {
    return !(previousValue === undefined ||
        previousValue !== currentValue ||
        previousValue.alias !== currentValue.alias ||
        previousValue.__isMatchedWithKind !== currentValue.__isMatchedWithKind ||
        previousValue.conditions?.length !== currentValue.conditions?.length);
}
const sortExtensions = (a, b) => (b.weight || 0) - (a.weight || 0);
export class UmbExtensionRegistry {
    constructor() {
        this.MANIFEST_TYPES = undefined;
        this._extensions = new UmbBasicState([]);
        this.extensions = this._extensions.asObservable();
        this._kinds = new UmbBasicState([]);
        this.kinds = this._kinds.asObservable();
        this.#exclusions = [];
        this.#additionalConditions = new Map();
        this.#acceptExtension = (ext) => {
            return !this.#exclusions.includes(ext.alias);
        };
    }
    #exclusions;
    #additionalConditions;
    #appendAdditionalConditions(manifest) {
        const newConditions = this.#additionalConditions.get(manifest.alias);
        if (newConditions) {
            manifest = { ...manifest };
            // Append the condition to the extensions conditions array
            if (manifest.conditions) {
                for (const condition of newConditions) {
                    manifest.conditions.push(condition);
                }
            }
            else {
                manifest.conditions = newConditions;
            }
            this.#additionalConditions.delete(manifest.alias);
        }
        return manifest;
    }
    defineKind(kind) {
        const extensionsValues = this._extensions.getValue();
        const extension = extensionsValues.find((extension) => extension.alias === kind.alias);
        if (extension) {
            console.error(`Extension Kind with alias ${kind.alias} is already registered`);
            return;
        }
        const nextData = this._kinds
            .getValue()
            .filter((k) => !(k.matchType === kind.matchType &&
            k.matchKind === kind.matchKind));
        nextData.push(kind);
        this._kinds.setValue(nextData);
    }
    /**
     * Exclude an extension from being available.
     * Notice if you are looking to replace, then you can achieve such via the `overwrites` property in the manifest.
     * @param {string} alias - The alias of the extension to exclude.
     */
    exclude(alias) {
        this.#exclusions.push(alias);
        this._extensions.setValue(this._extensions.getValue().filter(this.#acceptExtension));
    }
    #acceptExtension;
    /**
     * Register an extension.
     * @param {(ManifestBase | ManifestKind<ManifestBase>)} manifest - The extension to register.
     * @memberof UmbExtensionRegistry
     */
    register(manifest) {
        const isValid = this.#validateExtension(manifest);
        if (!isValid) {
            return;
        }
        if (manifest.type === 'kind') {
            this.defineKind(manifest);
            return;
        }
        const isApproved = this.#isExtensionApproved(manifest);
        if (!isApproved) {
            return;
        }
        this._extensions.setValue([
            ...this._extensions.getValue(),
            this.#appendAdditionalConditions(manifest),
        ]);
    }
    /**
     * Get all registered extensions.
     * @returns {Array<ManifestBase>} - All registered extensions.
     * @memberof UmbExtensionRegistry
     */
    getAllExtensions() {
        return this._extensions.getValue();
    }
    /**
     * Register many extensions.
     * @param {(Array<ManifestBase | ManifestKind<ManifestBase>>)} manifests - The extensions to register.
     * @memberof UmbExtensionRegistry
     */
    registerMany(manifests) {
        // we have to register extensions individually, so we ensure a manifest is valid before continuing to the next one
        manifests.forEach((manifest) => this.register(manifest));
    }
    /**
     * Unregister many extensions with the given aliases.
     * Notice it is more secure to exclude it, only unregister extensions that you provided.
     * @param {Array<string>} aliases - The aliases of the extensions to unregister.
     * @memberof UmbExtensionRegistry
     */
    unregisterMany(aliases) {
        aliases.forEach((alias) => this.unregister(alias));
    }
    /**
     * Unregister an extension with the given alias.
     * Notice it is more secure to exclude it, only unregister extensions that you provided.
     * @param {string} alias - The alias of the extension to unregister.
     * @memberof UmbExtensionRegistry
     */
    unregister(alias) {
        const newKindsValues = this._kinds.getValue().filter((kind) => kind.alias !== alias);
        const newExtensionsValues = this._extensions.getValue().filter((extension) => extension.alias !== alias);
        this._kinds.setValue(newKindsValues);
        this._extensions.setValue(newExtensionsValues);
    }
    /**
     * Check if an extension with the given alias is registered.
     * @param {string} alias - The alias of the extension to check.
     * @returns {boolean} - true if an extension with the given alias is registered.
     * @memberof UmbExtensionRegistry
     */
    isRegistered(alias) {
        if (this._extensions.getValue().find((ext) => ext.alias === alias)) {
            return true;
        }
        if (this._kinds.getValue().find((ext) => ext.alias === alias)) {
            return true;
        }
        return false;
    }
    /**
     * Clears all extensions and kinds from the registry.
     * @memberof UmbExtensionRegistry
     */
    clear() {
        this._extensions.setValue([]);
        this._kinds.setValue([]);
    }
    #validateExtension(manifest) {
        if (!manifest.type) {
            console.error(`Extension is missing type`, manifest);
            return false;
        }
        if (!manifest.alias) {
            console.error(`Extension is missing alias`, manifest);
            return false;
        }
        return true;
    }
    #isExtensionApproved(manifest) {
        if (!this.#acceptExtension(manifest)) {
            return false;
        }
        const extensionsValues = this._extensions.getValue();
        const extension = extensionsValues.find((extension) => extension.alias === manifest.alias);
        if (extension) {
            console.error(`Extension with alias ${manifest.alias} is already registered`);
            return false;
        }
        return true;
    }
    #kindsOfType(type) {
        return this.kinds.pipe(map((kinds) => kinds.filter((kind) => kind.matchType === type)), distinctUntilChanged(extensionArrayMemoization));
    }
    #extensionsOfType(type) {
        return this.extensions.pipe(map((exts) => exts.filter((ext) => ext.type === type)), distinctUntilChanged(extensionArrayMemoization));
    }
    #kindsOfTypes(types) {
        return this.kinds.pipe(map((kinds) => kinds.filter((kind) => types.indexOf(kind.matchType) !== -1)), distinctUntilChanged(extensionArrayMemoization));
    }
    #extensionsOfTypes(types) {
        return this.extensions.pipe(map((exts) => exts.filter((ext) => types.indexOf(ext.type) !== -1)), distinctUntilChanged(extensionArrayMemoization));
    }
    #mergeExtensionWithKinds([ext, kinds,]) {
        // Specific Extension Meta merge (does not merge conditions)
        if (ext) {
            // Since we don't have the type up front in this request, we will just get all kinds here and find the matching one:
            const baseManifest = kinds.find((kind) => kind.matchKind === ext.kind)?.manifest;
            // TODO: This check can go away when making a find kind based on type and kind.
            if (baseManifest) {
                const merged = { __isMatchedWithKind: true, ...baseManifest, ...ext };
                if (baseManifest.meta) {
                    merged.meta = { ...baseManifest.meta, ...ext.meta };
                }
                return merged;
            }
        }
        return ext;
    }
    #mergeExtensionsWithKinds([exts, kinds,]) {
        return exts
            .map((ext) => {
            // Specific Extension Meta merge (does not merge conditions)
            const baseManifest = kinds.find((kind) => kind.matchKind === ext.kind)?.manifest;
            if (baseManifest) {
                const merged = { __isMatchedWithKind: true, ...baseManifest, ...ext };
                if (baseManifest.meta) {
                    merged.meta = { ...baseManifest.meta, ...ext.meta };
                }
                return merged;
            }
            return ext;
        })
            .sort(sortExtensions);
    }
    /**
     * Get an observable that provides an extension matching the given alias.
     * @param {string} alias - The alias of the extension to get.
     * @returns {Observable<ManifestBase | undefined>} - An observable of the extension that matches the alias.
     */
    byAlias(alias) {
        return this.extensions.pipe(map((exts) => exts.find((ext) => ext.alias === alias)), distinctUntilChanged(extensionSingleMemoization), switchMap((ext) => {
            if (ext?.kind) {
                return this.#kindsOfType(ext.type).pipe(map((kinds) => this.#mergeExtensionWithKinds([ext, kinds])));
            }
            return of(ext);
        }), distinctUntilChanged(extensionAndKindMatchSingleMemoization));
    }
    /**
     * Get an extension that matches the given alias, this will not return an observable, it is a one of retrieval if it exists at the given point in time.
     * @param {string} alias - The alias of the extension to get.
     * @returns {ManifestBase | undefined} - The extension manifest that matches the alias.
     */
    getByAlias(alias) {
        const ext = this._extensions.getValue().find((ext) => ext.alias === alias);
        if (ext?.kind) {
            return this.#mergeExtensionWithKinds([ext, this._kinds.getValue()]);
        }
        return ext;
    }
    /**
     * Get an observable that provides extensions matching the given type and alias.
     * @param {string} type - The type of the extensions to get.
     * @param {string} alias - The alias of the extensions to get.
     * @returns {Observable<ManifestBase | undefined>} - An observable of the extensions that matches the type and alias.
     */
    byTypeAndAlias(type, alias) {
        return combineLatest([
            this.extensions.pipe(map((exts) => exts.find((ext) => ext.type === type && ext.alias === alias)), distinctUntilChanged(extensionSingleMemoization)),
            this.#kindsOfType(type),
        ]).pipe(map(this.#mergeExtensionWithKinds), distinctUntilChanged(extensionAndKindMatchSingleMemoization));
    }
    /**
     * Get an observable that provides extensions matching the given type and alias.
     * @param {string} type - The type of the extensions to get.
     * @param {Array<string>} aliases - The aliases of the extensions to get.
     * @returns {Observable<ManifestBase | undefined>} - An observable of the extensions that matches the type and one of the aliases.
     */
    byTypeAndAliases(type, aliases) {
        return combineLatest([
            this.extensions.pipe(map((exts) => exts.filter((ext) => ext.type === type && aliases.indexOf(ext.alias) !== -1)), distinctUntilChanged(extensionArrayMemoization)),
            this.#kindsOfType(type),
        ]).pipe(map(this.#mergeExtensionsWithKinds), distinctUntilChanged(extensionAndKindMatchArrayMemoization));
    }
    /**
     * Get an observable of extensions by type and a given filter method.
     * This will return the all extensions that matches the type and which filter method returns true.
     * The filter method will be called for each extension manifest of the given type, and the first argument to it is the extension manifest.
     * @param {string} type - The type of the extension to get.
     * @param {(ext: ManifestBase) => boolean} filter - The filter method to use to filter the extensions.
     * @returns {Observable<Array<ManifestBase>>} - An observable of the extensions that matches the type and filter method.
     */
    byTypeAndFilter(type, filter) {
        return combineLatest([
            this.extensions.pipe(map((exts) => exts.filter((ext) => ext.type === type && filter(ext))), distinctUntilChanged(extensionArrayMemoization)),
            this.#kindsOfType(type),
        ]).pipe(map(this.#mergeExtensionsWithKinds), distinctUntilChanged(extensionAndKindMatchArrayMemoization));
    }
    /**
     * Get an extensions by type and a given filter method.
     * This will return the all extensions that matches the type and which filter method returns true.
     * The filter method will be called for each extension manifest of the given type, and the first argument to it is the extension manifest.
     * @param {string} type - The type of the extension to get.
     * @param {(ext: ManifestBase) => boolean} filter - The filter method to use to filter the extensions.
     * @returns {Observable<Array<ManifestBase>>} - An observable of the extensions that matches the type and filter method.
     */
    getByTypeAndFilter(type, filter) {
        const exts = this._extensions
            .getValue()
            .filter((ext) => ext.type === type && filter(ext));
        if (exts.length === 0) {
            return [];
        }
        const kinds = this._kinds.getValue();
        return exts
            .map((ext) => (ext?.kind ? (this.#mergeExtensionWithKinds([ext, kinds]) ?? ext) : ext))
            .sort(sortExtensions);
    }
    /**
     * Get an observable of extensions by types and a given filter method.
     * This will return the all extensions that matches the types and which filter method returns true.
     * The filter method will be called for each extension manifest of the given types, and the first argument to it is the extension manifest.
     * @param {Array<string>} types - The types of the extensions to get.
     * @param {(ext: ManifestBase) => boolean} filter - The filter method to use to filter the extensions
     * @returns {Observable<Array<ManifestBase>>} - An observable of the extensions that matches the type and filter method
     */
    byTypesAndFilter(types, filter) {
        return combineLatest([
            this.extensions.pipe(map((exts) => exts.filter((ext) => types.indexOf(ext.type) !== -1 && filter(ext))), distinctUntilChanged(extensionArrayMemoization)),
            this.#kindsOfTypes(types),
        ]).pipe(map(this.#mergeExtensionsWithKinds), distinctUntilChanged(extensionAndKindMatchArrayMemoization));
    }
    /**
     * Get an observable that provides extensions matching the given type.
     * @param {string} type - The type of the extensions to get.
     * @returns {Observable<ManifestBase | undefined>} - An observable of the extensions that matches the type.
     */
    byType(type) {
        return combineLatest([this.#extensionsOfType(type), this.#kindsOfType(type)]).pipe(map(this.#mergeExtensionsWithKinds), distinctUntilChanged(extensionAndKindMatchArrayMemoization));
    }
    /**
     * Get all extensions that matches the given extension type.
     * @param {string} type  - The type of the extension to get.
     * @returns {ManifestBase | undefined} - The extension manifest that matches the alias.
     */
    getByType(type) {
        const exts = this._extensions.getValue().filter((ext) => ext.type === type);
        if (exts.length === 0) {
            return [];
        }
        const kinds = this._kinds.getValue();
        return exts
            .map((ext) => (ext?.kind ? (this.#mergeExtensionWithKinds([ext, kinds]) ?? ext) : ext))
            .sort(sortExtensions);
    }
    /**
     * Get an observable that provides extensions matching given types.
     * @param {Array<string>} types - The types of the extensions to get.
     * @returns {Observable<ManifestBase | undefined>} - An observable of the extensions that matches the types.
     */
    byTypes(types) {
        return combineLatest([this.#extensionsOfTypes(types), this.#kindsOfTypes(types)]).pipe(map(this.#mergeExtensionsWithKinds), distinctUntilChanged(extensionAndKindMatchArrayMemoization));
    }
    /**
     * Append a new condition to an existing extension
     * Useful to add a condition for example the Save And Publish workspace action shipped by core.
     * @param {string} alias - The alias of the extension to append the condition to.
     * @param  {UmbConditionConfigBase} newCondition - The condition to append to the extension.
     */
    appendCondition(alias, newCondition) {
        this.appendConditions(alias, [newCondition]);
    }
    /**
     * Appends an array of conditions to an existing extension
     * @param {string} alias  - The alias of the extension to append the condition to
     * @param {Array<UmbConditionConfigBase>} newConditions  - An array of conditions to be appended to an extension manifest.
     */
    appendConditions(alias, newConditions) {
        const existingConditionsToBeAdded = this.#additionalConditions.get(alias);
        this.#additionalConditions.set(alias, existingConditionsToBeAdded ? [...existingConditionsToBeAdded, ...newConditions] : newConditions);
        const allExtensions = [...this._extensions.getValue()];
        for (const extension of allExtensions) {
            if (extension.alias === alias) {
                // Replace the existing extension with the updated one
                allExtensions[allExtensions.indexOf(extension)] = this.#appendAdditionalConditions(extension);
                // Update the main extensions collection/observable
                this._extensions.setValue(allExtensions);
                //Stop the search:
                break;
            }
        }
    }
}
