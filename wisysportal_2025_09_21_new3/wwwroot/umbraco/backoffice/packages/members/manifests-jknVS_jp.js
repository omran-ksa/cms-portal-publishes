import { d as A, e as C, c as R, a as M, i as d, f as I, b as f, g as h, j as L, l as y, n as _ } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { UMB_COLLECTION_ALIAS_CONDITION as o } from "@umbraco-cms/backoffice/collection";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as U } from "@umbraco-cms/backoffice/workspace";
import { g as b, q as E, r as $, n as w, f as n, A as G, x as g, B as D, C as N, u, v as Y, y as T, a as W, D as V, E as v } from "./manifests-CRgmLCr5.js";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as S } from "@umbraco-cms/backoffice/repository";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as r, UMB_SECTION_ALIAS_CONDITION_ALIAS as H } from "@umbraco-cms/backoffice/section";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as K } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_USER_PERMISSION_DOCUMENT_PUBLIC_ACCESS as x, UMB_DOCUMENT_ENTITY_TYPE as F } from "@umbraco-cms/backoffice/document";
import { b as O, r as l, l as j, i as q, t as P, h as z, z as J, A as Q, B as X, p as k, q as Z, u as s, v as B, s as ee, c as te, w as c, o as ae } from "./input-member-type.element-Cu1XUSGn.js";
import { U as i, a as m } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import { UMB_SETTINGS_SECTION_ALIAS as ie } from "@umbraco-cms/backoffice/settings";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/content";
const oe = [
  {
    type: "repository",
    alias: A,
    name: "Member Group Collection Repository",
    api: () => import("./member-group-picker-modal.element-I2C8EUhz.js").then((t) => t.u)
  }
], ne = [
  {
    type: "collectionView",
    alias: C,
    name: "Member Group Table Collection View",
    element: () => import("./member-group-table-collection-view.element-Ci5XWFjM.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: o,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], re = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Member Group Collection Action",
    alias: "Umb.CollectionAction.MemberGroup.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: "section/member-management/workspace/member-group/create"
    },
    conditions: [
      {
        alias: o,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], se = [
  {
    type: "collection",
    kind: "default",
    alias: R,
    name: "Member Group Collection",
    meta: {
      repositoryAlias: A
    }
  },
  ...oe,
  ...ne,
  ...re
], me = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MemberGroup.Create",
    name: "Create Member Group Entity Action",
    weight: 1200,
    api: () => import("./create-member-group.action-BBO-V6y3.js"),
    forEntityTypes: [M],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberGroup.Delete",
    name: "Delete Member Group Entity Action ",
    forEntityTypes: [f],
    meta: {
      detailRepositoryAlias: I,
      itemRepositoryAlias: d
    }
  }
], pe = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberGroupPicker",
    name: "Member Group Picker Modal",
    element: () => import("./member-group-picker-modal.element-I2C8EUhz.js").then((t) => t.v)
  }
], p = "Umb.Menu.MemberManagement", ce = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.MemberGroups",
    name: "Member Groups Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_memberGroups",
      icon: "icon-users",
      entityType: M,
      menus: [p]
    }
  }
], le = {
  type: "propertyEditorSchema",
  name: "Member Group Picker",
  alias: "Umbraco.MemberGroupPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberGroupPicker"
  }
}, Me = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MemberGroupPicker",
    name: "Member Group Picker Property Editor UI",
    element: () => import("./property-editor-ui-member-group-picker.element-CHDxZNqK.js"),
    meta: {
      label: "Member Group Picker",
      propertyEditorSchemaAlias: "Umbraco.MemberGroupPicker",
      icon: "icon-users-alt",
      group: "people",
      supportsReadOnly: !0
    }
  },
  le
], ye = [...Me], be = [
  {
    type: "repository",
    alias: I,
    name: "Member Group Detail Repository",
    api: () => import("./member-group-detail.repository-BcV3efI7.js")
  },
  {
    type: "store",
    alias: h,
    name: "Member Group Detail Store",
    api: () => import("./member-group-detail.store-BBoV6r_D.js")
  }
], Ee = [
  {
    type: "repository",
    alias: d,
    name: "Member Group Item Repository",
    api: () => import("./member-group-item.repository-7xMUQD70.js")
  },
  {
    type: "itemStore",
    alias: L,
    name: "Member Group Item Store",
    api: () => import("./member-group-item.store-Bdr8ChdY.js")
  }
], _e = [...be, ...Ee], Te = {
  type: "workspace",
  kind: "routable",
  alias: y,
  name: "MemberGroup Workspace",
  api: () => import("./member-group-workspace.context-ChEuO7hK.js"),
  meta: {
    entityType: f
  }
}, Ae = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberGroup.Save",
    name: "Save Member Group Workspace Action",
    api: U,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: y
      }
    ]
  }
], Re = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Member.Info",
    name: "Member Workspace info View",
    js: () => import("./member-type-workspace-view-info.element-Baqh5SFY.js"),
    weight: 300,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "icon-document"
    },
    conditions: [
      {
        alias: e,
        match: y
      }
    ]
  }
], de = [Te, ...Ae, ...Re], Ie = [
  {
    type: "workspace",
    kind: "default",
    alias: _,
    name: "Member Group Root Workspace View",
    meta: {
      entityType: M,
      headline: "#treeHeaders_memberGroups"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberGroupRoot.Collection",
    name: "Member Group Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: R
    },
    conditions: [
      {
        alias: e,
        match: _
      }
    ]
  }
], fe = [
  ...de,
  ...Ie
], Ue = [
  ...se,
  ...me,
  ...pe,
  ...ce,
  ...ye,
  ..._e,
  ...fe
], ue = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Member.Create",
    name: "Create Member Entity Action",
    weight: 1200,
    api: () => import("./create.action-CjRfCtgY.js"),
    forEntityTypes: [b],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Member.CreateOptions",
    name: "Member Create Options Modal",
    element: () => import("./member-create-options-modal.element-DpJR212j.js")
  }
], Se = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Member.Delete",
    name: "Delete Member Entity Action",
    kind: "deleteWithRelation",
    forEntityTypes: [n],
    meta: {
      itemRepositoryAlias: w,
      detailRepositoryAlias: $,
      referenceRepositoryAlias: E
    }
  },
  ...ue
], Oe = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Member",
    name: "Member Entity Item Reference",
    element: () => import("./member-item-ref.element-IhX3Q50s.js"),
    forEntityTypes: [n]
  },
  ...G
], Pe = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberPicker",
    name: "Member Picker Modal",
    element: () => import("./manifests-CRgmLCr5.js").then((t) => t.F)
  }
], ke = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Members",
    name: "Members Menu Item",
    weight: 200,
    meta: {
      label: "#treeHeaders_member",
      icon: "icon-user",
      entityType: b,
      menus: [p]
    }
  }
], Be = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Member",
    name: "Member Picker Search Result Item",
    element: () => import("./member-picker-search-result-item.element-CxMOk2G0.js"),
    forEntityTypes: [n]
  }
], Ce = {
  type: "propertyEditorSchema",
  name: "Member Picker",
  alias: "Umbraco.MemberPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberPicker"
  }
}, he = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MemberPicker",
    name: "Member Picker Property Editor UI",
    element: () => import("./property-editor-ui-member-picker.element-D_6Cugez.js"),
    meta: {
      label: "Member Picker",
      propertyEditorSchemaAlias: "Umbraco.MemberPicker",
      icon: "icon-user",
      group: "people",
      supportsReadOnly: !0
    }
  },
  Ce
], Le = [...he], $e = [
  {
    type: "repository",
    alias: E,
    name: "Member Reference Repository",
    api: () => import("./member-reference.repository-CQ8jNlvH.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MemberReferenceResponse",
    name: "Member Reference Response Management Api Data Mapping",
    api: () => import("./member-reference-response.management-api.mapping-BEq08Who.js"),
    forDataSource: S,
    forDataModel: "MemberReferenceResponseModel"
  }
], we = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Member References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Member.References",
    conditions: [
      {
        alias: e,
        match: g
      }
    ],
    meta: {
      referenceRepositoryAlias: E
    }
  }
], Ge = [...$e, ...we], ge = [...D, ...N], a = "Umb.Section.Members", De = [
  {
    name: "Member Global Search",
    alias: Y,
    type: "globalSearch",
    weight: 300,
    meta: {
      label: "Members",
      searchProviderAlias: u
    },
    conditions: [
      {
        alias: r,
        match: a
      }
    ]
  }
], Ne = [
  {
    name: "Member Search Provider",
    alias: u,
    type: "searchProvider",
    api: () => import("./member.search-provider-BLggAVf4.js"),
    weight: 300,
    meta: {
      label: "Members"
    }
  },
  {
    name: "Member Search Result Item",
    alias: "Umb.SearchResultItem.Member",
    type: "searchResultItem",
    forEntityTypes: [n]
  },
  ...De
], Ye = [
  {
    type: "workspace",
    kind: "default",
    alias: T,
    name: "Member Root Workspace",
    meta: {
      entityType: b,
      headline: "#treeHeaders_member"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberRoot.Collection",
    name: "Member Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: W
    },
    conditions: [
      {
        alias: e,
        match: T
      }
    ]
  }
], We = [
  ...V,
  ...Ye
], Ve = [
  ...v,
  ...Se,
  ...Oe,
  ...Pe,
  ...ke,
  ...Be,
  ...Le,
  ...Ge,
  ...ge,
  ...Ne,
  ...We
], ve = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.PublicAccess",
    name: "Document Public Access Entity Action",
    weight: 200,
    api: () => import("./public-access.action-BWfkq_s9.js"),
    forEntityTypes: [F],
    meta: {
      icon: "icon-lock",
      label: "#actions_protect",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [x]
      },
      {
        alias: K
      },
      {
        alias: r,
        match: a
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.PublicAccess",
    name: "Public Access Modal",
    element: () => import("./public-access-modal.element-DSE5mlVF.js")
  }
], He = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MemberType.Default",
    name: "Default Member Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-member-type-create-option-action-BlZ997nb.js"),
    forEntityTypes: [i],
    meta: {
      icon: "icon-user",
      label: "#content_membertype"
    }
  }
], Ke = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MemberType.Create",
    name: "Create Member Type Entity Action",
    forEntityTypes: [i]
  },
  ...He
], xe = [
  {
    type: "repository",
    alias: O,
    name: "Duplicate Member Type Repository",
    api: () => import("./member-type-duplicate.repository-DbrWkCHu.js")
  }
], Fe = [
  {
    type: "entityAction",
    kind: "duplicate",
    alias: "Umb.EntityAction.MemberType.Duplicate",
    name: "Duplicate Member Type Entity Action",
    forEntityTypes: [m],
    meta: {
      duplicateRepositoryAlias: O,
      treeRepositoryAlias: l
    }
  },
  ...xe
], je = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberType.Delete",
    name: "Delete Member Type Entity Action",
    forEntityTypes: [m],
    meta: {
      detailRepositoryAlias: q,
      itemRepositoryAlias: j
    }
  },
  ...Ke,
  ...Fe
], qe = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MemberType.Root",
    name: "Member Type Root Workspace",
    meta: {
      entityType: i,
      headline: "#treeHeaders_memberTypes"
    }
  }
], ze = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.MemberTypes",
    name: "Member Type Menu Item",
    weight: 700,
    meta: {
      label: "Member Types",
      treeAlias: P,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Member Type Menu Structure Workspace Context",
    alias: "Umb.Context.MemberType.Menu.Structure",
    api: () => import("./member-type-menu-structure.context-4JHp9BUc.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.MemberType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.MemberType.Breadcrumb",
    name: "Member Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.MemberType"
      }
    ]
  }
], Je = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MemberTypePropertyTypeReferenceResponse",
    name: "Member Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./member-type-property-type-reference-response.management-api.mapping-B5Ai4JbF.js"),
    forDataSource: S,
    forDataModel: "MemberTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.MemberTypePropertyType",
    name: "Member Type Property Type Entity Item Reference",
    element: () => import("./member-type-property-type-item-ref.element-DqAzSdiS.js"),
    forEntityTypes: [z]
  }
], Qe = [...J, ...Q, ...X], Xe = [
  {
    name: "Member Type Global Search",
    alias: Z,
    type: "globalSearch",
    weight: 200,
    meta: {
      label: "Member Types",
      searchProviderAlias: k
    },
    conditions: [
      {
        alias: r,
        match: ie
      }
    ]
  }
], Ze = [
  {
    name: "Member Type Search Provider",
    alias: k,
    type: "searchProvider",
    api: () => import("./member-type.search-provider-CYMtq5BT.js"),
    weight: 200,
    meta: {
      label: "Member Types"
    }
  },
  {
    name: "Member Type Search Result Item",
    alias: "Umb.SearchResultItem.MemberType",
    type: "searchResultItem",
    forEntityTypes: [m]
  },
  ...Xe
], et = [
  {
    type: "collectionAction",
    kind: "create",
    alias: "Umb.CollectionAction.MemberTypeTreeItemChildren.Create",
    name: "Member Type Tree Item Children Collection Create Action",
    conditions: [
      {
        alias: o,
        match: s
      }
    ]
  }
], tt = [
  {
    type: "repository",
    alias: B,
    name: "Member Type Tree Item Children Collection Repository",
    api: () => import("./member-type-tree-item-children-collection.repository-CqHkUjNN.js")
  }
], at = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.MemberType.TreeItem.Table",
    name: "Member Type Tree Item Table Collection View",
    element: () => import("./member-type-tree-item-table-collection-view.element-Cq-t8Jmv.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: o,
        match: s
      }
    ]
  }
], it = [
  {
    type: "collection",
    kind: "default",
    alias: s,
    name: "Member Type Tree Item Children Collection",
    meta: {
      repositoryAlias: B
    }
  },
  ...et,
  ...tt,
  ...at
], ot = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MemberType.Tree.ReloadChildrenOf",
    name: "Reload Member Type Tree Item Children Entity Action",
    forEntityTypes: [i]
  }
], nt = [...it, ...ot], rt = [
  {
    type: "repository",
    alias: l,
    name: "Member Type Tree Repository",
    api: () => import("./member-type-tree.repository--_EfxIxG.js")
  },
  {
    type: "treeStore",
    alias: ee,
    name: "Member Type Tree Store",
    api: () => import("./member-type-tree.store-Cof8wqtJ.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: P,
    name: "Member Type Tree",
    meta: {
      repositoryAlias: l
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MemberType",
    name: "Member Type Tree Item",
    forEntityTypes: [i, m]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberType.TreeItemChildrenCollection",
    name: "Member Type Tree Item Children Collection Workspace View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      collectionAlias: s
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [te]
      }
    ]
  },
  ...nt
], st = [
  {
    type: "workspace",
    kind: "routable",
    alias: c,
    name: "Member Type Workspace",
    api: () => import("./member-type-workspace.context-CeRdPAtz.js"),
    meta: {
      entityType: "member-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.MemberType.Design",
    name: "Member Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      compositionRepositoryAlias: ae
    },
    conditions: [
      {
        alias: e,
        match: c
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberType.Save",
    name: "Save Member Type Workspace Action",
    api: U,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: c
      }
    ]
  }
], mt = [
  ...je,
  ...qe,
  ...ze,
  ...Je,
  ...Qe,
  ...Ze,
  ...rt,
  ...st
], pt = [
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarApp.Menu.MemberManagement",
    name: "Member Management Menu Sidebar App",
    weight: 100,
    meta: {
      label: "#treeHeaders_member",
      menu: p
    },
    conditions: [
      {
        alias: H,
        match: a
      }
    ]
  }
], ct = [
  {
    type: "menu",
    alias: p,
    name: "Member Management Menu"
  }
], lt = {
  type: "section",
  alias: a,
  name: "Members Section",
  weight: 500,
  meta: {
    label: "#sections_member",
    pathname: "member-management"
  },
  conditions: [
    {
      alias: r,
      match: a
    }
  ]
}, Mt = [
  lt,
  ...pt,
  ...ct
], Bt = [
  ...Ue,
  ...Ve,
  ...ve,
  ...mt,
  ...Mt
];
export {
  a as U,
  Bt as m
};
//# sourceMappingURL=manifests-jknVS_jp.js.map
