/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=globalThis,Gs=po.ShadowRoot&&(po.ShadyCSS===void 0||po.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qs=Symbol(),Ta=new WeakMap;let Na=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==qs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Gs&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=Ta.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ta.set(i,t))}return t}toString(){return this.cssText}};const wt=e=>new Na(typeof e=="string"?e:e+"",void 0,qs),b=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new Na(i,e,qs)},Fc=(e,t)=>{if(Gs)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),r=po.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}},Va=Gs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return wt(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gc,defineProperty:qc,getOwnPropertyDescriptor:Kc,getOwnPropertyNames:Xc,getOwnPropertySymbols:Yc,getPrototypeOf:Zc}=Object,vo=globalThis,Ba=vo.trustedTypes,Qc=Ba?Ba.emptyScript:"",Jc=vo.reactiveElementPolyfillSupport,mr=(e,t)=>e,fo={toAttribute(e,t){switch(t){case Boolean:e=e?Qc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ks=(e,t)=>!Gc(e,t),Ha={attribute:!0,type:String,converter:fo,reflect:!1,useDefault:!1,hasChanged:Ks};Symbol.metadata??=Symbol("metadata"),vo.litPropertyMetadata??=new WeakMap;let bi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Ha){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,i);r!==void 0&&qc(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){const{get:r,set:s}=Kc(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get:r,set(n){const u=r?.call(this);s?.call(this,n),this.requestUpdate(t,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ha}static _$Ei(){if(this.hasOwnProperty(mr("elementProperties")))return;const t=Zc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(mr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mr("properties"))){const i=this.properties,o=[...Xc(i),...Yc(i)];for(const r of o)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(Va(r))}else t!==void 0&&i.push(Va(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$ET(t,i){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:fo).toAttribute(i,o.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,i){const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:fo;this._$Em=r,this[r]=n.fromAttribute(i,s.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,i,o){if(t!==void 0){const r=this.constructor,s=this[t];if(o??=r.getPropertyOptions(t),!((o.hasChanged??Ks)(s,i)||o.useDefault&&o.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,o))))return;this.C(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:o,reflect:r,wrapped:s},n){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??i??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(i=void 0),this._$AL.set(t,i)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o){const{wrapped:n}=s,u=this[r];n!==!0||this._$AL.has(r)||u===void 0||this.C(r,void 0,s,u)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(i)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};bi.elementStyles=[],bi.shadowRootOptions={mode:"open"},bi[mr("elementProperties")]=new Map,bi[mr("finalized")]=new Map,Jc?.({ReactiveElement:bi}),(vo.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs=globalThis,bo=Xs.trustedTypes,ja=bo?bo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ra="$lit$",xt=`lit$${Math.random().toFixed(9).slice(2)}$`,Wa="?"+xt,eh=`<${Wa}>`,Tt=document,_r=()=>Tt.createComment(""),yr=e=>e===null||typeof e!="object"&&typeof e!="function",Ys=Array.isArray,th=e=>Ys(e)||typeof e?.[Symbol.iterator]=="function",Zs=`[ 	
\f\r]`,wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fa=/-->/g,Ga=/>/g,Nt=RegExp(`>|${Zs}(?:([^\\s"'>=/]+)(${Zs}*=${Zs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qa=/'/g,Ka=/"/g,Xa=/^(?:script|style|textarea|title)$/i,Ya=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),l=Ya(1),m=Ya(2),de=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Za=new WeakMap,Vt=Tt.createTreeWalker(Tt,129);function Qa(e,t){if(!Ys(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ja!==void 0?ja.createHTML(t):t}const ih=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":t===3?"<math>":"",n=wr;for(let u=0;u<i;u++){const c=e[u];let p,f,h=-1,E=0;for(;E<c.length&&(n.lastIndex=E,f=n.exec(c),f!==null);)E=n.lastIndex,n===wr?f[1]==="!--"?n=Fa:f[1]!==void 0?n=Ga:f[2]!==void 0?(Xa.test(f[2])&&(r=RegExp("</"+f[2],"g")),n=Nt):f[3]!==void 0&&(n=Nt):n===Nt?f[0]===">"?(n=r??wr,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,p=f[1],n=f[3]===void 0?Nt:f[3]==='"'?Ka:qa):n===Ka||n===qa?n=Nt:n===Fa||n===Ga?n=wr:(n=Nt,r=void 0);const d=n===Nt&&e[u+1].startsWith("/>")?" ":"";s+=n===wr?c+eh:h>=0?(o.push(p),c.slice(0,h)+Ra+c.slice(h)+xt+d):c+xt+(h===-2?u:d)}return[Qa(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};let Qs=class Rc{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const u=t.length-1,c=this.parts,[p,f]=ih(t,i);if(this.el=Rc.createElement(p,o),Vt.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=Vt.nextNode())!==null&&c.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Ra)){const E=f[n++],d=r.getAttribute(h).split(xt),y=/([.?@])?(.*)/.exec(E);c.push({type:1,index:s,name:y[2],strings:d,ctor:y[1]==="."?oh:y[1]==="?"?sh:y[1]==="@"?nh:go}),r.removeAttribute(h)}else h.startsWith(xt)&&(c.push({type:6,index:s}),r.removeAttribute(h));if(Xa.test(r.tagName)){const h=r.textContent.split(xt),E=h.length-1;if(E>0){r.textContent=bo?bo.emptyScript:"";for(let d=0;d<E;d++)r.append(h[d],_r()),Vt.nextNode(),c.push({type:2,index:++s});r.append(h[E],_r())}}}else if(r.nodeType===8)if(r.data===Wa)c.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(xt,h+1))!==-1;)c.push({type:7,index:s}),h+=xt.length-1}s++}}static createElement(t,i){const o=Tt.createElement("template");return o.innerHTML=t,o}};function gi(e,t,i=e,o){if(t===de)return t;let r=o!==void 0?i._$Co?.[o]:i._$Cl;const s=yr(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,i,o)),o!==void 0?(i._$Co??=[])[o]=r:i._$Cl=r),r!==void 0&&(t=gi(e,r._$AS(e,t.values),r,o)),t}let rh=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,r=(t?.creationScope??Tt).importNode(i,!0);Vt.currentNode=r;let s=Vt.nextNode(),n=0,u=0,c=o[0];for(;c!==void 0;){if(n===c.index){let p;c.type===2?p=new br(s,s.nextSibling,this,t):c.type===1?p=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(p=new ah(s,this,t)),this._$AV.push(p),c=o[++u]}n!==c?.index&&(s=Vt.nextNode(),n++)}return Vt.currentNode=Tt,r}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}};class br{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,o,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=gi(this,t,i),yr(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==de&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):th(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==k&&yr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Tt.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Qs.createElement(Qa(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(i);else{const s=new rh(r,this),n=s.u(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(t){let i=Za.get(t.strings);return i===void 0&&Za.set(t.strings,i=new Qs(t)),i}k(t){Ys(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new br(this.O(_r()),this.O(_r()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}let go=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,r,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=k}_$AI(t,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=gi(this,t,i,0),n=!yr(t)||t!==this._$AH&&t!==de,n&&(this._$AH=t);else{const u=t;let c,p;for(t=s[0],c=0;c<s.length-1;c++)p=gi(this,u[o+c],i,c),p===de&&(p=this._$AH[c]),n||=!yr(p)||p!==this._$AH[c],p===k?t=k:t!==k&&(t+=(p??"")+s[c+1]),this._$AH[c]=p}n&&!r&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},oh=class extends go{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}};class sh extends go{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==k)}}class nh extends go{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){if((t=gi(this,t,i,0)??k)===de)return;const o=this._$AH,r=t===k&&o!==k||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==k&&(o===k||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ah{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){gi(this,t)}}const lh={I:br},uh=Xs.litHtmlPolyfillSupport;uh?.(Qs,br),(Xs.litHtmlVersions??=[]).push("3.3.0");const ch=(e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(r===void 0){const s=i?.renderBefore??null;o._$litPart$=r=new br(t.insertBefore(_r(),s),s,void 0,i??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=globalThis;let g=class extends bi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ch(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return de}};g._$litElement$=!0,g.finalized=!0,Js.litElementHydrateSupport?.({LitElement:g});const hh=Js.litElementPolyfillSupport;hh?.({LitElement:g}),(Js.litElementVersions??=[]).push("4.2.0");var dh=`.uui-h1,
.uui-h2,
.uui-h3,
.uui-h4,
.uui-h5,
.uui-a,
.uui-p,
.uui-p-lead,
.uui-small,
.uui-quoteblock,
.uui-ul,
.uui-ol,
.uui-text {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
}

.uui-text h1,
.uui-h1.uui-h1 {
  font-size: var(--uui-type-h1-size,60px);
  line-height: var(--uui-size-layout-4,66px);
  font-weight: 300;
  margin-left: -5px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h1,
.uui-text p + .uui-h1 {
  margin-top: var(--uui-size-layout-4,66px);
}

.uui-text h1.--no-top-margin,
.uui-text h1:first-child,
.uui-h1.--no-top-margin,
.uui-h1:first-child {
  margin-top: 0;
}

.uui-text h2,
.uui-h2.uui-h2 {
  font-size: var(--uui-type-h2-size,42px);
  line-height: var(--uui-size-layout-3,42px);
  font-weight: 300;
  margin-left: -3px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h2,
.uui-text p + .uui-h2 {
  margin-top: var(--uui-size-layout-3,42px);
}

.uui-text h2.--no-top-margin,
.uui-text h2:first-child,
.uui-h2.--no-top-margin,
.uui-h2:first-child {
  margin-top: 0;
}

.uui-text h3,
.uui-h3.uui-h3 {
  font-size: var(--uui-type-h3-size,30px);
  line-height: var(--uui-size-large);
  font-weight: 300;
  margin-left: -2px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h3.--no-top-margin,
.uui-text h3:first-child,
.uui-h3.--no-top-margin,
.uui-h3:first-child {
  margin-top: 0;
}

.uui-text h4,
.uui-h4.uui-h4 {
  font-size: var(--uui-type-h4-size,21px);
  line-height: 21px;
  font-weight: 400;
  margin-left: -1px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h4.--no-top-margin,
.uui-text h4:first-child,
.uui-h4.--no-top-margin,
.uui-h4:first-child {
  margin-top: 0;
}

.uui-text h5,
.uui-h5.uui-h5 {
  font-size: var(--uui-type-h5-size,14px);
  line-height: inherit;
  font-weight: 700;
  margin-left: 0;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: 0;
}

.uui-text h5.--no-top-margin,
.uui-text h5:first-child,
.uui-h5.--no-top-margin,
.uui-h5:first-child {
  margin-top: 0;
}

.uui-p,
.uui-text p {
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-p-lead,
.uui-text p.uui-lead {
  font-size: var(--uui-size-6,18px);
  line-height: var(--uui-size-8,24px);
}

.uui-a,
.uui-text a {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:link,
.uui-a:active .uui-text a:link,
.uui-text a:active {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:hover,
.uui-text a:hover {
  color: var(--uui-color-interactive-emphasis,#3544b1);
}

.uui-small,
.uui-text small {
  display: inline-block;
  font-size: var(--uui-type-small-size,12px);
  line-height: 18px;
}

.uui-quoteblock,
.uui-text blockquote {
  float: right;
  font-size: 14px;
  line-height: inherit;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: var(--uui-size-layout-1,24px);
  margin-right: -0.035em;
  max-width: 16em;
  quotes: '\u201C' '\u201D' '\u2018' '\u2019';
}

.uui-quoteblock:before,
.uui-text blockquote:before {
  content: open-quote;
  margin-left: -0.4em;
  margin-right: 0.08em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
}

.uui-quoteblock:after,
.uui-text blockquote:after {
  content: close-quote;
  margin-left: 0.04em;
  margin-right: -0.4em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: -2px;
  display: inline-block;
}

.uui-ul,
.uui-text ul {
  list-style-type: square;
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-ol,
.uui-text ol {
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
`;const mi=wt(dh);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ph={attribute:!0,type:String,converter:fo,reflect:!1,hasChanged:Ks},vh=(e=ph,t,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),o==="accessor"){const{name:n}=i;return{set(u){const c=t.get.call(this);t.set.call(this,u),this.requestUpdate(n,c,e)},init(u){return u!==void 0&&this.C(n,void 0,e,u),u}}}if(o==="setter"){const{name:n}=i;return function(u){const c=this[n];t.call(this,u),this.requestUpdate(n,c,e)}}throw Error("Unsupported decorator location: "+o)};function a(e){return(t,i)=>typeof i=="object"?vh(e,t,i):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(e){return a({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(e,t){return(i,o,r)=>{const s=n=>n.renderRoot?.querySelector(e)??null;return en(i,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fh;function bh(e){return(t,i)=>en(t,i,{get(){return(this.renderRoot??(fh??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(e){return(t,i)=>{const{slot:o,selector:r}=e??{},s="slot"+(o?`[name=${o}]`:":not([name])");return en(t,i,{get(){const n=this.renderRoot?.querySelector(s),u=n?.assignedElements(e)??[];return r===void 0?u:u.filter(c=>c.matches(r))}})}}const gh=b`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,mh=wt("uui-blink 0.9s infinite both"),_h=b`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`,yh=wt("pulse 0.8s ease-in-out infinite both"),wh=b`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,xh=wt("uui-horizontal-shake 600ms ease backwards");let tn=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},Ze=class extends tn{constructor(t,i={}){super(t,{bubbles:!0,...i})}};Ze.VALID="valid",Ze.INVALID="invalid";let Bt=class extends tn{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};Bt.SELECTED="selected",Bt.DESELECTED="deselected";var $h=Object.defineProperty,kh=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&$h(t,i,r),r};const Ch=e=>{class t extends e{constructor(){super(...arguments),this.active=!1}}return kh([a({type:Boolean,reflect:!0})],t.prototype,"active"),t};var Eh=Object.defineProperty,Ja=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Eh(t,i,r),r};const Ph=(e,t)=>{class i extends t{constructor(){super(...arguments),this._labelSlotHasContent=!1}firstUpdated(r){super.firstUpdated(r),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(r){this._labelSlotHasContent=r.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return l`
        ${this._labelSlotHasContent===!1?l`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"display: none"}
          name=${e||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return Ja([a({type:String})],i.prototype,"label"),Ja([_()],i.prototype,"_labelSlotHasContent"),i};var Sh=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,el=e=>{throw TypeError(e)},tl=(e,t,i,o)=>{for(var r=o>1?void 0:o?Oh(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Sh(t,i,r),r},rn=(e,t,i)=>t.has(e)||el("Cannot "+i),re=(e,t,i)=>(rn(e,t,"read from private field"),i?i.call(e):t.get(e)),mo=(e,t,i)=>t.has(e)?el("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Ih=(e,t,i,o)=>(rn(e,t,"write to private field"),t.set(e,i),i),_o=(e,t,i)=>(rn(e,t,"access private method"),i);const Ah=e=>{var t,i,o,r,s,n,u;class c extends e{constructor(...f){super(...f),mo(this,r),this._selectable=!1,this.deselectable=!0,this.selected=!1,mo(this,t,this),mo(this,i,h=>{h.code!=="Space"&&h.code!=="Enter"||h.composedPath().indexOf(re(this,t))===0&&re(this,o).call(this,h)}),mo(this,o,h=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;const d=h.composedPath();re(this,t)===this&&d.some(I=>{const $=I.tagName;return $==="A"||$==="BUTTON"||$==="INPUT"||$==="TEXTAREA"||$==="SELECT"})||d.indexOf(re(this,t))!==-1&&(h.type==="keydown"&&h.preventDefault(),_o(this,r,s).call(this))}),this.addEventListener("click",re(this,o)),this.addEventListener("keydown",re(this,i))}get selectable(){return this._selectable}set selectable(f){const h=this._selectable;h!==f&&(this._selectable=f,re(this,t)===this&&re(this,t).setAttribute("tabindex",`${f?"0":"-1"}`),this.requestUpdate("selectable",h))}get selectableTarget(){return re(this,t)}set selectableTarget(f){const h=re(this,t);h.removeAttribute("tabindex"),h.removeEventListener("click",re(this,o)),h.removeEventListener("keydown",re(this,i)),Ih(this,t,f),re(this,t)===this&&re(this,t).setAttribute("tabindex",this._selectable?"0":"-1"),f.addEventListener("click",re(this,o)),f.addEventListener("keydown",re(this,i))}}return t=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakSet,s=function(){this.selectable&&(this.deselectable===!1?_o(this,r,n).call(this):this.selected?_o(this,r,u).call(this):_o(this,r,n).call(this))},n=function(){if(!this.selectable)return;const p=new Bt(Bt.SELECTED);this.dispatchEvent(p),!p.defaultPrevented&&(this.selected=!0)},u=function(){if(!this.deselectable)return;const p=new Bt(Bt.DESELECTED);this.dispatchEvent(p),!p.defaultPrevented&&(this.selected=!1)},tl([a({type:Boolean,reflect:!0})],c.prototype,"selectable",1),tl([a({type:Boolean,reflect:!0})],c.prototype,"selected",2),c};var Uh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Mh=(e,t,i,o)=>{for(var r=zh(t,i),s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Uh(t,i,r),r};const Dh=e=>{class t extends e{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(o){const r=this._selectOnly;this._selectOnly=o,this.requestUpdate("selectOnly",r)}}return Mh([a({type:Boolean,reflect:!0,attribute:"select-only"})],t.prototype,"selectOnly"),t};var Lh=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,il=e=>{throw TypeError(e)},Ht=(e,t,i,o)=>{for(var r=o>1?void 0:o?Th(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Lh(t,i,r),r},on=(e,t,i)=>t.has(e)||il("Cannot "+i),U=(e,t,i)=>(on(e,t,"read from private field"),i?i.call(e):t.get(e)),jt=(e,t,i)=>t.has(e)?il("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),sn=(e,t,i,o)=>(on(e,t,"write to private field"),t.set(e,i),i),yo=(e,t,i)=>(on(e,t,"access private method"),i);const Nh=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],Vh=(e,t)=>{var i,o,r,s,n,u,c,p,f;class h extends e{constructor(...d){super(...d),jt(this,u),this.name="",jt(this,i,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",jt(this,o,t),jt(this,r,null),jt(this,s,[]),jt(this,n,[]),jt(this,f,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return U(this,o)}set value(d){const y=U(this,o);sn(this,o,d),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(U(this,o)??null),this.requestUpdate("value",y)}set pristine(d){this._pristine!==d&&(this._pristine=d,d?this.setAttribute("pristine",""):this.removeAttribute("pristine"),yo(this,u,p).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){const d=U(this,n).find(y=>y.validity.valid===!1);d?"focusFirstInvalidElement"in d?d.focusFirstInvalidElement():d.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),yo(this,u,c).call(this)}addValidator(d,y,I){const $={flagKey:d,getMessageMethod:y,checkMethod:I,weight:Nh.indexOf(d)};return U(this,s).push($),U(this,s).sort((V,ie)=>V.weight>ie.weight?1:ie.weight>V.weight?-1:0),$}removeValidator(d){const y=U(this,s).indexOf(d);y!==-1&&U(this,s).splice(y,1)}addFormControlElement(d){U(this,n).push(d),d.addEventListener(Ze.INVALID,()=>{this._runValidators()}),d.addEventListener(Ze.VALID,()=>{this._runValidators()}),this._pristine===!1&&(d.checkValidity(),this._runValidators())}setCustomValidity(d){this._customValidityObject&&this.removeValidator(this._customValidityObject),d!=null&&d!==""&&(this._customValidityObject=this.addValidator("customError",()=>d,()=>!0)),this._runValidators()}_runValidators(){sn(this,i,{});let d,y;U(this,s).some($=>$.checkMethod()?(U(this,i)[$.flagKey]=!0,d=$.getMessageMethod(),!0):!1),d||U(this,n).some($=>{let V;for(V in $.validity)if(V!=="valid"&&$.validity[V])return U(this,i)[V]=!0,d=$.validationMessage,y??(y=$),!0;return!1});const I=Object.values(U(this,i)).includes(!0);U(this,i).valid=!I,this._internals.setValidity(U(this,i),d,y??this.getFormElement()??void 0),yo(this,u,p).call(this)}updated(d){super.updated(d),this._runValidators()}submit(){U(this,r)?.requestSubmit()}formAssociatedCallback(){yo(this,u,c).call(this),sn(this,r,this._internals.form),U(this,r)&&(U(this,r).hasAttribute("submit-invalid")&&(this.pristine=!1),U(this,r).addEventListener("submit",U(this,f)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return t}getInitialValue(){return this.getAttribute("value")}checkValidity(){this.pristine=!1,this._runValidators();for(const d in U(this,n))if(U(this,n)[d].checkValidity()===!1)return!1;return this._internals?.checkValidity()}get validity(){return U(this,i)}get validationMessage(){return this._internals?.validationMessage}}return i=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,u=new WeakSet,c=function(){U(this,r)&&U(this,r).removeEventListener("submit",U(this,f))},p=function(){this._pristine!==!0&&(U(this,i).valid?this.dispatchEvent(new Ze(Ze.VALID)):this.dispatchEvent(new Ze(Ze.INVALID)))},f=new WeakMap,h.formAssociated=!0,Ht([a({type:String})],h.prototype,"name",2),Ht([a()],h.prototype,"value",1),Ht([a({type:Boolean,reflect:!0,attribute:"pristine"})],h.prototype,"pristine",1),Ht([a({type:Boolean,reflect:!0})],h.prototype,"required",2),Ht([a({type:String,attribute:"required-message"})],h.prototype,"requiredMessage",2),Ht([a({type:Boolean,reflect:!0})],h.prototype,"error",2),Ht([a({type:String,attribute:"error-message"})],h.prototype,"errorMessage",2),h};let Bh=class{constructor(t,i){this._callback=t,this._timerId=null,this._remaining=null,this._onComplete=()=>{this._remaining=null,this._callback()},this.setDuration(i)}setDuration(t){this._duration=t,this._timerId!==null&&this.restart()}start(){this._timerId===null&&this.resume()}restart(){this._remaining=this._duration,this.resume()}pause(){this._timerId!==null&&(window.clearTimeout(this._timerId),this._timerId=null,this._remaining!==null&&(this._remaining-=Date.now()-this._startTime))}resume(){this._timerId!==null&&window.clearTimeout(this._timerId),this._remaining===null&&(this._remaining=this._duration),this._startTime=Date.now(),this._timerId=window.setTimeout(this._onComplete,this._remaining)}destroy(){this.pause()}};const Hh=(e,t,i=`This element has to be present for ${e.nodeName} to work appropriate.`)=>{customElements.get(t)||console.warn(`%c ${e.nodeName} requires ${t} element to be registered!`,"font-weight: bold;",i,e)},jh=(e,t)=>{function i(r){const s=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,u=s.left+n.scrollX,c=s.top+n.scrollY;let p;if("TouchEvent"in window&&r instanceof TouchEvent)p=r.touches[0];else if(r instanceof MouseEvent)p=r;else return;const f=p.pageX-u,h=p.pageY-c;t?.onMove&&t.onMove(f,h)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),t?.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),t?.initialEvent&&i(t.initialEvent)},Rh=(e,t,i)=>Math.min(Math.max(e,t),i),Wh=(e,t,i)=>i+t-e,Fh=e=>{const t=Math.round(e).toString(16);return t.length===1?`0${t}`:t},rl=(e,t,i)=>{let o=e;for(;o!==null;){const r=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===i,s=o.querySelector(`[${t}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${t}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};function Gh(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}var qh=Object.defineProperty,ol=e=>{throw TypeError(e)},Kh=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&qh(t,i,r),r},sl=(e,t,i)=>t.has(e)||ol("Cannot "+i),nl=(e,t,i)=>(sl(e,t,"read from private field"),t.get(e)),al=(e,t,i)=>t.has(e)?ol("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Xh=(e,t,i,o)=>(sl(e,t,"write to private field"),t.set(e,i),i);const Yh=e=>{var t,i;class o extends e{constructor(...s){super(...s),al(this,t,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;const n=rl(this,"id",this.popoverContainerElement);n&&(nl(this,t)?n.hidePopover():n.showPopover())},al(this,i,n=>{requestAnimationFrame(()=>{Xh(this,t,n.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",nl(this,i))}}return t=new WeakMap,i=new WeakMap,Kh([a({type:String,attribute:"popovertarget"})],o.prototype,"popoverContainerElement"),o};function Zh(e,t){return i=>{if(e.indexOf("-")>0===!1){console.error(`${e} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(e)||window.customElements.define(e,i,t)}}const Qh=["default","primary","secondary","outline","placeholder"],Jh=["default","positive","warning","danger","invalid"],ed=["h1","h2","h3","h4","h5","h6"];function v(e,t){return i=>{if(e.indexOf("-")>0===!1){console.error(`${e} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(e)||window.customElements.define(e,i,t)}}var td=Object.getOwnPropertyDescriptor,id=(e,t,i,o)=>{for(var r=o>1?void 0:o?td(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let _i=class extends g{render(){return l`<slot></slot>`}};_i.styles=[b`
      :host {
        display: inline-flex;
        align-items: stretch;
      }

      ::slotted(*) {
        --uui-button-border-radius: 0;
        flex-grow: 1;
      }

      ::slotted([look='outline']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }
      ::slotted([look='placeholder']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: var(--uui-border-radius,3px) 0 0
          var(--uui-border-radius,3px);
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 var(--uui-border-radius,3px)
          var(--uui-border-radius,3px) 0;
      }

      ::slotted(*:hover) {
        z-index: 1;
      }
    `],_i=id([v("uui-button-group")],_i);var rd=Object.getOwnPropertyDescriptor,od=(e,t,i,o)=>{for(var r=o>1?void 0:o?rd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let wo=class extends _i{};wo.styles=[..._i.styles,b`
      ::slotted(*) {
        --uui-button-padding-left-factor: 0.5;
        --uui-button-padding-right-factor: 0.5;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 2;
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 2;
      }
      ::slotted(*:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 2;
        --uui-button-padding-right-factor: 2;
      }

      ::slotted([look='outline']),
      ::slotted([look='placeholder']) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
      }

      ::slotted(uui-button[look='outline']:first-child),
      ::slotted(uui-button[look='placeholder']:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:last-child),
      ::slotted(uui-button[look='placeholder']:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:first-child:last-child),
      ::slotted(uui-button[look='placeholder']:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }
    `],wo=od([v("uui-action-bar")],wo);var sd=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,xo=(e,t,i,o)=>{for(var r=o>1?void 0:o?nd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&sd(t,i,r),r};let Rt=class extends g{constructor(){super(...arguments),this._avatarArray=[],this.limit=0}firstUpdated(){this._setAvatarArray()}_onSlotChange(){this._setAvatarArray(),this._updateAvatarVisibility()}_setAvatarArray(){this._avatarArray=this._avatarNodes?this._avatarNodes:[]}updated(e){e.has("limit")&&this._updateAvatarVisibility()}_updateAvatarVisibility(){this._avatarArray.forEach((e,t)=>{e.style.display=t<this.limit||this.limit===0?"":"none"})}_isLimitExceeded(){return this.limit!==0&&this._avatarArray.length>this.limit}render(){return l`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this._isLimitExceeded()?l`<small id="overflow-indication">+${this._avatarArray.length-this.limit}</small>`:""}
    `}};Rt.styles=[b`
      :host {
        display: inline-flex;
        align-items: center;
        padding-left: 3px;
        padding-right: 3px;
      }

      ::slotted(uui-avatar) {
        margin-left: -0.2em;
        margin-right: -0.2em;
        border: 0.1em solid var(--uui-avatar-border-color);
      }

      #overflow-indication {
        margin-left: 6px;
      }
    `],xo([$t({selector:"uui-avatar, [uui-avatar]",flatten:!0})],Rt.prototype,"_avatarNodes",2),xo([_()],Rt.prototype,"_avatarArray",2),xo([a({type:Number,attribute:!0})],Rt.prototype,"limit",2),Rt=xo([v("uui-avatar-group")],Rt);var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,yi=(e,t,i,o)=>{for(var r=o>1?void 0:o?ld(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ad(t,i,r),r};let Qe=class extends g{constructor(){super(...arguments),this.overflow=!0,this.imgSrc="",this.imgSrcset="",this.name=""}get _initials(){return this.initials?.substring(0,3)||this.createInitials(this.name)}connectedCallback(){super.connectedCallback(),this.name||console.warn(this.tagName+" needs a `name`",this)}createInitials(e){let t="";if(!e)return t;const o=[...e.matchAll(/(?:^|\s)(.)/g)].map(r=>r[1]).join("");return o?.length?(t=o[0].charAt(0),o.length>1&&(t+=o[o.length-1].charAt(0)),t.toUpperCase()):t}renderImage(){return l` <img
      src="${this.imgSrc}"
      srcset="${this.imgSrcset}"
      alt="${this._initials}"
      title="${this.name}" />`}render(){return l`
      ${this.imgSrc?this.renderImage():""}
      ${this.imgSrc?"":this._initials}
      <slot></slot>
    `}};Qe.styles=[b`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        font-weight: 700;
        -webkit-font-smoothing: subpixel-antialiased;
        width: calc(2em + 4px);
        height: calc(2em + 4px);
        user-select: none;
        /* box-sizing: border-box; */
        aspect-ratio: 1;
        background-color: var(--uui-palette-spanish-pink,#f5c1bc);
        color: var(--uui-palette-space-cadet,#1b264f);
      }

      :host([overflow]) {
        overflow: unset;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
      }
    `],yi([a({type:Boolean,attribute:!0,reflect:!0})],Qe.prototype,"overflow",2),yi([a({type:String,attribute:"img-src"})],Qe.prototype,"imgSrc",2),yi([a({type:String,attribute:"img-srcset"})],Qe.prototype,"imgSrcset",2),yi([a({type:String,reflect:!0})],Qe.prototype,"name",2),yi([a({type:String})],Qe.prototype,"initials",2),Qe=yi([v("uui-avatar")],Qe);var ud=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,$o=(e,t,i,o)=>{for(var r=o>1?void 0:o?cd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ud(t,i,r),r};let Wt=class extends g{constructor(){super(...arguments),this.color="default",this.look="primary",this.attention=!1}render(){return l` <slot></slot> `}};Wt.styles=[b`
      :host {
        position: var(--uui-badge-position, absolute);
        display: flex;
        justify-content: center;
        align-items: center;

        padding: var(--uui-size-1,3px) var(--uui-size-2,6px);
        inset: var(--uui-badge-inset, -8px -8px auto auto);

        text-align: center;
        font-size: var(--uui-badge-font-size, var(--uui-type-small-size,12px));
        font-weight: 900;
        line-height: 1;

        margin-right: 0;

        min-width: var(--uui-size-8,24px);
        min-height: var(--uui-size-8,24px);
        box-sizing: border-box;

        border-radius: var(--uui-size-4,12px);
        border: 1px solid transparent;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }

      /** TODO: we didn't want to target elements by name, but what else can we do? */
      ::slotted(uui-icon) {
        margin-left: -0.2em;
        margin-right: -0.2em;
      }

      @keyframes --uui-badge-bounce {
        0% {
          transform: translateY(0);
        }
        20% {
          transform: translateY(-6px);
        }
        40% {
          transform: translateY(0);
        }
        55% {
          transform: translateY(-3px);
        }
        70% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(0);
        }
      }
      :host([attention]) {
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-name: --uui-badge-bounce;
        animation-timing-function: ease;
      }
      @media (prefers-reduced-motion) {
        :host([attention]) {
          animation: none;
        }
      }
    `],$o([a({reflect:!0})],Wt.prototype,"color",2),$o([a({reflect:!0})],Wt.prototype,"look",2),$o([a({type:Boolean,reflect:!0})],Wt.prototype,"attention",2),Wt=$o([v("uui-badge")],Wt);var hd=Object.defineProperty,dd=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&hd(t,i,r),r};const xr=e=>{class t extends e{constructor(){super(...arguments),this.active=!1}}return dd([a({type:Boolean,reflect:!0})],t.prototype,"active"),t};var pd=Object.defineProperty,ll=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&pd(t,i,r),r};const Te=(e,t)=>{class i extends t{constructor(){super(...arguments),this._labelSlotHasContent=!1}firstUpdated(r){super.firstUpdated(r),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(r){this._labelSlotHasContent=r.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return l`
        ${this._labelSlotHasContent===!1?l`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"display: none"}
          name=${e||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return ll([a({type:String})],i.prototype,"label"),ll([_()],i.prototype,"_labelSlotHasContent"),i};let vd=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},wi=class extends vd{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};wi.SELECTED="selected",wi.DESELECTED="deselected";var fd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,ul=e=>{throw TypeError(e)},cl=(e,t,i,o)=>{for(var r=o>1?void 0:o?bd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&fd(t,i,r),r},nn=(e,t,i)=>t.has(e)||ul("Cannot "+i),oe=(e,t,i)=>(nn(e,t,"read from private field"),i?i.call(e):t.get(e)),ko=(e,t,i)=>t.has(e)?ul("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),gd=(e,t,i,o)=>(nn(e,t,"write to private field"),t.set(e,i),i),Co=(e,t,i)=>(nn(e,t,"access private method"),i);const xi=e=>{var t,i,o,r,s,n,u;class c extends e{constructor(...f){super(...f),ko(this,r),this._selectable=!1,this.deselectable=!0,this.selected=!1,ko(this,t,this),ko(this,i,h=>{h.code!=="Space"&&h.code!=="Enter"||h.composedPath().indexOf(oe(this,t))===0&&oe(this,o).call(this,h)}),ko(this,o,h=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;const d=h.composedPath();oe(this,t)===this&&d.some(I=>{const $=I.tagName;return $==="A"||$==="BUTTON"||$==="INPUT"||$==="TEXTAREA"||$==="SELECT"})||d.indexOf(oe(this,t))!==-1&&(h.type==="keydown"&&h.preventDefault(),Co(this,r,s).call(this))}),this.addEventListener("click",oe(this,o)),this.addEventListener("keydown",oe(this,i))}get selectable(){return this._selectable}set selectable(f){const h=this._selectable;h!==f&&(this._selectable=f,oe(this,t)===this&&oe(this,t).setAttribute("tabindex",`${f?"0":"-1"}`),this.requestUpdate("selectable",h))}get selectableTarget(){return oe(this,t)}set selectableTarget(f){const h=oe(this,t);h.removeAttribute("tabindex"),h.removeEventListener("click",oe(this,o)),h.removeEventListener("keydown",oe(this,i)),gd(this,t,f),oe(this,t)===this&&oe(this,t).setAttribute("tabindex",this._selectable?"0":"-1"),f.addEventListener("click",oe(this,o)),f.addEventListener("keydown",oe(this,i))}}return t=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakSet,s=function(){this.selectable&&(this.deselectable===!1?Co(this,r,n).call(this):this.selected?Co(this,r,u).call(this):Co(this,r,n).call(this))},n=function(){if(!this.selectable)return;const p=new wi(wi.SELECTED);this.dispatchEvent(p),!p.defaultPrevented&&(this.selected=!0)},u=function(){if(!this.deselectable)return;const p=new wi(wi.DESELECTED);this.dispatchEvent(p),!p.defaultPrevented&&(this.selected=!1)},cl([a({type:Boolean,reflect:!0})],c.prototype,"selectable",1),cl([a({type:Boolean,reflect:!0})],c.prototype,"selected",2),c};var md=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,yd=(e,t,i,o)=>{for(var r=_d(t,i),s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&md(t,i,r),r};const Eo=e=>{class t extends e{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(o){const r=this._selectOnly;this._selectOnly=o,this.requestUpdate("selectOnly",r)}}return yd([a({type:Boolean,reflect:!0,attribute:"select-only"})],t.prototype,"selectOnly"),t};let hl=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},kt=class extends hl{constructor(t,i={}){super(t,{bubbles:!0,...i})}};kt.VALID="valid",kt.INVALID="invalid";let dl=class extends hl{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};dl.SELECTED="selected",dl.DESELECTED="deselected";var wd=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,pl=e=>{throw TypeError(e)},Ft=(e,t,i,o)=>{for(var r=o>1?void 0:o?xd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&wd(t,i,r),r},an=(e,t,i)=>t.has(e)||pl("Cannot "+i),z=(e,t,i)=>(an(e,t,"read from private field"),i?i.call(e):t.get(e)),Gt=(e,t,i)=>t.has(e)?pl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ln=(e,t,i,o)=>(an(e,t,"write to private field"),t.set(e,i),i),Po=(e,t,i)=>(an(e,t,"access private method"),i);const $d=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],Ne=(e,t)=>{var i,o,r,s,n,u,c,p,f;class h extends e{constructor(...d){super(...d),Gt(this,u),this.name="",Gt(this,i,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",Gt(this,o,t),Gt(this,r,null),Gt(this,s,[]),Gt(this,n,[]),Gt(this,f,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return z(this,o)}set value(d){const y=z(this,o);ln(this,o,d),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(z(this,o)??null),this.requestUpdate("value",y)}set pristine(d){this._pristine!==d&&(this._pristine=d,d?this.setAttribute("pristine",""):this.removeAttribute("pristine"),Po(this,u,p).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){const d=z(this,n).find(y=>y.validity.valid===!1);d?"focusFirstInvalidElement"in d?d.focusFirstInvalidElement():d.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),Po(this,u,c).call(this)}addValidator(d,y,I){const $={flagKey:d,getMessageMethod:y,checkMethod:I,weight:$d.indexOf(d)};return z(this,s).push($),z(this,s).sort((V,ie)=>V.weight>ie.weight?1:ie.weight>V.weight?-1:0),$}removeValidator(d){const y=z(this,s).indexOf(d);y!==-1&&z(this,s).splice(y,1)}addFormControlElement(d){z(this,n).push(d),d.addEventListener(kt.INVALID,()=>{this._runValidators()}),d.addEventListener(kt.VALID,()=>{this._runValidators()}),this._pristine===!1&&(d.checkValidity(),this._runValidators())}setCustomValidity(d){this._customValidityObject&&this.removeValidator(this._customValidityObject),d!=null&&d!==""&&(this._customValidityObject=this.addValidator("customError",()=>d,()=>!0)),this._runValidators()}_runValidators(){ln(this,i,{});let d,y;z(this,s).some($=>$.checkMethod()?(z(this,i)[$.flagKey]=!0,d=$.getMessageMethod(),!0):!1),d||z(this,n).some($=>{let V;for(V in $.validity)if(V!=="valid"&&$.validity[V])return z(this,i)[V]=!0,d=$.validationMessage,y??(y=$),!0;return!1});const I=Object.values(z(this,i)).includes(!0);z(this,i).valid=!I,this._internals.setValidity(z(this,i),d,y??this.getFormElement()??void 0),Po(this,u,p).call(this)}updated(d){super.updated(d),this._runValidators()}submit(){z(this,r)?.requestSubmit()}formAssociatedCallback(){Po(this,u,c).call(this),ln(this,r,this._internals.form),z(this,r)&&(z(this,r).hasAttribute("submit-invalid")&&(this.pristine=!1),z(this,r).addEventListener("submit",z(this,f)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return t}getInitialValue(){return this.getAttribute("value")}checkValidity(){this.pristine=!1,this._runValidators();for(const d in z(this,n))if(z(this,n)[d].checkValidity()===!1)return!1;return this._internals?.checkValidity()}get validity(){return z(this,i)}get validationMessage(){return this._internals?.validationMessage}}return i=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,u=new WeakSet,c=function(){z(this,r)&&z(this,r).removeEventListener("submit",z(this,f))},p=function(){this._pristine!==!0&&(z(this,i).valid?this.dispatchEvent(new kt(kt.VALID)):this.dispatchEvent(new kt(kt.INVALID)))},f=new WeakMap,h.formAssociated=!0,Ft([a({type:String})],h.prototype,"name",2),Ft([a()],h.prototype,"value",1),Ft([a({type:Boolean,reflect:!0,attribute:"pristine"})],h.prototype,"pristine",1),Ft([a({type:Boolean,reflect:!0})],h.prototype,"required",2),Ft([a({type:String,attribute:"required-message"})],h.prototype,"requiredMessage",2),Ft([a({type:Boolean,reflect:!0})],h.prototype,"error",2),Ft([a({type:String,attribute:"error-message"})],h.prototype,"errorMessage",2),h},kd=(e,t,i)=>{let o=e;for(;o!==null;){const r=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===i,s=o.querySelector(`[${t}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${t}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};var Cd=Object.defineProperty,vl=e=>{throw TypeError(e)},Ed=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Cd(t,i,r),r},fl=(e,t,i)=>t.has(e)||vl("Cannot "+i),bl=(e,t,i)=>(fl(e,t,"read from private field"),t.get(e)),gl=(e,t,i)=>t.has(e)?vl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Pd=(e,t,i,o)=>(fl(e,t,"write to private field"),t.set(e,i),i);const Sd=e=>{var t,i;class o extends e{constructor(...s){super(...s),gl(this,t,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;const n=kd(this,"id",this.popoverContainerElement);n&&(bl(this,t)?n.hidePopover():n.showPopover())},gl(this,i,n=>{requestAnimationFrame(()=>{Pd(this,t,n.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",bl(this,i))}}return t=new WeakMap,i=new WeakMap,Ed([a({type:String,attribute:"popovertarget"})],o.prototype,"popoverContainerElement"),o};class A extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}}class $i extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}$i.VALID="valid",$i.INVALID="invalid";class Ct extends A{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}}Ct.SELECTED="selected",Ct.DESELECTED="deselected";class So extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}So.CHANGE="change";var Od=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,ml=e=>{throw TypeError(e)},ki=(e,t,i,o)=>{for(var r=o>1?void 0:o?Id(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Od(t,i,r),r},Ad=(e,t,i)=>t.has(e)||ml("Cannot "+i),Ud=(e,t,i)=>t.has(e)?ml("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),zd=(e,t,i)=>(Ad(e,t,"access private method"),i),un,_l;class ke extends Ne(Te("",g),""){constructor(t="checkbox"){super(),Ud(this,un),this._value="",this.labelPosition="right",this._checked=!1,this.indeterminate=!1,this.disabled=!1,this.readonly=!1,this._value===""&&(this._value="on"),this.inputRole=t,this.addEventListener("keydown",zd(this,un,_l))}get value(){return this._value}set value(t){const i=super.value;this._value=t,"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(this._checked&&this.name!==""?this._value:null),this.requestUpdate("value",i)}get checked(){return this._checked}set checked(t){const i=this._checked;this._checked=t,this._internals.setFormValue(this._checked&&this.name!==""?this._value?this._value:"on":null),this.requestUpdate("checked",i)}getFormElement(){return this._input}hasValue(){return this.checked}formResetCallback(){super.formResetCallback(),this.checked=this.hasAttribute("checked")}firstUpdated(t){super.firstUpdated(t);const i=this.shadowRoot?.querySelector("label");let o=!1;this._input.addEventListener("blur",()=>{o===!1&&this.style.setProperty("--uui-show-focus-outline","1"),o=!1}),i.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),o=!0}),i.addEventListener("mouseup",()=>{o=!1})}async focus(){await this.updateComplete,this._input.focus()}async click(){await this.updateComplete,this._input.click()}_onInputChange(t){t.stopPropagation(),this.pristine=!1,this.checked=this._input.checked,this.indeterminate=this._input.indeterminate,this.dispatchEvent(new So(So.CHANGE))}render(){return l`
      <label>
        <input
          id="input"
          type="checkbox"
          @change="${this._onInputChange}"
          .disabled=${this.disabled||this.readonly}
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          aria-checked="${this.checked?"true":"false"}"
          aria-label=${this.label}
          role="${this.inputRole}" />
        ${this.renderCheckbox()} ${this.renderLabel()}
      </label>
    `}}un=new WeakSet,_l=function(e){e.key=="Enter"&&this.submit()},ke.styles=[b`
      :host {
        display: inline-block;
      }

      label {
        position: relative;
        cursor: pointer;
        user-select: none;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-items: center;
        gap: var(--uui-size-3,9px);
      }

      :host([readonly]) label {
        cursor: default;
      }

      input {
        position: absolute;
        height: 0px;
        width: 0px;
        opacity: 0;
      }

      :host([label-position='left']) label {
        flex-direction: row-reverse;
      }

      :host([label-position='top']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column-reverse;
      }

      :host([label-position='bottom']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column;
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .label {
        display: block;
      }

      span.label:empty {
        display: none;
      }
    `],ki([a({type:String,attribute:"label-position",reflect:!0})],ke.prototype,"labelPosition",2),ki([a({type:Boolean})],ke.prototype,"checked",1),ki([a({type:Boolean,reflect:!0})],ke.prototype,"indeterminate",2),ki([a({type:Boolean,reflect:!0})],ke.prototype,"disabled",2),ki([a({type:Boolean,reflect:!0})],ke.prototype,"readonly",2),ki([O("#input")],ke.prototype,"_input",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yl=Symbol.for(""),Md=e=>{if(e?.r===yl)return e?._$litStatic$},wl=e=>({_$litStatic$:e,r:yl}),xl=new Map,Dd=e=>(t,...i)=>{const o=i.length;let r,s;const n=[],u=[];let c,p=0,f=!1;for(;p<o;){for(c=t[p];p<o&&(s=i[p],(r=Md(s))!==void 0);)c+=r+t[++p],f=!0;p!==o&&u.push(s),n.push(c),p++}if(p===o&&n.push(t[o]),f){const h=n.join("$$lit$$");(t=xl.get(h))===void 0&&(n.raw=n,xl.set(h,t=n)),i=u}return e(t,...i)},$l=Dd(l);var Ld=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,qt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Td(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ld(t,i,r),r};function cn(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}let Ve=class extends g{constructor(){super(...arguments),this.headline=null,this._headlineVariantTag="h5",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=cn(e.target)},this._headerSlotHasContent=!1,this._headerSlotChanged=e=>{this._headerSlotHasContent=cn(e.target)},this._headerActionsSlotHasContent=!1,this._headerActionsSlotChanged=e=>{this._headerActionsSlotHasContent=cn(e.target)}}set headlineVariant(e){this._headlineVariantTag=e}get headlineVariant(){return this._headlineVariantTag}renderHeader(){return $l`<div
      id="header"
      class="uui-text"
      style=${this._headerSlotHasContent||this._headlineSlotHasContent||this._headerActionsSlotHasContent||this.headline!==null?"":"display: none"}>
      <${wl(this._headlineVariantTag)}
        id="headline"
        class="uui-h5"
        style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
        ${this.headline}
        <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
      </${wl(this._headlineVariantTag)}>
      <slot name="header" @slotchange=${this._headerSlotChanged}></slot>
      <slot name="header-actions" @slotchange=${this._headerActionsSlotChanged}></slot>
    </div>`}render(){return $l`
      ${this.renderHeader()}
      <slot></slot>
    `}};Ve.styles=[mi,b`
      :host {
        display: block;
        border: var(--uui-box-border-width, 0) solid
          var(--uui-box-border-color, var(--uui-color-divider-standalone,#e9e9eb));
        box-shadow: var(--uui-box-box-shadow, var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24)));
        border-radius: var(--uui-box-border-radius, var(--uui-border-radius,3px));
        background-color: var(--uui-color-surface,#fff);
      }

      #header {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-space-5,18px);
        border-bottom: 1px solid var(--uui-color-divider-standalone,#e9e9eb);
        padding: var(
          --uui-box-header-padding,
          var(--uui-size-space-4,12px) var(--uui-size-space-5,18px)
        );
      }

      slot:not([name]) {
        display: block;
        padding: var(--uui-box-default-padding, var(--uui-size-space-5,18px));
      }

      slot[name='header-actions'] {
        display: block;
        margin-left: auto;
      }
    `],qt([a({type:String})],Ve.prototype,"headline",2),qt([a({attribute:"headline-variant"})],Ve.prototype,"headlineVariant",1),qt([_()],Ve.prototype,"_headlineVariantTag",2),qt([_()],Ve.prototype,"_headlineSlotHasContent",2),qt([_()],Ve.prototype,"_headerSlotHasContent",2),qt([_()],Ve.prototype,"_headerActionsSlotHasContent",2),Ve=qt([v("uui-box")],Ve);var Nd=Object.defineProperty,Vd=Object.getOwnPropertyDescriptor,hn=(e,t,i,o)=>{for(var r=o>1?void 0:o?Vd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Nd(t,i,r),r};let Kt=class extends g{constructor(){super(...arguments),this.lastItem=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}renderLinkAndSeparator(){const e=this.href?l`<a id="link" href=${this.href}><slot></slot></a>`:l`<span id="link"><slot></slot></span>`;return l`${e}<span part="separator"></span>`}renderCurrent(){return l`<span id="last-item"><slot></slot></span>`}render(){return l`${this.lastItem?this.renderCurrent():this.renderLinkAndSeparator()}`}};Kt.styles=[b`
      :host {
        font-size: var(--uui-type-small-size,12px);
        color: currentColor;
      }

      a,
      a:visited {
        color: currentColor;
      }
      a:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      a:focus {
        color: var(--uui-color-focus,#3879ff);
      }

      [part='separator']::after {
        content: '/';
        speak: never;
        position: relative;
        top: 1px;
        margin: -3px 1px 0;
        color: var(--uui-color-border,#d8d7d9);
      }

      #link,
      #last-item {
        padding: 0 4px;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `],hn([a()],Kt.prototype,"href",2),hn([a({type:Boolean,attribute:"last-item"})],Kt.prototype,"lastItem",2),Kt=hn([v("uui-breadcrumb-item")],Kt);var Bd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,kl=(e,t,i,o)=>{for(var r=o>1?void 0:o?Hd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Bd(t,i,r),r};let $r=class extends g{elementIsBreadcrumbItem(e){return e instanceof Kt}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label","breadcrumb"),this.setAttribute("role","navigation")}handleSlotChange(){if(this.slotNodes.length>0){const e=this.slotNodes[this.slotNodes.length-1];e.setAttribute("aria-current","page"),this.elementIsBreadcrumbItem(e)&&(e.lastItem=!0)}}render(){return l`<ol id="breadcrumbs-list">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </ol>`}};$r.styles=[b`
      :host {
        display: flex;
      }

      #breadcrumbs-list {
        display: flex;
        list-style-type: decimal;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
      }
    `],kl([$t({flatten:!0,selector:"uui-breadcrumb-item, [uui-breadcrumb-item], [role=listitem]"})],$r.prototype,"slotNodes",2),$r=kl([v("uui-breadcrumbs")],$r);const jd=b`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,Rd=wt("uui-blink 0.9s infinite both"),Wd=b`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`;wt("pulse 0.8s ease-in-out infinite both");const Oo=b`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,Io=wt("uui-horizontal-shake 600ms ease backwards");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ci=e=>(...t)=>({_$litDirective$:e,values:t});let Ei=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cl="important",Fd=" !"+Cl,Je=Ci(class extends Ei{constructor(e){if(super(e),e.type!==Ie.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(Fd);o.includes("-")||s?i.setProperty(o,s?r.slice(0,-11):r,s?Cl:""):i[o]=r}}return de}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>e??k;class Ao extends A{constructor(t,i={}){super(t,{bubbles:!0,composed:!0,...i})}}Ao.CLICK="click";var Gd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,El=e=>{throw TypeError(e)},Xt=(e,t,i,o)=>{for(var r=o>1?void 0:o?qd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Gd(t,i,r),r},Kd=(e,t,i)=>t.has(e)||El("Cannot "+i),Xd=(e,t,i)=>t.has(e)?El("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Uo=(e,t,i)=>(Kd(e,t,"access private method"),i),Pi,dn,Pl,Sl;let Be=class extends g{constructor(){super(...arguments),Xd(this,Pi),this._position=0,this.vertical=!1}_onMouseMove(e){this._position=(this.vertical?e.offsetY:e.offsetX)-5}_handleClick(e){e.preventDefault(),e.stopImmediatePropagation(),e.target?.blur?.(),this.dispatchEvent(new Ao(Ao.CLICK))}render(){return this.href?Uo(this,Pi,Pl).call(this):Uo(this,Pi,Sl).call(this)}};Pi=new WeakSet,dn=function(){return l`
      <div
        id="plus"
        style=${Je({left:this.vertical?"":this._position+"px",top:this.vertical?this._position+"px":""})}>
        <svg
          id="plus-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M420.592 214.291H296.104V89.804h-83.102v124.487H88.518v83.104h124.484v124.488h83.102V297.395h124.488z" />
        </svg>
      </div>
    `},Pl=function(){return l`<a
      id="button-wrapper"
      @mousemove=${this._onMouseMove}
      href=${w(this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}
      aria-label=${this.label?this.label:"create new element"}>
      ${Uo(this,Pi,dn).call(this)}
    </a>`},Sl=function(){return l`
      <button
        id="button-wrapper"
        @mousemove=${this._onMouseMove}
        @click=${this._handleClick}
        aria-label=${this.label?this.label:"create new element"}>
        ${Uo(this,Pi,dn).call(this)}
      </button>
    `},Be.styles=[jd,b`
      :host {
        display: flex;
        position: relative;
        z-index: 1;
      }

      :host(:not([vertical])) {
        height: 20px;
        width: 100%;
        margin: -10px 0;
      }

      :host([vertical]) {
        height: 100%;
        width: 20px;
        margin: 0 -10px;
      }

      #button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 1;
        outline: 0;
        transition: opacity 0.24s;
        display: inline-flex;
        width: 100%;
        border: none;
        height: 100%;
        padding: 0;

        text-decoration: none;
        background: transparent;
        color: currentColor;

        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;

        opacity: 0;
      }

      :host(:focus) #button-wrapper,
      :host(:focus-within) #button-wrapper,
      :host(:hover) #button-wrapper {
        opacity: 1;
      }

      :host(:focus) #button-wrapper:before,
      :host(:focus-within) #button-wrapper:before,
      :host(:hover) #button-wrapper:before {
        animation: ${Rd};
        background-color: var(--uui-color-interactive-emphasis,#3544b1);
        border-color: var(--uui-color-surface,#fff) !important;
      }

      #button-wrapper:before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        height: 2px;
        background-color: transparent;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        border-radius: 2px;
        pointer-events: none;
        transition:
          background-color 720ms ease-out,
          border-color 240ms;
      }

      :host(:not([vertical])) #button-wrapper:before {
        top: 50%;
        transform: translateY(-50%);
      }

      :host([vertical]) #button-wrapper:before {
        height: 100%;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        border-top: none;
        border-bottom: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      }

      :host(:not([vertical]):not(:hover)) #plus:not(:focus) {
        left: calc(50% - 2px) !important;
      }

      :host([vertical]:not(:hover)) #plus:not(:focus) {
        top: calc(50% - 2px) !important;
      }

      #plus {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        box-sizing: border-box;
        width: 28px;
        height: 28px;
        border-radius: 3em;
        font-size: 14px;
        border: 2px solid var(--uui-color-interactive-emphasis,#3544b1);
        color: var(--uui-color-interactive-emphasis,#3544b1);
        background-color: var(--uui-color-surface,#fff);

        opacity: 0;
        transform: scale(0);
        transition:
          transform 240ms ease-in,
          opacity 240ms,
          left 100ms linear 150ms,
          top 100ms linear 150ms;
      }
      :host(:focus) #plus,
      :host(:focus-within) #plus,
      :host(:hover) #plus {
        opacity: 1;
        transform: scale(1);
        transition:
          transform 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 80ms,
          box-shadow 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 0 2px var(--uui-color-surface,#fff);
      }

      :host(:not([vertical])) #plus {
        margin-left: -18px;
      }

      :host([vertical]) #plus {
        left: -4px;
        margin-top: -18px;
      }

      #button-wrapper:focus #plus {
        /* TODO: implement focus outline system */
        border: 2px solid var(--uui-color-focus,#3879ff);
        color: var(--uui-color-focus,#3879ff);
      }

      #plus-icon {
        width: 50%;
        fill: currentColor;
      }

      #button-wrapper:active #plus {
        transform: scale(1.1);
      }
    `],Xt([_()],Be.prototype,"_position",2),Xt([a({type:String})],Be.prototype,"label",2),Xt([a({type:Boolean,reflect:!0})],Be.prototype,"vertical",2),Xt([a({type:String})],Be.prototype,"href",2),Xt([a({type:String})],Be.prototype,"target",2),Xt([a({type:String})],Be.prototype,"rel",2),Be=Xt([v("uui-button-inline-create")],Be);class Yd{constructor(t,i){this._callback=t,this._timerId=null,this._remaining=null,this._onComplete=()=>{this._remaining=null,this._callback()},this.setDuration(i)}setDuration(t){this._duration=t,this._timerId!==null&&this.restart()}start(){this._timerId===null&&this.resume()}restart(){this._remaining=this._duration,this.resume()}pause(){this._timerId!==null&&(window.clearTimeout(this._timerId),this._timerId=null,this._remaining!==null&&(this._remaining-=Date.now()-this._startTime))}resume(){this._timerId!==null&&window.clearTimeout(this._timerId),this._remaining===null&&(this._remaining=this._duration),this._startTime=Date.now(),this._timerId=window.setTimeout(this._onComplete,this._remaining)}destroy(){this.pause()}}const x=(e,t,i=`This element has to be present for ${e.nodeName} to work appropriate.`)=>{customElements.get(t)||console.warn(`%c ${e.nodeName} requires ${t} element to be registered!`,"font-weight: bold;",i,e)},Ol=(e,t)=>{function i(r){const s=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,u=s.left+n.scrollX,c=s.top+n.scrollY;let p;if("TouchEvent"in window&&r instanceof TouchEvent)p=r.touches[0];else if(r instanceof MouseEvent)p=r;else return;const f=p.pageX-u,h=p.pageY-c;t?.onMove&&t.onMove(f,h)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),t?.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),t?.initialEvent&&i(t.initialEvent)},M=(e,t,i)=>Math.min(Math.max(e,t),i),Il=(e,t,i)=>i+t-e,Zd=(e,t,i)=>{let o=e;for(;o!==null;){const r=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===i,s=o.querySelector(`[${t}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${t}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};function Qd(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`;const zo=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`;const Jd=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`;const ep=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`;const tp=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`;const pn=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`;const ip=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`;const rp=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`;const op=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,sp=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`;const np=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;var ap=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,Al=e=>{throw TypeError(e)},Ae=(e,t,i,o)=>{for(var r=o>1?void 0:o?lp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ap(t,i,r),r},Ul=(e,t,i)=>t.has(e)||Al("Cannot "+i),up=(e,t,i)=>(Ul(e,t,"read from private field"),t.get(e)),cp=(e,t,i)=>t.has(e)?Al("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),hp=(e,t,i,o)=>(Ul(e,t,"write to private field"),t.set(e,i),i),Mo;let se=class extends Ne(Te("",Sd(g))){constructor(){super(),this.type="button",this.disabled=!1,this.look="default",this.color="default",this.compact=!1,this.state=void 0,cp(this,Mo),this.addEventListener("click",this._onHostClick)}getFormElement(){return this._button}async focus(){await this.updateComplete,this._button.focus()}async blur(){await this.updateComplete,this._button.blur()}async click(){await this.updateComplete,this._button.click()}_onHostClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this._internals?.form)switch(this.type){case"reset":this._internals.form.reset();break;case"button":break;default:this._internals.form.requestSubmit?this._internals.form.requestSubmit():this._internals.form.dispatchEvent(new SubmitEvent("submit"));break}this._togglePopover()}updated(e){super.updated(e),e.has("state")&&(clearTimeout(up(this,Mo)),(this.state==="success"||this.state==="failed")&&hp(this,Mo,setTimeout(()=>this.state=void 0,2e3)))}renderState(){let e;switch(this.state){case"waiting":x(this,"uui-loader-circle"),e=l`<uui-loader-circle id="loader"></uui-loader-circle>`;break;case"success":x(this,"uui-icon"),e=l`<uui-icon
          name="check"
          .fallback=${zo.strings[0]}></uui-icon>`;break;case"failed":x(this,"uui-icon"),e=l`<uui-icon
          name="wrong"
          .fallback=${np.strings[0]}></uui-icon>`;break;default:return k}return l`<div id="state">${e}</div>`}render(){return this.href?l`
          <a
            id="button"
            aria-label=${w(this.label)}
            href=${w(this.disabled?void 0:this.href)}
            target=${w(this.target||void 0)}
            rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:l`
          <button
            id="button"
            type=${this.type}
            ?disabled=${this.disabled}
            aria-label=${w(this.label)}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};Mo=new WeakMap,se.styles=[Oo,b`
      :host {
        position: relative;
        display: inline-flex;
        margin-left: calc(var(--uui-button-merge-border-left, 0) * -1px);
        --uui-button-padding-left-factor: 3;
        --uui-button-padding-right-factor: 3;
        --uui-button-padding-top-factor: 1;
        --uui-button-padding-bottom-factor: 1;

        min-height: var(--uui-button-height, var(--uui-size-11,33px));
        max-height: 100%;
        cursor: pointer;

        text-align: center;
        font-size: var(--uui-button-font-size, inherit);
        font-weight: var(--uui-button-font-weight, 500);
        transition:
          background-color 80ms,
          border-color 80ms,
          color 80ms;
      }

      :host([compact]) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-top-factor: 0;
        --uui-button-padding-bottom-factor: 0;
      }

      .label {
        line-height: 1; /** needed to reset 'a > span' */
        transition: opacity 120ms;
        display: flex;
        gap: var(--uui-size-1,3px);
        align-items: center;
      }

      :host([state]:not([state=''])) .label {
        opacity: 0;
      }

      #state {
        position: absolute;
        opacity: 0;
        animation-name: fadeIn;
        animation-delay: 40ms;
        animation-duration: 360ms;
        animation-fill-mode: forwards;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center;
      }

      #button {
        width: 100%;
        background-color: transparent;
        color: inherit;
        font-size: inherit;
        border-radius: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        border: none;
        cursor: inherit;

        display: inline-flex;
        align-items: center;
        justify-content: var(--uui-button-content-align, center);

        /* for anchor tag: */
        text-decoration: none;
        color: currentColor;
        line-height: inherit;

        border-width: var(--uui-button-border-width, 1px);
        border-style: solid;
        border-radius: var(
          --uui-button-border-radius,
          var(--uui-border-radius,3px)
        );
        cursor: pointer;

        padding: calc(var(--uui-size-2,6px) * var(--uui-button-padding-top-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-right-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-bottom-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-left-factor));

        box-shadow: none;

        transition: var(--uui-button-transition, none);
      }

      #button:focus-visible {
        outline: 2px solid var(--color-emphasis);
      }

      button[disabled]:active,
      a:not([href]):active {
        animation: ${Io};
      }

      /* ANIMATIONS */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      #icon-check,
      #icon-wrong {
        display: grid;
        place-items: center;
        width: 1.5em;
      }

      #loader {
        font-size: 1.5em;
      }
      :host([look]:not([look=''])) #loader {
        color: inherit;
      }

      /* edge case for default color */
      :host(:not([color]):not([look='primary'])),
      :host([color='']:not([look='primary'])),
      :host([color='default']:not([look='primary'])) {
        --uui-button-contrast-hover: var(--uui-color-default-emphasis,#3544b1);
      }

      :host([color='warning'][look='outline']) #button,
      :host([color='warning'][look='placeholder']) #button {
        --uui-button-contrast-hover: var(--color-standalone);
      }

      /** Button color attribute: */
      #button {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-emphasis: var(--uui-color-default-emphasis,#3544b1);
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) #button {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-emphasis: var(--uui-color-positive-emphasis,rgb(
    13,
    155,
    98
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) #button {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-emphasis: var(--uui-color-warning-emphasis,rgb(
    251,
    224,
    101
  ));
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) #button {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-danger-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) #button {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }
      :host([disabled]) #button {
        --color: var(--uui-color-disabled,#f3f3f5);
        --color-standalone: var(--uui-color-disabled-contrast,#c4c4c4);
        --color-emphasis: var(--uui-color-disabled,#f3f3f5);
        --color-contrast: var(--uui-color-disabled-contrast,#c4c4c4);

        cursor: default;
      }

      /** Button look attribute: */
      /* DEFAULT */
      #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);
      }
      :host(:not([disabled]):hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, transparent);
      }

      /* PRIMARY */
      :host([look='primary']) #button {
        background-color: var(--uui-button-background-color, var(--color));
        color: var(--uui-button-contrast, var(--color-contrast));
        border-color: var(--uui-button-border-color, transparent);

        /* special for primary: */
        font-weight: var(--uui-button-font-weight, 700);
      }

      :host([look='primary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--color-emphasis)
        );
        color: var(--uui-button-contrast-hover, var(--color-contrast));
        border-color: var(--uui-button-border-color-hover, transparent);
      }

      /* special outline offset tof primary style so you can see the outline */
      :host([look='primary']) #button:focus-visible {
        outline-offset: 2px;
      }

      :host([look='primary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }
      /* SECONDARY */
      :host([look='secondary']) #button {
        background-color: var(
          --uui-button-background-color,
          var(--uui-color-surface-alt,#f3f3f5)
        );
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);

        /* special for secondary: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='secondary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([look='secondary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }

      /* OUTLINE */
      :host([look='outline']) #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );

        /* special for outline: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='outline']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='outline'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }

      /* PLACEHOLDER */
      :host([look='placeholder']) #button {
        border-style: dashed;
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      :host([look='placeholder']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='placeholder'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }
    `],Ae([a({type:String,reflect:!0})],se.prototype,"type",2),Ae([a({type:Boolean,reflect:!0})],se.prototype,"disabled",2),Ae([a({reflect:!0})],se.prototype,"look",2),Ae([a({reflect:!0})],se.prototype,"color",2),Ae([a({type:Boolean,reflect:!0})],se.prototype,"compact",2),Ae([a({type:String,reflect:!0})],se.prototype,"state",2),Ae([a({type:String})],se.prototype,"href",2),Ae([a({type:String})],se.prototype,"target",2),Ae([a({type:String})],se.prototype,"rel",2),Ae([O("#button")],se.prototype,"_button",2),se=Ae([v("uui-button")],se);class Yt extends A{constructor(){super(...arguments),this.text=null}}Yt.COPIED="copied",Yt.COPYING="copying";var dp=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,zl=e=>{throw TypeError(e)},Do=(e,t,i,o)=>{for(var r=o>1?void 0:o?pp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&dp(t,i,r),r},Ml=(e,t,i)=>t.has(e)||zl("Cannot "+i),vn=(e,t,i)=>(Ml(e,t,"read from private field"),i?i.call(e):t.get(e)),Dl=(e,t,i)=>t.has(e)?zl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),vp=(e,t,i,o)=>(Ml(e,t,"write to private field"),t.set(e,i),i),kr,fn;let Zt=class extends se{constructor(){super(),this.text="",this.copyFrom="",this.animationStateDelay=250,Dl(this,kr),Dl(this,fn,async()=>{this.state="waiting";let e=this.text;if(this.copyFrom){const i=document.getElementById(this.copyFrom);if(i)"value"in i?e=i.value:e=i.textContent??i.innerText??"";else{console.error(`Element ID ${this.copyFrom} not found to copy from`),this.state="failed";return}}const t=new Yt(Yt.COPYING);t.text=e,this.dispatchEvent(t),t.text!=null&&(e=t.text);try{await navigator.clipboard.writeText(e);const i=new Yt(Yt.COPIED);i.text=e,this.dispatchEvent(i),vp(this,kr,setTimeout(()=>{this.state="success"},this.animationStateDelay))}catch(i){this.state="failed",console.error("Error copying to clipboard",i)}}),x(this,"uui-icon"),this.addEventListener("click",vn(this,fn))}disconnectedCallback(){super.disconnectedCallback(),vn(this,kr)&&clearTimeout(vn(this,kr))}renderLabel(){return l`
      <slot class="label">
        <uui-icon name="copy"></uui-icon>
      </slot>
    `}};kr=new WeakMap,fn=new WeakMap,Zt.styles=se.styles,Do([a({type:String})],Zt.prototype,"text",2),Do([a({type:String,attribute:"copy-from"})],Zt.prototype,"copyFrom",2),Do([a({type:Number,attribute:"animation-state-delay"})],Zt.prototype,"animationStateDelay",2),Zt=Do([v("uui-button-copy-text")],Zt);class Si extends A{}Si.OPEN="open";var fp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,Oi=(e,t,i,o)=>{for(var r=o>1?void 0:o?bp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&fp(t,i,r),r};let ee=class extends Eo(xi(g)){constructor(){super(...arguments),this.disabled=!1,this.error=!1}handleOpenClick(e){this.disabled||(e.stopPropagation(),this.dispatchEvent(new Si(Si.OPEN)))}handleOpenKeydown(e){this.disabled||e.key==="Enter"&&(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Si(Si.OPEN)))}render(){return l`<slot id="open-part"></slot>
      <div id="select-border"></div>`}};ee.styles=[mi,b`
      :host {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        border-radius: var(--uui-border-radius,3px);
        min-height: var(--uui-layout-medium);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-border-width: 3px;
        transition: box-shadow 100ms ease-out;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host() * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([error])::before {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        box-sizing: border-box;
        border: var(--uui-card-border-width) solid var(--uui-color-invalid,#d42054);
        border-radius: var(--uui-border-radius,3px);
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }

      a {
        text-decoration: none;
        color: inherit;
        line-height: initial;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disabled]) {
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `],Oi([a({type:Boolean,reflect:!0,attribute:"disabled"})],ee.prototype,"disabled",2),Oi([a({type:Boolean,reflect:!0})],ee.prototype,"error",2),Oi([a({type:String})],ee.prototype,"href",2),Oi([a({type:String})],ee.prototype,"target",2),Oi([a({type:String})],ee.prototype,"rel",2),ee=Oi([v("uui-card")],ee);var gp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,Ll=e=>{throw TypeError(e)},Lo=(e,t,i,o)=>{for(var r=o>1?void 0:o?mp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&gp(t,i,r),r},_p=(e,t,i)=>t.has(e)||Ll("Cannot "+i),yp=(e,t,i)=>t.has(e)?Ll("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Cr=(e,t,i)=>(_p(e,t,"access private method"),i),Qt,Tl,Nl,Vl,bn;let Jt=class extends ee{constructor(){super(...arguments),yp(this,Qt),this.name=""}get background(){}set background(e){this.style.backgroundColor=e??""}render(){return l`
      ${Cr(this,Qt,Vl).call(this)}
      ${this.href?Cr(this,Qt,Nl).call(this):Cr(this,Qt,Tl).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Qt=new WeakSet,Tl=function(){return l`
      <button
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?k:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${Cr(this,Qt,bn).call(this)}
      </button>
    `},Nl=function(){return l`
      <a
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?k:"0"}
        href=${w(this.disabled?void 0:this.href)}
        target=${w(this.target||void 0)}
        rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${Cr(this,Qt,bn).call(this)}
      </a>
    `},Vl=function(){return l`<div id="portrait">
      <slot></slot>
    </div> `},bn=function(){return l`
      <div id="content">
        <span title="${this.name}" id="name">${this.name}</span>
        <small title="${this.description}">${this.description}<slot name="description"></slot></small>
      </div></div>
    `},Jt.styles=[...ee.styles,b`
      :host {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #portrait {
        display: flex;
        justify-content: center;
        min-height: 150px;
        max-height: 150px;
        width: 100%;
        margin-bottom: var(--uui-size-layout-2,30px);
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
        font-size: var(--uui-size-8,24px);
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }
      #open-part #name,
      #open-part small {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }
    `],Lo([a({type:String})],Jt.prototype,"name",2),Lo([a({type:String})],Jt.prototype,"description",2),Lo([a({type:String,attribute:"background"})],Jt.prototype,"background",1),Jt=Lo([v("uui-card-block-type")],Jt);var wp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,Bl=e=>{throw TypeError(e)},To=(e,t,i,o)=>{for(var r=o>1?void 0:o?xp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&wp(t,i,r),r},$p=(e,t,i)=>t.has(e)||Bl("Cannot "+i),kp=(e,t,i)=>t.has(e)?Bl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),No=(e,t,i)=>($p(e,t,"access private method"),i),Ii,gn,Hl,jl;let ei=class extends ee{constructor(){super(...arguments),kp(this,Ii),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`}_onSlotIconChange(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}_renderFallbackIcon(){return x(this,"uui-icon"),l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`}renderDetail(){return l`<small id="detail"
        >${this.detail}<slot name="detail"></slot></small
      ><slot id="default"></slot>`}render(){return l`
      ${this.href?No(this,Ii,jl).call(this):No(this,Ii,Hl).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Ii=new WeakSet,gn=function(){return l`
      <span id="content" class="uui-text">
        <span id="item">
          <span id="icon">
            <slot name="icon" @slotchange=${this._onSlotIconChange}></slot>
            ${this._iconSlotHasContent===!1?this._renderFallbackIcon():""}
          </span>
          <div title="${this.name}" id="name">
            ${this.name}<slot name="name"></slot>
          </div>
        </span>
        ${this.renderDetail()}
      </span>
    `},Hl=function(){return l`<button
      id="open-part"
      tabindex=${this.disabled?k:0}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${No(this,Ii,gn).call(this)}
    </button>`},jl=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?k:0}
      href=${w(this.disabled?void 0:this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${No(this,Ii,gn).call(this)}
    </a>`},ei.styles=[...ee.styles,b`
      :host {
        min-width: 250px;
        flex-direction: column;
        justify-content: space-between;
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name]) {
        display: block;
        margin: var(--uui-size-1,3px);
        margin-top: var(--uui-size-3,9px);
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: calc(2 * var(--uui-size-3,9px));
      }

      #open-part {
        display: flex;
        position: relative;
        align-items: center;
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      #content {
        align-self: stretch;
        display: flex;
        flex-direction: column;
      }

      #item {
        position: relative;
        display: flex;
        align-self: stretch;
        line-height: normal;
        align-items: center;
        margin-top: var(--uui-size-1,3px);
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      :host([disabled]) #name {
        pointer-events: none;
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #default {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
    `],To([a({type:String})],ei.prototype,"name",2),To([a({type:String})],ei.prototype,"detail",2),To([_()],ei.prototype,"_iconSlotHasContent",2),ei=To([v("uui-card-content-node")],ei);var Cp=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,Rl=e=>{throw TypeError(e)},Er=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ep(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Cp(t,i,r),r},Pp=(e,t,i)=>t.has(e)||Rl("Cannot "+i),Sp=(e,t,i)=>t.has(e)?Rl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Vo=(e,t,i)=>(Pp(e,t,"access private method"),i),Ai,Wl,Fl,mn;let Et=class extends ee{constructor(){super(...arguments),Sp(this,Ai),this.name="",this.fileExt="",this.hasPreview=!1}connectedCallback(){super.connectedCallback(),x(this,"uui-symbol-folder"),x(this,"uui-symbol-file")}queryPreviews(e){this.hasPreview=e.composedPath()[0].assignedElements({flatten:!0}).length>0}renderMedia(){return this.hasPreview===!0?"":this.fileExt===""?l`<uui-symbol-folder id="entity-symbol"></uui-symbol-folder>`:l`<uui-symbol-file
      id="entity-symbol"
      type="${this.fileExt}"></uui-symbol-file>`}render(){return l` ${this.renderMedia()}
      <slot @slotchange=${this.queryPreviews}></slot>
      ${this.href?Vo(this,Ai,Fl).call(this):Vo(this,Ai,Wl).call(this)}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>`}};Ai=new WeakSet,Wl=function(){return l`
      <button
        id="open-part"
        tabindex=${this.disabled?k:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${Vo(this,Ai,mn).call(this)}
      </button>
    `},Fl=function(){return l`
      <a
        id="open-part"
        tabindex=${this.disabled?k:"0"}
        href=${w(this.disabled?void 0:this.href)}
        target=${w(this.target||void 0)}
        rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${Vo(this,Ai,mn).call(this)}
      </a>
    `},mn=function(){return l`
      <div id="content" class="uui-text">
        <!--
        TODO: Implement info box when pop-out is ready
        -->
        <span id="name" title="${this.name}">${this.name}</span>
        <small id="detail">${this.detail}<slot name="detail"></slot></small>
      </div>
    `},Et.styles=[...ee.styles,b`
      #entity-symbol {
        align-self: center;
        width: 60%;
        margin-bottom: var(--uui-size-layout-1,24px);
        padding: var(--uui-size-space-6,24px);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: column;
        font-family: inherit;
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      #detail {
        opacity: 0.6;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }

      /*
      #info-icon {
        margin-right: var(--uui-size-2);
        display: flex;
        height: var(--uui-size-8);
      }
      */
    `],Er([a({type:String})],Et.prototype,"name",2),Er([a({type:String})],Et.prototype,"detail",2),Er([a({type:String,attribute:"file-ext"})],Et.prototype,"fileExt",2),Er([_()],Et.prototype,"hasPreview",2),Et=Er([v("uui-card-media")],Et);var Op=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Gl=e=>{throw TypeError(e)},_n=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ip(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Op(t,i,r),r},Ap=(e,t,i)=>t.has(e)||Gl("Cannot "+i),Up=(e,t,i)=>t.has(e)?Gl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Bo=(e,t,i)=>(Ap(e,t,"access private method"),i),Ui,ql,Kl,yn;let zi=class extends ee{constructor(){super(...arguments),Up(this,Ui),this.name="",this._avatarSlotHasContent=!1,this._avatarSlotChanged=e=>{this._avatarSlotHasContent=Qd(e.target)}}connectedCallback(){super.connectedCallback(),x(this,"uui-avatar")}render(){return l`
      ${this.href?Bo(this,Ui,Kl).call(this):Bo(this,Ui,ql).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Ui=new WeakSet,ql=function(){return l`<div
      id="open-part"
      tabindex=${this.disabled?k:"0"}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${Bo(this,Ui,yn).call(this)}
    </div>`},Kl=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?k:"0"}
      href=${w(this.disabled?void 0:this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Bo(this,Ui,yn).call(this)}
    </a>`},yn=function(){return l`<div id="content">
      ${this._avatarSlotHasContent?k:l`<uui-avatar
            class="avatar"
            name=${this.name}
            size="m"></uui-avatar>`}
      <slot
        name="avatar"
        class="avatar"
        @slotchange=${this._avatarSlotChanged}></slot>
      <span title="${this.name}">${this.name}</span>
      <slot></slot>
    </div>`},zi.styles=[...ee.styles,b`
      :host {
        min-width: 250px;
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: var(--uui-size-6,18px);
      }

      ::slotted(*) {
        text-align: center;
      }

      slot[name='tag'] {
        position: absolute;
        top: 6px;
        right: 6px;
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-space-4,12px);
        right: var(--uui-size-space-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #open-part {
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      :host([disabled]) #open-part {
        pointer-events: none;
      }

      #open-part:hover #content {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #content > span {
        text-decoration: underline;
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      #content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        margin: 0 0 3px 0;
        height: 100%;
      }

      #content > span {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: center;
        margin-top: 3px;
        font-weight: 700;
        overflow-wrap: anywhere;
      }

      .avatar {
        font-size: 1.5em;
        margin-top: var(--uui-size-space-1,3px);
        margin-bottom: var(--uui-size-space-2,6px);
      }
    `],_n([a({type:String})],zi.prototype,"name",2),_n([_()],zi.prototype,"_avatarSlotHasContent",2),zi=_n([v("uui-card-user")],zi);var zp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,Xl=(e,t,i,o)=>{for(var r=o>1?void 0:o?Mp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&zp(t,i,r),r};let Pr=class extends g{constructor(){super(),this.open=!1,console.error("\xB4uui-caret\xB4 is deprecated, please use \xB4uui-symbol-expand\xB4 or \xB4uui-symbol-sort\xB4")}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};Pr.styles=[b`
      :host {
        display: inline-block;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);

      :host([open]) svg {
        transform: rotate(180deg);
      }
    `],Xl([a({type:Boolean,reflect:!0})],Pr.prototype,"open",2),Pr=Xl([v("uui-caret")],Pr);var Dp=Object.getOwnPropertyDescriptor,Lp=(e,t,i,o)=>{for(var r=o>1?void 0:o?Dp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Sr=class extends ke{renderCheckbox(){return l`
      <div id="ticker">
        <div id="icon-check">
          ${this.indeterminate?rp:zo}
        </div>
      </div>
    `}};Sr.formAssociated=!0,Sr.styles=[...ke.styles,Oo,b`
      :host {
        --uui-checkbox-size: 18px;
      }

      #ticker {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        box-sizing: border-box;
        width: var(--uui-checkbox-size);
        height: var(--uui-checkbox-size);
        border-radius: var(
          --uui-checkbox-border-radius,
          var(--uui-border-radius,3px)
        );

        color: var(--uui-toggle-color, var(--uui-color-selected-contrast,#fff));
        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid
          var(--uui-checkbox-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-checkbox-size) * 0.7);
      }
      label:hover input:not([disabled]) + #ticker {
        border-color: var(
          --uui-checkbox-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      label:focus #ticker {
        border-color: var(
          --uui-checkbox-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      input:checked:not([disabled]) + #ticker,
      input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) + #ticker,
      label:hover input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      #icon-check {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition:
          fill 120ms,
          opacity 120ms;
        color: var(--uui-color-selected-contrast,#fff);
        opacity: 0;
      }

      #ticker::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: calc(
          var(--uui-checkbox-border-radius, var(--uui-border-radius,3px)) * 0.5
        );
        background-color: var(--uui-color-selected,#3544b1);
        transition:
          transform 120ms ease,
          opacity 120ms,
          background-color 120ms;
        transform: scale(0);
        opacity: 0;
      }
      label:hover input:checked:not([disabled]) + #ticker::before,
      label:hover input:indeterminate:not([disabled]) + #ticker::before {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:checked + #ticker::before,
      input:indeterminate + #ticker::before {
        transform: scale(1);
        opacity: 1;
      }
      input:checked + #ticker #icon-check,
      input:indeterminate + #ticker #icon-check {
        opacity: 1;
      }
      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:focus + #ticker {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:checked
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:indeterminate
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([pristine]):invalid) #ticker,
      :host(:not([pristine]):invalid) label:hover #ticker,
      :host(:not([pristine]):invalid) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:focus input:checked + #ticker,
      :host(:not([pristine]):invalid) label:focus input:indeterminate + #ticker,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:checked + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:indeterminate + #ticker {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }

      :host([disabled]) #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:checked + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:indeterminate + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker::before {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #ticker {
        animation: ${Io};
      }
      :host([disabled]) input:checked + #ticker #icon-check,
      :host([disabled]) input:indeterminate + #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `],Sr=Lp([v("uui-checkbox")],Sr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wn=Ci(class extends Ei{constructor(e){if(super(e),e.type!==Ie.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const i=e.element.classList;for(const o of this.st)o in t||(i.remove(o),this.st.delete(o));for(const o in t){const r=!!t[o];r===this.st.has(o)||this.nt?.has(o)||(r?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return de}});var Tp={grad:.9,turn:360,rad:360/(2*Math.PI)},et=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Y=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},Ce=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},Yl=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Zl=function(e){return{r:Ce(e.r,0,255),g:Ce(e.g,0,255),b:Ce(e.b,0,255),a:Ce(e.a)}},xn=function(e){return{r:Y(e.r),g:Y(e.g),b:Y(e.b),a:Y(e.a,3)}},Np=/^#([0-9a-f]{3,8})$/i,Ho=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Ql=function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=Math.max(t,i,o),n=s-Math.min(t,i,o),u=n?s===t?(i-o)/n:s===i?2+(o-t)/n:4+(t-i)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:r}},Jl=function(e){var t=e.h,i=e.s,o=e.v,r=e.a;t=t/360*6,i/=100,o/=100;var s=Math.floor(t),n=o*(1-i),u=o*(1-(t-s)*i),c=o*(1-(1-t+s)*i),p=s%6;return{r:255*[o,u,n,n,c,o][p],g:255*[c,o,o,u,n,n][p],b:255*[n,n,c,o,o,u][p],a:r}},eu=function(e){return{h:Yl(e.h),s:Ce(e.s,0,100),l:Ce(e.l,0,100),a:Ce(e.a)}},tu=function(e){return{h:Y(e.h),s:Y(e.s),l:Y(e.l),a:Y(e.a,3)}},iu=function(e){return Jl((i=(t=e).s,{h:t.h,s:(i*=((o=t.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:t.a}));var t,i,o},Or=function(e){return{h:(t=Ql(e)).h,s:(r=(200-(i=t.s))*(o=t.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,o,r},Vp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Bp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Hp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,jp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ru={string:[[function(e){var t=Np.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Y(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Y(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Hp.exec(e)||jp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Zl({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Vp.exec(e)||Bp.exec(e);if(!t)return null;var i,o,r=eu({h:(i=t[1],o=t[2],o===void 0&&(o="deg"),Number(i)*(Tp[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return iu(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=r===void 0?1:r;return et(t)&&et(i)&&et(o)?Zl({r:Number(t),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,o=e.l,r=e.a,s=r===void 0?1:r;if(!et(t)||!et(i)||!et(o))return null;var n=eu({h:Number(t),s:Number(i),l:Number(o),a:Number(s)});return iu(n)},"hsl"],[function(e){var t=e.h,i=e.s,o=e.v,r=e.a,s=r===void 0?1:r;if(!et(t)||!et(i)||!et(o))return null;var n=function(u){return{h:Yl(u.h),s:Ce(u.s,0,100),v:Ce(u.v,0,100),a:Ce(u.a)}}({h:Number(t),s:Number(i),v:Number(o),a:Number(s)});return Jl(n)},"hsv"]]},ou=function(e,t){for(var i=0;i<t.length;i++){var o=t[i][0](e);if(o)return[o,t[i][1]]}return[null,void 0]},Rp=function(e){return typeof e=="string"?ou(e.trim(),ru.string):typeof e=="object"&&e!==null?ou(e,ru.object):[null,void 0]},$n=function(e,t){var i=Or(e);return{h:i.h,s:Ce(i.s+100*t,0,100),l:i.l,a:i.a}},kn=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},su=function(e,t){var i=Or(e);return{h:i.h,s:i.s,l:Ce(i.l+100*t,0,100),a:i.a}},nu=function(){function e(t){this.parsed=Rp(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Y(kn(this.rgba),2)},e.prototype.isDark=function(){return kn(this.rgba)<.5},e.prototype.isLight=function(){return kn(this.rgba)>=.5},e.prototype.toHex=function(){return t=xn(this.rgba),i=t.r,o=t.g,r=t.b,n=(s=t.a)<1?Ho(Y(255*s)):"","#"+Ho(i)+Ho(o)+Ho(r)+n;var t,i,o,r,s,n},e.prototype.toRgb=function(){return xn(this.rgba)},e.prototype.toRgbString=function(){return t=xn(this.rgba),i=t.r,o=t.g,r=t.b,(s=t.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var t,i,o,r,s},e.prototype.toHsl=function(){return tu(Or(this.rgba))},e.prototype.toHslString=function(){return t=tu(Or(this.rgba)),i=t.h,o=t.s,r=t.l,(s=t.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var t,i,o,r,s},e.prototype.toHsv=function(){return t=Ql(this.rgba),{h:Y(t.h),s:Y(t.s),v:Y(t.v),a:Y(t.a,3)};var t},e.prototype.invert=function(){return Ee({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Ee($n(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Ee($n(this.rgba,-t))},e.prototype.grayscale=function(){return Ee($n(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Ee(su(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Ee(su(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Ee({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):Y(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=Or(this.rgba);return typeof t=="number"?Ee({h:t,s:i.s,l:i.l,a:i.a}):Y(i.h)},e.prototype.isEqual=function(t){return this.toHex()===Ee(t).toHex()},e}(),Ee=function(e){return e instanceof nu?e:new nu(e)};class jo extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}jo.CHANGE="change";var Wp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,He=(e,t,i,o)=>{for(var r=o>1?void 0:o?Fp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Wp(t,i,r),r};let be=class extends g{constructor(){super(...arguments),this.isDraggingGridHandle=!1,this.disabled=!1,this.readonly=!1,this.hue=0,this.saturation=0,this.lightness=0,this.brightness=0,this.alpha=100,this._value="#000"}get value(){return this._value}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t);try{const i=Ee(e);if(i.isValid()){const{h:o,s:r,l:s,a:n}=i.toHsl();o!==0&&(this.hue=o),this.lightness=s,this.saturation=r,this.brightness=this.getBrightness(s),this.alpha=n*100}}catch(i){console.error("Something went wrong parsing the color string.",i)}}handleGridDrag(e){if(this.disabled||this.readonly)return;const t=this.shadowRoot.querySelector(".color-area"),i=t.querySelector(".color-area__handle"),{width:o,height:r}=t.getBoundingClientRect();i.focus(),e.preventDefault(),e.stopPropagation(),this.isDraggingGridHandle=!0,Ol(t,{onMove:(s,n)=>{isNaN(s)||isNaN(n)||(this.saturation=M(s/o*100,0,100),this.brightness=M(100-n/r*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleGridKeyDown(e){if(this.disabled)return;const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=M(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=M(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=M(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=M(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}getBrightness(e){return M(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return M((200-this.saturation)*e/100*5/10,0,100)}syncValues(){const e=Ee({h:this.hue,s:this.saturation,l:this.lightness,a:this.alpha/100});this._value=e.toRgbString(),this.dispatchEvent(new jo(jo.CHANGE))}getHexString(e,t,i,o=100){const r=Ee(`hsla(${e}, ${t}%, ${i}%, ${o/100})`);return r.isValid()?r.toHex():""}render(){const e=this.saturation,t=100-this.brightness;return l`
      <div
        part="grid"
        class="color-area"
        style=${Je({backgroundColor:this.getHexString(this.hue,100,50)})}
        @mousedown=${this.handleGridDrag}
        @touchstart=${this.handleGridDrag}>
        <span
          part="grid-handle"
          class=${wn({"color-area__handle":!0,"color-area__handle--dragging":this.isDraggingGridHandle})}
          style=${Je({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.lightness,this.alpha)})}
          role="application"
          tabindex=${w(this.disabled?void 0:"0")}
          aria-label="HSB"
          @keydown=${this.handleGridKeyDown}></span>
      </div>
    `}};be.styles=[b`
      :host {
        display: inline-block;
        width: 280px;
        height: 200px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) .color-area {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        pointer-events: none;
        cursor: default;
      }

      .color-area {
        position: relative;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ),
          linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
        box-sizing: border-box;
        cursor: crosshair;
        forced-color-adjust: none;
      }
      .color-area__handle {
        position: absolute;
        width: var(--uui-color-area-grid-handle-size, 16px);
        height: var(--uui-color-area-grid-handle-size, 16px);
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        border: solid 2px white;
        margin-top: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        margin-left: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        transition: 150ms transform;
        box-sizing: inherit;
      }
      .color-area__handle--dragging {
        cursor: none;
        transform: scale(1.5);
      }
      .color-area__handle--empty {
        display: none;
      }
    `],He([_()],be.prototype,"isDraggingGridHandle",2),He([a({type:Boolean,reflect:!0})],be.prototype,"disabled",2),He([a({type:Boolean,reflect:!0})],be.prototype,"readonly",2),He([a({type:Number})],be.prototype,"hue",2),He([a({type:Number})],be.prototype,"saturation",2),He([a({type:Number})],be.prototype,"lightness",2),He([a({type:Number})],be.prototype,"brightness",2),He([a({type:Number})],be.prototype,"alpha",2),He([a({type:String})],be.prototype,"value",1),be=He([v("uui-color-area")],be);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Gp}=lh,au=e=>e.strings===void 0,lu=()=>document.createComment(""),Ir=(e,t,i)=>{const o=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(i===void 0){const s=o.insertBefore(lu(),r),n=o.insertBefore(lu(),r);i=new Gp(s,n,e,e.options)}else{const s=i._$AB.nextSibling,n=i._$AM,u=n!==e;if(u){let c;i._$AQ?.(e),i._$AM=e,i._$AP!==void 0&&(c=e._$AU)!==n._$AU&&i._$AP(c)}if(s!==r||u){let c=i._$AA;for(;c!==s;){const p=c.nextSibling;o.insertBefore(c,r),c=p}}}return i},ti=(e,t,i=e)=>(e._$AI(t,i),e),qp={},uu=(e,t=qp)=>e._$AH=t,Kp=e=>e._$AH,Cn=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xp=Ci(class extends Ei{constructor(e){if(super(e),e.type!==Ie.PROPERTY&&e.type!==Ie.ATTRIBUTE&&e.type!==Ie.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!au(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===de||t===k)return t;const i=e.element,o=e.name;if(e.type===Ie.PROPERTY){if(t===i[o])return de}else if(e.type===Ie.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return de}else if(e.type===Ie.ATTRIBUTE&&i.getAttribute(o)===t+"")return de;return uu(e),t}});var Yp={grad:.9,turn:360,rad:360/(2*Math.PI)},tt=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Z=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},Pe=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},cu=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},hu=function(e){return{r:Pe(e.r,0,255),g:Pe(e.g,0,255),b:Pe(e.b,0,255),a:Pe(e.a)}},En=function(e){return{r:Z(e.r),g:Z(e.g),b:Z(e.b),a:Z(e.a,3)}},Zp=/^#([0-9a-f]{3,8})$/i,Ro=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},du=function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=Math.max(t,i,o),n=s-Math.min(t,i,o),u=n?s===t?(i-o)/n:s===i?2+(o-t)/n:4+(t-i)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:r}},pu=function(e){var t=e.h,i=e.s,o=e.v,r=e.a;t=t/360*6,i/=100,o/=100;var s=Math.floor(t),n=o*(1-i),u=o*(1-(t-s)*i),c=o*(1-(1-t+s)*i),p=s%6;return{r:255*[o,u,n,n,c,o][p],g:255*[c,o,o,u,n,n][p],b:255*[n,n,c,o,o,u][p],a:r}},vu=function(e){return{h:cu(e.h),s:Pe(e.s,0,100),l:Pe(e.l,0,100),a:Pe(e.a)}},fu=function(e){return{h:Z(e.h),s:Z(e.s),l:Z(e.l),a:Z(e.a,3)}},bu=function(e){return pu((i=(t=e).s,{h:t.h,s:(i*=((o=t.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:t.a}));var t,i,o},Ar=function(e){return{h:(t=du(e)).h,s:(r=(200-(i=t.s))*(o=t.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,o,r},Qp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Jp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ev=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,tv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Pn={string:[[function(e){var t=Zp.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Z(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Z(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=ev.exec(e)||tv.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:hu({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Qp.exec(e)||Jp.exec(e);if(!t)return null;var i,o,r=vu({h:(i=t[1],o=t[2],o===void 0&&(o="deg"),Number(i)*(Yp[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return bu(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=r===void 0?1:r;return tt(t)&&tt(i)&&tt(o)?hu({r:Number(t),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,o=e.l,r=e.a,s=r===void 0?1:r;if(!tt(t)||!tt(i)||!tt(o))return null;var n=vu({h:Number(t),s:Number(i),l:Number(o),a:Number(s)});return bu(n)},"hsl"],[function(e){var t=e.h,i=e.s,o=e.v,r=e.a,s=r===void 0?1:r;if(!tt(t)||!tt(i)||!tt(o))return null;var n=function(u){return{h:cu(u.h),s:Pe(u.s,0,100),v:Pe(u.v,0,100),a:Pe(u.a)}}({h:Number(t),s:Number(i),v:Number(o),a:Number(s)});return pu(n)},"hsv"]]},gu=function(e,t){for(var i=0;i<t.length;i++){var o=t[i][0](e);if(o)return[o,t[i][1]]}return[null,void 0]},iv=function(e){return typeof e=="string"?gu(e.trim(),Pn.string):typeof e=="object"&&e!==null?gu(e,Pn.object):[null,void 0]},Sn=function(e,t){var i=Ar(e);return{h:i.h,s:Pe(i.s+100*t,0,100),l:i.l,a:i.a}},On=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},mu=function(e,t){var i=Ar(e);return{h:i.h,s:i.s,l:Pe(i.l+100*t,0,100),a:i.a}},Wo=function(){function e(t){this.parsed=iv(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Z(On(this.rgba),2)},e.prototype.isDark=function(){return On(this.rgba)<.5},e.prototype.isLight=function(){return On(this.rgba)>=.5},e.prototype.toHex=function(){return t=En(this.rgba),i=t.r,o=t.g,r=t.b,n=(s=t.a)<1?Ro(Z(255*s)):"","#"+Ro(i)+Ro(o)+Ro(r)+n;var t,i,o,r,s,n},e.prototype.toRgb=function(){return En(this.rgba)},e.prototype.toRgbString=function(){return t=En(this.rgba),i=t.r,o=t.g,r=t.b,(s=t.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var t,i,o,r,s},e.prototype.toHsl=function(){return fu(Ar(this.rgba))},e.prototype.toHslString=function(){return t=fu(Ar(this.rgba)),i=t.h,o=t.s,r=t.l,(s=t.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var t,i,o,r,s},e.prototype.toHsv=function(){return t=du(this.rgba),{h:Z(t.h),s:Z(t.s),v:Z(t.v),a:Z(t.a,3)};var t},e.prototype.invert=function(){return Ue({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Ue(Sn(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Ue(Sn(this.rgba,-t))},e.prototype.grayscale=function(){return Ue(Sn(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Ue(mu(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Ue(mu(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Ue({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):Z(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=Ar(this.rgba);return typeof t=="number"?Ue({h:t,s:i.s,l:i.l,a:i.a}):Z(i.h)},e.prototype.isEqual=function(t){return this.toHex()===Ue(t).toHex()},e}(),Ue=function(e){return e instanceof Wo?e:new Wo(e)},_u=[],rv=function(e){e.forEach(function(t){_u.indexOf(t)<0&&(t(Wo,Pn),_u.push(t))})};function ov(e,t){var i={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},o={};for(var r in i)o[i[r]]=r;var s={};e.prototype.toName=function(n){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var u,c,p=o[this.toHex()];if(p)return p;if(n?.closest){var f=this.toRgb(),h=1/0,E="black";if(!s.length)for(var d in i)s[d]=new e(i[d]).toRgb();for(var y in i){var I=(u=f,c=s[y],Math.pow(u.r-c.r,2)+Math.pow(u.g-c.g,2)+Math.pow(u.b-c.b,2));I<h&&(h=I,E=y)}return E}},t.string.push([function(n){var u=n.toLowerCase(),c=u==="transparent"?"#0000":i[u];return c?new e(c).toRgb():null},"name"])}class Mi extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Mi.CHANGE="change";var sv=Object.defineProperty,nv=Object.getOwnPropertyDescriptor,W=(e,t,i,o)=>{for(var r=o>1?void 0:o?nv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&sv(t,i,r),r};rv([ov]);const yu="EyeDropper"in window;let B=class extends Te("label",g){constructor(){super(...arguments),this._value="",this.inputValue="",this.hue=0,this.saturation=0,this.lightness=0,this.alpha=100,this._colord=Ue("hsl(0, 0%, 0%)"),this.format="hex",this.name="",this.size="medium",this.noFormatToggle=!1,this.inline=!1,this.disabled=!1,this.opacity=!1,this.readonly=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}set value(e){this.value!==e&&this.setColor(e),this._value=e}get value(){return this._value}connectedCallback(){super.connectedCallback(),x(this,"uui-icon"),x(this,"uui-icon-registry-essential"),x(this,"uui-input"),x(this,"uui-button"),x(this,"uui-button-group"),x(this,"uui-color-swatches"),x(this,"uui-color-swatch"),x(this,"uui-color-area"),x(this,"uui-color-slider"),x(this,"uui-popover-container")}getFormattedValue(e){const t=this.opacity?`${e}a`:e,i=this._colord.toHex(),o=i.length>7?i.substring(0,i.length-2):i,{r,g:s,b:n}=this._colord.toRgb(),{h:u,s:c,l:p}=this._colord.toHsl(),{v:f}=this._colord.toHsv(),h=this._colord.alpha();switch(t){case"hex":return this.setLetterCase(o);case"hexa":return this.setLetterCase(i);case"rgb":return this.setLetterCase(`rgb(${r}, ${s}, ${n})`);case"rgba":return this.setLetterCase(this._colord.toRgbString());case"hsl":return this.setLetterCase(`hsl(${u}, ${c}%, ${p}%)`);case"hsla":return this.setLetterCase(this._colord.toHslString());case"hsv":return this.setLetterCase(`hsv(${u}, ${c}%, ${p}%)`);case"hsva":return this.setLetterCase(`hsva(${u}, ${c}%, ${f}%, ${h})`);default:return""}}getBrightness(e){return M(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return M((200-this.saturation)*e/100*5/10,0,100)}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this._syncValues()}handleAlphaChange(e){e.stopPropagation(),this._swatches?.resetSelection();const t=e.target,i={h:this.hue,s:this.saturation,l:this.lightness,a:Math.round(t.value)/100};this.setColor(i)}handleHueChange(e){e.stopPropagation(),this._swatches?.resetSelection();const i={h:e.target.value,s:this.saturation,l:this.lightness,a:this.alpha/100};this.setColor(i)}handleGridChange(e){e.stopPropagation(),this._swatches?.resetSelection();const t=e.target,i={h:this.hue,s:t.saturation,l:t.lightness,a:this.alpha/100};this.setColor(i)}handleInputChange(e){e.stopImmediatePropagation(),this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue)}handleInputKeyDown(e){e.stopImmediatePropagation(),e.key==="Enter"&&(this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue),setTimeout(()=>this._input.select()))}handleColorSwatchChange(e){e.stopImmediatePropagation();const t=e.target;this.setColor(t.value)}handleCopy(){navigator.clipboard.writeText(this._input.value).then(()=>{this._previewButton.classList.add("color-picker__preview-color--copied"),this._previewButton.addEventListener("animationend",()=>{this._previewButton.classList.remove("color-picker__preview-color--copied")})})}handleEyeDropper(){if(!yu)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}setColor(e){if(e===this.value)return;if(!e)return this.alpha=100,this.inputValue="",this._value=e,this.dispatchEvent(new Mi(Mi.CHANGE)),!0;const t=new Wo(e),{h:i,s:o,l:r,a:s}=t.toHsl();this.hue=i,this.saturation=o,this.lightness=r,this.alpha=this.opacity?s*100:100;const n=e;return n&&n.h&&(this.hue=n.h),this._colord=t,this._syncValues(),this.dispatchEvent(new Mi(Mi.CHANGE)),!0}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}getHexString(e,t,i,o=100){const r=Ue(`hsla(${e}, ${t}%, ${i}%, ${o/100})`);return r.isValid()?r.toHex():""}_syncValues(){this.inputValue=this.getFormattedValue(this.format),this._value=this.inputValue}_renderColorPicker(){return l`
      <div
        class=${wn({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}>
        <uui-color-area
          .value="${this.value}"
          .hue="${Math.round(this.hue)}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.handleGridChange}>
        </uui-color-area>
        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <uui-color-slider
              label="hue"
              class="hue-slider"
              .value=${Math.round(this.hue)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              @change=${this.handleHueChange}>
            </uui-color-slider>
            ${this.opacity?l`
                  <uui-color-slider
                    label="alpha"
                    class="opacity-slider"
                    .value=${Math.round(this.alpha)}
                    type="opacity"
                    .color=${this.getHexString(this.hue,this.saturation,this.lightness)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.handleAlphaChange}>
                  </uui-color-slider>
                `:""}
          </div>
          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            title="Copy"
            aria-label="Copy"
            style=${Je({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
            @click=${this.handleCopy}></button>
        </div>
        <div class="color-picker__user-input" aria-live="polite">
          <uui-input
            label="label"
            type="text"
            part="input"
            name=${this.name}
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${Xp(this.inputValue)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}>
          </uui-input>
          <uui-button-group>
            ${this.noFormatToggle?"":l`<uui-button
                  label="Toggle color format"
                  @click=${this.handleFormatToggle}
                  class="color-picker__toggle-format"
                  ?disabled=${this.disabled}
                  compact>
                  <span>${this.format}</span>
                </uui-button>`}
            ${yu?l`<uui-button
                  label="Select a color"
                  ?disabled=${this.disabled||this.readonly}
                  @click=${this.handleEyeDropper}
                  compact>
                  <uui-icon-registry-essential>
                    <uui-icon name="colorpicker"></uui-icon>
                  </uui-icon-registry-essential>
                </uui-button>`:""}
          </uui-button-group>
        </div>
        ${this._renderSwatches()}
      </div>
    `}_renderSwatches(){return this.swatches?.length?l`<uui-color-swatches
      id="swatches"
      class="color-picker__swatches"
      label="Swatches"
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @change=${this.handleColorSwatchChange}>
      ${this.swatches.map(e=>l`<uui-color-swatch label="${e}" .value=${e}>
          </uui-color-swatch>`)}
    </uui-color-swatches>`:k}_renderPreviewButton(){return l`<button
        type="button"
        part="trigger"
        aria-label="${this.label||"Open Color picker"}"
        class=${wn({"color-picker__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-picker__transparent-bg":!0})}
        style=${Je({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
        ?disabled=${this.disabled}
        aria-haspopup="true"
        aria-expanded="false"
        popovertarget="color-picker-popover"></button>
      <uui-popover-container id="color-picker-popover">
        ${this._renderColorPicker()}
      </uui-popover-container>`}render(){return this.inline?this._renderColorPicker():this._renderPreviewButton()}};B.styles=[b`
      :host {
        --uui-look-outline-border: #ddd;
        --uui-look-outline-border-hover: #aaa;
        font-size: 0.8rem;
        color: var(--uui-color-text,#060606);
        display: block;
        width: var(--uui-color-picker-width, 280px);
      }
      :host > button {
        cursor: pointer;
      }
      uui-popover-container {
        width: inherit;
      }
      .color-picker {
        width: 100%;
        background-color: var(--uui-color-surface,#fff);
        user-select: none;
        border: solid 1px var(--uui-color-border,#d8d7d9);
      }
      .color-picker__user-input {
        display: flex;
        padding: 0 0.75rem 0.75rem 0.75rem;
      }
      .color-picker__user-input uui-button {
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-left: none;
      }
      .color-picker__preview,
      .color-picker__trigger {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 2.25rem;
        height: 2.25rem;
        border: none;
        border-radius: 50%;
        background: none;
      }
      .color-picker__preview {
        cursor: copy;
        margin-left: 0.75rem;
        border-radius: 50%;
      }
      .color-picker__trigger[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .color-picker__preview::before,
      .color-picker__trigger::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
        background-color: var(--preview-color);
      }

      .color-dropdown__trigger--empty::before {
        background-color: transparent;
      }

      .color-picker__transparent-bg {
        border: 1px solid var(--uui-color-border,#d8d7d9);
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }

      .color-picker__preview-color--copied {
        animation: pulse 0.75s;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 var(--uui-palette-space-cadet-light,rgb(
    38,
    53,
    110
  ));
        }
        70% {
          box-shadow: 0 0 0 0.5rem transparent;
        }
        100% {
          box-shadow: 0 0 0 0 transparent;
        }
      }

      .color-picker__controls {
        padding: 0.75rem;
        display: flex;
        align-items: center;
      }
      .color-picker__sliders {
        flex: 1 1 auto;
      }

      uui-color-slider:not(:last-of-type) {
        margin-bottom: 1rem;
      }

      .color-picker__toggle-format {
        min-width: 45px;
        --uui-button-font-size: 0.8rem;
      }
      .color-picker__toggle-format > span {
        text-transform: uppercase;
      }

      uui-color-swatches {
        border-top: solid 1px var(--uui-color-border,#d8d7d9);
        padding: 0.75rem;
      }

      button[slot='trigger'] {
        border-radius: 50%;
        cursor: pointer;
        width: 36px;
        height: 36px;
      }

      uui-input {
        /*  lower the font size to avoid overflow with hlsa format */
        font-size: 0.85rem;
        box-sizing: content-box;
        flex: 1;
      }

      uui-color-area {
        width: 100%;
      }
    `],W([O('[part="input"]')],B.prototype,"_input",2),W([O(".color-picker__preview")],B.prototype,"_previewButton",2),W([O("#swatches")],B.prototype,"_swatches",2),W([_()],B.prototype,"inputValue",2),W([_()],B.prototype,"hue",2),W([_()],B.prototype,"saturation",2),W([_()],B.prototype,"lightness",2),W([_()],B.prototype,"alpha",2),W([_()],B.prototype,"_colord",2),W([a()],B.prototype,"value",1),W([a()],B.prototype,"format",2),W([a()],B.prototype,"name",2),W([a()],B.prototype,"size",2),W([a({attribute:"no-format-toggle",type:Boolean})],B.prototype,"noFormatToggle",2),W([a({type:Boolean,reflect:!0})],B.prototype,"inline",2),W([a({type:Boolean,reflect:!0})],B.prototype,"disabled",2),W([a({type:Boolean})],B.prototype,"opacity",2),W([a({type:Boolean,reflect:!0})],B.prototype,"readonly",2),W([a({type:Boolean})],B.prototype,"uppercase",2),W([a({attribute:!1})],B.prototype,"swatches",2),B=W([v("uui-color-picker")],B);var av={grad:.9,turn:360,rad:360/(2*Math.PI)},it=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Q=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},Se=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},wu=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},xu=function(e){return{r:Se(e.r,0,255),g:Se(e.g,0,255),b:Se(e.b,0,255),a:Se(e.a)}},In=function(e){return{r:Q(e.r),g:Q(e.g),b:Q(e.b),a:Q(e.a,3)}},lv=/^#([0-9a-f]{3,8})$/i,Fo=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},$u=function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=Math.max(t,i,o),n=s-Math.min(t,i,o),u=n?s===t?(i-o)/n:s===i?2+(o-t)/n:4+(t-i)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:r}},ku=function(e){var t=e.h,i=e.s,o=e.v,r=e.a;t=t/360*6,i/=100,o/=100;var s=Math.floor(t),n=o*(1-i),u=o*(1-(t-s)*i),c=o*(1-(1-t+s)*i),p=s%6;return{r:255*[o,u,n,n,c,o][p],g:255*[c,o,o,u,n,n][p],b:255*[n,n,c,o,o,u][p],a:r}},Cu=function(e){return{h:wu(e.h),s:Se(e.s,0,100),l:Se(e.l,0,100),a:Se(e.a)}},Eu=function(e){return{h:Q(e.h),s:Q(e.s),l:Q(e.l),a:Q(e.a,3)}},Pu=function(e){return ku((i=(t=e).s,{h:t.h,s:(i*=((o=t.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:t.a}));var t,i,o},Ur=function(e){return{h:(t=$u(e)).h,s:(r=(200-(i=t.s))*(o=t.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,o,r},uv=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,cv=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,hv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,dv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Su={string:[[function(e){var t=lv.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Q(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Q(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=hv.exec(e)||dv.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:xu({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=uv.exec(e)||cv.exec(e);if(!t)return null;var i,o,r=Cu({h:(i=t[1],o=t[2],o===void 0&&(o="deg"),Number(i)*(av[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Pu(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=r===void 0?1:r;return it(t)&&it(i)&&it(o)?xu({r:Number(t),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,o=e.l,r=e.a,s=r===void 0?1:r;if(!it(t)||!it(i)||!it(o))return null;var n=Cu({h:Number(t),s:Number(i),l:Number(o),a:Number(s)});return Pu(n)},"hsl"],[function(e){var t=e.h,i=e.s,o=e.v,r=e.a,s=r===void 0?1:r;if(!it(t)||!it(i)||!it(o))return null;var n=function(u){return{h:wu(u.h),s:Se(u.s,0,100),v:Se(u.v,0,100),a:Se(u.a)}}({h:Number(t),s:Number(i),v:Number(o),a:Number(s)});return ku(n)},"hsv"]]},Ou=function(e,t){for(var i=0;i<t.length;i++){var o=t[i][0](e);if(o)return[o,t[i][1]]}return[null,void 0]},pv=function(e){return typeof e=="string"?Ou(e.trim(),Su.string):typeof e=="object"&&e!==null?Ou(e,Su.object):[null,void 0]},An=function(e,t){var i=Ur(e);return{h:i.h,s:Se(i.s+100*t,0,100),l:i.l,a:i.a}},Un=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Iu=function(e,t){var i=Ur(e);return{h:i.h,s:i.s,l:Se(i.l+100*t,0,100),a:i.a}},zn=function(){function e(t){this.parsed=pv(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Q(Un(this.rgba),2)},e.prototype.isDark=function(){return Un(this.rgba)<.5},e.prototype.isLight=function(){return Un(this.rgba)>=.5},e.prototype.toHex=function(){return t=In(this.rgba),i=t.r,o=t.g,r=t.b,n=(s=t.a)<1?Fo(Q(255*s)):"","#"+Fo(i)+Fo(o)+Fo(r)+n;var t,i,o,r,s,n},e.prototype.toRgb=function(){return In(this.rgba)},e.prototype.toRgbString=function(){return t=In(this.rgba),i=t.r,o=t.g,r=t.b,(s=t.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var t,i,o,r,s},e.prototype.toHsl=function(){return Eu(Ur(this.rgba))},e.prototype.toHslString=function(){return t=Eu(Ur(this.rgba)),i=t.h,o=t.s,r=t.l,(s=t.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var t,i,o,r,s},e.prototype.toHsv=function(){return t=$u(this.rgba),{h:Q(t.h),s:Q(t.s),v:Q(t.v),a:Q(t.a,3)};var t},e.prototype.invert=function(){return rt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),rt(An(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),rt(An(this.rgba,-t))},e.prototype.grayscale=function(){return rt(An(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),rt(Iu(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),rt(Iu(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?rt({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):Q(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=Ur(this.rgba);return typeof t=="number"?rt({h:t,s:i.s,l:i.l,a:i.a}):Q(i.h)},e.prototype.isEqual=function(t){return this.toHex()===rt(t).toHex()},e}(),rt=function(e){return e instanceof zn?e:new zn(e)};class Go extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Go.CHANGE="change";var vv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,je=(e,t,i,o)=>{for(var r=o>1?void 0:o?fv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&vv(t,i,r),r};let ge=class extends Te("label",g){constructor(){super(...arguments),this.type="hue",this.color="",this.min=0,this.max=100,this.precision=1,this.vertical=!1,this.value=0,this.readonly=!1,this.disabled=!1}willUpdate(e){if(e.has("type")&&(this.type==="hue"?this.max=this.max??360:this.type==="saturation"?this.max=this.max??100:this.type==="lightness"?this.max=this.max??100:this.type==="opacity"&&(this.max=this.max??100),this.precision=this.precision??1,this.color)){const t=new zn(this.color),{h:i,s:o,l:r}=t.toHsl(),s=this.type==="saturation"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${i}, 0%, ${r}%), hsl(${i}, 100%, ${r}%))`:this.type==="lightness"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${i}, ${o}%, 0%), hsl(${i}, ${o}%, 100%))`:null;this.style.setProperty("--uui-slider-background-image",s)}}firstUpdated(){this.container=this.shadowRoot.querySelector("#color-slider"),this.handle=this.container.querySelector("#color-slider__handle")}handleDrag(e){if(this.disabled||this.readonly||!this.container||!this.handle)return;const{width:t,height:i}=this.container.getBoundingClientRect();this.handle.focus(),e.preventDefault(),Ol(this.container,{onMove:(o,r)=>{this.vertical?this.value=Il(M(r/i*this.max,this.min,this.max),this.min,this.max):this.value=M(o/t*this.max,this.min,this.max),this.syncValues()},initialEvent:e})}handleClick(e){this.disabled||this.readonly||(this.value=this.getValueFromMousePosition(e),this.syncValues())}handleKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"?(e.preventDefault(),this.value=M(this.value-t,this.min,this.max),this.syncValues()):e.key==="ArrowRight"?(e.preventDefault(),this.value=M(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowUp"?(e.preventDefault(),this.value=M(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowDown"?(e.preventDefault(),this.value=M(this.value-t,this.min,this.max),this.syncValues()):e.key==="Home"?(e.preventDefault(),this.value=this.min,this.syncValues()):e.key==="End"&&(e.preventDefault(),this.value=this.max,this.syncValues())}getValueFromMousePosition(e){return this.vertical?this.getValueFromYCoordinate(e.clientY):this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.vertical?this.getValueFromYCoordinate(e.touches[0].clientY):this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const{left:t,width:i}=this.container.getBoundingClientRect();return M(this.roundToPrecision((e-t)/i*this.max),this.min,this.max)}getValueFromYCoordinate(e){const{top:t,height:i}=this.container.getBoundingClientRect();return M(this.roundToPrecision((e-t)/i*this.max),this.min,this.max)}roundToPrecision(e){const t=1/this.precision;return Math.ceil(e*t)/t}syncValues(){this.dispatchEvent(new Go(Go.CHANGE))}get cssPropCurrentValue(){return this.value===0?this.vertical?100:0:100/(this.vertical?this.max/Il(this.value,this.min,this.max):this.max/this.value)}render(){return l` <div
        part="slider"
        id="color-slider"
        role="slider"
        aria-label="${this.label}"
        aria-orientation="${this.vertical?"vertical":"horizontal"}"
        aria-valuemin="${Math.round(this.min)}"
        aria-valuemax="${Math.round(this.max)}"
        aria-valuenow="${Math.round(this.value)}"
        @click=${this.handleClick}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
        @keydown=${this.handleKeyDown}>
        ${this.type==="opacity"?l`<div
              id="current-hue"
              style=${Je({backgroundImage:`linear-gradient(to ${this.vertical?"top":"right"},
            transparent 0%,
            ${this.color} 100%
            )`})}></div>`:""}
        <!-- <slot name="detail"> </slot> -->
        <span
          id="color-slider__handle"
          style="--current-value: ${this.cssPropCurrentValue}%;"
          tabindex=${w(this.disabled?void 0:"0")}>
        </span>
      </div>
      ${Math.round(this.value)}`}};ge.styles=[b`
      :host {
        --uui-slider-height: 15px;
        --uui-slider-handle-size: 17px;
        --uui-slider-background-image: #fff;
        --uui-slider-background-size: 100%;
        --uui-slider-background-position: top left;
        display: block;
      }

      :host([type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to right,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([vertical][type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to top,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([type='opacity']) {
        --uui-slider-background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);

        --uui-slider-background-size: 10px 10px;
        --uui-slider-background-position: 0 0, 0 0, -5px -5px, 5px 5px;
      }

      #color-slider {
        position: relative;
        background-image: var(--uui-slider-background-image);
        background-size: var(--uui-slider-background-size);
        background-position: var(--uui-slider-background-position);
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: var(--uui-slider-height);
      }

      :host([vertical]) #color-slider {
        width: var(--uui-slider-height);
        height: 300px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) #color-slider {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        cursor: default;
      }

      :host([readonly]) #color-slider {
        pointer-events: none;
      }

      #color-slider__handle {
        position: absolute;
        top: calc(50% - var(--uui-slider-handle-size) / 2);
        width: var(--uui-slider-handle-size);
        height: var(--uui-slider-handle-size);
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        margin-left: calc(var(--uui-slider-handle-size) / -2);
        left: var(--current-value, 0%);
      }

      :host([vertical]) #color-slider__handle {
        left: unset;
        top: var(--current-value, 100%);
        margin-left: -1px;
        margin-top: calc(var(--uui-slider-handle-size) / -2);
      }

      ::slotted(*:first-child) {
        border-radius: 3px;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      #current-hue {
        border-radius: 3px;
        position: absolute;
        inset: 0 0 0 0;
      }
    `],je([a({reflect:!0})],ge.prototype,"type",2),je([a()],ge.prototype,"color",2),je([a({type:Number})],ge.prototype,"min",2),je([a({type:Number})],ge.prototype,"max",2),je([a({type:Number})],ge.prototype,"precision",2),je([a({type:Boolean,reflect:!0})],ge.prototype,"vertical",2),je([a()],ge.prototype,"value",2),je([a({type:Boolean,reflect:!0})],ge.prototype,"readonly",2),je([a({type:Boolean,reflect:!0})],ge.prototype,"disabled",2),ge=je([v("uui-color-slider")],ge);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const o of i)o._$AO?.(t,!1),zr(o,t);return!0},qo=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},Au=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),mv(t)}};function bv(e){this._$AN!==void 0?(qo(this),this._$AM=e,Au(this)):this._$AM=e}function gv(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let s=i;s<o.length;s++)zr(o[s],!1),qo(o[s]);else o!=null&&(zr(o,!1),qo(o));else zr(this,e)}const mv=e=>{e.type==Ie.CHILD&&(e._$AP??=gv,e._$AQ??=bv)};class _v extends Ei{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),Au(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(zr(this,t),qo(this))}setValue(t){if(au(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const Mn=new WeakMap,Ko=Ci(class extends _v{render(e){return k}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),k}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Mn.get(t);i===void 0&&(i=new WeakMap,Mn.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Mn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var yv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,Uu=e=>{throw TypeError(e)},Di=(e,t,i,o)=>{for(var r=o>1?void 0:o?wv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&yv(t,i,r),r},xv=(e,t,i)=>t.has(e)||Uu("Cannot "+i),$v=(e,t,i)=>t.has(e)?Uu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),kv=(e,t,i)=>(xv(e,t,"access private method"),i),Dn,zu;let ot=class extends Te("label",xi(xr(g))){constructor(){super(),$v(this,Dn),this.disabled=!1,this.readonly=!1,this.showLabel=!1,this.addEventListener("click",this._setAriaAttributes)}get value(){return this._value??""}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get color(){return this._color}set color(e){const t=this._color;this._color=e,this.requestUpdate("color",t)}_setAriaAttributes(){this.selectable&&this.setAttribute("aria-checked",this.selected.toString())}firstUpdated(){this._setAriaAttributes()}willUpdate(e){(e.has("disabled")||e.has("readonly"))&&this.selectable&&(this.selectable=!this.disabled&&!this.readonly,this.deselectable=!this.disabled&&!this.readonly),(e.has("selectable")||e.has("selected"))&&this._setAriaAttributes()}focus(e){this.selectableTarget?.focus(e)}render(){return l`
      <button
        id="swatch"
        ${Ko(kv(this,Dn,zu))}
        aria-label=${this.label}
        ?disabled="${this.disabled}"
        title="${this.label}">
        <div class="color-swatch color-swatch--transparent-bg">
          <div
            class="color-swatch__color"
            style="background: var(--uui-swatch-color, ${this.color??this.value})"></div>
          <div
            class="color-swatch__check"
            style="color: var(--uui-swatch-color, ${this.color??this.value})">
            ${zo}
          </div>
        </div>
        ${this._renderWithLabel()}
      </button>
    `}_renderWithLabel(){return this.showLabel?l`<div class="color-swatch__label">
      <strong>${this.renderLabel()}</strong>
      ${this.value}
    </div>`:k}};Dn=new WeakSet,zu=function(e){this.selectableTarget=e||this},ot.styles=[b`
      :host {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        transition: box-shadow 100ms ease-out;
        flex-direction: column;
      }

      :host(*),
      * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
        outline-offset: 4px;
      }

      :host(:focus-within:not([disabled])) {
        outline: none;
      }

      :host(:focus:not([disabled])) #swatch {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-swatch-border-width, 1px);
        outline-style: solid;
        outline-offset: var(--uui-swatch-border-width, 1px);
      }

      :host([selectable]) #swatch {
        cursor: pointer;
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      :host([readonly]) {
        cursor: default;
      }

      #swatch {
        cursor: inherit;
        outline: none;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        text-align: left;
        border-radius: 3px;
      }

      :host(:not([selectable])) #swatch:focus {
        outline: none;
      }

      :host([selectable]) #swatch::after {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: calc(var(--uui-swatch-border-width, 1px) * -1);
        width: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        height: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        box-sizing: border-box;
        border: var(--uui-swatch-border-width, 2px) solid
          var(--uui-color-selected,#3544b1);
        border-radius: calc(
          var(--uui-border-radius,3px) + var(--uui-swatch-border-width, 1px)
        );
        transition: opacity 100ms ease-out;
        opacity: 0;
      }
      :host([selectable]:not([disabled]):hover) #swatch::after {
        opacity: 0.33;
      }
      :host([selectable][selected]:not([disabled]):hover) #swatch::after {
        opacity: 0.66;
      }
      :host([selectable][selected]:not([disabled])) #swatch::after {
        opacity: 1;
      }

      .color-swatch {
        position: relative;
        width: var(--uui-swatch-size, 25px);
        height: var(--uui-swatch-size, 25px);
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      :host([show-label]) .color-swatch {
        width: 120px;
        height: 50px;
      }

      .color-swatch.color-swatch--transparent-bg {
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }
      .color-swatch__color {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: inherit;
        box-sizing: border-box;
      }

      :host([show-label]) .color-swatch__color {
        border-radius: 3px 3px 0 0;
      }

      .color-swatch__check {
        position: absolute;
        vertical-align: middle;
        width: calc(var(--uui-swatch-size, 25px) / 2);
        height: calc(var(--uui-swatch-size, 25px) / 2);
        line-height: 0;
        filter: invert(1) grayscale(1) contrast(9);
        pointer-events: none;
        opacity: 0;
      }

      :host([selected]) .color-swatch__check {
        opacity: 1;
      }

      slot[name='label']::slotted(*),
      .label {
        font-size: var(--uui-size-4,12px);
      }

      .color-swatch__label {
        max-width: 120px;
        box-sizing: border-box;
        padding: var(--uui-size-space-1,3px) var(--uui-size-space-2,6px);
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: 0 0 3px 3px;
        font-size: var(--uui-size-4, 12px);
      }

      .color-swatch__label strong {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }
    `],Di([a()],ot.prototype,"value",1),Di([a()],ot.prototype,"color",1),Di([a({type:Boolean,reflect:!0})],ot.prototype,"disabled",2),Di([a({type:Boolean,reflect:!0})],ot.prototype,"readonly",2),Di([a({type:Boolean,attribute:"show-label",reflect:!0})],ot.prototype,"showLabel",2),ot=Di([v("uui-color-swatch")],ot);class Li extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Li.CHANGE="change";var Cv=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,Mr=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ev(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Cv(t,i,r),r};let Pt=class extends Te("label",g){constructor(){super(),this.value="",this.disabled=!1,this.readonly=!1,this._onSelected=e=>{const t=e.target;this._swatches.includes(t)&&(this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=t,this._activeElement=this._selectedElement,this.value=this._selectedElement.value||"",this.dispatchEvent(new Li(Li.CHANGE)))},this._onDeselected=e=>{const t=e.target;this._swatches.includes(t)&&(this._activeElement===t&&(this._activeElement=void 0),this._selectedElement===t&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0,this.value="",this.dispatchEvent(new Li(Li.CHANGE))))},this.addEventListener(Ct.SELECTED,this._onSelected),this.addEventListener(Ct.DESELECTED,this._onDeselected)}get _activeElement(){return this.__activeElement}set _activeElement(e){this.__activeElement&&(this.__activeElement.active=!1),e&&(e.active=!0,this.__activeElement=e)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.setAttribute("aria-label",this.label)}willUpdate(e){e.has("label")&&this.setAttribute("aria-label",this.label)}_handleSlotChange(){!this._swatches||this._swatches.length===0||this._swatches.forEach(e=>{e.setAttribute("aria-checked","false"),e.setAttribute("role","radio"),this.disabled?e.setAttribute("disabled",""):e.setAttribute("selectable","selectable"),this.readonly&&e.setAttribute("readonly",""),this.value!==""&&e.value===this.value&&(e.selected=!0,e.setAttribute("aria-checked","true"),this._selectedElement=e,this._activeElement=this._selectedElement)})}resetSelection(){this._swatches.forEach(e=>{e.selected=!1,e.active=!1,e.selectable=!e.disabled}),this._activeElement=void 0,this._selectedElement=void 0,this.value=""}render(){return l`<slot @slotchange=${this._handleSlotChange}></slot>`}};Pt.styles=[b`
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    `],Mr([a()],Pt.prototype,"value",2),Mr([a({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2),Mr([a({type:Boolean,reflect:!0})],Pt.prototype,"readonly",2),Mr([$t({selector:"uui-color-swatch"})],Pt.prototype,"_swatches",2),Pt=Mr([v("uui-color-swatches")],Pt);class me extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}me.CHANGE="change",me.INNER_SLOT_CHANGE="inner-slot-change";var Pv=Object.defineProperty,Sv=Object.getOwnPropertyDescriptor,Mu=e=>{throw TypeError(e)},St=(e,t,i,o)=>{for(var r=o>1?void 0:o?Sv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Pv(t,i,r),r},Ov=(e,t,i)=>t.has(e)||Mu("Cannot "+i),Iv=(e,t,i)=>t.has(e)?Mu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Du=(e,t,i)=>(Ov(e,t,"access private method"),i),Xo,Ln;let ze=class extends g{constructor(){super(...arguments),Iv(this,Xo),this.displayValue="",this._value="",this._activeElementValue=null,this._onSlotChange=()=>{Du(this,Xo,Ln).call(this),this._updateSelection(),this.dispatchEvent(new me(me.INNER_SLOT_CHANGE))},this._onSelected=e=>{this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=e.composedPath()[0],this.value=this._selectedElement.value||"",this.displayValue=this._selectedElement.displayValue||"",this.dispatchEvent(new me(me.CHANGE))},this._onDeselected=e=>{const t=e.composedPath()[0];this._selectedElement===t&&(this.value="",this.displayValue="",this.dispatchEvent(new me(me.CHANGE)))},this._moveIndex=e=>{const t=Math.min(Math.max(this._getActiveIndex+e,0),this._options.length-1);this._goToIndex(t)},this._onKeyDown=e=>{if(!(this._options.length<=0))switch(e.key){case"ArrowUp":e.preventDefault(),e.ctrlKey?this._moveIndex(-10):this._moveIndex(-1);break;case"ArrowDown":e.preventDefault(),e.ctrlKey?this._moveIndex(10):this._moveIndex(1);break;case"Home":{e.preventDefault(),this._goToIndex(0);break}case"Enter":{e.preventDefault(),this._getActiveElement?.click();break}case"End":{e.preventDefault(),this._goToIndex(this._options.length-1);break}}}}get value(){return this._value}set value(e){if(this._value===e)return;const t=this._value;this._value=e,this._updateSelection(),this.requestUpdate("value",t)}get for(){return this._for}set for(e){this._for&&this._for.removeEventListener("keydown",this._onKeyDown),this._for=e,this._for&&this._for.addEventListener("keydown",this._onKeyDown)}connectedCallback(){super.connectedCallback(),this._for||(this._for=this),this.addEventListener(Ct.SELECTED,this._onSelected),this.addEventListener(Ct.DESELECTED,this._onDeselected)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),this.removeEventListener(Ct.SELECTED,this._onSelected),this.removeEventListener(Ct.DESELECTED,this._onDeselected)}_updateSelection(){this.displayValue="";for(const e of this._options)e.value===this._value?(this.displayValue=e.displayValue||"",e.selected=!0):e.selected=!1}get _getActiveIndex(){return this._activeElementValue===null?-1:this._options.findIndex(e=>e.value===this._activeElementValue)}get _getActiveElement(){return this._activeElementValue===null?null:this._options.find(e=>e.value===this._activeElementValue)}_goToIndex(e){if(this._options.length===0)return;e=Math.min(Math.max(e,0),this._options.length-1);const t=this._options[e];this._activeElementValue=t.value,Du(this,Xo,Ln).call(this),t&&t.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}render(){return l` <slot @slotchange=${this._onSlotChange}></slot> `}};Xo=new WeakSet,Ln=function(){for(let t=0;t<this._activeOptions.length;t++)this._activeOptions[t].active=!1;const e=this._getActiveElement;e?e.active=!0:this._goToIndex(0)},ze.styles=[b`
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
    `],St([a()],ze.prototype,"value",1),St([a({type:String})],ze.prototype,"displayValue",2),St([a({attribute:!1})],ze.prototype,"for",1),St([$t({flatten:!0,selector:"uui-combobox-list-option:not([disabled])"})],ze.prototype,"_options",2),St([$t({flatten:!0,selector:"uui-combobox-list-option[active]"})],ze.prototype,"_activeOptions",2),St([_()],ze.prototype,"_value",2),St([_()],ze.prototype,"_activeElementValue",2),ze=St([v("uui-combobox-list")],ze);var Av=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,Ti=(e,t,i,o)=>{for(var r=o>1?void 0:o?Uv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Av(t,i,r),r};let st=class extends xi(xr(g)){constructor(){super(),this._disabled=!1,this._displayValue="",this.selectable=!0,this.deselectable=!1}get value(){return this._value?this._value:this.textContent?.trim()||""}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get displayValue(){return this._displayValue?this._displayValue:this.textContent?.trim()||""}set displayValue(e){const t=this._displayValue;this._displayValue=e,this.requestUpdate("displayValue",t)}get disabled(){return this._disabled}set disabled(e){const t=this._disabled;this._disabled=e,this.selectable=!this._disabled,this.requestUpdate("disabled",t)}render(){return l`<slot></slot>`}};st.styles=[b`
      :host {
        position: relative;
        cursor: pointer;
        margin: 1px var(--uui-size-2,6px);
        border-radius: var(--uui-border-radius,3px);
        outline: 2px solid transparent;
        outline-offset: -2px;
        padding: var(--uui-size-1,3px);
        padding-left: var(--uui-size-2,6px);
      }

      :host(:first-child) {
        margin-top: 6px;
      }
      :host(:last-child) {
        margin-bottom: 6px;
      }

      :host([selected]):host([active])::after {
        display: block;
        content: '';
        position: absolute;
        inset: 0px;
        outline: var(--uui-color-surface,#fff) solid 2px;
        outline-offset: -4px;
      }
      /*
      :host::before {
        display: block;
        content: '';
        opacity: 0;
        position: absolute;
        inset: 0;
        background-color: var(--uui-color-selected);
      }

      :host(:hover)::before {
        opacity: 0.15;
        border-radius: var(--uui-border-radius);
      } */

      :host(:hover) {
        background-color: var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ));
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([disabled]:hover) {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([active]) {
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([selected]) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([selected]:hover) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }
      :host([selected][disabled]) {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
    `],Ti([_()],st.prototype,"_disabled",2),Ti([_()],st.prototype,"_displayValue",2),Ti([a({type:String})],st.prototype,"value",1),Ti([a({type:String,attribute:"display-value"})],st.prototype,"displayValue",1),Ti([a({type:Boolean,reflect:!0})],st.prototype,"disabled",1),st=Ti([v("uui-combobox-list-option")],st);class _e extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}_e.SEARCH="search",_e.CHANGE="change";var zv=Object.defineProperty,Mv=Object.getOwnPropertyDescriptor,Lu=e=>{throw TypeError(e)},ne=(e,t,i,o)=>{for(var r=o>1?void 0:o?Mv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&zv(t,i,r),r},Tn=(e,t,i)=>t.has(e)||Lu("Cannot "+i),P=(e,t,i)=>(Tn(e,t,"read from private field"),i?i.call(e):t.get(e)),te=(e,t,i)=>t.has(e)?Lu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Tu=(e,t,i,o)=>(Tn(e,t,"write to private field"),t.set(e,i),i),Yo=(e,t,i)=>(Tn(e,t,"access private method"),i),pe,Ni,Vi,Nu,Dr,Zo,Qo,Jo,Nn,es,ts,Vn,is,Bi,Bn,rs,os,Hn,ss;let q=class extends Ne(g,""){constructor(){super(...arguments),te(this,Vi),this.closeLabel="Close",this.disabled=!1,this.hideExpandSymbol=!1,this.readonly=!1,this.placeholder="",te(this,pe),te(this,Ni),this._displayValue="",this._search="",this._isPhone=!1,this._isOpen=!1,te(this,Dr,()=>{this._isPhone=P(this,Ni).matches}),te(this,Qo,()=>requestAnimationFrame(()=>this._input.focus())),te(this,Jo,()=>requestAnimationFrame(()=>{this.shadowRoot?.activeElement||P(this,Bi).call(this)})),te(this,Nn,e=>{e.preventDefault(),e.stopImmediatePropagation(),this.search=e.target.value,this.dispatchEvent(new _e(_e.SEARCH)),P(this,is).call(this)}),te(this,es,()=>{this.value&&this.value!==P(this,pe)?.value&&Yo(this,Vi,Zo).call(this)}),te(this,ts,()=>{this.value=P(this,pe)?.value||"",this.search=this.value?this.search:"",P(this,Bi).call(this),this.dispatchEvent(new _e(_e.CHANGE))}),te(this,Vn,()=>{this.readonly||(this.open=!this.open)}),te(this,is,()=>{this.open||this.readonly||(this.open=!0)}),te(this,Bi,()=>{this.open&&(this.open=!1,this.search="",this._input.value=this._displayValue,this.dispatchEvent(new _e(_e.SEARCH)))}),te(this,Bn,e=>{this.open===!1&&e.key==="Enter"&&(e.preventDefault(),e.stopImmediatePropagation()),(e.key==="ArrowUp"||e.key==="ArrowDown")&&P(this,is).call(this),(e.key==="Escape"||e.key==="Enter")&&P(this,Bi).call(this)}),te(this,rs,e=>{e.key&&e.key!=="Enter"||(e.preventDefault(),e.stopImmediatePropagation(),this.value="",this.search="",this._input.value=this._displayValue,this._input.focus(),this.dispatchEvent(new _e(_e.SEARCH)),this.dispatchEvent(new _e(_e.CHANGE)))}),te(this,os,()=>l` <uui-input
      slot="trigger"
      id="combobox-input"
      label="combobox-input"
      type="text"
      .value=${this._displayValue}
      .placeholder=${this.placeholder}
      autocomplete="off"
      .disabled=${this.disabled}
      .readonly=${this.readonly}
      popovertarget="combobox-popover"
      @click=${P(this,Vn)}
      @input=${P(this,Nn)}
      @keydown=${P(this,Bn)}>
      <slot name="input-prepend" slot="prepend"></slot>
      ${P(this,Hn).call(this)}
      ${this.hideExpandSymbol?k:l`<div id="expand-symbol-wrapper" slot="append">
            <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
          </div>`}
      <slot name="input-append" slot="append"></slot>
    </uui-input>`),te(this,Hn,()=>this.disabled||this.readonly?k:l`<uui-button
      id="clear-button"
      @click=${P(this,rs)}
      @keydown=${P(this,rs)}
      label="clear"
      slot="append"
      compact
      style="height: 100%;"
      tabindex=${this.value||this.search?"":"-1"}
      class=${this.value||this.search?"visible":""}>
      <uui-icon name="remove" .fallback=${pn.strings[0]}></uui-icon>
    </uui-button>`),te(this,ss,()=>l`<div id="dropdown">
      <uui-scroll-container tabindex="-1" id="scroll-container">
        <slot @slotchange=${Yo(this,Vi,Nu)}></slot>
      </uui-scroll-container>
    </div>`)}get value(){return super.value}set value(e){super.value=e,typeof e=="string"&&Yo(this,Vi,Zo).call(this)}get search(){return this._search}set search(e){if(this.search===e)return;const t=this._search;this._search=e,this.requestUpdate("search",t)}get open(){return this._isOpen}set open(e){const t=e;this._isOpen=e;const i=this._comboboxPopoverElement;if(i)if(e){const o=this._input.offsetWidth;i.style.setProperty("--popover-width",`${o}px`),i.showPopover()}else i.hidePopover();this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",P(this,Jo)),this.addEventListener("mousedown",P(this,Qo)),Tu(this,Ni,window.matchMedia("(max-width: 600px)")),P(this,Dr).call(this),P(this,Ni).addEventListener("change",P(this,Dr)),x(this,"uui-icon"),x(this,"uui-input"),x(this,"uui-button"),x(this,"uui-combobox-list"),x(this,"uui-scroll-container"),x(this,"uui-popover-container"),x(this,"uui-symbol-expand")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",P(this,Jo)),this.removeEventListener("mousedown",P(this,Qo)),P(this,Ni).removeEventListener("change",P(this,Dr))}getFormElement(){return this._input}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}render(){return this._isPhone&&this.open?l` <div id="phone-wrapper">
        <uui-button label="close" look="primary" @click=${P(this,Bi)}>
          ${this.closeLabel}
        </uui-button>
        ${P(this,os).call(this)} ${P(this,ss).call(this)}
      </div>`:l`
        ${P(this,os).call(this)}
        <uui-popover-container
          id="combobox-popover"
          popover="manual"
          placement="bottom-end">
          ${P(this,ss).call(this)}
        </uui-popover-container>
      `}};pe=new WeakMap,Ni=new WeakMap,Vi=new WeakSet,Nu=function(){P(this,pe)&&(P(this,pe).removeEventListener(me.CHANGE,P(this,ts)),P(this,pe).removeEventListener(me.INNER_SLOT_CHANGE,P(this,es)));const e=this._comboboxListElements?.[0];e&&(Tu(this,pe,e),P(this,pe).for=this,P(this,pe).addEventListener(me.CHANGE,P(this,ts)),P(this,pe).addEventListener(me.INNER_SLOT_CHANGE,P(this,es))),this.updateComplete.then(()=>{Yo(this,Vi,Zo).call(this)})},Dr=new WeakMap,Zo=function(){P(this,pe)&&(P(this,pe).value=this.value,requestAnimationFrame(()=>this._displayValue=P(this,pe).displayValue||""))},Qo=new WeakMap,Jo=new WeakMap,Nn=new WeakMap,es=new WeakMap,ts=new WeakMap,Vn=new WeakMap,is=new WeakMap,Bi=new WeakMap,Bn=new WeakMap,rs=new WeakMap,os=new WeakMap,Hn=new WeakMap,ss=new WeakMap,q.styles=[b`
      :host {
        display: inline-block;
      }

      #combobox-input {
        width: 100%;
        border-radius: var(--uui-size-1,3px);
      }

      #combobox-popover {
        width: var(--uui-dropdown-width, var(--popover-width, inherit));
      }

      #scroll-container {
        overflow-y: auto;
        width: 100%;
        max-height: var(--uui-combobox-popover-max-height, 500px);
      }
      #expand-symbol-wrapper {
        height: 100%;
        padding-right: var(--uui-size-space-3,9px);
        display: flex;
        justify-content: center;
      }

      #clear-button {
        opacity: 0;
        transition: opacity 80ms;
      }

      :host(:not([disabled]):not([readonly]):focus-within)
        #clear-button.visible,
      :host(:not([disabled]):not([readonly]):hover) #clear-button.visible {
        opacity: 1;
      }

      #dropdown {
        overflow: hidden;
        z-index: -1;
        background-color: var(
          --uui-combobox-popover-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: var(--uui-border-radius,3px);
        width: 100%;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
      }

      :host([disabled]) #caret {
        fill: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #phone-wrapper {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        z-index: 1;
        font-size: 1.1em;
      }

      #phone-wrapper #dropdown {
        display: flex;
      }

      #phone-wrapper #combobox-input {
        height: var(--uui-size-16,48px);
      }

      #phone-wrapper > uui-button {
        height: var(--uui-size-14,42px);
        width: 100%;
      }

      #phone-wrapper #scroll-container {
        max-height: unset;
      }
    `],ne([a({attribute:"value",reflect:!0})],q.prototype,"value",1),ne([a({type:String})],q.prototype,"search",1),ne([a({type:Boolean})],q.prototype,"open",1),ne([a({type:String,attribute:"close-label"})],q.prototype,"closeLabel",2),ne([a({type:Boolean,reflect:!0})],q.prototype,"disabled",2),ne([a({type:Boolean,reflect:!1,attribute:"hide-expand-symbol"})],q.prototype,"hideExpandSymbol",2),ne([a({type:Boolean,reflect:!0})],q.prototype,"readonly",2),ne([a()],q.prototype,"placeholder",2),ne([O("#combobox-input")],q.prototype,"_input",2),ne([O("#combobox-popover")],q.prototype,"_comboboxPopoverElement",2),ne([$t({flatten:!0,selector:"uui-combobox-list"})],q.prototype,"_comboboxListElements",2),ne([_()],q.prototype,"_displayValue",2),ne([_()],q.prototype,"_search",2),ne([_()],q.prototype,"_isPhone",2),ne([_()],q.prototype,"_isOpen",2),q=ne([v("uui-combobox")],q);var Dv=Object.defineProperty,Lv=Object.getOwnPropertyDescriptor,jn=(e,t,i,o)=>{for(var r=o>1?void 0:o?Lv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Dv(t,i,r),r};let Hi=class extends g{constructor(){super(...arguments),this.headline=null,this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}renderHeadline(){return l` <h3
      style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
      ${this.headline}
      <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
    </h3>`}renderContent(){return l`<slot></slot>`}renderActions(){return l`<slot id="actions" name="actions"></slot>`}render(){return l`${this.renderHeadline()} ${this.renderContent()}
    ${this.renderActions()} `}};Hi.styles=[b`
      :host {
        display: block;
        padding: var(--uui-size-10,30px) var(--uui-size-14,42px);
        color: var(--uui-color-text,#060606);
      }

      #actions {
        margin-top: var(--uui-size-8,24px);
        display: flex;
        justify-content: end;
        gap: var(--uui-size-4,12px);
      }
    `],jn([a({type:String})],Hi.prototype,"headline",2),jn([_()],Hi.prototype,"_headlineSlotHasContent",2),Hi=jn([v("uui-dialog-layout")],Hi);var Tv=Object.getOwnPropertyDescriptor,Nv=(e,t,i,o)=>{for(var r=o>1?void 0:o?Tv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let ns=class extends g{render(){return l`<slot></slot>`}};ns.styles=[b`
      :host {
        position: relative;
        display: block;
        max-width: 580px;
        color: var(--uui-color-text,#060606);

        background-color: var(
          --uui-dialog-background-color,
          var(--uui-color-surface,#fff)
        );

        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
        border-radius: var(
          --uui-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 2)
        );
      }
    `],ns=Nv([v("uui-dialog")],ns);var Vv=Object.defineProperty,Bv=Object.getOwnPropertyDescriptor,Vu=(e,t,i,o)=>{for(var r=o>1?void 0:o?Bv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Vv(t,i,r),r};let Lr=class extends g{constructor(){super(...arguments),this.error=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      id="upload-icon">
      <path
        d=${this.error?"M254.501 38.16c-120.308 0-217.838 97.53-217.838 217.838 0 120.31 97.53 217.838 217.838 217.838 120.31 0 217.838-97.528 217.838-217.838 0-120.308-97.528-217.838-217.838-217.838zm151.667 217.838c0 29.861-8.711 57.708-23.671 81.209L173.293 128.002c23.499-14.961 51.345-23.67 81.208-23.67 83.629.001 151.667 68.037 151.667 151.666zm-303.332 0c0-29.859 8.71-57.707 23.67-81.204l209.201 209.201c-23.498 14.96-51.346 23.671-81.206 23.671-83.632 0-151.665-68.04-151.665-151.668z":"M206.491 364.184h99.013V223.676h92.922L255.997 51.111 113.575 223.676h92.916zM85.043 398.311h341.912v62.578H85.043z"} />
    </svg> `}};Lr.styles=[b`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      #upload-icon {
        fill: var(--uui-color-default,#1b264f);
        width: 100px;
        transition: fill 0.3s ease;
        position: relative;
        z-index: 2;
      }

      :host([error]) #upload-icon {
        fill: var(--uui-color-invalid,#d42054);
      }
    `],Vu([a({type:Boolean,reflect:!0})],Lr.prototype,"error",2),Lr=Vu([v("uui-symbol-file-dropzone")],Lr);class ji extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}ji.CHANGE="change";var Hv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,Ri=(e,t,i,o)=>{for(var r=o>1?void 0:o?jv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Hv(t,i,r),r};let nt=class extends Te("",g){constructor(){super(),this._acceptedFileExtensions=[],this._acceptedMimeTypes=[],this._accept="",this.disallowFolderUpload=!1,this.multiple=!1,this.addEventListener("dragenter",this._onDragEnter,!1),this.addEventListener("dragleave",this._onDragLeave,!1),this.addEventListener("dragover",this._onDragOver,!1),this.addEventListener("drop",this._onDrop,!1)}set accept(e){if(e){const i=[],o=[];e.split(",").forEach(r=>{r=r.trim().toLowerCase(),/[a-z]+\/[a-z*]/s.test(r)?i.push(r):o.push(r.replace(/^\./,""))}),this._acceptedMimeTypes=i,this._acceptedFileExtensions=o}else this._acceptedMimeTypes=[],this._acceptedFileExtensions=[];const t=this._accept;this._accept=e,this.requestUpdate("accept",t)}get accept(){return this._accept}browse(){this._input.click()}async _getAllEntries(e){const t=[...e],i=[],o=[];for(const r of t){if(r?.kind!=="file")continue;const s=this._getEntry(r);if(s)if(s.isDirectory){if(!this.disallowFolderUpload&&this.multiple){const n=await this._mkdir(s);i.push(n)}}else{const n=r.getAsFile();if(!n)continue;this._isAccepted(n)&&o.push(n)}}return{files:o,folders:i}}_getEntry(e){let t=null;return"webkitGetAsEntry"in e?t=e.webkitGetAsEntry():"getAsEntry"in e&&(t=e.getAsEntry()),t}async _mkdir(e){const t=e.createReader(),i=[],o=[],r=n=>new Promise((u,c)=>{n.readEntries(async p=>{if(!p.length){u();return}for(const f of p)if(f.isFile){const h=await this._getAsFile(f);this._isAccepted(h)&&o.push(h)}else if(f.isDirectory){const h=await this._mkdir(f);i.push(h)}await r(n),u()},c)});return await r(t),{folderName:e.name,folders:i,files:o}}_isAccepted(e){if(this._acceptedFileExtensions.length===0&&this._acceptedMimeTypes.length===0)return!0;const t=e.type.toLowerCase(),i=e.name.split(".").pop();if(i&&this._acceptedFileExtensions.includes(i.toLowerCase()))return!0;for(const o of this._acceptedMimeTypes){if(t===o)return!0;if(o.endsWith("/*")&&t.startsWith(o.replace("*","")))return!0}return!1}async _getAsFile(e){return new Promise((t,i)=>e.file(t,i))}async _onDrop(e){e.preventDefault(),this._dropzone.classList.remove("hover");const t=e.dataTransfer?.items;if(t){const i=await this._getAllEntries(t);if(this.multiple===!1&&i.files.length&&(i.files=[i.files[0]],i.folders=[]),!i.files.length&&!i.folders.length)return;this.dispatchEvent(new ji(ji.CHANGE,{detail:i}))}}_onDragOver(e){e.preventDefault()}_onDragEnter(e){this._dropzone.classList.add("hover"),e.preventDefault()}_onDragLeave(e){this._dropzone.classList.remove("hover"),e.preventDefault()}_onFileInputChange(){const e=this._input.files?Array.from(this._input.files):[];this.multiple===!1&&e.length>1&&e.splice(1,e.length-1);const t=e.filter(i=>this._isAccepted(i));t.length&&this.dispatchEvent(new ji(ji.CHANGE,{detail:{files:t,folders:[]}}))}render(){return l`
      <div id="dropzone">
        <uui-symbol-file-dropzone id="symbol"></uui-symbol-file-dropzone>
        ${this.renderLabel()}
        <input
          @click=${e=>e.stopImmediatePropagation()}
          id="input"
          type="file"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change=${this._onFileInputChange}
          aria-label="${this.label}" />
        <slot></slot>
      </div>
    `}};nt.styles=[b`
      #dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: var(--uui-size-4,12px);
        border: 3px solid transparent;
        margin: -3px;
        backdrop-filter: blur(2px);
      }
      #dropzone.hover {
        border-color: var(--uui-color-default,#1b264f);
      }
      #dropzone.hover::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.2;
        border-color: var(--uui-color-default,#1b264f);
        background-color: var(--uui-color-default,#1b264f);
      }
      #symbol {
        color: var(--uui-color-default,#1b264f);
        max-width: 100%;
        max-height: 100%;
      }
      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }
    `],Ri([O("#input")],nt.prototype,"_input",2),Ri([O("#dropzone")],nt.prototype,"_dropzone",2),Ri([a({type:String})],nt.prototype,"accept",1),Ri([a({type:Boolean,reflect:!0,attribute:"disallow-folder-upload"})],nt.prototype,"disallowFolderUpload",2),Ri([a({type:Boolean})],nt.prototype,"multiple",2),nt=Ri([v("uui-file-dropzone")],nt);class Rv{static humanFileSize(t,i=!1,o=1){const r=i?1e3:1024;if(Math.abs(t)<r)return t+" B";const s=i?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let n=-1;const u=10**o;do t/=r,++n;while(Math.round(Math.abs(t)*u)/u>=r&&n<s.length-1);return t.toFixed(o)+" "+s[n]}}var Wv=Object.defineProperty,Fv=Object.getOwnPropertyDescriptor,Re=(e,t,i,o)=>{for(var r=o>1?void 0:o?Fv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Wv(t,i,r),r};let ye=class extends g{constructor(){super(...arguments),this._name="",this._url="",this._extension="",this._src="",this._size=0,this._isDirectory=!1}get file(){return this._file}set file(e){const t=this._file;e instanceof File&&(this._name=e.name.split(".")[0],this._extension=e.name.split(".")[1],this._isDirectory=!1,this._size=e.size,this._isFileAnImage(e)&&(this._isImage=!0,this._getThumbnail(e).then(i=>{this._src=i})),this.requestUpdate("file",t))}connectedCallback(){super.connectedCallback(),x(this,"uui-symbol-file-thumbnail"),x(this,"uui-symbol-folder"),x(this,"uui-symbol-file")}_openSource(){window.open(this._url,"_blank")}_fileTypeTemplate(){return this._isDirectory?l`<uui-symbol-folder id="file-symbol"></uui-symbol-folder>`:this._isImage?l`<uui-symbol-file-thumbnail
        .src=${this._src}
        .alt=${this._name}
        id="file-symbol"></uui-symbol-file-thumbnail>`:l`<uui-symbol-file
      id="file-symbol"
      .type=${this._extension}></uui-symbol-file>`}_renderLongName(){const t=this._name.substring(0,this._name.length-6),i=this._name.substring(this._name.length-6,this._name.length);return l`
      <span
        id="file-name"
        class=${this._url?"has-source":""}
        @click=${()=>this._url?this._openSource():""}
        @keydown=${()=>""}>
        <span id="file-name-start">${t}</span>
        <span id="file-name-end">${i}</span>
      </span>
    `}_isFileAnImage(e){return e?e.type.split("/")[0]==="image":!1}async _getThumbnail(e){return await new Promise(t=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>{t(i.result)}})}render(){return l`
      <slot id="actions" name="actions"></slot>
      ${this._fileTypeTemplate()}
      <div id="file-info">
        ${this._renderLongName()}
        <span id="file-size">
          ${this._size&&!this._isDirectory?l`${Rv.humanFileSize(this._size,!0)}`:""}
        </span>
      </div>
    `}};ye.styles=[b`
      :host {
        position: relative;
        display: grid;
        /* These have to be changed together */
        grid-template-rows: 100px 50px;
        width: 150px;
        height: 150px;
        /* --------------------------------- */
        box-sizing: border-box;
        aspect-ratio: 1;
        color: var(--uui-color-text,#060606);
      }

      :host(:hover) slot[name='actions']::slotted(*) {
        opacity: 1;
      }

      slot[name='actions']::slotted(*) {
        position: absolute;
        top: 8px;
        right: 8px;
        max-width: 100%;
        height: 32px;
        font-size: 13px;
        opacity: 0;
        z-index: 1;
        transition: opacity 150ms;
      }

      #file-symbol {
        aspect-ratio: 1 / 1;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
      }

      #file-info {
        min-width: 0;
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 1rem;
      }

      #file-name {
        display: flex;
        justify-content: center;
      }

      #file-name-start {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #file-name-end {
        white-space: nowrap;
      }

      #file-size {
        opacity: 0.6;
      }

      .has-source:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `],Re([_()],ye.prototype,"_name",2),Re([_()],ye.prototype,"_url",2),Re([_()],ye.prototype,"_extension",2),Re([_()],ye.prototype,"_src",2),Re([_()],ye.prototype,"_size",2),Re([_()],ye.prototype,"_isDirectory",2),Re([_()],ye.prototype,"_file",2),Re([_()],ye.prototype,"_isImage",2),Re([a({attribute:!1})],ye.prototype,"file",1),ye=Re([v("uui-file-preview")],ye);var Gv=Object.defineProperty,qv=Object.getOwnPropertyDescriptor,as=(e,t,i,o)=>{for(var r=o>1?void 0:o?qv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Gv(t,i,r),r};let ii=class extends g{constructor(){super(...arguments),this.description=null,this._labelSlotHasContent=!1,this._labelSlotChanged=e=>{this._labelSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._descriptionSlotHasContent=!1,this._descriptionSlotChanged=e=>{this._descriptionSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}connectedCallback(){super.connectedCallback(),x(this,"uui-form-validation-message")}render(){return l`
      <div id="label" style=${this._labelSlotHasContent?"":"display: none"}>
        <slot name="label" @slotchange=${this._labelSlotChanged}></slot>
      </div>
      <div
        id="description"
        style=${this._descriptionSlotHasContent||this.description!==null?"":"display: none"}>
        ${this.description}
        <slot
          name="description"
          @slotchange=${this._descriptionSlotChanged}></slot>
      </div>
      <uui-form-validation-message>
        <slot></slot>
        <slot name="message" slot="message"></slot>
      </uui-form-validation-message>
    `}};ii.styles=[b`
      :host {
        position: relative;
        display: block;
        margin-top: var(--uui-size-space-5,18px);
        margin-bottom: var(--uui-size-space-5,18px);
      }
      #label {
        margin-top: -5px;
        margin-bottom: 5px;
      }
      #description {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        font-size: var(--uui-type-small-size,12px);
      }
      #label + #description {
        margin-top: -8px;
        min-height: 8px;
      }
    `],as([a({type:String})],ii.prototype,"description",2),as([_()],ii.prototype,"_labelSlotHasContent",2),as([_()],ii.prototype,"_descriptionSlotHasContent",2),ii=as([v("uui-form-layout-item")],ii);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bu=(e,t,i)=>{const o=new Map;for(let r=t;r<=i;r++)o.set(e[r],r);return o},Rn=Ci(class extends Ei{constructor(e){if(super(e),e.type!==Ie.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;i===void 0?i=t:t!==void 0&&(o=t);const r=[],s=[];let n=0;for(const u of e)r[n]=o?o(u,n):n,s[n]=i(u,n),n++;return{values:s,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){const r=Kp(e),{values:s,keys:n}=this.dt(t,i,o);if(!Array.isArray(r))return this.ut=n,s;const u=this.ut??=[],c=[];let p,f,h=0,E=r.length-1,d=0,y=s.length-1;for(;h<=E&&d<=y;)if(r[h]===null)h++;else if(r[E]===null)E--;else if(u[h]===n[d])c[d]=ti(r[h],s[d]),h++,d++;else if(u[E]===n[y])c[y]=ti(r[E],s[y]),E--,y--;else if(u[h]===n[y])c[y]=ti(r[h],s[y]),Ir(e,c[y+1],r[h]),h++,y--;else if(u[E]===n[d])c[d]=ti(r[E],s[d]),Ir(e,r[h],r[E]),E--,d++;else if(p===void 0&&(p=Bu(n,d,y),f=Bu(u,h,E)),p.has(u[h]))if(p.has(u[E])){const I=f.get(n[d]),$=I!==void 0?r[I]:null;if($===null){const V=Ir(e,r[h]);ti(V,s[d]),c[d]=V}else c[d]=ti($,s[d]),Ir(e,r[h],$),r[I]=null;d++}else Cn(r[E]),E--;else Cn(r[h]),h++;for(;d<=y;){const I=Ir(e,c[y+1]);ti(I,s[d]),c[d++]=I}for(;h<=E;){const I=r[h++];I!==null&&Cn(I)}return this.ut=n,uu(e,c),de}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wn extends Ei{constructor(t){if(super(t),this.it=k,t.type!==Ie.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===k||t==null)return this._t=void 0,this.it=t;if(t===de)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Wn.directiveName="unsafeHTML",Wn.resultType=1;const ls=Ci(Wn);var Kv=Object.defineProperty,Xv=Object.getOwnPropertyDescriptor,Hu=(e,t,i,o)=>{for(var r=o>1?void 0:o?Xv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Kv(t,i,r),r};let Tr=class extends g{constructor(){super(),this._for=null,this._messages=new Map,this._onControlInvalid=e=>{const t=e.composedPath()[0];t.pristine===!1?this._messages.set(t,t.validationMessage):this._messages.delete(t),this.requestUpdate("_messages")},this._onControlValid=e=>{const t=e.composedPath()[0];this._messages.delete(t),this.requestUpdate("_messages")},this.for===null&&(this.for=this)}get for(){return this._for}set for(e){let t=null;typeof e=="string"?t=this.getRootNode()?.getElementById(e):e instanceof HTMLElement&&(t=e);const i=t??this,o=this._for;o!==i&&(o!==null&&(o.removeEventListener($i.INVALID,this._onControlInvalid),o.removeEventListener($i.VALID,this._onControlValid)),this._for=i,this._for.addEventListener($i.INVALID,this._onControlInvalid),this._for.addEventListener($i.VALID,this._onControlValid))}render(){return l`
      <slot></slot>
      <div id="messages">
        ${Rn(this._messages,e=>l`<div>${ls(e[1])}</div>`)}
        <slot name="message"></slot>
      </div>
    `}};Tr.styles=[b`
      #messages {
        color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `],Hu([a({reflect:!1,attribute:!0})],Tr.prototype,"for",1),Tr=Hu([v("uui-form-validation-message")],Tr);var Yv=Object.getOwnPropertyDescriptor,Zv=(e,t,i,o)=>{for(var r=o>1?void 0:o?Yv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Fn=class extends g{constructor(){super(...arguments),this._formElement=null}getFormElement(){return this._formElement}_onSlotChanged(e){this._formElement&&(this._formElement.removeEventListener("submit",this._onSubmit),this._formElement.removeEventListener("reset",this._onReset));const t=e.target.assignedNodes({flatten:!0}).filter(i=>i instanceof HTMLFormElement);this._formElement=t.length>0?t[0]:null,this._formElement&&(this._formElement.setAttribute("novalidate",""),this._formElement.addEventListener("submit",this._onSubmit),this._formElement.addEventListener("reset",this._onReset))}_onSubmit(e){if(e.target===null)return;const t=e.target;if(!t.checkValidity()){t.setAttribute("submit-invalid","");return}t.removeAttribute("submit-invalid")}_onReset(e){e.target!==null&&e.target.removeAttribute("submit-invalid")}render(){return l`<slot @slotchange=${this._onSlotChanged}></slot>`}};Fn=Zv([v("uui-form")],Fn);class Wi extends A{constructor(t,i={}){super(t,{bubbles:!0,composed:!0,...i}),this.icon=null}acceptRequest(t){this.icon=t,this.stopImmediatePropagation()}}Wi.ICON_REQUEST="icon-request";var Qv=Object.defineProperty,Jv=Object.getOwnPropertyDescriptor,ri=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Qv(t,i,r),r};let We=class extends g{constructor(){super(...arguments),this._name=null,this._retrievedNameIcon=!1,this._nameSvg=null,this.label="",this.svg=null,this.fallback=null,this._useFallback=!1}get name(){return this._name}set name(e){this._name=e,this.shadowRoot&&this.requestIcon()}requestIcon(){if(this._name!==""&&this._name!==null){const e=new Wi(Wi.ICON_REQUEST,{detail:{iconName:this._name}});this.dispatchEvent(e),e.icon!==null?(this._retrievedNameIcon=!0,e.icon.then(t=>{this._useFallback=!1,this._nameSvg=t})):(this._retrievedNameIcon=!1,this._useFallback=!0)}}connectedCallback(){super.connectedCallback(),this._retrievedNameIcon===!1&&this.requestIcon()}disconnectedCallback(){this._retrievedNameIcon=!1}firstUpdated(){this._retrievedNameIcon===!1&&this.requestIcon(),typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}render(){return this._useFallback===!0?this.fallback===null?l`<slot name="fallback"></slot>`:l`${ls(this.fallback)}`:this._nameSvg!==null?l`${ls(this._nameSvg)}`:this.svg!==null?l`${ls(this.svg)}`:l`<slot></slot>`}};We.styles=[b`
      :host {
        vertical-align: text-bottom;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.125em;
        height: 1.125em;
      }

      :host svg,
      ::slotted(svg) {
        color: var(--uui-icon-color, currentColor);
        width: 100%;
      }

      :host-context(div[slot='prepend']) {
        margin-left: var(--uui-size-2, 6px);
      }

      :host-context(div[slot='append']) {
        margin-right: var(--uui-size-2, 6px);
      }
    `],ri([_()],We.prototype,"_nameSvg",2),ri([a()],We.prototype,"label",2),ri([a()],We.prototype,"name",1),ri([a({attribute:!1})],We.prototype,"svg",2),ri([a({attribute:!1})],We.prototype,"fallback",2),ri([_()],We.prototype,"_useFallback",2),We=ri([v("uui-icon")],We);class Gn{constructor(t){this.promise=new Promise((i,o)=>{this.resolve=i,this.reject=o}),t&&this.resolve(t)}set svg(t){this.resolve(t)}}class qn{constructor(){this.icons={},this._onIconRequest=t=>{const i=this.getIcon(t.detail.iconName);i!==null&&t.acceptRequest(i)}}attach(t){t.addEventListener(Wi.ICON_REQUEST,this._onIconRequest)}detach(t){t.removeEventListener(Wi.ICON_REQUEST,this._onIconRequest)}defineIcon(t,i){if(this.icons[t]){this.icons[t].svg=i;return}this.icons[t]=new Gn(i)}getIcon(t){return this.icons[t]||this.acceptIcon(t)?this.icons[t].promise:null}provideIcon(t){return this.icons[t]=new Gn}acceptIcon(t){return!1}getIconNames(){return Object.keys(this.icons)}}var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,ju=(e,t,i,o)=>{for(var r=o>1?void 0:o?tf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ef(t,i,r),r};let Nr=class extends g{constructor(){super(),this._icons={},this._registry=new qn,this._registry.attach(this)}get icons(){return this._icons}set icons(e){this._icons=e,this._registry&&Object.entries(this._icons).forEach(([t,i])=>this._registry.defineIcon(t,i))}get registry(){return this._registry}set registry(e){this.registry&&this.registry.detach(this),e.attach(this),this._registry=e}render(){return l`<slot></slot>`}};ju([a({attribute:!1})],Nr.prototype,"_icons",2),Nr=ju([v("uui-icon-registry")],Nr);const rf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,of=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,sf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,nf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,af=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,lf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,uf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,cf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,hf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,df=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,pf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,vf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,ff=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,bf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,gf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,mf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,_f=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,yf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,wf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,xf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,$f=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,kf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,Cf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,Ef=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,Pf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,Sf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,Of=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,If=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,Af=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,Uf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,zf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,Mf=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;class Ru extends qn{constructor(){super(),this.defineIcon("add",rf.strings[0]),this.defineIcon("alert",of.strings[0]),this.defineIcon("attachment",sf.strings[0]),this.defineIcon("calendar",nf.strings[0]),this.defineIcon("check",af.strings[0]),this.defineIcon("clipboard",lf.strings[0]),this.defineIcon("code",uf.strings[0]),this.defineIcon("colorpicker",cf.strings[0]),this.defineIcon("copy",hf.strings[0]),this.defineIcon("delete",df.strings[0]),this.defineIcon("document",pf.strings[0]),this.defineIcon("download",vf.strings[0]),this.defineIcon("edit",ff.strings[0]),this.defineIcon("favorite",bf.strings[0]),this.defineIcon("folder",gf.strings[0]),this.defineIcon("forbidden",mf.strings[0]),this.defineIcon("info",_f.strings[0]),this.defineIcon("link",yf.strings[0]),this.defineIcon("lock",wf.strings[0]),this.defineIcon("pause",xf.strings[0]),this.defineIcon("picture",$f.strings[0]),this.defineIcon("play",kf.strings[0]),this.defineIcon("remove",Cf.strings[0]),this.defineIcon("search",Ef.strings[0]),this.defineIcon("see",Pf.strings[0]),this.defineIcon("settings",Sf.strings[0]),this.defineIcon("subtract",Of.strings[0]),this.defineIcon("sync",If.strings[0]),this.defineIcon("unlock",Af.strings[0]),this.defineIcon("unsee",Uf.strings[0]),this.defineIcon("wand",zf.strings[0]),this.defineIcon("wrong",Mf.strings[0])}}var Df=Object.getOwnPropertyDescriptor,Lf=(e,t,i,o)=>{for(var r=o>1?void 0:o?Df(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Kn=class extends Nr{constructor(){super(),this.registry=new Ru}};Kn=Lf([v("uui-icon-registry-essential")],Kn);var Tf=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,Fi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Nf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Tf(t,i,r),r};let at=class extends Ne(g){constructor(){super(),this.accept="",this.multiple=!1,this._files=[],this._updateFileWrappers=e=>{let t=[];for(const i of e)this.multiple?t.push(i):t=[i];this._files=t},this.addEventListener("dragenter",()=>this._setShowDropzone(!0)),this.addEventListener("dragleave",()=>this._setShowDropzone(!1)),this.addEventListener("drop",()=>this._setShowDropzone(!1))}get value(){return super.value}set value(e){if(super.value=e,e instanceof FormData){const t=this.multiple?e.getAll(this.name):[e.get(this.name)];this._updateFileWrappers(t);return}if(e instanceof File){this._updateFileWrappers([e]);return}}connectedCallback(){super.connectedCallback(),x(this,"uui-icon"),x(this,"uui-file-dropzone"),x(this,"uui-button"),x(this,"uui-action-bar"),x(this,"uui-file-preview")}getFormElement(){return this._dropZone}async blur(){await this.updateComplete,this._dropzone.blur()}async focus(){await this.updateComplete,this._dropzone.focus()}async click(){await this.updateComplete,this._dropzone.browse()}_handleClick(e){e.stopImmediatePropagation(),this._dropzone.browse()}async _handleFilesChange(e){const i=e.detail.files.filter(r=>r instanceof File||r.isFile);if(!this.multiple){const r=i[0],n=r instanceof File?r:await this._getFile(r);if(this.value instanceof File){this.value=n;return}if(this.value instanceof FormData){this.value.delete(this.name),this.value.append(this.name,n),this._updateFileWrappers([n]);return}}let o=this.value;if(i.length>0&&!(this.value instanceof FormData)&&(o=new FormData),o instanceof FormData)for(const r of i){const s=r instanceof File;o.append(this.name,s?r:await this._getFile(r))}this.value=o}async _getFile(e){return await new Promise((t,i)=>e.file(t,i))}_removeFile(e){const t=this._files[e];if(this.value instanceof FormData){const o=this.value.getAll(this.name).filter(r=>r!==t);if(o.length===0)this.value="";else{this.value.delete(this.name);for(const r of o)this.value.append(this.name,r)}this._updateFileWrappers(o)}this.value instanceof File&&(this.value="",this._updateFileWrappers([]))}_setShowDropzone(e){e?this._dropZone.style.display="flex":this._dropZone.style.display="none"}_renderFileItem(e,t){return l`<uui-file-preview .file="${e}">
      <uui-action-bar slot="actions">
        <uui-button
          @click=${()=>this._removeFile(t)}
          color="danger"
          label=${`Delete ${e.name}`}>
          <uui-icon name="delete" .fallback=${Jd.strings[0]}></uui-icon>
        </uui-button>
      </uui-action-bar>
    </uui-file-preview>`}_renderFiles(){return l`${Rn(this._files,e=>e.name+e.size,(e,t)=>this._renderFileItem(e,t))}`}render(){return l`
      <uui-file-dropzone
        id="dropzone"
        ?multiple=${this.multiple}
        .accept=${this.accept}
        @change=${this._handleFilesChange}
        label="Drop files here"></uui-file-dropzone>
      <div id="files">
        ${this._renderFiles()}
        ${this._files.length===0||this.multiple?l`<uui-button
              @click=${this._handleClick}
              id="add-button"
              look="placeholder"
              label="Add"></uui-button>`:k}
      </div>
    `}};at.styles=[b`
      :host {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        box-sizing: border-box;
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }

      #files {
        display: grid;
        box-sizing: border-box;
        justify-items: center;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-auto-rows: min-content;
        gap: 16px;
        padding: 16px;
        overflow: auto;
        max-height: 100%;
      }

      #dropzone {
        display: none;
        position: absolute;
        inset: 0px;
        z-index: 10;
        justify-content: center;
        align-items: center;
      }

      #add-button {
        width: 150px;
        height: 150px;
        display: flex;
        padding: 16px;
        box-sizing: border-box;
        justify-content: center;
        align-items: stretch;
      }
    `],Fi([O("#dropzone")],at.prototype,"_dropzone",2),Fi([O("#dropzone")],at.prototype,"_dropZone",2),Fi([a({type:String})],at.prototype,"accept",2),Fi([a({type:Boolean})],at.prototype,"multiple",2),Fi([_()],at.prototype,"_files",2),at=Fi([v("uui-input-file")],at);class oi extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}oi.CHANGE="change",oi.INPUT="input";var Vf=Object.defineProperty,Bf=Object.getOwnPropertyDescriptor,Wu=e=>{throw TypeError(e)},J=(e,t,i,o)=>{for(var r=o>1?void 0:o?Bf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Vf(t,i,r),r},Hf=(e,t,i)=>t.has(e)||Wu("Cannot "+i),jf=(e,t,i)=>t.has(e)?Wu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Rf=(e,t,i)=>(Hf(e,t,"access private method"),i),Xn,Fu;let L=class extends Ne(Te("",g),""){constructor(){super(),jf(this,Xn),this.minlengthMessage=e=>`${e} characters left`,this.maxlengthMessage=(e,t)=>`Maximum length exceeded (${t}/${e} characters)`,this.disabled=!1,this.readonly=!1,this.placeholder="",this.autoWidth=!1,this.inputMode="text",this.tabIndex=0,this._type="text",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",Rf(this,Xn,Fu)),this.addValidator("tooShort",()=>{const e=this.minlengthMessage;return typeof e=="function"?e(this.minlength?this.minlength-String(this.value).length:0):e},()=>!!this.minlength&&String(this.value).length<this.minlength),this.addValidator("tooLong",()=>{const e=this.maxlengthMessage;return typeof e=="function"?e(this.maxlength??0,String(this.value).length):e},()=>!!this.maxlength&&String(this.value).length>this.maxlength),this.updateComplete.then(()=>{this.addFormControlElement(this._input)})}get type(){return this._type}set type(e){this._type=e}async blur(){await this.updateComplete,this._input.blur()}async focus(){await this.updateComplete,this._input.focus()}async select(){await this.updateComplete,this._input.select()}getFormElement(){return this.shadowRoot?.querySelector("input")}onInput(e){e.stopPropagation(),this.value=e.target.value,this.dispatchEvent(new oi(oi.INPUT))}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new oi(oi.CHANGE))}renderPrepend(){return l`<slot name="prepend"></slot>`}renderAppend(){return l`<slot name="append"></slot>`}render(){return l`
      ${this.renderPrepend()}
      ${this.autoWidth?this.renderInputWithAutoWidth():this.renderInput()}
      ${this.renderAppend()}
    `}renderInputWithAutoWidth(){return l`<div id="control">
      ${this.renderInput()}${this.renderAutoWidthBackground()}
    </div>`}renderInput(){return l`<input
      id="input"
      .type=${this.type}
      .value=${this.value}
      .name=${this.name}
      pattern=${w(this.pattern)}
      min=${w(this.min)}
      max=${w(this.max)}
      step=${w(this.step)}
      spellcheck=${this.spellcheck}
      autocomplete=${w(this.autocomplete)}
      placeholder=${w(this.placeholder)}
      aria-label=${w(this.label)}
      inputmode=${w(this.inputMode)}
      ?disabled=${this.disabled}
      ?autofocus=${this.autofocus}
      ?required=${this.required}
      ?readonly=${this.readonly}
      tabindex=${w(this.tabIndex)}
      @input=${this.onInput}
      @change=${this.onChange} />`}renderAutoWidthBackground(){return l` <div id="auto" aria-hidden="true">${this.renderText()}</div>`}renderText(){return l`${this.value.length>0?this.value:this.placeholder}`}};Xn=new WeakSet,Fu=function(e){this.type!=="color"&&e.key=="Enter"&&this.submit()},L.formAssociated=!0,L.styles=[b`
      :host {
        position: relative;
        display: inline-flex;
        align-items: stretch;
        height: var(--uui-input-height, var(--uui-size-11,33px));
        text-align: left;
        color: var(--uui-color-text,#060606);
        color-scheme: var(--uui-color-scheme, normal);
        box-sizing: border-box;
        background-color: var(
          --uui-input-background-color,
          var(--uui-color-surface,#fff)
        );
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-radius: var(--uui-border-radius,3px);

        --uui-button-height: 100%;
        --auto-width-text-margin-right: 0;
        --auto-width-text-margin-left: 0;
      }

      #control {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        flex-grow: 1;
      }

      #auto {
        border: 0 1px solid transparent;
        visibility: hidden;
        white-space: pre;
        z-index: -1;
        height: 0px;
        padding: 0 var(--uui-size-space-3,9px);
        margin: 0 var(--auto-width-text-margin-right) 0
          var(--auto-width-text-margin-left);
      }

      :host([auto-width]) #input {
        width: 10px;
        min-width: 100%;
      }

      :host(:hover) {
        border-color: var(
          --uui-input-border-color-hover,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      /* TODO: Fix so we dont get double outline when there is focus on things in the slot. */
      :host(:focus-within) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host(:focus) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      :host([disabled]) {
        background-color: var(
          --uui-input-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) input {
        -webkit-text-fill-color: var(
          --uui-color-disabled-contrast,#c4c4c4
        ); /* required on Safari and IOS */
      }
      :host([readonly]) {
        background-color: var(
          --uui-input-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ))
        );
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border-color: var(--uui-color-invalid,#d42054);
      }

      input {
        font-family: inherit;
        padding: 1px var(--uui-size-space-3,9px);
        font-size: inherit;
        color: inherit;
        border-radius: var(--uui-border-radius,3px);
        box-sizing: border-box;
        border: none;
        background: none;
        width: 100%;
        height: inherit;
        text-align: inherit;
        outline: none;
      }

      input[type='password']::-ms-reveal {
        display: none;
      }

      /* TODO: make sure color looks good, or remove it as an option as we want to provide color-picker component */
      input[type='color'] {
        width: 30px;
        padding: 0;
        border: none;
      }

      slot[name='prepend'],
      slot[name='append'] {
        display: flex;
        align-items: center;
        line-height: 1;
        height: 100%;
      }

      ::slotted(uui-input),
      ::slotted(uui-input-lock) {
        height: 100%;
        --uui-input-border-width: 0;
      }
    `],J([a()],L.prototype,"min",2),J([a({type:Number})],L.prototype,"minlength",2),J([a({attribute:"minlength-message"})],L.prototype,"minlengthMessage",2),J([a()],L.prototype,"max",2),J([a({type:Number})],L.prototype,"maxlength",2),J([a({attribute:"maxlength-message"})],L.prototype,"maxlengthMessage",2),J([a({type:Number})],L.prototype,"step",2),J([a({type:Boolean,reflect:!0})],L.prototype,"disabled",2),J([a({type:Boolean,reflect:!0})],L.prototype,"readonly",2),J([a()],L.prototype,"placeholder",2),J([a()],L.prototype,"autocomplete",2),J([a({type:Boolean,reflect:!0,attribute:"auto-width"})],L.prototype,"autoWidth",2),J([a({type:String})],L.prototype,"type",1),J([a({attribute:"inputmode"})],L.prototype,"inputMode",2),J([a({type:String})],L.prototype,"pattern",2),J([a({type:Number,reflect:!1,attribute:"tabindex"})],L.prototype,"tabIndex",2),J([O("#input")],L.prototype,"_input",2),L=J([v("uui-input")],L);class us extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}us.LOCK_CHANGE="lock-change";var Wf=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,Gu=e=>{throw TypeError(e)},cs=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ff(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Wf(t,i,r),r},qu=(e,t,i)=>t.has(e)||Gu("Cannot "+i),Gf=(e,t,i)=>(qu(e,t,"read from private field"),i?i.call(e):t.get(e)),qf=(e,t,i)=>t.has(e)?Gu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Kf=(e,t,i,o)=>(qu(e,t,"write to private field"),t.set(e,i),i),hs;let si=class extends L{constructor(){super(),qf(this,hs,!0),this.unlockLabel="Unlock input",this.lockLabel="Lock input",this.readonly=!0,this.tabIndex=-1}set locked(e){Kf(this,hs,e),this.tabIndex=e?-1:0}get locked(){return Gf(this,hs)}connectedCallback(){super.connectedCallback(),x(this,"uui-icon"),x(this,"uui-button")}_onLockToggle(){this.readonly=this.locked=!this.locked,this.pristine=!1,this.dispatchEvent(new us(us.LOCK_CHANGE)),this.locked||this._input?.focus()}renderIcon(){return this.locked===!0?l`<uui-icon name="lock" .fallback=${ep.strings[0]}></uui-icon>`:l`<uui-icon
          name="unlock"
          .fallback=${op.strings[0]}></uui-icon>`}renderPrepend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onLockToggle}
      compact
      id="lock"
      label="${this.locked?this.unlockLabel:this.lockLabel}">
      ${this.renderIcon()}
    </uui-button>`}};hs=new WeakMap,si.styles=[...L.styles,b`
      #lock {
        height: 100%;

        --uui-button-padding-left-factor: 0.75;
        --uui-button-padding-right-factor: 0.75;
        font-size: 12px;
      }

      :host([locked]) #input {
        cursor: not-allowed;
        opacity: 0.55;
      }
    `],cs([a({type:Boolean,reflect:!0})],si.prototype,"locked",1),cs([a({type:String,reflect:!1,attribute:"unlock-label"})],si.prototype,"unlockLabel",2),cs([a({type:String,reflect:!1,attribute:"lock-label"})],si.prototype,"lockLabel",2),si=cs([v("uui-input-lock")],si);var Xf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,Yn=(e,t,i,o)=>{for(var r=o>1?void 0:o?Yf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Xf(t,i,r),r};let Gi=class extends L{constructor(){super(...arguments),this.passwordType="password"}get type(){return this.passwordType}set type(e){this.passwordType=e}_onPasswordToggle(){this.passwordType==="password"?this.passwordType="text":this.passwordType="password"}connectedCallback(){super.connectedCallback(),x(this,"uui-icon"),x(this,"uui-button"),this.hasAttribute("spellcheck")||(this.spellcheck=!1)}renderIcon(){return this.passwordType==="password"?l`<uui-icon name="see" .fallback=${ip.strings[0]}></uui-icon>`:l`<uui-icon
          name="unsee"
          .fallback=${sp.strings[0]}></uui-icon>`}renderAppend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onPasswordToggle}
      compact
      label="${this.passwordType==="password"?"Show password":"Hide password"}"
      id="eye">
      ${this.renderIcon()}
    </uui-button>`}};Gi.styles=[...L.styles,b`
      #eye {
        height: 100%;
        margin-left: -6px;
      }

      #clear:hover {
        color: black;
      }
    `],Yn([_()],Gi.prototype,"passwordType",2),Yn([a()],Gi.prototype,"type",1),Gi=Yn([v("uui-input-password")],Gi);var Zf=Object.getOwnPropertyDescriptor,Qf=(e,t,i,o)=>{for(var r=o>1?void 0:o?Zf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let ds=class extends g{render(){return l`<slot></slot>`}};ds.styles=[b`
      :host {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-size-4,12px);
        color: var(--uui-color-text,#060606);
      }

      ::slotted(*:first-child)uui-key {
        margin-left: 0px;
      }

      ::slotted(*:last-child)uui-key {
        margin-right: 0px;
      }
    `],ds=Qf([v("uui-keyboard-shortcut")],ds);var Jf=Object.getOwnPropertyDescriptor,eb=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let ps=class extends g{render(){return l`<slot></slot>`}};ps.styles=[b`
      :host {
        background: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border,#d8d7d9);
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        color: var(--uui-color-text,#060606);
        border-radius: 5px;
        margin: 0px 5px;
        padding: 5px 7px;
        box-sizing: border-box;
        user-select: none;
        text-transform: lowercase;
      }
    `],ps=eb([v("uui-key")],ps);var tb=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,vs=(e,t,i,o)=>{for(var r=o>1?void 0:o?ib(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&tb(t,i,r),r};let ni=class extends g{constructor(){super(),this.disabled=!1,this.for=null,this.required=!1,this.addEventListener("click",this._onClick)}_onClick(){if(this.disabled)return;const e=this.getForElement();e&&(e.focus(),e.click())}getForElement(){return typeof this.for=="string"?this.getRootNode()?.getElementById(this.for)||null:this.for||null}render(){return l`
      <slot></slot>
      ${this.required?l`<div id="required">*</div>`:""}
    `}};ni.styles=[b`
      :host {
        font-weight: 700;
      }
      :host([for]) {
        cursor: pointer;
      }
      :host([disabled]) {
        cursor: default;
      }
      #required {
        display: inline;
        color: var(--uui-color-danger,#d42054);
        font-weight: 900;
      }
    `],vs([a({type:Boolean,reflect:!0})],ni.prototype,"disabled",2),vs([a({reflect:!0,attribute:!0})],ni.prototype,"for",2),vs([a({type:Boolean,reflect:!0})],ni.prototype,"required",2),ni=vs([v("uui-label")],ni);var rb=Object.defineProperty,ob=Object.getOwnPropertyDescriptor,Zn=(e,t,i,o)=>{for(var r=o>1?void 0:o?ob(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&rb(t,i,r),r};let qi=class extends g{constructor(){super(...arguments),this._progress=0,this._animationDuration=1}get progress(){return this._progress}set progress(e){const t=this._progress;this._progress=M(e,0,100),this.requestUpdate("progress",t)}get animationDuration(){return this._animationDuration}set animationDuration(e){const t=this._animationDuration;this._animationDuration=e>=0?e:1,this.requestUpdate("animationDuration",t)}render(){return l`
      ${this.progress?l`<div
            id="bar"
            style="max-width: ${this.progress.toString()}%;"></div>`:""}
      <div
        id="bar-anim"
        class=${this.progress?"":"animate"}
        style="animation-duration: ${this.animationDuration}s"></div>
      <div id="bar-background"></div>
    `}};qi.styles=[b`
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 4px;
        overflow: hidden;
        color: var(--uui-color-default,#1b264f);
      }

      #bar,
      #bar-anim,
      #bar-background {
        position: absolute;
        inset: 0; /* top, left, bottom and right = 0*/
        height: 100%;
      }

      #bar-background,
      #bar {
        background: currentColor;
      }

      #bar {
        transition: max-width 120ms ease;
      }

      #bar-background {
        opacity: 0.3;
      }

      #bar-anim {
        transform: scaleX(0.4);
        animation: bar-loading 1s infinite linear;
        background: linear-gradient(
          -90deg,
          white 0%,
          white 25%,
          transparent 100%
        );
      }

      #bar-anim.animate {
        background: linear-gradient(
          -90deg,
          currentColor 0%,
          currentColor 25%,
          transparent 100%
        );
      }

      @keyframes bar-loading {
        0% {
          transform-origin: -175% 0%;
        }
        100% {
          transform-origin: 175% 0%;
        }
      }
    `],Zn([a({type:Number})],qi.prototype,"progress",1),Zn([a({type:Number})],qi.prototype,"animationDuration",1),qi=Zn([v("uui-loader-bar")],qi);var sb=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,Qn=(e,t,i,o)=>{for(var r=o>1?void 0:o?nb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&sb(t,i,r),r};let Ki=class extends g{constructor(){super(...arguments),this.progress=0,this.showProgress=!1,this._resizeObserver=new ResizeObserver(()=>this.onResize()),this._isLarge=!1}_circleStyle(){return this.progress?{strokeDasharray:`${this.progress} 100`}:{strokeDasharray:"100 100"}}firstUpdated(){this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver.disconnect()}onResize(){const e=this.clientHeight>=30;this._isLarge!=e&&(this._isLarge=e,this.requestUpdate())}renderProgress(){return this._isLarge&&this.progress&&this.showProgress?l`<span id="progress-display">${this.progress}</span>`:""}render(){return l`
      <svg
        id="spinner"
        class=${this.progress?"":"animate"}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <circle id="bg" cx="50%" cy="50%" r="16" />
        <g>
          <circle
            id="circle"
            cx="50%"
            cy="50%"
            r="16"
            style=${Je(this._circleStyle())} />
        </g>
      </svg>
      ${this.renderProgress()}
    `}};Ki.styles=[b`
      :host {
        vertical-align: middle;
        line-height: 0;
        overflow: hidden;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 1em;
        height: 1em;
        color: var(--uui-color-default,#1b264f);
      }

      #spinner {
        width: 100%;
        height: 100%;
      }
      #spinner g {
        transform-origin: 50% 50%;
        animation: 18s linear infinite spinner-animation;
      }
      #spinner.animate g {
        animation: 800ms linear infinite spinner-animation;
      }

      @keyframes spinner-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      #spinner.animate #circle {
        animation: 1400ms ease-in infinite circle-animation;
        /** ease-in */
      }

      @keyframes circle-animation {
        0% {
          stroke-dashoffset: -55;
        }
        38% {
          stroke-dashoffset: -88;
        }
        100% {
          stroke-dashoffset: -55;
        }
      }

      svg circle {
        fill: transparent;
        stroke: currentColor;
        stroke-width: 6px;
      }

      #bg {
        opacity: 0.5;
      }

      #circle {
        stroke-linecap: round;
        stroke-dasharray: 0 0;

        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: stroke-dasharray 120ms ease;
      }

      #progress-display {
        position: absolute;
        left: 0;
        top: 50%;
        right: 0;
        stroke: currentColor;
        transform: translateY(-50%);
        font-size: 0.3em;
        font-weight: 700;
        text-align: center;

        /* Center the text */
        padding-top: 0.09em;
      }
    `],Qn([a({type:Number})],Ki.prototype,"progress",2),Qn([a({type:Boolean,reflect:!0,attribute:"show-progress"})],Ki.prototype,"showProgress",2),Ki=Qn([v("uui-loader-circle")],Ki);var ab=Object.getOwnPropertyDescriptor,lb=(e,t,i,o)=>{for(var r=o>1?void 0:o?ab(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let fs=class extends g{render(){return l`
      <div></div>
      <div></div>
      <div></div>
    `}};fs.styles=[b`
      :host {
        color: var(--uui-color-default,#1b264f);
      }

      div {
        display: inline-block;
        width: var(--uui-size-2,6px);
        height: var(--uui-size-2,6px);
        border: 2px solid currentColor;
        border-radius: 100%;
        animation: loaderAnimation 1.4s infinite;
      }

      div:nth-child(1n) {
        animation-delay: 0s;
      }

      div:nth-child(2n) {
        animation-delay: 0.15s;
      }

      div:nth-child(3n) {
        animation-delay: 0.3s;
      }

      @keyframes loaderAnimation {
        0% {
          transform: scale(0.5);
          background-color: currentColor;
        }
        50% {
          transform: scale(1);
          background-color: transparent;
        }
        100% {
          transform: scale(0.5);
          background-color: currentColor;
        }
      }
    `],fs=lb([v("uui-loader")],fs);class lt extends A{}lt.SHOW_CHILDREN="show-children",lt.HIDE_CHILDREN="hide-children",lt.CLICK_LABEL="click-label";var ub=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,Ku=e=>{throw TypeError(e)},Me=(e,t,i,o)=>{for(var r=o>1?void 0:o?cb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ub(t,i,r),r},hb=(e,t,i)=>t.has(e)||Ku("Cannot "+i),db=(e,t,i)=>t.has(e)?Ku("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Xu=(e,t,i)=>(hb(e,t,"access private method"),i),bs,Jn;let ve=class extends Eo(xi(xr(Te("label",g)))){constructor(){super(...arguments),db(this,bs),this.disabled=!1,this.showChildren=!1,this.hasChildren=!1,this.loading=!1,this.caretLabel="Reveal the underlying items",this.iconSlotHasContent=!1,this._labelButtonChanged=e=>{this.selectableTarget=e||this},this._iconSlotChanged=e=>{this.iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._onCaretClicked=()=>{const e=this.showChildren?lt.HIDE_CHILDREN:lt.SHOW_CHILDREN,t=new lt(e,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.showChildren=!this.showChildren)}}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","menu"),x(this,"uui-symbol-expand"),x(this,"uui-loader-bar")}async focus(){await this.updateComplete,this.shadowRoot?.querySelector("#label-button")?.focus?.()}_renderLabelInside(){return l` <slot
        name="icon"
        id="icon"
        style=${this.iconSlotHasContent?"":"display: none;"}
        @slotchange=${this._iconSlotChanged}></slot>
      ${this.renderLabel()}
      <slot name="badge" id="badge"> </slot>`}_renderLabelAsAnchor(){return this.disabled?l` <span id="label-button" ${Ko(this._labelButtonChanged)}>
        ${this._renderLabelInside()}
      </span>`:l` <a
      id="label-button"
      ${Ko(this._labelButtonChanged)}
      href=${w(this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}
      @click=${Xu(this,bs,Jn)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </a>`}_renderLabelAsButton(){return l` <button
      id="label-button"
      ${Ko(this._labelButtonChanged)}
      @click=${Xu(this,bs,Jn)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </button>`}render(){return l`
      <div id="menu-item" aria-label="menuitem" role="menuitem">
        ${this.hasChildren?l`<button
              id="caret-button"
              aria-label=${this.caretLabel}
              @click=${this._onCaretClicked}>
              <uui-symbol-expand
                aria-hidden="true"
                ?open=${this.showChildren}></uui-symbol-expand>
            </button>`:""}
        ${this.href&&this.selectOnly!==!0&&this.selectable!==!0?this._renderLabelAsAnchor():this._renderLabelAsButton()}

        <div id="label-button-background"></div>
        <slot id="actions-container" name="actions"></slot>
        ${this.loading?l`<uui-loader-bar id="loader"></uui-loader-bar>`:""}
      </div>
      ${this.showChildren?l`<slot></slot>`:""}
    `}};bs=new WeakSet,Jn=function(){if(this.selectOnly)return;const e=new lt(lt.CLICK_LABEL);this.dispatchEvent(e)},ve.styles=[b`
      :host {
        box-sizing: border-box;
        display: block;
        --uui-menu-item-child-indent: calc(var(--uui-menu-item-indent, 0) + 1);
        user-select: none;
        --flat-structure-reversed: calc(
          1 - var(--uui-menu-item-flat-structure, 0)
        );
      }

      #menu-item {
        position: relative;
        padding-left: calc(var(--uui-menu-item-indent, 0) * var(--uui-size-4,12px));
        display: grid;
        grid-template-columns:
          calc(var(--flat-structure-reversed) * var(--uui-size-8,24px))
          1fr;
        grid-template-rows: 1fr;
        white-space: nowrap;
      }

      /** Not active, not selected, not disabled: */
      :host(:not([active], [selected], [disabled], [select-mode='highlight']))
        #menu-item
        #label-button:hover
        ~ #label-button-background,
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #label-button:hover,
      :host(:not([active], [selected])) #menu-item #caret-button:hover {
        color: var(
          --uui-menu-item-color-hover,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Active */
      :host([active]) #label-button,
      :host([active]) #caret-button {
        color: var(
          --uui-menu-item-color-active,
          var(--uui-color-current-contrast,#1b264f)
        );
      }
      :host([active]) #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-active,
          var(--uui-color-current,#f5c1bc)
        );
      }
      :host([active]) #label-button:hover ~ #label-button-background,
      :host([active]) #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-active-hover,
          var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ))
        );
      }

      /** Disabled */
      :host([disabled]) #menu-item {
        background-color: var(
          --uui-menu-item-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      /** Selected */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button {
        color: var(
          --uui-menu-item-color-selected,
          var(--uui-color-selected-contrast,#fff)
        );
      }
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-selected,
          var(--uui-color-selected,#3544b1)
        );
      }
      /** Selected, not highlight mode */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button:hover
        ~ #label-button-background,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-selected-hover,
          var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ))
        );
      }

      /** highlight mode, default */
      :host([select-mode='highlight']:not([disabled], [active], [selectable]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }

      /** highlight mode, active */
      :host([select-mode='highlight'][active]:not([disabled]))
        #menu-item
        #label-button-background {
        border-radius: var(--uui-border-radius,3px);
      }

      /** highlight mode, active & selected */
      :host([select-mode='highlight'][active][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-active-selected,
          var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ))
        );
      }

      /** highlight mode, selected */
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button,
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #caret-button {
        color: var(
          --uui-menu-item-color-highlight-selected,
          var(--uui-color-interactive,#1b264f)
        );
      }
      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #label-button:hover {
        color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** highlight mode, selected, selectable caret hover */
      :host([selected][selectable][select-mode='highlight']:not([active]))
        #menu-item
        #caret-button:hover {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(
          --uui-menu-item-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Highlight borders */

      :host([select-mode='highlight']:not([disabled]))
        #menu-item
        #label-button-background::after {
        border-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        opacity: 0;
      }

      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #caret-button:hover::after {
        border-top-left-radius: var(--uui-border-radius,3px);
        border-bottom-left-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px 0 1px 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        border-right: none;
      }

      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button-background::after {
        opacity: 1;
      }

      :host([select-mode='highlight'][selectable]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.33;
      }
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.66;
      }

      /** Buttons */

      :host([disabled]) #label-button {
        cursor: default;
        opacity: 0.5;
      }

      button {
        display: inline-flex;
        align-items: center;

        font-family: inherit;
        font-size: inherit;

        padding: 0;
        text-align: left;
        border: none;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
      }

      #label-button {
        position: relative;
        flex-grow: 1;
        grid-column-start: 2;
        white-space: nowrap;
        overflow: hidden;
        padding-right: var(--uui-size-space-3,9px);
        padding-left: calc(
          var(--uui-menu-item-flat-structure) * var(--uui-size-space-3,9px)
        );
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: currentColor;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
        font-weight: inherit;
      }

      #label-button .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span#label-button {
        pointer-events: none; /* avoid hovering state on this. */
      }

      #caret-button {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-inline-end: 3px;
        color: var(--uui-color-interactive,#1b264f);
      }

      #label-button-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--uui-menu-item-border-radius, 0px);
      }

      #actions-container {
        opacity: 0;
        width: 0;
        grid-column-start: 3;
        overflow: hidden;
      }
      :host(:not([disabled])) #menu-item:hover #actions-container,
      :host(:not([disabled])) #menu-item:focus #actions-container,
      :host(:not([disabled])) #menu-item:focus-within #actions-container {
        opacity: 1;
        width: auto;
      }

      #loader {
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      #icon {
        display: inline-flex;
        margin-right: var(--uui-size-2,6px);
      }

      #badge {
        font-size: 12px;
        --uui-badge-position: relative;
        --uui-badge-position: auto;
        display: block;
        margin-left: 6px;
      }

      /** Focus styling */

      :host([select-mode='highlight']) #label-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #label-button:focus-visible::after {
        content: '';
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        position: absolute;
        inset: 3px 3px 3px -5px;
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      :host([select-mode='highlight']) #caret-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #caret-button:focus-visible::after {
        content: '';
        position: absolute;
        inset: 3px;
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      /** Slots */

      slot:not([name]) {
        position: relative;
        display: block;
        width: 100%;
      }
      slot:not([name]) {
        --uui-menu-item-indent: var(--uui-menu-item-child-indent);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-base-unit) * 4);
        margin-right: var(--uui-size-base-unit);
      }
    `],Me([a({type:Boolean,reflect:!0})],ve.prototype,"disabled",2),Me([a({type:Boolean,reflect:!0,attribute:"show-children"})],ve.prototype,"showChildren",2),Me([a({type:Boolean,attribute:"has-children"})],ve.prototype,"hasChildren",2),Me([a({type:Boolean,attribute:"loading"})],ve.prototype,"loading",2),Me([a({type:String})],ve.prototype,"href",2),Me([a({type:String})],ve.prototype,"target",2),Me([a({type:String})],ve.prototype,"rel",2),Me([a({type:String,attribute:"select-mode",reflect:!0})],ve.prototype,"selectMode",2),Me([a({type:String,attribute:"caret-label"})],ve.prototype,"caretLabel",2),Me([_()],ve.prototype,"iconSlotHasContent",2),ve=Me([v("uui-menu-item")],ve);var pb=Object.defineProperty,vb=Object.getOwnPropertyDescriptor,Xi=(e,t,i,o)=>{for(var r=o>1?void 0:o?vb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&pb(t,i,r),r};const Yu="uui:modal-open",Yi="uui:modal-close",Zu="uui:modal-close-end";class we extends g{constructor(){super(...arguments),this.isOpen=!1,this.isClosing=!1,this.index=0,this.uniqueIndex=0,this._transitionDuration=250,this.open=t=>{t?.preventDefault(),t?.stopImmediatePropagation();const i=new CustomEvent(Yu,{cancelable:!0}),o=new CustomEvent("open",{cancelable:!0});this.dispatchEvent(i),this.dispatchEvent(o),!(i.defaultPrevented||o.defaultPrevented)&&this._openModal()},this.close=t=>{t?.preventDefault(),t?.stopImmediatePropagation();const i=new CustomEvent(Yi,{cancelable:!0});this.dispatchEvent(i),!i.defaultPrevented&&this.forceClose()}}get transitionDuration(){return this._transitionDuration}set transitionDuration(t){this._transitionDuration=t,this.style.setProperty("--uui-modal-transition-duration",this._transitionDuration+"ms")}firstUpdated(t){super.firstUpdated(t),this.isClosing||this.open()}_openModal(){this.isOpen=!0,this._dialogElement?.showModal(),this._dialogElement?.addEventListener("cancel",this.close)}forceClose(){this.isClosing=!0,this.isOpen=!1,this._dialogElement?.close(),this.dispatchEvent(new CustomEvent("close-end")),this.dispatchEvent(new CustomEvent(Zu)),this.remove()}}we.styles=[b`
      dialog {
        display: block;
        margin: 0;
        padding: 0;
        max-width: unset;
        max-height: unset;
        border: none;
        background: none;
        color: var(--uui-color-text,#060606);
      }
      dialog::backdrop {
        background: none;
        opacity: 0;
      }
      dialog::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
        pointer-events: none;
        opacity: 1;
        transition: opacity var(--uui-modal-transition-duration, 250ms);
        z-index: 1;
      }
      :host([index='0']) dialog::after {
        opacity: 0;
      }
    `],Xi([O("dialog")],we.prototype,"_dialogElement",2),Xi([a({type:Boolean,reflect:!0,attribute:"is-open"})],we.prototype,"isOpen",2),Xi([a({type:Boolean,reflect:!0,attribute:"is-closing"})],we.prototype,"isClosing",2),Xi([a({type:Number,reflect:!0})],we.prototype,"index",2),Xi([a({type:Number,reflect:!0,attribute:"unique-index"})],we.prototype,"uniqueIndex",2),Xi([a({type:Number,attribute:"transition-duration"})],we.prototype,"transitionDuration",1);var fb=Object.defineProperty,bb=Object.getOwnPropertyDescriptor,Qu=e=>{throw TypeError(e)},Ju=(e,t,i,o)=>{for(var r=o>1?void 0:o?bb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&fb(t,i,r),r},gb=(e,t,i)=>t.has(e)||Qu("Cannot "+i),ec=(e,t,i)=>(gb(e,t,"read from private field"),i?i.call(e):t.get(e)),mb=(e,t,i)=>t.has(e)?Qu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),gs,ea;let Zi=class extends we{constructor(){super(...arguments),mb(this,gs),this.size="full"}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-offset",-ec(this,gs,ea)+"px")}updated(e){super.updated(e),this.uniqueIndex>10?this.setAttribute("hide",""):this.removeAttribute("hide")}forceClose(){this.isClosing||(this.isClosing=!0,this.style.setProperty("--uui-modal-offset",-ec(this,gs,ea)+"px"),setTimeout(()=>{super.forceClose()},this.transitionDuration))}render(){return l`<dialog>
      <slot></slot>
    </dialog>`}};gs=new WeakSet,ea=function(){return this._dialogElement?.getBoundingClientRect().width??0},Zi.styles=[...we.styles,b`
      :host {
        outline: none;
        --uui-modal-sidebar-left-gap: 24px;
        --uui-modal-sidebar-background: var(--uui-color-surface,#fff);
      }
      @media (min-width: 600px) {
        :host {
          --uui-modal-sidebar-left-gap: 64px;
        }
      }
      dialog {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        max-width: calc(100% - var(--uui-modal-sidebar-left-gap));
        margin-left: auto;
        right: var(--uui-modal-offset);
        transition: right var(--uui-modal-transition-duration, 250ms);
        background: var(
          --uui-modal-sidebar-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
      :host([hide]) dialog {
        display: none;
      }
      :host([size='large']) dialog {
        max-width: min(1200px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='medium']) dialog {
        max-width: min(800px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='small']) dialog {
        max-width: min(500px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
    `],Ju([a({reflect:!0})],Zi.prototype,"size",2),Zi=Ju([v("uui-modal-sidebar")],Zi);var _b=Object.defineProperty,yb=Object.getOwnPropertyDescriptor,tc=e=>{throw TypeError(e)},Qi=(e,t,i,o)=>{for(var r=o>1?void 0:o?yb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&_b(t,i,r),r},ic=(e,t,i)=>t.has(e)||tc("Cannot "+i),Vr=(e,t,i)=>(ic(e,t,"read from private field"),i?i.call(e):t.get(e)),ta=(e,t,i)=>t.has(e)?tc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ms=(e,t,i)=>(ic(e,t,"access private method"),i),ia,Ji,er,ra,oa;let ut=class extends g{constructor(){super(),ta(this,er),this.sidebarGap=64,this.transitionDurationMS=250,ta(this,ia,()=>{const e=this._modals??[];if(this._modals=this.modalSlot?.assignedElements({flatten:!0}).filter(o=>o instanceof we)??[],e.filter(o=>this._modals.indexOf(o)===-1).forEach(o=>o.removeEventListener(Yi,Vr(this,Ji))),this._modals.filter(o=>e.indexOf(o)===-1).forEach(o=>o.addEventListener(Yi,Vr(this,Ji))),this._sidebars=this._modals.filter(o=>o instanceof Zi),this._modals.length===0){this.removeAttribute("backdrop");return}ms(this,er,ra).call(this),ms(this,er,oa).call(this)}),ta(this,Ji,e=>{if(e.stopImmediatePropagation(),e.target?.removeEventListener(Yi,Vr(this,Ji)),!this._modals||this._modals.length<=1){this.removeAttribute("backdrop");return}ms(this,er,ra).call(this),ms(this,er,oa).call(this)}),this.addEventListener(Yi,Vr(this,Ji))}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-transition-duration",this.transitionDurationMS+"ms")}render(){return l`<slot @slotchange=${Vr(this,ia)}></slot>`}};ia=new WeakMap,Ji=new WeakMap,er=new WeakSet,ra=function(){this.setAttribute("backdrop","");const e=this._modals?.filter(t=>!t.isClosing).reverse()??[];e?.forEach((t,i)=>{t.index=i,t.transitionDuration=this.transitionDurationMS}),e?.forEach(t=>{const i=e?.filter(o=>o.constructor.name===t.constructor.name);t.uniqueIndex=i?.indexOf(t)??0})},oa=function(){requestAnimationFrame(()=>{let e=0;const t=this._sidebars?.filter(i=>!i.isClosing).reverse()??[];for(let i=0;i<t.length;i++){const o=t[i],r=t[i+1],s=e;if(o.updateComplete.then(()=>{o.style.setProperty("--uui-modal-offset",s+"px")}),r?.hasAttribute("hide"))break;const n=o.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,u=r?.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,c=n+e+this.sidebarGap-u;e=c>0?c:0}})},ut.styles=b`
    :host {
      position: fixed;
      --uui-modal-color-backdrop: rgba(0, 0, 0, 0.5);
    }
    :host::after {
      content: '';
      position: fixed;
      inset: 0;
      background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--uui-modal-transition-duration, 250ms);
    }
    :host([backdrop])::after {
      opacity: 1;
    }
  `,Qi([O("slot")],ut.prototype,"modalSlot",2),Qi([_()],ut.prototype,"_modals",2),Qi([_()],ut.prototype,"_sidebars",2),Qi([a({type:Number})],ut.prototype,"sidebarGap",2),Qi([a({type:Number})],ut.prototype,"transitionDurationMS",2),ut=Qi([v("uui-modal-container")],ut);var wb=Object.getOwnPropertyDescriptor,xb=(e,t,i,o)=>{for(var r=o>1?void 0:o?wb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let _s=class extends we{render(){return l`
      <dialog>
        <slot></slot>
      </dialog>
    `}};_s.styles=[...we.styles,b`
      :host {
        outline: none;
        --uui-modal-dialog-background: var(--uui-color-surface,#fff);
      }
      dialog {
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: var(
          --uui-modal-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 4)
        );
        background: var(
          --uui-modal-dialog-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
    `],_s=xb([v("uui-modal-dialog")],_s);class Ot extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Ot.CHANGE="change";var $b=Object.defineProperty,kb=Object.getOwnPropertyDescriptor,xe=(e,t,i,o)=>{for(var r=o>1?void 0:o?kb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&$b(t,i,r),r};const Cb=45,sa=(e,t,i)=>Math.min(Math.max(e,t),i),Eb=(e,t)=>Array.from({length:t-e+1},(i,o)=>e+o);let ae=class extends g{constructor(){super(...arguments),this._observer=new ResizeObserver(this._calculateRange.bind(this)),this.label="",this.ariaLabel="",this.firstLabel="First",this.previousLabel="Previous",this.nextLabel="Next",this.lastLabel="Last",this._total=100,this._range=0,this._visiblePages=[],this._current=1}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","navigation"),this._visiblePages=this._generateVisiblePages(this.current),x(this,"uui-button"),x(this,"uui-button-group")}disconnectedCallback(){this._observer.disconnect()}firstUpdated(){this._observer.observe(this._pagesGroup),this.updateLabel(),this._calculateRange()}willUpdate(e){(e.has("current")||e.has("label"))&&this.updateLabel()}updateLabel(){this.ariaLabel=`${this.label||"Pagination navigation"}. Current page: ${this.current}.`}_calculateRange(){const e=this.offsetWidth,t=Array.from(this._navButtons).reduce((r,s)=>r+s.getBoundingClientRect().width,0),o=(e-t)/Cb/2;this._range=Math.max(1,Math.floor(o)),this._visiblePages=this._generateVisiblePages(this.current)}_generateVisiblePages(e){const t=e<this._range?1:e<this.total-this._range?e-this._range:this.total-this._range*2,i=e<=this._range?this._range*2+1:e<this.total-this._range?e+this._range:this.total;return Eb(sa(t,1,this.total),sa(i,1,this.total))}get total(){return this._total}set total(e){this._total=e,this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("total",e)}get current(){return this._current}set current(e){const t=this._current;this._current=sa(e,1,this.total),this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("current",t)}goToNextPage(){this.current++,this.dispatchEvent(new Ot(Ot.CHANGE))}goToPreviousPage(){this.current--,this.dispatchEvent(new Ot(Ot.CHANGE))}goToPage(e){this.current=e,this.dispatchEvent(new Ot(Ot.CHANGE))}focusActivePage(){requestAnimationFrame(()=>{const e=this.renderRoot.querySelector(".active");e&&e.focus()})}renderFirst(){return l`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.firstLabel}
      ?disabled=${this._current===1}
      @click=${()=>this.goToPage(1)}></uui-button>`}renderPrevious(){return l`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.previousLabel}
      ?disabled=${this._current===1}
      @click=${this.goToPreviousPage}></uui-button>`}renderNext(){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      class="nav"
      label=${this.nextLabel}
      ?disabled=${this._current===this.total}
      @click=${this.goToNextPage}></uui-button>`}renderLast(){return l`
      <uui-button
        compact
        look="outline"
        role="listitem"
        class="nav"
        label=${this.lastLabel}
        ?disabled=${this.total===this._current}
        @click=${()=>this.goToPage(this.total)}></uui-button>
    `}renderDots(){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      tabindex="-1"
      class="dots"
      label="More pages"
      >...</uui-button
    > `}renderPage(e){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      label="Go to page ${e}"
      class=${"page"+(e===this._current?" active":"")}
      tabindex=${e===this._current?"-1":""}
      @click=${()=>{e!==this._current&&(this.goToPage(e),this.focusActivePage())}}>
      ${e}
    </uui-button>`}renderNavigationLeft(){return l` ${this.renderFirst()} ${this.renderPrevious()}
    ${this._visiblePages.includes(1)?"":this.renderDots()}`}renderNavigationRight(){return l`${this._visiblePages.includes(this.total)?"":this.renderDots()}
    ${this.renderNext()} ${this.renderLast()}`}render(){return l`<uui-button-group role="list" id="pages">
      ${this.renderNavigationLeft()}
      ${this._visiblePages.map(e=>this.renderPage(e))}
      ${this.renderNavigationRight()}
    </uui-button-group>
    `}};ae.styles=[b`
      uui-button-group {
        width: 100%;
      }

      uui-button {
        --uui-button-border-color: var(--uui-color-border-standalone,#c2c2c2);
        --uui-button-border-color-hover: var(--uui-color-interactive-emphasis,#3544b1);
        --uui-button-border-color-disabled: var(--uui-color-border-standalone,#c2c2c2);
      }

      .page {
        min-width: 36px;
        max-width: 72px;
      }
      .page.active {
        --uui-button-background-color: var(--uui-color-current,#f5c1bc);
      }

      .nav {
        min-width: 72px;
      }

      .dots {
        pointer-events: none;
      }

      .active {
        pointer-events: none;
      }
    `],xe([bh("uui-button.nav")],ae.prototype,"_navButtons",2),xe([O("#pages")],ae.prototype,"_pagesGroup",2),xe([a()],ae.prototype,"label",2),xe([a({reflect:!0,attribute:"aria-label"})],ae.prototype,"ariaLabel",2),xe([a()],ae.prototype,"firstLabel",2),xe([a()],ae.prototype,"previousLabel",2),xe([a()],ae.prototype,"nextLabel",2),xe([a()],ae.prototype,"lastLabel",2),xe([a({type:Number})],ae.prototype,"total",1),xe([_()],ae.prototype,"_range",2),xe([_()],ae.prototype,"_visiblePages",2),xe([a({type:Number})],ae.prototype,"current",1),ae=xe([v("uui-pagination")],ae);class na extends A{}na.CLOSE="close";var Pb=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,Br=(e,t,i,o)=>{for(var r=o>1?void 0:o?Sb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Pb(t,i,r),r};function ys(e,t,i){return e<t?t:e>i?i:e}let It=class extends g{constructor(){super(...arguments),this.scrollEventHandler=this._updatePlacement.bind(this),this._open=!1,this._placement="bottom-start",this._currentPlacement=null,this._scrollParents=[],this.margin=0,this._onTriggerSlotChanged=e=>{this._trigger=e.target.assignedElements({flatten:!0})[0]},this._intersectionCallback=e=>{e.forEach(t=>{t.isIntersecting===!1&&(this._startScrollListener(),this._updatePlacement())})},this._onKeyUp=e=>{if(e.key==="Escape"){this._triggerPopoverClose();return}},this._onDocumentClick=e=>{e.composedPath().includes(this)||this._triggerPopoverClose()}}get placement(){return this._placement}set placement(e){const t=this._placement;this._placement=e||"bottom-start",this._currentPlacement=null,this._updatePlacement(),this.requestUpdate("placement",t)}get open(){return this._open}set open(e){const t=this._open;this._open=e,e?this._openPopover():this._closePopover(),this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this._getScrollParents()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("scroll",this.scrollEventHandler),this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),this._scrollParents=[]}_openPopover(){this.containerElement&&(this.containerElement.style.opacity="0",document.addEventListener("mousedown",this._onDocumentClick),document.addEventListener("keyup",this._onKeyUp),this._currentPlacement=null,requestAnimationFrame(()=>{this._updatePlacement(),this._createIntersectionObserver(),this.containerElement.style.opacity="1"}))}_closePopover(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),this._currentPlacement=null}_triggerPopoverClose(){const e=new na(na.CLOSE,{cancelable:!0});this.dispatchEvent(e),!e.defaultPrevented&&(this.open=!1)}_getScrollParents(){const e=this.shadowRoot.host;let t=getComputedStyle(e);if(t.position==="fixed")return;const i=t.position==="absolute",o=/(auto|scroll)/;let r=e;for(;r=r.parentElement;)if(t=getComputedStyle(r),!(i&&t.position==="static")&&(o.test(t.overflow+t.overflowY+t.overflowX)&&this._scrollParents.push(r),t.position==="fixed"))return;this._scrollParents.push(document.body)}_createIntersectionObserver(){if(this.intersectionObserver)return;const e={root:null,rootMargin:"0px",threshold:1};this.intersectionObserver=new IntersectionObserver(this._intersectionCallback,e),this.intersectionObserver.observe(this.containerElement)}_startScrollListener(){this._scrollParents.forEach(e=>{e.addEventListener("scroll",this.scrollEventHandler)}),document.addEventListener("scroll",this.scrollEventHandler)}_stopScrollListener(){this._scrollParents.forEach(e=>{e.removeEventListener("scroll",this.scrollEventHandler)}),document.removeEventListener("scroll",this.scrollEventHandler)}_updatePlacement(){if(!this.shadowRoot)return;const e=this.containerElement;if(!e)return;const t=this.containerElement?.getBoundingClientRect(),i=this._trigger?.getBoundingClientRect();if(i!=null&&t!=null){const o=this._scrollParents.map(Le=>Le.getBoundingClientRect());this._currentPlacement=this._currentPlacement||this._placement,this._placement!=="auto"&&(this._currentPlacement=this._managePlacementFlip(this._currentPlacement,t,o));let r=this._currentPlacement.indexOf("top")!==-1,s=this._currentPlacement.indexOf("bottom")!==-1,n=this._currentPlacement.indexOf("left")!==-1,u=this._currentPlacement.indexOf("right")!==-1;const c=this._currentPlacement.indexOf("-start")!==-1,p=this._currentPlacement.indexOf("-end")!==-1;let f=.5,h=.5,E=.5,d=.5,y=0,I=0;if(this.placement==="auto"){const Le=this._scrollParents[0],gr=Le.clientWidth,Lt=Le.clientHeight,vi=i.x-t.width,fi=gr-(i.x+i.width)-t.width,Fs=i.y-t.height,uo=Lt-(i.y+i.height)-t.height;let co=.5,ho=.5;const Wc=Math.max(vi,fi);let La=Math.max(Fs,uo);uo>Fs&&uo>this.margin&&(La+=9999),Wc>La?(vi>fi?(co=0,n=!0):(co=1,u=!0),y=this.margin):(Fs>uo?(ho=0,r=!0):(ho=1,s=!0),I=this.margin),f=co,h=ho,E=1-co,d=1-ho}else r&&(d=1,h=0),s&&(d=0,h=1),(r||s)&&(I=this.margin,c&&(E=0,f=0),p&&(E=1,f=1)),n&&(E=1,f=0),u&&(E=0,f=1),(n||u)&&(y=this.margin,c&&(d=0,h=0),p&&(d=1,h=1));const $=-t.width*E+i.width*f-y*(E*2-1),V=-t.height*d+i.height*h-I*(d*2-1);let ie=$,yt=V;r||s?(this._scrollParents.forEach((Le,gr)=>{const Lt=Le===document.body?0:o[gr].x,vi=-i.x+Lt,fi=Le.clientWidth-i.x-i.width+$+Lt-(t.width-i.width)*(1-f);ie=ys(ie,vi,fi)}),ie=ys(ie,-t.width,i.width)):(n||u)&&(this._scrollParents.forEach((Le,gr)=>{const Lt=Le===document.body?0:o[gr].y,vi=-i.y+Lt,fi=Le.clientHeight-i.y-i.height+V+Lt-(t.height-i.height)*(1-h);yt=ys(yt,vi,fi)}),yt=ys(yt,-t.height,i.height)),(this._positionX!==ie||this._positionY!==yt)&&(this._positionX=ie,this._positionY=yt,$===ie&&V===yt&&this._stopScrollListener(),e.style.left=`${this._positionX}px`,e.style.top=`${this._positionY}px`)}}_managePlacementFlip(e,t,i){const r=e.split("-"),s=r[0],n=r[1]||null;let u;return this._scrollParents.some((c,p)=>{const f=c===document.body?0:i[p].x,h=c===document.body?0:i[p].y;return s==="top"&&t.y-2<=h?(u="bottom",!0):s==="bottom"&&t.y+t.height+2>=c.clientHeight+h?(u="top",!0):s==="left"&&t.x-2<=f?(u="right",!0):s==="right"&&t.x+t.width+2>=c.clientWidth+f?(u="left",!0):!1}),u?(this._startScrollListener(),u+(n?`-${n}`:"")):e}render(){return l`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this._onTriggerSlotChanged}></slot>
      <div id="container">
        ${this._open?l`<slot name="popover"></slot>`:""}
      </div>
    `}};It.styles=[b`
      :host {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      #container {
        position: absolute;
        width: 100%;
        z-index: var(--uui-popover-z-index, 1);
      }
      slot[name='popover'] {
        display: block;
      }
      #trigger {
        position: relative;
        width: 100%;
      }

      slot[name='trigger']::slotted(uui-button) {
        --uui-button-border-radius: var(
          --uui-popover-toggle-slot-button-border-radius
        );
        --uui-button-merge-border-left: var(
          --uui-popover-toggle-slot-button-merge-border-left
        );
      }
    `],Br([O("#container")],It.prototype,"containerElement",2),Br([a({type:Number})],It.prototype,"margin",2),Br([a({type:String,reflect:!0})],It.prototype,"placement",1),Br([a({type:Boolean,reflect:!0})],It.prototype,"open",1),It=Br([v("uui-popover")],It);var Ob=Object.defineProperty,Ib=Object.getOwnPropertyDescriptor,rc=e=>{throw TypeError(e)},ai=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ib(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ob(t,i,r),r},aa=(e,t,i)=>t.has(e)||rc("Cannot "+i),D=(e,t,i)=>(aa(e,t,"read from private field"),i?i.call(e):t.get(e)),ct=(e,t,i)=>t.has(e)?rc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ws=(e,t,i,o)=>(aa(e,t,"write to private field"),t.set(e,i),i),At=(e,t,i)=>(aa(e,t,"access private method"),i),ht,tr,li,Hr,xs,dt,jr,la,Fe,ua,oc,ca,sc,ha;let Ge=class extends g{constructor(){super(...arguments),ct(this,Fe),this.margin=0,this._placement="bottom-start",this._open=!1,this._actualPlacement=this._placement,ct(this,ht,null),ct(this,tr,[]),ct(this,li,null),ct(this,Hr,{width:0,height:0}),ct(this,xs,e=>{if(this._open=e.newState==="open",ws(this,ht,Zd(this,"popovertarget",this.id)),At(this,Fe,sc).call(this),D(this,ht)?.dispatchEvent(new CustomEvent("uui-popover-before-toggle",{bubbles:!1,composed:!1,detail:{oldState:e.oldState,newState:e.newState}})),!this._open){At(this,Fe,ca).call(this);return}At(this,Fe,oc).call(this),requestAnimationFrame(()=>{D(this,dt).call(this)})}),ct(this,dt,()=>{this._open&&(this._actualPlacement=this._placement,this.style.opacity="0",D(this,jr).call(this,3))}),ct(this,jr,e=>{if(D(this,la).call(this),e--,D(this,ht)===null)return;const t=this._actualPlacement.indexOf("top")!==-1,i=this._actualPlacement.indexOf("bottom")!==-1,o=this._actualPlacement.indexOf("left")!==-1,r=this._actualPlacement.indexOf("right")!==-1,s=this._actualPlacement.indexOf("-start")!==-1,n=this._actualPlacement.indexOf("-end")!==-1,u=D(this,ht).getBoundingClientRect(),c=this.getBoundingClientRect();let p=0,f=0;i&&(p=u.top+u.height,s&&(f=u.left),n&&(f=u.left+u.width-c.width),!s&&!n&&(f=u.left+u.width/2-c.width/2)),t&&(p=u.top-c.height,s&&(f=u.left),n&&(f=u.left+u.width-c.width),!s&&!n&&(f=u.left+u.width/2-c.width/2)),o&&(f=u.left-c.width,s&&(p=u.top),n&&(p=u.top+u.height-c.height),!s&&!n&&(p=u.top+u.height/2-c.height/2)),r&&(f=u.left+u.width,s&&(p=u.top),n&&(p=u.top+u.height-c.height),!s&&!n&&(p=u.top+u.height/2-c.height/2));const h=window.innerWidth,E=window.innerHeight,d=Math.min(0,u.top+u.height),y=Math.max(Math.min(p,E-c.height),u.top-c.height);if(Math.max(d,y)!==p&&(t||i)&&e>0){At(this,Fe,ua).call(this),D(this,jr).call(this,e);return}p=Math.max(d,y);const $=Math.min(0,u.left+u.width),V=Math.max(Math.min(f,h-c.width),u.left-c.width),ie=Math.max($,V);if(ie!==f&&(o||r)&&e>0){At(this,Fe,ua).call(this),D(this,jr).call(this,e);return}f=ie,(p+c.height<0||p>E||f+c.width<0||f>h)&&this.hidePopover(),this.style.transform=`translate(${f}px, ${p}px)`,this.style.opacity="1"}),ct(this,la,()=>{const e={top:"bottom",bottom:"top",left:"right",right:"left"};let t=this._actualPlacement.split("-")[0];t=e[t]||t,t=t.charAt(0).toUpperCase()+t.slice(1);const i=`padding${t}`;this.style.padding="0",this.style[i]=`${this.margin}px`})}get open(){return this._open}get placement(){return this._placement}set placement(e){this._placement=e,this._actualPlacement=e,D(this,dt).call(this)}connectedCallback(){this.hasAttribute("popover")||this.setAttribute("popover",""),super.connectedCallback(),this.addEventListener("beforetoggle",D(this,xs)),D(this,li)||(ws(this,li,new ResizeObserver(e=>{const t=e[0],i=t.contentRect.width,o=t.contentRect.height;i===D(this,Hr).width&&o===D(this,Hr).height||(ws(this,Hr,{width:i,height:o}),D(this,dt).call(this))})),D(this,li).observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("beforetoggle",D(this,xs)),At(this,Fe,ca).call(this),D(this,li)?.disconnect(),ws(this,li,null)}render(){return l`<slot></slot>`}};ht=new WeakMap,tr=new WeakMap,li=new WeakMap,Hr=new WeakMap,xs=new WeakMap,dt=new WeakMap,jr=new WeakMap,la=new WeakMap,Fe=new WeakSet,ua=function(){const[e,t]=this._actualPlacement.split("-"),i=e==="top"?"bottom":e==="bottom"?"top":e==="left"?"right":"left";this._actualPlacement=`${i}-${t}`},oc=function(){D(this,tr).forEach(e=>{e.addEventListener("scroll",D(this,dt),{passive:!0})}),document.addEventListener("scroll",D(this,dt),{passive:!0})},ca=function(){D(this,tr).forEach(e=>{e.removeEventListener("scroll",D(this,dt))}),document.removeEventListener("scroll",D(this,dt))},sc=function(){if(!D(this,ht))return;let e=getComputedStyle(D(this,ht));if(e.position==="fixed")return;const t=e.position==="absolute",i=/(auto|scroll)/;let o=D(this,ht);for(;o;){if(e=getComputedStyle(o),t&&e.position==="static"){o=At(this,Fe,ha).call(this,o);continue}if(i.test(e.overflow+e.overflowY+e.overflowX)&&D(this,tr).push(o),e.position==="fixed")return;o=At(this,Fe,ha).call(this,o)}D(this,tr).push(document.body)},ha=function(e){return e?.parentElement?e.parentElement:e?.getRootNode()?.host},Ge.styles=[b`
      :host {
        margin: 0;
        width: fit-content;
        height: fit-content;
        border: none;
        border-radius: 0;
        padding: 0;
        background-color: none;
        background: none;
        overflow: visible;
        color: var(--uui-color-text,#060606);
      }
    `],ai([a({type:Number})],Ge.prototype,"margin",2),ai([a({type:Boolean})],Ge.prototype,"open",1),ai([a({type:String,reflect:!0})],Ge.prototype,"placement",1),ai([_()],Ge.prototype,"_placement",2),ai([_()],Ge.prototype,"_open",2),ai([_()],Ge.prototype,"_actualPlacement",2),Ge=ai([v("uui-popover-container")],Ge);var Ab=Object.defineProperty,Ub=Object.getOwnPropertyDescriptor,nc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ub(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ab(t,i,r),r};const zb=(e,t,i)=>Math.min(Math.max(e,t),i);let Rr=class extends g{constructor(){super(...arguments),this._progress=0}get progress(){return this._progress}set progress(e){const t=this._progress;this._progress=zb(e,0,100),this.requestUpdate("progress",t)}_getProgressStyle(){return{width:`${this._progress}%`}}render(){return l`
      <div id="bar" style=${Je(this._getProgressStyle())}></div>
    `}};Rr.styles=[b`
      :host {
        width: 100%;
        height: 4px;
        position: relative;
        overflow: hidden;
        background: var(--uui-color-surface-alt,#f3f3f5);
        border-radius: 100px;
        display: inline-block;
      }

      #bar {
        transition: width 250ms ease;
        background: var(--uui-color-positive,#0b8152);
        height: 100%;
        width: 0%;
      }
    `],nc([a({type:Number})],Rr.prototype,"progress",1),Rr=nc([v("uui-progress-bar")],Rr);class ir extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}ir.CHANGE="change";var Mb=Object.defineProperty,Db=Object.getOwnPropertyDescriptor,ac=e=>{throw TypeError(e)},Ut=(e,t,i,o)=>{for(var r=o>1?void 0:o?Db(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Mb(t,i,r),r},Lb=(e,t,i)=>t.has(e)||ac("Cannot "+i),Tb=(e,t,i)=>t.has(e)?ac("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Nb=(e,t,i)=>(Lb(e,t,"access private method"),i),da,lc;let Oe=class extends g{constructor(){super(...arguments),Tb(this,da),this.name="",this.value="",this.label="",this.checked=!1,this.disabled=!1,this.readonly=!1}focus(){this._inputElement.focus()}click(){this._inputElement.click()}uncheck(){this.checked=!1}check(){this.checked=!0}makeFocusable(){this.disabled||this.removeAttribute("tabindex")}makeUnfocusable(){this.disabled||this.setAttribute("tabindex","-1")}render(){return l` <label>
      <input
        id="input"
        type="radio"
        name=${this.name}
        value=${this.value}
        .checked=${this.checked}
        .disabled=${this.disabled||this.readonly}
        @change=${Nb(this,da,lc)} />
      <div id="button"></div>
      <div id="label">
        ${this.label?l`<span>${this.label}</span>`:l`<slot></slot>`}
      </div>
    </label>`}};da=new WeakSet,lc=function(e){e.stopPropagation();const t=this._inputElement.checked;this.checked=t,t&&this.focus(),this.dispatchEvent(new ir(ir.CHANGE))},Oe.styles=[Oo,b`
      :host {
        display: block;
        box-sizing: border-box;
        font-family: inherit;
        color: currentColor;
        --uui-radio-button-size: var(--uui-size-6,18px);
        margin: var(--uui-size-2,6px) 0;
      }

      label {
        position: relative;
        box-sizing: border-box;
        user-select: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        line-height: 18px;
      }

      :host([readonly]) label {
        cursor: default;
      }

      #input {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
      }

      .label {
        margin-top: 2px;
      }

      #button {
        box-sizing: border-box;
        display: inline-block;
        width: var(--uui-radio-button-size, 18px);
        height: var(--uui-radio-button-size, 18px);
        background-color: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border-standalone,#c2c2c2);
        border-radius: 100%;
        margin-right: calc(var(--uui-size-2,6px) * 2);
        position: relative;
        flex: 0 0 var(--uui-radio-button-size);
      }

      #button::after {
        content: '';
        width: calc(var(--uui-radio-button-size) / 2);
        height: calc(var(--uui-radio-button-size) / 2);
        background-color: var(--uui-color-selected,#3544b1);
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.15s ease-in-out;
      }

      :host(:hover) #button {
        border: 1px solid var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host(:focus) {
        outline: none;
      }
      :host(:focus-within) input:focus-visible + #button {
        outline: 2px solid var(--uui-color-focus,#3879ff);
      }

      input:checked ~ #button::after {
        transform: translate(-50%, -50%) scale(1);
      }

      input:checked ~ #button {
        border: 1px solid var(--uui-color-selected,#3544b1);
      }

      input:checked:hover ~ #button {
        border: 1px solid var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:checked:hover ~ #button::after {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }
      :host([disabled]) .label {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button::after {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]:active) #button {
        animation: ${Io};
      }

      @media (prefers-reduced-motion) {
        :host([disabled]:active) #button {
          animation: none;
        }

        #button::after {
          transition: none;
        }
      }
    `],Ut([O("#input")],Oe.prototype,"_inputElement",2),Ut([a({type:String})],Oe.prototype,"name",2),Ut([a({type:String})],Oe.prototype,"value",2),Ut([a({type:String})],Oe.prototype,"label",2),Ut([a({type:Boolean,reflect:!0})],Oe.prototype,"checked",2),Ut([a({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2),Ut([a({type:Boolean,reflect:!0})],Oe.prototype,"readonly",2),Oe=Ut([v("uui-radio")],Oe);class $s extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}$s.CHANGE="change";var Vb=Object.defineProperty,Bb=Object.getOwnPropertyDescriptor,uc=e=>{throw TypeError(e)},pa=(e,t,i,o)=>{for(var r=o>1?void 0:o?Bb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Vb(t,i,r),r},va=(e,t,i)=>t.has(e)||uc("Cannot "+i),C=(e,t,i)=>(va(e,t,"read from private field"),i?i.call(e):t.get(e)),zt=(e,t,i)=>t.has(e)?uc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ks=(e,t,i,o)=>(va(e,t,"write to private field"),t.set(e,i),i),F=(e,t,i)=>(va(e,t,"access private method"),i),K,T,fa,ba,Cs,Es,ga,H,cc,ma,_a,ya,wa,ui,hc,dc,Wr;const Hb="ArrowLeft",jb="ArrowUp",Rb="ArrowRight",Wb="ArrowDown",Fb=" ",Gb="Enter";let ci=class extends Ne(g,""){constructor(){super(),zt(this,H),this.disabled=!1,this.readonly=!1,zt(this,K,null),zt(this,T,[]),zt(this,fa,e=>{C(this,T)?.forEach(t=>{t!==e.target?t.makeUnfocusable():t.makeFocusable()})}),zt(this,ba,e=>{this.contains(e.relatedTarget)||C(this,K)===null&&C(this,T)?.forEach(t=>{t.makeFocusable()})}),zt(this,Cs,()=>{this.pristine=!1}),zt(this,Es,e=>{e.target.checked===!0&&(this.value=e.target.value,F(this,H,Wr).call(this))}),zt(this,ga,e=>{switch(e.key){case Hb:case jb:{e.preventDefault(),F(this,H,hc).call(this);break}case Rb:case Wb:{e.preventDefault(),F(this,H,dc).call(this);break}case Fb:{C(this,K)===null&&(this.value=F(this,H,ui).call(this,1,!1)?.value,F(this,H,Wr).call(this));break}case Gb:this.submit()}}),this.addEventListener("keydown",C(this,ga)),this.addEventListener("focusin",C(this,fa)),this.addEventListener("focusout",C(this,ba)),this.updateComplete.then(()=>{F(this,H,_a).call(this,this.value)})}get value(){return super.value}set value(e){super.value=e,F(this,H,_a).call(this,e)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","radiogroup")}updated(e){super.updated(e),e.has("disabled")&&F(this,H,ya).call(this,this.disabled),e.has("readonly")&&F(this,H,wa).call(this,this.readonly),e.has("name")&&F(this,H,ma).call(this,e.get("name"))}async focus(){await this.updateComplete,C(this,K)!==null?C(this,T)[C(this,K)]?.focus():F(this,H,ui).call(this,1,!1)?.focus()}async blur(){await this.updateComplete,C(this,K)!==null?C(this,T)[C(this,K)]?.blur():F(this,H,ui).call(this,1,!1)?.blur()}async click(){await this.updateComplete,C(this,K)!==null?C(this,T)[C(this,K)]?.click():F(this,H,ui).call(this,1,!1)?.click()}getFormElement(){if(C(this,T)&&C(this,K))return C(this,T)[C(this,K)]}render(){return l` <slot @slotchange=${F(this,H,cc)}></slot> `}};K=new WeakMap,T=new WeakMap,fa=new WeakMap,ba=new WeakMap,Cs=new WeakMap,Es=new WeakMap,ga=new WeakMap,H=new WeakSet,cc=function(e){if(e.stopPropagation(),C(this,T)?.forEach(i=>{i.removeEventListener(ir.CHANGE,C(this,Es)),i.removeEventListener("blur",C(this,Cs))}),ks(this,K,null),ks(this,T,e.target.assignedElements({flatten:!0}).filter(i=>i instanceof Oe)),C(this,T).length===0)return;C(this,T).forEach(i=>{i.addEventListener(ir.CHANGE,C(this,Es)),i.addEventListener("blur",C(this,Cs))}),F(this,H,ma).call(this,this.name),this.disabled&&F(this,H,ya).call(this,!0),this.readonly&&F(this,H,wa).call(this,!0);const t=C(this,T).filter(i=>i.checked===!0);if(t.length>1&&(C(this,T).forEach(i=>{i.checked=!1}),this.value="",console.error("There can only be one checked radio among the <"+this.nodeName+"> children",this)),t.length===1){const i=t[0];this.value=i.value,ks(this,K,C(this,T).indexOf(i))}},ma=function(e){C(this,T)?.forEach(t=>t.name=e)},_a=function(e){const t=[];C(this,T).forEach((i,o)=>{i.value===e?(i.checked=!0,i.makeFocusable(),ks(this,K,o)):(i.checked=!1,t.push(i))}),C(this,K)!==null&&t.forEach(i=>i.makeUnfocusable())},ya=function(e){C(this,T)?.forEach(t=>t.disabled=e)},wa=function(e){C(this,T)?.forEach(t=>t.readonly=e)},ui=function(e=1,t=!0){if(!C(this,T)||C(this,T).length===0)return null;const i=C(this,T).length;let o=C(this,K)??0;for(let r=0;r<i+1;r++){if(!t||r>0){const s=C(this,T)[o];if(!s.disabled&&!s.readonly)return s}o=(o+e+i)%i}return null},hc=function(){this.value=F(this,H,ui).call(this,-1)?.value??"",C(this,T)[C(this,K)??0]?.focus(),F(this,H,Wr).call(this)},dc=function(){this.value=F(this,H,ui).call(this)?.value??"",C(this,T)[C(this,K)??0]?.focus(),F(this,H,Wr).call(this)},Wr=function(){this.pristine=!1,this.dispatchEvent(new $s($s.CHANGE))},ci.formAssociated=!0,ci.styles=[b`
      :host {
        display: inline-block;
        padding-right: 3px;
        border: 1px solid transparent;
        border-radius: var(--uui-border-radius,3px);
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `],pa([a({type:Boolean,reflect:!0})],ci.prototype,"disabled",2),pa([a({type:Boolean,reflect:!0})],ci.prototype,"readonly",2),ci=pa([v("uui-radio-group")],ci);class qe extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}qe.INPUT="input",qe.CHANGE="change";var qb=Object.defineProperty,Kb=Object.getOwnPropertyDescriptor,pc=e=>{throw TypeError(e)},j=(e,t,i,o)=>{for(var r=o>1?void 0:o?Kb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&qb(t,i,r),r},vc=(e,t,i)=>t.has(e)||pc("Cannot "+i),Xb=(e,t,i)=>(vc(e,t,"read from private field"),i?i.call(e):t.get(e)),fc=(e,t,i)=>t.has(e)?pc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rr=(e,t,i)=>(vc(e,t,"access private method"),i),Mt,hi,xa;const $a={TOP:3,CENTER:2},Fr=18,or=3,pt=12,Yb=24,ka=e=>{const t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0};let N=class extends Ne(g,""){constructor(){super(),fc(this,Mt),this.disabled=!1,this.readonly=!1,this._min=0,this._max=0,this.hideStepValues=!1,this._step=1,this._movement=!1,this.startPoint={mouse:0,low:0,high:0},this._lowInputValue=0,this._highInputValue=0,this._trackWidth=0,this._lowValuePercentStart=0,this._highValuePercentEnd=100,fc(this,xa,e=>{e.key=="Enter"&&this.submit()}),this._onTouchStart=e=>{if(this.disabled)return;const t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("touchend",this._onTouchEnd),window.addEventListener("touchcancel",this._onTouchEnd),window.addEventListener("touchmove",this._onTouchMove),this._movement=!0,this._saveStartPoints(e.touches[0].pageX);else{const i=this._getClickedValue(e.touches[0].pageX),o=Math.abs(this._lowInputValue-i),r=Math.abs(this._highInputValue-i);o<r?this.setValueLow(i):this.setValueHigh(i)}},this._onTouchMove=e=>{this._dragBothValuesByMousePos(e.touches[0].pageX)},this._onTouchEnd=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("touchend",this._onTouchEnd),window.removeEventListener("touchcancel",this._onTouchEnd),window.removeEventListener("touchmove",this._onTouchMove)},this._onMouseDown=e=>{if(this.disabled||this.readonly)return;const t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("mousemove",this._onMouseMove),this._movement=!0,this._saveStartPoints(e.pageX);else{const i=this._getClickedValue(e.pageX),o=Math.abs(this._lowInputValue-i),r=Math.abs(this._highInputValue-i);o<r?this.setValueLow(i):this.setValueHigh(i)}},this._onMouseMove=e=>{e.preventDefault(),this._dragBothValuesByMousePos(e.pageX)},this._onMouseUp=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("mousemove",this._onMouseMove)},this.addEventListener("keydown",Xb(this,xa)),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("touchstart",this._onTouchStart),window.addEventListener("resize",()=>{this._trackWidth=this._outerTrack?.offsetWidth})}get min(){return this._min}set min(e){this._min=e,rr(this,Mt,hi).call(this)}get max(){return this._max}set max(e){this._max=e,rr(this,Mt,hi).call(this)}get step(){return this._step}set step(e){this._step=e,rr(this,Mt,hi).call(this)}get minGap(){return this._minGap}set minGap(e){this._minGap=e,rr(this,Mt,hi).call(this)}get maxGap(){return this._maxGap}set maxGap(e){this._maxGap=e,rr(this,Mt,hi).call(this)}get value(){return super.value}set value(e){super.value=e,rr(this,Mt,hi).call(this)}setValueLow(e){e=M(e,this.maxGap?this._highInputValue-this.maxGap>this.min?this._highInputValue-this.maxGap:this.min:this.min,this.minGap?this._highInputValue-this.minGap:this._highInputValue-this.step),this.setValue(e,this._highInputValue)}setValueHigh(e){e=M(e,this.minGap?this._lowInputValue+this.minGap:this._lowInputValue+this.step,this.maxGap?this.maxGap+this._lowInputValue<this.max?this.maxGap+this._lowInputValue:this.max:this.max),this.setValue(this._lowInputValue,e)}setValue(e,t,i){if(i){const o=this.startPoint.high-this.startPoint.low;e=M(e,this.min,this.max-o),t=M(t,this.min+o,this.max)}this._inputLow.value=e.toString(),this._inputHigh.value=t.toString(),this.value=`${e},${t}`}getFormElement(){return this._currentFocus?this._currentFocus:this._inputLow}async focus(){await this.updateComplete,this.getFormElement().focus()}async blur(){await this.updateComplete,this.getFormElement().blur()}connectedCallback(){super.connectedCallback(),this.value||(this.value=`${this._min},${this._max}`)}firstUpdated(e){super.updated(e),this._trackWidth=this._outerTrack.offsetWidth,this._runPropertiesChecks()}_runPropertiesChecks(){if(new RegExp(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).test(this.value)||console.error("Range slider (Value error occurred): Bad input"),this._highInputValue===this._lowInputValue&&console.error("Range slider (Value error occurred): Low-end and high-end value should never be equal. Use <uui-slider></uui-slider> instead."),this._lowInputValue>this._highInputValue&&console.error("Range slider (Value error occurred): Low-end value should never be higher than high-end value."),(this._highInputValue>this._max||this._highInputValue<this._min)&&(this.setValueHigh(this._max),console.warn(`Conflict with the high-end value and max value. High-end value has been converted to the max value (${this._max})`)),(this._lowInputValue<this._min||this._lowInputValue>this._max)&&(this.setValueLow(this._min),console.warn(`Conflict with the low-end value and min value. Low-end value has been converted to the min value (${this._min})`)),this._step<=0&&(this._step=1,console.warn("Property step needs a value higher than 0. Converted the step value to 1 (default)")),(this._max-this._min)/this._step%1!==0&&console.error("Conflict with step value and the min and max values. May experience bad side effects"),this._minGap&&this._minGap<this._step&&(this._minGap=void 0,console.warn("Conflict with min-gap and step value. The min-gap needs to be higher than the step value. Removed the min-gap property.")),this._minGap&&this._maxGap&&this._minGap>this._maxGap&&(this._minGap=void 0,this._maxGap=void 0,console.warn("Conflict with min-gap and max-gap. Removed the min-gap and max-gap properties.")),this._minGap&&this._max-this._min<this._minGap&&(this._minGap=void 0,console.warn("Conflict with the min-gap and the total range. Removed the min-gap.")),this._maxGap&&this._highInputValue-this._lowInputValue>this._maxGap&&(this.setValueHigh(this._lowInputValue+this._maxGap),console.warn(`Conflict with value and max-gap. High-end value has been converted to the highest possible value based on the low-end value and the max gap value (${this._highInputValue})`)),this._minGap&&this._highInputValue-this._lowInputValue<this._minGap){const t=this._minGap;this._highInputValue-t<this._min?(this.setValueHigh(this._lowInputValue+t),console.warn(`Conflict with value and min gap. High-end value has been converted to the lowest possible value based on the low-end value and the min gap value (${this._highInputValue}).`)):(this.setValueLow(this._highInputValue-t),console.warn(`Conflict with value and min gap. Low-end value has been converted to the highest possible value based on the high-end value and the min gap value (${this._lowInputValue}).`))}}_updateInnerColor(){const e=this._max-this._min,t=this._lowInputValue-this._min,i=this._highInputValue-this._min,o=t/e*100,r=100-i/e*100;this._lowValuePercentStart=M(o,0,100),this._highValuePercentEnd=M(r,0,100)}_getClickedValue(e){const t=this._outerTrack.getBoundingClientRect().left,r=(e-t-pt)/(this._trackWidth-pt*2)*(this._max-this._min)+this._min;return Math.round(r/this._step)*this._step}_saveStartPoints(e){this.startPoint={mouse:e,low:this._lowInputValue,high:this._highInputValue}}_dragBothValuesByMousePos(e){const t=this._outerTrack.offsetWidth,i=e-this.startPoint.mouse,o=this._max-this._min,r=i/(t+pt*2),s=Math.round(r*o/this._step)*this._step,n=this.startPoint.low+s,u=this.startPoint.high+s;this.setValue(n,u,!0),this.dispatchEvent(new qe(qe.INPUT))}_onLowInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputLow;const t=Number(e.target.value);this.setValueLow(t),this.dispatchEvent(new qe(qe.INPUT))}_onHighInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputHigh;const t=Number(e.target.value);this.setValueHigh(t),this.dispatchEvent(new qe(qe.INPUT))}_onLowChange(){this.setValueLow(Number(this._inputLow.value)),this.onChanged()}_onHighChange(){this.setValueHigh(Number(this._inputHigh.value)),this.onChanged()}onChanged(){this.pristine=!1,this.dispatchEvent(new qe(qe.CHANGE))}render(){return l`
      <div id="range-slider">
        ${this._renderNativeInputs()}
        <div id="inner-track">
          <div
            id="inner-color-thumb"
            class="${this._movement?"active":""}"
            style="left: ${this._lowValuePercentStart}%; right: ${this._highValuePercentEnd}%">
            ${this._renderThumbValues()}
            <div class="${this._movement?"color active":"color"}"></div>
          </div>
          ${this._renderSteps()}
        </div>
      </div>
    `}_renderThumbValues(){return l`<div class="thumb-values">
      <span
        ><span
          >${this._lowInputValue.toFixed(ka(this._step))}</span
        ></span
      >
      <span
        ><span
          >${this._highInputValue.toFixed(ka(this._step))}</span
        ></span
      >
    </div>`}_renderSteps(){const e=(this._max-this._min)/this._step,t=(this._trackWidth-pt*2)/e;if(t<Yb||e%1!==0)return;let i=0;const o=new Array(e+1).fill(t).map(r=>r*i++);return l`<div class="step-wrapper">
      <svg height="100%" width="100%">
        <rect x="9" y="9" height="${or}" rx="2" />
        ${this._renderStepCircles(o)}
      </svg>
      ${this._renderStepValues(e)}
    </div>`}_renderStepValues(e){if(this.hideStepValues||e>20)return;let t=0;const i=new Array(e+1).fill(this._step).map(o=>(this._min+o*t++).toFixed(ka(this._step)));return l`<div class="step-values">
      ${i.map(o=>l`<span><span>${o}</span></span>`)}
    </div>`}_renderStepCircles(e){const t=this._trackWidth/(this._max-this._min);return m`${e.map(i=>{const o=i+pt,r=this._lowInputValue-this._min,s=this._highInputValue-this._min;return o/t>=r&&o/t<=s?m`<circle class="track-step filled" cx="${o}" cy="${or*2}" r="4.5" />`:m`<circle class="track-step regular" cx="${o}" cy="${or*2}" r="4.5" />`})}`}_renderNativeInputs(){return l` <div class="native-wrapper">
      <input
        id="inputLow"
        class="${this._movement?"focus":""}"
        type="range"
        min=${this._min}
        max=${this._max}
        step=${this._step}
        .value=${this._lowInputValue.toString()}
        aria-label="${this.label} low-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onLowInput}
        @change=${this._onLowChange} />
      <input
        id="inputHigh"
        class="${this._movement?"focus":""}"
        type="range"
        min="${this._min}"
        max="${this._max}"
        step="${this._step}"
        .value=${this._highInputValue.toString()}
        aria-label="${this.label} high-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onHighInput}
        @change=${this._onHighChange} />
    </div>`}};Mt=new WeakSet,hi=function(){const e=this.value.split(",");let t=Number(e[0])||0,i=Number(e[1])||0;i=M(i,this._min,this._max),t=this._min+Math.round((t-this._min)/this._step)*this._step,i=this._min+Math.round((i-this._min)/this._step)*this._step,this._lowInputValue=M(t,this._min,this._minGap?i-this._minGap:i-this._step),this._highInputValue=M(i,this._minGap?this._lowInputValue+this._minGap:this._lowInputValue+this._step,Math.min(this._maxGap?t+this._maxGap:this._max,this._max)),this._updateInnerColor(),this.requestUpdate()},xa=new WeakMap,N.formAssociated=!0,N.styles=[b`
      :host {
        --color-interactive: var(--uui-color-selected,#3544b1);
        --color-hover: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
        --color-focus: var(--uui-color-focus,#3879ff);
        min-height: 30px;
      }

      :host([error]) {
        --color-interactive: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-hover: var(--uui-color-invalid,#d42054);
      }

      #range-slider {
        min-height: 30px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
      }

      /** Track */

      #inner-track {
        user-select: none;
        background-color: var(--uui-color-border-standalone,#c2c2c2);
        position: absolute;
        height: 3px;
        left: ${pt}px; /* Match TRACK_MARGIN */
        right: ${pt}px; /* Match TRACK_MARGIN */
      }

      :host(:not([disabled]):hover) #inner-track,
      :host(:not([disabled]):active) #inner-track {
        background-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #inner-color-thumb {
        margin: -9px 0 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: ${Fr}px;
        cursor: grab;
        user-select: none;
        z-index: ${$a.CENTER};
      }

      :host([disabled]) #inner-color-thumb,
      :host([readonly]) #inner-color-thumb {
        cursor: default;
      }

      /** Colored part of track */

      :host([disabled]) #range-slider #inner-color-thumb .color {
        background-color: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      #inner-color-thumb:focus .color {
        background-color: var(--color-focus);
      }

      #inner-color-thumb:hover .color,
      #inner-color-thumb .color.active {
        background-color: var(--color-hover);
      }

      :host(:not([readonly])) #inner-color-thumb:hover .color {
        height: ${or*2}px;
        background-color: var(--color-hover);
        transform: translateY(-${or/2}px);
      }

      .color {
        user-select: none;
        position: absolute;
        inset-inline: 0;
        height: ${or}px;
        top: 50%;
        transform: translateY(0);
        background-color: var(--color-interactive);
        transition: height 60ms;
      }

      :host([error]) .color {
        background-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host([error]) #inner-color-thumb:hover ~ .color,
      :host([error]) #inner-color-thumb:focus ~ .color {
        background-color: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
      }

      /** Steps */
      .step-wrapper {
        margin: 0 ${-1*pt}px;
        height: 11px;
        position: absolute;
        left: 0;
        right: 0;
        top: -10px;
      }

      /** Step circles */
      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      :host(:not([disabled]):hover) #inner-track .track-step.regular,
      :host(:not([disabled]):active) #inner-track .track-step.regular {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host .track-step.filled {
        fill: var(--color-interactive);
      }

      :host([error]) .track-step.filled {
        fill: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
      }

      :host #inner-color-thumb.active ~ .step-wrapper .track-step.filled,
      :host #inner-color-thumb:hover ~ .step-wrapper .track-step.filled {
        fill: var(--color-hover);
      }

      :host([disabled]) #range-slider .track-step.filled {
        fill: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      /** Step values */

      .step-values {
        box-sizing: border-box;
        margin: 0 ${pt}px; /* Match TRACK_MARGIN */
        display: flex;
        justify-content: space-between;
        font-size: var(--uui-type-small-size,12px);
      }

      .step-values > span {
        position: relative;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      .step-values > span > span {
        position: absolute;
        transform: translateX(-50%);
      }

      /** Input */

      .native-wrapper {
        position: relative;
        width: 100%;
        inset-inline: 0px;
        margin: -22px 5px 0 1px;
      }

      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        pointer-events: none;
        position: absolute;
        cursor: pointer;
        background-color: transparent;
        inset-inline: 0;
        width: 100%;
        border-radius: 20px;
      }

      input:focus-within {
        outline: none;
      }

      /** Thumb values */
      .thumb-values {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        color: var(--color-interactive);
        font-weight: bold;
        transition: 120ms opacity;
        opacity: 0;
      }

      .thumb-values > span {
        width: 0;
      }

      .thumb-values > span > span {
        bottom: 15px;
        position: absolute;
        transform: translateX(-50%);
      }

      :host([disabled]) .thumb-values {
        color: var(--uui-palette-mine-grey,#3e3e3e);
      }

      :host([readonly]) .thumb-values {
        opacity: 1;
      }

      #range-slider:hover .thumb-values {
        opacity: 1;
      }

      /** Native thumbs */
      /** Chrome */
      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${$a.TOP};
        width: ${Fr}px;
        height: ${Fr}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) input::-webkit-slider-thumb,
      :host([readonly]) input::-webkit-slider-thumb {
        cursor: default;
      }

      input:focus-within::-webkit-slider-thumb,
      input.focus::-webkit-slider-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-webkit-slider-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-webkit-slider-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      /** Mozilla */

      input::-moz-range-thumb {
        -moz-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${$a.TOP};
        width: ${Fr}px;
        height: ${Fr}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
      :host([disabled]) input::-moz-range-thumb,
      :host([readonly]) input::-moz-range-thumb {
        cursor: default;
      }

      input:focus-within::-moz-range-thumb,
      input.focus::-moz-range-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-moz-range-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-moz-range-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
    `],j([a({type:String})],N.prototype,"label",2),j([a({type:Boolean,reflect:!0})],N.prototype,"disabled",2),j([a({type:Boolean,reflect:!0})],N.prototype,"readonly",2),j([a({type:Number})],N.prototype,"min",1),j([a({type:Number})],N.prototype,"max",1),j([a({type:Boolean,attribute:"hide-step-values"})],N.prototype,"hideStepValues",2),j([a({type:Number})],N.prototype,"step",1),j([a({type:Number,attribute:"min-gap"})],N.prototype,"minGap",1),j([a({type:Number,attribute:"max-gap"})],N.prototype,"maxGap",1),j([a({type:String})],N.prototype,"value",1),j([_()],N.prototype,"_movement",2),j([_()],N.prototype,"_lowInputValue",2),j([_()],N.prototype,"_highInputValue",2),j([_()],N.prototype,"_trackWidth",2),j([_()],N.prototype,"_lowValuePercentStart",2),j([_()],N.prototype,"_highValuePercentEnd",2),j([O("#range-slider")],N.prototype,"_outerTrack",2),j([O("#inputLow")],N.prototype,"_inputLow",2),j([O("#inputHigh")],N.prototype,"_inputHigh",2),j([O(".color")],N.prototype,"_innerColor",2),j([O("#inner-color-thumb")],N.prototype,"_innerColorThumb",2),N=j([v("uui-range-slider")],N);var Zb=Object.getOwnPropertyDescriptor,Qb=(e,t,i,o)=>{for(var r=o>1?void 0:o?Zb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ps=class extends g{render(){return l`<slot></slot>`}};Ps.styles=[b`
      :host {
        display: block;
      }

      ::slotted(*:not(:first-child)) {
        margin-top: 1px;
      }
      ::slotted(*:not(:first-child))::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        right: 0;
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
      }
    `],Ps=Qb([v("uui-ref-list")],Ps);class sr extends A{}sr.OPEN="open";var Jb=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,Ss=(e,t,i,o)=>{for(var r=o>1?void 0:o?eg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Jb(t,i,r),r};let vt=class extends Eo(xi(g)){constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.error=!1}handleOpenClick(e){e.stopPropagation(),this.dispatchEvent(new sr(sr.OPEN))}handleOpenKeydown(e){e.key!==" "&&e.key!=="Enter"||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new sr(sr.OPEN)))}};vt.styles=[b`
      :host {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: var(--uui-font-size);

        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-before-opacity: 0;
        transition: --uui-card-before-opacity 120ms;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host([error]) {
        border: 2px solid var(--uui-color-invalid,#d42054);
        box-shadow:
          0 0 4px 0 var(--uui-color-invalid,#d42054),
          inset 0 0 2px 0 var(--uui-color-invalid,#d42054);
      }

      :host([standalone]) {
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-2,6px) * 4);
        margin-right: var(--uui-size-2,6px);
      }
      #tag-container {
        margin: calc(var(--uui-size-2,6px));
      }
      #actions-container {
        margin: calc(var(--uui-size-2,6px));
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:hover) #actions-container,
      :host(:focus) #actions-container,
      :host(:focus-within) #actions-container {
        opacity: 1;
      }

      :host([standalone]:not([disabled]):hover) {
        border-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host([disabled]) #open-part {
        cursor: default;
      }

      :host([standalone][disabled]) {
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      slot[name='tag'] {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    `],Ss([a({type:Boolean,reflect:!0})],vt.prototype,"disabled",2),Ss([a({type:Boolean,reflect:!0})],vt.prototype,"readonly",2),Ss([a({type:Boolean,reflect:!0})],vt.prototype,"error",2),vt=Ss([v("uui-ref")],vt);var tg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,bc=e=>{throw TypeError(e)},di=(e,t,i,o)=>{for(var r=o>1?void 0:o?ig(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&tg(t,i,r),r},rg=(e,t,i)=>t.has(e)||bc("Cannot "+i),og=(e,t,i)=>t.has(e)?bc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Dt=(e,t,i)=>(rg(e,t,"access private method"),i),Ke,gc,mc,Os,_c,yc,wc;let R=class extends vt{constructor(){super(...arguments),og(this,Ke),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`}connectedCallback(){super.connectedCallback(),x(this,"uui-icon")}renderDetail(){return l`<small id="detail"
      >${this.detail}<slot name="detail"></slot
    ></small>`}render(){return l`
      ${Dt(this,Ke,wc).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot></slot>
      <slot name="tag" id="tag-container"></slot>
      <slot name="actions" id="actions-container"></slot>
    `}};Ke=new WeakSet,gc=function(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},mc=function(){return l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`},Os=function(){return l`
      <span id="content" class="uui-text">
        <span id="icon">
          <slot name="icon" @slotchange=${Dt(this,Ke,gc)}></slot>
          ${this._iconSlotHasContent===!1?Dt(this,Ke,mc).call(this):""}
        </span>
        <div id="info">
          <div id="name">${this.name}<slot name="name"></slot></div>
          ${this.renderDetail()}
        </div>
      </span>
    `},_c=function(){return l`<a
      id="open-part"
      class="uui-text"
      tabindex=${this.disabled?k:"0"}
      href=${w(this.disabled?void 0:this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Dt(this,Ke,Os).call(this)}
    </a>`},yc=function(){return l`
      <button
        type="button"
        id="open-part"
        class="uui-text"
        tabindex="0"
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
        ?disabled=${this.disabled}>
        ${Dt(this,Ke,Os).call(this)}
      </button>
    `},wc=function(){return this.readonly?l`${Dt(this,Ke,Os).call(this)}`:this.href?Dt(this,Ke,_c).call(this):Dt(this,Ke,yc).call(this)},R.styles=[...vt.styles,b`
      :host {
        min-width: 250px;
        padding: 1px;
      }

      #content {
        display: flex;
        flex-grow: 1;
        align-items: center;
        line-height: 1.2em;
        padding: calc(var(--uui-size-3,9px));
      }

      #open-part {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        flex-grow: 1;
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #info {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        height: 100%;
        padding-left: var(--uui-size-2,6px);
        margin-top: 1px;
      }

      #detail {
        opacity: 0.6;
        line-height: 1.2em;
      }

      :host([selectable]) #open-part {
        flex-grow: 0;
        padding: 0;
        margin: calc(var(--uui-size-2,6px));

        #content {
          padding: 0;
        }
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) #icon {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #name {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #detail {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `],di([a({type:String})],R.prototype,"name",2),di([a({type:String})],R.prototype,"detail",2),di([a({type:String})],R.prototype,"href",2),di([a({type:String})],R.prototype,"target",2),di([a({type:String})],R.prototype,"rel",2),di([_()],R.prototype,"_iconSlotHasContent",2),R=di([v("uui-ref-node")],R);var sg=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,xc=(e,t,i,o)=>{for(var r=o>1?void 0:o?ng(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&sg(t,i,r),r};let Gr=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>',this.alias=""}renderDetail(){const e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Gr.styles=[...R.styles],xc([a({type:String})],Gr.prototype,"alias",2),Gr=xc([v("uui-ref-node-data-type")],Gr);var ag=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,$c=(e,t,i,o)=>{for(var r=o>1?void 0:o?lg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ag(t,i,r),r};let qr=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M49.035 60.434h413.93v33.592H49.035zm0 82.005h86.578v86.577H49.035zm163.677 0h86.576v86.577h-86.576zm163.676 0h86.576v86.577h-86.576zM49.035 282.984h413.93v33.593H49.035zm0 82.006h86.578v86.576H49.035zm163.677 0h86.576v86.576h-86.576zm163.676 0h86.576v86.576h-86.576z"></path></svg>',this.alias=""}renderDetail(){const e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};qr.styles=[...R.styles],$c([a({type:String})],qr.prototype,"alias",2),qr=$c([v("uui-ref-node-document-type")],qr);var ug=Object.getOwnPropertyDescriptor,cg=(e,t,i,o)=>{for(var r=o>1?void 0:o?ug(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Is=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.72 215.28H67.28c-11.04 0-20-8.96-20-20V64.896c0-11.04 8.96-20 20-20h377.44c11.04 0 20 8.96 20 20V195.28c0 11.056-8.96 20-20 20zm-357.44-40h337.44V84.896H87.28v90.384zm185.504 215.696c0-6.848.704-13.504 1.936-20H87.28v-90.384h337.44v12.496a108.098 108.098 0 0140 31.36v-63.856c0-11.04-8.96-20-20-20H67.28c-11.04 0-20 8.96-20 20v130.384c0 11.04 8.96 20 20 20h207.44c-1.232-6.496-1.936-13.152-1.936-20zm107.552-76.128c-41.968 0-76.112 34.16-76.112 76.128s34.144 76.128 76.112 76.128 76.128-34.16 76.128-76.128-34.144-76.128-76.128-76.128zm46.016 80.464a7.293 7.293 0 01-7.296 7.296h-27.072v27.088a7.293 7.293 0 01-7.296 7.296H376a7.293 7.293 0 01-7.296-7.296v-27.088h-27.072a7.293 7.293 0 01-7.296-7.296v-8.672a7.293 7.293 0 017.296-7.296h27.072v-27.088A7.293 7.293 0 01376 344.96h8.688a7.293 7.293 0 017.296 7.296v27.088h27.072a7.293 7.293 0 017.296 7.296v8.672z"></path></svg>'}};Is.styles=[...R.styles],Is=cg([v("uui-ref-node-form")],Is);var hg=Object.defineProperty,dg=Object.getOwnPropertyDescriptor,kc=(e,t,i,o)=>{for(var r=o>1?void 0:o?dg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&hg(t,i,r),r};let Kr=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Kr.styles=[...R.styles],kc([a({type:String,attribute:"group-name"})],Kr.prototype,"groupName",2),Kr=kc([v("uui-ref-node-member")],Kr);var pg=Object.defineProperty,vg=Object.getOwnPropertyDescriptor,Ca=(e,t,i,o)=>{for(var r=o>1?void 0:o?vg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&pg(t,i,r),r};let nr=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.08 106.29l-70.073 40.452 165.498 95.545 70.076-40.453L161.08 106.29zm259.851 41.077L255.435 51.815l-63.578 36.709 165.499 95.542 63.575-36.699zm-150.11 122.19V459.43l164.966-95.238V174.32l-164.966 95.237zM75.082 364.191l164.959 95.234V268.32L75.082 173.09v191.101z"></path></svg>',this.version="",this.author=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.version!==""&&e.push(this.version),this.author!==""&&e.push(this.author),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};nr.styles=[...R.styles],Ca([a({type:String})],nr.prototype,"version",2),Ca([a({type:String})],nr.prototype,"author",2),nr=Ca([v("uui-ref-node-package")],nr);var fg=Object.defineProperty,bg=Object.getOwnPropertyDescriptor,Cc=(e,t,i,o)=>{for(var r=o>1?void 0:o?bg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&fg(t,i,r),r};let Xr=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Xr.styles=[...R.styles],Cc([a({type:String,attribute:"group-name"})],Xr.prototype,"groupName",2),Xr=Cc([v("uui-ref-node-user")],Xr);var gg=Object.defineProperty,mg=Object.getOwnPropertyDescriptor,Ec=(e,t,i,o)=>{for(var r=o>1?void 0:o?mg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&gg(t,i,r),r};let Yr=class extends g{constructor(){super(...arguments),this.enforceScroll=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return l`<slot></slot>`}};Yr.styles=[b`
      :host {
        display: block;
        scrollbar-width: thin;
        scrollbar-color: var(--uui-color-disabled-contrast,#c4c4c4)
          var(--uui-color-surface,#fff);
        overflow-y: auto;
      }

      :host([enforce-scroll]) {
        overflow-y: scroll;
      }

      :host::-webkit-scrollbar {
        width: 6px;
        height: 6px; /* needed for horizontal scrollbar */
      }

      :host::-webkit-scrollbar-track {
        background: var(--uui-color-surface,#fff);
        border-radius: 3px;
      }
      :host::-webkit-scrollbar-thumb {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
        border-radius: 3px;
      }
    `],Ec([a({type:Boolean,reflect:!0,attribute:"enforce-scroll"})],Yr.prototype,"enforceScroll",2),Yr=Ec([v("uui-scroll-container")],Yr);class As extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}As.CHANGE="change";var _g=Object.defineProperty,yg=Object.getOwnPropertyDescriptor,De=(e,t,i,o)=>{for(var r=o>1?void 0:o?yg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&_g(t,i,r),r};let fe=class extends Ne(g,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.error=!1,this.options=[],this._groups=[],this.disabledGroups="",this._disabledGroups=[],this._values=[],this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")})}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}_createDisabledGroups(){this.disabledGroups.length!==0&&(this._disabledGroups=this.disabledGroups.split(","))}_extractGroups(){this.options.length!==0&&(this._groups=Array.from(new Set(this.options.filter(e=>e.group).map(e=>e.group))))}willUpdate(e){if(e.has("options")){this._extractGroups(),this._values=this.options.map(i=>i.value);const t=this.options.find(i=>i.selected);this.value=t?t.value:""}e.has("value")&&(this.value=this._values.includes(this.value)?this.value:""),e.has("disabledGroups")&&this._createDisabledGroups()}setValue(e){e.stopPropagation();const t=e.target;e.target&&(this.value=t.value),this.dispatchEvent(new As(As.CHANGE,{bubbles:!0,composed:!1}))}_renderOption(e,t,i,o){return l`<option
      value="${t}"
      ?selected=${i}
      ?disabled=${o}>
      ${e}
    </option>`}_renderGrouped(){return this._groups.length===0?k:l`
      ${this._groups.map(e=>l`<optgroup
            label=${e}
            ?disabled=${this._disabledGroups.some(t=>t.toLowerCase()===e.toLowerCase())}>
            ${this.options.map(t=>t.group===e?this._renderOption(t.name,t.value,t.selected,t.disabled):"")}
          </optgroup>`)}
    `}_getDisplayValue(){return this.options.find(e=>e.value===this.value)?.name||this.value}render(){return this.readonly?l`<span>${this._getDisplayValue()}</span>`:l` <select
      id="native"
      aria-label=${this.label}
      @change=${this.setValue}
      ?disabled=${this.disabled}
      .name=${this.name}
      .value=${this.value}>
      <option disabled selected value="" hidden>${this.placeholder}</option>
      ${this._renderGrouped()}
      ${this.options.filter(e=>!e.group).map(e=>this._renderOption(e.name,e.value,e.selected,e.disabled))}
    </select>`}};fe.styles=[b`
      :host {
        display: inline-block;
        position: relative;
        font-family: inherit;
      }

      #native {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-select-font-size, inherit);
        height: var(--uui-select-height, var(--uui-size-11,33px));
        padding: var(--uui-select-padding-y, var(--uui-size-1,3px))
          var(--uui-select-padding-x, var(--uui-size-2,6px));
        color: var(--uui-select-text-color, var(--uui-color-text,#060606));
        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        border: 1px solid
          var(--uui-select-border-color, var(--uui-color-border,#d8d7d9));
        transition: all 150ms ease;
        width: 100%;
        background-color: var(
          --uui-select-background-color,
          var(--uui-color-surface,#fff)
        );
      }

      #native:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-select-outline-color, var(--uui-color-focus,#3879ff));
      }

      #native[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-select-disabled-background-color,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      #native:hover {
        border: 1px solid
          var(--uui-select-border-color-hover, var(--uui-color-border-emphasis,#a1a1a1));
      }

      option:checked {
        background: var(
          --uui-select-selected-option-background-color,
          var(--uui-color-selected,#3544b1)
        );
        color: var(
          --uui-select-selected-option-color,
          var(--uui-color-selected-contrast,#fff)
        );
      }

      #caret {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([error]) #native {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }

      :host([error]) #native[disabled] {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `],De([a({type:String})],fe.prototype,"label",2),De([a()],fe.prototype,"placeholder",2),De([a({type:Boolean,reflect:!0})],fe.prototype,"disabled",2),De([a({type:Boolean,reflect:!0})],fe.prototype,"readonly",2),De([a({type:Boolean,reflect:!0})],fe.prototype,"error",2),De([a({type:Array,attribute:!1})],fe.prototype,"options",2),De([_()],fe.prototype,"_groups",2),De([a()],fe.prototype,"disabledGroups",2),De([_()],fe.prototype,"_disabledGroups",2),De([O("#native")],fe.prototype,"_input",2),fe=De([v("uui-select")],fe);const wg=b`
  input[type='range'] {
    left: 0;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
    border: none;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: none;
    background: transparent;
    color: transparent;
    overflow: visible;
    order: none;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: transparent;
    border: none;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 100%;
    -moz-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }
  input[type='range']::-ms-fill-lower,
  input[type='range']::-ms-fill-upper {
    background: transparent;
    border: 0 none;
  }

  input[type='range']::-ms-tooltip {
    display: none;
  }

  input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type='range']::-ms-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: transparent;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: transparent;
  }
`;class pi extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}pi.INPUT="input",pi.CHANGE="change";var xg=Object.defineProperty,$g=Object.getOwnPropertyDescriptor,Pc=e=>{throw TypeError(e)},ue=(e,t,i,o)=>{for(var r=o>1?void 0:o?$g(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&xg(t,i,r),r},Ea=(e,t,i)=>t.has(e)||Pc("Cannot "+i),Sc=(e,t,i)=>(Ea(e,t,"read from private field"),i?i.call(e):t.get(e)),Pa=(e,t,i)=>t.has(e)?Pc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Oc=(e,t,i,o)=>(Ea(e,t,"write to private field"),t.set(e,i),i),kg=(e,t,i)=>(Ea(e,t,"access private method"),i),Us,zs,Sa,Ic;const Zr=12,Ac=24,Cg=(e,t,i)=>Array.from({length:(t-e)/i+1},(o,r)=>e+r*i),Eg=e=>{const t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0};let X=class extends Ne(g,""){constructor(){super(),Pa(this,Sa),Pa(this,Us,0),this.hideStepValues=!1,this.hideValueLabel=!1,this.min=0,this.max=100,Pa(this,zs,1),this.disabled=!1,this.readonly=!1,this._stepWidth=0,this.onWindowResize=()=>{this._stepWidth=this._calculateStepWidth()},this._steps=[],this._sliderPosition="0%",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",kg(this,Sa,Ic))}get step(){return Sc(this,zs)}set step(e){Oc(this,zs,e),Oc(this,Us,(e.toString().split(".")[1]||[]).length)}get value(){return super.value}set value(e){if(e instanceof File)return;const t=super.value;let i=e?parseFloat(e):0;i=Math.min(Math.max(i,this.min),this.max),this.step>0&&(i=Math.round(i/this.step)*this.step),super.value=i.toFixed(Sc(this,Us)).toString(),this._calculateSliderPosition(),this.requestUpdate("value",t)}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onWindowResize),this.label||console.warn(this.tagName+" needs a `label`",this)}disconnectedCallback(){window.removeEventListener("resize",this.onWindowResize),super.disconnectedCallback()}firstUpdated(){this._calculateSliderPosition(),this._updateSteps()}updated(e){super.updated(e),(e.get("max")||e.get("min")||e.get("step"))&&(this.value=this.value,this._updateSteps())}_updateSteps(){this._steps=Cg(this.min,this.max,this.step),this._stepWidth=this._calculateStepWidth()}_calculateStepWidth(){return(this._track.getBoundingClientRect().width-Zr*2)/(this._steps.length-1)}_calculateSliderPosition(){const e=(parseFloat(super.value||"0")-this.min)/(this.max-this.min);this._sliderPosition=`${Math.floor(e*1e5)/1e3}%`}_onInput(e){e.stopPropagation(),this.value=this._input.value,this.dispatchEvent(new pi(pi.INPUT))}_onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new pi(pi.CHANGE))}renderTrackSteps(){return m`
  ${this._steps.map(e=>{if(this._stepWidth>=Ac){const t=Math.round(Zr+this._stepWidth*this._steps.indexOf(e));return m`<circle class="track-step" cx="${t}" cy="50%" r="4.5" />`}return m``})}
`}renderStepValues(){return this.hideStepValues?k:l`<div id="step-values">
      ${this._steps.map(e=>l` <span
            ><span>
              ${this._steps.length<=20&&this._stepWidth>=Ac?e.toFixed(Eg(this.step)):k}
            </span></span
          >`)}
    </div>`}render(){return l`
      <input
        id="input"
        type="range"
        min="${this.min}"
        max="${this.max}"
        .value="${this.value}"
        aria-label="${this.label}"
        step="${+this.step}"
        ?disabled=${this.disabled||this.readonly}
        ?readonly=${this.readonly}
        @input=${this._onInput}
        @change=${this._onChange} />
      <div id="track" aria-hidden="true">
        <svg height="100%" width="100%">
          <rect x="9" y="9" height="3" rx="2" />
          ${this.renderTrackSteps()}
        </svg>

        <div id="track-inner" aria-hidden="true">
          <div id="thumb" style=${Je({left:this._sliderPosition})}>
            ${this.hideValueLabel?null:l`<div id="thumb-label">${this.value}</div>`}
          </div>
        </div>
      </div>
      ${this.renderStepValues()}
    `}};Us=new WeakMap,zs=new WeakMap,Sa=new WeakSet,Ic=function(e){e.key=="Enter"&&this.submit()},X.formAssociated=!0,X.styles=[Wd,wg,b`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
        min-height: 30px;
        user-select: none;
      }

      input {
        box-sizing: border-box;
        height: 18px;
      }

      #track {
        position: relative;
        height: 18px;
        width: 100%;
        display: flex;
      }

      #track svg {
        height: 21px;
        border-radius: 10px;
        background-color: var(--uui-color-surface,#fff);
      }
      #track svg rect {
        width: calc(100% - 18px);
        fill: var(--uui-color-border-standalone,#c2c2c2);
      }
      input:hover ~ #track svg rect {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      input:focus ~ #track #thumb {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      input:hover ~ #track svg .track-step {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #track-inner {
        position: absolute;
        left: ${Zr}px; /* Match TRACK_MARGIN */
        right: ${Zr}px; /* Match TRACK_MARGIN */
      }

      #thumb {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 2px;
        bottom: 0;
        left: 0;
        height: 17px;
        width: 17px;
        margin-left: -8px;
        margin-right: -8px;
        border-radius: 50%;
        box-sizing: border-box;

        background-color: var(--uui-color-surface,#fff);
        border: 2px solid var(--uui-color-selected,#3544b1);
      }
      :host([disabled]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      #thumb:after {
        content: '';
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([disabled]) #thumb:after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      #thumb-label {
        position: absolute;
        box-sizing: border-box;
        font-weight: 700;
        bottom: 15px;
        left: 50%;
        width: 40px;
        margin-left: -20px;
        text-align: center;
        opacity: 0;
        transition: 120ms opacity;
        color: var(--uui-color-selected,#3544b1);
      }

      input:focus ~ #track #thumb-label,
      input:hover ~ #track #thumb-label {
        opacity: 1;
      }

      #step-values {
        margin: 0 ${Zr}px; /* Match TRACK_MARGIN */
        margin-top: 6px;
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
      }

      #step-values > span {
        flex-basis: 0;
        flex-grow: 1;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #step-values > span > span {
        transform: translateX(-50%);
        display: inline-block;
        text-align: center;
        font-size: var(--uui-type-small-size,12px);
      }

      #step-values > span:last-child {
        width: 0;
        flex-grow: 0;
      }

      :host(:not([pristine]):invalid) #thumb {
        border-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host(:not([pristine]):invalid) #thumb:after {
        background-color: var(--uui-color-invalid,#d42054);
      }

      // readonly
      :host([readonly]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      :host([readonly]) #thumb-label {
        opacity: 1;
      }
    `],ue([a({type:Boolean,attribute:"hide-step-values"})],X.prototype,"hideStepValues",2),ue([a({type:Boolean,attribute:"hide-value-label"})],X.prototype,"hideValueLabel",2),ue([a({type:Number})],X.prototype,"min",2),ue([a({type:Number})],X.prototype,"max",2),ue([a({type:Number})],X.prototype,"step",1),ue([a({type:String})],X.prototype,"value",1),ue([a({type:Boolean,reflect:!0})],X.prototype,"disabled",2),ue([a({type:Boolean,reflect:!0})],X.prototype,"readonly",2),ue([a({type:String})],X.prototype,"label",2),ue([O("#input")],X.prototype,"_input",2),ue([O("#track")],X.prototype,"_track",2),ue([_()],X.prototype,"_stepWidth",2),ue([_()],X.prototype,"_steps",2),ue([_()],X.prototype,"_sliderPosition",2),X=ue([v("uui-slider")],X);var Pg=Object.defineProperty,Sg=Object.getOwnPropertyDescriptor,Uc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Sg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Pg(t,i,r),r};let Qr=class extends g{constructor(){super(...arguments),this.open=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};Qr.styles=[b`
      :host {
        display: inline-flex;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);
        width: 100%;
        height: 100%;
      }

      :host([open]) svg {
        transform: rotate(0deg);
      }
    `],Uc([a({type:Boolean,reflect:!0})],Qr.prototype,"open",2),Qr=Uc([v("uui-symbol-expand")],Qr);var Og=Object.defineProperty,Ig=Object.getOwnPropertyDescriptor,Oa=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ig(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Og(t,i,r),r};let ar=class extends g{constructor(){super(...arguments),this.src="",this.alt=""}connectedCallback(){super.connectedCallback(),x(this,"uui-icon")}render(){return this.src?l`<img src=${this.src} alt=${this.alt} />`:l`<uui-icon
          name="picture"
          .fallback=${tp.strings[0]}></uui-icon>`}};ar.styles=[b`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }

      uui-icon {
        width: 100%;
        height: 100%;
        max-width: 100%;
        display: flex;
        max-height: 100%;
        justify-content: center;
        color: var(--uui-color-surface,#fff);
        background: var(--uui-color-surface-alt,#f3f3f5);
      }
    `],Oa([a({type:String})],ar.prototype,"src",2),Oa([a({type:String})],ar.prototype,"alt",2),ar=Oa([v("uui-symbol-file-thumbnail")],ar);var Ag=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,zc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ug(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ag(t,i,r),r};let Jr=class extends g{constructor(){super(...arguments),this.type=""}render(){return l`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="0.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="icon">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>

      ${this.type?l`<small id="file-type" class="uui-small"
            >${this.type.toUpperCase()}</small
          >`:""}
    `}};Jr.styles=[mi,b`
      :host {
        position: relative;
        display: block;
        box-sizing: border-box;
      }

      #file-type {
        position: absolute;
        bottom: 20%;
        left: 12%;
        margin-left: calc(var(--uui-size-3,9px) * -1);
        padding: 0px var(--uui-size-3,9px);
        font-weight: 700;
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: var(--uui-border-radius,3px);
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `],zc([a({type:String})],Jr.prototype,"type",2),Jr=zc([v("uui-symbol-file")],Jr);var zg=Object.getOwnPropertyDescriptor,Mg=(e,t,i,o)=>{for(var r=o>1?void 0:o?zg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ms=class extends g{render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="0.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      id="icon">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>`}};Ms.styles=[b`
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `],Ms=Mg([v("uui-symbol-folder")],Ms);var Dg=Object.defineProperty,Lg=Object.getOwnPropertyDescriptor,Mc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Lg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Dg(t,i,r),r};let eo=class extends g{constructor(){super(...arguments),this.open=!1}render(){return m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      ${this.open===!0?m`<path d="M457.915 242.222H269.053l-.004-78.416c0-33.277-12.63-63.824-33.538-86.175-20.82-22.357-50.579-36.756-83.391-36.731-32.814-.024-62.57 14.375-83.391 36.731-20.915 22.351-33.541 52.897-33.547 86.175v103.859H96.19v-13.476l-35.656-35.656H96.19v-54.728c0-17.765 6.717-33.406 17.084-44.502 10.463-11.09 23.927-17.37 38.845-17.394 14.916.024 28.375 6.304 38.837 17.394 10.375 11.096 17.092 26.738 17.087 44.502v78.416h-26.189c-9.159 0-16.582 7.426-16.582 16.585v194.53c0 9.158 7.423 16.583 16.582 16.583h276.06c9.164 0 16.587-7.425 16.587-16.583v-194.53c.001-9.159-7.422-16.584-16.586-16.584z"></path>`:m`<path d="M404.84 246.573h-22.084l-.002-73.603c0-36.675-13.921-70.311-36.917-94.892-22.91-24.584-55.547-40.367-91.539-40.336-36.003-.031-68.643 15.752-91.55 40.336-23.001 24.582-36.918 58.217-36.925 94.892v73.603h-22.082c-9.16 0-16.585 7.421-16.585 16.583v194.531c0 9.158 7.425 16.585 16.585 16.585H404.84c9.162 0 16.586-7.427 16.586-16.585V263.156c0-9.161-7.424-16.583-16.586-16.583zm-218.013-73.602c0-21.167 8.012-39.893 20.468-53.219 12.552-13.316 28.896-20.982 47.003-21.007 18.095.025 34.438 7.685 46.987 21.007 12.455 13.326 20.467 32.052 20.467 53.219v73.603H186.827v-73.603z"></path>`}
    </svg>`}};eo.styles=[b`
      :host {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
      }

      svg {
        fill: currentColor;
      }
    `],Mc([a({type:Boolean,reflect:!0})],eo.prototype,"open",2),eo=Mc([v("uui-symbol-lock")],eo);var Tg=Object.getOwnPropertyDescriptor,Ng=(e,t,i,o)=>{for(var r=o>1?void 0:o?Tg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ds=class extends g{render(){return m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="17" cy="50" r="9"></circle>
      <circle cx="50" cy="50" r="9"></circle>
      <circle cx="83" cy="50" r="9"></circle>
    </svg>`}};Ds.styles=[b`
      :host {
        display: inline-block;
        vertical-align: bottom;
        width: 1.15em;
        height: 1.15em;
      }

      svg {
        fill: currentColor;
      }
    `],Ds=Ng([v("uui-symbol-more")],Ds);var Vg=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,Dc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Bg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Vg(t,i,r),r};let to=class extends xr(g){constructor(){super(...arguments),this.descending=!1}render(){return l` <svg
        id="up"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>
      <svg
        id="down"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>`}};to.styles=[b`
      :host {
        position: relative;
        display: inline-block;
        width: 0.9em;
        height: 1em;
        //vertical-align: middle;
        pointer-events: none;
      }

      svg {
        position: absolute;
        left: 0;
        top: 50%;
        width: 0.9em;
        transform-origin: 50% 50%;
        transition:
          transform 120ms ease-in-out,
          opacity 120ms,
          margin-top 240ms;
        opacity: 0;
        margin-top: -8em;
      }

      #up {
        transform: rotate(180deg);
        margin-top: -1.05em;
      }
      #down {
        margin-top: -0.55em;
      }
      :host([active]) #up {
        margin-top: calc(-0.8em - (0.25em * var(--uui-symbol-sort-hover, 0)));
      }
      :host([active]) #down {
        margin-top: calc(-0.8em + (0.25em * var(--uui-symbol-sort-hover, 0)));
      }

      :host(:hover) {
        --uui-symbol-sort-hover: 1;
      }
      :host(:not([active])) #up,
      :host(:not([active])) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active]:not([descending])) #down {
        opacity: 1;
      }
      :host([active]:not([descending])) #up {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active][descending]) #up {
        opacity: 1;
      }
      :host([active][descending]) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }
    `],Dc([a({type:Boolean,reflect:!0})],to.prototype,"descending",2),to=Dc([v("uui-symbol-sort")],to);var Hg=Object.getOwnPropertyDescriptor,jg=(e,t,i,o)=>{for(var r=o>1?void 0:o?Hg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ls=class extends g{connectedCallback(){super.connectedCallback(),this.setAttribute("role","table")}render(){return l`<slot></slot>`}};Ls.styles=[b`
      :host {
        display: table;
        width: 100%;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        cursor: default;
      }
    `],Ls=jg([v("uui-table")],Ls);var Rg=Object.defineProperty,Wg=Object.getOwnPropertyDescriptor,Ts=(e,t,i,o)=>{for(var r=o>1?void 0:o?Wg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Rg(t,i,r),r};let ft=class extends g{constructor(){super(...arguments),this.disableChildInteraction=!1,this.noPadding=!1,this.clipText=!1,this._observer=new ResizeObserver(()=>{this._detectOverflow()})}_detectOverflow(){this.scrollWidth>this.clientWidth?this.setAttribute("title",this.innerText):this.removeAttribute("title")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","cell")}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}updated(e){super.updated(e),e.has("clipText")&&(this.clipText?(this._detectOverflow(),this._observer.observe(this)):this._observer.disconnect())}render(){return l` <slot @slotchange=${this._detectOverflow}></slot>`}};ft.styles=[b`
      :host {
        position: relative;
        display: table-cell;
        height: var(--uui-table-cell-height, var(--uui-size-12,36px));
        padding: var(
          --uui-table-cell-padding,
          var(--uui-size-3,9px) var(--uui-size-5,15px)
        );
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
        vertical-align: middle;
      }

      :host([clip-text]) {
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }

      :host([disable-child-interaction]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disable-child-interaction])::after {
        content: '';
        position: absolute;
        inset: 0;
      }

      :host([no-padding]) {
        padding: 0;
      }
    `],Ts([a({type:Boolean,reflect:!0,attribute:"disable-child-interaction"})],ft.prototype,"disableChildInteraction",2),Ts([a({type:Boolean,reflect:!0,attribute:"no-padding"})],ft.prototype,"noPadding",2),Ts([a({type:Boolean,reflect:!0,attribute:"clip-text"})],ft.prototype,"clipText",2),ft=Ts([v("uui-table-cell")],ft);var Fg=Object.getOwnPropertyDescriptor,Gg=(e,t,i,o)=>{for(var r=o>1?void 0:o?Fg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ns=class extends g{};Ns.styles=[b`
      :host {
        display: table-column;
      }
    `],Ns=Gg([v("uui-table-column")],Ns);var qg=Object.getOwnPropertyDescriptor,Kg=(e,t,i,o)=>{for(var r=o>1?void 0:o?qg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Vs=class extends ft{connectedCallback(){super.connectedCallback(),this.setAttribute("role","columnheader")}};Vs.styles=[...ft.styles,b`
      :host {
        border-top: none;
      }
    `],Vs=Kg([v("uui-table-head-cell")],Vs);var Xg=Object.getOwnPropertyDescriptor,Yg=(e,t,i,o)=>{for(var r=o>1?void 0:o?Xg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Bs=class extends g{connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}render(){return l`<slot></slot>`}};Bs.styles=[b`
      :host {
        display: table-header-group;
        font-weight: bold;
      }
    `],Bs=Yg([v("uui-table-head")],Bs);var Zg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,Lc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Qg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Zg(t,i,r),r};let io=class extends Eo(xi(g)){constructor(){super();let e=!1;this.addEventListener("blur",()=>{e===!1&&this.style.setProperty("--uui-show-focus-outline","1"),e=!1}),this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),e=!0}),this.addEventListener("mouseup",()=>{e=!1})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}updated(e){e.has("selectOnly")&&this.updateChildSelectOnly()}updateChildSelectOnly(){this.slotCellNodes&&this.slotCellNodes.forEach(e=>{e.disableChildInteraction!==void 0&&(e.disableChildInteraction=this.selectOnly)})}render(){return l` <slot @slotchanged=${this.updateChildSelectOnly}></slot> `}};io.styles=[b`
      :host {
        display: table-row;
        position: relative;
        outline-offset: -3px;
      }

      :host([selectable]) {
        cursor: pointer;
      }

      :host(:focus) {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host([selected]) {
        outline: 2px solid
          var(--uui-table-row-color-selected, var(--uui-color-selected,#3544b1));
      }
      :host([selected]:focus) {
        outline-color: var(--uui-color-focus,#3879ff);
      }
    `],Lc([$t({flatten:!0,selector:"uui-table-cell, [uui-table-cell], [role=cell]"})],io.prototype,"slotCellNodes",2),io=Lc([v("uui-table-row")],io);var Jg=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,lr=(e,t,i,o)=>{for(var r=o>1?void 0:o?e0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Jg(t,i,r),r};let bt=class extends xr(Te("",g)){constructor(){super(),this.disabled=!1,this.orientation="horizontal",this.addEventListener("click",this.onHostClick)}onHostClick(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}render(){return this.href?l`
          <a
            id="button"
            href=${w(this.disabled?void 0:this.href)}
            target=${w(this.target||void 0)}
            rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:l`
          <button
            type="button"
            id="button"
            ?disabled=${this.disabled}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};bt.styles=[b`
      :host {
        color: var(--uui-tab-text, var(--uui-color-interactive,#1b264f));
        font-family: inherit;
        width: fit-content;
      }

      #button {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        min-height: var(--uui-size-12,36px);
        min-width: 70px;
        padding: var(--uui-size-3,9px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
        border: none;
        font-size: inherit;
        background: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;

        /* for anchor tag: */
        text-decoration: none;
        line-height: normal;
      }

      :host([orientation='vertical']) #button {
        min-height: var(--uui-size-14,42px);
        padding: var(--uui-size-2,6px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
      }

      :host(:not([disabled])) #button:hover {
        color: var(--uui-tab-text-hover, var(--uui-color-default-emphasis,#3544b1));
      }

      :host(:not([disabled])) #button:active {
        box-shadow:
          inset 0 2px 4px rgba(0, 0, 0, 0.15),
          0 1px 2px rgba(0, 0, 0, 0.05);
      }

      :host([active]) {
        color: var(--uui-tab-text-active, unset);
      }

      :host([disabled]) #button {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        cursor: default;
      }

      #button::before {
        content: '';
        position: absolute;
        background-color: var(--uui-color-current,#f5c1bc);
        opacity: 0;
      }
      :host([active]) #button::before {
        opacity: 1;
      }

      /* HORIZONTAL */
      :host([orientation='horizontal']) #button::before {
        left: auto;
        right: auto;
        border-radius: var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0 0;
        height: 0px;
        width: calc(100% - 14px);
        bottom: 0;
        transition:
          opacity linear 120ms,
          height ease-in-out 120ms;
      }
      :host([active][orientation='horizontal']) #button::before {
        height: 4px;
      }

      /* VERTICAL */
      :host([orientation='vertical']) #button::before {
        top: auto;
        bottom: auto;
        border-radius: 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0;
        height: calc(100% - 12px);
        width: 0px;
        left: 0;
        transition:
          opacity linear 120ms,
          width ease-in-out 120ms;
      }
      :host([active][orientation='vertical']) #button::before {
        width: 4px;
      }

      #button:hover::before {
        background-color: var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ));
      }
      :host([disabled]) #button::before {
        background-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      slot[name='icon']::slotted(*) {
        font-size: 20px;
        margin-bottom: var(--uui-size-2,6px);
      }

      slot.label {
        /* TODO: Find a better selector */
        text-align: center;
        display: flex;
        width: 100%;
        flex-direction: column;
      }

      :host([orientation='vertical']) slot.label {
        text-align: left;
      }
    `],lr([a({type:Boolean,reflect:!0})],bt.prototype,"disabled",2),lr([a({type:String})],bt.prototype,"href",2),lr([a({type:String})],bt.prototype,"target",2),lr([a({type:String})],bt.prototype,"rel",2),lr([a({type:String,reflect:!0})],bt.prototype,"orientation",2),bt=lr([v("uui-tab")],bt);var t0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,Tc=e=>{throw TypeError(e)},ur=(e,t,i,o)=>{for(var r=o>1?void 0:o?i0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&t0(t,i,r),r},Ia=(e,t,i)=>t.has(e)||Tc("Cannot "+i),S=(e,t,i)=>(Ia(e,t,"read from private field"),i?i.call(e):t.get(e)),Xe=(e,t,i)=>t.has(e)?Tc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ro=(e,t,i,o)=>(Ia(e,t,"write to private field"),t.set(e,i),i),$e=(e,t,i)=>(Ia(e,t,"access private method"),i),Hs,Ye,gt,cr,hr,js,oo,so,ce,Nc,Vc,Aa,Bc,dr,Rs,Hc,Ua,za;let mt=class extends g{constructor(){super(...arguments),Xe(this,ce),Xe(this,Hs,0),this.dropdownContentDirection="vertical",Xe(this,Ye,[]),Xe(this,gt,[]),Xe(this,cr,new Map),Xe(this,hr,[]),Xe(this,js,new ResizeObserver($e(this,ce,Vc).bind(this))),Xe(this,oo,[]),Xe(this,so,!1),Xe(this,dr,e=>{const t=e.currentTarget;if($e(this,ce,za).call(this,t)){t.active=!0;const i=S(this,cr).get(t);i&&(i.active=!0),[...S(this,Ye),...S(this,gt)].filter(s=>s!==t&&s!==i).forEach(s=>{$e(this,ce,za).call(this,s)&&(s.active=!1)}),S(this,gt).some(s=>s.active&&s!==i)?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside")}})}connectedCallback(){super.connectedCallback(),$e(this,ce,Nc).call(this)}disconnectedCallback(){super.disconnectedCallback(),S(this,js).unobserve(this),$e(this,ce,Aa).call(this)}render(){return l`
      <div id="main">
        <div id="grid" role="tablist">
          <slot @slotchange=${$e(this,ce,Bc)}></slot>
        </div>
        <uui-button
          popovertarget="popover-container"
          style="display: none"
          id="more-button"
          label="More"
          compact>
          <uui-symbol-more></uui-symbol-more>
        </uui-button>
      </div>
      <uui-popover-container
        id="popover-container"
        popover
        placement="bottom-end">
        <div id="hidden-tabs-container" role="tablist">
          ${Rn(S(this,gt),e=>l`${e}`)}
        </div>
      </uui-popover-container>
    `}};Hs=new WeakMap,Ye=new WeakMap,gt=new WeakMap,cr=new WeakMap,hr=new WeakMap,js=new WeakMap,oo=new WeakMap,so=new WeakMap,ce=new WeakSet,Nc=async function(){x(this,"uui-button"),x(this,"uui-popover-container"),x(this,"uui-symbol-more"),await this.updateComplete,S(this,js).observe(this._mainElement)},Vc=function(e){const t=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap"));(Number.isNaN(t)?0:t)!==S(this,Hs)?$e(this,ce,Rs).call(this):$e(this,ce,Ua).call(this,e[0].contentBoxSize[0].inlineSize)},Aa=function(){S(this,Ye).forEach(e=>{e.removeEventListener("click",S(this,dr)),S(this,oo).forEach(t=>t.disconnect())}),S(this,oo).length=0,S(this,hr).length=0},Bc=function(){$e(this,ce,Aa).call(this),$e(this,ce,Hc).call(this),S(this,Ye).forEach(e=>{e.addEventListener("click",S(this,dr));const t=new ResizeObserver($e(this,ce,Rs).bind(this));t.observe(e),S(this,oo).push(t)})},dr=new WeakMap,Rs=async function(){if(S(this,so))return;ro(this,so,!0),requestAnimationFrame(()=>{ro(this,so,!1)}),await this.updateComplete;const e=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap")),t=Number.isNaN(e)?0:e;ro(this,Hs,t);let i=0;for(let r=0;r<S(this,Ye).length;r++)S(this,Ye)[r].style.display="",i+=S(this,Ye)[r].offsetWidth,S(this,hr)[r]=i,i+=t;const o=2;this._mainElement.style.width=i-t+o+"px",$e(this,ce,Ua).call(this,this._mainElement.offsetWidth)},Hc=function(){ro(this,Ye,this._slottedNodes?this._slottedNodes:[]),$e(this,ce,Rs).call(this)},Ua=function(e){const t=this._moreButtonElement.offsetWidth,i=e-(t||0);S(this,gt).forEach(s=>{s.removeEventListener("click",S(this,dr))}),ro(this,gt,[]),S(this,cr).clear();let o=!1;const r=S(this,hr).length;for(let s=0;s<r;s++){const n=S(this,hr)[s],u=S(this,Ye)[s];if(n<=(s===r-1?e:i))u.style.display="";else{const c=u.cloneNode(!0);c.addEventListener("click",S(this,dr)),c.classList.add("hidden-tab"),c.style.display="",c.orientation=this.dropdownContentDirection,S(this,cr).set(c,u),S(this,cr).set(u,c),S(this,gt).push(c),u.style.display="none",u.active&&(o=!0)}}S(this,gt).length===0?(this._moreButtonElement.style.display="none",this._popoverContainerElement.hidePopover()):this._moreButtonElement.style.display="",o?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside"),this.requestUpdate()},za=function(e){return typeof e=="object"&&"active"in e&&typeof e.active=="boolean"},mt.styles=[b`
      :host {
        min-width: 0;
        display: flex;
        height: 100%;
      }

      #main {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }

      #grid {
        width: 1fr;
        display: flex;
        height: 100%;
        min-height: 48px;
        overflow: hidden;
        text-wrap: nowrap;
        color: var(--uui-tab-text);
        gap: var(--uui-tab-group-gap, 0);
      }

      #popover-container {
        --uui-tab-text: var(--uui-tab-group-dropdown-tab-text, unset);
        --uui-tab-text-hover: var(
          --uui-tab-group-dropdown-tab-text-hover,
          unset
        );
        --uui-tab-text-active: var(
          --uui-tab-group-dropdown-tab-text-active,
          unset
        );
      }

      ::slotted(*:not(:last-of-type)) {
        border-right: 1px solid var(--uui-tab-divider, none);
      }

      .hidden-tab {
        width: 100%;
      }

      #hidden-tabs-container {
        width: fit-content;
        display: flex;
        flex-direction: column;
        background-color: var(
          --uui-tab-group-dropdown-background,
          var(--uui-color-surface,#fff)
        );
        border-radius: var(--uui-border-radius,3px);
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
        overflow: hidden;
      }
      :host([dropdown-direction='horizontal']) #hidden-tabs-container {
        flex-direction: row;
      }

      #more-button {
        position: relative;

        --uui-button-contrast: var(--uui-tab-text);
        --uui-button-contrast-hover: var(--uui-tab-text-hover);
        --uui-button-background-color: transparent;
        --uui-button-background-color-hover: transparent;
      }
      #more-button::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: var(--uui-color-current,#f5c1bc);
        height: 0px;
        border-radius: 3px 3px 0 0;
        opacity: 0;
        transition:
          opacity ease-in 120ms,
          height ease-in 120ms;
      }
      #more-button.active-inside::before {
        opacity: 1;
        height: 4px;
        transition:
          opacity 120ms,
          height ease-out 120ms;
      }
    `],ur([O("#more-button")],mt.prototype,"_moreButtonElement",2),ur([O("#popover-container")],mt.prototype,"_popoverContainerElement",2),ur([O("#main")],mt.prototype,"_mainElement",2),ur([$t({flatten:!0,selector:"uui-tab, [uui-tab], [role=tab]"})],mt.prototype,"_slottedNodes",2),ur([a({type:String,reflect:!0,attribute:"dropdown-content-direction"})],mt.prototype,"dropdownContentDirection",2),mt=ur([v("uui-tab-group")],mt);class r0 extends A{}class o0 extends A{}var s0=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,Ma=(e,t,i,o)=>{for(var r=o>1?void 0:o?n0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&s0(t,i,r),r};let pr=class extends g{constructor(){super(...arguments),this.color="default",this.look="primary"}render(){return l`<slot></slot>`}};pr.styles=[b`
      :host {
        display: inline-block;
        font-size: var(--uui-tag-font-size, var(--uui-type-small-size,12px));
        font-weight: 700;
        line-height: 1;
        padding: var(
          --uui-tag-padding,
          var(--uui-size-space-1,3px) calc(var(--uui-size-space-1,3px) + 0.5em)
        );
        border-radius: 100px;
        user-select: none;
        border-radius: var(--uui-tag-border-radius, var(--uui-size-4,12px));
        border: 1px solid var(--uui-tag-border-color, transparent);
      }

      slot {
        display: block;
        align-content: center;
        margin: 2px;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `],Ma([a({reflect:!0})],pr.prototype,"color",2),Ma([a({reflect:!0})],pr.prototype,"look",2),pr=Ma([v("uui-tag")],pr);class no extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}no.CHANGE="change",no.INPUT="input";var a0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,le=(e,t,i,o)=>{for(var r=o>1?void 0:o?l0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&a0(t,i,r),r};let G=class extends Ne(g,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.name="",this.error=!1,this.minlengthMessage=e=>`${e} characters left`,this.maxlengthMessage=(e,t)=>`Maximum ${e} characters, ${t} too many.`,this.autoHeight=!1,this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addValidator("tooShort",()=>{const e=this.minlengthMessage;return typeof e=="function"?e(this.minlength?this.minlength-String(this.value).length:0):e},()=>!!this.minlength&&this.value.length<this.minlength),this.addValidator("tooLong",()=>{const e=this.maxlengthMessage;return typeof e=="function"?e(this.maxlength??0,String(this.value).length):e},()=>!!this.maxlength&&this.value.length>this.maxlength)}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this),this.autoHeight&&requestAnimationFrame(()=>{this.autoUpdateHeight()})}async focus(){await this.updateComplete,this._textarea.focus()}async blur(){await this.updateComplete,this._textarea.blur()}async click(){await this.updateComplete,this._textarea.click()}getFormElement(){return this._textarea}onInput(e){this.value=e.target.value,this.autoHeight&&this.autoUpdateHeight()}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new no(no.CHANGE))}autoUpdateHeight(){const e=this.shadowRoot.host,t=this._textarea,i=e.scrollTop,o=getComputedStyle(e).height;e.style.display="block",e.style.height=o,t.style.height="auto",t.scrollHeight+2>t.clientHeight?t.style.height=t.scrollHeight+2+"px":t.scrollHeight+2<t.clientHeight&&t.style.removeProperty("height"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=i}render(){return l`
      <textarea
        id="textarea"
        rows=${w(this.rows)}
        cols=${w(this.cols)}
        .value=${this.value}
        .name=${this.name}
        wrap=${w(this.wrap)}
        placeholder=${this.placeholder}
        aria-label=${this.label}
        .disabled=${this.disabled}
        ?readonly=${this.readonly}
        @input=${this.onInput}
        @change=${this.onChange}>
      </textarea>
    `}};G.formAssociated=!0,G.styles=[b`
      :host {
        position: relative;
      }
      :host([error]) textarea,
      :host([error]) textarea[disabled] {
        border: 1px solid var(--uui-color-invalid,#d42054) !important;
      }
      :host(:not([pristine]):invalid) textarea,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) textarea {
        border-color: var(--uui-color-invalid,#d42054);
      }
      :host([auto-height]) textarea {
        resize: none;
      }

      .label {
        display: inline-block;
        margin-bottom: var(--uui-size-1,3px);
        font-weight: bold;
      }

      textarea[readonly] {
        border-color: var(
          --uui-textarea-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ))
        );
        background-color: var(
          --uui-textarea-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
      }
      textarea[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-textarea-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-textarea-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      textarea {
        color: var(--uui-color-text,#060606);
        font-family: inherit;
        line-height: var(--uui-size-6,18px);
        box-sizing: border-box;
        min-width: 100%;
        max-width: 100%;
        font-size: inherit;
        padding: var(--uui-size-2,6px);
        border: 1px solid
          var(--uui-textarea-border-color, var(--uui-color-border,#d8d7d9)); /** Note: Specified border size is needed and hardcoded in autoUpdateHeight() */
        border-radius: var(--uui-border-radius,3px);
        outline: none;
        min-height: var(--uui-textarea-min-height);
        max-height: var(--uui-textarea-max-height);
        background-color: var(
          --uui-textarea-background-color,
          var(--uui-color-surface,#fff)
        );
      }
      :host(:hover)
        textarea:not([readonly]):not([disabled])
        :host(:focus-within)
        textarea,
      :host(:focus) textarea {
        border-color: var(
          --uui-textarea-border-color,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      textarea:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
    `],le([a()],G.prototype,"placeholder",2),le([a({type:Boolean,reflect:!0})],G.prototype,"disabled",2),le([a({type:Boolean,reflect:!0})],G.prototype,"readonly",2),le([a({type:String})],G.prototype,"name",2),le([a({type:Boolean,reflect:!0})],G.prototype,"error",2),le([a({type:Number})],G.prototype,"minlength",2),le([a({attribute:"minlength-message"})],G.prototype,"minlengthMessage",2),le([a({type:Number})],G.prototype,"maxlength",2),le([a({attribute:"maxlength-message"})],G.prototype,"maxlengthMessage",2),le([O("#textarea")],G.prototype,"_textarea",2),le([a({type:Boolean,attribute:"auto-height",reflect:!0})],G.prototype,"autoHeight",2),le([a({type:String})],G.prototype,"label",2),le([a({type:Number})],G.prototype,"rows",2),le([a({type:Number})],G.prototype,"cols",2),le([a({type:String})],G.prototype,"wrap",2),G=le([v("uui-textarea")],G);class he extends A{}he.OPENING="opening",he.OPENED="opened",he.CLOSING="closing",he.CLOSED="closed";var u0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,vr=(e,t,i,o)=>{for(var r=o>1?void 0:o?c0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&u0(t,i,r),r};let _t=class extends g{constructor(){super(),this.color="",this._autoClose=null,this._onOpenTimerComplete=()=>{this._open&&(this.open=!1)},this._timer=null,this._pauseTimer=!1,this.isOpen=!1,this._open=!1,this._animate=!1,this._requestAnimationUpdate=0,this.addEventListener("keyup",e=>{e.key==="Escape"&&(this.open=!1)})}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose=e,e!==null?(this._timer===null?this._timer=new Yd(this._onOpenTimerComplete,e):this._timer.setDuration(e),this._pauseTimer===!1&&this.isOpen===!0&&this._animate===!1&&this._timer.start()):(this._timer?.destroy(),this._timer=null)}pauseAutoClose(){this._pauseTimer=!0,this._timer!==null&&this._timer.pause()}resumeAutoClose(){this._pauseTimer=!1,this._timer!==null&&this.isOpen===!0&&this._animate===!1&&this._timer.restart()}get open(){return this._open}set open(e){e===!0?this._makeOpen():this._makeClose()}connectedCallback(){super.connectedCallback(),x(this,"uui-button"),x(this,"uui-icon")}_getAnimationDuration(){return parseInt(getComputedStyle(this).getPropertyValue("--uui-toast-notification-animation-duration"),10)||480}_makeOpen(){this._open!==!0&&(this._open=!0,this.updateComplete.then(()=>{this._open===!0&&(cancelAnimationFrame(this._requestAnimationUpdate),this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!0,this.setAttribute("is-open",""),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,this.dispatchEvent(new he(he.OPENING)),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!0&&(this.style.height="auto",this._animate=!1,this._pauseTimer===!1&&this._timer?.start(),this.dispatchEvent(new he(he.OPENED)))},this._getAnimationDuration())}))}))}_makeClose(){if(this._open===!1)return;const e=new he(he.CLOSING,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented!==!0&&(this._open=!1,this._timer?.pause(),cancelAnimationFrame(this._requestAnimationUpdate),this.isOpen===!0&&(this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!1,this.removeAttribute("is-open"),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,requestAnimationFrame(()=>{this.style.height="0"}),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!1&&(this._animate=!1,this.dispatchEvent(new he(he.CLOSED)),this.parentNode&&this.parentNode.removeChild(this))},this._getAnimationDuration())})))}render(){return l`
      <div id="toast" class=${this._animate?"animate":""}>
        <div>
          <div id="close">
            <uui-button
              .label=${"close"}
              .color=${this.color}
              .look=${this.color?"primary":"default"}
              @click=${()=>this.open=!1}>
              <uui-icon
                name="remove"
                .fallback=${pn.strings[0]}></uui-icon>
            </uui-button>
          </div>
          <slot></slot>
        </div>
      </div>
    `}};_t.styles=[mi,b`
      :host {
        --uui-toast-notification-margin: var(--uui-size-space-2,6px);

        position: relative;
        display: block;
        width: 100%;
        max-width: 400px;
        margin: 0 var(--uui-toast-notification-margin);
        box-sizing: border-box;

        height: 0;
        pointer-events: none;

        transition: height
          var(--uui-toast-notification-animation-duration, 480ms) ease-in-out;
      }
      :host([is-open]) {
        pointer-events: all;
        transition-timing-function: cubic-bezier(
          0.19,
          1,
          0.22,
          1
        ); /* easeOutExpo */
      }

      #toast {
        position: relative;
        display: block;
        padding: calc(var(--uui-toast-notification-margin) * 0.5) 0;
        width: 100%;
        max-width: 400px;
      }
      #toast.animate {
        position: absolute;
      }

      #toast > div {
        position: relative;
        display: block;

        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        background-color: var(--uui-color-surface,#fff);
        padding: var(--uui-size-layout-1,24px);
        padding-right: var(--uui-size-layout-1,24px);
        padding-left: var(--uui-size-layout-3,42px);
        border-radius: calc(var(--uui-border-radius,3px) * 2);

        opacity: 0;
        transition: opacity
          var(--uui-toast-notification-animation-duration, 480ms);
      }
      :host([is-open]) #toast > div {
        opacity: 1;
      }

      #close {
        float: right;
        margin-top: -6px;
        margin-left: var(--uui-size-space-1,3px);
        margin-bottom: -4px;
      }

      #close > uui-button {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }

      :host #toast > div {
        background-color: var(--uui-color-surface,#fff);
        color: var(--uui-color-text,#060606);
        border-color: var(--uui-color-surface,#fff);
      }
      :host([color='default']) #toast > div {
        background-color: var(--uui-color-default,#1b264f);
        color: var(--uui-color-default-contrast,#fff);
        border-color: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
      }
      :host([color='positive']) #toast > div {
        background-color: var(--uui-color-positive,#0b8152);
        color: var(--uui-color-positive-contrast,#fff);
        border-color: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
      }
      :host([color='warning']) #toast > div {
        background-color: var(--uui-color-warning,#fbd142);
        color: var(--uui-color-warning-contrast,#000);
        border-color: var(--uui-color-warning-standalone,#a17700);
      }
      :host([color='danger']) #toast > div {
        background-color: var(--uui-color-danger,#d42054);
        color: var(--uui-color-danger-contrast,white);
        border-color: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host([color='invalid']) #toast > div {
        background-color: var(--uui-color-invalid,#d42054);
        color: var(--uui-color-invalid-contrast,white);
        border-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `],vr([a({reflect:!0})],_t.prototype,"color",2),vr([a({type:Number})],_t.prototype,"autoClose",1),vr([O("#toast")],_t.prototype,"_toastEl",2),vr([_()],_t.prototype,"_animate",2),vr([a({type:Boolean,reflect:!0})],_t.prototype,"open",1),_t=vr([v("uui-toast-notification")],_t);var h0=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,jc=(e,t,i,o)=>{for(var r=o>1?void 0:o?d0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&h0(t,i,r),r};let ao=class extends g{constructor(){super(...arguments),this._autoClose=null,this._autoClosePause=!1,this.pauseAutoClose=()=>{this._autoClosePause=!0,this._toasts?.forEach(e=>e.pauseAutoClose())},this.resumeAutoClose=()=>{this.matches(":focus-within:not(:focus)")===!1&&(this._autoClosePause=!1,this._toasts?.forEach(e=>e.resumeAutoClose()))},this.onToastClosed=e=>{this.removeToast(e.target)},this._toasts=[],this.onSlotChanged=e=>{const t=[...this._toasts];this._toasts=e.target.assignedElements({flatten:!0}).filter(r=>r.nodeName==="UUI-TOAST-NOTIFICATION"),t.filter(r=>this._toasts.indexOf(r)===-1).forEach(r=>{r.removeEventListener(he.CLOSED,this.onToastClosed),r.removeEventListener("mouseenter",this.pauseAutoClose),r.removeEventListener("mouseleave",this.resumeAutoClose),r.removeEventListener("focus",this.pauseAutoClose),r.removeEventListener("blur",this.resumeAutoClose)}),this._toasts.filter(r=>t.indexOf(r)===-1).forEach(r=>{r.addEventListener(he.CLOSED,this.onToastClosed),r.addEventListener("mouseenter",this.pauseAutoClose),r.addEventListener("mouseleave",this.resumeAutoClose),r.addEventListener("focus",this.pauseAutoClose),r.addEventListener("blur",this.resumeAutoClose),this._autoClose&&(r.autoClose=this._autoClose),this._autoClosePause===!0&&r.pauseAutoClose(),r.open=!0})}}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose=e,this._toasts?.forEach(t=>t.autoClose=e)}removeToast(e){if(!e)e=this._toasts[this._toasts.length-1];else if(this._toasts.indexOf(e)===-1){console.warn("Toast-notification",e,"could not be removed as it is not a child of this toast-notification-container",this);return}this.removeChild(e)}closeToast(e){let t=e;t||(t=this._toasts[this._toasts.length-1]),t.open=!1}render(){return l` <slot @slotchange=${this.onSlotChanged}></slot> `}};ao.styles=[b`
      :host {
        position: absolute;
        overflow: hidden;
        max-width: 100%;
        height: 100%;

        pointer-events: none;
        box-sizing: border-box;
      }

      slot {
        display: flex;
        flex-direction: column;
        align-items: end;

        height: 100%;
        box-sizing: border-box;

        padding-top: var(--uui-size-space-1,3px);
        padding-bottom: var(--uui-size-space-1,3px);
      }
      :host([bottom-up]) slot {
        justify-content: end;
      }
      :host([left-align]) slot {
        align-items: start;
      }
    `],jc([a({type:Number,reflect:!0,attribute:"auto-close"})],ao.prototype,"_autoClose",2),ao=jc([v("uui-toast-notification-container")],ao);var p0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,Da=(e,t,i,o)=>{for(var r=o>1?void 0:o?v0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&p0(t,i,r),r};let fr=class extends g{constructor(){super(...arguments),this.headline="",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}render(){return l`
      <div id="message" class="uui-text">
        <h5
          style=${this._headlineSlotHasContent||this.headline&&this.headline!==""?"":"display: none"}>
          ${this.headline}
          <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
        </h5>
        <slot></slot>
        <slot id="actions" name="actions"></slot>
      </div>
    `}};fr.styles=[mi,b`
      #message {
        margin-bottom: calc(var(--uui-size-space-1,3px) * -1);
      }
      #message::after {
        content: '';
        display: block;
        clear: both;
      }
      #actions {
        /*
        display: flex;
        width: 100%;
        justify-content: flex-end;
        */
        display: block;
        float: right;

        margin-top: var(--uui-size-space-4,12px);
        margin-bottom: calc(var(--uui-size-space-2,6px) * -1);
      }
    `],Da([a({type:String})],fr.prototype,"headline",2),Da([_()],fr.prototype,"_headlineSlotHasContent",2),fr=Da([v("uui-toast-notification-layout")],fr);var f0=Object.getOwnPropertyDescriptor,b0=(e,t,i,o)=>{for(var r=o>1?void 0:o?f0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let lo=class extends ke{constructor(){super("switch")}renderCheckbox(){return l`
      <div id="toggle">
        <div id="icon-checked">${zo}</div>
        <div id="icon-unchecked">${pn}</div>
      </div>
    `}};lo.formAssociated=!0,lo.styles=[...ke.styles,Oo,b`
      :host {
        --uui-toggle-size: 18px;
        --uui-toggle-switch-width: calc(2 * var(--uui-toggle-size));
      }

      #toggle {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;

        flex-shrink: 0;

        width: var(--uui-toggle-switch-width);
        height: var(--uui-toggle-size);
        border-radius: 100px;

        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-border,#d8d7d9)
        );
        border: 1px solid
          var(--uui-toggle-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-toggle-size) * 0.6);
      }

      label:hover input:not([disabled]) ~ #toggle {
        border-color: var(
          --uui-toggle-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-toggle-background-color-hover,
          var(--uui-color-border,#d8d7d9)
        );
      }

      label:focus #toggle {
        border-color: var(
          --uui-toggle-border-color-focus,
          var(--uui-color-focus,#3879ff)
        );
        background-color: var(
          --uui-toggle-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }

      input:checked ~ #toggle {
        background-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      label:focus input:checked ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      #icon-checked,
      #icon-unchecked {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition: color 120ms;
      }

      #icon-checked {
        margin-left: -0.5em;
        left: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      #icon-unchecked {
        margin-right: -0.5em;
        right: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      input:checked ~ #toggle #icon-checked {
        color: var(--uui-color-selected-contrast,#fff);
      }

      #toggle::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: calc(var(--uui-toggle-size) - 4px);
        height: calc(var(--uui-toggle-size) - 4px);
        border-radius: 100px;
        background-color: var(--uui-color-selected-contrast,#fff);
        transition:
          width 120ms ease,
          left 120ms ease,
          transform 120ms ease,
          background-color 120ms;
      }

      input:checked ~ #toggle::after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }

      input:focus ~ #toggle {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly])) label:active #toggle::after {
        /** Stretch when mouse down */
        width: calc(1.06 * var(--uui-toggle-size));
      }

      :host([disabled]) #toggle {
        background-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }
      :host([disabled]) input:checked ~ #toggle {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #toggle::after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #toggle #icon-unchecked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #toggle {
        animation: ${Io};
      }
      :host([disabled]) input:checked #toggle #icon-checked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host(:not([pristine]):invalid) #toggle,
      :host(:not([pristine]):invalid) label:hover #toggle,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #toggle,
      :host(:not([pristine])[internals-invalid]) label:hover #toggle {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `],lo=b0([v("uui-toggle")],lo);var g0=Object.getOwnPropertyDescriptor,m0=(e,t,i,o)=>{for(var r=o>1?void 0:o?g0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ws=class extends g{render(){return l`<slot></slot>`}};Ws.styles=[b`
      :host(:not(:focus-within)) {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        clip: rect(0 0 0 0) !important;
        clip-path: inset(50%) !important;
        border: none !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        padding: 0 !important;
      }
    `],Ws=m0([v("uui-visually-hidden")],Ws);export{Ch as ActiveMixin,Ph as LabelMixin,Yh as PopoverTargetMixin,Dh as SelectOnlyMixin,Ah as SelectableMixin,Bh as Timer,wo as UUIActionBarElement,Qe as UUIAvatarElement,Rt as UUIAvatarGroupElement,Wt as UUIBadgeElement,mh as UUIBlinkAnimationValue,gh as UUIBlinkKeyframes,ke as UUIBooleanInputElement,So as UUIBooleanInputEvent,Ve as UUIBoxElement,Kt as UUIBreadcrumbItemElement,$r as UUIBreadcrumbsElement,Zt as UUIButtonCopyTextElement,se as UUIButtonElement,_i as UUIButtonGroupElement,Be as UUIButtonInlineCreateElement,Ao as UUIButtonInlineCreateEvent,Jt as UUICardBlockTypeElement,ei as UUICardContentNodeElement,ee as UUICardElement,Si as UUICardEvent,Et as UUICardMediaElement,zi as UUICardUserElement,Pr as UUICaretElement,Sr as UUICheckboxElement,be as UUIColorAreaElement,jo as UUIColorAreaEvent,Mi as UUIColorPickerChangeEvent,B as UUIColorPickerElement,ge as UUIColorSliderElement,Go as UUIColorSliderEvent,ot as UUIColorSwatchElement,Pt as UUIColorSwatchesElement,Li as UUIColorSwatchesEvent,q as UUIComboboxElement,_e as UUIComboboxEvent,ze as UUIComboboxListElement,me as UUIComboboxListEvent,st as UUIComboboxListOptionElement,Yt as UUICopyTextEvent,ns as UUIDialogElement,Hi as UUIDialogLayoutElement,tn as UUIEvent,nt as UUIFileDropzoneElement,ji as UUIFileDropzoneEvent,ye as UUIFilePreviewElement,Ze as UUIFormControlEvent,Vh as UUIFormControlMixin,Fn as UUIFormElement,ii as UUIFormLayoutItemElement,Tr as UUIFormValidationMessageElement,yh as UUIHorizontalPulseAnimationValue,_h as UUIHorizontalPulseKeyframes,xh as UUIHorizontalShakeAnimationValue,wh as UUIHorizontalShakeKeyframes,We as UUIIconElement,Gn as UUIIconHost,qn as UUIIconRegistry,Nr as UUIIconRegistryElement,Ru as UUIIconRegistryEssential,Kn as UUIIconRegistryEssentialElement,Wi as UUIIconRequestEvent,L as UUIInputElement,oi as UUIInputEvent,at as UUIInputFileElement,si as UUIInputLockElement,us as UUIInputLockEvent,Gi as UUIInputPasswordElement,Jh as UUIInterfaceColorValues,ed as UUIInterfaceHeadingValues,Qh as UUIInterfaceLookValues,ps as UUIKeyElement,ds as UUIKeyboardShortcutElement,ni as UUILabelElement,qi as UUILoaderBarElement,Ki as UUILoaderCircleElement,fs as UUILoaderElement,ve as UUIMenuItemElement,lt as UUIMenuItemEvent,Zu as UUIModalCloseEndEvent,Yi as UUIModalCloseEvent,ut as UUIModalContainerElement,_s as UUIModalDialogElement,we as UUIModalElement,Yu as UUIModalOpenEvent,Zi as UUIModalSidebarElement,ae as UUIPaginationElement,Ot as UUIPaginationEvent,Ge as UUIPopoverContainerElement,It as UUIPopoverElement,Rr as UUIProgressBarElement,Oe as UUIRadioElement,ir as UUIRadioEvent,ci as UUIRadioGroupElement,$s as UUIRadioGroupEvent,N as UUIRangeSliderElement,vt as UUIRefElement,sr as UUIRefEvent,Ps as UUIRefListElement,Gr as UUIRefNodeDataTypeElement,qr as UUIRefNodeDocumentTypeElement,R as UUIRefNodeElement,Is as UUIRefNodeFormElement,Kr as UUIRefNodeMemberElement,nr as UUIRefNodePackageElement,Xr as UUIRefNodeUserElement,Yr as UUIScrollContainerElement,fe as UUISelectElement,As as UUISelectEvent,Bt as UUISelectableEvent,X as UUISliderElement,pi as UUISliderEvent,Qr as UUISymbolExpandElement,Lr as UUISymbolFileDropzoneElement,Jr as UUISymbolFileElement,ar as UUISymbolFileThumbnailElement,Ms as UUISymbolFolderElement,eo as UUISymbolLockElement,Ds as UUISymbolMoreElement,to as UUISymbolSortElement,bt as UUITabElement,r0 as UUITabEvent,mt as UUITabGroupElement,o0 as UUITabGroupEvent,ft as UUITableCellElement,Ns as UUITableColumnElement,Ls as UUITableElement,Vs as UUITableHeadCellElement,Bs as UUITableHeadElement,io as UUITableRowElement,pr as UUITagElement,mi as UUITextStyles,G as UUITextareaElement,no as UUITextareaEvent,ao as UUIToastNotificationContainerElement,_t as UUIToastNotificationElement,he as UUIToastNotificationEvent,fr as UUIToastNotificationLayoutElement,lo as UUIToggleElement,Ws as UUIVisuallyHiddenElement,Rh as clamp,Zh as defineElement,Hh as demandCustomElement,jh as drag,rl as findAncestorByAttributeValue,Wh as reverseNumberInRange,Gh as slotHasContent,Fh as toHex};
