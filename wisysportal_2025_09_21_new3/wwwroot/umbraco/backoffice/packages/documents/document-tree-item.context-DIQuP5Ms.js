import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
import "./manifests-Z5g9mgXG.js";
import { U as e } from "./document-item-data-resolver-ClBbqArt.js";
import { UmbDefaultTreeItemContext as i } from "@umbraco-cms/backoffice/tree";
import { UmbIsTrashedEntityContext as r } from "@umbraco-cms/backoffice/recycle-bin";
import { UmbAncestorsEntityContext as o } from "@umbraco-cms/backoffice/entity";
class x extends i {
  constructor(s) {
    super(s), this.#s = new r(this), this.#e = new o(this), this.#t = new e(this), this.name = this.#t.name, this.icon = this.#t.icon, this.isDraft = this.#t.isDraft, this.ancestors = this._treeItem.asObservablePart((t) => t?.ancestors ?? []), this.isTrashed = this._treeItem.asObservablePart((t) => t?.isTrashed ?? !1), this.observe(this.isTrashed, (t) => {
      this.#s.setIsTrashed(t);
    }), this.observe(this.ancestors, (t) => {
      this.#e.setAncestors(t);
    });
  }
  #s;
  #e;
  #t;
  setTreeItem(s) {
    super.setTreeItem(s), this.#t.setData(s);
  }
}
export {
  x as UmbDocumentTreeItemContext,
  x as api
};
//# sourceMappingURL=document-tree-item.context-DIQuP5Ms.js.map
