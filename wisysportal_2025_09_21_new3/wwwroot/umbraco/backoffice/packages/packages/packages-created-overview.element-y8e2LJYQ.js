import { when as q, html as u, repeat as E, nothing as v, css as O, state as d, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { umbConfirmModal as M } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { UmbPackageRepository as R } from "@umbraco-cms/backoffice/package";
var S = Object.defineProperty, A = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, h = (e, t, a, c) => {
  for (var s = c > 1 ? void 0 : c ? A(t, a) : t, p = e.length - 1, _; p >= 0; p--)
    (_ = e[p]) && (s = (c ? _(t, a, s) : _(s)) || s);
  return c && s && S(t, a, s), s;
}, P = (e, t, a) => t.has(e) || k("Cannot " + a), o = (e, t, a) => (P(e, t, "read from private field"), t.get(e)), f = (e, t, a) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), r = (e, t, a) => (P(e, t, "access private method"), a), l, g, i, m, b, y, w, $, C, x, z;
let n = class extends W {
  constructor() {
    super(), f(this, i), f(this, l, 10), this._loading = !0, this._createdPackages = [], this._currentPage = 1, f(this, g, new R(this)), r(this, i, m).call(this);
  }
  render() {
    return u`
			<uui-button
				look="primary"
				href="section/packages/view/created/package-builder"
				label=${this.localize.term("packager_createPackage")}></uui-button>
			${q(
      this._loading,
      () => u`<div class="container"><uui-loader></uui-loader></div>`,
      () => r(this, i, w).call(this)
    )}
			${r(this, i, z).call(this)}
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
m = async function() {
  const e = this._currentPage * o(this, l) - o(this, l), t = await o(this, g).getCreatedPackages({ skip: e, take: o(this, l) });
  t && (this._createdPackages = t.items, this._total = t.total), this._loading = !1;
};
b = function(e) {
  this._currentPage !== e.target.current && (this._currentPage = e.target.current, r(this, i, m).call(this));
};
y = async function(e) {
  if (!e.unique || (await M(this, {
    color: "danger",
    headline: `Remove ${e.name}?`,
    content: "Are you sure you want to delete this package",
    confirmLabel: this.localize.term("general_delete")
  }), !await o(this, g).deleteCreatedPackage(e.unique))) return;
  const a = this._createdPackages.findIndex((c) => c.unique === e.unique);
  this._createdPackages.splice(a, 1), this.requestUpdate();
};
w = function() {
  return this._createdPackages.length ? u`
			<uui-box headline="Created packages" style="--uui-box-default-padding:0;">
				<uui-ref-list>
					${E(
    this._createdPackages,
    (e) => e.unique,
    (e) => r(this, i, C).call(this, e)
  )}
				</uui-ref-list>
			</uui-box>
		` : r(this, i, $).call(this);
};
$ = function() {
  return u`<h2 class="no-packages">${this.localize.term("packager_noPackagesCreated")}</h2>`;
};
C = function(e) {
  return u`
			<uui-ref-node-package name=${e.name} @open=${() => r(this, i, x).call(this, e)}>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => r(this, i, y).call(this, e)}
						label=${this.localize.term("general_delete")}></uui-button>
				</uui-action-bar>
			</uui-ref-node-package>
		`;
};
x = function(e) {
  e.unique && window.history.pushState({}, "", `section/packages/view/created/package-builder/${e.unique}`);
};
z = function() {
  if (!this._total) return v;
  const e = Math.ceil(this._total / o(this, l));
  return e <= 1 ? v : u`
			<div class="container">
				<uui-pagination 
				.total=${e} 
				firstlabel=${this.localize.term("general_first")}
                previouslabel=${this.localize.term("general_previous")}
                nextlabel=${this.localize.term("general_next")}
                lastlabel=${this.localize.term("general_last")}
				@change=${r(this, i, b)}></uui-pagination>
			</div>
		`;
};
n.styles = [
  O`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}
			uui-box {
				margin: var(--uui-size-space-5) 0;
				padding-bottom: var(--uui-size-space-1);
			}

			.no-packages {
				display: flex;
				justify-content: space-around;
			}
			uui-pagination {
				display: inline-block;
			}

			.container {
				display: flex;
				justify-content: center;
			}
		`
];
h([
  d()
], n.prototype, "_loading", 2);
h([
  d()
], n.prototype, "_createdPackages", 2);
h([
  d()
], n.prototype, "_currentPage", 2);
h([
  d()
], n.prototype, "_total", 2);
n = h([
  U("umb-packages-created-overview")
], n);
const B = n;
export {
  n as UmbPackagesCreatedOverviewElement,
  B as default
};
//# sourceMappingURL=packages-created-overview.element-y8e2LJYQ.js.map
