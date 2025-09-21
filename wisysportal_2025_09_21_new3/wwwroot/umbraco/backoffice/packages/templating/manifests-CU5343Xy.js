import { o as i } from "./partial-view-workspace.context-token-Byx01o9s.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as o, UmbSubmitWorkspaceAction as r } from "@umbraco-cms/backoffice/workspace";
const e = "Umb.Repository.PartialView.Item", I = "Umb.ItemStore.PartialView", s = [
  {
    type: "repository",
    alias: e,
    name: "Partial View Item Repository",
    api: () => import("./partial-view-item.repository-C0ktUhIm.js")
  },
  {
    type: "itemStore",
    alias: "Umb.ItemStore.PartialView",
    name: "Partial View Item Store",
    api: () => import("./partial-view-item.store-CFc8xTp_.js")
  }
], a = "Umb.Repository.PartialView.Rename", m = "Umb.EntityAction.PartialView.Rename", l = [
  {
    type: "repository",
    alias: a,
    name: "Rename PartialView Repository",
    api: () => import("./rename-partial-view.repository-DQq8fq1e.js")
  },
  {
    type: "entityAction",
    kind: "renameServerFile",
    alias: m,
    name: "Rename Partial View Entity Action",
    forEntityTypes: [i],
    meta: {
      renameRepositoryAlias: a,
      itemRepositoryAlias: e
    }
  }
], A = "Umb.Repository.PartialView.Detail", n = "Umb.Store.PartialView.Detail", R = [
  {
    type: "repository",
    alias: A,
    name: "Partial View Detail Repository",
    api: () => import("./partial-view-detail.repository-ChXc2w_G.js")
  },
  {
    type: "store",
    alias: n,
    name: "Partial View Detail Store",
    api: () => import("./partial-view-detail.store-Dbklp0ci.js")
  },
  ...s
], t = "Umb.Workspace.PartialView", P = [
  {
    type: "workspace",
    kind: "routable",
    alias: t,
    name: "Partial View Workspace",
    api: () => import("./partial-view-workspace.context-Dgyg25f6.js"),
    meta: {
      entityType: "partial-view"
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.PartialView.Save",
    name: "Save Partial View",
    api: r,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        match: t
      }
    ]
  }
];
export {
  e as U,
  a,
  m as b,
  A as c,
  n as d,
  I as e,
  t as f,
  R as g,
  P as h,
  l as m
};
//# sourceMappingURL=manifests-CU5343Xy.js.map
