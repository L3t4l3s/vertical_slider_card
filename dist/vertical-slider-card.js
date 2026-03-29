/*! For license information please see vertical-slider-card.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(s,t,i)},r=(i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,f=_.trustedTypes,v=f?f.emptyScript:"",m=_.reactiveElementPolyfillSupport,g=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const n=this.constructor;if(!1===s&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[g("elementProperties")]=new Map,A[g("finalized")]=new Map,m?.({ReactiveElement:A}),(_.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,x=t=>t,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+P,T=`<${k}>`,O=document,U=()=>O.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,N=/>/g,j=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),F=B(1),q=(B(2),B(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),K=new WeakMap,J=O.createTreeWalker(O,129);function Y(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=z;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===z?"!--"===l[1]?r=D:void 0!==l[1]?r=N:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=j):void 0!==l[3]&&(r=j):r===j?">"===l[0]?(r=o??z,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?j:'"'===l[3]?I:V):r===I||r===V?r=j:r===D||r===N?r=z:(r=j,o=void 0);const d=r===j&&t[e+1].startsWith("/>")?" ":"";n+=r===z?i+T:c>=0?(s.push(a),i.slice(0,c)+C+i.slice(c)+P+d):i+P+(-2===c?e:d)}return[Y(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=G.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[n++],i=s.getAttribute(t).split(P),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?st:"@"===r[1]?ot:et}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),J.nextNode(),a.push({type:2,index:++o});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:o}),t+=P.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===q)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);J.currentNode=s;let o=J.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new nt(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=J.nextNode(),n++)}return J.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new G(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new tt(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Q(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Q(this,s[i+r],e,r),a===q&&(a=this._$AH[r]),n||=!M(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class ot extends et{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??W)===q)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(G,tt),(w.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;class lt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new tt(e.insertBefore(U(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");const ht=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y},pt=(t=dt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ut(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function _t(t){return ut({...t,state:!0,attribute:!1})}var ft,vt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ft||(ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(vt||(vt={}));var mt=["closed","locked","off"],gt=(new Set(["fan","input_boolean","light","switch","group","automation"]),function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o});new Set(["call-service","divider","section","weblink","cast","select"]);var $t=function(t){gt(window,"haptic",t)},yt=function(t,e,i,s){var o;"double_tap"===s&&i.double_tap_action?o=i.double_tap_action:"hold"===s&&i.hold_action?o=i.hold_action:"tap"===s&&i.tap_action&&(o=i.tap_action),function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some(function(t){return t.user===e.user.id})||($t("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&gt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),gt(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var s,o=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===o?"homeassistant":o;switch(o){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}t.callService(n,s,{entity_id:e})})(t,e,mt.includes(t.states[e].state))}(e,i.entity),$t("success"));break;case"call-service":if(!s.service)return void $t("failure");var o=s.service.split(".",2);e.callService(o[0],o[1],s.service_data,s.target),$t("success");break;case"fire-dom-event":gt(t,"ll-custom",s)}}(t,e,i,o)};const bt="vertical-slider-card",At="vertical-slider-card-editor",wt=n`
  :host {
    display: block;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  /* Header info area */
  .info {
    text-align: center;
    width: 100%;
    margin-bottom: 8px;
  }

  .state-text {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    line-height: 1.2;
  }

  .last-changed {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 2px;
  }

  /* Slider container */
  .slider-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    min-height: 0;
    padding: 8px 0;
  }

  /* Features row */
  .features {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }

  .features ha-icon-button {
    --mdc-icon-button-size: 36px;
    --mdc-icon-size: 20px;
    color: var(--primary-text-color);
  }

  /* Unavailable state */
  :host([unavailable]) ha-card {
    opacity: 0.5;
    pointer-events: none;
  }
