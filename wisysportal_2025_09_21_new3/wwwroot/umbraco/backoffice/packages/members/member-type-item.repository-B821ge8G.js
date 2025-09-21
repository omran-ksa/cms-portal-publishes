import { a as m } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import { UmbItemServerDataSourceBase as n, UmbItemRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
import { MemberTypeService as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as u } from "@umbraco-cms/backoffice/entity-item";
import { n as c } from "./input-member-type.element-Cu1XUSGn.js";
class T extends n {
  /**
   * Creates an instance of UmbMemberTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: M
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const t = new u(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (a) => p.getItemMemberType({ query: { id: a.uniques } }),
      uniques: e
    }), { data: o, error: s } = await t.request();
    return { data: this._getMappedItems(o), error: s };
  }
}
const M = (r) => ({
  entityType: m,
  unique: r.id,
  name: r.name,
  icon: r.icon || ""
});
class d extends i {
  constructor(e) {
    super(e, T, c);
  }
}
export {
  d as UmbMemberTypeItemRepository,
  d as default
};
//# sourceMappingURL=member-type-item.repository-B821ge8G.js.map
