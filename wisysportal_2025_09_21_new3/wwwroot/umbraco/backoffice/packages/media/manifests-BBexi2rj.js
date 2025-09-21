import { x as o, a as k, b as G, c as K, U as S, d as P, u as I, s as M, e as h, n as l, o as B, f as D, g as A, m as j, l as m, h as E, k as L, i as u, j as q, p as z, q as J, r as Q, t as X, v as Z, w as ee } from "./dropzone.element-B_RDVDVa.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as i, UmbSubmitWorkspaceAction as b } from "@umbraco-cms/backoffice/workspace";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import { p as c, o as t, A as p, F as ie, B as te, D as g } from "./input-upload-field.element-Bje2l26U.js";
import "./media-url.repository-B5RzlWhD.js";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as d, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as w } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as ae } from "@umbraco-cms/backoffice/relations";
import { UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS as oe } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as $ } from "@umbraco-cms/backoffice/repository";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as O, UMB_SECTION_ALIAS_CONDITION_ALIAS as N } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_HAS_CONTENT_COLLECTION_CONDITION_ALIAS as ne, UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as se } from "@umbraco-cms/backoffice/content";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/tree";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/entity-item";
import { n as r, b as a, m as n, f as T, x as Y, F as U, U as _, u as v, v as re, w as pe, r as W, o as F, a as me, C as le, D as ce, B as V, L as x, M as de, G as ye, q as f, J as C, K as H, y as Me, E as Ae, p as y } from "./constants-DT5L-WXf.js";
import { UMB_SETTINGS_SECTION_ALIAS as Ee } from "@umbraco-cms/backoffice/settings";
import { a as Te, b as _e } from "./constants-C418HnkF.js";
const Ie = [
  {
    type: "workspaceInfoApp",
    name: "Media History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.History",
    element: () => import("./media-history-workspace-info-app.element-Bue9-iQl.js"),
    weight: 80,
    conditions: [
      {
        alias: i,
        match: o
      }
    ]
  }
], Ue = [...Ie], Re = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Media Collection Action",
    alias: "Umb.CollectionAction.Media.Create",
    element: () => import("./create-media-collection-action.element-Djo-9wjY.js"),
    weight: 100,
    meta: {
      label: "#general_create"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  }
], fe = [
  {
    type: "repository",
    alias: k,
    name: "Media Collection Repository",
    api: () => import("./media-collection.repository-DsEyT-BB.js")
  }
], Se = [
  {
    type: "collectionView",
    alias: G,
    name: "Media Grid Collection View",
    element: () => import("./media-grid-collection-view.element-BFNqKMJB.js"),
    weight: 300,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  },
  {
    type: "collectionView",
    alias: K,
    name: "Media Table Collection View",
    element: () => import("./media-table-collection-view.element-CsVMhCCO.js"),
    weight: 200,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  }
], be = [
  {
    type: "collection",
    alias: S,
    name: "Media Collection",
    api: () => import("./media-collection.context-3IU4XKIH.js"),
    element: () => import("./media-collection.element-BdQW8Vp5.js"),
    meta: {
      repositoryAlias: k
    }
  },
  ...Re,
  ...fe,
  ...Se
], Oe = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Media.Create",
    name: "Create Media Entity Action",
    weight: 1200,
    api: () => import("./create.action-D84UMySE.js"),
    forEntityTypes: [c, t],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.Media.CreateOptions",
    name: "Media Create Options Modal",
    element: () => import("./media-create-options-modal.element-v_eBUOzi.js")
  }
], Ce = [
  {
    type: "repository",
    alias: P,
    name: "Move Media Repository",
    api: () => import("./media-move.repository-CVbQGMH6.js")
  }
], ue = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Media.MoveTo",
    name: "Move Media Entity Action",
    forEntityTypes: [t],
    meta: {
      treeRepositoryAlias: M,
      moveRepositoryAlias: P,
      treeAlias: I
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  ...Ce
], ke = [
  {
    type: "repository",
    alias: h,
    name: "Sort Children Of Media Repository",
    api: () => import("./sort-children-of.repository-CL8u9Kfl.js")
  }
], Pe = [
  ...ke,
  {
    type: "entityAction",
    kind: "sortChildrenOfContent",
    alias: "Umb.EntityAction.Media.SortChildrenOf",
    name: "Sort Children Of Media Entity Action",
    forEntityTypes: [c, t],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: h,
      treeRepositoryAlias: M
    },
    conditions: [
      {
        alias: d
      }
    ]
  }
], he = [
  ...Oe,
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Media.Delete",
    name: "Delete Media Entity Action",
    kind: "deleteWithRelation",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: B,
      referenceRepositoryAlias: l
    },
    conditions: [
      {
        alias: w
      }
    ]
  },
  ...ue,
  ...Pe
], Be = [
  {
    type: "repository",
    alias: D,
    name: "Bulk Move Media Repository",
    api: () => import("./move-to.repository-LruV9O0X.js")
  }
], De = {
  type: "entityBulkAction",
  kind: "moveTo",
  alias: "Umb.EntityBulkAction.Media.MoveTo",
  name: "Move Media Entity Bulk Action",
  weight: 20,
  forEntityTypes: [t],
  meta: {
    bulkMoveRepositoryAlias: D,
    treeAlias: I
  },
  conditions: [
    {
      alias: s,
      match: S
    }
  ]
}, Le = [De, ...Be], ge = [...Le], we = [
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Audio",
    name: "Audio File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-audio.element-lrG6Dl5g.js"),
    forMimeTypes: ["audio/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.File",
    name: "General File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-file.element-wUIxjqeu.js"),
    forMimeTypes: ["*/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Image",
    name: "Image File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-image.element-rDbE5Fpp.js"),
    forMimeTypes: ["image/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Svg",
    name: "SVG File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-svg.element-DKdnduMg.js"),
    forMimeTypes: ["image/svg+xml"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Video",
    name: "Video File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-video.element-BulE3-rF.js"),
    forMimeTypes: ["video/*"]
  }
], $e = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Media",
    name: "Media Entity Item Reference",
    element: () => import("./media-item-ref.element-CtUzygju.js"),
    forEntityTypes: [t]
  }
], Ne = [
  {
    type: "menu",
    alias: A,
    name: "Media Menu"
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media",
    name: "Media Menu Item",
    weight: 100,
    meta: {
      label: "Media",
      menus: [A],
      treeAlias: I,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    name: "Media Menu Structure Workspace Context",
    alias: "Umb.Context.Media.Menu.Structure",
    api: () => import("./media-menu-structure.context-CXha46PR.js"),
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.Media"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Media.Breadcrumb",
    name: "Media Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.Media"
      }
    ]
  }
], Ye = [
  {
    type: "modal",
    alias: "Umb.Modal.ImageCropperEditor",
    name: "Image Cropper Editor Modal",
    js: () => import("./input-upload-field.element-Bje2l26U.js").then((e) => e.L)
  }
], ve = [...Ye], We = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaCaptionAltText",
    name: "Media Caption Alt Text",
    element: () => import("./input-upload-field.element-Bje2l26U.js").then((e) => e.R)
  }
], Fe = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaPicker",
    name: "Media Picker Modal",
    js: () => import("./input-upload-field.element-Bje2l26U.js").then((e) => e.Q)
  }
], Ve = [...Fe], xe = [...ve, ...We, ...Ve], He = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ImageCropsConfiguration",
  name: "Image Crops Property Editor UI",
  element: () => import("./property-editor-ui-image-crops.element-CZmVBGuZ.js"),
  meta: {
    label: "Image Crops Configuration",
    icon: "icon-autofill",
    group: "common"
  }
}, Ge = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaEntityPicker",
  name: "Media Entity Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-entity-picker.element-BpMeGsrU.js"),
  meta: {
    label: "Media Entity Picker",
    icon: "icon-picture",
    group: "pickers",
    supportsReadOnly: !0
  }
}, Ke = {
  type: "propertyEditorSchema",
  name: "Email Address",
  alias: "Umbraco.ImageCropper",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropper",
    settings: {
      properties: [
        {
          alias: "crops",
          label: "Crop options",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        }
      ]
    }
  }
}, je = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.ImageCropper",
    name: "Image Cropper Property Editor UI",
    element: () => import("./property-editor-ui-image-cropper.element-CPIT9SsZ.js"),
    meta: {
      label: "Image Cropper",
      icon: "icon-crop",
      group: "media",
      propertyEditorSchemaAlias: "Umbraco.ImageCropper"
    }
  },
  Ke
], qe = {
  type: "propertyEditorSchema",
  name: "Media Picker",
  alias: "Umbraco.MediaPicker3",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MediaPicker",
    settings: {
      properties: [
        {
          alias: "filter",
          label: "Accepted types",
          description: "Limit to specific types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaTypePicker"
        },
        {
          alias: "multiple",
          label: "Pick multiple items",
          description: "Outputs a IEnumerable",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "validationLimit",
          label: "Amount",
          description: "Set a required range of medias",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.NumberRange",
          config: [{ alias: "validationRange", value: { min: 0, max: 1 / 0 } }]
        },
        {
          alias: "startNodeId",
          label: "Start node",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaEntityPicker",
          config: [{ alias: "validationLimit", value: { min: 0, max: 1 } }]
        },
        {
          alias: "enableLocalFocalPoint",
          label: "Enable Focal Point",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "crops",
          label: "Image Crops",
          description: "Local crops, stored on document",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        },
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore User Start Nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, ze = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MediaPicker",
    name: "Media Picker Property Editor UI",
    element: () => import("./property-editor-ui-media-picker.element-BLGU8JVb.js"),
    meta: {
      label: "Media Picker",
      propertyEditorSchemaAlias: "Umbraco.MediaPicker3",
      icon: "icon-picture",
      group: "media",
      supportsReadOnly: !0
    }
  },
  qe
], Je = {
  type: "propertyEditorSchema",
  name: "File upload",
  alias: "Umbraco.UploadField",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.UploadField",
    settings: {
      properties: [
        {
          alias: "fileExtensions",
          label: "Accepted file extensions",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.AcceptedUploadTypes"
        }
      ]
    }
  }
}, Qe = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.UploadField",
    name: "Upload Field Property Editor UI",
    element: () => import("./property-editor-ui-upload-field.element-rGLUyyqL.js"),
    meta: {
      label: "Upload Field",
      propertyEditorSchemaAlias: "Umbraco.UploadField",
      icon: "icon-download-alt",
      group: "media"
    }
  },
  Je
], Xe = [
  ...je,
  ...ze,
  ...Qe,
  He,
  Ge
], Ze = [
  {
    type: "repository",
    alias: j,
    name: "Bulk Trash Media Repository",
    api: () => import("./trash.repository-DjBnokmZ.js")
  }
], ei = {
  type: "entityBulkAction",
  kind: ae,
  alias: "Umb.EntityBulkAction.Media.Trash",
  name: "Trash Media Entity Bulk Action",
  weight: 10,
  forEntityTypes: [t],
  meta: {
    itemRepositoryAlias: p,
    recycleBinRepositoryAlias: m,
    referenceRepositoryAlias: l
  },
  conditions: [
    {
      alias: s,
      match: S
    }
  ]
}, ii = [ei, ...Ze], ti = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Media.RecycleBin.Trash",
    name: "Trash Media Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: m,
      referenceRepositoryAlias: l
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  {
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    alias: "Umb.EntityAction.Media.RecycleBin.Restore",
    name: "Restore Media From Recycle Bin Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: m,
      pickerModal: ie
    },
    conditions: [
      {
        alias: w
      }
    ]
  },
  {
    type: "entityAction",
    kind: "emptyRecycleBin",
    alias: "Umb.EntityAction.Media.RecycleBin.Empty",
    name: "Empty Media Recycle Bin Entity Action",
    forEntityTypes: [E],
    meta: {
      recycleBinRepositoryAlias: m
    },
    conditions: [
      {
        alias: oe
      }
    ]
  },
  ...ii
], ai = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media.RecycleBin",
    name: "Media Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: L,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [A]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin"
      }
    ]
  }
], oi = [
  {
    type: "repository",
    alias: m,
    name: "Media Recycle Bin Repository",
    api: () => import("./media-recycle-bin.repository-CRsfEuqJ.js")
  }
], ni = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Media Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [E]
  }
], si = [
  {
    type: "repository",
    alias: u,
    name: "Media Recycle Bin Tree Repository",
    api: () => import("./media-recycle-bin-tree.repository-DQ2zuOt5.js")
  },
  {
    type: "treeStore",
    alias: q,
    name: "Media Recycle Bin Tree Store",
    api: () => import("./media-recycle-bin-tree.store-CB7A2tja.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: L,
    name: "Media Recycle Bin Tree",
    meta: {
      repositoryAlias: u
    }
  },
  {
    type: "treeItem",
    kind: "recycleBin",
    alias: "Umb.TreeItem.Media.RecycleBin",
    name: "Media Recycle Bin Tree Item",
    forEntityTypes: [E],
    meta: {
      supportedEntityTypes: [t]
    }
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Media.RecycleBin.Root",
    name: "Media Recycle Bin Root Workspace",
    meta: {
      entityType: E,
      headline: "#general_recycleBin"
    }
  },
  ...ni
], ri = [
  {
    type: "condition",
    name: "Allow Media Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin",
    api: () => import("./allow-media-recycle-bin.condition-Bq1SkuAD.js")
  },
  ...ti,
  ...ai,
  ...oi,
  ...si
], pi = [
  {
    type: "repository",
    alias: l,
    name: "Media Reference Repository",
    api: () => import("./media-reference.repository-D-B_xxj_.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaReferenceResponse",
    name: "Media Reference Response Management Api Data Mapping",
    api: () => import("./media-reference-response.management-api.mapping-D7Dg-yu9.js"),
    forDataSource: $,
    forDataModel: "MediaReferenceResponseModel"
  }
], mi = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Media References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.References",
    conditions: [
      {
        alias: i,
        match: o
      }
    ],
    meta: {
      referenceRepositoryAlias: l
    }
  }
], li = [...pi, ...mi], ci = [
  {
    type: "repository",
    alias: B,
    name: "Media Detail Repository",
    api: () => import("./input-upload-field.element-Bje2l26U.js").then((e) => e.M)
  },
  {
    type: "store",
    alias: z,
    name: "Media Detail Store",
    api: () => import("./media-detail.store-CwUNk3T9.js")
  }
], di = [
  {
    type: "repository",
    alias: p,
    name: "Media Item Repository",
    api: () => import("./input-upload-field.element-Bje2l26U.js").then((e) => e.N)
  },
  {
    type: "itemStore",
    alias: te,
    name: "Media Item Store",
    api: () => import("./media-item.store-Psz2qFEW.js")
  }
], yi = [
  {
    type: "repository",
    alias: J,
    name: "Media Validation Repository",
    api: () => import("./media-validation.repository-f-sioc_e.js")
  }
], Mi = [...ci, ...di, ...yi], Ai = "Umb.Section.Media", Ei = [
  {
    name: "Media Global Search",
    alias: Q,
    type: "globalSearch",
    weight: 700,
    api: () => import("./media-global-search-BSzAazwj.js"),
    meta: {
      label: "Media",
      searchProviderAlias: g
    },
    conditions: [
      {
        alias: O,
        match: Ai
      }
    ]
  }
], Ti = [
  {
    name: "Media Search Provider",
    alias: g,
    type: "searchProvider",
    api: () => import("./input-upload-field.element-Bje2l26U.js").then((e) => e.P),
    weight: 700,
    meta: {
      label: "Media"
    }
  },
  {
    name: "Media Search Result Item",
    alias: "Umb.SearchResultItem.Media",
    type: "searchResultItem",
    element: () => import("./media-search-result-item.element-YjJYA0jj.js"),
    forEntityTypes: [t]
  },
  ...Ei
], _i = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Media",
    name: "Media Dashboard",
    element: () => import("./media-dashboard.element-CJhQgUJx.js"),
    weight: 200,
    meta: {
      label: "#general_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: N,
        match: "Umb.Section.Media"
      }
    ]
  }
], Ii = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Media.Tree.ReloadChildrenOf",
    name: "Reload Media Tree Item Children Entity Action",
    forEntityTypes: [t, c]
  }
], Ui = [
  {
    type: "repository",
    alias: M,
    name: "Media Tree Repository",
    api: () => import("./input-upload-field.element-Bje2l26U.js").then((e) => e.O)
  },
  {
    type: "treeStore",
    alias: X,
    name: "Media Tree Store",
    api: () => import("./media-tree.store-B5PRM8sM.js")
  },
  {
    type: "tree",
    alias: I,
    name: "Media Tree",
    element: () => import("./media-tree.element-yMs0cVKY.js"),
    api: () => import("./media-tree.context-Cl_RDLaO.js"),
    meta: {
      repositoryAlias: M
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Media",
    name: "Media Tree Item",
    element: () => import("./media-tree-item.element-P-e7yj6_.js"),
    api: () => import("./media-tree-item.context-Dp9t5q1N.js"),
    forEntityTypes: [t]
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Media.Root",
    name: "Media Tree Root",
    forEntityTypes: [c]
  },
  ...Ii
], Ri = {
  type: "repository",
  alias: Z,
  name: "Media Url Repository",
  api: () => import("./media-url.repository-B5RzlWhD.js").then((e) => e.m)
}, fi = {
  type: "itemStore",
  alias: ee,
  name: "Media Url Store",
  api: () => import("./media-url.store-CfW4d6fj.js")
}, Si = [Ri, fi], bi = [
  {
    type: "workspaceInfoApp",
    name: "Media Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.Links",
    element: () => import("./media-links-workspace-info-app.element-BHVyWeYD.js"),
    weight: 100,
    conditions: [
      {
        alias: i,
        match: o
      }
    ]
  }
], Oi = [...Si, ...bi], Ci = [
  {
    type: "workspace",
    kind: "routable",
    alias: o,
    name: "Media Workspace",
    api: () => import("./media-workspace.context-rk-FBmVD.js"),
    meta: {
      entityType: "media"
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Media.Collection",
    name: "Media Workspace Collection View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: i,
        match: o
      },
      {
        alias: ne
      }
    ]
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Media.Edit",
    name: "Media Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_details",
      pathname: "media",
      icon: "icon-picture"
    },
    conditions: [
      {
        alias: i,
        match: o
      },
      {
        alias: se
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Media.Info",
    name: "Media Workspace Info View",
    element: () => import("./media-workspace-view-info.element-C3Y0-1fW.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: i,
        match: o
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Media.Save",
    name: "Save Media Workspace Action",
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: o
      },
      {
        alias: d
      }
    ]
  }
], ui = [
  ...Ue,
  ...be,
  ...he,
  ...ge,
  ...we,
  ...$e,
  ...Ne,
  ...xe,
  ...Xe,
  ...ri,
  ...li,
  ...Mi,
  ...Ti,
  ..._i,
  ...Ui,
  ...Oi,
  ...Ci
], R = "Umb.Section.Media", ki = [
  {
    type: "section",
    alias: R,
    name: "Media Section",
    weight: 900,
    meta: {
      label: "#sections_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: O,
        match: R
      }
    ]
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SectionSidebarMenu.Media",
    name: "Media Section Sidebar Menu",
    weight: 100,
    meta: {
      label: "#sections_media",
      menu: A,
      entityType: c
    },
    conditions: [
      {
        alias: N,
        match: R
      }
    ]
  }
], Pi = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MediaType.Default",
    name: "Default Media Type Entity Create Option Action",
    weight: 1200,
    api: () => import("./default-media-type-create-option-action-7dIt7yNH.js"),
    forEntityTypes: [r, a, n],
    meta: {
      icon: "icon-picture",
      label: "#content_mediatype"
    }
  }
], hi = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.MediaType.Folder",
    name: "Media Type Folder Entity Create Option Action",
    forEntityTypes: [r, n],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: T
    }
  }
], Bi = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MediaType.Create",
    name: "Create Media Type Entity Action",
    weight: 1200,
    forEntityTypes: [a, r, n]
  },
  // TODO: Deprecated: Will be removed in 17.0.0
  {
    type: "modal",
    alias: "Umb.Modal.MediaTypeCreateOptions",
    name: "Media Type Create Options Modal",
    element: () => import("./media-type-create-options-modal.element-D5Pr-Lbu.js")
  },
  ...Pi,
  ...hi
], Di = [
  {
    type: "repository",
    alias: Y,
    name: "Move Media Type Repository",
    api: () => import("./media-type-move.repository-BVEz6bDY.js")
  }
], Li = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.MediaType.MoveTo",
    name: "Move Media Type Entity Action",
    forEntityTypes: [a],
    meta: {
      treeRepositoryAlias: _,
      moveRepositoryAlias: Y,
      treeAlias: U,
      foldersOnly: !0
    }
  },
  ...Di
], gi = [
  {
    type: "repository",
    alias: v,
    name: "Duplicate Media Type Repository",
    api: () => import("./media-type-duplicate.repository-DHSDaGcY.js")
  }
], wi = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.MediaType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [a],
    meta: {
      duplicateRepositoryAlias: v,
      treeAlias: U,
      treeRepositoryAlias: _,
      foldersOnly: !0
    }
  },
  ...gi
], $i = [
  {
    type: "repository",
    alias: re,
    name: "Export Media Type Repository",
    api: () => import("./media-type-export.repository-BcY1qfkh.js")
  }
], Ni = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Export",
    name: "Export Media Type Entity Action",
    forEntityTypes: [a],
    api: () => import("./media-type-export.action-BhRRJkTo.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...$i
], Yi = [
  {
    type: "repository",
    alias: pe,
    name: "Import Media Type Repository",
    api: () => import("./media-type-import.repository-CzkM04nS.js")
  }
], vi = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaType.Import",
    name: "Media Type Import Modal",
    element: () => import("./media-type-import-modal.element-D1UTXZLY.js")
  }
], Wi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Import",
    name: "Export Media Type Entity Action",
    forEntityTypes: [r],
    api: () => import("./media-type-import.action-DRleoI48.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...Yi,
  ...vi
], Fi = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MediaType.Delete",
    name: "Delete Media Type Entity Action",
    forEntityTypes: [a],
    meta: {
      detailRepositoryAlias: F,
      itemRepositoryAlias: W
    }
  },
  ...Bi,
  ...Li,
  ...wi,
  ...Ni,
  ...Wi
], Vi = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.MediaTypes",
    name: "Media Types Menu Item",
    weight: 800,
    meta: {
      label: "Media Types",
      treeAlias: U,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Media Type Menu Structure Workspace Context",
    alias: "Umb.Context.MediaType.Menu.Structure",
    api: () => import("./media-type-menu-structure.context-BcGNJ1-u.js"),
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.MediaType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.MediaType.Breadcrumb",
    name: "Media Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.MediaType"
      }
    ]
  }
], xi = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaTypePicker",
  name: "Media Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-type-picker.element-8UMBoQOq.js"),
  meta: {
    label: "Media Type Picker",
    icon: "icon-media-dashed-line",
    group: "advanced"
  }
}, Hi = [xi], Gi = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaTypePropertyTypeReferenceResponse",
    name: "Media Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./media-type-property-type-reference-response.management-api.mapping-kyxfB3B5.js"),
    forDataSource: $,
    forDataModel: "MediaTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.MediaTypePropertyType",
    name: "Media Type Property Type Entity Item Reference",
    element: () => import("./media-type-property-type-item-ref.element-CdN6dfOH.js"),
    forEntityTypes: [me]
  }
], Ki = [
  {
    type: "repository",
    alias: F,
    name: "Media Types Repository",
    api: () => import("./media-type-detail.repository-BPBt0xVh.js").then((e) => e.m)
  },
  {
    type: "store",
    alias: le,
    name: "Media Type Store",
    api: () => import("./media-type-detail.store-C-_k_6ab.js")
  }
], ji = [
  {
    type: "repository",
    alias: W,
    name: "Media Type Item Repository",
    api: () => import("./media-type-item.repository-BBLk14NN.js")
  },
  {
    type: "itemStore",
    alias: ce,
    name: "Media Type Item Store",
    api: () => import("./media-type-item.store-Bfbw1GfU.js")
  }
], qi = [
  {
    type: "repository",
    alias: V,
    name: "Media Type Composition Repository",
    api: () => import("./media-type-composition.repository-Ck3eRySm.js")
  }
], zi = [...Ki, ...ji, ...qi], Ji = [
  {
    name: "Media Type Global Search",
    alias: de,
    type: "globalSearch",
    weight: 500,
    meta: {
      label: "Media Types",
      searchProviderAlias: x
    },
    conditions: [
      {
        alias: O,
        match: Ee
      }
    ]
  }
], Qi = [
  {
    name: "Media Type Search Provider",
    alias: x,
    type: "searchProvider",
    api: () => import("./media-type.search-provider-DMnZs0lQ.js"),
    weight: 500,
    meta: {
      label: "Media Types"
    }
  },
  {
    name: "Media Type Search Result Item",
    alias: "Umb.SearchResultItem.MediaType",
    type: "searchResultItem",
    forEntityTypes: [a]
  },
  ...Ji
], Xi = [
  {
    type: "repository",
    alias: T,
    name: "Media Type Folder Repository",
    api: () => import("./media-type-folder.repository-Cj1sex62.js")
  },
  {
    type: "store",
    alias: ye,
    name: "Media Type Folder Store",
    api: () => import("./media-type-folder.store-D48aQBwN.js")
  }
], Zi = [
  {
    type: "workspace",
    kind: "routable",
    alias: f,
    name: "Media Type Folder Workspace",
    api: () => import("./media-type-folder-workspace.context-CrGPPwpM.js"),
    meta: {
      entityType: n
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MediaType.Folder.Submit",
    name: "Submit Media Type Folder Workspace Action",
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: f
      }
    ]
  }
], et = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.MediaType.Folder.Update",
    name: "Rename Media Type Folder Entity Action",
    forEntityTypes: [n],
    meta: {
      folderRepositoryAlias: T
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.MediaType.Folder.Delete",
    name: "Delete Media Type Folder Entity Action",
    forEntityTypes: [n],
    meta: {
      folderRepositoryAlias: T
    }
  },
  ...Xi,
  ...Zi
], it = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Media Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.MediaTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: C
      }
    ]
  }
], tt = [
  {
    type: "repository",
    alias: H,
    name: "Media Type Tree Item Children Collection Repository",
    api: () => import("./media-type-tree-item-children-collection.repository-BgRxpDt0.js")
  }
], at = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.MediaType.TreeItem.Table",
    name: "Media Type Tree Item Table Collection View",
    element: () => import("./media-type-tree-item-table-collection-view.element-CnrWHj5B.js"),
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
], ot = [
  {
    type: "collection",
    kind: "default",
    alias: C,
    name: "Media Type Tree Item Children Collection",
    meta: {
      repositoryAlias: H
    }
  },
  ...it,
  ...tt,
  ...at
], nt = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaType.Tree.ReloadChildrenOf",
    name: "Reload Media Type Tree Item Children Entity Action",
    forEntityTypes: [a, r, n]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MediaType.TreeItemChildrenCollection",
    name: "Media Type Tree Item Children Collection Workspace View",
    meta: {
      label: "Folder",
      pathname: "folder",
      icon: "icon-folder",
      collectionAlias: "Umb.Collection.MediaType.TreeItemChildren"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [Me, f]
      }
    ]
  },
  ...ot
], st = [
  {
    type: "repository",
    alias: _,
    name: "Media Type Tree Repository",
    api: () => import("./media-type-tree.repository-B2QordZN.js")
  },
  {
    type: "treeStore",
    alias: Ae,
    name: "Media Type Tree Store",
    api: () => import("./media-type-tree.store-BYPLGZMw.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: U,
    name: "Media Type Tree",
    meta: {
      repositoryAlias: _
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MediaType",
    name: "Media Type Tree Item",
    forEntityTypes: [a, r, n]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MediaType.Root",
    name: "Media Type Root Workspace",
    meta: {
      entityType: r,
      headline: "#treeHeaders_mediaTypes"
    }
  },
  ...et,
  ...nt
], rt = [
  {
    type: "workspace",
    kind: "routable",
    alias: y,
    name: "Media Type Workspace",
    api: () => import("./media-type-workspace.context-BK9Yr1xd.js"),
    meta: {
      entityType: "media-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.MediaType.Design",
    name: "Media Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line",
      compositionRepositoryAlias: V
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.MediaType.Structure",
    name: "Media Type Workspace Structure View",
    element: () => import("./media-type-workspace-view-structure.element-Cjtb2TxK.js"),
    weight: 800,
    meta: {
      label: "#contentTypeEditor_structure",
      pathname: "structure",
      icon: "icon-mindmap"
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MediaType.Save",
    name: "Save Media Type Workspace Action",
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  }
], pt = [
  ...Fi,
  ...Vi,
  ...Hi,
  ...Gi,
  ...zi,
  ...Qi,
  ...st,
  ...rt
], mt = [
  {
    type: "repository",
    alias: Te,
    name: "Imaging Repository",
    api: () => import("./imaging.repository-Cr_RO0yc.js")
  },
  {
    type: "store",
    alias: _e,
    name: "Imaging Store",
    api: () => import("./imaging.store-COwLNIg-.js")
  }
], lt = [
  {
    type: "modal",
    alias: "Umb.Modal.Dropzone.MediaTypePicker",
    name: "Dropzone Media Type Picker Modal",
    element: () => import("./dropzone.element-B_RDVDVa.js").then((e) => e.C)
  }
], ct = [...lt], $t = [
  ...ki,
  ...ui,
  ...pt,
  ...mt,
  ...ct
];
export {
  Ai as U,
  $t as m
};
//# sourceMappingURL=manifests-BBexi2rj.js.map
