var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UMB_MARK_ATTRIBUTE_NAME } from '@umbraco-cms/backoffice/const';
import { css, customElement, html } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
let UmbBackofficeHeaderAppsElement = class UmbBackofficeHeaderAppsElement extends UmbLitElement {
    render() {
        return html `
			<umb-extension-slot
				id="apps"
				type="headerApp"
				data-mark="header-apps"
				.renderMethod=${this.#extensionSlotRenderMethod}></umb-extension-slot>
		`;
    }
    #extensionSlotRenderMethod = (ext) => {
        if (ext.component) {
            ext.component.setAttribute(UMB_MARK_ATTRIBUTE_NAME, 'header-app:' + ext.manifest?.alias);
        }
        return ext.component;
    };
    static { this.styles = [
        css `
			#apps {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-2);
			}
		`,
    ]; }
};
UmbBackofficeHeaderAppsElement = __decorate([
    customElement('umb-backoffice-header-apps')
], UmbBackofficeHeaderAppsElement);
export { UmbBackofficeHeaderAppsElement };
