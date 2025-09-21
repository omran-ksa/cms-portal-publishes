import { UmbContextProviderController } from './context-provider.controller.js';
import { UmbControllerHostElementMixin } from '@umbraco-cms/backoffice/controller-api';
/**
 * Provides a value to the context down the DOM tree.
 * @remarks This element is a wrapper around the `provideContext` function.
 * @slot - The context will be available to all descendants given in the default slot.
 * @throws {Error} If the key property is not set.
 * @throws {Error} If the value property is not set.
 */
export class UmbContextProviderElement extends UmbControllerHostElementMixin(HTMLElement) {
    static get observedAttributes() {
        return ['value', 'key'];
    }
    attributeChangedCallback(name, _oldValue, newValue) {
        if (name === 'key') {
            this.key = newValue;
        }
        else if (name === 'value') {
            this.value = newValue;
        }
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const slot = document.createElement('slot');
        this.shadowRoot?.appendChild(slot);
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.key) {
            throw new Error('The key property is required.');
        }
        if (this.create) {
            this.value = this.create(this);
        }
        else if (!this.value) {
            throw new Error('The value property is required.');
        }
        new UmbContextProviderController(this, this.key, this.value);
    }
}
customElements.define('umb-context-provider', UmbContextProviderElement);
