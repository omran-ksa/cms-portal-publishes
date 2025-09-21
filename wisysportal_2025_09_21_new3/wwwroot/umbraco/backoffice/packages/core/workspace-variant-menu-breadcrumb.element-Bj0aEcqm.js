import { b as g } from "./workspace.element-pzurGr3t.js";
import { ifDefined as W, html as k, css as x, state as v, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { UmbVariantId as P } from "@umbraco-cms/backoffice/variant";
import { UMB_APP_LANGUAGE_CONTEXT as $ } from "@umbraco-cms/backoffice/language";
import { UMB_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT as B } from "@umbraco-cms/backoffice/menu";
import { UMB_SECTION_CONTEXT as D } from "@umbraco-cms/backoffice/section";
var S = Object.defineProperty, I = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, m = (e, t, r, o) => {
  for (var u = o > 1 ? void 0 : o ? I(t, r) : t, d = e.length - 1, b; d >= 0; d--)
    (b = e[d]) && (u = (o ? b(t, r, u) : b(u)) || u);
  return o && u && S(t, r, u), u;
}, C = (e, t, r) => t.has(e) || A("Cannot " + r), i = (e, t, r) => (C(e, t, "read from private field"), t.get(e)), h = (e, t, r) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _ = (e, t, r, o) => (C(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (C(e, t, "access private method"), r), f, s, l, p, a, w, T, V, E, O, U;
let n = class extends y {
  constructor() {
    super(), h(this, a), this._name = "", this._structure = [], h(this, f), h(this, s), h(this, l), h(this, p), this.consumeContext($, (e) => {
      _(this, l, e), c(this, a, T).call(this);
    }), this.consumeContext(D, (e) => {
      _(this, f, e);
    }), this.consumeContext(g, (e) => {
      e && (_(this, s, e), c(this, a, V).call(this), c(this, a, w).call(this));
    }), this.consumeContext(B, (e) => {
      e && (_(this, p, e), c(this, a, w).call(this));
    });
  }
  render() {
    return k`
			<uui-breadcrumbs>
				${this._structure.map(
      (e) => k`<uui-breadcrumb-item href=${W(c(this, a, U).call(this, e))}
							>${this.localize.string(c(this, a, O).call(this, e))}</uui-breadcrumb-item
						>`
    )}
				<uui-breadcrumb-item last-item>${this._name}</uui-breadcrumb-item>
			</uui-breadcrumbs>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
w = function() {
  !i(this, p) || !i(this, s) || this.observe(i(this, p).structure, (e) => {
    if (!i(this, s)) return;
    const t = i(this, s).getUnique();
    this._structure = e.filter((r) => r.unique !== t);
  });
};
T = function() {
  this.observe(i(this, l)?.appDefaultLanguage, (e) => {
    this._appDefaultCulture = e?.unique;
  });
};
V = function() {
  this.observe(
    i(this, s)?.splitView.activeVariantsInfo,
    (e) => {
      e && (this._workspaceActiveVariantId = P.Create(e[0]), c(this, a, E).call(this));
    },
    "breadcrumbWorkspaceActiveVariantObserver"
  );
};
E = function() {
  this.observe(
    i(this, s)?.name(this._workspaceActiveVariantId),
    (e) => this._name = e || "",
    "breadcrumbWorkspaceNameObserver"
  );
};
O = function(e) {
  if (!this._workspaceActiveVariantId?.isInvariant()) {
    const r = e.variants.find((o) => this._workspaceActiveVariantId?.compare(o));
    if (r)
      return r.name;
  }
  const t = e.variants.find((r) => r.culture === this._appDefaultCulture);
  return t ? `(${t.name})` : e.variants?.[0]?.name ?? "(#general_unknown)";
};
U = function(e) {
  return e.isFolder ? void 0 : `${`section/${i(this, f)?.getPathname()}/workspace/${e.entityType}/edit`}/${e.unique}/${this._workspaceActiveVariantId?.culture}`;
};
n.styles = [
  N,
  x`
			:host {
				/* TODO: This is a temp solution to handle an issue where long nested breadcrumbs would hide workspace actions */
				overflow: hidden;
				display: flex;
				flex-direction: row-reverse;
				margin-left: var(--uui-size-layout-1);
			}
		`
];
m([
  v()
], n.prototype, "_name", 2);
m([
  v()
], n.prototype, "_structure", 2);
m([
  v()
], n.prototype, "_workspaceActiveVariantId", 2);
m([
  v()
], n.prototype, "_appDefaultCulture", 2);
n = m([
  M("umb-workspace-variant-menu-breadcrumb")
], n);
const H = n;
export {
  n as UmbWorkspaceVariantMenuBreadcrumbElement,
  H as default
};
//# sourceMappingURL=workspace-variant-menu-breadcrumb.element-Bj0aEcqm.js.map
