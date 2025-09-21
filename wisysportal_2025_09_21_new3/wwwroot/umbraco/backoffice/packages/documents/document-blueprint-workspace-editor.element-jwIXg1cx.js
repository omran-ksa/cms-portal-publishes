import { v as b, u as R } from "./paths-BF32ZUyU.js";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { nothing as S, repeat as A, html as v, css as g, state as V, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var D = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, P = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? $(e, s) : e, p = t.length - 1, o; p >= 0; p--)
    (o = t[p]) && (i = (r ? o(e, s, i) : o(i)) || i);
  return r && i && D(e, s, i), i;
};
let l = class extends C {
  constructor() {
    super(), this.consumeContext(b, (t) => {
      this._workspaceContext = t, this._observeActiveVariantInfo();
    });
  }
  _observeActiveVariantInfo() {
    this._workspaceContext && this.observe(
      this._workspaceContext.splitView.activeVariantsInfo,
      (t) => {
        this._variants = t;
      },
      "_observeActiveVariantsInfo"
    );
  }
  render() {
    return this._variants ? v`<div id="splitViews">
						${A(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => v`
								<umb-workspace-split-view
									.splitViewIndex=${t.index}
									.displayNavigation=${t.index === this._variants.length - 1}></umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias=${R}></umb-workspace-footer>` : S;
  }
};
l.styles = [
  E,
  g`
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
P([
  V()
], l.prototype, "_variants", 2);
l = P([
  x("umb-document-blueprint-workspace-split-view")
], l);
var M = Object.defineProperty, T = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, O = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? T(e, s) : e, p = t.length - 1, o; p >= 0; p--)
    (o = t[p]) && (i = (r ? o(e, s, i) : o(i)) || i);
  return r && i && M(e, s, i), i;
}, d = (t, e, s) => e.has(t) || y("Cannot " + s), a = (t, e, s) => (d(t, e, "read from private field"), e.get(t)), u = (t, e, s) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), f = (t, e, s, r) => (d(t, e, "write to private field"), e.set(t, s), s), w = (t, e, s) => (d(t, e, "access private method"), s), h, n, m, _, k, U;
let c = class extends C {
  constructor() {
    super(), u(this, _), this.splitViewElement = new l(), u(this, h), u(this, n), u(this, m, !1), this._gotWorkspaceRoute = (t) => {
      a(this, h)?.splitView.setWorkspaceRoute(t.target.absoluteRouterPath);
    }, this.consumeContext(b, (t) => {
      f(this, h, t), w(this, _, k).call(this), w(this, _, U).call(this);
    });
  }
  _handleVariantFolderPart(t, e) {
    const s = e.split("_"), r = s[0], i = s[1];
    a(this, h)?.splitView.setActiveVariant(t, r, i);
  }
  async _generateRoutes() {
    const t = [];
    a(this, n)?.forEach((e) => {
      a(this, n)?.forEach((s) => {
        t.push({
          // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
          path: e.unique + "_&_" + s.unique,
          component: this.splitViewElement,
          setup: (r, i) => {
            i.match.fragments.consumed.split("_&_").forEach((o, W) => {
              this._handleVariantFolderPart(W, o);
            });
          }
        });
      });
    }), a(this, n)?.forEach((e) => {
      t.push({
        // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
        path: e.unique,
        component: this.splitViewElement,
        setup: (s, r) => {
          a(this, h)?.splitView.removeActiveVariant(1), this._handleVariantFolderPart(0, r.match.fragments.consumed);
        }
      });
    }), t.length !== 0 && a(this, n)?.length && t.push({
      path: "",
      pathMatch: "full",
      redirectTo: t[a(this, n).length * a(this, n).length]?.path
    }), t.push({
      path: "**",
      component: async () => {
        const e = await import("@umbraco-cms/backoffice/router");
        return a(this, m) ? e.UmbRouteForbiddenElement : e.UmbRouteNotFoundElement;
      }
    }), this._routes = t;
  }
  render() {
    return this._routes ? v`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
h = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
k = function() {
  a(this, h) && this.observe(
    a(this, h).variantOptions,
    (t) => {
      f(this, n, t), this._generateRoutes();
    },
    "_observeVariants"
  );
};
U = function() {
  this.observe(
    a(this, h)?.forbidden.isOn,
    (t) => {
      f(this, m, t ?? !1), this._generateRoutes();
    },
    "_observeForbidden"
  );
};
c.styles = [
  E,
  g`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
O([
  V()
], c.prototype, "_routes", 2);
c = O([
  x("umb-document-blueprint-workspace-editor")
], c);
const L = c;
export {
  c as UmbDocumentBlueprintWorkspaceEditorElement,
  L as default
};
//# sourceMappingURL=document-blueprint-workspace-editor.element-jwIXg1cx.js.map