`,xt=n`
  :host {
    display: flex;
    width: var(--slider-width, 110px);
    height: 100%;
    min-height: 0;
    --slider-color: var(--state-cover-color, var(--primary-color));
    --slider-bg: color-mix(in srgb, var(--slider-color) 20%, transparent);
  }

  .container {
    position: relative;
    width: 100%;
    flex: 1;
    min-height: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    overflow: hidden;
    touch-action: none;
    cursor: pointer;
    outline: none;
    /* Padding so handle never sits flush at edges */
    --slider-padding: 8px;
  }

  .slider:focus-visible {
    box-shadow: 0 0 0 2px var(--slider-color);
  }

  .slider-track-bg {
    position: absolute;
    inset: 0;
    background: var(--slider-bg);
    border-radius: inherit;
  }

  .slider-track-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: var(--slider-color);
    border-radius: inherit;
    transition: height var(--transition-duration, 180ms) ease-in-out;
  }

  :host([pressed]) .slider-track-fill {
    transition: none;
  }

  .slider-handle {
    position: absolute;
    left: 25%;
    right: 25%;
    height: 4px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 2px;
    pointer-events: none;
    transform: translateY(-50%);
    transition: top var(--transition-duration, 180ms) ease-in-out;
  }

  :host([pressed]) .slider-handle {
    transition: none;
  }

  .tooltip {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    pointer-events: none;
    opacity: 0;
    transition: opacity 120ms ease-in-out;
    white-space: nowrap;
    transform: translateY(-50%);
  }

  :host([pressed]) .tooltip {
    opacity: 1;
  }
