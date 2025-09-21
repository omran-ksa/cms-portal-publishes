import { U as F } from "./tiptap-statusbar-configuration.context-token-CR1vBM3L.js";
import { umbExtensionsRegistry as G } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as C, UmbBooleanState as X } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as Y } from "@umbraco-cms/backoffice/class-api";
import { UmbId as j } from "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_DATASET_CONTEXT as H, UMB_PROPERTY_CONTEXT as J } from "@umbraco-cms/backoffice/property";
import { html as h, when as _, repeat as O, nothing as w, css as K, state as k, property as Q, customElement as Z } from "@umbraco-cms/backoffice/external/lit";
import { debounce as tt } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as et } from "@umbraco-cms/backoffice/lit-element";
class at extends Y {
  constructor(t) {
    super(t, F), this.#a = new C([], (a) => a.alias), this.extensions = this.#a.asObservable(), this.#i = new X(!1), this.reload = this.#i.asObservable(), this.#s = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Set(), this.#t = new C([], (a) => a.unique), this.statusbar = this.#t.asObservable(), this.observe(G.byType("tiptapStatusbarExtension"), (a) => {
      const i = a.sort((s, o) => s.alias.localeCompare(o.alias)).map((s) => ({
        alias: s.alias,
        label: s.meta.label,
        icon: s.meta.icon,
        dependencies: s.forExtensions
      }));
      this.#a.setValue(i), this.#r = new Map(i.map((s) => [s.alias, s]));
    }), this.consumeContext(H, async (a) => {
      this.observe(
        await a?.propertyValueByAlias("extensions"),
        (i) => {
          i && (this.#s.clear(), this.#i.setValue(!1), this.#a.getValue().filter((s) => !s.dependencies || s.dependencies.every((o) => i.includes(o))).map((s) => s.alias).forEach((s) => this.#s.add(s)), this.#i.setValue(!0));
        },
        "_observeExtensions"
      );
    });
  }
  #a;
  #i;
  #s;
  #e;
  #r;
  #t;
  cloneStatusbarValue(t) {
    return this.isValidStatusbarValue(t) ? t.map((a) => [...a]) : [[], []];
  }
  filterExtensions(t) {
    return this.#a.getValue().filter((a) => a.alias?.toLowerCase().includes(t) || a.label?.toLowerCase().includes(t));
  }
  getExtensionByAlias(t) {
    return this.#r?.get(t);
  }
  isExtensionEnabled(t) {
    return this.#s.has(t);
  }
  isExtensionInUse(t) {
    return this.#e.has(t);
  }
  isValidStatusbarValue(t) {
    if (!Array.isArray(t)) return !1;
    for (const a of t) {
      if (!Array.isArray(a)) return !1;
      for (const i of a)
        if (typeof i != "string") return !1;
    }
    return !0;
  }
  insertStatusbarItem(t, a) {
    const i = [...this.#t.getValue()], [s, o] = a, u = i[s], p = [...u.data];
    p.splice(o, 0, t), this.#e.add(t), i[s] = { unique: u.unique, data: p }, this.#t.setValue(i);
  }
  moveStatusbarItem(t, a) {
    const [i, s] = t, [o, u] = a, p = [...this.#t.getValue()], v = p[i], U = [...v.data], N = U.splice(s, 1);
    p[i] = { unique: v.unique, data: U };
    const V = p[o], z = [...V.data];
    z.splice(u, 0, N[0]), p[o] = { unique: V.unique, data: z }, this.#t.setValue(p);
  }
  removeStatusbarItem(t) {
    const [a, i] = t, s = [...this.#t.getValue()], o = s[a], u = [...o.data];
    u.splice(i, 1).forEach((v) => this.#e.delete(v)), s[a] = { unique: o.unique, data: u }, this.#t.setValue(s);
  }
  setStatusbar(t) {
    this.isValidStatusbarValue(t) || (t = [[], []]), t.length === 1 && (t = [[], t[0]]), this.#e.clear(), t.forEach((i) => i.forEach((s) => this.#e.add(s)));
    const a = t.map((i) => ({ unique: j.new(), data: i }));
    this.#t.setValue(a);
  }
}
var it = Object.defineProperty, st = Object.getOwnPropertyDescriptor, q = (e) => {
  throw TypeError(e);
}, E = (e, t, a, i) => {
  for (var s = i > 1 ? void 0 : i ? st(t, a) : t, o = e.length - 1, u; o >= 0; o--)
    (u = e[o]) && (s = (i ? u(t, a, s) : u(s)) || s);
  return i && s && it(t, a, s), s;
}, y = (e, t, a) => t.has(e) || q("Cannot " + a), r = (e, t, a) => (y(e, t, "read from private field"), a ? a.call(e) : t.get(e)), b = (e, t, a) => t.has(e) ? q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), g = (e, t, a, i) => (y(e, t, "write to private field"), t.set(e, a), a), d = (e, t, a) => (y(e, t, "access private method"), a), n, m, $, x, c, l, D, I, S, A, T, M, B, P, R, W, L;
let f = class extends et {
  constructor() {
    super(), b(this, l), b(this, n, new at(this)), b(this, m), b(this, $, tt((e) => {
      this._availableExtensions = r(this, n).filterExtensions(e);
    }, 250)), b(this, x, !1), this._availableExtensions = [], this._statusbar = [], b(this, c), this.consumeContext(J, (e) => {
      this.observe(r(this, n).extensions, (t) => {
        this._availableExtensions = t;
      }), this.observe(r(this, n).reload, (t) => {
        t && this.requestUpdate();
      }), this.observe(r(this, n).statusbar, (t) => {
        t.length && (this._statusbar = t, r(this, x) && (g(this, c, t.map((a) => [...a.data])), e?.setValue(r(this, c))));
      });
    });
  }
  set value(e) {
    e || (e = [[], []]), e !== r(this, c) && g(this, c, e);
  }
  get value() {
    if (r(this, c) !== void 0)
      return r(this, n).cloneStatusbarValue(r(this, c));
  }
  firstUpdated() {
    r(this, n).setStatusbar(r(this, c)), g(this, x, !0);
  }
  render() {
    return h`${d(this, l, R).call(this)} ${d(this, l, B).call(this)}`;
  }
};
n = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
D = function(e) {
  const t = (r(this, c)?.length ?? 1) - 1, a = r(this, c)?.[t].length ?? 0;
  r(this, n).insertStatusbarItem(e.alias, [t, a]);
};
I = function(e, t, a) {
  e.dataTransfer.effectAllowed = "move", g(this, m, { alias: t, fromPos: a });
};
S = function(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
};
A = function(e) {
  if (e.preventDefault(), e.dataTransfer?.dropEffect === "none") {
    const { fromPos: t } = r(this, m) ?? {};
    if (!t) return;
    r(this, n).removeStatusbarItem(t);
  }
};
T = function(e, t) {
  e.preventDefault();
  const { alias: a, fromPos: i } = r(this, m) ?? {};
  if (i && !t) {
    r(this, n).removeStatusbarItem(i);
    return;
  }
  if (i && t) {
    r(this, n).moveStatusbarItem(i, t);
    return;
  }
  a && t && r(this, n).insertStatusbarItem(a, t);
};
M = function(e) {
  const t = (e.target.value ?? "").toLocaleLowerCase();
  r(this, $).call(this, t);
};
B = function() {
  const e = this.localize.term("placeholders_filter");
  return h`
			<uui-box id="toolbox" headline=${this.localize.term("tiptap_statusbar_availableItems")}>
				<div slot="header-actions">
					<uui-input type="search" autocomplete="off" label=${e} placeholder=${e} @input=${d(this, l, M)}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
				</div>
				<uui-scroll-container>
					<div class="available-items" dropzone="move" @drop=${d(this, l, T)} @dragover=${d(this, l, S)}>
						${_(
    this._availableExtensions.length === 0,
    () => h`<umb-localize key="tiptap_statusbar_availableItemsEmpty"
									>There are no statusbar extensions to show</umb-localize
								>`,
    () => O(this._availableExtensions, (t) => d(this, l, P).call(this, t))
  )}
					</div>
				</uui-scroll-container>
			</uui-box>
		`;
};
P = function(e) {
  const t = !r(this, n).isExtensionEnabled(e.alias), a = r(this, n).isExtensionInUse(e.alias);
  if (a || t) return w;
  const i = this.localize.string(e.label);
  return h`
			<uui-button
				compact
				class=${t ? "forbidden" : ""}
				data-mark="tiptap-toolbar-item:${e.alias}"
				draggable="true"
				label=${i}
				look=${t ? "placeholder" : "outline"}
				?disabled=${t || a}
				@click=${() => d(this, l, D).call(this, e)}
				@dragstart=${(s) => d(this, l, I).call(this, s, e.alias)}
				@dragend=${d(this, l, A)}>
				<div class="inner">
					${_(e.icon, () => h`<umb-icon .name=${e.icon}></umb-icon>`)}
					<span>${i}</span>
				</div>
			</uui-button>
		`;
};
R = function() {
  return h`
			<div id="statusbar">
				<div id="areas">
					${O(
    this._statusbar,
    (e) => e.unique,
    (e, t) => d(this, l, W).call(this, e, t)
  )}
				</div>
			</div>
		`;
};
W = function(e, t = 0) {
  return e ? h`
			<div
				class="area"
				dropzone="move"
				@dragover=${d(this, l, S)}
				@drop=${(a) => d(this, l, T).call(this, a, [t, e.data.length - 1])}>
				<div class="items">
					${_(
    e?.data.length === 0,
    () => h`<em><umb-localize key="tiptap_toolbar_emptyGroup">Empty</umb-localize></em>`,
    () => h`${e.data.map((a, i) => d(this, l, L).call(this, a, t, i))}`
  )}
				</div>
			</div>
		` : w;
};
L = function(e, t = 0, a = 0) {
  const i = r(this, n)?.getExtensionByAlias(e);
  if (!i) return w;
  const s = !r(this, n)?.isExtensionEnabled(i.alias), o = this.localize.string(i.label);
  return h`
			<uui-button
				compact
				class=${s ? "forbidden" : ""}
				data-mark="tiptap-toolbar-item:${i.alias}"
				draggable="true"
				label=${o}
				look=${s ? "placeholder" : "outline"}
				title=${o}
				?disabled=${s}
				@click=${() => r(this, n).removeStatusbarItem([t, a])}
				@dragend=${d(this, l, A)}
				@dragstart=${(u) => d(this, l, I).call(this, u, e, [t, a])}>
				<div class="inner">
					${_(i.icon, (u) => h`<umb-icon .name=${u}></umb-icon>`)}
					<span>${o}</span>
				</div>
			</uui-button>
		`;
};
f.styles = [
  K`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
				flex-grow: 1;
			}

			@media (min-width: 1400px) {
				:host {
					flex-direction: row;
				}
				#toolbox {
					width: 500px;
					max-width: 33%;
					flex-grow: 1;
				}

				#statusbar {
					flex-grow: 100;
				}
			}

			#toolbox {
				border: 1px solid var(--uui-color-border);
			}

			uui-box {
				[slot='header-actions'] {
					margin-bottom: var(--uui-size-2);

					uui-icon {
						color: var(--uui-color-border);
					}
				}
			}

			uui-scroll-container {
				max-height: 350px;
			}

			.available-items {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-3);

				uui-button {
					--uui-button-font-weight: normal;

					&[draggable='true'],
					&[draggable='true'] > .inner {
						cursor: move;
					}

					&[disabled],
					&[disabled] > .inner {
						cursor: not-allowed;
					}

					&.forbidden {
						--color: var(--uui-color-danger);
						--color-standalone: var(--uui-color-danger-standalone);
						--color-emphasis: var(--uui-color-danger-emphasis);
						--color-contrast: var(--uui-color-danger);
						--uui-button-contrast-disabled: var(--uui-color-danger);
						--uui-button-border-color-disabled: var(--uui-color-danger);
					}

					div {
						display: flex;
						gap: var(--uui-size-1);
					}
				}
			}

			#areas {
				display: flex;
				gap: var(--uui-size-1);
				justify-content: space-between;
				align-items: center;

				.area {
					flex: 1;
					display: flex;
					align-items: flex-start;
					justify-content: space-between;

					border: 1px dashed transparent;
					padding: var(--uui-size-3);

					&:last-child {
						justify-content: flex-end;
					}

					&:focus-within,
					&:hover {
						border-color: var(--uui-color-border-standalone);
					}

					.items {
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						gap: var(--uui-size-1);

						uui-button {
							--uui-button-font-weight: normal;

							&[draggable='true'],
							&[draggable='true'] > .inner {
								cursor: move;
							}

							&[disabled],
							&[disabled] > .inner {
								cursor: not-allowed;
							}

							&.forbidden {
								--color: var(--uui-color-danger);
								--color-standalone: var(--uui-color-danger-standalone);
								--color-emphasis: var(--uui-color-danger-emphasis);
								--color-contrast: var(--uui-color-danger);
								--uui-button-contrast-disabled: var(--uui-color-danger);
								--uui-button-border-color-disabled: var(--uui-color-danger);
							}

							div {
								display: flex;
								gap: var(--uui-size-1);
							}
						}
					}
				}
			}

			#btnAddRow {
				display: block;
				margin-top: var(--uui-size-1);
			}

			.handle {
				cursor: move;
			}
		`
];
E([
  k()
], f.prototype, "_availableExtensions", 2);
E([
  k()
], f.prototype, "_statusbar", 2);
E([
  Q({ attribute: !1 })
], f.prototype, "value", 1);
f = E([
  Z("umb-property-editor-ui-tiptap-statusbar-configuration")
], f);
export {
  f as UmbPropertyEditorUiTiptapStatusbarConfigurationElement,
  f as element
};
//# sourceMappingURL=property-editor-ui-tiptap-statusbar-configuration.element-D2OavPUF.js.map
