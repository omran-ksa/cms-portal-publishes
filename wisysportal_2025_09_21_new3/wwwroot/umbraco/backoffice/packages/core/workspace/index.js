import { UmbActionBase as E, UMB_ACTION_EVENT_CONTEXT as c } from "@umbraco-cms/backoffice/action";
import { c as U, d as C, a as f } from "../workspace.element-pzurGr3t.js";
import { q as Ut, v as Ct, r as ft, p as Tt, s as Pt, t as At, u as St, b as Ot, o as Vt, n as xt, B as Nt, U as Wt, k as Rt, C as kt, w as Dt, x as qt, y as It, e as Bt, f as Mt, D as Lt, g as Kt, h as Xt, i as Ht, z as jt, A as Yt, j as $t, l as Ft, m as Gt, D as zt } from "../workspace.element-pzurGr3t.js";
import { UmbBooleanState as m, UmbArrayState as b, UmbStringState as T, UmbObjectState as p, jsonStringComparison as P } from "@umbraco-cms/backoffice/observable-api";
import { UmbGuardManagerBase as A, UmbStateManager as v, UmbDeprecation as S, umbUrlPatternToString as O, ensurePathEndsWithSlash as V } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as _, UmbContextBase as y } from "@umbraco-cms/backoffice/class-api";
import { UMB_MODAL_CONTEXT as x, umbOpenModal as N, UMB_DISCARD_CHANGES_MODAL as W } from "@umbraco-cms/backoffice/modal";
import { UmbEntityContext as R } from "@umbraco-cms/backoffice/entity";
import { UmbEntityUpdatedEvent as h, UmbRequestReloadChildrenOfEntityEvent as k, UmbRequestReloadStructureForEntityEvent as D } from "@umbraco-cms/backoffice/entity-action";
import { UmbExtensionApiInitializer as q } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as I } from "@umbraco-cms/backoffice/extension-registry";
import { UmbValidationContext as B } from "@umbraco-cms/backoffice/validation";
import { UmbId as M } from "@umbraco-cms/backoffice/id";
import { UmbApiError as L } from "@umbraco-cms/backoffice/resources";
import { UmbVariantId as l, UmbVariantContext as K } from "@umbraco-cms/backoffice/variant";
import { UMB_PROPERTY_DATASET_CONTEXT as X } from "@umbraco-cms/backoffice/property";
class dt extends E {
  /**
   * By specifying the href, the action will act as a link.
   * The `execute` method will not be called.
   * @abstract
   * @returns {string | undefined}
   */
  getHref() {
    return Promise.resolve(void 0);
  }
  /**
   * By specifying the `execute` method, the action will act as a button.
   * @abstract
   * @returns {Promise<void>}
   */
  execute() {
    return Promise.resolve();
  }
}
class g extends E {
  constructor() {
    super(...arguments), this._isDisabled = new m(!1), this.isDisabled = this._isDisabled.asObservable();
  }
  /**
   * By specifying the href, the action will act as a link.
   * The `execute` method will not be called.
   * @abstract
   * @returns {string | undefined}
   */
  getHref() {
    return Promise.resolve(void 0);
  }
  /**
   * By specifying the `execute` method, the action will act as a button.
   * @abstract
   * @returns {Promise<void>}
   */
  execute() {
    return Promise.resolve();
  }
  /**
   * Disables the action.
   * @memberof UmbWorkspaceActionBase
   */
  disable() {
    this._isDisabled.setValue(!0);
  }
  /**
   * Enables the action.
   * @memberof UmbWorkspaceActionBase
   */
  enable() {
    this._isDisabled.setValue(!1);
  }
}
class ct extends g {
  constructor(t, s) {
    super(t, s), this._retrieveWorkspaceContext = this.consumeContext(
      s.workspaceContextToken ?? U,
      (e) => {
        this._workspaceContext = e, this.#t(), this._gotWorkspaceContext();
      }
    ).asPromise().catch(() => {
    });
  }
  #t() {
    this.observe(
      this._workspaceContext?.unique,
      (t) => {
        t === void 0 ? this.disable() : this.enable();
      },
      "saveWorkspaceActionUniqueObserver"
    );
  }
  _gotWorkspaceContext() {
  }
  async execute() {
    return await this._retrieveWorkspaceContext, await this._workspaceContext?.requestSave();
  }
}
class pt extends g {
  constructor(t, s) {
    super(t, s), this._retrieveWorkspaceContext = this.consumeContext(
      s.workspaceContextToken ?? C,
      (e) => {
        this._workspaceContext = e, this.#t(), this._gotWorkspaceContext();
      }
    ).asPromise();
  }
  #t() {
    this.observe(
      this._workspaceContext?.unique,
      (t) => {
        t === void 0 ? this.disable() : this.enable();
      },
      "saveWorkspaceActionUniqueObserver"
    );
  }
  _gotWorkspaceContext() {
  }
  async execute() {
    return await this._retrieveWorkspaceContext, await this._workspaceContext.requestSubmit();
  }
}
class H extends A {
  isPermittedForName() {
    return this._rules.asObservablePart((t) => this.#t(t));
  }
  #t(t) {
    return t.some((s) => s.permitted === !1) ? !1 : t.some((s) => s.permitted === !0) ? !0 : this._fallback;
  }
}
class j extends _ {
  constructor() {
    super(...arguments), this.#t = new b([], (t) => t.path), this.routes = this.#t.asObservable(), this.#e = new T("");
  }
  #t;
  #e;
  /**
   * Set the routes for the workspace.
   * @param {Array<UmbRoute>} routes The routes for the workspace.
   * @memberof UmbWorkspaceRouteManager
   */
  setRoutes(t) {
    const s = [...t];
    t.length > 0 && s.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    });
    const e = s.map((i) => {
      const a = i.setup;
      return i.setup = (r, o) => {
        this.#e.setValue(o.match.fragments.consumed), a && a(r, o);
      }, i;
    });
    this.#t.setValue([...e]);
  }
  /**
   * Get the routes for the workspace.
   * @returns {Array<UmbRoute>} The routes for the workspace.
   * @memberof UmbWorkspaceRouteManager
   */
  getRoutes() {
    return this.#t.getValue();
  }
  /**
   * Get the active local path.
   * @returns {*}  {string}
   * @memberof UmbWorkspaceRouteManager
   */
  getActiveLocalPath() {
    return this.#e.getValue();
  }
}
class w extends y {
  /*
  	Concept notes: [NL]
  	Considerations are, if we bring a dirty state (observable) we need to maintain it all the time.
  	This might be too heavy process, so we might want to consider just having a get dirty state method.
  */
  //#isDirty = new UmbBooleanState(undefined);
  //isDirty = this.#isNew.asObservable();
  constructor(t, s) {
    super(t, f.toString()), this.#t = [], this.#i = new m(void 0), this.isNew = this.#i.asObservable(), this.routes = new j(this), this.#a = (e) => {
      this.#e && (this.#r?.(e), this.#e = void 0, this.#s = void 0, this.#r = void 0);
    }, this.#n = () => {
      this.#s?.(), this.#e = void 0, this.#s = void 0, this.#r = void 0;
    }, this.#o = () => {
      this.#n(), this._closeModal();
    }, this.workspaceAlias = s, this.consumeContext(x, (e) => {
      this.modalContext = e;
    });
  }
  #t;
  /**
   * Appends a validation context to the workspace.
   * @param context
   */
  addValidationContext(t) {
    this.#t.push(t);
  }
  #e;
  #s;
  #r;
  #i;
  resetState() {
    this.#t.forEach((t) => t.reset()), this.#i.setValue(void 0);
  }
  getIsNew() {
    return this.#i.getValue();
  }
  setIsNew(t) {
    this.#i.setValue(t);
  }
  /**
   * If a Workspace has multiple validation contexts, then this method can be overwritten to return the correct one.
   * @returns Promise that resolves to void when the validation is complete.
   */
  async validate() {
    return await Promise.all(this.#t.map((t) => t.validate()));
  }
  async requestSubmit() {
    return this.validateAndSubmit(
      () => this.submit(),
      (t) => this.invalidSubmit(t)
    );
  }
  async _validateAndLog() {
    await this.validate().catch(async () => (console.warn(
      "Validation failed because of these validation messages still begin present: ",
      this.#t.flatMap((t) => t.messages.getMessages())
    ), Promise.reject()));
  }
  async validateAndSubmit(t, s) {
    return this.#e ? this.#e : (this.#e = new Promise((e, i) => {
      this.#s = e, this.#r = i;
    }), this._validateAndLog().then(
      async () => {
        t().then(this.#o, this.#a);
      },
      async (e) => {
        s(e).then(this.#n, this.#a);
      }
    ), await this.#e);
  }
  #a;
  #n;
  #o;
  _closeModal() {
    this.modalContext && (this.modalContext?.setValue(this.getData()), this.modalContext?.submit());
  }
  invalidSubmit(t) {
    return Promise.reject(t);
  }
  destroy() {
    this.#i.destroy(), this.routes.destroy(), super.destroy(), this.#e = void 0, this.#s = void 0, this.#r = void 0, this.#t.forEach((t) => t.destroy()), this.#t = [];
  }
}
class mt extends w {
}
class Y extends _ {
  constructor() {
    super(...arguments), this._persisted = new p(void 0), this._current = new p(void 0), this.persisted = this._persisted.asObservable(), this.current = this._current.asObservable();
  }
  _sortCurrentData(t, s) {
    return s;
  }
  /**
   * Gets persisted data
   * @returns {(ModelType | undefined)}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getPersisted() {
    return this._persisted.getValue();
  }
  /**
   * Sets the persisted data
   * @param {(ModelType | undefined)} data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  setPersisted(t) {
    this._persisted.setValue(t);
  }
  /**
   * Updates the persisted data
   * @param {Partial<ModelType>} partialData
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  updatePersisted(t) {
    this._persisted.update(t);
  }
  /**
   * Creates an observable part of the persisted data
   * @template ReturnType
   * @param {(MappingFunction<ModelType | undefined, ReturnType>)} mappingFunction
   * @returns {*}
   * @memberof UmbEntityWorkspaceDataManager
   */
  createObservablePartOfPersisted(t) {
    return this._persisted.asObservablePart(t);
  }
  /**
   * Gets the current data
   * @returns {(ModelType | undefined)}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getCurrent() {
    return this._current.getValue();
  }
  /**
   * Sets the current data
   * @param {(ModelType | undefined)} data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  setCurrent(t) {
    if (t) {
      const s = this._persisted.getValue();
      s && (t = this._sortCurrentData(s, t));
    }
    this._current.setValue(t);
  }
  /**
   * Updates the current data
   * @param {Partial<ModelType>} partialData
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  updateCurrent(t) {
    if (t) {
      const s = this._persisted.getValue();
      s && (t = this._sortCurrentData(s, t));
    }
    this._current.update(t);
  }
  /**
   * Creates an observable part of the current data
   * @template ReturnType
   * @param {(MappingFunction<ModelType | undefined, ReturnType>)} mappingFunction
   * @returns {*}
   * @memberof UmbEntityWorkspaceDataManager
   */
  createObservablePartOfCurrent(t) {
    return this._current.asObservablePart(t);
  }
  /**
   * Checks if there are unpersisted changes
   * @returns {*}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getHasUnpersistedChanges() {
    const t = this._persisted.getValue(), s = this._current.getValue(), e = P(t, s) === !1;
    return e && console.warn("Changes detected based on JSON comparison between", t, "and", s), e;
  }
  /**
   * Resets the current data to the persisted data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  resetCurrent() {
    this._current.setValue(this._persisted.getValue());
  }
  /**
   * Clears the data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  clear() {
    this._persisted.setValue(void 0), this._current.setValue(void 0);
  }
  destroy() {
    this._persisted?.destroy(), this._current?.destroy(), this._persisted = void 0, this._current = void 0, super.destroy();
  }
}
const u = "umbLoadingEntityDetail", $ = "umbForbiddenEntityDetail";
class F extends w {
  constructor(t, s) {
    super(t, s.workspaceAlias), this.IS_ENTITY_DETAIL_WORKSPACE_CONTEXT = !0, this._data = new Y(this), this.#t = new R(this), this.entityType = this.#t.entityType, this.unique = this.#t.unique, this.data = this._data.current, this.persistedData = this._data.persisted, this.loading = new v(this), this.forbidden = new v(this), this.#s = new p(void 0), this._internal_createUnderParent = this.#s.asObservable(), this._internal_createUnderParentEntityUnique = this.#s.asObservablePart(
      (e) => e ? e.unique : void 0
    ), this._internal_createUnderParentEntityType = this.#s.asObservablePart(
      (e) => e ? e.entityType : void 0
    ), this.parentUnique = this.#s.asObservablePart(
      (e) => e ? e.unique : void 0
    ), this.parentEntityType = this.#s.asObservablePart(
      (e) => e ? e.entityType : void 0
    ), this.validationContext = new B(this), this.#i = !1, this.#a = new Promise((e) => {
      this.#i ? e() : this.#r = e;
    }), this.#n = !1, this.#o = async (e) => {
      const i = e.detail.url;
      if (this.#n)
        return !0;
      if (this._checkWillNavigateAway(i) && this.getHasUnpersistedChanges()) {
        e.preventDefault();
        try {
          return await N(this, W), this.#n = !0, history.pushState({}, "", e.detail.url), !0;
        } catch {
          return !1;
        }
      }
      return !0;
    }, this._workspaceEventUnique = M.new(), this.#h = (e) => {
      const i = e.getUnique(), a = e.getEntityType(), r = e.getEventUnique();
      a === this.getEntityType() && i === this.getUnique() && r !== this._workspaceEventUnique && this.reload();
    }, this.addValidationContext(this.validationContext), this.#t.setEntityType(s.entityType), window.addEventListener("willchangestate", this.#o), this.#l(s.detailRepositoryAlias), this.consumeContext(c, (e) => {
      this.#e = e, this.#e?.removeEventListener(
        h.TYPE,
        this.#h
      ), this.#e?.addEventListener(
        h.TYPE,
        this.#h
      );
    });
  }
  #t;
  #e;
  #s;
  #r;
  #i;
  #a;
  /**
   * Get the entity type
   * @returns { string } The entity type
   */
  getEntityType() {
    const t = this.#t.getEntityType();
    if (!t) throw new Error("Entity type is not set");
    return t;
  }
  /**
   * Get the current data
   * @returns { DetailModelType | undefined } The entity context
   */
  getData() {
    return this._data.getCurrent();
  }
  /**
   * Get the persisted data
   * @returns { DetailModelType | undefined } The persisted data
   */
  getPersistedData() {
    return this._data.getPersisted();
  }
  /**
   * Get the unique
   * @returns { string | undefined } The unique identifier
   */
  getUnique() {
    return this.#t.getUnique();
  }
  setUnique(t) {
    this.#t.setUnique(t);
  }
  /**
   * Gets the parent that a new entity will be created under.
   * @returns { UmbEntityModel | undefined } The parent entity
   */
  _internal_getCreateUnderParent() {
    return this.#s.getValue();
  }
  /**
   * Sets the parent that a new entity will be created under.
   * @param {UmbEntityModel} parent The parent entity
   */
  _internal_setCreateUnderParent(t) {
    this.#s.setValue(t);
  }
  /**
   * Get the parent
   * @deprecated Will be removed in v.18: Use UMB_PARENT_ENTITY_CONTEXT instead to get the parent both when creating and editing.
   * @returns { UmbEntityModel | undefined } The parent entity
   */
  getParent() {
    return this.#s.getValue();
  }
  /**
   * Set the parent
   * @deprecated Will be removed in v.18.
   * @param { UmbEntityModel } parent The parent entity
   */
  setParent(t) {
    this.#s.setValue(t);
  }
  /**
   * Get the parent unique
   * @deprecated Will be removed in v.18: Use UMB_PARENT_ENTITY_CONTEXT instead to get the parent both when creating and editing.
   * @returns { string | undefined } The parent unique identifier
   */
  getParentUnique() {
    return this.#s.getValue()?.unique;
  }
  /**
   * Get the parent entity type
   * @deprecated Will be removed in v.18
   * @returns { string | undefined } The parent entity type
   */
  getParentEntityType() {
    return this.#s.getValue()?.entityType;
  }
  async load(t) {
    if (t === this.getUnique() && this._getDataPromise)
      return await this._getDataPromise;
    this.resetState(), this.setIsNew(!1), this.#t.setUnique(t), this.loading.addState({ unique: u, message: `Loading ${this.getEntityType()} Details` }), await this.#a, this._getDataPromise = this._detailRepository.requestByUnique(t);
    const s = await this._getDataPromise, { data: e, error: i, asObservable: a } = s;
    return i ? (this.removeUmbControllerByAlias("umbEntityDetailTypeStoreObserver"), L.isUmbApiError(i) && (i.status === 401 || i.status === 403) && this.forbidden.addState({ unique: $, message: i.message })) : e && (this._data.setPersisted(e), this._data.setCurrent(e), this.observe(a?.(), (r) => this.#d(r), "umbEntityDetailTypeStoreObserver")), this.loading.removeState(u), s;
  }
  /**
   * Reload the workspace data
   * @returns { Promise<void> } The promise of the reload
   */
  async reload() {
    const t = this.getUnique();
    if (!t) throw new Error("Unique is not set");
    const { data: s } = await this._detailRepository.requestByUnique(t);
    s && (this._data.setPersisted(s), this._data.setCurrent(s));
  }
  /**
   * Method to check if the workspace data is loaded.
   * @returns { Promise<any> | undefined } true if the workspace data is loaded.
   * @memberof UmbEntityWorkspaceContextBase
   */
  isLoaded() {
    return this._getDataPromise;
  }
  /**
   * Create a data scaffold
   * @param {CreateArgsType} args The arguments to create the scaffold.
   * @param {UmbEntityModel} args.parent The parent entity.
   * @param {UmbEntityUnique} args.parent.unique The unique identifier of the parent entity.
   * @param {string} args.parent.entityType The entity type of the parent entity.
   * @param {Partial<DetailModelType>} args.preset The preset data.
   * @returns { Promise<any> | undefined } The data of the scaffold.
   */
  async createScaffold(t) {
    this.resetState(), this.loading.addState({ unique: u, message: `Creating ${this.getEntityType()} scaffold` }), await this.#a, this.setParent(t.parent), this._internal_setCreateUnderParent(t.parent);
    const s = this._detailRepository.createScaffold(t.preset);
    this._getDataPromise = s;
    let { data: e } = await s;
    return e && (e = await this._scaffoldProcessData(e), this.modalContext && (e = { ...e, ...this.modalContext.data.preset }), this.setIsNew(!0), this.#t.setUnique(e.unique), this._data.setPersisted(e), this._data.setCurrent(e)), this.loading.removeState(u), e;
  }
  async _scaffoldProcessData(t) {
    return t;
  }
  async submit() {
    await this.#a;
    const t = this.getData();
    if (!t)
      throw new Error("Data is not set");
    if (t.unique === void 0)
      throw new Error("Unique is not set");
    if (this.getIsNew()) {
      const s = this.#s.getValue();
      if (s?.unique === void 0) throw new Error("Parent unique is missing");
      if (!s.entityType) throw new Error("Parent entity type is missing");
      await this._create(t, s);
    } else
      await this._update(t);
  }
  /**
   * Deletes the entity.
   * @param unique The unique identifier of the entity to delete.
   */
  async delete(t) {
    await this.#a, await this._detailRepository.delete(t);
  }
  /**
   * Check if the workspace is about to navigate away.
   * @protected
   * @param {string} newUrl The new url that the workspace is navigating to.
   * @returns { boolean} true if the workspace is navigating away.
   * @memberof UmbEntityWorkspaceContextBase
   */
  _checkWillNavigateAway(t) {
    return !t.includes(this.routes.getActiveLocalPath());
  }
  async _create(t, s) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const { error: e, data: i } = await this._detailRepository.create(t, s.unique);
    if (e || !i)
      throw e?.message ?? "Repository did not return data after create.";
    this.#t.setUnique(i.unique), this._data.setPersisted(i), this._data.setCurrent(i), this.setIsNew(!1);
    const a = await this.getContext(c);
    if (!a) throw new Error("Event context not found.");
    const r = new k({
      entityType: s.entityType,
      unique: s.unique
    });
    a.dispatchEvent(r);
  }
  async _update(t) {
    const { error: s, data: e } = await this._detailRepository.save(t);
    if (s || !e)
      throw s?.message ?? "Repository did not return data after create.";
    this._data.setPersisted(e), this._data.setCurrent(e);
    const i = this.getUnique(), a = this.getEntityType(), r = await this.getContext(c);
    if (!r) throw new Error("Event context not found.");
    const o = new D({ unique: i, entityType: a });
    r.dispatchEvent(o);
    const d = new h({
      unique: i,
      entityType: a,
      eventUnique: this._workspaceEventUnique
    });
    r.dispatchEvent(d);
  }
  #n;
  #o;
  /**
   * Check if there are unpersisted changes.
   * @returns { boolean } true if there are unpersisted changes.
   */
  getHasUnpersistedChanges() {
    return this._data.getHasUnpersistedChanges();
  }
  // @deprecated use getHasUnpersistedChanges instead, will be removed in v17.0
  _getHasUnpersistedChanges() {
    return new S({
      removeInVersion: "17",
      deprecated: "_getHasUnpersistedChanges",
      solution: "use public getHasUnpersistedChanges instead."
    }).warn(), this.getHasUnpersistedChanges();
  }
  resetState() {
    super.resetState(), this.loading.clear(), this.forbidden.clear(), this._data.clear(), this.#n = !1, this._getDataPromise = void 0;
  }
  #u() {
    this._detailRepository && (this.#i = !0, this.#r?.());
  }
  #l(t) {
    if (!t) throw new Error("Entity Workspace must have a repository alias.");
    new q(
      this,
      I,
      t,
      [],
      (s, e) => {
        this._detailRepository = s ? e.api : void 0, this.#u();
      }
    );
  }
  #d(t) {
    t || this._data.clear();
  }
  #h;
  destroy() {
    window.removeEventListener("willchangestate", this.#o), this.#e?.removeEventListener(
      h.TYPE,
      this.#h
    ), this._detailRepository?.destroy(), this.#t.destroy(), this._getDataPromise = void 0, super.destroy();
  }
}
class _t extends F {
  constructor(t, s) {
    super(t, s), this.IS_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT = !0, this.name = this._data.createObservablePartOfCurrent((e) => e?.name), this.nameWriteGuard = new H(this), this.nameWriteGuard.fallbackToPermitted();
  }
  getName() {
    return this._data.getCurrent()?.name;
  }
  setName(t) {
    this._data.updateCurrent({ name: t });
  }
}
const G = Symbol("IsNewRedirectControllerAlias");
class vt extends _ {
  constructor(t, s, e) {
    super(t, G), this.observe(s.isNew, (i) => {
      this.timeout && clearTimeout(this.timeout), i === !1 && (this.timeout = setTimeout(() => {
        const a = s.getUnique();
        if (e && a) {
          const r = e.absoluteRouterPath;
          if (r) {
            const o = O(V(r) + "edit/:id", {
              id: a
            });
            this.destroy();
            const d = window.location.href;
            if (e.localActiveViewPath === void 0 || e.localActiveViewPath === "" || !d.includes(e.localActiveViewPath))
              return;
            window.history.replaceState(null, "", o);
          }
        }
        this.timeout = void 0;
      }, 500));
    });
  }
  destroy() {
    super.destroy(), this.timeout && (clearTimeout(this.timeout), this.timeout = void 0);
  }
}
class Et {
  constructor() {
    this.#t = new b([], (t) => t.index).sortBy(
      (t, s) => (t.index || 0) - (s.index || 0)
    ), this.activeVariantsInfo = this.#t.asObservable(), this.splitViewActive = this.#t.asObservablePart((t) => t.length > 1);
  }
  #t;
  getWorkspaceRoute() {
    return this._routeBase;
  }
  setWorkspaceRoute(t) {
    this._routeBase = t;
  }
  setActiveVariant(t, s, e) {
    this.#t.appendOneAt({ index: t, culture: s ?? null, segment: e ?? null }, t);
  }
  getActiveVariants() {
    return this.#t.getValue();
  }
  removeActiveVariant(t) {
    this.getActiveVariants().length > 1 && this.#t.removeOne(t);
  }
  activeVariantByIndex(t) {
    return this.#t.asObservablePart((s) => s.find((e) => e.index === t) || void 0);
  }
  switchVariant(t, s) {
    const e = this.getWorkspaceRoute();
    if (e) {
      const i = this.getActiveVariants();
      if (i && t < i.length) {
        const a = [...i];
        a[t] = { index: t, culture: s.culture, segment: s.segment };
        const r = a.map((o) => l.Create(o).toString()).join("_&_");
        return history.pushState(null, "", `${e}/${r}`), !0;
      }
    }
    return !1;
  }
  openSplitView(t) {
    const s = this.getActiveVariants()[0], e = this.getWorkspaceRoute();
    return s && e ? (history.pushState(null, "", `${e}/${l.Create(s)}_&_${t}`), !0) : !1;
  }
  closeSplitView(t) {
    const s = this.getWorkspaceRoute();
    if (s) {
      const e = this.getActiveVariants();
      if (e && t < e.length) {
        const a = e.filter((r) => r.index !== t).map((r) => l.Create(r)).join("_&_");
        return history.pushState(null, "", `${s}/${a}`), !0;
      }
    }
    return !1;
  }
}
function bt(n) {
  if (n)
    return Object.keys(n).map((t) => ({
      alias: t,
      value: n[t]
    }));
}
class yt extends y {
  constructor(t, s) {
    super(t, X), this.#t = new m(!1), this.readOnly = this.#t.asObservable(), this.#s = new K(this).inherit(), this.#e = s, this.name = this.#e.name, this.#s.setVariantId(this.getVariantId());
  }
  #t;
  #e;
  #s;
  // default data:
  getVariantId() {
    return l.CreateInvariant();
  }
  getEntityType() {
    return this.#e.getEntityType();
  }
  getUnique() {
    return this.#e.getUnique();
  }
  getName() {
    return this.#e.getName();
  }
  setName(t) {
    this.#e.setName(t);
  }
  get properties() {
    return this.#e.values;
  }
  getProperties() {
    return this.#e.getValues();
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this.#e.propertyValueByAlias(t);
  }
  /**
   * @param {string} propertyAlias - The alias of the property
   * @param {unknown} value - The value to be set for this property
   * @returns {Promise<void>} - an promise which resolves once the value has been set.
   */
  async setPropertyValue(t, s) {
    return this.#e.setPropertyValue(t, s);
  }
  getReadOnly() {
    return this.#t.getValue();
  }
}
export {
  Ut as UMB_ENTITY_DETAIL_WORKSPACE_CONTEXT,
  Ct as UMB_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT,
  ft as UMB_ENTITY_WORKSPACE_CONTEXT,
  Tt as UMB_NAMABLE_WORKSPACE_CONTEXT,
  Pt as UMB_PUBLISHABLE_WORKSPACE_CONTEXT,
  At as UMB_ROUTABLE_WORKSPACE_CONTEXT,
  U as UMB_SAVEABLE_WORKSPACE_CONTEXT,
  St as UMB_SUBMITTABLE_TREE_ENTITY_WORKSPACE_CONTEXT,
  C as UMB_SUBMITTABLE_WORKSPACE_CONTEXT,
  Ot as UMB_VARIANT_WORKSPACE_CONTEXT,
  Vt as UMB_WORKSPACE_CONDITION_ALIAS,
  f as UMB_WORKSPACE_CONTEXT,
  xt as UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS,
  Nt as UMB_WORKSPACE_MODAL,
  Wt as UMB_WORKSPACE_PATH_PATTERN,
  Rt as UMB_WORKSPACE_SPLIT_VIEW_CONTEXT,
  kt as UMB_WORKSPACE_VIEW_PATH_PATTERN,
  mt as UmbEditableWorkspaceContextBase,
  Dt as UmbEntityDetailForbiddenElement,
  qt as UmbEntityDetailNotFoundElement,
  F as UmbEntityDetailWorkspaceContextBase,
  It as UmbEntityDetailWorkspaceEditorElement,
  _t as UmbEntityNamedDetailWorkspaceContextBase,
  Y as UmbEntityWorkspaceDataManager,
  yt as UmbInvariantWorkspacePropertyDatasetContext,
  ct as UmbSaveWorkspaceAction,
  pt as UmbSubmitWorkspaceAction,
  w as UmbSubmittableWorkspaceContextBase,
  g as UmbWorkspaceActionBase,
  Bt as UmbWorkspaceActionMenuElement,
  dt as UmbWorkspaceActionMenuItemBase,
  Mt as UmbWorkspaceEditorElement,
  Lt as UmbWorkspaceElement,
  Kt as UmbWorkspaceEntityActionMenuElement,
  Xt as UmbWorkspaceFooterLayoutElement,
  Ht as UmbWorkspaceHeaderNameEditableElement,
  jt as UmbWorkspaceInfoAppLayoutElement,
  vt as UmbWorkspaceIsNewRedirectController,
  G as UmbWorkspaceIsNewRedirectControllerAlias,
  Yt as UmbWorkspaceModalElement,
  j as UmbWorkspaceRouteManager,
  $t as UmbWorkspaceSplitViewContext,
  Ft as UmbWorkspaceSplitViewElement,
  Et as UmbWorkspaceSplitViewManager,
  Gt as UmbWorkspaceSplitViewVariantSelectorElement,
  zt as element,
  bt as umbObjectToPropertyValueArray
};
//# sourceMappingURL=index.js.map
