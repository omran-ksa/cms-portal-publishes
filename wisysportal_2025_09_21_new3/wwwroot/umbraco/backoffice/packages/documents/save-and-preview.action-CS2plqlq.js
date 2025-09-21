import { UmbDocumentUserPermissionCondition as n } from "./document-user-permission.condition-BkDOsmEj.js";
import { z as i, g as s } from "./manifests-Z5g9mgXG.js";
import { UmbWorkspaceActionBase as r } from "@umbraco-cms/backoffice/workspace";
class p extends r {
  constructor(e, o) {
    super(e, o), this.disable();
    const t = new n(e, {
      host: e,
      config: {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [i]
      },
      onChange: () => {
        t.permitted ? this.enable() : this.disable();
      }
    });
  }
  async execute() {
    const e = await this.getContext(s);
    if (!e)
      throw new Error("Document workspace context not found");
    e.saveAndPreview();
  }
}
export {
  p as UmbDocumentSaveAndPreviewWorkspaceAction,
  p as api
};
//# sourceMappingURL=save-and-preview.action-CS2plqlq.js.map
