import { css as y, customElement as o, html as f, property as E, nothing as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
import { U as ae, c as oe, d as me, h as ue, i as le, a as pe, e as ce, j as _e, b as fe, f as he, g as de } from "../sort-children-of-modal.token-Dek4OSuA.js";
import { U as ye, a as Ee } from "../tree-picker-modal.token-CxLbH2eO.js";
import { tryExecute as m } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as D } from "@umbraco-cms/backoffice/repository";
import { of as d } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbStoreBase as g } from "@umbraco-cms/backoffice/store";
import { UmbArrayState as S, createObservablePart as C } from "@umbraco-cms/backoffice/observable-api";
import { UmbDefaultTreeElement as ve } from "../default-tree.element-fgMsmaPG.js";
import { UmbDefaultTreeContext as Ue } from "../default-tree.context-tDNpHXIy.js";
import { U as we } from "../default-tree.context-token-C7a9fWg9.js";
import { UmbDuplicateToEntityAction as De } from "../duplicate-to.action-DT60hooq.js";
import { UmbReloadTreeItemChildrenEntityAction as Se } from "../reload-tree-item-children.action-C0Xp9rFl.js";
import { c as xe, b as Me, U as Pe, a as Re } from "../tree-item-element-base-BXRdbEb6.js";
import { UmbSortChildrenOfEntityAction as Le } from "../sort-children-of.action-il3M6LI_.js";
import { UmbSortChildrenOfModalElement as Ne, UmbSortChildrenOfModalElement as Fe } from "../sort-children-of-modal.element-Cs83_Yer.js";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { UmbExtensionElementAndApiSlotElementBase as T, umbExtensionsRegistry as v } from "@umbraco-cms/backoffice/extension-registry";
import { UmbDefaultTreeItemContext as ze } from "../tree-item-default.context-DZfwvl8Z.js";
import { UmbDefaultTreeItemElement as Ke } from "../tree-item-default.element-BBKiUqXZ.js";
var M = Object.getOwnPropertyDescriptor, P = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? M(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = a(r) || r);
  return r;
};
let u = class extends h {
  render() {
    return f`<uui-button
			data-mark="tree:load-more"
			id="load-more"
			look="secondary"
			.label=${this.localize.term("actions_loadMore")}></uui-button>`;
  }
};
u.styles = y`
		:host {
			position: relative;
			display: block;
			padding-left: var(--uui-size-space-3);
			margin-right: var(--uui-size-space-2);
			margin-bottom: var(--uui-size-layout-2);
			margin-left: calc(var(--uui-menu-item-indent, 0) * var(--uui-size-4));
		}
		uui-button {
			width: 100%;
			height: var(--uui-size---uui-size-layout-3);
			--uui-box-border-radius: calc(var(--uui-border-radius) * 2);
		}
	`;
