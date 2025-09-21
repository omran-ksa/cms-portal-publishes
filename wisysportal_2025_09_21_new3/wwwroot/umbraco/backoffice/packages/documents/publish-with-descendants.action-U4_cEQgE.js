import { i as e } from "./manifests-Z5g9mgXG.js";
import { UmbWorkspaceActionBase as s } from "@umbraco-cms/backoffice/workspace";
class r extends s {
  async execute() {
    const t = await this.getContext(e);
    if (!t)
      throw new Error("The workspace context is missing");
    return t.publishWithDescendants();
  }
}
export {
  r as UmbDocumentPublishWithDescendantsWorkspaceAction,
  r as api
};
//# sourceMappingURL=publish-with-descendants.action-U4_cEQgE.js.map
