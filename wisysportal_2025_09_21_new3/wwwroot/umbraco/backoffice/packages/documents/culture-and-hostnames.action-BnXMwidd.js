import { o as t } from "./manifests-Z5g9mgXG.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
class m extends a {
  async execute() {
    await e(this, t, {
      data: { unique: this.args.unique }
    });
  }
}
export {
  m as UmbDocumentCultureAndHostnamesEntityAction,
  m as api
};
//# sourceMappingURL=culture-and-hostnames.action-BnXMwidd.js.map
