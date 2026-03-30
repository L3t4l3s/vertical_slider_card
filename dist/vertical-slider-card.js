/*! For license information please see vertical-slider-card.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class s{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new s(o,t,i)},r=(i,o)=>{if(e)i.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,v=_.trustedTypes,f=v?v.emptyScript:"",m=_.reactiveElementPolyfillSupport,g=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=o?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=o;const n=s.fromAttribute(e,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const n=this.constructor;if(!1===o&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,m?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,S=x.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,T=`<${P}>`,O=document,U=()=>O.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,z="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,N=/>/g,j=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),F=B(1),q=(B(2),B(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),K=new WeakMap,J=O.createTreeWalker(O,129);function Z(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===R?"!--"===c[1]?r=D:void 0!==c[1]?r=N:void 0!==c[2]?(L.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=j):void 0!==c[3]&&(r=j):r===j?">"===c[0]?(r=s??R,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?j:'"'===c[3]?I:V):r===I||r===V?r=j:r===D||r===N?r=R:(r=j,s=void 0);const d=r===j&&t[e+1].startsWith("/>")?" ":"";n+=r===R?i+T:l>=0?(o.push(a),i.slice(0,l)+C+i.slice(l)+k+d):i+k+(-2===l?e:d)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class Y{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=Y.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=J.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=l[n++],i=o.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?ot:"@"===r[1]?st:et}),o.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(L.test(o.tagName)){const t=o.textContent.split(k),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],U()),J.nextNode(),a.push({type:2,index:++s});o.append(t[e],U())}}}else if(8===o.nodeType)if(o.data===P)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(k,t+1));)a.push({type:7,index:s}),t+=k.length-1}s++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,o){if(e===q)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=Q(t,s._$AS(t,e.values),s,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);J.currentNode=o;let s=J.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tt(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new nt(s,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(s=J.nextNode(),n++)}return J.currentNode=O,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Y(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new tt(this.O(U()),this.O(U()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=Q(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=Q(this,o[i+r],e,r),a===q&&(a=this._$AH[r]),n||=!M(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends et{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??W)===q)return;const i=this._$AH,o=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(Y,tt),(x.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;class ct extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new tt(e.insertBefore(U(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.2");const ht=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y},pt=(t=dt,e,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ut(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function _t(t){return ut({...t,state:!0,attribute:!1})}var vt,ft;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(vt||(vt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ft||(ft={}));var mt=["closed","locked","off"],gt=(new Set(["fan","input_boolean","light","switch","group","automation"]),function(t,e,i,o){o=o||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return s.detail=i,t.dispatchEvent(s),s});new Set(["call-service","divider","section","weblink","cast","select"]);var $t=function(t){gt(window,"haptic",t)},yt=function(t,e,i,o){var s;"double_tap"===o&&i.double_tap_action?s=i.double_tap_action:"hold"===o&&i.hold_action?s=i.hold_action:"tap"===o&&i.tap_action&&(s=i.tap_action),function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some(function(t){return t.user===e.user.id})||($t("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&gt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),gt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,s=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===s?"homeassistant":s;switch(s){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(n,o,{entity_id:e})})(t,e,mt.includes(t.states[e].state))}(e,i.entity),$t("success"));break;case"call-service":if(!o.service)return void $t("failure");var s=o.service.split(".",2);e.callService(s[0],s[1],o.service_data,o.target),$t("success");break;case"fire-dom-event":gt(t,"ll-custom",o)}}(t,e,i,s)};const bt="vertical-slider-card",wt="vertical-slider-card-editor",xt=n`
  :host {
    display: block;
    height: 100%;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    height: 100%;
    min-height: 200px;
    overflow: hidden;
    position: relative;
  }

  /* Header: icon + name at top */
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    justify-content: center;
    flex-shrink: 0;
    margin-bottom: 4px;
    color: var(--primary-text-color);
  }

  .header ha-icon {
    --mdc-icon-size: 20px;
    flex-shrink: 0;
  }

  .entity-name {
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Footer: state + last-changed at bottom */
  .footer {
    text-align: center;
    width: 100%;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .state-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    line-height: 1.2;
  }

  .last-changed {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 2px;
  }

  /* Slider area: slider + side buttons */
  .slider-area {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 12px;
    width: 100%;
    min-height: 0;
    padding: 8px 0;
  }

  .slider-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  /* Side buttons: vertical column next to slider, full height */
  .side-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .cover-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-height: 48px;
    width: 64px;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: var(--secondary-text-color);
    background: color-mix(in srgb, var(--secondary-text-color) 12%, transparent);
    border-radius: 14px;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    transition: background 120ms ease-in-out;
    --mdc-icon-size: 24px;
  }

  .cover-btn + .cover-btn {
    margin-top: 8px;
  }

  .cover-btn:active {
    background: color-mix(in srgb, var(--secondary-text-color) 25%, transparent);
  }

  /* Bottom features */
  .bottom-features {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .bottom-features ha-icon-button {
    --mdc-icon-button-size: 40px;
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
  }

  /* Unavailable state */
  :host([unavailable]) ha-card {
    opacity: 0.5;
    pointer-events: none;
  }
`,At=n`
  :host {
    display: flex;
    width: var(--slider-width, 84px);
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
    border-radius: 28px;
    overflow: hidden;
    touch-action: none;
    cursor: pointer;
    outline: none;
  }

  .slider:focus-visible {
    box-shadow: 0 0 0 2px var(--slider-color);
  }

  .slider-track-bg {
    position: absolute;
    inset: 0;
    background: var(--slider-bg);
  }

  .slider-track-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: var(--slider-color);
    border-radius: 0 0 12px 12px;
    transition: height var(--transition-duration, 180ms) ease-in-out;
  }

  :host([pressed]) .slider-track-fill {
    transition: none;
  }

  .slider-handle {
    position: absolute;
    left: 22%;
    right: 22%;
    height: 4px;
    background: var(--text-primary-color, #fff);
    border-radius: 2px;
    pointer-events: none;
    transition: top var(--transition-duration, 180ms) ease-in-out;
  }

  :host([pressed]) .slider-handle {
    transition: none;
  }

  .tooltip {
    position: absolute;
    left: -52px;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    padding: 4px 8px;
    border-radius: 8px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 120ms ease-in-out, top var(--transition-duration, 180ms) ease-in-out;
    white-space: nowrap;
  }

  :host([pressed]) .tooltip {
    transition: opacity 120ms ease-in-out;
  }

  :host([pressed]) .tooltip {
    opacity: 1;
  }
`;class St{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Et=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends St{update(t,[e]){const i=t.element;return i._actionHandler?i._actionHandler.options=e:(i._actionHandler={options:e,held:!1},i.addEventListener("pointerdown",t=>{const e=i._actionHandler;e.held=!1,e.options.hasHold&&(e.timer=setTimeout(()=>{e.held=!0,i.dispatchEvent(new CustomEvent("action",{detail:{action:"hold"},bubbles:!0,composed:!0}))},500))}),i.addEventListener("pointerup",()=>{const t=i._actionHandler;t.timer&&(clearTimeout(t.timer),t.timer=void 0),t.held||(t.options.hasDoubleClick?t.dblClickTimer?(clearTimeout(t.dblClickTimer),t.dblClickTimer=void 0,i.dispatchEvent(new CustomEvent("action",{detail:{action:"double_tap"},bubbles:!0,composed:!0}))):t.dblClickTimer=setTimeout(()=>{t.dblClickTimer=void 0,i.dispatchEvent(new CustomEvent("action",{detail:{action:"tap"},bubbles:!0,composed:!0}))},250):i.dispatchEvent(new CustomEvent("action",{detail:{action:"tap"},bubbles:!0,composed:!0})))}),i.addEventListener("pointercancel",()=>{const t=i._actionHandler;t.timer&&(clearTimeout(t.timer),t.timer=void 0)})),q}render(t){return q}});function Ct(t){return void 0!==t&&"none"!==t.action}var kt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Pt=class extends ct{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1,this.color="",this._pressed=!1,this._localValue=null,this._activePointerId=null}static{this.styles=At}updated(t){t.has("_pressed")&&(this._pressed?this.setAttribute("pressed",""):this.removeAttribute("pressed"))}get _displayValue(){return this._localValue??this.value}get _fillFraction(){return 1-(this._displayValue-this.min)/(this.max-this.min)}render(){const t=100*this._fillFraction,e=this.color?`--slider-color: ${this.color}`:"",i=`calc(16px + ${t} * (100% - 36px) / 100)`,o=`calc(36px + ${t} * (100% - 36px) / 100)`;return F`
      <div class="container" style="${e}">
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
          <div class="slider-track-fill"
               style="height: ${o}"></div>
          <div class="slider-handle"
               style="top: ${i}"></div>
        </div>
        <div class="tooltip"
             style="top: ${i}">
          ${Math.round(this._displayValue)} %
        </div>
      </div>
    `}_computeValueFromEvent(t){const e=this.renderRoot.querySelector(".slider");if(!e)return this.value;const i=e.getBoundingClientRect(),o=i.height-20-16,s=t.clientY-i.top-16,n=(1-Math.max(0,Math.min(1,s/o)))*(this.max-this.min)+this.min;return this._clampAndStep(n)}_clampAndStep(t){const e=Math.round(t/this.step)*this.step;return Math.max(this.min,Math.min(this.max,e))}_onPointerDown(t){this.disabled||(t.preventDefault(),t.currentTarget.setPointerCapture(t.pointerId),this._activePointerId=t.pointerId,this._pressed=!0,this._localValue=this._computeValueFromEvent(t),this._fireEvent("slider-moved",{value:this._localValue}))}_onPointerMove(t){this._pressed&&t.pointerId===this._activePointerId&&(t.preventDefault(),this._localValue=this._computeValueFromEvent(t),this._fireEvent("slider-moved",{value:this._localValue}))}_onPointerUp(t){if(!this._pressed||t.pointerId!==this._activePointerId)return;const e=this._localValue??this.value;this._pressed=!1,this._localValue=null,this._activePointerId=null,this._fireEvent("value-changed",{value:e})}_onKeyDown(t){if(this.disabled)return;let e=null;const i=this._displayValue;switch(t.key){case"ArrowUp":e=this._clampAndStep(i-this.step);break;case"ArrowDown":e=this._clampAndStep(i+this.step);break;case"PageUp":e=this._clampAndStep(i-10);break;case"PageDown":e=this._clampAndStep(i+10);break;case"Home":e=this.min;break;case"End":e=this.max;break;default:return}t.preventDefault(),null!==e&&this._fireEvent("value-changed",{value:e})}_fireEvent(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}};kt([ut({type:Number})],Pt.prototype,"value",void 0),kt([ut({type:Number})],Pt.prototype,"min",void 0),kt([ut({type:Number})],Pt.prototype,"max",void 0),kt([ut({type:Number})],Pt.prototype,"step",void 0),kt([ut({type:Boolean})],Pt.prototype,"disabled",void 0),kt([ut({type:String})],Pt.prototype,"color",void 0),kt([_t()],Pt.prototype,"_pressed",void 0),kt([_t()],Pt.prototype,"_localValue",void 0),Pt=kt([ht("vertical-cover-slider")],Pt);var Tt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const Ot=["cover-open-close","cover-position","cover-tilt","cover-tilt-position"];let Ut=class extends ct{static{this.styles=n`
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
      gap: 16px;
      padding: 4px 0;
    }

    .feature-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .feature-toggle label {
      font-size: 14px;
      color: var(--primary-text-color);
      cursor: pointer;
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
                <label>${this._featureLabel(t)}</label>
                <ha-switch
                  .checked="${this._hasFeature(t)}"
                  @change="${e=>this._featureToggled(e,t)}"
                ></ha-switch>
              </div>
            `)}
        </div>
      </div>
    `:W}_hasFeature(t){return this._config.features?.some(e=>e.type===t)??!1}_featureLabel(t){switch(t){case"cover-open-close":return this.hass.localize?.("ui.panel.lovelace.editor.features.types.cover-open-close.label")||"Open/Close";case"cover-position":return this.hass.localize?.("ui.panel.lovelace.editor.features.types.cover-position.label")||"Position";case"cover-tilt":return this.hass.localize?.("ui.panel.lovelace.editor.features.types.cover-tilt.label")||"Tilt";case"cover-tilt-position":return this.hass.localize?.("ui.panel.lovelace.editor.features.types.cover-tilt-position.label")||"Tilt position";default:return t}}_entityChanged(t){const e=t.detail.value;e&&this._updateConfig({entity:e})}_nameChanged(t){const e=t.target;this._updateConfig({name:e.value||void 0})}_iconChanged(t){this._updateConfig({icon:t.detail.value||void 0})}_hideStateChanged(t){const e=t.target;this._updateConfig({hide_state:e.checked||void 0})}_featureToggled(t,e){const i=t.target.checked,o=[...this._config.features||[]];if(i)o.push({type:e});else{const t=o.findIndex(t=>t.type===e);t>=0&&o.splice(t,1)}this._updateConfig({features:o})}_updateConfig(t){this._config={...this._config,...t},gt(this,"config-changed",{config:this._config})}};Tt([ut({attribute:!1})],Ut.prototype,"hass",void 0),Tt([_t()],Ut.prototype,"_config",void 0),Ut=Tt([ht(wt)],Ut);var Mt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};console.info("%c VERTICAL-SLIDER-CARD %c v1.0.0 ","color: white; background: #7c4dff; font-weight: 700;","color: #7c4dff; background: white; font-weight: 700;");let Ht=class extends ct{static{this.styles=xt}static getConfigElement(){return document.createElement(wt)}static getStubConfig(t){return{entity:Object.keys(t.states).find(t=>t.startsWith("cover."))||"cover.example",features:[{type:"cover-position"},{type:"cover-open-close"}]}}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this._config={tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"},icon_tap_action:{action:"more-info"},...t}}getCardSize(){return 6}getGridOptions(){return{columns:6,rows:5,min_columns:2,min_rows:4}}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!1;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;return e.states[i]!==this.hass.states[i]}render(){if(!this.hass||!this._config)return W;const t=this.hass.states[this._config.entity];if(!t)return F`
        <ha-card>
          <div class="info">
            <div class="state-text">Entity not found: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;const e="unavailable"===t.state||"unknown"===t.state,i=t.attributes.current_position??0,o=this._config.name||t.attributes.friendly_name||"",s=this._computeStateDisplay(t),n=this._computeLastChanged(t),r=this._computeColor(),a=t.attributes.supported_features??0;e?this.setAttribute("unavailable",""):this.removeAttribute("unavailable");const c=this._config.icon||t.attributes.icon||"mdi:window-shutter",l=!0===this._config.hide_state;return F`
      <ha-card
        @action="${this._handleAction}"
        .actionHandler="${Et({hasHold:Ct(this._config.hold_action),hasDoubleClick:Ct(this._config.double_tap_action)})}"
      >
        <div class="header">
          <ha-icon .icon="${c}"></ha-icon>
          <span class="entity-name">${o}</span>
        </div>

        <div class="slider-area"
             @pointerdown="${this._stopProp}"
             @pointerup="${this._stopProp}"
             @click="${this._stopProp}">
          ${this._showVerticalSlider()?F`
              <div class="slider-container">
                <vertical-cover-slider
                  .value="${i}"
                  .disabled="${e}"
                  .color="${r}"
                  @value-changed="${this._onSliderChanged}"
                ></vertical-cover-slider>
              </div>`:W}

          ${this._renderSideButtons(a)}
        </div>

        ${this._renderTiltFeature(a)}

        ${l?W:F`
            <div class="footer">
              <div class="state-text">${s}</div>
              ${n?F`<div class="last-changed">${n}</div>`:W}
            </div>`}
      </ha-card>
    `}_computeStateDisplay(t){const e=t.state,i=t.attributes.current_position,o=this.hass.localize(`component.cover.entity_component._.state.${e}`)||e;return"open"!==e&&"closing"!==e||void 0===i||100===i?o:`${o} · ${i} %`}_computeLastChanged(t){if(!t.last_changed)return"";const e=new Date(t.last_changed),i=(new Date).getTime()-e.getTime(),o=Math.floor(i/1e3),s=Math.floor(o/60),n=Math.floor(s/60),r=Math.floor(n/24);return o<5?this.hass.localize?.("ui.components.relative_time.just_now")||"Jetzt":o<60?this.hass.localize?.("ui.components.relative_time.duration.second","count",String(o))||`Vor ${o} Sekunden`:s<60?this.hass.localize?.("ui.components.relative_time.duration.minute","count",String(s))||`Vor ${s} Minuten`:n<24?this.hass.localize?.("ui.components.relative_time.duration.hour","count",String(n))||`Vor ${n} Stunden`:this.hass.localize?.("ui.components.relative_time.duration.day","count",String(r))||`Vor ${r} Tagen`}_computeColor(){return this._config.color?`var(--${this._config.color}-color, var(--state-cover-color, var(--primary-color)))`:""}_stopProp(t){t.stopPropagation()}_onSliderChanged(t){t.stopPropagation();const e=t.detail.value;this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this.hass.callService("cover","set_cover_position",{entity_id:this._config.entity,position:e})},150)}_handleAction(t){if(!this.hass||!this._config)return;const e=t.detail?.action;e&&yt(this,this.hass,this._config,e)}_hasFeatureType(t){return this._config.features?.some(e=>e.type===t)??!1}_showVerticalSlider(){return!this._config.features?.length||this._hasFeatureType("cover-position")}_renderSideButtons(t){if(!this._hasFeatureType("cover-open-close"))return W;const e=1&t,i=2&t,o=8&t;return e||i?F`
      <div class="side-buttons">
        ${e?F`<button class="cover-btn" @click="${this._onOpen}">
              <ha-icon icon="mdi:arrow-up"></ha-icon>
            </button>`:W}
        ${o?F`<button class="cover-btn" @click="${this._onStop}">
              <ha-icon icon="mdi:stop"></ha-icon>
            </button>`:W}
        ${i?F`<button class="cover-btn" @click="${this._onClose}">
              <ha-icon icon="mdi:arrow-down"></ha-icon>
            </button>`:W}
      </div>
    `:W}_renderTiltFeature(t){if(!this._hasFeatureType("cover-tilt"))return W;const e=this._renderTilt(t);return e===W?W:F`<div class="bottom-features">${e}</div>`}_renderOpenClose(t){const e=2&t,i=8&t;return F`
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
    `}_renderTilt(t){const e=16&t,i=32&t,o=64&t;return e||i?F`
      ${e?F`<ha-icon-button @click="${this._onOpenTilt}">
            <ha-icon icon="mdi:arrow-top-right"></ha-icon>
          </ha-icon-button>`:W}
      ${o?F`<ha-icon-button @click="${this._onStopTilt}">
            <ha-icon icon="mdi:stop"></ha-icon>
          </ha-icon-button>`:W}
      ${i?F`<ha-icon-button @click="${this._onCloseTilt}">
            <ha-icon icon="mdi:arrow-bottom-left"></ha-icon>
          </ha-icon-button>`:W}
    `:W}_onOpenTilt(t){t.stopPropagation(),this.hass.callService("cover","open_cover_tilt",{entity_id:this._config.entity})}_onStopTilt(t){t.stopPropagation(),this.hass.callService("cover","stop_cover_tilt",{entity_id:this._config.entity})}_onCloseTilt(t){t.stopPropagation(),this.hass.callService("cover","close_cover_tilt",{entity_id:this._config.entity})}_onOpen(t){t.stopPropagation(),this.hass.callService("cover","open_cover",{entity_id:this._config.entity})}_onStop(t){t.stopPropagation(),this.hass.callService("cover","stop_cover",{entity_id:this._config.entity})}_onClose(t){t.stopPropagation(),this.hass.callService("cover","close_cover",{entity_id:this._config.entity})}};Mt([ut({attribute:!1})],Ht.prototype,"hass",void 0),Mt([_t()],Ht.prototype,"_config",void 0),Ht=Mt([ht(bt)],Ht),window.customCards=window.customCards||[],window.customCards.push({type:bt,name:"Vertical Slider Card",description:"A tile-style card with a vertical slider for cover entities (blinds, awnings, shutters)",preview:!0})})();