import { a as U } from "./workspace.element-pzurGr3t.js";
import { map as W, ifDefined as S, html as C, css as x, state as E, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { UMB_MENU_STRUCTURE_WORKSPACE_CONTEXT as M } from "@umbraco-cms/backoffice/menu";
import { UMB_SECTION_CONTEXT as $ } from "@umbraco-cms/backoffice/section";
var g = Object.defineProperty, P = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, v = (e, t, r, c) => {
  for (var s = c > 1 ? void 0 : c ? P(t, r) : t, p = e.length - 1, f; p >= 0; p--)
    (f = e[p]) && (s = (c ? f(t, r, s) : f(s)) || s);
  return c && s && g(t, r, s), s;
}, b = (e, t, r) => t.has(e) || w("Cannot " + r), a = (e, t, r) => (b(e, t, "read from private field"), t.get(e)), m = (e, t, r) => t.has(e) ? w("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), l = (e, t, r, c) => (b(e, t, "write to private field"), t.set(e, r), r), h = (e, t, r) => (b(e, t, "access private method"), r), n, _, u, i, d, O, T;
let o = class extends N {
  constructor() {
    super(), m(this, i), this._name = "", this._structure = [], m(this, n), m(this, _), m(this, u), this.consumeContext($, (e) => {
      l(this, _, e);
    }), this.consumeContext(U, (e) => {
      l(this, n, e), h(this, i, d).call(this), h(this, i, O).call(this);
    }), this.consumeContext(M, (e) => {
      l(this, u, e), h(this, i, d).call(this);
    });
  }
  render() {
    return C`
			<uui-breadcrumbs>
				${W(
      this._structure,
      (e) => C`<uui-breadcrumb-item href=${S(h(this, i, T).call(this, e))}
							>${this.localize.string(e.name)}</uui-breadcrumb-item
						>`
    )}
				<uui-breadcrumb-item last-item>${this._name}</uui-breadcrumb-item>
			</uui-breadcrumbs>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
d = function() {
  if (!a(this, u) || !a(this, n)) return;
  const e = a(this, n).getIsNew();
  this.observe(
    a(this, u).structure,
    (t) => {
      this._structure = e ? t : t.slice(0, -1);
    },
    "menuStructureObserver"
  );
};
O = function() {
  this.observe(
    a(this, n)?.name,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (e) => this._name = e || "",
    "breadcrumbWorkspaceNameObserver"
  );
};
T = function(e) {
  if (!e.isFolder)
    return `section/${a(this, _)?.getPathname()}/workspace/${e.entityType}/edit/${e.unique}`;
};
o.styles = [
  k,
  x`
			:host {
				margin-left: var(--uui-size-layout-1);
			}
		`
];
v([
  E()
], o.prototype, "_name", 2);
v([
  E()
], o.prototype, "_structure", 2);
o = v([
  y("umb-workspace-breadcrumb")
], o);
const K = o;
export {
  o as UmbWorkspaceBreadcrumbElement,
  K as default
};
//# sourceMappingURL=workspace-menu-breadcrumb.element-Cau3NROw.js.map
