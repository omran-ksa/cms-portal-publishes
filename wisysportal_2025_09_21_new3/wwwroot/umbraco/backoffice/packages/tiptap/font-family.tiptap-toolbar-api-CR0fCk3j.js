import { a as e } from "./base-CzBFGKJV.js";
class l extends e {
  isActive(a, t) {
    return a?.getAttributes("span")?.style?.includes(`font-family: ${t?.data};`) === !0;
  }
  execute(a, t) {
    t?.data && a?.chain().focus().toggleSpanStyle(`font-family: ${t.data};`).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=font-family.tiptap-toolbar-api-CR0fCk3j.js.map
