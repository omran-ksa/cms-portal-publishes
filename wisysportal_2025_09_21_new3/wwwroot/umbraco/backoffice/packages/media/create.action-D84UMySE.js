import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/utils";
import { I as o, t as a } from "./input-upload-field.element-Bje2l26U.js";
import "@umbraco-cms/backoffice/repository";
import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as m } from "@umbraco-cms/backoffice/modal";
class M extends s {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    let t = null;
    if (this.args.unique) {
      const e = new o(this._host), { data: i, error: r } = await e.requestItems([this.args.unique]);
      if (r || !i) throw new Error("Failed to load media item");
      t = i[0];
    }
    await m(this, a, {
      data: {
        parent: { unique: this.args.unique, entityType: this.args.entityType },
        mediaType: t ? { unique: t.mediaType.unique } : null
      }
    });
  }
}
export {
  M as UmbCreateMediaEntityAction,
  M as api
};
//# sourceMappingURL=create.action-D84UMySE.js.map
