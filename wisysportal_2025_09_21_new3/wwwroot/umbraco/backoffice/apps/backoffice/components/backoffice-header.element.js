var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, customElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
let UmbBackofficeHeaderElement = class UmbBackofficeHeaderElement extends UmbLitElement {
    render() {
        return html `
			<div id="appHeader">
				<umb-backoffice-header-logo></umb-backoffice-header-logo>
				<umb-backoffice-header-sections></umb-backoffice-header-sections>
				<umb-backoffice-header-apps></umb-backoffice-header-apps>
			</div>
		`;
    }
    static { this.styles = [
        css `
			:host {
				width: 100%;
			}

			#appHeader {
				background-color: var(--umb-header-background-color, var(--uui-color-header-surface));
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 var(--uui-size-space-5);
			}

			umb-backoffice-header-sections {
				flex: 1 1 auto;
			}
		`,
    ]; }
};
UmbBackofficeHeaderElement = __decorate([
    customElement('umb-backoffice-header')
], UmbBackofficeHeaderElement);
export { UmbBackofficeHeaderElement };
