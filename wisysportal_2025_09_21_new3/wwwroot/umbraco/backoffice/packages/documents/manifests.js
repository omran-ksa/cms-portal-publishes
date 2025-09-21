import { UMB_CONTENT_SECTION_ALIAS as y, UMB_WORKSPACE_HAS_CONTENT_COLLECTION_CONDITION_ALIAS as De, UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as Ue } from "@umbraco-cms/backoffice/content";
import { UMB_SECTION_ALIAS_CONDITION_ALIAS as F, UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as L } from "@umbraco-cms/backoffice/section";
import { U as D, b as c, e as H, n as g, l as N, a as R, f as x, i as K, j as de, g as Ae, p as k, q as Re, s as v, m as Oe, u as B } from "./paths-BF32ZUyU.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import { UMB_DOCUMENT_ROOT_ENTITY_TYPE as Ie, UMB_CONTENT_MENU_ALIAS as fe } from "@umbraco-cms/backoffice/document";
import "@umbraco-cms/backoffice/resources";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as U } from "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/notification";
import { UMB_WORKSPACE_CONDITION_ALIAS as t, UmbSubmitWorkspaceAction as O, UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS as $ } from "@umbraco-cms/backoffice/workspace";
import { Q as n, X as G, Y as be, d as Me, T as l, ar as q, e, R as z, l as j, ay as J, _ as Se, av as w, aE as Ce, $ as X, aw as I, U as Y, b as Q, a2 as Z, ax as ee, D as p, a1 as Pe, as as te, aF as Be, aq as _, C as T, P as ie, a3 as ne, a4 as oe, a5 as Ne, aG as ke, B as E, aa as he, a9 as Le, z as W, S as f, ab as ge, ac as $e, au as b, ad as we, ae as Ye, af as u, w as We, J as M, W as ve, ai as ae, ag as se, ah as Ve, aj as Fe, aA as me, ak as He, al as xe, V as re, am as Ke, an as Ge, ao as qe, aB as ze, ap as je, at as Je, az as Xe, aH as Qe, I as Ze, y as et, G as tt, c as V, H as it, aI as nt, aJ as ot } from "./manifests-Z5g9mgXG.js";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/class-api";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as i, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as ce } from "@umbraco-cms/backoffice/recycle-bin";
import "@umbraco-cms/backoffice/tree";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as at } from "@umbraco-cms/backoffice/relations";
import { UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS as st } from "@umbraco-cms/backoffice/entity-action";
import { UMB_BLOCK_WORKSPACE_ALIAS as mt } from "@umbraco-cms/backoffice/block";
import { r as d, o as m, n as a, b as o, A as pe, H as S, U as A, x as le, y as rt, z as ct, p as ye, u as ue, a as pt, D as lt, E as yt, C as _e, t as Te, F as ut, I as _t, s as h, L as C, M as Ee, G as Tt, N as Et, q as r } from "./constants-D9L2jSGX.js";
import { UMB_SETTINGS_SECTION_ALIAS as Dt } from "@umbraco-cms/backoffice/settings";
const Ut = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.RedirectManagement",
    name: "Redirect Management Dashboard",
    element: () => import("./dashboard-redirect-management.element-BG97PMP5.js"),
    weight: 10,
    meta: {
      label: "#dashboardTabs_contentRedirectManager",
      pathname: "redirect-management"
    },
    conditions: [
      {
        alias: F,
        match: y
      }
    ]
  }
], dt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentBlueprint.Create",
    name: "Document Blueprint Options Create Entity Action",
    weight: 1200,
    api: () => import("./create.action-ttJ1WVZm.js"),
    forEntityTypes: [D, c],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.DocumentBlueprintOptionsCreate",
    name: "Document Blueprint Options Create Modal",
    element: () => import("./document-blueprint-options-create-modal.element-RjYkldO0.js")
  }
], At = {
  type: "repository",
  alias: H,
  name: "Move Document Blueprint Repository",
  api: () => import("./document-blueprint-move.repository-CnJWcCQb.js")
}, Rt = [At], Ot = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentBlueprint.MoveTo",
    name: "Move Document Blueprint Entity Action",
    forEntityTypes: [R],
    meta: {
      treeRepositoryAlias: N,
      moveRepositoryAlias: H,
      treeAlias: g,
      foldersOnly: !0
    }
  },
  ...Rt
], It = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentBlueprintItem.Delete",
    name: "Delete Document Blueprint Item Entity Action",
    forEntityTypes: [R],
    meta: {
      detailRepositoryAlias: K,
      itemRepositoryAlias: x
    }
  },
  ...dt,
  ...Ot
], ft = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentBlueprints",
    name: "Document Blueprints Menu Item",
    weight: 100,
    meta: {
      treeAlias: g,
      label: "#treeHeaders_contentBlueprints",
      menus: ["Umb.Menu.StructureSettings"]
    }
  }
], bt = [
  {
    type: "repository",
    alias: K,
    name: "Document Blueprint Detail Repository",
    api: () => import("./document-blueprint-detail.repository-v6KhCqYg.js")
  },
  {
    type: "store",
    alias: de,
    name: "Document Blueprint Detail Store",
    api: () => import("./document-blueprint-detail.store-Ctc14hsK.js")
  }
], Mt = [
  {
    type: "repository",
    alias: x,
    name: "Document Blueprint Item Repository",
    api: () => import("./document-blueprint-item.repository-DnCe4qgh.js")
  },
  {
    type: "itemStore",
    alias: Ae,
    name: "Document Blueprint Item Store",
    api: () => import("./document-blueprint-item.store-D44gA2EQ.js")
  }
], St = [...bt, ...Mt], Ct = [
  {
    type: "repository",
    alias: k,
    name: "Document Blueprint Folder Repository",
    api: () => import("./document-blueprint-folder.repository-Dggs5KIG.js")
  },
  {
    type: "store",
    alias: Re,
    name: "Document Blueprint Folder Store",
    api: () => import("./document-blueprint-folder.store-B5NoWDzi.js")
  }
], Pt = [
  {
    type: "workspace",
    kind: "routable",
    alias: v,
    name: "Document Blueprint Folder Workspace",
    api: () => import("./document-blueprint-folder-workspace.context-DrMeX8a1.js"),
    meta: {
      entityType: c
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Folder.Submit",
    name: "Submit Document Blueprint Folder Workspace Action",
    api: O,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: v
      }
    ]
  }
], Bt = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Rename",
    name: "Rename Document Blueprint Folder Entity Action",
    forEntityTypes: [c],
    meta: {
      folderRepositoryAlias: k
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Delete",
    name: "Delete Document Blueprint Folder Entity Action",
    forEntityTypes: [c],
    meta: {
      folderRepositoryAlias: k
    }
  },
  ...Ct,
  ...Pt
], Nt = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentBlueprint.Tree.ReloadChildrenOf",
    name: "Reload Document Blueprint Tree Item Children Entity Action",
    forEntityTypes: [D, c],
    meta: {}
  }
], kt = [
  {
    type: "repository",
    alias: N,
    name: "Document Blueprint Tree Repository",
    api: () => import("./document-blueprint-tree.repository-BMaFgzPh.js")
  },
  {
    type: "treeStore",
    alias: Oe,
    name: "Document Blueprint Tree Store",
    api: () => import("./document-blueprint-tree.store-6h2voZ4z.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: g,
    name: "Document Blueprints Tree",
    meta: {
      repositoryAlias: N
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentBlueprint",
    name: "Document Blueprint Tree Item",
    forEntityTypes: [
      D,
      R,
      c
    ]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DocumentBlueprint.Root",
    name: "Document Blueprint Root Workspace",
    meta: {
      entityType: D,
      headline: "#treeHeaders_contentBlueprints"
    }
  },
  ...Nt,
  ...Bt
], ht = [
  {
    type: "workspace",
    kind: "routable",
    alias: B,
    name: "Document Blueprint Workspace",
    api: () => import("./document-blueprint-workspace.context-CUNmuG1N.js"),
    meta: {
      entityType: R
    }
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.DocumentBlueprint.Edit",
    name: "Document Blueprint Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "document"
    },
    conditions: [
      {
        alias: t,
        match: B
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: O,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: B
      }
    ]
  }
], Lt = [
  ...It,
  ...ft,
  ...St,
  ...kt,
  ...ht
], gt = [
  {
    type: "workspaceInfoApp",
    name: "Document History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.History",
    element: () => import("./document-history-workspace-info-app.element-3TCBdCzD.js"),
    weight: 80,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], $t = [...gt], wt = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Document Collection Action",
    alias: "Umb.CollectionAction.Document.Create",
    element: () => import("./create-document-collection-action.element-CTmLcMa2.js"),
    weight: 100,
    meta: {
      label: "#general_create"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  }
], Yt = [
  {
    type: "repository",
    alias: G,
    name: "Document Collection Repository",
    api: () => import("./document-collection.repository-DKutfAZH.js")
  }
], Wt = [
  {
    type: "collectionView",
    alias: be,
    name: "Document Grid Collection View",
    element: () => import("./document-grid-collection-view.element-CZej2Nat.js"),
    weight: 200,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  },
  {
    type: "collectionView",
    alias: Me,
    name: "Document Table Collection View",
    element: () => import("./document-table-collection-view.element-Dz7jSXJD.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  }
], vt = [
  {
    type: "collection",
    alias: l,
    name: "Document Collection",
    api: () => import("./document-collection.context-CM6QYKq4.js"),
    element: () => import("./document-collection.element-DnGxM0Wz.js"),
    meta: {
      repositoryAlias: G
    }
  },
  ...wt,
  ...Yt,
  ...Wt
], Vt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CreateBlueprint",
    name: "Create Document Blueprint Entity Action",
    weight: 1e3,
    api: () => import("./create-blueprint.action-R_HvXpB9.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-blueprint",
      label: "#actions_createblueprint",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [q]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.CreateBlueprint",
    name: "Create Blueprint Modal",
    element: () => import("./create-blueprint-modal.element-B4spslKT.js")
  }
], Ft = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Create",
    name: "Create Document Entity Action",
    weight: 1200,
    api: () => import("./create.action-CN4Q_8-9.js"),
    forEntityTypes: [j, e],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [z]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.Document.CreateOptions",
    name: "Document Create Options Modal",
    element: () => import("./document-create-options-modal.element-BzwYRFEt.js")
  }
], Ht = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CultureAndHostnames",
    name: "Culture And Hostnames Document Entity Action",
    weight: 400,
    api: () => import("./culture-and-hostnames.action-BnXMwidd.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-home",
      label: "#actions_assigndomain",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [J]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.CultureAndHostnames",
    name: "Culture And Hostnames Modal",
    element: () => import("./culture-and-hostnames-modal.element-DgqNE89K.js").then((P) => P.c)
  }
], xt = [
  {
    type: "repository",
    alias: Se,
    name: "Duplicate Document Repository",
    api: () => import("./document-duplicate.repository-Cz6LQokO.js")
  }
], Kt = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.Document.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [e],
    api: () => import("./duplicate-document.action-Cbod6IRM.js"),
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [w]
      },
      {
        alias: i
      }
    ]
  },
  ...xt,
  ...Ce
], Gt = [
  {
    type: "repository",
    alias: X,
    name: "Move Document Repository",
    api: () => import("./document-move.repository-Co8XfLpx.js")
  }
], qt = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Document.MoveTo",
    name: "Move Document Entity Action",
    forEntityTypes: [e],
    meta: {
      treeRepositoryAlias: Q,
      moveRepositoryAlias: X,
      treeAlias: Y
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [I]
      },
      {
        alias: i
      }
    ]
  },
  ...Gt
], zt = [
  {
    type: "repository",
    alias: Z,
    name: "Sort Children Of Document Repository",
    api: () => import("./sort-children-of.repository-B6_m1pd9.js")
  }
], jt = [
  ...zt,
  {
    type: "entityAction",
    kind: "sortChildrenOfContent",
    alias: "Umb.EntityAction.Document.SortChildrenOf",
    name: "Sort Children Of Document Entity Action",
    forEntityTypes: [j, e],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: Z,
      treeRepositoryAlias: Q,
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [ee]
      },
      {
        alias: i
      }
    ]
  }
], Jt = [
  {
    type: "repository",
    alias: Pe,
    name: "Document Notifications Repository",
    api: () => import("./document-notifications.repository-Crs2B9Ne.js")
  }
], Xt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Notifications",
    name: "Notifications",
    weight: 100,
    api: () => import("./document-notifications.action-gkhD3Va6.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-megaphone",
      label: "#actions_notify",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [te]
      },
      {
        alias: i
      }
    ]
  }
], Qt = [...Xt, ...Be, ...Jt], Zt = [
  {
    type: "entityAction",
    kind: "deleteWithRelation",
    alias: "Umb.EntityAction.Document.Delete",
    name: "Delete Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: ie,
      referenceRepositoryAlias: T
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      },
      {
        alias: ce
      }
    ]
  }
], ei = [
  ...Vt,
  ...Ft,
  ...Ht,
  ...Kt,
  ...qt,
  ...jt,
  ...Zt,
  ...Qt
], ti = [
  {
    type: "repository",
    alias: ne,
    name: "Bulk Duplicate Media Repository",
    api: () => import("./duplicate-to.repository-DAADCcTm.js")
  }
], ii = [
  {
    type: "entityBulkAction",
    kind: "duplicateTo",
    alias: "Umb.EntityBulkAction.Document.DuplicateTo",
    name: "Duplicate Document Entity Bulk Action",
    weight: 30,
    forEntityTypes: [e],
    meta: {
      bulkDuplicateRepositoryAlias: ne,
      treeAlias: Y
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [w]
      }
    ]
  },
  ...ti
], ni = [
  {
    type: "repository",
    alias: oe,
    name: "Bulk Move Document Repository",
    api: () => import("./move-to.repository-CHGd2CBT.js")
  }
], oi = [
  {
    type: "entityBulkAction",
    kind: "moveTo",
    alias: "Umb.EntityBulkAction.Document.MoveTo",
    name: "Move Document Entity Bulk Action",
    weight: 20,
    forEntityTypes: [e],
    meta: {
      bulkMoveRepositoryAlias: oe,
      treeAlias: Y
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [I]
      }
    ]
  },
  ...ni
], ai = [...ii, ...oi], si = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.DocumentConfiguration",
    name: "Document Configuration Context",
    api: () => import("./document-configuration.context-Bz7FvH_D.js")
  }
], mi = [
  {
    type: "repository",
    alias: p,
    name: "Document Item Repository",
    api: () => import("./document-item.repository-BR1OpOAk.js")
  },
  {
    type: "itemStore",
    alias: Ne,
    name: "Document Item Store",
    api: () => import("./document-item.store-BI9B0EMY.js")
  }
], ri = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Document",
    name: "Document Entity Item Reference",
    element: () => import("./document-item-ref.element-CyyNw00l.js"),
    forEntityTypes: [e]
  },
  ...mi
], ci = [ke], pi = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Document",
    name: "Document Picker Search Result Item",
    element: () => import("./document-picker-search-result-item.element-DaWo3iMs.js"),
    forEntityTypes: [e]
  }
], li = {
  type: "propertyEditorSchema",
  name: "Content Picker",
  alias: "Umbraco.ContentPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.DocumentPicker",
    settings: {
      properties: [
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore user start nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, yi = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.DocumentPicker",
    name: "Document Picker Property Editor UI",
    element: () => import("./property-editor-ui-document-picker.element-D1kjWuNe.js"),
    meta: {
      label: "Document Picker",
      propertyEditorSchemaAlias: "Umbraco.ContentPicker",
      icon: "icon-document",
      group: "pickers",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "startNodeId",
            label: "Start node",
            description: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.DocumentPicker",
            config: [
              {
                alias: "validationLimit",
                value: { min: 0, max: 1 }
              }
            ]
          }
        ]
      }
    }
  },
  li
], ui = [...yi], _i = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Publish",
    name: "Publish Document Entity Action",
    weight: 600,
    api: () => import("./publish.action-CtXAZwjH.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_publish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [E]
      },
      {
        alias: i
      }
    ]
  }
], Ti = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Publish",
    name: "Publish Document Entity Bulk Action",
    weight: 50,
    api: () => import("./publish.bulk-action-CmRJjF3I.js"),
    meta: {
      icon: "icon-globe",
      label: "#actions_publish"
    },
    forEntityTypes: [e],
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [E]
      }
    ]
  }
], Ei = [
  {
    type: "modal",
    alias: he,
    name: "Document Publish Modal",
    element: () => import("./document-publish-modal.element-BNzliI_Y.js")
  }
], Di = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPublish",
    name: "Save And Publish Document Workspace Action",
    weight: 70,
    api: () => import("./save-and-publish.action-w01lmZM0.js"),
    meta: {
      label: "#buttons_saveAndPublish",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  }
], Ui = [
  ..._i,
  ...Ti,
  ...Ei,
  ...Di
], di = [
  {
    type: "modal",
    alias: Le,
    name: "Document Publish With Descendants Modal",
    element: () => import("./document-publish-with-descendants-modal.element-BHe7VdlT.js")
  }
], Ai = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.PublishWithDescendants",
    name: "Publish with descendants",
    weight: 10,
    api: () => import("./publish-with-descendants.action-U4_cEQgE.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_publishDescendants",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: f,
        allOf: [W, E]
      },
      {
        alias: i
      },
      {
        alias: $,
        match: !1
      }
    ]
  }
], Ri = [...di, ...Ai], Oi = [
  {
    type: "repository",
    alias: ge,
    name: "Document Publishing Repository",
    api: () => import("./document-publishing.repository-BFL4Yx4p.js")
  }
], Ii = [
  {
    type: "modal",
    alias: $e,
    name: "Document Schedule Modal",
    element: () => import("./document-schedule-modal.element-C4WypZk2.js")
  }
], fi = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.SchedulePublishing",
    name: "Schedule publishing",
    weight: 20,
    api: () => import("./save-and-schedule.action-DSKsWTj4.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_schedulePublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: f,
        allOf: [W, E]
      },
      {
        alias: i
      },
      {
        alias: $,
        match: !1
      }
    ]
  }
], bi = [...Ii, ...fi], Mi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Unpublish",
    name: "Unpublish Document Entity Action",
    weight: 500,
    api: () => import("./unpublish.action-DAQRs3NQ.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_unpublish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [b]
      },
      {
        alias: i
      }
    ]
  }
], Si = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Unpublish",
    name: "Unpublish Document Entity Bulk Action",
    weight: 40,
    api: () => import("./unpublish.bulk-action-BbANaAh5.js"),
    meta: {
      icon: "icon-globe",
      label: "#actions_unpublish"
    },
    forEntityTypes: [e],
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [b]
      }
    ]
  }
], Ci = [
  {
    type: "modal",
    alias: we,
    name: "Document Unpublish Modal",
    element: () => import("./document-unpublish-modal.element-jw6vNL5o.js")
  }
], Pi = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.Unpublish",
    name: "Unpublish",
    weight: 0,
    api: () => import("./unpublish.action-Cyy4QxCD.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#actions_unpublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: f,
        allOf: [b]
      },
      {
        alias: i
      },
      {
        alias: $,
        match: !1
      }
    ]
  }
], Bi = [
  ...Mi,
  ...Si,
  ...Ci,
  ...Pi
], Ni = [
  {
    type: "workspaceContext",
    name: "Document Publishing Workspace Context",
    alias: "Umb.WorkspaceContext.Document.Publishing",
    api: () => import("./document-publishing.workspace-context-8xDv901u.js"),
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], ki = [
  ...Ui,
  ...Ri,
  ...Oi,
  ...bi,
  ...Bi,
  ...Ni
], hi = [
  {
    type: "repository",
    alias: Ye,
    name: "Bulk Trash Document Repository",
    api: () => import("./trash.repository-C5KL4UkK.js")
  }
], Li = [
  {
    type: "entityBulkAction",
    kind: at,
    alias: "Umb.EntityBulkAction.Document.Trash",
    name: "Trash Document Entity Bulk Action",
    weight: 10,
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: u,
      referenceRepositoryAlias: T
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      }
    ]
  },
  ...hi
], gi = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Document.RecycleBin.Trash",
    name: "Trash Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: u,
      referenceRepositoryAlias: T
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    alias: "Umb.EntityAction.Document.RecycleBin.Restore",
    name: "Restore Document From Recycle Bin Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: u,
      pickerModal: We
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [I]
      },
      {
        alias: ce
      }
    ]
  },
  {
    type: "entityAction",
    kind: "emptyRecycleBin",
    alias: "Umb.EntityAction.Document.RecycleBin.Empty",
    name: "Empty Document Recycle Bin Entity Action",
    forEntityTypes: [M],
    meta: {
      recycleBinRepositoryAlias: u
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      },
      {
        alias: st
      }
    ]
  },
  ...Li
], $i = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Document.RecycleBin",
    name: "Document Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: ae,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [ve]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin"
      }
    ]
  }
], wi = [
  {
    type: "repository",
    alias: u,
    name: "Document Recycle Bin Repository",
    api: () => import("./document-recycle-bin.repository-DffgP1i2.js")
  }
], Yi = [
  {
    type: "repository",
    alias: se,
    name: "Document Recycle Bin Tree Repository",
    api: () => import("./document-recycle-bin-tree.repository-CTKNSl93.js")
  },
  {
    type: "treeStore",
    alias: Ve,
    name: "Document Recycle Bin Tree Store",
    api: () => import("./document-recycle-bin-tree.store-MUGdveUC.js")
  }
], Wi = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Document Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [M]
  }
], vi = [
  {
    type: "treeItem",
    kind: "recycleBin",
    alias: "Umb.TreeItem.Document.RecycleBin",
    name: "Document Recycle Bin Tree Item",
    forEntityTypes: [M],
    meta: {
      supportedEntityTypes: [e]
    }
  }
], Vi = [
  {
    type: "tree",
    kind: "default",
    alias: ae,
    name: "Document Recycle Bin Tree",
    meta: {
      repositoryAlias: se
    }
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Document.RecycleBin.Root",
    name: "Document Recycle Bin Root Workspace",
    meta: {
      entityType: M,
      headline: "#general_recycleBin"
    }
  },
  ...Yi,
  ...Wi,
  ...vi
], Fi = [
  {
    type: "condition",
    name: "Allow Document Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin",
    api: () => import("./allow-document-recycle-bin.condition-BbjBGWsb.js")
  },
  ...gi,
  ...$i,
  ...wi,
  ...Vi
], Hi = [
  {
    type: "repository",
    alias: ie,
    name: "Document Detail Repository",
    api: () => import("./document-detail.repository-B_usySUQ.js")
  },
  {
    type: "store",
    alias: Fe,
    name: "Document Detail Store",
    api: () => import("./document-detail.store-CjHdRwUN.js")
  }
], xi = [...Hi], Ki = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Rollback",
    name: "Rollback Document Entity Action",
    weight: 450,
    api: () => import("./rollback.action-BnJLKiMZ.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-history",
      label: "#actions_rollback",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [me]
      },
      {
        alias: i
      }
    ]
  }
], Gi = [
  {
    type: "modal",
    alias: He,
    name: "Document Rollback Modal",
    element: () => import("./rollback-modal.element-DoQP40Ne.js")
  }
], qi = [
  {
    type: "repository",
    alias: xe,
    name: "Rollback Repository",
    api: () => import("./rollback.repository-Be4ZtX_9.js")
  }
], zi = [
  ...Ki,
  ...Gi,
  ...qi
], ji = [
  {
    name: "Document Global Search",
    alias: Ke,
    type: "globalSearch",
    weight: 800,
    api: () => import("./document-global-search-nD8a5kJ7.js"),
    meta: {
      label: "Documents",
      searchProviderAlias: re
    },
    conditions: [
      {
        alias: L,
        match: y
      }
    ]
  }
], Ji = [
  {
    name: "Document Search Provider",
    alias: re,
    type: "searchProvider",
    api: () => import("./document.search-provider-Dhven1X5.js"),
    weight: 800,
    meta: {
      label: "Documents"
    }
  },
  {
    name: "Document Search Result Item",
    alias: "Umb.SearchResultItem.Document",
    type: "searchResultItem",
    element: () => import("./document-search-result-item.element-tbl0_RYd.js"),
    forEntityTypes: [e]
  },
  ...ji
], Xi = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Document References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.References",
    conditions: [
      {
        alias: t,
        match: n
      }
    ],
    meta: {
      referenceRepositoryAlias: T
    }
  }
], Qi = [
  {
    type: "repository",
    alias: T,
    name: "Document Reference Repository",
    api: () => import("./document-reference.repository-Bxx8Zz0Z.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentReferenceResponse",
    name: "Document Reference Response Management Api Data Mapping",
    api: () => import("./document-reference-response.management-api.mapping-QvOXf291.js"),
    forDataSource: U,
    forDataModel: "DocumentReferenceResponseModel"
  }
], Zi = [...Xi, ...Qi], en = [
  {
    type: "workspaceInfoApp",
    name: "Document Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.Links",
    element: () => import("./document-links-workspace-info-app.element-DVzY9TtE.js"),
    weight: 100,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], tn = {
  type: "repository",
  alias: Ge,
  name: "Document Url Repository",
  api: () => import("./document-url.repository-scBl9lYM.js")
}, nn = {
  type: "itemStore",
  alias: qe,
  name: "Document Url Store",
  api: () => import("./document-url.store-Dz5TBspd.js")
}, on = [tn, nn], an = [...on, ...en], sn = [
  {
    type: "repository",
    alias: ze,
    name: "Document Permission Repository",
    api: () => import("./document-permission.repository-Dlz2NUte.js")
  }
], mn = [
  {
    type: "condition",
    name: "Document User Permission Condition",
    alias: f,
    api: () => import("./document-user-permission.condition-BkDOsmEj.js")
  }
], rn = [
  {
    type: "entityUserPermission",
    alias: je,
    name: "Read Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Read"],
      label: "#actions_read",
      description: "#actionDescriptions_read"
    }
  },
  {
    type: "entityUserPermission",
    alias: q,
    name: "Create Document Blueprint User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.CreateBlueprint"],
      label: "#actions_createblueprint",
      description: "#actionDescriptions_createblueprint"
    }
  },
  {
    type: "entityUserPermission",
    alias: _,
    name: "Delete Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Delete"],
      label: "#actions_delete",
      description: "#actionDescriptions_delete"
    }
  },
  {
    type: "entityUserPermission",
    alias: z,
    name: "Create Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Create"],
      label: "#actions_create",
      description: "#actionDescriptions_create"
    }
  },
  {
    type: "entityUserPermission",
    alias: te,
    name: "Document Notifications User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Notifications"],
      label: "#actions_notify",
      description: "#actionDescriptions_notify"
    }
  },
  {
    type: "entityUserPermission",
    alias: E,
    name: "Publish Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Publish"],
      label: "#actions_publish",
      description: "#actionDescriptions_publish"
    }
  },
  {
    type: "entityUserPermission",
    alias: Je,
    name: "Document Permissions User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Permissions"],
      label: "#actions_setPermissions",
      description: "#actionDescriptions_rights"
    }
  },
  {
    type: "entityUserPermission",
    alias: b,
    name: "Unpublish Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Unpublish"],
      label: "#actions_unpublish",
      description: "#actionDescriptions_unpublish"
    }
  },
  {
    type: "entityUserPermission",
    alias: W,
    name: "Update Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Update"],
      label: "#actions_update",
      description: "#actionDescriptions_update"
    }
  },
  {
    type: "entityUserPermission",
    alias: w,
    name: "Duplicate Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Duplicate"],
      label: "#actions_copy",
      description: "#actionDescriptions_copy",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: I,
    name: "Move Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Move"],
      label: "#actions_move",
      description: "#actionDescriptions_move",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: ee,
    name: "Sort Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Sort"],
      label: "#actions_sort",
      description: "#actionDescriptions_sort",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: J,
    name: "Document Culture And Hostnames User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.CultureAndHostnames"],
      label: "#actions_assigndomain",
      description: "#actionDescriptions_assignDomain",
      group: "administration"
    }
  },
  {
    type: "entityUserPermission",
    alias: Xe,
    name: "Document Public Access User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.PublicAccess"],
      label: "#actions_protect",
      description: "#actionDescriptions_protect",
      group: "administration"
    }
  },
  {
    type: "entityUserPermission",
    alias: me,
    name: "Document Rollback User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Rollback"],
      label: "#actions_rollback",
      description: "#actionDescriptions_rollback",
      group: "administration"
    }
  }
], cn = [
  {
    type: "userGranularPermission",
    alias: "Umb.UserGranularPermission.Document",
    name: "Document Granular User Permission",
    weight: 1e3,
    element: () => import("./input-document-granular-user-permission.element-CqyduZOV.js"),
    meta: {
      schemaType: "DocumentPermissionPresentationModel",
      label: "#user_granularRightsLabel",
      description: "{#user_granularRightsDescription}"
    }
  }
], pn = [
  ...sn,
  ...rn,
  ...cn,
  ...mn
], ln = [
  {
    type: "modal",
    alias: "Umb.Modal.DocumentPropertyValueUserPermissionFlow",
    name: "Document Property Value User Permission Flow Modal",
    element: () => import("./document-property-value-permission-flow-modal.element-DrSCrnpe.js")
  },
  ...Qe
], yn = [
  {
    type: "condition",
    name: "Document Property Value User Permission Condition",
    alias: Ze,
    api: () => import("./document-property-value-user-permission.condition-BG7YdZBt.js")
  }
], un = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.To.DocumentPropertyValuePermissionPresentationModel",
    name: "Document Property Value Permission To Management Api Data Mapping",
    api: () => import("./to-server.management-api.mapping-Cv7DOLAt.js"),
    forDataSource: U,
    forDataModel: et
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.From.DocumentPropertyValuePermissionPresentationModel",
    name: "Document Property Value Permission From Management Api Data Mapping",
    api: () => import("./from-server.management-api.mapping-BYVPyprr.js"),
    forDataSource: U,
    forDataModel: "DocumentPropertyValuePermissionPresentationModel"
  }
], _n = [
  {
    type: "workspaceContext",
    name: "Document Property Value User Permission Document Workspace Context",
    alias: "Umb.WorkspaceContext.Document.DocumentPropertyValueUserPermission",
    api: () => import("./document-property-value-user-permission.workspace-context-CoOhGJp3.js"),
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  },
  {
    type: "workspaceContext",
    name: "Document Property Value User Permission Block Workspace Context",
    alias: "Umb.WorkspaceContext.Block.DocumentPropertyValueUserPermission",
    api: () => import("./document-block-property-value-user-permission.workspace-context-CgvuPHe3.js"),
    conditions: [
      {
        alias: t,
        match: mt
      }
    ]
  }
], Tn = [
  {
    type: "entityUserPermission",
    alias: "Umb.EntityUserPermission.Document.PropertyValue.Read",
    name: "Read Document Property Value User Permission",
    forEntityTypes: [V],
    weight: 200,
    meta: {
      verbs: [tt],
      label: "UI Read",
      description: "Allow access to read Document property values in the UI"
    }
  },
  {
    type: "entityUserPermission",
    alias: "Umb.EntityUserPermission.DocumentPropertyValue.Write",
    name: "Write Document Property Value User Permission",
    forEntityTypes: [V],
    weight: 200,
    meta: {
      verbs: [it],
      label: "UI Write",
      description: "Allow access to write Document property values from the UI"
    }
  },
  {
    type: "userGranularPermission",
    alias: "Umb.UserGranularPermission.Document.PropertyValue",
    name: "Document Property Values Granular User Permission",
    weight: 950,
    element: () => import("./input-document-property-value-user-permission.element-BzWYwM0f.js"),
    meta: {
      schemaType: "DocumentPropertyValuePermissionPresentationModel",
      label: "Document Property Values",
      description: "Assign permissions to Document property values"
    }
  },
  ...yn,
  ...un,
  ...ln,
  ..._n
], En = [
  ...pn,
  ...Tn
], Dn = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: () => import("./save.action-BIBXVzwW.js"),
    meta: {
      label: "#buttons_save",
      look: "secondary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPreview",
    name: "Save And Preview Document Workspace Action",
    weight: 90,
    api: () => import("./save-and-preview.action-CS2plqlq.js"),
    meta: {
      label: "#buttons_saveAndPreview"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  }
], Un = [
  {
    type: "workspace",
    kind: "routable",
    alias: n,
    name: "Document Workspace",
    api: () => import("./document-workspace.context-K0x6EfOX.js"),
    meta: {
      entityType: e
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Document.Collection",
    name: "Document Workspace Collection View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: De
      }
    ]
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Document.Edit",
    name: "Document Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "document"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: Ue
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Document.Info",
    name: "Document Workspace Info View",
    element: () => import("./document-workspace-view-info.element-DME7zP7r.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  },
  ...Dn
], dn = [
  ...$t,
  ...vt,
  ...ei,
  ...ai,
  ...si,
  ...ri,
  ...nt,
  ...ci,
  ...pi,
  ...ui,
  ...ki,
  ...Fi,
  ...xi,
  ...zi,
  ...Ji,
  ...Zi,
  ...ot,
  ...an,
  ...En,
  ...Un
], An = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Folder",
    name: "Document Type Folder Entity Create Option Action",
    forEntityTypes: [m, a],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: d
    }
  }
], Rn = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.DocumentType.Create",
    name: "Create Document Type Entity Action",
    weight: 1200,
    forEntityTypes: [
      o,
      m,
      a
    ],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0,
      headline: "#create_createUnder #treeHeaders_documentTypes"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Default",
    name: "Default Document Type Entity Create Option Action",
    weight: 100,
    api: () => import("./default-document-type-create-option-action-DPhV3znj.js"),
    forEntityTypes: [
      o,
      m,
      a
    ],
    meta: {
      icon: "icon-document",
      label: "#create_documentType",
      description: "#create_documentTypeDescription"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.DocumentWithTemplate",
    name: "Document Type with Template Document Type Entity Create Option Action",
    weight: 90,
    api: () => import("./document-type-with-template-create-option-action-DT-Dfy8E.js"),
    forEntityTypes: [
      o,
      m,
      a
    ],
    meta: {
      icon: "icon-document-html",
      label: "#create_documentTypeWithTemplate",
      description: "#create_documentTypeWithTemplateDescription"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.ElementType",
    name: "Element Type Document Type Entity Create Option Action",
    weight: 80,
    api: () => import("./element-type-create-option-action-BwCdhNJj.js"),
    forEntityTypes: [
      o,
      m,
      a
    ],
    meta: {
      icon: "icon-plugin",
      label: "#create_elementType",
      description: "#create_elementTypeDescription"
    }
  },
  ...An
], On = [
  {
    type: "repository",
    alias: pe,
    name: "Move Document Type Repository",
    api: () => import("./document-type-move.repository-Bur1vBeJ.js")
  }
], In = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentType.MoveTo",
    name: "Move Document Type Entity Action",
    forEntityTypes: [o],
    meta: {
      treeRepositoryAlias: A,
      moveRepositoryAlias: pe,
      treeAlias: S,
      foldersOnly: !0
    }
  },
  ...On
], fn = [
  {
    type: "repository",
    alias: le,
    name: "Duplicate Document Type Repository",
    api: () => import("./document-type-duplicate.repository-DiiVWECi.js")
  }
], bn = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DocumentType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [o],
    meta: {
      duplicateRepositoryAlias: le,
      treeAlias: S,
      treeRepositoryAlias: A,
      foldersOnly: !0
    }
  },
  ...fn
], Mn = [
  {
    type: "repository",
    alias: rt,
    name: "Export Document Type Repository",
    api: () => import("./document-type-export.repository-DE_VGxKN.js")
  }
], Sn = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Export",
    name: "Export Document Type Entity Action",
    forEntityTypes: [o],
    api: () => import("./document-type-export.action-DCoGXYa-.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...Mn
], Cn = [
  {
    type: "repository",
    alias: ct,
    name: "Import Document Type Repository",
    api: () => import("./document-type-import.repository-Cc5QCRew.js")
  }
], Pn = [
  {
    type: "modal",
    alias: "Umb.Modal.DocumentType.Import",
    name: "Document Type Import Modal",
    element: () => import("./document-type-import-modal.element-C_zOElEL.js")
  }
], Bn = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Import",
    name: "Export Document Type Entity Action",
    forEntityTypes: [m],
    api: () => import("./document-type-import.action-B8n1UdPS.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...Cn,
  ...Pn
], Nn = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentType.Delete",
    name: "Delete Document-Type Entity Action",
    forEntityTypes: [o],
    meta: {
      itemRepositoryAlias: ue,
      detailRepositoryAlias: ye,
      additionalOptions: !0
    }
  },
  ...Rn,
  ...In,
  ...bn,
  ...Sn,
  ...Bn
], kn = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentTypes",
    name: "Document Types Menu Item",
    weight: 900,
    meta: {
      treeAlias: S,
      label: "Document Types",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Document Type Menu Structure Workspace Context",
    alias: "Umb.Context.DocumentType.Menu.Structure",
    api: () => import("./document-type-menu-structure.context-CwTDc8TP.js"),
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DocumentType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.DocumentType.Breadcrumb",
    name: "Document Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DocumentType"
      }
    ]
  }
], hn = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.DocumentType",
    name: "Document Type Picker Search Result Item",
    element: () => import("./document-type-picker-search-result-item.element-4R6o-5UA.js"),
    forEntityTypes: [o]
  }
], Ln = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.DocumentTypePicker",
  name: "Document Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-document-type-picker.element-BfyjgwGy.js"),
  meta: {
    label: "Document Type Picker",
    icon: "icon-document-dashed-line",
    group: "advanced",
    supportsReadOnly: !0,
    settings: {
      properties: [
        {
          alias: "onlyPickElementTypes",
          label: "Only Element Types",
          description: "Limit to only pick Element Types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, gn = [Ln], $n = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentTypePropertyTypeReferenceResponse",
    name: "Document Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./document-type-property-type-reference-response.management-api.mapping-C7x6W2lK.js"),
    forDataSource: U,
    forDataModel: "DocumentTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.DocumentTypePropertyType",
    name: "Document Type Property Type Entity Item Reference",
    element: () => import("./document-type-property-type-item-ref.element-BHqImEIM.js"),
    forEntityTypes: [pt]
  }
], wn = [
  {
    type: "repository",
    alias: ye,
    name: "Document Types Repository",
    api: () => import("./document-type-detail.repository-CVk0rTOt.js").then((P) => P.d)
  },
  {
    type: "store",
    alias: lt,
    name: "Document Type Store",
    api: () => import("./document-type-detail.store-CK4xnkjB.js")
  }
], Yn = [
  {
    type: "repository",
    alias: ue,
    name: "Document Type Item Repository",
    api: () => import("./document-type-item.repository-CK9-9XMP.js")
  },
  {
    type: "itemStore",
    alias: yt,
    name: "Document Type Item Store",
    api: () => import("./document-type-item.store-8gSbncS9.js")
  }
], Wn = [
  {
    type: "repository",
    alias: _e,
    name: "Document Type Composition Repository",
    api: () => import("./document-type-composition.repository-BLbQD94J.js")
  }
], vn = [...wn, ...Yn, ...Wn], Vn = [
  {
    name: "Document Type Global Search",
    alias: ut,
    type: "globalSearch",
    weight: 600,
    meta: {
      label: "Document Types",
      searchProviderAlias: Te
    },
    conditions: [
      {
        alias: L,
        match: Dt
      }
    ]
  }
], Fn = [
  {
    name: "Document Type Search Provider",
    alias: Te,
    type: "searchProvider",
    api: () => import("./document-type.search-provider-BomHt9t7.js"),
    weight: 600,
    meta: {
      label: "Document Types"
    }
  },
  {
    name: "Document Type Search Result Item",
    alias: "Umb.SearchResultItem.DocumentType",
    type: "searchResultItem",
    element: () => import("./document-type-search-result-item.element-CDCu6XTV.js"),
    forEntityTypes: [o]
  },
  ...Vn
], Hn = [
  {
    type: "repository",
    alias: d,
    name: "Document Type Folder Repository",
    api: () => import("./document-type-folder.repository-Bzu-6mUl.js")
  },
  {
    type: "store",
    alias: _t,
    name: "Document Type Folder Store",
    api: () => import("./document-type-folder.store-WdZCvQ-J.js")
  }
], xn = [
  {
    type: "workspace",
    kind: "routable",
    alias: h,
    name: "Document Type Folder Workspace",
    api: () => import("./document-type-folder-workspace.context-BoIItznS.js"),
    meta: {
      entityType: a
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Folder.Submit",
    name: "Submit Document Type Folder Workspace Action",
    api: O,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: h
      }
    ]
  }
], Kn = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentType.Folder.Rename",
    name: "Rename Document Type Folder Entity Action",
    forEntityTypes: [a],
    meta: {
      folderRepositoryAlias: d
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentType.Folder.Delete",
    name: "Delete Document Type Folder Entity Action",
    forEntityTypes: [a],
    meta: {
      folderRepositoryAlias: d
    }
  },
  ...Hn,
  ...xn
], Gn = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Document Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DocumentTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: C
      }
    ]
  }
], qn = [
  {
    type: "repository",
    alias: Ee,
    name: "Document Type Tree Item Children Collection Repository",
    api: () => import("./document-type-tree-item-children-collection.repository-BsQ4-8jx.js")
  }
], zn = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DocumentType.TreeItem.Table",
    name: "Document Type Tree Item Table Collection View",
    element: () => import("./document-type-tree-item-table-collection-view.element-td9veAa7.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: C
      }
    ]
  }
], jn = [
  {
    type: "collection",
    kind: "default",
    alias: C,
    name: "Document Type Tree Item Children Collection",
    meta: {
      repositoryAlias: Ee
    }
  },
  ...Gn,
  ...qn,
  ...zn
], Jn = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.DocumentType.Tree.ReloadChildrenOf",
    name: "Reload Document Type Tree Item Children Entity Action",
    kind: "reloadTreeItemChildren",
    forEntityTypes: [
      m,
      o,
      a
    ]
  }
], Xn = [...jn, ...Jn], Qn = [
  {
    type: "repository",
    alias: A,
    name: "Document Type Tree Repository",
    api: () => import("./document-type-tree.repository-lsJHwcEP.js")
  },
  {
    type: "treeStore",
    alias: Tt,
    name: "Document Type Tree Store",
    api: () => import("./document-type.tree.store-ZLlZwTXD.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: S,
    name: "Document Type Tree",
    meta: {
      repositoryAlias: A
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentType",
    name: "Document Type Tree Item",
    forEntityTypes: [
      m,
      o,
      a
    ]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.DocumentType.TreeItemChildrenCollection",
    name: "Document Type Tree Item Children Collection Workspace View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      collectionAlias: C
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [Et, h]
      }
    ]
  },
  ...Kn,
  ...Xn
], Zn = [
  {
    type: "workspace",
    kind: "routable",
    alias: r,
    name: "Document Type Workspace",
    api: () => import("./document-type-workspace.context-CbCunNQk.js"),
    meta: {
      entityType: "document-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.DocumentType.Design",
    name: "Document Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line",
      compositionRepositoryAlias: _e
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Structure",
    name: "Document Type Workspace Structure View",
    element: () => import("./document-type-workspace-view-structure.element-CuAX-ajI.js"),
    weight: 800,
    meta: {
      label: "#contentTypeEditor_structure",
      pathname: "structure",
      icon: "icon-mindmap"
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Settings",
    name: "Document Type Workspace Settings View",
    element: () => import("./document-type-workspace-view-settings.element-CuXtq6st.js"),
    weight: 600,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Templates",
    name: "Document Type Workspace Templates View",
    element: () => import("./document-type-workspace-view-templates.element-BMZId_af.js"),
    weight: 400,
    meta: {
      label: "#treeHeaders_templates",
      pathname: "templates",
      icon: "icon-layout"
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Save",
    name: "Save Document Type Workspace Action",
    api: O,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  }
], eo = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DocumentType.Root",
    name: "Document Type Root Workspace",
    meta: {
      entityType: m,
      headline: "#treeHeaders_documentTypes"
    }
  }
], to = [...Zn, ...eo], io = [
  ...Nn,
  ...kn,
  ...hn,
  ...gn,
  ...$n,
  ...vn,
  ...Fn,
  ...Qn,
  ...to
], no = [
  {
    type: "section",
    alias: y,
    name: "Content Section",
    weight: 1e3,
    meta: {
      label: "#sections_content",
      pathname: "content"
    },
    conditions: [
      {
        alias: L,
        match: y
      }
    ]
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SidebarMenu.Content",
    name: "Content Sidebar Menu",
    weight: 100,
    meta: {
      label: "#sections_content",
      menu: fe,
      entityType: Ie
    },
    conditions: [
      {
        alias: F,
        match: y
      }
    ]
  }
], Co = [
  ...Ut,
  ...Lt,
  ...dn,
  ...io,
  ...no
];
export {
  Co as manifests
};
//# sourceMappingURL=manifests.js.map
