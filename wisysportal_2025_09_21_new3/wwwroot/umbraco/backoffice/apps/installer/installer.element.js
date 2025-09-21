var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UmbInstallerContext } from './installer.context.js';
import { html, customElement, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import './consent/installer-consent.element.js';
import './database/installer-database.element.js';
import './error/installer-error.element.js';
import './installing/installer-installing.element.js';
import './shared/layout/installer-layout.element.js';
import './user/installer-user.element.js';
let UmbInstallerElement = class UmbInstallerElement extends UmbLitElement {
    constructor() {
        super(...arguments);
        this.step = 1;
        this._umbInstallerContext = new UmbInstallerContext(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this._observeCurrentStep();
    }
    _observeCurrentStep() {
        this.observe(this._umbInstallerContext.currentStepChanges(), (step) => {
            this.step = step;
        });
        this.observe(this._umbInstallerContext.installStatusChanges(), (error) => {
            if (error) {
                this.step = 5;
            }
        });
    }
    _renderSection() {
        switch (this.step) {
            case 2:
                return html `<umb-installer-consent></umb-installer-consent>`;
            case 3:
                return html `<umb-installer-database></umb-installer-database>`;
            case 4:
                return html `<umb-installer-installing></umb-installer-installing>`;
            case 5:
                return html `<umb-installer-error></umb-installer-error>`;
            default:
                return html `<umb-installer-user></umb-installer-user>`;
        }
    }
    render() {
        return html `<umb-installer-layout data-test="installer">${this._renderSection()}</umb-installer-layout> `;
    }
};
__decorate([
    state()
], UmbInstallerElement.prototype, "step", void 0);
UmbInstallerElement = __decorate([
    customElement('umb-installer')
], UmbInstallerElement);
export { UmbInstallerElement };
export default UmbInstallerElement;
