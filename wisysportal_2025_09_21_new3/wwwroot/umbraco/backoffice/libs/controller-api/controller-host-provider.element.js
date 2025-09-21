var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UmbControllerHostElementMixin } from './controller-host-element.mixin.js';
import { customElement } from '@umbraco-cms/backoffice/external/lit';
let UmbControllerHostProviderElement = class UmbControllerHostProviderElement extends UmbControllerHostElementMixin(HTMLElement) {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const slot = document.createElement('slot');
        this.shadowRoot?.appendChild(slot);
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.create) {
            this.create(this);
        }
    }
};
UmbControllerHostProviderElement = __decorate([
    customElement('umb-controller-host-provider')
], UmbControllerHostProviderElement);
export { UmbControllerHostProviderElement };
