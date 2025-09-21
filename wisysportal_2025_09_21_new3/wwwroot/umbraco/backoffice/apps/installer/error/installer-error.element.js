var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UMB_INSTALLER_CONTEXT } from '../installer.context.js';
import { css, html, nothing, customElement, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
let UmbInstallerErrorElement = class UmbInstallerErrorElement extends UmbLitElement {
    connectedCallback() {
        super.connectedCallback();
        this.consumeContext(UMB_INSTALLER_CONTEXT, (installerContext) => {
            this._installerContext = installerContext;
            this._observeInstallStatus();
        });
    }
    _observeInstallStatus() {
        if (!this._installerContext)
            return;
        this.observe(this._installerContext.installStatusChanges(), (status) => {
            if (status) {
                this._error = status;
            }
        });
    }
    _handleSubmit(e) {
        e.preventDefault();
        this._installerContext?.reset();
    }
    _renderError(error) {
        return html `
			<p>Description: ${error.title}</p>
			${error.errors ? this._renderErrors(error.errors) : nothing}
			<hr />
			<h3>Details:</h3>
			<p id="error-message" data-test="error-message">${error.detail ?? 'Unknown error'}</p>
		`;
    }
    _renderErrors(errors) {
        return html `
			<h3>Errors:</h3>
			<ul>
				${Object.keys(errors).map((key) => html ` <li>${key}: ${errors[key].join(', ')}</li> `)}
			</ul>
		`;
    }
    render() {
        return html ` <div id="container" class="uui-text" data-test="installer-error">
			<uui-form>
				<form id="installer-form" @submit="${this._handleSubmit}">
					<h2>Something went wrong:</h2>
					${this._error ? this._renderError(this._error) : nothing}
					<div id="buttons">
						<uui-button
							id="button-reset"
							type="submit"
							label="Go back and try again"
							look="primary"
							color="positive"></uui-button>
					</div>
				</form>
			</uui-form>
		</div>`;
    }
    static { this.styles = [
        css `
			:host,
			#container {
				display: flex;
				flex-direction: column;
				height: 100%;
			}

			h1 {
				text-align: center;
			}

			#error-message {
				color: var(--uui-color-danger, #d42054);
			}
		`,
    ]; }
};
__decorate([
    state()
], UmbInstallerErrorElement.prototype, "_error", void 0);
UmbInstallerErrorElement = __decorate([
    customElement('umb-installer-error')
], UmbInstallerErrorElement);
export { UmbInstallerErrorElement };
