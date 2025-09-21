var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UMB_INSTALLER_CONTEXT } from '../installer.context.js';
import { css, html, customElement, state, unsafeHTML } from '@umbraco-cms/backoffice/external/lit';
import { TelemetryLevelModel } from '@umbraco-cms/backoffice/external/backend-api';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
let UmbInstallerConsentElement = class UmbInstallerConsentElement extends UmbLitElement {
    constructor() {
        super();
        this._telemetryLevels = [];
        this.consumeContext(UMB_INSTALLER_CONTEXT, (installerContext) => {
            this._installerContext = installerContext;
            this._observeInstallerSettings();
            this._observeInstallerData();
        });
    }
    _observeInstallerSettings() {
        if (!this._installerContext)
            return;
        this.observe(this._installerContext.settings, (settings) => {
            this._telemetryLevels = settings?.user?.consentLevels ?? [];
        });
    }
    _observeInstallerData() {
        if (!this._installerContext)
            return;
        this.observe(this._installerContext.data, (data) => {
            this._telemetryFormData = data.telemetryLevel;
        });
    }
    _handleChange(e) {
        const target = e.target;
        const value = {};
        value[target.name] = this._telemetryLevels[parseInt(target.value) - 1].level ?? TelemetryLevelModel.DETAILED;
        this._installerContext?.appendData(value);
    }
    _onNext() {
        this._installerContext?.nextStep();
    }
    _onBack() {
        this._installerContext?.prevStep();
    }
    get _selectedTelemetryIndex() {
        return this._telemetryLevels?.findIndex((x) => x.level === this._telemetryFormData) ?? 0;
    }
    get _selectedTelemetry() {
        return this._telemetryLevels?.find((x) => x.level === this._telemetryFormData) ?? this._telemetryLevels[0];
    }
    _renderSlider() {
        if (!this._telemetryLevels || this._telemetryLevels.length < 1)
            return;
        return html `
			<uui-slider
				@input=${this._handleChange}
				name="telemetryLevel"
				label="telemetry-level"
				value=${this._selectedTelemetryIndex + 1}
				hide-step-values
				min="1"
				max=${this._telemetryLevels.length}></uui-slider>
			<h2>${this._selectedTelemetry.level}</h2>
			<p>${unsafeHTML(this._selectedTelemetry.description)}</p>
		`;
    }
    render() {
        return html `
			<div id="container" class="uui-text" data-test="installer-telemetry">
				<h1>Consent for telemetry data</h1>
				${this._renderSlider()}
				<div id="buttons">
					<uui-button label="Back" @click=${this._onBack} look="secondary"></uui-button>
					<uui-button id="button-install" @click=${this._onNext} label="Next" look="primary"></uui-button>
				</div>
			</div>
		`;
    }
    static { this.styles = [
        css `
			:host,
			#container {
				display: flex;
				flex-direction: column;
				height: 100%;
			}

			uui-form {
				height: 100%;
			}

			form {
				height: 100%;
				display: flex;
				flex-direction: column;
			}

			h1 {
				text-align: center;
				margin-bottom: var(--uui-size-layout-3);
			}

			#buttons {
				display: flex;
				margin-top: auto;
			}

			#button-install {
				margin-left: auto;
				min-width: 120px;
			}
		`,
    ]; }
};
__decorate([
    state()
], UmbInstallerConsentElement.prototype, "_telemetryLevels", void 0);
__decorate([
    state()
], UmbInstallerConsentElement.prototype, "_telemetryFormData", void 0);
UmbInstallerConsentElement = __decorate([
    customElement('umb-installer-consent')
], UmbInstallerConsentElement);
export { UmbInstallerConsentElement };
