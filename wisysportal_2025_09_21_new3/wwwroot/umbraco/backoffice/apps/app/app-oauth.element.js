var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, property } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import './app-error.element.js';
/**
 * A full page error element that can be used either solo or for instance as the error 500 page and BootFailed
 */
let UmbAppOauthElement = class UmbAppOauthElement extends UmbLitElement {
    constructor() {
        super(...arguments);
        /**
         * Set to true if the login failed. A message will be shown instead of the loader.
         * @attr
         */
        this.failure = false;
    }
    render() {
        // If we have a message, we show the error page
        // this is most likely happening inside a popup
        if (this.failure) {
            return html `<umb-app-error
				.errorHeadline=${this.localize.term('general_login')}
				.errorMessage=${this.localize.term('errors_externalLoginFailed')}
				hide-back-button></umb-app-error>`;
        }
        // If we don't have a message, we show the loader, this is most likely happening in the main app
        // for the normal login flow
        return html `
			<umb-body-layout id="loader" style="align-items:center;">
				<uui-loader></uui-loader>
			</umb-body-layout>
		`;
    }
};
__decorate([
    property({ type: Boolean })
], UmbAppOauthElement.prototype, "failure", void 0);
UmbAppOauthElement = __decorate([
    customElement('umb-app-oauth')
], UmbAppOauthElement);
export { UmbAppOauthElement };
export default UmbAppOauthElement;
