import { m as o } from "./manifests-CRgmLCr5.js";
import { UmbEntityActionBase as r } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as m } from "@umbraco-cms/backoffice/modal";
class c extends r {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    await m(this, o);
  }
}
export {
  c as UmbCreateMemberEntityAction,
  c as api
};
//# sourceMappingURL=create.action-CjRfCtgY.js.map
