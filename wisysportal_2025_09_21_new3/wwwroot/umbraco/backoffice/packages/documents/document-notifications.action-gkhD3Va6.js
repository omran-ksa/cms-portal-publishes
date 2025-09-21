import { q as o } from "./manifests-Z5g9mgXG.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
class u extends a {
  constructor(t, i) {
    super(t, i);
  }
  async execute() {
    await e(this, o, {
      data: { unique: this.args.unique }
    });
  }
}
export {
  u as UmbDocumentNotificationsEntityAction,
  u as default
};
//# sourceMappingURL=document-notifications.action-gkhD3Va6.js.map
