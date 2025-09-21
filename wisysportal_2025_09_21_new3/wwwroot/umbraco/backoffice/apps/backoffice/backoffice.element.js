var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UmbBackofficeContext } from './backoffice.context.js';
import { css, html, customElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbBackofficeEntryPointExtensionInitializer, UmbEntryPointExtensionInitializer, umbExtensionsRegistry, } from '@umbraco-cms/backoffice/extension-registry';
import { UmbServerExtensionRegistrator } from '@umbraco-cms/backoffice/extension-api';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UMB_AUTH_CONTEXT } from '@umbraco-cms/backoffice/auth';
import './components/index.js';
const CORE_PACKAGES = [
    import('../../packages/block/umbraco-package.js'),
    import('../../packages/clipboard/umbraco-package.js'),
    import('../../packages/code-editor/umbraco-package.js'),
    import('../../packages/data-type/umbraco-package.js'),
    import('../../packages/dictionary/umbraco-package.js'),
    import('../../packages/documents/umbraco-package.js'),
    import('../../packages/embedded-media/umbraco-package.js'),
    import('../../packages/extension-insights/umbraco-package.js'),
    import('../../packages/health-check/umbraco-package.js'),
    import('../../packages/help/umbraco-package.js'),
    import('../../packages/language/umbraco-package.js'),
    import('../../packages/log-viewer/umbraco-package.js'),
    import('../../packages/markdown-editor/umbraco-package.js'),
    import('../../packages/media/umbraco-package.js'),
    import('../../packages/members/umbraco-package.js'),
    import('../../packages/models-builder/umbraco-package.js'),
    import('../../packages/multi-url-picker/umbraco-package.js'),
    import('../../packages/packages/umbraco-package.js'),
    import('../../packages/performance-profiling/umbraco-package.js'),
    import('../../packages/property-editors/umbraco-package.js'),
    import('../../packages/publish-cache/umbraco-package.js'),
    import('../../packages/relations/umbraco-package.js'),
    import('../../packages/rte/umbraco-package.js'),
    import('../../packages/search/umbraco-package.js'),
    import('../../packages/settings/umbraco-package.js'),
    import('../../packages/static-file/umbraco-package.js'),
    import('../../packages/sysinfo/umbraco-package.js'),
    import('../../packages/tags/umbraco-package.js'),
    import('../../packages/telemetry/umbraco-package.js'),
    import('../../packages/templating/umbraco-package.js'),
    import('../../packages/tiptap/umbraco-package.js'),
    import('../../packages/translation/umbraco-package.js'),
    import('../../packages/ufm/umbraco-package.js'),
    import('../../packages/umbraco-news/umbraco-package.js'),
    import('../../packages/user/umbraco-package.js'),
    import('../../packages/webhook/umbraco-package.js'),
    import('../../packages/content/umbraco-package.js'),
];
let UmbBackofficeElement = class UmbBackofficeElement extends UmbLitElement {
    constructor() {
        super();
        /**
         * Backoffice extension registry.
         * This enables to register and unregister extensions via DevTools, or just via querying this element via the DOM.
         */
        this.extensionRegistry = umbExtensionsRegistry;
        new UmbBackofficeContext(this);
        new UmbBackofficeEntryPointExtensionInitializer(this, umbExtensionsRegistry);
        new UmbEntryPointExtensionInitializer(this, umbExtensionsRegistry);
    }
    async firstUpdated() {
        await this.#extensionsAfterAuth();
        // So far local packages are this simple to register, so no need for a manager to do that:
        CORE_PACKAGES.forEach(async (packageImport) => {
            const packageModule = await packageImport;
            umbExtensionsRegistry.registerMany(packageModule.extensions);
        });
    }
    async #extensionsAfterAuth() {
        const authContext = await this.getContext(UMB_AUTH_CONTEXT, { preventTimeout: true });
        if (!authContext) {
            throw new Error('UmbBackofficeElement requires the UMB_AUTH_CONTEXT to be set.');
        }
        await this.observe(authContext.isAuthorized).asPromise();
        await new UmbServerExtensionRegistrator(this, umbExtensionsRegistry).registerPrivateExtensions();
    }
    render() {
        return html `
			<umb-backoffice-header></umb-backoffice-header>
			<umb-backoffice-main></umb-backoffice-main>
			<slot></slot>
		`;
    }
    static { this.styles = [
        css `
			:host {
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
				color: var(--uui-color-text);
				font-size: 14px;
				box-sizing: border-box;
			}
		`,
    ]; }
};
UmbBackofficeElement = __decorate([
    customElement('umb-backoffice')
], UmbBackofficeElement);
export { UmbBackofficeElement };
export default UmbBackofficeElement;