`;class Et{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const St=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Et{update(t,[e]){const i=t.element;return i._actionHandler?i._actionHandler.options=e:(i._actionHandler={options:e,held:!1},i.addEventListener("pointerdown",t=>{const e=i._actionHandler;e.held=!1,e.options.hasHold&&(e.timer=setTimeout(()=>{e.held=!0,i.dispatchEvent(new CustomEvent("action",{detail:{action:"hold"},bubbles:!0,composed:!0}))},500))}),i.addEventListener("pointerup",()=>{const t=i._actionHandler;t.timer&&(clearTimeout(t.timer),t.timer=void 0),t.held||(t.options.hasDoubleClick?t.dblClickTimer?(clearTimeout(t.dblClickTimer),t.dblClickTimer=void 0,i.dispatchEvent(new CustomEvent("action",{detail:{action:"double_tap"},bubbles:!0,composed:!0}))):t.dblClickTimer=setTimeout(()=>{t.dblClickTimer=void 0,i.dispatchEvent(new CustomEvent("action",{detail:{action:"tap"},bubbles:!0,composed:!0}))},250):i.dispatchEvent(new CustomEvent("action",{detail:{action:"tap"},bubbles:!0,composed:!0})))}),i.addEventListener("pointercancel",()=>{const t=i._actionHandler;t.timer&&(clearTimeout(t.timer),t.timer=void 0)})),q}render(t){return q}});function Ct(t){return void 0!==t&&"none"!==t.action}var Pt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let kt=class extends lt{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1,this.color="",this._pressed=!1,this._localValue=null,this._activePointerId=null}static{this.styles=xt}updated(t){t.has("_pressed")&&(this._pressed?this.setAttribute("pressed",""):this.removeAttribute("pressed"))}get _displayValue(){return this._localValue??this.value}get _fillFraction(){return 1-(this._displayValue-this.min)/(this.max-this.min)}render(){const t=100*this._fillFraction,e=Math.max(5,Math.min(95,t)),i=this.color?`--slider-color: ${this.color}`:"";return F`
      <div class="container" style="${i}">
        <div
          class="slider"
          tabindex="0"
          role="slider"
          aria-valuenow="${this._displayValue}"
          aria-valuemin="${this.min}"
          aria-valuemax="${this.max}"
          @pointerdown="${this._onPointerDown}"
          @pointermove="${this._onPointerMove}"
          @pointerup="${this._onPointerUp}"
          @pointercancel="${this._onPointerUp}"
          @keydown="${this._onKeyDown}"
        >
          <div class="slider-track-bg"></div>
          <div class="slider-track-fill" style="height: ${t}%"></div>
          <div class="slider-handle" style="top: ${e}%"></div>
        </div>
        <div class="tooltip" style="top: ${e}%">
          ${Math.round(this._displayValue)} %
        </div>
      </div>
    `}_computeValueFromEvent(t){const e=this.renderRoot.querySelector(".slider");if(!e)return this.value;const i=e.getBoundingClientRect(),s=(t.clientY-i.top)/i.height*(this.max-this.min)+this.min;return this._clampAndStep(s)}_clampAndStep(t){const e=Math.round(t/this.step)*this.step;return Math.max(this.min,Math.min(this.max,e))}_onPointerDown(t){this.disabled||(t.preventDefault(),t.currentTarget.setPointerCapture(t.pointerId),this._activePointerId=t.pointerId,this._pressed=!0,this._localValue=this._computeValueFromEvent(t),this._fireEvent("slider-moved",{value:this._localValue}))}_onPointerMove(t){this._pressed&&t.pointerId===this._activePointerId&&(t.preventDefault(),this._localValue=this._computeValueFromEvent(t),this._fireEvent("slider-moved",{value:this._localValue}))}_onPointerUp(t){if(!this._pressed||t.pointerId!==this._activePointerId)return;const e=this._localValue??this.value;this._pressed=!1,this._localValue=null,this._activePointerId=null,this._fireEvent("value-changed",{value:e})}_onKeyDown(t){if(this.disabled)return;let e=null;const i=this._displayValue;switch(t.key){case"ArrowUp":e=this._clampAndStep(i-this.step);break;case"ArrowDown":e=this._clampAndStep(i+this.step);break;case"PageUp":e=this._clampAndStep(i-10);break;case"PageDown":e=this._clampAndStep(i+10);break;case"Home":e=this.min;break;case"End":e=this.max;break;default:return}t.preventDefault(),null!==e&&this._fireEvent("value-changed",{value:e})}_fireEvent(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}};Pt([ut({type:Number})],kt.prototype,"value",void 0),Pt([ut({type:Number})],kt.prototype,"min",void 0),Pt([ut({type:Number})],kt.prototype,"max",void 0),Pt([ut({type:Number})],kt.prototype,"step",void 0),Pt([ut({type:Boolean})],kt.prototype,"disabled",void 0),Pt([ut({type:String})],kt.prototype,"color",void 0),Pt([_t()],kt.prototype,"_pressed",void 0),Pt([_t()],kt.prototype,"_localValue",void 0),kt=Pt([ht("vertical-cover-slider")],kt);var Tt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const Ot=["cover-open-close","cover-position","cover-tilt","cover-tilt-position"];let Ut=class extends lt{static{this.styles=n`
    .editor-section {
      margin-bottom: 16px;
    }

    .editor-section-title {
      font-weight: 500;
      font-size: 14px;
      color: var(--primary-text-color);
      margin-bottom: 8px;
      padding: 8px 0 4px;
      border-bottom: 1px solid var(--divider-color);
    }

    .editor-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
    }

    .editor-row label {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 4px;
    }

    .feature-toggles {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .feature-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .feature-toggle label {
      font-size: 14px;
      color: var(--primary-text-color);
    }

    ha-selector,
    ha-textfield,
    ha-icon-picker {
      width: 100%;
    }
  `}setConfig(t){this._config=t}render(){return this.hass&&this._config?F`
      <!-- Entity -->
      <div class="editor-section">
        <div class="editor-section-title">
          ${this.hass.localize?.("ui.panel.lovelace.editor.card.generic.entity")||"Entity"}
        </div>
        <div class="editor-row">
          <ha-selector
            .hass="${this.hass}"
            .selector="${{entity:{domain:"cover"}}}"
            .value="${this._config.entity||""}"
            .required="${!0}"
            @value-changed="${this._entityChanged}"
          ></ha-selector>
        </div>
      </div>

      <!-- Content -->
      <div class="editor-section">
        <div class="editor-section-title">
          ${this.hass.localize?.("ui.panel.lovelace.editor.card.generic.appearance")||"Appearance"}
        </div>

        <div class="editor-row">
          <ha-textfield
            .label="${this.hass.localize?.("ui.panel.lovelace.editor.card.generic.name")||"Name"}"
            .value="${this._config.name||""}"
            @input="${this._nameChanged}"
          ></ha-textfield>
        </div>

        <div class="editor-row">
          <ha-icon-picker
            .hass="${this.hass}"
            .label="${this.hass.localize?.("ui.panel.lovelace.editor.card.generic.icon")||"Icon"}"
            .value="${this._config.icon||""}"
            @value-changed="${this._iconChanged}"
          ></ha-icon-picker>
        </div>

        <div class="editor-row">
          <ha-formfield
            .label="${this.hass.localize?.("ui.panel.lovelace.editor.card.tile.hide_state")||"Hide state"}"
          >
            <ha-switch
              .checked="${this._config.hide_state||!1}"
              @change="${this._hideStateChanged}"
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>

      <!-- Features -->
      <div class="editor-section">
        <div class="editor-section-title">
          ${this.hass.localize?.("ui.panel.lovelace.editor.card.tile.features")||"Features"}
        </div>

        <div class="feature-toggles">
          ${Ot.map(t=>F`
              <div class="feature-toggle">
                <ha-switch
                  .checked="${this._hasFeature(t)}"
                  @change="${e=>this._featureToggled(e,t)}"
                ></ha-switch>
                <label>${this._featureLabel(t)}</label>
              </div>
            `)}
        </div>
      </div>
    `:W}_hasFeature(t){return this._config.features?.some(e=>e.type===t)??!1}_featureLabel(t){switch(t){case"cover-open-close":return this.hass.localize?.("ui.panel.lovelace.editor.features.types.cover-open-close.label")||"Open/Close";case"cover-position":return this.hass.localize?.("ui.panel.lovelace.editor.features.types.cover-position.label")||"Position";case"cover-tilt":return this.hass.localize?.("ui.panel.lovelace.editor.features.types.cover-tilt.label")||"Tilt";case"cover-tilt-position":return this.hass.localize?.("ui.panel.lovelace.editor.features.types.cover-tilt-position.label")||"Tilt position";default:return t}}_entityChanged(t){const e=t.detail.value;e&&this._updateConfig({entity:e})}_nameChanged(t){const e=t.target;this._updateConfig({name:e.value||void 0})}_iconChanged(t){this._updateConfig({icon:t.detail.value||void 0})}_hideStateChanged(t){const e=t.target;this._updateConfig({hide_state:e.checked||void 0})}_featureToggled(t,e){const i=t.target.checked,s=[...this._config.features||[]];if(i)s.push({type:e});else{const t=s.findIndex(t=>t.type===e);t>=0&&s.splice(t,1)}this._updateConfig({features:s})}_updateConfig(t){this._config={...this._config,...t},gt(this,"config-changed",{config:this._config})}};Tt([ut({attribute:!1})],Ut.prototype,"hass",void 0),Tt([_t()],Ut.prototype,"_config",void 0),Ut=Tt([ht(At)],Ut);var Mt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};console.info("%c VERTICAL-SLIDER-CARD %c v1.0.0 ","color: white; background: #7c4dff; font-weight: 700;","color: #7c4dff; background: white; font-weight: 700;");let Ht=class extends lt{static{this.styles=wt}static getConfigElement(){return document.createElement(At)}static getStubConfig(t){return{entity:Object.keys(t.states).find(t=>t.startsWith("cover."))||"cover.example",features:[{type:"cover-open-close"}]}}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this._config={tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"},icon_tap_action:{action:"more-info"},...t}}getCardSize(){return 6}getGridOptions(){return{columns:6,rows:4,min_columns:2,min_rows:3}}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!1;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;return e.states[i]!==this.hass.states[i]}render(){if(!this.hass||!this._config)return W;const t=this.hass.states[this._config.entity];if(!t)return F`
        <ha-card>
          <div class="info">
            <div class="state-text">Entity not found: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;const e="unavailable"===t.state||"unknown"===t.state,i=t.attributes.current_position??0,s=(this._config.name||t.attributes.friendly_name,this._computeStateDisplay(t)),o=this._computeLastChanged(t),n=this._computeColor(),r=t.attributes.supported_features??0;return e?this.setAttribute("unavailable",""):this.removeAttribute("unavailable"),F`
      <ha-card
        @action="${this._handleAction}"
        .actionHandler="${St({hasHold:Ct(this._config.hold_action),hasDoubleClick:Ct(this._config.double_tap_action)})}"
      >
        <div class="info">
          <div class="state-text">${s}</div>
          ${o?F`<div class="last-changed">${o}</div>`:W}
        </div>

        <div class="slider-container">
          <vertical-cover-slider
            .value="${i}"
            .disabled="${e}"
            .color="${n}"
            @value-changed="${this._onSliderChanged}"
          ></vertical-cover-slider>
        </div>

        ${this._renderFeatures(r)}
      </ha-card>
    `}_computeStateDisplay(t){const e=t.state,i=t.attributes.current_position,s=this.hass.localize(`component.cover.entity_component._.state.${e}`)||e;return"open"!==e&&"closing"!==e||void 0===i||100===i?s:`${s} · ${i} %`}_computeLastChanged(t){if(!t.last_changed)return"";const e=new Date(t.last_changed),i=(new Date).getTime()-e.getTime(),s=Math.floor(i/1e3),o=Math.floor(s/60),n=Math.floor(o/60),r=Math.floor(n/24);return s<5?this.hass.localize?.("ui.components.relative_time.just_now")||"Jetzt":s<60?this.hass.localize?.("ui.components.relative_time.duration.second","count",String(s))||`Vor ${s} Sekunden`:o<60?this.hass.localize?.("ui.components.relative_time.duration.minute","count",String(o))||`Vor ${o} Minuten`:n<24?this.hass.localize?.("ui.components.relative_time.duration.hour","count",String(n))||`Vor ${n} Stunden`:this.hass.localize?.("ui.components.relative_time.duration.day","count",String(r))||`Vor ${r} Tagen`}_computeColor(){return this._config.color?`var(--${this._config.color}-color, var(--state-cover-color, var(--primary-color)))`:""}_onSliderChanged(t){t.stopPropagation();const e=t.detail.value;this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this.hass.callService("cover","set_cover_position",{entity_id:this._config.entity,position:e})},150)}_handleAction(t){if(!this.hass||!this._config)return;const e=t.detail?.action;e&&yt(this,this.hass,this._config,e)}_renderFeatures(t){if(!this._config.features?.length)return W;const e=this._config.features.map(e=>this._renderFeature(e,t));return e.every(t=>t===W)?W:F`<div class="features">${e}</div>`}_renderFeature(t,e){return"cover-open-close"===t.type?this._renderOpenClose(e):W}_renderOpenClose(t){const e=2&t,i=8&t;return F`
      ${1&t?F`<ha-icon-button
            .label=${"Open"}
            @click="${this._onOpen}"
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </ha-icon-button>`:W}
      ${i?F`<ha-icon-button
            .label=${"Stop"}
            @click="${this._onStop}"
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </ha-icon-button>`:W}
      ${e?F`<ha-icon-button
            .label=${"Close"}
            @click="${this._onClose}"
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </ha-icon-button>`:W}
    `}_onOpen(t){t.stopPropagation(),this.hass.callService("cover","open_cover",{entity_id:this._config.entity})}_onStop(t){t.stopPropagation(),this.hass.callService("cover","stop_cover",{entity_id:this._config.entity})}_onClose(t){t.stopPropagation(),this.hass.callService("cover","close_cover",{entity_id:this._config.entity})}};Mt([ut({attribute:!1})],Ht.prototype,"hass",void 0),Mt([_t()],Ht.prototype,"_config",void 0),Ht=Mt([ht(bt)],Ht),window.customCards=window.customCards||[],window.customCards.push({type:bt,name:"Vertical Slider Card",description:"A tile-style card with a vertical slider for cover entities (blinds, awnings, shutters)",preview:!0})})();