import { UmbStringState as e } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextToken as s } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as a } from "@umbraco-cms/backoffice/class-api";
const b = "Umb.Condition.SectionAlias";
class l extends a {
  constructor(t) {
    super(t, i), this.#e = new e(void 0), this.#t = new e(void 0), this.#s = new e(void 0), this.alias = this.#e.asObservable(), this.pathname = this.#t.asObservable(), this.label = this.#s.asObservable();
  }
  #e;
  #t;
  #s;
  setManifest(t) {
    this.#e.setValue(t?.alias), this.#t.setValue(t?.meta?.pathname), this.#s.setValue(t ? t.meta?.label || t.name : void 0);
  }
  getPathname() {
    return this.#t.getValue();
  }
}
const i = new s("UmbSectionContext"), I = "Umb.Condition.SectionUserPermission", o = "Umb.Repository.Section.Item", h = [
  {
    type: "repository",
    alias: o,
    name: "Section Item Repository",
    api: () => import("./section-item.repository-B9ft9W21.js")
  }
];
export {
  o as U,
  b as a,
  I as b,
  l as c,
  i as d,
  h as m
};
//# sourceMappingURL=manifests-B9HZLmdf.js.map
