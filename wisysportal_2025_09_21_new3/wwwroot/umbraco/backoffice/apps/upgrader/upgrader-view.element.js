var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement, customElement, property, ifDefined } from '@umbraco-cms/backoffice/external/lit';
/**
 * @element umb-upgrader-view
 * @fires {CustomEvent<SubmitEvent>} onAuthorizeUpgrade - fires when the user clicks the continue button
 */
let UmbUpgraderViewElement = class UmbUpgraderViewElement extends LitElement {
    constructor() {
        super(...arguments);
        this.fetching = false;
        this.upgrading = false;
        this.errorMessage = '';
        this._handleSubmit = async (e) => {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('onAuthorizeUpgrade', { detail: e, bubbles: true }));
        };
    }
    _renderLayout() {
        return html `
				<h1>Upgrading Umbraco</h1>

				<p>
					Welcome to the Umbraco installer. You see this screen because your Umbraco installation needs a quick upgrade
					of its database and files, which will ensure your website is kept as fast, secure and up to date as possible.
				</p>

				<p>
					Detected current version <strong>${this.settings?.oldVersion}</strong> (${this.settings?.currentState}),
					which needs to be upgraded to <strong>${this.settings?.newVersion}</strong> (${this.settings?.newState}).
					To compare versions and read a report of changes between versions, use the View Report button below.
				</p>

				${this.settings?.reportUrl
            ? html `
								<p>
									<uui-button
										data-test="view-report-button"
										look="secondary"
										href="${this.settings.reportUrl}"
										target="_blank"
										label="View Report"></uui-button>
								</p>
							`
            : ''}

				<p>Simply click <strong>continue</strong> below to be guided through the rest of the upgrade.</p>

				<form id="authorizeUpgradeForm" @submit=${this._handleSubmit}>
					<p>
						<uui-button
							data-test="continue-button"
							id="authorizeUpgrade"
							type="submit"
							look="primary"
							color="positive"
							label="Continue"
							state=${ifDefined(this.upgrading ? 'waiting' : undefined)}></uui-button>
					</p>
				</form>

				${this._renderError()}
			</div>
		`;
    }
    _renderError() {
        return html `
			${this.errorMessage ? html `<p class="error" data-test="error-message">${this.errorMessage}</p>` : ''}
		`;
    }
    render() {
        return html ` ${this.fetching ? html `<div class="center"><uui-loader></uui-loader></div>` : this._renderLayout()} `;
    }
    static { this.styles = [
        css `
			.center {
				display: grid;
				place-items: center;
				height: 100vh;
			}
			.error {
				color: var(--uui-color-danger);
			}
		`,
    ]; }
};
__decorate([
    property({ type: Boolean })
], UmbUpgraderViewElement.prototype, "fetching", void 0);
__decorate([
    property({ type: Boolean })
], UmbUpgraderViewElement.prototype, "upgrading", void 0);
__decorate([
    property({ type: String })
], UmbUpgraderViewElement.prototype, "errorMessage", void 0);
__decorate([
    property({ type: Object, reflect: true })
], UmbUpgraderViewElement.prototype, "settings", void 0);
UmbUpgraderViewElement = __decorate([
    customElement('umb-upgrader-view')
], UmbUpgraderViewElement);
export { UmbUpgraderViewElement };
export default UmbUpgraderViewElement;
