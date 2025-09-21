import { UMB_SECTION_ALIAS_CONDITION_ALIAS as m, UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as r } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as s } from "@umbraco-cms/backoffice/settings";
import { a as n, U as p, b as l, l as c, n as T, o as E, p as A, e as o, f as _, q as y, r as S } from "./manifests-DcuSN-5b.js";
import { c as t, b as d } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as e } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/tree";
import "@umbraco-cms/backoffice/external/backend-api";
import { g as I, j as u, c as U, q as M, r as b, s as f, t as P } from "./manifests-D4iHZsKm.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/resources";
import { b as O } from "./stylesheet-picker-modal.token-CeSiGQ35.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import "@umbraco-cms/backoffice/id";
import { a, b as i, U as R } from "./entity-CA4W0tlV.js";
import { U as L, c as h, m as k, g as C, h as B } from "./manifests-CU5343Xy.js";
import { f as $, p as w, q as g, o as Y, r as W } from "./partial-view-workspace.context-token-Byx01o9s.js";
import { k as D, d as V, U as N, e as F, f as x, x as H, y as q, z as j } from "./manifests-ZN6xdZ2M.js";
const v = [
  {
    type: "menu",
    alias: "Umb.Menu.Templating",
    name: "Templating Menu"
  },
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarMenu.Templating",
    name: "Templating Section Sidebar Menu",
    weight: 200,
    meta: {
      label: "#treeHeaders_templatingGroup",
      menu: "Umb.Menu.Templating"
    },
    conditions: [
      {
        alias: m,
        match: s
      }
    ]
  }
], G = [
  {
    type: "condition",
    name: "Template Allow Delete Action Condition",
    alias: n,
    api: () => import("./template-allow-delete-action.condition-LL-k9ZfA.js")
  }
], z = [...G], K = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Template.Create",
    name: "Create Template Entity Action",
    weight: 1200,
    api: () => import("./create.action-CDGJniyn.js"),
    forEntityTypes: [t, d],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Template.Delete",
    name: "Delete Template Entity Action",
    forEntityTypes: [t],
    meta: {
      detailRepositoryAlias: l,
      itemRepositoryAlias: p
    },
    conditions: [{ alias: n }]
  }
], Q = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Templates",
    name: "Templates Menu Item",
    weight: 40,
    meta: {
      label: "Templates",
      entityType: "template",
      treeAlias: c,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Template Menu Structure Workspace Context",
    alias: "Umb.Context.Template.Menu.Structure",
    api: () => import("./template-menu-structure.context-CEiLQHBF.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Template"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Template.Breadcrumb",
    name: "Template Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Template"
      }
    ]
  }
], J = [
  {
    type: "modal",
    alias: "Umb.Modal.Template.QueryBuilder",
    name: "Template query builder",
    element: () => import("./query-builder-modal.element-qTGID1LR.js")
  }
], X = [...T, ...E, ...A], Z = [
  {
    name: "Template Global Search",
    alias: _,
    type: "globalSearch",
    weight: 200,
    meta: {
      label: "Templates",
      searchProviderAlias: o
    },
    conditions: [
      {
        alias: r,
        match: s
      }
    ]
  }
], ee = [
  {
    name: "Template Search Provider",
    alias: o,
    type: "searchProvider",
    api: () => import("./template.search-provider-DYB5KjvR.js"),
    weight: 100,
    meta: {
      label: "Templates"
    }
  },
  {
    name: "Template Search Result Item",
    alias: "Umb.SearchResultItem.Template",
    type: "searchResultItem",
    forEntityTypes: [t]
  },
  ...Z
], te = [
  ...z,
  ...K,
  ...Q,
  ...J,
  ...X,
  ...ee,
  ...y,
  ...S
], ae = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Stylesheets",
    name: "Stylesheets Menu Item",
    weight: 20,
    meta: {
      label: "Stylesheets",
      treeAlias: I,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Stylesheet Menu Structure Workspace Context",
    alias: "Umb.Context.Stylesheet.Menu.Structure",
    api: () => import("./stylesheet-menu-structure.context-NHiU-BEq.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Stylesheet"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Stylesheet.Breadcrumb",
    name: "Stylesheet Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Stylesheet"
      }
    ]
  }
], ie = {
  type: "modal",
  alias: "Umb.Modal.Stylesheet.CreateOptions",
  name: "Stylesheet Create Options Modal",
  element: () => import("./stylesheet-create-options-modal.element-DhkjGpj3.js")
}, se = {
  type: "entityAction",
  kind: "create",
  alias: "Umb.EntityAction.Stylesheet.Create",
  name: "Create Stylesheet Entity Action",
  weight: 1200,
  forEntityTypes: [a, i],
  meta: {
    icon: "icon-add",
    label: "#actions_create",
    additionalOptions: !0,
    headline: "#create_createUnder #treeHeaders_documentTypes"
  }
}, ne = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.Stylesheet.Default",
    name: "Default Stylesheet Entity Create Option Action",
    weight: 100,
    api: () => import("./stylesheet-create-option-action-BkQtTTKO.js"),
    forEntityTypes: [a, i],
    meta: {
      icon: "icon-palette",
      label: "#create_newStyleSheetFile"
    }
  },
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.Stylesheet.Folder",
    name: "Stylesheet Folder Entity Create Option Action",
    forEntityTypes: [a, i],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: u
    }
  }
], oe = [ie, se, ...ne], me = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Stylesheet.Delete",
    name: "Delete Stylesheet Entity Action",
    forEntityTypes: [R],
    meta: {
      detailRepositoryAlias: U,
      itemRepositoryAlias: O
    }
  },
  ...oe,
  ...M
], re = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.StylesheetPicker",
  name: "Stylesheet Picker Property Editor UI",
  js: () => import("./property-editor-ui-stylesheet-picker.element-BBNs_pRJ.js"),
  meta: {
    label: "Stylesheet Picker",
    icon: "icon-document",
    group: "common"
  }
}, pe = [re], le = [
  ...b,
  ...ae,
  ...f,
  ...P,
  ...me,
  ...pe
], ce = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.PartialView",
    name: "Partial View Menu Item",
    weight: 40,
    meta: {
      label: "Partial Views",
      treeAlias: $,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Partial View Menu Structure Workspace Context",
    alias: "Umb.Context.PartialView.Menu.Structure",
    api: () => import("./partial-view-menu-structure.context-CD9QJ84h.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.PartialView"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.PartialView.Breadcrumb",
    name: "Partial View Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.PartialView"
      }
    ]
  }
], Te = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.PartialView.CreateOptions",
    name: "Partial View Create Options Entity Action",
    weight: 1200,
    api: () => import("./create.action-7_rtWtIP.js"),
    forEntityTypes: [w, g],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.PartialView.CreateOptions",
    name: "Partial View Create Options Modal",
    element: () => import("./partial-view-create-options-modal.element-ktuNC89_.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.PartialView.CreateFromSnippet",
    name: "Create Partial View From Snippet Modal",
    js: () => import("./create-from-snippet-modal-jmullPcy.js")
  }
], Ee = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.PartialView.Delete",
    name: "Delete Partial View Entity Action",
    forEntityTypes: [Y],
    meta: {
      detailRepositoryAlias: h,
      itemRepositoryAlias: L
    }
  },
  ...Te,
  ...k
], Ae = [
  ...C,
  ...ce,
  ...W,
  ...Ee,
  ...B
], _e = [
  {
    type: "menuItem",
    kind: "tree",
    alias: V,
    name: "Scripts Menu Item",
    weight: 10,
    meta: {
      label: "Scripts",
      treeAlias: D,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Script Menu Structure Workspace Context",
    alias: "Umb.Context.Script.Menu.Structure",
    api: () => import("./script-menu-structure.context-Bbv9WkzO.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Script"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Script.Breadcrumb",
    name: "Script Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Script"
      }
    ]
  }
], ye = [
  {
    type: "repository",
    alias: N,
    name: "Script Item Repository",
    api: () => import("./script-item.repository-Bol9HFad.js")
  },
  {
    type: "itemStore",
    alias: "Umb.ItemStore.Script",
    name: "Script Item Store",
    api: () => import("./script-item.store-B_Fp3Sg6.js")
  }
], Se = [
  {
    type: "repository",
    alias: F,
    name: "Script Detail Repository",
    api: () => import("./script-detail.repository-DGV8HYz6.js")
  },
  {
    type: "store",
    alias: x,
    name: "Script Detail Store",
    api: () => import("./script-detail.store-0EK_InKi.js")
  },
  ...ye
], de = [
  ...H,
  ..._e,
  ...Se,
  ...q,
  ...j
], Ie = [
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingItemPicker",
    name: "Templating Item Picker Modal",
    element: () => import("./templating-item-picker-modal.element-DVIPccZC.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingSectionPicker",
    name: "Templating Section Picker Modal",
    element: () => import("./templating-section-picker-modal.element-Cc34Lc5q.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingPageFieldBuilder",
    name: "Templating Page Field Builder Modal",
    element: () => import("./templating-page-field-builder-modal.element-uWRtSSXU.js")
  }
], De = [
  ...v,
  ...te,
  ...le,
  ...Ae,
  ...Ie,
  ...de
];
export {
  De as manifests
};
//# sourceMappingURL=manifests.js.map
