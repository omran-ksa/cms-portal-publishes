import { f as o, h as m, t as p } from "./manifests-CRgmLCr5.js";
import { U as l } from "./index-L-35ogTa.js";
import { UmbId as c } from "@umbraco-cms/backoffice/id";
import { MemberService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { umbDeepMerge as d } from "@umbraco-cms/backoffice/utils";
import { UmbMemberTypeDetailServerDataSource as w } from "@umbraco-cms/backoffice/member-type";
import { UmbControllerBase as b } from "@umbraco-cms/backoffice/class-api";
import { UmbDetailRepositoryBase as f } from "@umbraco-cms/backoffice/repository";
class y extends b {
  /**
   * Creates a new Member scaffold
   * @param {Partial<UmbMemberDetailModel>} [preset]
   * @returns { CreateMemberRequestModel }
   * @memberof UmbMemberServerDataSource
   */
  async createScaffold(e = {}) {
    let r = "";
    const t = e.memberType?.unique;
    if (!t)
      throw new Error("Document type unique is missing");
    const { data: s } = await new w(this).read(t);
    r = s?.icon ?? "";
    const a = {
      entityType: o,
      unique: c.new(),
      email: "",
      username: "",
      memberType: {
        unique: t,
        icon: r
      },
      isApproved: !1,
      isLockedOut: !1,
      isTwoFactorEnabled: !1,
      kind: l.DEFAULT,
      failedPasswordAttempts: 0,
      lastLoginDate: null,
      lastLockoutDate: null,
      lastPasswordChangeDate: null,
      groups: [],
      values: [],
      variants: [
        {
          name: "",
          culture: null,
          segment: null,
          createDate: (/* @__PURE__ */ new Date()).toISOString(),
          updateDate: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]
    };
    return { data: d(e, a) };
  }
  /**
   * Fetches a Member with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: t } = await n(this, i.getMemberById({ path: { id: e } }));
    return t || !r ? { error: t } : { data: {
      entityType: o,
      unique: r.id,
      email: r.email,
      username: r.username,
      memberType: {
        unique: r.memberType.id,
        icon: r.memberType.icon
      },
      isApproved: r.isApproved,
      isLockedOut: r.isLockedOut,
      isTwoFactorEnabled: r.isTwoFactorEnabled,
      kind: r.kind,
      failedPasswordAttempts: r.failedPasswordAttempts,
      lastLoginDate: r.lastLoginDate || null,
      lastLockoutDate: r.lastLockoutDate || null,
      lastPasswordChangeDate: r.lastPasswordChangeDate || null,
      groups: r.groups,
      values: r.values.map((a) => ({
        alias: a.alias,
        culture: a.culture || null,
        editorAlias: a.editorAlias,
        entityType: m,
        segment: a.segment || null,
        value: a.value
      })),
      variants: r.variants.map((a) => ({
        culture: a.culture || null,
        segment: a.segment || null,
        name: a.name,
        createDate: a.createDate,
        updateDate: a.updateDate
      }))
    } };
  }
  /**
   * Inserts a new Member on the server
   * @param {UmbMemberDetailModel} model
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Member is missing");
    const r = {
      id: e.unique,
      email: e.email,
      username: e.username,
      password: e.newPassword || "",
      memberType: { id: e.memberType.unique },
      groups: e.groups,
      isApproved: e.isApproved,
      values: e.values,
      variants: e.variants
    }, { data: t, error: s } = await n(
      this,
      i.postMember({
        body: r
      })
    );
    return t && typeof t == "string" ? this.read(t) : { error: s };
  }
  /**
   * Updates a Member on the server
   * @param {UmbMemberDetailModel} Member
   * @param model
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const r = {
      email: e.email,
      groups: e.groups,
      isApproved: e.isApproved,
      isLockedOut: e.isLockedOut,
      isTwoFactorEnabled: e.isTwoFactorEnabled,
      newPassword: e.newPassword,
      oldPassword: e.oldPassword,
      username: e.username,
      values: e.values,
      variants: e.variants
    }, { error: t } = await n(
      this,
      i.putMemberById({
        path: { id: e.unique },
        body: r
      })
    );
    return t ? { error: t } : this.read(e.unique);
  }
  /**
   * Deletes a Member on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return n(
      this,
      i.deleteMemberById({
        path: { id: e }
      })
    );
  }
}
class L extends f {
  /**
   * Creates an instance of UmbMemberDetailRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberDetailRepository
   */
  constructor(e) {
    super(e, y, p);
  }
  async create(e) {
    return super.create(e, null);
  }
}
export {
  L as UmbMemberDetailRepository,
  L as default
};
//# sourceMappingURL=member-detail.repository-CvhkhLhZ.js.map
