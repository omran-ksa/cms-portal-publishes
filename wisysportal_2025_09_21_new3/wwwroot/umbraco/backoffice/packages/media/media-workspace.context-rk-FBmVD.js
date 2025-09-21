import { U as p } from "./media-type-detail.repository-BPBt0xVh.js";
import { UmbContentPropertyDatasetContext as c, UmbContentDetailWorkspaceContextBase as m } from "@umbraco-cms/backoffice/content";
import { o as l, w as u, x as y } from "./input-upload-field.element-Bje2l26U.js";
import { y as T, o as d, x as h, U as _ } from "./dropzone.element-B_RDVDVa.js";
import "./media-url.repository-B5RzlWhD.js";
import { UmbMediaValidationRepository as A } from "./media-validation.repository-f-sioc_e.js";
import { UmbWorkspaceIsNewRedirectController as U, UmbWorkspaceIsNewRedirectControllerAlias as o } from "@umbraco-cms/backoffice/workspace";
import { UmbIsTrashedEntityContext as C } from "@umbraco-cms/backoffice/recycle-bin";
class E extends c {
}
class S extends m {
  constructor(t) {
    super(t, {
      entityType: l,
      workspaceAlias: h,
      detailRepositoryAlias: d,
      contentTypeDetailRepository: p,
      contentValidationRepository: A,
      contentVariantScaffold: T,
      contentTypePropertyName: "mediaType"
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((e) => e?.mediaType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent((e) => !!e?.mediaType.collection), this.contentTypeIcon = this._data.createObservablePartOfCurrent((e) => e?.mediaType.icon), this.#e = new C(this), this.observe(
      this.contentTypeUnique,
      (e) => {
        e && this.structure.loadType(e);
      },
      null
    ), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.routes.setRoutes([
      {
        path: u.toString(),
        component: () => import("./media-workspace-editor.element-B6qcjTWT.js"),
        setup: async (e, a) => {
          const r = a.match.params.parentEntityType, n = a.match.params.parentUnique === "null" ? null : a.match.params.parentUnique, i = a.match.params.mediaTypeUnique;
          await this.createScaffold({
            parent: { entityType: r, unique: n },
            preset: { mediaType: { unique: i, collection: null } }
          }), new U(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: y.toString(),
        component: () => import("./media-workspace-editor.element-B6qcjTWT.js"),
        setup: (e, a) => {
          this.removeUmbControllerByAlias(o);
          const r = a.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  #e;
  resetState() {
    super.resetState(), this.#e.setIsTrashed(!1), this.removeUmbControllerByAlias(o);
  }
  async load(t) {
    const e = await super.load(t);
    return e?.data && this.#e.setIsTrashed(e.data.isTrashed), e;
  }
  /*
   * @deprecated Use `createScaffold` instead.
   */
  async create(t, e) {
    return this.createScaffold({
      parent: t,
      preset: { mediaType: { unique: e } }
    });
  }
  getCollectionAlias() {
    return _;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMediaWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMediaWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.mediaType.unique;
  }
  createPropertyDatasetContext(t, e) {
    return new E(t, this, e);
  }
}
export {
  S as UmbMediaWorkspaceContext,
  S as api
};
//# sourceMappingURL=media-workspace.context-rk-FBmVD.js.map
