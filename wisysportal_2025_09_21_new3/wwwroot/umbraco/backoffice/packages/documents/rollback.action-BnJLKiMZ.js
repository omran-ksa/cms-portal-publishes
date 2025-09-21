import { u as o } from "./manifests-Z5g9mgXG.js";
import { UmbEntityActionBase as i } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as n } from "@umbraco-cms/backoffice/localization-api";
class f extends i {
  #t = new n(this);
  async execute() {
    await e(this, o, {});
    const t = await this.getContext(a);
    if (!t)
      throw new Error("Notification context not found");
    t.peek("positive", {
      data: { message: this.#t.term("rollback_documentRolledBack") }
    });
  }
}
export {
  f as UmbRollbackDocumentEntityAction,
  f as api
};
//# sourceMappingURL=rollback.action-BnJLKiMZ.js.map
