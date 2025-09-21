import { G as z } from "./input-upload-field.element-Bje2l26U.js";
import { U as q } from "./media-audit-log.repository-DcjUD1t5.js";
import { g as x, T as E } from "./utils-Cn_XY6oh.js";
import { when as A, html as l, repeat as C, nothing as S, css as T, state as f, customElement as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import { UmbPaginationManager as N } from "@umbraco-cms/backoffice/utils";
import { UmbUserItemRepository as H } from "@umbraco-cms/backoffice/user";
var L = Object.defineProperty, R = Object.getOwnPropertyDescriptor, P = (t) => {
  throw TypeError(t);
}, g = (t, e, i, a) => {
  for (var s = a > 1 ? void 0 : a ? R(e, i) : e, _ = t.length - 1, d; _ >= 0; _--)
    (d = t[_]) && (s = (a ? d(e, i, s) : d(s)) || s);
  return a && s && L(e, i, s), s;
}, y = (t, e, i) => e.has(t) || P("Cannot " + i), r = (t, e, i) => (y(t, e, "read from private field"), i ? i.call(t) : e.get(t)), p = (t, e, i) => e.has(t) ? P("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), D = (t, e, i, a) => (y(t, e, "write to private field"), e.set(t, i), i), h = (t, e, i) => (y(t, e, "access private method"), i), c, v, o, w, m, n, b, $, U, k, M;
let u = class extends I {
  constructor() {
    super(), p(this, n), this._currentPageNumber = 1, this._totalPages = 1, this._items = [], p(this, c), p(this, v, new q(this)), p(this, o, new N()), p(this, w, new H(this)), p(this, m, /* @__PURE__ */ new Map()), r(this, o).setPageSize(10), this.observe(r(this, o).currentPage, (t) => this._currentPageNumber = t), this.observe(r(this, o).totalPages, (t) => this._totalPages = t), this.consumeContext(z, (t) => {
      D(this, c, t), h(this, n, b).call(this);
    });
  }
  render() {
    return l`
			<umb-workspace-info-app-layout headline="#general_history">
				<div id="content">
					${A(
      this._items,
      () => h(this, n, k).call(this),
      () => l`<div id="loader"><uui-loader></uui-loader></div>`
    )}
					${h(this, n, M).call(this)}
				</div>
			</umb-workspace-info-app-layout>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
b = async function() {
  const t = r(this, c)?.getUnique();
  if (!t) throw new Error("Media unique is required");
  const { data: e } = await r(this, v).requestAuditLog({
    unique: t,
    skip: r(this, o).getSkip(),
    take: r(this, o).getPageSize()
  });
  e && (this._items = e.items, r(this, o).setTotalItems(e.total), h(this, n, U).call(this));
};
$ = function(t) {
  r(this, o).setCurrentPageNumber(t.target?.current), h(this, n, b).call(this);
};
U = async function() {
  const t = this._items?.map((s) => s.user.unique).filter(Boolean), i = [...new Set(t)].filter((s) => !r(this, m).has(s));
  if (i.length === 0) return;
  const { data: a } = await r(this, w).requestItems(i);
  a && a.forEach((s) => {
    r(this, m).set(s.unique, s), this.requestUpdate("_items");
  });
};
k = function() {
  return this._items && this._items.length ? l`
				<umb-history-list>
					${C(
    this._items,
    (t) => t.timestamp,
    (t) => {
      const { text: e, style: i } = x(t.logType), a = r(this, m).get(t.user.unique);
      return l`<umb-history-item
								.name=${a?.name ?? "Unknown"}
								.detail=${this.localize.date(t.timestamp, E)}>
								<umb-user-avatar
									slot="avatar"
									.name=${a?.name}
									.kind=${a?.kind}
									.imgUrls=${a?.avatarUrls ?? []}></umb-user-avatar>

								<span class="log-type">
									<uui-tag look=${i.look} color=${i.color}>
										${this.localize.term(e.label, t.parameters)}
									</uui-tag>
									${this.localize.term(e.desc, t.parameters)}
								</span>
							</umb-history-item>`;
    }
  )}
				</umb-history-list>
			` : l`${this.localize.term("content_noItemsToShow")}`;
};
M = function() {
  return l`
			${this._totalPages > 1 ? l`
						<uui-pagination
							class="pagination"
							.current=${this._currentPageNumber}
							.total=${this._totalPages}
							firstlabel=${this.localize.term("general_first")}
                            previouslabel=${this.localize.term("general_previous")}
                            nextlabel=${this.localize.term("general_next")}
                            lastlabel=${this.localize.term("general_last")}
							@change=${h(this, n, $)}></uui-pagination>
					` : S}
		`;
};
u.styles = [
  O,
  T`
			#content {
				display: block;
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
			}

			#loader {
				display: flex;
				justify-content: center;
			}

			.log-type {
				display: grid;
				grid-template-columns: var(--uui-size-40) auto;
				gap: var(--uui-size-layout-1);
			}

			.log-type uui-tag {
				height: fit-content;
				margin-top: auto;
				margin-bottom: auto;
			}

			uui-pagination {
				flex: 1;
				display: flex;
				justify-content: center;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
g([
  f()
], u.prototype, "_currentPageNumber", 2);
g([
  f()
], u.prototype, "_totalPages", 2);
g([
  f()
], u.prototype, "_items", 2);
u = g([
  W("umb-media-history-workspace-info-app")
], u);
const Y = u;
export {
  u as UmbMediaHistoryWorkspaceInfoAppElement,
  Y as default
};
//# sourceMappingURL=media-history-workspace-info-app.element-Bue9-iQl.js.map
