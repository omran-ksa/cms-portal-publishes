import { when as y, html as r, css as x, state as k, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import "./cascading-menu-popover.element-HDXQ3sFg.js";
var U = Object.defineProperty, T = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, w = (t, e, i, n) => {
  for (var o = n > 1 ? void 0 : n ? T(e, i) : e, f = t.length - 1, d; f >= 0; f--)
    (d = t[f]) && (o = (n ? d(e, i, o) : d(o)) || o);
  return n && o && U(e, i, o), o;
}, b = (t, e, i) => e.has(t) || g("Cannot " + i), s = (t, e, i) => (b(t, e, "read from private field"), i ? i.call(t) : e.get(t)), h = (t, e, i) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), A = (t, e, i, n) => (b(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (b(t, e, "access private method"), i), p, l, a, M, _, $, v, u;
let m = class extends E {
  constructor() {
    super(...arguments), h(this, a), h(this, p, []), this.isActive = !1, h(this, l), h(this, u, () => {
      this.api && this.editor && this.manifest && (this.isActive = this.api.isActive(this.editor) || c(this, a, v).call(this, s(this, p)) || !1);
    });
  }
  set manifest(t) {
    A(this, l, t), c(this, a, M).call(this);
  }
  get manifest() {
    return s(this, l);
  }
  connectedCallback() {
    super.connectedCallback(), this.editor && (this.editor.on("selectionUpdate", s(this, u)), this.editor.on("update", s(this, u)));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.editor && (this.editor.off("selectionUpdate", s(this, u)), this.editor.off("update", s(this, u)));
  }
  render() {
    const t = this.localize.string(this.manifest?.meta.label);
    return r`
			${y(
      this.manifest?.meta.look === "icon",
      () => r`
					<uui-button
						compact
						label=${t}
						look=${this.isActive ? "outline" : "default"}
						title=${t}
						popovertarget="popover-menu">
						${y(
        this.manifest?.meta.icon,
        (e) => r`<umb-icon name=${e}></umb-icon>`,
        () => r`<span>${t}</span>`
      )}
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`,
      () => r`
					<uui-button
						compact
						label=${t}
						look=${this.isActive ? "outline" : "default"}
						popovertarget="popover-menu">
						<span>${t}</span>
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`
    )}
			${this.renderMenu()}
		`;
  }
  renderMenu() {
    return r`
			<umb-cascading-menu-popover id="popover-menu" placement="bottom-start" .items=${s(this, p)}>
			</umb-cascading-menu-popover>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
M = async function() {
  const t = s(this, l)?.items ?? s(this, l)?.meta.items;
  t && A(this, p, await c(this, a, _).call(this, t));
};
_ = async function(t) {
  const e = [];
  for (const i of t) {
    const n = await c(this, a, $).call(this, i);
    e.push(n);
  }
  return e;
};
$ = async function(t) {
  let e;
  !e && t.elementName && (e = document.createElement(t.elementName)), e && (e.editor = this.editor);
  let i;
  return t.items && (i = await c(this, a, _).call(this, t.items)), {
    icon: t.appearance?.icon ?? t.icon,
    items: i,
    label: t.label,
    style: t.appearance?.style ?? t.style,
    separatorAfter: t.separatorAfter,
    element: e,
    isActive: () => this.api?.isActive(this.editor, t),
    execute: () => this.api?.execute(this.editor, t)
  };
};
v = function(t) {
  return !!t?.some((e) => e.isActive?.() || c(this, a, v).call(this, e.items));
};
u = /* @__PURE__ */ new WeakMap();
m.styles = [
  x`
			:host {
				--uui-button-font-weight: normal;
				--uui-menu-item-flat-structure: 1;

				margin-left: var(--uui-size-space-1);
				margin-bottom: var(--uui-size-space-1);
			}

			uui-button > uui-symbol-expand {
				margin-left: var(--uui-size-space-2);
			}
		`
];
w([
  k()
], m.prototype, "isActive", 2);
m = w([
  C("umb-tiptap-toolbar-menu-element")
], m);
export {
  m as UmbTiptapToolbarMenuElement,
  m as element
};
//# sourceMappingURL=tiptap-toolbar-menu.element-DCnviBSV.js.map
