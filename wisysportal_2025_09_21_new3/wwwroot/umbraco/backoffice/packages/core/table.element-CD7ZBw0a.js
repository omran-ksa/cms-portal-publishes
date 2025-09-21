import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { css as p, state as u, property as n, customElement as h, repeat as fe, html as l, nothing as $, query as K, LitElement as kt, when as S, ifDefined as y, styleMap as Ds, map as zs, classMap as Gi } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as Ki, UmbModalElement as Ls, UMB_ITEM_PICKER_MODAL as Ws, umbConfirmModal as Xi } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UMB_NOTIFICATION_CONTEXT as Bs } from "@umbraco-cms/backoffice/notification";
import { UmbOpenedEvent as Rs, UmbClosedEvent as qs, UmbChangeEvent as d, UmbDeleteEvent as Yi, UmbInputEvent as ri } from "@umbraco-cms/backoffice/event";
import { U as Vs } from "./entity.context-BLVHjEHR.js";
import { umbExtensionsRegistry as oi } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as Hs, createExtensionApi as Ns } from "@umbraco-cms/backoffice/extension-api";
import { e as Fs } from "./extractUmbColorVariable.function-C_Z99zyW.js";
import { UUIFormControlMixin as Ue, UUIInputElement as Zi, UUIRadioElement as Gs, UUIInputEvent as Ji, UUIRefNodeElement as Qi } from "@umbraco-cms/backoffice/external/uui";
import { UmbFormControlMixin as _e, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as ni } from "@umbraco-cms/backoffice/validation";
import { splitStringToArray as Ks, generateAlias as ji, clamp as ea } from "@umbraco-cms/backoffice/utils";
import { UmbSorterController as Ot } from "@umbraco-cms/backoffice/sorter";
import { UMB_PROPERTY_DATASET_CONTEXT as Xs } from "@umbraco-cms/backoffice/property";
import { UmbElementMixin as Ys } from "@umbraco-cms/backoffice/element-api";
var Zs = Object.defineProperty, Js = Object.getOwnPropertyDescriptor, ta = (e) => {
  throw TypeError(e);
}, Mt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Js(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Zs(t, i, a), a;
}, Qs = (e, t, i) => t.has(e) || ta("Cannot " + i), js = (e, t, i) => t.has(e) ? ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ve = (e, t, i) => (Qs(e, t, "access private method"), i), ce, ia, tt, aa;
let Se = class extends c {
  constructor() {
    super(), js(this, ce), this._modalElementMap = /* @__PURE__ */ new Map(), this._modals = [], this.fillBackground = !1, this.consumeContext(Ki, (e) => {
      this._modalManager = e, this._observeModals();
    });
  }
  _observeModals() {
    this._modalManager && this.observe(this._modalManager.modals, (e) => {
      Ve(this, ce, ia).call(this, e);
    });
  }
  render() {
    return l`
			<uui-modal-container id="container">
				${this._modals.length > 0 ? fe(
      this._modals,
      (e) => e.key,
      (e) => Ve(this, ce, aa).call(this, e.key)
    ) : ""}
			</uui-modal-container>
		`;
  }
};
ce = /* @__PURE__ */ new WeakSet();
ia = function(e) {
  this.fillBackground = !1;
  const t = this._modals;
  this._modals = e, t.filter((s) => !e.some((a) => a.key === s.key)).forEach((s) => {
    const a = this._modalElementMap.get(s.key);
    a?.removeEventListener("close-end", Ve(this, ce, tt).bind(this, s.key)), a?.destroy(), this._modalElementMap.delete(s.key), s.destroy();
  }), this._modals.length !== 0 && this._modals.forEach(async (s) => {
    if (this._modalElementMap.has(s.key)) return;
    const a = new Ls();
    await a.init(s), a.element?.addEventListener("close-end", Ve(this, ce, tt).bind(this, s.key)), s.addEventListener("umb:destroy", Ve(this, ce, tt).bind(this, s.key)), this._modalElementMap.set(s.key, a), s.backdropBackground && (this.fillBackground = !0, this.shadowRoot?.getElementById("container")?.style.setProperty("--backdrop-background", s.backdropBackground)), this.requestUpdate("_modalElementMap");
  });
};
tt = function(e) {
  this._modalManager?.remove(e);
};
aa = function(e) {
  const t = this._modalElementMap.get(e);
  return t ? t.render() : $;
};
Se.styles = [
  C,
  p`
			:host {
				position: absolute;
				z-index: 1000;
			}

			:host([fill-background]) {
				--uui-modal-dialog-border-radius: 0;
				--uui-shadow-depth-5: 0;
			}

			:host([fill-background]) #container::after {
				background: var(--backdrop-background);
			}
		`
];
Mt([
  u()
], Se.prototype, "_modalElementMap", 2);
Mt([
  u()
], Se.prototype, "_modals", 2);
Mt([
  n({ type: Boolean, reflect: !0, attribute: "fill-background" })
], Se.prototype, "fillBackground", 2);
Se = Mt([
  h("umb-backoffice-modal-container")
], Se);
var er = Object.defineProperty, tr = Object.getOwnPropertyDescriptor, li = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? tr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && er(t, i, a), a;
};
let Fe = class extends c {
  constructor() {
    super(), this.consumeContext(Bs, (e) => {
      this._notificationContext = e, this._observeNotifications();
    });
  }
  _observeNotifications() {
    this._notificationContext && this.observe(this._notificationContext.notifications, (e) => {
      this._notifications = e, this._notificationsElement?.hidePopover?.(), this._notificationsElement?.showPopover?.();
    });
  }
  render() {
    return l`
			<uui-toast-notification-container bottom-up id="notifications" popover="manual">
				${this._notifications ? fe(
      this._notifications,
      (e) => e.key,
      (e) => l`${e.element}`
    ) : ""}
			</uui-toast-notification-container>
		`;
  }
};
Fe.styles = [
  C,
  p`
			#notifications {
				top: 0;
				left: 0;
				right: 0;
				bottom: 45px;
				height: auto;
				padding: var(--uui-size-layout-1);

				position: fixed;
				width: 100vw;
				background: 0;
				outline: 0;
				border: 0;
				margin: 0;
			}
		`
];
li([
  K("#notifications")
], Fe.prototype, "_notificationsElement", 2);
li([
  u()
], Fe.prototype, "_notifications", 2);
Fe = li([
  h("umb-backoffice-notification-container")
], Fe);
var ir = Object.defineProperty, ar = Object.getOwnPropertyDescriptor, sa = (e) => {
  throw TypeError(e);
}, q = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ar(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && ir(t, i, a), a;
}, ra = (e, t, i) => t.has(e) || sa("Cannot " + i), he = (e, t, i) => (ra(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Lt = (e, t, i) => t.has(e) ? sa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Wt = (e, t, i) => (ra(e, t, "access private method"), i), ue, it, We, at;
let w = class extends kt {
  constructor() {
    super(...arguments), Lt(this, We), this.headline = "", this.headerTransparent = !1, this.loading = !1, this._headerSlotHasChildren = !1, this._navigationSlotHasChildren = !1, this._actionsMenuSlotHasChildren = !1, this._footerSlotHasChildren = !1, this._actionsSlotHasChildren = !1, Lt(this, ue, (e) => e.target.assignedNodes({ flatten: !0 }).length > 0), Lt(this, it, () => {
      this._scrollContainer && this.toggleAttribute("scrolling", this._scrollContainer.scrollTop > 0);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.headerTransparent && requestAnimationFrame(() => {
      this._scrollContainer?.addEventListener("scroll", he(this, it));
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._scrollContainer?.removeEventListener("scroll", he(this, it));
  }
  render() {
    return l`
			<div
				id="header"
				style="display: ${this.headline || this._headerSlotHasChildren || this._actionsMenuSlotHasChildren || this._navigationSlotHasChildren ? "" : "none"}">
				${this.headline ? l`<h3 id="headline">${this.headline}</h3>` : $}

				<slot
					id="header-slot"
					name="header"
					@slotchange=${(e) => {
      this._headerSlotHasChildren = he(this, ue).call(this, e), Wt(this, We, at).call(this, e.target, this._headerSlotHasChildren);
    }}></slot>
				<slot
					id="action-menu-slot"
					name="action-menu"
					@slotchange=${(e) => {
      this._actionsMenuSlotHasChildren = he(this, ue).call(this, e), Wt(this, We, at).call(this, e.target, this._actionsMenuSlotHasChildren);
    }}></slot>
				<slot
					id="navigation-slot"
					name="navigation"
					@slotchange=${(e) => {
      this._navigationSlotHasChildren = he(this, ue).call(this, e), Wt(this, We, at).call(this, e.target, this._navigationSlotHasChildren);
    }}></slot>
			</div>

			<!-- This div should be changed for the uui-scroll-container when it gets updated -->
			<div id="main">
				${this.loading ? l`<uui-loader-bar></uui-loader-bar>` : $}
				<slot></slot>
			</div>

			<slot name="footer"></slot>
			<umb-footer-layout style="display:${this._footerSlotHasChildren || this._actionsSlotHasChildren ? "" : "none"}">
				<slot
					name="footer-info"
					@slotchange=${(e) => {
      this._footerSlotHasChildren = he(this, ue).call(this, e);
    }}></slot>
				<slot
					name="actions"
					slot="actions"
					@slotchange=${(e) => {
      this._actionsSlotHasChildren = he(this, ue).call(this, e);
    }}></slot>
			</umb-footer-layout>
		`;
  }
};
ue = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
We = /* @__PURE__ */ new WeakSet();
at = function(e, t) {
  e.style.display = t ? "flex" : "none";
};
w.styles = [
  C,
  p`
			:host {
				display: flex;
				background-color: var(--umb-body-layout-color-background, var(--uui-color-background));
				width: 100%;
				height: 100%;
				flex-direction: column;
			}

			#header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: var(--umb-header-layout-height);
				background-color: var(--uui-color-surface);
				border-bottom: 1px solid var(--uui-color-border);
				box-sizing: border-box;
				z-index: 1;
			}
			:host([header-transparent]) #header {
				background-color: transparent;
				border-color: transparent;
				transition: box-shadow 150ms ease-in-out;
				box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.5);
			}
			:host([header-transparent][scrolling]) #header {
				/* This should be using the uui-shadows but for now they are too drastic for this use case */
				box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.2);
			}
			:host([header-fit-height][header-transparent]:not([header-no-padding])) #header-slot {
				padding: var(--uui-size-layout-1);
			}
			:host([header-fit-height]) #header {
				height: fit-content;
			}
			#header-slot {
				padding: 0 var(--uui-size-layout-1);
				flex-grow: 1;
			}
			:host([header-no-padding]) #header-slot {
				padding: 0;
			}

			:host([header-transparent]:not([main-no-padding])) #main:not(*[style='display: none'] + *) {
				/* The following styling is only applied if the clear-header IS present,
				the main-no-padding attribute is NOT present, and the header is NOT hidden */
				padding-top: var(--uui-size-space-1);
			}
			:host([main-no-padding]) #main {
				padding: 0;
			}

			#header-slot,
			#action-menu-slot,
			#navigation-slot {
				display: none;
				height: 100%;
				align-items: center;
				box-sizing: border-box;
				min-width: 0;
			}
			#navigation-slot {
				margin-left: auto;
			}

			#headline {
				display: block;
				margin: 0 var(--uui-size-layout-1);
			}

			#main {
				display: block;
				flex: 1;
				flex-direction: column;
				overflow-y: auto;
				padding: var(--uui-size-layout-1);
			}

			#main > slot::slotted(*:first-child) {
				padding-top: 0;
				margin-top: 0;
			}
		`
];
q([
  K("#main")
], w.prototype, "_scrollContainer", 2);
q([
  n()
], w.prototype, "headline", 2);
q([
  n({ type: Boolean, reflect: !0, attribute: "header-transparent" })
], w.prototype, "headerTransparent", 2);
q([
  n({ type: Boolean })
], w.prototype, "loading", 2);
q([
  u()
], w.prototype, "_headerSlotHasChildren", 2);
q([
  u()
], w.prototype, "_navigationSlotHasChildren", 2);
q([
  u()
], w.prototype, "_actionsMenuSlotHasChildren", 2);
q([
  u()
], w.prototype, "_footerSlotHasChildren", 2);
q([
  u()
], w.prototype, "_actionsSlotHasChildren", 2);
w = q([
  h("umb-body-layout")
], w);
var sr = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, oa = (e) => {
  throw TypeError(e);
}, At = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? rr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && sr(t, i, a), a;
}, or = (e, t, i) => t.has(e) || oa("Cannot " + i), nr = (e, t, i) => t.has(e) ? oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), lr = (e, t, i) => (or(e, t, "access private method"), i), Nt, na;
let Pe = class extends kt {
  constructor() {
    super(...arguments), nr(this, Nt), this.language = "", this.copy = !1, this._copyState = "idle";
  }
  async copyCode() {
    const e = this.textContent;
    e && (await navigator.clipboard.writeText(e), this._copyState = "success", setTimeout(() => {
      this._copyState = "idle";
    }, 2e3));
  }
  render() {
    return l`
			${lr(this, Nt, na).call(this)}
			<pre><uui-scroll-container><code><slot></slot></code></uui-scroll-container></pre>
		`;
  }
};
Nt = /* @__PURE__ */ new WeakSet();
na = function() {
  if (!(!this.language && !this.copy))
    return l`
			<div id="header">
				<span id="lang">${this.language}</span>
				${S(
      this.copy,
      () => l`
						<uui-button color=${this._copyState === "idle" ? "default" : "positive"} @click=${this.copyCode}>
							${S(
        this._copyState === "idle",
        () => l`<uui-icon name="copy"></uui-icon> <umb-localize key="general_copy">Copy</umb-localize>`,
        () => l`<uui-icon name="check"></uui-icon> <umb-localize key="general_copied">Copied!</umb-localize>`
      )}
						</uui-button>
					`
    )}
			</div>
		`;
};
Pe.styles = [
  C,
  p`
			:host {
				display: block;
				border: 1px solid var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
			}

			uui-scroll-container {
				overflow-y: auto;
				overflow-wrap: anywhere;
			}

			pre {
				font-family: monospace;
				background-color: var(--uui-color-surface-alt);
				color: #303033;
				display: block;
				margin: 0;
				overflow-x: auto;
				padding: 9.5px;
			}

			pre,
			code {
				word-wrap: normal;
				white-space: pre;
			}

			#header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: var(--uui-color-surface-alt);
				border-bottom: 1px solid var(--uui-color-divider-emphasis);
			}

			#lang {
				margin-left: 16px;
				font-weight: bold;
			}

			button {
				font-family: inherit;
				padding: 6px 16px;
				background-color: transparent;
				border: none;
				border-left: 1px solid var(--uui-color-divider-emphasis);
				border-radius: 0;
				color: #000;
				display: flex;
				align-items: center;
				gap: 8px;
			}

			button:hover {
				background-color: var(--uui-color-surface-emphasis);
			}
		`
];
At([
  n()
], Pe.prototype, "language", 2);
At([
  n({ type: Boolean })
], Pe.prototype, "copy", 2);
At([
  u()
], Pe.prototype, "_copyState", 2);
Pe = At([
  h("umb-code-block")
], Pe);
var hr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, la = (e) => {
  throw TypeError(e);
}, X = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ur(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && hr(t, i, a), a;
}, hi = (e, t, i) => t.has(e) || la("Cannot " + i), Pi = (e, t, i) => (hi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ki = (e, t, i) => t.has(e) ? la("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Bt = (e, t, i, s) => (hi(e, t, "write to private field"), t.set(e, i), i), pr = (e, t, i) => (hi(e, t, "access private method"), i), pe, Ft, ha;
let k = class extends c {
  constructor() {
    super(...arguments), ki(this, Ft), ki(this, pe, !1), this.look = "default", this.color = "default", this.placement = "bottom-start", this.compact = !1, this.hideExpand = !1;
  }
  get open() {
    return Pi(this, pe);
  }
  set open(e) {
    Bt(this, pe, e), e === !0 && this.popoverContainerElement ? this.openDropdown() : this.closeDropdown();
  }
  openDropdown() {
    this.popoverContainerElement?.showPopover(), Bt(this, pe, !0);
  }
  closeDropdown() {
    this.popoverContainerElement?.hidePopover(), Bt(this, pe, !1);
  }
  render() {
    return l`
			<uui-button
				id="dropdown-button"
				popovertarget="dropdown-popover"
				data-mark="open-dropdown"
				.look=${this.look}
				.color=${this.color}
				.label=${this.label ?? ""}
				.compact=${this.compact}>
				<slot name="label"></slot>
				${S(
      !this.hideExpand,
      () => l`<uui-symbol-expand id="symbol-expand" .open=${Pi(this, pe)}></uui-symbol-expand>`
    )}
			</uui-button>
			<uui-popover-container id="dropdown-popover" .placement=${this.placement} @toggle=${pr(this, Ft, ha)}>
				<umb-popover-layout>
					<slot></slot>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
pe = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakSet();
ha = function(e) {
  this.open = e.newState === "open", this.open ? this.dispatchEvent(new Rs()) : this.dispatchEvent(new qs());
};
k.styles = [
  C,
  p`
			#dropdown-button {
				min-width: max-content;
				height: 100%;
			}
			:host(:not([hide-expand]):not([compact])) #dropdown-button {
				--uui-button-padding-right-factor: 2;
			}

			:host(:not([compact])) #symbol-expand {
				margin-left: var(--uui-size-space-2);
			}
		`
];
X([
  n({ type: Boolean, reflect: !0 })
], k.prototype, "open", 1);
X([
  n()
], k.prototype, "label", 2);
X([
  n()
], k.prototype, "look", 2);
X([
  n()
], k.prototype, "color", 2);
X([
  n()
], k.prototype, "placement", 2);
X([
  n({ type: Boolean })
], k.prototype, "compact", 2);
X([
  n({ type: Boolean, attribute: "hide-expand" })
], k.prototype, "hideExpand", 2);
X([
  K("#dropdown-popover")
], k.prototype, "popoverContainerElement", 2);
k = X([
  h("umb-dropdown")
], k);
var cr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, ua = (e) => {
  throw TypeError(e);
}, re = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? dr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && cr(t, i, a), a;
}, ui = (e, t, i) => t.has(e) || ua("Cannot " + i), gt = (e, t, i) => (ui(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Je = (e, t, i) => t.has(e) ? ua("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), pa = (e, t, i, s) => (ui(e, t, "write to private field"), t.set(e, i), i), $e = (e, t, i) => (ui(e, t, "access private method"), i), st, bt, $t, ie, Gt, ca, da, ma, va;
let L = class extends c {
  constructor() {
    super(), Je(this, ie), this._numberOfActions = 0, Je(this, st, new Vs(this)), Je(this, bt, !1), Je(this, $t, !1), new IntersectionObserver(
      (t) => {
        t.forEach((i) => {
          i.isIntersecting && (pa(this, bt, !0), $e(this, ie, Gt).call(this));
        });
      },
      {
        root: null,
        // Use the viewport as the root
        threshold: 0.1
        // Trigger when at least 10% of the element is visible
      }
    ).observe(this);
  }
  updated(e) {
    e.has("entityType") && e.has("unique") && (gt(this, st).setEntityType(this.entityType), gt(this, st).setUnique(this.unique ?? null), $e(this, ie, Gt).call(this));
  }
  render() {
    return this._numberOfActions === 0 ? $ : l`<uui-action-bar slot="actions">${$e(this, ie, ma).call(this)} ${$e(this, ie, va).call(this)} </uui-action-bar>`;
  }
};
st = /* @__PURE__ */ new WeakMap();
bt = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakSet();
Gt = function() {
  this.entityType && this.unique !== void 0 && gt(this, bt) && (gt(this, $t) || (new Hs(
    this,
    oi,
    "entityAction",
    (e) => e.forEntityTypes.includes(this.entityType),
    async (e) => {
      this._numberOfActions = e.length, this._firstActionManifest = this._numberOfActions > 0 ? e[0].manifest : void 0, $e(this, ie, ca).call(this);
    },
    "umbEntityActionsObserver"
  ), pa(this, $t, !0)));
};
ca = async function() {
  this._firstActionManifest && (this._firstActionApi = await Ns(this, this._firstActionManifest, [
    { unique: this.unique, entityType: this.entityType, meta: this._firstActionManifest.meta }
  ]), this._firstActionApi && (this._firstActionApi.manifest = this._firstActionManifest, this._firstActionHref = await this._firstActionApi.getHref()));
};
da = async function(e) {
  this._firstActionHref || (e.stopPropagation(), await this._firstActionApi?.execute().catch(() => {
  }));
};
ma = function() {
  return this._numberOfActions === 1 ? $ : l`
			<umb-entity-actions-dropdown .label=${this.label} compact>
				<uui-symbol-more slot="label"></uui-symbol-more>
			</umb-entity-actions-dropdown>
		`;
};
va = function() {
  return !this._firstActionApi || !this._firstActionManifest ? $ : l`<uui-button
			label=${this.localize.string(this._firstActionManifest.meta.label)}
			data-mark=${"entity-action:" + this._firstActionManifest.alias}
			@click=${$e(this, ie, da)}
			href="${y(this._firstActionHref)}">
			<uui-icon name=${y(this._firstActionManifest.meta.icon)}></uui-icon>
		</uui-button>`;
};
L.styles = [
  p`
			uui-scroll-container {
				max-height: 700px;
			}
		`
];
re([
  n({ type: String, attribute: "entity-type" })
], L.prototype, "entityType", 2);
re([
  n({ type: String })
], L.prototype, "unique", 2);
re([
  n({ type: String })
], L.prototype, "label", 2);
re([
  u()
], L.prototype, "_numberOfActions", 2);
re([
  u()
], L.prototype, "_firstActionManifest", 2);
re([
  u()
], L.prototype, "_firstActionApi", 2);
re([
  u()
], L.prototype, "_firstActionHref", 2);
L = re([
  h("umb-entity-actions-bundle")
], L);
var mr = Object.getOwnPropertyDescriptor, vr = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? mr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let Kt = class extends kt {
  render() {
    return l`
			<slot></slot>
			<slot id="actions" name="actions"></slot>
		`;
  }
};
Kt.styles = [
  C,
  p`
			:host {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: var(--umb-footer-layout-height);
				border-top: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
				box-sizing: border-box;
			}

			#actions {
				display: flex;
				gap: var(--uui-size-space-2);
				margin: 0 var(--uui-size-layout-1);
				margin-left: auto;
			}
		`
];
Kt = vr([
  h("umb-footer-layout")
], Kt);
var fr = Object.getOwnPropertyDescriptor, _r = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? fr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
const yr = {
  type: "kind",
  alias: "Umb.Kind.Button",
  matchKind: "button",
  matchType: "headerApp",
  manifest: {
    type: "headerApp",
    kind: "button",
    elementName: "umb-header-app-button"
  }
};
oi.register(yr);
let Xt = class extends c {
  render() {
    return l`
			<uui-button
				look="primary"
				label=${y(this.manifest?.meta.label)}
				href=${y(this.manifest?.meta.href)}
				compact>
				<umb-icon name=${y(this.manifest?.meta.icon)}></umb-icon>
			</uui-button>
		`;
  }
};
Xt.styles = [
  C,
  p`
			uui-button {
				font-size: 18px;
				--uui-button-background-color: var(--umb-header-app-button-background-color, transparent);
				--uui-button-background-color-hover: var(
					--umb-header-app-button-background-color-hover,
					var(--uui-color-emphasis)
				);
			}
		`
];
Xt = _r([
  h("umb-header-app-button")
], Xt);
var gr = Object.defineProperty, br = Object.getOwnPropertyDescriptor, pi = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? br(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && gr(t, i, a), a;
};
let Ge = class extends c {
  render() {
    return l`
			<div class="user-info">
				<slot name="avatar"></slot>
				<div>
					<span class="name">${this.name}</span>
					<span class="detail">${this.detail}</span>
				</div>
			</div>
			<slot id="description"></slot>
			<slot id="actions-container" name="actions"></slot>
		`;
  }
};
Ge.styles = [
  C,
  p`
			:host {
				--avatar-size: calc(2em + 4px);
				display: contents;
			}

			slot[name='actions'] {
				--uui-button-border-radius: 50px 50px 50px 50px;
				display: flex;
				align-items: center;
				--uui-button-height: calc(var(--uui-size-2) * 4);
				margin-right: var(--uui-size-2);
			}

			#actions-container {
				opacity: 0;
				transition: opacity 120ms;
			}

			:host(:hover) #actions-container {
				opacity: 1;
			}

			:host(:hover) #actions-container {
				opacity: 1;
			}

			.user-info {
				position: relative;
				display: flex;
				align-items: flex-end;
				gap: var(--uui-size-space-5);
			}

			.user-info div {
				display: flex;
				flex-direction: column;
				min-width: var(--uui-size-60);
			}

			.detail {
				font-size: var(--uui-size-4);
				color: var(--uui-color-text-alt);
				line-height: 1;
			}
		`
];
pi([
  n({ type: String })
], Ge.prototype, "name", 2);
pi([
  n({ type: String })
], Ge.prototype, "detail", 2);
Ge = pi([
  h("umb-history-item")
], Ge);
var $r = Object.getOwnPropertyDescriptor, wr = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? $r(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let Yt = class extends c {
  render() {
    return l`<slot></slot> `;
  }
};
Yt.styles = [
  C,
  p`
			:host {
				display: grid;
				grid-template-columns: auto 1fr auto;
				align-items: center;
				--avatar-size: calc(2em + 4px);
				gap: var(--uui-size-6);
				position: relative;
			}

			/** TODO: This doesn't work due to "display:contents" in umb-history-item, but is needed for the way I put the grid together.
			* Find a different solution so we can have the grey line that links each history item together (this is purely a visual effect, no rush)

			::slotted(*) {
				position: relative;
			}

			::slotted(*:not(:last-child)) {
				margin-bottom: calc(2 * var(--uui-size-space-3));
			}
			::slotted(*:not(:last-child))::before {
				content: '';
				border: 1px solid var(--uui-color-border);
				position: absolute;
				display: block;
				height: calc(1.5 * var(--avatar-size));
				top: var(--avatar-size);
				left: calc(-1px + var(--avatar-size) / 2);
			}
			*/
		`
];
Yt = wr([
  h("umb-history-list")
], Yt);
var Er = Object.defineProperty, xr = Object.getOwnPropertyDescriptor, fa = (e) => {
  throw TypeError(e);
}, Ze = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? xr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Er(t, i, a), a;
}, ci = (e, t, i) => t.has(e) || fa("Cannot " + i), wt = (e, t, i) => (ci(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Rt = (e, t, i) => t.has(e) ? fa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Oi = (e, t, i, s) => (ci(e, t, "write to private field"), t.set(e, i), i), Mi = (e, t, i) => (ci(e, t, "access private method"), i), He, Ne, rt, Zt;
let ve = class extends c {
  constructor() {
    super(...arguments), Rt(this, rt), Rt(this, He), Rt(this, Ne), this._style = {};
  }
  set color(e) {
    Oi(this, He, e), Mi(this, rt, Zt).call(this);
  }
  get color() {
    return wt(this, He) || wt(this, Ne);
  }
  set name(e) {
    const [t, i] = e ? e.split(" ") : [];
    Oi(this, Ne, i), this._icon = t, Mi(this, rt, Zt).call(this);
  }
  get name() {
    return this._icon;
  }
  render() {
    return l`<uui-icon name=${y(this._icon)} style=${Ds(this._style)}></uui-icon>`;
  }
};
He = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakSet();
Zt = function() {
  const e = wt(this, He) || wt(this, Ne);
  if (!e) {
    this._style = { "--uui-icon-color": "inherit" };
    return;
  }
  const t = e.replace("color-", ""), i = Fs(t), s = i ? `var(${i})` : t;
  this._style = { "--uui-icon-color": s };
};
ve.styles = [
  C,
  p`
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
Ze([
  u()
], ve.prototype, "_icon", 2);
Ze([
  u()
], ve.prototype, "_style", 2);
Ze([
  n({ type: String })
], ve.prototype, "color", 1);
Ze([
  n({ type: String })
], ve.prototype, "name", 1);
ve = Ze([
  h("umb-icon")
], ve);
var Cr = Object.defineProperty, Sr = Object.getOwnPropertyDescriptor, _a = (e) => {
  throw TypeError(e);
}, Ut = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Sr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Cr(t, i, a), a;
}, Pr = (e, t, i) => t.has(e) || _a("Cannot " + i), kr = (e, t, i) => t.has(e) ? _a("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ai = (e, t, i) => (Pr(e, t, "access private method"), i), ot, ya, ga;
let Ke = class extends Ue(c, "") {
  constructor() {
    super(...arguments), kr(this, ot), this.readonly = !1, this.showLabels = !1;
  }
  getFormElement() {
  }
  render() {
    return l`
			<uui-color-swatches
				?readonly=${this.readonly}
				label="Color picker"
				value=${this.value ?? ""}
				@change=${Ai(this, ot, ya)}>
				${Ai(this, ot, ga).call(this)}
			</uui-color-swatches>
		`;
  }
};
ot = /* @__PURE__ */ new WeakSet();
ya = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
ga = function() {
  return this.swatches ? zs(
    this.swatches,
    (e) => l`
				<uui-color-swatch label=${e.label} value=${e.value} .showLabel=${this.showLabels}></uui-color-swatch>
			`
  ) : $;
};
Ut([
  n({ type: Boolean, reflect: !0 })
], Ke.prototype, "readonly", 2);
Ut([
  n({ type: Boolean })
], Ke.prototype, "showLabels", 2);
Ut([
  n({ type: Array })
], Ke.prototype, "swatches", 2);
Ke = Ut([
  h("umb-input-color")
], Ke);
var Or = Object.getOwnPropertyDescriptor, Mr = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Or(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let Jt = class extends Zi {
  /**
   * Specifies the date and time type of the input that will be rendered.
   * @type {InputDateType}
   * @enum {InputDateType}
   */
  set type(e) {
    super.type = e;
  }
  get type() {
    return super.type;
  }
  constructor() {
    super(), this.type = "date";
  }
};
Jt.styles = [
  ...Zi.styles,
  p`
			input {
				color-scheme: var(--uui-color-scheme, normal);
			}
		`
];
Jt = Mr([
  h("umb-input-date")
], Jt);
var Ar = Object.defineProperty, Ur = Object.getOwnPropertyDescriptor, ba = (e) => {
  throw TypeError(e);
}, oe = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ur(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Ar(t, i, a), a;
}, di = (e, t, i) => t.has(e) || ba("Cannot " + i), Ir = (e, t, i) => (di(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ui = (e, t, i) => t.has(e) ? ba("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Tr = (e, t, i, s) => (di(e, t, "write to private field"), t.set(e, i), i), Dr = (e, t, i) => (di(e, t, "access private method"), i), nt, Qt, $a;
let W = class extends _e(c, void 0) {
  constructor() {
    super(), Ui(this, Qt), Ui(this, nt), this.name = "Dropdown", this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ni,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set options(e) {
    Tr(this, nt, e), this.value = e?.filter((t) => t.selected).map((t) => t.value).join(", ") ?? void 0;
  }
  get options() {
    return Ir(this, nt);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-select"));
  }
  render() {
    return l`
			<uui-select
				label=${this.localize.term(this.localize.term("general_fieldFor", [this.name]))}
				.placeholder=${this.placeholder ?? ""}
				.options=${this.options ?? []}
				@change=${Dr(this, Qt, $a)}
				?readonly=${this.readonly}>
			</uui-select>
		`;
  }
};
nt = /* @__PURE__ */ new WeakMap();
Qt = /* @__PURE__ */ new WeakSet();
$a = function(e) {
  e.stopPropagation(), this.value = e.target.value?.toString() ?? void 0, this.dispatchEvent(new d());
};
W.styles = [
  p`
			:host {
				display: block;
			}
		`
];
oe([
  n({ type: Array })
], W.prototype, "options", 1);
oe([
  n({ type: String })
], W.prototype, "placeholder", 2);
oe([
  n({ type: Boolean })
], W.prototype, "multiple", 2);
oe([
  n({ type: String })
], W.prototype, "name", 2);
oe([
  n({ type: Boolean })
], W.prototype, "required", 2);
oe([
  n({ type: String })
], W.prototype, "requiredMessage", 2);
oe([
  n({ type: Boolean, reflect: !0 })
], W.prototype, "readonly", 2);
W = oe([
  h("umb-input-dropdown-list")
], W);
var zr = Object.defineProperty, Lr = Object.getOwnPropertyDescriptor, wa = (e) => {
  throw TypeError(e);
}, V = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Lr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && zr(t, i, a), a;
}, mi = (e, t, i) => t.has(e) || wa("Cannot " + i), m = (e, t, i) => (mi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), De = (e, t, i) => t.has(e) ? wa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), qt = (e, t, i, s) => (mi(e, t, "write to private field"), t.set(e, i), i), we = (e, t, i) => (mi(e, t, "access private method"), i), jt, lt, ht, v, ae, Ea, xa, Ca, Sa, Pa, ka;
let E = class extends _e(
  c
) {
  constructor() {
    super(), De(this, ae), De(this, jt, new Ot(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputEntity",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new d());
      }
    })), De(this, lt, 0), this.minMessage = "This field need more items", De(this, ht, 1 / 0), this.maxMessage = "This field exceeds the allowed amount of items", De(this, v), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && (m(this, v)?.getSelection().length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && (m(this, v)?.getSelection().length ?? 0) > this.max
    );
  }
  getFormElement() {
  }
  set min(e) {
    qt(this, lt, e), m(this, v) && (m(this, v).min = e);
  }
  get min() {
    return m(this, lt);
  }
  set max(e) {
    qt(this, ht, e), m(this, v) && (m(this, v).max = e);
  }
  get max() {
    return m(this, ht);
  }
  set selection(e) {
    m(this, v)?.setSelection(e), m(this, jt).setModel(e);
  }
  get selection() {
    return m(this, v)?.getSelection() ?? [];
  }
  set value(e) {
    this.selection = Ks(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  set pickerContext(e) {
    m(this, v) || (qt(this, v, e ? new e(this) : void 0), we(this, ae, Ea).call(this));
  }
  get pickerContext() {
    return m(this, v);
  }
  render() {
    return l`${we(this, ae, Pa).call(this)} ${we(this, ae, Sa).call(this)}`;
  }
};
jt = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakSet();
Ea = async function() {
  m(this, v) && (m(this, v).min = this.min, m(this, v).max = this.max, this.observe(m(this, v).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(m(this, v).selectedItems, (e) => this._items = e, "_observerItems"));
};
xa = function() {
  m(this, v)?.openPicker({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: ignoring this for now to prevent breaking existing functionality.
    // if we want a very generic input it should be possible to pass in picker config
    hideTreeRoot: !0
  });
};
Ca = function(e) {
  m(this, v)?.requestRemoveItem(e.unique);
};
Sa = function() {
  if (!(this.max === 1 && this.selection && this.selection.length >= this.max))
    return l`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${we(this, ae, xa)}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
};
Pa = function() {
  if (this._items)
    return l`
			<uui-ref-list>
				${fe(
      this._items,
      (e) => e.unique,
      (e) => we(this, ae, ka).call(this, e)
    )}
			</uui-ref-list>
		`;
};
ka = function(e) {
  if (!e.unique) return;
  const t = this.getIcon?.(e) ?? e.icon ?? "";
  return l`
			<uui-ref-node name=${e.name} id=${e.unique}>
				${S(t, () => l`<umb-icon slot="icon" name=${t}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button @click=${() => we(this, ae, Ca).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
E.styles = [
  p`
			#btn-add {
				width: 100%;
			}
		`
];
V([
  n({ type: Number })
], E.prototype, "min", 1);
V([
  n({ type: String, attribute: "min-message" })
], E.prototype, "minMessage", 2);
V([
  n({ type: Number })
], E.prototype, "max", 1);
V([
  n({ attribute: !1 })
], E.prototype, "getIcon", 2);
V([
  n({ type: String, attribute: "min-message" })
], E.prototype, "maxMessage", 2);
V([
  n({ type: Array })
], E.prototype, "selection", 1);
V([
  n({ type: String })
], E.prototype, "value", 1);
V([
  n({ attribute: !1 })
], E.prototype, "pickerContext", 1);
V([
  u()
], E.prototype, "_items", 2);
E = V([
  h("umb-input-entity")
], E);
var Wr = Object.defineProperty, Br = Object.getOwnPropertyDescriptor, Oa = (e) => {
  throw TypeError(e);
}, It = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Br(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Wr(t, i, a), a;
}, Rr = (e, t, i) => t.has(e) || Oa("Cannot " + i), qr = (e, t, i) => t.has(e) ? Oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ii = (e, t, i) => (Rr(e, t, "access private method"), i), ut, ei;
let Xe = class extends Ue(c, "") {
  constructor() {
    super(...arguments), qr(this, ut), this.opacity = !1, this.showPalette = !1;
  }
  getFormElement() {
  }
  // HACK: Since `uui-color-picker` doesn't have an option to hide the swatches, we had to get creative.
  // Based on UUI v1.8.0-rc3, the value of `swatches` must be a falsey value to hide them.
  // https://github.com/umbraco/Umbraco.UI/blob/v1.8.0-rc.3/packages/uui-color-picker/lib/uui-color-picker.element.ts#L517
  // However, the object-type for `swatches` is a `string[]` (non-nullable).
  // https://github.com/umbraco/Umbraco.UI/blob/v1.8.0-rc.3/packages/uui-color-picker/lib/uui-color-picker.element.ts#L157
  // To do this, we must omit the `.swatches` attribute, otherwise the default swatches can't be used.
  // So, we've use a `when()` render both configurations. [LK]
  render() {
    const e = this.showPalette ? this.swatches : void 0;
    return S(
      this.showPalette && !e,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.value=${this.value}
					@change=${Ii(this, ut, ei)}>
				</uui-color-picker>
			`,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.swatches=${e}
					.value=${this.value}
					@change=${Ii(this, ut, ei)}>
				</uui-color-picker>
			`
    );
  }
};
ut = /* @__PURE__ */ new WeakSet();
ei = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
It([
  n({ type: Boolean })
], Xe.prototype, "opacity", 2);
It([
  n({ type: Boolean })
], Xe.prototype, "showPalette", 2);
It([
  n({ type: Array })
], Xe.prototype, "swatches", 2);
Xe = It([
  h("umb-input-eye-dropper")
], Xe);
var Vr = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, Ma = (e) => {
  throw TypeError(e);
}, Tt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Hr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Vr(t, i, a), a;
}, vi = (e, t, i) => t.has(e) || Ma("Cannot " + i), Et = (e, t, i) => (vi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Vt = (e, t, i) => t.has(e) ? Ma("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Aa = (e, t, i, s) => (vi(e, t, "write to private field"), t.set(e, i), i), Ti = (e, t, i) => (vi(e, t, "access private method"), i), Dt, Ee, pt, Ua, Ia;
let ke = class extends c {
  constructor() {
    super(...arguments), Vt(this, pt), Vt(this, Dt, []), Vt(this, Ee), this.max = 1 / 0;
  }
  set extensionType(e) {
    Aa(this, Ee, e), Ti(this, pt, Ua).call(this);
  }
  get extensionType() {
    return Et(this, Ee);
  }
  render() {
    return l`
			<uui-button
				label=${this.localize.term("general_choose")}
				look="placeholder"
				color="default"
				@click=${Ti(this, pt, Ia)}></uui-button>
		`;
  }
};
Dt = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakSet();
Ua = function() {
  Et(this, Ee) && this.observe(oi.byType(Et(this, Ee)), (e) => {
    Aa(this, Dt, e.sort((t, i) => t.type.localeCompare(i.type) || t.alias.localeCompare(i.alias)));
  });
};
Ia = async function() {
  const e = await this.getContext(Ki);
  if (!e)
    throw new Error("Modal manager not found.");
  const i = await e.open(this, Ws, {
    data: {
      headline: `${this.localize.term("general_choose")}...`,
      items: Et(this, Dt).filter((s) => s.type === this.extensionType).map((s) => ({
        label: s.name,
        value: s.alias,
        description: s.alias,
        icon: s.meta?.icon
        // HACK: Ugly way to get the icon. [LK]
      }))
    }
  }).onSubmit();
  i && (this.value = i, this.dispatchEvent(new d()));
};
ke.styles = [
  p`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
Tt([
  n({ type: String, attribute: "extension-type" })
], ke.prototype, "extensionType", 1);
Tt([
  n({ attribute: !1 })
], ke.prototype, "value", 2);
Tt([
  n({ type: Number })
], ke.prototype, "max", 2);
ke = Tt([
  h("umb-input-manifest")
], ke);
var Nr = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, Ta = (e) => {
  throw TypeError(e);
}, T = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Fr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Nr(t, i, a), a;
}, fi = (e, t, i) => t.has(e) || Ta("Cannot " + i), Gr = (e, t, i) => (fi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Di = (e, t, i) => t.has(e) ? Ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Kr = (e, t, i, s) => (fi(e, t, "write to private field"), t.set(e, i), i), zi = (e, t, i) => (fi(e, t, "access private method"), i), ct, dt, Da, za;
function Li(e) {
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
let g = class extends _e(c) {
  constructor() {
    super(), Di(this, dt), this.minLabel = "Low value", this.maxLabel = "High value", Di(this, ct), this._minPlaceholder = "", this._maxPlaceholder = "", this.addValidator(
      "patternMismatch",
      () => "The low value must not be exceed the high value",
      () => this._minValue !== void 0 && this._maxValue !== void 0 ? this._minValue > this._maxValue : !1
    );
  }
  set minValue(e) {
    this._minValue = e, this.updateValue();
  }
  get minValue() {
    return this._minValue;
  }
  set maxValue(e) {
    this._maxValue = e, this.updateValue();
  }
  get maxValue() {
    return this._maxValue;
  }
  set validationRange(e) {
    Kr(this, ct, e), this._minPlaceholder = e?.min !== void 0 ? String(e?.min) : "", this._maxPlaceholder = e?.max !== void 0 && e.max !== 1 / 0 ? String(e.max) : "∞";
  }
  get validationRange() {
    return Gr(this, ct);
  }
  updateValue() {
    const e = this._minValue || this._maxValue ? (this._minValue ?? "") + "," + (this._maxValue ?? "") : void 0;
    super.value !== e && (super.value = e);
  }
  set value(e) {
    if (e !== this.value) {
      if (e === void 0) {
        this.minValue = this.maxValue = void 0;
        return;
      }
      const t = e.split(/[ ,]+/);
      this.minValue = Li(t[0]), this.maxValue = Li(t[1]);
    }
  }
  get value() {
    return this.minValue || this.maxValue ? (this.minValue || "") + "," + (this.maxValue || "") : void 0;
  }
  firstUpdated() {
    this.shadowRoot?.querySelectorAll("uui-input").forEach((e) => this.addFormControlElement(e));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    return l`
			<uui-input
				type="number"
				label=${this.minLabel}
				min=${y(this.validationRange?.min)}
				max=${y(this.validationRange?.max)}
				placeholder=${this._minPlaceholder}
				.value=${this._minValue}
				@input=${zi(this, dt, Da)}></uui-input>
			<b>–</b>
			<uui-input
				type="number"
				label=${this.maxLabel}
				min=${y(this.validationRange?.min)}
				max=${y(this.validationRange?.max)}
				placeholder=${this._maxPlaceholder}
				.value=${this._maxValue}
				@input=${zi(this, dt, za)}></uui-input>
		`;
  }
};
ct = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakSet();
Da = function(e) {
  const t = e.target.value;
  this.minValue = t ? Number(t) : void 0, this.dispatchEvent(new d());
};
za = function(e) {
  const t = e.target.value;
  this.maxValue = t ? Number(t) : void 0, this.dispatchEvent(new d());
};
g.styles = p`
		:host {
			display: flex;
			align-items: center;
		}
		b {
			margin: 0 var(--uui-size-space-1);
		}
		:host(:invalid:not([pristine])) {
			color: var(--uui-color-invalid);
		}
		:host(:invalid:not([pristine])) uui-input {
			border-color: var(--uui-color-invalid);
		}
	`;
T([
  n({ type: String, attribute: "min-label" })
], g.prototype, "minLabel", 2);
T([
  n({ type: String, attribute: "max-label" })
], g.prototype, "maxLabel", 2);
T([
  u()
], g.prototype, "_minValue", 2);
T([
  n({ type: Number })
], g.prototype, "minValue", 1);
T([
  u()
], g.prototype, "_maxValue", 2);
T([
  n({ type: Number })
], g.prototype, "maxValue", 1);
T([
  n({ type: Object })
], g.prototype, "validationRange", 1);
T([
  u()
], g.prototype, "_minPlaceholder", 2);
T([
  u()
], g.prototype, "_maxPlaceholder", 2);
T([
  n()
], g.prototype, "value", 1);
g = T([
  h("umb-input-number-range")
], g);
var Xr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, La = (e) => {
  throw TypeError(e);
}, Ie = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Yr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Xr(t, i, a), a;
}, _i = (e, t, i) => t.has(e) || La("Cannot " + i), Zr = (e, t, i) => (_i(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Wi = (e, t, i) => t.has(e) ? La("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Jr = (e, t, i, s) => (_i(e, t, "write to private field"), t.set(e, i), i), Bi = (e, t, i) => (_i(e, t, "access private method"), i), mt, vt, Wa, Ba;
let se = class extends _e(
  c,
  void 0
) {
  constructor() {
    super(), Wi(this, vt), Wi(this, mt, ""), this.list = [], this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ni,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set value(e) {
    Jr(this, mt, e);
  }
  get value() {
    return Zr(this, mt);
  }
  render() {
    return this.list ? l`
			<uui-radio-group .value=${this.value} @change=${Bi(this, vt, Wa)} ?readonly=${this.readonly}>
				${fe(
      this.list,
      (e) => e,
      (e) => Bi(this, vt, Ba).call(this, e)
    )}
			</uui-radio-group>
		` : $;
  }
};
mt = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakSet();
Wa = function(e) {
  e.stopPropagation(), e.target instanceof Gs && (this.value = e.target.value, this.dispatchEvent(new d()));
};
Ba = function(e) {
  return l`
			<uui-radio
				value=${e.value}
				class=${Gi({ invalid: !!e.invalid })}
				label=${e.label + (e.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
				title=${e.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}></uui-radio>
		`;
};
se.styles = [
  p`
			:host {
				display: block;
			}

			uui-radio {
				&.invalid {
					text-decoration: line-through;
				}
			}
		`
];
Ie([
  n()
], se.prototype, "value", 1);
Ie([
  n({ type: Array })
], se.prototype, "list", 2);
Ie([
  n({ type: Boolean, reflect: !0 })
], se.prototype, "readonly", 2);
Ie([
  n({ type: Boolean })
], se.prototype, "required", 2);
Ie([
  n({ type: String })
], se.prototype, "requiredMessage", 2);
se = Ie([
  h("umb-input-radio-button-list")
], se);
var Qr = Object.defineProperty, jr = Object.getOwnPropertyDescriptor, Ra = (e) => {
  throw TypeError(e);
}, Y = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? jr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Qr(t, i, a), a;
}, eo = (e, t, i) => t.has(e) || Ra("Cannot " + i), to = (e, t, i) => t.has(e) ? Ra("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), xt = (e, t, i) => (eo(e, t, "access private method"), i), xe, yi, qa, Va;
let B = class extends Ue(c, "") {
  constructor() {
    super(...arguments), to(this, xe), this.label = "", this.min = 0, this.max = 100, this.step = 1, this.valueLow = 0, this.valueHigh = 0, this.enableRange = !1, this.readonly = !1;
  }
  getFormElement() {
  }
  render() {
    return this.enableRange ? xt(this, xe, Va).call(this) : xt(this, xe, qa).call(this);
  }
};
xe = /* @__PURE__ */ new WeakSet();
yi = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
qa = function() {
  return l`
			<uui-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value=${this.valueLow.toString()}
				@change=${xt(this, xe, yi)}
				?readonly=${this.readonly}>
			</uui-slider>
		`;
};
Va = function() {
  return l`
			<uui-range-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value="${this.valueLow},${this.valueHigh}"
				@change=${xt(this, xe, yi)}
				?readonly=${this.readonly}>
			</uui-range-slider>
		`;
};
Y([
  n()
], B.prototype, "label", 2);
Y([
  n({ type: Number })
], B.prototype, "min", 2);
Y([
  n({ type: Number })
], B.prototype, "max", 2);
Y([
  n({ type: Number })
], B.prototype, "step", 2);
Y([
  n({ type: Number })
], B.prototype, "valueLow", 2);
Y([
  n({ type: Number })
], B.prototype, "valueHigh", 2);
Y([
  n({ type: Boolean, attribute: "enable-range" })
], B.prototype, "enableRange", 2);
Y([
  n({ type: Boolean, reflect: !0 })
], B.prototype, "readonly", 2);
B = Y([
  h("umb-input-slider")
], B);
var io = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, Ha = (e) => {
  throw TypeError(e);
}, H = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ao(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && io(t, i, a), a;
}, gi = (e, t, i) => t.has(e) || Ha("Cannot " + i), Ri = (e, t, i) => (gi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), qi = (e, t, i) => t.has(e) ? Ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), so = (e, t, i, s) => (gi(e, t, "write to private field"), t.set(e, i), i), ro = (e, t, i) => (gi(e, t, "access private method"), i), Be, ti, Na;
let O = class extends _e(c, "") {
  constructor() {
    super(...arguments), qi(this, ti), qi(this, Be, !1), this.showLabels = !1, this.ariaLabel = null, this.readonly = !1;
  }
  set checked(e) {
    so(this, Be, e), super.value = e.toString();
  }
  get checked() {
    return Ri(this, Be);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-toggle"));
  }
  render() {
    const e = this.showLabels ? this.checked ? this.labelOn : this.labelOff : "";
    return l`<uui-toggle
			.checked=${Ri(this, Be)}
			.label=${this.ariaLabel}
			?required=${this.required}
			.requiredMessage=${this.requiredMessage}
			@change=${ro(this, ti, Na)}
			?readonly=${this.readonly}
			><span>${e}</span>
		</uui-toggle>`;
  }
};
Be = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakSet();
Na = function(e) {
  e.stopPropagation(), this.checked = e.target.checked, this.dispatchEvent(new d());
};
H([
  n({ type: Boolean })
], O.prototype, "required", 2);
H([
  n({ type: String })
], O.prototype, "requiredMessage", 2);
H([
  n({ type: Boolean })
], O.prototype, "checked", 1);
H([
  n({ type: Boolean })
], O.prototype, "showLabels", 2);
H([
  n({ type: String })
], O.prototype, "labelOn", 2);
H([
  n({ type: String })
], O.prototype, "labelOff", 2);
H([
  n({ type: String, attribute: "aria-label" })
], O.prototype, "ariaLabel", 2);
H([
  n({ type: Boolean, reflect: !0 })
], O.prototype, "readonly", 2);
H([
  u()
], O.prototype, "_currentLabel", 2);
O = H([
  h("umb-input-toggle")
], O);
var oo = Object.defineProperty, no = Object.getOwnPropertyDescriptor, Fa = (e) => {
  throw TypeError(e);
}, ne = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? no(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && oo(t, i, a), a;
}, lo = (e, t, i) => t.has(e) || Fa("Cannot " + i), ho = (e, t, i) => t.has(e) ? Fa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Qe = (e, t, i) => (lo(e, t, "access private method"), i), ge, Ga, Ka, Xa, Ya;
let R = class extends _e(
  c
) {
  constructor() {
    super(...arguments), ho(this, ge), this.label = "", this.alias = "", this.required = !1, this.readonly = !1, this.aliasReadonly = !1, this._aliasLocked = !0;
  }
  firstUpdated() {
    this.addValidator(
      "valueMissing",
      () => ni,
      () => this.required && !this.value
    ), this.shadowRoot?.querySelectorAll("uui-input").forEach((e) => this.addFormControlElement(e));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    const e = this.label ?? this.localize.term("placeholders_entername"), t = this.localize.term("placeholders_enterAlias");
    return l`
			<uui-input
				id="name"
				placeholder=${e}
				label=${e}
				.value=${this.value}
				@input=${Qe(this, ge, Ga)}
				?required=${this.required}
				?readonly=${this.readonly}>
				${this.readonly ? l`<span id="alias" class="muted" slot="append">${this.alias}</span>` : l`
							<uui-input-lock
								id="alias"
								name="alias"
								slot="append"
								label=${t}
								placeholder=${t}
								.value=${this.alias}
								?auto-width=${!!this.value}
								?locked=${this._aliasLocked && !this.aliasReadonly}
								?readonly=${this.aliasReadonly}
								?required=${this.required}
								@input=${Qe(this, ge, Ka)}
								@blur=${Qe(this, ge, Xa)}
								@lock-change=${Qe(this, ge, Ya)}>
							</uui-input-lock>
						`}
			</uui-input>
		`;
  }
};
ge = /* @__PURE__ */ new WeakSet();
Ga = function(e) {
  if (!(e instanceof Ji)) return;
  typeof e.composedPath()[0]?.value == "string" && (this.value = e.target.value.toString(), this.autoGenerateAlias && this._aliasLocked && (this.alias = ji(this.value)), this.dispatchEvent(new d()));
};
Ka = function(e) {
  if (e.stopPropagation(), !(e instanceof Ji)) return;
  const t = e.composedPath()[0];
  typeof t?.value == "string" && (this.alias = t.value, this.dispatchEvent(new d()));
};
Xa = function() {
  !this.alias && this._aliasLocked === !1 && (this.alias = ji(this.value ?? ""), this.dispatchEvent(new d()));
};
Ya = function(e) {
  this._aliasLocked = !this._aliasLocked, !this.alias && this._aliasLocked ? this.autoGenerateAlias = !0 : this.autoGenerateAlias = !1, this._aliasLocked || e.target?.focus();
};
R.styles = p`
		#name {
			width: 100%;
			flex: 1 1 auto;
			align-items: center;
		}

		#alias {
			&.muted {
				opacity: 0.55;
				padding: var(--uui-size-1, 3px) var(--uui-size-space-3, 9px);
			}
		}

		:host(:invalid:not([pristine])) {
			color: var(--uui-color-invalid);
		}
		:host(:invalid:not([pristine])) > uui-input {
			border-color: var(--uui-color-invalid);
		}
	`;
ne([
  n({ type: String })
], R.prototype, "label", 2);
ne([
  n({ type: String, reflect: !1 })
], R.prototype, "alias", 2);
ne([
  n({ type: Boolean, reflect: !0 })
], R.prototype, "required", 2);
ne([
  n({ type: Boolean, reflect: !0 })
], R.prototype, "readonly", 2);
ne([
  n({ type: Boolean, reflect: !0, attribute: "alias-readonly" })
], R.prototype, "aliasReadonly", 2);
ne([
  n({ type: Boolean, attribute: "auto-generate-alias" })
], R.prototype, "autoGenerateAlias", 2);
ne([
  u()
], R.prototype, "_aliasLocked", 2);
R = ne([
  h("umb-input-with-alias")
], R);
var uo = Object.defineProperty, po = Object.getOwnPropertyDescriptor, Za = (e) => {
  throw TypeError(e);
}, N = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? po(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && uo(t, i, a), a;
}, Ja = (e, t, i) => t.has(e) || Za("Cannot " + i), co = (e, t, i) => (Ja(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Vi = (e, t, i) => t.has(e) ? Za("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), de = (e, t, i) => (Ja(e, t, "access private method"), i), ii, F, bi, Qa, ja, es, ts, is;
let x = class extends Ue(c, "") {
  constructor() {
    super(), Vi(this, F), Vi(this, ii, new Ot(this, {
      getUniqueOfElement: (e) => e.value.toString(),
      getUniqueOfModel: (e) => e.value,
      identifier: "Umb.SorterIdentifier.ColorEditor",
      itemSelector: "umb-multiple-color-picker-item-input",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new d());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.disabled = !1, this.readonly = !1, this.showLabels = !1, this._items = [], this.consumeContext(Xs, async (e) => {
      const t = e;
      this.observe(
        await t?.propertyValueByAlias("useLabel"),
        (i) => {
          this.showLabels = !!i;
        },
        "observeUseLabel"
      );
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set items(e) {
    this._items = e ?? [], co(this, ii).setModel(this.items);
  }
  get items() {
    return this._items;
  }
  getFormElement() {
  }
  render() {
    return l`${de(this, F, ts).call(this)} ${de(this, F, is).call(this)}`;
  }
};
ii = /* @__PURE__ */ new WeakMap();
F = /* @__PURE__ */ new WeakSet();
bi = function() {
  this.items = [...this._items, { value: "", label: "" }], this.pristine = !1, this.dispatchEvent(new d()), de(this, F, ja).call(this);
};
Qa = function(e, t) {
  e.stopPropagation();
  const i = e.currentTarget, s = i.value, a = i.label;
  this.items = this._items.map((r, o) => o === t ? { value: s, label: a } : r), this.dispatchEvent(new d());
};
ja = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-multiple-color-picker-item-input"
  );
  e && e[e.length - 1].focus();
};
es = function(e, t) {
  e.stopPropagation(), this.items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new d());
};
ts = function() {
  return l`
			<div id="sorter-wrapper">
				${fe(
    this._items,
    (e, t) => t,
    (e, t) => l`
						<umb-multiple-color-picker-item-input
							label=${e.label}
							value=${e.value}
							required
							required-message="Item ${t + 1} is missing a value"
							?disabled=${this.disabled}
							?readonly=${this.readonly}
							?showLabels=${this.showLabels}
							@enter=${de(this, F, bi)}
							@change=${(i) => de(this, F, Qa).call(this, i, t)}
							@delete=${(i) => de(this, F, es).call(this, i, t)}>
						</umb-multiple-color-picker-item-input>
					`
  )}
			</div>
		`;
};
is = function() {
  return this.disabled || this.readonly ? $ : l`
			<uui-button
				id="action"
				label=${this.localize.term("general_add")}
				look="placeholder"
				color="default"
				?disabled=${this.disabled}
				@click=${de(this, F, bi)}></uui-button>
		`;
};
x.styles = [
  p`
			#action {
				display: block;
			}

			.--umb-sorter-placeholder {
				position: relative;
				visibility: hidden;
			}
			.--umb-sorter-placeholder::after {
				content: '';
				position: absolute;
				inset: 0px;
				border-radius: var(--uui-border-radius);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
N([
  n({ type: Number })
], x.prototype, "min", 2);
N([
  n({ type: String, attribute: "min-message" })
], x.prototype, "minMessage", 2);
N([
  n({ type: Number })
], x.prototype, "max", 2);
N([
  n({ type: String, attribute: "min-message" })
], x.prototype, "maxMessage", 2);
N([
  n({ type: Boolean, reflect: !0 })
], x.prototype, "disabled", 2);
N([
  n({ type: Boolean, reflect: !0 })
], x.prototype, "readonly", 2);
N([
  n({ type: Boolean })
], x.prototype, "showLabels", 2);
N([
  u()
], x.prototype, "_items", 2);
N([
  n({ type: Array })
], x.prototype, "items", 1);
x = N([
  h("umb-multiple-color-picker-input")
], x);
var mo = Object.defineProperty, vo = Object.getOwnPropertyDescriptor, as = (e) => {
  throw TypeError(e);
}, Z = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? vo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && mo(t, i, a), a;
}, fo = (e, t, i) => t.has(e) || as("Cannot " + i), _o = (e, t, i) => t.has(e) ? as("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), b = (e, t, i) => (fo(e, t, "access private method"), i), f, ss, rs, os, ns, ls, hs, us, ps, cs, ds, $i;
let M = class extends Ue(c, "") {
  constructor() {
    super(...arguments), _o(this, f), this._valueHex = "", this.disabled = !1, this.readonly = !1, this.showLabels = !1;
  }
  set value(e) {
    e.startsWith("#") ? (this._valueHex = e, super.value = e.substring(1)) : (super.value = e, this._valueHex = `#${e}`);
  }
  get value() {
    return super.value;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			<umb-form-validation-message id="validation-message" @invalid=${b(this, f, ds)} @valid=${b(this, f, cs)}>
				<div id="item">
					${this.disabled || this.readonly ? $ : l`<uui-icon name="icon-grip"></uui-icon>`}
					<div class="color-wrapper">
						<uui-input
							id="input"
							value=${this.value}
							label=${this.localize.term("general_value")}
							placeholder=${this.localize.term("general_value")}
							required=${this.required}
							required-message="Value is missing"
							@keydown=${b(this, f, ls)}
							@input=${b(this, f, us)}
							@change=${b(this, f, hs)}>
							<uui-color-swatch
								slot="prepend"
								label=${this.value}
								value=${this._valueHex}
								@click=${b(this, f, $i)}></uui-color-swatch>
						</uui-input>
						<input aria-hidden="${!0}" type="color" id="color" value=${this.value} @change=${b(this, f, ps)} />
					</div>
					${S(
      this.showLabels,
      () => l`
							<uui-input
								label=${this.localize.term("placeholders_label")}
								placeholder=${this.localize.term("placeholders_label")}
								value=${y(this.label)}
								@keydown=${b(this, f, os)}
								@input="${b(this, f, rs)}"
								@change="${b(this, f, ns)}"
								?disabled=${this.disabled}
								?readonly=${this.readonly}></uui-input>
						`
    )}
					${S(
      !this.readonly,
      () => l`
							<uui-button
								compact
								label=${this.localize.term("actions_delete")}
								look="primary"
								?disabled=${this.disabled}
								@click=${b(this, f, ss)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						`
    )}
				</div>
			</umb-form-validation-message>
		`;
  }
};
f = /* @__PURE__ */ new WeakSet();
ss = async function() {
  await Xi(this, {
    headline: `${this.localize.term("actions_delete")} ${this.value || ""}`,
    content: this.localize.term("content_nestedContentDeleteItem"),
    color: "danger",
    confirmLabel: this.localize.term("actions_delete")
  }), this.dispatchEvent(new Yi());
};
rs = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new ri());
};
os = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
ns = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new d());
};
ls = function(e) {
  e.stopPropagation(), e.key === "Enter" && b(this, f, $i).call(this);
};
hs = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
us = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new ri());
};
ps = function(e) {
  e.stopPropagation(), this.value = this._colorPicker.value, this.dispatchEvent(new d());
};
cs = function(e) {
  e.stopPropagation();
};
ds = function(e) {
  e.stopPropagation();
};
$i = function() {
  this._colorPicker.click();
};
M.styles = [
  p`
			:host {
				display: flex;
				align-items: center;
				margin-bottom: var(--uui-size-space-3);
				gap: var(--uui-size-space-3);
			}

			#item {
				position: relative;
				display: flex;
				gap: var(--uui-size-1);
				align-items: center;
			}
			uui-input {
				flex: 1;
			}

			uui-color-swatch {
				padding: var(--uui-size-1);
			}

			uui-color-swatch:focus-within {
				outline: 2px solid var(--uui-color-selected);
				outline-offset: 0;
				border-radius: var(--uui-border-radius);
			}

			.color-wrapper {
				position: relative;
				flex: 1;
				display: flex;
				flex-direction: column;
			}

			uui-input,
			#validation-message {
				flex: 1;
			}

			input[type='color'] {
				visibility: hidden;
				width: 0px;
				padding: 0;
				margin: 0;
				position: absolute;
			}
		`
];
Z([
  n({ type: String })
], M.prototype, "value", 1);
Z([
  u()
], M.prototype, "_valueHex", 2);
Z([
  n({ type: Boolean, reflect: !0 })
], M.prototype, "disabled", 2);
Z([
  n({ type: Boolean, reflect: !0 })
], M.prototype, "readonly", 2);
Z([
  n({ type: String })
], M.prototype, "label", 2);
Z([
  K("#input")
], M.prototype, "_input", 2);
Z([
  K("#color")
], M.prototype, "_colorPicker", 2);
Z([
  n({ type: Boolean })
], M.prototype, "showLabels", 2);
M = Z([
  h("umb-multiple-color-picker-item-input")
], M);
var yo = Object.defineProperty, go = Object.getOwnPropertyDescriptor, ms = (e) => {
  throw TypeError(e);
}, J = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? go(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && yo(t, i, a), a;
}, wi = (e, t, i) => t.has(e) || ms("Cannot " + i), ze = (e, t, i) => (wi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), je = (e, t, i) => t.has(e) ? ms("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Hi = (e, t, i, s) => (wi(e, t, "write to private field"), t.set(e, i), i), me = (e, t, i) => (wi(e, t, "access private method"), i), Re, ft, _t, G, Ei, vs, fs, _s, ys, gs;
let A = class extends _e(
  c,
  void 0
) {
  constructor() {
    super(), je(this, G), je(this, Re, new Ot(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.MultipleTextString",
      itemSelector: "umb-input-multiple-text-string-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new d());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", je(this, ft, !1), je(this, _t, !1), this._items = [], this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set disabled(e) {
    Hi(this, ft, e), e && ze(this, Re).disable();
  }
  get disabled() {
    return ze(this, ft);
  }
  set readonly(e) {
    Hi(this, _t, e), e && ze(this, Re).disable();
  }
  get readonly() {
    return ze(this, _t);
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this.value = e?.length > 0 ? "some value" : "", this._items = e ?? [], ze(this, Re).setModel(this.items);
  }
  getFormElement() {
  }
  render() {
    return l`<div id="sorter-wrapper">${me(this, G, ys).call(this)}</div>
			${me(this, G, gs).call(this)}`;
  }
};
Re = /* @__PURE__ */ new WeakMap();
ft = /* @__PURE__ */ new WeakMap();
_t = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakSet();
Ei = function() {
  this._items = [...this._items, ""], this.pristine = !1, this.dispatchEvent(new d()), me(this, G, fs).call(this);
};
vs = function(e, t) {
  e.stopPropagation();
  const s = e.currentTarget.value;
  this._items = this._items.map((a, r) => r === t ? s : a), this.dispatchEvent(new d());
};
fs = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-input-multiple-text-string-item"
  );
  e[e.length - 1].focus();
};
_s = function(e, t) {
  e.stopPropagation(), this._items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new d());
};
ys = function() {
  return l`
			${fe(
    this._items,
    (e, t) => t,
    (e, t) => l`
					<umb-input-multiple-text-string-item
						name="item-${t}"
						data-sort-entry-id=${e}
						required
						required-message="Item ${t + 1} is missing a value"
						value=${e}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						@enter=${me(this, G, Ei)}
						@delete=${(i) => me(this, G, _s).call(this, i, t)}
						@input=${(i) => me(this, G, vs).call(this, i, t)}>
					</umb-input-multiple-text-string-item>
				`
  )}
		`;
};
gs = function() {
  return this.disabled || this.readonly ? $ : l`
			<uui-button
				color="default"
				id="action"
				label="Add"
				look="placeholder"
				?disabled=${this.disabled}
				@click=${me(this, G, Ei)}></uui-button>
		`;
};
A.styles = [
  p`
			#action {
				display: block;
			}

			.--umb-sorter-placeholder {
				position: relative;
				visibility: hidden;
			}
			.--umb-sorter-placeholder::after {
				content: '';
				position: absolute;
				inset: 0px;
				border-radius: var(--uui-border-radius);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
J([
  n({ type: Number })
], A.prototype, "min", 2);
J([
  n({ type: String, attribute: "min-message" })
], A.prototype, "minMessage", 2);
J([
  n({ type: Number })
], A.prototype, "max", 2);
J([
  n({ type: String, attribute: "min-message" })
], A.prototype, "maxMessage", 2);
J([
  n({ type: Boolean, reflect: !0 })
], A.prototype, "disabled", 1);
J([
  n({ type: Boolean, reflect: !0 })
], A.prototype, "readonly", 1);
J([
  u()
], A.prototype, "_items", 2);
J([
  n({ type: Array })
], A.prototype, "items", 1);
A = J([
  h("umb-input-multiple-text-string")
], A);
var bo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, bs = (e) => {
  throw TypeError(e);
}, zt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? $o(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && bo(t, i, a), a;
}, wo = (e, t, i) => t.has(e) || bs("Cannot " + i), Eo = (e, t, i) => t.has(e) ? bs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ye = (e, t, i) => (wo(e, t, "access private method"), i), te, $s, ws, Es, xs, Cs, Ss;
let Oe = class extends Ue(c, "") {
  constructor() {
    super(...arguments), Eo(this, te), this.disabled = !1, this.readonly = !1;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			${this.disabled || this.readonly ? $ : l`<uui-icon name="icon-grip" class="handle"></uui-icon>`}

			<umb-form-validation-message id="validation-message" @invalid=${ye(this, te, Ss)} @valid=${ye(this, te, Cs)}>
				<uui-input
					id="input"
					label="Value"
					value=${this.value}
					@keydown=${ye(this, te, Es)}
					@input=${ye(this, te, ws)}
					@change=${ye(this, te, xs)}
					?disabled=${this.disabled}
					?readonly=${this.readonly}
					required=${this.required}
					required-message="Value is missing"></uui-input>
			</umb-form-validation-message>

			${S(
      !this.readonly,
      () => l`
					<uui-button
						compact
						label="${this.localize.term("general_remove")} ${this.value}"
						look="outline"
						?disabled=${this.disabled}
						@click=${ye(this, te, $s)}>
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				`
    )}
		`;
  }
};
te = /* @__PURE__ */ new WeakSet();
$s = async function() {
  await Xi(this, {
    headline: `Delete ${this.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new Yi());
};
ws = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new ri());
};
Es = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
xs = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new d());
};
Cs = function(e) {
  e.stopPropagation();
};
Ss = function(e) {
  e.stopPropagation();
};
Oe.styles = [
  p`
			:host {
				display: flex;
				align-items: center;
				margin-bottom: var(--uui-size-space-3);
				gap: var(--uui-size-space-3);
			}

			#validation-message {
				flex: 1;
			}

			#input {
				width: 100%;
			}

			.handle {
				cursor: grab;
			}

			.handle:active {
				cursor: grabbing;
			}
		`
];
zt([
  n({ type: Boolean, reflect: !0 })
], Oe.prototype, "disabled", 2);
zt([
  n({ type: Boolean, reflect: !0 })
], Oe.prototype, "readonly", 2);
zt([
  K("#input")
], Oe.prototype, "_input", 2);
Oe = zt([
  h("umb-input-multiple-text-string-item")
], Oe);
var xo = Object.getOwnPropertyDescriptor, Co = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? xo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let ai = class extends c {
  render() {
    return l`<slot></slot>`;
  }
};
ai.styles = [
  C,
  p`
			:host {
				background-color: var(--uui-color-surface);
				display: block;
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
				overflow: clip;
			}
		`
];
ai = Co([
  h("umb-popover-layout")
], ai);
var So = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, Ps = (e) => {
  throw TypeError(e);
}, ks = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Po(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && So(t, i, a), a;
}, ko = (e, t, i) => t.has(e) || Ps("Cannot " + i), Ht = (e, t, i) => (ko(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Oo = (e, t, i) => t.has(e) ? Ps("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), qe;
let Ct = class extends Ys(Qi) {
  constructor() {
    super(...arguments), this.icon = "", Oo(this, qe, document.createElement("umb-icon"));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.icon && (Ht(this, qe).setAttribute("slot", "icon"), Ht(this, qe).setAttribute("name", this.icon), this.appendChild(Ht(this, qe)));
  }
};
qe = /* @__PURE__ */ new WeakMap();
Ct.styles = [
  ...Qi.styles,
  p`
			:host {
				padding-top: var(--uui-size-3);
				padding-bottom: var(--uui-size-3);
			}
		`
];
ks([
  n({ type: String })
], Ct.prototype, "icon", 2);
Ct = ks([
  h("umb-ref-item")
], Ct);
var Mo = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, xi = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ao(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Mo(t, i, a), a;
};
let Ye = class extends c {
  constructor() {
    super(...arguments), this.look = "default", this.divide = !1;
  }
  render() {
    return l`
			<div class=${Gi({ divide: this.divide, compact: this.look === "compact" })}>
				<slot></slot>
			</div>
		`;
  }
};
Ye.styles = [
  p`
			div {
				display: block;
				position: relative;
			}

			::slotted(*) {
				position: relative;
				margin-top: var(--uui-size-space-6);
			}

			.divide ::slotted(*)::before {
				content: '';
				position: absolute;
				top: calc((var(--uui-size-space-6) / 2) * -1);
				height: 0;
				width: 100%;
				border-top: solid 1px var(--uui-color-divider-standalone);
			}

			::slotted(*:first-child) {
				margin-top: 0;
			}

			.divide ::slotted(*:first-child)::before {
				display: none;
			}

			.compact ::slotted(*) {
				margin-top: var(--uui-size-space-3);
			}

			.compact ::slotted(*:first-child) {
				margin-top: 0;
			}

			.compact.divide ::slotted(*)::before {
				display: none;
			}
		`
];
xi([
  n({ type: String })
], Ye.prototype, "look", 2);
xi([
  n({ type: Boolean })
], Ye.prototype, "divide", 2);
Ye = xi([
  h("umb-stack")
], Ye);
var Uo = Object.defineProperty, Io = Object.getOwnPropertyDescriptor, Os = (e) => {
  throw TypeError(e);
}, Q = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Io(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Uo(t, i, a), a;
}, Ci = (e, t, i) => t.has(e) || Os("Cannot " + i), P = (e, t, i) => (Ci(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Le = (e, t, i) => t.has(e) ? Os("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), St = (e, t, i, s) => (Ci(e, t, "write to private field"), t.set(e, i), i), z = (e, t, i) => (Ci(e, t, "access private method"), i), Ce, yt, _, Ms, Me, Pt, As, Ae, Si, Us, si, Is;
let U = class extends kt {
  constructor() {
    super(...arguments), Le(this, _), this.lock = "none", this.position = "var(--umb-split-panel-initial-position)", Le(this, Ce, 0), Le(this, yt, 25), this._hasStartPanel = !1, this._hasEndPanel = !1, Le(this, Me, !1), Le(this, Ae, (e) => {
      e.preventDefault();
      const t = (a) => {
        const { clientX: r } = a, { left: o, width: Te } = this.mainElement.getBoundingClientRect(), le = ea(r - o, 0, Te), D = s(le, Te);
        St(this, Ce, this.lock === "start" ? D : Te - D), z(this, _, Pt).call(this, D);
      }, i = () => {
        document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", i), this.dispatchEvent(new CustomEvent("position-changed", { detail: { position: this.position } }));
      }, s = (a, r) => {
        const o = this.snap?.split(" ");
        if (!o) return a;
        const le = o.map((D) => {
          let ee = parseFloat(D);
          return D.endsWith("%") && (ee = ee / 100 * r), D.startsWith("-") && (ee = r + ee), ee;
        }).reduce((D, ee) => Math.abs(ee - a) < Math.abs(D - a) ? ee : D);
        return le < a + P(this, yt) && le > a - P(this, yt) && (a = le), a;
      };
      document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", i);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), z(this, _, Si).call(this);
  }
  updated(e) {
    if (super.updated(e), !!P(this, Me) && e.has("position")) {
      if (this.lock !== "none") {
        const { width: t } = this.mainElement.getBoundingClientRect();
        let i = parseFloat(this.position);
        this.position.endsWith("%") && (i = i / 100 * t);
        const s = this.lock === "start" ? i : t - i;
        St(this, Ce, s);
      }
      z(this, _, As).call(this);
    }
  }
  render() {
    return l`
			<div id="main">
				<slot
					name="start"
					@slotchange=${z(this, _, si)}
					style="width: ${this._hasStartPanel ? "100%" : "0"}"></slot>
				<div id="divider">
					<div id="divider-touch-area" tabindex="0" @keydown=${z(this, _, Is)}></div>
				</div>
				<slot name="end" @slotchange=${z(this, _, si)} style="width: ${this._hasEndPanel ? "100%" : "0"}"></slot>
			</div>
		`;
  }
};
Ce = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
Ms = function() {
  return this._hasStartPanel && this._hasEndPanel;
};
Me = /* @__PURE__ */ new WeakMap();
Pt = function(e) {
  const { width: t } = this.mainElement.getBoundingClientRect(), s = ea(e, 0, t) / t * 100;
  this.position = s + "%";
};
As = function() {
  let e = this.position, t = "1fr";
  this.lock === "start" && (e = P(this, Ce) + "px", t = "1fr"), this.lock === "end" && (e = "1fr", t = P(this, Ce) + "px"), this.mainElement.style.gridTemplateColumns = `
      minmax(var(--umb-split-panel-start-min-width), ${e})
      0px
      minmax(var(--umb-split-panel-end-min-width), ${t})
    `;
};
Ae = /* @__PURE__ */ new WeakMap();
Si = function() {
  this.dividerTouchAreaElement.removeEventListener("pointerdown", P(this, Ae)), this.dividerTouchAreaElement.removeEventListener("touchstart", P(this, Ae)), this.dividerElement.style.display = "none", this.mainElement.style.display = "flex", St(this, Me, !1);
};
Us = async function() {
  St(this, Me, !0), this.mainElement.style.display = "grid", this.mainElement.style.gridTemplateColumns = `${this.position} 0px 1fr`, this.dividerElement.style.display = "unset", this.dividerTouchAreaElement.addEventListener("pointerdown", P(this, Ae)), this.dividerTouchAreaElement.addEventListener("touchstart", P(this, Ae), { passive: !1 }), await new Promise((a) => requestAnimationFrame(a));
  const { left: e } = this.shadowRoot.querySelector("#divider").getBoundingClientRect(), { left: t, width: i } = this.mainElement.getBoundingClientRect(), s = (e - t) / i * 100;
  this.position = `${s}%`;
};
si = function(e) {
  const t = e.target, i = t.name;
  if (i === "start" && (this._hasStartPanel = t.assignedElements().length > 0), i === "end" && (this._hasEndPanel = t.assignedElements().length > 0), !P(this, _, Ms)) {
    P(this, Me) && z(this, _, Si).call(this);
    return;
  }
  z(this, _, Us).call(this);
};
Is = function(e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const { width: t } = this.mainElement.getBoundingClientRect(), a = (this.dividerElement.getBoundingClientRect().left - this.mainElement.getBoundingClientRect().left) / t * 100, o = 1 * (e.shiftKey ? 10 : 1) * (e.key === "ArrowLeft" ? -1 : 1), le = (a + o) / 100 * this.mainElement.getBoundingClientRect().width;
    z(this, _, Pt).call(this, le);
  }
  if (e.key === "Home" || e.key === "End") {
    e.preventDefault();
    const { width: t } = this.mainElement.getBoundingClientRect(), i = e.key === "Home" ? 0 : t;
    z(this, _, Pt).call(this, i);
  }
};
U.styles = p`
		:host {
			display: contents;
			--umb-split-panel-initial-position: 50%;
			--umb-split-panel-start-min-width: 0;
			--umb-split-panel-end-min-width: 0;
			--umb-split-panel-divider-touch-area-width: 20px;
			--umb-split-panel-divider-width: 1px;
			--umb-split-panel-divider-color: transparent;
			--umb-split-panel-slot-overflow: hidden;
		}
		slot {
			overflow: var(--umb-split-panel-slot-overflow);
			display: block;
			min-height: 0;
		}
		#main {
			width: 100%;
			height: 100%;
			display: flex;
			position: relative;
			z-index: 0;
			overflow: hidden;
		}
		#divider {
			height: 100%;
			position: relative;
			z-index: 999999;
			display: none;
		}
		#divider-touch-area {
			position: absolute;
			top: 0;
			left: 5px;
			height: 100%;
			width: var(--umb-split-panel-divider-touch-area-width);
			transform: translateX(-50%);
			cursor: col-resize;
		}
		/* Do we want a line that shows the divider? */
		#divider::after {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			width: var(--umb-split-panel-divider-width);
			height: 100%;
			transform: round(translateX(-50%));
			background-color: var(--umb-split-panel-divider-color);
			z-index: -1;
		}
	`;
Q([
  K("#main")
], U.prototype, "mainElement", 2);
Q([
  K("#divider-touch-area")
], U.prototype, "dividerTouchAreaElement", 2);
Q([
  K("#divider")
], U.prototype, "dividerElement", 2);
Q([
  n({ type: String })
], U.prototype, "snap", 2);
Q([
  n({ type: String })
], U.prototype, "lock", 2);
Q([
  n({ type: String, reflect: !0 })
], U.prototype, "position", 2);
Q([
  u()
], U.prototype, "_hasStartPanel", 2);
Q([
  u()
], U.prototype, "_hasEndPanel", 2);
U = Q([
  h("umb-split-panel")
], U);
var To = Object.defineProperty, Do = Object.getOwnPropertyDescriptor, Ts = (e) => {
  throw TypeError(e);
}, j = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Do(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && To(t, i, a), a;
}, zo = (e, t, i) => t.has(e) || Ts("Cannot " + i), et = (e, t, i) => (zo(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Lo = (e, t, i) => t.has(e) ? Ts("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), be;
class Ni extends Event {
  constructor() {
    super("selected", { bubbles: !0, composed: !0 });
  }
}
class Fi extends Event {
  constructor() {
    super("deselected", { bubbles: !0, composed: !0 });
  }
}
class Wo extends Event {
  constructor() {
    super("ordered", { bubbles: !0, composed: !0 });
  }
}
class Bo extends Event {
  #e;
  constructor({ itemId: t }) {
    super("sorted", { bubbles: !0, composed: !0 }), this.#e = t;
  }
  getItemId() {
    return this.#e;
  }
}
let I = class extends c {
  constructor() {
    super(), this._items = [], this.columns = [], this.config = {
      allowSelection: !1,
      hideIcon: !1
    }, this.selection = [], this.orderingColumn = "", this.orderingDesc = !1, this._sortable = !1, this._selectionMode = !1, Lo(this, be, new Ot(this, {
      getUniqueOfElement: (e) => e.dataset.sortableId,
      getUniqueOfModel: (e) => e.id,
      identifier: "Umb.SorterIdentifier.UmbTable",
      itemSelector: "uui-table-row",
      containerSelector: "uui-table",
      onChange: ({ model: e }) => {
        const t = this.items;
        this.items = e, this.requestUpdate("items", t);
      },
      onEnd: ({ item: e }) => {
        this.dispatchEvent(new Bo({ itemId: e.id }));
      }
    })), this._renderRow = (e) => l`
			<uui-table-row
				data-sortable-id=${e.id}
				?selectable="${this.config.allowSelection && !this._sortable}"
				?select-only=${this._selectionMode}
				?selected=${this._isSelected(e.id)}
				@selected=${() => this._selectRow(e.id)}
				@deselected=${() => this._deselectRow(e.id)}>
				${this._renderRowCheckboxCell(e)} ${this.columns.map((t) => this._renderRowCell(t, e))}
			</uui-table-row>
		`, et(this, be).disable();
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this._items = e, et(this, be).setModel(e);
  }
  get sortable() {
    return this._sortable;
  }
  set sortable(e) {
    const t = this._sortable;
    t !== e && (this._sortable = e, this._sortable ? et(this, be).enable() : et(this, be).disable(), this.requestUpdate("sortable", t));
  }
  _isSelected(e) {
    return this.selection.includes(e);
  }
  _handleRowCheckboxChange(e, t) {
    e.target.checked ? this._selectRow(t.id) : this._deselectRow(t.id);
  }
  _handleAllRowsCheckboxChange(e) {
    e.target.checked ? this._selectAllRows() : this._deselectAllRows();
  }
  _handleOrderingChange(e) {
    this.orderingDesc = this.orderingColumn === e.alias ? !this.orderingDesc : !1, this.orderingColumn = e.alias, this.dispatchEvent(new Wo());
  }
  _selectAllRows() {
    this.selection = this.items.map((e) => e.id), this._selectionMode = !0, this.dispatchEvent(new Ni());
  }
  _deselectAllRows() {
    this.selection = [], this._selectionMode = !1, this.dispatchEvent(new Fi());
  }
  _selectRow(e) {
    this.selection = [...this.selection, e], this._selectionMode = this.selection.length > 0, this.dispatchEvent(new Ni());
  }
  _deselectRow(e) {
    this.selection = this.selection.filter((t) => t !== e), this._selectionMode = this.selection.length > 0, this.dispatchEvent(new Fi());
  }
  render() {
    const e = this.config.allowSelection === !1 && this.config.hideIcon === !0 ? void 0 : "width: 60px";
    return l`
			<uui-table class="uui-text">
				<uui-table-column style=${y(e)}></uui-table-column>
				<uui-table-head>
					${this._renderHeaderCheckboxCell()} ${this.columns.map((t) => this._renderHeaderCell(t))}
				</uui-table-head>
				${fe(this.items, (t) => t.id, this._renderRow)}
			</uui-table>
		`;
  }
  _renderHeaderCell(e) {
    return l`
			<uui-table-head-cell style="--uui-table-cell-padding: 0 var(--uui-size-5)">
				${e.allowSorting ? l`${this._renderSortingUI(e)}` : l`<span style="text-align:${e.align ?? "left"};">${e.name}</span>`}
			</uui-table-head-cell>
		`;
  }
  _renderSortingUI(e) {
    return l`
			<button
				style="padding: var(--uui-size-5) var(--uui-size-1);"
				@click="${() => this._handleOrderingChange(e)}">
				<span style="text-align:${e.align ?? "left"};">${e.name}</span>
				<uui-symbol-sort ?active=${this.orderingColumn === e.alias} ?descending=${this.orderingDesc}>
				</uui-symbol-sort>
			</button>
		`;
  }
  _renderHeaderCheckboxCell() {
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-head-cell style="--uui-table-cell-padding: 0; text-align: center;">
				${S(
        this.config.allowSelection,
        () => l`
						<uui-checkbox
							aria-label=${this.localize.term("general_selectAll")}
							style="padding: var(--uui-size-4) var(--uui-size-5);"
							@change="${this._handleAllRowsCheckboxChange}"
							?checked=${this.selection.length === this.items.length}></uui-checkbox>
					`
      )}
			</uui-table-head-cell>
		`;
  }
  _renderRowCheckboxCell(e) {
    if (this.sortable === !0)
      return l`
				<uui-table-cell style="text-align: center;">
					<uui-icon name="icon-grip"></uui-icon>
				</uui-table-cell>
			`;
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-cell style="text-align: center;">
				${S(!this.config.hideIcon, () => l`<umb-icon name="${y(e.icon ?? void 0)}"></umb-icon>`)}
				${S(
        this.config.allowSelection,
        () => l`
						<uui-checkbox
							aria-label=${this.localize.term("buttons_select")}
							@click=${(t) => t.stopPropagation()}
							@change=${(t) => this._handleRowCheckboxChange(t, e)}
							?checked=${this._isSelected(e.id)}></uui-checkbox>
					`
      )}
			</uui-table-cell>
		`;
  }
  _renderRowCell(e, t) {
    return l`
			<uui-table-cell
				style="--uui-table-cell-padding: 0 var(--uui-size-5); text-align:${e.align ?? "left"}; width: ${e.width || "auto"};">
					${this._renderCellContent(e, t)}
			</uui-table-cell>
		</uui-table-cell>
		`;
  }
  _renderCellContent(e, t) {
    const i = t.data.find((s) => s.columnAlias === e.alias)?.value;
    if (e.elementName) {
      const s = document.createElement(e.elementName);
      return s.column = e, s.item = t, s.value = i, s;
    }
    if (e.labelTemplate) {
      import("@umbraco-cms/backoffice/ufm");
      const s = document.createElement("umb-ufm-render");
      return s.inline = !0, s.markdown = e.labelTemplate, s.value = { value: i }, s;
    }
    return i;
  }
};
be = /* @__PURE__ */ new WeakMap();
I.styles = [
  C,
  p`
			:host {
				height: fit-content;
			}

			:host([sortable]) {
				uui-table-row:hover {
					cursor: grab;
				}

				uui-table-row:active {
					cursor: grabbing;
				}
			}

			uui-table {
				box-shadow: var(--uui-shadow-depth-1);
			}

			uui-table-head {
				position: sticky;
				top: 0;
				z-index: 1;
				background-color: var(--uui-color-surface, #fff);
			}

			uui-table-row uui-checkbox {
				display: none;
			}

			uui-table-row[selectable]:focus umb-icon,
			uui-table-row[selectable]:focus-within umb-icon,
			uui-table-row[selectable]:hover umb-icon,
			uui-table-row[select-only] umb-icon {
				display: none;
			}

			uui-table-row[selectable]:focus uui-checkbox,
			uui-table-row[selectable]:focus-within uui-checkbox,
			uui-table-row[selectable]:hover uui-checkbox,
			uui-table-row[select-only] uui-checkbox {
				display: inline-block;
			}

			uui-table-head-cell:focus,
			uui-table-head-cell:focus-within,
			uui-table-head-cell:hover {
				--uui-symbol-sort-hover: 1;
			}

			uui-table-head-cell button {
				padding: 0;
				background-color: transparent;
				color: inherit;
				border: none;
				cursor: pointer;
				font-weight: inherit;
				font-size: inherit;
				display: inline-flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			}

			uui-table-head-cell button > span {
				flex: 1 0 auto;
			}

			uui-table-cell umb-icon {
				vertical-align: top;
			}
		`
];
j([
  n({ type: Array, attribute: !1 })
], I.prototype, "_items", 2);
j([
  n({ type: Array, attribute: !1 })
], I.prototype, "columns", 2);
j([
  n({ type: Object, attribute: !1 })
], I.prototype, "config", 2);
j([
  n({ type: Array, attribute: !1 })
], I.prototype, "selection", 2);
j([
  n({ type: String, attribute: !1 })
], I.prototype, "orderingColumn", 2);
j([
  n({ type: Boolean, attribute: !1 })
], I.prototype, "orderingDesc", 2);
j([
  n({ type: Boolean, reflect: !0 })
], I.prototype, "sortable", 1);
j([
  u()
], I.prototype, "_selectionMode", 2);
I = j([
  h("umb-table")
], I);
export {
  Ct as A,
  Ye as B,
  U as C,
  Ni as D,
  Fi as E,
  Wo as F,
  Bo as G,
  I as H,
  Se as U,
  Fe as a,
  w as b,
  Pe as c,
  k as d,
  L as e,
  Kt as f,
  Xt as g,
  Ge as h,
  Yt as i,
  ve as j,
  Ke as k,
  Jt as l,
  W as m,
  E as n,
  Xe as o,
  ke as p,
  g as q,
  se as r,
  B as s,
  O as t,
  R as u,
  x as v,
  M as w,
  A as x,
  Oe as y,
  ai as z
};
//# sourceMappingURL=table.element-CD7ZBw0a.js.map
