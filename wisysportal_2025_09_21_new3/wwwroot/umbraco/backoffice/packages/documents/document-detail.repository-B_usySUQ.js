import { e as a, c, t as m } from "./manifests-Z5g9mgXG.js";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { DocumentService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { umbDeepMerge as d } from "@umbraco-cms/backoffice/utils";
import { UmbDocumentTypeDetailServerDataSource as y } from "@umbraco-cms/backoffice/document-type";
import { UmbControllerBase as T } from "@umbraco-cms/backoffice/class-api";
import { UmbDetailRepositoryBase as D } from "@umbraco-cms/backoffice/repository";
class h extends T {
  /**
   * Creates a new Document scaffold
   * @param preset
   * @returns { UmbDocumentDetailModel }
   * @memberof UmbDocumentServerDataSource
   */
  async createScaffold(e = {}) {
    let n = null, u = null;
    const i = e.documentType?.unique;
    if (!i)
      throw new Error("Document type unique is missing");
    const { data: t } = await new y(this).read(i);
    n = t?.icon ?? null, u = t?.collection ?? null;
    const l = {
      entityType: a,
      unique: p.new(),
      template: null,
      documentType: {
        unique: i,
        collection: u,
        icon: n
      },
      isTrashed: !1,
      values: [],
      variants: []
    };
    return { data: d(e, l) };
  }
  /**
   * Fetches a Document with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: n, error: u } = await s(this, r.getDocumentById({ path: { id: e } }));
    return u || !n ? { error: u } : { data: {
      entityType: a,
      unique: n.id,
      values: n.values.map((t) => ({
        editorAlias: t.editorAlias,
        entityType: c,
        culture: t.culture || null,
        segment: t.segment || null,
        alias: t.alias,
        value: t.value
      })),
      variants: n.variants.map((t) => ({
        culture: t.culture || null,
        segment: t.segment || null,
        state: t.state,
        name: t.name,
        publishDate: t.publishDate || null,
        createDate: t.createDate,
        updateDate: t.updateDate,
        scheduledPublishDate: t.scheduledPublishDate || null,
        scheduledUnpublishDate: t.scheduledUnpublishDate || null
      })),
      template: n.template ? { unique: n.template.id } : null,
      documentType: {
        unique: n.documentType.id,
        collection: n.documentType.collection ? { unique: n.documentType.collection.id } : null,
        icon: n.documentType.icon
      },
      isTrashed: n.isTrashed
    } };
  }
  /**
   * Inserts a new Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async create(e, n = null) {
    if (!e) throw new Error("Document is missing");
    if (!e.unique) throw new Error("Document unique is missing");
    const u = {
      id: e.unique,
      parent: n ? { id: n } : null,
      documentType: { id: e.documentType.unique },
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { data: i, error: t } = await s(
      this,
      r.postDocument({
        body: u
      })
    );
    return i ? this.read(i) : { error: t };
  }
  /**
   * Updates a Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const n = {
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { error: u } = await s(
      this,
      r.putDocumentById({
        path: { id: e.unique },
        body: n
      })
    );
    return u ? { error: u } : this.read(e.unique);
  }
  /**
   * Deletes a Document on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return s(this, r.deleteDocumentById({ path: { id: e } }));
  }
}
class I extends D {
  constructor(e) {
    super(e, h, m);
  }
}
export {
  I as UmbDocumentDetailRepository,
  I as api
};
//# sourceMappingURL=document-detail.repository-B_usySUQ.js.map
