import { U as Q } from "./tiptap-toolbar-configuration.context-token-yqUn7jq0.js";
import { umbExtensionsRegistry as Z } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as P, UmbBooleanState as tt } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as et } from "@umbraco-cms/backoffice/class-api";
import { UmbId as m } from "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_DATASET_CONTEXT as at, UMB_PROPERTY_CONTEXT as it } from "@umbraco-cms/backoffice/property";
import { html as d, when as _, repeat as R, nothing as V, css as ot, state as S, property as rt, customElement as st } from "@umbraco-cms/backoffice/external/lit";
import { debounce as nt } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as lt } from "@umbraco-cms/backoffice/lit-element";
class ut extends et {
  constructor(t) {
    super(t, Q), this.#a = new P([], (e) => e.alias), this.extensions = this.#a.asObservable(), this.#i = new tt(!1), this.reload = this.#i.asObservable(), this.#o = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Set(), this.#t = new P([], (e) => e.unique), this.toolbar = this.#t.asObservable(), this.observe(Z.byType("tiptapToolbarExtension"), (e) => {
      const i = e.sort((o, r) => o.alias.localeCompare(r.alias)).map((o) => ({
        kind: o.kind ?? "button",
        alias: o.alias,
        label: o.meta.label,
        icon: o.meta.icon,
        dependencies: o.forExtensions
      }));
      this.#a.setValue(i), this.#r = new Map(i.map((o) => [o.alias, o]));
    }), this.consumeContext(at, async (e) => {
      this.observe(
        await e?.propertyValueByAlias("extensions"),
        (i) => {
          i && (this.#o.clear(), this.#i.setValue(!1), this.#a.getValue().filter((o) => !o.dependencies || o.dependencies.every((r) => i.includes(r))).map((o) => o.alias).forEach((o) => this.#o.add(o)), this.#i.setValue(!0));
        },
        "_observeExtensions"
      );
    });
  }
  #a;
  #i;
  #o;
  #e;
  #r;
  #t;
  cloneToolbarValue(t) {
    return this.isValidToolbarValue(t) ? t.map((e) => e.map((i) => [...i])) : [[[]]];
  }
  filterExtensions(t) {
    return this.#a.getValue().filter((e) => e.alias?.toLowerCase().includes(t) || e.label?.toLowerCase().includes(t));
  }
  getExtensionByAlias(t) {
    return this.#r?.get(t);
  }
  isExtensionEnabled(t) {
    return this.#o.has(t);
  }
  isExtensionInUse(t) {
    return this.#e.has(t);
  }
  isValidToolbarValue(t) {
    if (!Array.isArray(t)) return !1;
    for (const e of t) {
      if (!Array.isArray(e)) return !1;
      for (const i of e) {
        if (!Array.isArray(i)) return !1;
        for (const o of i)
          if (typeof o != "string") return !1;
      }
    }
    return !0;
  }
  insertToolbarItem(t, e) {
    const i = [...this.#t.getValue()], [o, r, l] = e, h = i[o], f = [...h.data], b = f[r], v = [...b.data];
    v.splice(l, 0, t), this.#e.add(t), f[r] = { unique: b.unique, data: v }, i[o] = { unique: h.unique, data: f }, this.#t.setValue(i);
  }
  insertToolbarGroup(t, e) {
    const i = [...this.#t.getValue()], o = i[t], r = [...o.data];
    r.splice(e, 0, { unique: m.new(), data: [] }), i[t] = { unique: o.unique, data: r }, this.#t.setValue(i);
  }
  insertToolbarRow(t) {
    const e = [...this.#t.getValue()];
    e.splice(t, 0, { unique: m.new(), data: [{ unique: m.new(), data: [] }] }), this.#t.setValue(e);
  }
  moveToolbarItem(t, e) {
    const [i, o, r] = t, [l, h, f] = e, b = [...this.#t.getValue()], v = b[i], $ = [...v.data], O = $[o], D = [...O.data], K = D.splice(r, 1);
    $[o] = { unique: O.unique, data: D }, b[i] = { unique: v.unique, data: $ };
    const I = b[l], k = [...I.data], B = k[h], M = [...B.data];
    M.splice(f, 0, K[0]), k[h] = { unique: B.unique, data: M }, b[l] = { unique: I.unique, data: k }, this.#t.setValue(b);
  }
  removeToolbarItem(t) {
    const [e, i, o] = t, r = [...this.#t.getValue()], l = r[e], h = [...l.data], f = h[i], b = [...f.data];
    b.splice(o, 1).forEach(($) => this.#e.delete($)), h[i] = { unique: f.unique, data: b }, r[e] = { unique: l.unique, data: h }, this.#t.setValue(r);
  }
  removeToolbarGroup(t, e) {
    const i = [...this.#t.getValue()];
    if (i[t].data.length > e) {
      const o = i[t], r = [...o.data];
      r.splice(e, 1).forEach((h) => h.data.forEach((f) => this.#e.delete(f))), i[t] = { unique: o.unique, data: r };
    }
    i[t].data.length === 0 && (i[t].data[0] = { unique: m.new(), data: [] }), this.#t.setValue(i);
  }
  removeToolbarRow(t) {
    const e = [...this.#t.getValue()];
    e.length > t && e.splice(t, 1).forEach(
      (o) => o.data.forEach((r) => r.data.forEach((l) => this.#e.delete(l)))
    ), e.length === 0 && (e[0] = { unique: m.new(), data: [{ unique: m.new(), data: [] }] }), this.#t.setValue(e);
  }
  setToolbar(t) {
    this.isValidToolbarValue(t) || (t = [[[]]]), this.#e.clear(), t.forEach((i) => i.forEach((o) => o.forEach((r) => this.#e.add(r))));
    const e = t.map((i) => ({
      unique: m.new(),
      data: i.map((o) => ({ unique: m.new(), data: o }))
    }));
    this.#t.setValue(e);
  }
  updateToolbarRow(t, e) {
    const i = [...this.#t.getValue()], o = i[t];
    i[t] = { unique: o.unique, data: e }, this.#t.setValue(i);
  }
}
var ct = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, W = (a) => {
  throw TypeError(a);
}, z = (a, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? dt(t, e) : t, r = a.length - 1, l; r >= 0; r--)
    (l = a[r]) && (o = (i ? l(t, e, o) : l(o)) || o);
  return i && o && ct(t, e, o), o;
}, A = (a, t, e) => t.has(a) || W("Cannot " + e), s = (a, t, e) => (A(a, t, "read from private field"), e ? e.call(a) : t.get(a)), g = (a, t, e) => t.has(a) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, e), T = (a, t, e, i) => (A(a, t, "write to private field"), t.set(a, e), e), c = (a, t, e) => (A(a, t, "access private method"), e), n, x, U, y, p, u, L, E, C, q, G, N, F, X, Y, j, H, J;
let w = class extends lt {
  constructor() {
    super(), g(this, u), g(this, n, new ut(this)), g(this, x), g(this, U, nt((a) => {
      this._availableExtensions = s(this, n).filterExtensions(a);
    }, 250)), g(this, y, !1), this._availableExtensions = [], this._toolbar = [], g(this, p), this.consumeContext(it, (a) => {
      this.observe(s(this, n).extensions, (t) => {
        this._availableExtensions = t;
      }), this.observe(s(this, n).reload, (t) => {
        t && this.requestUpdate();
      }), this.observe(s(this, n).toolbar, (t) => {
        t.length && (this._toolbar = t, s(this, y) && (T(this, p, t.map((e) => e.data.map((i) => [...i.data]))), a?.setValue(s(this, p))));
      });
    });
  }
  set value(a) {
    a || (a = [[[]]]), a !== s(this, p) && T(this, p, s(this, n).isValidToolbarValue(a) ? a : [[[]]]);
  }
  get value() {
    if (s(this, p) !== void 0)
      return s(this, n).cloneToolbarValue(s(this, p));
  }
  firstUpdated() {
    s(this, n).setToolbar(this.value), T(this, y, !0);
  }
  render() {
    return d`${c(this, u, Y).call(this)} ${c(this, u, F).call(this)}`;
  }
};
n = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
L = function(a) {
  const t = (s(this, p)?.length ?? 1) - 1, e = (s(this, p)?.[t].length ?? 1) - 1, i = s(this, p)?.[t][e].length ?? 0;
  s(this, n).insertToolbarItem(a.alias, [t, e, i]);
};
E = function(a, t, e) {
  a.dataTransfer.effectAllowed = "move", T(this, x, { alias: t, fromPos: e });
};
C = function(a) {
  a.preventDefault(), a.dataTransfer.dropEffect = "move";
};
q = function(a) {
  if (a.preventDefault(), a.dataTransfer?.dropEffect === "none") {
    const { fromPos: t } = s(this, x) ?? {};
    if (!t) return;
    s(this, n).removeToolbarItem(t);
  }
};
G = function(a, t) {
  a.preventDefault();
  const { alias: e, fromPos: i } = s(this, x) ?? {};
  if (i && !t) {
    s(this, n).removeToolbarItem(i);
    return;
  }
  if (i && t) {
    s(this, n).moveToolbarItem(i, t);
    return;
  }
  e && t && s(this, n).insertToolbarItem(e, t);
};
N = function(a) {
  const t = (a.target.value ?? "").toLocaleLowerCase();
  s(this, U).call(this, t);
};
F = function() {
  const a = this.localize.term("placeholders_filter");
  return d`
			<uui-box id="toolbox" headline=${this.localize.term("tiptap_toobar_availableItems")}>
				<div slot="header-actions">
					<uui-input type="search" autocomplete="off" label=${a} placeholder=${a} @input=${c(this, u, N)}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
				</div>
				<uui-scroll-container>
					<div class="available-items" dropzone="move" @drop=${c(this, u, G)} @dragover=${c(this, u, C)}>
						${_(
    this._availableExtensions.length === 0,
    () => d`<umb-localize key="tiptap_toobar_availableItemsEmpty"
									>There are no toolbar extensions to show</umb-localize
								>`,
    () => R(this._availableExtensions, (t) => c(this, u, X).call(this, t))
  )}
					</div>
				</uui-scroll-container>
			</uui-box>
		`;
};
X = function(a) {
  const t = !s(this, n).isExtensionEnabled(a.alias), e = s(this, n).isExtensionInUse(a.alias);
  if (e || t) return V;
  const i = this.localize.string(a.label);
  return d`
			<uui-button
				compact
				class=${t ? "forbidden" : ""}
				data-mark="tiptap-toolbar-item:${a.alias}"
				draggable="true"
				label=${i}
				look=${t ? "placeholder" : "outline"}
				?disabled=${t || e}
				@click=${() => c(this, u, L).call(this, a)}
				@dragstart=${(o) => c(this, u, E).call(this, o, a.alias)}
				@dragend=${c(this, u, q)}>
				<div class="inner">
					${_(a.icon, () => d`<umb-icon .name=${a.icon}></umb-icon>`)}
					<span>${i}</span>
				</div>
			</uui-button>
		`;
};
Y = function() {
  return d`
			<div id="toolbar">
				<div id="rows">
					${R(
    this._toolbar,
    (a) => a.unique,
    (a, t) => c(this, u, j).call(this, a, t)
  )}
				</div>
				<uui-button
					id="btnAddRow"
					look="placeholder"
					label=${this.localize.term("tiptap_toolbar_addRow")}
					@click=${() => s(this, n).insertToolbarRow(this._toolbar.length)}></uui-button>
			</div>
		`;
};
j = function(a, t = 0) {
  if (!a) return V;
  const e = this._toolbar.length === 1;
  return d`
			<uui-button-inline-create
				label=${this.localize.term("tiptap_toolbar_addRow")}
				@click=${() => s(this, n)?.insertToolbarRow(t)}></uui-button-inline-create>
			<div class="row">
				<div class="groups">
					<uui-button-inline-create
						vertical
						label=${this.localize.term("tiptap_toolbar_addGroup")}
						@click=${() => s(this, n)?.insertToolbarGroup(t, 0)}></uui-button-inline-create>
					${R(
    a.data,
    (i) => i.unique,
    (i, o) => c(this, u, H).call(this, i, t, o)
  )}
				</div>
				${_(
    !e,
    () => d`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeRow")}
								@click=${() => s(this, n)?.removeToolbarRow(t)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
		`;
};
H = function(a, t = 0, e = 0) {
  if (!a) return V;
  const i = this._toolbar[t].data.length > 1 && a.data.length === 0;
  return d`
			<div
				class="group"
				dropzone="move"
				@dragover=${c(this, u, C)}
				@drop=${(o) => c(this, u, G).call(this, o, [t, e, a.data.length - 1])}>
				<div class="items">
					${_(
    a?.data.length === 0,
    () => d`<em><umb-localize key="tiptap_toolbar_emptyGroup">Empty</umb-localize></em>`,
    () => d`${a.data.map((o, r) => c(this, u, J).call(this, o, t, e, r))}`
  )}
				</div>
				${_(
    i,
    () => d`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeGroup")}
								@click=${() => s(this, n)?.removeToolbarGroup(t, e)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
			<uui-button-inline-create
				vertical
				label=${this.localize.term("tiptap_toolbar_addGroup")}
				@click=${() => s(this, n)?.insertToolbarGroup(t, e + 1)}></uui-button-inline-create>
		`;
};
J = function(a, t = 0, e = 0, i = 0) {
  const o = s(this, n)?.getExtensionByAlias(a);
  if (!o) return V;
  const r = !s(this, n)?.isExtensionEnabled(o.alias), l = this.localize.string(o.label);
  switch (o.kind) {
    case "styleMenu":
    case "menu":
      return d`
					<uui-button
						compact
						class=${r ? "forbidden" : ""}
						draggable="true"
						label=${l}
						look=${r ? "placeholder" : "outline"}
						title=${l}
						?disabled=${r}
						@click=${() => s(this, n).removeToolbarItem([t, e, i])}
						@dragend=${c(this, u, q)}
						@dragstart=${(h) => c(this, u, E).call(this, h, a, [t, e, i])}>
						<div class="inner">
							<span>${l}</span>
						</div>
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`;
    case "button":
    default:
      return d`
					<uui-button
						compact
						class=${r ? "forbidden" : ""}
						data-mark="tiptap-toolbar-item:${o.alias}"
						draggable="true"
						look=${r ? "placeholder" : "outline"}
						label=${l}
						title=${l}
						?disabled=${r}
						@click=${() => s(this, n).removeToolbarItem([t, e, i])}
						@dragend=${c(this, u, q)}
						@dragstart=${(h) => c(this, u, E).call(this, h, a, [t, e, i])}>
						<div class="inner">
							${_(
        o.icon,
        () => d`<umb-icon .name=${o.icon}></umb-icon>`,
        () => d`<span>${l}</span>`
      )}
						</div>
					</uui-button>
				`;
  }
};
w.styles = [
  ot`
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

				#toolbar {
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

			uui-button-inline-create:not([vertical]) {
				margin-bottom: -4px;
			}

			#rows {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-1);

				.row {
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					gap: var(--uui-size-3);

					&:not(:last-child) {
						border-bottom: 1px solid var(--uui-color-border);
					}

					&:focus-within,
					&:hover {
						border-color: var(--uui-color-border-standalone);
					}

					.groups {
						flex: 1;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						align-items: center;
						justify-content: flex-start;
						gap: var(--uui-size-1);

						uui-button-inline-create {
							height: 50px;
						}

						.group {
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							gap: var(--uui-size-3);

							border: 1px dashed transparent;
							border-radius: var(--uui-border-radius);
							padding: var(--uui-size-3);

							> uui-action-bar {
								opacity: 0;
								transition: opacity 120ms;
							}

							&:focus-within,
							&:hover {
								border-color: var(--uui-color-border-standalone);
								> uui-action-bar {
									opacity: 1;
								}
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

									uui-symbol-expand {
										margin-left: var(--uui-size-space-2);
									}
								}
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
z([
  S()
], w.prototype, "_availableExtensions", 2);
z([
  S()
], w.prototype, "_toolbar", 2);
z([
  rt({ attribute: !1 })
], w.prototype, "value", 1);
w = z([
  st("umb-property-editor-ui-tiptap-toolbar-configuration")
], w);
export {
  w as UmbPropertyEditorUiTiptapToolbarConfigurationElement,
  w as element
};
//# sourceMappingURL=property-editor-ui-tiptap-toolbar-configuration.element-KzMVtReM.js.map
