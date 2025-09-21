var bs = Object.defineProperty;
var qt = (n) => {
  throw TypeError(n);
};
var ws = (n, e, t) => e in n ? bs(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Gt = (n, e, t) => ws(n, typeof e != "symbol" ? e + "" : e, t), _t = (n, e, t) => e.has(n) || qt("Cannot " + t);
var u = (n, e, t) => (_t(n, e, "read from private field"), t ? t.call(n) : e.get(n)), _ = (n, e, t) => e.has(n) ? qt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), m = (n, e, t, s) => (_t(n, e, "write to private field"), s ? s.call(n, t) : e.set(n, t), t), Ke = (n, e, t) => (_t(n, e, "access private method"), t);
import { UMB_AUTH_CONTEXT as gn } from "@umbraco-cms/backoffice/auth";
import { css as O, property as C, customElement as T, LitElement as Ce, html as h, ifDefined as fn, nothing as P, state as f, when as ot, classMap as mt, query as vs } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as He } from "@umbraco-cms/backoffice/element-api";
import { USYNC_SIGNALR_CONTEXT_TOKEN as _n, HandlerStatus as Ye, ChangeType as Oe, USYNC_DETAILS_MODAL as Ss, uSyncActionDataSource as Cs, USyncSettingsDataSource as $s, uSyncMigrationDataSource as Es, ActionsService as Je, MigrationsService as yt, SettingsService as Qe, uSyncConstants as E, uSyncActionRepository as mn, USYNC_CORE_CONTEXT_TOKEN as yn, uSyncWorkspaceContext as ks, uSyncMenuElement as Is, SyncLegacyFilesCondition as xs } from "@jumoo/uSync";
import { UMB_MODAL_MANAGER_CONTEXT as Ot, UmbModalBaseElement as Dt, UmbModalToken as Nt } from "@umbraco-cms/backoffice/modal";
import { diffWords as Ps } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as je } from "@umbraco-cms/backoffice/lit-element";
import { UmbControllerBase as Mt } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as Te, UmbArrayState as Ze, UmbBooleanState as Xt } from "@umbraco-cms/backoffice/observable-api";
import * as Kt from "@jumoo/uSync/external/signalr";
import { UmbContextToken as bn } from "@umbraco-cms/backoffice/context-api";
import { tryExecute as N } from "@umbraco-cms/backoffice/resources";
import { UMB_WORKSPACE_CONTEXT as Ts } from "@umbraco-cms/backoffice/workspace";
import { UmbTextStyles as As } from "@umbraco-cms/backoffice/style";
import { UmbConditionBase as wn, umbExtensionsRegistry as vn } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as Rs } from "@umbraco-cms/backoffice/extension-api";
import { UMB_SECTION_CONTEXT as Sn } from "@umbraco-cms/backoffice/section";
import { UmbId as Os } from "@umbraco-cms/backoffice/id";
import { UmbTemporaryFileManager as Ds, TemporaryFileStatus as Cn } from "@umbraco-cms/backoffice/temporary-file";
const Ns = "change", Ms = "uploaded";
class Us extends Event {
  constructor(e) {
    super(Ns, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.file = e;
  }
}
class zs extends Event {
  constructor(e) {
    super(Ms, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.result = e;
  }
}
const Ls = "usync-action-click";
class Ws extends Event {
  constructor(e) {
    super(Ls, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.button = e;
  }
}
const Hs = "perform-action";
class js extends Event {
  constructor(e, t, s, o, r) {
    super(Hs, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.group = e, this.key = t, this.force = s, this.clean = o, this.file = r;
  }
}
var Bs = Object.defineProperty, Fs = Object.getOwnPropertyDescriptor, $n = (n) => {
  throw TypeError(n);
}, ht = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Fs(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && Bs(e, t, o), o;
}, Vs = (n, e, t) => e.has(n) || $n("Cannot " + t), qs = (n, e, t) => e.has(n) ? $n("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Gs = (n, e, t) => (Vs(n, e, "access private method"), t), Et, En;
let ye = class extends Ce {
  constructor() {
    super(...arguments), qs(this, Et), this.disabled = !1;
  }
  render() {
    var e, t;
    const n = this.group.buttons.map((s) => h`
				<usync-action-button
					.button=${s}
					.disabled=${this.disabled}
					state=${fn(this.state)}
					@usync-action-click=${(o) => Gs(this, Et, En).call(this, o, this.group)}></usync-action-button>
			`);
    return h`
			<uui-box class="action-box ${this.disabled ? "disabled" : ""}">
				<div class="box-content">
					<h2 class="box-heading">${(e = this.group) == null ? void 0 : e.groupName}</h2>
					<umb-icon name=${(t = this.group) == null ? void 0 : t.icon}></umb-icon>
					<div class="box-buttons">${n}</div>
				</div>
			</uui-box>
		`;
  }
};
Et = /* @__PURE__ */ new WeakSet();
En = function(n, e) {
  n != null && n.button && this.dispatchEvent(
    new js(
      e,
      n.button.key,
      n.button.force,
      n.button.clean,
      n.button.file
    )
  );
};
ye.styles = O`
		:host {
			flex-grow: 1;
		}

		.action-box {
			transition: opacity 0.2s ease-in-out;
		}

		.box-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.box-heading {
			font-size: var(--uui-size-8);
			margin: 0;
		}

		umb-icon {
			margin: var(--uui-size-8) 0 var(--uui-size-10);
			font-size: var(--uui-type-h2-size);
			color: var(--uui-color-text-alt);
		}

		uui-button {
			margin: 0 var(--uui-size-space-2);
			font-size: var(--uui-size-6);
		}

		.box-buttons {
			margin: var(--uui-size-space-2) 0;
		}

		.disabled {
			opacity: 0.4;
		}
	`;
ht([
  C({ type: Object })
], ye.prototype, "group", 2);
ht([
  C({ type: String })
], ye.prototype, "state", 2);
ht([
  C({ type: Boolean })
], ye.prototype, "disabled", 2);
ye = ht([
  T("usync-action-box")
], ye);
var Xs = Object.defineProperty, Ks = Object.getOwnPropertyDescriptor, $e = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Ks(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && Xs(e, t, o), o;
};
let K = class extends He(Ce) {
  constructor() {
    super(), this.addMsg = {}, this.title = "", this.complete = !1, this.consumeContext(_n, (n) => {
      n && (this.observe(n.update, (e) => {
        this.updateMsg = e;
      }), this.observe(n.add, (e) => {
        this.addMsg = e;
      }));
    });
  }
  render() {
    var e, t;
    if (!this.actions) return P;
    var n = (e = this.actions) == null ? void 0 : e.map((s) => h`
				<div
					class="action 
                    ${s.status == Ye.COMPLETE ? "complete" : ""} 
                    ${s.status == Ye.PROCESSING ? "working" : ""}">
					<div class="icon-holder">
						<uui-icon .name=${s.icon ?? "icon-box"}></uui-icon>
						${this.renderBadge(s)}
					</div>
					<h4>${s.name ?? "unknown"}</h4>
				</div>
			`);
    return h`
			<uui-box>
				<h2>${this.title}</h2>
				<div class="action-list">${n}</div>
				<div class="update-box">${(t = this.updateMsg) == null ? void 0 : t.message}</div>
			</uui-box>
		`;
  }
  renderBadge(n) {
    if (n.status == Ye.PENDING) return;
    if (n.status == Ye.PROCESSING)
      return h`<uui-badge color="positive" look="default">
				<uui-icon name="icon-sync"></uui-icon
			></uui-badge>`;
    const e = n.inError ? "warning" : "positive", t = n.inError ? "Some errors occured duing import" : "Changes imported successfully";
    return !this.complete || n.changes == 0 ? h`<uui-badge .color=${e} look="default" title=${t}
				><uui-icon name="icon-check"></uui-icon
			></uui-badge>` : h`<uui-badge .color=${e} title=${t}>${n.changes}</uui-badge>`;
  }
};
K.styles = O`
		:host {
			display: block;
		}

		h2 {
			text-align: center;
			margin: 0;
		}

		.action-list {
			margin-top: var(--uui-size-space-4);
			padding: var(--uui-size-space-4) 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.action {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-width: var(--uui-size-layout-5);
			color: var(--uui-color-text-alt);
			opacity: 0.67;
			margin: var(--uui-size-space-4) 0 var(--uui-size-space-6);
		}

		.action h4 {
			margin: var(--uui-size-space-4) 0;
		}

		.icon-holder {
			position: relative;
			padding: 0 var(--uui-size-7);
		}

		.action uui-icon {
			font-size: var(--uui-size-12);
		}

		.action uui-badge uui-icon {
			font-size: var(--uui-type-h4-size);
		}

		.complete {
			color: var(--uui-color-default-emphasis);
		}

		.working {
			color: var(--uui-color-positive);
			opacity: 1;
		}

		.update-box {
			font-weight: bold;
			text-align: center;
		}
	`;
$e([
  f()
], K.prototype, "updateMsg", 2);
$e([
  f()
], K.prototype, "addMsg", 2);
$e([
  C({ type: String })
], K.prototype, "title", 2);
$e([
  C({ type: Array })
], K.prototype, "actions", 2);
$e([
  C({ type: Boolean })
], K.prototype, "complete", 2);
K = $e([
  T("usync-progress-box")
], K);
var Ys = Object.defineProperty, Js = Object.getOwnPropertyDescriptor, kn = (n) => {
  throw TypeError(n);
}, dt = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Js(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && Ys(e, t, o), o;
}, Ut = (n, e, t) => e.has(n) || kn("Cannot " + t), Qs = (n, e, t) => (Ut(n, e, "read from private field"), e.get(n)), Yt = (n, e, t) => e.has(n) ? kn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Zs = (n, e, t, s) => (Ut(n, e, "write to private field"), e.set(n, t), t), Jt = (n, e, t) => (Ut(n, e, "access private method"), t), rt, tt, In, xn;
let be = class extends He(Ce) {
  constructor() {
    super(), Yt(this, tt), Yt(this, rt), this.results = [], this.showAll = !1, this.changeCount = 0, this.consumeContext(Ot, (n) => {
      Zs(this, rt, n);
    });
  }
  groupBy(n, e) {
    return n.reduce((t, s) => {
      const o = e(s), r = t[o] || [];
      return r.push(s), { ...t, [o]: r };
    }, {});
  }
  render() {
    var t, s, o;
    this.changeCount = ((t = this.results) == null ? void 0 : t.filter((r) => r.change !== Oe.NO_CHANGE).length) ?? 0;
    const n = this.groupBy(this.results || [], (r) => r.itemType), e = [];
    for (const r in n) {
      if ((n[r].filter((l) => l.change !== Oe.NO_CHANGE).length ?? 0) === 0 && !this.showAll) continue;
      const a = h`<usync-result-group
				.groupName=${r}
				.results=${n[r]}
				.showAll=${this.showAll}
				@show-detail=${Jt(this, tt, xn)}></usync-result-group> `;
      e.push(a);
    }
    return this.changeCount == 0 && !this.showAll ? h`
					${this.renderResultBar(((s = this.results) == null ? void 0 : s.length) || 0, this.changeCount)}
					<div class="empty">
						<umb-localize key="uSync_noChange"></umb-localize>
					</div>
				` : h`<div id="result-box">
					${this.renderResultBar(((o = this.results) == null ? void 0 : o.length) || 0, this.changeCount)}
					${e}
				</div>`;
  }
  renderResultBar(n, e) {
    const t = e === 0 ? "uSync_noChangeCount" : "uSync_changeCount";
    return h`<div class="result-header">
			<uui-toggle
				.label=${this.localize.term("uSync_showAll")}
				?checked=${this.showAll}
				@change=${Jt(this, tt, In)}></uui-toggle>
			<umb-localize .key=${t} .args=${[n, e]}
				>${e}/${n} items</umb-localize
			>
		</div>`;
  }
};
rt = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakSet();
In = function() {
  this.showAll = !this.showAll;
};
xn = async function(n) {
  var s;
  if (console.debug("Showing detail for action:", n.action), n.action.change == Oe.EXPORT) return;
  const e = (s = Qs(this, rt)) == null ? void 0 : s.open(this, Ss, {
    data: {
      item: n.action
    }
  });
  await (e == null ? void 0 : e.onSubmit().catch(() => {
  }));
};
be.styles = O`
		:host {
			display: block;
			margin: var(--uui-size-space-4) 0;
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		#result-box {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		uui-table {
			position: relative;
			z-index: 100;
		}

		.result-header {
			display: flex;
			justify-content: space-between;
			padding: var(--uui-size-space-4);
			border: 1px solid var(--uui-color-border);
			padding: var(--uui-size-space-4);
		}

		.result-header h3 {
			margin: 0;
			padding: 0;
		}

		.empty {
			padding: var(--uui-size-20);
			font-size: var(--uui-type-h5-size);
			text-align: center;
			font-weight: 900;
		}

		.error {
			background-color: #fce4ec;
		}
	`;
dt([
  C({ type: Array })
], be.prototype, "results", 2);
dt([
  f()
], be.prototype, "showAll", 2);
dt([
  f()
], be.prototype, "changeCount", 2);
be = dt([
  T("usync-results")
], be);
var eo = Object.defineProperty, to = Object.getOwnPropertyDescriptor, Pn = (n) => {
  throw TypeError(n);
}, Tn = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? to(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && eo(e, t, o), o;
}, no = (n, e, t) => e.has(n) || Pn("Cannot " + t), so = (n, e, t) => e.has(n) ? Pn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Qt = (n, e, t) => (no(n, e, "access private method"), t), nt, kt;
let it = class extends He(Ce) {
  constructor() {
    super(...arguments), so(this, nt);
  }
  render() {
    var n, e;
    return ((n = this.item) == null ? void 0 : n.change) == Oe.CREATE ? this.render_create() : ((e = this.item) == null ? void 0 : e.details.length) ?? !1 ? this.renderChangeTable() : this.renderNoChanges();
  }
  renderChangeTable() {
    return h`
			<uui-table>
				<uui-table-head>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeAction">Action</umb-localize>
					</uui-table-head-cell>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeItem">Item</umb-localize>
					</uui-table-head-cell>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeDiffrence">Difference</umb-localize>
					</uui-table-head-cell>
				</uui-table-head>
				${this.render_details()}
			</uui-table>
		`;
  }
  renderNoChanges() {
    var n, e;
    return h`
			<div class="change-box">
				<h3>
					<umb-localize key="uSync_noChanges${(n = this.item) == null ? void 0 : n.change}"
						>No changes</umb-localize
					>
				</h3>
				${ot(
      ((e = this.item) == null ? void 0 : e.change) == Oe.IMPORT,
      () => {
        var t, s;
        return h`<div>
							${(((t = this.item) == null ? void 0 : t.message) ?? "").length > 0 ? (s = this.item) == null ? void 0 : s.message : "Item was imported but no properties were changed "}
						</div>`;
      }
    )}
			</div>
		`;
  }
  render_create() {
    return h`
			<h1>
				<umb-localize key="uSync_changeCreate">This item is being created</umb-localize>
			</h1>
		`;
  }
  render_details() {
    var e;
    var n = (e = this.item) == null ? void 0 : e.details.map((t) => {
      const s = Qt(this, nt, kt).call(this, t.oldValue), o = Qt(this, nt, kt).call(this, t.newValue), i = Ps(s, o).map((a) => a.added ? h`<ins>${a.value}</ins>` : a.removed ? h`<del>${a.value}</del>` : h`<span>${a.value}</span>`);
      return h`
				<uui-table-row>
					<uui-table-cell>${t.name}</uui-table-cell>
					<uui-table-cell>${t.change}</uui-table-cell>
					<uui-table-cell class="detail-data">
						<pre>${i}</pre>
					</uui-table-cell>
				</uui-table-row>
			`;
    });
    return n;
  }
  render_changes() {
  }
};
nt = /* @__PURE__ */ new WeakSet();
kt = function(n) {
  try {
    return JSON.stringify(JSON.parse(n ?? ""), null, 1);
  } catch {
    return n ?? "";
  }
};
it.styles = O`
		:host {
			display: block;
			margin: var(--uui-size-space-4) 0;
		}

		.change-box {
			padding: var(
				--uui-box-header-padding,
				var(--uui-size-space-4, 12px) var(--uui-size-space-5, 18px)
			);
		}
		.change-box h3 {
			margin: 0;
		}

		uui-table-cell {
			vertical-align: top;
		}

		uui-table-cell pre {
			margin: 0;
			padding: 0;
		}

		pre ins {
			color: var(--uui-color-positive);
		}

		pre del {
			color: var(--uui-color-danger);
		}
	`;
Tn([
  C({ type: Object })
], it.prototype, "item", 2);
it = Tn([
  T("usync-change-view")
], it);
var oo = /* @__PURE__ */ ((n) => (n.NO_CHANGE = "NoChange", n.CREATE = "Create", n.UPDATE = "Update", n.DELETE = "Delete", n.ERROR = "Error", n.WARNING = "Warning", n))(oo || {}), U = /* @__PURE__ */ ((n) => (n.NO_CHANGE = "NoChange", n.CREATE = "Create", n.IMPORT = "Import", n.EXPORT = "Export", n.UPDATE = "Update", n.DELETE = "Delete", n.WILL_CHANGE = "WillChange", n.INFORMATION = "Information", n.ROLLEDBACK = "Rolledback", n.FAIL = "Fail", n.IMPORT_FAIL = "ImportFail", n.MISMATCH = "Mismatch", n.PARENT_MISSING = "ParentMissing", n.HIDDEN = "Hidden", n.CLEAN = "Clean", n.REMOVED = "Removed", n))(U || {}), ro = /* @__PURE__ */ ((n) => (n.DEFAULT = "Default", n.INFO = "Info", n.ERROR = "Error", n.SUCCESS = "Success", n.WARNING = "Warning", n))(ro || {}), io = /* @__PURE__ */ ((n) => (n.PENDING = "Pending", n.PROCESSING = "Processing", n.COMPLETE = "Complete", n.ERROR = "Error", n))(io || {}), ao = async (n, e) => {
  let t = typeof e == "function" ? await e(n) : e;
  if (t) return n.scheme === "bearer" ? `Bearer ${t}` : n.scheme === "basic" ? `Basic ${btoa(t)}` : t;
}, co = { bodySerializer: (n) => JSON.stringify(n, (e, t) => typeof t == "bigint" ? t.toString() : t) }, lo = (n) => {
  switch (n) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, uo = (n) => {
  switch (n) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, ho = (n) => {
  switch (n) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, An = ({ allowReserved: n, explode: e, name: t, style: s, value: o }) => {
  if (!e) {
    let a = (n ? o : o.map((l) => encodeURIComponent(l))).join(uo(s));
    switch (s) {
      case "label":
        return `.${a}`;
      case "matrix":
        return `;${t}=${a}`;
      case "simple":
        return a;
      default:
        return `${t}=${a}`;
    }
  }
  let r = lo(s), i = o.map((a) => s === "label" || s === "simple" ? n ? a : encodeURIComponent(a) : pt({ allowReserved: n, name: t, value: a })).join(r);
  return s === "label" || s === "matrix" ? r + i : i;
}, pt = ({ allowReserved: n, name: e, value: t }) => {
  if (t == null) return "";
  if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${n ? t : encodeURIComponent(t)}`;
}, Rn = ({ allowReserved: n, explode: e, name: t, style: s, value: o }) => {
  if (o instanceof Date) return `${t}=${o.toISOString()}`;
  if (s !== "deepObject" && !e) {
    let a = [];
    Object.entries(o).forEach(([d, p]) => {
      a = [...a, d, n ? p : encodeURIComponent(p)];
    });
    let l = a.join(",");
    switch (s) {
      case "form":
        return `${t}=${l}`;
      case "label":
        return `.${l}`;
      case "matrix":
        return `;${t}=${l}`;
      default:
        return l;
    }
  }
  let r = ho(s), i = Object.entries(o).map(([a, l]) => pt({ allowReserved: n, name: s === "deepObject" ? `${t}[${a}]` : a, value: l })).join(r);
  return s === "label" || s === "matrix" ? r + i : i;
}, po = /\{[^{}]+\}/g, go = ({ path: n, url: e }) => {
  let t = e, s = e.match(po);
  if (s) for (let o of s) {
    let r = !1, i = o.substring(1, o.length - 1), a = "simple";
    i.endsWith("*") && (r = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), a = "label") : i.startsWith(";") && (i = i.substring(1), a = "matrix");
    let l = n[i];
    if (l == null) continue;
    if (Array.isArray(l)) {
      t = t.replace(o, An({ explode: r, name: i, style: a, value: l }));
      continue;
    }
    if (typeof l == "object") {
      t = t.replace(o, Rn({ explode: r, name: i, style: a, value: l }));
      continue;
    }
    if (a === "matrix") {
      t = t.replace(o, `;${pt({ name: i, value: l })}`);
      continue;
    }
    let d = encodeURIComponent(a === "label" ? `.${l}` : l);
    t = t.replace(o, d);
  }
  return t;
}, On = ({ allowReserved: n, array: e, object: t } = {}) => (s) => {
  let o = [];
  if (s && typeof s == "object") for (let r in s) {
    let i = s[r];
    if (i != null) {
      if (Array.isArray(i)) {
        o = [...o, An({ allowReserved: n, explode: !0, name: r, style: "form", value: i, ...e })];
        continue;
      }
      if (typeof i == "object") {
        o = [...o, Rn({ allowReserved: n, explode: !0, name: r, style: "deepObject", value: i, ...t })];
        continue;
      }
      o = [...o, pt({ allowReserved: n, name: r, value: i })];
    }
  }
  return o.join("&");
}, fo = (n) => {
  var t;
  if (!n) return "stream";
  let e = (t = n.split(";")[0]) == null ? void 0 : t.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((s) => e.startsWith(s))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, _o = async ({ security: n, ...e }) => {
  for (let t of n) {
    let s = await ao(t, e.auth);
    if (!s) continue;
    let o = t.name ?? "Authorization";
    switch (t.in) {
      case "query":
        e.query || (e.query = {}), e.query[o] = s;
        break;
      case "cookie":
        e.headers.append("Cookie", `${o}=${s}`);
        break;
      case "header":
      default:
        e.headers.set(o, s);
        break;
    }
    return;
  }
}, Zt = (n) => mo({ baseUrl: n.baseUrl, path: n.path, query: n.query, querySerializer: typeof n.querySerializer == "function" ? n.querySerializer : On(n.querySerializer), url: n.url }), mo = ({ baseUrl: n, path: e, query: t, querySerializer: s, url: o }) => {
  let r = o.startsWith("/") ? o : `/${o}`, i = (n ?? "") + r;
  e && (i = go({ path: e, url: i }));
  let a = t ? s(t) : "";
  return a.startsWith("?") && (a = a.substring(1)), a && (i += `?${a}`), i;
}, en = (n, e) => {
  var s;
  let t = { ...n, ...e };
  return (s = t.baseUrl) != null && s.endsWith("/") && (t.baseUrl = t.baseUrl.substring(0, t.baseUrl.length - 1)), t.headers = Dn(n.headers, e.headers), t;
}, Dn = (...n) => {
  let e = new Headers();
  for (let t of n) {
    if (!t || typeof t != "object") continue;
    let s = t instanceof Headers ? t.entries() : Object.entries(t);
    for (let [o, r] of s) if (r === null) e.delete(o);
    else if (Array.isArray(r)) for (let i of r) e.append(o, i);
    else r !== void 0 && e.set(o, typeof r == "object" ? JSON.stringify(r) : r);
  }
  return e;
}, bt = class {
  constructor() {
    Gt(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  exists(n) {
    return this._fns.indexOf(n) !== -1;
  }
  eject(n) {
    let e = this._fns.indexOf(n);
    e !== -1 && (this._fns = [...this._fns.slice(0, e), ...this._fns.slice(e + 1)]);
  }
  use(n) {
    this._fns = [...this._fns, n];
  }
}, yo = () => ({ error: new bt(), request: new bt(), response: new bt() }), bo = On({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), wo = { "Content-Type": "application/json" }, Nn = (n = {}) => ({ ...co, headers: wo, parseAs: "auto", querySerializer: bo, ...n }), vo = (n = {}) => {
  let e = en(Nn(), n), t = () => ({ ...e }), s = (i) => (e = en(e, i), t()), o = yo(), r = async (i) => {
    let a = { ...e, ...i, fetch: i.fetch ?? e.fetch ?? globalThis.fetch, headers: Dn(e.headers, i.headers) };
    a.security && await _o({ ...a, security: a.security }), a.body && a.bodySerializer && (a.body = a.bodySerializer(a.body)), (a.body === void 0 || a.body === "") && a.headers.delete("Content-Type");
    let l = Zt(a), d = { redirect: "follow", ...a }, p = new Request(l, d);
    for (let z of o.request._fns) p = await z(p, a);
    let D = a.fetch, I = await D(p);
    for (let z of o.response._fns) I = await z(I, p, a);
    let qe = { request: p, response: I };
    if (I.ok) {
      if (I.status === 204 || I.headers.get("Content-Length") === "0") return { data: {}, ...qe };
      let z = (a.parseAs === "auto" ? fo(I.headers.get("Content-Type")) : a.parseAs) ?? "json";
      if (z === "stream") return { data: I.body, ...qe };
      let Xe = await I[z]();
      return z === "json" && (a.responseValidator && await a.responseValidator(Xe), a.responseTransformer && (Xe = await a.responseTransformer(Xe))), { data: Xe, ...qe };
    }
    let Ge = await I.text();
    try {
      Ge = JSON.parse(Ge);
    } catch {
    }
    let Ee = Ge;
    for (let z of o.error._fns) Ee = await z(Ge, I, p, a);
    if (Ee = Ee || {}, a.throwOnError) throw Ee;
    return { error: Ee, ...qe };
  };
  return { buildUrl: Zt, connect: (i) => r({ ...i, method: "CONNECT" }), delete: (i) => r({ ...i, method: "DELETE" }), get: (i) => r({ ...i, method: "GET" }), getConfig: t, head: (i) => r({ ...i, method: "HEAD" }), interceptors: o, options: (i) => r({ ...i, method: "OPTIONS" }), patch: (i) => r({ ...i, method: "PATCH" }), post: (i) => r({ ...i, method: "POST" }), put: (i) => r({ ...i, method: "PUT" }), request: r, setConfig: s, trace: (i) => r({ ...i, method: "TRACE" }) };
};
const k = vo(Nn({
  baseUrl: "http://localhost:33331",
  throwOnError: !0
}));
class Vi {
  /**
   * @deprecated
   */
  static getActions(e) {
    return ((e == null ? void 0 : e.client) ?? k).get({
      url: "/umbraco/usync/api/v1/Actions",
      ...e
    });
  }
  static getActionsBySet(e) {
    return ((e == null ? void 0 : e.client) ?? k).get({
      url: "/umbraco/usync/api/v1/ActionsBySet",
      ...e
    });
  }
  static download(e) {
    return ((e == null ? void 0 : e.client) ?? k).post({
      url: "/umbraco/usync/api/v1/Download",
      ...e
    });
  }
  static performAction(e) {
    return ((e == null ? void 0 : e.client) ?? k).post({
      url: "/umbraco/usync/api/v1/Perform",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static processUpload(e) {
    return ((e == null ? void 0 : e.client) ?? k).post({
      url: "/umbraco/usync/api/v1/ProcessUpload",
      ...e
    });
  }
}
class qi {
  static checkLegacy(e) {
    return ((e == null ? void 0 : e.client) ?? k).get({
      url: "/umbraco/usync/api/v1/CheckLegacy",
      ...e
    });
  }
  static copyLegacy(e) {
    return ((e == null ? void 0 : e.client) ?? k).post({
      url: "/umbraco/usync/api/v1/CopyLegacy",
      ...e
    });
  }
  static ignoreLegacy(e) {
    return ((e == null ? void 0 : e.client) ?? k).post({
      url: "/umbraco/usync/api/v1/IgnoreLegacy",
      ...e
    });
  }
}
class Gi {
  static getAddOns(e) {
    return ((e == null ? void 0 : e.client) ?? k).get({
      url: "/umbraco/usync/api/v1/AddOns",
      ...e
    });
  }
  static getAddonSplash(e) {
    return ((e == null ? void 0 : e.client) ?? k).get({
      url: "/umbraco/usync/api/v1/AddOnSplash",
      ...e
    });
  }
  static getHandlerSetSettings(e) {
    return ((e == null ? void 0 : e.client) ?? k).get({
      url: "/umbraco/usync/api/v1/HandlerSettings",
      ...e
    });
  }
  static getSets(e) {
    return ((e == null ? void 0 : e.client) ?? k).get({
      url: "/umbraco/usync/api/v1/Sets",
      ...e
    });
  }
  static getSettings(e) {
    return ((e == null ? void 0 : e.client) ?? k).get({
      url: "/umbraco/usync/api/v1/Settings",
      ...e
    });
  }
}
var So = Object.defineProperty, Co = Object.getOwnPropertyDescriptor, Mn = (n) => {
  throw TypeError(n);
}, $o = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Co(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && So(e, t, o), o;
}, Eo = (n, e, t) => e.has(n) || Mn("Cannot " + t), ko = (n, e, t) => e.has(n) ? Mn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Io = (n, e, t) => (Eo(n, e, "access private method"), t), It, Un;
let De = class extends Dt {
  constructor() {
    super(...arguments), ko(this, It);
  }
  render() {
    var n, e;
    return h`
			<umb-body-layout headline="Changes : ${((n = this.data) == null ? void 0 : n.item.name) ?? ""}">
				<uui-box style="--uui-box-default-padding: 0;">
					<div slot="header" id="header">
						<h3><umb-localize key="uSync_detailHeadline"></umb-localize></h3>
						<umb-localize key="uSync_detailHeader"></umb-localize>
					</div>
				</uui-box>
				<uui-box style="--uui-box-default-padding: 0;">
					<usync-change-view .item=${(e = this.data) == null ? void 0 : e.item}></usync-change-view>
				</uui-box>
				<div slot="actions">
					<uui-button
						id="cancel"
						.label=${this.localize.term("general_close")}
						@click="${Io(this, It, Un)}"></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
It = /* @__PURE__ */ new WeakSet();
Un = function() {
  var n;
  (n = this.modalContext) == null || n.reject();
};
De.styles = O`
		#header h3 {
			margin: 0;
		}
	`;
De = $o([
  T("usync-details-modal")
], De);
const xo = De, Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo,
  get uSyncDetailsModalElement() {
    return De;
  }
}, Symbol.toStringTag, { value: "Module" })), Xi = new Nt("usync.details.modal", {
  modal: {
    type: "sidebar",
    size: "large"
  }
});
var To = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, zn = (n) => {
  throw TypeError(n);
}, Ro = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Ao(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && To(e, t, o), o;
}, Oo = (n, e, t) => e.has(n) || zn("Cannot " + t), Do = (n, e, t) => e.has(n) ? zn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), No = (n, e, t) => (Oo(n, e, "access private method"), t), xt, Ln;
let at = class extends Dt {
  constructor() {
    super(...arguments), Do(this, xt);
  }
  render() {
    var e, t, s;
    const n = `Error: ${((e = this.data) == null ? void 0 : e.action.name) ?? ""} [${(t = this.data) == null ? void 0 : t.action.itemType}]`;
    return h`<umb-body-layout .headline=${n}>
			<strong>
				<umb-localize key="uSync_errorHeader"></umb-localize>
			</strong>
			<div class="error">${(s = this.data) == null ? void 0 : s.action.message}</div>
			<div slot="actions">
				<uui-button
					id="cancel"
					.label=${this.localize.term("general_close")}
					@click="${No(this, xt, Ln)}"></uui-button>
			</div>
		</umb-body-layout>`;
  }
};
xt = /* @__PURE__ */ new WeakSet();
Ln = function() {
  var n;
  (n = this.modalContext) == null || n.reject();
};
at.styles = O`
		umb-body-layout {
			max-width: 450px;
		}

		.error {
			padding: 10px;
			font-family: monospace;
			color: red;
		}
	`;
at = Ro([
  T("usync-error-modal")
], at);
const Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return at;
  }
}, Symbol.toStringTag, { value: "Module" })), Uo = new Nt("usync.error.modal", {
  modal: {
    type: "dialog"
  }
}), zo = "show-detail";
class Lo extends Event {
  constructor(e) {
    super(zo, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.action = e;
  }
}
var Wo = Object.defineProperty, Ho = Object.getOwnPropertyDescriptor, Wn = (n) => {
  throw TypeError(n);
}, Be = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Ho(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && Wo(e, t, o), o;
}, jo = (n, e, t) => e.has(n) || Wn("Cannot " + t), Bo = (n, e, t) => e.has(n) ? Wn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), tn = (n, e, t) => (jo(n, e, "access private method"), t), st, Hn, jn;
let te = class extends je {
  constructor() {
    super(...arguments), Bo(this, st), this.expanded = !1, this.showAll = !1, this.results = [], this.groupName = "";
  }
  getChangeCount() {
    var n;
    return (n = this.results) == null ? void 0 : n.filter((e) => e.change !== U.NO_CHANGE).length;
  }
  render() {
    var e;
    const n = this.getChangeCount() ?? 0;
    return n === 0 && !this.showAll ? P : h`
			<uui-box
				class=${mt({
      has_changes: n > 0
    })}>
				<div
					class="summary ${ot(this.expanded, () => "expanded")}"
					@click=${() => this.expanded = !this.expanded}>
					<h4>${this.localize.term("uSync_" + this.groupName)}</h4>
					<div class="summary-right">
						<h4 class="count">${n}/${(e = this.results) == null ? void 0 : e.length}</h4>
						<uui-icon
							name="icon-play"
							class=${mt({ expanded: this.expanded })}></uui-icon>
					</div>
				</div>
				<uui-table>
					${ot(
      this.expanded == !0,
      () => h`${this.renderGroupedRows(this.results)}`
    )}
				</uui-table>
			</uui-box>
		`;
  }
  renderGroupedRows(n) {
    const e = n == null ? void 0 : n.map((t) => {
      if (!this.showAll && t.change == U.NO_CHANGE) return P;
      const s = t.change == U.NO_CHANGE ? "icon-trafic" : t.success ? "icon-check color-green" : "icon-wrong color-red", o = t.change != U.NO_CHANGE && t.change != U.EXPORT, r = t.details.length;
      return h`
				<uui-table-row
					class=${mt({ changerow: o, no_change: r == 0 })}>
					<uui-table-cell class="icon-cell" .noPadding=${!0}>
						<umb-icon .name=${s}></umb-icon>
					</uui-table-cell>
					<uui-table-cell
						@click=${() => tn(this, st, Hn).call(this, t)}
						.clipText=${!0}
						style="--uui-table-cell-padding: var(--uui-size-space-2);">
						<div class="item-name">
							<div>${t.name}</div>
							<div>${this.renderMessage(t)}</div>
						</div>
						<div class="item-detail">
							<div>${t.itemType}</div>
							<div>${t.change}</div>
						</div>
					</uui-table-cell>
				</uui-table-row>
			`;
    });
    return h`${e}`;
  }
  renderMessage(n) {
    return n.change != U.FAIL && n.change != U.IMPORT_FAIL || !n.message ? h`<em>${n.message}</em>` : h` <uui-button
					look="default"
					color="danger"
					label="View error"
					compact
					@click=${(e) => tn(this, st, jn).call(this, e, n)}></uui-button>`;
  }
};
st = /* @__PURE__ */ new WeakSet();
Hn = async function(n) {
  n.change == U.NO_CHANGE || n.change == U.EXPORT || this.dispatchEvent(new Lo(n));
};
jn = async function(n, e) {
  n.stopPropagation();
  const t = await this.getContext(Ot), s = t == null ? void 0 : t.open(this, Uo, {
    data: {
      action: e
    }
  });
  return await (s == null ? void 0 : s.onSubmit().catch(() => {
  }));
};
te.styles = O`
		uui-box {
			cursor: pointer;
			--uui-box-default-padding: 0;
		}

		.expanded {
			border-bottom: 1px solid var(--uui-color-border);
		}

		.summary {
			display: flex;
			margin: 0;
			padding: 0 20px;
			justify-content: space-between;
		}

		.summary-right {
			display: flex;
			align-items: center;
			gap: var(--uui-size-space-2);
			color: var(--uui-color-border-emphasis);
		}

		.summary-right uui-icon {
			transform: rotate(90deg);
			transition: transform 0.5s cubic-bezier(0.42, 0, 0.37, 1.62);
		}

		.summary-right uui-icon.expanded {
			transform: rotate(-90deg);
			border-bottom: none;
		}

		.has_changes .count {
			color: var(--uui-text);
		}

		.changerow {
			cursor: pointer;
		}

		.icon-cell {
			padding-left: 20px;
			width: var(--uui-size-8);
		}

		.item-name {
			display: flex;
			justify-content: space-between;
			padding-right: 20px;
		}

		.item-detail {
			display: flex;
			justify-content: space-between;
			font-size: smaller;
			color: var(--uui-color-disabled-contrast);
			padding-right: 20px;
		}

		uui-table-row:first-child uui-table-cell {
			border-top-color: transparent;
		}

		uui-table-row:hover {
			background-color: var(--uui-color-surface-emphasis);
		}
	`;
Be([
  f()
], te.prototype, "expanded", 2);
Be([
  C({ type: Boolean })
], te.prototype, "showAll", 2);
Be([
  C({ type: Array })
], te.prototype, "results", 2);
Be([
  C({ type: String })
], te.prototype, "groupName", 2);
te = Be([
  T("usync-result-group")
], te);
var W, ae, ce, ut, Bn;
class Fo extends Mt {
  constructor(t) {
    super(t);
    _(this, ut);
    _(this, W);
    _(this, ae);
    _(this, ce);
    m(this, ae, new Te(void 0)), this.update = u(this, ae).asObservable(), m(this, ce, new Te({})), this.add = u(this, ce).asObservable(), this.provideContext(_n, this), this.consumeContext(gn, async (s) => {
      !s || !(s != null && s.getOpenApiConfiguration()) || Ke(this, ut, Bn).call(this, "/umbraco/SyncHub", await s.getLatestToken());
    });
  }
  hostConnected() {
    super.hostConnected();
  }
  hostDisconnected() {
    var t;
    super.hostDisconnected(), (t = u(this, W)) == null || t.stop().then(() => {
      console.debug("connection stopped");
    });
  }
  getClientId() {
    var t;
    return ((t = u(this, W)) == null ? void 0 : t.connectionId) ?? null;
  }
}
W = new WeakMap(), ae = new WeakMap(), ce = new WeakMap(), ut = new WeakSet(), Bn = function(t, s) {
  m(this, W, new Kt.HubConnectionBuilder().withUrl(t, { accessTokenFactory: () => s }).configureLogging(Kt.LogLevel.Warning).build()), u(this, W).on("add", (o) => {
    u(this, ce).setValue(o);
  }), u(this, W).on("update", (o) => {
    u(this, ae).setValue(o);
  }), u(this, W).start().then(() => {
  });
};
const Ki = new bn(
  "uSyncSignalRContext"
);
class Z extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(e, t) {
    const s = new.target.prototype;
    super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = s;
  }
}
class zt extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class M extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class Vo extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const s = new.target.prototype;
    super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = s;
  }
}
class qo extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const s = new.target.prototype;
    super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = s;
  }
}
class Go extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const s = new.target.prototype;
    super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = s;
  }
}
class nn extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const t = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
  }
}
class Xo extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(e, t) {
    const s = new.target.prototype;
    super(e), this.innerErrors = t, this.__proto__ = s;
  }
}
class Fn {
  constructor(e, t, s) {
    this.statusCode = e, this.statusText = t, this.content = s;
  }
}
class gt {
  get(e, t) {
    return this.send({
      ...t,
      method: "GET",
      url: e
    });
  }
  post(e, t) {
    return this.send({
      ...t,
      method: "POST",
      url: e
    });
  }
  delete(e, t) {
    return this.send({
      ...t,
      method: "DELETE",
      url: e
    });
  }
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(e) {
    return "";
  }
}
var c;
(function(n) {
  n[n.Trace = 0] = "Trace", n[n.Debug = 1] = "Debug", n[n.Information = 2] = "Information", n[n.Warning = 3] = "Warning", n[n.Error = 4] = "Error", n[n.Critical = 5] = "Critical", n[n.None = 6] = "None";
})(c || (c = {}));
class Ne {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, t) {
  }
}
Ne.instance = new Ne();
const Ko = "8.0.7";
class w {
  static isRequired(e, t) {
    if (e == null)
      throw new Error(`The '${t}' argument is required.`);
  }
  static isNotEmpty(e, t) {
    if (!e || e.match(/^\s*$/))
      throw new Error(`The '${t}' argument should not be empty.`);
  }
  static isIn(e, t, s) {
    if (!(e in t))
      throw new Error(`Unknown ${s} value: ${e}.`);
  }
}
class b {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return !b.isNode && typeof window == "object" && typeof window.document == "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return !b.isNode && typeof self == "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return !b.isNode && typeof window == "object" && typeof window.document > "u";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return typeof process < "u" && process.release && process.release.name === "node";
  }
}
function Me(n, e) {
  let t = "";
  return ne(n) ? (t = `Binary data of length ${n.byteLength}`, e && (t += `. Content: '${Yo(n)}'`)) : typeof n == "string" && (t = `String data of length ${n.length}`, e && (t += `. Content: '${n}'`)), t;
}
function Yo(n) {
  const e = new Uint8Array(n);
  let t = "";
  return e.forEach((s) => {
    const o = s < 16 ? "0" : "";
    t += `0x${o}${s.toString(16)} `;
  }), t.substr(0, t.length - 1);
}
function ne(n) {
  return n && typeof ArrayBuffer < "u" && (n instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  n.constructor && n.constructor.name === "ArrayBuffer");
}
async function Vn(n, e, t, s, o, r) {
  const i = {}, [a, l] = we();
  i[a] = l, n.log(c.Trace, `(${e} transport) sending data. ${Me(o, r.logMessageContent)}.`);
  const d = ne(o) ? "arraybuffer" : "text", p = await t.post(s, {
    content: o,
    headers: { ...i, ...r.headers },
    responseType: d,
    timeout: r.timeout,
    withCredentials: r.withCredentials
  });
  n.log(c.Trace, `(${e} transport) request complete. Response status: ${p.statusCode}.`);
}
function Jo(n) {
  return n === void 0 ? new ct(c.Information) : n === null ? Ne.instance : n.log !== void 0 ? n : new ct(n);
}
class Qo {
  constructor(e, t) {
    this._subject = e, this._observer = t;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((t) => {
    });
  }
}
class ct {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, t) {
    if (e >= this._minLevel) {
      const s = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${c[e]}: ${t}`;
      switch (e) {
        case c.Critical:
        case c.Error:
          this.out.error(s);
          break;
        case c.Warning:
          this.out.warn(s);
          break;
        case c.Information:
          this.out.info(s);
          break;
        default:
          this.out.log(s);
          break;
      }
    }
  }
}
function we() {
  let n = "X-SignalR-User-Agent";
  return b.isNode && (n = "User-Agent"), [n, Zo(Ko, er(), nr(), tr())];
}
function Zo(n, e, t, s) {
  let o = "Microsoft SignalR/";
  const r = n.split(".");
  return o += `${r[0]}.${r[1]}`, o += ` (${n}; `, e && e !== "" ? o += `${e}; ` : o += "Unknown OS; ", o += `${t}`, s ? o += `; ${s}` : o += "; Unknown Runtime Version", o += ")", o;
}
function er() {
  if (b.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else
    return "";
}
function tr() {
  if (b.isNode)
    return process.versions.node;
}
function nr() {
  return b.isNode ? "NodeJS" : "Browser";
}
function wt(n) {
  return n.stack ? n.stack : n.message ? n.message : `${n}`;
}
function sr() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("could not find global");
}
class or extends gt {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u" || b.isNode) {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (t("tough-cookie")).CookieJar(), typeof fetch > "u" ? this._fetchType = t("node-fetch") : this._fetchType = fetch, this._fetchType = t("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(sr());
    if (typeof AbortController > "u") {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = t("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new M();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const t = new this._abortControllerType();
    let s;
    e.abortSignal && (e.abortSignal.onabort = () => {
      t.abort(), s = new M();
    });
    let o = null;
    if (e.timeout) {
      const l = e.timeout;
      o = setTimeout(() => {
        t.abort(), this._logger.log(c.Warning, "Timeout from HTTP request."), s = new zt();
      }, l);
    }
    e.content === "" && (e.content = void 0), e.content && (e.headers = e.headers || {}, ne(e.content) ? e.headers["Content-Type"] = "application/octet-stream" : e.headers["Content-Type"] = "text/plain;charset=UTF-8");
    let r;
    try {
      r = await this._fetchType(e.url, {
        body: e.content,
        cache: "no-cache",
        credentials: e.withCredentials === !0 ? "include" : "same-origin",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          ...e.headers
        },
        method: e.method,
        mode: "cors",
        redirect: "follow",
        signal: t.signal
      });
    } catch (l) {
      throw s || (this._logger.log(c.Warning, `Error from HTTP request. ${l}.`), l);
    } finally {
      o && clearTimeout(o), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!r.ok) {
      const l = await sn(r, "text");
      throw new Z(l || r.statusText, r.status);
    }
    const a = await sn(r, e.responseType);
    return new Fn(r.status, r.statusText, a);
  }
  getCookieString(e) {
    let t = "";
    return b.isNode && this._jar && this._jar.getCookies(e, (s, o) => t = o.join("; ")), t;
  }
}
function sn(n, e) {
  let t;
  switch (e) {
    case "arraybuffer":
      t = n.arrayBuffer();
      break;
    case "text":
      t = n.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${e} is not supported.`);
    default:
      t = n.text();
      break;
  }
  return t;
}
class rr extends gt {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new M()) : e.method ? e.url ? new Promise((t, s) => {
      const o = new XMLHttpRequest();
      o.open(e.method, e.url, !0), o.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.content === "" && (e.content = void 0), e.content && (ne(e.content) ? o.setRequestHeader("Content-Type", "application/octet-stream") : o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
      const r = e.headers;
      r && Object.keys(r).forEach((i) => {
        o.setRequestHeader(i, r[i]);
      }), e.responseType && (o.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        o.abort(), s(new M());
      }), e.timeout && (o.timeout = e.timeout), o.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), o.status >= 200 && o.status < 300 ? t(new Fn(o.status, o.statusText, o.response || o.responseText)) : s(new Z(o.response || o.responseText || o.statusText, o.status));
      }, o.onerror = () => {
        this._logger.log(c.Warning, `Error from HTTP request. ${o.status}: ${o.statusText}.`), s(new Z(o.statusText, o.status));
      }, o.ontimeout = () => {
        this._logger.log(c.Warning, "Timeout from HTTP request."), s(new zt());
      }, o.send(e.content);
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class ir extends gt {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || b.isNode)
      this._httpClient = new or(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new rr(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new M()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class R {
  static write(e) {
    return `${e}${R.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== R.RecordSeparator)
      throw new Error("Message is incomplete.");
    const t = e.split(R.RecordSeparator);
    return t.pop(), t;
  }
}
R.RecordSeparatorCode = 30;
R.RecordSeparator = String.fromCharCode(R.RecordSeparatorCode);
class ar {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return R.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let t, s;
    if (ne(e)) {
      const a = new Uint8Array(e), l = a.indexOf(R.RecordSeparatorCode);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const d = l + 1;
      t = String.fromCharCode.apply(null, Array.prototype.slice.call(a.slice(0, d))), s = a.byteLength > d ? a.slice(d).buffer : null;
    } else {
      const a = e, l = a.indexOf(R.RecordSeparator);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const d = l + 1;
      t = a.substring(0, d), s = a.length > d ? a.substring(d) : null;
    }
    const o = R.parse(t), r = JSON.parse(o[0]);
    if (r.type)
      throw new Error("Expected a handshake response from the server.");
    return [s, r];
  }
}
var g;
(function(n) {
  n[n.Invocation = 1] = "Invocation", n[n.StreamItem = 2] = "StreamItem", n[n.Completion = 3] = "Completion", n[n.StreamInvocation = 4] = "StreamInvocation", n[n.CancelInvocation = 5] = "CancelInvocation", n[n.Ping = 6] = "Ping", n[n.Close = 7] = "Close", n[n.Ack = 8] = "Ack", n[n.Sequence = 9] = "Sequence";
})(g || (g = {}));
class cr {
  constructor() {
    this.observers = [];
  }
  next(e) {
    for (const t of this.observers)
      t.next(e);
  }
  error(e) {
    for (const t of this.observers)
      t.error && t.error(e);
  }
  complete() {
    for (const e of this.observers)
      e.complete && e.complete();
  }
  subscribe(e) {
    return this.observers.push(e), new Qo(this, e);
  }
}
class lr {
  constructor(e, t, s) {
    this._bufferSize = 1e5, this._messages = [], this._totalMessageCount = 0, this._waitForSequenceMessage = !1, this._nextReceivingSequenceId = 1, this._latestReceivedSequenceId = 0, this._bufferedByteCount = 0, this._reconnectInProgress = !1, this._protocol = e, this._connection = t, this._bufferSize = s;
  }
  async _send(e) {
    const t = this._protocol.writeMessage(e);
    let s = Promise.resolve();
    if (this._isInvocationMessage(e)) {
      this._totalMessageCount++;
      let o = () => {
      }, r = () => {
      };
      ne(t) ? this._bufferedByteCount += t.byteLength : this._bufferedByteCount += t.length, this._bufferedByteCount >= this._bufferSize && (s = new Promise((i, a) => {
        o = i, r = a;
      })), this._messages.push(new ur(t, this._totalMessageCount, o, r));
    }
    try {
      this._reconnectInProgress || await this._connection.send(t);
    } catch {
      this._disconnected();
    }
    await s;
  }
  _ack(e) {
    let t = -1;
    for (let s = 0; s < this._messages.length; s++) {
      const o = this._messages[s];
      if (o._id <= e.sequenceId)
        t = s, ne(o._message) ? this._bufferedByteCount -= o._message.byteLength : this._bufferedByteCount -= o._message.length, o._resolver();
      else if (this._bufferedByteCount < this._bufferSize)
        o._resolver();
      else
        break;
    }
    t !== -1 && (this._messages = this._messages.slice(t + 1));
  }
  _shouldProcessMessage(e) {
    if (this._waitForSequenceMessage)
      return e.type !== g.Sequence ? !1 : (this._waitForSequenceMessage = !1, !0);
    if (!this._isInvocationMessage(e))
      return !0;
    const t = this._nextReceivingSequenceId;
    return this._nextReceivingSequenceId++, t <= this._latestReceivedSequenceId ? (t === this._latestReceivedSequenceId && this._ackTimer(), !1) : (this._latestReceivedSequenceId = t, this._ackTimer(), !0);
  }
  _resetSequence(e) {
    if (e.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
      return;
    }
    this._nextReceivingSequenceId = e.sequenceId;
  }
  _disconnected() {
    this._reconnectInProgress = !0, this._waitForSequenceMessage = !0;
  }
  async _resend() {
    const e = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
    await this._connection.send(this._protocol.writeMessage({ type: g.Sequence, sequenceId: e }));
    const t = this._messages;
    for (const s of t)
      await this._connection.send(s._message);
    this._reconnectInProgress = !1;
  }
  _dispose(e) {
    e ?? (e = new Error("Unable to reconnect to server."));
    for (const t of this._messages)
      t._rejector(e);
  }
  _isInvocationMessage(e) {
    switch (e.type) {
      case g.Invocation:
      case g.StreamItem:
      case g.Completion:
      case g.StreamInvocation:
      case g.CancelInvocation:
        return !0;
      case g.Close:
      case g.Sequence:
      case g.Ping:
      case g.Ack:
        return !1;
    }
  }
  _ackTimer() {
    this._ackTimerHandle === void 0 && (this._ackTimerHandle = setTimeout(async () => {
      try {
        this._reconnectInProgress || await this._connection.send(this._protocol.writeMessage({ type: g.Ack, sequenceId: this._latestReceivedSequenceId }));
      } catch {
      }
      clearTimeout(this._ackTimerHandle), this._ackTimerHandle = void 0;
    }, 1e3));
  }
}
class ur {
  constructor(e, t, s, o) {
    this._message = e, this._id = t, this._resolver = s, this._rejector = o;
  }
}
const hr = 30 * 1e3, dr = 15 * 1e3, pr = 1e5;
var y;
(function(n) {
  n.Disconnected = "Disconnected", n.Connecting = "Connecting", n.Connected = "Connected", n.Disconnecting = "Disconnecting", n.Reconnecting = "Reconnecting";
})(y || (y = {}));
class Lt {
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, t, s, o, r, i, a) {
    return new Lt(e, t, s, o, r, i, a);
  }
  constructor(e, t, s, o, r, i, a) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(c.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, w.isRequired(e, "connection"), w.isRequired(t, "logger"), w.isRequired(s, "protocol"), this.serverTimeoutInMilliseconds = r ?? hr, this.keepAliveIntervalInMilliseconds = i ?? dr, this._statefulReconnectBufferSize = a ?? pr, this._logger = t, this._protocol = s, this.connection = e, this._reconnectPolicy = o, this._handshakeProtocol = new ar(), this.connection.onreceive = (l) => this._processIncomingData(l), this.connection.onclose = (l) => this._connectionClosed(l), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = y.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: g.Ping });
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection && this.connection.connectionId || null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(e) {
    if (this._connectionState !== y.Disconnected && this._connectionState !== y.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!e)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = e;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== y.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = y.Connecting, this._logger.log(c.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), b.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = y.Connected, this._connectionStarted = !0, this._logger.log(c.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = y.Disconnected, this._logger.log(c.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
    const e = new Promise((t, s) => {
      this._handshakeResolver = t, this._handshakeRejecter = s;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let t = this._protocol.version;
      this.connection.features.reconnect || (t = 1);
      const s = {
        protocol: this._protocol.name,
        version: t
      };
      if (this._logger.log(c.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(s)), this._logger.log(c.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
      (this.connection.features.reconnect || !1) && (this._messageBuffer = new lr(this._protocol, this.connection, this._statefulReconnectBufferSize), this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer), this.connection.features.resend = () => {
        if (this._messageBuffer)
          return this._messageBuffer._resend();
      }), this.connection.features.inherentKeepAlive || await this._sendMessage(this._cachedPingMessage);
    } catch (t) {
      throw this._logger.log(c.Debug, `Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(t), t;
    }
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  async stop() {
    const e = this._startPromise;
    this.connection.features.reconnect = !1, this._stopPromise = this._stopInternal(), await this._stopPromise;
    try {
      await e;
    } catch {
    }
  }
  _stopInternal(e) {
    if (this._connectionState === y.Disconnected)
      return this._logger.log(c.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === y.Disconnecting)
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    const t = this._connectionState;
    return this._connectionState = y.Disconnecting, this._logger.log(c.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(c.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (t === y.Connected && this._sendCloseMessage(), this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new M("The connection was stopped before the hub handshake could complete."), this.connection.stop(e));
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {
    }
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(e, ...t) {
    const [s, o] = this._replaceStreamingParams(t), r = this._createStreamInvocation(e, t, o);
    let i;
    const a = new cr();
    return a.cancelCallback = () => {
      const l = this._createCancelInvocation(r.invocationId);
      return delete this._callbacks[r.invocationId], i.then(() => this._sendWithProtocol(l));
    }, this._callbacks[r.invocationId] = (l, d) => {
      if (d) {
        a.error(d);
        return;
      } else l && (l.type === g.Completion ? l.error ? a.error(new Error(l.error)) : a.complete() : a.next(l.item));
    }, i = this._sendWithProtocol(r).catch((l) => {
      a.error(l), delete this._callbacks[r.invocationId];
    }), this._launchStreams(s, i), a;
  }
  _sendMessage(e) {
    return this._resetKeepAliveInterval(), this.connection.send(e);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(e) {
    return this._messageBuffer ? this._messageBuffer._send(e) : this._sendMessage(this._protocol.writeMessage(e));
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(e, ...t) {
    const [s, o] = this._replaceStreamingParams(t), r = this._sendWithProtocol(this._createInvocation(e, t, !0, o));
    return this._launchStreams(s, r), r;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(e, ...t) {
    const [s, o] = this._replaceStreamingParams(t), r = this._createInvocation(e, t, !1, o);
    return new Promise((a, l) => {
      this._callbacks[r.invocationId] = (p, D) => {
        if (D) {
          l(D);
          return;
        } else p && (p.type === g.Completion ? p.error ? l(new Error(p.error)) : a(p.result) : l(new Error(`Unexpected message type: ${p.type}`)));
      };
      const d = this._sendWithProtocol(r).catch((p) => {
        l(p), delete this._callbacks[r.invocationId];
      });
      this._launchStreams(s, d);
    });
  }
  on(e, t) {
    !e || !t || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(t) === -1 && this._methods[e].push(t));
  }
  off(e, t) {
    if (!e)
      return;
    e = e.toLowerCase();
    const s = this._methods[e];
    if (s)
      if (t) {
        const o = s.indexOf(t);
        o !== -1 && (s.splice(o, 1), s.length === 0 && delete this._methods[e]);
      } else
        delete this._methods[e];
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(e) {
    e && this._closedCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(e) {
    e && this._reconnectingCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
  onreconnected(e) {
    e && this._reconnectedCallbacks.push(e);
  }
  _processIncomingData(e) {
    if (this._cleanupTimeout(), this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e), this._receivedHandshakeResponse = !0), e) {
      const t = this._protocol.parseMessages(e, this._logger);
      for (const s of t)
        if (!(this._messageBuffer && !this._messageBuffer._shouldProcessMessage(s)))
          switch (s.type) {
            case g.Invocation:
              this._invokeClientMethod(s).catch((o) => {
                this._logger.log(c.Error, `Invoke client method threw error: ${wt(o)}`);
              });
              break;
            case g.StreamItem:
            case g.Completion: {
              const o = this._callbacks[s.invocationId];
              if (o) {
                s.type === g.Completion && delete this._callbacks[s.invocationId];
                try {
                  o(s);
                } catch (r) {
                  this._logger.log(c.Error, `Stream callback threw error: ${wt(r)}`);
                }
              }
              break;
            }
            case g.Ping:
              break;
            case g.Close: {
              this._logger.log(c.Information, "Close message received from server.");
              const o = s.error ? new Error("Server returned an error on close: " + s.error) : void 0;
              s.allowReconnect === !0 ? this.connection.stop(o) : this._stopPromise = this._stopInternal(o);
              break;
            }
            case g.Ack:
              this._messageBuffer && this._messageBuffer._ack(s);
              break;
            case g.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(s);
              break;
            default:
              this._logger.log(c.Warning, `Invalid message type: ${s.type}.`);
              break;
          }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(e) {
    let t, s;
    try {
      [s, t] = this._handshakeProtocol.parseHandshakeResponse(e);
    } catch (o) {
      const r = "Error parsing handshake response: " + o;
      this._logger.log(c.Error, r);
      const i = new Error(r);
      throw this._handshakeRejecter(i), i;
    }
    if (t.error) {
      const o = "Server returned handshake error: " + t.error;
      this._logger.log(c.Error, o);
      const r = new Error(o);
      throw this._handshakeRejecter(r), r;
    } else
      this._logger.log(c.Debug, "Server handshake complete.");
    return this._handshakeResolver(), s;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
      let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
      e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
        if (this._connectionState === y.Connected)
          try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
      }, e);
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  async _invokeClientMethod(e) {
    const t = e.target.toLowerCase(), s = this._methods[t];
    if (!s) {
      this._logger.log(c.Warning, `No client method with the name '${t}' found.`), e.invocationId && (this._logger.log(c.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), await this._sendWithProtocol(this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)));
      return;
    }
    const o = s.slice(), r = !!e.invocationId;
    let i, a, l;
    for (const d of o)
      try {
        const p = i;
        i = await d.apply(this, e.arguments), r && i && p && (this._logger.log(c.Error, `Multiple results provided for '${t}'. Sending error to server.`), l = this._createCompletionMessage(e.invocationId, "Client provided multiple results.", null)), a = void 0;
      } catch (p) {
        a = p, this._logger.log(c.Error, `A callback for the method '${t}' threw error '${p}'.`);
      }
    l ? await this._sendWithProtocol(l) : r ? (a ? l = this._createCompletionMessage(e.invocationId, `${a}`, null) : i !== void 0 ? l = this._createCompletionMessage(e.invocationId, null, i) : (this._logger.log(c.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), l = this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)), await this._sendWithProtocol(l)) : i && this._logger.log(c.Error, `Result given for '${t}' method but server is not expecting a result.`);
  }
  _connectionClosed(e) {
    this._logger.log(c.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new M("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === y.Disconnecting ? this._completeClose(e) : this._connectionState === y.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === y.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = y.Disconnected, this._connectionStarted = !1, this._messageBuffer && (this._messageBuffer._dispose(e ?? new Error("Connection closed.")), this._messageBuffer = void 0), b.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((t) => t.apply(this, [e]));
      } catch (t) {
        this._logger.log(c.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
      }
    }
  }
  async _reconnect(e) {
    const t = Date.now();
    let s = 0, o = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), r = this._getNextRetryDelay(s++, 0, o);
    if (r === null) {
      this._logger.log(c.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = y.Reconnecting, e ? this._logger.log(c.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(c.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((i) => i.apply(this, [e]));
      } catch (i) {
        this._logger.log(c.Error, `An onreconnecting callback called with error '${e}' threw error '${i}'.`);
      }
      if (this._connectionState !== y.Reconnecting) {
        this._logger.log(c.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; r !== null; ) {
      if (this._logger.log(c.Information, `Reconnect attempt number ${s} will start in ${r} ms.`), await new Promise((i) => {
        this._reconnectDelayHandle = setTimeout(i, r);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== y.Reconnecting) {
        this._logger.log(c.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = y.Connected, this._logger.log(c.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((i) => i.apply(this, [this.connection.connectionId]));
          } catch (i) {
            this._logger.log(c.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${i}'.`);
          }
        return;
      } catch (i) {
        if (this._logger.log(c.Information, `Reconnect attempt failed because of error '${i}'.`), this._connectionState !== y.Reconnecting) {
          this._logger.log(c.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === y.Disconnecting && this._completeClose();
          return;
        }
        o = i instanceof Error ? i : new Error(i.toString()), r = this._getNextRetryDelay(s++, Date.now() - t, o);
      }
    }
    this._logger.log(c.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${s} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, t, s) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: t,
        previousRetryCount: e,
        retryReason: s
      });
    } catch (o) {
      return this._logger.log(c.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${o}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const t = this._callbacks;
    this._callbacks = {}, Object.keys(t).forEach((s) => {
      const o = t[s];
      try {
        o(null, e);
      } catch (r) {
        this._logger.log(c.Error, `Stream 'error' callback called with '${e}' threw error: ${wt(r)}`);
      }
    });
  }
  _cleanupPingTimer() {
    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(e, t, s, o) {
    if (s)
      return o.length !== 0 ? {
        arguments: t,
        streamIds: o,
        target: e,
        type: g.Invocation
      } : {
        arguments: t,
        target: e,
        type: g.Invocation
      };
    {
      const r = this._invocationId;
      return this._invocationId++, o.length !== 0 ? {
        arguments: t,
        invocationId: r.toString(),
        streamIds: o,
        target: e,
        type: g.Invocation
      } : {
        arguments: t,
        invocationId: r.toString(),
        target: e,
        type: g.Invocation
      };
    }
  }
  _launchStreams(e, t) {
    if (e.length !== 0) {
      t || (t = Promise.resolve());
      for (const s in e)
        e[s].subscribe({
          complete: () => {
            t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(s)));
          },
          error: (o) => {
            let r;
            o instanceof Error ? r = o.message : o && o.toString ? r = o.toString() : r = "Unknown error", t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(s, r)));
          },
          next: (o) => {
            t = t.then(() => this._sendWithProtocol(this._createStreamItemMessage(s, o)));
          }
        });
    }
  }
  _replaceStreamingParams(e) {
    const t = [], s = [];
    for (let o = 0; o < e.length; o++) {
      const r = e[o];
      if (this._isObservable(r)) {
        const i = this._invocationId;
        this._invocationId++, t[i] = r, s.push(i.toString()), e.splice(o, 1);
      }
    }
    return [t, s];
  }
  _isObservable(e) {
    return e && e.subscribe && typeof e.subscribe == "function";
  }
  _createStreamInvocation(e, t, s) {
    const o = this._invocationId;
    return this._invocationId++, s.length !== 0 ? {
      arguments: t,
      invocationId: o.toString(),
      streamIds: s,
      target: e,
      type: g.StreamInvocation
    } : {
      arguments: t,
      invocationId: o.toString(),
      target: e,
      type: g.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: g.CancelInvocation
    };
  }
  _createStreamItemMessage(e, t) {
    return {
      invocationId: e,
      item: t,
      type: g.StreamItem
    };
  }
  _createCompletionMessage(e, t, s) {
    return t ? {
      error: t,
      invocationId: e,
      type: g.Completion
    } : {
      invocationId: e,
      result: s,
      type: g.Completion
    };
  }
  _createCloseMessage() {
    return { type: g.Close };
  }
}
const gr = [0, 2e3, 1e4, 3e4, null];
class on {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : gr;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class ee {
}
ee.Authorization = "Authorization";
ee.Cookie = "Cookie";
class fr extends gt {
  constructor(e, t) {
    super(), this._innerClient = e, this._accessTokenFactory = t;
  }
  async send(e) {
    let t = !0;
    this._accessTokenFactory && (!this._accessToken || e.url && e.url.indexOf("/negotiate?") > 0) && (t = !1, this._accessToken = await this._accessTokenFactory()), this._setAuthorizationHeader(e);
    const s = await this._innerClient.send(e);
    return t && s.statusCode === 401 && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(), this._setAuthorizationHeader(e), await this._innerClient.send(e)) : s;
  }
  _setAuthorizationHeader(e) {
    e.headers || (e.headers = {}), this._accessToken ? e.headers[ee.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && e.headers[ee.Authorization] && delete e.headers[ee.Authorization];
  }
  getCookieString(e) {
    return this._innerClient.getCookieString(e);
  }
}
var v;
(function(n) {
  n[n.None = 0] = "None", n[n.WebSockets = 1] = "WebSockets", n[n.ServerSentEvents = 2] = "ServerSentEvents", n[n.LongPolling = 4] = "LongPolling";
})(v || (v = {}));
var $;
(function(n) {
  n[n.Text = 1] = "Text", n[n.Binary = 2] = "Binary";
})($ || ($ = {}));
let _r = class {
  constructor() {
    this._isAborted = !1, this.onabort = null;
  }
  abort() {
    this._isAborted || (this._isAborted = !0, this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class rn {
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(e, t, s) {
    this._httpClient = e, this._logger = t, this._pollAbort = new _r(), this._options = s, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    if (w.isRequired(e, "url"), w.isRequired(t, "transferFormat"), w.isIn(t, $, "transferFormat"), this._url = e, this._logger.log(c.Trace, "(LongPolling transport) Connecting."), t === $.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [s, o] = we(), r = { [s]: o, ...this._options.headers }, i = {
      abortSignal: this._pollAbort.signal,
      headers: r,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    t === $.Binary && (i.responseType = "arraybuffer");
    const a = `${e}&_=${Date.now()}`;
    this._logger.log(c.Trace, `(LongPolling transport) polling: ${a}.`);
    const l = await this._httpClient.get(a, i);
    l.statusCode !== 200 ? (this._logger.log(c.Error, `(LongPolling transport) Unexpected response code: ${l.statusCode}.`), this._closeError = new Z(l.statusText || "", l.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, i);
  }
  async _poll(e, t) {
    try {
      for (; this._running; )
        try {
          const s = `${e}&_=${Date.now()}`;
          this._logger.log(c.Trace, `(LongPolling transport) polling: ${s}.`);
          const o = await this._httpClient.get(s, t);
          o.statusCode === 204 ? (this._logger.log(c.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(c.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new Z(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(c.Trace, `(LongPolling transport) data received. ${Me(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(c.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (s) {
          this._running ? s instanceof zt ? this._logger.log(c.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = s, this._running = !1) : this._logger.log(c.Trace, `(LongPolling transport) Poll errored after shutdown: ${s.message}`);
        }
    } finally {
      this._logger.log(c.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? Vn(this._logger, "LongPolling", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(c.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(c.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [t, s] = we();
      e[t] = s;
      const o = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      };
      let r;
      try {
        await this._httpClient.delete(this._url, o);
      } catch (i) {
        r = i;
      }
      r ? r instanceof Z && (r.statusCode === 404 ? this._logger.log(c.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.") : this._logger.log(c.Trace, `(LongPolling transport) Error sending a DELETE request: ${r}`)) : this._logger.log(c.Trace, "(LongPolling transport) DELETE request accepted.");
    } finally {
      this._logger.log(c.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(c.Trace, e), this.onclose(this._closeError);
    }
  }
}
class mr {
  constructor(e, t, s, o) {
    this._httpClient = e, this._accessToken = t, this._logger = s, this._options = o, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    return w.isRequired(e, "url"), w.isRequired(t, "transferFormat"), w.isIn(t, $, "transferFormat"), this._logger.log(c.Trace, "(SSE transport) Connecting."), this._url = e, this._accessToken && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`), new Promise((s, o) => {
      let r = !1;
      if (t !== $.Text) {
        o(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let i;
      if (b.isBrowser || b.isWebWorker)
        i = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const a = this._httpClient.getCookieString(e), l = {};
        l.Cookie = a;
        const [d, p] = we();
        l[d] = p, i = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...l, ...this._options.headers } });
      }
      try {
        i.onmessage = (a) => {
          if (this.onreceive)
            try {
              this._logger.log(c.Trace, `(SSE transport) data received. ${Me(a.data, this._options.logMessageContent)}.`), this.onreceive(a.data);
            } catch (l) {
              this._close(l);
              return;
            }
        }, i.onerror = (a) => {
          r ? this._close() : o(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, i.onopen = () => {
          this._logger.log(c.Information, `SSE connected to ${this._url}`), this._eventSource = i, r = !0, s();
        };
      } catch (a) {
        o(a);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? Vn(this._logger, "SSE", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class yr {
  constructor(e, t, s, o, r, i) {
    this._logger = s, this._accessTokenFactory = t, this._logMessageContent = o, this._webSocketConstructor = r, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = i;
  }
  async connect(e, t) {
    w.isRequired(e, "url"), w.isRequired(t, "transferFormat"), w.isIn(t, $, "transferFormat"), this._logger.log(c.Trace, "(WebSockets transport) Connecting.");
    let s;
    return this._accessTokenFactory && (s = await this._accessTokenFactory()), new Promise((o, r) => {
      e = e.replace(/^http/, "ws");
      let i;
      const a = this._httpClient.getCookieString(e);
      let l = !1;
      if (b.isNode || b.isReactNative) {
        const d = {}, [p, D] = we();
        d[p] = D, s && (d[ee.Authorization] = `Bearer ${s}`), a && (d[ee.Cookie] = a), i = new this._webSocketConstructor(e, void 0, {
          headers: { ...d, ...this._headers }
        });
      } else
        s && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(s)}`);
      i || (i = new this._webSocketConstructor(e)), t === $.Binary && (i.binaryType = "arraybuffer"), i.onopen = (d) => {
        this._logger.log(c.Information, `WebSocket connected to ${e}.`), this._webSocket = i, l = !0, o();
      }, i.onerror = (d) => {
        let p = null;
        typeof ErrorEvent < "u" && d instanceof ErrorEvent ? p = d.error : p = "There was an error with the transport", this._logger.log(c.Information, `(WebSockets transport) ${p}.`);
      }, i.onmessage = (d) => {
        if (this._logger.log(c.Trace, `(WebSockets transport) data received. ${Me(d.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(d.data);
          } catch (p) {
            this._close(p);
            return;
          }
      }, i.onclose = (d) => {
        if (l)
          this._close(d);
        else {
          let p = null;
          typeof ErrorEvent < "u" && d instanceof ErrorEvent ? p = d.error : p = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", r(new Error(p));
        }
      };
    });
  }
  send(e) {
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(c.Trace, `(WebSockets transport) sending data. ${Me(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(c.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const an = 100;
class br {
  constructor(e, t = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, w.isRequired(e, "url"), this._logger = Jo(t.logger), this.baseUrl = this._resolveUrl(e), t = t || {}, t.logMessageContent = t.logMessageContent === void 0 ? !1 : t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0)
      t.withCredentials = t.withCredentials === void 0 ? !0 : t.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    t.timeout = t.timeout === void 0 ? 100 * 1e3 : t.timeout;
    let s = null, o = null;
    if (b.isNode && typeof require < "u") {
      const r = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      s = r("ws"), o = r("eventsource");
    }
    !b.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : b.isNode && !t.WebSocket && s && (t.WebSocket = s), !b.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : b.isNode && !t.EventSource && typeof o < "u" && (t.EventSource = o), this._httpClient = new fr(t.httpClient || new ir(this._logger), t.accessTokenFactory), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || $.Binary, w.isIn(e, $, "transferFormat"), this._logger.log(c.Debug, `Starting connection with transfer format '${$[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const t = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(c.Error, t), await this._stopPromise, Promise.reject(new M(t));
    } else if (this._connectionState !== "Connected") {
      const t = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(c.Error, t), Promise.reject(new M(t));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Wt(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    this._connectionState = "Disconnecting", this._stopPromise = new Promise((t) => {
      this._stopPromiseResolver = t;
    }), await this._stopInternal(e), await this._stopPromise;
  }
  async _stopInternal(e) {
    this._stopError = e;
    try {
      await this._startInternalPromise;
    } catch {
    }
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (t) {
        this._logger.log(c.Error, `HttpConnection.transport.stop() threw error '${t}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(c.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let t = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory, this._httpClient._accessTokenFactory = this._accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === v.WebSockets)
          this.transport = this._constructTransport(v.WebSockets), await this._startTransport(t, e);
        else
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
      else {
        let s = null, o = 0;
        do {
          if (s = await this._getNegotiationResponse(t), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected")
            throw new M("The connection was stopped during negotiation.");
          if (s.error)
            throw new Error(s.error);
          if (s.ProtocolVersion)
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          if (s.url && (t = s.url), s.accessToken) {
            const r = s.accessToken;
            this._accessTokenFactory = () => r, this._httpClient._accessToken = r, this._httpClient._accessTokenFactory = void 0;
          }
          o++;
        } while (s.url && o < an);
        if (o === an && s.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(t, this._options.transport, s, e);
      }
      this.transport instanceof rn && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(c.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (s) {
      return this._logger.log(c.Error, "Failed to start the connection: " + s), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(s);
    }
  }
  async _getNegotiationResponse(e) {
    const t = {}, [s, o] = we();
    t[s] = o;
    const r = this._resolveNegotiateUrl(e);
    this._logger.log(c.Debug, `Sending negotiation request: ${r}.`);
    try {
      const i = await this._httpClient.post(r, {
        content: "",
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (i.statusCode !== 200)
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${i.statusCode}'`));
      const a = JSON.parse(i.content);
      return (!a.negotiateVersion || a.negotiateVersion < 1) && (a.connectionToken = a.connectionId), a.useStatefulReconnect && this._options._useStatefulReconnect !== !0 ? Promise.reject(new nn("Client didn't negotiate Stateful Reconnect but the server did.")) : a;
    } catch (i) {
      let a = "Failed to complete negotiation with the server: " + i;
      return i instanceof Z && i.statusCode === 404 && (a = a + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(c.Error, a), Promise.reject(new nn(a));
    }
  }
  _createConnectUrl(e, t) {
    return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
  }
  async _createTransport(e, t, s, o) {
    let r = this._createConnectUrl(e, s.connectionToken);
    if (this._isITransport(t)) {
      this._logger.log(c.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(r, o), this.connectionId = s.connectionId;
      return;
    }
    const i = [], a = s.availableTransports || [];
    let l = s;
    for (const d of a) {
      const p = this._resolveTransportOrError(d, t, o, (l == null ? void 0 : l.useStatefulReconnect) === !0);
      if (p instanceof Error)
        i.push(`${d.transport} failed:`), i.push(p);
      else if (this._isITransport(p)) {
        if (this.transport = p, !l) {
          try {
            l = await this._getNegotiationResponse(e);
          } catch (D) {
            return Promise.reject(D);
          }
          r = this._createConnectUrl(e, l.connectionToken);
        }
        try {
          await this._startTransport(r, o), this.connectionId = l.connectionId;
          return;
        } catch (D) {
          if (this._logger.log(c.Error, `Failed to start the transport '${d.transport}': ${D}`), l = void 0, i.push(new Go(`${d.transport} failed: ${D}`, v[d.transport])), this._connectionState !== "Connecting") {
            const I = "Failed to select transport before stop() was called.";
            return this._logger.log(c.Debug, I), Promise.reject(new M(I));
          }
        }
      }
    }
    return i.length > 0 ? Promise.reject(new Xo(`Unable to connect to the server with any of the available transports. ${i.join(" ")}`, i)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case v.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new yr(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case v.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new mr(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
      case v.LongPolling:
        return new rn(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, t) {
    return this.transport.onreceive = this.onreceive, this.features.reconnect ? this.transport.onclose = async (s) => {
      let o = !1;
      if (this.features.reconnect)
        try {
          this.features.disconnected(), await this.transport.connect(e, t), await this.features.resend();
        } catch {
          o = !0;
        }
      else {
        this._stopConnection(s);
        return;
      }
      o && this._stopConnection(s);
    } : this.transport.onclose = (s) => this._stopConnection(s), this.transport.connect(e, t);
  }
  _resolveTransportOrError(e, t, s, o) {
    const r = v[e.transport];
    if (r == null)
      return this._logger.log(c.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (wr(t, r))
      if (e.transferFormats.map((a) => $[a]).indexOf(s) >= 0) {
        if (r === v.WebSockets && !this._options.WebSocket || r === v.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(c.Debug, `Skipping transport '${v[r]}' because it is not supported in your environment.'`), new Vo(`'${v[r]}' is not supported in your environment.`, r);
        this._logger.log(c.Debug, `Selecting transport '${v[r]}'.`);
        try {
          return this.features.reconnect = r === v.WebSockets ? o : void 0, this._constructTransport(r);
        } catch (a) {
          return a;
        }
      } else
        return this._logger.log(c.Debug, `Skipping transport '${v[r]}' because it does not support the requested transfer format '${$[s]}'.`), new Error(`'${v[r]}' does not support ${$[s]}.`);
    else
      return this._logger.log(c.Debug, `Skipping transport '${v[r]}' because it was disabled by the client.`), new qo(`'${v[r]}' is disabled by the client.`, r);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(c.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(c.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(c.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(c.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(c.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((t) => {
      this._logger.log(c.Error, `TransportSendQueue.stop() threw error '${t}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (t) {
        this._logger.log(c.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!b.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const t = window.document.createElement("a");
    return t.href = e, this._logger.log(c.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
  }
  _resolveNegotiateUrl(e) {
    const t = new URL(e);
    t.pathname.endsWith("/") ? t.pathname += "negotiate" : t.pathname += "/negotiate";
    const s = new URLSearchParams(t.searchParams);
    return s.has("negotiateVersion") || s.append("negotiateVersion", this._negotiateVersion.toString()), s.has("useStatefulReconnect") ? s.get("useStatefulReconnect") === "true" && (this._options._useStatefulReconnect = !0) : this._options._useStatefulReconnect === !0 && s.append("useStatefulReconnect", "true"), t.search = s.toString(), t.toString();
  }
}
function wr(n, e) {
  return !n || (e & n) !== 0;
}
class Wt {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new et(), this._transportResult = new et(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new et()), this._transportResult.promise;
  }
  stop() {
    return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
  }
  _bufferData(e) {
    if (this._buffer.length && typeof this._buffer[0] != typeof e)
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
    this._buffer.push(e), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (; ; ) {
      if (await this._sendBufferedData.promise, !this._executing) {
        this._transportResult && this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new et();
      const e = this._transportResult;
      this._transportResult = void 0;
      const t = typeof this._buffer[0] == "string" ? this._buffer.join("") : Wt._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(t), e.resolve();
      } catch (s) {
        e.reject(s);
      }
    }
  }
  static _concatBuffers(e) {
    const t = e.map((r) => r.byteLength).reduce((r, i) => r + i), s = new Uint8Array(t);
    let o = 0;
    for (const r of e)
      s.set(new Uint8Array(r), o), o += r.byteLength;
    return s.buffer;
  }
}
class et {
  constructor() {
    this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
  }
  resolve() {
    this._resolver();
  }
  reject(e) {
    this._rejecter(e);
  }
}
const vr = "json";
class Sr {
  constructor() {
    this.name = vr, this.version = 2, this.transferFormat = $.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(e, t) {
    if (typeof e != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!e)
      return [];
    t === null && (t = Ne.instance);
    const s = R.parse(e), o = [];
    for (const r of s) {
      const i = JSON.parse(r);
      if (typeof i.type != "number")
        throw new Error("Invalid payload.");
      switch (i.type) {
        case g.Invocation:
          this._isInvocationMessage(i);
          break;
        case g.StreamItem:
          this._isStreamItemMessage(i);
          break;
        case g.Completion:
          this._isCompletionMessage(i);
          break;
        case g.Ping:
          break;
        case g.Close:
          break;
        case g.Ack:
          this._isAckMessage(i);
          break;
        case g.Sequence:
          this._isSequenceMessage(i);
          break;
        default:
          t.log(c.Information, "Unknown message type '" + i.type + "' ignored.");
          continue;
      }
      o.push(i);
    }
    return o;
  }
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(e) {
    return R.write(JSON.stringify(e));
  }
  _isInvocationMessage(e) {
    this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), e.invocationId !== void 0 && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
  }
  _isStreamItemMessage(e) {
    if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), e.item === void 0)
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(e) {
    if (e.result && e.error)
      throw new Error("Invalid payload for Completion message.");
    !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
  }
  _isAckMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Ack message.");
  }
  _isSequenceMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Sequence message.");
  }
  _assertNotEmptyString(e, t) {
    if (typeof e != "string" || e === "")
      throw new Error(t);
  }
}
const Cr = {
  trace: c.Trace,
  debug: c.Debug,
  info: c.Information,
  information: c.Information,
  warn: c.Warning,
  warning: c.Warning,
  error: c.Error,
  critical: c.Critical,
  none: c.None
};
function $r(n) {
  const e = Cr[n.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${n}`);
}
class Ji {
  configureLogging(e) {
    if (w.isRequired(e, "logging"), Er(e))
      this.logger = e;
    else if (typeof e == "string") {
      const t = $r(e);
      this.logger = new ct(t);
    } else
      this.logger = new ct(e);
    return this;
  }
  withUrl(e, t) {
    return w.isRequired(e, "url"), w.isNotEmpty(e, "url"), this.url = e, typeof t == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...t } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: t
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return w.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new on(e) : this.reconnectPolicy = e : this.reconnectPolicy = new on(), this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withServerTimeout(e) {
    return w.isRequired(e, "milliseconds"), this._serverTimeoutInMilliseconds = e, this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withKeepAliveInterval(e) {
    return w.isRequired(e, "milliseconds"), this._keepAliveIntervalInMilliseconds = e, this;
  }
  /** Enables and configures options for the Stateful Reconnect feature.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withStatefulReconnect(e) {
    return this.httpConnectionOptions === void 0 && (this.httpConnectionOptions = {}), this.httpConnectionOptions._useStatefulReconnect = !0, this._statefulReconnectBufferSize = e == null ? void 0 : e.bufferSize, this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const t = new br(this.url, e);
    return Lt.create(t, this.logger || Ne.instance, this.protocol || new Sr(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
  }
}
function Er(n) {
  return n.log !== void 0;
}
var j, B, J;
class Qi extends Mt {
  constructor(t) {
    super(t);
    _(this, j);
    _(this, B);
    _(this, J);
    m(this, j, new Cs(this)), m(this, B, new $s(this)), m(this, J, new Es(this));
  }
  /**
   * Get the list of possible actions from the server
   * @returns Promise
   */
  async getActions(t) {
    return u(this, j).getActionsBySet(t);
  }
  /**
   * Request of the action to perform
   * @returns PerformActionResponse.
   */
  async performAction(t) {
    return u(this, j).performAction({
      requestId: t.id,
      action: t.action,
      options: {
        group: t.group,
        force: t.force ?? !1,
        clean: t.clean ?? !1,
        files: t.file ?? !1,
        clientId: t.clientId,
        set: t.set ?? "Default"
      },
      stepNumber: t.step
    });
  }
  /**
   * Retreives the current uSync settings
   * @returns the current uSync settings
   */
  async getSettings() {
    return await u(this, B).getSettings();
  }
  async getAddons() {
    return await u(this, B).getAddons();
  }
  /**
   * Get the handler settings based on the set.
   * @param setName name of the handler set in the configuration
   * @returns the settings for the named handler set.
   */
  async getHandlerSettings(t) {
    return await u(this, B).getHandlerSettings(t);
  }
  /**
   * Checks to see if there are legacy datatypes on disk.
   * @returns results of a check for legacy files
   */
  async checkLegacy() {
    return await u(this, J).checkLegacy();
  }
  /**
   * sets a .ignore folder in the legacy folder so we don't detect it next time.
   * @returns true if the legacy folder is ignored.
   */
  async ignoreLegacy() {
    return await u(this, J).ignoreLegacy();
  }
  /**
   * copies the legacy folder to the new v14 folder.
   * @returns true if the legacy folder is copied to the new folder.
   */
  async copyLegacy() {
    return await u(this, J).copyLegacy();
  }
  async downloadFile(t) {
    return (await u(this, j).downloadFile(t)).data;
  }
  async processUpload(t) {
    return (await u(this, j).processUpload(t)).data;
  }
  async getSets() {
    return await u(this, B).getSets();
  }
}
j = new WeakMap(), B = new WeakMap(), J = new WeakMap();
var F;
class Zi {
  constructor(e) {
    _(this, F);
    m(this, F, e);
  }
  async getActionsBySet(e) {
    return await N(
      u(this, F),
      Je.getActionsBySet({
        query: { setName: e }
      })
    );
  }
  async performAction(e) {
    return await N(
      u(this, F),
      Je.performAction({
        body: e
      })
    );
  }
  async downloadFile(e) {
    return await N(
      u(this, F),
      Je.download({
        query: {
          requestId: e
        }
      })
    );
  }
  async processUpload(e) {
    return await N(
      u(this, F),
      Je.processUpload({
        query: {
          tempKey: e
        }
      })
    );
  }
}
F = new WeakMap();
var Q;
class ea {
  constructor(e) {
    _(this, Q);
    m(this, Q, e);
  }
  async checkLegacy() {
    return await N(u(this, Q), yt.checkLegacy());
  }
  async ignoreLegacy() {
    return await N(u(this, Q), yt.ignoreLegacy());
  }
  async copyLegacy() {
    return await N(u(this, Q), yt.copyLegacy());
  }
}
Q = new WeakMap();
var V;
class ta {
  constructor(e) {
    _(this, V);
    m(this, V, e);
  }
  async getSettings() {
    return await N(u(this, V), Qe.getSettings());
  }
  async getHandlerSettings(e) {
    return await N(
      u(this, V),
      Qe.getHandlerSetSettings({ query: { id: e } })
    );
  }
  async getAddons() {
    return await N(u(this, V), Qe.getAddOns());
  }
  async getSets() {
    return await N(u(this, V), Qe.getSets());
  }
}
V = new WeakMap();
const kr = new Nt("usync.import.modal", {
  modal: {
    type: "dialog"
  }
});
var Ir = Object.defineProperty, xr = Object.getOwnPropertyDescriptor, qn = (n) => {
  throw TypeError(n);
}, Gn = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? xr(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && Ir(e, t, o), o;
}, Pr = (n, e, t) => e.has(n) || qn("Cannot " + t), Tr = (n, e, t) => e.has(n) ? qn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), vt = (n, e, t) => (Pr(n, e, "access private method"), t), ke, Xn, Kn, Yn;
let ve = class extends Dt {
  constructor() {
    super(...arguments), Tr(this, ke);
  }
  render() {
    return h`
			<umb-body-layout .headline=${this.localize.term("uSync_importHeader")}>
				${this.renderForm()} ${this.renderResult()}
			</umb-body-layout>
		`;
  }
  renderForm() {
    if (this.result === void 0)
      return h` ${this.localize.term("uSync_uploadIntro")}
			<usync-file-upload @uploaded=${vt(this, ke, Yn)}></usync-file-upload>
			<div slot="actions">
				<uui-button
					id="cancel"
					.label=${this.localize.term("general_close")}
					@click="${vt(this, ke, Xn)}"></uui-button>
			</div>`;
  }
  renderResult() {
    if (this.result != null)
      return h`${ot(
        this.result.success,
        () => h`${this.localize.term("uSync_uploadSuccess")}`,
        () => {
          var n;
          return h`${this.localize.term("uSync_uploadError")} ${(n = this.result) == null ? void 0 : n.errors}`;
        }
      )}
			<div slot="actions">
				<uui-button id="continue" label="Import" @click="${vt(this, ke, Kn)}"></uui-button>
			</div>`;
  }
};
ke = /* @__PURE__ */ new WeakSet();
Xn = function() {
  var n;
  (n = this.modalContext) == null || n.reject();
};
Kn = function() {
  var n, e;
  this.value = (n = this.result) == null ? void 0 : n.success, (e = this.modalContext) == null || e.submit();
};
Yn = function(n) {
  this.result = n.result;
};
ve.styles = O`
		umb-body-layout {
			max-width: 450px;
		}

		usync-file-upload {
			padding: 10px 0;
		}
	`;
Gn([
  f()
], ve.prototype, "result", 2);
ve = Gn([
  T("usync-import-dialog")
], ve);
const Ar = ve, Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ar,
  get uSyncImportModalDialog() {
    return ve;
  }
}, Symbol.toStringTag, { value: "Module" }));
var x, le, ue, he, q, G, X, de, pe, ge, fe;
class cn extends Mt {
  constructor(t) {
    var s, o, r;
    super(t);
    _(this, x);
    _(this, le);
    _(this, ue);
    _(this, he);
    _(this, q);
    _(this, G);
    _(this, X);
    _(this, de);
    _(this, pe);
    _(this, ge);
    _(this, fe);
    this.workspaceAlias = E.workspace.alias, m(this, le, null), m(this, ue, new Ze([], (i) => i.key)), this.actions = u(this, ue).asObservable(), m(this, he, new Ze([], (i) => i.name)), this.currentAction = u(this, he).asObservable(), m(this, q, new Xt(!1)), this.working = u(this, q).asObservable(), m(this, G, new Xt(!1)), this.completed = u(this, G).asObservable(), m(this, X, new Ze([], (i) => i.name)), this.results = u(this, X).asObservable(), m(this, de, new Te(void 0)), this.settings = (s = u(this, de)) == null ? void 0 : s.asObservable(), m(this, pe, new Te(void 0)), this.handlerSettings = (o = u(this, pe)) == null ? void 0 : o.asObservable(), m(this, ge, new Ze([], (i) => i)), this.sets = u(this, ge).asObservable(), m(this, fe, new Te(void 0)), this.legacy = (r = u(this, fe)) == null ? void 0 : r.asObservable(), this.provideContext(Jn, this), this.provideContext(Ts, this), m(this, x, new mn(this)), m(this, le, new Fo(this));
  }
  getEntityType() {
    return E.workspace.rootElement;
  }
  /**
   * Return the current actions from the repository
   */
  async getActions(t) {
    const { data: s } = await u(this, x).getActions(t);
    s && u(this, ue).setValue(s);
  }
  /**
   * Get the current uSync settings
   */
  async getSettings() {
    const { data: t } = await u(this, x).getSettings();
    return t && u(this, de).setValue(t), t;
  }
  async getAddons() {
    const { data: t } = await u(this, x).getAddons();
    return t;
  }
  /**
   * Check to see if there is a legacy uSync folder on disk.
   */
  async checkLegacy() {
    const { data: t } = await u(this, x).checkLegacy();
    return t && u(this, fe).setValue(t), t;
  }
  async ignoreLegacy() {
    const { data: t } = await u(this, x).ignoreLegacy();
    return t ?? !1;
  }
  async copyLegacy() {
    const { data: t } = await u(this, x).copyLegacy();
    return t ?? !1;
  }
  /**
   * Get handler defaults.
   */
  async getDefaultHandlerSetSettings(t) {
    const { data: s } = await u(this, x).getHandlerSettings(t);
    s && u(this, pe).setValue(s);
  }
  async getHandlerSets() {
    const { data: t } = await u(this, x).getSets();
    t && u(this, ge).setValue(t);
  }
  /**
   * Perform an action (e.g import, export, etc) with options
   * @param options options for the action
   */
  async performAction(t) {
    var a;
    var s = ((a = u(this, le)) == null ? void 0 : a.getClientId()) ?? "";
    u(this, q).setValue(!0), u(this, G).setValue(!1), u(this, X).setValue([]);
    var o = !1, r = "", i = 0;
    if (t.file && t.action === "Import" && !await this.uploadFile()) {
      u(this, G).setValue(!0), u(this, q).setValue(!1), u(this, X).setValue([]);
      return;
    }
    do {
      const { data: l } = await u(this, x).performAction({
        id: r,
        set: t.setName,
        action: t.action,
        group: t.group.key,
        force: t.force,
        clean: t.clean,
        file: t.file,
        step: i,
        clientId: s
      });
      if (l) {
        i++;
        let d = l.status ?? [];
        u(this, he).setValue(d), r = l.requestId, o = l.complete, o && u(this, X).setValue((l == null ? void 0 : l.actions) ?? []);
      } else
        o = !0;
    } while (!o);
    t.file && t.action === "Export" && await this.downloadFile(r), u(this, G).setValue(!0), u(this, q).setValue(!1);
  }
  async uploadFile() {
    const t = await this.getContext(Ot);
    return t ? !!await t.open(this, kr, {
      data: {}
    }).onSubmit().catch(() => !1) : void 0;
  }
  async downloadFile(t) {
    const s = await u(this, x).downloadFile(t);
    if (!s) return;
    const o = window.URL.createObjectURL(s), r = document.createElement("a");
    r.href = o, r.download = "usync-export.zip", document.body.appendChild(r), r.dispatchEvent(new MouseEvent("click")), r.remove(), window.URL.revokeObjectURL(o);
  }
}
x = new WeakMap(), le = new WeakMap(), ue = new WeakMap(), he = new WeakMap(), q = new WeakMap(), G = new WeakMap(), X = new WeakMap(), de = new WeakMap(), pe = new WeakMap(), ge = new WeakMap(), fe = new WeakMap();
const Jn = new bn(
  "uSyncWorkspaceContext"
), Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  USYNC_CORE_CONTEXT_TOKEN: Jn,
  default: cn,
  uSyncWorkspaceContext: cn
}, Symbol.toStringTag, { value: "Module" }));
var Dr = Object.defineProperty, Nr = Object.getOwnPropertyDescriptor, Qn = (n) => {
  throw TypeError(n);
}, A = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Nr(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && Dr(e, t, o), o;
}, Ht = (n, e, t) => e.has(n) || Qn("Cannot " + t), Ae = (n, e, t) => (Ht(n, e, "read from private field"), e.get(n)), ln = (n, e, t) => e.has(n) ? Qn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Mr = (n, e, t, s) => (Ht(n, e, "write to private field"), e.set(n, t), t), Y = (n, e, t) => (Ht(n, e, "access private method"), t), H, L, Zn, es, ts, ns, ss, os, rs;
let S = class extends je {
  constructor() {
    super(), ln(this, L), ln(this, H), this._loaded = !1, this._working = !1, this._completed = !1, this._showProgress = !1, this._results = [], this._disabled = !1, this._setName = "Default", this._sets = [], this.consumeContext(yn, (n) => {
      n && (Mr(this, H, n), n.getSettings(), this.observe(n.settings, (e) => {
        var t, s;
        e && (this._setName = e.defaultSet ?? "Default", (t = Ae(this, H)) == null || t.checkLegacy(), (s = Ae(this, H)) == null || s.getHandlerSets());
      }), this.observe(n.sets, (e) => {
        var t;
        e && (this._sets = e, (t = Ae(this, H)) == null || t.getActions(this._setName));
      }), this.observe(n.actions, (e) => {
        !e || e.length == 0 || (this._actions = e, this._loaded = this._actions !== null);
      }), this.observe(n.currentAction, (e) => {
        this._workingActions = e;
      }), this.observe(n.working, (e) => {
        this._working = e, this._working ? (this._buttonState = "waiting", this._disabled = !0) : this._disabled = !1;
      }), this.observe(n.results, (e) => {
        this._results = e;
      }), this.observe(n.completed, (e) => {
        this._completed = e, this._completed && (this._buttonState = "success");
      }), this.observe(n.legacy, (e) => {
        this._legacy = e;
      }));
    });
  }
  render() {
    return this._loaded == !1 ? h`<uui-loader></uui-loader>` : h`
				<umb-body-layout>
					${Y(this, L, ts).call(this)} ${Y(this, L, es).call(this)}
					<div class="wrapper">
						${Y(this, L, ns).call(this)} ${Y(this, L, ss).call(this)} ${Y(this, L, os).call(this)}
						${Y(this, L, rs).call(this)}
					</div>
				</umb-body-layout>
			`;
  }
};
H = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakSet();
Zn = function(n) {
  var e;
  n && (this._showProgress = !0, this._group = n.group, (e = Ae(this, H)) == null || e.performAction({
    setName: this._setName,
    group: n.group,
    action: n.key,
    force: n.force ?? !1,
    clean: n.clean ?? !1,
    file: n.file ?? !1
  }));
};
es = function() {
  if (this._sets.length < 2) return P;
  var n = this._sets.map((e) => ({
    name: e.name,
    value: e.name,
    selected: e.name === this._setName
  }));
  return h`<div class="set-picker">
			<label for="set-select"
				>${this.localize.term("USyncSettings_currentHandlerSet")}</label
			>
			<uui-select
				id="set-select"
				.label=${this.localize.term("USyncSettings_currentHandlerSet")}
				.options=${n}
				@change=${(e) => {
    var s;
    const t = e.target;
    this._setName = t.value, (s = Ae(this, H)) == null || s.getActions(this._setName);
  }}>
			</uui-select>
		</div> `;
};
ts = function() {
  var n;
  return (n = this._legacy) != null && n.hasLegacy ? h`
					<div class="legacy-banner">
						<umb-icon name="icon-alert"></umb-icon>
						${this.localize.term("uSync_legacyBanner")}
					</div>
				` : P;
};
ns = function() {
  var e;
  if (!this._actions || !Array.isArray(this._actions)) return P;
  var n = (e = this._actions) == null ? void 0 : e.map((t) => h`
				<usync-action-box
					.disabled=${this._disabled}
					.group="${t}"
					.state=${this._buttonState}
					@perform-action=${Y(this, L, Zn)}>
				</usync-action-box>
			`);
  return h` <div class="action-buttons-box">${n}</div> `;
};
ss = function() {
  return this._showProgress === !0 || this._completed === !0 ? P : h`
			<umb-empty-state>
				<h2>
					<uui-icon name="usync-logo"></uui-icon>
					<umb-localize key="uSync_banner"></umb-localize>
				</h2>
			</umb-empty-state>
		`;
};
os = function() {
  var n;
  return this._showProgress == !1 && this._completed == !1 ? P : h`
			<usync-progress-box
				.title=${((n = this._group) == null ? void 0 : n.groupName) ?? "doh!"}
				.actions=${this._workingActions}
				.complete=${this._completed}></usync-progress-box>
		`;
};
rs = function() {
  return this._completed ? h`<usync-results .results=${this._results}></usync-results>` : P;
};
S.styles = [
  O`
			:host {
				display: block;
				margin-top: calc(var(--uui-size-space-4) * -1);
			}

			.wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}

			.legacy-banner {
				display: flex;
				gap: var(--uui-size-space-2);
				padding: var(--uui-size-space-4);
				margin: var(--uui-size-space-4) 0;
				background-color: var(--uui-color-warning);
				color: var(--uui-color-warning-contrast);
			}

			.results-box {
				position: relative;
				display: block;
				z-index: 1;
			}

			.action-buttons-box {
				position: relative;
				display: flex;
				gap: var(--uui-size-space-4);
				flex-wrap: wrap;
				align-content: stretch;
				z-index: 1;
			}

			umb-empty-state {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0;
				right: 0;
				margin: 0 auto;
				text-align: center;
				color: var(--uui-color-border);
				z-index: 0;
			}

			umb-empty-state h2 {
				font-size: var(--uui-type-h2-size);
			}

			umb-empty-state uui-icon {
				position: relative;
				top: var(--uui-size-2);
			}

			.set-picker {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
				gap: var(--uui-size-space-2);
				margin-bottom: var(--uui-size-space-4);
				border: 1px solid var(--uui-color-border);
				padding: var(--uui-size-space-4);
			}

			.set-picker label {
				font-weight: 700;
			}

			.set-picker label::after {
				content: ':';
			}
		`
];
A([
  f()
], S.prototype, "_actions", 2);
A([
  f()
], S.prototype, "_workingActions", 2);
A([
  f()
], S.prototype, "_loaded", 2);
A([
  f()
], S.prototype, "_legacy", 2);
A([
  f()
], S.prototype, "_buttonState", 2);
A([
  f()
], S.prototype, "_working", 2);
A([
  f()
], S.prototype, "_completed", 2);
A([
  f()
], S.prototype, "_showProgress", 2);
A([
  f()
], S.prototype, "_group", 2);
A([
  f()
], S.prototype, "_results", 2);
A([
  f()
], S.prototype, "_disabled", 2);
A([
  f()
], S.prototype, "_setName", 2);
A([
  f()
], S.prototype, "_sets", 2);
S = A([
  T("usync-default-view")
], S);
const Ur = S, zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ur,
  get uSyncDefaultViewElement() {
    return S;
  }
}, Symbol.toStringTag, { value: "Module" }));
var Lr = Object.defineProperty, Wr = Object.getOwnPropertyDescriptor, is = (n) => {
  throw TypeError(n);
}, as = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Wr(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && Lr(e, t, o), o;
}, cs = (n, e, t) => e.has(n) || is("Cannot " + t), un = (n, e, t) => (cs(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Hr = (n, e, t) => e.has(n) ? is("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), jr = (n, e, t, s) => (cs(n, e, "write to private field"), e.set(n, t), t), Ie;
let Se = class extends He(Ce) {
  constructor() {
    super(), Hr(this, Ie), this.version = E.version, jr(this, Ie, new ks(this)), this.observe(un(this, Ie).completed, (n) => {
    });
  }
  async connectedCallback() {
    super.connectedCallback();
    const n = await un(this, Ie).getAddons();
    this.version = `v${(n == null ? void 0 : n.version) ?? E.version}`;
  }
  render() {
    return h`
			<umb-workspace-editor .enforceNoFooter=${!0}>
				<div slot="header" class="header">
					<div>
						<strong><umb-localize key="uSync_name"></umb-localize></strong><br /><em
							>${this.version}</em
						>
					</div>
				</div>
			</umb-workspace-editor>
		`;
  }
};
Ie = /* @__PURE__ */ new WeakMap();
Se.styles = [
  As,
  O`
			umb-workspace-editor > div.header {
				display: flex;
				align-items: center;
				align-content: center;
			}
		`
];
as([
  f()
], Se.prototype, "version", 2);
Se = as([
  T("usync-workspace-root")
], Se);
const Br = Se, Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Br,
  get uSyncWorkspaceRootElement() {
    return Se;
  }
}, Symbol.toStringTag, { value: "Module" })), Vr = {
  name: "uSync",
  path: "usync",
  icon: "icon-infinity",
  menuName: "Syncronisation",
  menuAlias: "usync.menu",
  version: "16.0.0",
  conditions: {
    legacy: "usync.legacy.condition"
  },
  workspace: {
    alias: "usync.workspace",
    rootElement: "usync-root",
    elementName: "usync-workspace-root",
    contextAlias: "usync.workspace.context",
    defaultView: {
      alias: "usync.workspace.default"
    },
    settingView: {
      alias: "usync.workspace.settings"
    },
    addOnView: {
      alias: "usync.workspace.addons"
    },
    legacyView: {
      alais: "usync.workspace.legacy"
    }
  }
}, na = Vr;
class sa extends wn {
  constructor(e, t) {
    super(e, t), this.config = t.config, this.consumeContext(yn, (s) => {
      s && s.checkLegacy().then((o) => {
        this.permitted = (o == null ? void 0 : o.hasLegacy) ?? !1;
      });
    });
  }
}
const Pt = "usync.section";
var _e, me, We, Tt;
class qr extends wn {
  constructor(t, s) {
    super(t, s);
    _(this, We);
    _(this, _e);
    _(this, me);
    new Rs(
      this,
      vn,
      "section",
      () => !0,
      async (o) => {
        m(this, me, o.map((r) => r.alias)), this.permitted = Ke(this, We, Tt).call(this);
      },
      "uSyncAllSectionsManifestFilter"
    ), this.consumeContext(Sn, (o) => {
      o && this.observe(o.alias, (r) => {
        m(this, _e, r), this.permitted = Ke(this, We, Tt).call(this);
      });
    });
  }
}
_e = new WeakMap(), me = new WeakMap(), We = new WeakSet(), Tt = function() {
  return !u(this, _e) || !u(this, me) ? !1 : !u(this, me).includes(Pt) || u(this, _e) === Pt;
};
var Gr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, ls = (n) => {
  throw TypeError(n);
}, ft = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Xr(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && Gr(e, t, o), o;
}, jt = (n, e, t) => e.has(n) || ls("Cannot " + t), hn = (n, e, t) => (jt(n, e, "read from private field"), e.get(n)), dn = (n, e, t) => e.has(n) ? ls("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Kr = (n, e, t, s) => (jt(n, e, "write to private field"), e.set(n, t), t), Yr = (n, e, t) => (jt(n, e, "access private method"), t), Ue, At, us;
let ze = class extends He(Ce) {
  constructor() {
    super(), dn(this, At), dn(this, Ue), this.hasChildren = !1, vn.byType("usync-menuItem").subscribe((n) => {
      this.hasChildren = n.length > 0;
    }), this.consumeContext(Sn, (n) => {
      this.observe(
        n == null ? void 0 : n.pathname,
        (e) => {
          Kr(this, Ue, e), Yr(this, At, us).call(this);
        },
        "observePathname"
      );
    });
  }
  render() {
    return h`<umb-menu-item-layout
			label=${this.manifest.meta.label ?? this.manifest.name}
			icon-name=${this.manifest.meta.icon ?? "icon-bug"}
			.href=${this.itemPath}
			?has-Children=${this.hasChildren}
			>${this.renderChildren()}
		</umb-menu-item-layout>`;
  }
  renderChildren() {
    return h`<umb-extension-slot
			type="usync-menuItem"
			default-element="umb-menu-item-default"></umb-extension-slot>`;
  }
};
Ue = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakSet();
us = function() {
  hn(this, Ue) && (this.itemPath = `section/${hn(this, Ue)}/workspace/${this.manifest.meta.entityType}`);
};
ft([
  C({ type: Object, attribute: !1 })
], ze.prototype, "manifest", 2);
ft([
  f()
], ze.prototype, "hasChildren", 2);
ft([
  f()
], ze.prototype, "itemPath", 2);
ze = ft([
  T("usync-menu")
], ze);
const hs = "usync.condition.new-section", Jr = "Umb.Section.Settings", re = {
  alias: "usync.menu",
  name: "uSync",
  icon: "icon-infinity",
  rootElement: E.workspace.rootElement
}, ds = {
  type: "menu",
  alias: re.alias,
  name: re.name,
  meta: {
    label: re.name,
    icon: re.icon,
    entityType: re.rootElement
  }
}, Qr = {
  type: "menuItem",
  alias: "usync.menu.item",
  name: "uSync menu item",
  element: Is,
  meta: {
    label: "uSync",
    icon: "usync-logo",
    entityType: E.workspace.rootElement,
    menus: [re.alias]
  }
}, Zr = {
  type: "sectionSidebarApp",
  kind: "menu",
  alias: "usync.sidebarapp",
  name: "uSync section sidebar menu",
  weight: 150,
  meta: {
    label: "Synchronisation",
    menu: ds.alias
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      oneOf: [Jr, Pt]
    },
    {
      alias: hs
    }
  ]
}, ei = [
  // uSyncSection,
  ds,
  Zr,
  Qr
  // subMenuItem
], ti = {
  type: "modal",
  alias: "usync.import.modal",
  name: "uSync import modal",
  js: () => Promise.resolve().then(() => Rr)
}, ni = [ti];
var si = Object.defineProperty, oi = Object.getOwnPropertyDescriptor, ps = (n) => {
  throw TypeError(n);
}, Fe = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? oi(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && si(e, t, o), o;
}, ri = (n, e, t) => e.has(n) || ps("Cannot " + t), ii = (n, e, t) => e.has(n) ? ps("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), St = (n, e, t) => (ri(n, e, "access private method"), t), xe, Rt, gs;
let se = class extends je {
  constructor() {
    super(...arguments), ii(this, xe), this.disabled = !1, this._popoverOpen = !1;
  }
  render() {
    var n, e, t;
    return h`
			<uui-button-group>
				<uui-button
					class="action-button"
					.disabled=${this.disabled}
					label=${this.localize.term(`uSync_${(n = this.button) == null ? void 0 : n.label}`)}
					color=${(e = this.button) == null ? void 0 : e.color}
					look=${(t = this.button) == null ? void 0 : t.look}
					state=${fn(this.state)}
					@click=${() => St(this, xe, Rt).call(this, this.button)}></uui-button>

				${this.renderDropdown(this.button)}
			</uui-button-group>
		`;
  }
  renderDropdown(n) {
    var s, o;
    if (!((s = this.button) != null && s.children)) return P;
    const e = (o = this.button) == null ? void 0 : o.children.map((r) => h` <uui-menu-item
				.disabled=${this.disabled}
				.label=${this.localize.term(`uSync_${r.label}`)}
				@click-label=${() => St(this, xe, Rt).call(this, r)}></uui-menu-item>`);
    if (e.length == 0) return P;
    const t = `popover_${n == null ? void 0 : n.key}`;
    return h`
			<uui-button
				.disabled=${this.disabled}
				popovertarget=${t}
				.label=${this.button.label}
				color=${n == null ? void 0 : n.color}
				look=${n == null ? void 0 : n.look}
				compact>
				<uui-symbol-expand
					class="expand-symbol"
					.open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>

			<uui-popover-container
				id=${t}
				margin="6"
				placement="bottom-end"
				@toggle=${St(this, xe, gs)}>
				<umb-popover-layout>
					<uui-scroll-container> ${e} </uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
xe = /* @__PURE__ */ new WeakSet();
Rt = function(n) {
  n && this.dispatchEvent(new Ws(n));
};
gs = function(n) {
  this._popoverOpen = n.newState === "open";
};
se.styles = O`
		.action-button {
			min-width: 110px;
		}

		.expand-symbol {
			transform: rotate(90deg);
		}

		.expand-symbol[open] {
			transform: rotate(180deg);
		}
	`;
Fe([
  C({ type: Object })
], se.prototype, "button", 2);
Fe([
  C({ type: String })
], se.prototype, "state", 2);
Fe([
  C({ type: Boolean })
], se.prototype, "disabled", 2);
Fe([
  f()
], se.prototype, "_popoverOpen", 2);
se = Fe([
  T("usync-action-button")
], se);
var ai = Object.defineProperty, ci = Object.getOwnPropertyDescriptor, Ve = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? ci(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && ai(e, t, o), o;
};
let oe = class extends je {
  constructor() {
    super(...arguments), this.label = "Upload", this.accept = "";
  }
  async _getFile(n) {
    return await new Promise((e, t) => {
      n.file(e, t);
    });
  }
  async _onFilePickerChange() {
    const e = (this._input.files ? Array.from(this._input.files) : [])[0], s = e instanceof File ? e : await this._getFile(e);
    this._file = s, this._dispachChangeEvent();
  }
  async _removeFile() {
    this._file = void 0, this._input.value = "", this._dispachChangeEvent();
  }
  _onUpload() {
    this._input.click();
  }
  _dispachChangeEvent() {
    this.dispatchEvent(new Us(this._file));
  }
  render() {
    return h`<input
				@click=${(n) => n.stopPropagation()}
				type="file"
				id="file"
				this.accept=${this.accept}
				@change=${this._onFilePickerChange} />
			${this._renderFile()} ${this._renderButton()}`;
  }
  _renderFile() {
    return this._file ? h` <div class="file">
			<div>${this._file.name}</div>
			<uui-button
				@click="${() => this._removeFile()}"
				compact
				color="danger"
				label="Remove">
				<umb-icon name="icon-trash"></umb-icon>
			</uui-button>
		</div>` : P;
  }
  _renderButton() {
    return this._file ? P : h` <uui-button
					id="add-button"
					look="placeholder"
					label=${this.label}
					@click="${this._onUpload}"></uui-button>`;
  }
};
oe.styles = [
  O`
			.file {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-2);
			}

			#file {
				display: none;
			}

			#add-button {
				width: 100%;
			}
		`
];
Ve([
  C({ type: String })
], oe.prototype, "label", 2);
Ve([
  C({ type: String })
], oe.prototype, "accept", 2);
Ve([
  vs("#file")
], oe.prototype, "_input", 2);
Ve([
  f()
], oe.prototype, "_file", 2);
oe = Ve([
  T("usync-upload-file-picker")
], oe);
var li = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, fs = (n) => {
  throw TypeError(n);
}, Bt = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? ui(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && li(e, t, o), o;
}, Ft = (n, e, t) => e.has(n) || fs("Cannot " + t), Vt = (n, e, t) => (Ft(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Ct = (n, e, t) => e.has(n) ? fs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), pn = (n, e, t, s) => (Ft(n, e, "write to private field"), e.set(n, t), t), $t = (n, e, t) => (Ft(n, e, "access private method"), t), Re, lt, Pe, _s, ms, ys;
let Le = class extends je {
  constructor() {
    super(), Ct(this, Pe), Ct(this, Re), Ct(this, lt), pn(this, Re, new Ds(this)), pn(this, lt, new mn(this)), this.observe(Vt(this, Re).queue, (n) => {
      n.forEach((e) => {
        e.status === Cn.SUCCESS && $t(this, Pe, ms).call(this, e.temporaryUnique);
      });
    });
  }
  render() {
    return h`${this.renderUploadForm()}`;
  }
  renderUploadForm() {
    return h` ${this.renderFile()} ${this.renderUploadButton()} `;
  }
  renderFile() {
    return h`
			<div class="upload-box">
				<usync-upload-file-picker
					label="Select uSync Zip file"
					@change=${$t(this, Pe, ys)}></usync-upload-file-picker>
			</div>
		`;
  }
  renderUploadButton() {
    return this.selected ? h`<uui-button
			type="button"
			look="primary"
			@click="${$t(this, Pe, _s)}"
			label="Upload"></uui-button>` : P;
  }
};
Re = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
Pe = /* @__PURE__ */ new WeakSet();
_s = function() {
  if (!this.selected) return;
  const n = {
    temporaryUnique: Os.new(),
    file: this.selected,
    status: Cn.WAITING
  };
  Vt(this, Re).upload([n]);
};
ms = async function(n) {
  const e = await Vt(this, lt).processUpload(n);
  if (!(e != null && e.success)) {
    console.log("upload error", e);
    return;
  }
  this.dispatchEvent(new zs(e));
};
ys = function(n) {
  this.selected = n.file;
};
Le.styles = O`
		:host {
			display: flex;
			justify-content: space-between;
		}

		.upload-box {
			flex-grow: 2;
		}

		usync-upload-file-picker {
			width: 100%;
			flex-grow: 2;
		}
	`;
Bt([
  f()
], Le.prototype, "selected", 2);
Bt([
  f()
], Le.prototype, "result", 2);
Le = Bt([
  T("usync-file-upload")
], Le);
const ie = E.workspace.alias, hi = {
  type: "workspace",
  alias: ie,
  name: "uSync core workspace",
  js: () => Promise.resolve().then(() => Fr),
  meta: {
    entityType: E.workspace.rootElement
  }
}, di = {
  type: "workspaceContext",
  alias: E.workspace.contextAlias,
  name: "uSync workspace context",
  js: () => Promise.resolve().then(() => Or),
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: ie
    }
  ]
}, pi = [
  {
    type: "workspaceView",
    alias: E.workspace.defaultView.alias,
    name: "uSync workspace default view",
    js: () => Promise.resolve().then(() => zr),
    weight: 300,
    meta: {
      label: "Default",
      pathname: "default",
      icon: "usync-logo"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: ie
      }
    ]
  },
  {
    type: "workspaceView",
    alias: E.workspace.settingView.alias,
    name: "uSync workspace settings view",
    js: () => import("./settings.element-DNZ1i_mR.js"),
    weight: 200,
    meta: {
      label: "Settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: ie
      }
    ]
  },
  {
    type: "workspaceView",
    alias: E.workspace.addOnView.alias,
    name: "uSync addons",
    js: () => import("./addons.element-C_4i0uPA.js"),
    weight: 100,
    meta: {
      label: "AddOns",
      pathname: "addons",
      icon: "icon-box"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: ie
      }
    ]
  },
  {
    type: "workspaceView",
    alias: E.workspace.legacyView.alais,
    name: "uSync legacy",
    js: () => import("./legacy.element-CRPIczmh.js"),
    weight: 150,
    meta: {
      label: "Legacy",
      pathname: "legacy",
      icon: "icon-dock-connector color-red"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: ie
      },
      {
        alias: E.conditions.legacy,
        hasLegacyFiles: !0
      }
    ]
  }
], gi = [], fi = [
  di,
  hi,
  ...pi,
  ...gi,
  ...ni
], _i = [
  {
    type: "localization",
    alias: "usync.lang.enus",
    name: "English",
    weight: 0,
    meta: {
      culture: "en"
    },
    js: () => import("./en-us-BuRHRH4N.js")
  }
], mi = [..._i], yi = {
  type: "modal",
  alias: "usync.details.modal",
  name: "usync details modal",
  js: () => Promise.resolve().then(() => Po)
}, bi = {
  type: "modal",
  alias: "usync.legacy.modal",
  name: "uSync legacy modal",
  js: () => import("./legacy-modal-element-CKIH2-p4.js")
}, wi = {
  type: "modal",
  alias: "usync.error.modal",
  name: "uSync error modal",
  js: () => Promise.resolve().then(() => Mo)
}, vi = [yi, bi, wi], Si = [
  {
    type: "condition",
    alias: E.conditions.legacy,
    name: "uSync Legacy Files Condition",
    api: xs
  },
  {
    type: "condition",
    alias: hs,
    name: "uSync New Section Condition",
    api: qr
  }
], Ci = {
  type: "icons",
  alias: "usync.icons",
  name: "uSync Icons",
  js: () => import("./icons-DpRH-q6X.js")
}, $i = [Ci], Ei = [
  ...mi,
  ...ei,
  ...fi,
  ...vi,
  ...Si,
  ...$i
], oa = (n, e) => {
  e.registerMany(Ei), n.consumeContext(gn, (t) => {
    if (t) {
      var s = t.getOpenApiConfiguration();
      k.setConfig({
        auth: s.token,
        baseUrl: s.base,
        credentials: s.credentials
      }), k.interceptors.request.use(async (o, r) => {
        const i = await t.getLatestToken();
        return o.headers.set("Authorization", `Bearer ${i}`), o;
      });
    }
  });
};
export {
  M as AbortError,
  Vi as ActionsService,
  oo as ChangeDetailType,
  U as ChangeType,
  ir as DefaultHttpClient,
  ro as EventMessageTypeModel,
  io as HandlerStatus,
  gt as HttpClient,
  Z as HttpError,
  Fn as HttpResponse,
  v as HttpTransportType,
  Lt as HubConnection,
  Ji as HubConnectionBuilder,
  y as HubConnectionState,
  Sr as JsonHubProtocol,
  c as LogLevel,
  g as MessageType,
  qi as MigrationsService,
  Ne as NullLogger,
  Gi as SettingsService,
  cr as Subject,
  sa as SyncLegacyFilesCondition,
  qr as SyncNewSectionCondition,
  zt as TimeoutError,
  $ as TransferFormat,
  Jn as USYNC_CORE_CONTEXT_TOKEN,
  Xi as USYNC_DETAILS_MODAL,
  Uo as USYNC_ERROR_MODAL,
  Ki as USYNC_SIGNALR_CONTEXT_TOKEN,
  ta as USyncSettingsDataSource,
  Ko as VERSION,
  k as client,
  oa as onInit,
  ye as uSyncActionBox,
  Zi as uSyncActionDataSource,
  Qi as uSyncActionRepository,
  it as uSyncChangeView,
  na as uSyncConstants,
  De as uSyncDetailsModalElement,
  ze as uSyncMenuElement,
  ea as uSyncMigrationDataSource,
  K as uSyncProcessBox,
  te as uSyncResultGroupView,
  be as uSyncResultsView,
  Fo as uSyncSignalRContext,
  cn as uSyncWorkspaceContext,
  Se as uSyncWorkspaceRootElement
};
//# sourceMappingURL=uSync.js.map
