import { when as l, repeat as x, html as u, ifDefined as d, css as w, property as P, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as C } from "@umbraco-cms/backoffice/element-api";
import { UUIPopoverContainerElement as v } from "@umbraco-cms/backoffice/external/uui";
var E = Object.defineProperty, M = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, _ = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? M(t, r) : t, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (s = (i ? a(t, r, s) : a(s)) || s);
  return i && s && E(t, r, s), s;
}, U = (e, t, r) => t.has(e) || f("Cannot " + r), O = (e, t, r) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), n = (e, t, r) => (U(e, t, "access private method"), r), o, m, h, b, $, g, y;
let p = class extends C(v) {
  constructor() {
    super(...arguments), O(this, o);
  }
  render() {
    return u`
			<uui-scroll-container>
				${l(
      this.items?.length,
      () => u`${x(this.items, (e, t) => n(this, o, y).call(this, e, t))} ${super.render()}`,
      () => super.render()
    )}
			</uui-scroll-container>
		`;
  }
};
o = /* @__PURE__ */ new WeakSet();
m = function(e) {
  return this.shadowRoot?.querySelector(`#${e}`);
};
h = function(e) {
  return !!e?.some((t) => t.isActive?.() || n(this, o, h).call(this, t.items));
};
b = function(e, t) {
  if (!e.items?.length || !t) return;
  const r = n(this, o, m).call(this, t);
  r && r.showPopover();
};
$ = function(e, t) {
  if (!t) return;
  const r = n(this, o, m).call(this, t);
  r && r.hidePopover();
};
g = function(e, t) {
  e.execute?.(), t || setTimeout(() => {
    this.hidePopover();
  }, 100);
};
y = function(e, t) {
  const r = e.items ? `menu-${t}` : void 0, i = e.element;
  i && r && i.setAttribute("popovertarget", r);
  const s = this.localize.string(e.label), c = e.isActive?.() || n(this, o, h).call(this, e.items) || !1;
  return u`
			<div
				@mouseenter=${() => n(this, o, b).call(this, e, r)}
				@mouseleave=${() => n(this, o, $).call(this, e, r)}>
				${l(
    i,
    () => i,
    () => u`
						<uui-menu-item
							class=${e.separatorAfter ? "separator" : ""}
							label=${s}
							popovertarget=${d(r)}
							select-mode="highlight"
							?selected=${c}
							@click-label=${() => n(this, o, g).call(this, e, r)}>
							${l(e.icon, (a) => u`<uui-icon slot="icon" name=${a}></uui-icon>`)}
							<div slot="label" class="menu-item">
								<span style=${d(e.style)}>${s}</span>
								${l(e.items, () => u`<uui-symbol-expand></uui-symbol-expand>`)}
							</div>
						</uui-menu-item>
					`
  )}
				${l(
    r,
    (a) => u`
						<umb-cascading-menu-popover id=${a} placement="right-start" .items=${e.items}>
						</umb-cascading-menu-popover>
					`
  )}
			</div>
		`;
};
p.styles = [
  ...v.styles,
  w`
			:host {
				--uui-menu-item-flat-structure: 1;

				background-color: var(--uui-color-surface);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
				padding: var(--uui-size-space-1);
			}

			.menu-item {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: var(--uui-size-space-4);
			}

			.separator::after {
				content: '';
				position: absolute;
				border-bottom: 1px solid var(--uui-color-border);
				width: 100%;
			}

			uui-scroll-container {
				max-height: 500px;
			}
		`
];
_([
  P({ type: Array })
], p.prototype, "items", 2);
p = _([
  A("umb-cascading-menu-popover")
], p);
export {
  p as U
};
//# sourceMappingURL=cascading-menu-popover.element-HDXQ3sFg.js.map
