var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UMB_INSTALLER_CONTEXT } from '../installer.context.js';
import { css, html, customElement, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
let UmbInstallerUserElement = class UmbInstallerUserElement extends UmbLitElement {
    #installerContext;
    constructor() {
        super();
        this._minimumPasswordLength = 10;
        this._handleSubmit = (e) => {
            e.preventDefault();
            const form = e.target;
            if (!form)
                return;
            const isValid = form.checkValidity();
            if (!isValid)
                return;
            const formData = new FormData(form);
            const name = formData.get('name');
            const password = formData.get('password');
            const email = formData.get('email');
            const subscribeToNewsletter = formData.has('subscribeToNewsletter');
            this.#installerContext?.appendData({ user: { name, password, email, subscribeToNewsletter } });
            this.#installerContext?.nextStep();
        };
        this.consumeContext(UMB_INSTALLER_CONTEXT, (installerContext) => {
            this.#installerContext = installerContext;
            this._observeInstallerData();
        });
    }
    _observeInstallerData() {
        if (!this.#installerContext)
            return;
        this.observe(this.#installerContext.data, ({ user }) => {
            this._userFormData = {
                name: user.name,
                password: user.password,
                email: user.email,
                subscribeToNewsletter: user.subscribeToNewsletter ?? false,
            };
        });
        this.observe(this.#installerContext.settings, (settings) => {
            this._minimumPasswordLength = settings?.user.minCharLength ?? this._minimumPasswordLength;
        });
    }
    render() {
        return html ` <div id="container" class="uui-text" data-test="installer-user">
			<h1>Install Umbraco</h1>
			<uui-form>
				<form id="LoginForm" name="login" @submit="${this._handleSubmit}">
					<uui-form-layout-item>
						<uui-label id="nameLabel" for="name" slot="label" required>Name</uui-label>
						<uui-input
							type="text"
							id="name"
							.value=${this._userFormData?.name}
							name="name"
							label="name"
							required
							required-message="Name is required"></uui-input>
					</uui-form-layout-item>

					<uui-form-layout-item>
						<uui-label id="emailLabel" for="email" slot="label" required>Email</uui-label>
						<uui-input
							type="email"
							id="email"
							.value=${this._userFormData?.email}
							name="email"
							label="email"
							required
							required-message="Email is required"></uui-input>
					</uui-form-layout-item>

					<uui-form-layout-item>
						<uui-label id="passwordLabel" for="password" slot="label" required>Password</uui-label>
						<uui-input-password
							id="password"
							name="password"
							label="password"
							minlength=${this._minimumPasswordLength}
							.value=${this._userFormData?.password}
							required
							required-message="Password is required"></uui-input-password>
					</uui-form-layout-item>

					<uui-form-layout-item id="news-checkbox">
						<uui-checkbox
							name="subscribeToNewsletter"
							label="Remember me"
							.checked=${this._userFormData?.subscribeToNewsletter || false}>
							Keep me updated on Umbraco Versions, Security Bulletins and Community News
						</uui-checkbox>
					</uui-form-layout-item>

					<div id="buttons">
						<uui-button id="button-install" type="submit" label="Next" look="primary"></uui-button>
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

			uui-form-layout-item {
				margin-top: 0;
				margin-bottom: var(--uui-size-layout-1);
			}

			uui-form {
				height: 100%;
			}

			form {
				height: 100%;
				display: flex;
				flex-direction: column;
			}

			uui-input,
			uui-input-password {
				width: 100%;
			}

			h1 {
				text-align: center;
				margin-bottom: var(--uui-size-layout-3);
			}

			#news-checkbox {
				margin-top: var(--uui-size-space-4);
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
], UmbInstallerUserElement.prototype, "_userFormData", void 0);
__decorate([
    state()
], UmbInstallerUserElement.prototype, "_minimumPasswordLength", void 0);
UmbInstallerUserElement = __decorate([
    customElement('umb-installer-user')
], UmbInstallerUserElement);
export { UmbInstallerUserElement };
