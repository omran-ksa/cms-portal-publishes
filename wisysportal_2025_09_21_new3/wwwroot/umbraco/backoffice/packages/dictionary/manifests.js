import { d as r, e as I, w as _, a as i, c as T, f as s, r as n, p as o, b as t, g as c, U as m, h as D, l as E, k as O, j as d, n as p, o as R, q as S, s as a } from "./paths-pWW_vsmu.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UMB_COLLECTION_ALIAS_CONDITION as y } from "@umbraco-cms/backoffice/collection";
import { UMB_SECTION_ALIAS_CONDITION_ALIAS as C, UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as b } from "@umbraco-cms/backoffice/section";
import { UMB_TRANSLATION_SECTION_ALIAS as l, UMB_TRANSLATION_MENU_ALIAS as U } from "@umbraco-cms/backoffice/translation";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as f } from "@umbraco-cms/backoffice/workspace";
const N = [
  {
    type: "repository",
    alias: r,
    name: "Dictionary Collection Repository",
    api: () => import("./dictionary-collection.repository-Bn7ad0EJ.js")
  }
], M = [
  {
    type: "collectionView",
    alias: I,
    name: "Dictionary Table Collection View",
    element: () => import("./dictionary-table-collection-view.element-Jhyy_IqJ.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: y,
        match: "Umb.Collection.Dictionary"
      }
    ]
  }
], h = _.generateAbsolute({
  parentEntityType: i,
  parentUnique: null
}), L = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Dictionary Collection Action",
    alias: "Umb.CollectionAction.Dictionary.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: h
    },
    conditions: [
      {
        alias: y,
        match: "Umb.Collection.Dictionary"
      }
    ]
  }
], u = {
  type: "collection",
  kind: "default",
  alias: T,
  element: () => import("./dictionary-collection.element-BBgY0loa.js"),
  name: "Dictionary Collection",
  meta: {
    repositoryAlias: r
  }
}, k = [
  u,
  ...N,
  ...M,
  ...L
], B = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Dictionary.Overview",
    name: "Dictionary Overview Dashboard",
    element: () => import("./dictionary-overview-dashboard.element-CsTGx_XD.js"),
    meta: {
      label: "#dictionaryItem_overviewTitle",
      pathname: "dictionary-overview"
    },
    conditions: [
      {
        alias: C,
        match: l
      }
    ]
  }
], Y = [
  {
    type: "repository",
    alias: s,
    name: "Move Dictionary Repository",
    api: () => import("./dictionary-move.repository-C6ZDyIrv.js")
  }
], w = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Dictionary.MoveTo",
    name: "Move Dictionary Entity Action",
    forEntityTypes: [t],
    meta: {
      treeRepositoryAlias: o,
      moveRepositoryAlias: s,
      treeAlias: n
    }
  },
  ...Y
], P = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Create",
    name: "Create Dictionary Entity Action",
    weight: 1200,
    api: () => import("./create.action-D8w2rtNi.js"),
    forEntityTypes: [t, i],
    meta: {
      icon: "icon-add",
      label: "#general_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Export",
    name: "Export Dictionary Entity Action",
    weight: 400,
    api: () => import("./export.action-d5d9hKMQ.js"),
    forEntityTypes: [t],
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Import",
    name: "Import Dictionary Entity Action",
    weight: 300,
    api: () => import("./import.action-DyFBFWkJ.js"),
    forEntityTypes: [t, i],
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Dictionary.Delete",
    name: "Delete Dictionary Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: m,
      detailRepositoryAlias: c
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Dictionary.Export",
    name: "Export Dictionary Modal",
    element: () => import("./export-dictionary-modal.element-Bo9uPaCh.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.Dictionary.Import",
    name: "Import Dictionary Modal",
    element: () => import("./import-dictionary-modal.element-Bp8wsEFh.js")
  },
  ...w
], v = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Dictionary",
    name: "Dictionary Menu Item",
    weight: 400,
    meta: {
      label: "Dictionary",
      icon: "icon-book-alt",
      entityType: t,
      menus: [U],
      treeAlias: n,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    name: "Dictionary Menu Structure Workspace Context",
    alias: "Umb.Context.Dictionary.Menu.Structure",
    api: () => import("./dictionary-menu-structure.context-Cp4Sutd2.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Dictionary"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Dictionary.Breadcrumb",
    name: "Data Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Dictionary"
      }
    ]
  }
], $ = [
  {
    type: "repository",
    alias: c,
    name: "Dictionary Detail Repository",
    api: () => import("./dictionary-detail.repository-7CoO_NLT.js")
  },
  {
    type: "store",
    alias: D,
    name: "Dictionary Detail Store",
    api: () => import("./dictionary-detail.store-BihXIN3P.js")
  }
], g = [
  {
    type: "repository",
    alias: m,
    name: "Dictionary Item Repository",
    api: () => import("./dictionary-item.repository-CZ6voZbE.js")
  },
  {
    type: "itemStore",
    alias: E,
    name: "Dictionary Item Store",
    api: () => import("./dictionary-item.store-CnKJUebs.js")
  }
], W = [
  {
    type: "repository",
    alias: O,
    name: "Dictionary Import Repository",
    api: () => import("./dictionary-import.repository-C2os32CU.js")
  }
], x = [
  {
    type: "repository",
    alias: d,
    name: "Dictionary Export Repository",
    api: () => import("./dictionary-export.repository-C3VvjbdC.js")
  }
], V = [
  ...$,
  ...g,
  ...W,
  ...x
], F = [
  {
    name: "Dictionary Global Search",
    alias: R,
    type: "globalSearch",
    weight: 600,
    meta: {
      label: "Dictionary",
      searchProviderAlias: p
    },
    conditions: [
      {
        alias: b,
        match: l
      }
    ]
  }
], H = [
  {
    name: "Dictionary Search Provider",
    alias: p,
    type: "searchProvider",
    api: () => import("./dictionary.search-provider-S2YJIQsO.js"),
    weight: 600,
    meta: {
      label: "Dictionary"
    }
  },
  {
    name: "Dictionary Search Result Item",
    alias: "Umb.SearchResultItem.Dictionary",
    type: "searchResultItem",
    forEntityTypes: [t]
  },
  ...F
], K = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Dictionary.Tree.ReloadChildrenOf",
    name: "Reload Dictionary Tree Item Children Entity Action",
    forEntityTypes: [i, t]
  }
], j = [
  {
    type: "repository",
    alias: o,
    name: "Dictionary Tree Repository",
    api: () => import("./dictionary-tree.repository-QA-H50_c.js")
  },
  {
    type: "treeStore",
    alias: S,
    name: "Dictionary Tree Store",
    api: () => import("./paths-pWW_vsmu.js").then((A) => A.y)
  },
  {
    type: "tree",
    kind: "default",
    alias: n,
    name: "Dictionary Tree",
    meta: {
      repositoryAlias: o
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Dictionary",
    name: "Dictionary Tree Item",
    forEntityTypes: [i, t]
  },
  ...K
], q = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Dictionary Workspace",
    api: () => import("./dictionary-workspace.context-Cz8XzC-c.js"),
    meta: {
      entityType: t
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Dictionary.Edit",
    name: "Dictionary Workspace Edit View",
    element: () => import("./workspace-view-dictionary-editor.element-0I_payCh.js"),
    weight: 100,
    meta: {
      label: "#general_edit",
      pathname: "edit",
      icon: "edit"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Dictionary.Save",
    name: "Save Dictionary Workspace Action",
    weight: 90,
    api: f,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  }
], nt = [
  ...k,
  ...B,
  ...P,
  ...v,
  ...V,
  ...H,
  ...j,
  ...q
];
export {
  nt as manifests
};
//# sourceMappingURL=manifests.js.map
