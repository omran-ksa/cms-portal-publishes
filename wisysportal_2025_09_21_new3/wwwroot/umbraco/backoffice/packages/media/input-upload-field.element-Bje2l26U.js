import { css as z, property as l, state as p, customElement as U, html as r, when as si, repeat as _e, query as ae, nothing as w, classMap as ao, ifDefined as Ue } from "@umbraco-cms/backoffice/external/lit";
import { assignToFrozenObject as no } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as C } from "@umbraco-cms/backoffice/event";
import { UmbFileDropzoneItemStatus as Zi } from "@umbraco-cms/backoffice/dropzone";
import { UmbLitElement as Q } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as ri } from "@umbraco-cms/backoffice/style";
import { UmbTemporaryFileConfigRepository as ea } from "@umbraco-cms/backoffice/temporary-file";
import { UmbFormControlMixin as li, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as ta } from "@umbraco-cms/backoffice/validation";
import { drag as oo } from "@umbraco-cms/backoffice/external/uui";
import { clamp as S, calculateExtrapolatedValue as yt, inverseLerp as so, lerp as ro, umbDeepMerge as lo, debounce as po, UmbPaginationManager as co, splitStringToArray as uo, stringOrStringArrayContains as Yi } from "@umbraco-cms/backoffice/utils";
import { UmbContextToken as xe } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as at, UmbModalBaseElement as pi, UMB_MODAL_MANAGER_CONTEXT as ia, umbConfirmModal as mo } from "@umbraco-cms/backoffice/modal";
import { UMB_SECTION_PATH_PATTERN as ho } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_MODAL as aa, UMB_WORKSPACE_PATH_PATTERN as vo } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as ci, UmbPathPattern as na } from "@umbraco-cms/backoffice/router";
import { UmbTreeServerDataSourceBase as fo, UmbTreeRepositoryBase as go, UMB_TREE_PICKER_MODAL_ALIAS as _o } from "@umbraco-cms/backoffice/tree";
import { a as oa } from "./media-url.repository-B5RzlWhD.js";
import { UmbPickerInputContext as xo } from "@umbraco-cms/backoffice/picker-input";
import { UMB_VARIANT_CONTEXT as sa } from "@umbraco-cms/backoffice/variant";
import { UmbSorterController as ra, UmbSorterResolvePlacementAsGrid as la } from "@umbraco-cms/backoffice/sorter";
import { UmbMediaTypeDetailServerDataSource as yo, getUmbracoFolderUnique as bo, UmbMediaTypeStructureRepository as wo, isUmbracoFolder as ko, UMB_MEDIA_TYPE_ENTITY_TYPE as Mo } from "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/imaging";
import { UMB_SERVER_CONTEXT as pa } from "@umbraco-cms/backoffice/server";
import { UmbId as Pt } from "@umbraco-cms/backoffice/id";
import { MediaService as H } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as $e } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as di } from "@umbraco-cms/backoffice/class-api";
import { UmbDetailRepositoryBase as $o, UmbItemServerDataSourceBase as Eo, UmbItemRepositoryBase as To, UmbRepositoryItemsManager as Co } from "@umbraco-cms/backoffice/repository";
import { UmbItemDataApiGetRequestController as Po } from "@umbraco-cms/backoffice/entity-item";
import { UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as qo } from "@umbraco-cms/backoffice/content";
import { UmbExtensionsManifestInitializer as zo } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Uo } from "@umbraco-cms/backoffice/extension-registry";
class nt extends Event {
  static {
    this.TYPE = "imagecrop-change";
  }
  constructor(t) {
    super(nt.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...t });
  }
}
class ui extends Event {
  static {
    this.TYPE = "focalpoint-change";
  }
  constructor(t, i) {
    super(ui.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...i }), this.focalPoint = t;
  }
}
var Io = Object.defineProperty, So = Object.getOwnPropertyDescriptor, ca = (e) => {
  throw TypeError(e);
}, J = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? So(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Io(t, i, a), a;
}, mi = (e, t, i) => t.has(e) || ca("Cannot " + i), st = (e, t, i) => (mi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), De = (e, t, i) => t.has(e) ? ca("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), pt = (e, t, i, n) => (mi(e, t, "write to private field"), t.set(e, i), i), Ot = (e, t, i) => (mi(e, t, "access private method"), i), Ee, ct, Nt, Bt, Be, dt;
let O = class extends Q {
  constructor() {
    super(), De(this, Be), De(this, Ee), this.crops = [], De(this, ct), this.focalPoint = { left: 0.5, top: 0.5 }, this.hideFocalPoint = !1, this.src = "", this._serverUrl = "", De(this, Nt, (e) => {
      const i = e.target.value;
      if (!i) return;
      const n = this.crops.findIndex((a) => a.alias === i.alias);
      n !== void 0 && (this.crops[n] = i, this.currentCrop = void 0, Ot(this, Be, dt).call(this));
    }), De(this, Bt, (e) => {
      this.focalPoint = { top: e.focalPoint.top, left: e.focalPoint.left }, Ot(this, Be, dt).call(this);
    }), this.onResetFocalPoint = () => {
      this.focalPoint = { left: 0.5, top: 0.5 }, Ot(this, Be, dt).call(this);
    }, this.consumeContext(pa, (e) => {
      this._serverUrl = e?.getServerUrl() ?? "";
    });
  }
  set value(e) {
    e ? (this.crops = [...e.crops], this.focalPoint = e.focalPoint || { left: 0.5, top: 0.5 }, this.src = e.src, pt(this, Ee, e)) : (this.crops = [], this.focalPoint = { left: 0.5, top: 0.5 }, this.src = "", pt(this, Ee, void 0)), this.requestUpdate();
  }
  get value() {
    return st(this, Ee);
  }
  set file(e) {
    pt(this, ct, e), e ? this.fileDataUrl = URL.createObjectURL(e) : this.fileDataUrl && (URL.revokeObjectURL(this.fileDataUrl), this.fileDataUrl = void 0);
  }
  get file() {
    return st(this, ct);
  }
  get source() {
    return this.src ? this.src.startsWith("/") ? `${this._serverUrl}${this.src}` : this.src : this.fileDataUrl ?? "";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.fileDataUrl && URL.revokeObjectURL(this.fileDataUrl);
  }
  onCropClick(e) {
    const t = this.crops.findIndex((i) => i.alias === e.alias);
    t !== -1 && (this.currentCrop = { ...this.crops[t] });
  }
  render() {
    return r`
			<div id="main">${this.renderMain()}</div>
			<div id="side">${this.renderSide()}</div>
		`;
  }
  renderMain() {
    return this.currentCrop ? r`
				<umb-image-cropper
					.focalPoint=${this.focalPoint}
					.src=${this.source}
					.value=${this.currentCrop}
					?hideFocalPoint=${this.hideFocalPoint}
					@imagecrop-change=${st(this, Nt)}>
				</umb-image-cropper>
			` : r`
			<umb-image-cropper-focus-setter
				.focalPoint=${this.focalPoint}
				.src=${this.source}
				?hideFocalPoint=${this.hideFocalPoint}
				@focalpoint-change=${st(this, Bt)}>
			</umb-image-cropper-focus-setter>
			<div id="actions">${this.renderActions()}</div>
		`;
  }
  renderActions() {
    return r`
			<slot name="actions"></slot>
			${si(
      !this.hideFocalPoint && this.focalPoint.left !== 0.5 && this.focalPoint.top !== 0.5,
      () => r`
					<uui-button compact label=${this.localize.term("content_resetFocalPoint")} @click=${this.onResetFocalPoint}>
						<uui-icon name="icon-axis-rotation"></uui-icon>
						${this.localize.term("content_resetFocalPoint")}
					</uui-button>
				`
    )}
		`;
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return _e(
        this.crops,
        (e) => e.alias + JSON.stringify(e.coordinates),
        (e) => r`
				<umb-image-cropper-preview
					.crop=${e}
					.focalPoint=${this.focalPoint}
					.src=${this.source}
					?active=${this.currentCrop?.alias === e.alias}
					@click=${() => this.onCropClick(e)}>
				</umb-image-cropper-preview>
			`
      );
  }
};
Ee = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakSet();
dt = function() {
  pt(this, Ee, {
    crops: [...this.crops],
    focalPoint: this.focalPoint,
    src: this.src
  }), this.dispatchEvent(new C());
};
O.styles = [
  z`
			:host {
				display: flex;
				width: 100%;
				box-sizing: border-box;
				gap: var(--uui-size-space-3);
				height: 400px;
			}

			#main {
				max-width: 500px;
				min-width: 300px;
				width: 100%;
				height: 100%;
				display: flex;
				gap: var(--uui-size-space-1);
				flex-direction: column;
			}

			#actions {
				display: flex;
				justify-content: space-between;
				margin-top: 0.5rem;

				uui-icon {
					padding-right: var(--uui-size-1);
				}
			}

			slot[name='actions'] {
				display: block;
				flex: 1;
			}

			umb-image-cropper-focus-setter {
				height: calc(100% - 33px - var(--uui-size-space-1)); /* Temp solution to make room for actions */
			}

			#side {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
				gap: var(--uui-size-space-3);
				flex-grow: 1;
				overflow-y: auto;
				height: fit-content;
				max-height: 100%;

				umb-image-cropper-preview[active] {
					background-color: var(--uui-color-current);
				}
			}
		`
];
J([
  l({ attribute: !1 })
], O.prototype, "value", 1);
J([
  p()
], O.prototype, "crops", 2);
J([
  p()
], O.prototype, "currentCrop", 2);
J([
  l({ attribute: !1 })
], O.prototype, "file", 1);
J([
  l()
], O.prototype, "fileDataUrl", 2);
J([
  p()
], O.prototype, "focalPoint", 2);
J([
  l({ type: Boolean })
], O.prototype, "hideFocalPoint", 2);
J([
  p()
], O.prototype, "src", 2);
J([
  p()
], O.prototype, "_serverUrl", 2);
O = J([
  U("umb-image-cropper-field")
], O);
var Oo = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, da = (e) => {
  throw TypeError(e);
}, Z = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ao(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Oo(t, i, a), a;
}, hi = (e, t, i) => t.has(e) || da("Cannot " + i), he = (e, t, i) => (hi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), At = (e, t, i) => t.has(e) ? da("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ro = (e, t, i, n) => (hi(e, t, "write to private field"), t.set(e, i), i), b = (e, t, i) => (hi(e, t, "access private method"), i), me, Ze, x, ua, ma, ve, vi, ha, fi, jt, va, fa;
let W = class extends Q {
  constructor() {
    super(...arguments), At(this, x), this._isDraggingGridHandle = !1, this.coords = { x: 0, y: 0 }, At(this, me, { left: 0.5, top: 0.5 }), this.hideFocalPoint = !1, this.disabled = !1, At(this, Ze, 8);
  }
  set focalPoint(e) {
    Ro(this, me, e), b(this, x, vi).call(this, he(this, me).left, he(this, me).top), b(this, x, ma).call(this);
  }
  get focalPoint() {
    return he(this, me);
  }
  update(e) {
    super.update(e), e.has("src") && this.src && b(this, x, ua).call(this);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.style.setProperty("--dot-radius", `${he(this, Ze)}px`);
  }
  render() {
    return this.src ? r`
			<div
				id="wrapper"
				@click=${b(this, x, va)}
				@mousedown=${b(this, x, jt)}
				@touchstart=${b(this, x, jt)}>
				<img id="image" @keydown=${() => w} src=${this.src} alt="" />
				<span
					id="focal-point"
					class=${ao({ "focal-point--dragging": this._isDraggingGridHandle, hidden: this.hideFocalPoint })}
					tabindex=${Ue(this.disabled ? void 0 : "0")}
					aria-label=${this.localize.term("general_focalPoint")}
					@keydown=${b(this, x, fa)}>
				</span>
			</div>
		` : w;
  }
};
me = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakSet();
ua = async function() {
  await this.updateComplete, this.hideFocalPoint || b(this, x, vi).call(this, this.focalPoint.left, this.focalPoint.top), this.imageElement.onload = () => {
    if (!this.imageElement || !this.wrapperElement) return;
    const e = this.imageElement.naturalWidth / this.imageElement.naturalHeight, t = this.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
    i.width > t.width && (this.imageElement.style.width = "100%"), i.height > t.height && (this.imageElement.style.height = "100%"), b(this, x, fi).call(this), this.imageElement.style.aspectRatio = `${e}`, this.wrapperElement.style.aspectRatio = `${e}`;
  };
};
ma = function() {
  b(this, x, ha).call(this, he(this, me)) && b(this, x, fi).call(this);
};
ve = function(e, t, i, n) {
  const a = S(e / i, 0, 1), o = S(t / n, 0, 1), s = { left: a, top: o };
  this.dispatchEvent(new ui(s));
};
vi = function(e, t) {
  this.focalPointElement && (this.focalPointElement.style.left = `calc(${e * 100}% - ${he(this, Ze)}px)`, this.focalPointElement.style.top = `calc(${t * 100}% - ${he(this, Ze)}px)`);
};
ha = function(e) {
  if (this.focalPoint)
    return e.left === 0.5 && e.top === 0.5;
};
fi = function() {
  this.imageElement && (this.coords.x = this.imageElement?.clientWidth / 2, this.coords.y = this.imageElement.clientHeight / 2);
};
jt = function(e) {
  if (this.disabled || this.hideFocalPoint || e.button !== 0)
    return;
  const t = this.wrapperElement, i = this.focalPointElement;
  if (!t) return;
  const { width: n, height: a } = t.getBoundingClientRect();
  i?.focus(), e.preventDefault(), e.stopPropagation(), this._isDraggingGridHandle = !0, oo(t, {
    onMove: (o, s) => {
      isNaN(o) || isNaN(s) || (this.coords.x = o, this.coords.y = s, b(this, x, ve).call(this, o, s, n, a));
    },
    onStop: () => this._isDraggingGridHandle = !1,
    initialEvent: e
  });
};
va = function(e) {
  if (this.disabled || this.hideFocalPoint || e.button !== 0)
    return;
  const t = this.wrapperElement, i = this.focalPointElement;
  if (!t) return;
  i?.focus();
  const n = t.getBoundingClientRect(), a = t.ownerDocument.defaultView, { width: o, height: s } = t.getBoundingClientRect(), c = n.left + a.scrollX, v = n.top + a.scrollY, _ = e.pageX - c, se = e.pageY - v;
  b(this, x, ve).call(this, _, se, o, s);
};
fa = function(e) {
  if (this.disabled || this.hideFocalPoint) return;
  const t = e.shiftKey ? 1 : 10, i = this.wrapperElement;
  if (!i) return;
  const { width: n, height: a } = i.getBoundingClientRect();
  e.key === "ArrowLeft" && (e.preventDefault(), this.coords.x = S(this.coords.x - t, 0, n), b(this, x, ve).call(this, this.coords.x, this.coords.y, n, a)), e.key === "ArrowRight" && (e.preventDefault(), this.coords.x = S(this.coords.x + t, 0, n), b(this, x, ve).call(this, this.coords.x, this.coords.y, n, a)), e.key === "ArrowUp" && (e.preventDefault(), this.coords.y = S(this.coords.y - t, 0, a), b(this, x, ve).call(this, this.coords.x, this.coords.y, n, a)), e.key === "ArrowDown" && (e.preventDefault(), this.coords.y = S(this.coords.y + t, 0, a), b(this, x, ve).call(this, this.coords.x, this.coords.y, n, a));
};
W.styles = z`
		:host {
			display: flex;
			width: 100%;
			height: 100%;
			position: relative;
			user-select: none;
			background-color: var(--uui-color-surface);
			outline: 1px solid var(--uui-color-border);
		}
		/* Wrapper is used to make the focal point position responsive to the image size */
		#wrapper {
			position: relative;
			display: flex;
			margin: auto;
			max-width: 100%;
			max-height: 100%;
			box-sizing: border-box;
			forced-color-adjust: none;
		}
		:host(:not([hidefocalpoint])) #wrapper {
			cursor: crosshair;
		}
		#image {
			margin: auto;
			position: relative;
		}
		#focal-point {
			content: '';
			display: block;
			position: absolute;
			width: calc(2 * var(--dot-radius));
			height: calc(2 * var(--dot-radius));
			top: 0;
			box-shadow:
				rgba(0, 0, 0, 0.25) 0px 0px 0px 1px,
				inset rgba(0, 0, 0, 0.25) 0px 0px 0px 1px;
			border: solid 2px white;
			border-radius: 50%;
			pointer-events: none;
			transition: 150ms transform;
			box-sizing: inherit;
		}
		.focal-point--dragging {
			cursor: none;
			transform: scale(1.5);
		}
		#focal-point.hidden {
			display: none;
		}
	`;
Z([
  ae("#image")
], W.prototype, "imageElement", 2);
Z([
  ae("#wrapper")
], W.prototype, "wrapperElement", 2);
Z([
  ae("#focal-point")
], W.prototype, "focalPointElement", 2);
Z([
  p()
], W.prototype, "_isDraggingGridHandle", 2);
Z([
  p()
], W.prototype, "coords", 2);
Z([
  l({ attribute: !1 })
], W.prototype, "focalPoint", 1);
Z([
  l({ type: Boolean })
], W.prototype, "hideFocalPoint", 2);
Z([
  l({ type: Boolean, reflect: !0 })
], W.prototype, "disabled", 2);
Z([
  l({ type: String })
], W.prototype, "src", 2);
W = Z([
  U("umb-image-cropper-focus-setter")
], W);
var Do = Object.defineProperty, Fo = Object.getOwnPropertyDescriptor, ga = (e) => {
  throw TypeError(e);
}, ye = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Fo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Do(t, i, a), a;
}, gi = (e, t, i) => t.has(e) || ga("Cannot " + i), Lt = (e, t, i) => (gi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Gi = (e, t, i) => t.has(e) ? ga("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Wo = (e, t, i, n) => (gi(e, t, "write to private field"), t.set(e, i), i), Vt = (e, t, i) => (gi(e, t, "access private method"), i), Pe, Ge, _a, _i;
let ee = class extends Q {
  constructor() {
    super(...arguments), Gi(this, Ge), this.src = "", Gi(this, Pe, { left: 0.5, top: 0.5 });
  }
  set focalPoint(e) {
    Wo(this, Pe, e), Vt(this, Ge, _i).call(this);
  }
  get focalPoint() {
    return Lt(this, Pe);
  }
  connectedCallback() {
    super.connectedCallback(), Vt(this, Ge, _a).call(this);
  }
  render() {
    return this.crop ? r`
			<div id="container">
				<img id="image" src=${this.src} alt="" />
			</div>
			<span id="alias">
				${this.crop.label !== void 0 ? this.localize.string(this.crop.label) : this.label ?? this.crop.alias}
			</span>
			<span id="dimensions">${this.crop.width} x ${this.crop.height}</span>
			${this.crop.coordinates ? r`<span id="user-defined"><umb-localize key="imagecropper_customCrop">User defined</umb-localize></span>` : w}
		` : r`<span id="label">${this.label}</span>`;
  }
};
Pe = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakSet();
_a = async function() {
  if (!this.crop) return;
  await this.updateComplete, await new Promise((_) => this.imageElement.onload = () => _(this.imageElement));
  const e = this.imageContainerElement.getBoundingClientRect(), t = this.crop.width / this.crop.height, i = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
  let n = 0, a = 0, o = 0, s = 0, c = 0, v = 0;
  if (t > 1 ? (n = e.width, a = e.width / t) : (n = e.height * t, a = e.height), this.crop.coordinates) {
    if (t > 1) {
      const _ = this.crop.coordinates.x1 + this.crop.coordinates.x2;
      o = yt(n, _), s = o / i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    } else {
      const _ = this.crop.coordinates.y1 + this.crop.coordinates.y2;
      s = yt(a, _), o = s * i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    }
    v = v / a * 100, c = c / n * 100, this.imageElement.style.top = `${v}%`, this.imageElement.style.left = `${c}%`;
  } else
    i > t ? (s = a, o = s * i) : (o = n, s = o / i), Vt(this, Ge, _i).call(this, o, s, n, a);
  this.imageContainerElement.style.width = `${n}px`, this.imageContainerElement.style.aspectRatio = `${t}`, o = o / n * 100, s = s / a * 100, this.imageElement.style.width = `${o}%`, this.imageElement.style.height = `${s}%`;
};
_i = function(e, t, i, n) {
  if (!this.crop || !this.imageElement || !this.imageContainerElement || this.crop.coordinates) return;
  if (!e || !t) {
    const s = this.imageElement.getBoundingClientRect();
    e = s.width, t = s.height;
  }
  if (!i || !n) {
    const s = this.imageContainerElement.getBoundingClientRect();
    i = s.width, n = s.height;
  }
  let a = i / 2 - e * Lt(this, Pe).left, o = n / 2 - t * Lt(this, Pe).top;
  a = S(a, i - e, 0), o = S(o, n - t, 0), a = a / i * 100, o = o / n * 100, this.imageElement.style.top = `${o}%`, this.imageElement.style.left = `${a}%`;
};
ee.styles = z`
		:host {
			display: flex;
			flex-direction: column;
			padding: var(--uui-size-space-4);
			border-radius: var(--uui-border-radius);
			background-color: var(--uui-color-surface);
			cursor: pointer;
		}
		:host(:hover) {
			background-color: var(--uui-color-surface-alt);
		}
		#container {
			display: flex;
			width: 100%;
			aspect-ratio: 1;
			overflow: hidden;
			position: relative;
			overflow: hidden;
			margin: auto;
			max-width: 100%;
			max-height: 200px;
			user-select: none;
		}
		#label {
			font-weight: bold;
		}
		#alias {
			font-weight: bold;
			margin-top: var(--uui-size-space-3);
		}
		#dimensions,
		#user-defined {
			font-size: 0.8em;
		}
		#image {
			position: absolute;
			pointer-events: none;
		}
	`;
ye([
  ae("#image")
], ee.prototype, "imageElement", 2);
ye([
  ae("#container")
], ee.prototype, "imageContainerElement", 2);
ye([
  l({ type: Object, attribute: !1 })
], ee.prototype, "crop", 2);
ye([
  l({ type: String, attribute: !1 })
], ee.prototype, "src", 2);
ye([
  l({ type: String })
], ee.prototype, "label", 2);
ye([
  l({ attribute: !1 })
], ee.prototype, "focalPoint", 1);
ee = ye([
  U("umb-image-cropper-preview")
], ee);
var No = Object.defineProperty, Bo = Object.getOwnPropertyDescriptor, xa = (e) => {
  throw TypeError(e);
}, ne = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Bo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && No(t, i, a), a;
}, xi = (e, t, i) => t.has(e) || xa("Cannot " + i), h = (e, t, i) => (xi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), E = (e, t, i) => t.has(e) ? xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), fe = (e, t, i, n) => (xi(e, t, "write to private field"), t.set(e, i), i), f = (e, t, i) => (xi(e, t, "access private method"), i), yi, bi, Ht, ge, et, Xe, je, ut, mt, m, Yt, ya, ba, Gt, Xt, wi, wa, pe, ka, Ma, $a, Ea, qt, ht, vt, zt;
let L = class extends Q {
  constructor() {
    super(...arguments), E(this, m), this.src = "", this.focalPoint = {
      left: 0.5,
      top: 0.5
    }, this._zoom = 0, E(this, yi, 50), E(this, bi, 4), E(this, Ht, 1e-3), E(this, ge, 0), E(this, et, 0), E(this, Xe, 0), E(this, je, !1), E(this, ut, 0), E(this, mt, 0), E(this, qt, (e) => {
      e.preventDefault(), fe(this, je, !0);
      const t = this.imageElement.getBoundingClientRect(), i = this.viewportElement.getBoundingClientRect();
      fe(this, ut, e.clientX - t.left + i.left), fe(this, mt, e.clientY - t.top + i.top), window.addEventListener("mousemove", h(this, ht)), window.addEventListener("mouseup", h(this, vt));
    }), E(this, ht, (e) => {
      if (h(this, je)) {
        const t = e.clientX - h(this, ut), i = e.clientY - h(this, mt);
        f(this, m, wi).call(this, i, t);
      }
    }), E(this, vt, () => {
      fe(this, je, !1), window.removeEventListener("mousemove", h(this, ht)), window.removeEventListener("mouseup", h(this, vt));
    }), E(this, zt, (e) => {
      e.preventDefault(), f(this, m, Xt).call(this, e.deltaY * -h(this, Ht), e.clientX, e.clientY);
    });
  }
  get zoom() {
    return this._zoom;
  }
  set zoom(e) {
    const t = e - this._zoom;
    f(this, m, Xt).call(this, t);
  }
  connectedCallback() {
    super.connectedCallback(), f(this, m, Gt).call(this), f(this, m, ya).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), f(this, m, ba).call(this);
  }
  updated(e) {
    super.updated(e), e.has("value") && f(this, m, Gt).call(this);
  }
  render() {
    return r`
			<div id="viewport">
				<img id="image" src=${this.src} alt="" />
				<div id="mask"></div>
			</div>
			<uui-slider
				@input=${f(this, m, Ea)}
				.value=${this._zoom.toString()}
				hide-step-values
				id="slider"
				type="range"
				min="0"
				max="1"
				value="0"
				step="0.001">
			</uui-slider>
			<div id="actions">
				<uui-button @click=${f(this, m, $a)} label="${this.localize.term("imagecropper_reset")}"></uui-button>
				<uui-button
					look="secondary"
					@click=${f(this, m, Ma)}
					label="${this.localize.term("general_cancel")}"></uui-button>
				<uui-button
					look="primary"
					color="positive"
					@click=${f(this, m, ka)}
					label="${this.localize.term("buttons_save")}"></uui-button>
			</div>
		`;
  }
};
yi = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
ge = /* @__PURE__ */ new WeakMap();
et = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakMap();
mt = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
Yt = function() {
  return ro(h(this, ge), h(this, et), this._zoom);
};
ya = async function() {
  await this.updateComplete, this.imageElement.addEventListener("mousedown", h(this, qt)), this.addEventListener("wheel", h(this, zt), { passive: !1 });
};
ba = function() {
  this.imageElement.removeEventListener("mousedown", h(this, qt)), this.removeEventListener("wheel", h(this, zt));
};
Gt = async function() {
  if (!this.value) return;
  await this.updateComplete, this.imageElement.complete || await new Promise((B) => this.imageElement.onload = () => B(this.imageElement));
  const e = this.viewportElement.clientWidth, t = this.viewportElement.clientHeight, i = e / t, n = this.value.width / this.value.height;
  let a = 0, o = 0, s = 0, c = 0, v = 0, _ = 0;
  {
    const B = 2 * h(this, yi), V = e - B, Re = t - B, Hi = n > i;
    a = Hi ? V : Re * n, o = Hi ? V / n : Re;
  }
  const se = (e - a) / 2, ke = (t - o) / 2;
  this.maskElement.style.width = `${a}px`, this.maskElement.style.height = `${o}px`, this.maskElement.style.left = `${se}px`, this.maskElement.style.top = `${ke}px`;
  {
    const B = a / this.imageElement.naturalWidth, V = o / this.imageElement.naturalHeight, Re = Math.max(B, V);
    fe(this, ge, Re), fe(this, et, Re * h(this, bi));
  }
  if (this.value.coordinates) {
    const B = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
    if (n > 1) {
      const V = this.value.coordinates.x1 + this.value.coordinates.x2;
      s = yt(a, V), c = s / B, v = -s * this.value.coordinates.x1 + se, _ = -c * this.value.coordinates.y1 + ke;
    } else {
      const V = this.value.coordinates.y1 + this.value.coordinates.y2;
      c = yt(o, V), s = c * B, v = -s * this.value.coordinates.x1 + se, _ = -c * this.value.coordinates.y1 + ke;
    }
  } else {
    s = this.imageElement.naturalWidth * h(this, ge), c = this.imageElement.naturalHeight * h(this, ge), v = se + a / 2 - s * this.focalPoint.left, _ = ke + o / 2 - c * this.focalPoint.top;
    const B = se + a - s, V = ke + o - c;
    v = S(v, B, se), _ = S(_, V, ke);
  }
  this.imageElement.style.left = `${v}px`, this.imageElement.style.top = `${_}px`, this.imageElement.style.width = `${s}px`, this.imageElement.style.height = `${c}px`;
  const eo = s / this.imageElement.naturalWidth, to = c / this.imageElement.naturalHeight, io = Math.max(eo, to);
  this._zoom = so(h(this, ge), h(this, et), io);
};
Xt = function(e, t, i) {
  fe(this, Xe, h(this, m, Yt)), this._zoom = S(this._zoom + e, 0, 1);
  const n = h(this, m, Yt), a = this.maskElement.getBoundingClientRect(), o = this.imageElement.getBoundingClientRect();
  let s = { left: 0, top: 0 };
  t && i ? s = f(this, m, pe).call(this, t, i) : s = f(this, m, pe).call(this, a.left + a.width / 2, a.top + a.height / 2);
  const c = f(this, m, pe).call(this, o.left, o.top), v = s.left - (s.left - c.left) * (n / h(this, Xe)), _ = s.top - (s.top - c.top) * (n / h(this, Xe));
  this.imageElement.style.width = `${this.imageElement.naturalWidth * n}px`, this.imageElement.style.height = `${this.imageElement.naturalHeight * n}px`, f(this, m, wi).call(this, _, v);
};
wi = function(e, t) {
  const i = this.maskElement.getBoundingClientRect(), n = this.imageElement.getBoundingClientRect(), a = f(this, m, pe).call(this, i.left + i.width - n.width, 0).left, o = f(this, m, pe).call(this, i.left, 0).left, s = f(this, m, pe).call(this, 0, i.top + i.height - n.height).top, c = f(this, m, pe).call(this, 0, i.top).top;
  t = S(t, a, o), e = S(e, s, c), this.imageElement.style.left = `${t}px`, this.imageElement.style.top = `${e}px`;
};
wa = function() {
  const e = { x1: 0, y1: 0, x2: 0, y2: 0 }, t = this.maskElement.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
  return e.x1 = (t.left - i.left) / i.width, e.y1 = (t.top - i.top) / i.height, e.x2 = Math.abs((t.right - i.right) / i.width), e.y2 = Math.abs((t.bottom - i.bottom) / i.height), e;
};
pe = function(e, t) {
  const i = this.viewportElement.getBoundingClientRect();
  return {
    left: e - i.left,
    top: t - i.top
  };
};
ka = function() {
  if (!this.value) return;
  const { x1: e, x2: t, y1: i, y2: n } = f(this, m, wa).call(this);
  this.value = {
    ...this.value,
    coordinates: { x1: e, x2: t, y1: i, y2: n }
  }, this.dispatchEvent(new nt());
};
Ma = function() {
  this.dispatchEvent(new nt());
};
$a = function() {
  this.value && (delete this.value.coordinates, this.dispatchEvent(new nt()));
};
Ea = function(e) {
  const t = e.target;
  this.zoom = Number(t.value);
};
qt = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
L.styles = z`
		:host {
			display: grid;
			grid-template-rows: 1fr auto auto;
			gap: var(--uui-size-space-3);
			height: 100%;
			width: 100%;
		}
		#viewport {
			background-color: #fff;
			background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
			background-repeat: repeat;
			background-size: 10px 10px;
			contain: strict;
			overflow: hidden;
			position: relative;
			width: 100%;
			height: 100%;
			outline: 1px solid var(--uui-color-border);
			border-radius: var(--uui-border-radius);
		}
		#actions {
			display: flex;
			justify-content: flex-end;
			gap: var(--uui-size-space-1);
			margin-top: 0.5rem;
		}

		#mask {
			display: block;
			position: absolute;
			box-shadow: 0 0 0 2000px hsla(0, 0%, 100%, 0.8);
			pointer-events: none;
		}

		#image {
			display: block;
			position: absolute;
			user-select: none;
		}

		#viewport #image {
			cursor: move;
		}

		#slider {
			width: 100%;
			height: 0px; /* TODO: FIX - This is needed to prevent the slider from taking up more space than needed */
			min-height: 22px; /* TODO: FIX - This is needed to prevent the slider from taking up more space than needed */
		}
	`;
