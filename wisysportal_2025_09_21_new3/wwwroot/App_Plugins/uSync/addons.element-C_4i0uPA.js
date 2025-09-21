import { UmbElementMixin as a } from "@umbraco-cms/backoffice/element-api";
import { LitElement as r, html as l, css as d, customElement as v } from "@umbraco-cms/backoffice/external/lit";
var m = Object.defineProperty, p = Object.getOwnPropertyDescriptor, g = (c, i, t, o) => {
  for (var e = o > 1 ? void 0 : o ? p(i, t) : i, u = c.length - 1, s; u >= 0; u--)
    (s = c[u]) && (e = (o ? s(i, t, e) : s(e)) || e);
  return o && e && m(i, t, e), e;
};
const h = "/App_Plugins/uSync/img/usync-complete.png";
let n = class extends a(r) {
  render() {
    return l`
			<umb-body-layout>
				<div class="addon-view">
					<div>
						<div class="header">
							<img src=${h} />
							<h1>uSync Complete</h1>
							<p>
								uSync Complete gives you total control over your Umbraco settings and
								content.
							</p>
						</div>

						<div class="logos">
							<div class="logo">
								<uui-icon name="icon-shift"></uui-icon>
								<h4>publish</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-compress"></uui-icon>
								<h4>export</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-connection"></uui-icon>
								<h4>snapshot</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-undo"></uui-icon>
								<h4>restore</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-operator"></uui-icon>
								<h4>people</h4>
							</div>
						</div>

						<div class="cta">
							<uui-button
								href="https://jumoo.co.uk/uSync/complete/"
								target="_blank"
								color="positive"
								look="primary"
								label="Find out more"></uui-button>
						</div>
					</div>
				</div>
			</umb-body-layout>
		`;
  }
};
n.styles = d`
		umb-body-layout {
			// background: linear-gradient(#e3e3f1,#f6f4f4);
			background: linear-gradient(var(--uui-color-background), var(--uui-color-border));
		}

		.addon-view {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}

		.addon-view > div {
			margin-top: -15vh;
		}

		.header,
		.cta {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.header {
			font-size: larger;
			margin-bottom: var(--uui-size-space-6);
		}

		.logos {
			display: flex;
			justify-content: space-between;
			font-size: var(--uui-type-h3-size);
		}

		.logo {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: var(--uui-size-space-2) var(--uui-size-space-6);
			color: var(--uui-color-text-alt);
		}

		.cta {
			margin: var(--uui-size-space-6) 0;
		}

		uui-button {
			font-size: var(--uui-type-h4-size);
		}
	`;
n = g([
  v("usync-addons-view")
], n);
const b = n;
export {
  b as default,
  n as uSyncAddOnsElement
};
//# sourceMappingURL=addons.element-C_4i0uPA.js.map
