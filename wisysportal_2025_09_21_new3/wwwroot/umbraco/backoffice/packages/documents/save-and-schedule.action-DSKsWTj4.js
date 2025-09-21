import { i as t } from "./manifests-Z5g9mgXG.js";
import { UmbWorkspaceActionBase as o } from "@umbraco-cms/backoffice/workspace";
class c extends o {
  async execute() {
    const e = await this.getContext(t);
    if (!e)
      throw new Error("Publishing workspace context not found");
    return e.schedule();
  }
}
export {
  c as UmbDocumentSaveAndScheduleWorkspaceAction,
  c as api
};
//# sourceMappingURL=save-and-schedule.action-DSKsWTj4.js.map
