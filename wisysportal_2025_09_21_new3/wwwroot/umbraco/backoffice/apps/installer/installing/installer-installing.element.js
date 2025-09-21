var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement, customElement } from '@umbraco-cms/backoffice/external/lit';
let UmbInstallerInstallingElement = class UmbInstallerInstallingElement extends LitElement {
    render() {
        return html ` <div class="uui-text" data-test="installer-installing">
			<h1 class="uui-h3">Installing Umbraco</h1>
			<uui-loader-bar></uui-loader-bar>
		</div>`;
    }
    static { this.styles = [
        css `
			h1 {
				text-align: center;
			}
		`,
    ]; }
};
UmbInstallerInstallingElement = __decorate([
    customElement('umb-installer-installing')
], UmbInstallerInstallingElement);
export { UmbInstallerInstallingElement };
