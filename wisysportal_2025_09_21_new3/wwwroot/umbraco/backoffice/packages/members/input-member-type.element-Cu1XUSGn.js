import { a as O, U as f } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import { UmbModalToken as C } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as Y } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_PATH_PATTERN as u } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as h } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as b } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as l } from "@umbraco-cms/backoffice/context-api";
import { UmbPickerInputContext as g } from "@umbraco-cms/backoffice/picker-input";
import { html as _, repeat as v, when as L, css as x, property as E, state as N, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as D } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as $ } from "@umbraco-cms/backoffice/validation";
const k = new C(Y, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.MemberType"
  }
}), ae = "Umb.Repository.MemberType.Duplicate", me = "Umb.Workspace.MemberType.Root", y = u.generateAbsolute({
  sectionName: h,
  entityType: O
}), _e = u.generateAbsolute({
  sectionName: h,
  entityType: f
}), Ee = new b("create/parent/:parentEntityType/:parentUnique", y), pe = new b(
  "edit/:unique",
  y
), Te = "member-type-property-type", H = "Umb.Repository.MemberType.Detail", K = "Umb.Store.MemberType.Detail", Me = [
  {
    type: "repository",
    alias: H,
    name: "Member Type Detail Repository",
    api: () => import("./member-type-detail.repository-DJUHDmAY.js").then((e) => e.m)
  },
  {
    type: "store",
    alias: K,
    name: "Member Type Detail Store",
    api: () => import("./member-type-detail.store-Dl-5p1a8.js")
  }
], ce = new l(
  "UmbMemberTypeDetailStore"
), P = "Umb.Repository.MemberTypeItem", q = "Umb.Store.MemberTypeItem", le = [
  {
    type: "repository",
    alias: P,
    name: "Member Type Item Repository",
    api: () => import("./member-type-item.repository-B821ge8G.js")
  },
  {
    type: "itemStore",
    alias: q,
    name: "Member Type Item Store",
    api: () => import("./member-type-item.store-BB9qyltu.js")
  }
], Re = new l("UmbMemberTypeItemStore"), z = "Umb.Repository.MemberType.Composition", ue = [
  {
    type: "repository",
    alias: z,
    name: "Member Type Composition Repository",
    api: () => import("./member-type-composition.repository-CE6DaAXv.js")
  }
], he = "Umb.GlobalSearch.MemberType", be = "Umb.SearchProvider.MemberType", ye = "Umb.Repository.MemberType.TreeItemChildrenCollection", Pe = "Umb.Collection.MemberType.TreeItemChildren", Ae = "Umb.Repository.MemberType.Tree", Ue = "Umb.Store.MemberType.Tree", Se = "Umb.Tree.MemberType", Ie = new l(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "member-type"
), Be = "Umb.Workspace.MemberType";
class G extends g {
  constructor(t) {
    super(t, P, k);
  }
}
var V = Object.defineProperty, X = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, a = (e, t, s, p) => {
  for (var n = p > 1 ? void 0 : p ? X(t, s) : t, M = e.length - 1, c; M >= 0; M--)
    (c = e[M]) && (n = (p ? c(t, s, n) : c(n)) || n);
  return p && n && V(t, s, n), n;
}, U = (e, t, s) => t.has(e) || A("Cannot " + s), o = (e, t, s) => (U(e, t, "read from private field"), s ? s.call(e) : t.get(e)), R = (e, t, s) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), T = (e, t, s) => (U(e, t, "access private method"), s), r, m, S, I, B, d;
let i = class extends $(
  W
) {
  constructor() {
    super(), R(this, m), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", R(this, r, new G(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && o(this, r).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && o(this, r).getSelection().length > this.max
    ), this.observe(o(this, r).selection, (e) => this.value = e.join(",")), this.observe(o(this, r).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    o(this, r).min = e;
  }
  get min() {
    return o(this, r).min;
  }
  set max(e) {
    o(this, r).max = e;
  }
  get max() {
    return o(this, r).max;
  }
  set selection(e) {
    o(this, r).setSelection(e);
  }
  get selection() {
    return o(this, r).getSelection();
  }
  set value(e) {
    this.selection = D(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return _` ${T(this, m, I).call(this)} ${T(this, m, B).call(this)} `;
  }
};
r = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
S = function() {
  o(this, r).openPicker({
    hideTreeRoot: !0
  });
};
I = function() {
  if (this._items)
    return _`
			<uui-ref-list>
				${v(
      this._items,
      (e) => e.unique,
      (e) => T(this, m, d).call(this, e)
    )}
			</uui-ref-list>
		`;
};
B = function() {
  if (!(this.max === 1 && this.selection.length >= this.max))
    return _`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${T(this, m, S)}
				label="${this.localize.term("general_choose")}"
				>${this.localize.term("general_choose")}</uui-button
			>
		`;
};
d = function(e) {
  if (e.unique)
    return _`
			<uui-ref-node-document-type name=${this.localize.string(e.name)}>
				${L(e.icon, () => _`<umb-icon slot="icon" name=${e.icon}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => o(this, r).requestRemoveItem(e.unique)}
						label="Remove Member Type ${e.name}"
						>${this.localize.term("general_remove")}</uui-button
					>
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
i.styles = [
  x`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  E({ type: Number })
], i.prototype, "min", 1);
a([
  E({ type: String, attribute: "min-message" })
], i.prototype, "minMessage", 2);
a([
  E({ type: Number })
], i.prototype, "max", 1);
a([
  E({ type: String, attribute: "min-message" })
], i.prototype, "maxMessage", 2);
a([
  E({ type: String })
], i.prototype, "value", 1);
a([
  N()
], i.prototype, "_items", 2);
i = a([
  w("umb-input-member-type")
], i);
export {
  le as A,
  ue as B,
  G as U,
  i as a,
  ae as b,
  me as c,
  y as d,
  _e as e,
  Ee as f,
  pe as g,
  Te as h,
  H as i,
  K as j,
  ce as k,
  P as l,
  q as m,
  Re as n,
  z as o,
  be as p,
  he as q,
  Ae as r,
  Ue as s,
  Se as t,
  Pe as u,
  ye as v,
  Be as w,
  Ie as x,
  k as y,
  Me as z
};
//# sourceMappingURL=input-member-type.element-Cu1XUSGn.js.map