u = P([
  o("umb-tree-load-more-button")
], u);
class te {
  #e;
  #r;
  #i;
  #s;
  #t;
  /**
   * Creates an instance of UmbTreeServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbTreeServerDataSourceBase
   */
  constructor(e, t) {
    this.#e = e, this.#r = t.getRootItems, this.#i = t.getChildrenOf, this.#s = t.getAncestorsOf, this.#t = t.mapper;
  }
  /**
   * Fetches the root items for the tree from the server
   * @param {UmbTreeRootItemsRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getRootItems(e) {
    const { data: t, error: i } = await m(this.#e, this.#r(e));
    if (t) {
      const r = t?.items.map((n) => this.#t(n));
      return { data: { total: t.total, items: r } };
    }
    return { error: i };
  }
  /**
   * Fetches the children of a given parent unique from the server
   * @param {UmbTreeChildrenOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getChildrenOf(e) {
    if (e.parent.unique === void 0) throw new Error("Parent unique is missing");
    const { data: t, error: i } = await m(this.#e, this.#i(e));
    if (t) {
      const r = t?.items.map((n) => this.#t(n));
      return { data: { total: t.total, items: r } };
    }
    return { error: i };
  }
  /**
   * Fetches the ancestors of a given item from the server
   * @param {UmbTreeAncestorsOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getAncestorsOf(e) {
    if (!e.treeItem.entityType) throw new Error("Parent unique is missing");
    const { data: t, error: i } = await m(this.#e, this.#s(e));
    return t ? { data: t?.map((n) => this.#t(n)) } : { error: i };
  }
}
class re extends D {
  /**
   * Creates an instance of UmbTreeRepositoryBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param {UmbTreeDataSourceConstructor<TreeItemType>} treeSourceConstructor
   * @param {(string | UmbContextToken<any, any>)} treeStoreContextAlias
   * @memberof UmbTreeRepositoryBase
   */
  constructor(e, t, i) {
    super(e), this._treeSource = new t(this), this._init = this.consumeContext(i, (r) => {
      this._treeStore = r;
    }).asPromise({ preventTimeout: !0 }).catch(() => {
    });
  }
  /**
   * Requests root items of a tree
   * @param args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeRootItems(e) {
    await this._init;
    const { data: t, error: i } = await this._treeSource.getRootItems(e);
    return this._treeStore ? (t && this._treeStore.appendItems(t.items), { data: t, error: i, asObservable: () => this._treeStore?.rootItems }) : {
      asObservable: () => {
      }
    };
  }
  /**
   * Requests tree items of a given parent
   * @param {(string | null)} parentUnique
   * @param args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeItemsOf(e) {
    if (!e.parent) throw new Error("Parent is missing");
    if (e.parent.unique === void 0) throw new Error("Parent unique is missing");
    if (e.parent.entityType === null) throw new Error("Parent entity type is missing");
    await this._init;
    const { data: t, error: i } = await this._treeSource.getChildrenOf(e);
    return this._treeStore ? (t && this._treeStore.appendItems(t.items), { data: t, error: i, asObservable: () => this._treeStore?.childrenOf(e.parent.unique) }) : {
      asObservable: () => {
      }
    };
  }
  /**
   * Requests ancestors of a given item
   * @param {UmbTreeAncestorsOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeItemAncestors(e) {
    if (e.treeItem.unique === void 0) throw new Error("Descendant unique is missing");
    await this._init;
    const { data: t, error: i } = await this._treeSource.getAncestorsOf(e);
    return { data: t, error: i };
  }
  /**
   * Returns a promise with an observable of tree root items
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async rootTreeItems() {
    return await this._init, this._treeStore?.rootItems ?? d([]);
  }
  /**
   * Returns a promise with an observable of children items of a given parent
   * @param {(string | null)} parentUnique
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async treeItemsOf(e) {
    if (e === void 0) throw new Error("Parent unique is missing");
    return await this._init, this._treeStore?.childrenOf(e) ?? d([]);
  }
}
class ie extends g {
  constructor(e, t) {
    super(e, t, new S([], (i) => i.unique)), this.rootItems = this._data.asObservablePart((i) => i.filter((r) => r.parent.unique === null));
  }
  /**
   * Returns an observable to observe the children of a given parent
   * @param {(string | null)} parentUnique
   * @returns {*}
   * @memberof UmbUniqueTreeStore
   */
  childrenOf(e) {
    return this._data.asObservablePart((t) => t.filter((i) => i.parent.unique === e));
  }
}
var R = Object.getOwnPropertyDescriptor, B = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? R(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = a(r) || r);
  return r;
};
let l = class extends h {
  render() {
    return f`<umb-workspace-editor>
			<umb-icon id="icon" slot="header" name="icon-folder"></umb-icon>
			<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
		</umb-workspace-editor>`;
  }
};
l.styles = [
  x,
  y`
			#icon {
				display: inline-block;
				font-size: var(--uui-size-6);
				margin-right: var(--uui-size-space-4);
			}
		`
];
l = B([
  o("umb-folder-workspace-editor")
], l);
var L = Object.defineProperty, q = Object.getOwnPropertyDescriptor, O = (s) => {
  throw TypeError(s);
}, U = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? q(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = (i ? a(e, t, r) : a(r)) || r);
  return i && r && L(e, t, r), r;
}, N = (s, e, t) => e.has(s) || O("Cannot " + t), F = (s, e, t) => e.has(s) ? O("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), $ = (s, e, t) => (N(s, e, "access private method"), t), p, I;
let c = class extends T {
  constructor() {
    super(...arguments), F(this, p);
  }
  get entityType() {
    return this._entityType;
  }
  set entityType(s) {
    this._entityType = s, $(this, p, I).call(this);
  }
  getExtensionType() {
    return "treeItem";
  }
  getDefaultElementName() {
    return "umb-default-tree-item";
  }
};
p = /* @__PURE__ */ new WeakSet();
I = function() {
  if (!this._entityType) return;
  const s = (e) => this._entityType ? e.forEntityTypes.includes(this._entityType) : !1;
  this.observe(
    // TODO: what should we do if there are multiple tree items for an entity type?
    // This method gets all extensions based on a type, then filters them based on the entity type. and then we get the alias of the first one [NL]
    C(
      v.byTypeAndFilter(this.getExtensionType(), s),
      (e) => e[0]?.alias
    ),
    (e) => {
      this.alias = e;
    },
    "umbObserveAlias"
  );
};
U([
  E({ type: String, reflect: !0 })
], c.prototype, "entityType", 1);
c = U([
  o("umb-tree-item")
], c);
var z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, w = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? j(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = (i ? a(e, t, r) : a(r)) || r);
  return i && r && z(e, t, r), r;
};
const K = {
  type: "kind",
  alias: "Umb.Kind.Tree",
  matchKind: "tree",
  matchType: "menuItem",
  manifest: {
    type: "menuItem",
    elementName: "umb-menu-item-tree-default"
  }
};
v.register(K);
let _ = class extends h {
  render() {
    return this.manifest ? f`
					<umb-tree
						alias=${this.manifest?.meta.treeAlias}
						.props=${{
      hideTreeRoot: this.manifest?.meta.hideTreeRoot === !0,
      selectionConfiguration: {
        selectable: !1,
        multiple: !1
      }
    }}></umb-tree>
				` : A;
  }
};
w([
  E({ type: Object })
], _.prototype, "manifest", 2);
_ = w([
  o("umb-menu-item-tree-default")
], _);
var H = Object.getOwnPropertyDescriptor, W = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? H(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = a(r) || r);
  return r;
};
let b = class extends T {
  getExtensionType() {
    return "tree";
  }
  getDefaultElementName() {
    return "umb-default-tree";
  }
  getSelection() {
    return this._element?.getSelection?.() ?? [];
  }
};
b = W([
  o("umb-tree")
], b);
export {
  ae as UMB_DUPLICATE_TO_MODAL,
  oe as UMB_DUPLICATE_TO_MODAL_ALIAS,
  me as UMB_ENTITY_ACTION_SORT_CHILDREN_OF_KIND_MANIFEST,
  ue as UMB_FOLDER_CREATE_MODAL,
  le as UMB_FOLDER_UPDATE_MODAL,
  pe as UMB_SORT_CHILDREN_OF_MODAL,
  ce as UMB_SORT_CHILDREN_OF_MODAL_ALIAS,
  we as UMB_TREE_CONTEXT,
  xe as UMB_TREE_ITEM_CONTEXT,
  _e as UMB_TREE_ITEM_DEFAULT_KIND_MANIFEST,
  ye as UMB_TREE_PICKER_MODAL,
  Ee as UMB_TREE_PICKER_MODAL_ALIAS,
  fe as UmbCreateFolderEntityAction,
  Ue as UmbDefaultTreeContext,
  ve as UmbDefaultTreeElement,
  ze as UmbDefaultTreeItemContext,
  Ke as UmbDefaultTreeItemElement,
  he as UmbDeleteFolderEntityAction,
  De as UmbDuplicateToEntityAction,
  l as UmbFolderWorkspaceEditorElement,
  _ as UmbMenuItemTreeDefaultElement,
  Se as UmbReloadTreeItemChildrenEntityAction,
  Me as UmbRequestReloadTreeItemChildrenEvent,
  Le as UmbSortChildrenOfEntityAction,
  Ne as UmbSortChildrenOfModalElement,
  b as UmbTreeElement,
  Pe as UmbTreeItemContextBase,
  c as UmbTreeItemElement,
  Re as UmbTreeItemElementBase,
  u as UmbTreeLoadMoreButtonElement,
  re as UmbTreeRepositoryBase,
  te as UmbTreeServerDataSourceBase,
  ie as UmbUniqueTreeStore,
  de as UmbUpdateFolderEntityAction,
  Fe as element
};
//# sourceMappingURL=index.js.map
