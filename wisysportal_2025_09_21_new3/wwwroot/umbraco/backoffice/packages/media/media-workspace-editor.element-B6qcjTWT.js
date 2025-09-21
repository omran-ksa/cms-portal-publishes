import { G as k } from "./input-upload-field.element-Bje2l26U.js";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { nothing as F, repeat as I, ifDefined as T, html as m, css as y, state as f, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
var D = Object.defineProperty, q = Object.getOwnPropertyDescriptor, M = (t) => {
  throw TypeError(t);
}, w = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? q(e, s) : e, h = t.length - 1, o; h >= 0; h--)
    (o = t[h]) && (i = (r ? o(e, s, i) : o(i)) || i);
  return r && i && D(e, s, i), i;
}, N = (t, e, s) => e.has(t) || M("Cannot " + s), G = (t, e, s) => e.has(t) ? M("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), E = (t, e, s) => (N(t, e, "access private method"), s), u, $, P;
let c = class extends W {
  constructor() {
    super(), G(this, u), this.consumeContext(k, (t) => {
      this._workspaceContext = t, E(this, u, $).call(this), E(this, u, P).call(this);
    });
  }
  render() {
    return this._variants ? m`<div id="splitViews">
						${I(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => m`
								<umb-workspace-split-view
									.splitViewIndex=${t.index}
									.displayNavigation=${t.index === this._variants.length - 1}>
									<umb-icon slot="icon" name=${T(this._icon)}></umb-icon>
								</umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Media"></umb-workspace-footer>` : F;
  }
};
u = /* @__PURE__ */ new WeakSet();
$ = function() {
  this._workspaceContext && this.observe(
    this._workspaceContext.splitView.activeVariantsInfo,
    (t) => {
      this._variants = t;
    },
    "_observeActiveVariantsInfo"
  );
};
P = function() {
  this._workspaceContext && this.observe(this._workspaceContext.contentTypeIcon, (t) => {
    this._icon = t ?? void 0;
  });
};
c.styles = [
  x,
  y`
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
w([
  f()
], c.prototype, "_variants", 2);
w([
  f()
], c.prototype, "_icon", 2);
c = w([
  C("umb-media-workspace-split-view")
], c);
var z = Object.defineProperty, B = Object.getOwnPropertyDescriptor, O = (t) => {
  throw TypeError(t);
}, S = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? B(e, s) : e, h = t.length - 1, o; h >= 0; h--)
    (o = t[h]) && (i = (r ? o(e, s, i) : o(i)) || i);
  return r && i && z(e, s, i), i;
}, b = (t, e, s) => e.has(t) || O("Cannot " + s), a = (t, e, s) => (b(t, e, "read from private field"), e.get(t)), _ = (t, e, s) => e.has(t) ? O("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), g = (t, e, s, r) => (b(t, e, "write to private field"), e.set(t, s), s), V = (t, e, s) => (b(t, e, "access private method"), s), p, n, v, d, U, R;
let l = class extends W {
  constructor() {
    super(), _(this, d), this.splitViewElement = new c(), _(this, p), _(this, n), _(this, v, !1), this._gotWorkspaceRoute = (t) => {
      a(this, p)?.splitView.setWorkspaceRoute(t.target.absoluteRouterPath);
    }, this.consumeContext(k, (t) => {
      g(this, p, t), V(this, d, U).call(this), V(this, d, R).call(this);
    });
  }
  _handleVariantFolderPart(t, e) {
    const s = e.split("_"), r = s[0], i = s[1];
    a(this, p)?.splitView.setActiveVariant(t, r, i);
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
            i.match.fragments.consumed.split("_&_").forEach((o, A) => {
              this._handleVariantFolderPart(A, o);
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
          a(this, p)?.splitView.removeActiveVariant(1), this._handleVariantFolderPart(0, r.match.fragments.consumed);
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
        return a(this, v) ? e.UmbRouteForbiddenElement : e.UmbRouteNotFoundElement;
      }
    }), this._routes = t;
  }
  render() {
    return this._routes && this._routes.length > 0 ? m`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
U = function() {
  this.observe(
    a(this, p)?.variantOptions,
    (t) => {
      g(this, n, t), this._generateRoutes();
    },
    "_observeVariants"
  );
};
R = function() {
  this.observe(
    a(this, p)?.forbidden.isOn,
    (t) => {
      g(this, v, t ?? !1), this._generateRoutes();
    },
    "_observeForbidden"
  );
};
l.styles = [
  x,
  y`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
S([
  f()
], l.prototype, "_routes", 2);
l = S([
  C("umb-media-workspace-editor")
], l);
const J = l;
export {
  l as UmbMediaWorkspaceEditorElement,
  J as default
};
//# sourceMappingURL=media-workspace-editor.element-B6qcjTWT.js.map
