import { a } from "./base-CzBFGKJV.js";
class o extends a {
  isActive(e, t) {
    return e?.getAttributes("span")?.style?.includes(`font-size: ${t?.data};`) === !0;
  }
  execute(e, t) {
    t?.data && e?.chain().focus().toggleSpanStyle(`font-size: ${t.data};`).run();
  }
}
export {
  o as default
};
//# sourceMappingURL=font-size.tiptap-toolbar-api-CaVqfoTk.js.map
