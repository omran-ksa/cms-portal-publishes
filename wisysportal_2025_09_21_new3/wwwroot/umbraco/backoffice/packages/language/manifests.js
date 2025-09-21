import { d as u, i as L, g as i, h as _, f as n, j as o, U as s, b as m, c, k as U, m as y, o as a, r as t } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { UmbConditionBase as d } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CONTENT_SECTION_ALIAS as b } from "@umbraco-cms/backoffice/content";
import { UMB_SECTION_ALIAS_CONDITION_ALIAS as I } from "@umbraco-cms/backoffice/section";
import { UMB_COLLECTION_ALIAS_CONDITION as p } from "@umbraco-cms/backoffice/collection";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as C } from "@umbraco-cms/backoffice/workspace";
class E extends d {
  constructor(l, r) {
    super(l, r), this.consumeContext(u, (g) => {
      this.observe(
        g?.moreThanOneLanguage,
        (A) => {
          this.permitted = A ?? !1;
        },
        "observeLanguages"
      );
    });
  }
}
const S = {
  type: "condition",
  name: "Multiple App Languages Condition",
  alias: "Umb.Condition.MultipleAppLanguages",
  api: E
}, k = {
  type: "condition",
  name: "Language User Permission Condition",
  alias: L,
  api: () => import("./language-user-permission.condition-U4wtuAgo.js")
}, T = [
  {
    type: "sectionSidebarApp",
    alias: "Umb.SectionSidebarItem.LanguageSelect",
    name: "App Language Select Section Sidebar Item",
    js: () => import("./app-language-select.element-DrTscH-B.js"),
    weight: 900,
    conditions: [
      {
        alias: I,
        match: b
      },
      {
        alias: "Umb.Condition.MultipleAppLanguages"
      }
    ]
  }
], f = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Language Collection Action",
    alias: "Umb.CollectionAction.Language.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: "section/settings/workspace/language/create"
    },
    conditions: [
      {
        alias: p,
        match: "Umb.Collection.Language"
      }
    ]
  }
], O = [
  {
    type: "repository",
    alias: i,
    name: "Language Collection Repository",
    api: () => import("./language-collection.repository-GzJNHJc2.js")
  }
], N = [
  {
    type: "collectionView",
    alias: _,
    name: "Language Table Collection View",
    js: () => import("./language-table-collection-view.element-BjuApPos.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: p,
        match: "Umb.Collection.Language"
      }
    ]
  }
], M = [
  {
    type: "collection",
    kind: "default",
    alias: n,
    name: "Language Collection",
    meta: {
      repositoryAlias: i
    }
  },
  ...f,
  ...O,
  ...N
], G = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Language.Delete",
    name: "Delete Language Entity Action",
    forEntityTypes: [m],
    meta: {
      itemRepositoryAlias: s,
      detailRepositoryAlias: o
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Language.Create",
    name: "Create Language Entity Action",
    weight: 1200,
    api: () => import("./language-create-entity-action-BW_M0vV5.js"),
    forEntityTypes: [c],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  }
], R = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.AppLanguage",
    name: "App Language Context",
    api: () => import("./app-language.context-DwkHp6Yy.js")
  }
], h = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Language",
    name: "Language Entity Item Reference",
    element: () => import("./langauge-item-ref.element-CGq7iq2w.js"),
    forEntityTypes: [m]
  }
], w = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Languages",
    name: "Languages Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_languages",
      icon: "icon-globe",
      entityType: "language-root",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Language Menu Structure Workspace Context",
    alias: "Umb.Context.Language.Menu.Structure",
    api: () => import("./language-menu-structure.context-pBUn2ckk.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Language"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Language.Breadcrumb",
    name: "Language Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Language"
      }
    ]
  }
], B = [
  {
    type: "modal",
    alias: "Umb.Modal.LanguagePicker",
    name: "Language Picker Modal",
    js: () => import("./language-picker-modal.element-DtUVBMUU.js")
  }
], W = [
  {
    type: "repository",
    alias: o,
    name: "Language Detail Repository",
    api: () => import("./language-detail.repository-B-DILFxF.js")
  },
  {
    type: "store",
    alias: U,
    name: "Language Detail Store",
    api: () => import("./language-detail.store-CxF6Kou8.js")
  }
], $ = [
  {
    type: "repository",
    alias: s,
    name: "Language Item Repository",
    api: () => import("./language-item.repository-R0RHQ4z3.js")
  },
  {
    type: "itemStore",
    alias: y,
    name: "Language Item Store",
    api: () => import("./language-item.store-Dd-XucOS.js")
  }
], D = [...W, ...$], P = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Language Workspace",
    api: () => import("./language-workspace.context-B6fK_H1C.js"),
    meta: {
      entityType: "language"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Language.Details",
    name: "Language Workspace Details View",
    js: () => import("./language-details-workspace-view.element-C9pHiQMS.js"),
    weight: 90,
    meta: {
      label: "#general_details",
      pathname: "details",
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
    alias: "Umb.WorkspaceAction.Language.Save",
    name: "Save Language Workspace Action",
    api: C,
    meta: {
      look: "primary",
      color: "positive",
      label: "#buttons_save"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  }
], x = [
  {
    type: "workspace",
    kind: "default",
    alias: t,
    name: "Language Root Workspace",
    meta: {
      entityType: c,
      headline: "#treeHeaders_languages"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.LanguageRoot.Collection",
    name: "Webhook Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: n
    },
    conditions: [
      {
        alias: e,
        match: t
      }
    ]
  }
], V = [...P, ...x], Q = [
  ...T,
  ...M,
  ...G,
  ...R,
  ...h,
  ...w,
  ...B,
  ...D,
  ...V,
  S,
  k,
  {
    type: "workspaceContext",
    name: "Document Language Access Workspace Context",
    alias: "Umb.WorkspaceContext.DocumentLanguageAccess",
    api: () => import("./language-access.workspace.context-DMh4d8CW.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Document"
      }
    ]
  }
];
export {
  Q as manifests
};
//# sourceMappingURL=manifests.js.map
