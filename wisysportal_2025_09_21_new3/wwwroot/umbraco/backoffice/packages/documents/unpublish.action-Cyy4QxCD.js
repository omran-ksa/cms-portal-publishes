import { i as o } from "./manifests-Z5g9mgXG.js";
import { UmbWorkspaceActionBase as e } from "@umbraco-cms/backoffice/workspace";
class i extends e {
  async execute() {
    const t = await this.getContext(o);
    if (!t)
      throw new Error("Publishing workspace context not found");
    return t.unpublish();
  }
}
export {
  i as UmbDocumentUnpublishWorkspaceAction,
  i as api
};
//# sourceMappingURL=unpublish.action-Cyy4QxCD.js.map
