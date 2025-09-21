import { U as T } from "./document-type-detail.repository-CVk0rTOt.js";
import { UmbContentPropertyDatasetContext as _, UmbContentDetailWorkspaceContextBase as E } from "@umbraco-cms/backoffice/content";
import { N as U, O as C, P as w, Q as y, e as O, i as f, R as P, z as v, n as S, k as D, f as N, S as g, T as b } from "./manifests-Z5g9mgXG.js";
import "@umbraco-cms/backoffice/id";
import { DocumentService as p } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as m } from "@umbraco-cms/backoffice/resources";
import { ensurePathEndsWithSlash as I, UmbDeprecation as o } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/class-api";
import { UmbRepositoryBase as R } from "@umbraco-cms/backoffice/repository";
import { U as M } from "./document-preview.repository-C9RzXrUN.js";
import { UmbDocumentPublishingRepository as A } from "./document-publishing.repository-BFL4Yx4p.js";
import "@umbraco-cms/backoffice/picker-input";
import { UmbVariantId as u } from "@umbraco-cms/backoffice/variant";
import "./culture-and-hostnames-modal.element-DgqNE89K.js";
import { UMB_DOCUMENT_CONFIGURATION_CONTEXT as q } from "./document-configuration.context-Bz7FvH_D.js";
import "@umbraco-cms/backoffice/entity-item";
import { observeMultiple as B } from "@umbraco-cms/backoffice/observable-api";
import "./document-variant-language-picker.element-azTXCKTU.js";
import "@umbraco-cms/backoffice/tree";
import { UmbWorkspaceIsNewRedirectController as d, UmbWorkspaceIsNewRedirectControllerAlias as W } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentBlueprintDetailRepository as V } from "@umbraco-cms/backoffice/document-blueprint";
import { UmbIsTrashedEntityContext as x } from "@umbraco-cms/backoffice/recycle-bin";
import { createExtensionApiByAlias as L } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_SERVER_CONTEXT as K } from "@umbraco-cms/backoffice/server";
class F extends _ {
  constructor(t, e, i) {
    super(t, e, i);
  }
}
class H {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Validate a new Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param parentUnique - Parent Unique
   * @returns {*}
   */
  async validateCreate(t, e = null) {
    if (!t) throw new Error("Document is missing");
    if (!t.unique) throw new Error("Document unique is missing");
    if (e === void 0) throw new Error("Parent unique is missing");
    const i = {
      id: t.unique,
      parent: e ? { id: e } : null,
      documentType: { id: t.documentType.unique },
      template: t.template ? { id: t.template.unique } : null,
      values: t.values,
      variants: t.variants
    }, { data: n, error: a } = await m(
      this.#t,
      p.postDocumentValidate({
        body: i
      }),
      {
        disableNotifications: !0
      }
    );
    return n && typeof n == "string" ? { data: n } : { error: a };
  }
  /**
   * Validate a existing Document
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {*}
   */
  async validateUpdate(t, e) {
    if (!t.unique) throw new Error("Unique is missing");
    const i = e.map((s) => s.culture).filter((s) => s !== null), n = {
      template: t.template ? { id: t.template.unique } : null,
      values: t.values,
      variants: t.variants,
      cultures: i
    }, { data: a, error: r } = await m(
      this.#t,
      p.putUmbracoManagementApiV11DocumentByIdValidate11({
        path: { id: t.unique },
        body: n
      }),
      {
        disableNotifications: !0
      }
    );
    return a && typeof a == "string" ? { data: a } : { error: r };
  }
}
class X extends R {
  #t;
  constructor(t) {
    super(t), this.#t = new H(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model
   * @param {string | null} [parentUnique]
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async validateCreate(t, e) {
    if (!t) throw new Error("Data is missing");
    return this.#t.validateCreate(t, e);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model
   * @param variantIds
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async validateSave(t, e) {
    if (!t) throw new Error("Data is missing");
    if (!t.unique) throw new Error("Unique is missing");
    return this.#t.validateUpdate(t, e);
  }
}
class _t extends E {
  constructor(t) {
    super(t, {
      entityType: O,
      workspaceAlias: y,
      detailRepositoryAlias: w,
      contentTypeDetailRepository: T,
      contentValidationRepository: X,
      skipValidationOnSubmit: !1,
      ignoreValidationResultOnSubmit: !0,
      contentVariantScaffold: C,
      contentTypePropertyName: "documentType",
      saveModalToken: U
    }), this.publishingRepository = new A(this), this.isTrashed = this._data.createObservablePartOfCurrent((e) => e?.isTrashed), this.contentTypeUnique = this._data.createObservablePartOfCurrent((e) => e?.documentType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent(
      (e) => !!e?.documentType.collection
    ), this.contentTypeIcon = this._data.createObservablePartOfCurrent((e) => e?.documentType.icon || null), this.templateId = this._data.createObservablePartOfCurrent((e) => e?.template?.unique || null), this.#t = new x(this), this.consumeContext(q, async (e) => {
      const i = await e?.getDocumentConfiguration(), n = i?.allowNonExistingSegmentsCreation ?? !1, a = i?.allowEditInvariantFromNonDefault ?? !0;
      this._variantOptionsFilter = (r) => {
        const s = r.segment && !r.variant;
        return !(!n && s);
      }, a === !1 && this.#r();
    }), this.observe(
      this.contentTypeUnique,
      (e) => {
        e && this.structure.loadType(e);
      },
      null
    ), this.consumeContext(f, (e) => {
      this.#e = e;
    }), this.observe(this.isNew, (e) => {
      e !== void 0 && (e ? this.#i(
        P,
        "You do not have permission to create documents."
      ) : this.#i(
        v,
        "You do not have permission to update documents."
      ));
    }), this.routes.setRoutes([
      {
        path: S.toString(),
        component: () => import("./document-workspace-editor.element-D4q5NSDK.js"),
        setup: async (e, i) => {
          const n = i.match.params.parentEntityType, a = i.match.params.parentUnique === "null" ? null : i.match.params.parentUnique, r = i.match.params.documentTypeUnique, s = i.match.params.blueprintUnique;
          await this.create(
            { entityType: n, unique: a },
            r,
            s
          ), new d(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: D.toString(),
        component: () => import("./document-workspace-editor.element-D4q5NSDK.js"),
        setup: async (e, i) => {
          const n = i.match.params.parentEntityType, a = i.match.params.parentUnique === "null" ? null : i.match.params.parentUnique, r = i.match.params.documentTypeUnique;
          await this.create({ entityType: n, unique: a }, r), new d(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: N.toString(),
        component: () => import("./document-workspace-editor.element-D4q5NSDK.js"),
        setup: async (e, i) => {
          this.removeUmbControllerByAlias(W);
          const n = i.match.params.unique;
          await this.load(n);
        }
      }
    ]);
  }
  #t;
  #e;
  #i(t, e) {
    this.#n(t, !1, e), L(this, g, [
      {
        config: {
          allOf: [t]
        },
        onChange: (i) => {
          this.#n(t, i, e);
        }
      }
    ]);
  }
  resetState() {
    super.resetState(), this.#t.setIsTrashed(!1);
  }
  async load(t) {
    const e = await super.load(t);
    return e?.data && this.#t.setIsTrashed(e.data.isTrashed), e;
  }
  async create(t, e, i) {
    if (i) {
      const n = new V(this), { data: a } = await n.scaffoldByUnique(i);
      if (!a) throw new Error("Blueprint data is missing");
      return this.createScaffold({
        parent: t,
        preset: {
          documentType: a.documentType,
          values: a.values,
          variants: a.variants
        }
      });
    }
    return this.createScaffold({
      parent: t,
      preset: {
        documentType: {
          unique: e
        }
      }
    });
  }
  getCollectionAlias() {
    return b;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.documentType.unique;
  }
  /**
   * Set the template
   * @param {string} templateUnique The unique identifier of the template.
   * @memberof UmbDocumentWorkspaceContext
   */
  setTemplate(t) {
    this._data.updateCurrent({ template: { unique: t } });
  }
  async _handleSave() {
    const t = this.getHostElement().style;
    t.setProperty("--uui-color-invalid", "var(--uui-color-warning)"), t.setProperty("--uui-color-invalid-emphasis", "var(--uui-color-warning-emphasis)"), t.setProperty("--uui-color-invalid-standalone", "var(--uui-color-warning-standalone)"), t.setProperty("--uui-color-invalid-contrast", "var(--uui-color-warning-contrast)"), await super._handleSave();
  }
  async saveAndPreview() {
    return await this.#a();
  }
  async #a() {
    const t = this.getUnique();
    if (!t) throw new Error("Unique is missing");
    let e = u.CreateInvariant();
    const { selected: i } = await this._determineVariantOptions();
    if (i.length > 0) {
      e = u.FromString(i[0]);
      const h = [e], l = await this._data.constructData(h);
      await this.runMandatoryValidationForSaveData(l), await this.performCreateOrUpdate(h, l);
    }
    await new M(this).enter();
    const n = await this.getContext(K);
    if (!n)
      throw new Error("Server context is missing");
    const a = n.getBackofficePath(), r = new URL(I(a) + "preview", window.location.origin);
    r.searchParams.set("id", t), e.culture && r.searchParams.set("culture", e.culture), e.segment && r.searchParams.set("segment", e.segment), window.open(r.toString(), `umbpreview-${t}`)?.focus();
  }
  async publish() {
    if (new o({
      deprecated: "The Publish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Publish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.publish();
  }
  /**
   * Save the document and publish it.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async saveAndPublish() {
    if (new o({
      deprecated: "The SaveAndPublish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the SaveAndPublish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.saveAndPublish();
  }
  /**
   * Schedule the document to be published at a later date.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async schedule() {
    if (new o({
      deprecated: "The Schedule method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Schedule method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.schedule();
  }
  /**
   * Unpublish the document.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async unpublish() {
    if (new o({
      deprecated: "The Unpublish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Unpublish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.unpublish();
  }
  /**
   * Publish the document and all its descendants.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async publishWithDescendants() {
    if (new o({
      deprecated: "The PublishWithDescendants method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the PublishWithDescendants method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.publishWithDescendants();
  }
  createPropertyDatasetContext(t, e) {
    return new F(t, this, e);
  }
  async #n(t, e, i) {
    if (e) {
      this.readOnlyGuard?.removeRule(t);
      return;
    }
    this.readOnlyGuard?.addRule({
      unique: t,
      message: i,
      /* This guard is a bit backwards. The rule is permitted to be read-only. 
      If the user does not have permission, we set it to true = permitted to be read-only. */
      permitted: !0
    });
  }
  #r() {
    this.observe(
      B([this.structure.contentTypeProperties, this.variantOptions]),
      ([t, e]) => {
        t.length !== 0 && e.length !== 0 && e.forEach((i) => {
          if (i.language.isDefault) return;
          const n = u.CreateFromPartial(i), a = u.CreateInvariant(), s = {
            unique: `UMB_PREVENT_EDIT_INVARIANT_FROM_NON_DEFAULT_DATASET=${n.toString()}_PROPERTY_${a.toString()}`,
            message: "Shared properties can only be edited in the default language",
            variantId: a,
            datasetVariantId: n,
            permitted: !1
          };
          this.propertyWriteGuard.addRule(s);
        });
      }
    );
  }
}
export {
  _t as UmbDocumentWorkspaceContext,
  _t as default
};
//# sourceMappingURL=document-workspace.context-K0x6EfOX.js.map
