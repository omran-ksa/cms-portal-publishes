import { UmbControllerBase } from '@umbraco-cms/backoffice/class-api';
import { ReplaySubject } from '@umbraco-cms/backoffice/external/rxjs';
/**
 * Base class for extension initializers, which are responsible for loading and unloading extensions.
 */
export class UmbExtensionInitializerBase extends UmbControllerBase {
    #extensionMap;
    #loaded;
    constructor(host, extensionRegistry, manifestType) {
        super(host);
        this.#extensionMap = new Map();
        this.#loaded = new ReplaySubject(1);
        this.loaded = this.#loaded.asObservable();
        this.host = host;
        this.extensionRegistry = extensionRegistry;
        this.observe(extensionRegistry.byType(manifestType), async (extensions) => {
            this.#extensionMap.forEach((existingExt) => {
                if (!extensions.find((b) => b.alias === existingExt.alias)) {
                    this.unloadExtension(existingExt);
                    this.#extensionMap.delete(existingExt.alias);
                }
            });
            await Promise.all(extensions.map((extension) => {
                if (this.#extensionMap.has(extension.alias))
                    return;
                this.#extensionMap.set(extension.alias, extension);
                return this.instantiateExtension(extension);
            }));
            this.#loaded.next();
        });
    }
}
