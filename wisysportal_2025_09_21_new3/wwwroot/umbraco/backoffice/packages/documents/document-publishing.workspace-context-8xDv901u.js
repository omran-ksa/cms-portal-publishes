import { i as E, g as C, K as y, L as D, A as P } from "./manifests-Z5g9mgXG.js";
import { UmbDocumentPublishingRepository as U } from "./document-publishing.repository-BFL4Yx4p.js";
import { UmbVariantId as l } from "@umbraco-cms/backoffice/variant";
import { UmbControllerBase as T, UmbContextBase as S } from "@umbraco-cms/backoffice/class-api";
import { UmbMergeContentVariantDataController as O } from "@umbraco-cms/backoffice/content";
import { UmbArrayState as V, jsonStringComparison as _, observeMultiple as q } from "@umbraco-cms/backoffice/observable-api";
import { UmbUnpublishDocumentEntityAction as x } from "./unpublish.action-DAQRs3NQ.js";
import { umbOpenModal as p } from "@umbraco-cms/backoffice/modal";
import { UmbRequestReloadStructureForEntityEvent as w, UmbRequestReloadChildrenOfEntityEvent as I } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as N } from "@umbraco-cms/backoffice/action";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
import { firstValueFrom as M } from "@umbraco-cms/backoffice/external/rxjs";
import { DocumentVariantStateModel as g } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLocalizationController as b } from "@umbraco-cms/backoffice/localization-api";
class k extends T {
  constructor() {
    super(...arguments), this.#e = new V([], (t) => t.variantId.toString()), this.variantsWithChanges = this.#e.asObservable(), this.#t = (t) => {
      delete t.updateDate;
    };
  }
  #e;
  /**
   * Checks each variant if there are any pending changes to publish.
   * @param {UmbDocumentPublishedPendingChangesManagerProcessArgs} args - The arguments for the process.
   * @param {UmbDocumentDetailModel} args.persistedData - The persisted document data.
   * @param {UmbDocumentDetailModel} args.publishedData - The published document data.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishedPendingChangesManager
   */
  async process(t) {
    if (!t.persistedData) throw new Error("Persisted data is missing");
    if (!t.publishedData) throw new Error("Published data is missing");
    if (t.persistedData.unique !== t.publishedData.unique)
      throw new Error("Persisted and published data does not have the same unique");
    const i = (t.persistedData.variants?.map((s) => l.Create(s)) ?? []).map(async (s) => {
      const a = await new O(this).process(
        t.publishedData,
        t.persistedData,
        [s],
        [s]
      ), h = structuredClone(a), r = structuredClone(t.publishedData);
      return h.variants.forEach((c) => this.#t(c)), r.variants.forEach((c) => this.#t(c)), h.template = null, r.template = null, _(h, r) === !1 ? { variantId: s } : null;
    }), n = (await Promise.all(i)).filter((s) => s !== null);
    this.#e.setValue(n);
  }
  /**
   * Gets the variants with changes.
   * @returns {Array<UmbPublishedVariantWithPendingChanges>}  {Array<UmbVariantWithChanges>}
   * @memberof UmbDocumentPublishedPendingChangesManager
   */
  getVariantsWithChanges() {
    return this.#e.getValue();
  }
  #t;
  /**
   * Clear all states/values,
   */
  clear() {
    this.#e.setValue([]);
  }
}
class Q extends S {
  constructor(t) {
    super(t, E), this.publishedPendingChanges = new k(this), this.#n = new U(this), this.#s = new b(this), this.#a = (e) => {
      const i = l.Create(e);
      return !this.#t.readOnlyGuard.getIsPermittedForVariant(i);
    }, this.#e = Promise.all([
      this.consumeContext(C, async (e) => {
        this.#t = e, this.#g();
      }).asPromise({ preventTimeout: !0 }).catch(() => {
        this.#t = void 0;
      }),
      this.consumeContext(N, async (e) => {
        this.#i = e;
      }).asPromise({ preventTimeout: !0 }).catch(() => {
        this.#i = void 0;
      })
    ]), this.consumeContext(u, (e) => {
      this.#h = e;
    });
  }
  #e;
  #t;
  #i;
  #n;
  #o;
  #l;
  #h;
  #s;
  async publish() {
    throw new Error("Method not implemented.");
  }
  /**
   * Save and publish the document
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async saveAndPublish() {
    const t = this.getHostElement().style;
    return t.removeProperty("--uui-color-invalid"), t.removeProperty("--uui-color-invalid-emphasis"), t.removeProperty("--uui-color-invalid-standalone"), t.removeProperty("--uui-color-invalid-contrast"), this.#m();
  }
  /**
   * Schedule the document for publishing
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async schedule() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    const { options: i, selected: n } = await this.#c(), s = await p(this, y, {
      data: {
        options: i,
        activeVariants: n,
        pickableFilter: this.#a,
        prevalues: i.map((o) => ({
          unique: o.unique,
          schedule: {
            publishTime: o.variant?.scheduledPublishDate,
            unpublishTime: o.variant?.scheduledUnpublishDate
          }
        }))
      }
    }).catch(() => {
    });
    if (!s?.selection.length) return;
    const a = s?.selection.map((o) => ({
      variantId: l.FromString(o.unique),
      schedule: {
        publishTime: this.#u(o.schedule?.publishTime),
        unpublishTime: this.#u(o.schedule?.unpublishTime)
      }
    })) ?? [];
    if (!a.length) return;
    const h = a.map((o) => o.variantId), r = await this.#t.constructSaveData(h);
    return await this.#t.runMandatoryValidationForSaveData(r), await this.#t.askServerToValidate(r, h), this.#t.validateAndSubmit(
      async () => {
        if (!this.#t)
          throw new Error("Document workspace context is missing");
        await this.#t.performCreateOrUpdate(h, r);
        const { error: o } = await this.#n.publish(t, a);
        if (o)
          return Promise.reject(o);
        const c = { data: { message: this.#s.term("speechBubbles_editContentScheduledSavedText") } };
        this.#h?.peek("positive", c), await this.#t.reload(), this.#r();
        const d = new w({ entityType: e, unique: t });
        this.#i?.dispatchEvent(d);
      },
      async (o) => {
        const c = await this.getContext(u);
        if (!c)
          throw new Error("Notification context is missing");
        return c.peek("danger", {
          data: { message: this.#s.term("speechBubbles_editContentScheduledNotSavedText") }
        }), Promise.reject(o);
      }
    );
  }
  /**
   * Convert a date string to a server time string in ISO format, example: 2021-01-01T12:00:00.000+00:00.
   * The input must be a valid date string, otherwise it will return null.
   * The output matches the DateTimeOffset format in C#.
   * @param dateString
   */
  #u(t) {
    if (!t || t.length === 0)
      return null;
    const e = new Date(t);
    return isNaN(e.getTime()) ? (console.warn(`[Schedule]: Invalid date: ${t}`), null) : e.toISOString();
  }
  /**
   * Publish the document with descendants
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async publishWithDescendants() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    const { options: i, selected: n } = await this.#c(), s = await p(this, D, {
      data: {
        options: i,
        pickableFilter: this.#a
      },
      value: { selection: n }
    }).catch(() => {
    });
    if (!s?.selection.length) return;
    const a = s?.selection.map((m) => l.FromString(m)) ?? [];
    if (!a.length) return;
    const h = await this.getContext(u), r = new b(this), o = await this.observe(this.#t.name(a[0])).asPromise(), c = h?.peek("warning", {
      data: {
        headline: r.term("publish_publishAll", o),
        message: r.term("publish_inProgress")
      }
    }), { error: d } = await this.#n.publishWithDescendants(
      t,
      a,
      s.includeUnpublishedDescendants ?? !1
    );
    if (c?.close(), !d) {
      h?.peek("positive", {
        data: {
          message: r.term("publish_nodePublishAll", o)
        }
      }), await this.#t.reload(), this.#r();
      const m = new w({ entityType: e, unique: t });
      this.#i?.dispatchEvent(m);
      const v = new I({ entityType: e, unique: t });
      this.#i?.dispatchEvent(v);
    }
  }
  /**
   * Unpublish the document
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async unpublish() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    await new x(this, { unique: t, entityType: e, meta: {} }).execute();
  }
  async #m() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    let e = [];
    const { options: i, selected: n } = await this.#c();
    if (i.length === 0)
      throw new Error("No variants are available");
    if (i.length === 1)
      e.push(l.Create(i[0]));
    else {
      const a = await p(this, P, {
        data: {
          headline: this.#s.term("content_saveAndPublishModalTitle"),
          options: i,
          pickableFilter: this.#a
        },
        value: { selection: n }
      }).catch(() => {
      });
      if (!a?.selection.length || !t) return;
      e = a?.selection.map((h) => l.FromString(h)) ?? [];
    }
    const s = await this.#t.constructSaveData(e);
    return await this.#t.runMandatoryValidationForSaveData(s, e), await this.#t.askServerToValidate(s, e), this.#t.validateAndSubmit(
      async () => this.#p(e, s),
      async (a) => {
        await this.#t.performCreateOrUpdate(e, s);
        const h = await this.getContext(u);
        if (!h)
          throw new Error("Notification context is missing");
        return h.peek("danger", {
          data: { message: this.#s.term("speechBubbles_editContentPublishedFailedByValidation") }
        }), await Promise.reject(a);
      }
    );
  }
  async #p(t, e) {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const i = this.#t.getUnique();
    if (!i) throw new Error("Unique is missing");
    const n = this.#t.getEntityType();
    if (!n) throw new Error("Entity type is missing");
    await this.#t.performCreateOrUpdate(t, e);
    const { error: s } = await this.#n.publish(
      i,
      t.map((a) => ({ variantId: a }))
    );
    if (!s) {
      this.#h?.peek("positive", {
        data: {
          message: this.#s.term("speechBubbles_editContentPublishedHeader")
        }
      }), await this.#t.reload(), this.#r();
      const a = new w({ unique: i, entityType: n });
      this.#i?.dispatchEvent(a);
    }
  }
  #a;
  async #c() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const e = (await M(this.#t.variantOptions)).filter((n) => n.segment === null);
    let i = this.#w();
    return i = i.filter((n) => e.some((s) => s.unique === n)), i = i.filter(
      (n) => this.#t.readOnlyGuard.getIsPermittedForVariant(new l(n)) === !1
    ), {
      options: e,
      selected: i
    };
  }
  #w() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    const e = this.#t.splitView.getActiveVariants().map((r) => l.Create(r)), i = this.#t.getChangedVariants(), n = [...e, ...i], s = n.filter((r) => r.segment !== null).map((r) => r.toSegmentInvariant()), a = [...n, ...s].map(
      (r) => r.toString()
    );
    return [...new Set(a)];
  }
  async #g() {
    this.#t && (this.observe(
      q([this.#t.unique, this.#t.isNew]),
      ([t, e]) => {
        t !== this.#l && this.#f(), this.#l = t, e === !1 && t && this.#r();
      },
      "uniqueObserver"
    ), this.observe(
      this.#t.persistedData,
      () => this.#d(),
      "umbPersistedDataObserver"
    ));
  }
  #b() {
    return this.#t?.getVariants()?.some(
      (e) => e.state === g.PUBLISHED || e.state === g.PUBLISHED_PENDING_CHANGES
    ) ?? !1;
  }
  async #r() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    if (this.#t.getIsNew()) return;
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    if (!this.#b()) return;
    const { data: i } = await this.#n.published(t);
    this.#o = i, this.#d();
  }
  #d() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getPersistedData(), e = this.#o;
    !t || !e || this.publishedPendingChanges.process({ persistedData: t, publishedData: e });
  }
  #f() {
    this.#o = void 0, this.publishedPendingChanges.clear();
  }
}
export {
  Q as UmbDocumentPublishingWorkspaceContext,
  Q as api
};
//# sourceMappingURL=document-publishing.workspace-context-8xDv901u.js.map
