import { g as r } from "./manifests-Z5g9mgXG.js";
import { U as s } from "./property-value-user-permission-workspace-context-base-0Wk9BTr_.js";
class a extends s {
  #e;
  constructor(e) {
    super(e), this.consumeContext(r, (t) => {
      this.#e = t, this.#t();
    });
  }
  #t() {
    if (!this.#e) return;
    const e = this.#e;
    this.observe(this.#e.structure.contentTypeProperties, (t) => {
      t.length !== 0 && (this.#e.propertyViewGuard.fallbackToNotPermitted(), this.#e.propertyWriteGuard.fallbackToNotPermitted(), this._setPermissions(t, e.propertyViewGuard, e.propertyWriteGuard));
    });
  }
}
export {
  a as UmbDocumentPropertyValueUserPermissionWorkspaceContext,
  a as api
};
//# sourceMappingURL=document-property-value-user-permission.workspace-context-CoOhGJp3.js.map
