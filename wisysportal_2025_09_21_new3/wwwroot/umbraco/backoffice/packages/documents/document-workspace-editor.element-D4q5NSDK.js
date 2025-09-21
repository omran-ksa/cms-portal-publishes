import { i as j, g as A } from "./manifests-Z5g9mgXG.js";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
import { state as k, customElement as U, html as P, nothing as tt, repeat as et, ifDefined as st, css as R } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { s as it } from "./utils-DjhBxJtv.js";
import { DocumentVariantStateModel as l } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UmbWorkspaceSplitViewVariantSelectorElement as at } from "@umbraco-cms/backoffice/workspace";
import { UMB_APP_LANGUAGE_CONTEXT as rt } from "@umbraco-cms/backoffice/language";
var nt = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, G = (t) => {
  throw TypeError(t);
}, B = (t, e, s, a) => {
  for (var i = a > 1 ? void 0 : a ? ot(e, s) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (i = (a ? n(e, s, i) : n(i)) || i);
  return a && i && nt(e, s, i), i;
}, x = (t, e, s) => e.has(t) || G("Cannot " + s), H = (t, e, s) => (x(t, e, "read from private field"), e.get(t)), V = (t, e, s) => e.has(t) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), ht = (t, e, s, a) => (x(t, e, "write to private field"), e.set(t, s), s), $ = (t, e, s) => (x(t, e, "access private method"), s), S, O, d, F, q, z;
const ct = "umb-document-workspace-split-view-variant-selector";
let D = class extends at {
  constructor() {
    super(), V(this, d), this._variantSorter = it, this._variantsWithPendingChanges = [], V(this, S), V(this, O, {
      [l.DRAFT]: "content_unpublished",
      [l.PUBLISHED]: "content_published",
      // TODO: The pending changes state can be removed once the management Api removes this state
      // We only keep it here to make typescript happy
      // We should also make our own state model for this
      [l.PUBLISHED_PENDING_CHANGES]: "content_published",
      [l.NOT_CREATED]: "content_notCreated"
    }), this.consumeContext(j, (t) => {
      ht(this, S, t), $(this, d, F).call(this);
    });
  }
  _renderVariantDetails(t) {
    return P` ${$(this, d, z).call(this, t)}`;
  }
};
S = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
F = function() {
  this.observe(
    H(this, S)?.publishedPendingChanges.variantsWithChanges,
    (t) => {
      this._variantsWithPendingChanges = t || [];
    },
    "_observePendingChanges"
  );
};
q = function(t) {
  return this._variantsWithPendingChanges.some((e) => e.variantId.compare(t));
};
z = function(t) {
  let e = H(this, O)[t.variant?.state || l.NOT_CREATED];
  return (t.variant?.state === l.PUBLISHED || t.variant?.state === l.PUBLISHED_PENDING_CHANGES) && $(this, d, q).call(this, t) && (e = "content_publishedPendingChanges"), this.localize.term(e);
};
B([
  k()
], D.prototype, "_variantsWithPendingChanges", 2);
D = B([
  U(ct)
], D);
var pt = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, X = (t) => {
  throw TypeError(t);
}, M = (t, e, s, a) => {
  for (var i = a > 1 ? void 0 : a ? lt(e, s) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (i = (a ? n(e, s, i) : n(i)) || i);
  return a && i && pt(e, s, i), i;
}, _t = (t, e, s) => e.has(t) || X("Cannot " + s), ut = (t, e, s) => e.has(t) ? X("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), T = (t, e, s) => (_t(t, e, "access private method"), s), E, K, J;
let m = class extends L {
  constructor() {
    super(), ut(this, E), this.consumeContext(A, (t) => {
      this._workspaceContext = t, T(this, E, K).call(this), T(this, E, J).call(this);
    });
  }
  render() {
    return this._variants ? P`<div id="splitViews">
						${et(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => P`
								<umb-workspace-split-view
									.splitViewIndex=${t.index}
									.displayNavigation=${t.index === this._variants.length - 1}>
									<umb-icon slot="icon" name=${st(this._icon)}></umb-icon>
									<umb-document-workspace-split-view-variant-selector
										slot="variant-selector"></umb-document-workspace-split-view-variant-selector>
								</umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Document"></umb-workspace-footer>` : tt;
  }
};
E = /* @__PURE__ */ new WeakSet();
K = function() {
  this.observe(
    this._workspaceContext?.splitView.activeVariantsInfo,
    (t) => {
      this._variants = t;
    },
    "_observeActiveVariantsInfo"
  );
};
J = function() {
  this.observe(this._workspaceContext?.contentTypeIcon, (t) => {
    this._icon = t ?? void 0;
  });
};
m.styles = [
  I,
  R`
			:host {
				width: 100%;
				height: 100%;

				display: flex;
				flex: 1;
				flex-direction: column;
			}

			#splitViews {
				display: flex;
				width: 100%;
				height: calc(100% - var(--umb-footer-layout-height));
			}

			#breadcrumbs {
				margin: 0 var(--uui-size-layout-1);
			}
		`
];
M([
  k()
], m.prototype, "_variants", 2);
M([
  k()
], m.prototype, "_icon", 2);
m = M([
  U("umb-document-workspace-split-view")
], m);
var vt = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, Q = (t) => {
  throw TypeError(t);
}, Y = (t, e, s, a) => {
  for (var i = a > 1 ? void 0 : a ? mt(e, s) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (i = (a ? n(e, s, i) : n(i)) || i);
  return a && i && vt(e, s, i), i;
}, N = (t, e, s) => e.has(t) || Q("Cannot " + s), r = (t, e, s) => (N(t, e, "read from private field"), e.get(t)), p = (t, e, s) => e.has(t) ? Q("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), v = (t, e, s, a) => (N(t, e, "write to private field"), e.set(t, s), s), f = (t, e, s) => (N(t, e, "access private method"), s), C, h, u, w, c, W, _, y, b;
let g = class extends L {
  constructor() {
    super(), p(this, _), this.splitViewElement = new m(), p(this, C), p(this, h), p(this, u), p(this, w), p(this, c), p(this, W, !1), this._gotWorkspaceRoute = (t) => {
      v(this, u, t.target.absoluteRouterPath), r(this, h)?.splitView.setWorkspaceRoute(r(this, u));
    }, this.consumeContext(rt, (t) => {
      v(this, C, t), this.observe(r(this, C)?.appLanguageCulture, (e) => {
        v(this, w, e), f(this, _, b).call(this);
      });
    }), this.consumeContext(A, (t) => {
      v(this, h, t), this.observe(
        r(this, h)?.variantOptions,
        (e) => {
          v(this, c, e), f(this, _, b).call(this);
        },
        "_observeVariants"
      ), this.observe(
        r(this, h)?.forbidden.isOn,
        (e) => {
          v(this, W, e ?? !1), f(this, _, b).call(this);
        },
        "_observeForbidden"
      );
    });
  }
  render() {
    return this._routes ? P`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
C = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
y = function(t, e) {
  const s = e.split("_"), a = s[0], i = s[1];
  r(this, h)?.splitView.setActiveVariant(t, a, i);
};
b = function() {
  if (!r(this, c) || !r(this, w)) {
    this._routes = [];
    return;
  }
  const t = [];
  r(this, c).forEach((e) => {
    r(this, c).forEach((s) => {
      t.push({
        // TODO: When implementing Segments, be aware if using the unique still is URL Safe, cause its most likely not... [NL]
        path: e.unique + "_&_" + s.unique,
        component: this.splitViewElement,
        setup: (a, i) => {
          i.match.fragments.consumed.split("_&_").forEach((n, Z) => {
            f(this, _, y).call(this, Z, n);
          });
        }
      });
    });
  }), r(this, c).forEach((e) => {
    t.push({
      // TODO: When implementing Segments, be aware if using the unique still is URL Safe, cause its most likely not... [NL]
      path: e.unique,
      component: this.splitViewElement,
      setup: (s, a) => {
        r(this, h)?.splitView.removeActiveVariant(1), f(this, _, y).call(this, 0, a.match.fragments.consumed);
      }
    });
  }), t.length !== 0 && t.push({
    path: "",
    pathMatch: "full",
    resolve: async () => {
      if (!r(this, h))
        throw new Error("Workspace context is not available when resolving the default route.");
      const e = t.find((s) => s.path === r(this, w));
      if (!e) {
        const s = t.find((i) => i.path === r(this, c)?.[0]?.unique)?.path;
        if (s) {
          history.replaceState({}, "", `${r(this, u)}/${s}`);
          return;
        }
        const a = `${r(this, u)}/${t[t.length - 3].path}`;
        history.replaceState({}, "", a);
        return;
      }
      history.replaceState({}, "", `${r(this, u)}/${e?.path}`);
    }
  }), t.push({
    path: "**",
    component: async () => {
      const e = await import("@umbraco-cms/backoffice/router");
      return r(this, W) ? e.UmbRouteForbiddenElement : e.UmbRouteNotFoundElement;
    }
  }), this._routes = t;
};
g.styles = [
  I,
  R`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
Y([
  k()
], g.prototype, "_routes", 2);
g = Y([
  U("umb-document-workspace-editor")
], g);
const kt = g;
export {
  g as UmbDocumentWorkspaceEditorElement,
  kt as default
};
//# sourceMappingURL=document-workspace-editor.element-D4q5NSDK.js.map
