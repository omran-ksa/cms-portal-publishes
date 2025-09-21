import { UmbContextToken as y } from "@umbraco-cms/backoffice/context-api";
import { css as w, property as h, state as u, customElement as m, nothing as p, repeat as Nt, html as c, when as Wt, query as Te, ref as Se, ifDefined as st } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as f, umbFocus as Pe } from "@umbraco-cms/backoffice/lit-element";
import { UmbPathPattern as Ut } from "@umbraco-cms/backoffice/router";
import { UMB_SECTION_PATH_PATTERN as Ne } from "@umbraco-cms/backoffice/section";
import { UmbExtensionsManifestInitializer as We, createExtensionElement as Ue, UmbExtensionsElementAndApiInitializer as Ae, UmbExtensionsApiInitializer as Ie } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as pt } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_MODAL_CONTEXT as De, UmbModalToken as Me } from "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/utils";
import { UUIInputEvent as At } from "@umbraco-cms/backoffice/external/uui";
import { umbBindToValidation as It, UmbDataPathVariantQuery as Be } from "@umbraco-cms/backoffice/validation";
import { UmbContextBase as ze } from "@umbraco-cms/backoffice/class-api";
import { UmbNumberState as Re, UmbBooleanState as Le } from "@umbraco-cms/backoffice/observable-api";
import { UmbVariantId as O } from "@umbraco-cms/backoffice/variant";
import { UMB_MARK_ATTRIBUTE_NAME as Dt } from "@umbraco-cms/backoffice/const";
import { UMB_PROPERTY_DATASET_CONTEXT as Fe, isNameablePropertyDatasetContext as Ke } from "@umbraco-cms/backoffice/property";
const sa = new y("UmbWorkspaceContext"), ra = "Umb.Condition.WorkspaceEntityIsNew", na = "Umb.Condition.WorkspaceAlias";
var qe = Object.defineProperty, Xe = Object.getOwnPropertyDescriptor, Mt = (t) => {
  throw TypeError(t);
}, X = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Xe(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && qe(e, i, a), a;
}, Ge = (t, e, i) => e.has(t) || Mt("Cannot " + i), He = (t, e, i) => e.has(t) ? Mt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), je = (t, e, i) => (Ge(t, e, "access private method"), i), ht, Bt;
let T = class extends f {
  constructor() {
    super(...arguments), He(this, ht), this.look = "secondary", this.color = "default", this.items = [], this._popoverOpen = !1;
  }
  render() {
    return this.items?.length ? c`<uui-button
				id="popover-trigger"
				popovertarget="workspace-action-popover"
				look="${this.look}"
				color="${this.color}"
				label=${this.localize.term("visuallyHiddenTexts_tabExpand")}
				compact>
				<uui-symbol-expand id="expand-symbol" .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="workspace-action-popover"
				margin="6"
				placement="top-end"
				@toggle=${je(this, ht, Bt)}>
				<umb-popover-layout id="workspace-action-popover-layout">
					<uui-scroll-container>
						${Nt(
      this.items,
      (t) => t.alias,
      (t) => t.component
    )}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>` : p;
  }
};
ht = /* @__PURE__ */ new WeakSet();
Bt = function(t) {
  this._popoverOpen = t.newState === "open";
};
T.styles = [
  $,
  w`
			:host {
				--uui-menu-item-flat-structure: 1;
			}

			#expand-symbol {
				/* TODO: remove this hack and use a proper UUI symbol for this */
				transform: rotate(-90deg);
			}

			#expand-symbol[open] {
				transform: rotate(0deg);
			}

			#workspace-action-popover {
				min-width: 200px;
				
			}

			#popover-trigger {
				--uui-button-padding-top-factor: 0;
				--uui-button-padding-bottom-factor: 0.125;
			}

			#workspace-action-popover-layout {
      			overflow: visible;
    		}
		`
];
X([
  h()
], T.prototype, "look", 2);
X([
  h()
], T.prototype, "color", 2);
X([
  h({ type: Array, attribute: !1 })
], T.prototype, "items", 2);
X([
  u()
], T.prototype, "_popoverOpen", 2);
T = X([
  m("umb-workspace-action-menu")
], T);
const Ye = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.getUnique !== void 0
), oa = new y("UmbWorkspaceContext", void 0, (t) => "publish" in t), la = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => "routes" in t
), ca = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => "requestSubmit" in t && "_internal_createUnderParent" in t
), Qe = new y("UmbWorkspaceContext", void 0, (t) => "requestSubmit" in t), ua = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => "requestSave" in t
), Je = new y("UmbWorkspaceContext", void 0, (t) => "variants" in t), Ze = new Ut("workspace/:entityType", Ne), ti = new Ut("view/:viewPathname", Ze);
var ei = Object.defineProperty, ii = Object.getOwnPropertyDescriptor, zt = (t) => {
  throw TypeError(t);
}, x = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ii(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && ei(e, i, a), a;
}, ai = (t, e, i) => e.has(t) || zt("Cannot " + i), si = (t, e, i) => e.has(t) ? zt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), nt = (t, e, i) => (ai(t, e, "access private method"), i), M, Rt, Lt, Ft;
let b = class extends f {
  constructor() {
    super(), si(this, M), this.headline = "", this.hideNavigation = !1, this.enforceNoFooter = !1, this.loading = !1, this._workspaceViews = [], new We(this, pt, "workspaceView", null, (t) => {
      this._workspaceViews = t.map((e) => e.manifest), this._createRoutes();
    });
  }
  _createRoutes() {
    let t = [];
    this._workspaceViews.length > 0 && (t = this._workspaceViews.map((e) => ({
      path: ti.generateLocal({ viewPathname: e.meta.pathname }),
      component: () => Ue(e),
      setup: (i) => {
        i && (i.manifest = e);
      }
    })), t.push({ ...t[0], unique: t[0].path, path: "" })), t.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    }), this._routes = t;
  }
  render() {
    return c`
			<umb-body-layout main-no-padding .headline=${this.headline} ?loading=${this.loading}>
				${nt(this, M, Lt).call(this)}
				<slot name="header" slot="header"></slot>
				<slot name="action-menu" slot="action-menu"></slot>
				${nt(this, M, Rt).call(this)} ${nt(this, M, Ft).call(this)}
				<slot></slot>
				${Wt(
      !this.enforceNoFooter,
      () => c`
						<umb-workspace-footer slot="footer" data-mark="workspace:footer">
							<slot name="footer-info"></slot>
							<slot name="actions" slot="actions" data-mark="workspace:footer-actions"></slot>
						</umb-workspace-footer>
					`
    )}
			</umb-body-layout>
		`;
  }
};
M = /* @__PURE__ */ new WeakSet();
Rt = function() {
  return c`
			${!this.hideNavigation && this._workspaceViews.length > 1 ? c`
						<uui-tab-group slot="navigation" data-mark="workspace:view-links">
							${Nt(
    this._workspaceViews,
    (t) => t.alias,
    (t, e) => (
      // Notice how we use index 0 to determine which workspace that is active with empty path. [NL]
      c`
										<uui-tab
											href="${this._routerPath}/view/${t.meta.pathname}"
											.label="${t.meta.label ? this.localize.string(t.meta.label) : t.name}"
											?active=${"view/" + t.meta.pathname === this._activePath || e === 0 && this._activePath === ""}
											data-mark="workspace:view-link:${t.alias}">
											<umb-icon slot="icon" name=${t.meta.icon}></umb-icon>
											${t.meta.label ? this.localize.string(t.meta.label) : t.name}
										</uui-tab>
									`
    )
  )}
						</uui-tab-group>
					` : p}
		`;
};
Lt = function() {
  return this.backPath ? c`
			<uui-button
				slot="header"
				class="back-button"
				compact
				href=${this.backPath}
				label=${this.localize.term("general_back")}
				data-mark="action:back">
				<uui-icon name="icon-arrow-left"></uui-icon>
			</uui-button>
		` : p;
};
Ft = function() {
  return !this._routes || this._routes.length === 0 ? p : c`
			<umb-router-slot
				inherit-addendum
				id="router-slot"
				.routes=${this._routes}
				@init=${(t) => {
    this._routerPath = t.target.absoluteRouterPath;
  }}
				@change=${(t) => {
    this._activePath = t.target.localActiveViewPath;
  }}></umb-router-slot>
		`;
};
b.styles = [
  $,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}

			#router-slot {
				display: flex;
				flex-direction: column;
				height: 100%;
			}

			.back-button {
				margin-right: var(--uui-size-space-4);
			}

			uui-input {
				width: 100%;
			}

			uui-tab-group {
				--uui-tab-divider: var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
			}

			umb-extension-slot[slot='actions'] {
				display: flex;
				gap: var(--uui-size-space-2);
			}
		`
];
x([
  h()
], b.prototype, "headline", 2);
x([
  h({ type: Boolean })
], b.prototype, "hideNavigation", 2);
x([
  h({ type: Boolean })
], b.prototype, "enforceNoFooter", 2);
x([
  h({ attribute: "back-path" })
], b.prototype, "backPath", 2);
x([
  h({ type: Boolean })
], b.prototype, "loading", 2);
x([
  u()
], b.prototype, "_workspaceViews", 2);
x([
  u()
], b.prototype, "_routes", 2);
x([
  u()
], b.prototype, "_routerPath", 2);
x([
  u()
], b.prototype, "_activePath", 2);
b = x([
  m("umb-workspace-editor")
], b);
var ri = Object.defineProperty, ni = Object.getOwnPropertyDescriptor, ft = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ni(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && ri(e, i, a), a;
};
let F = class extends f {
  constructor() {
    super(), this.consumeContext(Ye, (t) => {
      this._workspaceContext = t, this.observe(this._workspaceContext?.unique, (e) => {
        this._unique = e, this._entityType = this._workspaceContext?.getEntityType();
      });
    });
  }
  render() {
    return this._entityType ? this._unique === void 0 ? p : c`<umb-entity-actions-dropdown>
			<uui-symbol-more
				slot="label"
				data-mark="workspace:action-menu-button"
				label=${this.localize.term("general_actions")}></uui-symbol-more>
		</umb-entity-actions-dropdown>` : p;
  }
};
F.styles = [
  $,
  w`
			:host {
				height: 100%;
				margin-left: calc(var(--uui-size-layout-1) * -1);
			}

			umb-entity-actions-dropdown {
				height: 100%;
			}
		`
];
ft([
  u()
], F.prototype, "_unique", 2);
ft([
  u()
], F.prototype, "_entityType", 2);
F = ft([
  m("umb-workspace-entity-action-menu")
], F);
var oi = Object.defineProperty, li = Object.getOwnPropertyDescriptor, Kt = (t) => {
  throw TypeError(t);
}, rt = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? li(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && oi(e, i, a), a;
}, ci = (t, e, i) => e.has(t) || Kt("Cannot " + i), ui = (t, e, i) => (ci(t, e, "read from private field"), i ? i.call(t) : e.get(t)), pi = (t, e, i) => e.has(t) ? Kt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), dt;
function hi(t) {
  return [{ meta: t.meta }];
}
let W = class extends f {
  constructor() {
    super(), this._withinModal = !1, pi(this, dt, () => {
      this._modalContext?.reject();
    }), this.consumeContext(Qe, (t) => {
      this._isNew = t?.getIsNew();
    }), this.consumeContext(De, (t) => {
      this._modalContext = t;
    });
  }
  // TODO: Some event/callback from umb-extension-slot that can be utilized to hide the footer, if empty.
  render() {
    return c`
			<umb-footer-layout>
				<umb-extension-slot type="workspaceFooterApp"></umb-extension-slot>
				<slot></slot>
				${this._modalContext ? c`<uui-button
							slot="actions"
							label=${this._isNew ? "Cancel" : "Close"}
							@click=${ui(this, dt)}></uui-button>` : ""}
				<slot name="actions" slot="actions"></slot>
				<umb-extension-with-api-slot
					slot="actions"
					type="workspaceAction"
					.apiArgs=${hi}></umb-extension-with-api-slot>

				<slot name="actions" slot="actions"></slot>
			</umb-footer-layout>
		`;
  }
};
dt = /* @__PURE__ */ new WeakMap();
W.styles = [
  $,
  w`
			:host {
				display: block;
				width: 100%;
			}

			/* prevents text in action buttons from wrapping */
			umb-extension-with-api-slot {
				text-wrap: nowrap;
			}

			umb-extension-slot[slot='actions'] {
				display: flex;
				gap: var(--uui-size-space-2);
			}
		`
];
rt([
  u()
], W.prototype, "_withinModal", 2);
rt([
  u()
], W.prototype, "_modalContext", 2);
rt([
  u()
], W.prototype, "_isNew", 2);
W = rt([
  m("umb-workspace-footer")
], W);
const di = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.getName !== void 0
);
var _i = Object.defineProperty, vi = Object.getOwnPropertyDescriptor, qt = (t) => {
  throw TypeError(t);
}, G = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? vi(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && _i(e, i, a), a;
}, bt = (t, e, i) => e.has(t) || qt("Cannot " + i), Z = (t, e, i) => (bt(t, e, "read from private field"), e.get(t)), Vt = (t, e, i) => e.has(t) ? qt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), mi = (t, e, i, s) => (bt(t, e, "write to private field"), e.set(t, i), i), ot = (t, e, i) => (bt(t, e, "access private method"), i), S, B, Xt, Gt, Ht;
let P = class extends f {
  constructor() {
    super(), Vt(this, B), this.readonly = !1, this._name = "", this._isWritableName = !0, Vt(this, S), this.consumeContext(di, (t) => {
      mi(this, S, t), ot(this, B, Gt).call(this), ot(this, B, Xt).call(this);
    });
  }
  render() {
    return c`<uui-input
			id="nameInput"
			data-mark="input:workspace-name"
			.value=${this._name}
			@input="${ot(this, B, Ht)}"
			label=${this.label ?? this.localize.term("placeholders_entername")}
			placeholder=${this.placeholder ?? this.localize.term("placeholders_entername")}
			?readonly=${this.readonly || !this._isWritableName}
			required
			${It(this, "$.name", this._name)}
			${Pe()}></uui-input>`;
  }
};
S = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
Xt = function() {
  this.observe(
    Z(this, S)?.nameWriteGuard?.isPermittedForName(),
    (t) => {
      this._isWritableName = t ?? !0;
    },
    "umbObserveWorkspaceNameWriteGuardRules"
  );
};
Gt = function() {
  Z(this, S) && this.observe(
    Z(this, S).name,
    (t) => {
      t !== this._name && (this._name = t ?? "");
    },
    "observeWorkspaceName"
  );
};
Ht = function(t) {
  if (t instanceof At) {
    const e = t.composedPath()[0];
    typeof e?.value == "string" && Z(this, S)?.setName(e.value);
  }
};
P.styles = [
  $,
  w`
			:host {
				display: contents;
			}

			#nameInput {
				flex: 1 1 auto;
			}
		`
];
G([
  h()
], P.prototype, "label", 2);
G([
  h()
], P.prototype, "placeholder", 2);
G([
  u()
], P.prototype, "_name", 2);
G([
  u()
], P.prototype, "_isWritableName", 2);
P = G([
  m("umb-workspace-header-name-editable")
], P);
class fi extends ze {
  //#variantId = new UmbClassState<UmbVariantId | undefined>(undefined);
  //variantId = this.#variantId.asObservable();
  constructor(e) {
    super(e, jt), this.#e = new Re(void 0), this.index = this.#e.asObservable(), this.#a = new Le(void 0), this.isNew = this.#a.asObservable(), this.consumeContext(Je, (i) => {
      this.#t = i, this._observeVariant(), this.#r();
    }), this.observe(this.index, () => {
      this._observeVariant();
    });
  }
  //
  #i;
  #t;
  getWorkspaceContext() {
    return this.#t;
  }
  #s;
  #e;
  #a;
  #r() {
    this.observe(
      this.#t?.isNew,
      (e) => {
        this.#a.setValue(e ?? !1);
      },
      "umbObserveIsNew"
    );
  }
  _observeVariant() {
    if (!this.#t) return;
    const e = this.#e.getValue();
    e !== void 0 && this.observe(
      this.#t.splitView.activeVariantByIndex(e),
      async (i) => {
        if (this.#i && this.#i.unprovide(), !i) return;
        this.#s?.destroy();
        const s = O.Create(i), a = this.#t?.getVariantValidationContext(s);
        a && (a.provideAt(this), this.#i = a), this.#s = this.#t?.createPropertyDatasetContext(this, s), this.getHostElement().setAttribute(Dt, "workspace-split-view:" + s.toString());
      },
      "_observeActiveVariant"
    );
  }
  switchVariant(e) {
    const i = this.#e.value;
    i !== void 0 && this.#t?.splitView.switchVariant(i, e);
  }
  closeSplitView() {
    const e = this.#e.value;
    e !== void 0 && this.#t?.splitView.closeSplitView(e);
  }
  openSplitView(e) {
    this.#t?.splitView.openSplitView(e);
  }
  getSplitViewIndex() {
    return this.#e.getValue();
  }
  setSplitViewIndex(e) {
    this.#e.setValue(e);
  }
  /**
   *
   * concept this class could have methods to set and get the culture and segment of the active variant? just by using the index.
   */
  /*
  	public destroy(): void {
  
  	}
  	*/
}
const jt = new y(
  "UmbWorkspaceSplitViewContext"
);
var bi = Object.defineProperty, yi = Object.getOwnPropertyDescriptor, Yt = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? yi(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && bi(e, i, a), a;
}, yt = (t, e, i) => e.has(t) || Yt("Cannot " + i), v = (t, e, i) => (yt(t, e, "read from private field"), e.get(t)), lt = (t, e, i) => e.has(t) ? Yt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Tt = (t, e, i, s) => (yt(t, e, "write to private field"), e.set(t, i), i), n = (t, e, i) => (yt(t, e, "access private method"), i), C, g, r, Qt, Jt, Zt, _t, te, ee, wt, ie, ae, H, gt, vt, $t, se, re, j, Y, ne, oe, le, Q, ce, ue, pe, he, de, _e, xt, K, q, Ct;
let d = class extends f {
  constructor() {
    super(), lt(this, r), this._variantOptions = [], this._cultureVariantOptions = [], this._activeVariants = [], lt(this, C), lt(this, g), this._variantSelectorOpen = !1, this._readOnlyCultures = [], this._variesByCulture = !1, this._variesBySegment = !1, this._expandedVariants = [], this._labelDefault = "", this._variantSorter = (t, e) => 0, this._labelDefault = this.localize.term("general_default"), this.consumeContext(jt, (t) => {
      Tt(this, C, t);
      const e = v(this, C)?.getWorkspaceContext();
      n(this, r, Qt).call(this, e), n(this, r, Jt).call(this, e), n(this, r, _t).call(this), n(this, r, te).call(this, e), this.observe(
        e?.variesBySegment,
        (i) => this._variesBySegment = i ?? !1,
        "umbObserveVariesBySegment"
      ), this.observe(
        e?.variesByCulture,
        (i) => this._variesByCulture = i ?? !1,
        "umbObserveVariesByCulture"
      );
    }), this.consumeContext(Fe, (t) => {
      Tt(this, g, t), n(this, r, Zt).call(this), n(this, r, _t).call(this);
    });
  }
  render() {
    return this._variantId ? c`
			<uui-input
				id="name-input"
				data-mark="input:entity-name"
				placeholder=${this.localize.term("placeholders_entername")}
				label=${this.localize.term("placeholders_entername")}
				autocomplete="off"
				.value=${n(this, r, _e).call(this)}
				@input=${n(this, r, ee)}
				required
				?readonly=${n(this, r, j).call(this, this._activeVariant?.culture ?? null) || n(this, r, Y).call(this, this._activeVariant)}
				${It(this, `$.variants[${Be(this._variantId)}].name`, this._name ?? "")}
				${Se(n(this, r, re))}>
				${n(this, r, vt).call(this) ? c`
							<uui-button
								id="toggle"
								compact
								slot="append"
								popovertarget="popover"
								title=${n(this, r, K).call(this, this._activeVariant)}
								label="Select a variant">
								${n(this, r, K).call(this, this._activeVariant)}
								${n(this, r, q).call(this, this._activeVariant?.culture)}
								<uui-symbol-expand .open=${this._variantSelectorOpen}></uui-symbol-expand>
							</uui-button>
							${this._activeVariants.length > 1 ? c`
										<uui-button slot="append" compact id="variant-close" @click=${n(this, r, ae)}>
											<uui-icon name="remove"></uui-icon>
										</uui-button>
									` : ""}
						` : c`<span id="read-only-tag" slot="append"> ${n(this, r, q).call(this, null)} </span>`}
			</uui-input>

			${n(this, r, vt).call(this) ? c`
						<uui-popover-container id="popover" @beforetoggle=${n(this, r, se)} placement="bottom-end">
							<div id="dropdown">
								<uui-scroll-container>
									${this._cultureVariantOptions.map((t) => n(this, r, ue).call(this, t))}
								</uui-scroll-container>
							</div>
						</uui-popover-container>
					` : p}
		` : p;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderVariantDetails(t) {
    return c``;
  }
};
C = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
Qt = async function(t) {
  this.observe(
    t?.variantOptions,
    (e) => {
      this._variantOptions = (e ?? []).sort(this._variantSorter), this._cultureVariantOptions = this._variantOptions.filter((i) => i.segment === null), n(this, r, $t).call(this, t);
    },
    "_observeVariantOptions"
  );
};
Jt = async function(t) {
  this.observe(
    t?.splitView.activeVariantsInfo,
    (e) => {
      e && (this._activeVariants = e.map((i) => O.Create(i)));
    },
    "_observeActiveVariants"
  );
};
Zt = async function() {
  v(this, g) && this.observe(
    v(this, g).name,
    (t) => {
      this._name = t;
    },
    "_name"
  );
};
_t = async function() {
  if (!v(this, g) || !v(this, C)) return;
  const t = v(this, C).getWorkspaceContext();
  t && (this._variantId = v(this, g).getVariantId(), this.observe(
    t.variantOptions,
    (e) => {
      const i = e.find(
        (s) => s.culture === this._variantId?.culture && s.segment === this._variantId?.segment
      );
      this._activeVariant = i;
    },
    "umbObserveActiveVariant"
  ));
};
te = function(t) {
  this.observe(
    t?.readOnlyGuard.rules,
    () => n(this, r, $t).call(this, t),
    "umbObserveReadOnlyGuardRules"
  );
};
ee = function(t) {
  if (t instanceof At) {
    const e = t.composedPath()[0];
    typeof e?.value == "string" && v(this, g) && Ke(v(this, g)) && v(this, g).setName(e.value);
  }
};
wt = function(t) {
  v(this, C)?.switchVariant(O.Create(t));
};
ie = function(t) {
  v(this, C)?.openSplitView(O.Create(t));
};
ae = function() {
  v(this, C)?.closeSplitView();
};
H = function(t) {
  return this._activeVariants.find((e) => e.equal(t)) !== void 0;
};
gt = function(t, e) {
  return !t.variant && !n(this, r, H).call(this, e);
};
vt = function() {
  return !this._variesByCulture && this._variesBySegment ? this._cultureVariantOptions.length > 1 || this._variantOptions.length > 1 && this._variantOptions[0].variant?.state : this._variantOptions.length > 1;
};
$t = function(t) {
  t ? this._readOnlyCultures = this._variantOptions.filter((e) => t.readOnlyGuard.getIsPermittedForVariant(O.Create(e))).map((e) => e.culture) : this._readOnlyCultures = [];
};
se = function(t) {
  if (this._variantSelectorOpen = t.newState === "open", !this._popoverElement || !(t.newState === "open")) return;
  const i = this.getBoundingClientRect();
  if (this._popoverElement.style.width = `${i.width}px`, n(this, r, Y).call(this, this._activeVariant)) {
    const s = this._cultureVariantOptions.find((o) => o.culture === this._activeVariant?.culture && o.segment === null);
    if (!s) return;
    const a = O.Create(s);
    n(this, r, oe).call(this, a);
  }
};
re = function(t) {
  t && setTimeout(async () => {
    await this.updateComplete, t?.focus();
  }, 200);
};
j = function(t) {
  return this._readOnlyCultures.includes(t);
};
Y = function(t) {
  return t?.segment !== null;
};
ne = function(t, e) {
  t.stopPropagation(), n(this, r, le).call(this, e);
};
oe = function(t) {
  n(this, r, Q).call(this, t) || (this._expandedVariants = [...this._expandedVariants, t]);
};
le = function(t) {
  this._expandedVariants = n(this, r, Q).call(this, t) ? this._expandedVariants.filter((e) => e.equal(t) === !1) : [...this._expandedVariants, t];
};
Q = function(t) {
  return this._expandedVariants.find((e) => e.equal(t)) !== void 0;
};
ce = function(t, e) {
  const i = this._variantOptions.filter(
    (s) => s.culture === e.culture && s.segment !== null
  );
  return t.variant ? i : [];
};
ue = function(t) {
  const e = O.Create(t), i = n(this, r, gt).call(this, t, e), s = n(this, r, ce).call(this, t, e);
  return c`
			<div class="variant culture-variant ${n(this, r, H).call(this, e) ? "selected" : ""}">
				${this._variesBySegment && n(this, r, pe).call(this, t) && s.length > 0 ? c`<div class="expand-area">${n(this, r, he).call(this, e)}</div>` : p}

				<button
					class="switch-button ${i ? "add-mode" : ""} ${n(this, r, j).call(this, e.culture) ? "readonly-mode" : ""}"
					@click=${() => n(this, r, wt).call(this, t)}>
					${i ? c`<uui-icon class="add-icon" name="icon-add"></uui-icon>` : p}
					<div class="variant-info">
						<div class="variant-name">
							${n(this, r, xt).call(this, t)}${n(this, r, q).call(this, e.culture)}
						</div>
						<div class="variant-details">
							<span>${this._renderVariantDetails(t)}</span>
						</div>
					</div>
					<div class="specs-info">${n(this, r, K).call(this, t)}</div>
				</button>
				${n(this, r, Ct).call(this, t)}
			</div>
			${n(this, r, Q).call(this, e) ? c` ${s.map((a) => n(this, r, de).call(this, a))} ` : p}
		`;
};
pe = function(t) {
  return t.variant?.state && t.variant?.state !== "NotCreated";
};
he = function(t) {
  return c`
			<uui-button @click=${(e) => n(this, r, ne).call(this, e, t)} compact>
				<uui-symbol-expand .open=${n(this, r, Q).call(this, t)}></uui-symbol-expand>
			</uui-button>
		`;
};
de = function(t) {
  const e = O.Create(t), i = n(this, r, gt).call(this, t, e);
  return c`
			<div class="variant segment-variant ${n(this, r, H).call(this, e) ? "selected" : ""}">
				${i ? p : c`<div class="expand-area"></div>`}
				<button
					class="switch-button ${i ? "add-mode" : ""} ${n(this, r, j).call(this, e.culture) ? "readonly-mode" : ""}"
					@click=${() => n(this, r, wt).call(this, t)}>
					${i ? c`<uui-icon class="add-icon" name="icon-add"></uui-icon>` : p}
					<div class="variant-info">
						<div class="variant-name">
							${n(this, r, xt).call(this, t)}${n(this, r, q).call(this, e.culture)}
						</div>
						<div class="variant-details">
							<span>${this._renderVariantDetails(t)}</span>
						</div>
					</div>
					<div class="specs-info">${n(this, r, K).call(this, t)}</div>
				</button>
				${n(this, r, Ct).call(this, t)}
			</div>
		`;
};
_e = function() {
  const t = n(this, r, Y).call(this, this._activeVariant) && this._activeVariant?.segmentInfo?.name ? this._activeVariant.segmentInfo.name : "";
  return t !== "" ? t : this._name ?? "";
};
xt = function(t) {
  return n(this, r, Y).call(this, t) ? t?.segmentInfo?.name ?? this._labelDefault : t.variant?.name ?? t.language.name;
};
K = function(t) {
  return t ? this._variesByCulture && this._variesBySegment ? t.segmentInfo ? `${t.language.name} - ${t.segmentInfo.name}` : t.language.name || this._labelDefault : !this._variesByCulture && this._variesBySegment ? t?.segmentInfo?.name ?? this._labelDefault : t.language.name : "";
};
q = function(t) {
  return t === void 0 ? p : n(this, r, j).call(this, t) ? c`<uui-tag look="secondary">${this.localize.term("general_readOnly")}</uui-tag>` : p;
};
Ct = function(t) {
  const e = O.Create(t);
  return c`
			${n(this, r, H).call(this, e) ? p : c`
						<uui-button
							class="split-view"
							label="Open Split view for ${t.language.name}"
							@click=${() => n(this, r, ie).call(this, t)}>
							Open in Split view
						</uui-button>
					`}
		`;
};
d.styles = [
  $,
  w`
			#name-input {
				width: 100%;
			}

			#toggle {
				white-space: nowrap;
			}

			#popover {
				translate: 1px; /* Fixes tiny alignment issue caused by border */
			}

			#dropdown {
				overflow: hidden;
				z-index: -1;
				background-color: var(--uui-combobox-popover-background-color, var(--uui-color-surface));
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				width: 100%;
				height: auto;
				box-sizing: border-box;
				box-shadow: var(--uui-shadow-depth-3);
			}

			#variant-close {
				white-space: nowrap;
			}

			#read-only-tag {
				white-space: nowrap;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			uui-scroll-container {
				max-height: 50dvh;
			}

			.variant {
				position: relative;
				display: flex;
				border-top: 1px solid var(--uui-color-divider-standalone);
			}

			.expand-area {
				position: relative;
				display: block;
				width: var(--uui-size-12);
				align-items: center;
				justify-content: center;
			}

			.expand-area uui-button {
				height: 100%;
				width: 100%;
			}

			uui-symbol-expand {
				background: none;
			}

			.variant:hover > .split-view {
				display: flex;
			}

			.variant:nth-last-of-type(1) {
				margin-bottom: 0;
			}

			.variant.selected:before {
				background-color: var(--uui-color-current);
				border-radius: 0 4px 4px 0;
				bottom: 8px;
				content: '';
				left: 0;
				pointer-events: none;
				position: absolute;
				top: 8px;
				width: 4px;
				z-index: 1;
			}

			.switch-button {
				display: flex;
				align-items: center;
				border: none;
				background: transparent;
				color: var(--uui-color-current-contrast);
				padding: var(--uui-size-space-2) var(--uui-size-space-6);
				font-weight: bold;
				width: 100%;
				text-align: left;
				font-size: 14px;
				cursor: pointer;
			}

			.expand-area + .switch-button {
				padding-left: var(--uui-size-space-3);
			}

			.segment-variant > .switch-button {
				padding-left: var(--uui-size-space-6);
			}

			.switch-button:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
			}
			.switch-button .variant-info {
				flex-grow: 1;
			}

			.switch-button .variant-details {
				color: var(--uui-color-text-alt);
				font-size: var(--uui-type-small-size);
				font-weight: normal;
			}
			.switch-button .variant-details {
				color: var(--uui-color-text-alt);
				font-size: var(--uui-type-small-size);
				font-weight: normal;
			}
			.switch-button.add-mode .variant-details {
				color: var(--uui-palette-dusty-grey-dark);
			}

			.switch-button .specs-info {
				color: var(--uui-color-text-alt);
				font-size: var(--uui-type-small-size);
				font-weight: normal;
			}
			.switch-button.add-mode .specs-info {
				color: var(--uui-palette-dusty-grey-dark);
			}

			.switch-button i {
				font-weight: normal;
			}

			.switch-button.add-mode {
				position: relative;
				color: var(--uui-palette-dusty-grey-dark);
			}

			.switch-button.add-mode:after {
				border: 1px dashed var(--uui-color-divider-standalone);
				bottom: 0;
				content: '';
				left: 0;
				margin: 2px;
				pointer-events: none;
				position: absolute;
				right: 0;
				top: 0;
				z-index: 1;
			}

			.switch-button .variant-name {
				margin-bottom: var(--uui-size-space-1);
			}

			.switch-button.readonly-mode .variant-name {
				margin-bottom: calc(var(--uui-size-space-1) * -1);
			}

			.add-icon {
				font-size: var(--uui-type-small-size);
				margin-right: 21px;
			}

			.split-view {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 1px;
				display: none;
				background-color: var(--uui-color-surface);
				font-size: var(--uui-type-small-size);
				font-weight: 700;
			}
		`
];
_([
  Te("#popover")
], d.prototype, "_popoverElement", 2);
_([
  u()
], d.prototype, "_variantOptions", 2);
_([
  u()
], d.prototype, "_cultureVariantOptions", 2);
_([
  u()
], d.prototype, "_activeVariants", 2);
_([
  u()
], d.prototype, "_name", 2);
_([
  u()
], d.prototype, "_activeVariant", 2);
_([
  u()
], d.prototype, "_variantId", 2);
_([
  u()
], d.prototype, "_variantSelectorOpen", 2);
_([
  u()
], d.prototype, "_readOnlyCultures", 2);
_([
  u()
], d.prototype, "_variesByCulture", 2);
_([
  u()
], d.prototype, "_variesBySegment", 2);
_([
  u()
], d.prototype, "_expandedVariants", 2);
_([
  u()
], d.prototype, "_labelDefault", 2);
d = _([
  m("umb-workspace-split-view-variant-selector")
], d);
var wi = Object.defineProperty, gi = Object.getOwnPropertyDescriptor, ve = (t) => {
  throw TypeError(t);
}, I = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? gi(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && wi(e, i, a), a;
}, $i = (t, e, i) => e.has(t) || ve("Cannot " + i), xi = (t, e, i) => e.has(t) ? ve("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), St = (t, e, i) => ($i(t, e, "access private method"), i), J, me, fe;
let V = class extends f {
  constructor() {
    super(), xi(this, J), this.displayNavigation = !1, this._variantSelectorSlotHasContent = !1, this._isNew = !1, this.splitViewContext = new fi(this), this.observe(
      this.splitViewContext.isNew,
      (t) => {
        this._isNew = t ?? !1;
      },
      "umbObserveIsNew"
    );
  }
  set splitViewIndex(t) {
    this.splitViewContext.setSplitViewIndex(t);
  }
  get splitViewIndex() {
    return this.splitViewContext.getSplitViewIndex();
  }
  render() {
    return c`
			<umb-workspace-editor
				back-path=${st(this.backPath)}
				.hideNavigation=${!this.displayNavigation}
				.enforceNoFooter=${!0}>
				<slot id="icon" name="icon" slot="header"></slot>
				<slot id="header" name="variant-selector" slot="header" @slotchange=${St(this, J, me)}>
					${Wt(
      !this._variantSelectorSlotHasContent,
      () => c`<umb-workspace-split-view-variant-selector></umb-workspace-split-view-variant-selector>`
    )}
				</slot>
				${St(this, J, fe).call(this)}
				<slot name="action-menu" slot="action-menu"></slot>
			</umb-workspace-editor>
		`;
  }
};
J = /* @__PURE__ */ new WeakSet();
me = function(t) {
  this._variantSelectorSlotHasContent = t.target.assignedNodes({ flatten: !0 }).length > 0;
};
fe = function() {
  return this._isNew ? p : this.displayNavigation ? c`<umb-workspace-entity-action-menu
			slot="action-menu"
			data-mark="workspace:action-menu"></umb-workspace-entity-action-menu>` : p;
};
V.styles = [
  $,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host(:not(:last-child)) {
				border-right: 1px solid var(--uui-color-border);
			}

			#header {
				flex: 1 1 auto;
				display: block;
			}

			#icon {
				display: inline-block;
				font-size: var(--uui-size-6);
				margin-right: var(--uui-size-space-4);
			}
		`
];
I([
  h({ type: Boolean })
], V.prototype, "displayNavigation", 2);
I([
  h({ attribute: "back-path" })
], V.prototype, "backPath", 2);
I([
  h({ type: Number })
], V.prototype, "splitViewIndex", 1);
I([
  u()
], V.prototype, "_variantSelectorSlotHasContent", 2);
I([
  u()
], V.prototype, "_isNew", 2);
V = I([
  m("umb-workspace-split-view")
], V);
var Ci = Object.defineProperty, Ei = Object.getOwnPropertyDescriptor, be = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ei(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Ci(e, i, a), a;
};
let tt = class extends f {
  constructor() {
    super(...arguments), this.entityType = "";
  }
  render() {
    return c`
			<div class="uui-text">
				<h4>${this.localize.term("entityDetail_forbiddenTitle", this.entityType)}</h4>
				${this.localize.term("entityDetail_forbiddenDescription", this.entityType)}
			</div>
		`;
  }
};
tt.styles = [
  $,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host > div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			}

			@keyframes fadeIn {
				100% {
					opacity: 100%;
				}
			}
		`
];
be([
  h({ type: String, attribute: "entity-type" })
], tt.prototype, "entityType", 2);
tt = be([
  m("umb-entity-detail-forbidden")
], tt);
var Oi = Object.defineProperty, ki = Object.getOwnPropertyDescriptor, ye = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ki(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Oi(e, i, a), a;
};
let et = class extends f {
  constructor() {
    super(...arguments), this.entityType = "";
  }
  render() {
    return c`
			<div class="uui-text">
				<h4>${this.localize.term("entityDetail_notFoundTitle", this.entityType)}</h4>
				${this.localize.term("entityDetail_notFoundDescription", this.entityType)}
			</div>
		`;
  }
};
et.styles = [
  $,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host > div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			}

			@keyframes fadeIn {
				100% {
					opacity: 100%;
				}
			}
		`
];
ye([
  h({ type: String, attribute: "entity-type" })
], et.prototype, "entityType", 2);
et = ye([
  m("umb-entity-detail-not-found")
], et);
const Vi = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.IS_ENTITY_DETAIL_WORKSPACE_CONTEXT
);
var Ti = Object.defineProperty, Si = Object.getOwnPropertyDescriptor, we = (t) => {
  throw TypeError(t);
}, N = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Si(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Ti(e, i, a), a;
}, Et = (t, e, i) => e.has(t) || we("Cannot " + i), D = (t, e, i) => (Et(t, e, "read from private field"), e.get(t)), Pt = (t, e, i) => e.has(t) ? we("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Pi = (t, e, i, s) => (Et(t, e, "write to private field"), e.set(t, i), i), ct = (t, e, i) => (Et(t, e, "access private method"), i), k, z, ge, $e, xe;
let E = class extends f {
  constructor() {
    super(), Pt(this, z), this._isLoading = !1, this._isForbidden = !1, this._exists = !1, this._isNew = !1, Pt(this, k), this.consumeContext(Vi, (t) => {
      Pi(this, k, t), this.observe(D(this, k)?.entityType, (e) => this._entityType = e), this.observe(D(this, k)?.loading.isOn, (e) => this._isLoading = e ?? !1), this.observe(D(this, k)?.forbidden.isOn, (e) => this._isForbidden = e ?? !1), this.observe(D(this, k)?.data, (e) => this._exists = !!e), this.observe(D(this, k)?.isNew, (e) => this._isNew = e);
    });
  }
  render() {
    return c` ${ct(this, z, ge).call(this)} ${ct(this, z, $e).call(this)}

			<!-- TODO: It is currently on purpose that the workspace editor is always in the DOM, even when it doesn't have data.
			 We currently rely on the entity actions to be available to execute, and we ran into an issue when the entity got deleted; then the DOM got cleared, and the delete action couldn't complete.
			 We need to look into loading the entity actions in the workspace context instead so we don't rely on the DOM.
		 -->
			<umb-workspace-editor
				?loading=${this._isLoading}
				.backPath=${this.backPath}
				class="${this._exists === !1 ? "hide" : ""}">
				<slot name="header" slot="header"></slot>
				${ct(this, z, xe).call(this)}
				<slot></slot>
			</umb-workspace-editor>`;
  }
};
k = /* @__PURE__ */ new WeakMap();
z = /* @__PURE__ */ new WeakSet();
ge = function() {
  return !this._isLoading && this._isForbidden ? c`<umb-entity-detail-forbidden
				entity-type=${st(this._entityType)}></umb-entity-detail-forbidden>` : p;
};
$e = function() {
  return !this._isLoading && !this._exists ? c`<umb-entity-detail-not-found
				entity-type=${st(this._entityType)}></umb-entity-detail-not-found>` : p;
};
xe = function() {
  return this._isNew ? p : c`<umb-workspace-entity-action-menu
			slot="action-menu"
			data-mark="workspace:action-menu"></umb-workspace-entity-action-menu>`;
};
E.styles = [
  w`
			umb-workspace-editor {
				visibility: visible;
			}

			umb-workspace-editor.hide {
				visibility: hidden;
			}
		`
];
N([
  h({ attribute: "back-path" })
], E.prototype, "backPath", 2);
N([
  u()
], E.prototype, "_entityType", 2);
N([
  u()
], E.prototype, "_isLoading", 2);
N([
  u()
], E.prototype, "_isForbidden", 2);
N([
  u()
], E.prototype, "_exists", 2);
N([
  u()
], E.prototype, "_isNew", 2);
E = N([
  m("umb-entity-detail-workspace-editor")
], E);
const pa = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.IS_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT
);
var Ni = Object.defineProperty, Wi = Object.getOwnPropertyDescriptor, Ce = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Wi(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Ni(e, i, a), a;
};
let it = class extends f {
  render() {
    return c`
			<uui-box headline=${st(this.headline ? this.localize.string(this.headline) : void 0)}>
				<slot name="header-actions" slot="header-actions"></slot>
				<div id="container">
					<slot></slot>
				</div>
			</uui-box>
		`;
  }
};
it.styles = [
  w`
			uui-box {
				--uui-box-default-padding: 0;
			}
		`
];
Ce([
  h({ type: String })
], it.prototype, "headline", 2);
it = Ce([
  m("umb-workspace-info-app-layout")
], it);
var Ui = Object.defineProperty, Ai = Object.getOwnPropertyDescriptor, Ee = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ai(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Ui(e, i, a), a;
};
let U = class extends f {
  get data() {
    return this._data;
  }
  set data(t) {
    if (this._data = t, !t?.inheritValidationLook) {
      const e = this.style;
      e.setProperty("--uui-color-invalid", "var(--uui-color-danger)"), e.setProperty("--uui-color-invalid-emphasis", "var(--uui-color-danger-emphasis)"), e.setProperty("--uui-color-invalid-standalone", "var(--uui-color-danger-standalone)"), e.setProperty("--uui-color-invalid-contrast", "var(--uui-color-danger-contrast)");
    }
  }
  /**
   * TODO: Consider if this binding and events integration is the right for communicating back the modal handler. Or if we should go with some Context API. like a Modal Context API.
   *
   */
  render() {
    return this.data ? c`<umb-workspace .entityType=${this.data.entityType}></umb-workspace>` : "";
  }
};
U.styles = [
  $,
  w`
			:host {
				display: block;
				height: 100%;
			}
		`
];
Ee([
  h({ attribute: !1 })
], U.prototype, "data", 1);
U = Ee([
  m("umb-workspace-modal")
], U);
const Ii = U, ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbWorkspaceModalElement() {
    return U;
  },
  default: Ii
}, Symbol.toStringTag, { value: "Module" })), da = new Me(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    }
  }
);
var Di = Object.defineProperty, Mi = Object.getOwnPropertyDescriptor, Oe = (t) => {
  throw TypeError(t);
}, Ot = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Mi(e, i) : e, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Di(e, i, a), a;
}, kt = (t, e, i) => e.has(t) || Oe("Cannot " + i), at = (t, e, i) => (kt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), ut = (t, e, i) => e.has(t) ? Oe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ke = (t, e, i, s) => (kt(t, e, "write to private field"), e.set(t, i), i), Bi = (t, e, i) => (kt(t, e, "access private method"), i), L, R, mt, Ve;
const zi = (t) => [{ manifest: t }];
let A = class extends f {
  constructor() {
    super(...arguments), ut(this, mt), ut(this, L), ut(this, R);
  }
  get entityType() {
    return at(this, R);
  }
  set entityType(t) {
    t === at(this, R) || !t || (ke(this, R, t), Bi(this, mt, Ve).call(this, t));
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.setAttribute(Dt, "workspace");
  }
  render() {
    return this._component ?? p;
  }
};
L = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
mt = /* @__PURE__ */ new WeakSet();
Ve = function(t) {
  at(this, L) && at(this, L).destroy(), ke(this, L, new Ae(
    this,
    pt,
    "workspace",
    zi,
    (e) => e.meta.entityType === t,
    (e) => {
      this._component = e[0]?.component;
      const i = e[0]?.api;
      i && new Ie(i, pt, "workspaceContext", [i]);
    },
    void 0,
    // We can leave the alias to undefined, as we destroy this our selfs.
    void 0,
    () => import("./default-workspace.context-BIvjmH-Q.js"),
    { single: !0 }
  ));
};
Ot([
  u()
], A.prototype, "_component", 2);
Ot([
  h({ type: String, attribute: "entity-type" })
], A.prototype, "entityType", 1);
A = Ot([
  m("umb-workspace")
], A);
const _a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbWorkspaceElement() {
    return A;
  },
  get element() {
    return A;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  U as A,
  da as B,
  ti as C,
  A as D,
  ha as E,
  _a as F,
  Ze as U,
  sa as a,
  Je as b,
  ua as c,
  Qe as d,
  T as e,
  b as f,
  F as g,
  W as h,
  P as i,
  fi as j,
  jt as k,
  V as l,
  d as m,
  ra as n,
  na as o,
  di as p,
  Vi as q,
  Ye as r,
  oa as s,
  la as t,
  ca as u,
  pa as v,
  tt as w,
  et as x,
  E as y,
  it as z
};
//# sourceMappingURL=workspace.element-pzurGr3t.js.map
