import { classMap as v, nothing as b, html as c, css as I, property as x, state as m, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { UmbTreeItemElementBase as C } from "@umbraco-cms/backoffice/tree";
var E = Object.defineProperty, P = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, p = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? P(t, i) : t, u = e.length - 1, d; u >= 0; u--)
    (d = e[u]) && (s = (n ? d(t, i, s) : d(s)) || s);
  return n && s && E(t, i, s), s;
}, f = (e, t, i) => t.has(e) || g("Cannot " + i), a = (e, t, i) => (f(e, t, "read from private field"), i ? i.call(e) : t.get(e)), _ = (e, t, i) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $ = (e, t, i, n) => (f(e, t, "write to private field"), t.set(e, i), i), h = (e, t, i) => (f(e, t, "access private method"), i), r, l, y, D, w;
let o = class extends C {
  constructor() {
    super(...arguments), _(this, l), _(this, r), this._name = "", this._isDraft = !1, this._icon = "";
  }
  get api() {
    return a(this, r);
  }
  set api(e) {
    $(this, r, e), a(this, r) && (this.observe(a(this, r).name, (t) => this._name = t || ""), this.observe(a(this, r).isDraft, (t) => this._isDraft = t || !1), this.observe(a(this, r).icon, (t) => this._icon = t || "")), super.api = e;
  }
  renderIconContainer() {
    const e = this._icon;
    return c`
			<span id="icon-container" slot="icon" class=${v({ draft: this._isDraft })}>
				${e ? c`
							<umb-icon id="icon" slot="icon" name="${this._getIconToRender(e)}"></umb-icon>
							${h(this, l, y).call(this)}
						` : b}
			</span>
		`;
  }
  renderLabel() {
    return c`<span id="label" slot="label" class=${v({ draft: this._isDraft })}>${this._name}</span> `;
  }
};
r = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
y = function() {
  return this.item?.isProtected ? h(this, l, w).call(this) : this.item?.documentType.collection ? h(this, l, D).call(this) : b;
};
D = function() {
  return c`<umb-icon id="state-icon" slot="icon" name="icon-grid" title="Collection"></umb-icon>`;
};
w = function() {
  return c`<umb-icon id="state-icon" slot="icon" name="icon-lock" title="Protected"></umb-icon>`;
};
o.styles = [
  k,
  I`
			#icon-container {
				position: relative;
			}

			#icon {
				vertical-align: middle;
			}

			#label {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			#state-icon {
				position: absolute;
				bottom: -5px;
				right: -5px;
				font-size: 10px;
				background: var(--uui-color-surface);
				width: 14px;
				height: 14px;
				border-radius: 100%;
				line-height: 14px;
			}

			:hover #state-icon {
				background: var(--uui-color-surface-emphasis);
			}

			/** Active */
			[active] #state-icon {
				background: var(--uui-color-current);
			}

			[active]:hover #state-icon {
				background: var(--uui-color-current-emphasis);
			}

			/** Selected */
			[selected] #state-icon {
				background-color: var(--uui-color-selected);
			}

			[selected]:hover #state-icon {
				background-color: var(--uui-color-selected-emphasis);
			}

			/** Disabled */
			[disabled] #state-icon {
				background-color: var(--uui-color-disabled);
			}

			.draft {
				opacity: 0.6;
			}
		`
];
p([
  x({ type: Object, attribute: !1 })
], o.prototype, "api", 1);
p([
  m()
], o.prototype, "_name", 2);
p([
  m()
], o.prototype, "_isDraft", 2);
p([
  m()
], o.prototype, "_icon", 2);
o = p([
  T("umb-document-tree-item")
], o);
const M = o;
export {
  o as UmbDocumentTreeItemElement,
  M as default
};
//# sourceMappingURL=document-tree-item.element-UlC4Eiv_.js.map
