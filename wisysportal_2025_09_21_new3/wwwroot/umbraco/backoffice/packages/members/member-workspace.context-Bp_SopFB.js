import { UmbContentPropertyDatasetContext as V, UmbContentDetailWorkspaceContextBase as S } from "@umbraco-cms/backoffice/content";
import { w as E, r as W, x as I, f as q, g as B } from "./manifests-CRgmLCr5.js";
import { a as F } from "./paths-l_fN_Ic_.js";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { nothing as $, repeat as L, ifDefined as N, html as m, css as C, state as _, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { U as Y } from "./constants-CZ5P0paT.js";
import { UmbMemberTypeDetailRepository as G } from "@umbraco-cms/backoffice/member-type";
import { UmbWorkspaceIsNewRedirectController as K, UmbWorkspaceIsNewRedirectControllerAlias as H } from "@umbraco-cms/backoffice/workspace";
class z extends V {
}
var X = Object.defineProperty, J = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, d = (e, t, r, a) => {
  for (var s = a > 1 ? void 0 : a ? J(t, r) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (s = (a ? o(t, r, s) : o(s)) || s);
  return a && s && X(t, r, s), s;
}, Q = (e, t, r) => t.has(e) || M("Cannot " + r), Z = (e, t, r) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), v = (e, t, r) => (Q(e, t, "access private method"), r), u, P, k;
let c = class extends O {
  constructor() {
    super(), Z(this, u), this.consumeContext(E, (e) => {
      this._workspaceContext = e, v(this, u, P).call(this), v(this, u, k).call(this);
    });
  }
  render() {
    return this._variants ? m`<div id="splitViews">
						${L(
      this._variants,
      (e) => e.index + "_" + (e.culture ?? "") + "_" + (e.segment ?? "") + "_" + this._variants.length,
      (e) => m`
								<umb-workspace-split-view
									back-path=${F}
									.splitViewIndex=${e.index}
									.displayNavigation=${e.index === this._variants.length - 1}>
									<umb-icon slot="icon" name=${N(this._icon)}></umb-icon>
								</umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Member"></umb-workspace-footer>` : $;
  }
};
u = /* @__PURE__ */ new WeakSet();
P = function() {
  this._workspaceContext && this.observe(
    this._workspaceContext.splitView.activeVariantsInfo,
    (e) => {
      this._variants = e;
    },
    "_observeActiveVariantsInfo"
  );
};
k = function() {
  this._workspaceContext && this.observe(this._workspaceContext.contentTypeIcon, (e) => {
    this._icon = e ?? void 0;
  });
};
c.styles = [
  g,
  C`
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
d([
  _()
], c.prototype, "_variants", 2);
d([
  _()
], c.prototype, "_icon", 2);
c = d([
  T("umb-member-workspace-split-view")
], c);
var j = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, b = (e, t, r, a) => {
  for (var s = a > 1 ? void 0 : a ? ee(t, r) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (s = (a ? o(t, r, s) : o(s)) || s);
  return a && s && j(t, r, s), s;
}, f = (e, t, r) => t.has(e) || U("Cannot " + r), h = (e, t, r) => (f(e, t, "read from private field"), t.get(e)), w = (e, t, r) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), te = (e, t, r, a) => (f(e, t, "write to private field"), t.set(e, r), r), y = (e, t, r) => (f(e, t, "access private method"), r), n, l, R, x;
let p = class extends O {
  constructor() {
    super(), w(this, l), this.splitViewElement = new c(), w(this, n), this._isForbidden = !1, this._gotWorkspaceRoute = (e) => {
      h(this, n)?.splitView.setWorkspaceRoute(e.target.absoluteRouterPath);
    }, this.consumeContext(E, (e) => {
      te(this, n, e), y(this, l, R).call(this), y(this, l, x).call(this);
    });
  }
  _handleVariantFolderPart(e, t) {
    const r = t.split("_"), a = r[0], s = r[1];
    h(this, n)?.splitView.setActiveVariant(e, a, s);
  }
  async _generateRoutes(e) {
    const t = [];
    e.forEach((r) => {
      e.forEach((a) => {
        t.push({
          // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
          path: r.unique + "_&_" + a.unique,
          component: this.splitViewElement,
          setup: (s, i) => {
            i.match.fragments.consumed.split("_&_").forEach((D, A) => {
              this._handleVariantFolderPart(A, D);
            });
          }
        });
      });
    }), e.forEach((r) => {
      t.push({
        // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
        path: r.unique,
        component: this.splitViewElement,
        setup: (a, s) => {
          h(this, n)?.splitView.removeActiveVariant(1), this._handleVariantFolderPart(0, s.match.fragments.consumed);
        }
      });
    }), t.length !== 0 && t.push({
      path: "",
      pathMatch: "full",
      redirectTo: t[e.length * e.length]?.path
    }), t.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    }), this._routes = t;
  }
  render() {
    return this._isForbidden ? m`<umb-route-forbidden></umb-route-forbidden>` : this._routes ? m`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
n = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
R = function() {
  this.observe(
    h(this, n)?.variantOptions,
    (e) => this._generateRoutes(e ?? []),
    "_observeVariants"
  );
};
x = function() {
  this.observe(
    h(this, n)?.forbidden.isOn,
    (e) => this._isForbidden = e ?? !1,
    "_observeForbidden"
  );
};
p.styles = [
  g,
  C`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
b([
  _()
], p.prototype, "_isForbidden", 2);
b([
  _()
], p.prototype, "_routes", 2);
p = b([
  T("umb-member-workspace-editor")
], p);
class ue extends S {
  constructor(t) {
    super(t, {
      entityType: q,
      workspaceAlias: I,
      detailRepositoryAlias: W,
      contentTypeDetailRepository: G,
      // TODO: Enable Validation Repository when we have UI for showing validation issues on other tabs. [NL]
      //contentValidationRepository: UmbMemberValidationRepository,
      contentVariantScaffold: Y,
      contentTypePropertyName: "memberType"
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((r) => r?.memberType.unique), this.contentTypeIcon = this._data.createObservablePartOfCurrent((r) => r?.memberType.icon), this.kind = this._data.createObservablePartOfCurrent((r) => r?.kind), this.createDate = this._data.createObservablePartOfCurrent((r) => r?.variants[0].createDate), this.updateDate = this._data.createObservablePartOfCurrent((r) => r?.variants[0].updateDate), this.observe(
      this.contentTypeUnique,
      (r) => {
        r && this.structure.loadType(r);
      },
      null
    ), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.routes.setRoutes([
      {
        path: "create/:memberTypeUnique",
        component: () => new p(),
        setup: async (r, a) => {
          const s = a.match.params.memberTypeUnique;
          await this.create(s), new K(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: () => new p(),
        setup: (r, a) => {
          this.removeUmbControllerByAlias(H);
          const s = a.match.params.unique;
          this.load(s);
        }
      }
    ]);
  }
  async create(t) {
    return this.createScaffold({
      parent: { entityType: B, unique: null },
      preset: {
        memberType: {
          unique: t,
          icon: "icon-user"
        }
      }
    });
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMemberWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMemberWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.memberType.unique;
  }
  createPropertyDatasetContext(t, r) {
    return new z(t, this, r);
  }
  set(t, r) {
    this._data.updateCurrent({ [t]: r });
  }
  // Only for CRUD demonstration purposes
  updateData(t) {
    const r = this._data.getCurrent();
    if (!r) throw new Error("No data to update");
    this._data.setCurrent({ ...r, ...t });
  }
  get email() {
    return this.#e("email") || "";
  }
  get username() {
    return this.#e("username") || "";
  }
  get isLockedOut() {
    return this.#e("isLockedOut") || !1;
  }
  get isTwoFactorEnabled() {
    return this.#e("isTwoFactorEnabled") || !1;
  }
  get isApproved() {
    return this.#e("isApproved") || !1;
  }
  get failedPasswordAttempts() {
    return this.#e("failedPasswordAttempts") || 0;
  }
  get lastLockOutDate() {
    return this.#e("lastLockoutDate") ?? null;
  }
  get lastLoginDate() {
    return this.#e("lastLoginDate") ?? null;
  }
  get lastPasswordChangeDate() {
    return this.#e("lastPasswordChangeDate") ?? null;
  }
  get memberGroups() {
    return this.#e("groups") || [];
  }
  #e(t) {
    return this._data.getCurrent()?.[t];
  }
}
export {
  ue as UmbMemberWorkspaceContext,
  ue as api
};
//# sourceMappingURL=member-workspace.context-Bp_SopFB.js.map
