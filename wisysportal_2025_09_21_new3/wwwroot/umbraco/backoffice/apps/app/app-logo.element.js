var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, nothing, property, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UMB_SERVER_CONTEXT } from '@umbraco-cms/backoffice/server';
import { UMB_THEME_CONTEXT } from '@umbraco-cms/backoffice/themes';
let UmbAppLogoElement = class UmbAppLogoElement extends UmbLitElement {
    constructor() {
        super();
        /**
         * The loading attribute of the image.
         * @type {'lazy' | 'eager'}
         * @default 'eager'
         */
        this.loading = 'lazy';
        /**
         * The type of logo to display. Mark will display the mark logo, and logo will display the full logo with text.
         * @type {'mark' | 'logo'}
         * @default 'mark'
         */
        this.logoType = 'mark';
        this.consumeContext(UMB_SERVER_CONTEXT, (instance) => {
            this._serverUrl = instance?.getServerUrl();
        });
        this.consumeContext(UMB_THEME_CONTEXT, (context) => {
            this.observe(context?.theme, (theme) => {
                this._theme = theme;
            }, '_observeTheme');
        });
    }
    /**
     * Do not use shadow DOM for this element.
     * @returns {this} The element instance.
     */
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this._serverUrl) {
            return nothing;
        }
        /**
         * This is a temporary solution until we have a better way to define the logo characteristics.
         * TODO: The characteristics of the logo are not defined in any theme meta data, so we have to hardcode the logo file names.
         */
        let logoFile = (this.overrideTheme ?? this._theme) === 'umb-dark-theme' ? 'logo' : 'logo-alternative';
        if (this.logoType === 'logo') {
            logoFile = `login-${logoFile}`;
        }
        const logoUrl = `${this._serverUrl}/umbraco/management/api/v1/security/back-office/graphics/${logoFile}`;
        return html `<img src=${logoUrl} aria-hidden="true" loading=${this.loading} alt="logo" />`;
    }
};
__decorate([
    property()
], UmbAppLogoElement.prototype, "loading", void 0);
__decorate([
    property({ type: String, attribute: 'logo-type' })
], UmbAppLogoElement.prototype, "logoType", void 0);
__decorate([
    property({ attribute: 'override-theme' })
], UmbAppLogoElement.prototype, "overrideTheme", void 0);
__decorate([
    state()
], UmbAppLogoElement.prototype, "_serverUrl", void 0);
__decorate([
    state()
], UmbAppLogoElement.prototype, "_theme", void 0);
UmbAppLogoElement = __decorate([
    customElement('umb-app-logo')
], UmbAppLogoElement);
export { UmbAppLogoElement };