ne([
  ae("#viewport")
], L.prototype, "viewportElement", 2);
ne([
  ae("#mask")
], L.prototype, "maskElement", 2);
ne([
  ae("#image")
], L.prototype, "imageElement", 2);
ne([
  l({ type: Object, attribute: !1 })
], L.prototype, "value", 2);
ne([
  l({ type: String })
], L.prototype, "src", 2);
ne([
  l({ attribute: !1 })
], L.prototype, "focalPoint", 2);
ne([
  l({ type: Number })
], L.prototype, "zoom", 1);
ne([
  p()
], L.prototype, "_zoom", 2);
L = ne([
  U("umb-image-cropper")
], L);
var jo = Object.defineProperty, Lo = Object.getOwnPropertyDescriptor, Ta = (e) => {
  throw TypeError(e);
}, be = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Lo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && jo(t, i, a), a;
}, Ca = (e, t, i) => t.has(e) || Ta("Cannot " + i), Kt = (e, t, i) => (Ca(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Rt = (e, t, i) => t.has(e) ? Ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Te = (e, t, i) => (Ca(e, t, "access private method"), i), bt, le, Pa, qa, ki, za, Ua, Ia, Sa;
const Vo = { left: 0.5, top: 0.5 }, Ho = {
  temporaryFileId: null,
  src: "",
  crops: [],
  focalPoint: Vo
};
let te = class extends li(Q, void 0) {
  constructor() {
    super(), Rt(this, le), this.crops = [], this._loading = !0, Rt(this, bt, new ea(this)), Rt(this, ki, () => {
      this.value = void 0, this._file?.temporaryFile?.abortController?.abort(), this._file = void 0, this.dispatchEvent(new C());
    }), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ta,
      () => !!this.required && (!this.value || this.value.src === "" && this.value.temporaryFileId == null)
    );
  }
  firstUpdated() {
    Te(this, le, za).call(this), Te(this, le, Pa).call(this);
  }
  render() {
    return this._loading ? r`<div id="loader"><uui-loader></uui-loader></div>` : this.value?.src || this._file ? Te(this, le, Sa).call(this) : Te(this, le, Ua).call(this);
  }
};
bt = /* @__PURE__ */ new WeakMap();
le = /* @__PURE__ */ new WeakSet();
Pa = async function() {
  await Kt(this, bt).initialized, this.observe(
    Kt(this, bt).part("imageFileTypes"),
    (e) => {
      this._accept = e.join(","), this._loading = !1;
    },
    "_observeFileTypes"
  );
};
qa = function(e) {
  e.stopImmediatePropagation();
  const i = e.target.value?.[0];
  i?.status === Zi.COMPLETE && (this._file = i, this.value = no(this.value ?? Ho, {
    temporaryFileId: i.temporaryFile?.temporaryUnique
  }), this.dispatchEvent(new C()));
};
ki = /* @__PURE__ */ new WeakMap();
za = function() {
  if (this.value) {
    const e = this.crops.map((t) => {
      const i = this.value.crops.find((a) => a.alias === t.alias);
      return {
        ...t,
        coordinates: i?.coordinates ?? void 0
      };
    });
    this.value = {
      ...this.value,
      crops: e
    };
  }
};
Ua = function() {
  return r`
			<umb-input-dropzone
				standalone
				accept=${Ue(this._accept)}
				disable-folder-upload
				@change="${Te(this, le, qa)}"></umb-input-dropzone>
		`;
};
Ia = function(e) {
  const t = e.target.value;
  if (!t) {
    this.value = void 0, this.dispatchEvent(new C());
    return;
  }
  this.value && this.value.temporaryFileId && (t.temporaryFileId = this.value.temporaryFileId), (t.temporaryFileId || t.src !== "") && (this.value = t), this.dispatchEvent(new C());
};
Sa = function() {
  return r`
			<umb-image-cropper-field .value=${this.value} .file=${this._file?.temporaryFile?.file} @change=${Te(this, le, Ia)}>
				<uui-button slot="actions" compact label=${this.localize.term("content_uploadClear")} @click=${Kt(this, ki)}>
					<uui-icon name="icon-trash"></uui-icon>
					<umb-localize key="content_uploadClear">Remove file(s)</umb-localize>
				</uui-button>
			</umb-image-cropper-field>
		`;
};
te.styles = [
  ri,
  z`
			umb-input-dropzone {
				max-width: 500px;
				min-width: 300px;
			}

			#loader {
				display: flex;
				justify-content: center;
			}

			[slot='actions'] {
				uui-icon {
					padding-right: var(--uui-size-1);
				}
			}
		`
];
be([
  l({ type: Boolean })
], te.prototype, "required", 2);
be([
  l({ type: String })
], te.prototype, "requiredMessage", 2);
be([
  l({ attribute: !1 })
], te.prototype, "crops", 2);
be([
  p()
], te.prototype, "_file", 2);
be([
  p()
], te.prototype, "_accept", 2);
be([
  p()
], te.prototype, "_loading", 2);
te = be([
  U("umb-input-image-cropper")
], te);
const _r = new xe("UmbCollectionContext"), xr = new at("Umb.Modal.Media.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
var Yo = Object.getOwnPropertyDescriptor, Go = Object.getPrototypeOf, Xo = Reflect.get, Oa = (e) => {
  throw TypeError(e);
}, Ko = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Yo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = s(a) || a);
  return a;
}, Qo = (e, t, i) => t.has(e) || Oa("Cannot " + i), Jo = (e, t, i) => t.has(e) ? Oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Zo = (e, t, i) => (Qo(e, t, "access private method"), i), es = (e, t, i) => Xo(Go(e), i, t), Qt, Aa;
let Ke = class extends O {
  constructor() {
    super(...arguments), Jo(this, Qt);
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return r`
			<umb-image-cropper-preview
				.label=${this.localize.term("general_media")}
				?active=${!this.currentCrop}
				@click=${Zo(this, Qt, Aa)}>
			</umb-image-cropper-preview>
			${super.renderSide()}
		`;
  }
};
Qt = /* @__PURE__ */ new WeakSet();
Aa = function() {
  this.currentCrop = void 0;
};
Ke.styles = [
  ...es(Ke, Ke, "styles"),
  z`
			#main {
				max-width: unset;
				min-width: unset;
			}

			#side {
				flex: none;
			}
		`
];
Ke = Ko([
  U("umb-image-cropper-editor-field")
], Ke);
const Mi = new at(
  "Umb.Modal.MediaPicker",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var ts = Object.defineProperty, is = Object.getOwnPropertyDescriptor, Ra = (e) => {
  throw TypeError(e);
}, oe = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? is(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && ts(t, i, a), a;
}, $i = (e, t, i) => t.has(e) || Ra("Cannot " + i), tt = (e, t, i) => ($i(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Fe = (e, t, i) => t.has(e) ? Ra("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Da = (e, t, i, n) => ($i(e, t, "write to private field"), t.set(e, i), i), Y = (e, t, i) => ($i(e, t, "access private method"), i), Ei, wt, Ut, kt, D, Fa, Ti, Wa, Na, Ci, Ba, ja, La;
let P = class extends pi {
  constructor() {
    super(), Fe(this, D), Fe(this, Ei, new oa(this)), this._key = "", this._unique = "", this._hideFocalPoint = !1, this._crops = [], this._editMediaPath = "", this._isCroppable = !1, Fe(this, wt, new ea(this)), Fe(this, Ut), Fe(this, kt), this.consumeContext(ia, (e) => {
      Da(this, kt, e);
    }), new ci(this, aa).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((e) => {
      this._editMediaPath = e({});
    });
  }
  connectedCallback() {
    super.connectedCallback(), this._key = this.data?.key ?? "", this._unique = this.data?.unique ?? "", this._hideFocalPoint = this.data?.hideFocalPoint ?? !1, this._crops = this.data?.cropOptions ?? [], this._pickableFilter = this.data?.pickableFilter, Y(this, D, Fa).call(this), Y(this, D, Ti).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectMedia")}>
				<div id="layout">
					${si(
      this._isCroppable,
      () => Y(this, D, Ba).call(this),
      () => Y(this, D, ja).call(this)
    )}
				</div>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
Ei = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
kt = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakSet();
Fa = async function() {
  await tt(this, wt).initialized, this.observe(
    tt(this, wt).part("imageFileTypes"),
    (e) => Da(this, Ut, e),
    "_observeFileTypes"
  );
};
Ti = async function() {
  const { data: e } = await tt(this, Ei).requestItems([this._unique]), t = e?.[0];
  if (!t?.url) {
    this._isCroppable = !1, this._imageCropperValue = void 0;
    return;
  }
  t.extension && tt(this, Ut)?.includes(t.extension) && (this._isCroppable = !0);
  const i = this._crops.map((a) => {
    const o = this.value.crops?.find((s) => s.alias === a.alias);
    return o ? { ...a, ...o } : a;
  }), n = {
    ...this.value,
    src: t.url,
    crops: i,
    focalPoint: this.value.focalPoint ?? { left: 0.5, top: 0.5 }
  };
  this._imageCropperValue = n;
};
Wa = async function() {
  const t = await tt(this, kt)?.open(this, Mi, {
    data: { multiple: !1, pickableFilter: this._pickableFilter },
    value: { selection: [this._unique] }
  })?.onSubmit().catch(() => null);
  if (!t) return;
  const i = t.selection[0];
  if (!i)
    throw new Error("No media selected");
  this._unique = i, this.value = { ...this.value, unique: this._unique }, this._isCroppable = !1, Y(this, D, Ti).call(this);
};
Na = function(e) {
  const t = e.target.value;
  t && (this._imageCropperValue && (this._imageCropperValue.crops = t.crops, this._imageCropperValue.focalPoint = t.focalPoint), this.value = { key: this._key, unique: this._unique, crops: t.crops, focalPoint: t.focalPoint });
};
Ci = function() {
  return r`
			<uui-button compact label=${this.localize.term("mediaPicker_changeMedia")} @click=${Y(this, D, Wa)}>
				<uui-icon name="icon-search"></uui-icon>
				<umb-localize key="mediaPicker_changeMedia">Change Media Item</umb-localize>
			</uui-button>
			<uui-button
				compact
				label=${this.localize.term("mediaPicker_openMedia")}
				href=${this._editMediaPath + "edit/" + this._unique}>
				<uui-icon name="icon-out"></uui-icon>
				<umb-localize key="mediaPicker_openMedia">Open in Media Library</umb-localize>
			</uui-button>
		`;
};
Ba = function() {
  return this._imageCropperValue ? r`
			<umb-image-cropper-editor-field
				.value=${this._imageCropperValue}
				?hideFocalPoint=${this._hideFocalPoint}
				@change=${Y(this, D, Na)}>
				<div slot="actions">${Y(this, D, Ci).call(this)}</div>
			</umb-image-cropper-editor-field>
		` : w;
};
ja = function() {
  return r`
			<div id="main">
				${si(
    this._imageCropperValue?.src,
    (e) => r`<umb-file-upload-preview .path=${e}></umb-file-upload-preview>`,
    () => Y(this, D, La).call(this)
  )}
			</div>
			<div id="actions">${Y(this, D, Ci).call(this)}</div>
		`;
};
La = function() {
  const e = [this.localize.term("general_media")];
  return r`
			<div class="uui-text">
				<h4>
					<umb-localize key="entityDetail_notFoundTitle" .args=${e}>Item not found</umb-localize>
				</h4>
				<umb-localize key="entityDetail_notFoundDescription">The requested item could not be found.</umb-localize>
			</div>
		`;
};
P.styles = [
  ri,
  z`
			#layout {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			umb-image-cropper-editor-field {
				flex: 1;
			}

			#main {
				flex: 1;
				background-color: var(--uui-color-surface);
				outline: 1px solid var(--uui-color-border);
			}

			#actions {
				display: flex;
				margin-top: 0.5rem;

				uui-icon {
					padding-right: var(--uui-size-1);
				}
			}

			.uui-text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
		`
];
oe([
  p()
], P.prototype, "_imageCropperValue", 2);
oe([
  p()
], P.prototype, "_key", 2);
oe([
  p()
], P.prototype, "_unique", 2);
oe([
  p()
], P.prototype, "_hideFocalPoint", 2);
oe([
  p()
], P.prototype, "_crops", 2);
oe([
  p()
], P.prototype, "_editMediaPath", 2);
oe([
  p()
], P.prototype, "_pickableFilter", 2);
oe([
  p()
], P.prototype, "_isCroppable", 2);
P = oe([
  U("umb-image-cropper-editor-modal")
], P);
const as = P, yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbImageCropperEditorModalElement() {
    return P;
  },
  default: as,
  get element() {
    return P;
  }
}, Symbol.toStringTag, { value: "Module" })), ns = new at("Umb.Modal.ImageCropperEditor", {
  modal: {
    type: "sidebar",
    size: "full"
  }
}), br = new at("Umb.Modal.MediaCaptionAltText", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), K = "media", ot = "media-root", wr = "umb-media-placeholder", kr = `${K}-property-value`;
class os extends di {
  /**
   * Creates a new Media scaffold
   * @param {UmbDeepPartialObject<UmbMediaDetailModel>} [preset]
   * @returns { UmbMediaDetailModel }
   * @memberof UmbMediaServerDataSource
   */
  async createScaffold(t = {}) {
    let i = null, n = null;
    const a = t.mediaType?.unique;
    if (!a)
      throw new Error("Media type unique is missing");
    const { data: o } = await new yo(this).read(a);
    i = o?.icon ?? null, n = o?.collection ?? null;
    const s = {
      entityType: K,
      unique: Pt.new(),
      mediaType: {
        unique: a,
        collection: n,
        icon: i
      },
      isTrashed: !1,
      values: [],
      variants: [
        {
          culture: null,
          segment: null,
          name: "",
          createDate: null,
          updateDate: null
        }
      ]
    };
    return { data: lo(t, s) };
  }
  /**
   * Fetches a Media with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: i, error: n } = await $e(this, H.getMediaById({ path: { id: t } }));
    return n || !i ? { error: n } : { data: {
      entityType: K,
      unique: i.id,
      values: i.values,
      variants: i.variants.map((o) => ({
        state: null,
        culture: o.culture || null,
        segment: o.segment || null,
        name: o.name,
        createDate: o.createDate,
        updateDate: o.updateDate
      })),
      mediaType: {
        unique: i.mediaType.id,
        collection: i.mediaType.collection ? { unique: i.mediaType.collection.id } : null,
        icon: i.mediaType.icon
      },
      isTrashed: i.isTrashed
    } };
  }
  /**
   * Inserts a new Media on the server
   * @param {UmbMediaDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async create(t, i = null) {
    if (!t) throw new Error("Media is missing");
    if (!t.unique) throw new Error("Media unique is missing");
    const n = {
      id: t.unique,
      parent: i ? { id: i } : null,
      mediaType: { id: t.mediaType.unique },
      values: t.values,
      variants: t.variants.map((s) => ({
        culture: s.culture || null,
        segment: s.segment || null,
        name: s.name
      }))
    }, { data: a, error: o } = await $e(
      this,
      H.postMedia({
        body: n
      })
    );
    return a && typeof a == "string" ? this.read(a) : { error: o };
  }
  /**
   * Updates a Media on the server
   * @param {UmbMediaDetailModel} Media
   * @param model
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const i = {
      values: t.values,
      variants: t.variants
    }, { error: n } = await $e(
      this,
      H.putMediaById({
        path: { id: t.unique },
        body: i
      })
    );
    return n ? { error: n } : this.read(t.unique);
  }
  /**
   * Deletes a Media on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    return $e(this, H.deleteMediaById({ path: { id: t } }));
  }
}
const ss = new xe("UmbMediaDetailStore");
class qe extends $o {
  constructor(t) {
    super(t, os, ss);
  }
}
const Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaDetailRepository: qe,
  api: qe,
  default: qe
}, Symbol.toStringTag, { value: "Module" }));
class Xi extends Eo {
  /**
   * Creates an instance of UmbMediaItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaItemServerDataSource
   */
  constructor(t) {
    super(t, {
      mapper: Ki
    });
  }
  /**
   * @deprecated - The search method will be removed in v17. Use the
   * Use the UmbMediaSearchProvider instead.
   * Get it from:
   * ```ts
   * import { UmbMediaSearchProvider } from '@umbraco-cms/backoffice/media';
   * ```
   */
  async search({ query: t, skip: i, take: n }) {
    const { data: a, error: o } = await $e(this, H.getItemMediaSearch({ query: { query: t, skip: i, take: n } }));
    return { data: a?.items.map((c) => Ki(c)), error: o };
  }
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const i = new Po(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (o) => H.getItemMedia({ query: { id: o.uniques } }),
      uniques: t
    }), { data: n, error: a } = await i.request();
    return { data: this._getMappedItems(n), error: a };
  }
}
const Ki = (e) => ({
  entityType: K,
  hasChildren: e.hasChildren,
  isTrashed: e.isTrashed,
  unique: e.id,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  name: e.variants[0]?.name,
  // TODO: get correct variant name
  parent: e.parent ? { unique: e.parent.id } : null,
  variants: e.variants.map((t) => ({
    culture: t.culture || null,
    name: t.name
  }))
}), rs = new xe("UmbMediaItemStore");
class Jt extends To {
  #e;
  constructor(t) {
    super(t, Xi, rs), this.#e = new Xi(this);
  }
  /**
   * @param root0
   * @param root0.query
   * @param root0.skip
   * @param root0.take
   * @deprecated - The search method will be removed in v17. Use the
   * Use the UmbMediaSearchProvider instead.
   * Get it from:
   * ```ts
   * import { UmbMediaSearchProvider } from '@umbraco-cms/backoffice/media';
   */
  async search({ query: t, skip: i, take: n }) {
    return this.#e.search({ query: t, skip: i, take: n });
  }
}
const $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaItemRepository: Jt,
  default: Jt
}, Symbol.toStringTag, { value: "Module" }));
class ls extends fo {
  /**
   * Creates an instance of UmbMediaTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: Va,
      getChildrenOf: ps,
      getAncestorsOf: cs,
      mapper: ds
    });
  }
}
const Va = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  H.getTreeMediaRoot({ query: { dataTypeId: e.dataType?.unique, skip: e.skip, take: e.take } })
), ps = (e) => e.parent.unique === null ? Va(e) : H.getTreeMediaChildren({
  query: { parentId: e.parent.unique, dataTypeId: e.dataType?.unique, skip: e.skip, take: e.take }
}), cs = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  H.getTreeMediaAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), ds = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? K : ot
  },
  entityType: K,
  hasChildren: e.hasChildren,
  noAccess: e.noAccess,
  isTrashed: e.isTrashed,
  isFolder: !1,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null
  })),
  createDate: e.createDate
}), us = new xe("UmbMediaTreeStore");
class Mt extends go {
  constructor(t) {
    super(t, ls, us);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: ot,
      name: "#treeHeaders_media",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaTreeRepository: Mt,
  default: Mt
}, Symbol.toStringTag, { value: "Module" }));
var ms = Object.defineProperty, hs = Object.getOwnPropertyDescriptor, Ha = (e) => {
  throw TypeError(e);
}, Oe = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? hs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && ms(t, i, a), a;
}, Ya = (e, t, i) => t.has(e) || Ha("Cannot " + i), Zt = (e, t, i) => (Ya(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Dt = (e, t, i) => t.has(e) ? Ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), We = (e, t, i) => (Ya(e, t, "access private method"), i), Pi, $t, ue, ei, Ga, Xa, Ka;
const ft = { name: "Media", unique: null, entityType: ot };
let de = class extends Q {
  constructor() {
    super(...arguments), Dt(this, ue), Dt(this, Pi, new Mt(this)), Dt(this, $t, new qe(this)), this.startNode = ft, this._currentMedia = ft, this._paths = [ft], this._typingNewFolder = !1;
  }
  set currentMedia(e) {
    e !== this._currentMedia && (this._currentMedia = e, We(this, ue, ei).call(this));
  }
  get currentMedia() {
    return this._currentMedia;
  }
  firstUpdated(e) {
    super.firstUpdated(e), We(this, ue, ei).call(this);
  }
  render() {
    return r`<div id="path">
			${_e(
      this._paths,
      (e) => e.unique,
      (e) => r`<uui-button
							compact
							.label=${e.name}
							?disabled=${this.currentMedia.unique === e.unique}
							@click=${() => We(this, ue, Ga).call(this, e)}></uui-button
						>/`
    )}${this._typingNewFolder ? r`<uui-input
						id="new-folder"
						label="enter a name"
						value="new folder name"
						@blur=${We(this, ue, Ka)}
						auto-width></uui-input>` : r`<uui-button label="add folder" compact @click=${We(this, ue, Xa)}>+</uui-button>`}
		</div>`;
  }
};
Pi = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
ue = /* @__PURE__ */ new WeakSet();
ei = async function() {
  const e = this._currentMedia.unique, t = this._currentMedia.entityType, n = (e ? (await Zt(this, Pi).requestTreeItemAncestors({
    treeItem: { unique: e, entityType: t }
  })).data || [] : []).map((a) => ({
    name: a.name,
    unique: a.unique,
    entityType: a.entityType
  }));
  this.startNode || n.unshift(ft), this._paths = [...n];
};
Ga = function(e) {
  this._paths = [...this._paths].slice(0, this._paths.findIndex((t) => t.unique === e.unique) + 1), this.currentMedia = e, this.dispatchEvent(new C());
};
Xa = function() {
  this._typingNewFolder = !0, requestAnimationFrame(() => {
    const e = this.getHostElement().shadowRoot.querySelector("#new-folder");
    e.focus(), e.select();
  });
};
Ka = async function(e) {
  e.stopPropagation();
  const t = e.target.value;
  if (this._typingNewFolder = !1, !t) return;
  const i = Pt.new(), n = this._paths[this._paths.length - 1].unique, a = {
    unique: i,
    mediaType: {
      unique: bo(),
      collection: null
    },
    variants: [
      {
        culture: null,
        segment: null,
        name: t,
        createDate: null,
        updateDate: null
      }
    ]
  }, { data: o } = await Zt(this, $t).createScaffold(a);
  if (!o) return;
  const { data: s } = await Zt(this, $t).create(o, n);
  if (!s) return;
  const c = s.variants[0].name, v = s.unique, _ = s.entityType;
  this._paths = [...this._paths, { name: c, unique: v, entityType: _ }], this.currentMedia = { name: c, unique: v, entityType: _ }, this.dispatchEvent(new C());
};
de.styles = [
  z`
			#path {
				display: flex;
				align-items: center;
				margin: 0 var(--uui-size-3);
			}
			#path uui-button {
				font-weight: bold;
			}
			#path uui-input {
				height: 100%;
			}
		`
];
Oe([
  l({ attribute: !1 })
], de.prototype, "startNode", 2);
Oe([
  l({ attribute: !1 })
], de.prototype, "currentMedia", 1);
Oe([
  p()
], de.prototype, "_currentMedia", 2);
Oe([
  p()
], de.prototype, "_paths", 2);
Oe([
  p()
], de.prototype, "_typingNewFolder", 2);
de = Oe([
  U("umb-media-picker-folder-path")
], de);
var vs = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, Qa = (e) => {
  throw TypeError(e);
}, It = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? fs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && vs(t, i, a), a;
}, Ja = (e, t, i) => t.has(e) || Qa("Cannot " + i), Za = (e, t, i) => (Ja(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ft = (e, t, i) => t.has(e) ? Qa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ti = (e, t, i) => (Ja(e, t, "access private method"), i), qi, zi, Qe, en, tn, an;
let Ie = class extends Q {
  constructor() {
    super(...arguments), Ft(this, Qe), Ft(this, qi, new wo(this)), Ft(this, zi, new qe(this)), this._node = null, this._popoverOpen = !1, this._allowedMediaTypes = [];
  }
  set node(e) {
    this._node = e, ti(this, Qe, tn).call(this);
  }
  get node() {
    return this._node;
  }
  render() {
    return r`
			<uui-button
				popovertarget="collection-action-menu-popover"
				label=${this.localize.term("actions_create")}
				color="default"
				look="outline">
				${this.localize.term("actions_create")}
				<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="collection-action-menu-popover"
				placement="bottom-start"
				@toggle=${ti(this, Qe, an)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${this._allowedMediaTypes.length ? _e(
      this._allowedMediaTypes,
      (e) => e.unique,
      (e) => r`<uui-menu-item label=${e.name}>
											<umb-icon slot="icon" name=${e.icon ?? "icon-circle-dotted"}></umb-icon>
										</uui-menu-item>`
    ) : r`<div id="not-allowed">${this.localize.term("mediaPicker_notAllowed")}</div>`}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
qi = /* @__PURE__ */ new WeakMap();
zi = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakSet();
en = async function() {
  if (!this._node) return null;
  const { data: e } = await Za(this, zi).requestByUnique(this.node);
  return e?.mediaType.unique ?? null;
};
tn = async function() {
  const e = await ti(this, Qe, en).call(this), { data: t } = await Za(this, qi).requestAllowedChildrenOf(e, this._node);
  this._allowedMediaTypes = t?.items ?? [];
};
an = function(e) {
  this._popoverOpen = e.newState === "open";
};
Ie.styles = [
  z`
			#not-allowed {
				padding: var(--uui-size-space-3);
			}
		`
];
It([
  l()
], Ie.prototype, "node", 1);
It([
  p()
], Ie.prototype, "_popoverOpen", 2);
It([
  p()
], Ie.prototype, "_allowedMediaTypes", 2);
Ie = It([
  U("umb-media-picker-create-item")
], Ie);
class gs {
  #e;
  /**
   * Creates an instance of UmbMediaSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaSearchServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Get a list of versions for a data
   * @param {UmbMediaSearchRequestArgs}args - The arguments for the search
   * @returns {*}
   * @memberof UmbMediaSearchServerDataSource
   */
  async search(t) {
    const { data: i, error: n } = await $e(
      this.#e,
      H.getItemMediaSearch({
        query: {
          allowedMediaTypes: t.allowedContentTypes?.map((a) => a.unique),
          culture: t.culture || void 0,
          parentId: t.searchFrom?.unique || void 0,
          query: t.query,
          trashed: t.includeTrashed
        }
      })
    );
    return i ? { data: { items: i.items.map((o) => ({
      entityType: K,
      hasChildren: o.hasChildren,
      href: "/section/media/workspace/media/edit/" + o.id,
      isTrashed: o.isTrashed,
      unique: o.id,
      mediaType: {
        collection: o.mediaType.collection ? { unique: o.mediaType.collection.id } : null,
        icon: o.mediaType.icon,
        unique: o.mediaType.id
      },
      name: o.variants[0]?.name,
      // TODO: get correct variant name
      parent: o.parent ? { unique: o.parent.id } : null,
      variants: o.variants.map((s) => ({
        culture: s.culture || null,
        name: s.name
      }))
    })), total: i.total } } : { error: n };
  }
}
class _s extends di {
  #e;
  constructor(t) {
    super(t), this.#e = new gs(this);
  }
  search(t) {
    return this.#e.search(t);
  }
}
class ii extends di {
  #e = new _s(this);
  async search(t) {
    return this.#e.search(t);
  }
  destroy() {
    this.#e.destroy();
  }
}
const Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaSearchProvider: ii,
  api: ii
}, Symbol.toStringTag, { value: "Module" }));
var xs = Object.defineProperty, ys = Object.getOwnPropertyDescriptor, nn = (e) => {
  throw TypeError(e);
}, A = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ys(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && xs(t, i, a), a;
}, Ui = (e, t, i) => t.has(e) || nn("Cannot " + i), G = (e, t, i) => (Ui(e, t, "read from private field"), i ? i.call(e) : t.get(e)), re = (e, t, i) => t.has(e) ? nn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Qi = (e, t, i, n) => (Ui(e, t, "write to private field"), t.set(e, i), i), u = (e, t, i) => (Ui(e, t, "access private method"), i), Ii, ai, Si, Et, Se, Tt, d, Ae, on, sn, Oi, rn, Ai, ln, Ri, pn, cn, dn, un, mn, hn, vn, fn, gn, Di, _n;
const xn = { name: "Media", unique: null, entityType: ot };
let k = class extends pi {
  constructor() {
    super(), re(this, d), re(this, Ii, new Mt(this)), re(this, ai, new Jt(this)), re(this, Si, new ii(this)), re(this, Et), this._selectableFilter = () => !0, this._currentChildren = [], this._currentPage = 1, this._currentTotalPages = 0, this._searchResult = [], this._searchQuery = "", this._currentMediaEntity = xn, this._isSelectionMode = !1, this._searching = !1, re(this, Se, /* @__PURE__ */ new Map()), re(this, Tt), re(this, Ri, po(() => {
      u(this, d, ln).call(this);
    }, 500)), this.consumeContext(qo, (e) => {
      this.observe(e?.dataType, (t) => {
        Qi(this, Et, t);
      });
    }), this.consumeContext(sa, (e) => {
      this.observe(e?.culture, (t) => {
        Qi(this, Tt, t);
      });
    });
  }
  async connectedCallback() {
    super.connectedCallback(), this.data?.pickableFilter && (this._selectableFilter = this.data?.pickableFilter);
  }
  async firstUpdated(e) {
    super.firstUpdated(e);
    const t = this.data?.startNode;
    if (t) {
      const { data: i } = await G(this, ai).requestItems([t.unique]);
      this._startNode = i?.[0], this._startNode && (this._currentMediaEntity = {
        name: this._startNode.name,
        unique: this._startNode.unique,
        entityType: this._startNode.entityType
      }, this._searchFrom = { unique: this._startNode.unique, entityType: this._startNode.entityType });
    }
    u(this, d, Ae).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_chooseMedia")}>
				${u(this, d, hn).call(this)} ${u(this, d, _n).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_choose")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
Ii = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
Ae = async function(e) {
  const t = this._currentMediaEntity.entityType + this._currentMediaEntity.unique;
  let i = G(this, Se).get(t);
  i || (i = new co(), i.setPageSize(100), G(this, Se).set(t, i));
  const n = i.getSkip(), a = i.getPageSize(), { data: o } = await G(this, Ii).requestTreeItemsOf({
    parent: {
      unique: this._currentMediaEntity.unique,
      entityType: this._currentMediaEntity.entityType
    },
    dataType: G(this, Et),
    skip: n,
    take: a
  });
  if (this._currentChildren = o?.items ?? [], i.setTotalItems(o?.total ?? 0), this._currentPage = i.getCurrentPageNumber(), this._currentTotalPages = i.getTotalPages(), e?.length) {
    const s = this._currentChildren.find((c) => c.unique == e[0].unique);
    s && u(this, d, Oi).call(this, s);
  }
};
on = function(e) {
  const t = e.target;
  u(this, d, Ae).call(this, t.value);
};
sn = function(e) {
  u(this, d, Ai).call(this), this._currentMediaEntity = {
    name: e.name,
    unique: e.unique,
    entityType: ot
  }, this._searchFrom = this._currentMediaEntity.unique ? { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : void 0, u(this, d, Ae).call(this);
};
Oi = function(e) {
  const t = this.data?.multiple ? [...this.value.selection, e.unique] : [e.unique];
  this._isSelectionMode = t.length > 0, this.modalContext?.setValue({ selection: t });
};
rn = function(e) {
  const t = this.value.selection.filter((i) => i !== e.unique);
  this._isSelectionMode = t.length > 0, this.modalContext?.setValue({ selection: t });
};
Ai = function() {
  this._searchQuery = "", this._searchResult = [];
};
ln = async function() {
  if (!this._searchQuery) {
    u(this, d, Ai).call(this), this._searching = !1;
    return;
  }
  const e = this._searchQuery, { data: t } = await G(this, Si).search({
    query: e,
    searchFrom: this._searchFrom,
    culture: G(this, Tt),
    ...this.data?.search?.queryParams
  });
  if (!t) {
    this._searchResult = [], this._searching = !1;
    return;
  }
  this._searchResult = t.items, this._searching = !1;
};
Ri = /* @__PURE__ */ new WeakMap();
pn = function(e) {
  this._searchQuery = e.target.value.toLocaleLowerCase(), this._searching = !0, G(this, Ri).call(this);
};
cn = function(e) {
  const t = e.target;
  t.currentMedia ? this._currentMediaEntity = t.currentMedia : this._startNode ? this._currentMediaEntity = {
    name: this._startNode.name,
    unique: this._startNode.unique,
    entityType: this._startNode.entityType
  } : this._currentMediaEntity = xn, this._currentMediaEntity.unique ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0, u(this, d, Ae).call(this);
};
dn = function(e) {
  e.stopPropagation();
  const t = this._currentMediaEntity.entityType + this._currentMediaEntity.unique, i = G(this, Se).get(t);
  if (!i)
    throw new Error("Pagination manager not found");
  i.setCurrentPageNumber(e.target.current), G(this, Se).set(t, i), u(this, d, Ae).call(this);
};
un = function(e) {
  return ko(e.mediaType.unique) || e.hasChildren;
};
mn = function(e) {
  e.target.checked ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0;
};
hn = function() {
  return r`${u(this, d, gn).call(this)}
			<umb-dropzone-media
				id="dropzone"
				multiple
				@change=${u(this, d, on)}
				.parentUnique=${this._currentMediaEntity.unique}></umb-dropzone-media>
			${this._searchQuery ? u(this, d, vn).call(this) : u(this, d, fn).call(this)} `;
};
vn = function() {
  return r`
			${!this._searchResult.length && !this._searching ? r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>` : r`<div id="media-grid">
						${_e(
    this._searchResult,
    (e) => e.unique,
    (e) => u(this, d, Di).call(this, e)
  )}
					</div>`}
		`;
};
fn = function() {
  return r`
			${this._currentChildren.length ? r`<div id="media-grid">
							${_e(
    this._currentChildren,
    (e) => e.unique,
    (e) => u(this, d, Di).call(this, e)
  )}
						</div>
						${this._currentTotalPages > 1 ? r`<uui-pagination
									.current=${this._currentPage}
									.total=${this._currentTotalPages}
									firstlabel=${this.localize.term("general_first")}
                                    previouslabel=${this.localize.term("general_previous")}
                                    nextlabel=${this.localize.term("general_next")}
                                    lastlabel=${this.localize.term("general_last")}
									@change=${u(this, d, dn)}></uui-pagination>` : w}` : r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>`}
		`;
};
gn = function() {
  return r`
			<div id="toolbar">
				<div id="search">
					<uui-input
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}
						@input=${u(this, d, pn)}
						value=${this._searchQuery}>
						<div slot="prepend">
							${this._searching ? r`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : r`<uui-icon name="search"></uui-icon>`}
						</div>
					</uui-input>

					${this._currentMediaEntity.unique && this._currentMediaEntity.unique !== this._startNode?.unique ? r`<uui-checkbox
								?checked=${this._searchFrom?.unique === this._currentMediaEntity.unique}
								@change=${u(this, d, mn)}
								label="Search only in ${this._currentMediaEntity.name}"></uui-checkbox>` : w}
				</div>
				<uui-button
					@click=${() => this._dropzone.browse()}
					label=${this.localize.term("general_upload")}
					look="outline"
					color="default"></uui-button>
			</div>
		`;
};
Di = function(e) {
  const t = u(this, d, un).call(this, e), i = this._selectableFilter(e);
  return r`
			<uui-card-media
				class=${Ue(!(i || t) ? "not-allowed" : void 0)}
				.name=${e.name}
				data-mark="${e.entityType}:${e.unique}"
				@open=${() => u(this, d, sn).call(this, e)}
				@selected=${() => u(this, d, Oi).call(this, e)}
				@deselected=${() => u(this, d, rn).call(this, e)}
				?selected=${this.value?.selection?.find((a) => a === e.unique)}
				?selectable=${i}
				?select-only=${this._isSelectionMode || t === !1}>
				<umb-imaging-thumbnail
					unique=${e.unique}
					alt=${e.name}
					icon=${e.mediaType.icon}></umb-imaging-thumbnail>
			</uui-card-media>
		`;
};
_n = function() {
  if (this._searchQuery && this._currentMediaEntity.unique && !this._searchFrom)
    return w;
  const e = this._startNode ? {
    entityType: this._startNode.entityType,
    unique: this._startNode.unique,
    name: this._startNode.name
  } : void 0;
  return r`<umb-media-picker-folder-path
			slot="footer-info"
			.currentMedia=${this._currentMediaEntity}
			.startNode=${e}
			@change=${u(this, d, cn)}></umb-media-picker-folder-path>`;
};
k.styles = [
  z`
			#toolbar {
				display: flex;
				gap: var(--uui-size-6);
				align-items: flex-start;
				margin-bottom: var(--uui-size-3);
			}
			#search {
				flex: 1;
			}

			#search uui-input {
				width: 100%;
				margin-bottom: var(--uui-size-3);
			}
			#search uui-input [slot='prepend'] {
				display: flex;
				align-items: center;
			}

			#searching-indicator {
				margin-left: 7px;
				margin-top: 4px;
			}

			#media-grid {
				display: grid;
				gap: var(--uui-size-space-5);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
				padding-bottom: 5px; /** The modal is a bit jumpy due to the img card focus/hover border. This fixes the issue. */
			}

			umb-icon {
				font-size: var(--uui-size-8);
			}

			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}

			#actions {
				max-width: 100%;
			}

			.not-allowed {
				cursor: not-allowed;
				opacity: 0.5;
			}

			uui-pagination {
				display: block;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
A([
  p()
], k.prototype, "_selectableFilter", 2);
A([
  p()
], k.prototype, "_currentChildren", 2);
A([
  p()
], k.prototype, "_currentPage", 2);
A([
  p()
], k.prototype, "_currentTotalPages", 2);
A([
  p()
], k.prototype, "_searchResult", 2);
A([
  p()
], k.prototype, "_searchFrom", 2);
A([
  p()
], k.prototype, "_searchQuery", 2);
A([
  p()
], k.prototype, "_currentMediaEntity", 2);
A([
  p()
], k.prototype, "_isSelectionMode", 2);
A([
  p()
], k.prototype, "_startNode", 2);
A([
  p()
], k.prototype, "_searching", 2);
A([
  ae("#dropzone")
], k.prototype, "_dropzone", 2);
k = A([
  U("umb-media-picker-modal")
], k);
const bs = k, Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaPickerModalElement() {
    return k;
  },
  default: bs
}, Symbol.toStringTag, { value: "Module" })), yn = "media";
ho.generateAbsolute({
  sectionName: yn
});
const ws = vo.generateAbsolute({
  sectionName: yn,
  entityType: K
}), Pr = new na("create/parent/:parentEntityType/:parentUnique/:mediaTypeUnique", ws), qr = new na("edit/:unique"), zr = new xe(
  "UmbMediaRecycleBinTreeStore"
), bn = "Umb.Repository.MediaItem", Ur = "Umb.Store.MediaItem", ks = "Umb.SearchProvider.Media", Ir = new at(
  _o,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.Media"
    }
  }
), Sr = new xe(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === K
), Ms = (e) => e.getEntityType() === K, Or = new xe(
  "UmbVariantContext",
  void 0,
  Ms
);
var $s = Object.getOwnPropertyDescriptor, wn = (e) => {
  throw TypeError(e);
}, Es = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? $s(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = s(a) || a);
  return a;
}, Fi = (e, t, i) => t.has(e) || wn("Cannot " + i), Ne = (e, t, i) => (Fi(e, t, "read from private field"), t.get(e)), rt = (e, t, i) => t.has(e) ? wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ts = (e, t, i, n) => (Fi(e, t, "write to private field"), t.set(e, i), i), Cs = (e, t, i) => (Fi(e, t, "access private method"), i), ze, Wi, Ni, ni, kn;
let it = class extends pi {
  constructor() {
    super(...arguments), rt(this, ni), rt(this, ze), rt(this, Wi, new qe(this)), rt(this, Ni, new oa(this));
  }
  connectedCallback() {
    super.connectedCallback(), Ts(this, ze, this.data?.mediaUnique), Cs(this, ni, kn).call(this);
  }
  render() {
    return r`
			<umb-body-layout .headline=${this.localize.term("defaultdialogs_editSelectedMedia")}>
				<div id="wrapper">
					<uui-label for="alt-text">${this.localize.term("content_altTextOptional")}</uui-label>
					<uui-input
						id="alt-text"
						label="alt text"
						.value=${this.value?.altText ?? ""}
						@input=${(e) => this.value = { ...this.value, altText: e.target.value }}></uui-input>

					<uui-label for="caption">${this.localize.term("content_captionTextOptional")}</uui-label>
					<uui-input
						id="caption"
						label="caption"
						.value=${this.value?.caption ?? ""}
						@input=${(e) => this.value = { ...this.value, caption: e.target.value }}></uui-input>

					<figure id="mainobject">
						<img src=${this.value?.url ?? ""} alt=${this.value?.altText ?? ""} />
						<figcaption>${this.value?.caption ?? ""}</figcaption>
					</figure>
				</div>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
ze = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakSet();
kn = async function() {
  if (!Ne(this, ze)) return;
  const { data: e } = await Ne(this, Wi).requestByUnique(Ne(this, ze));
  if (!e) return;
  const { data: t } = await Ne(this, Ni).requestItems([Ne(this, ze)]);
  this.value = {
    ...this.value,
    altText: this.value?.altText ?? e.variants[0].name,
    url: t?.[0].url ?? ""
  };
};
it.styles = [
  z`
			uui-input {
				margin-bottom: var(--uui-size-layout-1);
			}

			#wrapper {
				display: flex;
				flex-direction: column;
			}

			#mainobject {
				display: flex;
				flex-direction: column;
				max-width: 100%;

				img {
					max-width: 100%;
					height: auto;
				}
			}
		`
];
it = Es([
  U("umb-media-caption-alt-text-modal")
], it);
const Ps = it, Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaCaptionAltTextModalElement() {
    return it;
  },
  default: Ps
}, Symbol.toStringTag, { value: "Module" }));
class qs extends xo {
  constructor(t) {
    super(t, bn, Mi);
  }
  async openPicker(t, i) {
    const n = {
      ...t
    };
    n.pickableFilter = (s) => this.#e(s, i?.allowedContentTypes), t?.search || (n.search = {
      providerAlias: ks,
      ...t?.search
    });
    const o = await (await this.getContext(sa))?.getDisplayCulture();
    n.search.queryParams = {
      allowedContentTypes: i?.allowedContentTypes,
      includeTrashed: i?.includeTrashed,
      culture: o,
      ...t?.search?.queryParams
    }, await super.openPicker(n);
  }
  #e = (t, i) => i && i.length > 0 ? i.map((n) => n.unique).includes(t.mediaType.unique) : !0;
}
var zs = Object.defineProperty, Us = Object.getOwnPropertyDescriptor, Mn = (e) => {
  throw TypeError(e);
}, N = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Us(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && zs(t, i, a), a;
}, Bi = (e, t, i) => t.has(e) || Mn("Cannot " + i), M = (e, t, i) => (Bi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), lt = (e, t, i) => t.has(e) ? Mn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Is = (e, t, i, n) => (Bi(e, t, "write to private field"), t.set(e, i), i), ce = (e, t, i) => (Bi(e, t, "access private method"), i), Le, X, $n, Ve, R, En, Tn, Cn, Pn, qn, zn, Un;
const Ss = "umb-input-media";
let q = class extends li(Q) {
  constructor() {
    super(), lt(this, X), lt(this, Le, new ra(this, {
      getUniqueOfElement: (e) => e.getAttribute("detail"),
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: la,
      onChange: ({ model: e }) => {
        this.selection = e, ce(this, X, $n).call(this, e), this.dispatchEvent(new C());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.includeTrashed = !1, lt(this, Ve, !1), this._editMediaPath = "", this._cards = [], lt(this, R, new qs(this)), new ci(this, aa).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((e) => {
      this._editMediaPath = e({});
    }), this.observe(M(this, R).selection, (e) => this.value = e.join(",")), this.observe(M(this, R).selectedItems, async (e) => {
      const t = e.filter((i) => !this._cards.find((n) => n.unique === i.unique));
      e?.length && !t.length || (this._cards = e ?? []);
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    );
  }
  set min(e) {
    M(this, R).min = e;
  }
  get min() {
    return M(this, R).min;
  }
  set max(e) {
    M(this, R).max = e;
  }
  get max() {
    return M(this, R).max;
  }
  set selection(e) {
    M(this, R).setSelection(e), M(this, Le).setModel(e);
  }
  get selection() {
    return M(this, R).getSelection();
  }
  set value(e) {
    this.selection = uo(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return M(this, Ve);
  }
  set readonly(e) {
    Is(this, Ve, e), M(this, Ve) ? M(this, Le).disable() : M(this, Le).enable();
  }
  render() {
    return r`<div class="container">${ce(this, X, Cn).call(this)} ${ce(this, X, Pn).call(this)}</div>`;
  }
};
Le = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakSet();
$n = function(e) {
  const t = {};
  e.forEach((n, a) => {
    t[n] = a;
  });
  const i = [...this._cards];
  this._cards = i.sort((n, a) => t[n.unique] - t[a.unique]);
};
Ve = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
En = function() {
  M(this, R).openPicker(
    {
      multiple: this.max > 1,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: Mo
      })),
      includeTrashed: this.includeTrashed
    }
  );
};
Tn = async function(e) {
  await M(this, R).requestRemoveItem(e.unique), this._cards = this._cards.filter((t) => t.unique !== e.unique);
};
Cn = function() {
  return this._cards?.length ? r`
			${_e(
    this._cards,
    (e) => e.unique,
    (e) => ce(this, X, qn).call(this, e)
  )}
		` : w;
};
Pn = function() {
  return this._cards && this.max && this._cards.length >= this.max ? w : this.readonly && this._cards.length > 0 ? w : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${ce(this, X, En)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
qn = function(e) {
  const t = this.readonly ? void 0 : `${this._editMediaPath}edit/${e.unique}`;
  return r`
			<uui-card-media
				name=${Ue(e.name === null ? void 0 : e.name)}
				data-mark="${e.entityType}:${e.unique}"
				href="${Ue(t)}"
				?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${e.unique}
					alt=${e.name}
					icon=${e.mediaType.icon}></umb-imaging-thumbnail>
				${ce(this, X, Un).call(this, e)}
				<uui-action-bar slot="actions"> ${ce(this, X, zn).call(this, e)}</uui-action-bar>
			</uui-card-media>
		`;
};
zn = function(e) {
  return this.readonly ? w : r`
			<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => ce(this, X, Tn).call(this, e)}>
				<uui-icon name="icon-trash"></uui-icon>
			</uui-button>
		`;
};
Un = function(e) {
  return e.isTrashed ? r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		` : w;
};
q.styles = [
  z`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media umb-icon {
				font-size: var(--uui-size-8);
			}

			uui-card-media[drag-placeholder] {
				opacity: 0.2;
			}
			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
N([
  l({ type: Number })
], q.prototype, "min", 1);
N([
  l({ type: String, attribute: "min-message" })
], q.prototype, "minMessage", 2);
N([
  l({ type: Number })
], q.prototype, "max", 1);
N([
  l({ type: String, attribute: "max-message" })
], q.prototype, "maxMessage", 2);
N([
  l({ type: Array })
], q.prototype, "allowedContentTypeIds", 2);
N([
  l({ type: Boolean, attribute: "include-trashed" })
], q.prototype, "includeTrashed", 2);
N([
  l({ type: Object, attribute: !1 })
], q.prototype, "startNode", 2);
N([
  l({ type: String })
], q.prototype, "value", 1);
N([
  l({ type: Boolean, reflect: !0 })
], q.prototype, "readonly", 1);
N([
  p()
], q.prototype, "_editMediaPath", 2);
N([
  p()
], q.prototype, "_cards", 2);
q = N([
  U(Ss)
], q);
var Os = Object.defineProperty, As = Object.getOwnPropertyDescriptor, In = (e) => {
  throw TypeError(e);
}, y = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? As(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Os(t, i, a), a;
}, ji = (e, t, i) => t.has(e) || In("Cannot " + i), j = (e, t, i) => (ji(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Me = (e, t, i) => t.has(e) ? In("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ji = (e, t, i, n) => (ji(e, t, "write to private field"), t.set(e, i), i), I = (e, t, i) => (ji(e, t, "access private method"), i), He, gt, Ye, Je, $, oi, Ct, Li, Sn, On, An, Rn, Dn, Fn, Wn, Nn, Bn;
let g = class extends li(Q, void 0) {
  constructor() {
    super(), Me(this, $), Me(this, He, new ra(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e.key,
      identifier: "Umb.SorterIdentifier.InputRichMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: la,
      onChange: ({ model: e }) => {
        this.value = e, this.dispatchEvent(new C());
      }
    })), this.min = 0, this.minMessage = "This field need more items", this.max = 1 / 0, this.maxMessage = "This field exceeds the allowed amount of items", this.multiple = !1, Me(this, gt, !1), Me(this, Ye, !1), this._cards = [], Me(this, Je, new Co(this, bn)), Me(this, Ct, (e) => this.allowedContentTypeIds && this.allowedContentTypeIds.length > 0 ? this.allowedContentTypeIds.includes(e.mediaType.unique) : !0), this.observe(j(this, Je).items, () => {
      I(this, $, oi).call(this);
    }), new ci(this, ns).addAdditionalPath(":key").onSetup((e) => {
      const t = e.key;
      if (!t) return !1;
      const i = this.value?.find((n) => n.key === t);
      return i ? {
        data: {
          cropOptions: this.preselectedCrops,
          hideFocalPoint: !this.focalPointEnabled,
          key: t,
          unique: i.mediaKey,
          pickableFilter: j(this, Ct)
        },
        value: {
          crops: i.crops ?? [],
          focalPoint: i.focalPoint ?? { left: 0.5, top: 0.5 },
          src: "",
          key: t,
          unique: i.mediaKey
        }
      } : !1;
    }).onSubmit((e) => {
      this.value = this.value?.map((t) => {
        if (t.key !== e.key) return t;
        const i = this.focalPointEnabled ? e.focalPoint : null, n = e.crops, a = e.unique, o = a === t.mediaKey ? t.key : Pt.new();
        return { ...t, crops: n, mediaKey: a, focalPoint: i, key: o };
      }), this.dispatchEvent(new C());
    }).observeRouteBuilder((e) => {
      this._routeBuilder = e;
    }), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ta,
      () => !this.readonly && !!this.required && (!this.value || this.value.length === 0)
    ), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !this.readonly && // Only if min is set:
      !!this.min && // if the value is empty and not required, we should not validate the min:
      !(this.value?.length === 0 && this.required == !1) && // Validate the min:
      (this.value?.length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !this.readonly && !!this.value && !!this.max && this.value?.length > this.max
    );
  }
  set value(e) {
    super.value = e, j(this, He).setModel(e), j(this, Je).setUniques(e?.map((t) => t.mediaKey)), I(this, $, oi).call(this);
  }
  get value() {
    return super.value;
  }
  set focalPointEnabled(e) {
    Ji(this, gt, e);
  }
  get focalPointEnabled() {
    return j(this, gt);
  }
  /** @deprecated will be removed in v17 */
  set alias(e) {
  }
  get alias() {
  }
  /** @deprecated will be removed in v17 */
  set variantId(e) {
  }
  get variantId() {
  }
  get readonly() {
    return j(this, Ye);
  }
  set readonly(e) {
    Ji(this, Ye, e), j(this, Ye) ? j(this, He).disable() : j(this, He).enable();
  }
  getFormElement() {
  }
  render() {
    return r`
			${I(this, $, Rn).call(this)}
			<div class="container">${I(this, $, Dn).call(this)} ${I(this, $, Fn).call(this)}</div>
		`;
  }
};
He = /* @__PURE__ */ new WeakMap();
gt = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakSet();
oi = async function() {
  const e = j(this, Je).getItems();
  if (!e.length) {
    this._cards = [];
    return;
  }
  const t = e.filter((n) => !this._cards.find((a) => a.unique === n.unique)), i = this._cards.filter((n) => !e.find((a) => n.unique === a.unique));
  t.length === 0 && i.length === 0 || (this._cards = this.value?.map((n) => {
    const a = e.find((o) => o.unique === n.mediaKey);
    return {
      unique: n.key,
      media: n.mediaKey,
      name: a?.name ?? "",
      icon: a?.mediaType?.icon,
      isTrashed: a?.isTrashed ?? !1
    };
  }) ?? []);
};
Ct = /* @__PURE__ */ new WeakMap();
Li = function(e) {
  if (!e.length) return;
  const t = e.map((i) => ({
    key: Pt.new(),
    mediaKey: i,
    mediaTypeAlias: "",
    crops: [],
    focalPoint: null
  }));
  this.value = [...this.value ?? [], ...t], this.dispatchEvent(new C());
};
Sn = async function() {
  const i = await (await this.getContext(ia))?.open(this, Mi, {
    data: {
      multiple: this.multiple,
      startNode: this.startNode,
      pickableFilter: j(this, Ct)
    },
    value: { selection: [] }
  })?.onSubmit().catch(() => null);
  if (!i) return;
  const n = i.selection.filter((a) => a !== null);
  I(this, $, Li).call(this, n);
};
On = async function(e) {
  await mo(this, {
    color: "danger",
    headline: `${this.localize.term("actions_remove")} ${e.name}?`,
    content: `${this.localize.term("defaultdialogs_confirmremove")} ${e.name}?`,
    confirmLabel: this.localize.term("actions_remove")
  }), this.value = this.value?.filter((t) => t.key !== e.unique), this.dispatchEvent(new C());
};
An = async function(e) {
  const i = e.detail.map((n) => n.unique);
  I(this, $, Li).call(this, i);
};
Rn = function() {
  if (this.readonly) return w;
  if (!(this._cards && this._cards.length >= this.max))
    return r`<umb-dropzone-media
			?multiple=${this.max > 1}
			@complete=${I(this, $, An)}></umb-dropzone-media>`;
};
Dn = function() {
  if (this._cards.length)
    return r`
			${_e(
      this._cards,
      (e) => e.unique,
      (e) => I(this, $, Wn).call(this, e)
    )}
		`;
};
Fn = function() {
  if (!(this._cards && this._cards.length && !this.multiple))
    return this.readonly && this._cards.length > 0 ? w : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@blur=${() => {
      this.pristine = !1, this.checkValidity();
    }}
					@click=${I(this, $, Sn)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
Wn = function(e) {
  if (!e.unique) return w;
  const t = this.readonly ? void 0 : this._routeBuilder?.({ key: e.unique });
  return r`
			<uui-card-media id=${e.unique} name=${e.name} .href=${t} ?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${e.media}
					alt=${e.name}
					icon=${e.icon ?? "icon-picture"}></umb-imaging-thumbnail>
				${I(this, $, Bn).call(this, e)} ${I(this, $, Nn).call(this, e)}
			</uui-card-media>
		`;
};
Nn = function(e) {
  return this.readonly ? w : r`
			<uui-action-bar slot="actions">
				<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => I(this, $, On).call(this, e)}>
					<uui-icon name="icon-trash"></uui-icon>
				</uui-button>
			</uui-action-bar>
		`;
};
Bn = function(e) {
  if (e.isTrashed)
    return r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		`;
};
g.styles = [
  z`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				gap: var(--uui-size-space-5);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media umb-icon {
				font-size: var(--uui-size-8);
			}

			uui-card-media[drag-placeholder] {
				opacity: 0.2;
			}
			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
y([
  l({ type: Boolean })
], g.prototype, "required", 2);
y([
  l({ type: String })
], g.prototype, "requiredMessage", 2);
y([
  l({ type: Number })
], g.prototype, "min", 2);
y([
  l({ type: String, attribute: "min-message" })
], g.prototype, "minMessage", 2);
y([
  l({ type: Number })
], g.prototype, "max", 2);
y([
  l({ type: String, attribute: "min-message" })
], g.prototype, "maxMessage", 2);
y([
  l({ type: Array })
], g.prototype, "value", 1);
y([
  l({ type: Array })
], g.prototype, "allowedContentTypeIds", 2);
y([
  l({ type: Object, attribute: !1 })
], g.prototype, "startNode", 2);
y([
  l({ type: Boolean })
], g.prototype, "multiple", 2);
y([
  l({ type: Array })
], g.prototype, "preselectedCrops", 2);
y([
  l({ type: Boolean })
], g.prototype, "focalPointEnabled", 1);
y([
  l()
], g.prototype, "alias", 1);
y([
  l()
], g.prototype, "variantId", 1);
y([
  l({ type: Boolean, reflect: !0 })
], g.prototype, "readonly", 1);
y([
  p()
], g.prototype, "_cards", 2);
y([
  p()
], g.prototype, "_routeBuilder", 2);
g = y([
  U("umb-input-rich-media")
], g);
function Rs(e) {
  return {
    ".123": "application/vnd.lotus-1-2-3",
    ".3dml": "text/vnd.in3d.3dml",
    ".3g2": "video/3gpp2",
    ".3gp": "video/3gpp",
    ".a": "application/octet-stream",
    ".aab": "application/x-authorware-bin",
    ".aac": "audio/x-aac",
    ".aam": "application/x-authorware-map",
    ".aas": "application/x-authorware-seg",
    ".abw": "application/x-abiword",
    ".acc": "application/vnd.americandynamics.acc",
    ".ace": "application/x-ace-compressed",
    ".acu": "application/vnd.acucobol",
    ".acutc": "application/vnd.acucorp",
    ".adp": "audio/adpcm",
    ".aep": "application/vnd.audiograph",
    ".afm": "application/x-font-type1",
    ".afp": "application/vnd.ibm.modcap",
    ".ai": "application/postscript",
    ".aif": "audio/x-aiff",
    ".aifc": "audio/x-aiff",
    ".aiff": "audio/x-aiff",
    ".air": "application/vnd.adobe.air-application-installer-package+zip",
    ".ami": "application/vnd.amiga.ami",
    ".apk": "application/vnd.android.package-archive",
    ".application": "application/x-ms-application",
    ".apr": "application/vnd.lotus-approach",
    ".asc": "application/pgp-signature",
    ".asf": "video/x-ms-asf",
    ".asm": "text/x-asm",
    ".aso": "application/vnd.accpac.simply.aso",
    ".asx": "video/x-ms-asf",
    ".atc": "application/vnd.acucorp",
    ".atom": "application/atom+xml",
    ".atomcat": "application/atomcat+xml",
    ".atomsvc": "application/atomsvc+xml",
    ".atx": "application/vnd.antix.game-component",
    ".au": "audio/basic",
    ".avi": "video/x-msvideo",
    ".aw": "application/applixware",
    ".azf": "application/vnd.airzip.filesecure.azf",
    ".azs": "application/vnd.airzip.filesecure.azs",
    ".azw": "application/vnd.amazon.ebook",
    ".bat": "application/x-msdownload",
    ".bcpio": "application/x-bcpio",
    ".bdf": "application/x-font-bdf",
    ".bdm": "application/vnd.syncml.dm+wbxml",
    ".bh2": "application/vnd.fujitsu.oasysprs",
    ".bin": "application/octet-stream",
    ".bmi": "application/vnd.bmi",
    ".bmp": "image/bmp",
    ".book": "application/vnd.framemaker",
    ".box": "application/vnd.previewsystems.box",
    ".boz": "application/x-bzip2",
    ".bpk": "application/octet-stream",
    ".btif": "image/prs.btif",
    ".bz": "application/x-bzip",
    ".bz2": "application/x-bzip2",
    ".c": "text/x-c",
    ".c4d": "application/vnd.clonk.c4group",
    ".c4f": "application/vnd.clonk.c4group",
    ".c4g": "application/vnd.clonk.c4group",
    ".c4p": "application/vnd.clonk.c4group",
    ".c4u": "application/vnd.clonk.c4group",
    ".cab": "application/vnd.ms-cab-compressed",
    ".car": "application/vnd.curl.car",
    ".cat": "application/vnd.ms-pki.seccat",
    ".cc": "text/x-c",
    ".cct": "application/x-director",
    ".ccxml": "application/ccxml+xml",
    ".cdbcmsg": "application/vnd.contact.cmsg",
    ".cdf": "application/x-netcdf",
    ".cdkey": "application/vnd.mediastation.cdkey",
    ".cdx": "chemical/x-cdx",
    ".cdxml": "application/vnd.chemdraw+xml",
    ".cdy": "application/vnd.cinderella",
    ".cer": "application/pkix-cert",
    ".cgm": "image/cgm",
    ".chat": "application/x-chat",
    ".chm": "application/vnd.ms-htmlhelp",
    ".chrt": "application/vnd.kde.kchart",
    ".cif": "chemical/x-cif",
    ".cii": "application/vnd.anser-web-certificate-issue-initiation",
    ".cil": "application/vnd.ms-artgalry",
    ".cla": "application/vnd.claymore",
    ".class": "application/java-vm",
    ".clkk": "application/vnd.crick.clicker.keyboard",
    ".clkp": "application/vnd.crick.clicker.palette",
    ".clkt": "application/vnd.crick.clicker.template",
    ".clkw": "application/vnd.crick.clicker.wordbank",
    ".clkx": "application/vnd.crick.clicker",
    ".clp": "application/x-msclip",
    ".cmc": "application/vnd.cosmocaller",
    ".cmdf": "chemical/x-cmdf",
    ".cml": "chemical/x-cml",
    ".cmp": "application/vnd.yellowriver-custom-menu",
    ".cmx": "image/x-cmx",
    ".cod": "application/vnd.rim.cod",
    ".com": "application/x-msdownload",
    ".conf": "text/plain",
    ".cpio": "application/x-cpio",
    ".cpp": "text/x-c",
    ".cpt": "application/mac-compactpro",
    ".crd": "application/x-mscardfile",
    ".crl": "application/pkix-crl",
    ".crt": "application/x-x509-ca-cert",
    ".csh": "application/x-csh",
    ".csml": "chemical/x-csml",
    ".csp": "application/vnd.commonspace",
    ".css": "text/css",
    ".cst": "application/x-director",
    ".csv": "text/csv",
    ".cu": "application/cu-seeme",
    ".curl": "text/vnd.curl",
    ".cww": "application/prs.cww",
    ".cxt": "application/x-director",
    ".cxx": "text/x-c",
    ".daf": "application/vnd.mobius.daf",
    ".dataless": "application/vnd.fdsn.seed",
    ".davmount": "application/davmount+xml",
    ".dcr": "application/x-director",
    ".dcurl": "text/vnd.curl.dcurl",
    ".dd2": "application/vnd.oma.dd2+xml",
    ".ddd": "application/vnd.fujixerox.ddd",
    ".deb": "application/x-debian-package",
    ".def": "text/plain",
    ".deploy": "application/octet-stream",
    ".der": "application/x-x509-ca-cert",
    ".dfac": "application/vnd.dreamfactory",
    ".dic": "text/x-c",
    ".diff": "text/plain",
    ".dir": "application/x-director",
    ".dis": "application/vnd.mobius.dis",
    ".dist": "application/octet-stream",
    ".distz": "application/octet-stream",
    ".djv": "image/vnd.djvu",
    ".djvu": "image/vnd.djvu",
    ".dll": "application/x-msdownload",
    ".dmg": "application/octet-stream",
    ".dms": "application/octet-stream",
    ".dna": "application/vnd.dna",
    ".doc": "application/msword",
    ".docm": "application/vnd.ms-word.document.macroenabled.12",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".dot": "application/msword",
    ".dotm": "application/vnd.ms-word.template.macroenabled.12",
    ".dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    ".dp": "application/vnd.osgi.dp",
    ".dpg": "application/vnd.dpgraph",
    ".dsc": "text/prs.lines.tag",
    ".dtb": "application/x-dtbook+xml",
    ".dtd": "application/xml-dtd",
    ".dts": "audio/vnd.dts",
    ".dtshd": "audio/vnd.dts.hd",
    ".dump": "application/octet-stream",
    ".dvi": "application/x-dvi",
    ".dwf": "model/vnd.dwf",
    ".dwg": "image/vnd.dwg",
    ".dxf": "image/vnd.dxf",
    ".dxp": "application/vnd.spotfire.dxp",
    ".dxr": "application/x-director",
    ".ecelp4800": "audio/vnd.nuera.ecelp4800",
    ".ecelp7470": "audio/vnd.nuera.ecelp7470",
    ".ecelp9600": "audio/vnd.nuera.ecelp9600",
    ".ecma": "application/ecmascript",
    ".edm": "application/vnd.novadigm.edm",
    ".edx": "application/vnd.novadigm.edx",
    ".efif": "application/vnd.picsel",
    ".ei6": "application/vnd.pg.osasli",
    ".elc": "application/octet-stream",
    ".eml": "message/rfc822",
    ".emma": "application/emma+xml",
    ".eol": "audio/vnd.digital-winds",
    ".eot": "application/vnd.ms-fontobject",
    ".eps": "application/postscript",
    ".epub": "application/epub+zip",
    ".es3": "application/vnd.eszigno3+xml",
    ".esf": "application/vnd.epson.esf",
    ".et3": "application/vnd.eszigno3+xml",
    ".etx": "text/x-setext",
    ".exe": "application/x-msdownload",
    ".ext": "application/vnd.novadigm.ext",
    ".ez": "application/andrew-inset",
    ".ez2": "application/vnd.ezpix-album",
    ".ez3": "application/vnd.ezpix-package",
    ".f": "text/x-fortran",
    ".f4v": "video/x-f4v",
    ".f77": "text/x-fortran",
    ".f90": "text/x-fortran",
    ".fbs": "image/vnd.fastbidsheet",
    ".fdf": "application/vnd.fdf",
    ".fe_launch": "application/vnd.denovo.fcselayout-link",
    ".fg5": "application/vnd.fujitsu.oasysgp",
    ".fgd": "application/x-director",
    ".fh": "image/x-freehand",
    ".fh4": "image/x-freehand",
    ".fh5": "image/x-freehand",
    ".fh7": "image/x-freehand",
    ".fhc": "image/x-freehand",
    ".fig": "application/x-xfig",
    ".fli": "video/x-fli",
    ".flo": "application/vnd.micrografx.flo",
    ".flv": "video/x-flv",
    ".flw": "application/vnd.kde.kivio",
    ".flx": "text/vnd.fmi.flexstor",
    ".fly": "text/vnd.fly",
    ".fm": "application/vnd.framemaker",
    ".fnc": "application/vnd.frogans.fnc",
    ".for": "text/x-fortran",
    ".fpx": "image/vnd.fpx",
    ".frame": "application/vnd.framemaker",
    ".fsc": "application/vnd.fsc.weblaunch",
    ".fst": "image/vnd.fst",
    ".ftc": "application/vnd.fluxtime.clip",
    ".fti": "application/vnd.anser-web-funds-transfer-initiation",
    ".fvt": "video/vnd.fvt",
    ".fzs": "application/vnd.fuzzysheet",
    ".g3": "image/g3fax",
    ".gac": "application/vnd.groove-account",
    ".gdl": "model/vnd.gdl",
    ".geo": "application/vnd.dynageo",
    ".gex": "application/vnd.geometry-explorer",
    ".ggb": "application/vnd.geogebra.file",
    ".ggt": "application/vnd.geogebra.tool",
    ".ghf": "application/vnd.groove-help",
    ".gif": "image/gif",
    ".gim": "application/vnd.groove-identity-message",
    ".gmx": "application/vnd.gmx",
    ".gnumeric": "application/x-gnumeric",
    ".gph": "application/vnd.flographit",
    ".gqf": "application/vnd.grafeq",
    ".gqs": "application/vnd.grafeq",
    ".gram": "application/srgs",
    ".gre": "application/vnd.geometry-explorer",
    ".grv": "application/vnd.groove-injector",
    ".grxml": "application/srgs+xml",
    ".gsf": "application/x-font-ghostscript",
    ".gtar": "application/x-gtar",
    ".gtm": "application/vnd.groove-tool-message",
    ".gtw": "model/vnd.gtw",
    ".gv": "text/vnd.graphviz",
    ".gz": "application/x-gzip",
    ".h": "text/x-c",
    ".h261": "video/h261",
    ".h263": "video/h263",
    ".h264": "video/h264",
    ".hbci": "application/vnd.hbci",
    ".hdf": "application/x-hdf",
    ".hh": "text/x-c",
    ".hlp": "application/winhlp",
    ".hpgl": "application/vnd.hp-hpgl",
    ".hpid": "application/vnd.hp-hpid",
    ".hps": "application/vnd.hp-hps",
    ".hqx": "application/mac-binhex40",
    ".htke": "application/vnd.kenameaapp",
    ".htm": "text/html",
    ".html": "text/html",
    ".hvd": "application/vnd.yamaha.hv-dic",
    ".hvp": "application/vnd.yamaha.hv-voice",
    ".hvs": "application/vnd.yamaha.hv-script",
    ".icc": "application/vnd.iccprofile",
    ".ice": "x-conference/x-cooltalk",
    ".icm": "application/vnd.iccprofile",
    ".ico": "image/x-icon",
    ".ics": "text/calendar",
    ".ief": "image/ief",
    ".ifb": "text/calendar",
    ".ifm": "application/vnd.shana.informed.formdata",
    ".iges": "model/iges",
    ".igl": "application/vnd.igloader",
    ".igs": "model/iges",
    ".igx": "application/vnd.micrografx.igx",
    ".iif": "application/vnd.shana.informed.interchange",
    ".imp": "application/vnd.accpac.simply.imp",
    ".ims": "application/vnd.ms-ims",
    ".in": "text/plain",
    ".ipk": "application/vnd.shana.informed.package",
    ".irm": "application/vnd.ibm.rights-management",
    ".irp": "application/vnd.irepository.package+xml",
    ".iso": "application/octet-stream",
    ".itp": "application/vnd.shana.informed.formtemplate",
    ".ivp": "application/vnd.immervision-ivp",
    ".ivu": "application/vnd.immervision-ivu",
    ".jad": "text/vnd.sun.j2me.app-descriptor",
    ".jam": "application/vnd.jam",
    ".jar": "application/java-archive",
    ".java": "text/x-java-source",
    ".jisp": "application/vnd.jisp",
    ".jlt": "application/vnd.hp-jlyt",
    ".jnlp": "application/x-java-jnlp-file",
    ".joda": "application/vnd.joost.joda-archive",
    ".jpe": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".jpgm": "video/jpm",
    ".jpgv": "video/jpeg",
    ".jpm": "video/jpm",
    ".js": "application/javascript",
    ".json": "application/json",
    ".kar": "audio/midi",
    ".karbon": "application/vnd.kde.karbon",
    ".kfo": "application/vnd.kde.kformula",
    ".kia": "application/vnd.kidspiration",
    ".kil": "application/x-killustrator",
    ".kml": "application/vnd.google-earth.kml+xml",
    ".kmz": "application/vnd.google-earth.kmz",
    ".kne": "application/vnd.kinar",
    ".knp": "application/vnd.kinar",
    ".kon": "application/vnd.kde.kontour",
    ".kpr": "application/vnd.kde.kpresenter",
    ".kpt": "application/vnd.kde.kpresenter",
    ".ksh": "text/plain",
    ".ksp": "application/vnd.kde.kspread",
    ".ktr": "application/vnd.kahootz",
    ".ktz": "application/vnd.kahootz",
    ".kwd": "application/vnd.kde.kword",
    ".kwt": "application/vnd.kde.kword",
    ".latex": "application/x-latex",
    ".lbd": "application/vnd.llamagraphics.life-balance.desktop",
    ".lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
    ".les": "application/vnd.hhe.lesson-player",
    ".lha": "application/octet-stream",
    ".link66": "application/vnd.route66.link66+xml",
    ".list": "text/plain",
    ".list3820": "application/vnd.ibm.modcap",
    ".listafp": "application/vnd.ibm.modcap",
    ".log": "text/plain",
    ".lostxml": "application/lost+xml",
    ".lrf": "application/octet-stream",
    ".lrm": "application/vnd.ms-lrm",
    ".ltf": "application/vnd.frogans.ltf",
    ".lvp": "audio/vnd.lucent.voice",
    ".lwp": "application/vnd.lotus-wordpro",
    ".lzh": "application/octet-stream",
    ".m13": "application/x-msmediaview",
    ".m14": "application/x-msmediaview",
    ".m1v": "video/mpeg",
    ".m2a": "audio/mpeg",
    ".m2v": "video/mpeg",
    ".m3a": "audio/mpeg",
    ".m3u": "audio/x-mpegurl",
    ".m4u": "video/vnd.mpegurl",
    ".m4v": "video/x-m4v",
    ".ma": "application/mathematica",
    ".mag": "application/vnd.ecowin.chart",
    ".maker": "application/vnd.framemaker",
    ".man": "text/troff",
    ".mathml": "application/mathml+xml",
    ".mb": "application/mathematica",
    ".mbk": "application/vnd.mobius.mbk",
    ".mbox": "application/mbox",
    ".mc1": "application/vnd.medcalcdata",
    ".mcd": "application/vnd.mcd",
    ".mcurl": "text/vnd.curl.mcurl",
    ".mdb": "application/x-msaccess",
    ".mdi": "image/vnd.ms-modi",
    ".me": "text/troff",
    ".mesh": "model/mesh",
    ".mfm": "application/vnd.mfmp",
    ".mgz": "application/vnd.proteus.magazine",
    ".mht": "message/rfc822",
    ".mhtml": "message/rfc822",
    ".mid": "audio/midi",
    ".midi": "audio/midi",
    ".mif": "application/vnd.mif",
    ".mime": "message/rfc822",
    ".mj2": "video/mj2",
    ".mjp2": "video/mj2",
    ".mlp": "application/vnd.dolby.mlp",
    ".mmd": "application/vnd.chipnuts.karaoke-mmd",
    ".mmf": "application/vnd.smaf",
    ".mmr": "image/vnd.fujixerox.edmics-mmr",
    ".mny": "application/x-msmoney",
    ".mobi": "application/x-mobipocket-ebook",
    ".mov": "video/quicktime",
    ".movie": "video/x-sgi-movie",
    ".mp2": "audio/mpeg",
    ".mp2a": "audio/mpeg",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".mp4a": "audio/mp4",
    ".mp4s": "application/mp4",
    ".mp4v": "video/mp4",
    ".mpa": "video/mpeg",
    ".mpc": "application/vnd.mophun.certificate",
    ".mpe": "video/mpeg",
    ".mpeg": "video/mpeg",
    ".mpg": "video/mpeg",
    ".mpg4": "video/mp4",
    ".mpga": "audio/mpeg",
    ".mpkg": "application/vnd.apple.installer+xml",
    ".mpm": "application/vnd.blueice.multipass",
    ".mpn": "application/vnd.mophun.application",
    ".mpp": "application/vnd.ms-project",
    ".mpt": "application/vnd.ms-project",
    ".mpy": "application/vnd.ibm.minipay",
    ".mqy": "application/vnd.mobius.mqy",
    ".mrc": "application/marc",
    ".ms": "text/troff",
    ".mscml": "application/mediaservercontrol+xml",
    ".mseed": "application/vnd.fdsn.mseed",
    ".mseq": "application/vnd.mseq",
    ".msf": "application/vnd.epson.msf",
    ".msh": "model/mesh",
    ".msi": "application/x-msdownload",
    ".msl": "application/vnd.mobius.msl",
    ".msty": "application/vnd.muvee.style",
    ".mts": "model/vnd.mts",
    ".mus": "application/vnd.musician",
    ".musicxml": "application/vnd.recordare.musicxml+xml",
    ".mvb": "application/x-msmediaview",
    ".mwf": "application/vnd.mfer",
    ".mxf": "application/mxf",
    ".mxl": "application/vnd.recordare.musicxml",
    ".mxml": "application/xv+xml",
    ".mxs": "application/vnd.triscape.mxs",
    ".mxu": "video/vnd.mpegurl",
    ".n-gage": "application/vnd.nokia.n-gage.symbian.install",
    ".nb": "application/mathematica",
    ".nc": "application/x-netcdf",
    ".ncx": "application/x-dtbncx+xml",
    ".ngdat": "application/vnd.nokia.n-gage.data",
    ".nlu": "application/vnd.neurolanguage.nlu",
    ".nml": "application/vnd.enliven",
    ".nnd": "application/vnd.noblenet-directory",
    ".nns": "application/vnd.noblenet-sealer",
    ".nnw": "application/vnd.noblenet-web",
    ".npx": "image/vnd.net-fpx",
    ".nsf": "application/vnd.lotus-notes",
    ".nws": "message/rfc822",
    ".o": "application/octet-stream",
    ".oa2": "application/vnd.fujitsu.oasys2",
    ".oa3": "application/vnd.fujitsu.oasys3",
    ".oas": "application/vnd.fujitsu.oasys",
    ".obd": "application/x-msbinder",
    ".obj": "application/octet-stream",
    ".oda": "application/oda",
    ".odb": "application/vnd.oasis.opendocument.database",
    ".odc": "application/vnd.oasis.opendocument.chart",
    ".odf": "application/vnd.oasis.opendocument.formula",
    ".odft": "application/vnd.oasis.opendocument.formula-template",
    ".odg": "application/vnd.oasis.opendocument.graphics",
    ".odi": "application/vnd.oasis.opendocument.image",
    ".odp": "application/vnd.oasis.opendocument.presentation",
    ".ods": "application/vnd.oasis.opendocument.spreadsheet",
    ".odt": "application/vnd.oasis.opendocument.text",
    ".oga": "audio/ogg",
    ".ogg": "audio/ogg",
    ".ogv": "video/ogg",
    ".ogx": "application/ogg",
    ".onepkg": "application/onenote",
    ".onetmp": "application/onenote",
    ".onetoc": "application/onenote",
    ".onetoc2": "application/onenote",
    ".opf": "application/oebps-package+xml",
    ".oprc": "application/vnd.palm",
    ".opus": "audio/ogg",
    ".org": "application/vnd.lotus-organizer",
    ".osf": "application/vnd.yamaha.openscoreformat",
    ".osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
    ".otc": "application/vnd.oasis.opendocument.chart-template",
    ".otf": "application/x-font-otf",
    ".otg": "application/vnd.oasis.opendocument.graphics-template",
    ".oth": "application/vnd.oasis.opendocument.text-web",
    ".oti": "application/vnd.oasis.opendocument.image-template",
    ".otm": "application/vnd.oasis.opendocument.text-master",
    ".otp": "application/vnd.oasis.opendocument.presentation-template",
    ".ots": "application/vnd.oasis.opendocument.spreadsheet-template",
    ".ott": "application/vnd.oasis.opendocument.text-template",
    ".oxt": "application/vnd.openofficeorg.extension",
    ".p": "text/x-pascal",
    ".p10": "application/pkcs10",
    ".p12": "application/x-pkcs12",
    ".p7b": "application/x-pkcs7-certificates",
    ".p7c": "application/pkcs7-mime",
    ".p7m": "application/pkcs7-mime",
    ".p7r": "application/x-pkcs7-certreqresp",
    ".p7s": "application/pkcs7-signature",
    ".pas": "text/x-pascal",
    ".pbd": "application/vnd.powerbuilder6",
    ".pbm": "image/x-portable-bitmap",
    ".pcf": "application/x-font-pcf",
    ".pcl": "application/vnd.hp-pcl",
    ".pclxl": "application/vnd.hp-pclxl",
    ".pct": "image/x-pict",
    ".pcurl": "application/vnd.curl.pcurl",
    ".pcx": "image/x-pcx",
    ".pdb": "application/vnd.palm",
    ".pdf": "application/pdf",
    ".pfa": "application/x-font-type1",
    ".pfb": "application/x-font-type1",
    ".pfm": "application/x-font-type1",
    ".pfr": "application/font-tdpfr",
    ".pfx": "application/x-pkcs12",
    ".pgm": "image/x-portable-graymap",
    ".pgn": "application/x-chess-pgn",
    ".pgp": "application/pgp-encrypted",
    ".pic": "image/x-pict",
    ".pkg": "application/octet-stream",
    ".pki": "application/pkixcmp",
    ".pkipath": "application/pkix-pkipath",
    ".pl": "text/plain",
    ".plb": "application/vnd.3gpp.pic-bw-large",
    ".plc": "application/vnd.mobius.plc",
    ".plf": "application/vnd.pocketlearn",
    ".pls": "application/pls+xml",
    ".pml": "application/vnd.ctc-posml",
    ".png": "image/png",
    ".pnm": "image/x-portable-anymap",
    ".portpkg": "application/vnd.macports.portpkg",
    ".pot": "application/vnd.ms-powerpoint",
    ".potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
    ".potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
    ".ppa": "application/vnd.ms-powerpoint",
    ".ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
    ".ppd": "application/vnd.cups-ppd",
    ".ppm": "image/x-portable-pixmap",
    ".pps": "application/vnd.ms-powerpoint",
    ".ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    ".ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    ".ppt": "application/vnd.ms-powerpoint",
    ".pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".pqa": "application/vnd.palm",
    ".prc": "application/x-mobipocket-ebook",
    ".pre": "application/vnd.lotus-freelance",
    ".prf": "application/pics-rules",
    ".ps": "application/postscript",
    ".psb": "application/vnd.3gpp.pic-bw-small",
    ".psd": "image/vnd.adobe.photoshop",
    ".psf": "application/x-font-linux-psf",
    ".ptid": "application/vnd.pvi.ptid1",
    ".pub": "application/x-mspublisher",
    ".pvb": "application/vnd.3gpp.pic-bw-var",
    ".pwn": "application/vnd.3m.post-it-notes",
    ".pwz": "application/vnd.ms-powerpoint",
    ".py": "text/x-python",
    ".pya": "audio/vnd.ms-playready.media.pya",
    ".pyc": "application/x-python-code",
    ".pyo": "application/x-python-code",
    ".pyv": "video/vnd.ms-playready.media.pyv",
    ".qam": "application/vnd.epson.quickanime",
    ".qbo": "application/vnd.intu.qbo",
    ".qfx": "application/vnd.intu.qfx",
    ".qps": "application/vnd.publishare-delta-tree",
    ".qt": "video/quicktime",
    ".qwd": "application/vnd.quark.quarkxpress",
    ".qwt": "application/vnd.quark.quarkxpress",
    ".qxb": "application/vnd.quark.quarkxpress",
    ".qxd": "application/vnd.quark.quarkxpress",
    ".qxl": "application/vnd.quark.quarkxpress",
    ".qxt": "application/vnd.quark.quarkxpress",
    ".ra": "audio/x-pn-realaudio",
    ".ram": "audio/x-pn-realaudio",
    ".rar": "application/x-rar-compressed",
    ".ras": "image/x-cmu-raster",
    ".rcprofile": "application/vnd.ipunplugged.rcprofile",
    ".rdf": "application/rdf+xml",
    ".rdz": "application/vnd.data-vision.rdz",
    ".rep": "application/vnd.businessobjects",
    ".res": "application/x-dtbresource+xml",
    ".rgb": "image/x-rgb",
    ".rif": "application/reginfo+xml",
    ".rl": "application/resource-lists+xml",
    ".rlc": "image/vnd.fujixerox.edmics-rlc",
    ".rld": "application/resource-lists-diff+xml",
    ".rm": "application/vnd.rn-realmedia",
    ".rmi": "audio/midi",
    ".rmp": "audio/x-pn-realaudio-plugin",
    ".rms": "application/vnd.jcp.javame.midlet-rms",
    ".rnc": "application/relax-ng-compact-syntax",
    ".roff": "text/troff",
    ".rpm": "application/x-rpm",
    ".rpss": "application/vnd.nokia.radio-presets",
    ".rpst": "application/vnd.nokia.radio-preset",
    ".rq": "application/sparql-query",
    ".rs": "application/rls-services+xml",
    ".rsd": "application/rsd+xml",
    ".rss": "application/rss+xml",
    ".rtf": "application/rtf",
    ".rtx": "text/richtext",
    ".s": "text/x-asm",
    ".saf": "application/vnd.yamaha.smaf-audio",
    ".sbml": "application/sbml+xml",
    ".sc": "application/vnd.ibm.secure-container",
    ".scd": "application/x-msschedule",
    ".scm": "application/vnd.lotus-screencam",
    ".scq": "application/scvp-cv-request",
    ".scs": "application/scvp-cv-response",
    ".scurl": "text/vnd.curl.scurl",
    ".sda": "application/vnd.stardivision.draw",
    ".sdc": "application/vnd.stardivision.calc",
    ".sdd": "application/vnd.stardivision.impress",
    ".sdkd": "application/vnd.solent.sdkm+xml",
    ".sdkm": "application/vnd.solent.sdkm+xml",
    ".sdp": "application/sdp",
    ".sdw": "application/vnd.stardivision.writer",
    ".see": "application/vnd.seemail",
    ".seed": "application/vnd.fdsn.seed",
    ".sema": "application/vnd.sema",
    ".semd": "application/vnd.semd",
    ".semf": "application/vnd.semf",
    ".ser": "application/java-serialized-object",
    ".setpay": "application/set-payment-initiation",
    ".setreg": "application/set-registration-initiation",
    ".sfd-hdstx": "application/vnd.hydrostatix.sof-data",
    ".sfs": "application/vnd.spotfire.sfs",
    ".sgl": "application/vnd.stardivision.writer-global",
    ".sgm": "text/sgml",
    ".sgml": "text/sgml",
    ".sh": "application/x-sh",
    ".shar": "application/x-shar",
    ".shf": "application/shf+xml",
    ".si": "text/vnd.wap.si",
    ".sic": "application/vnd.wap.sic",
    ".sig": "application/pgp-signature",
    ".silo": "model/mesh",
    ".sis": "application/vnd.symbian.install",
    ".sisx": "application/vnd.symbian.install",
    ".sit": "application/x-stuffit",
    ".sitx": "application/x-stuffitx",
    ".skd": "application/vnd.koan",
    ".skm": "application/vnd.koan",
    ".skp": "application/vnd.koan",
    ".skt": "application/vnd.koan",
    ".sl": "text/vnd.wap.sl",
    ".slc": "application/vnd.wap.slc",
    ".sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
    ".sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
    ".slt": "application/vnd.epson.salt",
    ".smf": "application/vnd.stardivision.math",
    ".smi": "application/smil+xml",
    ".smil": "application/smil+xml",
    ".snd": "audio/basic",
    ".snf": "application/x-font-snf",
    ".so": "application/octet-stream",
    ".spc": "application/x-pkcs7-certificates",
    ".spf": "application/vnd.yamaha.smaf-phrase",
    ".spl": "application/x-futuresplash",
    ".spot": "text/vnd.in3d.spot",
    ".spp": "application/scvp-vp-response",
    ".spq": "application/scvp-vp-request",
    ".spx": "audio/ogg",
    ".src": "application/x-wais-source",
    ".srx": "application/sparql-results+xml",
    ".sse": "application/vnd.kodak-descriptor",
    ".ssf": "application/vnd.epson.ssf",
    ".ssml": "application/ssml+xml",
    ".stc": "application/vnd.sun.xml.calc.template",
    ".std": "application/vnd.sun.xml.draw.template",
    ".stf": "application/vnd.wt.stf",
    ".sti": "application/vnd.sun.xml.impress.template",
    ".stk": "application/hyperstudio",
    ".stl": "application/vnd.ms-pki.stl",
    ".str": "application/vnd.pg.format",
    ".stw": "application/vnd.sun.xml.writer.template",
    ".sus": "application/vnd.sus-calendar",
    ".susp": "application/vnd.sus-calendar",
    ".sv4cpio": "application/x-sv4cpio",
    ".sv4crc": "application/x-sv4crc",
    ".svd": "application/vnd.svd",
    ".svg": "image/svg+xml",
    ".svgz": "image/svg+xml",
    ".swa": "application/x-director",
    ".swf": "application/x-shockwave-flash",
    ".swi": "application/vnd.arastra.swi",
    ".sxc": "application/vnd.sun.xml.calc",
    ".sxd": "application/vnd.sun.xml.draw",
    ".sxg": "application/vnd.sun.xml.writer.global",
    ".sxi": "application/vnd.sun.xml.impress",
    ".sxm": "application/vnd.sun.xml.math",
    ".sxw": "application/vnd.sun.xml.writer",
    ".t": "text/troff",
    ".tao": "application/vnd.tao.intent-module-archive",
    ".tar": "application/x-tar",
    ".tcap": "application/vnd.3gpp2.tcap",
    ".tcl": "application/x-tcl",
    ".teacher": "application/vnd.smart.teacher",
    ".tex": "application/x-tex",
    ".texi": "application/x-texinfo",
    ".texinfo": "application/x-texinfo",
    ".text": "text/plain",
    ".tfm": "application/x-tex-tfm",
    ".tgz": "application/x-gzip",
    ".tif": "image/tiff",
    ".tiff": "image/tiff",
    ".tmo": "application/vnd.tmobile-livetv",
    ".torrent": "application/x-bittorrent",
    ".tpl": "application/vnd.groove-tool-template",
    ".tpt": "application/vnd.trid.tpt",
    ".tr": "text/troff",
    ".tra": "application/vnd.trueapp",
    ".trm": "application/x-msterminal",
    ".tsv": "text/tab-separated-values",
    ".ttc": "application/x-font-ttf",
    ".ttf": "application/x-font-ttf",
    ".twd": "application/vnd.simtech-mindmapper",
    ".twds": "application/vnd.simtech-mindmapper",
    ".txd": "application/vnd.genomatix.tuxedo",
    ".txf": "application/vnd.mobius.txf",
    ".txt": "text/plain",
    ".u32": "application/x-authorware-bin",
    ".udeb": "application/x-debian-package",
    ".ufd": "application/vnd.ufdl",
    ".ufdl": "application/vnd.ufdl",
    ".umj": "application/vnd.umajin",
    ".unityweb": "application/vnd.unity",
    ".uoml": "application/vnd.uoml+xml",
    ".uri": "text/uri-list",
    ".uris": "text/uri-list",
    ".urls": "text/uri-list",
    ".ustar": "application/x-ustar",
    ".utz": "application/vnd.uiq.theme",
    ".uu": "text/x-uuencode",
    ".vcd": "application/x-cdlink",
    ".vcf": "text/x-vcard",
    ".vcg": "application/vnd.groove-vcard",
    ".vcs": "text/x-vcalendar",
    ".vcx": "application/vnd.vcx",
    ".vis": "application/vnd.visionary",
    ".viv": "video/vnd.vivo",
    ".vor": "application/vnd.stardivision.writer",
    ".vox": "application/x-authorware-bin",
    ".vrml": "model/vrml",
    ".vsd": "application/vnd.visio",
    ".vsf": "application/vnd.vsf",
    ".vss": "application/vnd.visio",
    ".vst": "application/vnd.visio",
    ".vsw": "application/vnd.visio",
    ".vtu": "model/vnd.vtu",
    ".vxml": "application/voicexml+xml",
    ".w3d": "application/x-director",
    ".wad": "application/x-doom",
    ".wav": "audio/x-wav",
    ".wax": "audio/x-ms-wax",
    ".wbmp": "image/vnd.wap.wbmp",
    ".wbs": "application/vnd.criticaltools.wbs+xml",
    ".wbxml": "application/vnd.wap.wbxml",
    ".wcm": "application/vnd.ms-works",
    ".wdb": "application/vnd.ms-works",
    ".weba": "audio/webm",
    ".webm": "video/webm",
    ".webp": "image/webp",
    ".wiz": "application/msword",
    ".wks": "application/vnd.ms-works",
    ".wm": "video/x-ms-wm",
    ".wma": "audio/x-ms-wma",
    ".wmd": "application/x-ms-wmd",
    ".wmf": "application/x-msmetafile",
    ".wml": "text/vnd.wap.wml",
    ".wmlc": "application/vnd.wap.wmlc",
    ".wmls": "text/vnd.wap.wmlscript",
    ".wmlsc": "application/vnd.wap.wmlscriptc",
    ".wmv": "video/x-ms-wmv",
    ".wmx": "video/x-ms-wmx",
    ".wmz": "application/x-ms-wmz",
    ".wpd": "application/vnd.wordperfect",
    ".wpl": "application/vnd.ms-wpl",
    ".wps": "application/vnd.ms-works",
    ".wqd": "application/vnd.wqd",
    ".wri": "application/x-mswrite",
    ".wrl": "model/vrml",
    ".wsdl": "application/wsdl+xml",
    ".wspolicy": "application/wspolicy+xml",
    ".wtb": "application/vnd.webturbo",
    ".wvx": "video/x-ms-wvx",
    ".x32": "application/x-authorware-bin",
    ".x3d": "application/vnd.hzn-3d-crossword",
    ".xap": "application/x-silverlight-app",
    ".xar": "application/vnd.xara",
    ".xbap": "application/x-ms-xbap",
    ".xbd": "application/vnd.fujixerox.docuworks.binder",
    ".xbm": "image/x-xbitmap",
    ".xdm": "application/vnd.syncml.dm+xml",
    ".xdp": "application/vnd.adobe.xdp+xml",
    ".xdw": "application/vnd.fujixerox.docuworks",
    ".xenc": "application/xenc+xml",
    ".xer": "application/patch-ops-error+xml",
    ".xfdf": "application/vnd.adobe.xfdf",
    ".xfdl": "application/vnd.xfdl",
    ".xht": "application/xhtml+xml",
    ".xhtml": "application/xhtml+xml",
    ".xhvml": "application/xv+xml",
    ".xif": "image/vnd.xiff",
    ".xla": "application/vnd.ms-excel",
    ".xlam": "application/vnd.ms-excel.addin.macroenabled.12",
    ".xlb": "application/vnd.ms-excel",
    ".xlc": "application/vnd.ms-excel",
    ".xlm": "application/vnd.ms-excel",
    ".xls": "application/vnd.ms-excel",
    ".xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    ".xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xlt": "application/vnd.ms-excel",
    ".xltm": "application/vnd.ms-excel.template.macroenabled.12",
    ".xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    ".xlw": "application/vnd.ms-excel",
    ".xml": "application/xml",
    ".xo": "application/vnd.olpc-sugar",
    ".xop": "application/xop+xml",
    ".xpdl": "application/xml",
    ".xpi": "application/x-xpinstall",
    ".xpm": "image/x-xpixmap",
    ".xpr": "application/vnd.is-xpr",
    ".xps": "application/vnd.ms-xpsdocument",
    ".xpw": "application/vnd.intercon.formnet",
    ".xpx": "application/vnd.intercon.formnet",
    ".xsl": "application/xml",
    ".xslt": "application/xslt+xml",
    ".xsm": "application/vnd.syncml+xml",
    ".xspf": "application/xspf+xml",
    ".xul": "application/vnd.mozilla.xul+xml",
    ".xvm": "application/xv+xml",
    ".xvml": "application/xv+xml",
    ".xwd": "image/x-xwindowdump",
    ".xyz": "chemical/x-xyz",
    ".zaz": "application/vnd.zzazz.deck+xml",
    ".zip": "application/zip",
    ".zir": "application/vnd.zul",
    ".zirz": "application/vnd.zul",
    ".zmm": "application/vnd.handheld-entertainment+xml"
  }[e.toLowerCase()] || null;
}
var Ds = Object.defineProperty, Fs = Object.getOwnPropertyDescriptor, jn = (e) => {
  throw TypeError(e);
}, we = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Fs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Ds(t, i, a), a;
}, Vi = (e, t, i) => t.has(e) || jn("Cannot " + i), _t = (e, t, i) => (Vi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Wt = (e, t, i) => t.has(e) ? jn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ln = (e, t, i, n) => (Vi(e, t, "write to private field"), t.set(e, i), i), F = (e, t, i) => (Vi(e, t, "access private method"), i), xt, Ce, T, Vn, Hn, Yn, Gn, Xn, Kn, Qn, Jn, Zn, St;
let ie = class extends Q {
  constructor() {
    super(), Wt(this, T), Wt(this, xt, ""), this._serverUrl = "", Wt(this, Ce, []), this.consumeContext(pa, (e) => {
      this._serverUrl = e?.getServerUrl() ?? "";
    });
  }
  set value(e) {
    Ln(this, xt, e?.src ?? ""), F(this, T, Hn).call(this);
  }
  get value() {
    return {
      src: _t(this, xt),
      temporaryFileId: this.temporaryFile?.temporaryUnique
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback(), F(this, T, St).call(this);
  }
  render() {
    return !this.temporaryFile && !this.value.src ? F(this, T, Kn).call(this) : this.value?.src && this._previewAlias ? F(this, T, Qn).call(this, this.value.src) : w;
  }
};
xt = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakSet();
Vn = async function() {
  return _t(this, Ce).length ? _t(this, Ce) : (await new zo(this, Uo, "fileUploadPreview", null, (e) => {
    Ln(this, Ce, e.map((t) => t.manifest));
  }).asPromise(), _t(this, Ce));
};
Hn = async function() {
  this._previewAlias = await F(this, T, Yn).call(this);
};
Yn = async function() {
  if (!this.value.src) return;
  const e = await F(this, T, Vn).call(this), t = e.find(
    (o) => Yi(o.forMimeTypes, "*/*")
  )?.alias;
  let i = null;
  if (this.temporaryFile?.file ? i = this.temporaryFile.file.type : i = F(this, T, Gn).call(this, this.value.src), !i) return t;
  const n = e.find((o) => Yi(o.forMimeTypes, i));
  if (n) return n.alias;
  const a = e.find((o) => (Array.isArray(o.forMimeTypes) ? o.forMimeTypes : [o.forMimeTypes]).find((c) => {
    const v = c.replace(/\*/g, "");
    if (i.startsWith(v) || i.endsWith(v)) return o.alias;
  }));
  return a ? a.alias : t;
};
Gn = function(e) {
  if (e.startsWith("data:"))
    return e.substring(5, e.indexOf(";"));
  const t = e.split(".").pop()?.toLowerCase();
  return t ? Rs("." + t) : null;
};
Xn = async function(e) {
  e.stopImmediatePropagation();
  const i = e.target.value?.[0];
  if (i?.status !== Zi.COMPLETE) return;
  this.temporaryFile = i.temporaryFile, F(this, T, St).call(this);
  const n = URL.createObjectURL(this.temporaryFile.file);
  this.value = { src: n }, this.dispatchEvent(new C());
};
Kn = function() {
  return r`
			<umb-input-dropzone
				standalone
				disable-folder-upload
				accept=${Ue(this._extensions?.join(","))}
				@change=${F(this, T, Xn)}></umb-input-dropzone>
		`;
};
Qn = function(e) {
  return e.startsWith("blob:") || (e = this._serverUrl + e), r`
			<div id="wrapper">
				<div id="wrapperInner">
					<umb-extension-slot
						type="fileUploadPreview"
						.props=${{ path: e, file: this.temporaryFile?.file }}
						.filter=${(t) => t.alias === this._previewAlias}>
					</umb-extension-slot>
				</div>
			</div>
			${F(this, T, Jn).call(this)}
		`;
};
Jn = function() {
  return r`
			<uui-button compact @click=${F(this, T, Zn)} label=${this.localize.term("content_uploadClear")}>
				<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
			</uui-button>
		`;
};
Zn = function() {
  this.temporaryFile?.abortController?.abort(), F(this, T, St).call(this), this.value = { src: void 0 }, this.temporaryFile = void 0, this.dispatchEvent(new C());
};
St = function() {
  this.value?.src?.startsWith("blob:") && URL.revokeObjectURL(this.value.src);
};
ie.styles = [
  ri,
  z`
			:host {
				position: relative;
			}
			uui-icon {
				vertical-align: sub;
				margin-right: var(--uui-size-space-4);
			}

			#wrapper {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
				gap: var(--uui-size-space-4);
				box-sizing: border-box;
				margin-bottom: var(--uui-size-space-3);
			}

			#wrapper:has(umb-input-upload-field-file) {
				padding: var(--uui-size-space-4);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}

			#wrapperInner {
				position: relative;
				display: flex;
				width: 100%;
			}
		`
];
we([
  l({ type: Object, attribute: !1 })
], ie.prototype, "value", 1);
we([
  l({
    type: Array,
    attribute: "allowed-file-extensions",
    converter(e) {
      return typeof e == "string" ? e.split(",").map((t) => t.trim()) : e;
    }
  })
], ie.prototype, "allowedFileExtensions", 2);
we([
  p()
], ie.prototype, "temporaryFile", 2);
we([
  p()
], ie.prototype, "_extensions", 2);
we([
  p()
], ie.prototype, "_previewAlias", 2);
we([
  p()
], ie.prototype, "_serverUrl", 2);
ie = we([
  U("umb-input-upload-field")
], ie);
export {
  bn as A,
  Ur as B,
  rs as C,
  ks as D,
  us as E,
  Ir as F,
  Sr as G,
  qe as H,
  Jt as I,
  ii as J,
  Mt as K,
  yr as L,
  Mr as M,
  $r as N,
  Er as O,
  Tr as P,
  Cr as Q,
  Ar as R,
  nt as U,
  ui as a,
  O as b,
  W as c,
  ee as d,
  L as e,
  te as f,
  qs as g,
  q as h,
  g as i,
  Rs as j,
  ie as k,
  ns as l,
  Mi as m,
  Or as n,
  K as o,
  ot as p,
  wr as q,
  kr as r,
  _r as s,
  xr as t,
  br as u,
  ws as v,
  Pr as w,
  qr as x,
  zr as y,
  ss as z
};
//# sourceMappingURL=input-upload-field.element-Bje2l26U.js.map
