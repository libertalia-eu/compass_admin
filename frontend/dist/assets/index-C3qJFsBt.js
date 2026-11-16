const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MyAccount-C9wcE-cX.js","assets/PageHeaderTitle-BZykMSbB.js","assets/Users-D7M55-6a.js","assets/Users-oew-FuCQ.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ee=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},te=/-\w/g,E=ee(e=>e.replace(te,e=>e.slice(1).toUpperCase())),ne=/\B([A-Z])/g,re=ee(e=>e.replace(ne,`-$1`).toLowerCase()),ie=ee(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=ee(e=>e?`on${ie(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},se=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ce=e=>{let t=parseFloat(e);return isNaN(t)?e:t},le,ue=()=>le||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function O(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):O(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,e=>e.startsWith(`/*`)?``:e).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function k(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=k(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}function he(e){if(!e)return null;let{class:t,style:n}=e;return t&&!g(t)&&(e.class=k(t)),n&&(e.style=O(n)),e}var ge=e(`itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`);function _e(e){return!!e||e===``}function ve(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=Se(e[i],t[i],n);return r}function ye(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&Se(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function be(e,t,n){let r=f(e),i=f(t);if(r||i||(r=p(e),i=p(t),r||i))return r&&i?ye(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!Se(e[r],t[r],n))return!1}return String(e)===String(t)}function xe(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function Se(e,t,n){if(e===t)return!0;let r=m(e),i=m(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=_(e),i=_(t),r||i?e===t:(r=d(e),i=d(t),r||i?r&&i?xe(e,t,n,ve):!1:(r=v(e),i=v(t),r||i?!r||!i?!1:xe(e,t,n,be):String(e)===String(t))))}var Ce=e=>!!(e&&e.__v_isRef===!0),we=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Ce(e)?we(e.value):JSON.stringify(e,Te,2):String(e),Te=(e,t)=>Ce(t)?Te(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ee(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ee(e))}:_(t)?Ee(t):v(t)&&!d(t)&&!C(t)?String(t):t,Ee=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,De,Oe=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&De&&(De.active?(this.parent=De,this.index=(De.scopes||(De.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=De;try{return De=this,e()}finally{De=t}}}on(){++this._on===1&&(this.prevScope=De,De=this)}off(){if(this._on>0&&--this._on===0){if(De===this)De=this.prevScope;else{let e=De;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ke(e){return new Oe(e)}function Ae(){return De}function je(e,t=!1){De&&(De.active?De.cleanups.push(e):e())}var A,Me=new WeakSet,Ne=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&(De.active?De.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Me.has(this)&&(Me.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Le(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xe(this),Be(this);let e=A,t=Ke;A=this,Ke=!0;try{return this.fn()}finally{Ve(this),A=e,Ke=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)We(e);this.deps=this.depsTail=void 0,Xe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Me.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){He(this)&&this.run()}get dirty(){return He(this)}},Pe=0,Fe,Ie;function Le(e,t=!1){e.flags|=8,t?(e.next=Ie,Ie=e):(e.next=Fe,Fe=e)}function Re(){Pe++}function ze(){if(--Pe>0)return;if(Ie){let e=Ie;for(Ie=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Fe;){let t=Fe;for(Fe=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Be(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ve(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),We(r),Ge(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function He(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ue(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ue(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ze)||(e.globalVersion=Ze,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!He(e))))return;e.flags|=2;let t=e.dep,n=A,r=Ke;A=e,Ke=!0;try{Be(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{A=n,Ke=r,Ve(e),e.flags&=-3}}function We(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)We(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ge(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ke=!0,qe=[];function Je(){qe.push(Ke),Ke=!1}function Ye(){let e=qe.pop();Ke=e===void 0||e}function Xe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=A;A=void 0;try{t()}finally{A=e}}}var Ze=0,Qe=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},$e=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!A||!Ke||A===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==A)t=this.activeLink=new Qe(A,this),A.deps?(t.prevDep=A.depsTail,A.depsTail.nextDep=t,A.depsTail=t):A.deps=A.depsTail=t,et(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=A.depsTail,t.nextDep=void 0,A.depsTail.nextDep=t,A.depsTail=t,A.deps===t&&(A.deps=e)}return t}trigger(e){this.version++,Ze++,this.notify(e)}notify(e){Re();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ze()}}};function et(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)et(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var tt=new WeakMap,nt=Symbol(``),rt=Symbol(``),it=Symbol(``);function at(e,t,n){if(Ke&&A){let t=tt.get(e);t||tt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new $e),r.map=t,r.key=n),r.track()}}function ot(e,t,n,r,i,a){let o=tt.get(e);if(!o){Ze++;return}let s=e=>{e&&e.trigger()};if(Re(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===it||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(it)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(nt)),f(e)&&s(o.get(rt)));break;case`delete`:i||(s(o.get(nt)),f(e)&&s(o.get(rt)));break;case`set`:f(e)&&s(o.get(nt))}}ze()}function st(e,t){let n=tt.get(e);return n&&n.get(t)}function ct(e){let t=j(e);return t===e||(at(t,`iterate`,it),Zt(e))?t:Xt(e)?Yt(e)?t.map(e=>tn(en(e))):t.map(tn):t.map(en)}function lt(e){return at(e=j(e),`iterate`,it),e}function ut(e,t){return Xt(e)?tn(Yt(e)?en(t):t):en(t)}var dt={__proto__:null,[Symbol.iterator](){return ft(this,Symbol.iterator,e=>ut(this,e))},concat(...e){return ct(this).concat(...e.map(e=>d(e)?ct(e):e))},entries(){return ft(this,`entries`,e=>(e[1]=ut(this,e[1]),e))},every(e,t){return ht(this,`every`,e,t,void 0,arguments)},filter(e,t){return ht(this,`filter`,e,t,e=>e.map(e=>ut(this,e)),arguments)},find(e,t){return ht(this,`find`,e,t,e=>ut(this,e),arguments)},findIndex(e,t){return ht(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ht(this,`findLast`,e,t,e=>ut(this,e),arguments)},findLastIndex(e,t){return ht(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ht(this,`forEach`,e,t,void 0,arguments)},includes(...e){return _t(this,`includes`,e)},indexOf(...e){return _t(this,`indexOf`,e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return _t(this,`lastIndexOf`,e)},map(e,t){return ht(this,`map`,e,t,void 0,arguments)},pop(){return vt(this,`pop`)},push(...e){return vt(this,`push`,e)},reduce(e,...t){return gt(this,`reduce`,e,t)},reduceRight(e,...t){return gt(this,`reduceRight`,e,t)},shift(){return vt(this,`shift`)},some(e,t){return ht(this,`some`,e,t,void 0,arguments)},splice(...e){return vt(this,`splice`,e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return vt(this,`unshift`,e)},values(){return ft(this,`values`,e=>ut(this,e))}};function ft(e,t,n){let r=lt(e),i=r[t],a=i.call(r);if(r!==e&&!Zt(e)){if(a[Symbol.toStringTag]===`Array Iterator`){let e=Object.create(Object.getPrototypeOf(a));return e.next=()=>pt(a.next(),n),i!==mt[t]&&Object.defineProperties(e,{return:{get(){let e=a.return;return typeof e==`function`?e.bind(a):e}},throw:{get(){let e=a.throw;return typeof e==`function`?e.bind(a):e}}}),e}a._next=a.next,a.next=()=>pt(a._next(),n)}return a}function pt(e,t){return e.done||(e.value=t(e.value)),e}var mt=Array.prototype;function ht(e,t,n,r,i,a){let o=lt(e),s=o!==e&&!Zt(e),c=o[t];if(c!==mt[t]){let t=c.apply(e,a);return s?en(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,ut(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function gt(e,t,n,r){let i=lt(e),a=i!==e&&!Zt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=ut(e,t)),n.call(this,t,ut(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?ut(e,c):c}function _t(e,t,n){let r=j(e);at(r,`iterate`,it);let i=r[t](...n);return(i===-1||i===!1)&&Qt(n[0])?(n[0]=j(n[0]),r[t](...n)):i}function vt(e,t,n=[]){Je(),Re();let r=j(e)[t].apply(e,n);return ze(),Ye(),r}var yt=e(`__proto__,__v_isRef,__isVue`),bt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function xt(e){_(e)||(e=String(e));let t=j(this);return at(t,`has`,e),t.hasOwnProperty(e)}var St=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ht:Vt:i?Bt:zt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=dt[t]))return e;if(t===`hasOwnProperty`)return xt}let o=Reflect.get(e,t,M(e)?e:n);if((_(t)?bt.has(t):yt(t))||(r||at(e,`get`,t),i))return o;if(M(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Kt(e):e}return v(o)?r?Kt(o):Wt(o):o}},Ct=class extends St{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Xt(i);if(!Zt(n)&&!Xt(n)&&(i=j(i),n=j(n)),!a&&M(i)&&!M(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,M(e)?e:r);return e===j(r)&&s&&(o?D(n,i)&&ot(e,`set`,t,n,i):ot(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&ot(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return _(t)&&bt.has(t)||at(e,`has`,t),n}ownKeys(e){return at(e,`iterate`,d(e)?`length`:nt),Reflect.ownKeys(e)}},wt=class extends St{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Tt=new Ct,Et=new wt,Dt=new Ct(!0),Ot=new wt(!0),kt=e=>e,At=e=>Reflect.getPrototypeOf(e);function jt(e,t,n){return function(...r){let i=this.__v_raw,a=j(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?kt:t?tn:en;return!t&&at(a,`iterate`,l?rt:nt),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Mt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Nt(e,t){let n={get(n){let r=this.__v_raw,i=j(r),a=j(n);e||(D(n,a)&&at(i,`get`,n),at(i,`get`,a));let{has:o}=At(i),s=t?kt:e?tn:en;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&at(j(t),`iterate`,nt),t.size},has(t){let n=this.__v_raw,r=j(n),i=j(t);return e||(D(t,i)&&at(r,`has`,t),at(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=j(a),s=t?kt:e?tn:en;return!e&&at(o,`iterate`,nt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Mt(`add`),set:Mt(`set`),delete:Mt(`delete`),clear:Mt(`clear`)}:{add(e){let n=j(this),r=At(n),i=j(e),a=!t&&!Zt(e)&&!Xt(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),ot(n,`add`,a,a)),this},set(e,n){t||Zt(n)||Xt(n)||(n=j(n));let r=j(this),{has:i,get:a}=At(r),o=i.call(r,e);o||=(e=j(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&ot(r,`set`,e,n,s):ot(r,`add`,e,n),this},delete(e){let t=j(this),{has:n,get:r}=At(t),i=n.call(t,e);i||=(e=j(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&ot(t,`delete`,e,void 0,a),o},clear(){let e=j(this),t=e.size!==0,n=e.clear();return t&&ot(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=jt(r,e,t)}),n}function Pt(e,t){let n=Nt(e,t);return(r,i,a)=>i===`__v_isReactive`?!e:i===`__v_isReadonly`?e:i===`__v_isShallow`?t:i===`__v_raw`?r:Reflect.get(u(n,i)&&i in r?n:r,i,a)}var Ft={get:Pt(!1,!1)},It={get:Pt(!1,!0)},Lt={get:Pt(!0,!1)},Rt={get:Pt(!0,!0)},zt=new WeakMap,Bt=new WeakMap,Vt=new WeakMap,Ht=new WeakMap;function Ut(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Wt(e){return Xt(e)?e:Jt(e,!1,Tt,Ft,zt)}function Gt(e){return Jt(e,!1,Dt,It,Bt)}function Kt(e){return Jt(e,!0,Et,Lt,Vt)}function qt(e){return Jt(e,!0,Ot,Rt,Ht)}function Jt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Ut(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Yt(e){return Xt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function Zt(e){return!!(e&&e.__v_isShallow)}function Qt(e){return e?!!e.__v_raw:!1}function j(e){let t=e&&e.__v_raw;return t?j(t):e}function $t(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&se(e,`__v_skip`,!0),e}var en=e=>v(e)?Wt(e):e,tn=e=>v(e)?Kt(e):e;function M(e){return e?e.__v_isRef===!0:!1}function N(e){return rn(e,!1)}function nn(e){return rn(e,!0)}function rn(e,t){return M(e)?e:new an(e,t)}var an=class{constructor(e,t){this.dep=new $e,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:j(e),this._value=t?e:en(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Zt(e)||Xt(e);e=n?e:j(e),D(e,t)&&(this._rawValue=e,this._value=n?e:en(e),this.dep.trigger())}};function on(e){e.dep&&e.dep.trigger()}function P(e){return M(e)?e.value:e}function F(e){return h(e)?e():P(e)}var sn={get:(e,t,n)=>t===`__v_raw`?e:P(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return M(i)&&!M(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function cn(e){return Yt(e)?e:new Proxy(e,sn)}var ln=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new $e,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function un(e){return new ln(e)}function dn(e){let t=d(e)?Array(e.length):{};for(let n in e)t[n]=hn(e,n);return t}var fn=class{constructor(e,t,n){this._object=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=_(t)?t:String(t),this._raw=j(e);let r=!0,i=e;if(!d(e)||_(this._key)||!w(this._key))do r=!Qt(i)||Zt(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=P(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&M(this._raw[this._key])){let t=this._object[this._key];if(M(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return st(this._raw,this._key)}},pn=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function mn(e,t,n){return M(e)?e:h(e)?new pn(e):v(e)&&arguments.length>1?hn(e,t,n):N(e)}function hn(e,t,n){return new fn(e,t,n)}var gn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new $e(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ze-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&A!==this)return Le(this,!0),!0}get value(){let e=this.dep.track();return Ue(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function _n(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new gn(r,i,n)}var vn={},yn=new WeakMap,bn=void 0;function xn(e,t=!1,n=bn){if(n){let t=yn.get(n);t||yn.set(n,t=[]),t.push(e)}}function Sn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Zt(e)||o===!1||o===0?Cn(e,1):Cn(e),m,g,_,v,y=!1,b=!1;if(M(e)?(g=()=>e.value,y=Zt(e)):Yt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Yt(e)||Zt(e)),g=()=>e.map(e=>{if(M(e))return e.value;if(Yt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Je();try{_()}finally{Ye()}}let t=bn;bn=m;try{return f?f(e,3,[v]):e(v)}finally{bn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>Cn(e(),t)}let x=Ae(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{try{return e(...t)}finally{S()}}}let C=b?Array(e.length).fill(vn):vn,w=e=>{if(m.flags&1&&(m.dirty||e)){if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>D(e,C[t])):D(t,C))){let e=bn;Je();try{_&&_(),bn=m;let e=[t,C===vn?void 0:b&&C[0]===vn?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{bn=e,Ye()}}}else m.run()}};return u&&u(w),m=new Ne(g),m.scheduler=l?()=>l(w,!1):w,v=e=>xn(e,!1,m),_=m.onStop=()=>{let e=yn.get(m);if(e){if(f)f(e,4);else for(let t of e)t();yn.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function Cn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,M(e))Cn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)Cn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{Cn(e,t,n)});else if(C(e)){for(let r in e)Cn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Cn(e[r],t,n)}return e}function wn(e,t,n,r){try{return r?e(...r):e()}catch(e){En(e,t,n)}}function Tn(e,t,n,r){if(h(e)){let i=wn(e,t,n,r);return i&&y(i)&&i.catch(e=>{En(e,t,n,void 0,!0)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(Tn(e[a],t,n,r));return i}}function En(e,n,r,i=!0,a=!1){let o=n?n.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:c}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,o=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n&&!t.isUnmounted&&(!a||t.scope.active)){for(let t=0;t<n.length;t++)if(n[t](e,i,o)===!1)return}t=t.parent}if(s){Je(),wn(s,null,10,[e,i,o]),Ye();return}}Dn(e,r,o,i,c)}function Dn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var On=[],kn=-1,An=[],jn=null,Mn=0,Nn=Promise.resolve(),Pn=null;function Fn(e){let t=Pn||Nn;return e?t.then(this?e.bind(this):e):t}function In(e){let t=kn+1,n=On.length;for(;t<n;){let r=t+n>>>1,i=On[r],a=Wn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Ln(e){if(!(e.flags&1)){let t=Wn(e),n=On[On.length-1];!n||!(e.flags&2)&&t>=Wn(n)?On.push(e):On.splice(In(t),0,e),e.flags|=1,Rn()}}function Rn(){Pn||=Nn.then(Gn)}function zn(e){if(!d(e))jn&&e.id===-1?jn.splice(Mn+1,0,e):e.flags&1||(An.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)An.push(e[t]);Rn()}function Bn(e,t,n,r=kn+1){for(;r<On.length;r++){let n=On[r];if(n&&n.flags&2){if(e&&n.id!==e.uid||t!==void 0&&!(n.id>=t))continue;On.splice(r,1),r=e?r-1:kn,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Vn(e,t,n=0){if(An.length){let e=An,r=0;if(t){e=[];for(let i=0;i<An.length;i++){let a=An[i];(a.i===void 0?t.has(a):!a.i||a.i.uid<n)?An[r++]=a:e.push(a)}}let i=[...new Set(e)].sort((e,t)=>Wn(e)-Wn(t));if(An.length=r,jn){for(let e=0;e<i.length;e++)jn.push(i[e]);return}for(jn=i,Mn=0;Mn<jn.length;Mn++){let e=jn[Mn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}jn=null,Mn=0}}var Hn=!1;function Un(e,t){if(Hn){e();return}let n=t===void 0?void 0:new Set(An);e(),Hn=!0;try{Bn(void 0,t),Vn(void 0,n,t)}finally{Hn=!1}}var Wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Gn(e){try{for(kn=0;kn<On.length;kn++){let e=On[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<On.length;kn++){let e=On[kn];e&&(e.flags&=-2)}kn=-1,On.length=0,Vn(e),Pn=null,(On.length||An.length)&&Gn(e)}}var Kn=null,qn=null;function Jn(e){let t=Kn;return Kn=e,qn=e&&e.type.__scopeId||null,t}function I(e,t=Kn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Fa(-1);let i=Jn(t),a=ja.length,o;try{o=e(...n)}finally{for(let e=ja.length;e>a;e--)Na();Jn(i),r._d&&Fa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yn(e,n){if(Kn===null)return e;let r=ho(Kn),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&Cn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Xn(e,t,n,r){let i=e;if(r===`beforeMount`)e._mount=e;else if(r===`beforeUpdate`){let n=t&&t._mount;n&&(n._latest=e,e._mount=n)}else if(r===`mounted`){let t=e._latest;e._mount=e._latest=void 0,t&&(i=t,t._mount=void 0)}let a=i.dirs,o=t&&t.dirs;for(let c=0;c<a.length;c++){let l=a[c];o?l.oldValue=o[c].value:r===`mounted`&&l.oldValue!==void 0&&(l=s({},l,{oldValue:void 0}));let u=l.dir[r];u&&(Je(),Tn(u,n,8,[e.el,l,i,t]),Ye())}}function Zn(e,t){if($a){let n=$a.provides,r=$a.parent&&$a.parent.provides;r===n&&(n=$a.provides=Object.create(r)),n[e]=t}}function Qn(e,t,n=!1){let r=eo();if(r||Fi){let i=Fi?Fi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}function $n(){return!!(eo()||Fi)}var er=Symbol.for(`v-scx`),tr=()=>Qn(er);function L(e,t){return ir(e,null,t)}function nr(e,t){return ir(e,null,{flush:`post`})}function rr(e,t){return ir(e,null,{flush:`sync`})}function R(e,t,n){return ir(e,t,n)}function ir(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(oo){if(c===`sync`){let e=tr();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=$a;u.call=(e,t,n)=>Tn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{e.i=p,ma(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():Ln(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Sn(e,n,u);return oo&&(f?f.push(h):d&&h()),h}function ar(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?or(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=ro(this),s=ir(i,a.bind(r),n);return o(),s}function or(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var sr=new WeakMap,cr=Symbol(`_vte`),lr=e=>e.__isTeleport,ur=e=>e&&(e.disabled||e.disabled===``),dr=e=>e&&(e.defer||e.defer===``),fr=e=>typeof SVGElement<`u`&&e instanceof SVGElement,pr=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,mr=(e,t)=>{let n=e&&e.to;return g(n)?t?t(n):null:n},hr={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=ur(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=ur(e.props),r=e.target=mr(e.props,m),a=br(r,e,h,p);r&&(o!==`svg`&&fr(r)?o=`svg`:o!==`mathml`&&pr(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),yr(e,!1)))},S=e=>{let t=()=>{if(sr.get(e)===t){if(sr.delete(e),ur(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),yr(e,!0)}x(e)}};sr.set(e,t),ma(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),dr(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),yr(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=sr.get(e);if(u){u.flags|=8,sr.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=ur(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||fr(p)?o=`svg`:(o===`mathml`||pr(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),ba(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):gr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=mr(t.props,m);e&&(t.target=e,gr(t,e,null,l,0))}else g&&gr(t,p,h,l,1);yr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=ur(f),m=a||!p,h=sr.get(e);if(h&&(h.flags|=8,sr.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:gr,hydrate:_r};function gr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&(e.targetStart&&r(e.targetStart,t,n),r(e.targetAnchor,t,n),n=e.targetAnchor);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!sr.has(e)&&(!d||ur(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function _r(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=mr(t.props,c),h=ur(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||br(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||br(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),yr(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var vr=hr;function yr(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function br(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[cr]=o,e&&(r(a,e,i),r(o,e,i)),o}var xr=Symbol(`_leaveCb`);function Sr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==ka){t=n;break}}return t}function Cr(e){if(!Pr(e))return lr(e.type)&&e.children?Sr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function wr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;wr(lr(n.type)&&Cr(n)||n,t)}else if(e.shapeFlag&128){let n=e.suspense;if(n){let e=n.isHydrating?n.pendingBranch:n.activeBranch;e&&wr(e,t.clone(e))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===V&&d(e.children)){let n=Ui(e.children,!1);n&&wr(n,t)}}function Tr(e){if(e.component)return Tr(e.component.subTree);if(e.type===V){let t=d(e.children)&&Ui(e.children,!1);return t?Tr(t):void 0}if(e.type!==ka)return e}function z(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Er(){let e=eo();return e?(e.appContext.config.idPrefix||`v`)+`-`+e.ids[0]+e.ids[1]++:``}function Dr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Or(e){let n=eo(),r=nn(null);if(n){let i=n.refs===t?n.refs={}:n.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>r.value,set:e=>r.value=e})}return r}function kr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Ar=new WeakMap;function jr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>jr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Nr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&jr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ho(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=j(v),b=v===t?i:e=>!kr(_,e)&&u(y,e),x=(e,t)=>!(t&&kr(_,t));if(m!=null&&m!==p){if(Mr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(M(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))wn(p,f,12,[l,_]);else{let t=g(p),n=M(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Ar.delete(e)};t.id=-1,Ar.set(e,t),ma(t,r)}else Mr(e),i()}}}function Mr(e){let t=Ar.get(e);t&&(t.flags|=8,Ar.delete(e))}ue().requestIdleCallback,ue().cancelIdleCallback;var Nr=e=>!!e.type.__asyncLoader,Pr=e=>e.type.__isKeepAlive;function Fr(e,t){Lr(e,`a`,t)}function Ir(e,t){Lr(e,`da`,t)}function Lr(e,t,n=$a){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(zr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Pr(e.parent.vnode)&&Rr(r,t,n,e),e=e.parent}}function Rr(e,t,n,r){let i=zr(t,e,r,!0),a=zr(`um`,()=>c(r[t],i),n);a.flags=16}function zr(e,t,n=$a,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Je();let i=ro(n),a=Tn(t,n,e,r);return i(),Ye(),a};return r?i.unshift(a):i.push(a),a}}var Br=e=>(t,n=$a)=>{oo&&e!==`sp`||zr(e,(...e)=>t(...e),n)},Vr=Br(`bm`),Hr=Br(`m`),Ur=Br(`bu`),Wr=Br(`u`),Gr=Br(`bum`),Kr=Br(`um`),qr=Br(`sp`),Jr=Br(`rtg`),Yr=Br(`rtc`);function Xr(e,t=$a){zr(`ec`,e,t)}var Zr=`components`;function Qr(e,t){return ti(Zr,e,!0,t)||e}var $r=Symbol.for(`v-ndc`);function ei(e){return g(e)?ti(Zr,e,!1)||e:e||$r}function ti(e,t,n=!0,r=!1){let i=Kn||$a;if(i){let n=i.type;if(e===Zr){let e=go(n,!1);if(e&&(e===t||e===E(t)||e===ie(E(t))))return n}let a=ni(i[e]||n[e],t)||ni(i.appContext[e],t);return!a&&r?n:a}}function ni(e,t){return e&&(e[t]||e[E(t)]||e[ie(E(t))])}function ri(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Yt(e),r=!1,s=!1;n&&(r=!Zt(e),s=Xt(e),e=lt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?tn(en(e[n])):en(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){if(!Number.isInteger(e)||e<0)i=[];else{i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}}else if(v(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function ii(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(d(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function B(e,t,n,r,i,a){if(n??={},Kn.ce||Kn.parent&&Nr(Kn.parent)&&Kn.parent.ce){let e=a!=null&&n.key==null?s({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),H(),W(V,null,[K(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let c=ja.length;H();let l;try{let i=o&&ai(o(n)),s=n.key||a||i&&i.key;l=W(V,{key:(s&&!_(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=ja.length;e>c;e--)Na();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+`-s`]),l}function ai(e){return e.some(e=>!La(e)||!(e.type===ka||e.type===V&&!ai(e.children)))?e:null}function oi(e,t){let n={};for(let r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:ae(r)]=e[r];return n}var si=e=>e?ao(e)?ho(e):si(e.parent):null,ci=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>si(e.parent),$root:e=>si(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Si(e),$forceUpdate:e=>e.f||=()=>{Ln(e.update)},$nextTick:e=>e.n||=Fn.bind(e.proxy),$watch:e=>ar.bind(e)}),li=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),ui={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(li(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else _i&&(s[n]=0)}let d=ci[n],f,p;if(d)return n===`$attrs`&&at(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return li(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||li(n,c)||u(o,c)||u(i,c)||u(ci,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function di(){return pi(`useSlots`).slots}function fi(){return pi(`useAttrs`).attrs}function pi(e){let t=eo();return t.setupContext||=mo(t)}function mi(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function hi(e,t){let n=mi(e);for(let e in t){if(e.startsWith(`__skip`))continue;let r=n[e];r?d(r)||h(r)?r=n[e]={type:r,default:t[e]}:r.default=t[e]:r===null&&(r=n[e]={default:t[e]}),r&&t[`__skip_${e}`]&&(r.skipFactory=!0)}return n}function gi(e,t){return!e||!t?e||t:d(e)&&d(t)?e.concat(t):s({},mi(e),mi(t))}var _i=!0;function vi(e){let t=Si(e),n=e.proxy,i=e.ctx;_i=!1,t.beforeCreate&&bi(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:ee,renderTriggered:te,errorCaptured:E,serverPrefetch:ne,expose:re,inheritAttrs:ie,components:ae,directives:D,filters:oe}=t;if(u&&yi(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Wt(t))}if(_i=!0,o)for(let e in o){let t=o[e],a=Y({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)xi(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Zn(t,e[t])})}f&&bi(f,e,`c`);function se(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(se(Vr,p),se(Hr,m),se(Ur,g),se(Wr,_),se(Fr,y),se(Ir,b),se(Xr,E),se(Yr,ee),se(Jr,te),se(Gr,S),se(Kr,w),se(qr,ne),d(re)){if(re.length){let t=e.exposed||={};re.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}T&&e.render===r&&(e.render=T),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),D&&(e.directives=D),ne&&Dr(e)}function yi(e,t,n=r){d(e)&&(e=Di(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Qn(r.from||n,r.default,!0):Qn(r.from||n):Qn(r),M(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function bi(e,t,n){Tn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function xi(e,t,n,r){let i=r.includes(`.`)?or(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&R(i,n)}else if(h(e))R(i,e.bind(n));else if(v(e)){if(d(e))e.forEach(e=>xi(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&R(i,r,e)}}}function Si(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Ci(c,e,o,!0)),Ci(c,t,o)),v(t)&&a.set(t,c),c}function Ci(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Ci(e,a,n,!0),i&&i.forEach(t=>Ci(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=wi[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var wi={data:Ti,props:Ai,emits:Ai,methods:ki,computed:ki,beforeCreate:Oi,created:Oi,beforeMount:Oi,mounted:Oi,beforeUpdate:Oi,updated:Oi,beforeDestroy:Oi,beforeUnmount:Oi,destroyed:Oi,unmounted:Oi,activated:Oi,deactivated:Oi,errorCaptured:Oi,serverPrefetch:Oi,components:ki,directives:ki,watch:ji,provide:Ti,inject:Ei};function Ti(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Ei(e,t){return ki(Di(e),Di(t))}function Di(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oi(e,t){return e?[...new Set([].concat(e,t))]:t}function ki(e,t){return e?s(Object.create(null),e,t):t}function Ai(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),mi(e),mi(t??{})):t}function ji(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Oi(e[r],t[r]);return n}function Mi(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ni=0;function Pi(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Mi(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Ni++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:bo,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||K(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ho(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(Tn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Fi;Fi=l;try{return e()}finally{Fi=t}}};return l}}var Fi=null;function Ii(e,n,r=t){let i=eo(),a=E(n),o=re(n),s=Li(e,a),c=un((s,c)=>{let l,u=t,d;return rr(()=>{let t=e[a];D(l,t)&&(l=t,c())}),{get(){return s(),r.get?r.get(l):l},set(e){let s=r.set?r.set(e):e;if(!D(s,l)&&!(u!==t&&D(e,u)))return;let f=i.vnode.props,p=!!(f&&(n in f||a in f||o in f)&&(`onUpdate:${n}`in f||`onUpdate:${a}`in f||`onUpdate:${o}`in f));p||(l=e,c()),i.emit(`update:${n}`,s),D(e,u)&&(D(e,s)&&!D(s,d)||p&&u!==t&&!D(s,l))&&c(),u=e,d=s}}});return c[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?s||t:c,done:!1}:{done:!0}}}},c}var Li=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${E(t)}Modifiers`]||e[`${re(t)}Modifiers`];function Ri(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Li(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=a.map(ce)));let c,l=i[c=ae(n)]||i[c=ae(E(n))];!l&&o&&(l=i[c=ae(re(n))]),l&&Tn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Tn(u,e,6,a)}}var zi=new WeakMap;function Bi(e,t,n=!1){let r=n?zi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Bi(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Vi(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,re(t))||u(e,t))}function Hi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Jn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Ga(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Ga(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Wi(c)}}catch(t){ja.length=0,En(t,e,1),v=K(ka)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Gi(y,a)),b=Ua(b,y,!1,!0))}return n.dirs&&(b=Ua(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&wr(lr(b.type)&&Cr(b)||b,n.transition),v=b,Jn(_),v}function Ui(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(La(r)){if(r.type!==ka||r.children===`v-if`){if(n)return;n=r}}else return}return n}var Wi=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Gi=(e,t)=>{let n={};for(let r in e)o(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Ki(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?qi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Ji(o,r,n)&&!Vi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||qi(r,o,l):!!o;return!1}function qi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(!u(e,a)||Ji(t,e,a)&&!Vi(n,a))return!0}return!1}function Ji(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!Se(r,i):r!==i}function Yi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Xi={},Zi=()=>Object.create(Xi),Qi=e=>Object.getPrototypeOf(e)===Xi;function $i(e,t,n,r=!1){let i={},a=Zi();e.propsDefaults=Object.create(null),ta(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Gt(i):e.type.props?i:a,e.attrs=a}function ea(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=j(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Vi(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=E(o);i[t]=na(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ta(e,t,i,a)&&(l=!0);let r;for(let a in s)t&&(u(t,a)||(r=re(a))!==a&&u(t,r))||(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=na(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)t&&u(t,e)||(delete a[e],l=!0)}l&&ot(e.attrs,`set`,``)}function ta(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=E(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Vi(e.emitsOptions,t)||t in i&&l===i[t]||(i[t]=l,s=!0)}if(o){let n=j(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=na(a,n,s,i[s],e,!u(i,s))}}return s}function na(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ro(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===re(n))&&(r=!0))}return r}var ra=new WeakMap;function ia(e,r,i=!1){let a=i?ra:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ia(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=E(c[e]);aa(n)&&(l[n]=t)}else if(c)for(let e in c){let t=E(e);if(aa(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function aa(e){return e[0]!==`$`&&!T(e)}var oa=e=>e===`_`||e===`_ctx`||e===`$stable`,sa=e=>d(e)?e.map(Ga):[Ga(e)],ca=(e,t,n)=>{if(t._n)return t;let r=I((...e)=>sa(t(...e)),n);return r._c=!1,r},la=(e,t,n)=>{let r=e._ctx;for(let n in e){if(oa(n))continue;let i=e[n];if(h(i))t[n]=ca(n,i,r);else if(i!=null){let e=sa(i);t[n]=()=>e}}},ua=(e,t)=>{let n=sa(t);e.slots.default=()=>n},da=(e,t,n)=>{for(let r in t)(n||!oa(r))&&(e[r]=t[r])},fa=(e,t,n)=>{let r=e.slots=Zi();if(e.vnode.shapeFlag&32){let e=t._;e?(da(r,t,n),n&&se(r,`_`,e,!0)):la(t,r)}else t&&ua(e,t)},pa=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:da(a,n,r):(o=!n.$stable,la(n,a)),s=n}else n&&(ua(e,n),s={default:1});if(o)for(let e in a)!oa(e)&&s[e]==null&&delete a[e]},ma=Da;function ha(e){return ga(e)}function ga(e,i){let a=ue();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,r,i=null,a=null,o=null,s=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ra(e,t)&&(i=ye(e),k(e,a,o,!0),e=null),t.patchFlag===-2&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===n&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case Oa:y(e,t,r,i);break;case ka:b(e,t,r,i);break;case Aa:e??x(t,r,i,s);break;case V:ae(e,t,r,i,a,o,s,c,l);break;default:f&1?w(e,t,r,i,a,o,s,c,l):f&6?D(e,t,r,i,a,o,s,c,l):(f&64||f&128)&&u.process(e,t,r,i,a,o,s,c,l,xe)}d!=null&&a?jr(d,e&&e.ref,o,t||e,!t):d==null&&e&&e.ref!=null&&jr(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,_a(e,a),s,u),_&&Xn(e,null,r,`created`),te(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Ja(f,r,e)}_&&Xn(e,null,r,`beforeMount`);let v=ya(i,g);v?g.beforeEnter(d):g&&!g.persisted&&(d[Ea]=!0),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&ma(()=>{try{f&&Ja(f,r,e),v&&g.enter(d),_&&Xn(e,null,r,`mounted`)}finally{}},i)},te=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ta(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;te(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Ka(e[l]):Ga(e[l]);v(null,c,t,n,r,i,a,o,s)}},ne=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&va(r,!1),(g=h.onVnodeBeforeUpdate)&&Ja(g,r,n,e),f&&Xn(n,e,r,`beforeUpdate`),r&&va(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?re(e.dynamicChildren,d,l,r,i,_a(n,a),o):s||de(e,n,l,null,r,i,_a(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&ma(()=>{g&&Ja(g,r,n,e),f&&Xn(n,e,r,`updated`)},i)},re=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el||wa(c),d=u&&(c.type===V||!Ra(c,l)||c.shapeFlag&198)?m(u):n;v(c,l,d,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(re(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&ba(e,t,!0)):de(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):se(t,n,r,i,a,o,c):ce(e,t,c)},se=(e,t,n,r,i,a,o)=>{let s=e.component=Qa(e,r,i);if(Pr(e)&&(s.ctx.renderer=xe),so(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,le,o,a),!e.el){let r=s.subTree=K(ka);b(null,r,t,n),e.placeholder=r.el}}else le(s,e,t,n,i,a,o)},ce=(e,t,n)=>{let r=t.component=e.component;if(Ki(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,t.placeholder=e.placeholder,O(r,t,n);return}r.next=t,r.update()}else t.el=e.el,t.placeholder=e.placeholder,r.vnode=t},le=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Sa(e);if(n){t&&(t.el=c.el,O(e,t,o)),n.asyncDep.then(()=>{let t=()=>{e.job.flags&8||(i&&i.pendingBranch?ma(t,i):l())};t.flags=48,ma(t,i)});return}}let u=t,d;va(e,!1),t?(t.el=c.el,O(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Ja(d,s,t,c),va(e,!0);let f=Hi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el||wa(p)),ye(p),e,i,a),t.el=f.el,u===null&&Yi(e,f.el),r&&ma(r,i),(d=t.props&&t.props.onVnodeUpdated)&&ma(()=>Ja(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Nr(t);if(va(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Ja(o,d,t),va(e,!0),s&&Ce){let t=()=>{e.subTree=Hi(e),Ce(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Hi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&ma(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;ma(()=>Ja(o,d,e),i)}(t.shapeFlag&256||d&&Nr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&ma(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ne(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Ln(u),va(e,!0),l()},O=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ea(e,t.props,r,n),pa(e,t.children,n),Je(),Bn(e),Ye()},de=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){pe(l,d,n,r,i,a,o,s,c);return}if(f&256){fe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?pe(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},fe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?Ka(t[p]):Ga(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ve(e,a,o,!0,!1,f):E(t,r,i,a,o,s,c,l,f)},pe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Ka(t[u]):Ga(t[u]);if(Ra(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Ka(t[p]):Ga(t[p]);if(Ra(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Ka(t[u]):Ga(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)k(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ka(t[u]):Ga(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){k(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ra(n,t[_])){i=_;break}i===void 0?k(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?xa(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||wa(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?me(n,r,p,2):_--)}}},me=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6)me(e.component.subTree,t,n,r);else if(d&128)e.suspense.move(t,n,r);else if(d&64)c.move(e,t,n,xe);else if(c===V){o(a,t,n);for(let e=0;e<u.length;e++)me(u[e],t,n,r);o(e.anchor,t,n)}else if(c===Aa)S(e,t,n);else if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[xr]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),ma(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[xr];a._isLeaving&&a[xr](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},k=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(Je(),jr(s,null,n,e,!0),Ye()),p==null||e.ctx&&e.ctx!==t||(t.renderCache[p]=void 0),u&256&&t.ctx.deactivate(e))return;let h=u&1&&f,g=!Nr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Ja(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Xn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,xe,r):l&&!l.hasOnce&&(a!==V||d>0&&d&64)?ve(l,t,n,!1,!0):(a===V&&d&384||!i&&u&16)&&ve(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&ma(()=>{_&&Ja(_,t,e),h&&Xn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:i}=e,a=t===V;if(a&&!i){ge(n,r);return}if(t===Aa){C(e),i&&!i.persisted&&i.afterLeave&&i.afterLeave();return}let o=a?Tr(e):e,c=()=>{a?m(n)&&ge(n,r):s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(o&&o.shapeFlag&1&&i&&!i.persisted){let{leave:e,delayLeave:t}=i,n=o.el,r=()=>e(n,c);t?t(n,c,r):r()}else c()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ca(c),Ca(l),r&&oe(r),i.stop(),a?(a.flags|=8,k(o,e,t,n)):o&&(o.transition=e.vnode.transition,k(o,e,t,n)),s&&ma(s,t);let u=()=>{e.isUnmounted=!0};u.flags=16,ma(u,t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)k(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[cr];return n?h(n):t},be=(e,t,n)=>{Un(()=>{e==null?t._vnode&&k(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e},e&&t._vnode?void 0:e&&e.component?e.component.uid:Za())},xe={p:v,um:k,m:me,r:he,mt:se,mc:E,pc:de,pbc:re,n:ye,o:e},Se,Ce;return i&&([Se,Ce]=i(xe)),{render:be,hydrate:Se,createApp:Pi(be,Se)}}function _a({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function va({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ya(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ba(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ka(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&ba(t,a)),a.type===Oa&&(a.patchFlag===-1&&(a=i[e]=Ka(a)),a.el=t.el),a.type===ka&&!a.el&&(a.el=t.el)}}function xa(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Sa(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Sa(t)}function Ca(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function wa(e){if(e.placeholder)return e.placeholder;let t=e.component;if(t)return wa(t.subTree);let n=e.suspense;return n&&n.activeBranch?wa(n.activeBranch):null}var Ta=e=>e.__isSuspense,Ea=Symbol(`_deferredEnter`);function Da(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):zn(e)}var V=Symbol.for(`v-fgt`),Oa=Symbol.for(`v-txt`),ka=Symbol.for(`v-cmt`),Aa=Symbol.for(`v-stc`),ja=[],Ma=null;function H(e=!1){ja.push(Ma=e?null:[])}function Na(){ja.pop(),Ma=ja[ja.length-1]||null}var Pa=1;function Fa(e,t=!1){Pa+=e,e<0&&Ma&&t&&(Ma.hasOnce=!0)}function Ia(e){return e.dynamicChildren=Pa>0?Ma||n:null,Na(),Pa>0&&Ma&&Ma.push(e),e}function U(e,t,n,r,i,a){return Ia(G(e,t,n,r,i,a,!0))}function W(e,t,n,r,i){return Ia(K(e,t,n,r,i,!0))}function La(e){return e?e.__v_isVNode===!0:!1}function Ra(e,t){return e.type===t.type&&e.key===t.key}var za=({key:e})=>e??null,Ba=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||M(e)||h(e)?{i:Kn,r:e,k:t,f:!!n}:e);function G(e,t=null,n=null,r=0,i=null,a=e===V?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&za(t),ref:t&&Ba(t),scopeId:qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Kn};return s?(qa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Pa>0&&!o&&Ma&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ma.push(c),c}var K=Va;function Va(e,t=null,n=null,r=0,i=null,a=!1){if(e&&e!==$r||(e=ka),La(e)){let r=Ua(e,t,!0);return n&&qa(r,n),Pa>0&&!a&&Ma&&(r.shapeFlag&6?Ma[Ma.indexOf(e)]=r:Ma.push(r)),r.patchFlag=-2,r}if(_o(e)&&(e=e.__vccOpts),t){t=Ha(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=k(e)),v(n)&&(Qt(n)&&!d(n)&&(n=s({},n)),t.style=O(n))}let o=g(e)?1:Ta(e)?128:lr(e)?64:v(e)?4:h(e)?2:0;return G(e,t,n,r,i,o,a,!0)}function Ha(e){return e?Qt(e)?s({},e):Qi(e)?s({},e[fo]||e):e:null}function Ua(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?J(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&za(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Ba(t)):[a,Ba(t)]:Ba(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==V?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ua(e.ssContent),ssFallback:e.ssFallback&&Ua(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&wr(u,c.clone(u)),u}function Wa(e=` `,t=0){return K(Oa,null,e,t)}function q(e=``,t=!1){return t?(H(),W(ka,null,e)):K(ka,null,e)}function Ga(e){return e==null||typeof e==`boolean`?K(ka):d(e)?K(V,null,e.slice()):La(e)?Ka(e):K(Oa,null,String(e))}function Ka(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ua(e)}function qa(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),qa(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Qi(t)?t._ctx=Kn:r===3&&Kn&&(Kn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(h(t)){if(r&65){qa(e,{default:t});return}t={default:t,_ctx:Kn},n=32}else t=String(t),r&64?(n=16,t=[Wa(t)]):n=8;e.children=t,e.shapeFlag|=n}function J(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=k([t.class,r.class]));else if(e===`style`)t.style=O([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Ja(e,t,n,r=null){Tn(e,t,7,[n,r])}var Ya=Mi(),Xa=0;function Za(){return Xa}function Qa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Ya,o={uid:Xa++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oe(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ia(i,a),emitsOptions:Bi(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Ri.bind(null,o),e.ce&&e.ce(o),o}var $a=null,eo=()=>$a||Kn,to,no;{let e=ue(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};to=t(`__VUE_INSTANCE_SETTERS__`,e=>$a=e),no=t(`__VUE_SSR_SETTERS__`,e=>oo=e)}var ro=e=>{let t=$a;return to(e),e.scope.on(),()=>{e.scope.off(),to(t)}},io=()=>{$a&&$a.scope.off(),to(null)};function ao(e){return e.vnode.shapeFlag&4}var oo=!1;function so(e,t=!1,n=!1){t&&no(t);let{props:r,children:i}=e.vnode,a=ao(e);$i(e,r,a,t),fa(e,i,n||t);let o=a?co(e,t):void 0;return t&&no(!1),o}function co(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ui);let{setup:r}=n;if(r){Je();let n=e.setupContext=r.length>1?mo(e):null,i=ro(e),a=wn(r,e,0,[e.props,n]),o=y(a);if(Ye(),i(),(o||e.sp)&&!Nr(e)&&Dr(e),o){if(a.then(io,io),t)return a.then(n=>{no(!0);try{lo(e,n,t)}finally{no(!1)}}).catch(t=>{En(t,e,0,void 0,!0),e.ssrRender=(e,t)=>t(`<!---->`)});e.asyncDep=a}else lo(e,a,t)}else uo(e,t)}function lo(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=cn(t)),uo(e,n)}function uo(e,t,n){let i=e.type;e.render||=i.render||r;{let t=ro(e);Je();try{vi(e)}finally{Ye(),t()}}}var fo=Symbol(),po={get(e,t){return at(e,`get`,``),t===fo?e:e[t]}};function mo(e){return{attrs:new Proxy(e.attrs,po),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ho(e){return e.exposed?e.exposeProxy||=new Proxy(cn($t(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ci)return ci[n](e)},has(e,t){return t in e||t in ci}}):e.proxy}function go(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function _o(e){return h(e)&&`__vccOpts`in e}var Y=(e,t)=>_n(e,t,oo);function X(e,t,n){try{Fa(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?La(t)?K(e,null,[t]):K(e,t):K(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&La(n)&&(n=[n]),K(e,t,n))}finally{Fa(1)}}function vo(e,t,n,r){let i=n[r];if(i&&yo(i,e))return i;let a=t();return a.memo=e.slice(),a.cacheIndex=r,n[r]=a}function yo(e,t){let n=e.memo;if(n.length!=t.length)return!1;for(let e=0;e<n.length;e++)if(D(n[e],t[e]))return!1;return Pa>0&&Ma&&Ma.push(e),!0}var bo=`3.5.45`,xo=void 0,So=typeof window<`u`&&window.trustedTypes;if(So)try{xo=So.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Co=xo?e=>xo.createHTML(e):e=>e,wo=`http://www.w3.org/2000/svg`,To=`http://www.w3.org/1998/Math/MathML`,Eo=typeof document<`u`?document:null,Do=Eo&&Eo.createElement(`template`),Oo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Eo.createElementNS(wo,e):t===`mathml`?Eo.createElementNS(To,e):n?Eo.createElement(e,{is:n}):Eo.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Eo.createTextNode(e),createComment:e=>Eo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Eo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Do.innerHTML=Co(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Do.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ko=Symbol(`_vtc`);function Ao(e,t,n){let r=e[ko];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var jo=Symbol(`_vod`),Mo=Symbol(`_vsh`),No={name:`show`,beforeMount(e,{value:t},{transition:n}){e[jo]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Po(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Po(e,!0),r.enter(e)):r.leave(e,()=>{Po(e,!1)}):Po(e,t))},beforeUnmount(e,{value:t}){Po(e,t)}};function Po(e,t){e.style.display=t?e[jo]:`none`,e[Mo]=!t}var Fo=Symbol(``),Io=/(?:^|;)\s*display\s*:/;function Lo(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t){if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??zo(r,t,``)}else for(let e in t)n[e]??zo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?zo(r,i,``):Uo(e,i,!g(t)&&t?t[i]:void 0,o)||zo(r,i,o)}}else if(i){if(t!==n){let e=r[Fo];e&&(n+=`;`+e),r.cssText=n,a=Io.test(n)}}else t&&e.removeAttribute(`style`);jo in e&&(i&&t===n||(e[jo]=a?r.display:``),e[Mo]&&(r.display=`none`))}var Ro=/\s*!important$/;function zo(e,t,n){if(d(n))n.forEach(n=>zo(e,t,n));else if(n??=``,t.startsWith(`--`))Ro.test(n)?e.setProperty(t,n.replace(Ro,``),`important`):e.setProperty(t,n);else{let r=Ho(e,t);Ro.test(n)?e.setProperty(re(r),n.replace(Ro,``),`important`):e[r]=n}}var Bo=[`Webkit`,`Moz`,`ms`],Vo={};function Ho(e,t){let n=Vo[t];if(n)return n;let r=E(t);if(r!==`filter`&&r in e)return Vo[t]=r;r=ie(r);for(let n=0;n<Bo.length;n++){let i=Bo[n]+r;if(i in e)return Vo[t]=i}return t}function Uo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Wo=`http://www.w3.org/1999/xlink`;function Go(e,t,n,r,i,a=ge(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Wo,t.slice(6,t.length)):e.setAttributeNS(Wo,t,n):n==null||a&&!_e(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ko(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Co(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);r===i&&`_value`in e||(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=_e(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function qo(e,t,n,r){e.addEventListener(t,n,r)}function Jo(e,t,n,r){e.removeEventListener(t,n,r)}var Yo=Symbol(`_vei`);function Xo(e,t,n,r,i=null){let a=e[Yo]||(e[Yo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=$o(t);r?qo(e,n,a[t]=rs(r,i),s):o&&(Jo(e,n,o,s),a[t]=void 0)}}var Zo=/(Once|Passive|Capture)$/,Qo=/^on:?(?:Once|Passive|Capture)$/;function $o(e){let t,n;for(;(n=e.match(Zo))&&!Qo.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):re(e.slice(2)),t]}var es=0,ts=Promise.resolve(),ns=()=>es||=(ts.then(()=>es=0),Date.now());function rs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&Tn(e,t,5,a)}}else Tn(r,t,5,[e])};return n.value=e,n.attached=ns(),n}var is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,as=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Ao(e,r,c):t===`style`?Lo(e,n,r):a(t)?o(t)||Xo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):os(e,t,r,c))?(Ko(e,t,r),e.tagName.includes(`-`)||t!==`value`&&t!==`checked`&&t!==`selected`||Go(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ss(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ko(e,E(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Go(e,t,r,c))};function os(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&is(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return is(t)&&g(n)?!1:t in e}function ss(e,t){let n=e._def.props;if(!n)return!1;let r=E(t);return Array.isArray(n)?n.some(e=>E(e)===r):Object.keys(n).some(e=>E(e)===r)}var cs=[`ctrl`,`shift`,`alt`,`meta`],ls={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>cs.some(n=>e[`${n}Key`]&&!t.includes(n))},us=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=ls[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},ds={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},fs=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=re(n.key);if(t.some(e=>e===r||ds[e]===r))return e(n)}))},ps=s({patchProp:as},Oo),ms;function hs(){return ms||=ha(ps)}var gs=((...e)=>{let t=hs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=vs(e);if(!r)return;let i=t._component;h(i)||i.render||i.template||(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,_s(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function _s(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function vs(e){return g(e)?document.querySelector(e):e}function ys(e,t,n){let r,i=function(...i){let a=this,o=function(){r=void 0,n||e.apply(a,i)},s=n&&!r;clearTimeout(r),r=window.setTimeout(o,t),s&&e.apply(a,i)};return i.cancel=()=>{clearTimeout(r),r=void 0},i}function bs(e){let t=Object.assign({},e);if(!t.url)throw Error(`[request] options.url is required`);t.transformRequest&&(t=t.transformRequest(e)),t.responseType||(t.responseType=`json`),t.method||(t.method=`GET`);let n=t.url,r;if(t.params){if(t.method===`GET`){let e=new URLSearchParams;for(let n in t.params)e.append(n,String(t.params[n]));n=t.url+`?`+e.toString()}else r=JSON.stringify(t.params)}return fetch(n,{method:t.method||`GET`,headers:t.headers,body:r,signal:t.signal,...t.credentials?{credentials:t.credentials}:{}}).then(e=>{if(t.transformResponse)return t.transformResponse(e,t);if(e.status>=200&&e.status<300)return t.responseType===`json`?e.json():e;{let t=Error(e.statusText);throw t.response=e,t}}).catch(e=>{if(t.transformError)return t.transformError(e);throw e})}function xs(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function Ss(e,t){let n,r=()=>{if(n)return n;let r=indexedDB.open(e);return r.onupgradeneeded=()=>r.result.createObjectStore(t),n=xs(r),n.then(e=>{e.onclose=()=>n=void 0},()=>{n=void 0}),n};return(e,n)=>r().then(r=>n(r.transaction(t,e).objectStore(t)))}var Cs;function ws(){return Cs||=Ss(`keyval-store`,`keyval`),Cs}function Ts(e,t=ws()){return t(`readonly`,t=>xs(t.get(e)))}function Es(e,t,n=ws()){return n(`readwrite`,n=>(n.put(t,e),xs(n.transaction)))}function Ds(e,t=ws()){return t(`readwrite`,t=>(t.delete(e),xs(t.transaction)))}function Os(e,t){return typeof indexedDB>`u`?Promise.resolve(null):e?Es(e,JSON.stringify(t)):Promise.resolve()}function ks(e){return typeof indexedDB>`u`?Promise.resolve(null):e?Ds(e):Promise.resolve()}function As(e){return typeof indexedDB>`u`?Promise.resolve(null):Ts(e).then(e=>e&&JSON.parse(e))}function js(e,t){let n=Symbol.for(`frappe-ui.${e}`),r=globalThis;return n in r||(r[n]=t()),r[n]}var Ms=js(`config`,()=>({}));function Ns(e,t){Ms[e]=t}function Ps(e){return Ms[e]??null}var Fs={};function Is(e,t){let n=null;if(e.cache){n=Ls(e.cache);let t=Fs[n];if(t)return t.auto&&t.reload(),t}typeof e==`string`&&(e={url:e,auto:!0});let r=e.debounce?ys(o,e.debounce):o,i=new AbortController,a=Wt({method:e.method,url:e.url,data:e.initialData||null,previousData:null,loading:!1,fetched:!1,error:null,promise:null,auto:e.auto,params:null,fetch:r,reload:r,submit:r,abort:()=>i.abort(),reset:c,update:s,setData:u});async function o(r,o={}){let s=e.resourceFetcher||Ps(`resourceFetcher`)||bs;r instanceof Event&&(r=null),r||=a.params,e.makeParams&&(r=e.makeParams.call(t,r)),a.params=r,a.previousData=a.data?JSON.parse(JSON.stringify(a.data)):null,a.loading=!0,a.error=null,e.onFetch&&e.onFetch.call(t,a.params);let c=[e.beforeSubmit,o.beforeSubmit];for(let e of c)e&&e.call(t,a.params);let u=o.validate||e.validate,f=[e.onError,o.onError],p=[e.onSuccess,o.onSuccess],m=[e.onData,o.onData];if(u){let e;try{if(e=await u.call(t,a.params),e&&typeof e==`string`)throw Error(e)}catch(e){l(e,f);return}}i=new AbortController,e.signal=i.signal;try{a.promise=s({...e,onError:void 0,params:r||e.params});let i=await a.promise;Os(n,i),a.data=d(i),a.fetched=!0;for(let e of p)e&&e.call(t,i);for(let e of m)e&&e.call(t,i)}catch(e){e?.name!==`AbortError`&&l(e,f)}return a.loading=!1,a.data}function s({method:t,url:n,params:r,auto:i}){t&&t!==e.method&&(a.method=t),n&&n!==e.url&&(a.url=n),r&&r!==e.params&&(a.params=r),i!==void 0&&i!==a.auto&&(a.auto=i)}function c(){a.data=e.initialData||null,a.previousData=null,a.loading=!1,a.fetched=!1,a.error=null,a.params=null,a.auto=e.auto}function l(e,n){a.loading=!1,a.previousData&&(a.data=a.previousData),a.error=e;for(let r of n)r&&r.call(t,e);if(n.every(e=>e==null)){let t=Ps(`fallbackErrorHandler`);if(t)try{t(e)}catch(e){console.warn(`Error in fallbackErrorHandler`,e)}}throw e}function u(e){typeof e==`function`&&(e=e.call(t,a.data)),a.data=d(e)}function d(n){if(e.transform){let r=e.transform.call(t,n);if(r!=null)return r}return n}return n&&!Fs[n]&&(Fs[n]=a,As(n).then(n=>{(a.loading||!a.fetched)&&n&&(u(n),e.onData?.call(t,n))})),e.auto&&a.fetch(),a}function Ls(e){return e?(typeof e==`string`&&(e=[e]),JSON.stringify(e)):null}function Rs(e){return e=Ls(e),Fs[e]||null}function zs(e,t,n){Vs(e,t),e.on(`list_update`,e=>{e.doctype==t&&n(e.name)})}var Bs={};function Vs(e,t){Bs[t]||(e.emit(`doctype_subscribe`,t),Bs[t]=!0)}function Hs(e){try{return e?.$socket}catch{return}}var Us=Wt({}),Ws={};function Gs(e,t){if(!e.doctype)throw Error(`List resource requires doctype`);let n=Ls(e.cache);if(n){let e=Us[n];if(e)return e.auto&&e.reload(),e}let r=Ps(`defaultListUrl`)||`frappe.client.get_list`,i=Ps(`defaultDocInsertUrl`)||`frappe.client.insert`,a=Ps(`defaultDocUpdateUrl`)||`frappe.client.set_value`,o=Ps(`defaultDocDeleteUrl`)||`frappe.client.delete`,s=Ps(`defaultRunDocMethodUrl`)||`run_doc_method`,c=Wt({doctype:e.doctype,fields:e.fields,filters:e.filters,orFilters:e.orFilters,orderBy:e.orderBy,start:e.start||0,pageLength:e.pageLength||20,groupBy:e.groupBy,parent:e.parent,debug:e.debug||0,originalData:null,dataMap:{},data:null,previous:m,hasPreviousPage:!1,next:h,hasNextPage:!0,auto:e.auto,list:Is({url:e.url||r,makeParams(){return{doctype:c.doctype,fields:c.fields,filters:c.filters,or_filters:c.orFilters,order_by:c.orderBy,start:c.start,limit:c.pageLength,limit_start:c.start,limit_page_length:c.pageLength,group_by:c.groupBy,parent:c.parent,debug:c.debug}},onSuccess(r){c.hasPreviousPage=!!c.start,c.hasNextPage=!(r.length<c.pageLength);let i;!c.start||c.start==0?i=r:c.start>0&&(i=c.originalData.concat(r)),Os(n,i),p(i),e.onSuccess?.call(t,c.data)},onError:e.onError},t),fetchOne:Is({url:e.url||r,makeParams(e){return{doctype:c.doctype,fields:c.fields||`*`,filters:{name:e}}},onSuccess(n){if(n.length>0&&c.originalData){let e=n[0];qs(c.doctype,e)}e.fetchOne?.onSuccess?.call(t,c.data)},onError:e.fetchOne?.onError},t),insert:Is({url:i,makeParams(e){return{doc:{doctype:c.doctype,...e}}},onSuccess(n){c.list.fetch(),e.insert?.onSuccess?.call(t,n)},onError:e.insert?.onError},t),setValue:Is({url:a,makeParams(e){let{name:t,...n}=e;return{doctype:c.doctype,name:t,fieldname:n}},onSuccess(n){qs(c.doctype,n),e.setValue?.onSuccess?.call(t,n)},onError:e.setValue?.onError},t),delete:Is({url:o,makeParams(e){return{doctype:c.doctype,name:e}},onSuccess(n){c.list.fetch(),e.delete?.onSuccess?.call(t,n)},onError:e.delete?.onError},t),runDocMethod:Is({url:s,makeParams({method:e,name:t,...n}){return{dt:c.doctype,dn:t,method:e,args:n}},onSuccess(n){if(n.docs)for(let e of n.docs)qs(e.doctype,e);e.runDocMethod?.onSuccess?.call(t,n)},onError:e.runDocMethod?.onError},t),update:l,fetch:f,reload:d,setData:p,transform:u,getRow:g});function l(e){Object.assign(c,e)}function u(n){if(e.transform){let r=e.transform.call(t,n);if(r!=null)return r}return n}function d(){let e=c.start,t=c.pageLength;return c.start>0&&(c.start=0,c.pageLength=c.originalData.length),c.list.fetch().finally(()=>{c.start=e,c.pageLength=t,c.hasPreviousPage=!!c.start})}function f(){d()}function p(e){if(c.originalData=e,typeof e==`function`&&(e=e.call(t,c.data)),c.data=u(e),Array.isArray(c.data)){c.dataMap={};for(let e of c.data){if(!e.name)continue;let t=e.name.toString();c.dataMap[t]=e}}}function m(){c.start-=c.pageLength,c.list.fetch()}function h(){c.start+=c.pageLength,c.list.fetch()}function g(e){let t=e.toString();return c.dataMap[t]}let _=e.realtime?Hs(t):void 0;return _&&zs(_,c.doctype,e=>{c.originalData?.find(t=>t.name===e)&&c.fetchOne.submit(e)}),n&&(Us[n]=c,As(n).then(n=>{(c.list.loading||!c.list.fetched)&&n&&(p(n),e.onData?.call(t,n))})),e.auto&&c.list.fetch(),Ws[c.doctype]=Ws[c.doctype]||[],Ws[c.doctype].push(c),c}function Ks(e){return e=Ls(e),Us[e]||null}function qs(e,t){if(!t.name)return;let n=Ws[e]||[];for(let e of n)if(e.originalData){for(let n of e.originalData)if(n.name&&n.name==t.name){delete n._previousData;let e=JSON.stringify(n);for(let e in n)e in t&&(n[e]=t[e]);n._previousData=e}e.data=e.transform(e.originalData)}}function Js(e,t){let n=Ws[e]||[];for(let e of n)e.originalData&&(e.originalData=e.originalData.filter(e=>e.name.toString()!==t.toString()),e.data=e.transform(e.originalData))}function Ys(e,t){let n=Ws[e]||[];for(let e of n)if(e.originalData){for(let n of e.originalData)if(n.name&&n.name==t.name){let e=JSON.parse(n._previousData);for(let t in n)n[t]=e[t];delete n._previousData}e.data=e.transform(e.originalData)}}var Xs=Wt({});function Zs(e,t){if(!(e.doctype&&e.name))return;let n=Ls([e.doctype,e.name]),r=Xs[n];if(r)return r.auto&&r.reload(),r;let i=Ps(`defaultDocGetUrl`)||`frappe.client.get`,a=Ps(`defaultDocUpdateUrl`)||`frappe.client.set_value`,o=Ps(`defaultDocDeleteUrl`)||`frappe.client.delete`,s=Ps(`defaultRunDocMethodUrl`)||`run_doc_method`,c={url:a,makeParams(e){return{doctype:u.doctype,name:u.name,fieldname:e}},validate(n){e.setValue?.validate?.call(t,n)},beforeSubmit(e){u.previousDoc=JSON.stringify(u.doc),Object.assign(u.doc,e.fieldname||{}),qs(u.doctype,u.doc)},onSuccess(n){u.doc=g(n),u.originalDoc=JSON.parse(JSON.stringify(u.doc)),e.setValue?.onSuccess?.call(t,n)},onError(n){u.doc=JSON.parse(u.previousDoc),e.setValue?.onError?.call(t,n),Ys(u.doctype,u.doc)}},l=e.auto!==void 0,u=Wt({doctype:e.doctype,name:e.name,doc:null,originalDoc:null,isDirty:!1,auto:!l||e.auto,get:Is({url:i,method:`GET`,makeParams(){return{doctype:u.doctype,name:u.name}},onSuccess(r){Os(n,r),u.doc=g(r),u.originalDoc=JSON.parse(JSON.stringify(u.doc)),e.onSuccess?.call(t,u.doc)},onError(r){ks(n),u.doc=null,u.originalDoc=null,e.onError?.call(t,r)}},t),setValue:Is(c,t),setValueDebounced:Is({...c,debounce:e.debounce||500},t),save:Is({...c,makeParams(){return{doctype:u.doctype,name:u.name,fieldname:p()}}},t),delete:Is({url:o,makeParams(){return{doctype:u.doctype,name:u.name}},onSuccess(){u.doc=null,e.delete?.onSuccess?.call(t),Js(u.doctype,u.name)},onError:e.delete?.onError},t),reload:m,setDoc:h}),d=u.save.fetch;function f(...e){return Object.keys(p()).length===0?Promise.resolve(u.doc):d(...e)}u.save.fetch=f,u.save.reload=f,u.save.submit=f,ke(!0).run(()=>{R(()=>u.doc,()=>{u.isDirty=JSON.stringify(u.doc)!==JSON.stringify(u.originalDoc)},{deep:!0})});for(let n in e.whitelistedMethods){let r=e.whitelistedMethods[n];typeof r==`string`&&(r={method:r});let{method:i,onSuccess:a,makeParams:o,transform:c,...l}=r;u[n]=Is({url:s,makeParams(e){return e=o?o.call(t,e):e,{dt:u.doctype,dn:u.name,method:i,args:e}},transform(e){if(c){let n=c.call(t,e.message);if(n!=null)return n}return e.message},onSuccess(e){if(e.docs){for(let t of e.docs)if(t.doctype===u.doctype&&t.name.toString()===u.name.toString()){u.doc=g(t),qs(u.doctype,u.doc);break}}a?.call(t,e.message)},...l},t)}function p(){let e=JSON.parse(JSON.stringify(u.doc||{})),t=u.originalDoc||{},n={};for(let r in e)JSON.stringify(e[r])!==JSON.stringify(t[r])&&(n[r]=e[r]);return delete n.doctype,delete n.name,n}function m(){return u.get.fetch()}function h(e){typeof e==`function`&&(e=e.call(t,u.doc)),u.doc=g(e)}function g(n){if(e.transform){let r=e.transform.call(t,n);if(typeof r==`object`)return r}return n}let _=e.realtime?Hs(t):void 0;return _&&zs(_,u.doctype,e=>{e==u.name&&u.get.fetch()}),Xs[n]=u,As(n).then(e=>{(u.get.loading||!u.get.fetched)&&e&&(u.doc=g(e))}),u.auto&&u.get.fetch(),u}function Qs(e,t){return Xs[Ls([e,t])]||null}var $s=e=>({created(){if(this.$options.resources){this._resources=Wt({});for(let e in this.$options.resources){let t=this.$options.resources[e];if(typeof t==`function`)R(()=>{let e=null;try{e=t.call(this)}catch(t){console.warn(`Failed to get resource options

`,t),e=null}return e},(t,n)=>{t&&(n&&JSON.stringify(t)===JSON.stringify(n)||(this._resources[e]=ec(t,this)))},{immediate:!0,deep:!0});else{let n=ec(t,this);this._resources[e]=n}}}},methods:{$getResource(e){return Rs(e)},$getDocumentResource(e,t){return Qs(e,t)},$getDoc(e,t){let n=this.$getDocumentResource(e,t);return n?n.doc:null},$getListResource(e){return Ks(e)},$refetchResource(e){let t=this.$getResource(e);t&&t.fetch()}},computed:{$resources(){return this._resources}}});function ec(e,t){return e.type===`document`?Zs(e,t):e.type===`list`?Gs(e,t):Is(e,t)}var tc={install(e,t){let n=$s(t);e.mixin(n)}},nc={$socket:`The FrappeUI plugin used to open a socket.io connection and assign it here. It no longer does, and the "socketio" option is gone. Create your own connection and assign it: app.config.globalProperties.$socket = io(url, { withCredentials: true }).`,$call:'The FrappeUI plugin used to assign the `call` helper here. It no longer does. Import it instead: import { call } from "frappe-ui".'},rc=`The v1 resources Options API no longer installs by default. Fix: app.use(FrappeUI, { resources: true }). Or port the component to the Composition API (createResource, useList, …), which needs nothing from this plugin.`;function ic(e,t,n){let r=e.config.globalProperties;Object.prototype.hasOwnProperty.call(r,t)||Object.defineProperty(r,t,{configurable:!0,enumerable:!1,get(){throw Error(`[frappe-ui] this.${t} is not set. ${n}`)},set(e){Object.defineProperty(r,t,{value:e,writable:!0,configurable:!0,enumerable:!0})}})}var ac={install(e,t={}){for(let t of Object.keys(nc))ic(e,t,nc[t]);t.resources?e.use(tc):(ic(e,`$resources`,rc),e.mixin({created(){if(!this.$options.resources)return;let e=this.$options.name||this.$.type?.__name||`An anonymous component`;throw Error(`[frappe-ui] ${e} declares a "resources" component option, but the FrappeUI plugin was installed without it, so nothing reads that option and this.$resources does not exist. ${rc}`)}}))}};function oc(e,t=-1/0,n=1/0){return Math.min(n,Math.max(t,e))}function sc(e,t){let n=typeof e==`string`&&!t?`${e}Context`:t,r=Symbol(n);return[t=>{let n=Qn(r,t);if(n||n===null)return n;throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(`, `)}`:`\`${e}\``}`)},e=>(Zn(r,e),e)]}function cc(){let e=document.activeElement;if(e==null)return null;for(;e!=null&&e.shadowRoot!=null&&e.shadowRoot.activeElement!=null;)e=e.shadowRoot.activeElement;return e}function lc(e,t,n){let r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),r.dispatchEvent(i)}function uc(e,t){return Ae()?(je(e,t),!0):!1}function dc(){let e=new Set,t=t=>{e.delete(t)};return{on:n=>{e.add(n);let r=()=>t(n);return uc(r),{off:r}},off:t,trigger:(...t)=>Promise.all(Array.from(e).map(e=>e(...t))),clear:()=>{e.clear()}}}function fc(e){let t=!1,n,r=ke(!0);return((...i)=>(t||=(n=r.run(()=>e(...i)),!0),n))}var pc=new WeakMap,mc=(...e)=>{let t=e[0],n=eo()?.proxy??Ae();if(n==null&&!$n())throw Error(`injectLocal must be called in setup`);return n&&pc.has(n)&&t in pc.get(n)?pc.get(n)[t]:Qn(...e)},hc=typeof window<`u`&&typeof document<`u`;typeof WorkerGlobalScope<`u`&&globalThis instanceof WorkerGlobalScope;var gc=e=>e!==void 0,_c=Object.prototype.toString,vc=e=>_c.call(e)===`[object Object]`,yc=()=>{},bc=xc();function xc(){var e,t;return hc&&!!((e=window)!=null&&(e=e.navigator)!=null&&e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window)==null||(t=t.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window?.navigator.userAgent))}function Sc(e,t){function n(...n){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(r).catch(i)})}return`cancel`in e&&Object.assign(n,{cancel:e.cancel,flush:e.flush,isPending:e.isPending}),n}function Cc(e,t={}){let n,r,i=yc,a=yc,o=nn(!1),s=e=>{clearTimeout(e),i(),i=yc},c;return Object.assign(l=>{let u=F(e),d=F(t.maxWait);return n&&s(n),u<=0||d!==void 0&&d<=0?(r&&=(s(r),void 0),o.value=!1,Promise.resolve(l())):(o.value=!0,new Promise((e,f)=>{i=t.rejectOnCancel?f:e,a=e,c=l,d&&!r&&(r=setTimeout(()=>{n&&s(n),r=void 0,o.value=!1,e(c())},d)),n=setTimeout(()=>{r&&s(r),r=void 0,o.value=!1,e(l())},u)}))},{cancel:()=>{n&&=(s(n),void 0),r&&=(s(r),void 0),o.value=!1,a=yc},flush:()=>{if(o.value){n&&=(clearTimeout(n),void 0),r&&=(clearTimeout(r),void 0),o.value=!1;let e=a;i=yc,a=yc,e(c())}},isPending:qt(o)})}function wc(e,t){if(typeof e==`number`)return e+t;let n=e.match(/^-?\d+\.?\d*/)?.[0]||``,r=e.slice(n.length),i=Number.parseFloat(n)+t;return Number.isNaN(i)?e:i+r}function Tc(e){return e.endsWith(`rem`)?Number.parseFloat(e)*16:Number.parseFloat(e)}function Ec(e){return Array.isArray(e)?e:[e]}function Dc(e){let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))}var Oc=/-(\w)/g,kc=Dc(e=>e.replace(Oc,(e,t)=>t?t.toUpperCase():``));function Ac(e){return e||eo()}function jc(e){if(!hc)return e;let t=0,n,r,i=()=>{--t,r&&t<=0&&(r.stop(),n=void 0,r=void 0)};return((...a)=>(t+=1,r||(r=ke(!0),n=r.run(()=>e(...a))),uc(i),n))}function Mc(e,t){if(typeof Symbol<`u`){let n={...e};return Object.defineProperty(n,Symbol.iterator,{enumerable:!1,value(){let e=0;return{next:()=>({value:t[e++],done:e>t.length})}}}),n}return Object.assign([...t],e)}function Nc(e){return Wt(M(e)?new Proxy({},{get(t,n,r){return P(Reflect.get(e.value,n,r))},set(t,n,r){return M(e.value[n])&&!M(r)?e.value[n].value=r:e.value[n]=r,!0},deleteProperty(t,n){return Reflect.deleteProperty(e.value,n)},has(t,n){return Reflect.has(e.value,n)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):e)}function Pc(e){return Nc(Y(e))}function Fc(e,...t){let n=t.flat(),r=n[0];return Pc(()=>Object.fromEntries(typeof r==`function`?Object.entries(dn(e)).filter(([e,t])=>!r(F(t),e)):Object.entries(dn(e)).filter(e=>!n.includes(e[0]))))}function Ic(e,t=1e4){return un((n,r)=>{let i=F(e),a,o=()=>setTimeout(()=>{i=F(e),r()},F(t));return uc(()=>{clearTimeout(a)}),{get(){return n(),i},set(e){i=e,r(),clearTimeout(a),a=o()}}})}function Lc(e,t=200,n={}){return Sc(Cc(t,n),e)}function Rc(e,t){Ac(t)&&Gr(e,t)}function zc(e,t=!0,n){Ac(n)?Hr(e,n):t?e():Fn(e)}function Bc(e,t,n={}){let{immediate:r=!0,immediateCallback:i=!1}=n,a=nn(!1),o;function s(){o&&=(clearTimeout(o),void 0)}function c(){a.value=!1,s()}function l(...n){i&&e(),s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=void 0,e(...n)},F(t))}return r&&(a.value=!0,hc&&l()),uc(c),{isPending:qt(a),start:l,stop:c}}function Vc(e,t,n){return R(e,t,{...n,immediate:!0})}function Hc(e,t,n){return R(e,t,{...n,once:!0})}function Uc(e={}){let{inheritAttrs:t=!0,name:n=`ReusableTemplate`}=e,r=nn(),i=z({name:`${n}.define`,setup(e,{slots:t}){return()=>{r.value=t.default}}}),a=z({inheritAttrs:t,name:`${n}.reuse`,props:e.props,setup(n,{attrs:i,slots:a}){return()=>{if(!r.value)throw Error(`[VueUse] Failed to find the definition of reusable template`);let o=r.value?.call(r,{...e.props==null?Wc(i):n,$slots:a});return t&&o?.length===1?o[0]:o}}});return Mc({define:i,reuse:a},[i,a])}function Wc(e){let t={};for(let n in e)t[kc(n)]=e[n];return t}var Gc=hc?window:void 0;hc&&window.document,hc&&window.navigator,hc&&window.location;function Kc(e){let t=F(e);return t?.$el??t}function qc(...e){let t=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),n=Y(()=>{let t=Ec(F(e[0])).filter(e=>e!=null);return t.every(e=>typeof e!=`string`)?t:void 0});return Vc(()=>[n.value?.map(e=>Kc(e))??[Gc].filter(e=>e!=null),Ec(F(n.value?e[1]:e[0])),Ec(P(n.value?e[2]:e[1])),F(n.value?e[3]:e[2])],([e,n,r,i],a,o)=>{if(!e?.length||!n?.length||!r?.length)return;let s=vc(i)?{...i}:i,c=e.flatMap(e=>n.flatMap(n=>r.map(r=>t(e,n,r,s))));o(()=>{c.forEach(e=>e())})},{flush:`post`})}function Jc(){let e=nn(!1),t=eo();return t&&Hr(()=>{e.value=!0},t),e}function Yc(e){let t=Jc();return Y(()=>(t.value,!!e()))}function Xc(e){return typeof e==`function`?e:typeof e==`string`?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Zc(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]==`object`?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);let{target:i=Gc,eventName:a=`keydown`,passive:o=!1,dedupe:s=!1}=r,c=Xc(t);return qc(i,a,e=>{e.repeat&&F(s)||c(e)&&n(e)},o)}var Qc=Symbol(`vueuse-ssr-width`);function $c(){let e=$n()?mc(Qc,null):null;return typeof e==`number`?e:void 0}function el(e,t={}){let{window:n=Gc,ssrWidth:r=$c()}=t,i=Yc(()=>n&&`matchMedia`in n&&typeof n.matchMedia==`function`),a=nn(typeof r==`number`),o=nn(),s=nn(!1);return L(()=>{if(a.value){a.value=!i.value;let t=F(e).split(`,`);s.value=t.some(e=>{let t=e.includes(`not all`),n=e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),i=e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),a=!!(n||i);return n&&a&&(a=r>=Tc(n[1])),i&&a&&(a=r<=Tc(i[1])),t?!a:a})}else i.value&&(o.value=n.matchMedia(F(e)),s.value=o.value.matches)}),qc(o,`change`,e=>{s.value=e.matches},{passive:!0}),Y(()=>s.value)}var tl={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function nl(e,t={}){function n(t,n){let r=F(e[F(t)]);return n!=null&&(r=wc(r,n)),typeof r==`number`&&(r=`${r}px`),r}let{window:r=Gc,strategy:i=`min-width`,ssrWidth:a=$c()}=t,o=typeof a==`number`,s=o?nn(!1):{value:!0};o&&zc(()=>s.value=!!r);function c(e,t){return!s.value&&o?e===`min`?a>=Tc(t):a<=Tc(t):r?r.matchMedia(`(${e}-width: ${t})`).matches:!1}let l=e=>el(()=>`(min-width: ${n(e)})`,t),u=e=>el(()=>`(max-width: ${n(e)})`,t),d=Object.keys(e).reduce((e,t)=>(Object.defineProperty(e,t,{get:()=>i===`min-width`?l(t):u(t),enumerable:!0,configurable:!0}),e),{});function f(){let t=Object.keys(e).map(e=>[e,d[e],Tc(n(e))]).sort((e,t)=>e[2]-t[2]);return Y(()=>t.filter(([,e])=>e.value).map(([e])=>e))}return Object.assign(d,{greaterOrEqual:l,smallerOrEqual:u,greater(e){return el(()=>`(min-width: ${n(e,.1)})`,t)},smaller(e){return el(()=>`(max-width: ${n(e,-.1)})`,t)},between(e,r){return el(()=>`(min-width: ${n(e)}) and (max-width: ${n(r,-.1)})`,t)},isGreater(e){return c(`min`,n(e,.1))},isGreaterOrEqual(e){return c(`min`,n(e))},isSmaller(e){return c(`max`,n(e,-.1))},isSmallerOrEqual(e){return c(`max`,n(e))},isInBetween(e,t){return c(`min`,n(e))&&c(`max`,n(t,-.1))},current:f,active(){let e=f();return Y(()=>e.value.length===0?``:e.value.at(i===`min-width`?-1:0))}})}function rl(e){return JSON.parse(JSON.stringify(e))}function il(e,t,n={}){let{window:r=Gc,...i}=n,a,o=Yc(()=>r&&`ResizeObserver`in r),s=()=>{a&&=(a.disconnect(),void 0)},c=R(Y(()=>{let t=F(e);return Array.isArray(t)?t.map(e=>Kc(e)):[Kc(t)]}),e=>{if(s(),o.value&&r){a=new ResizeObserver(t);for(let t of e)t&&a.observe(t,i)}},{immediate:!0,flush:`post`}),l=()=>{s(),c()};return uc(l),{isSupported:o,stop:l}}function al(e,t,n,r={}){var i,a;let{clone:o=!1,passive:s=!1,eventName:c,deep:l=!1,defaultValue:u,shouldEmit:d}=r,f=eo(),p=n||f?.emit||(f==null||(i=f.$emit)==null?void 0:i.bind(f))||(f==null||(a=f.proxy)==null||(a=a.$emit)==null?void 0:a.bind(f?.proxy)),m=c;t||=`modelValue`,m||=`update:${t.toString()}`;let h=e=>o?typeof o==`function`?o(e):rl(e):e,g=()=>gc(e[t])?h(e[t]):u,_=e=>{d?d(e)&&p(m,e):p(m,e)};if(s){let n=N(g()),r=!1;return R(()=>e[t],e=>{r||(r=!0,n.value=h(e),Fn(()=>r=!1))}),R(n,n=>{!r&&(n!==e[t]||l)&&_(n)},{deep:l}),n}return Y({get(){return g()},set(e){_(e)}})}function ol(e){return e?e.flatMap(e=>e.type===V?ol(e.children):[e]):[]}var sl=[`INPUT`,`TEXTAREA`];function cl(e,t,n,r={}){if(!t||r.enableIgnoredElement&&sl.includes(t.nodeName))return null;let{arrowKeyOptions:i=`both`,attributeName:a=`[data-reka-collection-item]`,itemsArray:o=[],loop:s=!0,dir:c=`ltr`,preventScroll:l=!0,focus:u=!1}=r,[d,f,p,m,h,g]=[e.key===`ArrowRight`,e.key===`ArrowLeft`,e.key===`ArrowUp`,e.key===`ArrowDown`,e.key===`Home`,e.key===`End`],_=p||m,v=d||f;if(!h&&!g&&(!_&&!v||i===`vertical`&&v||i===`horizontal`&&_))return null;let y=n?Array.from(n.querySelectorAll(a)):o;if(!y.length)return null;l&&e.preventDefault();let b=null;return v||_?b=ll(y,t,{goForward:_?m:c===`ltr`?d:f,loop:s}):h?b=y.at(0)||null:g&&(b=y.at(-1)||null),u&&b?.focus(),b}function ll(e,t,n,r=e.includes(t)?e.length:e.length+1){if(--r===0)return null;let i=e.indexOf(t),a;if(a=i===-1?n.goForward?0:e.length-1:n.goForward?i+1:i-1,!n.loop&&(a<0||a>=e.length))return null;let o=e[(a+e.length)%e.length];return o?o.hasAttribute(`disabled`)&&o.getAttribute(`disabled`)!==`false`?ll(e,o,n,r):o:null}var[ul,dl]=sc(`ConfigProvider`),fl=new WeakMap;function pl(e,t){let n=fl.get(e);n||(n={owners:new Set,original:e.body.style.pointerEvents},fl.set(e,n)),n.owners.add(t),e.body.style.pointerEvents=`none`}function ml(e,t){let n=fl.get(e);n?.owners.delete(t)&&n.owners.size===0&&(fl.delete(e),e.body.style.pointerEvents=n.original)}function hl(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)===`[object Module]`:!0}function gl(e,t,n=`.`,r){if(!hl(t))return gl(e,{},n,r);let i={...t};for(let t of Object.keys(e)){if(t===`__proto__`||t===`constructor`)continue;let a=e[t];a!=null&&(r&&r(i,t,a,n)||(i[t]=Array.isArray(a)&&Array.isArray(i[t])?[...a,...i[t]]:hl(a)&&hl(i[t])?gl(a,i[t],(n?`${n}.`:``)+t.toString(),r):a))}return i}function _l(e){return(...t)=>t.reduce((t,n)=>gl(t,n,``,e),{})}var vl=_l(),yl=Symbol(`useBodyScrollLock`),bl=jc(()=>{let e=N(new Map),t=N(),n=Y(()=>{for(let t of e.value.values())if(t)return!0;return!1}),r=ul({scrollBody:N(!0)}),i=null,a=()=>{document.body.style.paddingRight=``,document.body.style.marginRight=``,ml(document,yl),document.documentElement.style.removeProperty(`--scrollbar-width`),document.body.style.overflow=t.value??``,bc&&i?.(),t.value=void 0};return R(n,(e,o)=>{if(!hc)return;if(!e){o&&a();return}t.value===void 0&&(t.value=document.body.style.overflow);let s=window.innerWidth-document.documentElement.clientWidth,c={padding:s,margin:0},l=r.scrollBody?.value?typeof r.scrollBody.value==`object`?vl({padding:r.scrollBody.value.padding===!0?s:r.scrollBody.value.padding,margin:r.scrollBody.value.margin===!0?s:r.scrollBody.value.margin},c):c:{padding:0,margin:0};s>0&&(document.body.style.paddingRight=typeof l.padding==`number`?`${l.padding}px`:String(l.padding),document.body.style.marginRight=typeof l.margin==`number`?`${l.margin}px`:String(l.margin),document.documentElement.style.setProperty(`--scrollbar-width`,`${s}px`),document.body.style.overflow=`hidden`),bc&&(i=qc(document,`touchmove`,e=>Cl(e),{passive:!1})),Fn(()=>{n.value&&(pl(document,yl),document.body.style.overflow=`hidden`)})},{immediate:!0,flush:`sync`}),e});function xl(e){let t=Math.random().toString(36).substring(2,7),n=bl();n.value.set(t,e??!1);let r=Y({get:()=>n.value.get(t)??!1,set:e=>n.value.set(t,e)});return Rc(()=>{n.value.delete(t)}),r}function Sl(e){let t=window.getComputedStyle(e);if(t.overflowX===`scroll`||t.overflowY===`scroll`||t.overflowX===`auto`&&e.clientWidth<e.scrollWidth||t.overflowY===`auto`&&e.clientHeight<e.scrollHeight)return!0;{let t=e.parentNode;return!(t instanceof Element)||t.tagName===`BODY`?!1:Sl(t)}}function Cl(e){let t=e||window.event,n=t.target;return n instanceof Element&&Sl(n)?!1:t.touches.length>1||(t.preventDefault&&t.cancelable&&t.preventDefault(),!1)}function wl(e){let t=ul({dir:N(`ltr`)});return Y(()=>e?.value||t.dir?.value||`ltr`)}function Tl(e){let t=eo(),n=t?.type.emits,r={};return n?.length||console.warn(`No emitted event found. Please check component: ${t?.type.__name}`),n?.forEach(t=>{r[ae(E(t))]=(...n)=>e(t,...n)}),r}var El=0;function Dl(){L(e=>{if(!hc)return;let t=document.querySelectorAll(`[data-reka-focus-guard]`);document.body.insertAdjacentElement(`afterbegin`,t[0]??Ol()),document.body.insertAdjacentElement(`beforeend`,t[1]??Ol()),El++,e(()=>{El===1&&document.querySelectorAll(`[data-reka-focus-guard]`).forEach(e=>e.remove()),El--})})}function Ol(){let e=document.createElement(`span`);return e.setAttribute(`data-reka-focus-guard`,``),e.tabIndex=0,e.style.outline=`none`,e.style.opacity=`0`,e.style.position=`fixed`,e.style.pointerEvents=`none`,e}function kl(e){return Y(()=>!F(e)||!!Kc(e)?.closest(`form`))}function Z(){let e=eo(),t=N(),n=Y(()=>r());Wr(()=>{n.value!==r()&&on(t)});function r(){return t.value&&`$el`in t.value&&[`#text`,`#comment`].includes(t.value.$el.nodeName)?t.value.$el.nextElementSibling:Kc(t)}let i=Object.assign({},e.exposed),a={};for(let t in e.props)Object.defineProperty(a,t,{enumerable:!0,configurable:!0,get:()=>e.props[t]});if(Object.keys(i).length>0)for(let e in i)Object.defineProperty(a,e,{enumerable:!0,configurable:!0,get:()=>i[e]});Object.defineProperty(a,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=a;function o(n){if(t.value=n,n&&(Object.defineProperty(a,"$el",{enumerable:!0,configurable:!0,get:()=>n instanceof Element?n:n.$el}),!(n instanceof Element)&&!Object.hasOwn(n,`$el`))){let t=n.$.exposed,r=Object.assign({},a);for(let e in t)Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>t[e]});e.exposed=r}}return{forwardRef:o,currentRef:t,currentElement:n}}function Al(e){let t=eo(),n=Object.keys(t?.type.props??{}).reduce((e,n)=>{let r=(t?.type.props[n]).default;return r!==void 0&&(e[n]=r),e},{}),r=mn(e);return Y(()=>{let e={},i=t?.vnode.props??{};return Object.keys(i).forEach(t=>{e[E(t)]=i[t]}),Object.keys({...n,...e}).reduce((e,t)=>(r.value[t]!==void 0&&(e[t]=r.value[t]),e),{})})}function jl(e,t){let n=Al(e),r=t?Tl(t):{};return Y(()=>({...n.value,...r}))}function Ml(){let e=eo()?.vnode?.scopeId;return e?{[e]:``}:{}}function Nl(e,t){let n=Ic(!1,300);uc(()=>{n.value=!1});let r=N(null),i=dc();function a(){r.value=null,n.value=!1}function o(e,t){if(!t)return;let i=e.currentTarget,a={x:e.clientX,y:e.clientY},o=Fl(a,Pl(a,i.getBoundingClientRect()),1),s=Il(t.getBoundingClientRect()),c=Rl([...o,...s]);r.value=c,n.value=!0}return L(n=>{if(e.value&&t.value){let r=e.value,i=t.value,a=e=>o(e,i),s=e=>o(e,r);r.addEventListener(`pointerleave`,a),i.addEventListener(`pointerleave`,s),n(()=>{r.removeEventListener(`pointerleave`,a),i.removeEventListener(`pointerleave`,s)})}}),L(n=>{if(r.value){let o=n=>{if(!r.value||!(n.target instanceof Element))return;let o=n.target,s={x:n.clientX,y:n.clientY},c=e.value?.contains(o)||t.value?.contains(o),l=!Ll(s,r.value),u=!!o.closest(`[data-grace-area-trigger]`);c?a():(l||u)&&(a(),i.trigger())},s=e.value?.ownerDocument;s?.addEventListener(`pointermove`,o),n(()=>s?.removeEventListener(`pointermove`,o))}}),{isPointerInTransit:n,onPointerExit:i.on}}function Pl(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,i,a)){case a:return`left`;case i:return`right`;case n:return`top`;case r:return`bottom`;default:throw Error(`unreachable`)}}function Fl(e,t,n=5){let r=[];switch(t){case`top`:r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case`bottom`:r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case`left`:r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case`right`:r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}function Il(e){let{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function Ll(e,t){let{x:n,y:r}=e,i=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let o=t[e].x,s=t[e].y,c=t[a].x,l=t[a].y;s>r!=l>r&&n<(c-o)*(r-s)/(l-s)+o&&(i=!i)}return i}function Rl(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+(e.y>t.y)),zl(t)}function zl(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t.at(-1),n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n.at(-1),t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Bl=function(e){return typeof document>`u`?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},Vl=new WeakMap,Hl=new WeakMap,Ul={},Wl=0,Gl=function(e){return e&&(e.host||Gl(e.parentNode))},Kl=function(e,t){return t.map(function(t){if(e.contains(t))return t;var n=Gl(t);return n&&e.contains(n)?n:(console.error(`aria-hidden`,t,`in not contained inside`,e,`. Doing nothing`),null)}).filter(function(e){return!!e})},ql=function(e,t,n,r){var i=Kl(t,Array.isArray(e)?e:[e]);Ul[n]||(Ul[n]=new WeakMap);var a=Ul[n],o=[],s=new Set,c=new Set(i),l=function(e){e&&!s.has(e)&&(s.add(e),l(e.parentNode))};i.forEach(l);var u=function(e){e&&!c.has(e)&&Array.prototype.forEach.call(e.children,function(e){if(s.has(e))u(e);else try{var t=e.getAttribute(r),i=t!==null&&t!==`false`,c=(Vl.get(e)||0)+1,l=(a.get(e)||0)+1;Vl.set(e,c),a.set(e,l),o.push(e),c===1&&i&&Hl.set(e,!0),l===1&&e.setAttribute(n,`true`),i||e.setAttribute(r,`true`)}catch(t){console.error(`aria-hidden: cannot operate on `,e,t)}})};return u(t),s.clear(),Wl++,function(){o.forEach(function(e){var t=Vl.get(e)-1,i=a.get(e)-1;Vl.set(e,t),a.set(e,i),t||(Hl.has(e)||e.removeAttribute(r),Hl.delete(e)),i||e.removeAttribute(n)}),Wl--,Wl||(Vl=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,Ul={})}},Jl=function(e,t,n){n===void 0&&(n=`data-aria-hidden`);var r=Array.from(Array.isArray(e)?e:[e]),i=t||Bl(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll(`[aria-live], script`))),ql(r,i,n,`aria-hidden`)):function(){return null}};function Yl(e){let t;R(()=>Kc(e),e=>{let n=!1;try{n=!!e?.closest(`[popover]:not(:popover-open)`)}catch{}e&&!n?t=Jl(e):t&&t()}),Kr(()=>{t&&t()})}function Xl(e,t=`reka`){if(e)return e;let n,r=ul({useId:void 0});return n=r.useId?r.useId():Er?.(),t?`${t}-${n}`:n}function Zl(e){let t=N(),n=Y(()=>t.value?.width??0),r=Y(()=>t.value?.height??0),i;return Hr(()=>{let n=Kc(e);n?(t.value={width:n.offsetWidth,height:n.offsetHeight},i=new ResizeObserver(e=>{if(!Array.isArray(e)||!e.length)return;let r=e[0],i,a;if(`borderBoxSize`in r){let e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,a=t.blockSize}else i=n.offsetWidth,a=n.offsetHeight;t.value={width:i,height:a}}),i.observe(n,{box:`border-box`})):t.value=void 0}),Kr(()=>{i?.disconnect(),i=void 0}),{width:n,height:r}}function Ql(e,t){let n=N(e);function r(e){return t[n.value][e]??n.value}return{state:n,dispatch:e=>{n.value=r(e)}}}function $l(e){let t=Ic(``,1e3);return{search:t,handleTypeaheadSearch:(n,r)=>{if(t.value+=n,e)e(n);else{let e=cc(),n=r.map(e=>({...e,textValue:e.value?.textValue??e.ref.textContent?.trim()??``})),i=n.find(t=>t.ref===e),a=tu(n.map(e=>e.textValue),t.value,i?.textValue),o=n.find(e=>e.textValue===a);return o&&o.ref.focus(),o?.ref}},resetTypeahead:()=>{t.value=``}}}function eu(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function tu(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=eu(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}function nu(e,t){let n=N({}),r=N(`none`),i=N(e),a=e.value?`mounted`:`unmounted`,o,s=t.value?.ownerDocument.defaultView??Gc,{state:c,dispatch:l}=Ql(a,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}}),u=e=>{if(hc){let n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.value?.dispatchEvent(n)}};R(e,async(e,i)=>{let a=i!==e;if(await Fn(),a){let a=r.value,o=ru(t.value);e?(l(`MOUNT`),u(`enter`),o===`none`&&u(`after-enter`)):o===`none`||o===`undefined`||n.value?.display===`none`?(l(`UNMOUNT`),u(`leave`),u(`after-leave`)):i&&a!==o?(l(`ANIMATION_OUT`),u(`leave`)):(l(`UNMOUNT`),u(`after-leave`))}},{immediate:!0});let d=e=>{if(e.target!==t.value)return;let n=ru(t.value),r=n.includes(CSS.escape(e.animationName)),a=c.value===`mounted`?`enter`:`leave`;if(r&&(u(`after-${a}`),l(`ANIMATION_END`),!i.value)){let e=t.value.style.animationFillMode;t.value.style.animationFillMode=`forwards`,o=s?.setTimeout(()=>{t.value?.style.animationFillMode===`forwards`&&(t.value.style.animationFillMode=e)})}n===`none`&&l(`ANIMATION_END`)},f=e=>{e.target===t.value&&(r.value=ru(t.value))},p=R(t,(e,t)=>{e?(n.value=getComputedStyle(e),e.addEventListener(`animationstart`,f),e.addEventListener(`animationcancel`,d),e.addEventListener(`animationend`,d)):(l(`ANIMATION_END`),o!==void 0&&s?.clearTimeout(o),t?.removeEventListener(`animationstart`,f),t?.removeEventListener(`animationcancel`,d),t?.removeEventListener(`animationend`,d))},{immediate:!0}),m=R(c,()=>{let e=ru(t.value);r.value=c.value===`mounted`?e:`none`});return Kr(()=>{p(),m(),t.value&&(t.value.removeEventListener(`animationstart`,f),t.value.removeEventListener(`animationcancel`,d),t.value.removeEventListener(`animationend`,d)),o!==void 0&&s?.clearTimeout(o)}),{isPresent:Y(()=>[`mounted`,`unmountSuspended`].includes(c.value))}}function ru(e){return e&&getComputedStyle(e).animationName||`none`}var iu=z({name:`Presence`,props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(e,{slots:t,expose:n}){let{present:r,forceMount:i}=dn(e),a=N(),{isPresent:o}=nu(r,a);n({present:o});let s=t.default({present:o.value});s=ol(s||[]);let c=eo();if(s&&s?.length>1){let e=c?.parent?.type.name?`<${c.parent.type.name} />`:`component`;throw Error([`Detected an invalid children for \`${e}\` for  \`Presence\` component.`,``,"Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",`You can apply a few solutions:`,["Provide a single child element so that `presence` directive attach correctly.",`Ensure the first child is an actual element instead of a raw text node or comment node.`].map(e=>`  - ${e}`).join(`
`)].join(`
`))}return()=>i.value||r.value||o.value?X(t.default({present:o.value})[0],{ref:e=>{let t=Kc(e);return t?.hasAttribute===void 0||(t?.hasAttribute(`data-reka-popper-content-wrapper`)?a.value=t.firstElementChild:a.value=t),t}}):null}}),au=z({name:`PrimitiveSlot`,inheritAttrs:!1,setup(e,{attrs:t,slots:n}){return()=>{if(!n.default)return null;let e=ol(n.default()),r=e.findIndex(e=>e.type!==ka);if(r===-1)return e;let i=e[r];delete i.props?.ref;let a=i.props?J(t,i.props):t,o=Ua({...i,props:{}},a);return e.length===1?o:(e[r]=o,e)}}}),ou=[`area`,`img`,`input`],su=z({name:`Primitive`,inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:`div`}},setup(e,{attrs:t,slots:n}){let r=e.asChild?`template`:e.as;return typeof r==`string`&&ou.includes(r)?()=>X(r,t):r===`template`?()=>X(au,t,{default:n.default}):()=>X(e.as,t,{default:n.default})}});function cu(){let e=N();return{primitiveElement:e,currentElement:Y(()=>[`#text`,`#comment`].includes(e.value?.$el.nodeName)?e.value?.$el.nextElementSibling:Kc(e))}}var lu=`dismissableLayer.pointerDownOutside`,uu=`dismissableLayer.focusOutside`;function du(e){if(typeof e!=`object`||!e)return!1;let t=e.ownerDocument?.defaultView;return typeof Element<`u`&&e instanceof Element||!!t&&e instanceof t.Element}function fu(e,t){if(!du(t))return!1;if(e.contains(t))return!0;let n=t.closest(`[data-dismissable-layer]`),r=e.dataset.dismissableLayer===``?e:e.querySelector(`[data-dismissable-layer]`),i=Array.from(e.ownerDocument.querySelectorAll(`[data-dismissable-layer]`));return!!(n&&(r===n||i.indexOf(r)<i.indexOf(n)))}function pu(e,t,n=!0){let r=N(!1),i=N(()=>{});return L(a=>{if(!hc||!F(n))return;let o=t?.value?.ownerDocument??globalThis.document,s=async n=>{let a=n.target;if(t?.value&&a){if(fu(t.value,a))o.removeEventListener(`click`,i.value),r.value=!1;else{if(n.target&&!r.value){let t={originalEvent:n};function r(){lc(lu,e,t)}n.pointerType===`touch`?(o.removeEventListener(`click`,i.value),i.value=r,o.addEventListener(`click`,i.value,{once:!0})):r()}else o.removeEventListener(`click`,i.value);r.value=!1}}},c=window.setTimeout(()=>{o.addEventListener(`pointerdown`,s)},0);a(()=>{window.clearTimeout(c),o.removeEventListener(`pointerdown`,s),o.removeEventListener(`click`,i.value)})}),{onPointerDownCapture:()=>{F(n)&&(r.value=!0)}}}function mu(e,t,n=!0){let r=N(!1);return L(i=>{if(!hc||!F(n))return;let a=t?.value?.ownerDocument??globalThis.document,o=async n=>{if(!t?.value)return;await Fn(),await Fn();let i=n.target;t.value&&i&&!fu(t.value,i)&&n.target&&!r.value&&lc(uu,e,{originalEvent:n})};a.addEventListener(`focusin`,o),i(()=>a.removeEventListener(`focusin`,o))}),{onFocusCapture:()=>{F(n)&&(r.value=!0)},onBlurCapture:()=>{F(n)&&(r.value=!1)}}}var hu=Wt({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),gu=z({__name:`DismissableLayer`,props:{disableOutsidePointerEvents:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},present:{type:Boolean,required:!1,default:!0}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`,`dismiss`],setup(e,{emit:t}){let n=e,r=t,{forwardRef:i,currentElement:a}=Z(),o=Y(()=>a.value?.ownerDocument??globalThis.document),s=Y(()=>hu.layersRoot),c=Y(()=>a.value?Array.from(s.value).indexOf(a.value):-1),l=Y(()=>hu.layersWithOutsidePointerEventsDisabled.size>0),u=Y(()=>{let e=Array.from(s.value),[t]=[...hu.layersWithOutsidePointerEventsDisabled].slice(-1),n=e.indexOf(t);return c.value>=n}),d=pu(async e=>{let t=[...hu.branches].some(t=>t?.contains(e.target));n.present&&u.value&&!t&&(r(`pointerDownOutside`,e),r(`interactOutside`,e),await Fn(),e.defaultPrevented||r(`dismiss`))},a,()=>n.present),f=mu(e=>{let t=[...hu.branches].some(t=>t?.contains(e.target));n.present&&!t&&(r(`focusOutside`,e),r(`interactOutside`,e),e.defaultPrevented||r(`dismiss`))},a);return Zc(`Escape`,e=>{n.present&&c.value===s.value.size-1&&(r(`escapeKeyDown`,e),e.defaultPrevented||r(`dismiss`))},{target:()=>o.value?.defaultView??globalThis.window}),R([a,()=>n.disableOutsidePointerEvents,()=>n.present],([e,t,n],r,i)=>{if(e&&n&&t){let t=e.ownerDocument;pl(t,e),hu.layersWithOutsidePointerEventsDisabled.add(e),i(()=>{hu.layersWithOutsidePointerEventsDisabled.delete(e),ml(t,e)})}},{immediate:!0}),R([a,()=>n.present],([e,t],n,r)=>{e&&t&&(s.value.add(e),r(()=>{s.value.delete(e)}))},{immediate:!0}),L(e=>{e(()=>{a.value&&(s.value.delete(a.value),hu.layersWithOutsidePointerEventsDisabled.delete(a.value))})}),(t,n)=>(H(),W(P(su),{ref:P(i),"as-child":e.asChild,as:e.as,"data-dismissable-layer":``,style:O({pointerEvents:l.value?u.value?`auto`:`none`:void 0}),onFocusCapture:P(f).onFocusCapture,onBlurCapture:P(f).onBlurCapture,onPointerdownCapture:P(d).onPointerDownCapture},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`as-child`,`as`,`style`,`onFocusCapture`,`onBlurCapture`,`onPointerdownCapture`]))}}),_u=fc(()=>N([]));function vu(){let e=_u();return{add(t){let n=e.value[0];t!==n&&n?.pause(),e.value=yu(e.value,t),e.value.unshift(t)},remove(t){e.value=yu(e.value,t),e.value[0]?.resume()}}}function yu(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}var bu=`focusScope.autoFocusOnMount`,xu=`focusScope.autoFocusOnUnmount`,Su={bubbles:!1,cancelable:!0};function Cu(e,t){let n=t;for(;n;){if(e.contains(n))return!0;n=n.getRootNode().host??null}return!1}function wu(e,{select:t=!1}={}){let n=cc();for(let r of e)if(Au(r,{select:t}),cc()!==n)return!0}function Tu(e){let t=Eu(e);return[Du(t,e),Du(t.reverse(),e)]}function Eu(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t.sort((e,t)=>e.tabIndex===t.tabIndex?0:e.tabIndex===0?1:t.tabIndex===0?-1:e.tabIndex-t.tabIndex)}function Du(e,t){for(let n of e)if(!Ou(n,{upTo:t}))return n}function Ou(e,{upTo:t}){if(getComputedStyle(e).visibility===`hidden`)return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display===`none`)return!0;e=e.parentElement}return!1}function ku(e){return e instanceof HTMLInputElement&&`select`in e}function Au(e,{select:t=!1}={}){if(e&&e.focus){let n=cc();e.focus({preventScroll:!0}),e!==n&&ku(e)&&t&&e.select()}}var ju=z({__name:`FocusScope`,props:{loop:{type:Boolean,required:!1,default:!1},trapped:{type:Boolean,required:!1,default:!1},present:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`mountAutoFocus`,`unmountAutoFocus`],setup(e,{emit:t}){let n=e,r=t,{currentRef:i,currentElement:a}=Z(),o=N(null),s=vu(),c=Wt({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});L(e=>{if(!hc)return;let t=a.value;if(!n.trapped)return;let r=t?.ownerDocument??document,i=t?t.getRootNode():r;function s(e){if(c.paused||!t)return;let n=e.target;t.contains(n)?o.value=n:Au(o.value,{select:!0})}function l(e){if(c.paused||!t)return;let n=e.relatedTarget;n!==null&&(t.contains(n)||Au(o.value,{select:!0}))}function u(e){let n=o.value;if(n===null||!e.some(e=>e.removedNodes.length>0))return;let r=cc();r&&t.contains(r)||t.contains(n)||Au(t)}function d(e){if(c.paused||!t)return;let n=e.composedPath()[0];Cu(t,n)||Au(o.value,{select:!0})}i.addEventListener(`focusin`,s),i.addEventListener(`focusout`,l),i!==r&&r.addEventListener(`focusin`,d);let f=new MutationObserver(u);t&&f.observe(t,{childList:!0,subtree:!0}),e(()=>{i.removeEventListener(`focusin`,s),i.removeEventListener(`focusout`,l),i!==r&&r.removeEventListener(`focusin`,d),f.disconnect()})});function l(e,t){let n=new CustomEvent(bu,Su),i=e=>r(`mountAutoFocus`,e);e.addEventListener(bu,i),e.dispatchEvent(n),e.removeEventListener(bu,i),n.defaultPrevented||(wu(Eu(e),{select:!0}),cc()===t&&Au(e))}L(async e=>{let t=a.value;if(await Fn(),!t)return;n.present!==!1&&s.add(c);let i=cc();!t.contains(i)&&n.present!==!1&&l(t,i),e(()=>{let e=new CustomEvent(xu,Su),n=e=>{r(`unmountAutoFocus`,e)};t.addEventListener(xu,n),t.dispatchEvent(e),t.setAttribute(`data-focus-scope-unmounting`,``),setTimeout(()=>{e.defaultPrevented||Au(i??document.body,{select:!0}),t.removeEventListener(xu,n),s.remove(c),t.removeAttribute(`data-focus-scope-unmounting`)},0)})}),R(()=>n.present,async(e,t)=>{if(!hc)return;if(e===!1&&t===!0){s.remove(c);return}if(e!==!0||t!==!1)return;s.add(c),await Fn();let n=a.value;if(!n)return;let r=cc();n.contains(r)||l(n,r)});function u(e){if(!n.loop&&!n.trapped||c.paused)return;let t=e.key===`Tab`&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=cc();if(t&&r){let t=e.currentTarget,[i,a]=Tu(t);i&&a?!e.shiftKey&&r===a?(e.preventDefault(),n.loop&&Au(i,{select:!0})):e.shiftKey&&r===i&&(e.preventDefault(),n.loop&&Au(a,{select:!0})):r===t&&e.preventDefault()}}return(t,n)=>(H(),W(P(su),{ref_key:`currentRef`,ref:i,tabindex:`-1`,"as-child":e.asChild,as:e.as,onKeydown:u},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`as-child`,`as`]))}}),Mu=`menu.itemSelect`,Nu=[`Enter`,` `],Pu=[`ArrowDown`,`PageUp`,`Home`],Fu=[`ArrowUp`,`PageDown`,`End`],Iu=[...Pu,...Fu],Lu={ltr:[...Nu,`ArrowRight`],rtl:[...Nu,`ArrowLeft`]},Ru={ltr:[`ArrowLeft`],rtl:[`ArrowRight`]};function zu(e){return e?`open`:`closed`}function Bu(e){let{onEntryFocus:t,onEntryFocusOnce:n,...r}=e;return r}function Vu(e){let t=cc();for(let n of e)if(n===t||(n.focus(),cc()!==t))return}function Hu(e,t){let{x:n,y:r}=e,i=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let o=t[e].x,s=t[e].y,c=t[a].x,l=t[a].y;s>r!=l>r&&n<(c-o)*(r-s)/(l-s)+o&&(i=!i)}return i}function Uu(e,t){return t?Hu({x:e.clientX,y:e.clientY},t):!1}function Wu(e){return e.pointerType===`mouse`}var Gu=z({__name:`Teleport`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let t=e,n=ul({}),r=Y(()=>t.to??n.teleportTo?.value??`body`),i=Jc();return(t,n)=>P(i)||e.forceMount?(H(),W(vr,{key:0,to:r.value,disabled:e.disabled,defer:e.defer},[B(t.$slots,`default`)],8,[`to`,`disabled`,`defer`])):q(`v-if`,!0)}}),Ku=`data-reka-collection-item`;function qu(e={}){let{key:t=``,isProvider:n=!1}=e,r=`${t}CollectionProvider`,i;n?(i={collectionRef:N(),itemMap:N(new Map)},Zn(r,i)):i=Qn(r);let a=(e,t=!1)=>{if(!i.collectionRef.value)return;let n=i.itemMap.value.get(e);return n&&(t||n.ref.dataset.disabled!==``)?n:void 0},o=(e=!1)=>{let t=i.collectionRef.value;if(!t)return[];let n=Array.from(t.querySelectorAll(`[${Ku}]`)),r=new Map(n.map((e,t)=>[e,t])),a=Array.from(i.itemMap.value.values()).sort((e,t)=>(r.get(e.ref)??-1)-(r.get(t.ref)??-1));return e?a:a.filter(e=>e.ref.dataset.disabled!==``)},s=z({name:`CollectionSlot`,inheritAttrs:!1,setup(e,{slots:t,attrs:n}){let{primitiveElement:r,currentElement:a}=cu();return R(a,()=>{i.collectionRef.value=a.value}),()=>X(au,{ref:r,...n},t)}}),c=z({name:`CollectionItem`,inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(e,{slots:t,attrs:n}){let{primitiveElement:r,currentElement:a}=cu();return L(t=>{if(a.value){let n=$t(a.value);i.itemMap.value.set(n,{ref:a.value,value:e.value}),t(()=>i.itemMap.value.delete(n))}}),()=>X(au,{...n,[Ku]:``,ref:r},t)}});return{getItems:o,getItem:a,reactiveItems:Y(()=>Array.from(i.itemMap.value.values())),itemMapSize:Y(()=>i.itemMap.value.size),CollectionSlot:s,CollectionItem:c}}var Ju=z({__name:`VisuallyHidden`,props:{feature:{type:String,required:!1,default:`focusable`},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){return(t,n)=>(H(),W(P(su),{as:e.as,"as-child":e.asChild,"aria-hidden":e.feature===`fully-hidden`?`true`:void 0,"data-hidden":e.feature===`fully-hidden`?``:void 0,tabindex:e.feature===`fully-hidden`?`-1`:void 0,style:{position:`absolute`,border:0,width:`1px`,height:`1px`,padding:0,margin:`-1px`,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`,wordWrap:`normal`,top:`-1px`,left:`-1px`}},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`as`,`as-child`,`aria-hidden`,`data-hidden`,`tabindex`]))}}),Yu=z({inheritAttrs:!1,__name:`VisuallyHiddenInputBubble`,props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:`fully-hidden`}},setup(e){let t=e,{primitiveElement:n,currentElement:r}=cu();return R(Y(()=>t.checked??t.value),(e,t)=>{if(!r.value)return;let n=r.value,i=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(i,`value`).set;if(a&&e!==t){let t=new Event(`input`,{bubbles:!0}),r=new Event(`change`,{bubbles:!0});a.call(n,e),n.dispatchEvent(t),n.dispatchEvent(r)}}),(e,r)=>(H(),W(Ju,J({ref_key:`primitiveElement`,ref:n},{...t,...e.$attrs},{as:`input`}),null,16))}}),Xu=z({inheritAttrs:!1,__name:`VisuallyHiddenInput`,props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:`fully-hidden`}},setup(e){let t=e,n=Y(()=>typeof t.value==`object`&&Array.isArray(t.value)&&t.value.length===0&&t.required),r=Y(()=>typeof t.value==`string`||typeof t.value==`number`||typeof t.value==`boolean`||t.value===null||t.value===void 0?[{name:t.name,value:t.value}]:typeof t.value==`object`&&Array.isArray(t.value)?t.value.flatMap((e,n)=>typeof e==`object`?Object.entries(e).map(([e,r])=>({name:`${t.name}[${n}][${e}]`,value:r})):{name:`${t.name}[${n}]`,value:e}):t.value!==null&&typeof t.value==`object`&&!Array.isArray(t.value)?Object.entries(t.value).map(([e,n])=>({name:`${t.name}[${e}]`,value:n})):[]);return(i,a)=>(H(),U(V,null,[q(` We render single input if it's required `),n.value?(H(),W(Yu,J({key:e.name},{...t,...i.$attrs},{name:e.name,value:e.value}),null,16,[`name`,`value`])):(H(!0),U(V,{key:1},ri(r.value,e=>(H(),W(Yu,J({key:e.name},{ref_for:!0},{...t,...i.$attrs},{name:e.name,value:e.value}),null,16,[`name`,`value`]))),128))],2112))}}),Zu=`rovingFocusGroup.onEntryFocus`,Qu={bubbles:!1,cancelable:!0},$u={ArrowLeft:`prev`,ArrowUp:`prev`,ArrowRight:`next`,ArrowDown:`next`,PageUp:`first`,Home:`first`,PageDown:`last`,End:`last`};function ed(e,t){return t===`rtl`?e===`ArrowLeft`?`ArrowRight`:e===`ArrowRight`?`ArrowLeft`:e:e}function td(e,t,n){let r=ed(e.key,n);if(!(t===`vertical`&&[`ArrowLeft`,`ArrowRight`].includes(r))&&!(t===`horizontal`&&[`ArrowUp`,`ArrowDown`].includes(r)))return $u[r]}function nd(e,t=!1){let n=cc();for(let r of e)if(r===n||(r.focus({preventScroll:t}),cc()!==n))return}var[rd,id]=sc(`PopperRoot`),ad=z({inheritAttrs:!1,__name:`PopperRoot`,setup(e){let t=N();return id({anchor:t,onAnchorChange:e=>t.value=e}),(e,t)=>B(e.$slots,`default`)}}),od=z({__name:`PopperAnchor`,props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e,{forwardRef:n,currentElement:r}=Z(),i=rd();return nr(()=>{i.onAnchorChange(t.reference??r.value)}),(t,r)=>(H(),W(P(su),{ref:P(n),as:e.as,"as-child":e.asChild},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`as`,`as-child`]))}}),sd={key:0,d:`M0 0L6 6L12 0`},cd={key:1,d:`M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0`},ld=z({__name:`Arrow`,props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`svg`}},setup(e){let t=e;return Z(),(n,r)=>(H(),W(P(su),J(t,{width:e.width,height:e.height,viewBox:e.asChild?void 0:`0 0 12 6`,preserveAspectRatio:e.asChild?void 0:`none`}),{default:I(()=>[B(n.$slots,`default`,{},()=>[e.rounded?(H(),U(`path`,cd)):(H(),U(`path`,sd))])]),_:3},16,[`width`,`height`,`viewBox`,`preserveAspectRatio`]))}});function ud(e){return e!==null}function dd(e){return{name:`transformOrigin`,options:e,fn(t){let{placement:n,rects:r,middlewareData:i}=t,a=i.arrow?.centerOffset!==0,o=a?0:e.arrowWidth,s=a?0:e.arrowHeight,[c,l]=fd(n),u={start:e.dir===`rtl`?`100%`:`0%`,center:`50%`,end:e.dir===`rtl`?`0%`:`100%`}[l],d={start:`0%`,center:`50%`,end:`100%`}[l],f=(i.arrow?.x??0)+o/2,p=(i.arrow?.y??0)+s/2,m=``,h=``;return c===`bottom`?(m=a?u:`${f}px`,h=`${-s}px`):c===`top`?(m=a?u:`${f}px`,h=`${r.floating.height+s}px`):c===`right`?(m=`${-s}px`,h=a?d:`${p}px`):c===`left`&&(m=`${r.floating.width+s}px`,h=a?d:`${p}px`),{data:{x:m,y:h}}}}}function fd(e){let[t,n=`center`]=e.split(`-`);return[t,n]}var pd=[`top`,`right`,`bottom`,`left`],md=Math.min,hd=Math.max,gd=Math.round,_d=Math.floor,vd=e=>({x:e,y:e}),yd={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function bd(e,t,n){return hd(e,md(t,n))}function xd(e,t){return typeof e==`function`?e(t):e}function Sd(e){return e.split(`-`)[0]}function Cd(e){return e.split(`-`)[1]}function wd(e){return e===`x`?`y`:`x`}function Td(e){return e===`y`?`height`:`width`}function Ed(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Dd(e){return wd(Ed(e))}function Od(e,t,n){n===void 0&&(n=!1);let r=Cd(e),i=Dd(e),a=Td(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Ld(o)),[o,Ld(o)]}function kd(e){let t=Ld(e);return[Ad(e),t,Ad(t)]}function Ad(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var jd=[`left`,`right`],Md=[`right`,`left`],Nd=[`top`,`bottom`],Pd=[`bottom`,`top`];function Fd(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Md:jd:t?jd:Md;case`left`:case`right`:return t?Nd:Pd;default:return[]}}function Id(e,t,n,r){let i=Cd(e),a=Fd(Sd(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Ad)))),a}function Ld(e){let t=Sd(e);return yd[t]+e.slice(t.length)}function Rd(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function zd(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Rd(e)}function Bd(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Vd(e,t,n){let{reference:r,floating:i}=e,a=Ed(t),o=Dd(t),s=Td(o),c=Sd(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Cd(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Hd(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=xd(t,e),p=zd(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Bd(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Bd(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Ud=50,Wd=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Hd},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Vd(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Ud&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Vd(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Gd=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=xd(e,t)||{};if(l==null)return{};let d=zd(u),f={x:n,y:r},p=Dd(i),m=Td(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;C&&await(o.isElement==null?void 0:o.isElement(S))||(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,ee=md(d[_],T),te=md(d[v],T),E=C-h[m]-te,ne=C/2-h[m]/2+w,re=bd(ee,ne,E),ie=!c.arrow&&Cd(i)!=null&&ne!==re&&a.reference[m]/2-(ne<ee?ee:te)-h[m]/2<0,ae=ie?ne<ee?ne-ee:ne-E:0;return{[p]:f[p]+ae,data:{[p]:re,centerOffset:ne-re-ae,...ie&&{alignmentOffset:ae}},reset:ie}}}),Kd=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=xd(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Sd(r),_=Ed(o),v=Sd(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Ld(o)]:kd(o)),x=p!==`none`;!d&&x&&b.push(...Id(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Od(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Ed(t)||T.every(e=>Ed(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Ed(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}};function qd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Jd(e){return pd.some(t=>e[t]>=0)}var Yd=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n,platform:r}=t,{strategy:i=`referenceHidden`,...a}=xd(e,t);switch(i){case`referenceHidden`:{let e=qd(await r.detectOverflow(t,{...a,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:Jd(e)}}}case`escaped`:{let e=qd(await r.detectOverflow(t,{...a,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:Jd(e)}}}default:return{}}}}},Xd=new Set([`left`,`top`]);async function Zd(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Sd(n),s=Cd(n),c=Ed(n)===`y`,l=Xd.has(o)?-1:1,u=a&&c?-1:1,d=xd(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Qd=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Zd(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},$d=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=xd(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Ed(i),p=wd(f),m=u[p],h=u[f],g=(e,t)=>bd(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},ef=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=xd(e,t),u={x:n,y:r},d=Ed(i),f=wd(d),p=u[f],m=u[d],h=xd(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=Xd.has(Sd(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},tf=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=xd(e,t),c=await i.detectOverflow(t,s),l=Sd(n),u=Cd(n),d=Ed(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=md(p-c[m],g),y=md(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*hd(c.left,c.right):S=p-2*hd(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function nf(){return typeof window<`u`}function rf(e){return sf(e)?(e.nodeName||``).toLowerCase():`#document`}function af(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function of(e){return((sf(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function sf(e){return nf()?e instanceof Node||e instanceof af(e).Node:!1}function cf(e){return nf()?e instanceof Element||e instanceof af(e).Element:!1}function lf(e){return nf()?e instanceof HTMLElement||e instanceof af(e).HTMLElement:!1}function uf(e){return!nf()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof af(e).ShadowRoot}function df(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Sf(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function ff(e){return/^(table|td|th)$/.test(rf(e))}function pf(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var mf=/transform|translate|scale|rotate|perspective|filter/,hf=/paint|layout|strict|content/,gf=e=>!!e&&e!==`none`,_f;function vf(e){let t=cf(e)?Sf(e):e;return gf(t.transform)||gf(t.translate)||gf(t.scale)||gf(t.rotate)||gf(t.perspective)||!bf()&&(gf(t.backdropFilter)||gf(t.filter))||mf.test(t.willChange||``)||hf.test(t.contain||``)}function yf(e){let t=wf(e);for(;lf(t)&&!xf(t);){if(vf(t))return t;if(pf(t))return null;t=wf(t)}return null}function bf(){return _f??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),_f}function xf(e){return/^(html|body|#document)$/.test(rf(e))}function Sf(e){return af(e).getComputedStyle(e)}function Cf(e){return cf(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function wf(e){if(rf(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||uf(e)&&e.host||of(e);return uf(t)?t.host:t}function Tf(e){let t=wf(e);return xf(t)?(e.ownerDocument||e).body:lf(t)&&df(t)?t:Tf(t)}function Ef(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Tf(e),i=r===e.ownerDocument?.body,a=af(r);if(i){let e=Df(a);return t.concat(a,a.visualViewport||[],df(r)?r:[],e&&n?Ef(e):[])}return t.concat(r,Ef(r,[],n))}function Df(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Of(e){let t=Sf(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=lf(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=gd(n)!==a||gd(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function kf(e){return cf(e)?e:e.contextElement}function Af(e){let t=kf(e);if(!lf(t))return vd(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Of(t),o=(a?gd(n.width):n.width)/r,s=(a?gd(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var jf=vd(0);function Mf(e){let t=af(e);return!bf()||!t.visualViewport?jf:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Nf(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===af(e)}function Pf(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=kf(e),o=vd(1);t&&(r?cf(r)&&(o=Af(r)):o=Af(e));let s=Nf(a,n,r)?Mf(a):vd(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=af(a),t=cf(r)?af(r):r,n=e,i=Df(n);for(;i&&t!==n;){let e=Af(i),t=i.getBoundingClientRect(),r=Sf(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=af(i),i=Df(n)}}return Bd({width:u,height:d,x:c,y:l})}function Ff(e,t){let n=Cf(e).scrollLeft;return t?t.left+n:Pf(of(e)).left+n}function If(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Ff(e,n),y:n.top+t.scrollTop}}function Lf(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=of(r),s=t?pf(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=vd(1),u=vd(0),d=lf(r);if((d||!a)&&((rf(r)!==`body`||df(o))&&(c=Cf(r)),d)){let e=Pf(r);l=Af(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?If(o,c):vd(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Rf(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function zf(e){let t=Cf(e),n=e.ownerDocument.body,r=hd(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=hd(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Ff(e),o=-t.scrollTop;return Sf(n).direction===`rtl`&&(a+=hd(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var Bf=25;function Vf(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=af(e),a=of(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!bf()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Ff(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Bf&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Hf(e,t){let n=Pf(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Af(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Uf(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Vf(e,n,t);else if(t===`document`)r=zf(of(e));else if(cf(t))r=Hf(t,n);else{let n=Mf(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Bd(r)}function Wf(e,t){let n=t.get(e);if(n)return n;let r=Ef(e,[],!1).filter(e=>cf(e)&&rf(e)!==`body`),i=null,a=Sf(e).position===`fixed`,o=a?wf(e):e;for(;cf(o)&&!xf(o);){let e=Sf(o),t=vf(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=wf(o)}return t.set(e,r),r}function Gf(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?pf(t)?[]:Wf(t,this._c):[].concat(n),r],o=Uf(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Uf(t,a[e],i);s=hd(n.top,s),c=md(n.right,c),l=md(n.bottom,l),u=hd(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Kf(e){let{width:t,height:n}=Of(e);return{width:t,height:n}}function qf(e,t,n){let r=lf(t),i=of(t),a=n===`fixed`,o=Pf(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=vd(0);if((r||!a)&&((rf(t)!==`body`||df(i))&&(s=Cf(t)),r)){let e=Pf(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Ff(i));let l=i&&!r&&!a?If(i,s):vd(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function Jf(e){return Sf(e).position===`static`}function Yf(e,t){if(!lf(e)||Sf(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return of(e)===n&&(n=n.ownerDocument.body),n}function Xf(e,t){let n=af(e);if(pf(e))return n;if(!lf(e)){let t=wf(e);for(;t&&!xf(t);){if(cf(t)&&!Jf(t))return t;t=wf(t)}return n}let r=Yf(e,t);for(;r&&ff(r)&&Jf(r);)r=Yf(r,t);return r&&xf(r)&&Jf(r)&&!vf(r)?n:r||yf(e)||n}var Zf=async function(e){let t=this.getOffsetParent||Xf,n=this.getDimensions,r=await n(e.floating);return{reference:qf(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Qf(e){return Sf(e).direction===`rtl`}var $f={convertOffsetParentRelativeRectToViewportRelativeRect:Lf,getDocumentElement:of,getClippingRect:Gf,getOffsetParent:Xf,getElementRects:Zf,getClientRects:Rf,getDimensions:Kf,getScale:Af,isElement:cf,isRTL:Qf};function ep(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function tp(e,t,n){let r=null,i,a=of(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=_d(d),h=_d(a.clientWidth-(u+f)),g=_d(a.clientHeight-(d+p)),_=_d(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:hd(0,md(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!ep(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=af(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function np(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=kf(e),u=i||a?[...l?Ef(l):[],...t?Ef(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?tp(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Pf(e):null;c&&g();function g(){let t=Pf(e);h&&!ep(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var rp=Qd,ip=$d,ap=Kd,op=tf,sp=Yd,cp=Gd,lp=ef,up=(e,t,n)=>{let r=new Map,i=n??{},a={...$f,...i.platform,_c:r};return Wd(e,t,{...i,platform:a})};function dp(e){return typeof e==`object`&&!!e&&`$el`in e}function fp(e){if(dp(e)){let t=e.$el;return sf(t)&&rf(t)===`#comment`?null:t}return e}function pp(e){return{name:`arrow`,options:e,fn(t){let n=fp(F(e.element));return n==null?{}:cp({element:n,padding:e.padding}).fn(t)}}}function mp(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function hp(e,t){let n=mp(e);return Math.round(t*n)/n}function gp(e,t,n){n===void 0&&(n={});let r=n.whileElementsMounted,i=Y(()=>F(n.open)??!0),a=Y(()=>F(n.middleware)),o=Y(()=>F(n.placement)??`bottom`),s=Y(()=>F(n.strategy)??`absolute`),c=Y(()=>F(n.transform)??!0),l=Y(()=>fp(e.value)),u=Y(()=>fp(t.value)),d=N(0),f=N(0),p=N(s.value),m=N(o.value),h=nn({}),g=N(!1),_=Y(()=>{let e={position:p.value,left:`0`,top:`0`};if(!u.value)return e;let t=hp(u.value,d.value),n=hp(u.value,f.value);return c.value?{...e,transform:`translate(`+t+`px, `+n+`px)`,...mp(u.value)>=1.5&&{willChange:`transform`}}:{position:p.value,left:t+`px`,top:n+`px`}}),v;function y(){if(l.value==null||u.value==null)return;let e=i.value;up(l.value,u.value,{middleware:a.value,placement:o.value,strategy:s.value}).then(t=>{d.value=t.x,f.value=t.y,p.value=t.strategy,m.value=t.placement,h.value=t.middlewareData,g.value=e!==!1})}function b(){typeof v==`function`&&(v(),v=void 0)}function x(){b(),r===void 0?y():l.value!=null&&u.value!=null&&(v=r(l.value,u.value,y))}function S(){i.value||(g.value=!1)}return R([a,o,s,i],y,{flush:`sync`}),R([l,u],x,{flush:`sync`}),R(i,S,{flush:`sync`}),Ae()&&je(b),{x:qt(d),y:qt(f),strategy:qt(p),placement:qt(m),middlewareData:qt(h),isPositioned:qt(g),floatingStyles:_,update:y}}var _p=[`dir`],vp={side:`bottom`,sideOffset:0,sideFlip:!0,align:`center`,alignOffset:0,alignFlip:!0,arrowPadding:0,hideShiftedArrow:!0,avoidCollisions:!0,collisionBoundary:()=>[],collisionPadding:0,sticky:`partial`,hideWhenDetached:!1,positionStrategy:`fixed`,updatePositionStrategy:`optimized`,prioritizePosition:!1},[yp,bp]=sc(`PopperContent`),xp=z({inheritAttrs:!1,__name:`PopperContent`,props:hi({memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},dir:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},{...vp}),emits:[`placed`],setup(e,{emit:t}){let n=e,r=t,i=rd(),{forwardRef:a,currentElement:o}=Z(),s=wl(Y(()=>n.dir)),c=N(),l=N(),{width:u,height:d}=Zl(l),f=Y(()=>n.side+(n.align===`center`?``:`-${n.align}`)),p=Y(()=>typeof n.collisionPadding==`number`?n.collisionPadding:{top:0,right:0,bottom:0,left:0,...n.collisionPadding}),m=Y(()=>Array.isArray(n.collisionBoundary)?n.collisionBoundary:[n.collisionBoundary]),h=Y(()=>({padding:p.value,boundary:m.value.filter(ud),altBoundary:m.value.length>0})),g=Y(()=>({mainAxis:n.sideFlip,crossAxis:n.alignFlip})),_=Y(()=>[rp({mainAxis:n.sideOffset+d.value,alignmentAxis:n.alignOffset}),n.prioritizePosition&&n.avoidCollisions&&ap({...h.value,...g.value}),n.avoidCollisions&&ip({mainAxis:!0,crossAxis:!!n.prioritizePosition,limiter:n.sticky===`partial`?lp():void 0,...h.value}),!n.prioritizePosition&&n.avoidCollisions&&ap({...h.value,...g.value}),op({...h.value,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:i,height:a}=t.reference,o=e.floating.style;o.setProperty(`--reka-popper-available-width`,`${n}px`),o.setProperty(`--reka-popper-available-height`,`${r}px`),o.setProperty(`--reka-popper-anchor-width`,`${i}px`),o.setProperty(`--reka-popper-anchor-height`,`${a}px`)}}),l.value&&pp({element:l.value,padding:n.arrowPadding}),dd({arrowWidth:u.value,arrowHeight:d.value,dir:s.value}),n.hideWhenDetached&&sp({strategy:`referenceHidden`,...h.value})]),{floatingStyles:v,placement:y,isPositioned:b,middlewareData:x,update:S}=gp(Y(()=>n.reference??i.anchor.value),c,{strategy:n.positionStrategy,placement:f,whileElementsMounted:(...e)=>np(...e,{layoutShift:!n.disableUpdateOnLayoutShift,animationFrame:n.updatePositionStrategy===`always`}),middleware:_}),C=Y(()=>fd(y.value)[0]),w=Y(()=>fd(y.value)[1]);nr(()=>{b.value&&r(`placed`)});let T=Y(()=>{let e=x.value.arrow?.centerOffset!==0;return n.hideShiftedArrow&&e}),ee=N(``);return L(()=>{o.value&&(ee.value=window.getComputedStyle(o.value).zIndex)}),bp({placedSide:C,onArrowChange:e=>l.value=e,arrowX:Y(()=>x.value.arrow?.x??0),arrowY:Y(()=>x.value.arrow?.y??0),shouldHideArrow:T}),(e,t)=>(H(),U(`div`,{ref_key:`floatingRef`,ref:c,"data-reka-popper-content-wrapper":``,dir:P(s),style:O({...P(v),transform:P(b)?P(v).transform:`translate(0, -200%)`,minWidth:`max-content`,zIndex:ee.value,"--reka-popper-transform-origin":[P(x).transformOrigin?.x,P(x).transformOrigin?.y].join(` `),...P(x).hide?.referenceHidden&&{visibility:`hidden`,pointerEvents:`none`}})},[n.memoDependencies?vo([n.asChild,n.as,C.value,w.value,P(b),...Object.values(e.$attrs),...n.memoDependencies],()=>(H(),W(P(su),J({key:0,ref:P(a)},e.$attrs,{"as-child":n.asChild,as:n.as,"data-side":C.value,"data-align":w.value,style:{animation:P(b)?void 0:`none`}}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`as-child`,`as`,`data-side`,`data-align`,`style`])),t,0):(H(),W(P(su),J({key:1,ref:P(a)},e.$attrs,{"as-child":n.asChild,as:n.as,"data-side":C.value,"data-align":w.value,dir:P(s),style:{animation:P(b)?void 0:`none`}}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`as-child`,`as`,`data-side`,`data-align`,`dir`,`style`]))],12,_p))}}),Sp={top:`bottom`,right:`left`,bottom:`top`,left:`right`},Cp=z({inheritAttrs:!1,__name:`PopperArrow`,props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`svg`}},setup(e){let{forwardRef:t}=Z(),n=yp(),r=Y(()=>Sp[n.placedSide.value]);return(i,a)=>(H(),U(`span`,{ref:e=>{P(n).onArrowChange(e??void 0)},style:O({position:`absolute`,left:P(n).arrowX?.value?`${P(n).arrowX?.value}px`:void 0,top:P(n).arrowY?.value?`${P(n).arrowY?.value}px`:void 0,[r.value]:0,transformOrigin:{top:``,right:`0 0`,bottom:`center 0`,left:`100% 0`}[P(n).placedSide.value],transform:{top:`translateY(100%)`,right:`translateY(50%) rotate(90deg) translateX(-50%)`,bottom:`rotate(180deg)`,left:`translateY(50%) rotate(-90deg) translateX(50%)`}[P(n).placedSide.value],visibility:P(n).shouldHideArrow.value?`hidden`:void 0})},[K(ld,J(i.$attrs,{ref:P(t),style:{display:`block`},as:e.as,"as-child":e.asChild,rounded:e.rounded,width:e.width,height:e.height}),{default:I(()=>[B(i.$slots,`default`)]),_:3},16,[`as`,`as-child`,`rounded`,`width`,`height`])],4))}});function wp(e){let t=ul({nonce:N()});return Y(()=>e?.value||t.nonce?.value)}var[Tp,Ep]=sc(`RovingFocusGroup`),Dp=z({__name:`RovingFocusGroup`,props:{orientation:{type:String,required:!1,default:void 0},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!1},currentTabStopId:{type:[String,null],required:!1},defaultCurrentTabStopId:{type:String,required:!1},preventScrollOnEntryFocus:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`entryFocus`,`update:currentTabStopId`],setup(e,{expose:t,emit:n}){let r=e,i=n,{loop:a,orientation:o,dir:s}=dn(r),c=wl(s),l=al(r,`currentTabStopId`,i,{defaultValue:r.defaultCurrentTabStopId,passive:r.currentTabStopId===void 0}),u=N(!1),d=N(!1),f=N(0),{getItems:p,CollectionSlot:m}=qu({isProvider:!0});function h(e){let t=!d.value;if(e.currentTarget&&e.target===e.currentTarget&&t&&!u.value){let t=new CustomEvent(Zu,Qu);if(e.currentTarget.dispatchEvent(t),i(`entryFocus`,t),!t.defaultPrevented){let e=p().map(e=>e.ref).filter(e=>e.dataset.disabled!==``);nd([e.find(e=>e.getAttribute(`data-active`)===``),e.find(e=>e.getAttribute(`data-highlighted`)===``),e.find(e=>e.id===l.value),...e].filter(Boolean),r.preventScrollOnEntryFocus)}}d.value=!1}function g(){setTimeout(()=>{d.value=!1},1)}return t({getItems:p}),Ep({loop:a,dir:c,orientation:o,currentTabStopId:l,onItemFocus:e=>{l.value=e},onItemShiftTab:()=>{u.value=!0},onFocusableItemAdd:()=>{f.value++},onFocusableItemRemove:()=>{f.value--}}),(t,n)=>(H(),W(P(m),null,{default:I(()=>[K(P(su),{tabindex:u.value||f.value===0?-1:0,"data-orientation":P(o),as:e.as,"as-child":e.asChild,dir:P(c),style:{outline:`none`},onMousedown:n[0]||=e=>d.value=!0,onMouseup:g,onFocus:h,onBlur:n[1]||=e=>u.value=!1},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`tabindex`,`data-orientation`,`as`,`as-child`,`dir`])]),_:3}))}}),Op=z({__name:`MenuAnchor`,props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e;return(e,n)=>(H(),W(P(od),he(Ha(t)),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}});function kp(){let e=N(!1);return Hr(()=>{qc(`keydown`,()=>{e.value=!0},{capture:!0,passive:!0}),qc([`pointerdown`,`pointermove`],()=>{e.value=!1},{capture:!0,passive:!0})}),e}var Ap=jc(kp),[jp,Mp]=sc([`MenuRoot`,`MenuSub`],`MenuContext`),[Np,Pp]=sc(`MenuRoot`),Fp=z({__name:`MenuRoot`,props:{open:{type:Boolean,required:!1,default:!1},dir:{type:String,required:!1},modal:{type:Boolean,required:!1,default:!0}},emits:[`update:open`],setup(e,{emit:t}){let n=e,r=t,{modal:i,dir:a}=dn(n),o=wl(a),s=al(n,`open`,r),c=N(),l=Ap();return Mp({open:s,onOpenChange:e=>{s.value=e},content:c,onContentChange:e=>{c.value=e}}),Pp({onClose:()=>{s.value=!1},isUsingKeyboardRef:l,dir:o,modal:i}),(e,t)=>(H(),W(P(ad),null,{default:I(()=>[B(e.$slots,`default`)]),_:3}))}}),[Ip,Lp]=sc(`MenuContent`),Rp=z({__name:`MenuContentImpl`,props:hi({loop:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},disableOutsideScroll:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},{...vp}),emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`,`entryFocus`,`openAutoFocus`,`closeAutoFocus`,`dismiss`],setup(e,{emit:t}){let n=e,r=t,i=jp(),a=Np(),{trapFocus:o,disableOutsidePointerEvents:s,loop:c}=dn(n);Dl(),xl(s.value);let l=N(``),u=N(0),d=N(0),f=N(null),p=N(`right`),m=N(0),h=N(null),g=N(),{forwardRef:_,currentElement:v}=Z(),{handleTypeaheadSearch:y}=$l(),b=N();function x(e){let t=cl(e,b.value||cc(),v.value,{loop:c.value,arrowKeyOptions:`vertical`,dir:a?.dir.value,focus:!1,attributeName:`[data-reka-collection-item]:not([data-disabled])`});t&&(b.value=t,t.scrollIntoView({block:`nearest`}))}function S(){b.value&&b.value.click()}let C=N(),w=N();R(b,e=>{if(w.value&&(e===void 0||e!==w.value.trigger.value)){if(e===void 0)return;w.value.onOpenChange(!1),w.value=void 0}}),R(v,e=>{i.onContentChange(e)}),Kr(()=>{window.clearTimeout(u.value)});function T(e){return p.value===f.value?.side&&Uu(e,f.value?.area)}async function ee(e){r(`openAutoFocus`,e),e.defaultPrevented||(e.preventDefault(),v.value?.focus({preventScroll:!0}))}function te(e){if(e.defaultPrevented)return;let t=e.target,n=t.closest(`[data-reka-menu-content]`)===e.currentTarget,r=[`input`,`textarea`].includes(t.tagName.toLowerCase()),i=e.ctrlKey||e.altKey||e.metaKey,o=e.key.length===1,s=cl(e,cc(),v.value,{loop:c.value,arrowKeyOptions:`vertical`,dir:a?.dir.value,focus:!0,attributeName:`[data-reka-collection-item]:not([data-disabled])`});if(s)return s?.focus();if(e.code===`Space`)return;let l=g.value?.getItems()??[];if(n&&(e.key===`Tab`&&a.modal.value&&e.preventDefault(),!i&&o&&!r&&y(e.key,l)),e.target!==v.value||!Iu.includes(e.key))return;e.preventDefault();let u=[...l.map(e=>e.ref)];Fu.includes(e.key)&&u.reverse(),Vu(u)}function E(e){e?.currentTarget?.contains?.(e.target)||(window.clearTimeout(u.value),l.value=``)}function ne(e){if(!Wu(e))return;let t=e.target,n=m.value!==e.clientX;if((e?.currentTarget)?.contains(t)&&n){let t=e.clientX>m.value?`right`:`left`;p.value=t,m.value=e.clientX}}function re(e){Wu(e)&&C.value&&C.value.focus()}return Lp({onItemEnter:e=>!!T(e),onItemLeave:e=>T(e)?!0:([`INPUT`,`TEXTAREA`].includes(cc()?.tagName||``)||v.value?.focus(),h.value=null,!1),onTriggerLeave:e=>!!T(e),searchRef:l,highlightedElement:b,onKeydownNavigation:x,onKeydownEnter:S,filterElement:C,onFilterElementChange:e=>{C.value=e},activeSubmenuContext:w,pointerGraceTimerRef:d,onPointerGraceIntentChange:e=>{f.value=e}}),(t,n)=>(H(),W(P(ju),{"as-child":``,trapped:P(o),onMountAutoFocus:ee,onUnmountAutoFocus:n[7]||=e=>r(`closeAutoFocus`,e)},{default:I(()=>[K(P(gu),{"as-child":``,"disable-outside-pointer-events":P(s),onEscapeKeyDown:n[2]||=e=>r(`escapeKeyDown`,e),onPointerDownOutside:n[3]||=e=>r(`pointerDownOutside`,e),onFocusOutside:n[4]||=e=>r(`focusOutside`,e),onInteractOutside:n[5]||=e=>r(`interactOutside`,e),onDismiss:n[6]||=e=>r(`dismiss`)},{default:I(()=>[K(P(Dp),{ref_key:`rovingFocusGroupRef`,ref:g,"current-tab-stop-id":h.value,"onUpdate:currentTabStopId":n[0]||=e=>h.value=e,"as-child":``,orientation:`vertical`,dir:P(a).dir.value,loop:P(c),onEntryFocus:n[1]||=e=>{r(`entryFocus`,e),P(a).isUsingKeyboardRef.value||e.preventDefault()}},{default:I(()=>[K(P(xp),{ref:P(_),role:`menu`,as:e.as,"as-child":e.asChild,"aria-orientation":`vertical`,"data-reka-menu-content":``,"data-state":P(zu)(P(i).open.value),dir:P(a).dir.value,side:e.side,"side-offset":e.sideOffset,align:e.align,"align-offset":e.alignOffset,"avoid-collisions":e.avoidCollisions,"collision-boundary":e.collisionBoundary,"collision-padding":e.collisionPadding,"arrow-padding":e.arrowPadding,"prioritize-position":e.prioritizePosition,"position-strategy":e.positionStrategy,"update-position-strategy":e.updatePositionStrategy,sticky:e.sticky,"hide-when-detached":e.hideWhenDetached,reference:e.reference,onKeydown:te,onBlur:E,onPointermove:ne,onPointerenter:re},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`as`,`as-child`,`data-state`,`dir`,`side`,`side-offset`,`align`,`align-offset`,`avoid-collisions`,`collision-boundary`,`collision-padding`,`arrow-padding`,`prioritize-position`,`position-strategy`,`update-position-strategy`,`sticky`,`hide-when-detached`,`reference`])]),_:3},8,[`current-tab-stop-id`,`dir`,`loop`])]),_:3},8,[`disable-outside-pointer-events`])]),_:3},8,[`trapped`]))}}),zp=z({inheritAttrs:!1,__name:`MenuItemImpl`,props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e,n=Ip(),{forwardRef:r,currentElement:i}=Z(),{CollectionItem:a}=qu(),o=N(!1),s=Y(()=>o.value||i.value!=null&&n.highlightedElement.value===i.value);async function c(e){if(!e.defaultPrevented&&Wu(e)){if(t.disabled)n.onItemLeave(e);else if(!n.onItemEnter(e)){let t=e.currentTarget;n.highlightedElement.value=t,[`INPUT`,`TEXTAREA`].includes(cc()?.tagName||``)||t.focus({preventScroll:!0})}}}async function l(e){await Fn(),e.defaultPrevented||Wu(e)&&n.highlightedElement.value===i.value&&!n.onItemLeave(e)&&n.highlightedElement.value===i.value&&(n.highlightedElement.value=void 0)}return(t,i)=>(H(),W(P(a),{value:{textValue:e.textValue}},{default:I(()=>[K(P(su),J({ref:P(r),role:`menuitem`,tabindex:`-1`},t.$attrs,{as:e.as,"as-child":e.asChild,"aria-disabled":e.disabled||void 0,"data-disabled":e.disabled?``:void 0,"data-highlighted":s.value?``:void 0,onPointermove:c,onPointerleave:l,onFocus:i[0]||=async t=>{let r=t.currentTarget;await Fn(),t.defaultPrevented||e.disabled||(o.value=!0,P(n).highlightedElement.value=r)},onBlur:i[1]||=async e=>{await Fn(),e.defaultPrevented||(o.value=!1)}}),{default:I(()=>[B(t.$slots,`default`)]),_:3},16,[`as`,`as-child`,`aria-disabled`,`data-disabled`,`data-highlighted`])]),_:3},8,[`value`]))}}),Bp=z({__name:`MenuItem`,props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`select`],setup(e,{emit:t}){let n=e,r=t,{forwardRef:i,currentElement:a}=Z(),o=Np(),s=Ip(),c=N(!1);async function l(){let e=a.value;if(!n.disabled&&e){let e=new CustomEvent(Mu,{bubbles:!0,cancelable:!0});r(`select`,e),await Fn(),e.defaultPrevented?c.value=!1:o.onClose()}}return(t,r)=>(H(),W(zp,J(n,{ref:P(i),onClick:l,onPointerdown:r[0]||=()=>{c.value=!0},onPointerup:r[1]||=async e=>{await Fn(),e.defaultPrevented||c.value||e.currentTarget?.click()},onKeydown:r[2]||=async t=>{let n=P(s).searchRef.value!==``;e.disabled||n&&t.key===` `||P(Nu).includes(t.key)&&(t.currentTarget?.click(),t.preventDefault())}}),{default:I(()=>[B(t.$slots,`default`)]),_:3},16))}}),Vp=z({__name:`MenuRootContentModal`,props:{loop:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`,`entryFocus`,`openAutoFocus`,`closeAutoFocus`],setup(e,{emit:t}){let n=e,r=t,i=jl(n,r),a=jp(),{forwardRef:o,currentElement:s}=Z();return Yl(s),(e,t)=>(H(),W(Rp,J(P(i),{ref:P(o),"trap-focus":P(a).open.value,"disable-outside-pointer-events":P(a).open.value,"disable-outside-scroll":!0,onDismiss:t[0]||=e=>P(a).onOpenChange(!1),onFocusOutside:t[1]||=us(e=>r(`focusOutside`,e),[`prevent`])}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`trap-focus`,`disable-outside-pointer-events`]))}}),Hp=z({__name:`MenuRootContentNonModal`,props:{loop:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`,`entryFocus`,`openAutoFocus`,`closeAutoFocus`],setup(e,{emit:t}){let n=jl(e,t),r=jp();return(e,t)=>(H(),W(Rp,J(P(n),{"trap-focus":!1,"disable-outside-pointer-events":!1,"disable-outside-scroll":!1,onDismiss:t[0]||=e=>P(r).onOpenChange(!1)}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),Up=z({__name:`MenuContent`,props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`,`entryFocus`,`openAutoFocus`,`closeAutoFocus`],setup(e,{emit:t}){let n=jl(e,t),r=jp(),i=Np();return(t,a)=>(H(),W(P(iu),{present:e.forceMount||P(r).open.value},{default:I(()=>[P(i).modal.value?(H(),W(Vp,he(J({key:0},{...t.$attrs,...P(n)})),{default:I(()=>[B(t.$slots,`default`)]),_:3},16)):(H(),W(Hp,he(J({key:1},{...t.$attrs,...P(n)})),{default:I(()=>[B(t.$slots,`default`)]),_:3},16))]),_:3},8,[`present`]))}}),[Wp,Gp]=sc(`MenuGroup`),Kp=z({__name:`MenuLabel`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`div`}},setup(e){let t=e,n=Wp({id:``});return(e,r)=>(H(),W(P(su),J(t,{id:P(n).id||void 0}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`id`]))}}),qp=z({__name:`MenuPortal`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let t=e;return(e,n)=>(H(),W(P(Gu),he(Ha(t)),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),[Jp,Yp]=sc(`MenuSub`),Xp=z({__name:`MenuSub`,props:{open:{type:Boolean,required:!1,default:void 0}},emits:[`update:open`],setup(e,{emit:t}){let n=e,r=al(n,`open`,t,{defaultValue:!1,passive:n.open===void 0}),i=jp(),a=N(),o=N();return L(e=>{i?.open.value===!1&&(r.value=!1),e(()=>r.value=!1)}),Mp({open:r,onOpenChange:e=>{r.value=e},content:o,onContentChange:e=>{o.value=e}}),Yp({triggerId:``,contentId:``,trigger:a,onTriggerChange:e=>{a.value=e}}),(e,t)=>(H(),W(P(ad),null,{default:I(()=>[B(e.$slots,`default`)]),_:3}))}}),Zp=z({__name:`MenuSubContent`,props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1,default:!0},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`,`entryFocus`,`openAutoFocus`,`closeAutoFocus`],setup(e,{emit:t}){let n=jl(e,t),r=jp(),i=Np(),a=Jp(),o=Ip(),{forwardRef:s,currentElement:c}=Z();return a.contentId||=Xl(void 0,`reka-menu-sub-content`),(t,l)=>(H(),W(P(iu),{present:e.forceMount||P(r).open.value},{default:I(()=>[K(Rp,J(P(n),{id:P(a).contentId,ref:P(s),"aria-labelledby":P(a).triggerId,align:`start`,side:P(i).dir.value===`rtl`?`left`:`right`,"disable-outside-pointer-events":!1,"disable-outside-scroll":!1,"trap-focus":!1,onOpenAutoFocus:l[0]||=us(e=>{P(i).isUsingKeyboardRef.value&&P(c)?.focus()},[`prevent`]),onCloseAutoFocus:l[1]||=us(()=>{},[`prevent`]),onFocusOutside:l[2]||=e=>{if(e.defaultPrevented)return;let t=P(o).filterElement.value?.contains(e.target);e.target!==P(a).trigger.value&&!t&&P(r).onOpenChange(!1)},onEscapeKeyDown:l[3]||=e=>{P(i).onClose(),e.preventDefault()},onKeydown:l[4]||=e=>{let t=e.currentTarget?.contains(e.target),n=P(Ru)[P(i).dir.value].includes(e.key);t&&n&&(P(r).onOpenChange(!1),P(o).filterElement.value?(P(o).filterElement.value.focus(),P(o).highlightedElement.value=P(a).trigger.value,P(a).trigger.value?.scrollIntoView({block:`nearest`})):P(a).trigger.value?.focus(),e.preventDefault())}}),{default:I(()=>[B(t.$slots,`default`)]),_:3},16,[`id`,`aria-labelledby`,`side`])]),_:3},8,[`present`]))}}),Qp=z({__name:`MenuSubTrigger`,props:{graceDuration:{type:Number,required:!1,default:300},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e,n=Fc(t,`graceDuration`),r=jp(),i=Np(),a=Jp(),o=Ip();R(r.open,e=>{e?o.activeSubmenuContext.value={onOpenChange:r.onOpenChange,trigger:a.trigger}:o.activeSubmenuContext.value?.trigger.value===a.trigger.value&&(o.activeSubmenuContext.value=void 0)});let s=N(null);a.triggerId||=Xl(void 0,`reka-menu-sub-trigger`);function c(){s.value&&window.clearTimeout(s.value),s.value=null}Kr(()=>{c()});function l(e){Wu(e)&&(o.onItemEnter(e)||t.disabled||r.open.value||s.value||(o.onPointerGraceIntentChange(null),s.value=window.setTimeout(()=>{r.onOpenChange(!0),c()},100)))}async function u(e){if(!Wu(e))return;c();let n=r.content.value?.getBoundingClientRect();if(n?.width){let i=r.content.value?.dataset.side,a=i===`right`,s=a?-5:5,c=n[a?`left`:`right`],l=n[a?`right`:`left`];o.onPointerGraceIntentChange({area:[{x:e.clientX+s,y:e.clientY},{x:c,y:n.top},{x:l,y:n.top},{x:l,y:n.bottom},{x:c,y:n.bottom}],side:i}),window.clearTimeout(o.pointerGraceTimerRef.value),o.pointerGraceTimerRef.value=window.setTimeout(()=>o.onPointerGraceIntentChange(null),t.graceDuration)}else{if(o.onTriggerLeave(e))return;o.onPointerGraceIntentChange(null)}}async function d(e){let n=o.searchRef.value!==``;t.disabled||n&&e.key===` `||Lu[i.dir.value].includes(e.key)&&(r.onOpenChange(!0),await Fn(),r.content.value?.focus(),e.preventDefault())}return(e,i)=>(H(),W(Op,{"as-child":``},{default:I(()=>[K(zp,J(P(n),{id:P(a).triggerId,ref:e=>{e&&P(a)?.onTriggerChange(e?.$el)},"aria-haspopup":`menu`,"aria-expanded":P(r).open.value,"aria-controls":P(a).contentId,"data-state":P(zu)(P(r).open.value),onClick:i[0]||=async e=>{t.disabled||e.defaultPrevented||(e.currentTarget?.focus(),P(r).open.value||P(r).onOpenChange(!0))},onPointermove:l,onPointerleave:u,onKeydown:d}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`id`,`aria-expanded`,`aria-controls`,`data-state`])]),_:3}))}}),[$p,em]=sc(`DropdownMenuRoot`),tm=z({__name:`DropdownMenuRoot`,props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0},dir:{type:String,required:!1},modal:{type:Boolean,required:!1,default:!0}},emits:[`update:open`],setup(e,{emit:t}){let n=e,r=t;Z();let i=al(n,`open`,r,{defaultValue:n.defaultOpen,passive:n.open===void 0}),a=N(),{modal:o,dir:s}=dn(n),c=wl(s);return em({open:i,onOpenChange:e=>{i.value=e},onOpenToggle:()=>{i.value=!i.value},triggerId:``,triggerElement:a,contentId:``,modal:o,dir:c}),(e,t)=>(H(),W(P(Fp),{open:P(i),"onUpdate:open":t[0]||=e=>M(i)?i.value=e:null,dir:P(c),modal:P(o)},{default:I(()=>[B(e.$slots,`default`,{open:P(i)})]),_:3},8,[`open`,`dir`,`modal`]))}}),nm=z({inheritAttrs:!1,__name:`DropdownMenuContent`,props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`,`openAutoFocus`,`closeAutoFocus`],setup(e,{emit:t}){let n=jl(e,t);Z();let r=$p(),i=N(!1);function a(e){e.defaultPrevented||(i.value||setTimeout(()=>{r.triggerElement.value?.focus()},0),i.value=!1,e.preventDefault())}return r.contentId||=Xl(void 0,`reka-dropdown-menu-content`),(e,t)=>(H(),W(P(Up),J({id:P(r).contentId,"aria-labelledby":P(r)?.triggerId,style:{"--reka-dropdown-menu-content-transform-origin":`var(--reka-popper-transform-origin)`,"--reka-dropdown-menu-content-available-width":`var(--reka-popper-available-width)`,"--reka-dropdown-menu-content-available-height":`var(--reka-popper-available-height)`,"--reka-dropdown-menu-trigger-width":`var(--reka-popper-anchor-width)`,"--reka-dropdown-menu-trigger-height":`var(--reka-popper-anchor-height)`}},{...P(n),...P(Bu)(e.$attrs)},{onCloseAutoFocus:a,onInteractOutside:t[0]||=e=>{if(e.defaultPrevented)return;let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,a=t.button===2||n;(!P(r).modal.value||a)&&(i.value=!0),P(r).triggerElement.value?.contains(e.target)&&e.preventDefault()}}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`id`,`aria-labelledby`]))}}),rm=z({__name:`DropdownMenuItem`,props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`select`],setup(e,{emit:t}){let n=e,r=Tl(t);return Z(),(e,t)=>(H(),W(P(Bp),he(Ha({...n,...P(r)})),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),im=z({__name:`DropdownMenuLabel`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e;return Z(),(e,n)=>(H(),W(P(Kp),he(Ha(t)),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),am=z({__name:`DropdownMenuPortal`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let t=e;return(e,n)=>(H(),W(P(qp),he(Ha(t)),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),om=z({__name:`DropdownMenuSub`,props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0}},emits:[`update:open`],setup(e,{emit:t}){let n=e,r=al(n,`open`,t,{passive:n.open===void 0,defaultValue:n.defaultOpen??!1});return Z(),(e,t)=>(H(),W(P(Xp),{open:P(r),"onUpdate:open":t[0]||=e=>M(r)?r.value=e:null},{default:I(()=>[B(e.$slots,`default`,{open:P(r)})]),_:3},8,[`open`]))}}),sm=z({__name:`DropdownMenuSubContent`,props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`,`entryFocus`,`openAutoFocus`,`closeAutoFocus`],setup(e,{emit:t}){let n=jl(e,t);return Z(),(e,t)=>(H(),W(P(Zp),J(P(n),{style:{"--reka-dropdown-menu-content-transform-origin":`var(--reka-popper-transform-origin)`,"--reka-dropdown-menu-content-available-width":`var(--reka-popper-available-width)`,"--reka-dropdown-menu-content-available-height":`var(--reka-popper-available-height)`,"--reka-dropdown-menu-trigger-width":`var(--reka-popper-anchor-width)`,"--reka-dropdown-menu-trigger-height":`var(--reka-popper-anchor-height)`}}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),cm=z({__name:`DropdownMenuSubTrigger`,props:{graceDuration:{type:Number,required:!1},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e;return Z(),(e,n)=>(H(),W(P(Qp),he(Ha(t)),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),lm=z({__name:`DropdownMenuTrigger`,props:{disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(e){let t=e,n=$p(),{forwardRef:r,currentElement:i}=Z();return Hr(()=>{n.triggerElement=i}),n.triggerId||=Xl(void 0,`reka-dropdown-menu-trigger`),(i,a)=>(H(),W(P(Op),{"as-child":``},{default:I(()=>[K(P(su),{id:P(n).triggerId,ref:P(r),type:e.as===`button`?`button`:void 0,"as-child":t.asChild,as:e.as,"aria-haspopup":`menu`,"aria-expanded":P(n).open.value,"aria-controls":P(n).open.value?P(n).contentId:void 0,"data-disabled":e.disabled?``:void 0,disabled:e.disabled,"data-state":P(n).open.value?`open`:`closed`,onClick:a[0]||=async t=>{t.defaultPrevented||!e.disabled&&t.button===0&&t.ctrlKey===!1&&(P(n)?.onOpenToggle(),await Fn(),P(n).open.value&&t.preventDefault())},onKeydown:a[1]||=fs(t=>{e.disabled||t.defaultPrevented||([`Enter`,` `].includes(t.key)&&P(n).onOpenToggle(),t.key===`ArrowDown`&&P(n).onOpenChange(!0),[`Enter`,` `,`ArrowDown`].includes(t.key)&&t.preventDefault())},[`enter`,`space`,`arrow-down`])},{default:I(()=>[B(i.$slots,`default`)]),_:3},8,[`id`,`type`,`as-child`,`as`,`aria-expanded`,`aria-controls`,`data-disabled`,`disabled`,`data-state`])]),_:3}))}}),[um,dm]=sc(`ScrollAreaRoot`),fm=z({__name:`ScrollAreaRoot`,props:{type:{type:String,required:!1,default:`hover`},dir:{type:String,required:!1},scrollHideDelay:{type:Number,required:!1,default:600},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e,{expose:t}){let n=e,r=N(0),i=N(0),a=N(),o=N(),s=N(),c=N(),l=N(!1),u=N(!1),{type:d,dir:f,scrollHideDelay:p}=dn(n),m=wl(f);function h(){a.value?.scrollTo({top:0})}function g(){a.value?.scrollTo({top:0,left:0})}t({viewport:a,scrollTop:h,scrollTopLeft:g});let{forwardRef:_,currentElement:v}=Z();return dm({type:d,dir:m,scrollHideDelay:p,scrollArea:v,viewport:a,onViewportChange:e=>{a.value=e||void 0},content:o,onContentChange:e=>{o.value=e},scrollbarX:s,scrollbarXEnabled:l,scrollbarY:c,scrollbarYEnabled:u,onScrollbarXChange:e=>{s.value=e||void 0},onScrollbarYChange:e=>{c.value=e||void 0},onScrollbarXEnabledChange:e=>{l.value=e},onScrollbarYEnabledChange:e=>{u.value=e},onCornerWidthChange:e=>{r.value=e},onCornerHeightChange:e=>{i.value=e}}),(t,a)=>(H(),W(P(su),{ref:P(_),"as-child":n.asChild,as:e.as,dir:P(m),style:O({position:`relative`,"--reka-scroll-area-corner-width":`${r.value}px`,"--reka-scroll-area-corner-height":`${i.value}px`})},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`as-child`,`as`,`dir`,`style`]))}}),pm=z({__name:`ScrollAreaCornerImpl`,setup(e){let t=um(),n=N(0),r=N(0),i=Y(()=>!!n.value&&!!r.value);function a(){let e=t.scrollbarX.value?.offsetHeight||0;t.onCornerHeightChange(e),r.value=e}function o(){let e=t.scrollbarY.value?.offsetWidth||0;t.onCornerWidthChange(e),n.value=e}return il(t.scrollbarX.value,a),il(t.scrollbarY.value,o),R(()=>t.scrollbarX.value,a),R(()=>t.scrollbarY.value,o),(e,a)=>i.value?(H(),W(P(su),J({key:0,style:{width:`${n.value}px`,height:`${r.value}px`,position:`absolute`,right:P(t).dir.value===`ltr`?0:void 0,left:P(t).dir.value===`rtl`?0:void 0,bottom:0}},e.$parent?.$props),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`style`])):q(`v-if`,!0)}}),mm=z({__name:`ScrollAreaCorner`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e,{forwardRef:n}=Z(),r=um(),i=Y(()=>!!r.scrollbarX.value&&!!r.scrollbarY.value),a=Y(()=>r.type.value!==`scroll`&&i.value);return(e,r)=>a.value?(H(),W(pm,J({key:0},t,{ref:P(n)}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16)):q(`v-if`,!0)}});function hm(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function gm(e){let t=_m(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function _m(e,t){let n=e/t;return Number.isNaN(n)?0:n}function vm(e,t=()=>{}){let n={left:e.scrollLeft,top:e.scrollTop},r=0;return(function i(){let a={left:e.scrollLeft,top:e.scrollTop},o=n.left!==a.left,s=n.top!==a.top;(o||s)&&t(),n=a,r=window.requestAnimationFrame(i)})(),()=>window.cancelAnimationFrame(r)}function ym(e,t,n=`ltr`){let r=gm(t),i=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-i,o=t.content-t.viewport,s=a-r,c=n===`ltr`?[0,o]:[o*-1,0],l=oc(e,c[0],c[1]);return hm([0,o],[0,s])(l)}function bm(e){return e?Number.parseInt(e,10):0}function xm(e,t,n,r=`ltr`){let i=gm(n),a=i/2,o=t||a,s=i-o,c=n.scrollbar.paddingStart+o,l=n.scrollbar.size-n.scrollbar.paddingEnd-s,u=n.content-n.viewport,d=r===`ltr`?[0,u]:[u*-1,0];return hm([c,l],d)(e)}function Sm(e,t){return e>0&&e<t}var Cm=z({__name:`ScrollAreaScrollbarX`,setup(e){let t=um(),n=Mm(),{forwardRef:r,currentElement:i}=Z();Hr(()=>{i.value&&t.onScrollbarXChange(i.value)}),Kr(()=>{t.onScrollbarXChange(null)});let a=Y(()=>n.sizes.value);return(e,i)=>(H(),W(Fm,{ref:P(r),"is-horizontal":!0,"data-orientation":`horizontal`,style:O({bottom:0,left:P(t).dir.value===`rtl`?`var(--reka-scroll-area-corner-width)`:0,right:P(t).dir.value===`ltr`?`var(--reka-scroll-area-corner-width)`:0,"--reka-scroll-area-thumb-width":a.value?`${P(gm)(a.value)}px`:void 0}),onOnDragScroll:i[0]||=e=>P(n).onDragScroll(e.x)},{default:I(()=>[B(e.$slots,`default`)]),_:3},8,[`style`]))}}),wm=z({__name:`ScrollAreaScrollbarY`,setup(e){let t=um(),n=Mm(),{forwardRef:r,currentElement:i}=Z();Hr(()=>{i.value&&t.onScrollbarYChange(i.value)}),Kr(()=>{t.onScrollbarYChange(null)});let a=Y(()=>n.sizes.value);return(e,i)=>(H(),W(Fm,{ref:P(r),"is-horizontal":!1,"data-orientation":`vertical`,style:O({top:0,right:P(t).dir.value===`ltr`?0:void 0,left:P(t).dir.value===`rtl`?0:void 0,bottom:`var(--reka-scroll-area-corner-height)`,"--reka-scroll-area-thumb-height":a.value?`${P(gm)(a.value)}px`:void 0}),onOnDragScroll:i[0]||=e=>P(n).onDragScroll(e.y)},{default:I(()=>[B(e.$slots,`default`)]),_:3},8,[`style`]))}}),Tm=z({__name:`ScrollAreaScrollbarAuto`,props:{forceMount:{type:Boolean,required:!1}},setup(e){let t=um(),n=km(),{forwardRef:r}=Z(),i=N(!1),a=Lc(()=>{if(t.viewport.value){let e=t.viewport.value.offsetWidth<t.viewport.value.scrollWidth,r=t.viewport.value.offsetHeight<t.viewport.value.scrollHeight;i.value=n.isHorizontal.value?e:r}},10);return Hr(()=>a()),il(t.viewport,a),il(t.content,a),(t,n)=>(H(),W(P(iu),{present:e.forceMount||i.value},{default:I(()=>[K(Pm,J(t.$attrs,{ref:P(r),"data-state":i.value?`visible`:`hidden`}),{default:I(()=>[B(t.$slots,`default`)]),_:3},16,[`data-state`])]),_:3},8,[`present`]))}}),Em=z({inheritAttrs:!1,__name:`ScrollAreaScrollbarGlimpse`,props:{forceMount:{type:Boolean,required:!1}},setup(e){let t=um(),n=km(),{forwardRef:r}=Z(),{state:i,dispatch:a}=Ql(`hidden`,{hidden:{POINTER_ENTER:`glimpse`,SCROLL:`scrolling`},glimpse:{HIDE:`hidden`,POINTER_LEAVE:`hidden`,SCROLL:`scrolling`,POINTER_ENTER:`glimpse`},scrolling:{SCROLL_END:`idle`,POINTER_ENTER:`interacting`},interacting:{SCROLL:`interacting`,POINTER_LEAVE:`idle`},idle:{HIDE:`hidden`,SCROLL:`scrolling`,POINTER_ENTER:`interacting`}}),o=Y(()=>i.value!==`hidden`);function s(){a(`POINTER_ENTER`)}function c(){a(`POINTER_LEAVE`)}let l=Lc(()=>a(`SCROLL_END`),100);return L(e=>{if(i.value===`glimpse`){let n=window.setTimeout(a,t.scrollHideDelay.value,`HIDE`);e(()=>{window.clearTimeout(n)})}}),L(e=>{if(i.value===`idle`){let n=window.setTimeout(a,t.scrollHideDelay.value,`HIDE`);e(()=>{window.clearTimeout(n)})}}),L(e=>{let r=t.viewport.value,i=n.isHorizontal.value?`scrollLeft`:`scrollTop`;if(r){let t=r[i],n=()=>{let e=r[i];t!==e&&(a(`SCROLL`),l()),t=e};r.addEventListener(`scroll`,n),e(()=>{r.removeEventListener(`scroll`,n)})}}),Hr(()=>{let e=t.scrollArea.value;e&&(e.addEventListener(`pointerenter`,s),e.addEventListener(`pointerleave`,c))}),Kr(()=>{let e=t.scrollArea.value;e&&(e.removeEventListener(`pointerenter`,s),e.removeEventListener(`pointerleave`,c))}),(t,n)=>(H(),W(P(iu),{present:e.forceMount||o.value},{default:I(()=>[K(Tm,J(t.$attrs,{ref:P(r),"data-state":o.value?`visible`:`hidden`}),{default:I(()=>[B(t.$slots,`default`)]),_:3},16,[`data-state`])]),_:3},8,[`present`]))}}),Dm=z({inheritAttrs:!1,__name:`ScrollAreaScrollbarHover`,props:{forceMount:{type:Boolean,required:!1}},setup(e){let t=um(),{forwardRef:n}=Z(),r,i=N(!1);function a(){window.clearTimeout(r),i.value=!0}function o(){r=window.setTimeout(()=>{i.value=!1},t.scrollHideDelay.value)}return Hr(()=>{let e=t.scrollArea.value;e&&(e.addEventListener(`pointerenter`,a),e.addEventListener(`pointerleave`,o))}),Kr(()=>{let e=t.scrollArea.value;e&&(window.clearTimeout(r),e.removeEventListener(`pointerenter`,a),e.removeEventListener(`pointerleave`,o))}),(t,r)=>(H(),W(P(iu),{present:e.forceMount||i.value},{default:I(()=>[K(Tm,J(t.$attrs,{ref:P(n),"data-state":i.value?`visible`:`hidden`}),{default:I(()=>[B(t.$slots,`default`)]),_:3},16,[`data-state`])]),_:3},8,[`present`]))}}),Om=z({__name:`ScrollAreaScrollbarScroll`,props:{forceMount:{type:Boolean,required:!1}},setup(e){let t=um(),n=km(),{forwardRef:r}=Z(),{state:i,dispatch:a}=Ql(`hidden`,{hidden:{SCROLL:`scrolling`},scrolling:{SCROLL_END:`idle`,POINTER_ENTER:`interacting`},interacting:{SCROLL:`interacting`,POINTER_LEAVE:`idle`},idle:{HIDE:`hidden`,SCROLL:`scrolling`,POINTER_ENTER:`interacting`}}),o=Y(()=>i.value!==`hidden`);L(e=>{if(i.value===`idle`){let n=window.setTimeout(a,t.scrollHideDelay.value,`HIDE`);e(()=>{window.clearTimeout(n)})}});let s=Lc(()=>a(`SCROLL_END`),100);return L(e=>{let r=t.viewport.value,i=n.isHorizontal.value?`scrollLeft`:`scrollTop`;if(r){let t=r[i],n=()=>{let e=r[i];t!==e&&(a(`SCROLL`),s()),t=e};r.addEventListener(`scroll`,n),e(()=>{r.removeEventListener(`scroll`,n)})}}),(t,n)=>(H(),W(P(iu),{present:e.forceMount||o.value},{default:I(()=>[K(Pm,J(t.$attrs,{ref:P(r),"data-state":o.value?`visible`:`hidden`}),{default:I(()=>[B(t.$slots,`default`)]),_:3},16,[`data-state`])]),_:3},8,[`present`]))}}),[km,Am]=sc(`ScrollAreaScrollbar`),jm=z({inheritAttrs:!1,__name:`ScrollAreaScrollbar`,props:{orientation:{type:String,required:!1,default:`vertical`},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`div`}},setup(e){let t=e,{forwardRef:n}=Z(),r=um(),i=Y(()=>t.orientation===`horizontal`);R(i,()=>{i.value?r.onScrollbarXEnabledChange(!0):r.onScrollbarYEnabledChange(!0)},{immediate:!0}),Kr(()=>{r.onScrollbarXEnabledChange(!1),r.onScrollbarYEnabledChange(!1)});let{orientation:a,forceMount:o,asChild:s,as:c}=dn(t);return Am({orientation:a,forceMount:o,isHorizontal:i,as:c,asChild:s}),(e,t)=>P(r).type.value===`hover`?(H(),W(Dm,J({key:0},e.$attrs,{ref:P(n),"force-mount":P(o)}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`force-mount`])):P(r).type.value===`scroll`?(H(),W(Om,J({key:1},e.$attrs,{ref:P(n),"force-mount":P(o)}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`force-mount`])):P(r).type.value===`glimpse`?(H(),W(Em,J({key:2},e.$attrs,{ref:P(n),"force-mount":P(o)}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`force-mount`])):P(r).type.value===`auto`?(H(),W(Tm,J({key:3},e.$attrs,{ref:P(n),"force-mount":P(o)}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16,[`force-mount`])):P(r).type.value===`always`?(H(),W(Pm,J({key:4},e.$attrs,{ref:P(n),"data-state":`visible`}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16)):q(`v-if`,!0)}}),[Mm,Nm]=sc(`ScrollAreaScrollbarVisible`),Pm=z({__name:`ScrollAreaScrollbarVisible`,setup(e){let t=um(),n=km(),{forwardRef:r}=Z(),i=N({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),a=Y(()=>{let e=_m(i.value.viewport,i.value.content);return e>0&&e<1}),o=N(),s=N(0);function c(e,n){if(p.value){let r=t.viewport.value.scrollLeft+e.deltaY;t.viewport.value.scrollLeft=r,Sm(r,n)&&e.preventDefault()}else{let r=t.viewport.value.scrollTop+e.deltaY;t.viewport.value.scrollTop=r,Sm(r,n)&&e.preventDefault()}}function l(e,t){p.value?s.value=t.x:s.value=t.y}function u(e){s.value=0}function d(e){i.value=e}function f(e,t){return xm(e,s.value,i.value,t)}let p=Y(()=>n.isHorizontal.value);function m(e){p.value?t.viewport.value.scrollLeft=f(e,t.dir.value):t.viewport.value.scrollTop=f(e)}function h(){if(p.value){if(t.viewport.value&&o.value){let e=t.viewport.value.scrollLeft,n=ym(e,i.value,t.dir.value);o.value.style.transform=`translate3d(${n}px, 0, 0)`}}else if(t.viewport.value&&o.value){let e=t.viewport.value.scrollTop,n=ym(e,i.value);o.value.style.transform=`translate3d(0, ${n}px, 0)`}}function g(e){o.value=e}return Nm({sizes:i,hasThumb:a,handleWheelScroll:c,handleThumbDown:l,handleThumbUp:u,handleSizeChange:d,onThumbPositionChange:h,onThumbChange:g,onDragScroll:m}),(e,t)=>p.value?(H(),W(Cm,J({key:0},e.$attrs,{ref:P(r)}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16)):(H(),W(wm,J({key:1},e.$attrs,{ref:P(r)}),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),Fm=z({__name:`ScrollAreaScrollbarImpl`,props:{isHorizontal:{type:Boolean,required:!0}},emits:[`onDragScroll`,`onWheelScroll`,`onThumbPointerDown`],setup(e,{emit:t}){let n=e,r=t,i=um(),a=Mm(),o=km(),{forwardRef:s,currentElement:c}=Z(),l=N(``),u=N();function d(e){if(u.value){let t=e.clientX-u.value?.left,n=e.clientY-u.value?.top;r(`onDragScroll`,{x:t,y:n})}}function f(e){e.button===0&&(e.target.setPointerCapture(e.pointerId),u.value=c.value.getBoundingClientRect(),l.value=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect=`none`,i.viewport&&(i.viewport.value.style.scrollBehavior=`auto`),d(e))}function p(e){d(e)}function m(e){let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=l.value,i.viewport&&(i.viewport.value.style.scrollBehavior=``),u.value=void 0}function h(e){let t=e.target,n=c.value?.contains(t),r=a.sizes.value.content-a.sizes.value.viewport;n&&a.handleWheelScroll(e,r)}Hr(()=>{document.addEventListener(`wheel`,h,{passive:!1})}),Kr(()=>{document.removeEventListener(`wheel`,h)});function g(){c.value&&(n.isHorizontal?a.handleSizeChange({content:i.viewport.value?.scrollWidth??0,viewport:i.viewport.value?.offsetWidth??0,scrollbar:{size:c.value.clientWidth??0,paddingStart:bm(getComputedStyle(c.value).paddingLeft),paddingEnd:bm(getComputedStyle(c.value).paddingRight)}}):a.handleSizeChange({content:i.viewport.value?.scrollHeight??0,viewport:i.viewport.value?.offsetHeight??0,scrollbar:{size:c.value?.clientHeight??0,paddingStart:bm(getComputedStyle(c.value).paddingTop),paddingEnd:bm(getComputedStyle(c.value).paddingBottom)}}),a.onThumbPositionChange())}return il(c,g),il(i.content,g),(e,t)=>(H(),W(P(su),{ref:P(s),style:{position:`absolute`},"data-scrollbarimpl":``,as:P(o).as.value,"as-child":P(o).asChild.value,onPointerdown:f,onPointermove:p,onPointerup:m},{default:I(()=>[B(e.$slots,`default`)]),_:3},8,[`as`,`as-child`]))}}),Im=z({__name:`ScrollAreaThumb`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e,n=um(),r=Mm();function i(e){let t=e.target.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;r.handleThumbDown(e,{x:n,y:i})}function a(e){r.handleThumbUp(e)}let{forwardRef:o,currentElement:s}=Z(),c=N(),l=Y(()=>n.viewport.value);function u(){if(!c.value){let e=vm(l.value,r.onThumbPositionChange);c.value=e,r.onThumbPositionChange()}}return Hc(Y(()=>r.sizes.value),()=>{r.onThumbChange(s.value),l.value&&(r.onThumbPositionChange(),l.value.addEventListener(`scroll`,u))}),Kr(()=>{l.value?.removeEventListener(`scroll`,u),c.value?.()}),(n,s)=>(H(),W(P(su),{ref:P(o),"data-state":P(r).hasThumb?`visible`:`hidden`,style:{width:`var(--reka-scroll-area-thumb-width)`,height:`var(--reka-scroll-area-thumb-height)`},"as-child":t.asChild,as:e.as,onPointerdown:i,onPointerup:a},{default:I(()=>[B(n.$slots,`default`)]),_:3},8,[`data-state`,`as-child`,`as`]))}}),Lm=z({inheritAttrs:!1,__name:`ScrollAreaViewport`,props:{nonce:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e,{expose:t}){let n=e,{nonce:r}=dn(n),i=wp(r),a=um(),o=N();Hr(()=>{a.onViewportChange(o.value),a.onContentChange(c.value)}),t({viewportElement:o});let{forwardRef:s,currentElement:c}=Z();return(t,r)=>(H(),U(V,null,[G(`div`,J({ref_key:`viewportElement`,ref:o,"data-reka-scroll-area-viewport":``,style:{overflowX:P(a).scrollbarXEnabled.value?`scroll`:`hidden`,overflowY:P(a).scrollbarYEnabled.value?`scroll`:`hidden`}},t.$attrs,{tabindex:0}),[K(P(su),{ref:P(s),style:O({minWidth:P(a).scrollbarXEnabled.value?`fit-content`:void 0}),"as-child":n.asChild,as:e.as},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`style`,`as-child`,`as`])],16),K(P(su),{as:`style`,nonce:P(i)},{default:I(()=>[...r[0]||=[Wa(` /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } `,-1)]]),_:1},8,[`nonce`])],64))}}),[Rm,zm]=sc(`SwitchRoot`),Bm=z({inheritAttrs:!1,__name:`SwitchRoot`,props:{defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1,default:void 0},disabled:{type:Boolean,required:!1},id:{type:String,required:!1},value:{type:String,required:!1,default:`on`},trueValue:{type:null,required:!1,default:()=>!0},falseValue:{type:null,required:!1,default:()=>!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,{disabled:i}=dn(n),a=al(n,`modelValue`,r,{defaultValue:n.defaultValue??n.falseValue,passive:n.modelValue===void 0}),o=Y(()=>a.value===n.trueValue);function s(){i.value||(a.value=o.value?n.falseValue:n.trueValue)}let{forwardRef:c,currentElement:l}=Z(),u=kl(l),d=Ml(),f=Y(()=>n.id&&l.value?document.querySelector(`[for="${n.id}"]`)?.innerText:void 0);return zm({checked:o,toggleCheck:s,disabled:i}),(t,n)=>(H(),U(V,null,[K(P(su),J({id:e.id,ref:P(c),role:`switch`,type:e.as===`button`?`button`:void 0,value:e.value,"aria-label":t.$attrs[`aria-label`]||f.value,"aria-checked":o.value,"aria-required":e.required,"data-state":o.value?`checked`:`unchecked`,"data-disabled":P(i)?``:void 0,"as-child":e.asChild,as:e.as,disabled:P(i)},{...P(d),...t.$attrs},{onClick:s,onKeydown:fs(us(s,[`prevent`]),[`enter`])}),{default:I(()=>[B(t.$slots,`default`,{modelValue:P(a),checked:o.value})]),_:3},16,[`id`,`type`,`value`,`aria-label`,`aria-checked`,`aria-required`,`data-state`,`data-disabled`,`as-child`,`as`,`disabled`,`onKeydown`]),P(u)&&e.name?(H(),W(P(Xu),J({key:0,type:`checkbox`,name:e.name,disabled:P(i),required:e.required,value:e.value,checked:o.value},P(d)),null,16,[`name`,`disabled`,`required`,`value`,`checked`])):q(`v-if`,!0)],64))}}),Vm=z({__name:`SwitchThumb`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){let t=Rm();return Z(),(n,r)=>(H(),W(P(su),{"data-state":P(t).checked.value?`checked`:`unchecked`,"data-disabled":P(t).disabled.value?``:void 0,"as-child":e.asChild,as:e.as},{default:I(()=>[B(n.$slots,`default`)]),_:3},8,[`data-state`,`data-disabled`,`as-child`,`as`]))}}),Hm=z({__name:`TooltipArrow`,props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`svg`}},setup(e){let t=e;return Z(),(e,n)=>(H(),W(P(Cp),he(Ha(t)),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),[Um,Wm]=sc(`TooltipProvider`),Gm=z({inheritAttrs:!1,__name:`TooltipProvider`,props:{delayDuration:{type:Number,required:!1,default:700},skipDelayDuration:{type:Number,required:!1,default:300},disableHoverableContent:{type:Boolean,required:!1,default:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:!1},content:{type:Object,required:!1}},setup(e){let{delayDuration:t,skipDelayDuration:n,disableHoverableContent:r,disableClosingTrigger:i,ignoreNonKeyboardFocus:a,disabled:o,content:s}=dn(e);Z();let c=N(!0),l=N(!1),{start:u,stop:d}=Bc(()=>{c.value=!0},n,{immediate:!1});return Wm({isOpenDelayed:c,delayDuration:t,onOpen(){d(),c.value=!1},onClose(){u()},isPointerInTransitRef:l,disableHoverableContent:r,disableClosingTrigger:i,disabled:o,ignoreNonKeyboardFocus:a,content:s}),(e,t)=>B(e.$slots,`default`)}}),Km=`tooltip.open`,[qm,Jm]=sc(`TooltipRoot`),Ym=z({__name:`TooltipRoot`,props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:[`update:open`],setup(e,{emit:t}){let n=e,r=t;Z();let i=Um(),a=Y(()=>n.disableHoverableContent??i.disableHoverableContent.value),o=Y(()=>n.disableClosingTrigger??i.disableClosingTrigger.value),s=Y(()=>n.disabled??i.disabled.value),c=Y(()=>n.delayDuration??i.delayDuration.value),l=Y(()=>n.ignoreNonKeyboardFocus??i.ignoreNonKeyboardFocus.value),u=al(n,`open`,r,{defaultValue:n.defaultOpen,passive:n.open===void 0});R(u,e=>{i.onClose&&(e?(i.onOpen(),document.dispatchEvent(new CustomEvent(Km))):i.onClose())});let d=N(!1),f=N(),p=Y(()=>u.value?d.value?`delayed-open`:`instant-open`:`closed`),{start:m,stop:h}=Bc(()=>{d.value=!0,u.value=!0},c,{immediate:!1});function g(){h(),d.value=!1,u.value=!0}function _(){h(),u.value=!1}function v(){m()}return Jm({contentId:``,open:u,stateAttribute:p,trigger:f,onTriggerChange(e){f.value=e},onTriggerEnter(){i.isOpenDelayed.value?v():g()},onTriggerLeave(){a.value?_():h()},onOpen:g,onClose:_,disableHoverableContent:a,disableClosingTrigger:o,disabled:s,ignoreNonKeyboardFocus:l}),(e,t)=>(H(),W(P(ad),null,{default:I(()=>[B(e.$slots,`default`,{open:P(u)})]),_:3}))}}),Xm=z({__name:`TooltipContentImpl`,props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1,default:void 0},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:void 0},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1,default:void 0},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`],setup(e,{emit:t}){let n=e,r=t,i=qm(),a=Um(),{forwardRef:o,currentElement:s}=Z(),c=Y(()=>n.ariaLabel||s.value?.textContent),l=Y(()=>{let{ariaLabel:e,...t}=n;return vl(t,a.content.value??{},{side:`top`,sideOffset:0,align:`center`,avoidCollisions:!0,collisionBoundary:[],collisionPadding:0,arrowPadding:0,sticky:`partial`,hideWhenDetached:!1})});return Hr(()=>{qc(window,`scroll`,e=>{e.target?.contains(i.trigger.value)&&i.onClose()},{capture:!0}),qc(document,Km,i.onClose)}),(e,t)=>(H(),W(P(gu),{"as-child":``,"disable-outside-pointer-events":!1,onEscapeKeyDown:t[0]||=e=>r(`escapeKeyDown`,e),onPointerDownOutside:t[1]||=e=>{P(i).disableClosingTrigger.value&&P(i).trigger.value?.contains(e.target)&&e.preventDefault(),r(`pointerDownOutside`,e)},onFocusOutside:t[2]||=us(()=>{},[`prevent`]),onDismiss:t[3]||=e=>P(i).onClose()},{default:I(()=>[K(P(xp),J({ref:P(o),"data-state":P(i).stateAttribute.value},{...e.$attrs,...l.value},{style:{"--reka-tooltip-content-transform-origin":`var(--reka-popper-transform-origin)`,"--reka-tooltip-content-available-width":`var(--reka-popper-available-width)`,"--reka-tooltip-content-available-height":`var(--reka-popper-available-height)`,"--reka-tooltip-trigger-width":`var(--reka-popper-anchor-width)`,"--reka-tooltip-trigger-height":`var(--reka-popper-anchor-height)`}}),{default:I(()=>[B(e.$slots,`default`),K(P(Ju),{id:P(i).contentId,role:`tooltip`},{default:I(()=>[Wa(we(c.value),1)]),_:1},8,[`id`])]),_:3},16,[`data-state`])]),_:3}))}}),Zm=z({__name:`TooltipContentHoverable`,props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(e){let t=Al(e),{forwardRef:n,currentElement:r}=Z(),{trigger:i,onClose:a}=qm(),o=Um(),{isPointerInTransit:s,onPointerExit:c}=Nl(i,r);return o.isPointerInTransitRef=s,c(()=>{a()}),qc(r,`pointermove`,e=>{let t=r.value;t&&e.pointerType!==`touch`&&t.ownerDocument.elementsFromPoint?.(e.clientX,e.clientY).some(e=>{if(t.contains(e))return!1;let n=e.closest(`[data-grace-area-trigger]`);return!!n&&n!==i.value})&&a()}),(e,r)=>(H(),W(Xm,J({ref:P(n)},P(t)),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),Qm=z({__name:`TooltipContent`,props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`],setup(e,{emit:t}){let n=e,r=t,i=qm(),a=jl(n,r),{forwardRef:o}=Z();return(t,n)=>(H(),W(P(iu),{present:e.forceMount||P(i).open.value},{default:I(()=>[(H(),W(ei(P(i).disableHoverableContent.value?Xm:Zm),J({ref:P(o)},P(a)),{default:I(()=>[B(t.$slots,`default`)]),_:3},16))]),_:3},8,[`present`]))}}),$m=z({__name:`TooltipPortal`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let t=e;return(e,n)=>(H(),W(P(Gu),he(Ha(t)),{default:I(()=>[B(e.$slots,`default`)]),_:3},16))}}),eh=z({__name:`TooltipTrigger`,props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(e){let t=e,n=qm(),r=Um();n.contentId||=Xl(void 0,`reka-tooltip-content`);let{forwardRef:i,currentElement:a}=Z(),o=N(!1),s=N(!1),c=Y(()=>n.disabled.value?{}:{click:h,focus:p,pointermove:d,pointerleave:f,pointerdown:u,blur:m});R(a,e=>{n.onTriggerChange(e)},{immediate:!0});function l(){setTimeout(()=>{o.value=!1},1)}function u(){n.open&&!n.disableClosingTrigger.value&&n.onClose(),o.value=!0,document.addEventListener(`pointerup`,l,{once:!0})}function d(e){e.pointerType!==`touch`&&!s.value&&!r.isPointerInTransitRef.value&&(n.onTriggerEnter(),s.value=!0)}function f(){n.onTriggerLeave(),s.value=!1}function p(e){o.value||(!n.ignoreNonKeyboardFocus.value||e.target.matches?.(`:focus-visible`))&&n.onOpen()}function m(){n.onClose()}function h(){n.disableClosingTrigger.value||n.onClose()}return(r,o)=>(H(),W(P(od),{"as-child":``,reference:e.reference??P(a)},{default:I(()=>[K(P(su),J({ref:P(i),"aria-describedby":P(n).open.value?P(n).contentId:void 0,"data-state":P(n).stateAttribute.value,as:e.as,"as-child":t.asChild,"data-grace-area-trigger":``},oi(c.value)),{default:I(()=>[B(r.$slots,`default`)]),_:3},16,[`aria-describedby`,`data-state`,`as`,`as-child`])]),_:3},8,[`reference`]))}}),th=Symbol.for(`frappe-ui:portal-target`);function nh(e){let t=Qn(th,void 0);return Y(()=>F(e)??F(t))}var rh=typeof document<`u`;function ih(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function ah(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&ih(e.default)}var Q=Object.assign;function oh(e,t){let n={};for(let r in t){let i=t[r];n[r]=ch(i)?i.map(e):e(i)}return n}var sh=()=>{},ch=Array.isArray;function lh(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var uh=/#/g,dh=/&/g,fh=/\//g,ph=/=/g,mh=/\?/g,hh=/\+/g,gh=/%5B/g,_h=/%5D/g,vh=/%5E/g,yh=/%60/g,bh=/%7B/g,xh=/%7C/g,Sh=/%7D/g,Ch=/%20/g;function wh(e){return e==null?``:encodeURI(``+e).replace(xh,`|`).replace(gh,`[`).replace(_h,`]`)}function Th(e){return wh(e).replace(bh,`{`).replace(Sh,`}`).replace(vh,`^`)}function Eh(e){return wh(e).replace(hh,`%2B`).replace(Ch,`+`).replace(uh,`%23`).replace(dh,`%26`).replace(yh,"`").replace(bh,`{`).replace(Sh,`}`).replace(vh,`^`)}function Dh(e){return Eh(e).replace(ph,`%3D`)}function Oh(e){return wh(e).replace(uh,`%23`).replace(mh,`%3F`)}function kh(e){return Oh(e).replace(fh,`%2F`)}function Ah(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var jh=/\/$/,Mh=e=>e.replace(jh,``);function Nh(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Vh(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:Ah(o)}}function Ph(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Fh(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Ih(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Lh(t.matched[r],n.matched[i])&&Rh(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Lh(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Rh(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!zh(e[n],t[n]))return!1;return!0}function zh(e,t){return ch(e)?Bh(e,t):ch(t)?Bh(t,e):e?.valueOf()===t?.valueOf()}function Bh(e,t){return ch(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Vh(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Hh={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Uh=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Wh=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function Gh(e){if(!e){if(rh){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Mh(e)}var Kh=/^[^#]+#/;function qh(e,t){return e.replace(Kh,`#`)+t}function Jh(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Yh=()=>({left:window.scrollX,top:window.scrollY});function Xh(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Jh(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Zh(e,t){return(history.state?history.state.position-t:-1)+e}var Qh=new Map;function $h(e,t){Qh.set(e,t)}function eg(e){let t=Qh.get(e);return Qh.delete(e),t}function tg(e){return typeof e==`string`||e&&typeof e==`object`}function ng(e){return typeof e==`string`||typeof e==`symbol`}var $=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),rg=Symbol(``);$.MATCHER_NOT_FOUND,$.NAVIGATION_GUARD_REDIRECT,$.NAVIGATION_ABORTED,$.NAVIGATION_CANCELLED,$.NAVIGATION_DUPLICATED;function ig(e,t){return Q(Error(),{type:e,[rg]:!0},t)}function ag(e,t){return e instanceof Error&&rg in e&&(t==null||!!(e.type&t))}function og(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(hh,` `),i=r.indexOf(`=`),a=Ah(i<0?r:r.slice(0,i)),o=i<0?null:Ah(r.slice(i+1));if(a in t){let e=t[a];ch(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function sg(e){let t=``;for(let n in e){let r=e[n];n=Dh(n),r==null?r!==void 0&&(t+=(t.length?`&`:``)+n):(ch(r)?r.map(e=>e&&Eh(e)):[r&&Eh(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function cg(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=ch(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var lg=Symbol(``),ug=Symbol(``),dg=Symbol(``),fg=Symbol(``),pg=Symbol(``);function mg(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function hg(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(ig($.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):tg(e)?c(ig($.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function gg(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(ih(s)){let c=(s.__vccOpts||s)[t];c&&a.push(hg(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=ah(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&hg(c,n,r,o,e,i)()}))}}}return a}function _g(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Lh(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Lh(e,s))||i.push(s))}return[n,r,i]}var vg=()=>location.protocol+`//`+location.host;function yg(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Fh(n,``)}return Fh(n,e)+r+i}function bg(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=yg(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Uh.pop,direction:u?u>0?Wh.forward:Wh.back:Wh.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(Q({},e.state,{scroll:Yh()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function xg(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Yh():null}}function Sg(e){let{history:t,location:n}=window,r={value:yg(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:vg()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,Q({},t.state,xg(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=Q({},i.value,t.state,{forward:e,scroll:Yh()});a(o.current,o,!0),a(e,Q({},xg(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Cg(e){e=Gh(e);let t=Sg(e),n=bg(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Q({location:``,base:e,go:r,createHref:qh.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var wg=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Tg=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Tg||{}),Eg={type:wg.Static,value:``},Dg=/[a-zA-Z0-9_]/;function Og(e){if(!e)return[[]];if(e===`/`)return[[Eg]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Tg.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Tg.Static?a.push({type:wg.Static,value:l}):n===Tg.Param||n===Tg.ParamRegExp||n===Tg.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:wg.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)if(c=e[s++],c===`\\`&&n!==Tg.ParamRegExp)r=n,n=Tg.EscapeNext;else switch(n){case Tg.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Tg.Param):f();break;case Tg.EscapeNext:f(),n=r;break;case Tg.Param:c===`(`?n=Tg.ParamRegExp:Dg.test(c)?f():(d(),n=Tg.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Tg.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Tg.ParamRegExpEnd:u+=c;break;case Tg.ParamRegExpEnd:d(),n=Tg.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===Tg.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var kg=`[^/]+?`,Ag={sensitive:!1,strict:!1,start:!0,end:!0},jg=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(jg||{}),Mg=/[.+*?^${}()[\]/\\|]/g;function Ng(e,t){let n=Q({},Ag,t),r=[],i=n.start?`^`:``,a=[],o=e.some(e=>e.some(e=>e.type===wg.Param&&/\\[1-9k]/.test(e.regexp||``)));for(let t of e){let e=t.length?[]:[jg.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let s=t[r],c=jg.Segment+(n.sensitive?jg.BonusCaseSensitive:0);if(s.type===wg.Static)r||(i+=`/`),i+=s.value.replace(Mg,`\\$&`),c+=jg.Static;else if(s.type===wg.Param){let{value:e,repeatable:n,optional:l,regexp:u}=s;a.push({name:e,repeatable:n,optional:l});let d=u||kg;if(d!==kg){c+=jg.BonusCustomRegExp;try{`${d}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${d}): `+t.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`,p=t[r+1],m=t[r+2];o||u||n||!m||m.type!==wg.Param||m.regexp||p.type!==wg.Static||(f=`([^/](?:(?!${p.value.replace(Mg,`\\$&`)})[^/])*)`),r||(f=l&&t.length<2?`(?:/${f})`:`/`+f),l&&(f+=`?`),i+=f,c+=jg.Dynamic,l&&(c+=jg.BonusOptional),n&&(c+=jg.BonusRepeatable),d===`.*`&&(c+=jg.BonusWildcard)}e.push(c)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=jg.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let s=new RegExp(i,n.sensitive?``:`i`);function c(e){let t=e.match(s),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function l(t){let n=``,r=!1;for(let i of e){r&&n.endsWith(`/`)||(n+=`/`),r=!1;for(let e of i)if(e.type===wg.Static)n+=e.value;else if(e.type===wg.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(ch(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=ch(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:s,score:r,keys:a,parse:c,stringify:l}}function Pg(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===jg.Static+jg.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===jg.Static+jg.Segment?1:-1:0}function Fg(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Pg(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Ig(r))return 1;if(Ig(i))return-1}return i.length-r.length}function Ig(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Lg={strict:!1,end:!0,sensitive:!1};function Rg(e,t,n){let r=Q(Ng(Og(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function zg(e,t){let n=[],r=new Map;t=lh(Lg,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Vg(e);s.aliasOf=r&&r.record;let l=lh(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Vg(Q({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Rg(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Ug(d)&&o(e.name)),qg(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:sh}function o(e){if(ng(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Gg(e,n);n.splice(t,0,e),e.record.name&&!Ug(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw ig($.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=Q(Bg(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Bg(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw ig($.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=Q({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Wg(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Bg(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Vg(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Hg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Hg(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Ug(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wg(e){return e.reduce((e,t)=>Q(e,t.meta),{})}function Gg(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Fg(e,t[i])<0?r=i:n=i+1}let i=Kg(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Kg(e){let t=e;for(;t=t.parent;)if(qg(t)&&Fg(e,t)===0)return t}function qg({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Jg(e){let t=Qn(dg),n=Qn(fg),r=Y(()=>{let n=P(e.to);return t.resolve(n)}),i=Y(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Lh.bind(null,i));if(o>-1)return o;let s=$g(e[t-2]);return t>1&&$g(i)===s&&a[a.length-1].path!==s?a.findIndex(Lh.bind(null,e[t-2])):o}),a=Y(()=>i.value>-1&&Qg(n.params,r.value.params)),o=Y(()=>i.value>-1&&i.value===n.matched.length-1&&Rh(n.params,r.value.params));function s(n={}){if(Zg(n)){let n=t[P(e.replace)?`replace`:`push`](P(e.to)).catch(sh);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Y(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Yg(e){return e.length===1?e[0]:e}var Xg=z({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Jg,setup(e,{slots:t}){let n=Wt(Jg(e)),{options:r}=Qn(dg),i=Y(()=>({[e_(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[e_(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Yg(t.default(n));return e.custom?r:X(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Zg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qg(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!ch(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function $g(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var e_=(e,t,n)=>e??t??n,t_=z({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Qn(pg),i=Y(()=>e.route||r.value),a=Qn(ug,0),o=Y(()=>{let e=P(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Y(()=>i.value.matched[o.value]);Zn(ug,Y(()=>o.value+1)),Zn(lg,s),Zn(pg,i);let c=N();return R(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&Lh(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return n_(n.default,{Component:l,route:r});let u=o.props[a],d=X(l,Q({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return n_(n.default,{Component:d,route:r})||d}}});function n_(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var r_=t_;function i_(e){let t=zg(e.routes,e),n=e.parseQuery||og,r=e.stringifyQuery||sg,i=e.history,a=mg(),o=mg(),s=mg(),c=nn(Hh),l=Hh;rh&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=oh.bind(null,e=>``+e),d=oh.bind(null,kh),f=oh.bind(null,Ah);function p(e,n){let r,i;return ng(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=Q({},a||c.value),typeof e==`string`){let r=Nh(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return Q(r,o,{params:f(o.params),hash:Ah(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=Q({},e,{path:Nh(n,e.path,a.path).path});else{let t=Q({},e.params);for(let e in t)t[e]??delete t[e];o=Q({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Ph(r,Q({},e,{hash:Th(l),path:s.path})),m=i.createHref(p);return Q({fullPath:p,hash:l,query:r===sg?cg(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Nh(n,e,c.value.path):Q({},e)}function y(e,t){if(l!==e)return ig($.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(Q(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),Q({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(Q(v(u),{state:typeof u==`object`?Q({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Ih(r,i,n)&&(f=ig($.NAVIGATION_DUPLICATED,{to:d,from:i}),le(i,i,!0,!1)),(f?Promise.resolve(f):ee(d,i)).catch(e=>ag(e)?ag(e,$.NAVIGATION_GUARD_REDIRECT)?e:ce(e):oe(e,d,i)).then(e=>{if(e){if(ag(e,$.NAVIGATION_GUARD_REDIRECT))return C(Q({replace:s},v(e.to),{state:typeof e.to==`object`?Q({},a,e.to.state):a,force:o}),t||d)}else e=E(d,i,!0,s,a);return te(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=de.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ee(e,t){let n,[r,i,s]=_g(e,t);n=gg(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(hg(r,e,t))});let c=w.bind(null,e,t);return n.push(c),pe(n).then(()=>{n=[];for(let r of a.list())n.push(hg(r,e,t));return n.push(c),pe(n)}).then(()=>{n=gg(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(hg(r,e,t))});return n.push(c),pe(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(ch(r.beforeEnter))for(let i of r.beforeEnter)n.push(hg(i,e,t));else n.push(hg(r.beforeEnter,e,t))}return n.push(c),pe(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=gg(s,`beforeRouteEnter`,e,t,T),n.push(c),pe(n))).then(()=>{n=[];for(let r of o.list())n.push(hg(r,e,t));return n.push(c),pe(n)}).catch(e=>ag(e,$.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function te(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function E(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Hh,l=rh?history.state:{};n&&(r||s?i.replace(e.fullPath,Q({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,le(e,t,n,s),ce()}let ne;function re(){ne||=i.listen((e,t,n)=>{if(!fe.listening)return;let r=_(e),a=S(r,fe.currentRoute.value);if(a){C(Q(a,{replace:!0,force:!0}),r).catch(sh);return}l=r;let o=c.value;rh&&$h(Zh(o.fullPath,n.delta),Yh()),ee(r,o).catch(e=>ag(e,$.NAVIGATION_ABORTED|$.NAVIGATION_CANCELLED)?e:ag(e,$.NAVIGATION_GUARD_REDIRECT)?(C(Q(v(e.to),{force:!0}),r).then(e=>{ag(e,$.NAVIGATION_ABORTED|$.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Uh.pop&&i.go(-1,!1)}).catch(sh),Promise.reject()):(n.delta&&i.go(-n.delta,!1),oe(e,r,o))).then(e=>{e||=E(r,o,!1),e&&(n.delta&&!ag(e,$.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Uh.pop&&ag(e,$.NAVIGATION_ABORTED|$.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),te(r,o,e)}).catch(sh)})}let ie=mg(),ae=mg(),D;function oe(e,t,n){ce(e);let r=ae.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function se(){return D&&c.value!==Hh?Promise.resolve():new Promise((e,t)=>{ie.add([e,t])})}function ce(e){return D||(D=!e,re(),ie.list().forEach(([t,n])=>e?n(e):t()),ie.reset()),e}function le(t,n,r,i){let{scrollBehavior:a}=e;if(!rh||!a)return Promise.resolve();let o=!r&&eg(Zh(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Fn().then(()=>a(t,n,o)).then(e=>e&&Xh(e)).catch(e=>oe(e,t,n))}let ue=e=>i.go(e),O,de=new Set,fe={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ae.add,isReady:se,install(e){e.component(`RouterLink`,Xg),e.component(`RouterView`,r_),e.config.globalProperties.$router=fe,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>P(c)}),rh&&!O&&c.value===Hh&&(O=!0,b(i.location).catch(e=>{}));let t={};for(let e in Hh)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(dg,fe),e.provide(fg,Gt(t)),e.provide(pg,c);let n=e.unmount;de.add(e),e.unmount=function(){de.delete(e),de.size<1&&(l=Hh,ne&&ne(),ne=null,c.value=Hh,O=!1,D=!1),n()}}};function pe(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return fe}function a_(){return Qn(dg)}var o_=z({__name:`Spinner`,props:{size:{},theme:{},track:{type:Boolean,default:!1}},setup(e){let t=e,n={xs:{px:12,thickness:1.5,inset:.9},sm:{px:14,thickness:2,inset:1.05},md:{px:16,thickness:2,inset:1.2},lg:{px:20,thickness:2,inset:1.5}},r=Y(()=>t.theme==null?null:{gray:`text-ink-gray-8`,red:`text-ink-red-7`}[t.theme]),i=Y(()=>{let e=t.size==null?void 0:n[t.size];if(e)return{width:`${e.px}px`,height:`${e.px}px`,"--fui-spinner-thickness":`${e.thickness}px`,"--fui-spinner-mask-thickness":`${e.thickness}px`,"--fui-spinner-inset":`${e.inset}px`}});return(t,n)=>(H(),U(`svg`,{class:k([`fui-spinner inline-block shrink-0`,[r.value,{"fui-spinner--track":e.track}]]),width:`16`,height:`16`,role:`status`,"aria-label":`Loading`,style:O(i.value)},null,6))}}),s_=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},c_=s_(o_,[[`__scopeId`,`data-v-babb6d3c`]]),l_={key:1,"data-slot":`bubble`,class:`rounded-4 bg-surface-gray-10 px-2 py-1 text-xs text-ink-base shadow-xl`},u_=z({__name:`TooltipBubble`,props:{side:{default:`top`},offset:{default:4},text:{},bare:{type:Boolean,default:!1}},setup(e){let t=nh();return(n,r)=>(H(),W(P($m),{to:P(t)},{default:I(()=>[K(P(Qm),{"data-slot":`content`,side:e.side,"side-offset":e.offset,class:`z-[100]`},{default:I(()=>[e.bare?B(n.$slots,`content`,{},void 0,void 0,0):(H(),U(`div`,l_,[B(n.$slots,`content`,{},()=>[Wa(we(e.text),1)])])),K(P(Hm),{"data-slot":`arrow`,class:`fill-surface-gray-10`,width:8,height:4})]),_:3},8,[`side`,`side-offset`])]),_:3},8,[`to`]))}});function d_(e){return typeof e==`string`&&e.startsWith(`lucide-`)}function f_(e){return typeof e!=`string`||!e||e.startsWith(`lucide-`)?!1:!/[a-zA-Z0-9]/.test(e)}function p_(e,t,n){typeof n==`string`&&n&&(d_(n)||f_(n))}function m_(e,t,n){}var h_=new WeakMap;function g_(){let e=eo();if(!e)return nn(0);let t=h_.get(e);if(t)return t;let n=nn(0);return Ur(()=>{n.value++}),h_.set(e,n),n}function __(){let e=di(),t=g_();return new Proxy(e,{get(e,n,r){return t.value,Reflect.get(e,n,r)},has(e,n){return t.value,Reflect.has(e,n)},ownKeys(e){return t.value,Reflect.ownKeys(e)}})}var v_={type:[String,Object,Function],default:void 0},y_=z({name:`Button`,inheritAttrs:!1,props:{theme:{type:String,default:`gray`},size:{type:String,default:`sm`},variant:{type:String,default:`subtle`},label:{type:String,default:void 0},icon:v_,iconLeft:v_,iconRight:v_,tooltip:{type:String,default:void 0},loading:{type:Boolean,default:!1},loadingText:{type:String,default:void 0},disabled:{type:Boolean,default:!1},route:{type:[String,Object],default:void 0},href:{type:String,default:void 0},type:{type:String,default:`button`}},slots:Object,setup(e,{attrs:t,slots:n}){let r=__();L(()=>{p_(`Button`,`icon`,e.icon),p_(`Button`,`iconLeft`,e.iconLeft),p_(`Button`,`iconRight`,e.iconRight)});let i=Y(()=>e.disabled||e.loading),a=Y(()=>!!e.tooltip?.length),o=Um(null),s=Y(()=>r.default),c=Y(()=>{let e=s.value?.();if(!Array.isArray(e))return!1;let t=e[0]?.type?.name;return typeof t==`string`&&t.startsWith(`lucide-`)}),l=Y(()=>!!e.icon||!!r.icon||c.value),u=Y(()=>({xs:`h-3.5`,sm:`h-4`,md:`h-4.5`,lg:`h-5`})[e.size]),d=Y(()=>({xs:`size-3.5`,sm:`size-4`,md:`size-4.5`,lg:`size-5`})[e.size]),f=Y(()=>{let e=t[`data-state`];return e===`open`||e===`active`}),p=Y(()=>{let t={gray:`text-ink-base bg-surface-gray-10 hover:bg-surface-gray-9 active:bg-surface-gray-8`,blue:`text-ink-base bg-surface-blue-6 hover:bg-surface-blue-7 active:bg-surface-blue-8`,green:`text-ink-base bg-surface-green-7 hover:bg-surface-green-8 active:bg-surface-green-9`,red:`text-ink-base dark:text-ink-red-9 bg-surface-red-7 hover:bg-surface-red-8 active:bg-surface-red-9`}[e.theme],n={gray:`text-ink-gray-8 bg-surface-gray-2 hover:bg-surface-gray-3 active:bg-surface-gray-4`,blue:`text-ink-blue-5 bg-surface-blue-2 hover:bg-surface-blue-3 active:bg-surface-blue-4`,green:`text-ink-green-8 bg-surface-green-2 hover:bg-surface-green-3 active:bg-surface-green-4`,red:`text-ink-red-7 bg-surface-red-2 hover:bg-surface-red-3 active:bg-surface-red-4`}[e.theme],r={gray:`text-ink-gray-8 bg-surface-base border border-outline-gray-2 hover:border-outline-gray-3 active:border-outline-gray-3 active:bg-surface-gray-4`,blue:`text-ink-blue-5 bg-surface-base border border-outline-blue-1 hover:border-outline-blue-4 active:border-outline-blue-4 active:bg-surface-blue-4`,green:`text-ink-green-8 bg-surface-base border border-outline-green-3 hover:border-outline-green-5 active:border-outline-green-5 active:bg-surface-green-4`,red:`text-ink-red-7 bg-surface-base border border-outline-red-1 hover:border-outline-red-3 active:border-outline-red-3 active:bg-surface-red-3`}[e.theme],i={gray:`text-ink-gray-8 bg-transparent hover:bg-surface-gray-3 active:bg-surface-gray-4`,blue:`text-ink-blue-5 bg-transparent hover:bg-surface-blue-3 active:bg-surface-blue-4`,green:`text-ink-green-8 bg-transparent hover:bg-surface-green-3 active:bg-surface-green-4`,red:`text-ink-red-7 bg-transparent hover:bg-surface-red-3 active:bg-surface-red-4`}[e.theme],a={gray:``,blue:`focus-visible:focus-ring-blue`,green:`focus-visible:focus-ring-green`,red:`focus-visible:focus-ring-red`}[e.theme],o={subtle:n,solid:t,outline:r,ghost:i}[e.variant],s=`${e.theme}-${e.variant}`,c={"gray-solid":`bg-surface-gray-2 text-ink-gray-4`,"gray-subtle":`bg-surface-gray-2 text-ink-gray-4`,"gray-outline":`bg-surface-gray-2 text-ink-gray-4 border border-outline-gray-2`,"gray-ghost":`text-ink-gray-4`,"blue-solid":`bg-surface-blue-4 text-ink-base`,"blue-subtle":`bg-surface-blue-2 text-ink-blue-link`,"blue-outline":`bg-surface-blue-2 text-ink-blue-link border border-outline-blue-1`,"blue-ghost":`text-ink-blue-link`,"green-solid":`bg-surface-green-2 text-ink-green-4`,"green-subtle":`bg-surface-green-2 text-ink-green-4`,"green-outline":`bg-surface-green-2 text-ink-green-4 border border-outline-green-3`,"green-ghost":`text-ink-green-4`,"red-solid":`bg-surface-red-2 text-ink-red-4`,"red-subtle":`bg-surface-red-2 text-ink-red-4`,"red-outline":`bg-surface-red-2 text-ink-red-4 border border-outline-red-1`,"red-ghost":`text-ink-red-4`}[s],u={"gray-solid":`text-ink-base bg-surface-gray-8`,"gray-subtle":`text-ink-gray-8 bg-surface-gray-4`,"gray-outline":`text-ink-gray-8 bg-surface-gray-4 border border-outline-gray-3`,"gray-ghost":`text-ink-gray-8 bg-surface-gray-4`,"blue-solid":`text-ink-base bg-surface-blue-8`,"blue-subtle":`text-ink-blue-5 bg-surface-blue-4`,"blue-outline":`text-ink-blue-5 bg-surface-blue-4 border border-outline-blue-4`,"blue-ghost":`text-ink-blue-5 bg-surface-blue-4`,"green-solid":`text-ink-base bg-surface-green-9`,"green-subtle":`text-ink-green-8 bg-surface-green-4`,"green-outline":`text-ink-green-8 bg-surface-green-4 border border-outline-green-5`,"green-ghost":`text-ink-green-8 bg-surface-green-4`,"red-solid":`text-ink-base bg-surface-red-9`,"red-subtle":`text-ink-red-7 bg-surface-red-4`,"red-outline":`text-ink-red-7 bg-surface-red-3 border border-outline-red-3`,"red-ghost":`text-ink-red-7 bg-surface-red-4`}[s],d=e.disabled?c:f.value?u:o,p=l.value?{xs:`h-6 w-6 rounded-3`,sm:`h-7 w-7 rounded-4`,md:`h-8 w-8 rounded-4`,lg:`h-10 w-10 rounded-5`}[e.size]:{xs:`h-6 text-xs px-1.5 rounded-3`,sm:`h-7 text-base px-2 rounded-4`,md:`h-8 text-base-medium px-2.5 rounded-4`,lg:`h-10 text-lg-medium px-3 rounded-5`}[e.size];return[`inline-flex items-center justify-center gap-2 transition-colors shrink-0`,d,e.loading&&!e.disabled?`pointer-events-none`:``,a,p]}),m=Y(()=>!i.value&&e.route?{is:Xg,props:{to:e.route}}:!i.value&&e.href?{is:`a`,props:{href:e.href,target:`_blank`,rel:`noreferrer noopener`}}:{is:`button`,props:{type:e.type,disabled:i.value}});function h(e,t){return e?typeof e==`string`?e.startsWith(`lucide-`)?X(`span`,{class:[e,d.value],"aria-hidden":`true`}):null:X(e,{class:u.value}):null}function g(){return e.loading?X(c_,{class:{"size-3.5":e.size===`xs`,"size-4":e.size===`sm`,"size-4.5":e.size===`md`,"size-5":e.size===`lg`}}):r.prefix?r.prefix():h(e.iconLeft,`iconLeft`)}function _(){return e.loading&&e.loadingText?e.loadingText:l.value&&!e.loading?e.icon?h(e.icon,`icon`):r.icon?r.icon():c.value?X(`div`,{class:u.value},r.default?.()??e.label):null:X(`span`,{class:[`truncate leading-tighter`,{"sr-only":l.value}]},r.default?.()??e.label)}function v(){return r.suffix?r.suffix():h(e.iconRight,`iconRight`)}return()=>{let{class:n,...r}=t,{is:i,props:s}=m.value,c=[g(),_(),v()],l={...s,...r,class:[n,p.value],"aria-label":e.label??r[`aria-label`],"aria-busy":e.loading||void 0},u=typeof i==`string`?X(i,l,c):X(i,l,{default:()=>c});if(!a.value)return u;let d=X(Ym,null,{default:()=>[X(eh,{asChild:!0},{default:()=>u}),X(u_,{text:e.tooltip})]});return o?d:X(Gm,null,{default:()=>d})}}});function b_(){return`frappe-ui-`+Er()}function x_(e,t,n,r){return t!==void 0&&Object.prototype.hasOwnProperty.call(e,t)?e[t]:(S_(e,t,n,r),e[n])}function S_(e,t,n,{component:r,prop:i}){}function C_(e){if(!e)return[];if(typeof e==`string`)return[e];if(Array.isArray(e))return e.filter(Boolean).map(String);let t=e.messages;if(Array.isArray(t)&&t.length){let e=t.filter(Boolean).map(String);if(e.length)return e}else if(typeof t==`string`&&t)return[t];return e.message?[e.message]:[]}function w_(e,t={}){let n=b_(),r=Y(()=>e.id??n),i=Y(()=>`${r.value}-label`),a=Y(()=>`${r.value}-description`),o=Y(()=>`${r.value}-error`),s=Y(()=>C_(e.error)),c=Y(()=>s.value.length>0),l=Y(()=>!!e.description&&!c.value),u=g_(),d=Y(()=>(u.value,l.value||!!t.hasDescriptionSlot?.())),f=Y(()=>{let e=[];return d.value&&e.push(a.value),c.value&&e.push(o.value),e.length?e.join(` `):void 0});return{inputId:r,labelId:i,descriptionId:a,errorMessageId:o,labelledBy:Y(()=>(u.value,e.label||t.hasLabelSlot?.()?i.value:void 0)),describedBy:f,hasError:c,errorLines:s,showDescription:l,rendersDescription:d,dataAttrs:Y(()=>{let n=t.size?.(),r=t.variant?.(),i=t.disabled?.(),a=t.state?.(),o={"data-state":c.value?`invalid`:a??`valid`};return n&&(o[`data-size`]=n),r&&(o[`data-variant`]=r),i&&(o[`data-disabled`]=`true`),e.required&&(o[`data-required`]=`true`),o})}}var T_=z({__name:`RequiredIndicator`,props:{required:{type:Boolean}},setup(e){return(t,n)=>e.required?(H(),U(V,{key:0},[n[0]||=G(`span`,{class:`text-ink-red-5 select-none`,"aria-hidden":`true`},`*`,-1),n[1]||=G(`span`,{class:`sr-only`},`(required)`,-1)],64)):q(``,!0)}}),E_=[`id`,`for`],D_=z({__name:`InputLabel`,props:{id:{},forId:{},label:{},required:{type:Boolean},color:{default:`gray-6`},disabled:{type:Boolean}},setup(e){let t=e,n=Y(()=>[`block text-sm leading-tighter`,t.disabled?`text-ink-gray-4`:t.color===`gray-7`?`text-ink-gray-7`:`text-ink-gray-6`]);return(t,r)=>e.label||t.$slots.default?(H(),U(`label`,{key:0,id:e.id,for:e.forId,"data-slot":`label`,class:k(n.value)},[t.$slots.default?B(t.$slots,`default`,{required:!!e.required},void 0,void 0,0):(H(),U(V,{key:1},[Wa(we(e.label)+` `,1),K(T_,{required:e.required},null,8,[`required`])],64))],10,E_)):q(``,!0)}}),O_=[`id`],k_=z({__name:`InputDescription`,props:{id:{},description:{},disabled:{type:Boolean}},setup(e){return(t,n)=>t.$slots.default||e.description?(H(),U(`p`,{key:0,id:e.id,"data-slot":`description`,class:k([`text-p-sm`,e.disabled?`text-ink-gray-4`:`text-ink-gray-6`])},[B(t.$slots,`default`,{},()=>[Wa(we(e.description),1)])],10,O_)):q(``,!0)}}),A_=[`id`],j_=z({__name:`InputError`,props:{id:{},lines:{}},setup(e){return(t,n)=>e.lines.length?(H(),U(`div`,{key:0,id:e.id,"data-slot":`error`,role:`alert`,class:`text-p-sm whitespace-pre-line text-ink-red-5`},we(e.lines.join(`
`)),9,A_)):q(``,!0)}});function M_(e){return e==null||typeof e==`boolean`?[]:Array.isArray(e)?e:[e]}function N_(e){return M_(e).some(e=>e==null||typeof e==`boolean`?!1:Array.isArray(e)?N_(e):typeof e==`string`?e.trim().length>0:typeof e==`number`?!0:!La(e)||e.type===ka?!1:e.type===Oa?String(e.children??``).trim().length>0:e.type!==V||N_(e.children))}function P_(e){for(let t of M_(e))if(Array.isArray(t)){let e=P_(t);if(e)return e}else if(La(t)&&t.type!==ka){if(t.type===Oa){if(String(t.children??``).trim().length>0)return t}else if(t.type===V){let e=P_(t.children);if(e)return e}else return t}return null}var F_={key:0,"data-slot":`item-prefix`,class:`flex shrink-0 items-center justify-center`},I_={"data-slot":`item-label`,class:`min-w-0 flex-1 leading-tighter`},L_={key:1,"data-slot":`item-suffix`,class:`flex shrink-0 items-center justify-center`},R_=z({__name:`ItemListRow`,props:{as:{default:`div`},size:{default:`sm`},active:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){let t=e,n=Y(()=>t.active||t.selected),r={xs:`min-h-6 px-1.5 py-1 text-xs`,sm:`min-h-7 px-2 py-1.5 text-base`,md:`min-h-8 px-2.5 py-1.5 text-base`,lg:`min-h-10 px-3 py-2 text-lg`},i=Y(()=>x_(r,t.size,`sm`,{component:`ItemListRow`,prop:`size`})),a=Y(()=>t.disabled?`cursor-not-allowed text-ink-gray-4`:n.value?`bg-surface-gray-3 text-ink-gray-8`:`text-ink-gray-7`);return(t,r)=>(H(),W(ei(e.as),{"data-slot":`item-list-row`,"data-size":e.size,"data-state":n.value?`active`:`inactive`,"data-disabled":e.disabled?``:void 0,class:k([`flex w-full items-center gap-2 rounded-4 transition-colors`,i.value,a.value])},{default:I(()=>[P(N_)(t.$slots.prefix?.())?(H(),U(`div`,F_,[B(t.$slots,`prefix`)])):q(``,!0),G(`div`,I_,[B(t.$slots,`label`,{},()=>[B(t.$slots,`default`)])]),P(N_)(t.$slots.suffix?.())?(H(),U(`div`,L_,[B(t.$slots,`suffix`)])):q(``,!0)]),_:3},8,[`data-size`,`data-state`,`data-disabled`,`class`]))}}),z_=Symbol(`frappe-ui.onErrorReported`);function B_(e,t){if(t){if(e&&typeof e==`object`){let t=e;if(t[z_])return;t[z_]=!0}t(e)}}function V_(e){if(!e)return!1;let t=e.split(/[?#]/)[0].replace(/\/+$/,``);return t===`/api/method/login`||t.endsWith(`/api/method/login`)}function H_(e){let t=e;return bs({...e,transformRequest:e=>{if(!e.url)throw Error(`[frappeRequest] options.url is required`);let t=Ps(`requestHeaders`)||{};typeof t==`function`&&(t=t());let n=Object.assign({Accept:`application/json`,"Content-Type":`application/json; charset=utf-8`,"X-Frappe-Site-Name":window.location.hostname},t,e.headers||{});window.csrf_token&&window.csrf_token!==`{{ csrf_token }}`&&(n[`X-Frappe-CSRF-Token`]=window.csrf_token),!e.url.startsWith(`/`)&&!/^https?:\/\//i.test(e.url)&&(e.url=`/api/method/`+e.url);let r=Ps(`requestBaseUrl`),i=e.credentials;return r&&e.url.startsWith(`/`)&&(e.url=r.replace(/\/$/,``)+e.url,i||=`include`),{...e,method:e.method||`POST`,headers:n,credentials:i}},transformResponse:async(e,n)=>{let r=n.url;if(e.ok){let i=await e.json();if(i.docs||V_(r))return i;if(i.exc)try{console.groupCollapsed(r),console.log(n);let e=JSON.parse(i.exc);for(let t of e)console.log(t);console.groupEnd()}catch(e){console.warn(`Error printing debug messages`,e)}if(i._server_messages){let e=Ps(`serverMessagesHandler`)||t.onServerMessages||null;e&&e(JSON.parse(i?._server_messages)||[])}return i.message}{let r=await e.text(),i={},a;try{i=JSON.parse(r)}catch{}let o=[[n.url,i?.exc_type,i?._error_message].filter(Boolean).join(` `)];if(i.exc){a=i.exc;try{a=JSON.parse(a)[0],console.log(a)}catch{}}let s=Error(o.join(`
`));throw s.exc_type=i.exc_type,s.exc=a,s.response=e,s.status=e.status,s.messages=i._server_messages?JSON.parse(i._server_messages):[],i.message!==void 0&&(s.messages=s.messages.concat(i.message)),s.messages=s.messages.map(e=>{try{return JSON.parse(e).message}catch{return e}}),s.messages=s.messages.filter(Boolean),s.messages.length||(s.messages=i._error_message?[i._error_message]:[`Internal Server Error`]),B_(s,t.onError),s}},transformError:e=>{throw B_(e,t.onError),e}})}var U_={class:`flex flex-col gap-1`},W_={class:`flex items-center`},G_=`me-2 size-4 flex-shrink-0 text-ink-gray-6`,K_=z({inheritAttrs:!1,__name:`Switch`,props:gi({size:{default:`sm`},padded:{type:Boolean,default:!1},controlPosition:{},disabled:{type:Boolean,default:!1},icon:{},label:{},description:{},error:{},required:{type:Boolean},id:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(e,{expose:t}){let n=e,r=Ii(e,`modelValue`),i=fi(),a=N(null),o=Y(()=>Object.fromEntries(Object.entries(i).filter(([e])=>e!==`class`&&e!==`style`)));t({focus:e=>a.value?.$el?.focus(e)});let s=__();di();let{inputId:c,labelId:l,descriptionId:u,errorMessageId:d,describedBy:f,hasError:p,errorLines:m,showDescription:h,rendersDescription:g,dataAttrs:_}=w_(n,{size:()=>n.size,disabled:()=>n.disabled,state:()=>r.value?`checked`:`unchecked`,hasLabelSlot:()=>!!s.label,hasDescriptionSlot:()=>!!s.description}),v=Y(()=>[`relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-100 ease-in-out items-center`,n.padded?`focus:outline-none focus:ring-0`:``,`disabled:cursor-not-allowed disabled:bg-surface-gray-3`,r.value?`bg-surface-gray-10 enabled:hover:bg-surface-gray-9 active:bg-surface-gray-8 group-hover:enabled:bg-surface-gray-9`:`bg-surface-gray-4 enabled:hover:bg-surface-gray-5 active:bg-surface-gray-6 group-hover:enabled:bg-surface-gray-5`,n.size===`md`?`h-5 w-8 border-[3px]`:n.size===`sm`?`h-4 w-[26px] border-2`:`h-3.5 w-[24px] border-2`]),y=Y(()=>[`pointer-events-none inline-block transform rounded-full bg-surface-base shadow ring-0 transition duration-100 ease-in-out`,n.size===`md`?`h-3.5 w-3.5`:n.size===`sm`?`h-3 w-3`:`h-2.5 w-2.5`,n.size===`md`?r.value?`translate-x-3 rtl:-translate-x-3`:`translate-x-0`:(n.size,r.value?`translate-x-2.5 rtl:-translate-x-2.5`:`translate-x-0`)]),b=Y(()=>[`leading-tight select-none`,n.disabled?`cursor-not-allowed`:`cursor-pointer`]),x=Y(()=>n.controlPosition??`end`),S=Y(()=>{let e=n.label||s.label,t=n.description||s.description;if(!e&&!t)return`flex`;let r=x.value===`start`;if(t)return[`flex items-center`,r?`flex-row-reverse justify-end`:`justify-between`,n.size===`md`?`gap-x-3.5`:`gap-x-2.5`];let i=[`flex group items-center`,r?`flex-row-reverse justify-end gap-x-2.5`:`justify-between gap-x-3`];return n.padded||(i.push(`py-1.5 cursor-pointer rounded-4`),n.disabled&&i.push(`cursor-not-allowed`)),i}),C=Y(()=>{if(x.value===`start`)return n.size===`md`?`ps-[42px]`:n.size===`sm`?`ps-9`:`ps-8`}),w=Y(()=>n.description||s.description?`mt-0.5`:n.padded?`mt-1`:`-mt-0.5`),T=Y(()=>{if(!n.padded)return;let e=g.value||p.value,t=[`group rounded-4 transition-colors`,e?n.size===`md`?`px-3 py-2`:n.size===`sm`?`px-2 py-1.5`:`px-1.5 py-1.5`:n.size===`md`?`h-8 px-3`:n.size===`sm`?`h-7 px-2`:`h-6 px-1.5`];return e||t.push(`justify-center`),t.push(x.value===`start`?`w-fit`:`w-full`),t.push(n.disabled?`cursor-not-allowed`:`cursor-pointer hover:bg-surface-gray-3 active:bg-surface-gray-4 [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-outline-gray-3`),t}),ee=e=>{if(!n.padded||n.disabled)return;let t=e.target;t.closest(`[data-slot="control"]`)||t.closest(`[data-slot="label"]`)||(r.value=!r.value)};return(e,t)=>(H(),U(`div`,{class:k([`flex flex-col`,[T.value,P(i).class]]),style:O(P(i).style),onClick:ee},[G(`div`,{class:k(S.value)},[G(`div`,U_,[G(`div`,W_,[n.icon&&typeof n.icon==`string`?(H(),U(`span`,{key:0,class:k([n.icon,G_]),"aria-hidden":`true`},null,2)):n.icon?(H(),W(ei(n.icon),{key:1,class:k(G_)})):q(``,!0),n.label||e.$slots.label?(H(),W(D_,{key:2,id:P(l),"for-id":P(c),label:n.label,required:n.required,color:`gray-7`,disabled:n.disabled,class:k(b.value)},ii({_:2},[e.$slots.label?{name:`default`,fn:I(t=>[B(e.$slots,`label`,he(Ha(t)))]),key:`0`}:void 0]),1032,[`id`,`for-id`,`label`,`required`,`disabled`,`class`])):q(``,!0)])]),K(P(Bm),J({ref_key:`switchRef`,ref:a,id:P(c),modelValue:r.value,"onUpdate:modelValue":t[0]||=e=>r.value=e,class:v.value,disabled:n.disabled,"aria-required":n.required||void 0,"aria-invalid":P(p)||void 0,"aria-errormessage":P(p)?P(d):void 0,"aria-describedby":P(f),"data-slot":`control`},{...P(_),...o.value}),{default:I(()=>[K(P(Vm),{class:k(y.value)},null,8,[`class`])]),_:1},16,[`id`,`modelValue`,`class`,`disabled`,`aria-required`,`aria-invalid`,`aria-errormessage`,`aria-describedby`])],2),P(h)||P(p)||e.$slots.description?(H(),U(`div`,{key:0,class:k([w.value,C.value])},[P(h)||e.$slots.description?(H(),W(k_,{key:0,id:P(u),description:n.description,disabled:n.disabled},{default:I(()=>[e.$slots.description?B(e.$slots,`description`,{},void 0,void 0,0):q(``,!0)]),_:3},8,[`id`,`description`,`disabled`])):q(``,!0),P(p)?(H(),W(j_,{key:1,id:P(d),lines:P(m)},null,8,[`id`,`lines`])):q(``,!0)],2)):q(``,!0)],6))}}),q_=z({__name:`MenuRenderContent`,props:{content:{type:[Object,String,Number,Boolean,null,Array]}},setup(e){let t=z({name:`MenuRenderContentRenderer`,props:{content:{type:[Object,Array,String,Number],default:void 0}},setup(e){return()=>e.content??null}});return(n,r)=>(H(),W(P(t),{content:e.content},null,8,[`content`]))}}),J_={content:`menu-content z-[100] min-w-40 divide-y divide-outline-elevation-2 rounded-6 bg-surface-elevation-2 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`,group:`p-1.5`,groupLabel:`flex h-7 items-center px-2 text-sm font-medium leading-tighter text-ink-gray-4`,itemIcon:`size-4 shrink-0`,itemIconPlaceholder:`size-4 shrink-0`,chevronIcon:`size-4 shrink-0`,menuItem:`cursor-pointer rounded-4 outline-none data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed`};function Y_(e){return`group`in e&&(`options`in e||`items`in e)}function X_(e){return!e.options&&e.items,e.options??[]}function Z_(e){return e.switch===!0}function Q_(e){return Array.isArray(e.submenu)}function $_(e){return`component`in e&&e.component,!e.condition||e.condition()}function ev(e){return e??`gray`}function tv(e){return{...e,theme:ev(e.theme),selected:!!e.selected}}function nv(e){return(e||[]).filter(Boolean).filter($_).map(tv)}function rv(e=[]){let t=[],n=null,r=0;function i(){!n||!n.options.length||t.push(n),n=null}for(let[a,o]of e.entries())if(o){if(Y_(o)){i();let e=nv(X_(o));if(!e.length)continue;let{items:n,...r}=o;t.push({...r,key:o.key??a,options:e})}else $_(o)&&(n||={key:`implicit-${r++}`,group:``,hideLabel:!0,options:[]},n.options.push(tv(o)))}return i(),t}function iv(e){return e.options.some(e=>!!e.icon)}function av(e){return e.disabled?`text-ink-gray-4`:e.theme===`red`?`text-ink-red-7`:`text-ink-gray-6`}function ov(e){return e.disabled?`text-ink-gray-4`:e.theme===`red`?`text-ink-red-7`:`text-ink-gray-7`}function sv(e){return e.theme===`red`?`focus:bg-surface-red-3 data-[highlighted]:bg-surface-red-3 data-[state=open]:bg-surface-red-3`:`focus:bg-surface-alpha-gray-2 data-[highlighted]:bg-surface-alpha-gray-2 data-[state=open]:bg-surface-alpha-gray-2 data-[state=checked]:bg-surface-gray-3 data-[highlighted]:data-[state=checked]:bg-surface-gray-4`}var cv={key:3,class:`min-w-0`},lv={key:0,class:`truncate text-p-sm text-ink-gray-5`},uv=s_(z({__name:`MenuItemContent`,props:{item:{},close:{},reserveIconSpace:{type:Boolean,default:!1},trailing:{default:`none`},slotFns:{}},setup(e){let t=e,n=Y(()=>t.item.slot?`item-${t.item.slot}`:void 0),r=Y(()=>!!t.item.selected);L(()=>{p_(`Dropdown`,`item.icon`,t.item.icon)});let i=Y(()=>t.slotFns?.[`item-prefix`]?.({item:t.item,close:t.close,selected:r.value})),a=Y(()=>t.slotFns?.[`item-label`]?.({item:t.item,close:t.close,selected:r.value})),o=Y(()=>{if(n.value)return t.slotFns?.[n.value]?.({item:t.item,close:t.close,selected:r.value})}),s=Y(()=>t.slotFns?.[`item-suffix`]?.({item:t.item,close:t.close,selected:r.value})),c=Y(()=>({item:t.item,close:t.close,selected:r.value})),l=Y(()=>t.item.slots?.prefix?.(c.value)),u=Y(()=>t.item.slots?.label?.(c.value)),d=Y(()=>t.item.slots?.suffix?.(c.value)),f=Y(()=>N_(i.value)),p=Y(()=>N_(l.value)),m=Y(()=>N_(o.value)),h=Y(()=>N_(a.value)),g=Y(()=>N_(u.value)),_=Y(()=>N_(s.value)),v=Y(()=>N_(d.value));function y(e){t.item.onClick?.(e)}return(t,n)=>(H(),W(R_,{selected:r.value,disabled:e.item.disabled},{prefix:I(()=>[f.value?(H(),W(q_,{key:0,content:i.value},null,8,[`content`])):p.value?(H(),W(q_,{key:1,content:l.value},null,8,[`content`])):P(d_)(e.item.icon)?(H(),U(`span`,{key:2,class:k([e.item.icon,P(J_).itemIcon,P(av)(e.item)]),"aria-hidden":`true`},null,2)):P(f_)(e.item.icon)?(H(),U(`span`,{key:3,class:k([P(J_).itemIcon,`inline-flex items-center justify-center text-base leading-none`]),"aria-hidden":`true`},we(e.item.icon),3)):e.item.icon&&typeof e.item.icon!=`string`?(H(),W(ei(e.item.icon),{key:4,class:k([P(J_).itemIcon,P(av)(e.item)])},null,8,[`class`])):e.reserveIconSpace?(H(),U(`div`,{key:5,class:k(P(J_).itemIconPlaceholder)},null,2)):q(``,!0)]),label:I(()=>[m.value?(H(),W(q_,{key:0,content:o.value},null,8,[`content`])):h.value?(H(),W(q_,{key:1,content:a.value},null,8,[`content`])):g.value?(H(),W(q_,{key:2,content:u.value},null,8,[`content`])):(H(),U(`div`,cv,[G(`div`,{class:k([`truncate leading-tighter`,P(ov)(e.item)])},we(e.item.label),3),e.item.description?(H(),U(`div`,lv,we(e.item.description),1)):q(``,!0)]))]),suffix:I(()=>[_.value?(H(),W(q_,{key:0,content:s.value},null,8,[`content`])):v.value?(H(),W(q_,{key:1,content:d.value},null,8,[`content`])):e.trailing===`switch`?(H(),W(K_,{key:2,class:`ml-auto`,disabled:e.item.disabled,"model-value":e.item.switchValue||!1,"onUpdate:modelValue":y},null,8,[`disabled`,`model-value`])):e.trailing===`submenu`?(H(),U(`span`,{key:3,class:k([`lucide-chevron-right`,P(J_).chevronIcon,P(av)(e.item)]),"aria-hidden":`true`},null,2)):q(``,!0)]),_:1},8,[`selected`,`disabled`]))}}),[[`__scopeId`,`data-v-5f221e72`]]),dv=z({__name:`MenuRenderContentAsChild`,props:{content:{type:[Object,String,Number,Boolean,null,Array]}},setup(e){let t=e,n=fi();function r(){let e=P_(t.content);return e?Ua(e,n):null}return(e,t)=>(H(),W(ei({render:r})))}}),fv=[`data-disabled`],pv={key:1,"data-slot":`empty`,class:`p-1.5 text-base text-ink-gray-5`},mv=s_(z({name:`Menu`,__name:`Menu`,props:{groups:{default:()=>[]},close:{},slotFns:{},portalTo:{},primitives:{}},setup(e){let t=e,n=nh(()=>t.portalTo),r=a_(),i=Y(()=>t.groups.some(e=>e.options.length));async function a(e,t){e.route&&r?await r.push(e.route):!Z_(e)&&!Q_(e)&&e.onClick?.(t)}return(t,r)=>{let o=Qr(`Menu`,!0);return i.value?(H(!0),U(V,{key:0},ri(e.groups,(t,r)=>(H(),U(`div`,{key:t.key??t.group??r,"data-slot":`group`,class:k(P(J_).group)},[t.group&&!t.hideLabel?(H(),W(ei(e.primitives.Label),{key:0,"data-slot":`group-label`,class:k(P(J_).groupLabel)},{default:I(()=>[e.slotFns?.[`group-label`]?(H(),W(q_,{key:0,content:e.slotFns[`group-label`]?.({group:t})},null,8,[`content`])):(H(),U(V,{key:1},[Wa(we(t.group),1)],64))]),_:2},1032,[`class`])):q(``,!0),(H(!0),U(V,null,ri(t.options,(r,i)=>(H(),U(V,{key:r.value??r.label??i},[P(Q_)(r)?(H(),W(ei(e.primitives.Sub),{key:0},{default:I(()=>[(H(),W(ei(e.primitives.SubTrigger),{"data-slot":`item`,"data-disabled":r.disabled?``:void 0,disabled:r.disabled,class:k([P(J_).menuItem,P(sv)(r),`data-[disabled]:cursor-not-allowed`])},{default:I(()=>[K(uv,{item:r,close:e.close,"reserve-icon-space":P(iv)(t),"slot-fns":e.slotFns,trailing:`submenu`},null,8,[`item`,`close`,`reserve-icon-space`,`slot-fns`])]),_:2},1032,[`data-disabled`,`disabled`,`class`])),(H(),W(ei(e.primitives.Portal),{to:P(n)},{default:I(()=>[(H(),W(ei(e.primitives.SubContent),{"data-slot":`content`,class:k(P(J_).content),"side-offset":4},{default:I(()=>[K(o,{groups:P(rv)(r.submenu),close:e.close,"slot-fns":e.slotFns,"portal-to":e.portalTo,primitives:e.primitives},null,8,[`groups`,`close`,`slot-fns`,`portal-to`,`primitives`])]),_:2},1032,[`class`]))]),_:2},1032,[`to`]))]),_:2},1024)):P(Z_)(r)?(H(),U(`div`,{key:1,"data-slot":`item`,"data-disabled":r.disabled?``:void 0,class:`rounded-4`},[K(uv,{item:r,close:e.close,"reserve-icon-space":P(iv)(t),"slot-fns":e.slotFns,trailing:`switch`},null,8,[`item`,`close`,`reserve-icon-space`,`slot-fns`])],8,fv)):e.slotFns?.item?(H(),W(ei(e.primitives.Item),{key:2,"as-child":``,"data-slot":`item`,"data-disabled":r.disabled?``:void 0,disabled:r.disabled,class:`data-[disabled]:cursor-not-allowed`,onSelect:e=>a(r,e)},{default:I(()=>[K(dv,{content:e.slotFns.item?.({item:r,close:e.close,selected:!!r.selected})},null,8,[`content`])]),_:2},1064,[`data-disabled`,`disabled`,`onSelect`])):r.slots?.item?(H(),W(ei(e.primitives.Item),{key:3,"as-child":``,"data-slot":`item`,"data-disabled":r.disabled?``:void 0,disabled:r.disabled,class:`data-[disabled]:cursor-not-allowed`,onSelect:e=>a(r,e)},{default:I(()=>[K(dv,{content:r.slots.item({item:r,close:e.close,selected:!!r.selected})},null,8,[`content`])]),_:2},1064,[`data-disabled`,`disabled`,`onSelect`])):(H(),W(ei(e.primitives.Item),{key:4,"data-slot":`item`,"data-disabled":r.disabled?``:void 0,"data-state":r.selected?`checked`:void 0,disabled:r.disabled,class:k([`data-[disabled]:cursor-not-allowed`,[P(J_).menuItem,P(sv)(r)]]),onSelect:e=>a(r,e)},{default:I(()=>[K(uv,{item:r,close:e.close,"reserve-icon-space":P(iv)(t),"slot-fns":e.slotFns},null,8,[`item`,`close`,`reserve-icon-space`,`slot-fns`])]),_:2},1064,[`data-disabled`,`data-state`,`disabled`,`class`,`onSelect`]))],64))),128))],2))),128)):(H(),U(`div`,pv,[e.slotFns?.empty?(H(),W(q_,{key:0,content:e.slotFns.empty?.()},null,8,[`content`])):(H(),U(V,{key:1},[Wa(`No options`)],64))]))}}}),[[`__scopeId`,`data-v-d936cac5`]]),hv=z({inheritAttrs:!1,__name:`Dropdown`,props:gi({button:{},options:{default:()=>[]},open:{type:Boolean},align:{default:`start`},side:{default:`bottom`},offset:{default:4},matchTriggerWidth:{type:Boolean},portalTo:{}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:[`update:open`],setup(e){let t=Ii(e,`open`),n=fi(),r=__(),i=e,a=nh(()=>i.portalTo);function o(){t.value=!1}function s(e){u.value&&e||(t.value=e)}let c={Item:rm,Label:im,Portal:am,Sub:om,SubContent:sm,SubTrigger:cm},l=Y(()=>rv(i.options)),u=Y(()=>i.button?.disabled===!0||n.disabled!==void 0&&n.disabled!==!1),d=null;function f(e){e.pointerType!==`touch`&&(e.button!==0||e.ctrlKey||u.value||t.value||(t.value=!0,d=e.currentTarget,window.addEventListener(`click`,p,{capture:!0,once:!0}),window.addEventListener(`pointerdown`,m,{capture:!0,once:!0})))}function p(e){let t=d;m(),t&&e.target instanceof Node&&e.detail!==0&&t.contains(e.target)&&e.stopPropagation()}function m(){d=null,window.removeEventListener(`click`,p,{capture:!0}),window.removeEventListener(`pointerdown`,m,{capture:!0})}return je(m),(i,d)=>(H(),W(P(tm),{open:t.value,"onUpdate:open":d[0]||=e=>t.value=e},{default:I(({open:t})=>[K(P(lm),{"as-child":``,"data-slot":`trigger`,disabled:u.value,onPointerdown:f},{default:I(()=>[i.$slots.trigger?B(i.$slots,`trigger`,he(Ha({...P(n),open:t,setOpen:s,close:o,disabled:u.value})),void 0,void 0,0):i.$slots.default?B(i.$slots,`default`,he(Ha({...P(n),open:t,setOpen:s,close:o,disabled:u.value})),void 0,void 0,1):(H(),W(P(y_),he(J({key:2},{...e.button,...P(n)})),{default:I(()=>[Wa(we(e.button?.label||`Options`),1)]),_:1},16))]),_:2},1032,[`disabled`]),K(P(am),{to:P(a)},{default:I(()=>[K(P(nm),{"data-slot":`content`,"data-motion":`instant`,class:k(P(J_).content),side:e.side,align:e.align,"side-offset":e.offset,style:O({width:e.matchTriggerWidth?`var(--reka-dropdown-menu-trigger-width)`:void 0})},{default:I(()=>[K(mv,{groups:l.value,"portal-to":e.portalTo,close:o,"slot-fns":P(r),primitives:c},null,8,[`groups`,`portal-to`,`slot-fns`])]),_:1},8,[`class`,`side`,`align`,`side-offset`,`style`])]),_:1},8,[`to`])]),_:3},8,[`open`]))}}),gv=z({inheritAttrs:!1,__name:`Icon`,props:{icon:{},name:{}},setup(e){let t=e,n=Y(()=>t.icon===void 0?t.name:t.icon);return L(()=>{p_(`Icon`,t.icon===void 0?`name`:`icon`,n.value)}),(e,t)=>typeof n.value==`string`&&P(d_)(n.value)?(H(),U(`span`,J({key:0,class:[n.value]},e.$attrs,{"aria-hidden":`true`}),null,16)):typeof n.value==`string`&&P(f_)(n.value)?(H(),U(`span`,J({key:1,class:`inline-flex items-center justify-center leading-none`},e.$attrs,{"aria-hidden":`true`}),we(n.value),17)):n.value&&typeof n.value!=`string`?(H(),W(ei(n.value),J({key:2},e.$attrs,{"aria-hidden":`true`}),null,16)):q(``,!0)}}),_v=z({inheritAttrs:!1,__name:`Tooltip`,props:{text:{default:``},hoverDelay:{default:500},side:{default:`top`},offset:{default:4},bare:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){let t=e,n=Y(()=>t.hoverDelay),r=Um(null),i=(e,{slots:t})=>t.default?.(),a=Y(()=>r?i:Gm),o=Y(()=>r?{}:{delayDuration:n.value});return(n,r)=>e.disabled?B(n.$slots,`default`,{},void 0,void 0,0):(H(),W(ei(a.value),he(J({key:1},o.value)),{default:I(()=>[K(P(Ym),null,{default:I(()=>[K(P(eh),{"as-child":``,"data-slot":`trigger`},{default:I(()=>[B(n.$slots,`default`)]),_:3}),t.text||n.$slots.content?(H(),W(u_,{key:0,side:t.side,offset:t.offset,text:t.text,bare:t.bare},ii({_:2},[n.$slots.content?{name:`content`,fn:I(()=>[B(n.$slots,`content`)]),key:`0`}:void 0]),1032,[`side`,`offset`,`text`,`bare`])):q(``,!0)]),_:3})]),_:3},16))}}),vv=z({__name:`ScrollBar`,props:{orientation:{default:`vertical`}},setup(e){let t=um(),n=N(!1),r=N(!1),i;function a(){i&&=(clearTimeout(i),void 0)}function o(){a(),i=setTimeout(()=>{n.value=!1,i=void 0},t.scrollHideDelay.value)}function s(){n.value=!0,r.value||o()}function c(){r.value||(a(),n.value=!1)}function l(){r.value=!0,a(),n.value=!0}function u(){r.value&&(r.value=!1,o())}return qc(t.scrollArea,`pointerenter`,s),qc(t.scrollArea,`pointermove`,s),qc(t.scrollArea,`pointerdown`,l),qc(t.scrollArea,`pointerleave`,c),qc(t.viewport,`scroll`,s),qc(()=>typeof window>`u`?null:window,`pointerup`,u),Kr(a),(t,r)=>(H(),W(P(jm),{"data-slot":`scroll-area-scrollbar`,class:`pointer-events-none z-20 flex touch-none select-none bg-transparent p-0.5 transition-colors duration-150 ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-2.5`,orientation:e.orientation},{default:I(()=>[K(P(Im),{"data-slot":`scroll-area-thumb`,class:k([`relative flex-1 rounded-6 bg-gray-400 transition-opacity duration-150 ease-out before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-gray-700`,[n.value?`opacity-100 pointer-events-auto`:`opacity-0 pointer-events-none`,e.orientation===`horizontal`?`before:min-w-[44px]`:`before:min-h-[44px]`]])},null,8,[`class`])]),_:1},8,[`orientation`]))}}),yv=z({__name:`ScrollArea`,props:{orientation:{default:`vertical`},scrollHideDelay:{default:600},viewportClass:{}},setup(e,{expose:t}){let n=N();return t({get viewportElement(){return n.value?.viewportElement??null}}),(t,r)=>(H(),W(P(fm),{"data-slot":`scroll-area`,"scroll-hide-delay":e.scrollHideDelay,class:`relative overflow-hidden`},{default:I(()=>[K(P(Lm),{ref_key:`viewport`,ref:n,"data-slot":`scroll-area-viewport`,class:k([`h-full w-full`,e.viewportClass])},{default:I(()=>[B(t.$slots,`default`)]),_:3},8,[`class`]),e.orientation===`horizontal`?q(``,!0):(H(),W(vv,{key:0,orientation:`vertical`})),e.orientation===`horizontal`||e.orientation===`both`?(H(),W(vv,{key:1,orientation:`horizontal`})):q(``,!0),K(P(mm))]),_:3},8,[`scroll-hide-delay`]))}}),bv=N([]),xv=Y(()=>bv.value[bv.value.length-1]??null);function Sv(e){bv.value=[...bv.value,e]}function Cv(e){bv.value=bv.value.filter(t=>t!==e)}var wv=Symbol(`pageHeaderTarget`),Tv=z({__name:`PageHeaderTarget`,setup(e,{expose:t}){let n=Or(`el`);return Hr(()=>n.value&&Sv(n.value)),Gr(()=>n.value&&Cv(n.value)),t({el:n}),(e,t)=>(H(),U(`div`,{ref_key:`el`,ref:n},null,512))}}),Ev=N([]);function Dv(e){Ev.value=[...Ev.value,e]}function Ov(e){Ev.value=Ev.value.filter(t=>t!==e)}var kv=Symbol(`shellScrollElement`),Av={"data-slot":`desktop-shell`,class:`flex h-full`},jv={"data-slot":`desktop-shell-content`,class:`flex min-w-0 flex-1 flex-col overflow-hidden`},Mv={key:1,class:`flex min-h-0 flex-1 flex-col overflow-hidden`},Nv=z({__name:`DesktopShell`,props:{scroll:{type:Boolean,default:!0}},setup(e){let t=N(null),n=N(null);Zn(kv,Y(()=>t.value?.viewportElement??null)),Zn(wv,Y(()=>n.value?.el??null));let r=null;return R(()=>t.value?.viewportElement??null,e=>{r&&r!==e&&(Ov(r),r=null),e&&e!==r&&(Dv(e),r=e)},{immediate:!0}),Gr(()=>{r&&Ov(r)}),(r,i)=>(H(),U(`div`,Av,[B(r.$slots,`rail`),B(r.$slots,`sidebar`),G(`div`,jv,[K(Tv,{ref_key:`headerTarget`,ref:n},null,512),e.scroll?(H(),W(yv,{key:0,ref_key:`scrollArea`,ref:t,class:`min-h-0 flex-1`},{default:I(()=>[B(r.$slots,`default`)]),_:3},512)):(H(),U(`div`,Mv,[B(r.$slots,`default`)]))])]))}}),Pv=Symbol(`sidebarCollapsed`),Fv=Symbol(`sidebarToggle`),Iv=[`data-state`,`aria-label`],Lv=z({__name:`Sidebar`,props:gi({collapsible:{type:Boolean,default:!0},width:{default:`15rem`},collapsedWidth:{default:`3rem`},ariaLabel:{default:`Main`}},{collapsed:{type:[Boolean,null],default:null},collapsedModifiers:{}}),emits:gi([`update:collapsed`],[`update:collapsed`]),setup(e){let t=e,n=Ii(e,`collapsed`),r=nl(tl).smaller(`sm`),i=Y(()=>t.collapsible&&(n.value??r.value));function a(){n.value=!i.value}return Zn(Pv,i),Zn(Fv,a),(t,n)=>(H(),U(`nav`,{"data-slot":`sidebar`,"data-state":i.value?`collapsed`:`expanded`,"aria-label":e.ariaLabel,class:`flex h-full flex-shrink-0 flex-col overflow-x-hidden bg-surface-sidebar transition-[width] duration-300 ease-in-out`,style:O({width:i.value?e.collapsedWidth:e.width})},[B(t.$slots,`default`)],12,Iv))}}),Rv=[`data-state`],zv={class:`grid shrink-0 place-items-center`},Bv={class:`truncate text-sm leading-tighter`},Vv=[`accesskey`,`aria-label`],Hv={class:`grid shrink-0 place-items-center`},Uv={class:`truncate text-sm leading-tighter`},Wv={key:0,class:`mr-2 text-sm text-ink-gray-4`},Gv=z({inheritAttrs:!1,__name:`SidebarItem`,props:{label:{},accessKey:{},icon:{},suffix:{},route:{},href:{},active:{type:Boolean,default:void 0},onClick:{}},setup(e){let t=fi(),n=e=>e===`class`||e===`style`||/^on[A-Z]/.test(e),r=Y(()=>Object.fromEntries(Object.entries(t).filter(([e])=>n(e)))),i=Y(()=>Object.fromEntries(Object.entries(t).filter(([e])=>!n(e)))),a=e,o=Qn(Pv,Y(()=>!1)),s=Or(`labelEl`),c=N(``);Hr(()=>{c.value=s.value?.textContent?.trim()??``});let l=Y(()=>a.label||c.value),u=Y(()=>t[`aria-label`]||l.value||void 0),d=eo()?.appContext.config.globalProperties,f=Y(()=>!!d?.$router),p=Y(()=>a.route&&f.value?Xg:`a`),m=Y(()=>a.route?f.value?{to:a.route}:{href:typeof a.route==`string`?a.route:void 0}:{href:a.href}),h=Y(()=>a.route&&d?.$router?d.$router.resolve(a.route):null),g=Y(()=>{if(a.active!==void 0)return a.active;let e=h.value,t=d?.$route;return!e||!t?!1:e.name?t.name===e.name:t.path===e.path});function _(e){a.onClick?.(e)}return(t,n)=>(H(),U(`div`,J({"data-slot":`sidebar-item`,"data-state":g.value?`active`:`inactive`},r.value,{class:[`group/sidebar-item flex h-7 items-center rounded-4 transition`,g.value?`bg-surface-elevation-3 text-ink-gray-8 shadow-sm`:`text-ink-gray-6 hover:bg-surface-gray-2`]}),[e.route||e.href?(H(),W(ei(p.value),J({key:0},{...i.value,...m.value},{accesskey:e.accessKey,"aria-label":u.value,"aria-current":g.value?`page`:void 0,class:`flex h-full min-w-0 flex-1 items-center rounded-4 pl-2 focus-visible:ring-0 focus-visible:focus-ring`,onClick:_}),{default:I(()=>[K(_v,{text:l.value,side:`right`,disabled:!P(o)||!l.value},{default:I(()=>[G(`span`,zv,[B(t.$slots,`prefix`,{},()=>[K(gv,{icon:e.icon,class:`size-4 text-ink-gray-6`},null,8,[`icon`])])])]),_:3},8,[`text`,`disabled`]),G(`span`,{class:k([`min-w-0 flex-1 transition-all ease-in-out`,P(o)?`ml-0 w-0 overflow-hidden opacity-0`:`ml-2 w-auto opacity-100`])},[G(`span`,{ref_key:`labelEl`,ref:s,class:`flex min-w-0 items-center`},[B(t.$slots,`default`,{},()=>[G(`span`,Bv,we(e.label),1)])],512)],2)]),_:3},16,[`accesskey`,`aria-label`,`aria-current`])):(H(),U(`button`,J({key:1,type:`button`},i.value,{accesskey:e.accessKey,"aria-label":u.value,class:`flex h-full text-left min-w-0 flex-1 items-center rounded-4 pl-2 focus-visible:ring-0 focus-visible:focus-ring`,onClick:_}),[K(_v,{text:l.value,side:`right`,disabled:!P(o)||!l.value},{default:I(()=>[G(`span`,Hv,[B(t.$slots,`prefix`,{},()=>[K(gv,{icon:e.icon,class:`size-4 text-ink-gray-6`},null,8,[`icon`])])])]),_:3},8,[`text`,`disabled`]),G(`span`,{class:k([`min-w-0 flex-1 transition-all ease-in-out`,P(o)?`ml-0 w-0 overflow-hidden opacity-0`:`ml-2 w-auto opacity-100`])},[G(`span`,{ref_key:`labelEl`,ref:s,class:`flex min-w-0 items-center`},[B(t.$slots,`default`,{},()=>[G(`span`,Uv,we(e.label),1)])],512)],2)],16,Vv)),G(`div`,{"data-slot":`sidebar-item-suffix`,class:k([`flex shrink-0 items-center transition-all ease-in-out`,P(o)?`w-0 overflow-hidden opacity-0`:`opacity-100`])},[B(t.$slots,`suffix`,{},()=>[e.suffix?(H(),U(`span`,Wv,we(e.suffix),1)):q(``,!0)])],2)],16,Rv))}}),Kv={"data-slot":`sidebar-header`,class:`flex h-12 shrink-0 items-center px-1`},qv={key:0,class:`size-7 shrink-0 rounded-[6px] overflow-hidden`},Jv=[`src`],Yv={key:1,class:`w-full h-full bg-surface-gray-4 flex items-center justify-center text-ink-gray-7`},Xv={class:`truncate text-base-medium leading-tighter text-ink-gray-8`},Zv={class:`mt-0.5 truncate text-sm leading-tighter text-ink-gray-6`},Qv=z({__name:`SidebarHeader`,props:{title:{},subtitle:{},logo:{},showLogo:{type:Boolean,default:!0},menuItems:{}},setup(e){let t=e,[n,r]=Uc(),i=Qn(Pv,Y(()=>!1)),a=Y(()=>t.showLogo!==!1),o=Y(()=>!!t.menuItems?.length);return(e,s)=>(H(),U(`div`,Kv,[K(P(n),null,{default:I(()=>[a.value?(H(),U(`div`,qv,[B(e.$slots,`prefix`,{},()=>[typeof t.logo==`string`?(H(),U(`img`,{key:0,src:t.logo,class:`w-full h-full object-cover`,alt:`Logo`},null,8,Jv)):t.logo?(H(),W(ei(t.logo),{key:2,class:`w-full h-full`})):(H(),U(`div`,Yv,we(t.title.charAt(0).toUpperCase()),1))])])):q(``,!0),G(`div`,{class:k([`flex flex-1 flex-col text-left duration-300 ease-in-out truncate`,P(i)?`ml-0 w-0 overflow-hidden opacity-0`:a.value?`ml-2 w-auto opacity-100`:`ml-0 w-auto opacity-100`])},[G(`div`,Xv,we(t.title),1),G(`div`,Zv,we(t.subtitle),1)],2)]),_:3}),o.value?(H(),W(hv,{key:0,options:t.menuItems,"match-trigger-width":``},{default:I(({open:e})=>[G(`button`,{class:k([`flex h-10 items-center rounded-4 px-1.5 duration-300 ease-in-out`,P(i)?`w-auto`:e?`w-full bg-surface-elevation-2 shadow-sm`:`w-full hover:bg-surface-gray-3`])},[K(P(r)),G(`div`,{class:k([`duration-300 ease-in-out`,P(i)?`ml-0 w-0 overflow-hidden opacity-0`:`ml-2 w-auto opacity-100`])},[...s[0]||=[G(`span`,{class:`lucide-chevron-down size-4 text-ink-gray-7`},null,-1)]],2)],2)]),_:1},8,[`options`])):(H(),U(`div`,{key:1,class:k([`flex h-10 items-center rounded-4 px-1.5 duration-300 ease-in-out`,P(i)?`w-auto`:`w-full`])},[K(P(r))],2))]))}}),$v=`modulepreload`,ey=function(e){return`/assets/compass_admin/frontend/`+e},ty={},ny=function(e){return e.pathname.endsWith(`.css`)},ry=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},iy=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ey(t,n);let r=s(t),i=ny(r);return ry(ty,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:$v,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ay=`<?xml version="1.0" encoding="utf-8"?>
<!-- @license lucide-static v1.73.0 - ISC -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <symbol id="a-arrow-down" viewBox="0 0 24 24">
      <path d="m14 12 4 4 4-4" />
      <path d="M18 16V7" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </symbol>
    <symbol id="a-arrow-up" viewBox="0 0 24 24">
      <path d="m14 11 4-4 4 4" />
      <path d="M18 16V7" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </symbol>
    <symbol id="a-large-small" viewBox="0 0 24 24">
      <path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" />
      <path d="M15.697 14h5.606" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </symbol>
    <symbol id="accessibility" viewBox="0 0 24 24">
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </symbol>
    <symbol id="activity" viewBox="0 0 24 24">
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </symbol>
    <symbol id="ad" viewBox="0 0 24 24">
      <path d="M10 13H6" />
      <path d="M10 15v-4a2 2 0 0 0-4 0v4" />
      <path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="air-vent" viewBox="0 0 24 24">
      <path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" />
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M6.6 15.572A2 2 0 1 0 10 17v-5" />
    </symbol>
    <symbol id="airplay" viewBox="0 0 24 24">
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
    </symbol>
    <symbol id="alarm-clock-check" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
      <path d="m9 13 2 2 4-4" />
    </symbol>
    <symbol id="alarm-clock-minus" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
      <path d="M9 13h6" />
    </symbol>
    <symbol id="alarm-clock-off" viewBox="0 0 24 24">
      <path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
      <path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
      <path d="m22 6-3-3" />
      <path d="M6.26 18.67 4 21" />
      <path d="m2 2 20 20" />
      <path d="M4 4 2 6" />
    </symbol>
    <symbol id="alarm-clock-plus" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
      <path d="M12 10v6" />
      <path d="M9 13h6" />
    </symbol>
    <symbol id="alarm-clock" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </symbol>
    <symbol id="alarm-smoke" viewBox="0 0 24 24">
      <path d="M11 21c0-2.5 2-2.5 2-5" />
      <path d="M16 21c0-2.5 2-2.5 2-5" />
      <path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" />
      <path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" />
      <path d="M6 21c0-2.5 2-2.5 2-5" />
    </symbol>
    <symbol id="align-center-horizontal" viewBox="0 0 24 24">
      <path d="M2 12h20" />
      <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
    </symbol>
    <symbol id="align-center-vertical" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
      <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
      <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
      <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
    </symbol>
    <symbol id="align-end-horizontal" viewBox="0 0 24 24">
      <rect width="6" height="16" x="4" y="2" rx="2" />
      <rect width="6" height="9" x="14" y="9" rx="2" />
      <path d="M22 22H2" />
    </symbol>
    <symbol id="align-end-vertical" viewBox="0 0 24 24">
      <rect width="16" height="6" x="2" y="4" rx="2" />
      <rect width="9" height="6" x="9" y="14" rx="2" />
      <path d="M22 22V2" />
    </symbol>
    <symbol id="align-horizontal-distribute-center" viewBox="0 0 24 24">
      <rect width="6" height="14" x="4" y="5" rx="2" />
      <rect width="6" height="10" x="14" y="7" rx="2" />
      <path d="M17 22v-5" />
      <path d="M17 7V2" />
      <path d="M7 22v-3" />
      <path d="M7 5V2" />
    </symbol>
    <symbol id="align-horizontal-distribute-end" viewBox="0 0 24 24">
      <rect width="6" height="14" x="4" y="5" rx="2" />
      <rect width="6" height="10" x="14" y="7" rx="2" />
      <path d="M10 2v20" />
      <path d="M20 2v20" />
    </symbol>
    <symbol id="align-horizontal-distribute-start" viewBox="0 0 24 24">
      <rect width="6" height="14" x="4" y="5" rx="2" />
      <rect width="6" height="10" x="14" y="7" rx="2" />
      <path d="M4 2v20" />
      <path d="M14 2v20" />
    </symbol>
    <symbol id="align-horizontal-justify-center" viewBox="0 0 24 24">
      <rect width="6" height="14" x="2" y="5" rx="2" />
      <rect width="6" height="10" x="16" y="7" rx="2" />
      <path d="M12 2v20" />
    </symbol>
    <symbol id="align-horizontal-justify-end" viewBox="0 0 24 24">
      <rect width="6" height="14" x="2" y="5" rx="2" />
      <rect width="6" height="10" x="12" y="7" rx="2" />
      <path d="M22 2v20" />
    </symbol>
    <symbol id="align-horizontal-justify-start" viewBox="0 0 24 24">
      <rect width="6" height="14" x="6" y="5" rx="2" />
      <rect width="6" height="10" x="16" y="7" rx="2" />
      <path d="M2 2v20" />
    </symbol>
    <symbol id="align-horizontal-space-around" viewBox="0 0 24 24">
      <rect width="6" height="10" x="9" y="7" rx="2" />
      <path d="M4 22V2" />
      <path d="M20 22V2" />
    </symbol>
    <symbol id="align-horizontal-space-between" viewBox="0 0 24 24">
      <rect width="6" height="14" x="3" y="5" rx="2" />
      <rect width="6" height="10" x="15" y="7" rx="2" />
      <path d="M3 2v20" />
      <path d="M21 2v20" />
    </symbol>
    <symbol id="align-start-horizontal" viewBox="0 0 24 24">
      <rect width="6" height="16" x="4" y="6" rx="2" />
      <rect width="6" height="9" x="14" y="6" rx="2" />
      <path d="M22 2H2" />
    </symbol>
    <symbol id="align-start-vertical" viewBox="0 0 24 24">
      <rect width="9" height="6" x="6" y="14" rx="2" />
      <rect width="16" height="6" x="6" y="4" rx="2" />
      <path d="M2 2v20" />
    </symbol>
    <symbol id="align-vertical-distribute-center" viewBox="0 0 24 24">
      <path d="M22 17h-3" />
      <path d="M22 7h-5" />
      <path d="M5 17H2" />
      <path d="M7 7H2" />
      <rect x="5" y="14" width="14" height="6" rx="2" />
      <rect x="7" y="4" width="10" height="6" rx="2" />
    </symbol>
    <symbol id="align-vertical-distribute-end" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="14" rx="2" />
      <rect width="10" height="6" x="7" y="4" rx="2" />
      <path d="M2 20h20" />
      <path d="M2 10h20" />
    </symbol>
    <symbol id="align-vertical-distribute-start" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="14" rx="2" />
      <rect width="10" height="6" x="7" y="4" rx="2" />
      <path d="M2 14h20" />
      <path d="M2 4h20" />
    </symbol>
    <symbol id="align-vertical-justify-center" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="16" rx="2" />
      <rect width="10" height="6" x="7" y="2" rx="2" />
      <path d="M2 12h20" />
    </symbol>
    <symbol id="align-vertical-justify-end" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="12" rx="2" />
      <rect width="10" height="6" x="7" y="2" rx="2" />
      <path d="M2 22h20" />
    </symbol>
    <symbol id="align-vertical-justify-start" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="16" rx="2" />
      <rect width="10" height="6" x="7" y="6" rx="2" />
      <path d="M2 2h20" />
    </symbol>
    <symbol id="align-vertical-space-around" viewBox="0 0 24 24">
      <rect width="10" height="6" x="7" y="9" rx="2" />
      <path d="M22 20H2" />
      <path d="M22 4H2" />
    </symbol>
    <symbol id="align-vertical-space-between" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="15" rx="2" />
      <rect width="10" height="6" x="7" y="3" rx="2" />
      <path d="M2 21h20" />
      <path d="M2 3h20" />
    </symbol>
    <symbol id="ambulance" viewBox="0 0 24 24">
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </symbol>
    <symbol id="ampersand" viewBox="0 0 24 24">
      <path d="M16 12h3" />
      <path d="M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" />
    </symbol>
    <symbol id="ampersands" viewBox="0 0 24 24">
      <path d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />
      <path d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />
    </symbol>
    <symbol id="amphora" viewBox="0 0 24 24">
      <path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" />
      <path d="M10 5H8a2 2 0 0 0 0 4h.68" />
      <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
      <path d="M14 5h2a2 2 0 0 1 0 4h-.68" />
      <path d="M18 22H6" />
      <path d="M9 2h6" />
    </symbol>
    <symbol id="anchor" viewBox="0 0 24 24">
      <path d="M12 6v16" />
      <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
      <path d="M9 11h6" />
      <circle cx="12" cy="4" r="2" />
    </symbol>
    <symbol id="angle" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M3 11a10 10 0 0 1 10 10" />
    </symbol>
    <symbol id="antenna" viewBox="0 0 24 24">
      <path d="M2 12 7 2" />
      <path d="m7 12 5-10" />
      <path d="m12 12 5-10" />
      <path d="m17 12 5-10" />
      <path d="M4.5 7h15" />
      <path d="M12 16v6" />
    </symbol>
    <symbol id="anvil" viewBox="0 0 24 24">
      <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
      <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
    </symbol>
    <symbol id="aperture" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m14.31 8 5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="m7.38 12 5.74-9.94" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="m16.62 12-5.74 9.94" />
    </symbol>
    <symbol id="app-window-mac" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </symbol>
    <symbol id="app-window" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </symbol>
    <symbol id="apple" viewBox="0 0 24 24">
      <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
      <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
    </symbol>
    <symbol id="archive-arrow-down" viewBox="0 0 24 24">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h.343" />
      <path d="M20 8v11a2 2 0 0 1-2 2h-.343" />
      <path d="m9 18 3 3 3-3" />
      <path d="M12 12v9" />
    </symbol>
    <symbol id="archive-arrow-up" viewBox="0 0 24 24">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h2" />
      <path d="M20 8v11a2 2 0 0 1-2 2h-2" />
      <path d="m9 15 3-3 3 3" />
      <path d="M12 12v9" />
    </symbol>
    <symbol id="archive-x" viewBox="0 0 24 24">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="m9.5 17 5-5" />
      <path d="m9.5 12 5 5" />
    </symbol>
    <symbol id="archive" viewBox="0 0 24 24">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </symbol>
    <symbol id="armchair" viewBox="0 0 24 24">
      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
      <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </symbol>
    <symbol id="armenian-dram" viewBox="0 0 24 24">
      <path d="M11 10h8" />
      <path d="M11 14h8" />
      <path d="M17 20V10a6 6 0 0 0-12 0" />
    </symbol>
    <symbol id="arrow-big-down-dash" viewBox="0 0 24 24">
      <path d="M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z" />
      <path d="M9 4h6" />
    </symbol>
    <symbol id="arrow-big-down" viewBox="0 0 24 24">
      <path d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z" />
    </symbol>
    <symbol id="arrow-big-left-dash" viewBox="0 0 24 24">
      <path d="M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
      <path d="M20 9v6" />
    </symbol>
    <symbol id="arrow-big-left" viewBox="0 0 24 24">
      <path d="M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z" />
    </symbol>
    <symbol id="arrow-big-right-dash" viewBox="0 0 24 24">
      <path d="M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
      <path d="M4 9v6" />
    </symbol>
    <symbol id="arrow-big-right" viewBox="0 0 24 24">
      <path d="M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z" />
    </symbol>
    <symbol id="arrow-big-up-dash" viewBox="0 0 24 24">
      <path d="M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z" />
      <path d="M9 20h6" />
    </symbol>
    <symbol id="arrow-big-up" viewBox="0 0 24 24">
      <path d="M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z" />
    </symbol>
    <symbol id="arrow-down-0-1" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <rect x="15" y="4" width="4" height="6" ry="2" />
      <path d="M17 20v-6h-2" />
      <path d="M15 20h4" />
    </symbol>
    <symbol id="arrow-down-1-0" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M17 10V4h-2" />
      <path d="M15 10h4" />
      <rect x="15" y="14" width="4" height="6" ry="2" />
    </symbol>
    <symbol id="arrow-down-a-z" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M20 8h-5" />
      <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
      <path d="M15 14h5l-5 6h5" />
    </symbol>
    <symbol id="arrow-down-from-line" viewBox="0 0 24 24">
      <path d="M19 3H5" />
      <path d="M12 21V7" />
      <path d="m6 15 6 6 6-6" />
    </symbol>
    <symbol id="arrow-down-left" viewBox="0 0 24 24">
      <path d="M17 7 7 17" />
      <path d="M17 17H7V7" />
    </symbol>
    <symbol id="arrow-down-narrow-wide" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M11 4h4" />
      <path d="M11 8h7" />
      <path d="M11 12h10" />
    </symbol>
    <symbol id="arrow-down-right" viewBox="0 0 24 24">
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </symbol>
    <symbol id="arrow-down-to-dot" viewBox="0 0 24 24">
      <path d="M12 2v14" />
      <path d="m19 9-7 7-7-7" />
      <circle cx="12" cy="21" r="1" />
    </symbol>
    <symbol id="arrow-down-to-line" viewBox="0 0 24 24">
      <path d="M12 17V3" />
      <path d="m6 11 6 6 6-6" />
      <path d="M19 21H5" />
    </symbol>
    <symbol id="arrow-down-up" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </symbol>
    <symbol id="arrow-down-wide-narrow" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M11 4h10" />
      <path d="M11 8h7" />
      <path d="M11 12h4" />
    </symbol>
    <symbol id="arrow-down-z-a" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 4v16" />
      <path d="M15 4h5l-5 6h5" />
      <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
      <path d="M20 18h-5" />
    </symbol>
    <symbol id="arrow-down" viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </symbol>
    <symbol id="arrow-left-from-line" viewBox="0 0 24 24">
      <path d="m9 6-6 6 6 6" />
      <path d="M3 12h14" />
      <path d="M21 19V5" />
    </symbol>
    <symbol id="arrow-left-right" viewBox="0 0 24 24">
      <path d="M8 3 4 7l4 4" />
      <path d="M4 7h16" />
      <path d="m16 21 4-4-4-4" />
      <path d="M20 17H4" />
    </symbol>
    <symbol id="arrow-left-to-line" viewBox="0 0 24 24">
      <path d="M3 19V5" />
      <path d="m13 6-6 6 6 6" />
      <path d="M7 12h14" />
    </symbol>
    <symbol id="arrow-left" viewBox="0 0 24 24">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </symbol>
    <symbol id="arrow-right-from-line" viewBox="0 0 24 24">
      <path d="M3 5v14" />
      <path d="M21 12H7" />
      <path d="m15 18 6-6-6-6" />
    </symbol>
    <symbol id="arrow-right-left" viewBox="0 0 24 24">
      <path d="m16 3 4 4-4 4" />
      <path d="M20 7H4" />
      <path d="m8 21-4-4 4-4" />
      <path d="M4 17h16" />
    </symbol>
    <symbol id="arrow-right-to-line" viewBox="0 0 24 24">
      <path d="M17 12H3" />
      <path d="m11 18 6-6-6-6" />
      <path d="M21 5v14" />
    </symbol>
    <symbol id="arrow-right" viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </symbol>
    <symbol id="arrow-up-0-1" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <rect x="15" y="4" width="4" height="6" ry="2" />
      <path d="M17 20v-6h-2" />
      <path d="M15 20h4" />
    </symbol>
    <symbol id="arrow-up-1-0" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M17 10V4h-2" />
      <path d="M15 10h4" />
      <rect x="15" y="14" width="4" height="6" ry="2" />
    </symbol>
    <symbol id="arrow-up-a-z" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M20 8h-5" />
      <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
      <path d="M15 14h5l-5 6h5" />
    </symbol>
    <symbol id="arrow-up-down" viewBox="0 0 24 24">
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </symbol>
    <symbol id="arrow-up-from-dot" viewBox="0 0 24 24">
      <path d="m5 9 7-7 7 7" />
      <path d="M12 16V2" />
      <circle cx="12" cy="21" r="1" />
    </symbol>
    <symbol id="arrow-up-from-line" viewBox="0 0 24 24">
      <path d="m18 9-6-6-6 6" />
      <path d="M12 3v14" />
      <path d="M5 21h14" />
    </symbol>
    <symbol id="arrow-up-left" viewBox="0 0 24 24">
      <path d="M7 17V7h10" />
      <path d="M17 17 7 7" />
    </symbol>
    <symbol id="arrow-up-narrow-wide" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M11 12h4" />
      <path d="M11 16h7" />
      <path d="M11 20h10" />
    </symbol>
    <symbol id="arrow-up-right" viewBox="0 0 24 24">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </symbol>
    <symbol id="arrow-up-to-line" viewBox="0 0 24 24">
      <path d="M5 3h14" />
      <path d="m18 13-6-6-6 6" />
      <path d="M12 7v14" />
    </symbol>
    <symbol id="arrow-up-wide-narrow" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M11 12h10" />
      <path d="M11 16h7" />
      <path d="M11 20h4" />
    </symbol>
    <symbol id="arrow-up-z-a" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M15 4h5l-5 6h5" />
      <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
      <path d="M20 18h-5" />
    </symbol>
    <symbol id="arrow-up" viewBox="0 0 24 24">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </symbol>
    <symbol id="arrows-up-from-line" viewBox="0 0 24 24">
      <path d="m4 6 3-3 3 3" />
      <path d="M7 17V3" />
      <path d="m14 6 3-3 3 3" />
      <path d="M17 17V3" />
      <path d="M4 21h16" />
    </symbol>
    <symbol id="asterisk" viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m18.065 8.496-12.125 7" />
      <path d="m5.94 8.504 12.125 7" />
    </symbol>
    <symbol id="asterism" viewBox="0 0 24 24">
      <path d="M12 2v8" />
      <path d="m14.5 15 7 4" />
      <path d="m14.5 19 7-4" />
      <path d="M18 13v8" />
      <path d="m2.5 15 7 4" />
      <path d="m2.5 19 7-4" />
      <path d="M6 13v8" />
      <path d="m8.5 4 7 4" />
      <path d="m8.5 8 7-4" />
    </symbol>
    <symbol id="astroid" viewBox="0 0 24 24">
      <path d="M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203" />
    </symbol>
    <symbol id="at-sign" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </symbol>
    <symbol id="atom" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </symbol>
    <symbol id="audio-lines-off" viewBox="0 0 24 24">
      <path d="M10 10v11" />
      <path d="M10 3v1.35" />
      <path d="M14 14v1" />
      <path d="M14 8v.35" />
      <path d="M18 5v7.35" />
      <path d="M2 10v3" />
      <path d="m2 2 20 20" />
      <path d="M22 10v3" />
      <path d="M6 6v11" />
    </symbol>
    <symbol id="audio-lines-x" viewBox="0 0 24 24">
      <path d="M10 3v18" />
      <path d="M14 8v6.35" />
      <path d="m17 17 5 5" />
      <path d="M18 5v8.1" />
      <path d="M2 10v3" />
      <path d="M22 10v3" />
      <path d="m22 17-5 5" />
      <path d="M6 6v11" />
    </symbol>
    <symbol id="audio-lines" viewBox="0 0 24 24">
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
    </symbol>
    <symbol id="audio-waveform" viewBox="0 0 24 24">
      <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" />
    </symbol>
    <symbol id="avocado" viewBox="0 0 24 24">
      <path d="M13.465 3.464a5 5 0 017.07 0 5 5 0 010 7.072c-1.204 1.203-2.38 2.89-2.614 4.577A8 8 0 118.886 6.08c1.687-.235 3.375-1.41 4.579-2.615" />
      <circle cx="10" cy="14" r="3" />
    </symbol>
    <symbol id="award" viewBox="0 0 24 24">
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </symbol>
    <symbol id="axe" viewBox="0 0 24 24">
      <path d="m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" />
      <path d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z" />
    </symbol>
    <symbol id="axis-3d" viewBox="0 0 24 24">
      <path d="M13.5 10.5 15 9" />
      <path d="M4 4v15a1 1 0 0 0 1 1h15" />
      <path d="M4.293 19.707 6 18" />
      <path d="m9 15 1.5-1.5" />
    </symbol>
    <symbol id="azerbaijani-manat" viewBox="0 0 24 24">
      <path d="M12 4v16" />
      <path d="M18 20v-8a6 6 0 00-12 0v8" />
    </symbol>
    <symbol id="baby" viewBox="0 0 24 24">
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M15 12h.01" />
      <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
      <path d="M9 12h.01" />
    </symbol>
    <symbol id="backpack" viewBox="0 0 24 24">
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
      <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="bacon" viewBox="0 0 24 24">
      <path d="M2.795 16.804c-.789-.79-1.09-2.018-.442-2.928 1.933-2.713 4.414-1.05 6.145-5.378 1.868-4.67 4.608-2.366 6.592-6.107.218-.412.78-.53 1.11-.2l5.005 5.005c.789.79 1.09 2.018.442 2.928-1.933 2.713-4.414 1.05-6.145 5.378-1.868 4.67-4.608 2.366-6.591 6.107-.22.412-.78.53-1.11.2z" />
      <path d="M4.5 18.5c2-5 5-2 7-7s5-2 7-7" />
    </symbol>
    <symbol id="badge-cent" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M12 7v10" />
      <path d="M15.4 10a4 4 0 1 0 0 4" />
    </symbol>
    <symbol id="badge-check" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m16 9-5.5 5.5L8 12" />
    </symbol>
    <symbol id="badge-dollar-sign" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </symbol>
    <symbol id="badge-euro" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M7 12h5" />
      <path d="M15 9.4a4 4 0 1 0 0 5.2" />
    </symbol>
    <symbol id="badge-exclamation-point" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </symbol>
    <symbol id="badge-indian-rupee" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="m13 17-5-1h1a4 4 0 0 0 0-8" />
    </symbol>
    <symbol id="badge-info" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="16" y2="12" />
      <line x1="12" x2="12.01" y1="8" y2="8" />
    </symbol>
    <symbol id="badge-japanese-yen" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 8 3 3v7" />
      <path d="m12 11 3-3" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </symbol>
    <symbol id="badge-minus" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </symbol>
    <symbol id="badge-percent" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m15 9-6 6" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
    </symbol>
    <symbol id="badge-plus" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="16" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </symbol>
    <symbol id="badge-pound-sterling" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M8 12h4" />
      <path d="M10 16V9.5a2.5 2.5 0 0 1 5 0" />
      <path d="M8 16h7" />
    </symbol>
    <symbol id="badge-question-mark" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="badge-russian-ruble" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M9 16h5" />
      <path d="M9 12h5a2 2 0 1 0 0-4h-3v9" />
    </symbol>
    <symbol id="badge-swiss-franc" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M11 17V8h4" />
      <path d="M11 12h3" />
      <path d="M9 16h4" />
    </symbol>
    <symbol id="badge-turkish-lira" viewBox="0 0 24 24">
      <path d="M11 7v10a5 5 0 0 0 5-5" />
      <path d="m15 8-6 3" />
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76" />
    </symbol>
    <symbol id="badge-x" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="15" x2="9" y1="9" y2="15" />
      <line x1="9" x2="15" y1="9" y2="15" />
    </symbol>
    <symbol id="badge" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </symbol>
    <symbol id="baggage-claim" viewBox="0 0 24 24">
      <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
      <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
      <rect width="13" height="8" x="8" y="6" rx="1" />
      <circle cx="18" cy="20" r="2" />
      <circle cx="9" cy="20" r="2" />
    </symbol>
    <symbol id="ball-wave" viewBox="0 0 24 24">
      <path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M7.757 13.243a2 6 45 1 0 8.486-8.486 2 6 45 1 0-8.486 8.486" />
      <circle cx="12" cy="9" r="6" />
    </symbol>
    <symbol id="balloon" viewBox="0 0 24 24">
      <path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" />
      <path d="M12 6a2 2 0 0 1 2 2" />
      <path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" />
    </symbol>
    <symbol id="ban" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M4.929 4.929 19.07 19.071" />
    </symbol>
    <symbol id="banana" viewBox="0 0 24 24">
      <path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
      <path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />
    </symbol>
    <symbol id="bandage" viewBox="0 0 24 24">
      <path d="M10 10.01h.01" />
      <path d="M10 14.01h.01" />
      <path d="M14 10.01h.01" />
      <path d="M14 14.01h.01" />
      <path d="M18 6v12" />
      <path d="M6 6v12" />
      <rect x="2" y="6" width="20" height="12" rx="2" />
    </symbol>
    <symbol id="bangladeshi-taka" viewBox="0 0 24 24">
      <path d="M6 5a2 2 0 0 1 4 0v12a4 4 0 0 0 8 0 2 2 0 0 0-4 0" />
      <path d="M6 9h12" />
    </symbol>
    <symbol id="banknote-arrow-down" viewBox="0 0 24 24">
      <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
      <path d="m16 19 3 3 3-3" />
      <path d="M18 12h.01" />
      <path d="M19 16v6" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="banknote-arrow-up" viewBox="0 0 24 24">
      <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
      <path d="M18 12h.01" />
      <path d="M19 22v-6" />
      <path d="m22 19-3-3-3 3" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="banknote-check" viewBox="0 0 24 24">
      <path d="M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875" />
      <path d="m16 19 2 2 4-4" />
      <path d="M18 12h.01" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="banknote-x" viewBox="0 0 24 24">
      <path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
      <path d="m17 17 5 5" />
      <path d="M18 12h.01" />
      <path d="m22 17-5 5" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="banknote" viewBox="0 0 24 24">
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </symbol>
    <symbol id="barcode" viewBox="0 0 24 24">
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </symbol>
    <symbol id="barrel" viewBox="0 0 24 24">
      <path d="M10.5 2a34.5 34.5 0 000 20" />
      <path d="M13.5 2a34.5 34.5 0 010 20" />
      <path d="M4.67 17h14.67" />
      <path d="M4.67 7h14.67" />
      <path d="M6.23 3.06a19 19 0 000 17.88A2 2 0 008 22h8a2 2 0 001.77-1.06 19 19 0 000-17.88A2 2 0 0016 2H8a2 2 0 00-1.77 1.06" />
    </symbol>
    <symbol id="baseline" viewBox="0 0 24 24">
      <path d="M4 20h16" />
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="bath" viewBox="0 0 24 24">
      <path d="M10 4 8 6" />
      <path d="M17 19v2" />
      <path d="M2 12h20" />
      <path d="M7 19v2" />
      <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
    </symbol>
    <symbol id="battery-charging" viewBox="0 0 24 24">
      <path d="m11 7-3 5h4l-3 5" />
      <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
      <path d="M22 14v-4" />
      <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
    </symbol>
    <symbol id="battery-exclamation-point" viewBox="0 0 24 24">
      <path d="M10 16h.01" />
      <path d="M10 8v4" />
      <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
      <path d="M22 14v-4" />
      <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
    </symbol>
    <symbol id="battery-full" viewBox="0 0 24 24">
      <path d="M10 10v4" />
      <path d="M14 10v4" />
      <path d="M22 14v-4" />
      <path d="M6 10v4" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="battery-low" viewBox="0 0 24 24">
      <path d="M22 14v-4" />
      <path d="M6 14v-4" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="battery-medium" viewBox="0 0 24 24">
      <path d="M10 14v-4" />
      <path d="M22 14v-4" />
      <path d="M6 14v-4" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="battery-plus" viewBox="0 0 24 24">
      <path d="M10 9v6" />
      <path d="M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" />
      <path d="M22 14v-4" />
      <path d="M7 12h6" />
      <path d="M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" />
    </symbol>
    <symbol id="battery" viewBox="0 0 24 24">
      <path d="M 22 14 L 22 10" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="beaker" viewBox="0 0 24 24">
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </symbol>
    <symbol id="bean-off" viewBox="0 0 24 24">
      <path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" />
      <path d="M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" />
      <path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="bean" viewBox="0 0 24 24">
      <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
      <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
    </symbol>
    <symbol id="bed-double" viewBox="0 0 24 24">
      <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
      <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M12 4v6" />
      <path d="M2 18h20" />
    </symbol>
    <symbol id="bed-single" viewBox="0 0 24 24">
      <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
      <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M3 18h18" />
    </symbol>
    <symbol id="bed" viewBox="0 0 24 24">
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </symbol>
    <symbol id="beef-off" viewBox="0 0 24 24">
      <path d="M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12" />
      <path d="M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04" />
      <path d="M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393" />
      <path d="m2 2 20 20" />
      <path d="M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151" />
    </symbol>
    <symbol id="beef" viewBox="0 0 24 24">
      <path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" />
      <path d="m18.5 6 1.754 3.5a6.48 6.48 0 0 1-1.854 8.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
      <circle cx="12.5" cy="8.5" r="2.5" />
    </symbol>
    <symbol id="beer-off" viewBox="0 0 24 24">
      <path d="M13 13v5" />
      <path d="M17 11.47V8" />
      <path d="M17 11h1a3 3 0 0 1 2.745 4.211" />
      <path d="m2 2 20 20" />
      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" />
      <path d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" />
      <path d="M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" />
      <path d="M9 14.6V18" />
    </symbol>
    <symbol id="beer" viewBox="0 0 24 24">
      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
      <path d="M9 12v6" />
      <path d="M13 12v6" />
      <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    </symbol>
    <symbol id="belarusian-ruble" viewBox="0 0 24 24">
      <path d="M3 16 L13 16" />
      <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7" />
    </symbol>
    <symbol id="bell-check" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="m15 8 2 2 4-4" />
      <path d="M16.8607 4.4824A6 6 0 0 0 6 8C6 12.499 4.589 13.956 3.262 15.326" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17H20A1 1 0 0 0 20.74 15.327C20.209 14.779 19.665 14.218 19.203 13.454" />
    </symbol>
    <symbol id="bell-dot" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" />
      <circle cx="18" cy="5" r="3" />
    </symbol>
    <symbol id="bell-electric" viewBox="0 0 24 24">
      <path d="M18.518 17.347A7 7 0 0 1 14 19" />
      <path d="M18.8 4A11 11 0 0 1 20 9" />
      <path d="M9 9h.01" />
      <circle cx="20" cy="16" r="2" />
      <circle cx="9" cy="9" r="7" />
      <rect x="4" y="16" width="10" height="6" rx="2" />
    </symbol>
    <symbol id="bell-minus" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M15 8h6" />
      <path d="M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12" />
    </symbol>
    <symbol id="bell-off" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
      <path d="m2 2 20 20" />
      <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
    </symbol>
    <symbol id="bell-plus" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M15 8h6" />
      <path d="M18 5v6" />
      <path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" />
    </symbol>
    <symbol id="bell-ring" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M22 8c0-2.3-.8-4.3-2-6" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
      <path d="M4 2C2.8 3.7 2 5.7 2 8" />
    </symbol>
    <symbol id="bell" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </symbol>
    <symbol id="between-horizontal-end" viewBox="0 0 24 24">
      <rect width="13" height="7" x="3" y="3" rx="1" />
      <path d="m22 15-3-3 3-3" />
      <rect width="13" height="7" x="3" y="14" rx="1" />
    </symbol>
    <symbol id="between-horizontal-start" viewBox="0 0 24 24">
      <rect width="13" height="7" x="8" y="3" rx="1" />
      <path d="m2 9 3 3-3 3" />
      <rect width="13" height="7" x="8" y="14" rx="1" />
    </symbol>
    <symbol id="between-vertical-end" viewBox="0 0 24 24">
      <rect width="7" height="13" x="3" y="3" rx="1" />
      <path d="m9 22 3-3 3 3" />
      <rect width="7" height="13" x="14" y="3" rx="1" />
    </symbol>
    <symbol id="between-vertical-start" viewBox="0 0 24 24">
      <rect width="7" height="13" x="3" y="8" rx="1" />
      <path d="m15 2-3 3-3-3" />
      <rect width="7" height="13" x="14" y="8" rx="1" />
    </symbol>
    <symbol id="biceps-flexed" viewBox="0 0 24 24">
      <path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
      <path d="M15 14a5 5 0 0 0-7.584 2" />
      <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
    </symbol>
    <symbol id="bike" viewBox="0 0 24 24">
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </symbol>
    <symbol id="binary" viewBox="0 0 24 24">
      <rect x="14" y="14" width="4" height="6" rx="2" />
      <rect x="6" y="4" width="4" height="6" rx="2" />
      <path d="M6 20h4" />
      <path d="M14 10h4" />
      <path d="M6 14h2v6" />
      <path d="M14 4h2v6" />
    </symbol>
    <symbol id="binoculars" viewBox="0 0 24 24">
      <path d="M10 10h4" />
      <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
      <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" />
      <path d="M 22 16 L 2 16" />
      <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" />
      <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
    </symbol>
    <symbol id="biohazard" viewBox="0 0 24 24">
      <circle cx="12" cy="11.9" r="2" />
      <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
      <path d="m8.9 10.1 1.4.8" />
      <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
      <path d="m15.1 10.1-1.4.8" />
      <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
      <path d="M12 13.9v1.6" />
      <path d="M13.5 5.4c-1-.2-2-.2-3 0" />
      <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
      <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
    </symbol>
    <symbol id="bird" viewBox="0 0 24 24">
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </symbol>
    <symbol id="birdhouse" viewBox="0 0 24 24">
      <path d="M12 18v4" />
      <path d="m17 18 1.956-11.468" />
      <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" />
      <path d="M4 18h16" />
      <path d="M7 18 5.044 6.532" />
      <circle cx="12" cy="10" r="2" />
    </symbol>
    <symbol id="bitcoin" viewBox="0 0 24 24">
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </symbol>
    <symbol id="blend" viewBox="0 0 24 24">
      <circle cx="15" cy="9" r="7" />
      <circle cx="9" cy="15" r="7" />
    </symbol>
    <symbol id="blender" viewBox="0 0 24 24">
      <path d="M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z" />
      <path d="m17 2-1 12" />
      <path d="M8.006 14 7 2" />
      <path d="M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75" />
      <path d="M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5" />
      <path d="M12 18h.01" />
    </symbol>
    <symbol id="blinds" viewBox="0 0 24 24">
      <path d="M3 3h18" />
      <path d="M20 7H8" />
      <path d="M20 11H8" />
      <path d="M10 19h10" />
      <path d="M8 15h12" />
      <path d="M4 3v14" />
      <circle cx="4" cy="19" r="2" />
    </symbol>
    <symbol id="blocks" viewBox="0 0 24 24">
      <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
    </symbol>
    <symbol id="bluetooth-connected" viewBox="0 0 24 24">
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
      <line x1="18" x2="21" y1="12" y2="12" />
      <line x1="3" x2="6" y1="12" y2="12" />
    </symbol>
    <symbol id="bluetooth-off" viewBox="0 0 24 24">
      <path d="m17 17-5 5V12l-5 5" />
      <path d="m2 2 20 20" />
      <path d="M14.5 9.5 17 7l-5-5v4.5" />
    </symbol>
    <symbol id="bluetooth-searching" viewBox="0 0 24 24">
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
      <path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
      <path d="M18 12h.01" />
    </symbol>
    <symbol id="bluetooth" viewBox="0 0 24 24">
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </symbol>
    <symbol id="bolt" viewBox="0 0 24 24">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </symbol>
    <symbol id="bomb" viewBox="0 0 24 24">
      <circle cx="11" cy="13" r="9" />
      <path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" />
      <path d="m22 2-1.5 1.5" />
    </symbol>
    <symbol id="bone-fracture" viewBox="0 0 24 24">
      <path d="M14 4.5a1 1 0 0 1 5 0 .5.5 0 0 0 .5.5 1 1 0 0 1 0 5c-.81 0-1.8-.7-2.5 0l-1.958 1.957a.15.15 0 0 1-.252-.072l-.493-2.07a.15.15 0 0 0-.111-.112l-2.072-.494a.15.15 0 0 1-.072-.252L14 7c.7-.7 0-1.69 0-2.5" />
      <path d="m16 20-1-2" />
      <path d="m20 16-2-1" />
      <path d="m4 8 2 1" />
      <path d="m8 4 1 2" />
      <path d="M9.698 14.19a.15.15 0 0 0 .112.112l2.074.489a.15.15 0 0 1 .072.252L10 17c-.7.7 0 1.69 0 2.5a1 1 0 0 1-5 0 .495.495 0 0 0-.5-.5 1 1 0 0 1 0-5c.81 0 1.8.7 2.5 0l1.956-1.957a.15.15 0 0 1 .252.072z" />
    </symbol>
    <symbol id="bone" viewBox="0 0 24 24">
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    </symbol>
    <symbol id="book-a" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m8 13 4-7 4 7" />
      <path d="M9.1 11h5.7" />
    </symbol>
    <symbol id="book-audio" viewBox="0 0 24 24">
      <path d="M12 6v7" />
      <path d="M16 8v3" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M8 8v3" />
    </symbol>
    <symbol id="book-bookmark" viewBox="0 0 24 24">
      <path d="M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2" />
      <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20" />
    </symbol>
    <symbol id="book-check" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9 9.5 2 2 4-4" />
    </symbol>
    <symbol id="book-copy" viewBox="0 0 24 24">
      <path d="M5 7a2 2 0 0 0-2 2v11" />
      <path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" />
      <path d="M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" />
    </symbol>
    <symbol id="book-dashed" viewBox="0 0 24 24">
      <path d="M12 17h1.5" />
      <path d="M12 22h1.5" />
      <path d="M12 2h1.5" />
      <path d="M17.5 22H19a1 1 0 0 0 1-1" />
      <path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
      <path d="M20 14v3h-2.5" />
      <path d="M20 8.5V10" />
      <path d="M4 10V8.5" />
      <path d="M4 19.5V14" />
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
      <path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
    </symbol>
    <symbol id="book-down" viewBox="0 0 24 24">
      <path d="M12 13V7" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9 10 3 3 3-3" />
    </symbol>
    <symbol id="book-exclamation-point" viewBox="0 0 24 24">
      <path d="M12 13h.01" />
      <path d="M12 6v3" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </symbol>
    <symbol id="book-headphones" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M8 12v-2a4 4 0 0 1 8 0v2" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="9" cy="12" r="1" />
    </symbol>
    <symbol id="book-heart" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
    </symbol>
    <symbol id="book-image" viewBox="0 0 24 24">
      <path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <circle cx="10" cy="8" r="2" />
    </symbol>
    <symbol id="book-key" viewBox="0 0 24 24">
      <path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" />
      <path d="M17 2v6" />
      <path d="M17 4h2" />
      <path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <circle cx="17" cy="10" r="2" />
    </symbol>
    <symbol id="book-lock" viewBox="0 0 24 24">
      <path d="M18 6V4a2 2 0 1 0-4 0v2" />
      <path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
      <rect x="12" y="6" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="book-minus" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="book-open-check" viewBox="0 0 24 24">
      <path d="M12 5v16" />
      <path d="m16 12 2 2 4-4" />
      <path d="M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344" />
    </symbol>
    <symbol id="book-open-text" viewBox="0 0 24 24">
      <path d="M12 5v16" />
      <path d="M16 13h2" />
      <path d="M16 9h2" />
      <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
      <path d="M6 13h2" />
      <path d="M6 9h2" />
    </symbol>
    <symbol id="book-open" viewBox="0 0 24 24">
      <path d="M12 5v16" />
      <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
    </symbol>
    <symbol id="book-plus" viewBox="0 0 24 24">
      <path d="M12 7v6" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="book-search" viewBox="0 0 24 24">
      <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" />
      <path d="m21 22-1.879-1.878" />
      <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" />
      <circle cx="17" cy="18" r="3" />
    </symbol>
    <symbol id="book-text" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M8 11h8" />
      <path d="M8 7h6" />
    </symbol>
    <symbol id="book-type" viewBox="0 0 24 24">
      <path d="M10 13h4" />
      <path d="M12 6v7" />
      <path d="M16 8V6H8v2" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </symbol>
    <symbol id="book-up-2" viewBox="0 0 24 24">
      <path d="M12 13V7" />
      <path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
      <path d="m9 10 3-3 3 3" />
      <path d="m9 5 3-3 3 3" />
    </symbol>
    <symbol id="book-up" viewBox="0 0 24 24">
      <path d="M12 13V7" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9 10 3-3 3 3" />
    </symbol>
    <symbol id="book-user" viewBox="0 0 24 24">
      <path d="M15 13a3 3 0 1 0-6 0" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <circle cx="12" cy="8" r="2" />
    </symbol>
    <symbol id="book-x" viewBox="0 0 24 24">
      <path d="m14.5 7.5-5 5" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9.5 7.5 5 5" />
    </symbol>
    <symbol id="book" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </symbol>
    <symbol id="bookmark-check" viewBox="0 0 24 24">
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
      <path d="m9 10 2 2 4-4" />
    </symbol>
    <symbol id="bookmark-minus" viewBox="0 0 24 24">
      <path d="M15 10H9" />
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </symbol>
    <symbol id="bookmark-off" viewBox="0 0 24 24">
      <path d="M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5" />
      <path d="m2 2 20 20" />
      <path d="M8.656 3H17a2 2 0 0 1 2 2v8.344" />
    </symbol>
    <symbol id="bookmark-plus" viewBox="0 0 24 24">
      <path d="M12 7v6" />
      <path d="M15 10H9" />
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </symbol>
    <symbol id="bookmark-x" viewBox="0 0 24 24">
      <path d="m14.5 7.5-5 5" />
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
      <path d="m9.5 7.5 5 5" />
    </symbol>
    <symbol id="bookmark" viewBox="0 0 24 24">
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </symbol>
    <symbol id="boom-box" viewBox="0 0 24 24">
      <path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M8 8v1" />
      <path d="M12 8v1" />
      <path d="M16 8v1" />
      <rect width="20" height="12" x="2" y="9" rx="2" />
      <circle cx="8" cy="15" r="2" />
      <circle cx="16" cy="15" r="2" />
    </symbol>
    <symbol id="bot-message-square" viewBox="0 0 24 24">
      <path d="M12 6V2H8" />
      <path d="M15 11v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
      <path d="M9 11v2" />
    </symbol>
    <symbol id="bot-off" viewBox="0 0 24 24">
      <path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M22 22 2 2" />
      <path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
      <path d="M9 13v2" />
      <path d="M9.67 4H12v2.33" />
    </symbol>
    <symbol id="bot" viewBox="0 0 24 24">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </symbol>
    <symbol id="bottle-wine" viewBox="0 0 24 24">
      <path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" />
      <path d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" />
    </symbol>
    <symbol id="bow-arrow" viewBox="0 0 24 24">
      <path d="M17 3h4v4" />
      <path d="M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17" />
      <path d="M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05" />
      <path d="M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z" />
      <path d="M9.707 14.293 21 3" />
    </symbol>
    <symbol id="box" viewBox="0 0 24 24">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </symbol>
    <symbol id="boxes-linked" viewBox="0 0 24 24">
      <path d="M14 6h2a2 2 0 0 1 2 2v5" />
      <path d="M14.21 15.202 18 17.4V22" />
      <path d="M14.796 14.611A1.6 1.6 0 0 0 14 15.995v3.013a1.6 1.6 0 0 0 .797 1.384l2.4 1.392a1.6 1.6 0 0 0 1.606 0l2.4-1.392A1.6 1.6 0 0 0 22 19.008v-3.013a1.6 1.6 0 0 0-.796-1.384l-2.4-1.394a1.6 1.6 0 0 0-1.514-.051z" />
      <path d="m18 17.4 3.79-2.198" />
      <path d="M2.21 4.202 6 6.4V16a2 2 0 0 0 2 2h2" />
      <path d="M2.796 3.611A1.6 1.6 0 0 0 2 4.995v3.013a1.6 1.6 0 0 0 .797 1.384l2.4 1.392a1.6 1.6 0 0 0 1.606 0l2.4-1.392A1.6 1.6 0 0 0 10 8.008V4.995a1.6 1.6 0 0 0-.796-1.384l-2.4-1.394a1.6 1.6 0 0 0-1.514-.052z" />
      <path d="m6 6.4 3.79-2.198" />
    </symbol>
    <symbol id="boxes" viewBox="0 0 24 24">
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
      <path d="m7 16.5-4.74-2.85" />
      <path d="m7 16.5 5-3" />
      <path d="M7 16.5v5.17" />
      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
      <path d="m17 16.5-5-3" />
      <path d="m17 16.5 4.74-2.85" />
      <path d="M17 16.5v5.17" />
      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
      <path d="M12 8 7.26 5.15" />
      <path d="m12 8 4.74-2.85" />
      <path d="M12 13.5V8" />
    </symbol>
    <symbol id="braces" viewBox="0 0 24 24">
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </symbol>
    <symbol id="brackets" viewBox="0 0 24 24">
      <path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" />
      <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" />
    </symbol>
    <symbol id="brain-circuit" viewBox="0 0 24 24">
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 012 2v1" />
      <path d="M12 8h8" />
      <path d="M12 9a4.17 4.17 0 01-3 4" />
      <path d="M16 8V5a2 2 0 012-2" />
      <path d="M6 18a4 4 0 01-2-7.465" />
      <path d="M6.004 5.125a4 4 0 00-2.526 5.77" />
      <path d="M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518" />
      <circle cx="16" cy="13" r="0.5" fill="currentColor" />
      <circle cx="18" cy="3" r="0.5" fill="currentColor" />
      <circle cx="20" cy="21" r="0.5" fill="currentColor" />
      <circle cx="20" cy="8" r="0.5" fill="currentColor" />
    </symbol>
    <symbol id="brain-cog" viewBox="0 0 24 24">
      <path d="m10.852 14.772-.383.923" />
      <path d="m10.852 9.228-.383-.923" />
      <path d="m13.148 14.772.382.924" />
      <path d="m13.53 8.305-.382.923" />
      <path d="m14.772 10.852.923-.383" />
      <path d="m14.772 13.148.923.383" />
      <path d="M17.997 5.125a4 4 0 012.526 5.77" />
      <path d="M18 18a4 4 0 002-7.464" />
      <path d="M4.033 17.483A4 4 0 0011.46 20c.184-.31.896-.31 1.076 0a4 4 0 007.43-2.517" />
      <path d="M6 18a4 4 0 01-2-7.464" />
      <path d="M6.002 5.125a4 4 0 00-2.525 5.77" />
      <path d="M6.293 6.294a3 3 0 01-.287-1.098l-.004-.07a3 3 0 015.968-.543c.05.02.057.01.059 0a3 3 0 015.968.542l-.004.071a3 3 0 01-.287 1.098" />
      <path d="m9.228 10.852-.923-.383" />
      <path d="m9.228 13.148-.923.383" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="brain-off" viewBox="0 0 24 24">
      <path d="M12 18v-6" />
      <path d="M12 5v1.344" />
      <path d="M17.707 6.293A3 3 0 1012 5a3 3 0 00-4.124-2.781" />
      <path d="M17.997 5.125a4 4 0 012.526 5.77" />
      <path d="M19.644 19.644A4 4 0 0112 18a4 4 0 11-7.967-.517" />
      <path d="m2 2 20 20" />
      <path d="M20 10.536a4 4 0 011.533 5.34" />
      <path d="M3.477 10.895a4 4 0 011.876-5.542" />
      <path d="M6 18a4 4 0 01-2-7.464" />
      <path d="M9 13a4.17 4.17 0 002.166-1.5 4 4 0 00.138-.196" />
    </symbol>
    <symbol id="brain" viewBox="0 0 24 24">
      <path d="M12 18V5" />
      <path d="M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4" />
      <path d="M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294" />
      <path d="M17.996 5.125a4 4 0 012.526 5.77" />
      <path d="M18 18a4 4 0 002-7.465" />
      <path d="M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517" />
      <path d="M6 18a4 4 0 01-2-7.465" />
      <path d="M6.004 5.125a4 4 0 00-2.526 5.77" />
    </symbol>
    <symbol id="brick-wall-fire" viewBox="0 0 24 24">
      <path d="M16 3v2.107" />
      <path d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" />
      <path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" />
      <path d="M3 15h5.253" />
      <path d="M3 9h8.228" />
      <path d="M8 15v6" />
      <path d="M8 3v6" />
    </symbol>
    <symbol id="brick-wall-shield" viewBox="0 0 24 24">
      <path d="M12 9v1.258" />
      <path d="M16 3v5.46" />
      <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75" />
      <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" />
      <path d="M3 15h7" />
      <path d="M3 9h12.142" />
      <path d="M8 15v6" />
      <path d="M8 3v6" />
    </symbol>
    <symbol id="brick-wall" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 9v6" />
      <path d="M16 15v6" />
      <path d="M16 3v6" />
      <path d="M3 15h18" />
      <path d="M3 9h18" />
      <path d="M8 15v6" />
      <path d="M8 3v6" />
    </symbol>
    <symbol id="bridge" viewBox="0 0 24 24">
      <path d="M10 9.728V16" />
      <path d="M14 9.728V16" />
      <path d="M18 20V4" />
      <path d="m22 11-4-4A7.5 7.5 0 0 1 6 7l-4 4" />
      <path d="M22 16H2" />
      <path d="M6 20V4" />
    </symbol>
    <symbol id="briefcase-business" viewBox="0 0 24 24">
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="briefcase-conveyor-belt" viewBox="0 0 24 24">
      <path d="M10 20v2" />
      <path d="M14 20v2" />
      <path d="M18 20v2" />
      <path d="M21 20H3" />
      <path d="M6 20v2" />
      <path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
      <rect x="4" y="6" width="16" height="10" rx="2" />
    </symbol>
    <symbol id="briefcase-medical" viewBox="0 0 24 24">
      <path d="M12 11v4" />
      <path d="M14 13h-4" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M18 6v14" />
      <path d="M6 6v14" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="briefcase-plus" viewBox="0 0 24 24">
      <path d="M13.354 20H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v3.354" />
      <path d="M16 11.354V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      <path d="M16 17h6" />
      <path d="M19 14v6" />
    </symbol>
    <symbol id="briefcase" viewBox="0 0 24 24">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="bring-to-front" viewBox="0 0 24 24">
      <rect x="8" y="8" width="8" height="8" rx="2" />
      <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
      <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
    </symbol>
    <symbol id="broccoli" viewBox="0 0 24 24">
      <path d="M10 13a3 3 0 01-2.121-5.121" />
      <path d="M15.606 14.204c-3.5 1.5-5.899 4.503-8.899 7.503A1 1 0 016 22c-2 0-4-2-4-4a1 1 0 01.293-.707c1.911-1.911 3.823-3.578 5.347-5.441" />
      <path d="M16.573 14.737A4 4 0 0114 11" />
      <path d="M7.14 10.907a4 4 0 112.756-7.43A4 4 0 0116.7 4.48a2 2 0 012.82 2.82 4 4 0 011.002 6.805 4 4 0 11-7.51 1.59" />
    </symbol>
    <symbol id="broom-sparkles" viewBox="0 0 24 24">
      <path d="M11 2v2" />
      <path d="M12 3h-2" />
      <path d="M13.5 10.5 22 2" />
      <path d="M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z" />
      <path d="M20 15v4" />
      <path d="M22 17h-4" />
      <path d="M4 4v4" />
      <path d="m5 18 2-2" />
      <path d="M6 6H2" />
      <path d="m7.699 10.7 5.602 5.601" />
    </symbol>
    <symbol id="broom" viewBox="0 0 24 24">
      <path d="M13.5 10.5 22 2" />
      <path d="M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z" />
      <path d="m5 18 2-2" />
      <path d="m7.699 10.7 5.602 5.601" />
    </symbol>
    <symbol id="brush-cleaning" viewBox="0 0 24 24">
      <path d="m16 22-1-4" />
      <path d="M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" />
      <path d="M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" />
      <path d="m8 22 1-4" />
    </symbol>
    <symbol id="brush" viewBox="0 0 24 24">
      <path d="m11 10 3 3" />
      <path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" />
      <path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
    </symbol>
    <symbol id="bubbles" viewBox="0 0 24 24">
      <path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" />
      <circle cx="18.5" cy="8.5" r="3.5" />
      <circle cx="7.5" cy="16.5" r="5.5" />
      <circle cx="7.5" cy="4.5" r="2.5" />
    </symbol>
    <symbol id="bug-off" viewBox="0 0 24 24">
      <path d="M12 20v-8" />
      <path d="M12.656 7H14a4 4 0 0 1 4 4v1.344" />
      <path d="M14.12 3.88 16 2" />
      <path d="M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" />
      <path d="m2 2 20 20" />
      <path d="M21 5a4 4 0 0 1-3.55 3.97" />
      <path d="M22 13h-3.344" />
      <path d="M3 21a4 4 0 0 1 3.81-4" />
      <path d="M3 5a4 4 0 0 0 3.55 3.97" />
      <path d="M6 13H2" />
      <path d="m8 2 1.88 1.88" />
      <path d="M9.712 4.06A3 3 0 0 1 15 6v1.13" />
    </symbol>
    <symbol id="bug-play" viewBox="0 0 24 24">
      <path d="M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" />
      <path d="M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
      <path d="M14.12 3.88 16 2" />
      <path d="M21 5a4 4 0 0 1-3.55 3.97" />
      <path d="M3 21a4 4 0 0 1 3.81-4" />
      <path d="M3 5a4 4 0 0 0 3.55 3.97" />
      <path d="M6 13H2" />
      <path d="m8 2 1.88 1.88" />
      <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </symbol>
    <symbol id="bug" viewBox="0 0 24 24">
      <path d="M12 20v-9" />
      <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
      <path d="M14.12 3.88 16 2" />
      <path d="M21 21a4 4 0 0 0-3.81-4" />
      <path d="M21 5a4 4 0 0 1-3.55 3.97" />
      <path d="M22 13h-4" />
      <path d="M3 21a4 4 0 0 1 3.81-4" />
      <path d="M3 5a4 4 0 0 0 3.55 3.97" />
      <path d="M6 13H2" />
      <path d="m8 2 1.88 1.88" />
      <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </symbol>
    <symbol id="building-complex-plus" viewBox="0 0 24 24">
      <path d="M10 12h4" />
      <path d="M10 21v-3a2 2 0 013.05-1.702" />
      <path d="M10 8h4" />
      <path d="M16 19h6" />
      <path d="M18 7h2a2 2 0 012 2v4.355" />
      <path d="M19 16v6" />
      <path d="M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h8.535" />
      <path d="M6 21V5a2 2 0 012-2h8a2 2 0 012 2v7.126" />
    </symbol>
    <symbol id="building-complex" viewBox="0 0 24 24">
      <path d="M10 12h4" />
      <path d="M10 8h4" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </symbol>
    <symbol id="building" viewBox="0 0 24 24">
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M12 6h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
      <path d="M8 6h.01" />
      <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </symbol>
    <symbol id="bus-front" viewBox="0 0 24 24">
      <path d="M4 6 2 7" />
      <path d="M10 6h4" />
      <path d="m22 7-2-1" />
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M8 15h.01" />
      <path d="M16 15h.01" />
      <path d="M6 19v2" />
      <path d="M18 21v-2" />
    </symbol>
    <symbol id="bus" viewBox="0 0 24 24">
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </symbol>
    <symbol id="cable-car" viewBox="0 0 24 24">
      <path d="M10 3h.01" />
      <path d="M14 2h.01" />
      <path d="m2 9 20-5" />
      <path d="M12 12V6.5" />
      <rect width="16" height="10" x="4" y="12" rx="3" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M4 17h16" />
    </symbol>
    <symbol id="cable" viewBox="0 0 24 24">
      <path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" />
      <path d="M17 21v-2" />
      <path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" />
      <path d="M21 21v-2" />
      <path d="M3 5V3" />
      <path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" />
      <path d="M7 5V3" />
    </symbol>
    <symbol id="cake-slice" viewBox="0 0 24 24">
      <path d="M16 13H3" />
      <path d="M16 17H3" />
      <path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" />
      <circle cx="9" cy="7" r="2" />
    </symbol>
    <symbol id="cake" viewBox="0 0 24 24">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 4h.01" />
      <path d="M12 4h.01" />
      <path d="M17 4h.01" />
    </symbol>
    <symbol id="calculator" viewBox="0 0 24 24">
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </symbol>
    <symbol id="calendar-1" viewBox="0 0 24 24">
      <path d="M11 13h1v4" />
      <path d="M16 2v3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="calendar-arrow-down" viewBox="0 0 24 24">
      <path d="m14 17 4 4 4-4" />
      <path d="M16 2v3" />
      <path d="M18 13v8" />
      <path d="M21 10.354V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.343" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-arrow-left" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="M21 9H3" />
      <path d="M3 12.34V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-7.35" />
      <path d="M3 18h6" />
      <path d="m6 21-3-3 3-3" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-arrow-right" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="m18 21 3-3h-6" />
      <path d="M21 12.34V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.35" />
      <path d="m21 18-3-3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-arrow-up" viewBox="0 0 24 24">
      <path d="m14 17 4-4 4 4" />
      <path d="M16 2v3" />
      <path d="M18 21v-8" />
      <path d="M21 10.343V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h9" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-check-2" viewBox="0 0 24 24">
      <path d="M 19 3 L 5 3" />
      <path d="M 21 13 L 21 5" />
      <path d="M 21 5 A2 2 0 0 0 19 3" />
      <path d="M 3 19 A2 2 0 0 0 5 21" />
      <path d="M 3 5 L 3 19" />
      <path d="M 5 3 A2 2 0 0 0 3 5" />
      <path d="m16 19 2 2 4-4" />
      <path d="M16 2v3" />
      <path d="M3 9h18" />
      <path d="M5 21 L12.5 21" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-check" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="m9 15 2 2 4-4" />
    </symbol>
    <symbol id="calendar-chevrons-left" viewBox="0 0 24 24">
      <path d="m11 21-3-3 3-3" />
      <path d="M16 2v3" />
      <path d="M21 9H3" />
      <path d="M3 11.5V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
      <path d="m5 21-3-3 3-3" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-chevrons-right" viewBox="0 0 24 24">
      <path d="m13 21 3-3-3-3" />
      <path d="M16 2v3" />
      <path d="m19 21 3-3-3-3" />
      <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h4" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-clock" viewBox="0 0 24 24">
      <path d="M16 14v2.2l1.6 1" />
      <path d="M16 2v3" />
      <path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" />
      <path d="M3 9h5.859" />
      <path d="M8 2v3" />
      <circle cx="16" cy="16" r="6" />
    </symbol>
    <symbol id="calendar-cog" viewBox="0 0 24 24">
      <path d="m15.228 16.852-.923-.383" />
      <path d="m15.228 19.148-.923.383" />
      <path d="M16 2v3" />
      <path d="m16.47 14.305.382.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="m20.773 16.852.924-.383" />
      <path d="m20.773 19.148.924.383" />
      <path d="M21 10.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.5" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="calendar-days" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 13h.01" />
      <path d="M12 13h.01" />
      <path d="M16 13h.01" />
      <path d="M8 17h.01" />
      <path d="M12 17h.01" />
      <path d="M16 17h.01" />
    </symbol>
    <symbol id="calendar-fold" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10v-5a1 1 0 011-1za2.4 2.4 0 01-.706 1.706l-3.588 3.588A2.4 2.4 0 0115 21" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-heart" viewBox="0 0 24 24">
      <path d="M12.127 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.125" />
      <path d="M14.62 17.8A2.25 2.25 0 1118 14.836a2.25 2.25 0 113.38 2.966l-2.626 2.856a.998.998 0 01-1.507 0z" />
      <path d="M16 2v3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-minus-2" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M10 15h4" />
    </symbol>
    <symbol id="calendar-minus" viewBox="0 0 24 24">
      <path d="M16 18h6" />
      <path d="M16 2v3" />
      <path d="M21 14V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-off" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="m2 2 20 20" />
      <path d="M21 9h-5.5" />
      <path d="M3 9h6" />
      <path d="M3.586 3.586A2 2 0 003 5v14a2 2 0 002 2h14a2 2 0 001.414-.586" />
      <path d="M8.656 3H19a2 2 0 012 2v10.344" />
    </symbol>
    <symbol id="calendar-plus-2" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M10 15h4" />
      <path d="M12 13v4" />
    </symbol>
    <symbol id="calendar-plus" viewBox="0 0 24 24">
      <path d="M16 18h6" />
      <path d="M16 2v3" />
      <path d="M19 15v6" />
      <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-range" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M16 2v3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
      <path d="M17 13h-6" />
      <path d="M13 17H7" />
      <path d="M7 13h.01" />
      <path d="M17 17h.01" />
    </symbol>
    <symbol id="calendar-search" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="M21 10.69V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.25" />
      <path d="m22 21-1.875-1.875" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
      <circle cx="18" cy="17" r="3" />
    </symbol>
    <symbol id="calendar-sync" viewBox="0 0 24 24">
      <path d="M11 10v4h4" />
      <path d="m11 14 1.535-1.605a5 5 0 018 1.5" />
      <path d="M16 2v3" />
      <path d="m21 18-1.535 1.605a5 5 0 01-8-1.5" />
      <path d="M21 22v-4h-4" />
      <path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517" />
      <path d="M3 9h4" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-x-2" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="m17 16 5 5" />
      <path d="m17 21 5-5" />
      <path d="M21 12V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-x" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="m14 13-4 4" />
      <path d="m10 13 4 4" />
    </symbol>
    <symbol id="calendar" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
    </symbol>
    <symbol id="calendars" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" />
      <path d="M18 2v2" />
      <path d="M2 13h2" />
      <path d="M8 8h14" />
      <rect x="8" y="3" width="14" height="14" rx="2" />
    </symbol>
    <symbol id="camera-off" viewBox="0 0 24 24">
      <path d="M14.564 14.558a3 3 0 1 1-4.122-4.121" />
      <path d="m2 2 20 20" />
      <path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" />
      <path d="M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" />
    </symbol>
    <symbol id="camera" viewBox="0 0 24 24">
      <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
      <circle cx="12" cy="13" r="3" />
    </symbol>
    <symbol id="can-soda" viewBox="0 0 24 24">
      <path d="m17 22 1.664-2.496a2 2 0 00.336-1.11V5.606a2 2 0 00-.336-1.11L17 2" />
      <path d="M18 22H6" />
      <path d="M18 2H6" />
      <path d="M5 17h14" />
      <path d="M5 7h14" />
      <path d="m7 22-1.664-2.496A2 2 0 015 18.394V5.606a2 2 0 01.336-1.11L7 2" />
    </symbol>
    <symbol id="can" viewBox="0 0 24 24">
      <path d="M21 10.5a9 2.5 0 01-18 0v8a9 2.5 0 0018 0z" />
      <path d="M21 10.5A9 2.5 25.32 004.59 3.47 9 2.5 25.32 0021 10.5" />
      <path d="M3 10.5a9 2.5 0 016.527-2.405" />
      <path d="M9 16.858a31 31 0 006 0" />
    </symbol>
    <symbol id="candy-cane" viewBox="0 0 24 24">
      <path d="m10.8 5 2.111 4.223" />
      <path d="M17.75 7 15 2.1" />
      <path d="m4.874 14.647 2.12 4.24" />
      <path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z" />
      <path d="m7.906 9.712 2.005 4.411" />
    </symbol>
    <symbol id="candy-off" viewBox="0 0 24 24">
      <path d="M10 10v7.9" />
      <path d="M11.802 6.145a5 5 0 0 1 6.053 6.053" />
      <path d="M14 6.1v2.243" />
      <path d="m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" />
      <path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" />
      <path d="m2 2 20 20" />
      <path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" />
    </symbol>
    <symbol id="candy" viewBox="0 0 24 24">
      <path d="M10 7v10.9" />
      <path d="M14 6.1V17" />
      <path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" />
      <path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" />
      <path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" />
    </symbol>
    <symbol id="cannabis-off" viewBox="0 0 24 24">
      <path d="M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5" />
      <path d="M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9" />
      <path d="M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684" />
      <path d="m2 2 20 20" />
      <path d="M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907" />
      <path d="M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3" />
    </symbol>
    <symbol id="cannabis" viewBox="0 0 24 24">
      <path d="M12 22v-4" />
      <path d="M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6" />
    </symbol>
    <symbol id="cap" viewBox="0 0 24 24">
      <path d="M11.04 4.017a12 12 0 00-2.631 11.101" />
      <path d="M5 16c3.298 0 6-3 10-3a8 8 0 016.81 3.799 1.33 1.33 0 01.19.701.5.5 0 01-.5.5c-.732.001-2.04-1.004-3.5-1-3.005.008-5.197 2.982-8 3-2.761 0-5-1.79-5-4-1.5 0-2.543-.664-2.713-1.3A8.5 8.5 0 1119 12.5a8.6 8.6 0 01-.131 1.496" />
    </symbol>
    <symbol id="captions-off" viewBox="0 0 24 24">
      <path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
      <path d="M17 11h-.5" />
      <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
      <path d="m2 2 20 20" />
      <path d="M7 11h4" />
      <path d="M7 15h2.5" />
    </symbol>
    <symbol id="captions" viewBox="0 0 24 24">
      <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
      <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
    </symbol>
    <symbol id="car-battery" viewBox="0 0 24 24">
      <path d="M14 13h4" />
      <path d="M16 15v-4" />
      <path d="M18 5v2" />
      <path d="M6 13h4" />
      <path d="M6 5v2" />
      <rect x="2" y="7" width="20" height="12" rx="2" />
    </symbol>
    <symbol id="car-front" viewBox="0 0 24 24">
      <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
      <path d="M7 14h.01" />
      <path d="M17 14h.01" />
      <rect width="18" height="8" x="3" y="10" rx="2" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </symbol>
    <symbol id="car-taxi-front" viewBox="0 0 24 24">
      <path d="M10 2h4" />
      <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
      <path d="M7 14h.01" />
      <path d="M17 14h.01" />
      <rect width="18" height="8" x="3" y="10" rx="2" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </symbol>
    <symbol id="car" viewBox="0 0 24 24">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </symbol>
    <symbol id="caravan" viewBox="0 0 24 24">
      <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
      <path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" />
      <path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" />
      <circle cx="8" cy="19" r="2" />
    </symbol>
    <symbol id="card-sim" viewBox="0 0 24 24">
      <path d="M12 14v4" />
      <path d="M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M8 14h8" />
      <rect x="8" y="10" width="8" height="8" rx="2" />
    </symbol>
    <symbol id="carrot" viewBox="0 0 24 24">
      <path d="M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3" />
      <path d="M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7" />
      <path d="m8 15-2.58-2.58" />
    </symbol>
    <symbol id="carton-off" viewBox="0 0 24 24">
      <path d="M10 10H5v10a2 2 0 002 2h10a2 2 0 002-2v-1" />
      <path d="M13 22v-9" />
      <path d="M13.902 8.245 16 6h-4.343" />
      <path d="M19 13.343V10a2 2 0 00-.539-1.367L16 6V3a1 1 0 00-1-1H9a1 1 0 00-.857.486" />
      <path d="m2 2 20 20" />
      <path d="M7.034 7.034 5.539 8.633A2 2 0 005 10" />
    </symbol>
    <symbol id="carton" viewBox="0 0 24 24">
      <path d="M13 22V10a2 2 0 01.539-1.367L16 6H8L5.539 8.633A2 2 0 005 10v10a2 2 0 002 2h10a2 2 0 002-2V10a2 2 0 00-.539-1.367L16 6V3a1 1 0 00-1-1H9a1 1 0 00-1 1v3" />
      <path d="M5 10h8" />
    </symbol>
    <symbol id="case-lower" viewBox="0 0 24 24">
      <path d="M10 9v7" />
      <path d="M14 6v10" />
      <circle cx="17.5" cy="12.5" r="3.5" />
      <circle cx="6.5" cy="12.5" r="3.5" />
    </symbol>
    <symbol id="case-sensitive" viewBox="0 0 24 24">
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M22 9v7" />
      <path d="M3.304 13h6.392" />
      <circle cx="18.5" cy="12.5" r="3.5" />
    </symbol>
    <symbol id="case-upper" viewBox="0 0 24 24">
      <path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </symbol>
    <symbol id="cassette-tape" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <circle cx="8" cy="10" r="2" />
      <path d="M8 12h8" />
      <circle cx="16" cy="10" r="2" />
      <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />
    </symbol>
    <symbol id="cast" viewBox="0 0 24 24">
      <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <path d="M2 12a9 9 0 0 1 8 8" />
      <path d="M2 16a5 5 0 0 1 4 4" />
      <line x1="2" x2="2.01" y1="20" y2="20" />
    </symbol>
    <symbol id="castle" viewBox="0 0 24 24">
      <path d="M10 5V3" />
      <path d="M14 5V3" />
      <path d="M15 21v-3a3 3 0 0 0-6 0v3" />
      <path d="M18 3v8" />
      <path d="M18 5H6" />
      <path d="M22 11H2" />
      <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" />
      <path d="M6 3v8" />
    </symbol>
    <symbol id="cat" viewBox="0 0 24 24">
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </symbol>
    <symbol id="cctv-off" viewBox="0 0 24 24">
      <path d="m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448" />
      <path d="m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037" />
      <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902" />
      <path d="m2 2 20 20" />
      <path d="M2 21v-4" />
      <path d="M7 9h.01" />
    </symbol>
    <symbol id="cctv" viewBox="0 0 24 24">
      <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
      <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
      <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
      <path d="M2 21v-4" />
      <path d="M7 9h.01" />
    </symbol>
    <symbol id="certificate" viewBox="0 0 24 24">
      <path d="M12 10H6" />
      <path d="m20.69 15.479 1.29 4.88a.5.5 0 01-.698.591l-1.843-.849a1 1 0 00-.879.001l-1.846.85a.5.5 0 01-.692-.593l1.29-4.88" />
      <path d="M22 6.675V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h8" />
      <path d="M6 14h4" />
      <circle cx="19" cy="13" r="3" />
    </symbol>
    <symbol id="chart-area" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="chart-bar-big" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="7" y="13" width="9" height="4" rx="1" />
      <rect x="7" y="5" width="12" height="4" rx="1" />
    </symbol>
    <symbol id="chart-bar-decreasing" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 11h8" />
      <path d="M7 16h3" />
      <path d="M7 6h12" />
    </symbol>
    <symbol id="chart-bar-increasing" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 11h8" />
      <path d="M7 16h12" />
      <path d="M7 6h3" />
    </symbol>
    <symbol id="chart-bar-stacked" viewBox="0 0 24 24">
      <path d="M11 13v4" />
      <path d="M15 5v4" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="7" y="13" width="9" height="4" rx="1" />
      <rect x="7" y="5" width="12" height="4" rx="1" />
    </symbol>
    <symbol id="chart-bar" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 16h8" />
      <path d="M7 11h12" />
      <path d="M7 6h3" />
    </symbol>
    <symbol id="chart-bell-curve" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 16c3.5 0 2.5-10 6-10s2.5 10 6 10" />
    </symbol>
    <symbol id="chart-candlestick" viewBox="0 0 24 24">
      <path d="M9 5v4" />
      <rect width="4" height="6" x="7" y="9" rx="1" />
      <path d="M9 15v2" />
      <path d="M17 3v2" />
      <rect width="4" height="8" x="15" y="5" rx="1" />
      <path d="M17 13v3" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </symbol>
    <symbol id="chart-column-big" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="15" y="5" width="4" height="12" rx="1" />
      <rect x="7" y="8" width="4" height="9" rx="1" />
    </symbol>
    <symbol id="chart-column-decreasing" viewBox="0 0 24 24">
      <path d="M13 17V9" />
      <path d="M18 17v-3" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 17V5" />
    </symbol>
    <symbol id="chart-column-increasing" viewBox="0 0 24 24">
      <path d="M13 17V9" />
      <path d="M18 17V5" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 17v-3" />
    </symbol>
    <symbol id="chart-column-stacked" viewBox="0 0 24 24">
      <path d="M11 13H7" />
      <path d="M19 9h-4" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="15" y="5" width="4" height="12" rx="1" />
      <rect x="7" y="8" width="4" height="9" rx="1" />
    </symbol>
    <symbol id="chart-column" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </symbol>
    <symbol id="chart-gantt" viewBox="0 0 24 24">
      <path d="M10 6h8" />
      <path d="M12 16h6" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 11h7" />
    </symbol>
    <symbol id="chart-line" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="m19 9-5 5-4-4-3 3" />
    </symbol>
    <symbol id="chart-network" viewBox="0 0 24 24">
      <path d="m13.11 7.664 1.78 2.672" />
      <path d="m14.162 12.788-3.324 1.424" />
      <path d="m20 4-6.06 1.515" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="9" cy="15" r="2" />
    </symbol>
    <symbol id="chart-no-axes-column-decreasing" viewBox="0 0 24 24">
      <path d="M5 21V3" />
      <path d="M12 21V9" />
      <path d="M19 21v-6" />
    </symbol>
    <symbol id="chart-no-axes-column-increasing" viewBox="0 0 24 24">
      <path d="M5 21v-6" />
      <path d="M12 21V9" />
      <path d="M19 21V3" />
    </symbol>
    <symbol id="chart-no-axes-column" viewBox="0 0 24 24">
      <path d="M5 21v-6" />
      <path d="M12 21V3" />
      <path d="M19 21V9" />
    </symbol>
    <symbol id="chart-no-axes-combined" viewBox="0 0 24 24">
      <path d="M12 16v5" />
      <path d="M16 14.639V21" />
      <path d="M20 10.656V21" />
      <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
      <path d="M4 18.463V21" />
      <path d="M8 14.656V21" />
    </symbol>
    <symbol id="chart-no-axes-gantt" viewBox="0 0 24 24">
      <path d="M6 5h12" />
      <path d="M4 12h10" />
      <path d="M12 19h8" />
    </symbol>
    <symbol id="chart-pie" viewBox="0 0 24 24">
      <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    </symbol>
    <symbol id="chart-quadrant" viewBox="0 0 24 24">
      <path d="M13 3v18" />
      <path d="M3 12h18" />
      <path d="M3 3v16a2 2 0 002 2h16" />
      <circle cx="17.5" cy="5.5" r="0.5" fill="currentColor" />
      <circle cx="19.5" cy="16.5" r="0.5" fill="currentColor" />
      <circle cx="7.5" cy="16.5" r="0.5" fill="currentColor" />
      <circle cx="7.5" cy="7.5" r="0.5" fill="currentColor" />
    </symbol>
    <symbol id="chart-radar" viewBox="0 0 24 24">
      <path d="M12 2v10" />
      <path d="m16 18 3.085-8.125L12 4.103 3.473 9.442l3.196 10.554z" />
      <path d="m2 9 10 3 6 9" />
      <path d="m6 21 6-9 10-3" />
    </symbol>
    <symbol id="chart-scatter" viewBox="0 0 24 24">
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
      <circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
      <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </symbol>
    <symbol id="chart-spline" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
    </symbol>
    <symbol id="check-check" viewBox="0 0 24 24">
      <path d="M18 6 7 17l-5-5" />
      <path d="m22 10-7.5 7.5L13 16" />
    </symbol>
    <symbol id="check-line" viewBox="0 0 24 24">
      <path d="M20 4L9 15" />
      <path d="M21 19L3 19" />
      <path d="M9 15L4 10" />
    </symbol>
    <symbol id="check" viewBox="0 0 24 24">
      <path d="M20 6 9 17l-5-5" />
    </symbol>
    <symbol id="cheese" viewBox="0 0 24 24">
      <path d="M14 11a3 3 0 01-6 0 5 5 0 016 0" />
      <path d="M14.292 2.436a1.55 1.55 0 011.463-.088l.278.13A10.33 10.33 0 0122 11v8a2 2 0 01-2 2h-1.75a.28.28 0 01-.265-.25 2 2 0 00-3.97 0 .28.28 0 01-.265.25H4a2 2 0 01-2-2v-.75a.28.28 0 01.25-.265 2 2 0 00-.046-3.975.21.21 0 01-.204-.214v-2.678a2 2 0 01.952-1.703l6.062-3.732a.3.3 0 01.27-.002A2.5 2.5 0 0013 3.5l-.002-.104a.3.3 0 01.122-.24z" />
      <path d="M22 11h-8" />
      <path d="M8 11H2" />
    </symbol>
    <symbol id="chef-hat" viewBox="0 0 24 24">
      <path d="M10 11v5" />
      <path d="M14 11v5" />
      <path d="M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
      <path d="M6 16h12" />
    </symbol>
    <symbol id="cherry" viewBox="0 0 24 24">
      <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
      <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
      <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
      <path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" />
    </symbol>
    <symbol id="chess-bishop" viewBox="0 0 24 24">
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18" />
      <path d="m16 7-2.5 2.5" />
      <path d="M9 2h6" />
    </symbol>
    <symbol id="chess-king" viewBox="0 0 24 24">
      <path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1" />
      <path d="M10 4h4" />
      <path d="M12 2v6.818" />
    </symbol>
    <symbol id="chess-knight" viewBox="0 0 24 24">
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456" />
      <path d="m15 5 1.425-1.425" />
      <path d="m17 8 1.53-1.53" />
      <path d="M9.713 12.185 7 18" />
    </symbol>
    <symbol id="chess-pawn" viewBox="0 0 24 24">
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="m14.5 10 1.5 8" />
      <path d="M7 10h10" />
      <path d="m8 18 1.5-8" />
      <circle cx="12" cy="6" r="4" />
    </symbol>
    <symbol id="chess-queen" viewBox="0 0 24 24">
      <path d="m10.68 5.499-.996 4.982a.65.65 0 01-1.131.295L5.885 7.663" />
      <path d="m13.32 5.5.995 4.98a.65.65 0 001.131.296l2.668-3.113" />
      <path d="M20.428 8.952 17.5 18" />
      <path d="M4 20a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
      <path d="M6.5 18 3.571 8.952" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="20" cy="7" r="2" />
      <circle cx="4" cy="7" r="2" />
    </symbol>
    <symbol id="chess-rook" viewBox="0 0 24 24">
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="m17 18-1-9" />
      <path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
      <path d="M6 4h12" />
      <path d="m7 18 1-9" />
    </symbol>
    <symbol id="chevron-down" viewBox="0 0 24 24">
      <path d="m6 9 6 6 6-6" />
    </symbol>
    <symbol id="chevron-first" viewBox="0 0 24 24">
      <path d="m17 18-6-6 6-6" />
      <path d="M7 6v12" />
    </symbol>
    <symbol id="chevron-last" viewBox="0 0 24 24">
      <path d="m7 18 6-6-6-6" />
      <path d="M17 6v12" />
    </symbol>
    <symbol id="chevron-left" viewBox="0 0 24 24">
      <path d="m15 18-6-6 6-6" />
    </symbol>
    <symbol id="chevron-right" viewBox="0 0 24 24">
      <path d="m9 18 6-6-6-6" />
    </symbol>
    <symbol id="chevron-up" viewBox="0 0 24 24">
      <path d="m18 15-6-6-6 6" />
    </symbol>
    <symbol id="chevrons-down-up" viewBox="0 0 24 24">
      <path d="m7 20 5-5 5 5" />
      <path d="m7 4 5 5 5-5" />
    </symbol>
    <symbol id="chevrons-down" viewBox="0 0 24 24">
      <path d="m7 6 5 5 5-5" />
      <path d="m7 13 5 5 5-5" />
    </symbol>
    <symbol id="chevrons-left-right-ellipsis" viewBox="0 0 24 24">
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
      <path d="m17 7 5 5-5 5" />
      <path d="m7 7-5 5 5 5" />
      <path d="M8 12h.01" />
    </symbol>
    <symbol id="chevrons-left-right" viewBox="0 0 24 24">
      <path d="m9 7-5 5 5 5" />
      <path d="m15 7 5 5-5 5" />
    </symbol>
    <symbol id="chevrons-left" viewBox="0 0 24 24">
      <path d="m11 17-5-5 5-5" />
      <path d="m18 17-5-5 5-5" />
    </symbol>
    <symbol id="chevrons-right-left" viewBox="0 0 24 24">
      <path d="m20 17-5-5 5-5" />
      <path d="m4 17 5-5-5-5" />
    </symbol>
    <symbol id="chevrons-right" viewBox="0 0 24 24">
      <path d="m6 17 5-5-5-5" />
      <path d="m13 17 5-5-5-5" />
    </symbol>
    <symbol id="chevrons-up-down" viewBox="0 0 24 24">
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </symbol>
    <symbol id="chevrons-up" viewBox="0 0 24 24">
      <path d="m17 11-5-5-5 5" />
      <path d="m17 18-5-5-5 5" />
    </symbol>
    <symbol id="church" viewBox="0 0 24 24">
      <path d="M10 9h4" />
      <path d="M12 7v5" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" />
      <path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" />
    </symbol>
    <symbol id="cigarette-off" viewBox="0 0 24 24">
      <path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
      <path d="M18 8c0-2.5-2-2.5-2-5" />
      <path d="m2 2 20 20" />
      <path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
      <path d="M22 8c0-2.5-2-2.5-2-5" />
      <path d="M7 12v4" />
    </symbol>
    <symbol id="cigarette" viewBox="0 0 24 24">
      <path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
      <path d="M18 8c0-2.5-2-2.5-2-5" />
      <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M22 8c0-2.5-2-2.5-2-5" />
      <path d="M7 12v4" />
    </symbol>
    <symbol id="circle-arrow-down-left-exit" viewBox="0 0 24 24">
      <path d="M2 12a10 10 0 1 1 10 10" />
      <path d="m2 22 10-10" />
      <path d="M8 22H2v-6" />
    </symbol>
    <symbol id="circle-arrow-down-right-exit" viewBox="0 0 24 24">
      <path d="M12 22a10 10 0 1 1 10-10" />
      <path d="M22 22 12 12" />
      <path d="M22 16v6h-6" />
    </symbol>
    <symbol id="circle-arrow-down" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8" />
      <path d="m8 12 4 4 4-4" />
    </symbol>
    <symbol id="circle-arrow-left" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m12 8-4 4 4 4" />
      <path d="M16 12H8" />
    </symbol>
    <symbol id="circle-arrow-right" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m12 16 4-4-4-4" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="circle-arrow-up-left-exit" viewBox="0 0 24 24">
      <path d="M2 8V2h6" />
      <path d="m2 2 10 10" />
      <path d="M12 2A10 10 0 1 1 2 12" />
    </symbol>
    <symbol id="circle-arrow-up-right-exit" viewBox="0 0 24 24">
      <path d="M22 12A10 10 0 1 1 12 2" />
      <path d="M22 2 12 12" />
      <path d="M16 2h6v6" />
    </symbol>
    <symbol id="circle-arrow-up" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
    </symbol>
    <symbol id="circle-check-big" viewBox="0 0 24 24">
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </symbol>
    <symbol id="circle-check" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m16 9-5.5 5.5L8 12" />
    </symbol>
    <symbol id="circle-chevron-down" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m16 10-4 4-4-4" />
    </symbol>
    <symbol id="circle-chevron-left" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m14 16-4-4 4-4" />
    </symbol>
    <symbol id="circle-chevron-right" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m10 8 4 4-4 4" />
    </symbol>
    <symbol id="circle-chevron-up" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m8 14 4-4 4 4" />
    </symbol>
    <symbol id="circle-chevrons-down" viewBox="0 0 24 24">
      <path d="M9 14L12 17L15 14" />
      <path d="M9 8L12 11L15 8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-chevrons-left" viewBox="0 0 24 24">
      <path d="M10 9L7 12L10 15" />
      <path d="M16 9L13 12L16 15" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-chevrons-right" viewBox="0 0 24 24">
      <path d="M14 15L17 12L14 9" />
      <path d="M8 15L11 12L8 9" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-chevrons-up" viewBox="0 0 24 24">
      <path d="M15 10L12 7L9 10" />
      <path d="M15 16L12 13L9 16" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-dashed-check" viewBox="0 0 24 24">
      <path d="M10.1 2.182a10 10 0 013.8 0" />
      <path d="M13.9 21.818a10 10 0 01-3.8 0" />
      <path d="m16 9-5.5 5.5L8 12" />
      <path d="M17.609 3.721a10 10 0 012.69 2.7" />
      <path d="M2.182 13.9a10 10 0 010-3.8" />
      <path d="M20.279 17.609a10 10 0 01-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 010 3.8" />
      <path d="M3.721 6.391a10 10 0 012.7-2.69" />
      <path d="M6.391 20.279a10 10 0 01-2.69-2.7" />
    </symbol>
    <symbol id="circle-dashed" viewBox="0 0 24 24">
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
      <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
      <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
      <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
      <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
      <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
      <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
    </symbol>
    <symbol id="circle-divide" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="8" x2="16" y1="12" y2="12" />
      <line x1="12" x2="12" y1="16" y2="16" />
      <line x1="12" x2="12" y1="8" y2="8" />
    </symbol>
    <symbol id="circle-dollar-sign" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </symbol>
    <symbol id="circle-dot-dashed" viewBox="0 0 24 24">
      <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
      <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
      <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
      <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
      <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
      <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
      <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
      <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="circle-dot" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-ellipsis" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M17 12h.01" />
      <path d="M12 12h.01" />
      <path d="M7 12h.01" />
    </symbol>
    <symbol id="circle-equal" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M7 10h10" />
      <path d="M7 14h10" />
    </symbol>
    <symbol id="circle-euro" viewBox="0 0 24 24">
      <path d="M15 9.4a4 4 0 1 0 0 5.2" />
      <path d="M7 12h5" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-exclamation-point" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </symbol>
    <symbol id="circle-fading-arrow-up" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
      <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
      <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </symbol>
    <symbol id="circle-fading-check" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 017.38 16.75" />
      <path d="m16 9-5.5 5.5L8 12" />
      <path d="M2.5 8.875a10 10 0 00-.5 3" />
      <path d="M2.83 16a10 10 0 002.43 3.4" />
      <path d="M4.636 5.235a10 10 0 01.891-.857" />
      <path d="M8.644 21.42a10 10 0 007.631-.38" />
    </symbol>
    <symbol id="circle-fading-play" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
      <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
      <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </symbol>
    <symbol id="circle-fading-plus" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="M12 8v8" />
      <path d="M16 12H8" />
      <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
      <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </symbol>
    <symbol id="circle-gauge" viewBox="0 0 24 24">
      <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
      <circle cx="12" cy="12" r="2" />
      <path d="M13.4 10.6 19 5" />
    </symbol>
    <symbol id="circle-letter-a" viewBox="0 0 24 24">
      <path d="M15 14H9" />
      <circle cx="12" cy="12" r="10" />
      <path d="m8 16 3.453-7.648a.6.6 0 0 1 1.094 0L16 16" />
    </symbol>
    <symbol id="circle-letter-b" viewBox="0 0 24 24">
      <path d="M9 12h4.846a2.24 2.24 0 011.523.586 2 2 0 01.001 2.828 2.24 2.24 0 01-1.524.586H9.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H13a2 2 0 010 4" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-c" viewBox="0 0 24 24">
      <path d="M15 9.354a4 4 0 1 0 0 5.292" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-d" viewBox="0 0 24 24">
      <path d="M12 8a4 4 0 010 8H9.412A.41.41 0 019 15.588V8.412A.41.41 0 019.412 8z" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-e" viewBox="0 0 24 24">
      <path d="M15 8H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H15" />
      <path d="M9 12h4" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-f" viewBox="0 0 24 24">
      <path d="M9 16V8.5a.5.5 0 0 1 .5-.5H15" />
      <path d="M9 12h4" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-g" viewBox="0 0 24 24">
      <path d="M12.5 12H15v2.268a.88.88 0 01-.263.65A4 4 0 1112 8h2.5" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-h" viewBox="0 0 24 24">
      <path d="M9 16V8" />
      <path d="M15 16V8" />
      <path d="M9 12h6" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-i" viewBox="0 0 24 24">
      <path d="M12 16V8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-j" viewBox="0 0 24 24">
      <path d="M14 8v5.5a1 1 0 01-5 0V13" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-k" viewBox="0 0 24 24">
      <path d="M9 16V8" />
      <path d="m11 12 4 4" />
      <path d="m15 8-6 6" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-l" viewBox="0 0 24 24">
      <path d="M9 8v7.5a.5.5 0 0 0 .5.5H15" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-m" viewBox="0 0 24 24">
      <path d="M8 16.001v-7.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3v7.501" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-n" viewBox="0 0 24 24">
      <path d="M9 16V8.576a.496.496 0 01.937-.243l4.126 7.43A.496.496 0 0015 15.52V8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-o" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-p-off" viewBox="0 0 24 24">
      <path d="M12 12h1a2 2 0 000-4H9.5a.5.5 0 00-.5.5V9" />
      <path d="M15.652 21.31A10 10 0 012.691 8.348" />
      <path d="M22 22 2 2" />
      <path d="M4.929 4.929a10 10 0 0116.729 4.483 10 10 0 01-2.588 9.658" />
      <path d="M9 14.657V16" />
    </symbol>
    <symbol id="circle-letter-p" viewBox="0 0 24 24">
      <path d="M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-q" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="m16 16-2.5-2.5" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-r" viewBox="0 0 24 24">
      <path d="m11 12 4 4" />
      <path d="M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-s" viewBox="0 0 24 24">
      <path d="M14.5 8H11a2 2 0 100 4h2a2 2 0 110 4H9" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-t" viewBox="0 0 24 24">
      <path d="M12 16V8" />
      <path d="M9 8h6" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-u" viewBox="0 0 24 24">
      <path d="M15 8v5a3 3 0 1 1-6 0V8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-v" viewBox="0 0 24 24">
      <path d="m9 8 2.525 7.66a.5.5 0 0 0 .95 0L15 8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-w" viewBox="0 0 24 24">
      <path d="m16 8-1.591 7.598a.497.497 0 01-.97.038l-.96-3.276a.5.5 0 00-.959 0l-.96 3.276a.496.496 0 01-.969-.038L8 8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-x" viewBox="0 0 24 24">
      <path d="m9 16 6-8" />
      <path d="m9 8 6 8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-y" viewBox="0 0 24 24">
      <path d="m9 8 3 4 3-4" />
      <path d="M12 12v4" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-letter-z" viewBox="0 0 24 24">
      <path d="M9 8h5.501a.5.5 0 0 1 .37.836L9.13 15.164A.5.5 0 0 0 9.5 16H15" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-minus" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="circle-off" viewBox="0 0 24 24">
      <path d="m2 2 20 20" />
      <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
      <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
    </symbol>
    <symbol id="circle-pause" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="10" x2="10" y1="15" y2="9" />
      <line x1="14" x2="14" y1="15" y2="9" />
    </symbol>
    <symbol id="circle-percent" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
    </symbol>
    <symbol id="circle-pile" viewBox="0 0 24 24">
      <circle cx="12" cy="19" r="2" />
      <circle cx="12" cy="5" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="20" cy="19" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="8" cy="12" r="2" />
    </symbol>
    <symbol id="circle-play" viewBox="0 0 24 24">
      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-plus" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </symbol>
    <symbol id="circle-pound-sterling" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M10 16V9.5a1 1 0 0 1 5 0" />
      <path d="M8 12h4" />
      <path d="M8 16h7" />
    </symbol>
    <symbol id="circle-power" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7v4" />
      <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
    </symbol>
    <symbol id="circle-question-mark" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="circle-slash-2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M22 2 2 22" />
    </symbol>
    <symbol id="circle-slash" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="9" x2="15" y1="15" y2="9" />
    </symbol>
    <symbol id="circle-small" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="6" />
    </symbol>
    <symbol id="circle-star" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
    </symbol>
    <symbol id="circle-stop" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="circle-user-round" viewBox="0 0 24 24">
      <path d="M17.925 20.056a6 6 0 0 0-11.851.001" />
      <circle cx="12" cy="11" r="4" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-user" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </symbol>
    <symbol id="circle-x" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="circle" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circuit-board" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </symbol>
    <symbol id="citrus" viewBox="0 0 24 24">
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
      <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
      <path d="m14 10-5.5 5.5" />
      <path d="M14 17.85V10H6.15" />
    </symbol>
    <symbol id="clapperboard" viewBox="0 0 24 24">
      <path d="m12.296 3.464 3.02 3.956" />
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="m6.18 5.276 3.1 3.899" />
    </symbol>
    <symbol id="clef-alto" viewBox="0 0 24 24">
      <path d="M10 4v16" />
      <path d="M14 4.764a3 3 0 1 1-.152 4.327A4 4 0 0 1 10 12a4 4 0 0 1 3.848 2.909A3 3 0 1 1 14 19.236" />
      <path d="M6 4v16" />
    </symbol>
    <symbol id="clef-bass" viewBox="0 0 24 24">
      <path d="M19 11h.01" />
      <path d="M19 6h.01" />
      <path d="M5 8c0-4 4-4 4-4 6 0 6 6 6 6 0 7-10 11-10 11" />
      <circle cx="7" cy="8" r="2" />
    </symbol>
    <symbol id="clef-treble" viewBox="0 0 24 24">
      <path d="M10.586 21.414a2 2 0 0 0 3.378-1.791L11.036 4.377a2 2 0 1 1 3.378 1.037C12.414 7.414 7 8 7 13a5 5 0 0 0 5 5 5 4 0 0 0 5-4 3 3 0 0 0-3-3 3 2 0 0 0-3 2" />
    </symbol>
    <symbol id="clipboard-check" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </symbol>
    <symbol id="clipboard-clock" viewBox="0 0 24 24">
      <path d="M16 14v2.2l1.6 1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v.832" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
      <circle cx="16" cy="16" r="6" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </symbol>
    <symbol id="clipboard-copy" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v4" />
      <path d="M21 14H11" />
      <path d="m15 10-4 4 4 4" />
    </symbol>
    <symbol id="clipboard-list" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </symbol>
    <symbol id="clipboard-minus" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 14h6" />
    </symbol>
    <symbol id="clipboard-paste" viewBox="0 0 24 24">
      <path d="M11 14h10" />
      <path d="M16 4h2a2 2 0 0 1 2 2v1.344" />
      <path d="m17 18 4-4-4-4" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </symbol>
    <symbol id="clipboard-pen-line" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
      <path d="M16 4h2a2 2 0 0 1 1.73 1" />
      <path d="M8 18h1" />
      <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    </symbol>
    <symbol id="clipboard-pen" viewBox="0 0 24 24">
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </symbol>
    <symbol id="clipboard-plus" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 14h6" />
      <path d="M12 17v-6" />
    </symbol>
    <symbol id="clipboard-type" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12v-1h6v1" />
      <path d="M11 17h2" />
      <path d="M12 11v6" />
    </symbol>
    <symbol id="clipboard-x" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m14.5 11.5-5 5" />
      <path d="m9.5 11.5 5 5" />
    </symbol>
    <symbol id="clipboard" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </symbol>
    <symbol id="clock-1" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l2-4" />
    </symbol>
    <symbol id="clock-10" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-4-2" />
    </symbol>
    <symbol id="clock-11" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-2-4" />
    </symbol>
    <symbol id="clock-12" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6" />
    </symbol>
    <symbol id="clock-2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4-2" />
    </symbol>
    <symbol id="clock-3" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6h4" />
    </symbol>
    <symbol id="clock-4" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </symbol>
    <symbol id="clock-5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l2 4" />
    </symbol>
    <symbol id="clock-6" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v10" />
    </symbol>
    <symbol id="clock-7" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-2 4" />
    </symbol>
    <symbol id="clock-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-4 2" />
    </symbol>
    <symbol id="clock-9" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6H8" />
    </symbol>
    <symbol id="clock-arrow-down" viewBox="0 0 24 24">
      <path d="M12 6v6l2 1" />
      <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
      <path d="m14 18 4 4 4-4" />
      <path d="M18 14v8" />
    </symbol>
    <symbol id="clock-arrow-left" viewBox="0 0 24 24">
      <path d="M12 6v6l1.5.8" />
      <path d="M12.338 21.994a10 10 0 1 1 9.587-8.767" />
      <path d="M14 18h8" />
      <path d="m18 22-4-4 4-4" />
    </symbol>
    <symbol id="clock-arrow-right" viewBox="0 0 24 24">
      <path d="M12 6v6l2 1" />
      <path d="M13.5 21.885A10 10 0 1 1 22 12" />
      <path d="M14 18h8" />
      <path d="m18 22 4-4-4-4" />
    </symbol>
    <symbol id="clock-arrow-up" viewBox="0 0 24 24">
      <path d="M12 6v6l1.56.78" />
      <path d="M13.227 21.925a10 10 0 1 1 8.767-9.588" />
      <path d="m14 18 4-4 4 4" />
      <path d="M18 22v-8" />
    </symbol>
    <symbol id="clock-check" viewBox="0 0 24 24">
      <path d="M21.95 13a10 10 0 1 0-8.685 8.92" />
      <path d="M12 6v6l4 2" />
      <path d="m16 19 2 2 4-4" />
    </symbol>
    <symbol id="clock-exclamation-point" viewBox="0 0 24 24">
      <path d="M12 6v6l4 2" />
      <path d="M20 12v5" />
      <path d="M20 21h.01" />
      <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
    </symbol>
    <symbol id="clock-fading" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="M12 6v6l4 2" />
      <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
      <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </symbol>
    <symbol id="clock-plus" viewBox="0 0 24 24">
      <path d="M12 6v6l3.644 1.822" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
      <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" />
    </symbol>
    <symbol id="clock" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </symbol>
    <symbol id="closed-caption" viewBox="0 0 24 24">
      <path d="M10 9.17a3 3 0 1 0 0 5.66" />
      <path d="M17 9.17a3 3 0 1 0 0 5.66" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="cloud-backup" viewBox="0 0 24 24">
      <path d="M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607" />
      <path d="M7 11v4h4" />
      <path d="M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15" />
    </symbol>
    <symbol id="cloud-check" viewBox="0 0 24 24">
      <path d="m17 15-5.5 5.5L9 18" />
      <path d="M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" />
    </symbol>
    <symbol id="cloud-cog" viewBox="0 0 24 24">
      <path d="m10.852 19.772-.383.924" />
      <path d="m13.148 14.228.383-.923" />
      <path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
      <path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" />
      <path d="m14.772 15.852.923-.383" />
      <path d="m14.772 18.148.923.383" />
      <path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
      <path d="m9.228 15.852-.923-.383" />
      <path d="m9.228 18.148-.923.383" />
    </symbol>
    <symbol id="cloud-download" viewBox="0 0 24 24">
      <path d="M12 13v8l-4-4" />
      <path d="m12 21 4-4" />
      <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
    </symbol>
    <symbol id="cloud-drizzle" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M8 19v1" />
      <path d="M8 14v1" />
      <path d="M16 19v1" />
      <path d="M16 14v1" />
      <path d="M12 21v1" />
      <path d="M12 16v1" />
    </symbol>
    <symbol id="cloud-exclamation-point" viewBox="0 0 24 24">
      <path d="M12 12v4" />
      <path d="M12 20h.01" />
      <path d="M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" />
    </symbol>
    <symbol id="cloud-fog" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 17H7" />
      <path d="M17 21H9" />
    </symbol>
    <symbol id="cloud-hail" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v2" />
      <path d="M8 14v2" />
      <path d="M16 20h.01" />
      <path d="M8 20h.01" />
      <path d="M12 16v2" />
      <path d="M12 22h.01" />
    </symbol>
    <symbol id="cloud-lightning" viewBox="0 0 24 24">
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </symbol>
    <symbol id="cloud-moon-rain" viewBox="0 0 24 24">
      <path d="M11 20v2" />
      <path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" />
      <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
      <path d="M7 19v2" />
    </symbol>
    <symbol id="cloud-moon" viewBox="0 0 24 24">
      <path d="M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" />
      <path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" />
    </symbol>
    <symbol id="cloud-off" viewBox="0 0 24 24">
      <path d="M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057" />
      <path d="M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="cloud-rain-wind" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="m9.2 22 3-7" />
      <path d="m9 13-3 7" />
      <path d="m17 13-3 7" />
    </symbol>
    <symbol id="cloud-rain" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </symbol>
    <symbol id="cloud-snow" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M8 15h.01" />
      <path d="M8 19h.01" />
      <path d="M12 17h.01" />
      <path d="M12 21h.01" />
      <path d="M16 15h.01" />
      <path d="M16 19h.01" />
    </symbol>
    <symbol id="cloud-sun-rain" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
      <path d="M11 20v2" />
      <path d="M7 19v2" />
    </symbol>
    <symbol id="cloud-sun" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </symbol>
    <symbol id="cloud-sync" viewBox="0 0 24 24">
      <path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5" />
      <path d="M17 22v-4h-4" />
      <path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" />
      <path d="M7 10v4h4" />
      <path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5" />
    </symbol>
    <symbol id="cloud-upload" viewBox="0 0 24 24">
      <path d="M12 13v8" />
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="m8 17 4-4 4 4" />
    </symbol>
    <symbol id="cloud" viewBox="0 0 24 24">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </symbol>
    <symbol id="cloudy" viewBox="0 0 24 24">
      <path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" />
      <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />
    </symbol>
    <symbol id="clover" viewBox="0 0 24 24">
      <path d="M16.17 7.83 2 22" />
      <path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" />
      <path d="m7.83 7.83 8.34 8.34" />
    </symbol>
    <symbol id="club" viewBox="0 0 24 24">
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
      <path d="M12 17.66L12 22" />
    </symbol>
    <symbol id="code-xml" viewBox="0 0 24 24">
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </symbol>
    <symbol id="code" viewBox="0 0 24 24">
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </symbol>
    <symbol id="coffee" viewBox="0 0 24 24">
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </symbol>
    <symbol id="cog" viewBox="0 0 24 24">
      <path d="M11 10.27 7 3.34" />
      <path d="m11 13.73-4 6.93" />
      <path d="M12 22v-2" />
      <path d="M12 2v2" />
      <path d="M14 12h8" />
      <path d="m17 20.66-1-1.73" />
      <path d="m17 3.34-1 1.73" />
      <path d="M2 12h2" />
      <path d="m20.66 17-1.73-1" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="8" />
    </symbol>
    <symbol id="coins" viewBox="0 0 24 24">
      <path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" />
      <path d="M15 6h1v4" />
      <path d="m6.134 14.768.866-.5 2 3.464" />
      <circle cx="16" cy="8" r="6" />
    </symbol>
    <symbol id="columns-2" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 3v18" />
    </symbol>
    <symbol id="columns-3-cog" viewBox="0 0 24 24">
      <path d="M10.6 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.6" />
      <path d="m14.305 19.53.923-.382" />
      <path d="M15 3v7.6" />
      <path d="m15.229 16.852-.924-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="m20.773 16.852.922-.383" />
      <path d="m20.773 19.148.922.383" />
      <path d="M9 3v18" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="columns-3" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </symbol>
    <symbol id="columns-4" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7.5 3v18" />
      <path d="M12 3v18" />
      <path d="M16.5 3v18" />
    </symbol>
    <symbol id="combine" viewBox="0 0 24 24">
      <path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="m7 15 3 3" />
      <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="3" width="7" height="7" rx="1" />
    </symbol>
    <symbol id="command" viewBox="0 0 24 24">
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </symbol>
    <symbol id="compass" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
    </symbol>
    <symbol id="component" viewBox="0 0 24 24">
      <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
      <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
      <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
      <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
    </symbol>
    <symbol id="computer" viewBox="0 0 24 24">
      <path d="M12 18h6" />
      <path d="M6 18h.01" />
      <path d="M8 6h1" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <rect x="4" y="2" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="concierge-bell" viewBox="0 0 24 24">
      <path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" />
      <path d="M20 16a8 8 0 1 0-16 0" />
      <path d="M12 4v4" />
      <path d="M10 4h4" />
    </symbol>
    <symbol id="cone" viewBox="0 0 24 24">
      <path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" />
      <ellipse cx="12" cy="19" rx="9" ry="3" />
    </symbol>
    <symbol id="construction" viewBox="0 0 24 24">
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </symbol>
    <symbol id="contact-round" viewBox="0 0 24 24">
      <path d="M16 2v2" />
      <path d="M17.915 21a6 6 0 10-12 0" />
      <path d="M8 2v2" />
      <circle cx="12" cy="11" r="4" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="contact" viewBox="0 0 24 24">
      <path d="M16 2v2" />
      <path d="M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2" />
      <path d="M8 2v2" />
      <circle cx="12" cy="10" r="3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="container" viewBox="0 0 24 24">
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </symbol>
    <symbol id="contrast" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 18a6 6 0 0 0 0-12v12z" />
    </symbol>
    <symbol id="cookie" viewBox="0 0 24 24">
      <path d="M11 17h.01" />
      <path d="M11.496 2c.324-.016.558.292.529.615a4 4 0 004.235 4.368.713.713 0 01.758.757 4 4 0 004.366 4.237c.323-.03.63.204.614.527a10 10 0 01-2.915 6.566A1 1 0 114.93 4.918 10 10 0 0111.496 2" />
      <path d="M12 12h.01" />
      <path d="M16 16h.01" />
      <path d="M16 3h.01" />
      <path d="M21 4h.01" />
      <path d="M21 8h.01" />
      <path d="M7 14h.01" />
      <path d="M9 8h.01" />
    </symbol>
    <symbol id="cooking-pot" viewBox="0 0 24 24">
      <path d="M2 12h20" />
      <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="m4 8 16-4" />
      <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </symbol>
    <symbol id="copy-check" viewBox="0 0 24 24">
      <path d="m12 15 2 2 4-4" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy-minus" viewBox="0 0 24 24">
      <line x1="12" x2="18" y1="15" y2="15" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy-plus" viewBox="0 0 24 24">
      <line x1="15" x2="15" y1="12" y2="18" />
      <line x1="12" x2="18" y1="15" y2="15" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy-slash" viewBox="0 0 24 24">
      <line x1="12" x2="18" y1="18" y2="12" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy-x" viewBox="0 0 24 24">
      <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" />
      <rect x="8" y="8" width="14" height="14" rx="2" />
      <path d="m12.5 12.5 5 5" />
      <path d="m12.5 17.5 5-5" />
    </symbol>
    <symbol id="copy" viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copyleft" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.17 14.83a4 4 0 1 0 0-5.66" />
    </symbol>
    <symbol id="corner-down-left" viewBox="0 0 24 24">
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
      <path d="m9 10-5 5 5 5" />
    </symbol>
    <symbol id="corner-down-right" viewBox="0 0 24 24">
      <path d="m15 10 5 5-5 5" />
      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </symbol>
    <symbol id="corner-left-down" viewBox="0 0 24 24">
      <path d="m14 15-5 5-5-5" />
      <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </symbol>
    <symbol id="corner-left-up" viewBox="0 0 24 24">
      <path d="M14 9 9 4 4 9" />
      <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </symbol>
    <symbol id="corner-right-down" viewBox="0 0 24 24">
      <path d="m10 15 5 5 5-5" />
      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </symbol>
    <symbol id="corner-right-up" viewBox="0 0 24 24">
      <path d="m10 9 5-5 5 5" />
      <path d="M4 20h7a4 4 0 0 0 4-4V4" />
    </symbol>
    <symbol id="corner-up-left" viewBox="0 0 24 24">
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
      <path d="M9 14 4 9l5-5" />
    </symbol>
    <symbol id="corner-up-right" viewBox="0 0 24 24">
      <path d="m15 14 5-5-5-5" />
      <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </symbol>
    <symbol id="cpu-ai" viewBox="0 0 24 24">
      <path d="M12 20v2" />
      <path d="M12 2v2" />
      <path d="M16 9v6" />
      <path d="M17 20v2" />
      <path d="M17 2v2" />
      <path d="M2 12h2" />
      <path d="M2 17h2" />
      <path d="M2 7h2" />
      <path d="M20 12h2" />
      <path d="M20 17h2" />
      <path d="M20 7h2" />
      <path d="M7 20v2" />
      <path d="M7 2v2" />
      <path d="M8 13h4" />
      <path d="M8 15v-4a2 2 0 014 0v4" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </symbol>
    <symbol id="cpu" viewBox="0 0 24 24">
      <path d="M12 20v2" />
      <path d="M12 2v2" />
      <path d="M17 20v2" />
      <path d="M17 2v2" />
      <path d="M2 12h2" />
      <path d="M2 17h2" />
      <path d="M2 7h2" />
      <path d="M20 12h2" />
      <path d="M20 17h2" />
      <path d="M20 7h2" />
      <path d="M7 20v2" />
      <path d="M7 2v2" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </symbol>
    <symbol id="creative-commons" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
      <path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
    </symbol>
    <symbol id="credit-card-check" viewBox="0 0 24 24">
      <path d="M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v4" />
      <path d="M2 10h20" />
      <path d="M6 14h2" />
      <path d="m16 17 2 2 4-4" />
    </symbol>
    <symbol id="credit-card-minus" viewBox="0 0 24 24">
      <path d="M22 13V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8.536" />
      <path d="M22 10H2" />
      <path d="M6 14h2" />
      <path d="M16 17h6" />
    </symbol>
    <symbol id="credit-card-plus" viewBox="0 0 24 24">
      <path d="M22 11.354V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8.536" />
      <path d="M22 10H2" />
      <path d="M6 14h2" />
      <path d="M16 17h6" />
      <path d="M19 14v6" />
    </symbol>
    <symbol id="credit-card-reader" viewBox="0 0 24 24">
      <path d="M15 16v1" />
      <path d="M16.963 7.734A1 1 0 0015.999 7H8.003a1 1 0 00-.964.734L4.073 18.467A2 2 0 006 21h12a2 2 0 001.927-2.532z" />
      <path d="M2.678 8.5A2 2 0 012 7V5a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-.676 1.499" />
      <path d="m9 21 2-14" />
    </symbol>
    <symbol id="credit-card-x" viewBox="0 0 24 24">
      <path d="M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v3.5" />
      <path d="M2 10h20" />
      <path d="M6 14h2" />
      <path d="m16.5 14.5 5 5" />
      <path d="m21.5 14.5-5 5" />
    </symbol>
    <symbol id="credit-card" viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
      <path d="M6 14h2" />
    </symbol>
    <symbol id="croissant" viewBox="0 0 24 24">
      <path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" />
      <path d="M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" />
      <path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" />
      <path d="M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" />
      <path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" />
    </symbol>
    <symbol id="crop" viewBox="0 0 24 24">
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </symbol>
    <symbol id="cross" viewBox="0 0 24 24">
      <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" />
    </symbol>
    <symbol id="crosshair" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="22" x2="18" y1="12" y2="12" />
      <line x1="6" x2="2" y1="12" y2="12" />
      <line x1="12" x2="12" y1="6" y2="2" />
      <line x1="12" x2="12" y1="22" y2="18" />
    </symbol>
    <symbol id="crown" viewBox="0 0 24 24">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </symbol>
    <symbol id="cuboid" viewBox="0 0 24 24">
      <path d="M10 22v-8" />
      <path d="M2.336 8.89 10 14l11.715-7.029" />
      <path d="M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z" />
    </symbol>
    <symbol id="cup-soda" viewBox="0 0 24 24">
      <path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
      <path d="M5 8h14" />
      <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
      <path d="m12 8 1-6h2" />
    </symbol>
    <symbol id="cupcake" viewBox="0 0 24 24">
      <path d="M12 22v-9" />
      <path d="M14 4h1a3 3 0 013 3l-.004.125A4 4 0 0121 11v2" />
      <path d="m15.5 22 1.5-9" />
      <path d="M21 13a1 1 0 01.919 1.394l-2.74 6.394A2 2 0 0117.34 22H6.659a2 2 0 01-1.838-1.212l-2.74-6.394A1 1 0 013 13z" />
      <path d="M3 13v-2a4 4 0 013.003-3.875L6 7a3 3 0 013-3h1" />
      <path d="M8.5 22 7 13" />
      <circle cx="12" cy="4" r="2" />
    </symbol>
    <symbol id="currency" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </symbol>
    <symbol id="cylinder" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </symbol>
    <symbol id="dam" viewBox="0 0 24 24">
      <path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <path d="M2 6h4" />
      <path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" />
    </symbol>
    <symbol id="database-arrow-down" viewBox="0 0 24 24">
      <path d="m16 19 3 3 3-3" />
      <path d="M19 16v6" />
      <path d="M21 12.536V5" />
      <path d="M3 12A9 3 0 0 0 15.182 14.806" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-arrow-up" viewBox="0 0 24 24">
      <path d="M19 22v-6" />
      <path d="M21 12.536V5" />
      <path d="m22 19-3-3-3 3" />
      <path d="M3 12A9 3 0 0 0 14.457 14.886" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-backup" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 12a9 3 0 0 0 5 2.69" />
      <path d="M21 9.3V5" />
      <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
      <path d="M12 12v4h4" />
      <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
    </symbol>
    <symbol id="database-check" viewBox="0 0 24 24">
      <path d="m16 19 2 2 4-4" />
      <path d="M21 13.127V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-cog" viewBox="0 0 24 24">
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <path d="M21 10.5V5" />
      <path d="M3 12a9 3 0 0 0 7.599 2.963" />
      <path d="M3 5v14a9 3 0 0 0 8.148 2.987" />
      <circle cx="18" cy="18" r="3" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-minus" viewBox="0 0 24 24">
      <path d="M21 15V5" />
      <path d="M22 19h-6" />
      <path d="M3 12A9 3 0 0 0 21 12" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-plus" viewBox="0 0 24 24">
      <path d="M19 16v6" />
      <path d="M21 12.536V5" />
      <path d="M22 19h-6" />
      <path d="M3 12A9 3 0 0 0 15.1824 14.8061" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-search" viewBox="0 0 24 24">
      <path d="M21 11.693V5" />
      <path d="m22 22-1.875-1.875" />
      <path d="M3 12a9 3 0 0 0 8.697 2.998" />
      <path d="M3 5v14a9 3 0 0 0 9.28 2.999" />
      <circle cx="18" cy="18" r="3" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-x" viewBox="0 0 24 24">
      <path d="m17 17 5 5" />
      <path d="M19.323 13.744A9 3 0 0 0 21 12" />
      <path d="M21 13.127V5" />
      <path d="m22 17-5 5" />
      <path d="M3 12A9 3 0 0 0 13.563 14.954" />
      <path d="M3 5V19A9 3 0 0 0 13 21.981" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-zap" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 15 21.84" />
      <path d="M21 5V8" />
      <path d="M21 12L18 17H22L19 22" />
      <path d="M3 12A9 3 0 0 0 14.59 14.87" />
    </symbol>
    <symbol id="database" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </symbol>
    <symbol id="decimals-arrow-left" viewBox="0 0 24 24">
      <path d="m13 21-3-3 3-3" />
      <path d="M20 18H10" />
      <path d="M3 11h.01" />
      <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </symbol>
    <symbol id="decimals-arrow-right" viewBox="0 0 24 24">
      <path d="M10 18h10" />
      <path d="m17 21 3-3-3-3" />
      <path d="M3 11h.01" />
      <rect x="15" y="3" width="5" height="8" rx="2.5" />
      <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </symbol>
    <symbol id="delete" viewBox="0 0 24 24">
      <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
      <path d="m12 9 6 6" />
      <path d="m18 9-6 6" />
    </symbol>
    <symbol id="dessert" viewBox="0 0 24 24">
      <path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" />
      <path d="M20.804 14.869a9 9 0 0 1-17.608 0" />
      <circle cx="12" cy="4" r="2" />
    </symbol>
    <symbol id="diagram-flow-horizontal" viewBox="0 0 24 24">
      <path d="M8 12h.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 003.5 3.5h.5" />
      <path d="M8.5 12A3.5 3.5 0 0012 8.5 3.5 3.5 0 0115.5 5h.5" />
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="16" y="2" width="6" height="6" rx="1" />
      <rect x="2" y="9" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="diagram-flow-vertical" viewBox="0 0 24 24">
      <path d="M12 8.5a3.5 3.5 0 003.5 3.5 3.5 3.5 0 013.5 3.5v.5" />
      <path d="M12 8v.5A3.5 3.5 0 018.5 12 3.5 3.5 0 005 15.5v.5" />
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="diameter" viewBox="0 0 24 24">
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
      <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
      <path d="m6.41 6.41 11.18 11.18" />
      <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
    </symbol>
    <symbol id="diamond-minus" viewBox="0 0 24 24">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="diamond-percent" viewBox="0 0 24 24">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" />
      <path d="M9.2 9.2h.01" />
      <path d="m14.5 9.5-5 5" />
      <path d="M14.7 14.8h.01" />
    </symbol>
    <symbol id="diamond-plus" viewBox="0 0 24 24">
      <path d="M12 8v8" />
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="diamond" viewBox="0 0 24 24">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </symbol>
    <symbol id="dice-1" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M12 12h.01" />
    </symbol>
    <symbol id="dice-2" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M15 9h.01" />
      <path d="M9 15h.01" />
    </symbol>
    <symbol id="dice-3" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M12 12h.01" />
      <path d="M8 16h.01" />
    </symbol>
    <symbol id="dice-4" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M8 8h.01" />
      <path d="M8 16h.01" />
      <path d="M16 16h.01" />
    </symbol>
    <symbol id="dice-5" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M8 8h.01" />
      <path d="M8 16h.01" />
      <path d="M16 16h.01" />
      <path d="M12 12h.01" />
    </symbol>
    <symbol id="dice-6" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M16 12h.01" />
      <path d="M16 16h.01" />
      <path d="M8 8h.01" />
      <path d="M8 12h.01" />
      <path d="M8 16h.01" />
    </symbol>
    <symbol id="dices" viewBox="0 0 24 24">
      <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
      <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
      <path d="M6 18h.01" />
      <path d="M10 14h.01" />
      <path d="M15 6h.01" />
      <path d="M18 9h.01" />
    </symbol>
    <symbol id="diff" viewBox="0 0 24 24">
      <path d="M12 3v14" />
      <path d="M5 10h14" />
      <path d="M5 21h14" />
    </symbol>
    <symbol id="disc-2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12h.01" />
    </symbol>
    <symbol id="disc-3" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
    </symbol>
    <symbol id="disc-album" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 12h.01" />
    </symbol>
    <symbol id="disc" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="divide" viewBox="0 0 24 24">
      <circle cx="12" cy="6" r="1" />
      <line x1="5" x2="19" y1="12" y2="12" />
      <circle cx="12" cy="18" r="1" />
    </symbol>
    <symbol id="dna-off" viewBox="0 0 24 24">
      <path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
      <path d="m17 6-2.891-2.891" />
      <path d="M2 15c3.333-3 6.667-3 10-3" />
      <path d="m2 2 20 20" />
      <path d="m20 9 .891.891" />
      <path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
      <path d="M3.109 14.109 4 15" />
      <path d="m6.5 12.5 1 1" />
      <path d="m7 18 2.891 2.891" />
      <path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
    </symbol>
    <symbol id="dna" viewBox="0 0 24 24">
      <path d="m10 16 1.5 1.5" />
      <path d="m14 8-1.5-1.5" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="m16.5 10.5 1 1" />
      <path d="m17 6-2.891-2.891" />
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="m20 9 .891.891" />
      <path d="M3.109 14.109 4 15" />
      <path d="m6.5 12.5 1 1" />
      <path d="m7 18 2.891 2.891" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
    </symbol>
    <symbol id="dock" viewBox="0 0 24 24">
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </symbol>
    <symbol id="dog" viewBox="0 0 24 24">
      <path d="M11.25 16.25h1.5L12 17z" />
      <path d="M16 14v.5" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
      <path d="M8 14v.5" />
      <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
    </symbol>
    <symbol id="dollar-sign" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <path d="M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6" />
    </symbol>
    <symbol id="dome" viewBox="0 0 24 24">
      <path d="M10 21v-3a2 2 0 014 0v3" />
      <path d="M12 2v2" />
      <path d="M18 12v9" />
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a1 1 0 011-1h18a1 1 0 011 1z" />
      <path d="M4 12a8 8 0 0116 0" />
      <path d="M6 12v9" />
    </symbol>
    <symbol id="donut" viewBox="0 0 24 24">
      <path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="door-closed-cog" viewBox="0 0 24 24">
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.229 16.852-.924-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.773-.383.924" />
      <path d="M19 10.35V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.697-.382-.924" />
      <path d="M2 21h8.58" />
      <path d="m20.773 16.852.922-.383" />
      <path d="m20.773 19.148.922.383" />
      <path d="M9 12h.01" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="door-closed-locked" viewBox="0 0 24 24">
      <path d="M19 8V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
      <path d="M2 21h8" />
      <path d="M20 16v-2a2 2 0 00-4 0v2" />
      <path d="M9 12h.01" />
      <rect x="14" y="16" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="door-closed-package" viewBox="0 0 24 24">
      <path d="M18 13v3" />
      <path d="M19 9V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
      <path d="M2 21h8" />
      <path d="M9 12h.01" />
      <rect x="14" y="13" width="8" height="8" rx="1" />
    </symbol>
    <symbol id="door-closed" viewBox="0 0 24 24">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
      <path d="M2 21h20" />
      <path d="M9 12h.01" />
    </symbol>
    <symbol id="door-open" viewBox="0 0 24 24">
      <path d="M10 21H2" />
      <path d="M10 3H7a2 2 0 00-2 2v16" />
      <path d="M14 12h.01" />
      <path d="M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z" />
      <path d="M22 21h-3" />
    </symbol>
    <symbol id="door-stairwell" viewBox="0 0 24 24">
      <path d="M12 17v-3a1 1 0 011-1h6" />
      <path d="M19 17h-9a1 1 0 00-1 1v3" />
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
      <path d="M19 9h-3a1 1 0 00-1 1v3" />
      <path d="M22 21H2" />
    </symbol>
    <symbol id="dot" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="download" viewBox="0 0 24 24">
      <path d="M12 15V3" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
    </symbol>
    <symbol id="drafting-compass" viewBox="0 0 24 24">
      <path d="m12.99 6.74 1.93 3.44" />
      <path d="M19.136 12a10 10 0 0 1-14.271 0" />
      <path d="m21 21-2.16-3.84" />
      <path d="m3 21 8.02-14.26" />
      <circle cx="12" cy="5" r="2" />
    </symbol>
    <symbol id="drama" viewBox="0 0 24 24">
      <path d="M10 11h.01" />
      <path d="M14 6h.01" />
      <path d="M18 6h.01" />
      <path d="M6.5 13.1h.01" />
      <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
      <path d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
      <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
      <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
    </symbol>
    <symbol id="drill" viewBox="0 0 24 24">
      <path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" />
      <path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" />
      <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
      <path d="M18 6h4" />
      <path d="m5 10-2 8" />
      <path d="m7 18 2-8" />
    </symbol>
    <symbol id="drone" viewBox="0 0 24 24">
      <path d="M10 10 7 7" />
      <path d="m10 14-3 3" />
      <path d="m14 10 3-3" />
      <path d="m14 14 3 3" />
      <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
      <path d="M19.637 14a4 4 0 1 1-5.432 5.868" />
      <path d="M4.367 10a4 4 0 1 1 5.438-5.862" />
      <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
      <rect x="10" y="8" width="4" height="8" rx="1" />
    </symbol>
    <symbol id="droplet-off" viewBox="0 0 24 24">
      <path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" />
      <path d="m2 2 20 20" />
      <path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />
    </symbol>
    <symbol id="droplet" viewBox="0 0 24 24">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </symbol>
    <symbol id="droplets" viewBox="0 0 24 24">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </symbol>
    <symbol id="drum" viewBox="0 0 24 24">
      <path d="m2 2 8 8" />
      <path d="m22 2-8 8" />
      <ellipse cx="12" cy="9" rx="10" ry="5" />
      <path d="M7 13.4v7.9" />
      <path d="M12 14v8" />
      <path d="M17 13.4v7.9" />
      <path d="M2 9v8a10 5 0 0 0 20 0V9" />
    </symbol>
    <symbol id="drumstick" viewBox="0 0 24 24">
      <path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" />
      <path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" />
    </symbol>
    <symbol id="dumbbell" viewBox="0 0 24 24">
      <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
      <path d="m2.5 21.5 1.4-1.4" />
      <path d="m20.1 3.9 1.4-1.4" />
      <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
      <path d="m9.6 14.4 4.8-4.8" />
    </symbol>
    <symbol id="ear-off" viewBox="0 0 24 24">
      <path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" />
      <path d="M6 8.5c0-.75.13-1.47.36-2.14" />
      <path d="M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" />
      <path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="ear" viewBox="0 0 24 24">
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </symbol>
    <symbol id="earbuds-off" viewBox="0 0 24 24">
      <path d="M10 10v9a2 2 0 01-4 0v-8a5 5 0 01-3.75-1.693A1 1 0 012 8.646V5.354a1 1 0 01.25-.661 5 5 0 011.359-1.084" />
      <path d="M14 14v5a2 2 90 004 0v-1" />
      <path d="M18 12.343V11a5 5 90 003.75-1.693 1 1 90 00.25-.661V5.354a1 1 90 00-.25-.661A5 5 90 0018 3a4 4 90 00-4 4v1.343" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="earbuds" viewBox="0 0 24 24">
      <path d="M18 3a4 4 90 00-4 4v12a2 2 90 004 0v-8a5 5 90 003.75-1.693 1 1 90 00.25-.661V5.354a1 1 90 00-.25-.661A5 5 90 0018 3" />
      <path d="M6 3a4 4 0 014 4v12a2 2 0 01-4 0v-8a5 5 0 01-3.75-1.693A1 1 0 012 8.646V5.354a1 1 0 01.25-.661A5 5 0 016 3" />
    </symbol>
    <symbol id="earth-lock" viewBox="0 0 24 24">
      <path d="M7 3.34V5a3 3 0 0 0 3 3" />
      <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
      <path d="M12 2a10 10 0 1 0 9.54 13" />
      <path d="M20 6V4a2 2 0 1 0-4 0v2" />
      <rect width="8" height="5" x="14" y="6" rx="1" />
    </symbol>
    <symbol id="earth" viewBox="0 0 24 24">
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
      <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
      <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="eclipse" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </symbol>
    <symbol id="egg-fried" viewBox="0 0 24 24">
      <circle cx="11.5" cy="12.5" r="3.5" />
      <path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
    </symbol>
    <symbol id="egg-off" viewBox="0 0 24 24">
      <path d="m2 2 20 20" />
      <path d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" />
      <path d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" />
    </symbol>
    <symbol id="egg" viewBox="0 0 24 24">
      <path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" />
    </symbol>
    <symbol id="eighth-note" viewBox="0 0 24 24">
      <path d="m19 6-5.2-3.9a.5.5 0 0 0-.8.4V18" />
      <circle cx="9" cy="18" r="4" />
    </symbol>
    <symbol id="eighth-notes" viewBox="0 0 24 24">
      <path d="M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19" />
      <circle cx="18" cy="16" r="3" />
      <circle cx="6" cy="19" r="3" />
    </symbol>
    <symbol id="eject" viewBox="0 0 24 24">
      <path d="M4 13a1 1 0 0 1-.72-1.695l7.257-7.668a2 2 0 0 1 2.926 0l7.256 7.668A1 1 0 0 1 20 13z" />
      <rect x="3" y="17" width="18" height="4" rx="1" />
    </symbol>
    <symbol id="ellipse" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="10" ry="6" />
    </symbol>
    <symbol id="ellipsis-vertical" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </symbol>
    <symbol id="ellipsis" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </symbol>
    <symbol id="emirati-dirham" viewBox="0 0 24 24">
      <path d="M11 4a8 8 0 0 1 0 16H6.406A.4.4 0 0 1 6 19.594V4.406A.4.4 0 0 1 6.406 4z" />
      <path d="M4 10h17" />
      <path d="M4 14h17" />
    </symbol>
    <symbol id="engine" viewBox="0 0 24 24">
      <path d="M10 3h6" />
      <path d="M13 3v4" />
      <path d="M2 10v6" />
      <path d="M2 13h4" />
      <path d="M6 16a2 2 0 002 2h1a2 2 0 011.6.8l.3.4a2 2 0 001.6.8h2.264a2 2 0 001.789-1.106l1.67-3.341a1 1 0 01.895-.553H21a1 1 0 001-1v-4a1 1 0 00-1-1h-3.5a1 1 0 01-.8-.4l-.9-1.2A1 1 0 0015 7h-4a1 1 0 00-.8.4l-.9 1.2a1 1 0 01-.8.4H7a1 1 0 00-1 1z" />
    </symbol>
    <symbol id="equal-approximately-not" viewBox="0 0 24 24">
      <path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
      <path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
      <line x1="19" x2="5" y1="5" y2="19" />
    </symbol>
    <symbol id="equal-approximately" viewBox="0 0 24 24">
      <path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
      <path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
    </symbol>
    <symbol id="equal-not" viewBox="0 0 24 24">
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
      <line x1="19" x2="5" y1="5" y2="19" />
    </symbol>
    <symbol id="equal" viewBox="0 0 24 24">
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </symbol>
    <symbol id="eraser" viewBox="0 0 24 24">
      <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" />
      <path d="m5.082 11.09 8.828 8.828" />
    </symbol>
    <symbol id="ethernet-port" viewBox="0 0 24 24">
      <path d="M10 8v1" />
      <path d="M14 8v1" />
      <path d="M18 8v1" />
      <path d="M19 17a2 2 0 00-1.765 1.059l-.47.882A2 2 0 0115 20H9a2 2 0 01-1.765-1.059l-.47-.882A2 2 0 005 17H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2z" />
      <path d="M6 8v1" />
    </symbol>
    <symbol id="euro" viewBox="0 0 24 24">
      <path d="M4 10h12" />
      <path d="M4 14h9" />
      <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
    </symbol>
    <symbol id="ev-charger" viewBox="0 0 24 24">
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" />
      <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" />
      <path d="M2 21h13" />
      <path d="M3 7h11" />
      <path d="m9 11-2 3h3l-2 3" />
    </symbol>
    <symbol id="exclamation-mark" viewBox="0 0 24 24">
      <path d="M12 15V4" />
      <path d="M12 20h.01" />
    </symbol>
    <symbol id="expand" viewBox="0 0 24 24">
      <path d="m15 15 6 6" />
      <path d="m15 9 6-6" />
      <path d="M21 16v5h-5" />
      <path d="M21 8V3h-5" />
      <path d="M3 16v5h5" />
      <path d="m3 21 6-6" />
      <path d="M3 8V3h5" />
      <path d="M9 9 3 3" />
    </symbol>
    <symbol id="external-link" viewBox="0 0 24 24">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </symbol>
    <symbol id="eye-closed" viewBox="0 0 24 24">
      <path d="m15 18-.722-3.25" />
      <path d="M2 8a10.645 10.645 0 0 0 20 0" />
      <path d="m20 15-1.726-2.05" />
      <path d="m4 15 1.726-2.05" />
      <path d="m9 18 .722-3.25" />
    </symbol>
    <symbol id="eye-dashed" viewBox="0 0 24 24">
      <path d="M13.054 18.946a11 11 0 0 1-2.11 0" />
      <path d="M13.054 5.054a11 11 0 0 0-2.11-.001" />
      <path d="M17.072 6.274a11 11 0 0 1 1.753 1.173" />
      <path d="M18.825 16.552a11 11 0 0 1-1.753 1.174" />
      <path d="M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955" />
      <path d="M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954" />
      <path d="M5.173 7.448a11 11 0 0 1 1.753-1.174" />
      <path d="M6.926 17.726a11 11 0 0 1-1.753-1.174" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="eye-off" viewBox="0 0 24 24">
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="eye" viewBox="0 0 24 24">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="face-angry" viewBox="0 0 24 24">
      <path d="M15 12v-1.584" />
      <path d="M17 10a5 5 0 00-3 1" />
      <path d="M7 10a5 5 0 013 1" />
      <path d="M9 12v-1.584" />
      <path d="M9 17a5 5 0 016.001 0" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-expressionless" viewBox="0 0 24 24">
      <path d="M14 10h2" />
      <path d="M8 10h2" />
      <path d="M8 16h8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-grinning" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302" />
      <path d="M9 10V9" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-neutral" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M8 16h8" />
      <path d="M9 10V9" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-slightly-frowning" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M9 10V9" />
      <path d="M9 16a5 5 0 016 0" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-slightly-smiling-plus" viewBox="0 0 24 24">
      <path d="M13.267 2.08a10 10 0 108.653 8.653" />
      <path d="M15 10V9" />
      <path d="M16 5h6" />
      <path d="M16.472 15a6 6 0 01-8.943 0" />
      <path d="M19 2v6" />
      <path d="M9 10V9" />
    </symbol>
    <symbol id="face-slightly-smiling" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M16.472 15a6 6 0 01-8.943 0" />
      <path d="M9 10V9" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="factory" viewBox="0 0 24 24">
      <path d="M12 16h.01" />
      <path d="M16 16h.01" />
      <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
      <path d="M8 16h.01" />
    </symbol>
    <symbol id="fan" viewBox="0 0 24 24">
      <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
      <path d="M12 12v.01" />
    </symbol>
    <symbol id="fast-forward" viewBox="0 0 24 24">
      <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
      <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />
    </symbol>
    <symbol id="faucet" viewBox="0 0 24 24">
      <path d="M10.083 5.428 5.57 4.083a2 2 0 10.001 3.834l4.512-1.345" />
      <path d="M12 8v3" />
      <path d="m13.917 5.428 4.511-1.345a2 2 0 110 3.834l-4.51-1.345" />
      <path d="M18 17v-4.006" />
      <path d="M22 11v8" />
      <path d="M22 12h-3a1 1 0 00-1 .994h-2.539a4 4 0 00-6.915-.012L7 13a5 5 0 00-5 5v1a1 1 0 001 1h2a1 1 0 001-1v-1a1 1 0 01.995-1l1.552.018a4 4 0 006.907 0L18 17a1 1 0 001 1h3" />
      <circle cx="12" cy="6" r="2" />
    </symbol>
    <symbol id="feather" viewBox="0 0 24 24">
      <path d="M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z" />
      <path d="M16 8 2 22" />
      <path d="M17.488 15H9" />
    </symbol>
    <symbol id="fence" viewBox="0 0 24 24">
      <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      <path d="M6 8h4" />
      <path d="M6 18h4" />
      <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      <path d="M14 8h4" />
      <path d="M14 18h4" />
      <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
    </symbol>
    <symbol id="ferris-wheel" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4" />
      <path d="m6.8 15-3.5 2" />
      <path d="m20.7 7-3.5 2" />
      <path d="M6.8 9 3.3 7" />
      <path d="m20.7 17-3.5-2" />
      <path d="m9 22 3-8 3 8" />
      <path d="M8 22h8" />
      <path d="M18 18.7a9 9 0 1 0-12 0" />
    </symbol>
    <symbol id="file-archive" viewBox="0 0 24 24">
      <path d="M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 12v-1" />
      <path d="M8 18v-2" />
      <path d="M8 7V6" />
      <circle cx="8" cy="20" r="2" />
    </symbol>
    <symbol id="file-axis-3d" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m8 18 4-4" />
      <path d="M8 10v8h8" />
    </symbol>
    <symbol id="file-badge" viewBox="0 0 24 24">
      <path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" />
      <circle cx="6" cy="14" r="3" />
    </symbol>
    <symbol id="file-box" viewBox="0 0 24 24">
      <path d="M14 2v5a1 1 0 001 1h5" />
      <path d="M14.692 22H18a2 2 0 002-2V8a2.4 2.4 0 00-.706-1.706l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v3.804" />
      <path d="M2.264 13.752 7 16.5l4.737-2.748" />
      <path d="M2.995 13.014A2 2 0 002 14.744v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0012 18.26v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z" />
      <path d="M7 16.5V22" />
    </symbol>
    <symbol id="file-braces-corner" viewBox="0 0 24 24">
      <path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" />
      <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" />
    </symbol>
    <symbol id="file-braces" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
      <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
    </symbol>
    <symbol id="file-chart-column-increasing" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 18v-2" />
      <path d="M12 18v-4" />
      <path d="M16 18v-6" />
    </symbol>
    <symbol id="file-chart-column" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 18v-1" />
      <path d="M12 18v-6" />
      <path d="M16 18v-3" />
    </symbol>
    <symbol id="file-chart-line" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m16 13-3.5 3.5-2-2L8 17" />
    </symbol>
    <symbol id="file-chart-pie" viewBox="0 0 24 24">
      <path d="M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M4.017 11.512a6 6 0 1 0 8.466 8.475" />
      <path d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" />
    </symbol>
    <symbol id="file-check-corner" viewBox="0 0 24 24">
      <path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m14 20 2 2 4-4" />
    </symbol>
    <symbol id="file-check" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m9 15 2 2 4-4" />
    </symbol>
    <symbol id="file-clock" viewBox="0 0 24 24">
      <path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 14v2.2l1.6 1" />
      <circle cx="8" cy="16" r="6" />
    </symbol>
    <symbol id="file-code-corner" viewBox="0 0 24 24">
      <path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m5 16-3 3 3 3" />
      <path d="m9 22 3-3-3-3" />
    </symbol>
    <symbol id="file-code" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 12.5 8 15l2 2.5" />
      <path d="m14 12.5 2 2.5-2 2.5" />
    </symbol>
    <symbol id="file-cog" viewBox="0 0 24 24">
      <path d="M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z" />
      <path d="M20 8v12a2 2 0 0 1-2 2h-4.182" />
      <path d="m3.305 19.53.923-.382" />
      <path d="M4 10.592V4a2 2 0 0 1 2-2h8" />
      <path d="m4.228 16.852-.924-.383" />
      <path d="m5.852 15.228-.383-.923" />
      <path d="m5.852 20.772-.383.924" />
      <path d="m8.148 15.228.383-.923" />
      <path d="m8.53 21.696-.382-.924" />
      <path d="m9.773 16.852.922-.383" />
      <path d="m9.773 19.148.922.383" />
      <circle cx="7" cy="18" r="3" />
    </symbol>
    <symbol id="file-database" viewBox="0 0 24 24">
      <path d="M12 12v8a5 2 0 01-10 0v-8" />
      <path d="M12 16a5 2 0 01-10 0" />
      <path d="M14 2v5a1 1 0 001 1h5" />
      <path d="M4 6.3V4a2 2 0 012-2h8a2.4 2.4 0 011.706.706l3.588 3.588A2.4 2.4 0 0120 8v12a2 2 0 01-2 2h-2.43" />
      <ellipse cx="7" cy="12" rx="5" ry="2" />
    </symbol>
    <symbol id="file-diff" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M9 10h6" />
      <path d="M12 13V7" />
      <path d="M9 17h6" />
    </symbol>
    <symbol id="file-digit" viewBox="0 0 24 24">
      <path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 16h2v6" />
      <path d="M10 22h4" />
      <rect x="2" y="16" width="4" height="6" rx="2" />
    </symbol>
    <symbol id="file-down" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </symbol>
    <symbol id="file-exclamation-point" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="file-headphone" viewBox="0 0 24 24">
      <path d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" />
    </symbol>
    <symbol id="file-heart" viewBox="0 0 24 24">
      <path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z" />
    </symbol>
    <symbol id="file-image" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <circle cx="10" cy="12" r="2" />
      <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
    </symbol>
    <symbol id="file-input" viewBox="0 0 24 24">
      <path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M2 15h10" />
      <path d="m9 18 3-3-3-3" />
    </symbol>
    <symbol id="file-key" viewBox="0 0 24 24">
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M4 12v6" />
      <path d="M4 14h2" />
      <path d="M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4" />
      <circle cx="4" cy="20" r="2" />
    </symbol>
    <symbol id="file-lock" viewBox="0 0 24 24">
      <path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M9 17v-2a2 2 0 0 0-4 0v2" />
      <rect width="8" height="5" x="3" y="17" rx="1" />
    </symbol>
    <symbol id="file-minus-corner" viewBox="0 0 24 24">
      <path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M14 18h6" />
    </symbol>
    <symbol id="file-minus" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M9 15h6" />
    </symbol>
    <symbol id="file-music" viewBox="0 0 24 24">
      <path d="M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 20v-7l3 1.474" />
      <circle cx="6" cy="20" r="2" />
    </symbol>
    <symbol id="file-output" viewBox="0 0 24 24">
      <path d="M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m5 11-3 3" />
      <path d="m5 17-3-3h10" />
    </symbol>
    <symbol id="file-pen-line" viewBox="0 0 24 24">
      <path d="M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z" />
      <path d="M14.487 7.858A1 1 0 0 1 14 7V2" />
      <path d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516" />
      <path d="M8 18h1" />
    </symbol>
    <symbol id="file-pen" viewBox="0 0 24 24">
      <path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z" />
    </symbol>
    <symbol id="file-play" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" />
    </symbol>
    <symbol id="file-plus-corner" viewBox="0 0 24 24">
      <path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M14 19h6" />
      <path d="M17 16v6" />
    </symbol>
    <symbol id="file-plus" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M9 15h6" />
      <path d="M12 18v-6" />
    </symbol>
    <symbol id="file-question-mark" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="file-scan" viewBox="0 0 24 24">
      <path d="M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M16 14a2 2 0 0 0-2 2" />
      <path d="M16 22a2 2 0 0 1-2-2" />
      <path d="M20 14a2 2 0 0 1 2 2" />
      <path d="M20 22a2 2 0 0 0 2-2" />
    </symbol>
    <symbol id="file-search-corner" viewBox="0 0 24 24">
      <path d="M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m21 22-2.88-2.88" />
      <circle cx="16" cy="17" r="3" />
    </symbol>
    <symbol id="file-search" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <circle cx="11.5" cy="14.5" r="2.5" />
      <path d="M13.3 16.3 15 18" />
    </symbol>
    <symbol id="file-signal" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 15h.01" />
      <path d="M11.5 13.5a2.5 2.5 0 0 1 0 3" />
      <path d="M15 12a5 5 0 0 1 0 6" />
    </symbol>
    <symbol id="file-sliders" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 12h8" />
      <path d="M10 11v2" />
      <path d="M8 17h8" />
      <path d="M14 16v2" />
    </symbol>
    <symbol id="file-spreadsheet" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </symbol>
    <symbol id="file-stack" viewBox="0 0 24 24">
      <path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" />
      <path d="M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" />
      <path d="M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" />
    </symbol>
    <symbol id="file-symlink" viewBox="0 0 24 24">
      <path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m10 18 3-3-3-3" />
    </symbol>
    <symbol id="file-terminal" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m8 16 2-2-2-2" />
      <path d="M12 18h4" />
    </symbol>
    <symbol id="file-text" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </symbol>
    <symbol id="file-type-corner" viewBox="0 0 24 24">
      <path d="M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16" />
      <path d="M6 22h2" />
      <path d="M7 14v8" />
    </symbol>
    <symbol id="file-type" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M11 18h2" />
      <path d="M12 12v6" />
      <path d="M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5" />
    </symbol>
    <symbol id="file-up" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M12 12v6" />
      <path d="m15 15-3-3-3 3" />
    </symbol>
    <symbol id="file-user" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M16 22a4 4 0 0 0-8 0" />
      <circle cx="12" cy="15" r="3" />
    </symbol>
    <symbol id="file-video-camera" viewBox="0 0 24 24">
      <path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157" />
      <rect width="7" height="6" x="3" y="16" rx="1" />
    </symbol>
    <symbol id="file-volume" viewBox="0 0 24 24">
      <path d="M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M12 15a5 5 0 0 1 0 6" />
      <path d="M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z" />
    </symbol>
    <symbol id="file-x-corner" viewBox="0 0 24 24">
      <path d="M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m15 17 5 5" />
      <path d="m20 17-5 5" />
    </symbol>
    <symbol id="file-x" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m14.5 12.5-5 5" />
      <path d="m9.5 12.5 5 5" />
    </symbol>
    <symbol id="file" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    </symbol>
    <symbol id="files" viewBox="0 0 24 24">
      <path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
      <path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" />
      <path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" />
    </symbol>
    <symbol id="film" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </symbol>
    <symbol id="fingerprint-pattern" viewBox="0 0 24 24">
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </symbol>
    <symbol id="fire-extinguisher" viewBox="0 0 24 24">
      <path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
      <path d="M9 18h8" />
      <path d="M18 3h-3" />
      <path d="M11 3a6 6 0 0 0-6 6v11" />
      <path d="M5 13h4" />
      <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
    </symbol>
    <symbol id="fish-off" viewBox="0 0 24 24">
      <path d="M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20" />
    </symbol>
    <symbol id="fish-symbol" viewBox="0 0 24 24">
      <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
    </symbol>
    <symbol id="fish" viewBox="0 0 24 24">
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </symbol>
    <symbol id="fishing-hook" viewBox="0 0 24 24">
      <path d="m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" />
      <path d="M20.414 8.586 22 7" />
      <circle cx="19" cy="10" r="2" />
    </symbol>
    <symbol id="fishing-rod" viewBox="0 0 24 24">
      <path d="M4 11h1" />
      <path d="M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" />
      <circle cx="18" cy="18" r="2" />
    </symbol>
    <symbol id="flag-off" viewBox="0 0 24 24">
      <path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
      <path d="m2 2 20 20" />
      <path d="M4 22V4" />
      <path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" />
    </symbol>
    <symbol id="flag-triangle-left" viewBox="0 0 24 24">
      <path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" />
    </symbol>
    <symbol id="flag-triangle-right" viewBox="0 0 24 24">
      <path d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" />
    </symbol>
    <symbol id="flag" viewBox="0 0 24 24">
      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
    </symbol>
    <symbol id="flame-kindling" viewBox="0 0 24 24">
      <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" />
      <path d="m5 22 14-4" />
      <path d="m5 18 14 4" />
    </symbol>
    <symbol id="flame" viewBox="0 0 24 24">
      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
    </symbol>
    <symbol id="flashlight-off" viewBox="0 0 24 24">
      <path d="M11.652 6H18" />
      <path d="M12 13v1" />
      <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6" />
      <path d="m2 2 20 20" />
      <path d="M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007" />
    </symbol>
    <symbol id="flashlight" viewBox="0 0 24 24">
      <path d="M12 13v1" />
      <path d="M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z" />
      <path d="M6 6h12" />
    </symbol>
    <symbol id="flask-conical-off" viewBox="0 0 24 24">
      <path d="M10 2v2.343" />
      <path d="M14 2v6.343" />
      <path d="m2 2 20 20" />
      <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" />
      <path d="M6.453 15H15" />
      <path d="M8.5 2h7" />
    </symbol>
    <symbol id="flask-conical" viewBox="0 0 24 24">
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
      <path d="M6.453 15h11.094" />
      <path d="M8.5 2h7" />
    </symbol>
    <symbol id="flask-round" viewBox="0 0 24 24">
      <path d="M10 2v6.292a7 7 0 1 0 4 0V2" />
      <path d="M5 15h14" />
      <path d="M8.5 2h7" />
    </symbol>
    <symbol id="flower-2" viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
      <circle cx="12" cy="8" r="2" />
      <path d="M12 10v12" />
      <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
      <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
    </symbol>
    <symbol id="flower" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </symbol>
    <symbol id="focus" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </symbol>
    <symbol id="fold-horizontal" viewBox="0 0 24 24">
      <path d="M2 12h6" />
      <path d="M22 12h-6" />
      <path d="M12 2v2" />
      <path d="M12 8v2" />
      <path d="M12 14v2" />
      <path d="M12 20v2" />
      <path d="m19 9-3 3 3 3" />
      <path d="m5 15 3-3-3-3" />
    </symbol>
    <symbol id="fold-vertical" viewBox="0 0 24 24">
      <path d="M12 22v-6" />
      <path d="M12 8V2" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
      <path d="m15 19-3-3-3 3" />
      <path d="m15 5-3 3-3-3" />
    </symbol>
    <symbol id="folder-archive" viewBox="0 0 24 24">
      <circle cx="15" cy="19" r="2" />
      <path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" />
      <path d="M15 11v-1" />
      <path d="M15 17v-2" />
    </symbol>
    <symbol id="folder-bookmark" viewBox="0 0 24 24">
      <path d="M12 6v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834a.25.25 0 00.406-.195V6" />
      <path d="M20 20a2 2 0 002-2V8a2 2 0 00-2-2h-7.9a2 2 0 01-1.69-.9L9.6 3.9A2 2 0 007.93 3H4a2 2 0 00-2 2v13a2 2 0 002 2z" />
    </symbol>
    <symbol id="folder-check" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="m9 13 2 2 4-4" />
    </symbol>
    <symbol id="folder-clock" viewBox="0 0 24 24">
      <path d="M16 14v2.2l1.6 1" />
      <path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" />
      <circle cx="16" cy="16" r="6" />
    </symbol>
    <symbol id="folder-closed" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M2 10h20" />
    </symbol>
    <symbol id="folder-code" viewBox="0 0 24 24">
      <path d="M10 10.5 8 13l2 2.5" />
      <path d="m14 10.5 2 2.5-2 2.5" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
    </symbol>
    <symbol id="folder-cog" viewBox="0 0 24 24">
      <path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3" />
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="folder-dot" viewBox="0 0 24 24">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <circle cx="12" cy="13" r="1" />
    </symbol>
    <symbol id="folder-down" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M12 10v6" />
      <path d="m15 13-3 3-3-3" />
    </symbol>
    <symbol id="folder-git-2" viewBox="0 0 24 24">
      <path d="M18 19a5 5 0 0 1-5-5v8" />
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
      <circle cx="13" cy="12" r="2" />
      <circle cx="20" cy="19" r="2" />
    </symbol>
    <symbol id="folder-git" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="2" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M14 13h3" />
      <path d="M7 13h3" />
    </symbol>
    <symbol id="folder-heart" viewBox="0 0 24 24">
      <path d="M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417" />
      <path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
    </symbol>
    <symbol id="folder-input" viewBox="0 0 24 24">
      <path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
      <path d="M2 13h10" />
      <path d="m9 16 3-3-3-3" />
    </symbol>
    <symbol id="folder-kanban" viewBox="0 0 24 24">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <path d="M8 10v4" />
      <path d="M12 10v2" />
      <path d="M16 10v6" />
    </symbol>
    <symbol id="folder-key" viewBox="0 0 24 24">
      <path d="M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36" />
      <path d="M19 12v6" />
      <path d="M19 14h2" />
      <circle cx="19" cy="20" r="2" />
    </symbol>
    <symbol id="folder-lock" viewBox="0 0 24 24">
      <rect width="8" height="5" x="14" y="17" rx="1" />
      <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" />
      <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
    </symbol>
    <symbol id="folder-minus" viewBox="0 0 24 24">
      <path d="M9 13h6" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </symbol>
    <symbol id="folder-open-dot" viewBox="0 0 24 24">
      <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
      <circle cx="14" cy="15" r="1" />
    </symbol>
    <symbol id="folder-open" viewBox="0 0 24 24">
      <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="folder-output" viewBox="0 0 24 24">
      <path d="M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5" />
      <path d="M2 13h10" />
      <path d="m5 10-3 3 3 3" />
    </symbol>
    <symbol id="folder-pen" viewBox="0 0 24 24">
      <path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" />
      <path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    </symbol>
    <symbol id="folder-plus" viewBox="0 0 24 24">
      <path d="M12 10v6" />
      <path d="M9 13h6" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </symbol>
    <symbol id="folder-root" viewBox="0 0 24 24">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <circle cx="12" cy="13" r="2" />
      <path d="M12 15v5" />
    </symbol>
    <symbol id="folder-search-2" viewBox="0 0 24 24">
      <circle cx="11.5" cy="12.5" r="2.5" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M13.3 14.3 15 16" />
    </symbol>
    <symbol id="folder-search" viewBox="0 0 24 24">
      <path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" />
      <path d="m21 21-1.9-1.9" />
      <circle cx="17" cy="17" r="3" />
    </symbol>
    <symbol id="folder-symlink" viewBox="0 0 24 24">
      <path d="M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" />
      <path d="m8 16 3-3-3-3" />
    </symbol>
    <symbol id="folder-sync" viewBox="0 0 24 24">
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" />
      <path d="M12 10v4h4" />
      <path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
      <path d="M22 22v-4h-4" />
      <path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
    </symbol>
    <symbol id="folder-tree" viewBox="0 0 24 24">
      <path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
      <path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
      <path d="M3 5a2 2 0 0 0 2 2h3" />
      <path d="M3 3v13a2 2 0 0 0 2 2h3" />
    </symbol>
    <symbol id="folder-up" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M12 10v6" />
      <path d="m9 13 3-3 3 3" />
    </symbol>
    <symbol id="folder-user" viewBox="0 0 24 24">
      <path d="M10.254 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2V9.255" />
      <path d="M22 22a4 4 0 0 0-8 0" />
      <circle cx="18" cy="15" r="3" />
    </symbol>
    <symbol id="folder-users" viewBox="0 0 24 24">
      <path d="M5.254 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2V9.255" />
      <circle cx="13" cy="15" r="3" />
      <path d="M17 22a4 4 0 0 0-8 0" />
      <path d="M22 22A4 4 0 0 0 20.24 18.686 1 1 0 0 1 20.1 17.143 3 3 0 0 0 19.5 12.402" />
    </symbol>
    <symbol id="folder-x" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="m9.5 10.5 5 5" />
      <path d="m14.5 10.5-5 5" />
    </symbol>
    <symbol id="folder" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </symbol>
    <symbol id="folders" viewBox="0 0 24 24">
      <path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" />
      <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" />
    </symbol>
    <symbol id="footprints" viewBox="0 0 24 24">
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </symbol>
    <symbol id="forklift" viewBox="0 0 24 24">
      <path d="M12 12H5a2 2 0 0 0-2 2v5" />
      <path d="M15 19h7" />
      <path d="M16 19V2" />
      <path d="M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" />
      <path d="M7 19h4" />
      <circle cx="13" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
    </symbol>
    <symbol id="form" viewBox="0 0 24 24">
      <path d="M4 14h6" />
      <path d="M4 2h10" />
      <rect x="4" y="18" width="16" height="4" rx="1" />
      <rect x="4" y="6" width="16" height="4" rx="1" />
    </symbol>
    <symbol id="forward" viewBox="0 0 24 24">
      <path d="m15 17 5-5-5-5" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </symbol>
    <symbol id="frame" viewBox="0 0 24 24">
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </symbol>
    <symbol id="fuel" viewBox="0 0 24 24">
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" />
      <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" />
      <path d="M2 21h13" />
      <path d="M3 9h11" />
    </symbol>
    <symbol id="fullscreen" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect width="10" height="8" x="7" y="8" rx="1" />
    </symbol>
    <symbol id="funnel-plus" viewBox="0 0 24 24">
      <path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" />
      <path d="M16 6h6" />
      <path d="M19 3v6" />
    </symbol>
    <symbol id="funnel-x" viewBox="0 0 24 24">
      <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" />
      <path d="m16.5 3.5 5 5" />
      <path d="m21.5 3.5-5 5" />
    </symbol>
    <symbol id="funnel" viewBox="0 0 24 24">
      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
    </symbol>
    <symbol id="galaxy" viewBox="0 0 24 24">
      <path d="M16.005 15.108a5.041 6.52 28.25 00-8.008-6.217 5.041 6.52 28.25 008.008 6.217A11.884 7.288-60.76 014.029 7.001" />
      <path d="M17 21h.01" />
      <path d="M7 3h.01" />
      <path d="M7.997 8.891a11.885 7.288-60.756 0111.977 8.107" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </symbol>
    <symbol id="gallery-horizontal-end" viewBox="0 0 24 24">
      <path d="M2 7v10" />
      <path d="M6 5v14" />
      <rect width="12" height="18" x="10" y="3" rx="2" />
    </symbol>
    <symbol id="gallery-horizontal" viewBox="0 0 24 24">
      <path d="M2 3v18" />
      <rect width="12" height="18" x="6" y="3" rx="2" />
      <path d="M22 3v18" />
    </symbol>
    <symbol id="gallery-thumbnails" viewBox="0 0 24 24">
      <rect width="18" height="14" x="3" y="3" rx="2" />
      <path d="M4 21h1" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
      <path d="M19 21h1" />
    </symbol>
    <symbol id="gallery-vertical-end" viewBox="0 0 24 24">
      <path d="M7 2h10" />
      <path d="M5 6h14" />
      <rect width="18" height="12" x="3" y="10" rx="2" />
    </symbol>
    <symbol id="gallery-vertical" viewBox="0 0 24 24">
      <path d="M3 2h18" />
      <rect width="18" height="12" x="3" y="6" rx="2" />
      <path d="M3 22h18" />
    </symbol>
    <symbol id="gamepad-2" viewBox="0 0 24 24">
      <line x1="6" x2="10" y1="11" y2="11" />
      <line x1="8" x2="8" y1="9" y2="13" />
      <line x1="15" x2="15.01" y1="12" y2="12" />
      <line x1="18" x2="18.01" y1="10" y2="10" />
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
    </symbol>
    <symbol id="gamepad-directional" viewBox="0 0 24 24">
      <path d="M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z" />
      <path d="M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" />
      <path d="M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z" />
      <path d="M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z" />
    </symbol>
    <symbol id="gamepad" viewBox="0 0 24 24">
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="gap-horizontal" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="M12 8v2" />
      <path d="M12 14v2" />
      <path d="M12 20v2" />
      <path d="M21 3h-3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" />
      <path d="M3 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3" />
    </symbol>
    <symbol id="gap-vertical" viewBox="0 0 24 24">
      <path d="M2 12h2" />
      <path d="M8 12h2" />
      <path d="M14 12h2" />
      <path d="M20 12h2" />
      <path d="M3 21v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
      <path d="M3 3v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3" />
    </symbol>
    <symbol id="gauge" viewBox="0 0 24 24">
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </symbol>
    <symbol id="gavel" viewBox="0 0 24 24">
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" />
      <path d="m16 16 6-6" />
      <path d="m21.5 10.5-8-8" />
      <path d="m8 8 6-6" />
      <path d="m8.5 7.5 8 8" />
    </symbol>
    <symbol id="gem" viewBox="0 0 24 24">
      <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
      <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
      <path d="M2 9h20" />
    </symbol>
    <symbol id="georgian-lari" viewBox="0 0 24 24">
      <path d="M10 10V3" />
      <path d="M14 10V3" />
      <path d="M19 13a7 7 0 10-7 7" />
      <path d="M5 20h14" />
    </symbol>
    <symbol id="germ-off" viewBox="0 0 24 24">
      <path d="m11 2 .925 1.848" />
      <path d="M13 15h.01" />
      <path d="M13.424 7.768a2 2 0 112.808 2.808" />
      <path d="m16 21-1-2.472" />
      <path d="M16.988 16.988A12 12 0 019 20a5 5 0 01-2.759-9.171 8.8 8.8 0 002.307-2.28" />
      <path d="m19 2-1 1.804" />
      <path d="m2 19 2.746-1.373" />
      <path d="m2 2 20 20" />
      <path d="m22 16-2.474-2.13a12 12 0 001.376-3.786 6 6 0 00-10.313-5.151" />
      <path d="m22 5-1.804 1" />
      <path d="m3 10 2 2" />
      <path d="M9 16h.01" />
      <path d="M9 20v2" />
    </symbol>
    <symbol id="germ" viewBox="0 0 24 24">
      <path d="m11 2 .925 1.848" />
      <path d="M13 15h.01" />
      <path d="m16 21-1-2.472" />
      <path d="m19 2-1 1.804" />
      <path d="m2 19 2.746-1.373" />
      <path d="m22 16-2.474-2.13" />
      <path d="m22 5-1.804 1" />
      <path d="m3 10 2 2" />
      <path d="M9 16h.01" />
      <path d="M9 20v2" />
      <path d="M9.33 7.035c-.51 1.478-1.786 2.93-3.09 3.794A5 5 0 009 20a12.1 12.1 0 0011.902-9.916A6 6 0 009.33 7.035" />
      <circle cx="15" cy="9" r="2" />
    </symbol>
    <symbol id="ghost" viewBox="0 0 24 24">
      <path d="M15 10v1" />
      <path d="M7.528 20.472a1.6 1.6 0 012.277 0l1.057 1.056a1.6 1.6 0 002.276 0l1.057-1.056a1.6 1.6 0 012.277 0l1.114 1.114a1.4 1.4 0 002.414-1V10a8 8 0 00-16 0v10.586a1.4 1.4 0 002.414 1z" />
      <path d="M9 10v1" />
    </symbol>
    <symbol id="gift" viewBox="0 0 24 24">
      <path d="M12 7v14" />
      <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" />
      <rect x="3" y="7" width="18" height="4" rx="1" />
    </symbol>
    <symbol id="git-branch-minus" viewBox="0 0 24 24">
      <path d="M15 6a9 9 0 0 0-9 9V3" />
      <path d="M21 18h-6" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
    </symbol>
    <symbol id="git-branch-plus" viewBox="0 0 24 24">
      <path d="M6 3v12" />
      <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M15 6a9 9 0 0 0-9 9" />
      <path d="M18 15v6" />
      <path d="M21 18h-6" />
    </symbol>
    <symbol id="git-branch" viewBox="0 0 24 24">
      <path d="M15 6a9 9 0 0 0-9 9V3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
    </symbol>
    <symbol id="git-commit-horizontal" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <line x1="3" x2="9" y1="12" y2="12" />
      <line x1="15" x2="21" y1="12" y2="12" />
    </symbol>
    <symbol id="git-commit-vertical" viewBox="0 0 24 24">
      <path d="M12 3v6" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15v6" />
    </symbol>
    <symbol id="git-compare-arrows" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="3" />
      <path d="M12 6h5a2 2 0 0 1 2 2v7" />
      <path d="m15 9-3-3 3-3" />
      <circle cx="19" cy="18" r="3" />
      <path d="M12 18H7a2 2 0 0 1-2-2V9" />
      <path d="m9 15 3 3-3 3" />
    </symbol>
    <symbol id="git-compare" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <path d="M11 18H8a2 2 0 0 1-2-2V9" />
    </symbol>
    <symbol id="git-fork" viewBox="0 0 24 24">
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
      <path d="M12 12v3" />
    </symbol>
    <symbol id="git-graph" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </symbol>
    <symbol id="git-merge-conflict" viewBox="0 0 24 24">
      <path d="M12 6h4a2 2 0 0 1 2 2v7" />
      <path d="M6 12v9" />
      <path d="m8.5 3.5-5 5" />
      <path d="m8.5 8.5-5-5" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="git-merge" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </symbol>
    <symbol id="git-pull-request-arrow" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v12" />
      <circle cx="19" cy="18" r="3" />
      <path d="m15 9-3-3 3-3" />
      <path d="M12 6h5a2 2 0 0 1 2 2v7" />
    </symbol>
    <symbol id="git-pull-request-closed" viewBox="0 0 24 24">
      <path d="m15.5 3.5 5 5" />
      <path d="m15.5 8.5 5-5" />
      <path d="M18 11.62V15" />
      <path d="M6 9v12" />
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
    </symbol>
    <symbol id="git-pull-request-create-arrow" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v12" />
      <path d="m15 9-3-3 3-3" />
      <path d="M12 6h5a2 2 0 0 1 2 2v3" />
      <path d="M19 15v6" />
      <path d="M22 18h-6" />
    </symbol>
    <symbol id="git-pull-request-create" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <path d="M6 9v12" />
      <path d="M13 6h3a2 2 0 0 1 2 2v3" />
      <path d="M18 15v6" />
      <path d="M21 18h-6" />
    </symbol>
    <symbol id="git-pull-request-draft" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M18 6V5" />
      <path d="M18 11v-1" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </symbol>
    <symbol id="git-pull-request" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </symbol>
    <symbol id="glass-water" viewBox="0 0 24 24">
      <path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </symbol>
    <symbol id="glasses" viewBox="0 0 24 24">
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </symbol>
    <symbol id="globe-ban" viewBox="0 0 24 24">
      <path d="M12 22a14.48 14.48 0 01-4.008-10C7.993 9.136 9 5.258 11 2.05A10 10 0 0012 22" />
      <path d="m15.172 3.172 5.656 5.656" />
      <path d="M15.86 14a14.5 14.5 0 01-3.859 8 10 10 0 009.949-9" />
      <path d="M2 12h10.5" />
      <circle cx="18" cy="6" r="4" />
    </symbol>
    <symbol id="globe-check" viewBox="0 0 24 24">
      <path d="m15 6 2 2 4-4" />
      <path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" />
    </symbol>
    <symbol id="globe-code" viewBox="0 0 24 24">
      <path d="M15.5 10 13 7.5 15.5 5" />
      <path d="M15.861 14A14.5 14.5 0 0112 22a14.48 14.48 0 010-20 10 10 0 109.888 11.5" />
      <path d="M19.5 5 22 7.5 19.5 10" />
      <path d="M2 12h8.5" />
    </symbol>
    <symbol id="globe-lock" viewBox="0 0 24 24">
      <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
      <path d="M2 12h8.5" />
      <path d="M20 6V4a2 2 0 1 0-4 0v2" />
      <rect width="8" height="5" x="14" y="6" rx="1" />
    </symbol>
    <symbol id="globe-off" viewBox="0 0 24 24">
      <path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" />
      <path d="M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" />
      <path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" />
      <path d="M17.656 12H22" />
      <path d="M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" />
      <path d="M2 12h10" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="globe-plus" viewBox="0 0 24 24">
      <path d="M15.929 10.563A14.5 14.5 0 0112 22a1 1 0 010-20 15 15 0 01.68.768" />
      <path d="M19 2v6" />
      <path d="M21.92 10.734A10 10 0 0112 22a14.5 14.5 0 010-20 10 10 0 011.266.08" />
      <path d="M22 12H2" />
      <path d="M22 5h-6" />
    </symbol>
    <symbol id="globe-x" viewBox="0 0 24 24">
      <path d="m16 3 5 5" />
      <path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" />
      <path d="m21 3-5 5" />
    </symbol>
    <symbol id="globe" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </symbol>
    <symbol id="goal" viewBox="0 0 24 24">
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
      <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
    </symbol>
    <symbol id="gpu" viewBox="0 0 24 24">
      <path d="M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2" />
      <path d="M2 21V3" />
      <path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" />
      <circle cx="16" cy="11" r="2" />
      <circle cx="8" cy="11" r="2" />
    </symbol>
    <symbol id="graduation-cap" viewBox="0 0 24 24">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </symbol>
    <symbol id="grape" viewBox="0 0 24 24">
      <path d="M22 5V2l-5.89 5.89" />
      <circle cx="16.6" cy="15.89" r="3" />
      <circle cx="8.11" cy="7.4" r="3" />
      <circle cx="12.35" cy="11.65" r="3" />
      <circle cx="13.91" cy="5.85" r="3" />
      <circle cx="18.15" cy="10.09" r="3" />
      <circle cx="6.56" cy="13.2" r="3" />
      <circle cx="10.8" cy="17.44" r="3" />
      <circle cx="5" cy="19" r="3" />
    </symbol>
    <symbol id="graph-hub" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="12" cy="19" r="2" />
      <circle cx="20" cy="19" r="2" />
      <path d="M8 7a4 4 0 0 0-4 4v6" />
      <path d="M12 11v6" />
      <path d="M16 7a4 4 0 0 1 4 4v6" />
    </symbol>
    <symbol id="graph-ring" viewBox="0 0 24 24">
      <path d="M17.006 19.241a8 8 0 0 1-10.011 0" />
      <path d="M19.919 14.143a8 8 0 0 0-4.971-8.583" />
      <path d="M4.081 14.143A8 8 0 0 1 9.052 5.56" />
      <circle cx="12" cy="5.001" r="3" />
      <circle cx="19" cy="17" r="3" />
      <circle cx="5" cy="17" r="3" />
    </symbol>
    <symbol id="graph-star" viewBox="0 0 24 24">
      <path d="m12.342 9.316 1.764-3.527" />
      <path d="m12.59 14.545 2.35 3.759" />
      <path d="m13.982 12.332 4.03.447" />
      <path d="M5.414 17.586 8.88 14.12" />
      <path d="M9.025 9.742 5.317 5.505" />
      <circle cx="11" cy="12" r="3" />
      <circle cx="15" cy="4" r="2" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="20" cy="13" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="4" cy="4" r="2" />
    </symbol>
    <symbol id="grid-2x2-check" viewBox="0 0 24 24">
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
      <path d="m16 19 2 2 4-4" />
    </symbol>
    <symbol id="grid-2x2-plus" viewBox="0 0 24 24">
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
      <path d="M16 19h6" />
      <path d="M19 22v-6" />
    </symbol>
    <symbol id="grid-2x2-x" viewBox="0 0 24 24">
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
      <path d="m16.5 16.5 5 5" />
      <path d="m16.5 21.5 5-5" />
    </symbol>
    <symbol id="grid-2x2" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="grid-3x2" viewBox="0 0 24 24">
      <path d="M15 3v18" />
      <path d="M3 12h18" />
      <path d="M9 3v18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="grid-3x3-off" viewBox="0 0 24 24">
      <path d="M15 9.344V3" />
      <path d="m2 2 20 20" />
      <path d="M20.414 20.414A2 2 0 0119 21H5a2 2 0 01-2-2V5a2 2 0 01.586-1.414" />
      <path d="M20.656 15H21" />
      <path d="M21 9h-6.344" />
      <path d="M3 15h12v6" />
      <path d="M3 9h6v12" />
      <path d="M8.656 3H19a2 2 0 012 2v10.343" />
      <path d="M9 3v.344" />
    </symbol>
    <symbol id="grid-3x3" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </symbol>
    <symbol id="grip-horizontal" viewBox="0 0 24 24">
      <circle cx="12" cy="9" r="1" />
      <circle cx="19" cy="9" r="1" />
      <circle cx="5" cy="9" r="1" />
      <circle cx="12" cy="15" r="1" />
      <circle cx="19" cy="15" r="1" />
      <circle cx="5" cy="15" r="1" />
    </symbol>
    <symbol id="grip-vertical" viewBox="0 0 24 24">
      <circle cx="9" cy="12" r="1" />
      <circle cx="9" cy="5" r="1" />
      <circle cx="9" cy="19" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="15" cy="5" r="1" />
      <circle cx="15" cy="19" r="1" />
    </symbol>
    <symbol id="grip" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="1" />
      <circle cx="19" cy="5" r="1" />
      <circle cx="5" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
      <circle cx="19" cy="19" r="1" />
      <circle cx="5" cy="19" r="1" />
    </symbol>
    <symbol id="groceries" viewBox="0 0 24 24">
      <path d="M10 15h4" />
      <path d="M19.424 11.095a2.5 2.5 0 00.471-2.309 2 2 0 00.424-3.286 2 2 0 00-2.143-3.322 2 2 0 00-.676.502 2 2 0 00-3.287.424 2.5 2.5 0 00-3.189 2.06A3 3 0 0012 11l4-4" />
      <path d="M4 12.006A1 1 0 014.994 11H19a1 1 0 011 1v7a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
      <path d="M7 11a4 4 0 01-4-4V5a1 1 0 011-1h2a4 4 0 013.584 2.222" />
    </symbol>
    <symbol id="group" viewBox="0 0 24 24">
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </symbol>
    <symbol id="guitar-electric" viewBox="0 0 24 24">
      <path d="m12.172 11.828 4.242-4.242" />
      <path d="M16.414 7.586A2 2 0 0017 6.172V5a2 2 0 011.177-1.823L20.59 2.09a1 1 0 011.32 1.32l-1.088 2.412A2 2 0 0119 7h-1a2 2 0 00-1.586.586" />
      <path d="m6 16 2 2" />
      <path d="M8.23 9.85a3 3 0 011.28-1.454 1 1 0 011.496.815 4 4 0 003.783 3.783 1 1 0 01.815 1.496 3 3 0 01-1.454 1.28l-.92.38A2 2 0 0012 18a4 4 0 01-4 4 6 6 0 01-6-6 4 4 0 014-4 2 2 0 001.85-1.23z" />
    </symbol>
    <symbol id="guitar" viewBox="0 0 24 24">
      <path d="m11.9 12.1 4.514-4.514" />
      <path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" />
      <path d="m6 16 2 2" />
      <path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" />
    </symbol>
    <symbol id="half-note" viewBox="0 0 24 24">
      <circle cx="12" cy="18" r="4" />
      <path d="M16 18V2" />
    </symbol>
    <symbol id="ham" viewBox="0 0 24 24">
      <path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" />
      <path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" />
      <path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" />
      <path d="m8.5 16.5-1-1" />
    </symbol>
    <symbol id="hamburger" viewBox="0 0 24 24">
      <path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" />
      <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" />
      <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" />
      <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
    </symbol>
    <symbol id="hammer" viewBox="0 0 24 24">
      <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </symbol>
    <symbol id="hand-coins" viewBox="0 0 24 24">
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <circle cx="16" cy="9" r="2.9" />
      <circle cx="6" cy="5" r="3" />
    </symbol>
    <symbol id="hand-fist" viewBox="0 0 24 24">
      <path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0" />
      <path d="M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" />
      <path d="M9 5A2 2 0 1 0 5 5V10" />
      <path d="M9 7V4A2 2 0 1 1 13 4V7.268" />
    </symbol>
    <symbol id="hand-grab" viewBox="0 0 24 24">
      <path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
      <path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
      <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
    </symbol>
    <symbol id="hand-heart" viewBox="0 0 24 24">
      <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
      <path d="m2 15 6 6" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
    </symbol>
    <symbol id="hand-helping" viewBox="0 0 24 24">
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </symbol>
    <symbol id="hand-metal" viewBox="0 0 24 24">
      <path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
      <path d="M14 11V9a2 2 0 1 0-4 0v2" />
      <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
      <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
    </symbol>
    <symbol id="hand-platter" viewBox="0 0 24 24">
      <path d="M12 3V2" />
      <path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" />
      <path d="M2 14h12a2 2 0 0 1 0 4h-2" />
      <path d="M4 10h16" />
      <path d="M5 10a7 7 0 0 1 14 0" />
      <path d="M5 14v6a1 1 0 0 1-1 1H2" />
    </symbol>
    <symbol id="hand" viewBox="0 0 24 24">
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </symbol>
    <symbol id="handbag" viewBox="0 0 24 24">
      <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
      <path d="M8 11V6a4 4 0 0 1 8 0v5" />
    </symbol>
    <symbol id="handle-bottom-right" viewBox="0 0 24 24">
      <path d="M21 8 8 21" />
      <path d="m21 15-6 6" />
    </symbol>
    <symbol id="handshake" viewBox="0 0 24 24">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </symbol>
    <symbol id="hard-drive-download" viewBox="0 0 24 24">
      <path d="M12 2v8" />
      <path d="m16 6-4 4-4-4" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h.01" />
      <path d="M10 18h.01" />
    </symbol>
    <symbol id="hard-drive-upload" viewBox="0 0 24 24">
      <path d="m16 6-4-4-4 4" />
      <path d="M12 2v8" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h.01" />
      <path d="M10 18h.01" />
    </symbol>
    <symbol id="hard-drive" viewBox="0 0 24 24">
      <path d="M10 16h.01" />
      <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <path d="M21.946 12.013H2.054" />
      <path d="M6 16h.01" />
    </symbol>
    <symbol id="hard-hat" viewBox="0 0 24 24">
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <rect x="2" y="15" width="20" height="4" rx="1" />
    </symbol>
    <symbol id="hash" viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </symbol>
    <symbol id="hat-glasses" viewBox="0 0 24 24">
      <path d="M14 18a2 2 0 0 0-4 0" />
      <path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" />
      <path d="M2 11h20" />
      <circle cx="17" cy="18" r="3" />
      <circle cx="7" cy="18" r="3" />
    </symbol>
    <symbol id="haze" viewBox="0 0 24 24">
      <path d="m5.2 6.2 1.4 1.4" />
      <path d="M2 13h2" />
      <path d="M20 13h2" />
      <path d="m17.4 7.6 1.4-1.4" />
      <path d="M22 17H2" />
      <path d="M22 21H2" />
      <path d="M16 13a4 4 0 0 0-8 0" />
      <path d="M12 5V2.5" />
    </symbol>
    <symbol id="hd" viewBox="0 0 24 24">
      <path d="M10 12H6" />
      <path d="M10 15V9" />
      <path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" />
      <path d="M6 15V9" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="hdmi-port" viewBox="0 0 24 24">
      <path d="M22 9a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h.5a2 2 0 011.6.8l.3.4A2 2 0 007 16h10a2 2 0 001.6-.8l.3-.4a2 2 0 011.6-.8h.5a1 1 0 001-1z" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="heading-1" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="m17 12 3-2v8" />
    </symbol>
    <symbol id="heading-2" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
    </symbol>
    <symbol id="heading-3" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
      <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
    </symbol>
    <symbol id="heading-4" viewBox="0 0 24 24">
      <path d="M12 18V6" />
      <path d="M17 10v3a1 1 0 0 0 1 1h3" />
      <path d="M21 10v8" />
      <path d="M4 12h8" />
      <path d="M4 18V6" />
    </symbol>
    <symbol id="heading-5" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17 13v-3h4" />
      <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
    </symbol>
    <symbol id="heading-6" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <circle cx="19" cy="16" r="2" />
      <path d="M20 10c-2 2-3 3.5-3 6" />
    </symbol>
    <symbol id="headphone-off" viewBox="0 0 24 24">
      <path d="M21 14h-1.343" />
      <path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" />
      <path d="m2 2 20 20" />
      <path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" />
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" />
    </symbol>
    <symbol id="headphones" viewBox="0 0 24 24">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </symbol>
    <symbol id="headset" viewBox="0 0 24 24">
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </symbol>
    <symbol id="heart-crack" viewBox="0 0 24 24">
      <path d="M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15" />
      <path d="M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z" />
    </symbol>
    <symbol id="heart-handshake" viewBox="0 0 24 24">
      <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
    </symbol>
    <symbol id="heart-minus" viewBox="0 0 24 24">
      <path d="m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572" />
      <path d="M15 15h6" />
    </symbol>
    <symbol id="heart-off" viewBox="0 0 24 24">
      <path d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655" />
      <path d="m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="heart-plus" viewBox="0 0 24 24">
      <path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" />
      <path d="M15 15h6" />
      <path d="M18 12v6" />
    </symbol>
    <symbol id="heart-pulse" viewBox="0 0 24 24">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </symbol>
    <symbol id="heart-x" viewBox="0 0 24 24">
      <path d="m15.5 12.5 5 5" />
      <path d="m20.5 12.5-5 5" />
      <path d="M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352" />
    </symbol>
    <symbol id="heart" viewBox="0 0 24 24">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </symbol>
    <symbol id="heater" viewBox="0 0 24 24">
      <path d="M11 8c2-3-2-3 0-6" />
      <path d="M15.5 8c2-3-2-3 0-6" />
      <path d="M6 10h.01" />
      <path d="M6 14h.01" />
      <path d="M10 16v-4" />
      <path d="M14 16v-4" />
      <path d="M18 16v-4" />
      <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
      <path d="M5 20v2" />
      <path d="M19 20v2" />
    </symbol>
    <symbol id="helicopter" viewBox="0 0 24 24">
      <path d="M11 17v4" />
      <path d="M14 3v8a2 2 0 0 0 2 2h5.865" />
      <path d="M17 17v4" />
      <path d="M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" />
      <path d="M2 10v5" />
      <path d="M6 3h16" />
      <path d="M7 21h14" />
      <path d="M8 13H2" />
    </symbol>
    <symbol id="hexagon" viewBox="0 0 24 24">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </symbol>
    <symbol id="highlighter" viewBox="0 0 24 24">
      <path d="m9 11-6 6v3h9l3-3" />
      <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
    </symbol>
    <symbol id="hiking-stick" viewBox="0 0 24 24">
      <path d="M13.5 10.5 2 22" />
      <path d="M16.352 11.648a1.205 1.205 0 01-1.704 0l-2.296-2.296a1.205 1.205 0 010-1.704l.72-.72a2 2 0 011.022-.546l.599-.12a2 2 0 001.569-1.57l.12-.598a2 2 0 01.546-1.022l.72-.72a1.205 1.205 0 011.704 0l2.296 2.296a1.205 1.205 0 010 1.704l-6.02 6.02a1 1 0 103 3l.201-.201A7.4 7.4 0 0021 9.93V7" />
      <path d="m6 21-3-3" />
    </symbol>
    <symbol id="hockey-stick" viewBox="0 0 24 24">
      <path d="M11 4v4c0 1.1-2.025 2-4.5 2S2 9.1 2 8V4" />
      <path d="M18.21 3.106a2 2 0 013.579 1.789l-6.895 13.789A6 6 0 019.529 22H4.5a1 1 0 010-5h5.528a2 2 0 001.788-1.105z" />
      <path d="m18.59 11.295-3.578-1.789" />
      <path d="m20.79 6.895-3.578-1.789" />
      <path d="M7 17v5" />
      <ellipse cx="6.5" cy="4" rx="4.5" ry="2" />
    </symbol>
    <symbol id="hop-off" viewBox="0 0 24 24">
      <path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" />
      <path d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" />
      <path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" />
      <path d="M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" />
      <path d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" />
      <path d="M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24" />
      <path d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" />
      <path d="M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="hop" viewBox="0 0 24 24">
      <path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" />
      <path d="M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" />
      <path d="M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" />
      <path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" />
      <path d="M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" />
      <path d="M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" />
      <path d="M4.93 4.93 3 3a.7.7 0 0 1 0-1" />
      <path d="M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" />
    </symbol>
    <symbol id="hospital" viewBox="0 0 24 24">
      <path d="M12 7v4" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M14 9h-4" />
      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    </symbol>
    <symbol id="hot-air-balloon" viewBox="0 0 24 24">
      <path d="M11.5 18C10 15 9 12 9 9a3 7 0 0 1 6 0c0 3-1 6-2.5 9" />
      <path d="M15 18c3-3 5-5 5-9A8 7 0 0 0 4 9c0 4 2 6 5 9" />
      <path d="M15 18H9v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" />
    </symbol>
    <symbol id="hotel" viewBox="0 0 24 24">
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </symbol>
    <symbol id="hourglass-cog" viewBox="0 0 24 24">
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="M17 2v4.172a2 2 0 0 1-.586 1.414l-8.828 8.828A2 2 0 0 0 7 17.828V22" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <path d="M5 22h6.159" />
      <path d="M5 2h14" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414l5.188 5.188" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="hourglass" viewBox="0 0 24 24">
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </symbol>
    <symbol id="house-cog" viewBox="0 0 24 24">
      <path d="M10.584 21H5a2 2 0 01-2-2v-9a2 2 0 01.709-1.527l7-6a2 2 0 012.582 0l7 6A2 2 0 0121 10.001v.583" />
      <path d="M14 12H10a1 1 0 00-1 1v8" />
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.229 16.852-.924-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.773-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.697-.382-.924" />
      <path d="m20.773 16.852.922-.383" />
      <path d="m20.773 19.148.922.383" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="house-heart" viewBox="0 0 24 24">
      <path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </symbol>
    <symbol id="house-plug" viewBox="0 0 24 24">
      <path d="M10 12V8.964" />
      <path d="M14 12V8.964" />
      <path d="M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" />
      <path d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2" />
    </symbol>
    <symbol id="house-plus" viewBox="0 0 24 24">
      <path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" />
      <path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
      <path d="M15 18h6" />
      <path d="M18 15v6" />
    </symbol>
    <symbol id="house-wifi" viewBox="0 0 24 24">
      <path d="M9.5 13.866a4 4 0 0 1 5 .01" />
      <path d="M12 17h.01" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M7 10.754a8 8 0 0 1 10 0" />
    </symbol>
    <symbol id="house" viewBox="0 0 24 24">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </symbol>
    <symbol id="houses" viewBox="0 0 24 24">
      <path d="m12.681 4.24.834-.715a1.45 1.45 0 011.88 0l5.09 4.364A1.45 1.45 0 0121 9v6.546a1.45 1.45 0 01-1 1.381" />
      <path d="M15.485 11.889A1.45 1.45 0 0116 13v6.546A1.454 1.454 0 0114.546 21H4.364a1.454 1.454 0 01-1.454-1.454V13a1.45 1.45 0 01.515-1.111l5.09-4.364a1.45 1.45 0 011.88 0z" />
      <path d="M7.41 20.546v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
    </symbol>
    <symbol id="ice-cream-bowl" viewBox="0 0 24 24">
      <path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" />
      <path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
      <path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
    </symbol>
    <symbol id="ice-cream-cone" viewBox="0 0 24 24">
      <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
      <path d="M17 7A5 5 0 0 0 7 7" />
      <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
    </symbol>
    <symbol id="id-card-lanyard" viewBox="0 0 24 24">
      <path d="M13.5 8h-3" />
      <path d="m15 2-1 2h3a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h3" />
      <path d="M16 22a4 4 0 00-8 0" />
      <path d="m9 2 3 6" />
      <circle cx="12" cy="15" r="3" />
    </symbol>
    <symbol id="id-card" viewBox="0 0 24 24">
      <path d="M13 19a4 4 0 00-8 0" />
      <path d="M16 10h2" />
      <path d="M16 14h2" />
      <circle cx="9" cy="12" r="3" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="image-down" viewBox="0 0 24 24">
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
      <path d="m14 19 3 3v-5.5" />
      <path d="m17 22 3-3" />
      <circle cx="9" cy="9" r="2" />
    </symbol>
    <symbol id="image-minus" viewBox="0 0 24 24">
      <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <line x1="16" x2="22" y1="5" y2="5" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </symbol>
    <symbol id="image-off" viewBox="0 0 24 24">
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
      <line x1="13.5" x2="6" y1="13.5" y2="21" />
      <line x1="18" x2="21" y1="12" y2="15" />
      <path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
      <path d="M21 15V5a2 2 0 0 0-2-2H9" />
    </symbol>
    <symbol id="image-play" viewBox="0 0 24 24">
      <path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
      <path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <path d="m6 21 5-5" />
      <circle cx="9" cy="9" r="2" />
    </symbol>
    <symbol id="image-plus" viewBox="0 0 24 24">
      <path d="M16 5h6" />
      <path d="M19 2v6" />
      <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      <circle cx="9" cy="9" r="2" />
    </symbol>
    <symbol id="image-up" viewBox="0 0 24 24">
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
      <path d="m14 19.5 3-3 3 3" />
      <path d="M17 22v-5.5" />
      <circle cx="9" cy="9" r="2" />
    </symbol>
    <symbol id="image-upscale" viewBox="0 0 24 24">
      <path d="M16 3h5v5" />
      <path d="M17 21h2a2 2 0 0 0 2-2" />
      <path d="M21 12v3" />
      <path d="m21 3-5 5" />
      <path d="M3 7V5a2 2 0 0 1 2-2" />
      <path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" />
      <path d="M9 3h3" />
      <rect x="3" y="11" width="10" height="10" rx="1" />
    </symbol>
    <symbol id="image" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </symbol>
    <symbol id="images" viewBox="0 0 24 24">
      <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" />
      <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
      <circle cx="13" cy="7" r="1" fill="currentColor" />
      <rect x="8" y="2" width="14" height="14" rx="2" />
    </symbol>
    <symbol id="import" viewBox="0 0 24 24">
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </symbol>
    <symbol id="inbox" viewBox="0 0 24 24">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </symbol>
    <symbol id="indian-rupee" viewBox="0 0 24 24">
      <path d="m14 20-8-8h4c5.333 0 5.333-8 0-8" />
      <path d="M6 4h12" />
      <path d="M6 8h12" />
    </symbol>
    <symbol id="infinity" viewBox="0 0 24 24">
      <path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />
    </symbol>
    <symbol id="info" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </symbol>
    <symbol id="inspection-panel" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7h.01" />
      <path d="M17 7h.01" />
      <path d="M7 17h.01" />
      <path d="M17 17h.01" />
    </symbol>
    <symbol id="italic" viewBox="0 0 24 24">
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </symbol>
    <symbol id="iteration-ccw" viewBox="0 0 24 24">
      <path d="m16 14 4 4-4 4" />
      <path d="M20 10a8 8 0 1 0-8 8h8" />
    </symbol>
    <symbol id="iteration-cw" viewBox="0 0 24 24">
      <path d="M4 10a8 8 0 1 1 8 8H4" />
      <path d="m8 22-4-4 4-4" />
    </symbol>
    <symbol id="iv-bag" viewBox="0 0 24 24">
      <path d="M12 18v2a2 2 0 002 2h6" />
      <path d="M6 11c.72.5 1.44 1 3 1 3 0 3-2 6-2 1.56 0 2.28.5 3 1" />
      <path d="M9.293 3c.453 0 .887-.18 1.207-.5s.754-.5 1.207-.5h.586c.453 0 .887.18 1.207.5s.754.5 1.207.5H16a2 2 0 012 2v11a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" />
    </symbol>
    <symbol id="japanese-yen" viewBox="0 0 24 24">
      <path d="M12 12v8" />
      <path d="m6 4 6 8 6-8" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
    </symbol>
    <symbol id="joystick" viewBox="0 0 24 24">
      <path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
      <path d="M6 15v-2" />
      <path d="M12 15V9" />
      <circle cx="12" cy="6" r="3" />
    </symbol>
    <symbol id="kanban" viewBox="0 0 24 24">
      <path d="M5 3v14" />
      <path d="M12 3v8" />
      <path d="M19 3v18" />
    </symbol>
    <symbol id="kayak" viewBox="0 0 24 24">
      <path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" />
      <path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" />
      <path d="m6.707 6.707 10.586 10.586" />
      <path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" />
    </symbol>
    <symbol id="kazakh-tenge" viewBox="0 0 24 24">
      <path d="M12 8v12" />
      <path d="M6 4h12" />
      <path d="M6 8h12" />
    </symbol>
    <symbol id="key-round" viewBox="0 0 24 24">
      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="key-square" viewBox="0 0 24 24">
      <path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" />
      <path d="m14 7 3 3" />
      <path d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" />
    </symbol>
    <symbol id="key" viewBox="0 0 24 24">
      <path d="m2 21 9.6-9.6" />
      <path d="m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19" />
      <circle cx="15.5" cy="7.5" r="5.5" />
    </symbol>
    <symbol id="keyboard-music" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h4" />
      <path d="M14 8h.01" />
      <path d="M18 8h.01" />
      <path d="M2 12h20" />
      <path d="M6 12v4" />
      <path d="M10 12v4" />
      <path d="M14 12v4" />
      <path d="M18 12v4" />
    </symbol>
    <symbol id="keyboard-off" viewBox="0 0 24 24">
      <path d="M 20 4 A2 2 0 0 1 22 6" />
      <path d="M 22 6 L 22 16.41" />
      <path d="M 7 16 L 16 16" />
      <path d="M 9.69 4 L 20 4" />
      <path d="M14 8h.01" />
      <path d="M18 8h.01" />
      <path d="m2 2 20 20" />
      <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
      <path d="M6 8h.01" />
      <path d="M8 12h.01" />
    </symbol>
    <symbol id="keyboard" viewBox="0 0 24 24">
      <path d="M10 8h.01" />
      <path d="M12 12h.01" />
      <path d="M14 8h.01" />
      <path d="M16 12h.01" />
      <path d="M18 8h.01" />
      <path d="M6 8h.01" />
      <path d="M7 16h10" />
      <path d="M8 12h.01" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
    </symbol>
    <symbol id="lambda" viewBox="0 0 24 24">
      <path d="M11.38 10 5 20" />
      <path d="M19 18a2 2 0 01-2 2c-4.87-.003-5.052-16-10-16a2 2 0 00-2 2" />
    </symbol>
    <symbol id="lamp-ceiling" viewBox="0 0 24 24">
      <path d="M12 2v5" />
      <path d="M14.829 15.998a3 3 0 1 1-5.658 0" />
      <path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" />
    </symbol>
    <symbol id="lamp-desk" viewBox="0 0 24 24">
      <path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" />
      <path d="m14.207 4.793-3.414 3.414" />
      <path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" />
    </symbol>
    <symbol id="lamp-floor" viewBox="0 0 24 24">
      <path d="M12 10v12" />
      <path d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z" />
      <path d="M9 22h6" />
    </symbol>
    <symbol id="lamp-wall-down" viewBox="0 0 24 24">
      <path d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z" />
      <path d="M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M8 6h4a2 2 0 0 1 2 2v5" />
    </symbol>
    <symbol id="lamp-wall-up" viewBox="0 0 24 24">
      <path d="M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z" />
      <path d="M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
      <path d="M8 18h4a2 2 0 0 0 2-2v-5" />
    </symbol>
    <symbol id="lamp" viewBox="0 0 24 24">
      <path d="M12 12v6" />
      <path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" />
      <path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="land-plot" viewBox="0 0 24 24">
      <path d="m12 8 6-3-6-3v10" />
      <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
      <path d="m6.49 12.85 11.02 6.3" />
      <path d="M17.51 12.85 6.5 19.15" />
    </symbol>
    <symbol id="landmark" viewBox="0 0 24 24">
      <path d="M10 18v-7" />
      <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
    </symbol>
    <symbol id="languages" viewBox="0 0 24 24">
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </symbol>
    <symbol id="laptop-minimal-check" viewBox="0 0 24 24">
      <path d="M2 20h20" />
      <path d="m9 10 2 2 4-4" />
      <rect x="3" y="4" width="18" height="12" rx="2" />
    </symbol>
    <symbol id="laptop-minimal" viewBox="0 0 24 24">
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
      <line x1="2" x2="22" y1="20" y2="20" />
    </symbol>
    <symbol id="laptop" viewBox="0 0 24 24">
      <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
      <path d="M20.054 15.987H3.946" />
    </symbol>
    <symbol id="laser" viewBox="0 0 24 24">
      <path d="m13 8 .95-.95" />
      <path d="M13.95 16.95 13 16" />
      <path d="M22 12h-9" />
      <path d="M4 12H2" />
      <path d="M4.05 16.95 5 16" />
      <path d="m5 8-.95-.95" />
      <path d="M9 12h.01" />
      <path d="M9 19v-2" />
      <path d="M9 7V5" />
    </symbol>
    <symbol id="lasso-select" viewBox="0 0 24 24">
      <path d="M7 22a5 5 0 0 1-2-4" />
      <path d="M7 16.93c.96.43 1.96.74 2.99.91" />
      <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
      <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" />
    </symbol>
    <symbol id="lasso" viewBox="0 0 24 24">
      <path d="M3.704 14.467a10 8 0 1 1 3.115 2.375" />
      <path d="M7 22a5 5 0 0 1-2-3.994" />
      <circle cx="5" cy="16" r="2" />
    </symbol>
    <symbol id="layer-arrow-down" viewBox="0 0 24 24">
      <path d="M12 10v10" />
      <path d="M22 10a1 1 0 01-.59.92l-5.077 2.308" />
      <path d="M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316" />
      <path d="m9 17 3 3 3-3" />
    </symbol>
    <symbol id="layer-arrow-up" viewBox="0 0 24 24">
      <path d="M12 14V4" />
      <path d="M7.674 10.774 2.58 13.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308" />
      <path d="m9 7 3-3 3 3" />
    </symbol>
    <symbol id="layers-2" viewBox="0 0 24 24">
      <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" />
      <path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" />
    </symbol>
    <symbol id="layers-arrow-down" viewBox="0 0 24 24">
      <path d="M12 7v15" />
      <path d="M2 12a1 1 0 00.58.91l5.093 2.316" />
      <path d="M22 12a1 1 0 01-.59.92l-5.077 2.308" />
      <path d="M8 10.37 2.6 7.91a1 1 0 010-1.831l8.57-3.9a2 2 0 011.66.001l8.59 3.91a1 1 0 010 1.831l-5.392 2.45" />
      <path d="m9 19 3 3 3-3" />
    </symbol>
    <symbol id="layers-arrow-up" viewBox="0 0 24 24">
      <path d="M12 12V2" />
      <path d="M2 17.002a1 1 0 00.58.91l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92" />
      <path d="M7.674 8.774 2.58 11.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308" />
      <path d="m9 5 3-3 3 3" />
    </symbol>
    <symbol id="layers-minus" viewBox="0 0 24 24">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.832z" />
      <path d="M16 17h6" />
      <path d="M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18" />
      <path d="M2.003 16.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l2.11-.96" />
      <path d="M22.018 12.004a1 1 0 0 1-.598.916l-.177.08" />
    </symbol>
    <symbol id="layers-plus" viewBox="0 0 24 24">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z" />
      <path d="M16 17h6" />
      <path d="M19 14v6" />
      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178" />
      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962" />
    </symbol>
    <symbol id="layers" viewBox="0 0 24 24">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
    </symbol>
    <symbol id="layout-arrow-down" viewBox="0 0 24 24">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <path d="M18 3v18" />
      <path d="m21 18-3 3-3-3" />
    </symbol>
    <symbol id="layout-arrow-right" viewBox="0 0 24 24">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <path d="M3 18h18" />
      <path d="m18 21 3-3-3-3" />
    </symbol>
    <symbol id="layout-dashboard" viewBox="0 0 24 24">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </symbol>
    <symbol id="layout-freeform" viewBox="0 0 24 24">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="4" rx="1" />
      <rect width="7" height="7" x="4" y="14" rx="1" />
    </symbol>
    <symbol id="layout-grid-circles" viewBox="0 0 24 24">
      <circle cx="17.5" cy="17.5" r="3.5" />
      <circle cx="17.5" cy="6.5" r="3.5" />
      <circle cx="6.5" cy="17.5" r="3.5" />
      <circle cx="6.5" cy="6.5" r="3.5" />
    </symbol>
    <symbol id="layout-grid-plus" viewBox="0 0 24 24">
      <path d="M15 18h6" />
      <path d="M18 15v6" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="3" width="7" height="7" rx="1" />
    </symbol>
    <symbol id="layout-grid" viewBox="0 0 24 24">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </symbol>
    <symbol id="layout-list" viewBox="0 0 24 24">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <path d="M14 4h7" />
      <path d="M14 9h7" />
      <path d="M14 15h7" />
      <path d="M14 20h7" />
    </symbol>
    <symbol id="layout-panel-left" viewBox="0 0 24 24">
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </symbol>
    <symbol id="layout-panel-top" viewBox="0 0 24 24">
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </symbol>
    <symbol id="layout-template" viewBox="0 0 24 24">
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9" height="7" x="3" y="14" rx="1" />
      <rect width="5" height="7" x="16" y="14" rx="1" />
    </symbol>
    <symbol id="leaf" viewBox="0 0 24 24">
      <path d="M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20" />
      <path d="M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13" />
    </symbol>
    <symbol id="leafy-green" viewBox="0 0 24 24">
      <path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" />
      <path d="M2 22 17 7" />
    </symbol>
    <symbol id="lectern" viewBox="0 0 24 24">
      <path d="M15 13h4a2 2 0 001.901-1.38l1.057-4.333A1 1 0 0021 6H3a1 1 0 00-.958 1.287L3.1 11.621A2 2 0 005.001 13h4" />
      <path d="M15 22V11a1 1 0 00-1-1h-4a1 1 0 00-1 1v11" />
      <path d="M18 22H6" />
      <path d="M18 6V3a1 1 0 00-1-1h-3" />
    </symbol>
    <symbol id="lens-concave" viewBox="0 0 24 24">
      <path d="M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z" />
    </symbol>
    <symbol id="lens-convex" viewBox="0 0 24 24">
      <path d="M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z" />
    </symbol>
    <symbol id="lens" viewBox="0 0 24 24">
      <path d="M15.725 7.296h.01" />
      <path d="M6 12a6 6 0 016-6" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="letter-a" viewBox="0 0 24 24">
      <path d="M17.117 14H6.883" />
      <path d="m4 20 7.55-15.712a.5.5 0 01.9 0L20 20" />
    </symbol>
    <symbol id="letter-b" viewBox="0 0 24 24">
      <path d="M6 12h9a4 4 0 010 8H7a1 1 0 01-1-1V5a1 1 0 011-1h7a4 4 0 010 8" />
    </symbol>
    <symbol id="letter-c" viewBox="0 0 24 24">
      <path d="M19 6.708a8 8 0 100 10.584" />
    </symbol>
    <symbol id="letter-d" viewBox="0 0 24 24">
      <path d="M11 4a8 8 0 010 16H6.406A.406.406 0 016 19.594V4.406A.406.406 0 016.406 4z" />
    </symbol>
    <symbol id="letter-e" viewBox="0 0 24 24">
      <path d="M18 4H7a1 1 0 00-1 1v14a1 1 0 001 1h11" />
      <path d="M6 12h8" />
    </symbol>
    <symbol id="letter-f" viewBox="0 0 24 24">
      <path d="M6 12h8" />
      <path d="M6 20V5a1 1 0 011-1h11" />
    </symbol>
    <symbol id="letter-g" viewBox="0 0 24 24">
      <path d="M19 6.708a8 8 0 10-.526 11.126c.355-.333.526-.811.526-1.299V13a1 1 0 00-1-1h-4" />
    </symbol>
    <symbol id="letter-h" viewBox="0 0 24 24">
      <path d="M18 20V4" />
      <path d="M6 12H18" />
      <path d="M6 20V4" />
    </symbol>
    <symbol id="letter-i" viewBox="0 0 24 24">
      <path d="M12 20V4" />
    </symbol>
    <symbol id="letter-j" viewBox="0 0 24 24">
      <path d="M17 4v11a5 5 0 01-10 0" />
    </symbol>
    <symbol id="letter-k" viewBox="0 0 24 24">
      <path d="M17 4 6 15" />
      <path d="M6 20V4" />
      <path d="m9 12 8 8" />
    </symbol>
    <symbol id="letter-l" viewBox="0 0 24 24">
      <path d="M6 4v15a1 1 0 001 1h11" />
    </symbol>
    <symbol id="letter-m" viewBox="0 0 24 24">
      <path d="M4 20V4.253a.25.25 0 01.454-.144l6.727 9.467a1 1 0 001.63 0l6.735-9.468a.25.25 0 01.454.145V20" />
    </symbol>
    <symbol id="letter-n" viewBox="0 0 24 24">
      <path d="M6 20V4.25a.25.25 0 01.455-.143l11.09 15.786a.25.25 0 00.455-.144V4" />
    </symbol>
    <symbol id="letter-o" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
    </symbol>
    <symbol id="letter-p" viewBox="0 0 24 24">
      <path d="M6 12h8a4 4 0 000-8H7a1 1 0 00-1 1v15" />
    </symbol>
    <symbol id="letter-q" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M20 20L15 15" />
    </symbol>
    <symbol id="letter-r" viewBox="0 0 24 24">
      <path d="m10 12 8 8" />
      <path d="M6 12h8a4 4 0 000-8H7a1 1 0 00-1 1v15" />
    </symbol>
    <symbol id="letter-s" viewBox="0 0 24 24">
      <path d="M17 4h-7a4 4 0 000 8h4a4 4 0 010 8H6" />
    </symbol>
    <symbol id="letter-spacing" viewBox="0 0 24 24">
      <path d="M15 14H9" />
      <path d="M21 3v18" />
      <path d="M3 3v18" />
      <path d="m8 16 3.453-7.648a.6.6 0 011.094.001L16 16" />
    </symbol>
    <symbol id="letter-t" viewBox="0 0 24 24">
      <path d="M12 20V4" />
      <path d="M5 4h14" />
    </symbol>
    <symbol id="letter-u" viewBox="0 0 24 24">
      <path d="M6 4v10a6 6 0 0012 0V4" />
    </symbol>
    <symbol id="letter-v" viewBox="0 0 24 24">
      <path d="m6 4 5.765 15.835a.25.25 0 00.47 0L18 4" />
    </symbol>
    <symbol id="letter-w" viewBox="0 0 24 24">
      <path d="m21 4-4.794 15.821a.25.25 0 01-.471.021l-3.503-8.685a.25.25 0 00-.464 0l-3.503 8.685a.25.25 0 01-.47-.021L3 4" />
    </symbol>
    <symbol id="letter-x" viewBox="0 0 24 24">
      <path d="M18 4 6 20" />
      <path d="m6 4 12 16" />
    </symbol>
    <symbol id="letter-y" viewBox="0 0 24 24">
      <path d="M12 12v8" />
      <path d="m6 4 6 8 6-8" />
    </symbol>
    <symbol id="letter-z" viewBox="0 0 24 24">
      <path d="M6 4h11.5a.5.5 0 01.387.817L6.114 19.183a.5.5 0 00.387.817H18" />
    </symbol>
    <symbol id="letters" viewBox="0 0 24 24">
      <path d="M15 8H9" />
      <path d="M21 15.354a4 4 0 100 5.292" />
      <path d="M3 18h4a2 2 0 010 4H3.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H6a2 2 0 010 4" />
      <path d="m8 10 3.453-7.648a.6.6 0 011.094 0L16 10" />
    </symbol>
    <symbol id="library-big" viewBox="0 0 24 24">
      <rect width="8" height="18" x="3" y="3" rx="1" />
      <path d="M7 3v18" />
      <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
    </symbol>
    <symbol id="library" viewBox="0 0 24 24">
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </symbol>
    <symbol id="life-buoy" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
      <circle cx="12" cy="12" r="4" />
    </symbol>
    <symbol id="ligature" viewBox="0 0 24 24">
      <path d="M14 12h2v8" />
      <path d="M14 20h4" />
      <path d="M6 12h4" />
      <path d="M6 20h4" />
      <path d="M8 20V8a4 4 0 0 1 7.464-2" />
    </symbol>
    <symbol id="lightbulb-off" viewBox="0 0 24 24">
      <path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
      <path d="m2 2 20 20" />
      <path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </symbol>
    <symbol id="lightbulb" viewBox="0 0 24 24">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </symbol>
    <symbol id="lighthouse" viewBox="0 0 24 24">
      <path d="M12 3V2" />
      <path d="M16.066 16.865 7 22l2-11V6a3 3 0 016 0v5l2 11" />
      <path d="m19.792 4.5.866-.5" />
      <path d="m19.797 13.5.866.5" />
      <path d="M21 9h1" />
      <path d="M3 9H2" />
      <path d="m4.203 13.5-.866.5" />
      <path d="M4.208 4.5 3.342 4" />
      <path d="M5.5 22h13" />
      <path d="m7.932 16.875 7.377-4.178" />
      <path d="M8 11h8" />
      <path d="M8 7h8" />
    </symbol>
    <symbol id="line-dot-bottom-vertical" viewBox="0 0 24 24">
      <path d="M12 3v12" />
      <circle cx="12" cy="18" r="3" />
    </symbol>
    <symbol id="line-dot-left-horizontal" viewBox="0 0 24 24">
      <path d="M9 12h12" />
      <circle cx="6" cy="12" r="3" />
    </symbol>
    <symbol id="line-dot-right-horizontal" viewBox="0 0 24 24">
      <path d="M 3 12 L 15 12" />
      <circle cx="18" cy="12" r="3" />
    </symbol>
    <symbol id="line-dot-top-vertical" viewBox="0 0 24 24">
      <path d="M12 9v12" />
      <circle cx="12" cy="6" r="3" />
    </symbol>
    <symbol id="line-height" viewBox="0 0 24 24">
      <path d="M15 14H9" />
      <path d="M21 21H3" />
      <path d="M21 3H3" />
      <path d="m8 16 3.453-7.648a.6.6 0 011.094.001L16 16" />
    </symbol>
    <symbol id="line-squiggle" viewBox="0 0 24 24">
      <path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" />
    </symbol>
    <symbol id="line-style" viewBox="0 0 24 24">
      <path d="M11 5h2" />
      <path d="M15 12h6" />
      <path d="M19 5h2" />
      <path d="M3 12h6" />
      <path d="M3 19h18" />
      <path d="M3 5h2" />
    </symbol>
    <symbol id="link-2-off" viewBox="0 0 24 24">
      <path d="M9 17H7A5 5 0 0 1 7 7" />
      <path d="M15 7h2a5 5 0 0 1 4 8" />
      <line x1="8" x2="12" y1="12" y2="12" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="link-2" viewBox="0 0 24 24">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </symbol>
    <symbol id="link" viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </symbol>
    <symbol id="list-check" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M16 12H3" />
      <path d="M11 19H3" />
      <path d="m15 18 2 2 4-4" />
    </symbol>
    <symbol id="list-checks" viewBox="0 0 24 24">
      <path d="M13 5h8" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
      <path d="m3 17 2 2 4-4" />
      <path d="m3 7 2 2 4-4" />
    </symbol>
    <symbol id="list-chevrons-down-up" viewBox="0 0 24 24">
      <path d="M3 5h8" />
      <path d="M3 12h8" />
      <path d="M3 19h8" />
      <path d="m15 5 3 3 3-3" />
      <path d="m15 19 3-3 3 3" />
    </symbol>
    <symbol id="list-chevrons-up-down" viewBox="0 0 24 24">
      <path d="M3 5h8" />
      <path d="M3 12h8" />
      <path d="M3 19h8" />
      <path d="m15 8 3-3 3 3" />
      <path d="m15 16 3 3 3-3" />
    </symbol>
    <symbol id="list-clock" viewBox="0 0 24 24">
      <path d="M16 13v2.2l1.6 1" />
      <path d="M3 12h3.458" />
      <path d="M3 19h3.832" />
      <path d="M3 5h18" />
      <circle cx="16" cy="15" r="6" />
    </symbol>
    <symbol id="list-collapse" viewBox="0 0 24 24">
      <path d="M10 5h11" />
      <path d="M10 12h11" />
      <path d="M10 19h11" />
      <path d="m3 10 3-3-3-3" />
      <path d="m3 20 3-3-3-3" />
    </symbol>
    <symbol id="list-end" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M16 12H3" />
      <path d="M9 19H3" />
      <path d="m16 16-3 3 3 3" />
      <path d="M21 5v12a2 2 0 0 1-2 2h-6" />
    </symbol>
    <symbol id="list-filter-plus" viewBox="0 0 24 24">
      <path d="M12 5H2" />
      <path d="M6 12h12" />
      <path d="M9 19h6" />
      <path d="M16 5h6" />
      <path d="M19 8V2" />
    </symbol>
    <symbol id="list-filter" viewBox="0 0 24 24">
      <path d="M2 5h20" />
      <path d="M6 12h12" />
      <path d="M9 19h6" />
    </symbol>
    <symbol id="list-indent-decrease" viewBox="0 0 24 24">
      <path d="M21 5H11" />
      <path d="M21 12H11" />
      <path d="M21 19H11" />
      <path d="m7 8-4 4 4 4" />
    </symbol>
    <symbol id="list-indent-increase" viewBox="0 0 24 24">
      <path d="M21 5H11" />
      <path d="M21 12H11" />
      <path d="M21 19H11" />
      <path d="m3 8 4 4-4 4" />
    </symbol>
    <symbol id="list-minus" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M16 19H3" />
      <path d="M21 12h-6" />
    </symbol>
    <symbol id="list-music" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M11 19H3" />
      <path d="M21 16V5" />
      <circle cx="18" cy="16" r="3" />
    </symbol>
    <symbol id="list-ordered" viewBox="0 0 24 24">
      <path d="M11 5h10" />
      <path d="M11 12h10" />
      <path d="M11 19h10" />
      <path d="M4 4h1v5" />
      <path d="M4 9h2" />
      <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />
    </symbol>
    <symbol id="list-plus" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M16 19H3" />
      <path d="M18 9v6" />
      <path d="M21 12h-6" />
    </symbol>
    <symbol id="list-restart" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M7 12H3" />
      <path d="M7 19H3" />
      <path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
      <path d="M11 10v4h4" />
    </symbol>
    <symbol id="list-sort-ascending" viewBox="0 0 24 24">
      <path d="M3 19h18" />
      <path d="M15 12H3" />
      <path d="M9 5H3" />
    </symbol>
    <symbol id="list-sort-descending" viewBox="0 0 24 24">
      <path d="M15 12H3" />
      <path d="M3 5h18" />
      <path d="M9 19H3" />
    </symbol>
    <symbol id="list-start" viewBox="0 0 24 24">
      <path d="M3 5h6" />
      <path d="M3 12h13" />
      <path d="M3 19h13" />
      <path d="m16 8-3-3 3-3" />
      <path d="M21 19V7a2 2 0 0 0-2-2h-6" />
    </symbol>
    <symbol id="list-todo" viewBox="0 0 24 24">
      <path d="M13 5h8" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
      <path d="m3 17 2 2 4-4" />
      <rect x="3" y="4" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="list-tree" viewBox="0 0 24 24">
      <path d="M8 5h13" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
      <path d="M3 10a2 2 0 0 0 2 2h3" />
      <path d="M3 5v12a2 2 0 0 0 2 2h3" />
    </symbol>
    <symbol id="list-video" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M10 12H3" />
      <path d="M10 19H3" />
      <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
    </symbol>
    <symbol id="list-x" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M16 19H3" />
      <path d="m15.5 9.5 5 5" />
      <path d="m20.5 9.5-5 5" />
    </symbol>
    <symbol id="list" viewBox="0 0 24 24">
      <path d="M3 5h.01" />
      <path d="M3 12h.01" />
      <path d="M3 19h.01" />
      <path d="M8 5h13" />
      <path d="M8 12h13" />
      <path d="M8 19h13" />
    </symbol>
    <symbol id="loader-circle" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </symbol>
    <symbol id="loader-pinwheel" viewBox="0 0 24 24">
      <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
      <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
      <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="loader" viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </symbol>
    <symbol id="locate-fixed" viewBox="0 0 24 24">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="locate-off" viewBox="0 0 24 24">
      <path d="M12 19v3" />
      <path d="M12 2v3" />
      <path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" />
      <path d="M19 12h3" />
      <path d="M2 12h3" />
      <path d="m2 2 20 20" />
      <path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />
    </symbol>
    <symbol id="locate" viewBox="0 0 24 24">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </symbol>
    <symbol id="lock-keyhole-open" viewBox="0 0 24 24">
      <circle cx="12" cy="16" r="1" />
      <rect width="18" height="12" x="3" y="10" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
    </symbol>
    <symbol id="lock-keyhole" viewBox="0 0 24 24">
      <circle cx="12" cy="16" r="1" />
      <rect x="3" y="10" width="18" height="12" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </symbol>
    <symbol id="lock-open" viewBox="0 0 24 24">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </symbol>
    <symbol id="lock" viewBox="0 0 24 24">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </symbol>
    <symbol id="log-in" viewBox="0 0 24 24">
      <path d="m10 17 5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    </symbol>
    <symbol id="log-out" viewBox="0 0 24 24">
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </symbol>
    <symbol id="logs" viewBox="0 0 24 24">
      <path d="M3 5h1" />
      <path d="M3 12h1" />
      <path d="M3 19h1" />
      <path d="M8 5h1" />
      <path d="M8 12h1" />
      <path d="M8 19h1" />
      <path d="M13 5h8" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
    </symbol>
    <symbol id="lollipop" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" />
    </symbol>
    <symbol id="luggage" viewBox="0 0 24 24">
      <path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </symbol>
    <symbol id="magnet" viewBox="0 0 24 24">
      <path d="m12 15 4 4" />
      <path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" />
      <path d="m5 8 4 4" />
    </symbol>
    <symbol id="mail-badge" viewBox="0 0 24 24">
      <path d="M22 7.7V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.25" />
      <path d="M12 12.996a1.94 1.94 0 0 1-1.03-.296L2 7" />
      <path d="m20.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" />
      <circle cx="19" cy="14" r="3" />
    </symbol>
    <symbol id="mail-check" viewBox="0 0 24 24">
      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="m16 19 2 2 4-4" />
    </symbol>
    <symbol id="mail-clock" viewBox="0 0 24 24">
      <path d="M16 14v2.2l1.6 1" />
      <path d="m22 7-.759.484" />
      <path d="M6.835 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2" />
      <path d="M7.605 10.567 2 7" />
      <circle cx="16" cy="16" r="6" />
    </symbol>
    <symbol id="mail-dot" viewBox="0 0 24 24">
      <path d="M12.674 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.675" />
      <path d="m2 7 9 5.701a2 2 0 0 0 2 0l1.084-.686" />
      <circle cx="19" cy="7" r="3" />
    </symbol>
    <symbol id="mail-exclamation-point" viewBox="0 0 24 24">
      <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M20 14v4" />
      <path d="M20 22v.01" />
    </symbol>
    <symbol id="mail-minus" viewBox="0 0 24 24">
      <path d="M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M16 19h6" />
    </symbol>
    <symbol id="mail-open" viewBox="0 0 24 24">
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </symbol>
    <symbol id="mail-pen" viewBox="0 0 24 24">
      <path d="M15.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l3.013-3.009a1 1 0 10-3.004-3.004z" />
      <path d="M22 10.38V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h6.25" />
      <path d="m22 7-8.991 5.727a2 2 0 01-2.009 0L2 7" />
    </symbol>
    <symbol id="mail-plus" viewBox="0 0 24 24">
      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M19 16v6" />
      <path d="M16 19h6" />
    </symbol>
    <symbol id="mail-question-mark" viewBox="0 0 24 24">
      <path d="M22 10.35V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h12.3" />
      <path d="m22 7-8.97 5.7a2 2 0 01-2.06 0L2 7" />
      <path d="M20 18.5c.5-1 2-1 2-2.5a2 2 0 00-2-2 2.5 2.5 0 00-2 1" />
      <path d="M20 22h.01" />
    </symbol>
    <symbol id="mail-search" viewBox="0 0 24 24">
      <path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <circle cx="18" cy="18" r="3" />
      <path d="m22 22-1.5-1.5" />
    </symbol>
    <symbol id="mail-x" viewBox="0 0 24 24">
      <path d="M22 12.532V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.792" />
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <path d="m16.5 16.5 5 5" />
      <path d="m21.5 16.5-5 5" />
    </symbol>
    <symbol id="mail" viewBox="0 0 24 24">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </symbol>
    <symbol id="mailbox" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </symbol>
    <symbol id="mails" viewBox="0 0 24 24">
      <path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" />
      <path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" />
      <rect x="7" y="3" width="15" height="12" rx="2" />
    </symbol>
    <symbol id="mango" viewBox="0 0 24 24">
      <path d="m17 6 3-3" />
      <path d="M7 22a4 4 0 01-2.62-7.023A2 2 0 005 13.383V10a8 8 0 1116 0A12 12 0 019 22z" />
    </symbol>
    <symbol id="map-minus" viewBox="0 0 24 24">
      <path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14" />
      <path d="M15 5.764V14" />
      <path d="M21 18h-6" />
      <path d="M9 3.236v15" />
    </symbol>
    <symbol id="map-pin-check-inside" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="m9 10 2 2 4-4" />
    </symbol>
    <symbol id="map-pin-check" viewBox="0 0 24 24">
      <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
      <circle cx="12" cy="10" r="3" />
      <path d="m16 18 2 2 4-4" />
    </symbol>
    <symbol id="map-pin-house" viewBox="0 0 24 24">
      <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
      <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
      <path d="M18 22v-3" />
      <circle cx="10" cy="10" r="3" />
    </symbol>
    <symbol id="map-pin-minus-inside" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="map-pin-minus" viewBox="0 0 24 24">
      <path d="M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" />
      <circle cx="12" cy="10" r="3" />
      <path d="M16 18h6" />
    </symbol>
    <symbol id="map-pin-off" viewBox="0 0 24 24">
      <path d="M12.75 7.09a3 3 0 0 1 2.16 2.16" />
      <path d="M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" />
      <path d="m2 2 20 20" />
      <path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" />
      <path d="M9.13 9.13a3 3 0 0 0 3.74 3.74" />
    </symbol>
    <symbol id="map-pin-pen" viewBox="0 0 24 24">
      <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" />
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <circle cx="10" cy="10" r="3" />
    </symbol>
    <symbol id="map-pin-plus-inside" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="M12 7v6" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="map-pin-plus" viewBox="0 0 24 24">
      <path d="M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" />
      <circle cx="12" cy="10" r="3" />
      <path d="M16 18h6" />
      <path d="M19 15v6" />
    </symbol>
    <symbol id="map-pin-search" viewBox="0 0 24 24">
      <path d="M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262" />
      <path d="m22 22-1.88-1.88" />
      <circle cx="12" cy="10" r="3" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="map-pin-x-inside" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="m14.5 7.5-5 5" />
      <path d="m9.5 7.5 5 5" />
    </symbol>
    <symbol id="map-pin-x" viewBox="0 0 24 24">
      <path d="M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" />
      <circle cx="12" cy="10" r="3" />
      <path d="m21.5 15.5-5 5" />
      <path d="m21.5 20.5-5-5" />
    </symbol>
    <symbol id="map-pin" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </symbol>
    <symbol id="map-pinned" viewBox="0 0 24 24">
      <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 01-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0112 0" />
      <path d="M4.474 15h-.197a1 1 0 00-.969.753l-1.097 4.35a1.5 1.5 0 001.444 1.898L20.344 22a1.5 1.5 0 001.446-1.897l-1.098-4.35a1 1 0 00-.969-.753h-.197" />
      <circle cx="12" cy="8" r="2" />
    </symbol>
    <symbol id="map-plus" viewBox="0 0 24 24">
      <path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" />
      <path d="M15 5.764V12" />
      <path d="M18 15v6" />
      <path d="M21 18h-6" />
      <path d="M9 3.236v15" />
    </symbol>
    <symbol id="map" viewBox="0 0 24 24">
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </symbol>
    <symbol id="margin-bottom" viewBox="0 0 24 24">
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M3 21h18" />
    </symbol>
    <symbol id="margin-horizontal" viewBox="0 0 24 24">
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M21 3v18" />
      <path d="M3 3v18" />
    </symbol>
    <symbol id="margin-left" viewBox="0 0 24 24">
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M3 3v18" />
    </symbol>
    <symbol id="margin-right" viewBox="0 0 24 24">
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M21 3v18" />
    </symbol>
    <symbol id="margin-top" viewBox="0 0 24 24">
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M3 3h18" />
    </symbol>
    <symbol id="margin-vertical" viewBox="0 0 24 24">
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M3 21h18" />
      <path d="M3 3h18" />
    </symbol>
    <symbol id="margin" viewBox="0 0 24 24">
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M21 6v12" />
      <path d="M3 6v12" />
      <path d="M6 21h12" />
      <path d="M6 3h12" />
    </symbol>
    <symbol id="mars-stroke" viewBox="0 0 24 24">
      <path d="m14 6 4 4" />
      <path d="M17 3h4v4" />
      <path d="m21 3-7.75 7.75" />
      <circle cx="9" cy="15" r="6" />
    </symbol>
    <symbol id="mars" viewBox="0 0 24 24">
      <path d="M16 3h5v5" />
      <path d="m21 3-6.75 6.75" />
      <circle cx="10" cy="14" r="6" />
    </symbol>
    <symbol id="martini" viewBox="0 0 24 24">
      <path d="M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z" />
      <path d="M12 12v10" />
      <path d="M7 22h10" />
    </symbol>
    <symbol id="maximize-2" viewBox="0 0 24 24">
      <path d="M15 3h6v6" />
      <path d="m21 3-7 7" />
      <path d="m3 21 7-7" />
      <path d="M9 21H3v-6" />
    </symbol>
    <symbol id="maximize" viewBox="0 0 24 24">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </symbol>
    <symbol id="medal" viewBox="0 0 24 24">
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </symbol>
    <symbol id="megaphone-off" viewBox="0 0 24 24">
      <path d="M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" />
      <path d="M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
      <path d="m2 2 20 20" />
      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
      <path d="M8 8v6" />
    </symbol>
    <symbol id="megaphone" viewBox="0 0 24 24">
      <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
      <path d="M8 6v8" />
    </symbol>
    <symbol id="memory-stick" viewBox="0 0 24 24">
      <path d="M12 12v-2" />
      <path d="M12 18v-2" />
      <path d="M16 12v-2" />
      <path d="M16 18v-2" />
      <path d="M2 11h1.5" />
      <path d="M20 18v-2" />
      <path d="M20.5 11H22" />
      <path d="M4 18v-2" />
      <path d="M8 12v-2" />
      <path d="M8 18v-2" />
      <rect x="2" y="6" width="20" height="10" rx="2" />
    </symbol>
    <symbol id="menu" viewBox="0 0 24 24">
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </symbol>
    <symbol id="merge" viewBox="0 0 24 24">
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </symbol>
    <symbol id="message-circle-check" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="m16 9-5.5 5.5L8 12" />
    </symbol>
    <symbol id="message-circle-code" viewBox="0 0 24 24">
      <path d="m10 9-3 3 3 3" />
      <path d="m14 15 3-3-3-3" />
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </symbol>
    <symbol id="message-circle-dashed-check" viewBox="0 0 24 24">
      <path d="M10.1 2.182a10 10 0 013.8 0" />
      <path d="M13.9 21.818a10 10 0 01-3.8 0" />
      <path d="M17.609 3.72a10 10 0 012.69 2.7" />
      <path d="M2.182 13.9a10 10 0 010-3.8" />
      <path d="M20.28 17.61a10 10 0 01-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 010 3.8" />
      <path d="M3.721 6.391a10 10 0 012.7-2.69" />
      <path d="m6.163 21.117-2.906.85a1 1 0 01-1.236-1.169l.965-2.98" />
      <path d="m16 9-5.5 5.5L8 12" />
    </symbol>
    <symbol id="message-circle-dashed" viewBox="0 0 24 24">
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
      <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
      <path d="M17.609 3.72a10 10 0 0 1 2.69 2.7" />
      <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
      <path d="M20.28 17.61a10 10 0 0 1-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
      <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
      <path d="m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" />
    </symbol>
    <symbol id="message-circle-exclamation-point" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </symbol>
    <symbol id="message-circle-heart" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" />
    </symbol>
    <symbol id="message-circle-more" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </symbol>
    <symbol id="message-circle-off" viewBox="0 0 24 24">
      <path d="m2 2 20 20" />
      <path d="M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" />
      <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
    </symbol>
    <symbol id="message-circle-plus" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </symbol>
    <symbol id="message-circle-question-mark" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="message-circle-reply" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="m10 15-3-3 3-3" />
      <path d="M7 12h8a2 2 0 0 1 2 2v1" />
    </symbol>
    <symbol id="message-circle-text" viewBox="0 0 24 24">
      <path d="M3.086 17.509a2 2 0 00-.094-1.167 10 10 0 114.777 4.719 2 2 0 00-1.099-.092l-3.413.998a1 1 0 01-1.236-1.168z" />
      <path d="M8 12h9" />
      <path d="M8 16h5" />
      <path d="M8 8h7" />
    </symbol>
    <symbol id="message-circle-x" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="message-circle" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </symbol>
    <symbol id="message-square-check" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="m9 11 2 2 4-4" />
    </symbol>
    <symbol id="message-square-code" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="m10 8-3 3 3 3" />
      <path d="m14 14 3-3-3-3" />
    </symbol>
    <symbol id="message-square-dashed" viewBox="0 0 24 24">
      <path d="M14 3h2" />
      <path d="M16 19h-2" />
      <path d="M2 12v-2" />
      <path d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" />
      <path d="M20 19a2 2 0 0 0 2-2v-1" />
      <path d="M22 10v2" />
      <path d="M22 6V5a2 2 0 0 0-2-2" />
      <path d="M4 3a2 2 0 0 0-2 2v1" />
      <path d="M8 19h2" />
      <path d="M8 3h2" />
    </symbol>
    <symbol id="message-square-diff" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M10 15h4" />
      <path d="M10 9h4" />
      <path d="M12 7v4" />
    </symbol>
    <symbol id="message-square-dot" viewBox="0 0 24 24">
      <path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" />
      <circle cx="19" cy="6" r="3" />
    </symbol>
    <symbol id="message-square-exclamation-point" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M12 15h.01" />
      <path d="M12 7v4" />
    </symbol>
    <symbol id="message-square-heart" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5" />
    </symbol>
    <symbol id="message-square-lock" viewBox="0 0 24 24">
      <path d="M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" />
      <path d="M20 15v-2a2 2 0 0 0-4 0v2" />
      <rect x="14" y="15" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="message-square-more" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
    </symbol>
    <symbol id="message-square-off" viewBox="0 0 24 24">
      <path d="M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826" />
      <path d="m2 2 20 20" />
      <path d="M8.656 3H20a2 2 0 0 1 2 2v11.344" />
    </symbol>
    <symbol id="message-square-plus" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M12 8v6" />
      <path d="M9 11h6" />
    </symbol>
    <symbol id="message-square-quote" viewBox="0 0 24 24">
      <path d="M14 14a2 2 0 0 0 2-2V8h-2" />
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M8 14a2 2 0 0 0 2-2V8H8" />
    </symbol>
    <symbol id="message-square-reply" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="m10 8-3 3 3 3" />
      <path d="M17 14v-1a2 2 0 0 0-2-2H7" />
    </symbol>
    <symbol id="message-square-share" viewBox="0 0 24 24">
      <path d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" />
      <path d="M16 3h6v6" />
      <path d="m16 9 6-6" />
    </symbol>
    <symbol id="message-square-text" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M7 11h10" />
      <path d="M7 15h6" />
      <path d="M7 7h8" />
    </symbol>
    <symbol id="message-square-x" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="m14.5 8.5-5 5" />
      <path d="m9.5 8.5 5 5" />
    </symbol>
    <symbol id="message-square" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
    </symbol>
    <symbol id="messages-circle" viewBox="0 0 24 24">
      <path d="M19.95 10.05a7 7 0 011.412 7.872 1 1 0 00-.058.787l.675 2.089a1 1 0 01-1.236 1.168l-2.155-.631a1 1 0 00-.745.06 7 7 0 01-7.793-1.445" />
      <path d="M2.696 12.708a1 1 0 00-.058-.785 7 7 0 113.518 3.473 1 1 0 00-.744-.061l-2.155.63a1 1 0 01-1.236-1.167z" />
    </symbol>
    <symbol id="messages-square" viewBox="0 0 24 24">
      <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
    </symbol>
    <symbol id="metronome" viewBox="0 0 24 24">
      <path d="M12 11.4V9.1" />
      <path d="m12 17 6.59-6.59" />
      <path d="m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" />
      <circle cx="20" cy="9" r="2" />
    </symbol>
    <symbol id="mic-audio-lines" viewBox="0 0 24 24">
      <path d="M10 3v2.341" />
      <path d="M12 17v4" />
      <path d="M14 5v.341" />
      <path d="M18 5v13" />
      <path d="M2 10v3" />
      <path d="M22 10v3" />
      <path d="M6 6v11" />
      <path d="M9 21h6" />
      <rect width="4" height="8" x="10" y="9" rx="2" />
    </symbol>
    <symbol id="mic-off" viewBox="0 0 24 24">
      <path d="M12 19v3" />
      <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
      <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" />
      <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" />
      <path d="m2 2 20 20" />
      <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    </symbol>
    <symbol id="mic-signal" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M18 11a6 6 0 00-3-5.197" />
      <path d="M2 11a10 10 0 015-8.662" />
      <path d="M22 11a10 10 0 00-5-8.662" />
      <path d="M6 11a6 6 0 013-5.197" />
      <path d="M9 21h6" />
      <rect x="10" y="9" width="4" height="8" rx="2" />
    </symbol>
    <symbol id="mic-vocal" viewBox="0 0 24 24">
      <path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
      <path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" />
      <circle cx="16" cy="7" r="5" />
    </symbol>
    <symbol id="mic" viewBox="0 0 24 24">
      <path d="M12 19v3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <rect x="9" y="2" width="6" height="13" rx="3" />
    </symbol>
    <symbol id="microchip" viewBox="0 0 24 24">
      <path d="M10 12h4" />
      <path d="M10 17h4" />
      <path d="M10 7h4" />
      <path d="M18 12h2" />
      <path d="M18 18h2" />
      <path d="M18 6h2" />
      <path d="M4 12h2" />
      <path d="M4 18h2" />
      <path d="M4 6h2" />
      <rect x="6" y="2" width="12" height="20" rx="2" />
    </symbol>
    <symbol id="microscope" viewBox="0 0 24 24">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </symbol>
    <symbol id="microwave" viewBox="0 0 24 24">
      <rect width="20" height="15" x="2" y="4" rx="2" />
      <rect width="8" height="7" x="6" y="8" rx="1" />
      <path d="M18 8v7" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
    </symbol>
    <symbol id="midi-port" viewBox="0 0 24 24">
      <path d="M12 18h.01" />
      <path d="M15 2.458V5a1 1 0 01-1 1h-4a1 1 0 01-1-1V2.458" />
      <path d="M16 16h.01" />
      <path d="M18 12h.01" />
      <path d="M6 12h.01" />
      <path d="M8 16h.01" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="milestone" viewBox="0 0 24 24">
      <path d="M12 13v8" />
      <path d="M12 3v3" />
      <path d="M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
    </symbol>
    <symbol id="milk-off" viewBox="0 0 24 24">
      <path d="M8 2h8" />
      <path d="M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" />
      <path d="M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="milk" viewBox="0 0 24 24">
      <path d="M8 2h8" />
      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </symbol>
    <symbol id="minimize-2" viewBox="0 0 24 24">
      <path d="m14 10 7-7" />
      <path d="M20 10h-6V4" />
      <path d="m3 21 7-7" />
      <path d="M4 14h6v6" />
    </symbol>
    <symbol id="minimize" viewBox="0 0 24 24">
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </symbol>
    <symbol id="minus" viewBox="0 0 24 24">
      <path d="M5 12h14" />
    </symbol>
    <symbol id="mirror-rectangular" viewBox="0 0 24 24">
      <path d="M11 6 8 9" />
      <path d="m16 7-8 8" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </symbol>
    <symbol id="mirror-round" viewBox="0 0 24 24">
      <path d="M10 6.6 8.6 8" />
      <path d="M12 18v4" />
      <path d="M15 7.5 9.5 13" />
      <path d="M7 22h10" />
      <circle cx="12" cy="10" r="8" />
    </symbol>
    <symbol id="monitor-activity" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M18 10h-2.315a1 1 0 00-.932.64l-.787 2.034a.5.5 0 01-.932 0l-2.068-5.348a.5.5 0 00-.932 0l-.787 2.035a1 1 0 01-.932.639H6" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="monitor-check" viewBox="0 0 24 24">
      <path d="m9 10 2 2 4-4" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor-cloud" viewBox="0 0 24 24">
      <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="monitor-cog" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="m14.305 7.53.923-.382" />
      <path d="m15.228 4.852-.923-.383" />
      <path d="m16.852 3.228-.383-.924" />
      <path d="m16.852 8.772-.383.923" />
      <path d="m19.148 3.228.383-.924" />
      <path d="m19.53 9.696-.382-.924" />
      <path d="m20.772 4.852.924-.383" />
      <path d="m20.772 7.148.924.383" />
      <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <path d="M8 21h8" />
      <circle cx="18" cy="6" r="3" />
    </symbol>
    <symbol id="monitor-dot" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" />
      <path d="M8 21h8" />
      <circle cx="19" cy="6" r="3" />
    </symbol>
    <symbol id="monitor-down" viewBox="0 0 24 24">
      <path d="M12 13V7" />
      <path d="m15 10-3 3-3-3" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor-off" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826" />
      <path d="m2 2 20 20" />
      <path d="M8 21h8" />
      <path d="M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" />
    </symbol>
    <symbol id="monitor-pause" viewBox="0 0 24 24">
      <path d="M10 13V7" />
      <path d="M14 13V7" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor-pc" viewBox="0 0 24 24">
      <path d="M10 15H4a2 2 0 01-2-2V7a2 2 0 012-2h6" />
      <path d="M10 19H5" />
      <path d="M14 11h8" />
      <path d="M14 7h8" />
      <path d="M18 17h.01" />
      <path d="M9 19v-4" />
      <rect x="14" y="3" width="8" height="18" rx="1" />
    </symbol>
    <symbol id="monitor-play" viewBox="0 0 24 24">
      <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="monitor-smartphone" viewBox="0 0 24 24">
      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
      <path d="M10 19v-3.96 3.15" />
      <path d="M7 19h5" />
      <rect width="6" height="10" x="16" y="12" rx="2" />
    </symbol>
    <symbol id="monitor-speaker" viewBox="0 0 24 24">
      <path d="M5.5 20H8" />
      <path d="M17 9h.01" />
      <rect width="10" height="16" x="12" y="4" rx="2" />
      <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
      <circle cx="17" cy="15" r="1" />
    </symbol>
    <symbol id="monitor-stop" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <rect x="9" y="7" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="monitor-up" viewBox="0 0 24 24">
      <path d="m9 10 3-3 3 3" />
      <path d="M12 13V7" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor-x" viewBox="0 0 24 24">
      <path d="m14.5 12.5-5-5" />
      <path d="m9.5 12.5 5-5" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor" viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </symbol>
    <symbol id="moon-star" viewBox="0 0 24 24">
      <path d="M18 5h4" />
      <path d="M20 3v4" />
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </symbol>
    <symbol id="moon" viewBox="0 0 24 24">
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </symbol>
    <symbol id="mop-sparkles" viewBox="0 0 24 24">
      <path d="M10 22a3 3 0 01-3-3" />
      <path d="M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a4.501 4.501 0 000 9z" />
      <path d="M10 3H8" />
      <path d="M12.5 11.5 22 2" />
      <path d="M20 13v4" />
      <path d="M22 15h-4" />
      <path d="M4 5v4" />
      <path d="M6 7H2" />
      <path d="m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087" />
      <path d="M9 2v2" />
    </symbol>
    <symbol id="mop" viewBox="0 0 24 24">
      <path d="M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a1 1 0 100 9za3 3 0 01-3-3" />
      <path d="M12.5 11.5 22 2" />
      <path d="m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087" />
    </symbol>
    <symbol id="moped" viewBox="0 0 24 24">
      <path d="m18.16 14.12-2.927-8.447A1 1 0 0 0 14.288 5H13" />
      <path d="M19 10a7 7 0 0 0-6.928 6" />
      <path d="M2 10h5.5a3 3 0 0 1 2.747 1.795l1.669 3.803A1 1 0 0 1 11.01 17H8" />
      <circle cx="19" cy="17" r="3" />
      <circle cx="5" cy="17" r="3" />
    </symbol>
    <symbol id="mosque" viewBox="0 0 24 24">
      <path d="M12.268 2a2 2 0 003.465 2" />
      <path d="M14 5 L14 8" />
      <path d="M16 22v-3a2 2 0 00-4 0v3" />
      <path d="M21 13c-.662-1.497-1.666-2.753-2.9-3.63C16.825 8.47 15.422 8 14 8s-2.826.47-4.1 1.37C8.668 10.248 7.663 11.504 7 13z" />
      <path d="M3 9h4" />
      <path d="M7 22V6a5 5 0 00-2-4 5 5 0 00-2 4v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    </symbol>
    <symbol id="motorbike" viewBox="0 0 24 24">
      <path d="m18 14-1-3" />
      <path d="m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" />
      <path d="M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" />
      <circle cx="19" cy="17" r="3" />
      <circle cx="5" cy="17" r="3" />
    </symbol>
    <symbol id="mound-shovel" viewBox="0 0 24 24">
      <path d="m16 16 1.553-3.106a1 1 0 0 0-.447-1.341l-2.212-1.106a1 1 0 0 0-1.341.447l-1.193 2.387" />
      <path d="m20 3-4 8" />
      <path d="M21 21a1 1 0 0 0 .599-1.801c-1.333-.998-.992-4.21-3.599-4.199-1.271.006-1.5 1-2 1-2.5 0-3.209-4-6.5-4-5.106 0-4 5.107-7.059 7.17A1 1 0 0 0 3 21z" />
      <path d="m22 4-4-2" />
    </symbol>
    <symbol id="mountain-snow" viewBox="0 0 24 24">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
    </symbol>
    <symbol id="mountain" viewBox="0 0 24 24">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </symbol>
    <symbol id="mouse-left" viewBox="0 0 24 24">
      <path d="M12 7.318V10" />
      <path d="M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" />
      <circle cx="7" cy="4" r="2" />
    </symbol>
    <symbol id="mouse-off" viewBox="0 0 24 24">
      <path d="M12 6v.343" />
      <path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
      <path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
      <path d="M22 22 2 2" />
    </symbol>
    <symbol id="mouse-pointer-2-off" viewBox="0 0 24 24">
      <path d="m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551" />
      <path d="M22 2 2 22" />
      <path d="m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" />
    </symbol>
    <symbol id="mouse-pointer-2" viewBox="0 0 24 24">
      <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
    </symbol>
    <symbol id="mouse-pointer-ban" viewBox="0 0 24 24">
      <path d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" />
      <circle cx="16" cy="16" r="6" />
      <path d="m11.8 11.8 8.4 8.4" />
    </symbol>
    <symbol id="mouse-pointer-click" viewBox="0 0 24 24">
      <path d="M14 4.1 12 6" />
      <path d="m5.1 8-2.9-.8" />
      <path d="m6 12-1.9 2" />
      <path d="M7.2 2.2 8 5.1" />
      <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
    </symbol>
    <symbol id="mouse-pointer" viewBox="0 0 24 24">
      <path d="M12.586 12.586 19 19" />
      <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" />
    </symbol>
    <symbol id="mouse-right" viewBox="0 0 24 24">
      <path d="M12 7.318V10" />
      <path d="M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" />
      <circle cx="17" cy="4" r="2" />
    </symbol>
    <symbol id="mouse" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </symbol>
    <symbol id="mouth-off" viewBox="0 0 24 24">
      <path d="M13.074 7.417a2.6 2.6 0 012.989.099c1.829 1.36 3.053 2.076 5.479 3.644a1 1 0 01.308 1.368 11.6 11.6 0 01-1.617 2.05" />
      <path d="M2 12a50.5 50.5 0 0010.99.99" />
      <path d="m2 2 20 20" />
      <path d="M21 11a1 1 0 011 1 51 51 0 01-3.734.61" />
      <path d="M7.695 7.695c-1.7 1.247-2.92 1.967-5.238 3.464a1 1 0 00-.307 1.369 11.6 11.6 0 0014.766 4.388" />
    </symbol>
    <symbol id="mouth" viewBox="0 0 24 24">
      <path d="M2 12a50.5 50.5 0 0020 0 1 1 0 00-1-1" />
      <path d="M2.457 11.159a1 1 0 00-.307 1.369 11.59 11.59 0 0019.7 0 1 1 0 00-.308-1.368c-2.426-1.568-3.65-2.284-5.479-3.644a2.6 2.6 0 00-3.373.208 1 1 0 01-1.38 0 2.62 2.62 0 00-3.373-.208c-1.83 1.36-3.053 2.076-5.48 3.643" />
    </symbol>
    <symbol id="move-3d" viewBox="0 0 24 24">
      <path d="M5 3v16h16" />
      <path d="m5 19 6-6" />
      <path d="m2 6 3-3 3 3" />
      <path d="m18 16 3 3-3 3" />
    </symbol>
    <symbol id="move-diagonal-2" viewBox="0 0 24 24">
      <path d="M19 13v6h-6" />
      <path d="M5 11V5h6" />
      <path d="m5 5 14 14" />
    </symbol>
    <symbol id="move-diagonal" viewBox="0 0 24 24">
      <path d="M11 19H5v-6" />
      <path d="M13 5h6v6" />
      <path d="M19 5 5 19" />
    </symbol>
    <symbol id="move-down-left" viewBox="0 0 24 24">
      <path d="M11 19H5V13" />
      <path d="M19 5L5 19" />
    </symbol>
    <symbol id="move-down-right" viewBox="0 0 24 24">
      <path d="M19 13V19H13" />
      <path d="M5 5L19 19" />
    </symbol>
    <symbol id="move-down" viewBox="0 0 24 24">
      <path d="M8 18L12 22L16 18" />
      <path d="M12 2V22" />
    </symbol>
    <symbol id="move-horizontal" viewBox="0 0 24 24">
      <path d="m18 8 4 4-4 4" />
      <path d="M2 12h20" />
      <path d="m6 8-4 4 4 4" />
    </symbol>
    <symbol id="move-left" viewBox="0 0 24 24">
      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
    </symbol>
    <symbol id="move-right" viewBox="0 0 24 24">
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </symbol>
    <symbol id="move-up-left" viewBox="0 0 24 24">
      <path d="M5 11V5H11" />
      <path d="M5 5L19 19" />
    </symbol>
    <symbol id="move-up-right" viewBox="0 0 24 24">
      <path d="M13 5H19V11" />
      <path d="M19 5L5 19" />
    </symbol>
    <symbol id="move-up" viewBox="0 0 24 24">
      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </symbol>
    <symbol id="move-vertical" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="m8 18 4 4 4-4" />
      <path d="m8 6 4-4 4 4" />
    </symbol>
    <symbol id="move" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="m15 19-3 3-3-3" />
      <path d="m19 9 3 3-3 3" />
      <path d="M2 12h20" />
      <path d="m5 9-3 3 3 3" />
      <path d="m9 5 3-3 3 3" />
    </symbol>
    <symbol id="navigation-2-off" viewBox="0 0 24 24">
      <path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
      <path d="M14.53 8.88 12 2l-1.17 3.17" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="navigation-2" viewBox="0 0 24 24">
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
    </symbol>
    <symbol id="navigation-off" viewBox="0 0 24 24">
      <path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
      <path d="M17.39 11.73 22 2l-9.73 4.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="navigation" viewBox="0 0 24 24">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </symbol>
    <symbol id="nepali-rupee" viewBox="0 0 24 24">
      <path d="m14 20-8-8h4c5.333 0 5.333-8 0-8" />
      <path d="M14 8c4.078 0 5.038 4.678 2.88 6.88" />
      <path d="M6 4h12" />
    </symbol>
    <symbol id="network" viewBox="0 0 24 24">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </symbol>
    <symbol id="newspaper" viewBox="0 0 24 24">
      <path d="M15 18h-5" />
      <path d="M18 14h-8" />
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
      <rect width="8" height="4" x="10" y="6" rx="1" />
    </symbol>
    <symbol id="nfc" viewBox="0 0 24 24">
      <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
      <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
      <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
    </symbol>
    <symbol id="non-binary" viewBox="0 0 24 24">
      <path d="M12 2v10" />
      <path d="m8.5 4 7 4" />
      <path d="m8.5 8 7-4" />
      <circle cx="12" cy="17" r="5" />
    </symbol>
    <symbol id="notebook-dot" viewBox="0 0 24 24">
      <path d="M16 11.75V22" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <path d="M2 6h4" />
      <path d="M20 11.75V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.65" />
      <circle cx="18" cy="5" r="3" />
    </symbol>
    <symbol id="notebook-pen" viewBox="0 0 24 24">
      <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    </symbol>
    <symbol id="notebook-tabs" viewBox="0 0 24 24">
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M15 2v20" />
      <path d="M15 7h5" />
      <path d="M15 12h5" />
      <path d="M15 17h5" />
    </symbol>
    <symbol id="notebook-text" viewBox="0 0 24 24">
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9.5 8h5" />
      <path d="M9.5 12H16" />
      <path d="M9.5 16H14" />
    </symbol>
    <symbol id="notebook" viewBox="0 0 24 24">
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </symbol>
    <symbol id="notepad-text-dashed" viewBox="0 0 24 24">
      <path d="M8 2v4" />
      <path d="M12 2v4" />
      <path d="M16 2v4" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 12v2" />
      <path d="M20 18v2a2 2 0 0 1-2 2h-1" />
      <path d="M13 22h-2" />
      <path d="M7 22H6a2 2 0 0 1-2-2v-2" />
      <path d="M4 14v-2" />
      <path d="M4 8V6a2 2 0 0 1 2-2h2" />
      <path d="M8 10h6" />
      <path d="M8 14h8" />
      <path d="M8 18h5" />
    </symbol>
    <symbol id="notepad-text" viewBox="0 0 24 24">
      <path d="M8 2v4" />
      <path d="M12 2v4" />
      <path d="M16 2v4" />
      <rect width="16" height="18" x="4" y="4" rx="2" />
      <path d="M8 10h6" />
      <path d="M8 14h8" />
      <path d="M8 18h5" />
    </symbol>
    <symbol id="numbers" viewBox="0 0 24 24">
      <path d="m10 4 2.6-1.95a.25.25 0 01.4.2V10" />
      <path d="M16 14.535A4 4 0 0118 14a2 2 0 010 4 2 2 0 010 4 4 4 0 01-2-.535" />
      <path d="M8 22H4.5a.5.5 0 01-.5-.5c0-2.68 4-2.932 4-5.5a2 2 0 00-2-2 2.5 2.5 0 00-2 1" />
    </symbol>
    <symbol id="nut-off" viewBox="0 0 24 24">
      <path d="M11.868 11.868a.88.88 0 01-.488.252c-1.78.28-3.54-.17-4.88-.62 0 1.272-.229 3.578-.653 5.347a10 10 0 01-.417 1.363c-.21.52-.82.55-1.17.12a10 10 0 01.677-13.393" />
      <path d="M12.14 6.485a27.4 27.4 0 004.707-.638L20 9a7.23 7.23 0 011.706 7.05" />
      <path d="m2 2 20 20" />
      <path d="M20.707 20.707A1 1 0 0120 21h-1c-1.069 0-1.648.242-2.485.552A7.2 7.2 0 019.002 20l-3.155-3.153" />
      <path d="M8.356 2.7a10 10 0 019.974 1.56c.43.35.4.97-.12 1.17a10 10 0 01-1.363.417" />
    </symbol>
    <symbol id="nut" viewBox="0 0 24 24">
      <path d="M16.847 5.847 20 9a7.23 7.23 0 011.551 7.516C21.241 17.352 21 17.932 21 19v1a1 1 0 01-1 1h-1c-1.069 0-1.648.242-2.485.552A7.2 7.2 0 019.002 20l-3.155-3.153" />
      <path d="M18.21 5.43c-1.71.69-5.07 1.07-6.71 1.07.46 1.38.91 2.74.61 4.88a.88.88 0 01-.73.74c-1.78.28-3.54-.17-4.88-.62 0 1.64-.38 5-1.07 6.71-.21.52-.82.55-1.17.12A10 10 0 0118.33 4.26c.43.35.4.97-.12 1.17" />
      <path d="M4.93 4.93 3 3a.7.7 0 010-1" />
    </symbol>
    <symbol id="octagon-exclamation-point" viewBox="0 0 24 24">
      <path d="M12 16h.01" />
      <path d="M12 8v4" />
      <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
    </symbol>
    <symbol id="octagon-minus" viewBox="0 0 24 24">
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="octagon-pause" viewBox="0 0 24 24">
      <path d="M10 15V9" />
      <path d="M14 15V9" />
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
    </symbol>
    <symbol id="octagon-x" viewBox="0 0 24 24">
      <path d="m15 9-6 6" />
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="octagon" viewBox="0 0 24 24">
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
    </symbol>
    <symbol id="omega" viewBox="0 0 24 24">
      <path d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21" />
    </symbol>
    <symbol id="opacity" viewBox="0 0 24 24">
      <path d="M12 3h.01" />
      <path d="M12 9h.01" />
      <path d="M15 6h.01" />
      <path d="M18 3h.01" />
      <path d="M21 6v13a2 2 0 0 1-2 2H6" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
      <path d="M3 6h.01" />
      <path d="M6 15h.01" />
      <path d="M6 3h.01" />
      <path d="M6 9h.01" />
      <path d="M9 12h.01" />
      <path d="M9 6h.01" />
    </symbol>
    <symbol id="option" viewBox="0 0 24 24">
      <path d="M14 3h7" />
      <path d="M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21" />
    </symbol>
    <symbol id="orbit" viewBox="0 0 24 24">
      <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
      <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </symbol>
    <symbol id="origami" viewBox="0 0 24 24">
      <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" />
      <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" />
      <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />
    </symbol>
    <symbol id="package-2" viewBox="0 0 24 24">
      <path d="M12 3v6" />
      <path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" />
      <path d="M3.054 9.013h17.893" />
    </symbol>
    <symbol id="package-check" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="m16 17 2 2 4-4" />
      <path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
    </symbol>
    <symbol id="package-minus" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="M16 17h6" />
      <path d="M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
    </symbol>
    <symbol id="package-open" viewBox="0 0 24 24">
      <path d="M12 22v-9" />
      <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
      <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
      <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
    </symbol>
    <symbol id="package-pen" viewBox="0 0 24 24">
      <path d="M12 14.34V12l8.71-5" />
      <path d="M16.511 21.141a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 1 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .599.626z" />
      <path d="M21 9.114V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l5.087 2.907" />
      <path d="M3.29 7 12 12" />
      <path d="m7.5 4.27 9 5.15" />
    </symbol>
    <symbol id="package-plus" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="M16 17h6" />
      <path d="M19 14v6" />
      <path d="M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
    </symbol>
    <symbol id="package-question-mark" viewBox="0 0 24 24">
      <path d="M12 22V12l8.71-5" />
      <path d="M21 10.342V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2.33-1.332" />
      <path d="M3.29 7 12 12" />
      <path d="m7.5 4.27 9 5.15" />
      <path d="M19 18.5c.5-1 2-1 2-2.5a2 2 0 00-2-2 2.5 2.5 0 00-2 1" />
      <path d="M19 22h.01" />
    </symbol>
    <symbol id="package-search" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="M20.27 18.27 22 20" />
      <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
      <circle cx="18.5" cy="16.5" r="2.5" />
    </symbol>
    <symbol id="package-x" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="m16.5 14.5 5 5" />
      <path d="m16.5 19.5 5-5" />
      <path d="M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
    </symbol>
    <symbol id="package" viewBox="0 0 24 24">
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
      <path d="M12 22V12" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <path d="m7.5 4.27 9 5.15" />
    </symbol>
    <symbol id="paint-bucket" viewBox="0 0 24 24">
      <path d="M11 7 6 2" />
      <path d="M18.992 12H2.041" />
      <path d="M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595" />
      <path d="m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33" />
    </symbol>
    <symbol id="paint-roller" viewBox="0 0 24 24">
      <rect width="16" height="6" x="2" y="2" rx="2" />
      <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect width="4" height="6" x="8" y="16" rx="1" />
    </symbol>
    <symbol id="paintbrush-vertical" viewBox="0 0 24 24">
      <path d="M10 2v2" />
      <path d="M14 2v4" />
      <path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" />
      <path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" />
    </symbol>
    <symbol id="paintbrush" viewBox="0 0 24 24">
      <path d="m14.622 17.897-10.68-2.913" />
      <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
      <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
    </symbol>
    <symbol id="palette" viewBox="0 0 24 24">
      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="panda" viewBox="0 0 24 24">
      <path d="M11.25 17.25h1.5L12 18z" />
      <path d="m15 12 2 2" />
      <path d="M17.902 6.599a8 8 0 0 0-.5-.5" />
      <path d="M2 14.5C2 19.47 6.48 22 12 22s10-2.53 10-7.5a10 10 0 0 0-1.3-4.83 4.5 4.5 0 1 0-7.05-5.5 8 8 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5A10 10 0 0 0 2 14.5" />
      <path d="M6.099 6.599a8 8 0 0 1 .5-.5" />
      <path d="m9 12-2 2" />
    </symbol>
    <symbol id="panel-bottom-close" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h18" />
      <path d="m15 8-3 3-3-3" />
    </symbol>
    <symbol id="panel-bottom-dashed" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M14 15h1" />
      <path d="M19 15h2" />
      <path d="M3 15h2" />
      <path d="M9 15h1" />
    </symbol>
    <symbol id="panel-bottom-open" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h18" />
      <path d="m9 10 3-3 3 3" />
    </symbol>
    <symbol id="panel-bottom" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h18" />
    </symbol>
    <symbol id="panel-left-close" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="m16 15-3-3 3-3" />
    </symbol>
    <symbol id="panel-left-dashed" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 14v1" />
      <path d="M9 19v2" />
      <path d="M9 3v2" />
      <path d="M9 9v1" />
    </symbol>
    <symbol id="panel-left-open" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="m14 9 3 3-3 3" />
    </symbol>
    <symbol id="panel-left-right-dashed" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M15 15v-1" />
      <path d="M15 21v-2" />
      <path d="M15 5V3" />
      <path d="M9 10V9" />
      <path d="M9 15v-1" />
      <path d="M9 21v-2" />
      <path d="M9 5V3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="panel-left" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
    </symbol>
    <symbol id="panel-right-close" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
      <path d="m8 9 3 3-3 3" />
    </symbol>
    <symbol id="panel-right-dashed" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 14v1" />
      <path d="M15 19v2" />
      <path d="M15 3v2" />
      <path d="M15 9v1" />
    </symbol>
    <symbol id="panel-right-open" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
      <path d="m10 15-3-3 3-3" />
    </symbol>
    <symbol id="panel-right" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
    </symbol>
    <symbol id="panel-top-bottom-dashed" viewBox="0 0 24 24">
      <path d="M14 15h1" />
      <path d="M14 9h1" />
      <path d="M19 15h2" />
      <path d="M19 9h2" />
      <path d="M3 15h2" />
      <path d="M3 9h2" />
      <path d="M9 15h1" />
      <path d="M9 9h1" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="panel-top-close" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="m9 16 3-3 3 3" />
    </symbol>
    <symbol id="panel-top-dashed" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M14 9h1" />
      <path d="M19 9h2" />
      <path d="M3 9h2" />
      <path d="M9 9h1" />
    </symbol>
    <symbol id="panel-top-open" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="m15 14-3 3-3-3" />
    </symbol>
    <symbol id="panel-top" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
    </symbol>
    <symbol id="panels-left-bottom" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="M9 15h12" />
    </symbol>
    <symbol id="panels-right-bottom" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h12" />
      <path d="M15 3v18" />
    </symbol>
    <symbol id="panels-top-left" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </symbol>
    <symbol id="paper-bag" viewBox="0 0 24 24">
      <path d="M5.364 3.848C4 6 3 9.652 3 12.652V19a2 2 0 002 2h14a2 2 0 002-2v-5c0-2.334-1.816-4.668-2.622-7.002" />
      <path d="M7 3h11.379a2 2 0 011.789 1.106l.723 1.447A1 1 0 0119.997 7h-8.525a2 2 0 01-1.789-1.106L8.79 4.105a2 2 0 10-3.579 1.789l2.261 4.522A5 5 0 018 12.652V21" />
    </symbol>
    <symbol id="paperclip" viewBox="0 0 24 24">
      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
    </symbol>
    <symbol id="parasol" viewBox="0 0 24 24">
      <path d="M12.5 11.134 18.196 21" />
      <path d="M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413" />
      <path d="M21 21H3" />
    </symbol>
    <symbol id="parentheses" viewBox="0 0 24 24">
      <path d="M8 21s-4-3-4-9 4-9 4-9" />
      <path d="M16 3s4 3 4 9-4 9-4 9" />
    </symbol>
    <symbol id="park" viewBox="0 0 24 24">
      <path d="M12 18h10" />
      <path d="M13.248 9.998A4.5 4.5 0 0 0 11.75 8.6V8a1 1 0 0 0-7.5 0 4.9 4.9 0 0 0 2.25 9H8" />
      <path d="m15 14-2 6" />
      <path d="m19 14 2 6" />
      <path d="M21 14h-8" />
      <path d="M8 20v-5.922a2 2 0 0 0-.586-1.414L6.5 11.75" />
      <path d="M9.205 12.795 8 14" />
      <circle cx="19" cy="6" r="2" />
    </symbol>
    <symbol id="parking-meter" viewBox="0 0 24 24">
      <path d="M11 15h2" />
      <path d="M12 12v3" />
      <path d="M12 19v3" />
      <path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" />
      <path d="M9 9a3 3 0 1 1 6 0" />
    </symbol>
    <symbol id="party-popper" viewBox="0 0 24 24">
      <path d="M5.8 11.3 2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
    </symbol>
    <symbol id="pause" viewBox="0 0 24 24">
      <rect x="14" y="3" width="5" height="18" rx="1" />
      <rect x="5" y="3" width="5" height="18" rx="1" />
    </symbol>
    <symbol id="paw-print" viewBox="0 0 24 24">
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </symbol>
    <symbol id="pc-case" viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" />
      <path d="M15 14h.01" />
      <path d="M9 6h6" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="pen-line" viewBox="0 0 24 24">
      <path d="M13 21h8" />
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </symbol>
    <symbol id="pen-off" viewBox="0 0 24 24">
      <path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
      <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="pen-tool" viewBox="0 0 24 24">
      <path d="m18 13-.654-4.736a4 4 0 00-2.756-3.266l-9.163-2.9a2 2 0 00-2.017.493l-.82.819a2 2 0 00-.492 2.017l2.9 9.163a4 4 0 003.266 2.756L13 18" />
      <path d="M18.648 12.352a1.205 1.205 0 011.704 0l1.296 1.296a1.205 1.205 0 010 1.704l-6.296 6.296a1.205 1.205 0 01-1.704 0l-1.296-1.296a1.205 1.205 0 010-1.704z" />
      <path d="m3 3 6.586 6.586" />
      <circle cx="11" cy="11" r="2" />
    </symbol>
    <symbol id="pen" viewBox="0 0 24 24">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </symbol>
    <symbol id="pencil-line" viewBox="0 0 24 24">
      <path d="M13 21h8" />
      <path d="m15 5 4 4" />
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </symbol>
    <symbol id="pencil-off" viewBox="0 0 24 24">
      <path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
      <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
      <path d="m15 5 4 4" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="pencil-ruler" viewBox="0 0 24 24">
      <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
      <path d="m8 6 2-2" />
      <path d="m18 16 2-2" />
      <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </symbol>
    <symbol id="pencil-sparkles" viewBox="0 0 24 24">
      <path d="M10 3H8" />
      <path d="m15.007 5.008 3.987 3.986" />
      <path d="M20 15v4" />
      <path d="M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="M22 17h-4" />
      <path d="M4 5v4" />
      <path d="M6 7H2" />
      <path d="M9 2v2" />
    </symbol>
    <symbol id="pencil" viewBox="0 0 24 24">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </symbol>
    <symbol id="pentagon" viewBox="0 0 24 24">
      <path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" />
    </symbol>
    <symbol id="percent" viewBox="0 0 24 24">
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </symbol>
    <symbol id="perfume-bottle" viewBox="0 0 24 24">
      <path d="M 5 22 H 11.072" />
      <path d="M15 5 C 23 4 23.328 12.676 20 14.536" />
      <path d="M15.802 10.308 C 14.776 9.465 14 8.496 14 7" />
      <path d="M2 2h.01" />
      <path d="M2 7h.01" />
      <path d="M5 4.5h.01" />
      <path d="M8.127 22 A 8 8 0 0 1 4 15 3 3 0 0 1 4.879 12.879C 6.879 10.879 10 10 10 7" />
      <circle cx="18" cy="18" r="4" />
      <rect x="9" y="2" width="6" height="5" rx="1" />
    </symbol>
    <symbol id="person-standing" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </symbol>
    <symbol id="phi" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <circle cx="12" cy="12" r="7" />
    </symbol>
    <symbol id="philippine-peso" viewBox="0 0 24 24">
      <path d="M4 12h16" />
      <path d="M4 8h16" />
      <path d="M6 20V5a1 1 0 011-1h5a6 6 0 010 12H6" />
    </symbol>
    <symbol id="phone-call" viewBox="0 0 24 24">
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone-forwarded" viewBox="0 0 24 24">
      <path d="M14 6h8" />
      <path d="m18 2 4 4-4 4" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone-incoming" viewBox="0 0 24 24">
      <path d="M16 2v6h6" />
      <path d="m22 2-6 6" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone-log" viewBox="0 0 24 24">
      <path d="M13.832 16.568a1 1 0 001.213-.303l.355-.465A2 2 0 0117 15h3a2 2 0 012 2v3a2 2 0 01-2 2A18 18 0 012 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-.8 1.6l-.468.351a1 1 0 00-.292 1.233 14 14 0 006.392 6.384" />
      <path d="M14.396 4.171h7.171" />
      <path d="M17.343 8.17h4.224" />
    </symbol>
    <symbol id="phone-missed" viewBox="0 0 24 24">
      <path d="m16 2 6 6" />
      <path d="m22 2-6 6" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone-off" viewBox="0 0 24 24">
      <path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" />
      <path d="M22 2 2 22" />
      <path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" />
    </symbol>
    <symbol id="phone-outgoing" viewBox="0 0 24 24">
      <path d="m16 8 6-6" />
      <path d="M22 8V2h-6" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone" viewBox="0 0 24 24">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="pi" viewBox="0 0 24 24">
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </symbol>
    <symbol id="piano" viewBox="0 0 24 24">
      <path d="M10 13v4" />
      <path d="M14 13v4" />
      <path d="M18 13v4" />
      <path d="M2 13h20" />
      <path d="M22 11.5A3.5 3.5 0 0018.5 8a3.52 3.52 0 01-3.173-2A7 7 0 002 9v10a2 2 0 002 2h16a2 2 0 002-2z" />
      <path d="M6 13v4" />
    </symbol>
    <symbol id="pickaxe" viewBox="0 0 24 24">
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" />
      <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" />
      <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" />
      <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" />
    </symbol>
    <symbol id="picture-in-picture-2" viewBox="0 0 24 24">
      <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
      <rect width="10" height="7" x="12" y="13" rx="2" />
    </symbol>
    <symbol id="picture-in-picture" viewBox="0 0 24 24">
      <path d="M2 10h6V4" />
      <path d="m2 4 6 6" />
      <path d="M21 10V7a2 2 0 0 0-2-2h-7" />
      <path d="M3 14v2a2 2 0 0 0 2 2h3" />
      <rect x="12" y="14" width="10" height="7" rx="1" />
    </symbol>
    <symbol id="piggy-bank" viewBox="0 0 24 24">
      <path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" />
      <path d="M16 10h.01" />
      <path d="M2 8v1a2 2 0 0 0 2 2h1" />
    </symbol>
    <symbol id="pilcrow-left" viewBox="0 0 24 24">
      <path d="M14 3v11" />
      <path d="M14 9h-3a3 3 0 0 1 0-6h9" />
      <path d="M18 3v11" />
      <path d="M22 18H2l4-4" />
      <path d="m6 22-4-4" />
    </symbol>
    <symbol id="pilcrow-right" viewBox="0 0 24 24">
      <path d="M10 3v11" />
      <path d="M10 9H7a1 1 0 0 1 0-6h8" />
      <path d="M14 3v11" />
      <path d="m18 14 4 4H2" />
      <path d="m22 18-4 4" />
    </symbol>
    <symbol id="pilcrow" viewBox="0 0 24 24">
      <path d="M13 4v16" />
      <path d="M17 4v16" />
      <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </symbol>
    <symbol id="pill-bottle" viewBox="0 0 24 24">
      <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
      <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <rect width="16" height="5" x="4" y="2" rx="1" />
    </symbol>
    <symbol id="pill" viewBox="0 0 24 24">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </symbol>
    <symbol id="pin-off" viewBox="0 0 24 24">
      <path d="M12 17v5" />
      <path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" />
      <path d="m2 2 20 20" />
      <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" />
    </symbol>
    <symbol id="pin" viewBox="0 0 24 24">
      <path d="M12 17v5" />
      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
    </symbol>
    <symbol id="pipette" viewBox="0 0 24 24">
      <path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" />
      <path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" />
      <path d="m2 22 .414-.414" />
    </symbol>
    <symbol id="pizza" viewBox="0 0 24 24">
      <path d="m12 14-1 1" />
      <path d="m13.75 18.25-1.25 1.42" />
      <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
      <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
      <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
    </symbol>
    <symbol id="plane-landing" viewBox="0 0 24 24">
      <path d="M2 22h20" />
      <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
    </symbol>
    <symbol id="plane-takeoff" viewBox="0 0 24 24">
      <path d="M2 22h20" />
      <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
    </symbol>
    <symbol id="plane" viewBox="0 0 24 24">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </symbol>
    <symbol id="plant-pot" viewBox="0 0 24 24">
      <path d="M14 8.536V6a4 4 0 014-4h1.5a.5.5 0 01.5.5V4a4 4 0 01-4 4 4 4 0 00-4 4 5 5 0 01-8-4 5 5 0 018 4c0 2 1 3 1 5" />
      <path d="m18 17-1.085 3.58A2 2 0 0115 22H9.002a2 2 0 01-1.913-1.418L6 17" />
      <path d="M5 17h14" />
    </symbol>
    <symbol id="play-off" viewBox="0 0 24 24">
      <path d="m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23" />
      <path d="m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="play" viewBox="0 0 24 24">
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </symbol>
    <symbol id="playing-card" viewBox="0 0 24 24">
      <path d="M12.832 8.445a1 1 0 00-1.589-.098l-2.075 3.098a1 1 0 000 1.11l2 3a1 1 0 001.664 0l2-3a1 1 0 000-1.11z" />
      <rect x="5" y="2" width="14" height="20" rx="2" />
    </symbol>
    <symbol id="playing-cards-fan" viewBox="0 0 24 24">
      <path d="M12.65 7.65a2 2 0 012.629-1.046l5.51 2.374a2 2 0 011.046 2.628l-3.957 9.184a2 2 0 01-2.628 1.046l-5.51-2.374a2 2 0 01-1.046-2.628z" />
      <path d="M18 7.777V4a2 2 0 00-2-2h-6a2 2 0 00-2 2v10a2 2 0 001.137 1.805" />
      <path d="m8 4.389-4.364.809a2 2 0 00-1.602 2.33l1.822 9.833a2 2 0 002.331 1.602l2.542-.47" />
    </symbol>
    <symbol id="playing-cards" viewBox="0 0 24 24">
      <path d="M14.832 8.445a1 1 0 00-1.589-.098l-2.075 3.098a1 1 0 000 1.11l2 3a1 1 0 001.664 0l2-3a1 1 0 000-1.11z" />
      <path d="m7.18 20.827-5-11a2 2 0 01.993-2.647L7 5.44" />
      <rect x="7" y="2" width="14" height="20" rx="2" />
    </symbol>
    <symbol id="plug-2" viewBox="0 0 24 24">
      <path d="M9 2v6" />
      <path d="M15 2v6" />
      <path d="M12 17v5" />
      <path d="M5 8h14" />
      <path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
    </symbol>
    <symbol id="plug-zap" viewBox="0 0 24 24">
      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
      <path d="m2 22 3-3" />
      <path d="M7.5 13.5 10 11" />
      <path d="M10.5 16.5 13 14" />
      <path d="m18 3-4 4h6l-4 4" />
    </symbol>
    <symbol id="plug" viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M15 8V2" />
      <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
      <path d="M9 8V2" />
    </symbol>
    <symbol id="plus" viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </symbol>
    <symbol id="pocket-knife" viewBox="0 0 24 24">
      <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
      <path d="M18 6h.01" />
      <path d="M6 18h.01" />
      <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
      <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
    </symbol>
    <symbol id="podium" viewBox="0 0 24 24">
      <path d="M12 6V2h-1" />
      <path d="M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1" />
      <path d="M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10" />
    </symbol>
    <symbol id="pointer-off" viewBox="0 0 24 24">
      <path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" />
      <path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" />
      <path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" />
      <path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" />
      <path d="M6 6v8" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="pointer" viewBox="0 0 24 24">
      <path d="M22 14a8 8 0 0 1-8 8" />
      <path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
      <path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </symbol>
    <symbol id="popcorn" viewBox="0 0 24 24">
      <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
      <path d="M10 22 9 8" />
      <path d="m14 22 1-14" />
      <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
    </symbol>
    <symbol id="popsicle" viewBox="0 0 24 24">
      <path d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" />
      <path d="m22 22-5.5-5.5" />
    </symbol>
    <symbol id="pound-sterling" viewBox="0 0 24 24">
      <path d="M17 18a2 2 0 01-2 2H5a3 3 0 003-3V8a4 4 0 018 0" />
      <path d="M6 12h7" />
    </symbol>
    <symbol id="power-off" viewBox="0 0 24 24">
      <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
      <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
      <path d="M12 2v4" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="power" viewBox="0 0 24 24">
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </symbol>
    <symbol id="presentation" viewBox="0 0 24 24">
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </symbol>
    <symbol id="printer-3d" viewBox="0 0 24 24">
      <path d="M10 11v1" />
      <path d="M12 8h8" />
      <path d="M15 20v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3" />
      <path d="M4 20h16" />
      <path d="M4 22V4a2 2 0 012-2h12a2 2 0 012 2v18" />
      <path d="M4 8h4" />
      <path d="M8.635 10.093A2 2 0 018 8.631V7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-.293.707l-1 1a1 1 0 01-1.414 0z" />
    </symbol>
    <symbol id="printer-check" viewBox="0 0 24 24">
      <path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" />
      <path d="m16 19 2 2 4-4" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
    </symbol>
    <symbol id="printer-x" viewBox="0 0 24 24">
      <path d="M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377" />
      <path d="m16.5 16.5 5 5" />
      <path d="m16.5 21.5 5-5" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
    </symbol>
    <symbol id="printer" viewBox="0 0 24 24">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </symbol>
    <symbol id="projector" viewBox="0 0 24 24">
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </symbol>
    <symbol id="proportions" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M12 9v11" />
      <path d="M2 9h13a2 2 0 0 1 2 2v9" />
    </symbol>
    <symbol id="puzzle" viewBox="0 0 24 24">
      <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
    </symbol>
    <symbol id="pyramid" viewBox="0 0 24 24">
      <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
      <path d="M12 2v20" />
    </symbol>
    <symbol id="qr-code" viewBox="0 0 24 24">
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </symbol>
    <symbol id="question-mark" viewBox="0 0 24 24">
      <path d="M12 15c0-2.48 5-2.99 5-6.5a5 4.5 0 00-10 0" />
      <path d="M12 20h.01" />
    </symbol>
    <symbol id="quote" viewBox="0 0 24 24">
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </symbol>
    <symbol id="rabbit" viewBox="0 0 24 24">
      <path d="M13 16a3 3 0 0 1 2.24 5" />
      <path d="M18 12h.01" />
      <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
      <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
      <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
    </symbol>
    <symbol id="radar" viewBox="0 0 24 24">
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
      <path d="M4 6h.01" />
      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
      <path d="M12 18h.01" />
      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
      <circle cx="12" cy="12" r="2" />
      <path d="m13.41 10.59 5.66-5.66" />
    </symbol>
    <symbol id="radiation" viewBox="0 0 24 24">
      <path d="M12 12h.01" />
      <path d="M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z" />
      <path d="M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z" />
      <path d="M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z" />
    </symbol>
    <symbol id="radical" viewBox="0 0 24 24">
      <path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" />
    </symbol>
    <symbol id="radio-off" viewBox="0 0 24 24">
      <path d="M13.414 13.414a2 2 0 1 1-2.828-2.828" />
      <path d="M16.247 7.761a6 6 0 0 1 1.744 4.572" />
      <path d="M19.075 4.933a10 10 0 0 1 2.234 10.72" />
      <path d="m2 2 20 20" />
      <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
      <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
    </symbol>
    <symbol id="radio-receiver" viewBox="0 0 24 24">
      <path d="M5 16v2" />
      <path d="M19 16v2" />
      <rect width="20" height="8" x="2" y="8" rx="2" />
      <path d="M18 12h.01" />
    </symbol>
    <symbol id="radio-tower" viewBox="0 0 24 24">
      <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
      <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
      <circle cx="12" cy="9" r="2" />
      <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
      <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
      <path d="M9.5 18h5" />
      <path d="m8 22 4-11 4 11" />
    </symbol>
    <symbol id="radio" viewBox="0 0 24 24">
      <path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
      <path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
      <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
      <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="radius" viewBox="0 0 24 24">
      <path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
      <circle cx="19" cy="19" r="2" />
      <path d="m13.41 13.41 4.18 4.18" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="rainbow" viewBox="0 0 24 24">
      <path d="M22 17a10 10 0 0 0-20 0" />
      <path d="M6 17a6 6 0 0 1 12 0" />
      <path d="M10 17a2 2 0 0 1 4 0" />
    </symbol>
    <symbol id="rat" viewBox="0 0 24 24">
      <path d="M13 22H4a2 2 0 0 1 0-4h12" />
      <path d="M13.236 18a3 3 0 0 0-2.2-5" />
      <path d="M16 9h.01" />
      <path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" />
      <path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" />
    </symbol>
    <symbol id="ratio" viewBox="0 0 24 24">
      <rect width="12" height="20" x="6" y="2" rx="2" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="receipt-cent" viewBox="0 0 24 24">
      <path d="M12 7v10" />
      <path d="M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="receipt-euro" viewBox="0 0 24 24">
      <path d="M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 12h5" />
    </symbol>
    <symbol id="receipt-indian-rupee" viewBox="0 0 24 24">
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 11h8" />
      <path d="M8 7h8" />
      <path d="M9 7a4 4 0 0 1 0 8H8l3 2" />
    </symbol>
    <symbol id="receipt-japanese-yen" viewBox="0 0 24 24">
      <path d="m12 10 3-3" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
      <path d="m9 7 3 3v7" />
    </symbol>
    <symbol id="receipt-pound-sterling" viewBox="0 0 24 24">
      <path d="M10 17V9.5a1 1 0 0 1 5 0" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 13h5" />
      <path d="M8 17h7" />
    </symbol>
    <symbol id="receipt-russian-ruble" viewBox="0 0 24 24">
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 11h5a2 2 0 0 0 0-4h-3v10" />
      <path d="M8 15h5" />
    </symbol>
    <symbol id="receipt-swiss-franc" viewBox="0 0 24 24">
      <path d="M10 11h4" />
      <path d="M10 17V7h5" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 15h5" />
    </symbol>
    <symbol id="receipt-text" viewBox="0 0 24 24">
      <path d="M13 16H8" />
      <path d="M14 8H8" />
      <path d="M16 12H8" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="receipt-turkish-lira" viewBox="0 0 24 24">
      <path d="M10 7v10a5 5 0 0 0 5-5" />
      <path d="m14 8-6 3" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="receipt" viewBox="0 0 24 24">
      <path d="M12 17V7" />
      <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="rectangle-circle" viewBox="0 0 24 24">
      <path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <circle cx="14" cy="12" r="8" />
    </symbol>
    <symbol id="rectangle-ellipsis" viewBox="0 0 24 24">
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 12h.01" />
    </symbol>
    <symbol id="rectangle-goggles" viewBox="0 0 24 24">
      <path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    </symbol>
    <symbol id="rectangle-horizontal" viewBox="0 0 24 24">
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="rectangle-vertical" viewBox="0 0 24 24">
      <rect width="12" height="20" x="6" y="2" rx="2" />
    </symbol>
    <symbol id="recycle" viewBox="0 0 24 24">
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </symbol>
    <symbol id="redo-2" viewBox="0 0 24 24">
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />
    </symbol>
    <symbol id="redo-dot" viewBox="0 0 24 24">
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </symbol>
    <symbol id="redo" viewBox="0 0 24 24">
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </symbol>
    <symbol id="refresh-ccw-dot" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="refresh-ccw" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </symbol>
    <symbol id="refresh-cw-off" viewBox="0 0 24 24">
      <path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" />
      <path d="M8 16H3v5" />
      <path d="M3 12C3 9.51 4 7.26 5.64 5.64" />
      <path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" />
      <path d="M21 12c0 1-.16 1.97-.47 2.87" />
      <path d="M21 3v5h-5" />
      <path d="M22 22 2 2" />
    </symbol>
    <symbol id="refresh-cw" viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </symbol>
    <symbol id="refrigerator" viewBox="0 0 24 24">
      <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
      <path d="M5 10h14" />
      <path d="M15 7v6" />
    </symbol>
    <symbol id="regex" viewBox="0 0 24 24">
      <path d="M17 3v10" />
      <path d="m12.67 5.5 8.66 5" />
      <path d="m12.67 10.5 8.66-5" />
      <path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" />
    </symbol>
    <symbol id="remove-formatting" viewBox="0 0 24 24">
      <path d="M4 7V4h16v3" />
      <path d="M5 20h6" />
      <path d="M13 4 8 20" />
      <path d="m15 15 5 5" />
      <path d="m20 15-5 5" />
    </symbol>
    <symbol id="repeat-1" viewBox="0 0 24 24">
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
      <path d="M11 10h1v4" />
    </symbol>
    <symbol id="repeat-2" viewBox="0 0 24 24">
      <path d="m2 9 3-3 3 3" />
      <path d="M13 18H7a2 2 0 0 1-2-2V6" />
      <path d="m22 15-3 3-3-3" />
      <path d="M11 6h6a2 2 0 0 1 2 2v10" />
    </symbol>
    <symbol id="repeat-off" viewBox="0 0 24 24">
      <path d="M11.656 6H21l-4-4" />
      <path d="M17.898 17.898A4 4 0 0 1 17 18H3l4-4" />
      <path d="m2 2 20 20" />
      <path d="M21 13v1a4 4 0 0 1-.171 1.159" />
      <path d="m21 6-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 3.102-3.898" />
      <path d="m7 22-4-4" />
    </symbol>
    <symbol id="repeat" viewBox="0 0 24 24">
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </symbol>
    <symbol id="replace-all" viewBox="0 0 24 24">
      <path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="M14 4a1 1 0 0 1 1-1" />
      <path d="M15 10a1 1 0 0 1-1-1" />
      <path d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="M21 4a1 1 0 0 0-1-1" />
      <path d="M21 9a1 1 0 0 1-1 1" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5a2 2 0 0 1 2-2h2" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </symbol>
    <symbol id="replace" viewBox="0 0 24 24">
      <path d="M14 4a1 1 0 0 1 1-1" />
      <path d="M15 10a1 1 0 0 1-1-1" />
      <path d="M21 4a1 1 0 0 0-1-1" />
      <path d="M21 9a1 1 0 0 1-1 1" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5a2 2 0 0 1 2-2h2" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </symbol>
    <symbol id="reply-all" viewBox="0 0 24 24">
      <path d="m12 17-5-5 5-5" />
      <path d="M22 18v-2a4 4 0 0 0-4-4H7" />
      <path d="m7 17-5-5 5-5" />
    </symbol>
    <symbol id="reply" viewBox="0 0 24 24">
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
      <path d="m9 17-5-5 5-5" />
    </symbol>
    <symbol id="rewind" viewBox="0 0 24 24">
      <path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
      <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />
    </symbol>
    <symbol id="ribbon" viewBox="0 0 24 24">
      <path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" />
      <path d="m12 18 2.57-3.5" />
      <path d="M6.243 9.016a7 7 0 0 1 11.507-.009" />
      <path d="M9.35 14.53 12 11.22" />
      <path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" />
    </symbol>
    <symbol id="road" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M12 5V3" />
      <path d="M12 9v3" />
      <path d="M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z" />
    </symbol>
    <symbol id="robot-arm" viewBox="0 0 24 24">
      <path d="M12 21 7.5 8.322" />
      <path d="m14 7 1.75-3.767a.5.5 0 0 1 .662-.172L20 5.005" />
      <path d="m20 8.998-3.588 1.944a.5.5 0 0 1-.662-.172L14 7H8" />
      <path d="M3.486 21h10" />
      <path d="M5 21V8.732" />
      <circle cx="6" cy="7" r="2" />
    </symbol>
    <symbol id="robot-vacuum" viewBox="0 0 24 24">
      <path d="M11 17h2" />
      <path d="M12 12h.01" />
      <path d="M17 12a5 5 0 00-10 0" />
      <path d="M19 2v2.8" />
      <path d="M2 5h2.8" />
      <path d="M22 5h-2.8" />
      <path d="M5 2v2.8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="rocket" viewBox="0 0 24 24">
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
      <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
    </symbol>
    <symbol id="rocking-chair" viewBox="0 0 24 24">
      <path d="m15 13 3.708 7.416" />
      <path d="M3 19a15 15 0 0 0 18 0" />
      <path d="m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" />
      <path d="m9 13-3.708 7.416" />
    </symbol>
    <symbol id="roller-coaster" viewBox="0 0 24 24">
      <path d="M6 19V5" />
      <path d="M10 19V6.8" />
      <path d="M14 19v-7.8" />
      <path d="M18 5v4" />
      <path d="M18 19v-6" />
      <path d="M22 19V9" />
      <path d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" />
    </symbol>
    <symbol id="rose" viewBox="0 0 24 24">
      <path d="M17 10h-1a4 4 0 1 1 4-4v.534" />
      <path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" />
      <path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" />
      <path d="M9.77 12C4 15 2 22 2 22" />
      <circle cx="17" cy="8" r="2" />
    </symbol>
    <symbol id="rotate-3d" viewBox="0 0 24 24">
      <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
      <path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796" />
      <path d="M21.79796 11 A 10 5 0 1 0 19 15.57071" />
    </symbol>
    <symbol id="rotate-ccw-clock" viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </symbol>
    <symbol id="rotate-ccw-key" viewBox="0 0 24 24">
      <path d="M12 7v6" />
      <path d="M12 9h2" />
      <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <circle cx="12" cy="15" r="2" />
    </symbol>
    <symbol id="rotate-ccw-square" viewBox="0 0 24 24">
      <path d="M20 9V7a2 2 0 0 0-2-2h-6" />
      <path d="m15 2-3 3 3 3" />
      <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
    </symbol>
    <symbol id="rotate-ccw" viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </symbol>
    <symbol id="rotate-cw-clock" viewBox="0 0 24 24">
      <path d="M12 7v5l4 2" />
      <path d="M16 8h5V3" />
      <path d="m21 8-2.3-2.3A9.7 9.7 0 0012 3a9 9 0 109 9" />
    </symbol>
    <symbol id="rotate-cw-fading-clock" viewBox="0 0 24 24">
      <path d="M12 3a9.75 9.75 0 0 1 6.74 2.74" />
      <path d="M18.74 5.74 21 8" />
      <path d="M21 8V3" />
      <path d="M7.5 19.794c-6-3.464-6-12.124 0-15.588" />
      <path d="M7.5 4.206A9 9 0 0 1 12 3" />
      <path d="M12 7v5l4 2" />
      <path d="M14 20.775A9 9 0 0 1 12 21" />
      <path d="M19 17.656a9 9 0 0 1-1.5 1.456" />
      <path d="M21 12a9 9 0 0 1-.228 2" />
      <path d="M21 8h-5" />
    </symbol>
    <symbol id="rotate-cw-square" viewBox="0 0 24 24">
      <path d="M12 5H6a2 2 0 0 0-2 2v3" />
      <path d="m9 8 3-3-3-3" />
      <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    </symbol>
    <symbol id="rotate-cw" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </symbol>
    <symbol id="route-arrow-right" viewBox="0 0 24 24">
      <path d="m18 22 3-3-3-3" />
      <path d="M9 5h8.5a1 1 0 010 7h-11a1 1 0 000 7H21" />
      <circle cx="6" cy="5" r="3" />
    </symbol>
    <symbol id="route-off" viewBox="0 0 24 24">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
      <path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
      <path d="m2 2 20 20" />
      <path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
      <path d="M15 5h-4.3" />
      <circle cx="18" cy="5" r="3" />
    </symbol>
    <symbol id="route" viewBox="0 0 24 24">
      <path d="M9 5h8.5a1 1 0 010 7h-11a1 1 0 000 7H15" />
      <circle cx="18" cy="19" r="3" />
      <circle cx="6" cy="5" r="3" />
    </symbol>
    <symbol id="router" viewBox="0 0 24 24">
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6.01 18H6" />
      <path d="M10.01 18H10" />
      <path d="M15 10v4" />
      <path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
      <path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
    </symbol>
    <symbol id="rows-2" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 12h18" />
    </symbol>
    <symbol id="rows-3" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 9H3" />
      <path d="M21 15H3" />
    </symbol>
    <symbol id="rows-4" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 7.5H3" />
      <path d="M21 12H3" />
      <path d="M21 16.5H3" />
    </symbol>
    <symbol id="rss" viewBox="0 0 24 24">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </symbol>
    <symbol id="rugby-ball" viewBox="0 0 24 24">
      <path d="m10 10 4 4" />
      <path d="m13 7 4 4" />
      <path d="M15.34 2.138A15 15 0 002.138 15.34c-.357 2.94.004 4.919.805 5.717.798.8 2.778 1.162 5.718.805A15 15 0 0021.862 8.661c.357-2.94-.004-4.92-.805-5.718-.798-.8-2.778-1.162-5.717-.805" />
      <path d="M17 7 7 17" />
      <path d="m7 13 4 4" />
    </symbol>
    <symbol id="ruler-dimension-line" viewBox="0 0 24 24">
      <path d="M10 15v-3" />
      <path d="M14 15v-3" />
      <path d="M18 15v-3" />
      <path d="M2 8V4" />
      <path d="M22 6H2" />
      <path d="M22 8V4" />
      <path d="M6 15v-3" />
      <rect x="2" y="12" width="20" height="8" rx="2" />
    </symbol>
    <symbol id="ruler" viewBox="0 0 24 24">
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </symbol>
    <symbol id="russian-ruble" viewBox="0 0 24 24">
      <path d="M4 16h6" />
      <path d="M7 20V5a1 1 0 011-1h6a4 4 0 010 8H4" />
    </symbol>
    <symbol id="sailboat" viewBox="0 0 24 24">
      <path d="M10 2v15" />
      <path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" />
      <path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" />
    </symbol>
    <symbol id="salad" viewBox="0 0 24 24">
      <path d="M19.496 12a2.5 2.5 0 00.399-2.214A2 2 0 0020.32 6.5 2 2 0 0019 3a2 2 0 00-1.5.68 2 2 0 00-3.287.424 2.5 2.5 0 00-3.189 2.06A3 3 0 0012 12l4-4" />
      <path d="M4 12a1 1 0 00-.99 1.133A9 9 0 0012 21a9 9 0 008.99-7.867A1 1 0 0020 12z" />
      <path d="M7 21h10" />
      <path d="M9.85 6.907A3.5 3.5 0 005.05 12" />
    </symbol>
    <symbol id="sandwich" viewBox="0 0 24 24">
      <path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
      <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
      <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
      <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
      <rect width="20" height="4" x="2" y="11" rx="1" />
    </symbol>
    <symbol id="satellite-dish" viewBox="0 0 24 24">
      <path d="M18 12a6 6 0 00-6-6" />
      <path d="M2.824 10.459a8 8 0 0010.717 10.717c.558-.276.623-1.012.183-1.452l-9.448-9.448c-.44-.44-1.176-.375-1.452.183" />
      <path d="M22 12A10 10 0 0012 2" />
      <path d="m9 15 4-4" />
    </symbol>
    <symbol id="satellite" viewBox="0 0 24 24">
      <path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5" />
      <path d="M16.5 7.5 19 5" />
      <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5" />
      <path d="M9 21a6 6 0 0 0-6-6" />
      <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" />
    </symbol>
    <symbol id="saudi-riyal" viewBox="0 0 24 24">
      <path d="M10 2.977v13.19a2 2 0 01-1.23 1.846L4 19.999" />
      <path d="M14 4v9.523a1 1 0 001.371.928L19 13" />
      <path d="m19 18-5 2" />
      <path d="M19 8 4 14" />
    </symbol>
    <symbol id="save-all" viewBox="0 0 24 24">
      <path d="M10 2v3a1 1 0 0 0 1 1h5" />
      <path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" />
      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
      <path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" />
    </symbol>
    <symbol id="save-check" viewBox="0 0 24 24">
      <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35" />
      <path d="m16 19 2 2 4-4" />
      <path d="M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </symbol>
    <symbol id="save-off" viewBox="0 0 24 24">
      <path d="M13 13H8a1 1 0 0 0-1 1v7" />
      <path d="M14 8h1" />
      <path d="M17 21v-4" />
      <path d="m2 2 20 20" />
      <path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" />
      <path d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" />
    </symbol>
    <symbol id="save-pen" viewBox="0 0 24 24">
      <path d="M13.33 13H8a1 1 0 00-1 1v7" />
      <path d="M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z" />
      <path d="M7 3v4a1 1 0 001 1h7" />
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3" />
    </symbol>
    <symbol id="save-plus" viewBox="0 0 24 24">
      <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12" />
      <path d="M16 13H8a1 1 0 0 0-1 1v7" />
      <path d="M19 22v-6" />
      <path d="M22 19h-6" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </symbol>
    <symbol id="save" viewBox="0 0 24 24">
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </symbol>
    <symbol id="scale-3d" viewBox="0 0 24 24">
      <path d="M5 7v11a1 1 0 0 0 1 1h11" />
      <path d="M5.293 18.707 11 13" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
    </symbol>
    <symbol id="scale" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
      <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
      <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
      <path d="M7 21h10" />
    </symbol>
    <symbol id="scaling" viewBox="0 0 24 24">
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </symbol>
    <symbol id="scan-barcode" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M8 7v10" />
      <path d="M12 7v10" />
      <path d="M17 7v10" />
    </symbol>
    <symbol id="scan-box" viewBox="0 0 24 24">
      <path d="M12 12v5.5" />
      <path d="M17 3h2a2 2 0 012 2v2" />
      <path d="M21 17v2a2 2 0 01-2 2h-2" />
      <path d="M3 7V5a2 2 0 012-2h2" />
      <path d="M7 21H5a2 2 0 01-2-2v-2" />
      <path d="M7.264 9.252 12 12l4.737-2.748" />
      <path d="M7.995 8.514A2 2 0 007 10.244v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0017 13.76v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z" />
    </symbol>
    <symbol id="scan-eye" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
    </symbol>
    <symbol id="scan-face" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </symbol>
    <symbol id="scan-heart" viewBox="0 0 24 24">
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" />
    </symbol>
    <symbol id="scan-line" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </symbol>
    <symbol id="scan-qr-code" viewBox="0 0 24 24">
      <path d="M17 12v4a1 1 0 0 1-1 1h-4" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M17 8V7" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M7 17h.01" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect x="7" y="7" width="5" height="5" rx="1" />
    </symbol>
    <symbol id="scan-search" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
      <path d="m16 16-1.9-1.9" />
    </symbol>
    <symbol id="scan-square" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect width="8" height="8" x="8" y="8" rx="1" />
    </symbol>
    <symbol id="scan-text" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 8h8" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </symbol>
    <symbol id="scan" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </symbol>
    <symbol id="school" viewBox="0 0 24 24">
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M18 4.933V21" />
      <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
      <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
      <path d="M6 4.933V21" />
      <circle cx="12" cy="9" r="2" />
    </symbol>
    <symbol id="scissors-line-dashed" viewBox="0 0 24 24">
      <path d="M5.42 9.42 8 12" />
      <circle cx="4" cy="8" r="2" />
      <path d="m14 6-8.58 8.58" />
      <circle cx="4" cy="16" r="2" />
      <path d="M10.8 14.8 14 18" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </symbol>
    <symbol id="scissors" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </symbol>
    <symbol id="scooter" viewBox="0 0 24 24">
      <path d="M21 4h-3.5l2 11.05" />
      <path d="M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" />
      <circle cx="19.5" cy="17.5" r="2.5" />
      <circle cx="4.5" cy="17.5" r="2.5" />
    </symbol>
    <symbol id="scratch-blocks" viewBox="0 0 24 24">
      <path d="M19 5a2 2 0 012 2v11a2 2 0 01-2 2h-5.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-.707.293H8.414a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 005.586 20H5a2 2 0 01-2-2V5.286c0-.394.11-.785.36-1.09a6 6 0 019.168-.133C12.996 4.6 13.637 5 14.35 5z" />
      <path d="M21 12h-7.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-.707.293H8.414a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 005.586 12H3" />
    </symbol>
    <symbol id="screen-share-off" viewBox="0 0 24 24">
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m22 3-5 5" />
      <path d="m17 3 5 5" />
    </symbol>
    <symbol id="screen-share" viewBox="0 0 24 24">
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m17 8 5-5" />
      <path d="M17 3h5v5" />
    </symbol>
    <symbol id="screw" viewBox="0 0 24 24">
      <path d="M10 9v10" />
      <path d="M14 13v2" />
      <path d="M16.5 10.5 5.706 21.294A2.4 2.4 0 014.002 22H2.5a.5.5 0 01-.5-.5v-1.502a2.4 2.4 0 01.706-1.704L13.5 7.5" />
      <path d="M20.819 11.575a6 6 0 00.969-5.162.6.6 0 00-.981-.219l-.455.454a1.2 1.2 0 01-1.704 0l-1.296-1.296a1.2 1.2 0 010-1.704l.454-.453a.595.595 0 00-.219-.98 6 6 0 00-5.162.967 2 2 0 00-.222 3.019l5.596 5.597a2 2 0 003.02-.222" />
      <path d="M6 13v8" />
    </symbol>
    <symbol id="scroll-text" viewBox="0 0 24 24">
      <path d="M15 12h-5" />
      <path d="M15 8h-5" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </symbol>
    <symbol id="scroll" viewBox="0 0 24 24">
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </symbol>
    <symbol id="search-check" viewBox="0 0 24 24">
      <path d="m8 11 2 2 4-4" />
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </symbol>
    <symbol id="search-code" viewBox="0 0 24 24">
      <path d="m13 13.5 2-2.5-2-2.5" />
      <path d="m21 21-4.3-4.3" />
      <path d="M9 8.5 7 11l2 2.5" />
      <circle cx="11" cy="11" r="8" />
    </symbol>
    <symbol id="search-exclamation-point" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 7v4" />
      <path d="M11 15h.01" />
    </symbol>
    <symbol id="search-slash" viewBox="0 0 24 24">
      <path d="m13.5 8.5-5 5" />
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </symbol>
    <symbol id="search-x" viewBox="0 0 24 24">
      <path d="m13.5 8.5-5 5" />
      <path d="m8.5 8.5 5 5" />
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </symbol>
    <symbol id="search" viewBox="0 0 24 24">
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </symbol>
    <symbol id="section" viewBox="0 0 24 24">
      <path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" />
      <path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" />
    </symbol>
    <symbol id="send-horizontal" viewBox="0 0 24 24">
      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
      <path d="M6 12h16" />
    </symbol>
    <symbol id="send-to-back" viewBox="0 0 24 24">
      <rect x="14" y="14" width="8" height="8" rx="2" />
      <rect x="2" y="2" width="8" height="8" rx="2" />
      <path d="M7 14v1a2 2 0 0 0 2 2h1" />
      <path d="M14 7h1a2 2 0 0 1 2 2v1" />
    </symbol>
    <symbol id="send" viewBox="0 0 24 24">
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </symbol>
    <symbol id="separator-horizontal" viewBox="0 0 24 24">
      <path d="m16 16-4 4-4-4" />
      <path d="M3 12h18" />
      <path d="m8 8 4-4 4 4" />
    </symbol>
    <symbol id="separator-vertical" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <path d="m16 16 4-4-4-4" />
      <path d="m8 8-4 4 4 4" />
    </symbol>
    <symbol id="server-cog" viewBox="0 0 24 24">
      <path d="m10.852 14.772-.383.923" />
      <path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
      <path d="m13.148 9.228.383-.923" />
      <path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" />
      <path d="m14.772 10.852.923-.383" />
      <path d="m14.772 13.148.923.383" />
      <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
      <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
      <path d="M6 18h.01" />
      <path d="M6 6h.01" />
      <path d="m9.228 10.852-.923-.383" />
      <path d="m9.228 13.148-.923.383" />
    </symbol>
    <symbol id="server-crash" viewBox="0 0 24 24">
      <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
      <path d="m13 6-4 6h6l-4 6" />
    </symbol>
    <symbol id="server-nas" viewBox="0 0 24 24">
      <path d="M10 16V8" />
      <path d="M14 16V8" />
      <path d="M18 16V8" />
      <path d="M6 12h.01" />
      <path d="M6 16h.01" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </symbol>
    <symbol id="server-off" viewBox="0 0 24 24">
      <path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
      <path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
      <path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
      <path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
      <path d="M6 18h.01" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="server-plus" viewBox="0 0 24 24">
      <path d="M12.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
      <path d="M16 12h6" />
      <path d="M19 9v6" />
      <path d="M22 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8.5" />
      <path d="M6 18h.01" />
      <path d="M6 6h.01" />
    </symbol>
    <symbol id="server" viewBox="0 0 24 24">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </symbol>
    <symbol id="settings-2" viewBox="0 0 24 24">
      <path d="M14 17H5" />
      <path d="M19 7h-9" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="7" r="3" />
    </symbol>
    <symbol id="settings" viewBox="0 0 24 24">
      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="shapes" viewBox="0 0 24 24">
      <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <circle cx="17.5" cy="17.5" r="3.5" />
    </symbol>
    <symbol id="share-2" viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </symbol>
    <symbol id="share" viewBox="0 0 24 24">
      <path d="M12 2v13" />
      <path d="m16 6-4-4-4 4" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    </symbol>
    <symbol id="sheet" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="3" x2="21" y1="15" y2="15" />
      <line x1="9" x2="9" y1="9" y2="21" />
      <line x1="15" x2="15" y1="9" y2="21" />
    </symbol>
    <symbol id="shell" viewBox="0 0 24 24">
      <path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
    </symbol>
    <symbol id="shelving-unit" viewBox="0 0 24 24">
      <path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      <path d="M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
      <path d="M20 22V2" />
      <path d="M4 12h16" />
      <path d="M4 20h16" />
      <path d="M4 2v20" />
      <path d="M4 4h16" />
    </symbol>
    <symbol id="shield-ban" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m4.243 5.21 14.39 12.472" />
    </symbol>
    <symbol id="shield-check" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </symbol>
    <symbol id="shield-cog-corner" viewBox="0 0 24 24">
      <path d="M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4" />
      <path d="M14.923 16.547 14 16.164" />
      <path d="m14.923 18.843-.923.383" />
      <path d="M16.547 14.923 16.164 14" />
      <path d="m16.547 20.467-.383.924" />
      <path d="m18.843 14.923.383-.923" />
      <path d="m19.225 21.391-.382-.924" />
      <path d="m20.467 16.547.923-.383" />
      <path d="m20.467 18.843.923.383" />
      <circle cx="17.695" cy="17.695" r="3" />
    </symbol>
    <symbol id="shield-cog" viewBox="0 0 24 24">
      <path d="m10.929 14.467-.383.924" />
      <path d="M10.929 8.923 10.546 8" />
      <path d="M13.225 8.923 13.608 8" />
      <path d="m13.607 15.391-.382-.924" />
      <path d="m14.849 10.547.923-.383" />
      <path d="m14.849 12.843.923.383" />
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9.305 10.547-.923-.383" />
      <path d="m9.305 12.843-.923.383" />
      <circle cx="12.077" cy="11.695" r="3" />
    </symbol>
    <symbol id="shield-ellipsis" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </symbol>
    <symbol id="shield-exclamation-point" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </symbol>
    <symbol id="shield-half" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 22V2" />
    </symbol>
    <symbol id="shield-house" viewBox="0 0 24 24">
      <path d="M15 22a1 1 0 01-1-1v-4a1 1 0 01.445-.832l3-2a1 1 0 011.11 0l3 2A1 1 0 0122 17v4a1 1 0 01-1 1z" />
      <path d="M18 22v-3" />
      <path d="M20 10.418V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 4.602 2.67 7.1 6.037 8.603" />
    </symbol>
    <symbol id="shield-keyhole" viewBox="0 0 24 24">
      <path d="M12 13v3" />
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
      <circle cx="12" cy="11" r="2" />
    </symbol>
    <symbol id="shield-lock" viewBox="0 0 24 24">
      <path d="M20 9.807V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 3.88 2.107 6.254 5 7.796" />
      <path d="M19 17v-2a2 2 0 00-4 0v2" />
      <rect x="13" y="17" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="shield-minus" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M9 12h6" />
    </symbol>
    <symbol id="shield-off" viewBox="0 0 24 24">
      <path d="m2 2 20 20" />
      <path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" />
      <path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />
    </symbol>
    <symbol id="shield-plus" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </symbol>
    <symbol id="shield-question-mark" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
      <path d="M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="shield-user" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M6.376 18.91a6 6 0 0 1 11.249.003" />
      <circle cx="12" cy="11" r="4" />
    </symbol>
    <symbol id="shield-x" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m14.5 9.5-5 5" />
      <path d="m9.5 9.5 5 5" />
    </symbol>
    <symbol id="shield" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </symbol>
    <symbol id="ship-cargo" viewBox="0 0 24 24">
      <path d="M12 15v-3" />
      <path d="M12 2v2" />
      <path d="M16.5 12V9a1 1 0 011-1h1a1 1 0 001-1V5a1 1 0 00-1-1h-13a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 011 1v3" />
      <path d="M19.38 19c1.076-1.815 1.636-4.89 1.628-6.008a1 1 0 00-1-.992H3.984a1 1 0 00-1 .984c-.03 1.86.97 5.621 2.826 7.776" />
      <path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </symbol>
    <symbol id="ship-wheel" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v7.5" />
      <path d="m19 5-5.23 5.23" />
      <path d="M22 12h-7.5" />
      <path d="m19 19-5.23-5.23" />
      <path d="M12 14.5V22" />
      <path d="M10.23 13.77 5 19" />
      <path d="M9.5 12H2" />
      <path d="M10.23 10.23 5 5" />
      <circle cx="12" cy="12" r="2.5" />
    </symbol>
    <symbol id="ship" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="M12 9.189V13" />
      <path d="M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6" />
      <path d="M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76" />
      <path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </symbol>
    <symbol id="shirt" viewBox="0 0 24 24">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </symbol>
    <symbol id="shopping-bag" viewBox="0 0 24 24">
      <path d="M16 10a4 4 0 0 1-8 0" />
      <path d="M3.103 6.034h17.794" />
      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
    </symbol>
    <symbol id="shopping-basket" viewBox="0 0 24 24">
      <path d="m15 11-1 9" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="M4.5 15.5h15" />
      <path d="m5 11 4-7" />
      <path d="m9 11 1 9" />
    </symbol>
    <symbol id="shopping-cart-minus" viewBox="0 0 24 24">
      <path d="M16 5h6" />
      <path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18" />
      <path d="M4.564 5H12" />
      <path d="M6.25 14h12.712a2 2 0 001.991-1.57l.514-3.113" />
      <circle cx="18" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </symbol>
    <symbol id="shopping-cart-plus" viewBox="0 0 24 24">
      <path d="M16 5h6" />
      <path d="M19 2v6" />
      <path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18" />
      <path d="M4.564 5H12" />
      <path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041" />
      <circle cx="18" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </symbol>
    <symbol id="shopping-cart" viewBox="0 0 24 24">
      <path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" />
      <path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25" />
      <circle cx="18" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </symbol>
    <symbol id="shovel" viewBox="0 0 24 24">
      <path d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z" />
      <path d="M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z" />
      <path d="m9 15 7.879-7.878" />
    </symbol>
    <symbol id="shower-head" viewBox="0 0 24 24">
      <path d="m4 4 2.5 2.5" />
      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
      <path d="M15 5 5 15" />
      <path d="M14 17v.01" />
      <path d="M10 16v.01" />
      <path d="M13 13v.01" />
      <path d="M16 10v.01" />
      <path d="M11 20v.01" />
      <path d="M17 14v.01" />
      <path d="M20 11v.01" />
    </symbol>
    <symbol id="shredder" viewBox="0 0 24 24">
      <path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 22v-5" />
      <path d="M14 19v-2" />
      <path d="M18 20v-3" />
      <path d="M2 13h20" />
      <path d="M6 20v-3" />
    </symbol>
    <symbol id="shrimp-off" viewBox="0 0 24 24">
      <path d="M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H13.5" />
      <path d="M11 20c-.5.5-1.12 1-2.5 1a1 1 0 010-5H12a7 7 0 003.283-.817" />
      <path d="M11 22c-.5-.5-1.12-1-2.5-1a6.5 6.5 0 01-5.63-3.25 6.44 6.44 0 015.236-9.744" />
      <path d="M18.04 12.54A7 7 0 0019 9V8" />
      <path d="m2 2 20 20" />
      <path d="M8 16c-2 0-4.5-4-4-6" />
      <path d="M9.43 9.33A8.5 8.5 0 0010 16" />
    </symbol>
    <symbol id="shrimp" viewBox="0 0 24 24">
      <path d="M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H8.5a6.44 6.44 0 00-5.63 9.75A6.5 6.5 0 008.5 21c1.38 0 2-.5 2.5-1" />
      <path d="M10 8a8.5 8.5 0 000 8" />
      <path d="M11 22c-.5-.5-1.12-1-2.5-1a1 1 0 010-5H12a7 7 0 007-7V8" />
      <path d="M13 12h.01" />
      <path d="M8 16c-2 0-4.5-4-4-6" />
    </symbol>
    <symbol id="shrink" viewBox="0 0 24 24">
      <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
      <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
      <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
      <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
    </symbol>
    <symbol id="shrub" viewBox="0 0 24 24">
      <path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" />
      <path d="M14.5 14.5 12 17" />
      <path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" />
    </symbol>
    <symbol id="shuffle" viewBox="0 0 24 24">
      <path d="m18 14 4 4-4 4" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
      <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
      <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
    </symbol>
    <symbol id="sigma" viewBox="0 0 24 24">
      <path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" />
    </symbol>
    <symbol id="signal-high" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
    </symbol>
    <symbol id="signal-low" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
    </symbol>
    <symbol id="signal-medium" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
    </symbol>
    <symbol id="signal-zero" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
    </symbol>
    <symbol id="signal" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </symbol>
    <symbol id="signature" viewBox="0 0 24 24">
      <path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
      <path d="M3 21h18" />
    </symbol>
    <symbol id="signpost-big" viewBox="0 0 24 24">
      <path d="M10 9H4L2 7l2-2h6" />
      <path d="M14 5h6l2 2-2 2h-6" />
      <path d="M10 22V4a2 2 0 1 1 4 0v18" />
      <path d="M8 22h8" />
    </symbol>
    <symbol id="signpost" viewBox="0 0 24 24">
      <path d="M12 13v8" />
      <path d="M12 3v3" />
      <path d="M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z" />
    </symbol>
    <symbol id="siren-off" viewBox="0 0 24 24">
      <path d="M12 12v6" />
      <path d="M12 2v1" />
      <path d="M12.707 7.05a5 5 0 0 1 4.243 4.243" />
      <path d="M17 17v1H7a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2" />
      <path d="M18.5 4.5 18 5" />
      <path d="M2 12h1" />
      <path d="m2 2 20 20" />
      <path d="M21 12h1" />
      <path d="M7 18v-6a5 5 0 0 1 1.464-3.536" />
    </symbol>
    <symbol id="siren" viewBox="0 0 24 24">
      <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
      <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
      <path d="M21 12h1" />
      <path d="M18.5 4.5 18 5" />
      <path d="M2 12h1" />
      <path d="M12 2v1" />
      <path d="m4.929 4.929.707.707" />
      <path d="M12 12v6" />
    </symbol>
    <symbol id="sixteenth-notes" viewBox="0 0 24 24">
      <path d="M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19" />
      <path d="M21 6 9 9.5" />
      <circle cx="18" cy="16" r="3" />
      <circle cx="6" cy="19" r="3" />
    </symbol>
    <symbol id="skip-back" viewBox="0 0 24 24">
      <path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
      <path d="M3 20V4" />
    </symbol>
    <symbol id="skip-forward" viewBox="0 0 24 24">
      <path d="M21 4v16" />
      <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
    </symbol>
    <symbol id="skull" viewBox="0 0 24 24">
      <path d="m12.5 17-.5-1-.5 1h1z" />
      <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="9" cy="12" r="1" />
    </symbol>
    <symbol id="slash" viewBox="0 0 24 24">
      <path d="M22 2 2 22" />
    </symbol>
    <symbol id="slice" viewBox="0 0 24 24">
      <path d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14" />
    </symbol>
    <symbol id="sliders-horizontal" viewBox="0 0 24 24">
      <path d="M10 5H3" />
      <path d="M12 19H3" />
      <path d="M14 3v4" />
      <path d="M16 17v4" />
      <path d="M21 12h-9" />
      <path d="M21 19h-5" />
      <path d="M21 5h-7" />
      <path d="M8 10v4" />
      <path d="M8 12H3" />
    </symbol>
    <symbol id="sliders-vertical" viewBox="0 0 24 24">
      <path d="M10 8h4" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M17 16h4" />
      <path d="M19 12V3" />
      <path d="M19 21v-5" />
      <path d="M3 14h4" />
      <path d="M5 10V3" />
      <path d="M5 21v-7" />
    </symbol>
    <symbol id="smartphone-charging" viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12.667 8 10 12h4l-2.667 4" />
    </symbol>
    <symbol id="smartphone-nfc" viewBox="0 0 24 24">
      <rect width="7" height="12" x="2" y="6" rx="1" />
      <path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" />
      <path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
    </symbol>
    <symbol id="smartphone-user-round" viewBox="0 0 24 24">
      <path d="M10 22H6a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v4" />
      <path d="M11 18h.01" />
      <path d="M22 22a4 4 0 00-8 0" />
      <circle cx="18" cy="15" r="3" />
    </symbol>
    <symbol id="smartphone" viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </symbol>
    <symbol id="snail" viewBox="0 0 24 24">
      <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
      <circle cx="10" cy="13" r="8" />
      <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
      <path d="M18 3 19.1 5.2" />
      <path d="M22 3 20.9 5.2" />
    </symbol>
    <symbol id="snowflake" viewBox="0 0 24 24">
      <path d="m10 20-1.25-2.5L6 18" />
      <path d="M10 4 8.75 6.5 6 6" />
      <path d="m14 20 1.25-2.5L18 18" />
      <path d="m14 4 1.25 2.5L18 6" />
      <path d="m17 21-3-6h-4" />
      <path d="m17 3-3 6 1.5 3" />
      <path d="M2 12h6.5L10 9" />
      <path d="m20 10-1.5 2 1.5 2" />
      <path d="M22 12h-6.5L14 15" />
      <path d="m4 10 1.5 2L4 14" />
      <path d="m7 21 3-6-1.5-3" />
      <path d="m7 3 3 6h4" />
    </symbol>
    <symbol id="soap-dispenser-droplet" viewBox="0 0 24 24">
      <path d="M10.5 2v4" />
      <path d="M14 2H7a2 2 0 0 0-2 2" />
      <path d="M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19" />
      <path d="M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </symbol>
    <symbol id="sofa" viewBox="0 0 24 24">
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </symbol>
    <symbol id="solar-panel" viewBox="0 0 24 24">
      <path d="M11 2h2" />
      <path d="m14.28 14-4.56 8" />
      <path d="m21 22-1.558-4H4.558" />
      <path d="M3 10v2" />
      <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" />
      <path d="M7 2a4 4 0 0 1-4 4" />
      <path d="m8.66 7.66 1.41 1.41" />
    </symbol>
    <symbol id="soup" viewBox="0 0 24 24">
      <path d="M11.248 3c.273.1.808.53.747 1.36-.05.83-.938 1.2-.989 2.02-.06.78.333 1.24.727 1.62" />
      <path d="M16.252 3c.268.1.794.53.745 1.36-.06.83-.923 1.2-.993 2.02-.05.78.338 1.24.725 1.62" />
      <path d="M19.5 12 22 6" />
      <path d="M4 12a1 1 0 00-.99 1.133A9 9 0 0012 21a9 9 0 008.99-7.867A1 1 0 0020 12z" />
      <path d="M6.252 3c.268.1.794.53.745 1.36-.06.83-.923 1.2-.993 2.02-.05.78.338 1.24.735 1.62" />
      <path d="M7 21h10" />
    </symbol>
    <symbol id="space" viewBox="0 0 24 24">
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </symbol>
    <symbol id="spade" viewBox="0 0 24 24">
      <path d="M12 18v4" />
      <path d="M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5" />
    </symbol>
    <symbol id="sparkle" viewBox="0 0 24 24">
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    </symbol>
    <symbol id="sparkles" viewBox="0 0 24 24">
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" />
      <path d="M22 4h-4" />
      <circle cx="4" cy="20" r="2" />
    </symbol>
    <symbol id="speaker" viewBox="0 0 24 24">
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M12 6h.01" />
      <circle cx="12" cy="14" r="4" />
      <path d="M12 14h.01" />
    </symbol>
    <symbol id="speech" viewBox="0 0 24 24">
      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
      <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
      <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
    </symbol>
    <symbol id="spell-check-2" viewBox="0 0 24 24">
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
      <path d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" />
    </symbol>
    <symbol id="spell-check" viewBox="0 0 24 24">
      <path d="m20 15-5.5 5.5L12 18" />
      <path d="m4 16 6-12 5.115 10.23" />
      <path d="M6 12h8" />
    </symbol>
    <symbol id="spline-pointer" viewBox="0 0 24 24">
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
      <path d="M5 17A12 12 0 0 1 17 5" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </symbol>
    <symbol id="spline" viewBox="0 0 24 24">
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M5 17A12 12 0 0 1 17 5" />
    </symbol>
    <symbol id="split" viewBox="0 0 24 24">
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
      <path d="m15 9 6-6" />
    </symbol>
    <symbol id="spool" viewBox="0 0 24 24">
      <path d="M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66" />
      <path d="m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178" />
    </symbol>
    <symbol id="sport-shoe" viewBox="0 0 24 24">
      <path d="m15 10.42 4.8-5.07" />
      <path d="M19 18h3" />
      <path d="M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14" />
    </symbol>
    <symbol id="spotlight" viewBox="0 0 24 24">
      <path d="M15.295 19.562 16 22" />
      <path d="m17 16 3.758 2.098" />
      <path d="m19 12.5 3.026-.598" />
      <path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" />
      <path d="M8 9V2" />
    </symbol>
    <symbol id="spray-can" viewBox="0 0 24 24">
      <path d="M3 3h.01" />
      <path d="M7 5h.01" />
      <path d="M11 7h.01" />
      <path d="M3 7h.01" />
      <path d="M7 9h.01" />
      <path d="M3 11h.01" />
      <rect width="4" height="4" x="15" y="5" />
      <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
      <path d="m13 14 8-2" />
      <path d="m13 19 8-2" />
    </symbol>
    <symbol id="sprout" viewBox="0 0 24 24">
      <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
      <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
      <path d="M5 21h14" />
    </symbol>
    <symbol id="square-activity" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M17 12h-2l-2 5-2-10-2 5H7" />
    </symbol>
    <symbol id="square-arrow-down-enter" viewBox="0 0 24 24">
      <path d="M12 3v10" />
      <path d="M16 3h3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h3" />
      <path d="m8 9 4 4 4-4" />
    </symbol>
    <symbol id="square-arrow-down-exit" viewBox="0 0 24 24">
      <path d="M12 11v10" />
      <path d="M17.67 21H19a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h1.33" />
      <path d="m8 17 4 4 4-4" />
    </symbol>
    <symbol id="square-arrow-down-left-enter" viewBox="0 0 24 24">
      <path d="M11 7v6h6" />
      <path d="m20 4-9 9" />
      <path d="M21 8.67V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10.33" />
    </symbol>
    <symbol id="square-arrow-down-left-exit" viewBox="0 0 24 24">
      <path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" />
      <path d="m3 21 9-9" />
      <path d="M9 21H3v-6" />
    </symbol>
    <symbol id="square-arrow-down-left" viewBox="0 0 24 24">
      <path d="M15 15H9l6-6" />
      <path d="M9 15V9" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-arrow-down-right-enter" viewBox="0 0 24 24">
      <path d="M13 7v6H7" />
      <path d="m4 4 9 9" />
      <path d="M8.67 3H19a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V8.67" />
    </symbol>
    <symbol id="square-arrow-down-right-exit" viewBox="0 0 24 24">
      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <path d="m21 21-9-9" />
      <path d="M21 15v6h-6" />
    </symbol>
    <symbol id="square-arrow-down-right" viewBox="0 0 24 24">
      <path d="M15 15 9 9" />
      <path d="M9 15h6V9" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-arrow-down" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 8v8" />
      <path d="m8 12 4 4 4-4" />
    </symbol>
    <symbol id="square-arrow-left-enter" viewBox="0 0 24 24">
      <path d="m15 8-4 4 4 4" />
      <path d="M21 12H11" />
      <path d="M21 16v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v3" />
    </symbol>
    <symbol id="square-arrow-left-exit" viewBox="0 0 24 24">
      <path d="M13 12H3" />
      <path d="M3 17.67V19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v1.33" />
      <path d="m7 8-4 4 4 4" />
    </symbol>
    <symbol id="square-arrow-left" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m12 8-4 4 4 4" />
      <path d="M16 12H8" />
    </symbol>
    <symbol id="square-arrow-right-enter" viewBox="0 0 24 24">
      <path d="M3 12h10" />
      <path d="M3 8V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2v-3" />
      <path d="m9 16 4-4-4-4" />
    </symbol>
    <symbol id="square-arrow-right-exit" viewBox="0 0 24 24">
      <path d="M11 12h10" />
      <path d="m17 16 4-4-4-4" />
      <path d="M21 6.33V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-1.33" />
    </symbol>
    <symbol id="square-arrow-right" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="m12 16 4-4-4-4" />
    </symbol>
    <symbol id="square-arrow-up-enter" viewBox="0 0 24 24">
      <path d="M12 21V11" />
      <path d="m16 15-4-4-4 4" />
      <path d="M8 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-3" />
    </symbol>
    <symbol id="square-arrow-up-exit" viewBox="0 0 24 24">
      <path d="M12 13V3" />
      <path d="m16 7-4-4-4 4" />
      <path d="M6.33 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1.33" />
    </symbol>
    <symbol id="square-arrow-up-left-enter" viewBox="0 0 24 24">
      <path d="M15.33 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10.33" />
      <path d="M17 11h-6v6" />
      <path d="m20 20-9-9" />
    </symbol>
    <symbol id="square-arrow-up-left-exit" viewBox="0 0 24 24">
      <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
      <path d="m3 3 9 9" />
      <path d="M3 9V3h6" />
    </symbol>
    <symbol id="square-arrow-up-left" viewBox="0 0 24 24">
      <path d="M15 15 9 9" />
      <path d="M9 15V9h6" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-arrow-up-right-enter" viewBox="0 0 24 24">
      <path d="M13 17v-6H7" />
      <path d="M3 15.33V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H8.67" />
      <path d="m4 20 9-9" />
    </symbol>
    <symbol id="square-arrow-up-right-exit" viewBox="0 0 24 24">
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
      <path d="m21 3-9 9" />
      <path d="M15 3h6v6" />
    </symbol>
    <symbol id="square-arrow-up-right" viewBox="0 0 24 24">
      <path d="M15 15V9H9" />
      <path d="m9 15 6-6" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-arrow-up" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
    </symbol>
    <symbol id="square-asterisk" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 8v8" />
      <path d="m8.5 14 7-4" />
      <path d="m8.5 10 7 4" />
    </symbol>
    <symbol id="square-bookmark" viewBox="0 0 24 24">
      <path d="M11 3v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834a.25.25 0 00.406-.195V3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-bottom-dashed-scissors" viewBox="0 0 24 24">
      <path d="M14 21h1" />
      <path d="m17 17-2.18-2.18" />
      <path d="M5 21a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2" />
      <path d="M9 21h1" />
      <path d="M9.56 14.44 17 7" />
      <path d="M9.56 9.56 12 12" />
      <circle cx="8.5" cy="15.5" r="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" />
    </symbol>
    <symbol id="square-centerline-dashed-horizontal" viewBox="0 0 24 24">
      <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
      <path d="M12 20v2" />
      <path d="M12 14v2" />
      <path d="M12 8v2" />
      <path d="M12 2v2" />
    </symbol>
    <symbol id="square-centerline-dashed-vertical" viewBox="0 0 24 24">
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </symbol>
    <symbol id="square-chart-gantt" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 8h7" />
      <path d="M8 12h6" />
      <path d="M11 16h5" />
    </symbol>
    <symbol id="square-check-big" viewBox="0 0 24 24">
      <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
      <path d="m9 11 3 3L22 4" />
    </symbol>
    <symbol id="square-check" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m16 9-5.5 5.5L8 12" />
    </symbol>
    <symbol id="square-chevron-down" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m16 10-4 4-4-4" />
    </symbol>
    <symbol id="square-chevron-left" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m14 16-4-4 4-4" />
    </symbol>
    <symbol id="square-chevron-right" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m10 8 4 4-4 4" />
    </symbol>
    <symbol id="square-chevron-up" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m8 14 4-4 4 4" />
    </symbol>
    <symbol id="square-chevrons-down" viewBox="0 0 24 24">
      <path d="M9 14L12 17L15 14" />
      <path d="M9 8L12 11L15 8" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-chevrons-left" viewBox="0 0 24 24">
      <path d="M10 9L7 12L10 15" />
      <path d="M16 9L13 12L16 15" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-chevrons-right" viewBox="0 0 24 24">
      <path d="M14 15L17 12L14 9" />
      <path d="M8 15L11 12L8 9" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-chevrons-up" viewBox="0 0 24 24">
      <path d="M15 10L12 7L9 10" />
      <path d="M15 16L12 13L9 16" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-code" viewBox="0 0 24 24">
      <path d="m10 9-3 3 3 3" />
      <path d="m14 15 3-3-3-3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-dashed-bottom-code" viewBox="0 0 24 24">
      <path d="M10 9.5 8 12l2 2.5" />
      <path d="M14 21h1" />
      <path d="m14 9.5 2 2.5-2 2.5" />
      <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
      <path d="M9 21h1" />
    </symbol>
    <symbol id="square-dashed-bottom" viewBox="0 0 24 24">
      <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
    </symbol>
    <symbol id="square-dashed-kanban" viewBox="0 0 24 24">
      <path d="M8 7v7" />
      <path d="M12 7v4" />
      <path d="M16 7v9" />
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M9 3h1" />
      <path d="M14 3h1" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 9v1" />
      <path d="M21 14v1" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M14 21h1" />
      <path d="M9 21h1" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M3 14v1" />
      <path d="M3 9v1" />
    </symbol>
    <symbol id="square-dashed-mouse-pointer" viewBox="0 0 24 24">
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 3h1" />
      <path d="M9 21h2" />
      <path d="M14 3h1" />
      <path d="M3 9v1" />
      <path d="M21 9v2" />
      <path d="M3 14v1" />
    </symbol>
    <symbol id="square-dashed-plus" viewBox="0 0 24 24">
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 3h1" />
      <path d="M9 21h1" />
      <path d="M14 3h1" />
      <path d="M14 21h1" />
      <path d="M3 9v1" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M21 14v1" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </symbol>
    <symbol id="square-dashed-search" viewBox="0 0 24 24">
      <path d="M14 3h1" />
      <path d="M19 3a2 2 0 012 2" />
      <path d="m21 21-1.875-1.875" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M3 9v1" />
      <path d="M5 21a2 2 0 01-2-2" />
      <path d="M5 3a2 2 0 00-2 2" />
      <path d="M9 21h1" />
      <path d="M9 3h1" />
      <circle cx="17" cy="17" r="3" />
    </symbol>
    <symbol id="square-dashed-text" viewBox="0 0 24 24">
      <path d="M14 21h1" />
      <path d="M14 3h1" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 14v1" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M3 9v1" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
      <path d="M7 8h8" />
      <path d="M9 21h1" />
      <path d="M9 3h1" />
    </symbol>
    <symbol id="square-dashed-top-solid" viewBox="0 0 24 24">
      <path d="M14 21h1" />
      <path d="M21 14v1" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 9v1" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 21h1" />
    </symbol>
    <symbol id="square-dashed-x-corner" viewBox="0 0 24 24">
      <path d="M14 3h1" />
      <path d="m16 16 5 5" />
      <path d="M19 3a2 2 0 012 2" />
      <path d="m21 16-5 5" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M3 9v1" />
      <path d="M5 21a2 2 0 01-2-2" />
      <path d="M5 3a2 2 0 00-2 2" />
      <path d="M9 21h1" />
      <path d="M9 3h1" />
    </symbol>
    <symbol id="square-dashed-x" viewBox="0 0 24 24">
      <path d="M14 21h1" />
      <path d="M14 3h1" />
      <path d="M19 3a2 2 0 012 2" />
      <path d="M21 14v1" />
      <path d="M21 19a2 2 0 01-2 2" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M3 9v1" />
      <path d="M5 21a2 2 0 01-2-2" />
      <path d="M5 3a2 2 0 00-2 2" />
      <path d="m9 15 6-6" />
      <path d="M9 21h1" />
      <path d="M9 3h1" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="square-dashed" viewBox="0 0 24 24">
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 3h1" />
      <path d="M9 21h1" />
      <path d="M14 3h1" />
      <path d="M14 21h1" />
      <path d="M3 9v1" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M21 14v1" />
    </symbol>
    <symbol id="square-dimensions" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 7H7v5" />
      <path d="M12 17h5v-5" />
    </symbol>
    <symbol id="square-divide" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="8" x2="16" y1="12" y2="12" />
      <line x1="12" x2="12" y1="16" y2="16" />
      <line x1="12" x2="12" y1="8" y2="8" />
    </symbol>
    <symbol id="square-dot" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="square-equal" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 10h10" />
      <path d="M7 14h10" />
    </symbol>
    <symbol id="square-exclamation-point" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </symbol>
    <symbol id="square-function" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
      <path d="M9 11.2h5.7" />
    </symbol>
    <symbol id="square-kanban-plus" viewBox="0 0 24 24">
      <path d="M12 7v4" />
      <path d="M12.354 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v7.354" />
      <path d="M15 18h6" />
      <path d="M16 7v4.536" />
      <path d="M18 21v-6" />
      <path d="M8 7v7" />
    </symbol>
    <symbol id="square-kanban" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 7v7" />
      <path d="M12 7v4" />
      <path d="M16 7v9" />
    </symbol>
    <symbol id="square-letter-a" viewBox="0 0 24 24">
      <path d="m8 16 3.453-7.648a.6.6 0 0 1 1.094 0L16 16" />
      <path d="M15 14H9" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-b" viewBox="0 0 24 24">
      <path d="M9 12h4.846a2.24 2.24 0 011.523.586 2 2 0 01.001 2.828 2.24 2.24 0 01-1.524.586H9.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H13a2 2 0 010 4" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-letter-c" viewBox="0 0 24 24">
      <path d="M15 9.354a4 4 0 1 0 0 5.292" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-d" viewBox="0 0 24 24">
      <path d="M12 8a4 4 0 010 8H9.412A.41.41 0 019 15.588V8.412A.41.41 0 019.412 8z" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-e" viewBox="0 0 24 24">
      <path d="M15 8H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H15" />
      <path d="M9 12h4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-f" viewBox="0 0 24 24">
      <path d="M9 16V8.5a.5.5 0 0 1 .5-.5H15" />
      <path d="M9 12h4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-g" viewBox="0 0 24 24">
      <path d="M12.5 12H15v2.268a.88.88 0 01-.263.65A4 4 0 1112 8h2.5" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-h" viewBox="0 0 24 24">
      <path d="M9 16V8" />
      <path d="M15 16V8" />
      <path d="M9 12h6" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-i" viewBox="0 0 24 24">
      <path d="M12 16V8" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-j" viewBox="0 0 24 24">
      <path d="M14 8v5.5a1 1 0 01-5 0V13" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-k" viewBox="0 0 24 24">
      <path d="M9 16V8" />
      <path d="m11 12 4 4" />
      <path d="m15 8-6 6" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-l" viewBox="0 0 24 24">
      <path d="M9 8v7.5a.5.5 0 0 0 .5.5H15" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-m" viewBox="0 0 24 24">
      <path d="M8 16.001v-7.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3v7.501" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-n" viewBox="0 0 24 24">
      <path d="M9 16V8.576a.496.496 0 01.937-.243l4.126 7.43A.496.496 0 0015 15.52V8" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-letter-o" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-p-off" viewBox="0 0 24 24">
      <path d="M12 12h1a2 2 0 000-4H9.5a.5.5 0 00-.5.5V9" />
      <path d="M15.343 21H5a2 2 0 01-2-2V8.657" />
      <path d="M22 22 2 2" />
      <path d="M3.586 3.586A2 2 0 015 3h14a2 2 0 012 2v14a2 2 0 01-.586 1.414" />
      <path d="M9 14.657V16" />
    </symbol>
    <symbol id="square-letter-p" viewBox="0 0 24 24">
      <path d="M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-q" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="m16 16-2.5-2.5" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-r" viewBox="0 0 24 24">
      <path d="m11 12 4 4" />
      <path d="M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-s" viewBox="0 0 24 24">
      <path d="M14.5 8H11a2 2 0 100 4h2a2 2 0 110 4H9" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-letter-t" viewBox="0 0 24 24">
      <path d="M12 16V8" />
      <path d="M9 8h6" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-letter-u" viewBox="0 0 24 24">
      <path d="M15 8v5a3 3 0 1 1-6 0V8" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-v" viewBox="0 0 24 24">
      <path d="m9 8 2.525 7.66a.5.5 0 0 0 .95 0L15 8" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-w" viewBox="0 0 24 24">
      <path d="m16 8-1.591 7.598a.497.497 0 01-.97.038l-.96-3.276a.5.5 0 00-.959 0l-.96 3.276a.496.496 0 01-.969-.038L8 8" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-letter-x" viewBox="0 0 24 24">
      <path d="m9 16 6-8" />
      <path d="m9 8 6 8" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-letter-y" viewBox="0 0 24 24">
      <path d="m9 8 3 4 3-4" />
      <path d="M12 12v4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-letter-z" viewBox="0 0 24 24">
      <path d="M9 8h5.501a.5.5 0 0 1 .37.836L9.13 15.164A.5.5 0 0 0 9.5 16H15" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-library" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7v10" />
      <path d="M11 7v10" />
      <path d="m15 7 2 10" />
    </symbol>
    <symbol id="square-menu" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h10" />
    </symbol>
    <symbol id="square-minus" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="square-mouse-pointer" viewBox="0 0 24 24">
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
    </symbol>
    <symbol id="square-off" viewBox="0 0 24 24">
      <path d="M20.4 20.4a2 2 0 01-1.4.6H5a2 2 0 01-2-2V5a2 2 0 01.59-1.41" />
      <path d="M21 15.3V5a2 2 0 00-2-2H8.7" />
      <path d="M22 22 2 2" />
    </symbol>
    <symbol id="square-padding-bottom" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 17h8" />
    </symbol>
    <symbol id="square-padding-horizontal" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M17 16V8" />
      <path d="M7 16V8" />
    </symbol>
    <symbol id="square-padding-left" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 16V8" />
    </symbol>
    <symbol id="square-padding-right" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M17 16V8" />
    </symbol>
    <symbol id="square-padding-top" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 7h8" />
    </symbol>
    <symbol id="square-padding-vertical" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 17h8" />
      <path d="M8 7h8" />
    </symbol>
    <symbol id="square-padding" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M14 17h-4" />
      <path d="M14 7h-4" />
      <path d="M17 14v-4" />
      <path d="M7 14v-4" />
    </symbol>
    <symbol id="square-pause" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <line x1="10" x2="10" y1="15" y2="9" />
      <line x1="14" x2="14" y1="15" y2="9" />
    </symbol>
    <symbol id="square-pen" viewBox="0 0 24 24">
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
    </symbol>
    <symbol id="square-percent" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m15 9-6 6" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
    </symbol>
    <symbol id="square-pi" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7h10" />
      <path d="M10 7v10" />
      <path d="M16 17a2 2 0 0 1-2-2V7" />
    </symbol>
    <symbol id="square-pilcrow" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
      <path d="M12 7v10" />
      <path d="M16 7v10" />
    </symbol>
    <symbol id="square-play" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
    </symbol>
    <symbol id="square-plus" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </symbol>
    <symbol id="square-power" viewBox="0 0 24 24">
      <path d="M12 7v4" />
      <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-radical" viewBox="0 0 24 24">
      <path d="M7 12h2l2 5 2-10h4" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-round-corner" viewBox="0 0 24 24">
      <path d="M21 11a8 8 0 0 0-8-8" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </symbol>
    <symbol id="square-scissors" viewBox="0 0 24 24">
      <path d="m17 17-2.18-2.18" />
      <path d="M9.56 14.44 17 7" />
      <path d="M9.56 9.56 12 12" />
      <circle cx="8.5" cy="15.5" r="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-sigma" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M16 8.9V7H8l4 5-4 5h8v-1.9" />
    </symbol>
    <symbol id="square-slash" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <line x1="9" x2="15" y1="15" y2="9" />
    </symbol>
    <symbol id="square-sparkles" viewBox="0 0 24 24">
      <path d="M11 15H7" />
      <path d="M15.41 2.49a.6.6 0 011.18 0l.63 3.334a1.2 1.2 0 00.956.955l3.334.631a.6.6 0 010 1.18l-3.334.63a1.2 1.2 0 00-.955.956l-.631 3.334a.6.6 0 01-1.18 0l-.63-3.334a1.2 1.2 0 00-.956-.955L10.49 8.59a.6.6 0 010-1.18l3.334-.63a1.2 1.2 0 00.955-.956z" />
      <path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" />
      <path d="M9 13v4" />
    </symbol>
    <symbol id="square-split-horizontal" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
      <path d="M8 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" />
    </symbol>
    <symbol id="square-split-vertical" viewBox="0 0 24 24">
      <path d="M2 12h20" />
      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
    </symbol>
    <symbol id="square-square" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </symbol>
    <symbol id="square-stack" viewBox="0 0 24 24">
      <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </symbol>
    <symbol id="square-star" viewBox="0 0 24 24">
      <path d="M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-stop" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="square-terminal" viewBox="0 0 24 24">
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    </symbol>
    <symbol id="square-text" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 8h8" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </symbol>
    <symbol id="square-user-round" viewBox="0 0 24 24">
      <path d="M18 21a6 6 0 0 0-12 0" />
      <circle cx="12" cy="11" r="4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-user" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="square-x" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="square" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="squares-exclude" viewBox="0 0 24 24">
      <path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" />
      <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" />
    </symbol>
    <symbol id="squares-intersect" viewBox="0 0 24 24">
      <path d="M10 22a2 2 0 0 1-2-2" />
      <path d="M14 2a2 2 0 0 1 2 2" />
      <path d="M16 22h-2" />
      <path d="M2 10V8" />
      <path d="M2 4a2 2 0 0 1 2-2" />
      <path d="M20 8a2 2 0 0 1 2 2" />
      <path d="M22 14v2" />
      <path d="M22 20a2 2 0 0 1-2 2" />
      <path d="M4 16a2 2 0 0 1-2-2" />
      <path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" />
      <path d="M8 2h2" />
    </symbol>
    <symbol id="squares-subtract" viewBox="0 0 24 24">
      <path d="M10 22a2 2 0 0 1-2-2" />
      <path d="M16 22h-2" />
      <path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" />
      <path d="M20 8a2 2 0 0 1 2 2" />
      <path d="M22 14v2" />
      <path d="M22 20a2 2 0 0 1-2 2" />
    </symbol>
    <symbol id="squares-unite" viewBox="0 0 24 24">
      <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z" />
    </symbol>
    <symbol id="squircle-dashed" viewBox="0 0 24 24">
      <path d="M13.77 3.043a34 34 0 0 0-3.54 0" />
      <path d="M13.771 20.956a33 33 0 0 1-3.541.001" />
      <path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" />
      <path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" />
      <path d="M20.957 10.23a33 33 0 0 1 0 3.54" />
      <path d="M3.043 10.23a34 34 0 0 0 .001 3.541" />
      <path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" />
      <path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" />
    </symbol>
    <symbol id="squircle" viewBox="0 0 24 24">
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
    </symbol>
    <symbol id="squirrel" viewBox="0 0 24 24">
      <path d="M15.236 22a3 3 0 0 0-2.2-5" />
      <path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
      <path d="M18 13h.01" />
      <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
    </symbol>
    <symbol id="stamp" viewBox="0 0 24 24">
      <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" />
      <path d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" />
      <path d="M5 22h14" />
    </symbol>
    <symbol id="star-check" viewBox="0 0 24 24">
      <path d="m19.06 12.501 2.78-2.707a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014" />
      <path d="m15 18 2 2 4-4" />
    </symbol>
    <symbol id="star-half" viewBox="0 0 24 24">
      <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
    </symbol>
    <symbol id="star-minus" viewBox="0 0 24 24">
      <path d="M15 18h6" />
      <path d="M17.688 14a2.1 2.1 0 0 1 .416-.568l3.736-3.638a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014" />
    </symbol>
    <symbol id="star-off" viewBox="0 0 24 24">
      <path d="m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152" />
      <path d="m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="star-plus" viewBox="0 0 24 24">
      <path d="M11.013 18.582 6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5" />
      <path d="M15 18h6" />
      <path d="M18 15v6" />
    </symbol>
    <symbol id="star-x" viewBox="0 0 24 24">
      <path d="m15.5 15.5 5 5" />
      <path d="m20.063 11.525 1.777-1.731a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428a2.1 2.1 0 0 1 .987-.243 2 2 0 0 1 .132.004" />
      <path d="m20.5 15.5-5 5" />
    </symbol>
    <symbol id="star" viewBox="0 0 24 24">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </symbol>
    <symbol id="step-back" viewBox="0 0 24 24">
      <path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
      <path d="M21 20V4" />
    </symbol>
    <symbol id="step-forward" viewBox="0 0 24 24">
      <path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
      <path d="M3 4v16" />
    </symbol>
    <symbol id="stethoscope" viewBox="0 0 24 24">
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </symbol>
    <symbol id="sticker" viewBox="0 0 24 24">
      <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M8 13h.01" />
      <path d="M16 13h.01" />
      <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
    </symbol>
    <symbol id="sticky-note-check" viewBox="0 0 24 24">
      <path d="m15 19 2 2 4-4" />
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5" />
    </symbol>
    <symbol id="sticky-note-minus" viewBox="0 0 24 24">
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35" />
      <path d="M21 18h-6" />
    </symbol>
    <symbol id="sticky-note-off" viewBox="0 0 24 24">
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="m2 2 20 20" />
      <path d="M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586" />
      <path d="M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344" />
    </symbol>
    <symbol id="sticky-note-plus" viewBox="0 0 24 24">
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M18 15v6" />
      <path d="M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355" />
      <path d="M21 18h-6" />
    </symbol>
    <symbol id="sticky-note-x" viewBox="0 0 24 24">
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="m16 16 5 5" />
      <path d="M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
      <path d="m21 16-5 5" />
    </symbol>
    <symbol id="sticky-note" viewBox="0 0 24 24">
      <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
    </symbol>
    <symbol id="sticky-notes" viewBox="0 0 24 24">
      <path d="M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" />
      <path d="M10 8v5a1 1 0 0 0 1 1h5" />
      <path d="M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2" />
      <path d="M16 2v5a1 1 0 0 0 1 1h5" />
    </symbol>
    <symbol id="stone" viewBox="0 0 24 24">
      <path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z" />
      <path d="M11.99 22 14 12l7.822 3.184" />
      <path d="M14 12 8.47 2.302" />
    </symbol>
    <symbol id="store" viewBox="0 0 24 24">
      <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
      <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
      <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
    </symbol>
    <symbol id="stretch-horizontal" viewBox="0 0 24 24">
      <rect width="20" height="6" x="2" y="4" rx="2" />
      <rect width="20" height="6" x="2" y="14" rx="2" />
    </symbol>
    <symbol id="stretch-vertical" viewBox="0 0 24 24">
      <rect width="6" height="20" x="4" y="2" rx="2" />
      <rect width="6" height="20" x="14" y="2" rx="2" />
    </symbol>
    <symbol id="strikethrough" viewBox="0 0 24 24">
      <path d="M16 4H9a3 3 0 0 0-2.83 4" />
      <path d="M14 12a4 4 0 0 1 0 8H6" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </symbol>
    <symbol id="stroke-line-cap-butt" viewBox="0 0 24 24">
      <path d="M14 12h2" />
      <path d="M2 12h2" />
      <path d="M2 4h18a2 2 0 012 2v12a2 2 0 01-2 2H2" />
      <path d="M20 12h2" />
      <path d="M8 12h2" />
    </symbol>
    <symbol id="stroke-line-cap-round" viewBox="0 0 24 24">
      <path d="M13.99 12H14" />
      <path d="M2 12h2" />
      <path d="M2 4h12a8 8 0 010 16H2" />
      <path d="M8 12h2" />
    </symbol>
    <symbol id="stroke-line-cap-square" viewBox="0 0 24 24">
      <path d="M13.99 12H14" />
      <path d="M2 12h2" />
      <path d="M2 4h18a2 2 0 012 2v12a2 2 0 01-2 2H2" />
      <path d="M8 12h2" />
    </symbol>
    <symbol id="stroke-line-join-bevel" viewBox="0 0 24 24">
      <path d="M11 21v-2.002" />
      <path d="M3 3h8.002a2.4 2.4 0 011.704.706l7.588 7.588A2.4 2.4 0 0121 12.998V21" />
      <path d="M5 13H3" />
      <path d="M9 13h1a1 1 0 011 1v1" />
    </symbol>
    <symbol id="stroke-line-join-miter" viewBox="0 0 24 24">
      <path d="M11 21v-2.002" />
      <path d="M3 3h16a2 2 0 012 2v16" />
      <path d="M5 13H3" />
      <path d="M9 13h1a1 1 0 011 1v1" />
    </symbol>
    <symbol id="stroke-line-join-round" viewBox="0 0 24 24">
      <path d="M11 21v-2.002" />
      <path d="M3 3h8a10 10 0 0110 10v8" />
      <path d="M5 13H3" />
      <path d="M9 13h1a1 1 0 011 1v1" />
    </symbol>
    <symbol id="subscript" viewBox="0 0 24 24">
      <path d="m4 5 8 8" />
      <path d="m12 5-8 8" />
      <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />
    </symbol>
    <symbol id="summary" viewBox="0 0 24 24">
      <path d="M15 4H7" />
      <path d="m18 16 3 3-3 3" />
      <path d="M3 4v13a2 2 0 0 0 2 2h16" />
      <path d="M7 14h7" />
      <path d="M7 9h12" />
    </symbol>
    <symbol id="sun-dim" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4h.01" />
      <path d="M20 12h.01" />
      <path d="M12 20h.01" />
      <path d="M4 12h.01" />
      <path d="M17.657 6.343h.01" />
      <path d="M17.657 17.657h.01" />
      <path d="M6.343 17.657h.01" />
      <path d="M6.343 6.343h.01" />
    </symbol>
    <symbol id="sun-medium" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1" />
      <path d="M12 20v1" />
      <path d="M3 12h1" />
      <path d="M20 12h1" />
      <path d="m18.364 5.636-.707.707" />
      <path d="m6.343 17.657-.707.707" />
      <path d="m5.636 5.636.707.707" />
      <path d="m17.657 17.657.707.707" />
    </symbol>
    <symbol id="sun-moon" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" />
      <path d="M16 12a4 4 0 0 0-4-4" />
      <path d="m19 5-1.256 1.256" />
      <path d="M20 12h2" />
    </symbol>
    <symbol id="sun-snow" viewBox="0 0 24 24">
      <path d="M10 21v-1" />
      <path d="M10 4V3" />
      <path d="M10 9a3 3 0 0 0 0 6" />
      <path d="m14 20 1.25-2.5L18 18" />
      <path d="m14 4 1.25 2.5L18 6" />
      <path d="m17 21-3-6 1.5-3H22" />
      <path d="m17 3-3 6 1.5 3" />
      <path d="M2 12h1" />
      <path d="m20 10-1.5 2 1.5 2" />
      <path d="m3.64 18.36.7-.7" />
      <path d="m4.34 6.34-.7-.7" />
    </symbol>
    <symbol id="sun" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </symbol>
    <symbol id="sunrise" viewBox="0 0 24 24">
      <path d="M12 2v8" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m8 6 4-4 4 4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </symbol>
    <symbol id="sunset" viewBox="0 0 24 24">
      <path d="M12 10V2" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m16 6-4 4-4-4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </symbol>
    <symbol id="superscript" viewBox="0 0 24 24">
      <path d="m4 19 8-8" />
      <path d="m12 19-8-8" />
      <path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" />
    </symbol>
    <symbol id="swatch-book" viewBox="0 0 24 24">
      <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
      <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" />
      <path d="M 7 17h.01" />
      <path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" />
    </symbol>
    <symbol id="swiss-franc" viewBox="0 0 24 24">
      <path d="M10 10h7" />
      <path d="M10 20V5a1 1 0 011-1h7" />
      <path d="M6 16h9" />
    </symbol>
    <symbol id="switch-camera" viewBox="0 0 24 24">
      <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
      <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
      <circle cx="12" cy="12" r="3" />
      <path d="m18 22-3-3 3-3" />
      <path d="m6 2 3 3-3 3" />
    </symbol>
    <symbol id="sword" viewBox="0 0 24 24">
      <path d="m11 19-6-6" />
      <path d="m5 21-2-2" />
      <path d="m8 16-4 4" />
      <path d="M9.5 17.5 20.414 6.586A2 2 0 0021 5.172V3h-2.172a2 2 0 00-1.414.586L6.5 14.5" />
    </symbol>
    <symbol id="swords" viewBox="0 0 24 24">
      <path d="m13 19 6-6" />
      <path d="M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5" />
      <path d="m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586" />
      <path d="m16 16 4 4" />
      <path d="m19 21 2-2" />
      <path d="m5 14 4 4" />
      <path d="m5 21-2-2" />
      <path d="M7.5 16.5 4 20" />
    </symbol>
    <symbol id="syringe" viewBox="0 0 24 24">
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </symbol>
    <symbol id="table-2" viewBox="0 0 24 24">
      <path d="M3 9h18" />
      <path d="M9 3v18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="table-cells-merge" viewBox="0 0 24 24">
      <path d="M12 21v-6" />
      <path d="M12 9V3" />
      <path d="M3 15h18" />
      <path d="M3 9h18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="table-cells-split" viewBox="0 0 24 24">
      <path d="M12 15V9" />
      <path d="M3 15h18" />
      <path d="M3 9h18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="table-columns-split" viewBox="0 0 24 24">
      <path d="M14 14v2" />
      <path d="M14 20v2" />
      <path d="M14 2v2" />
      <path d="M14 8v2" />
      <path d="M2 15h8" />
      <path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
      <path d="M2 9h8" />
      <path d="M22 15h-4" />
      <path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
      <path d="M22 9h-4" />
      <path d="M5 3v18" />
    </symbol>
    <symbol id="table-of-contents" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M16 12H3" />
      <path d="M16 19H3" />
      <path d="M21 5h.01" />
      <path d="M21 12h.01" />
      <path d="M21 19h.01" />
    </symbol>
    <symbol id="table-properties" viewBox="0 0 24 24">
      <path d="M15 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 9H3" />
      <path d="M21 15H3" />
    </symbol>
    <symbol id="table-rows-split" viewBox="0 0 24 24">
      <path d="M14 10h2" />
      <path d="M15 22v-8" />
      <path d="M15 2v4" />
      <path d="M2 10h2" />
      <path d="M20 10h2" />
      <path d="M3 19h18" />
      <path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
      <path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
      <path d="M8 10h2" />
      <path d="M9 22v-8" />
      <path d="M9 2v4" />
    </symbol>
    <symbol id="table" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </symbol>
    <symbol id="tablet-smartphone" viewBox="0 0 24 24">
      <rect width="10" height="14" x="3" y="8" rx="2" />
      <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
      <path d="M8 18h.01" />
    </symbol>
    <symbol id="tablet" viewBox="0 0 24 24">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </symbol>
    <symbol id="tablets" viewBox="0 0 24 24">
      <circle cx="7" cy="7" r="5" />
      <circle cx="17" cy="17" r="5" />
      <path d="M12 17h10" />
      <path d="m3.46 10.54 7.08-7.08" />
    </symbol>
    <symbol id="tag-plus" viewBox="0 0 24 24">
      <path d="M16 13h6" />
      <path d="m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79" />
      <path d="M19 10v6" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="tag-x" viewBox="0 0 24 24">
      <path d="m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79" />
      <path d="m16.5 10.5 5 5" />
      <path d="m21.5 10.5-5 5" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="tag" viewBox="0 0 24 24">
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="tags" viewBox="0 0 24 24">
      <path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" />
      <path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" />
      <circle cx="10.5" cy="6.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="tally-1" viewBox="0 0 24 24">
      <path d="M4 4v16" />
    </symbol>
    <symbol id="tally-2" viewBox="0 0 24 24">
      <path d="M4 4v16" />
      <path d="M9 4v16" />
    </symbol>
    <symbol id="tally-3" viewBox="0 0 24 24">
      <path d="M4 4v16" />
      <path d="M9 4v16" />
      <path d="M14 4v16" />
    </symbol>
    <symbol id="tally-4" viewBox="0 0 24 24">
      <path d="M4 4v16" />
      <path d="M9 4v16" />
      <path d="M14 4v16" />
      <path d="M19 4v16" />
    </symbol>
    <symbol id="tally-5" viewBox="0 0 24 24">
      <path d="M4 4v16" />
      <path d="M9 4v16" />
      <path d="M14 4v16" />
      <path d="M19 4v16" />
      <path d="M22 6 2 18" />
    </symbol>
    <symbol id="tangent" viewBox="0 0 24 24">
      <circle cx="17" cy="4" r="2" />
      <path d="M15.59 5.41 5.41 15.59" />
      <circle cx="4" cy="17" r="2" />
      <path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
    </symbol>
    <symbol id="target" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="telescope" viewBox="0 0 24 24">
      <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
      <path d="m13.56 11.747 4.332-.924" />
      <path d="m16 21-3.105-6.21" />
      <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
      <path d="m6.158 8.633 1.114 4.456" />
      <path d="m8 21 3.105-6.21" />
      <circle cx="12" cy="13" r="2" />
    </symbol>
    <symbol id="tent-tree" viewBox="0 0 24 24">
      <circle cx="4" cy="4" r="2" />
      <path d="m14 5 3-3 3 3" />
      <path d="m14 10 3-3 3 3" />
      <path d="M17 14V2" />
      <path d="M17 14H7l-5 8h20Z" />
      <path d="M8 14v8" />
      <path d="m9 14 5 8" />
    </symbol>
    <symbol id="tent" viewBox="0 0 24 24">
      <path d="M3.5 21 14 3" />
      <path d="M20.5 21 10 3" />
      <path d="M15.5 21 12 15l-3.5 6" />
      <path d="M2 21h20" />
    </symbol>
    <symbol id="terminal" viewBox="0 0 24 24">
      <path d="M12 19h8" />
      <path d="m4 17 6-6-6-6" />
    </symbol>
    <symbol id="test-tube-diagonal" viewBox="0 0 24 24">
      <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
      <path d="m16 2 6 6" />
      <path d="M12 16H4" />
    </symbol>
    <symbol id="test-tube" viewBox="0 0 24 24">
      <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
      <path d="M8.5 2h7" />
      <path d="M14.5 16h-5" />
    </symbol>
    <symbol id="test-tubes" viewBox="0 0 24 24">
      <path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" />
      <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" />
      <path d="M3 2h7" />
      <path d="M14 2h7" />
      <path d="M9 16H4" />
      <path d="M20 16h-5" />
    </symbol>
    <symbol id="text-align-center" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M17 12H7" />
      <path d="M19 19H5" />
    </symbol>
    <symbol id="text-align-end" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M21 12H9" />
      <path d="M21 19H7" />
    </symbol>
    <symbol id="text-align-justify-center" viewBox="0 0 24 24">
      <path d="M3 5h18" />
      <path d="M3 12h18" />
      <path d="M7 19h10" />
    </symbol>
    <symbol id="text-align-justify-end" viewBox="0 0 24 24">
      <path d="M3 5h18" />
      <path d="M3 12h18" />
      <path d="M11 19h10" />
    </symbol>
    <symbol id="text-align-justify-start" viewBox="0 0 24 24">
      <path d="M3 5h18" />
      <path d="M3 12h18" />
      <path d="M3 19h10" />
    </symbol>
    <symbol id="text-align-justify" viewBox="0 0 24 24">
      <path d="M3 5h18" />
      <path d="M3 12h18" />
      <path d="M3 19h18" />
    </symbol>
    <symbol id="text-align-start" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M15 12H3" />
      <path d="M17 19H3" />
    </symbol>
    <symbol id="text-cursor-input" viewBox="0 0 24 24">
      <path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
      <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
      <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
      <path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
      <path d="M9 6v12" />
    </symbol>
    <symbol id="text-cursor" viewBox="0 0 24 24">
      <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
      <path d="M7 22h1a4 4 0 0 0 4-4" />
      <path d="M7 2h1a4 4 0 0 1 4 4" />
    </symbol>
    <symbol id="text-initial" viewBox="0 0 24 24">
      <path d="M15 5h6" />
      <path d="M15 12h6" />
      <path d="M3 19h18" />
      <path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" />
      <path d="M3.92 10h6.16" />
    </symbol>
    <symbol id="text-pen" viewBox="0 0 24 24">
      <path d="M12 12H3" />
      <path d="M21 5H3" />
      <path d="M21.377 14.626a1 1 0 10-3.004-3.004l-5.01 5.012a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506z" />
      <path d="M8 19H3" />
    </symbol>
    <symbol id="text-quote" viewBox="0 0 24 24">
      <path d="M17 5H3" />
      <path d="M21 12H8" />
      <path d="M21 19H8" />
      <path d="M3 12v7" />
    </symbol>
    <symbol id="text-search" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M10 12H3" />
      <path d="M10 19H3" />
      <circle cx="17" cy="15" r="3" />
      <path d="m21 19-1.9-1.9" />
    </symbol>
    <symbol id="text-wrap" viewBox="0 0 24 24">
      <path d="m16 16-3 3 3 3" />
      <path d="M3 12h14.5a1 1 0 0 1 0 7H13" />
      <path d="M3 19h6" />
      <path d="M3 5h18" />
    </symbol>
    <symbol id="theater" viewBox="0 0 24 24">
      <path d="M2 10s3-3 3-8" />
      <path d="M22 10s-3-3-3-8" />
      <path d="M10 2c0 4.4-3.6 8-8 8" />
      <path d="M14 2c0 4.4 3.6 8 8 8" />
      <path d="M2 10s2 2 2 5" />
      <path d="M22 10s-2 2-2 5" />
      <path d="M8 15h8" />
      <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    </symbol>
    <symbol id="thermometer-snowflake" viewBox="0 0 24 24">
      <path d="m10 20-1.25-2.5L6 18" />
      <path d="M10 4 8.75 6.5 6 6" />
      <path d="M10.585 15H10" />
      <path d="M2 12h6.5L10 9" />
      <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      <path d="m4 10 1.5 2L4 14" />
      <path d="m7 21 3-6-1.5-3" />
      <path d="m7 3 3 6h2" />
    </symbol>
    <symbol id="thermometer-sun" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="M12 8a4 4 0 0 0-1.645 7.647" />
      <path d="M2 12h2" />
      <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m6.34 17.66-1.41 1.41" />
    </symbol>
    <symbol id="thermometer" viewBox="0 0 24 24">
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </symbol>
    <symbol id="thumbs-down" viewBox="0 0 24 24">
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
      <path d="M17 14V2" />
    </symbol>
    <symbol id="thumbs-up" viewBox="0 0 24 24">
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      <path d="M7 10v12" />
    </symbol>
    <symbol id="tic-tac-toe" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="m21 16-5 5" />
      <path d="m21 21-5-5" />
      <path d="M22 12H2" />
      <path d="M8 3 3 8" />
      <path d="M8 8 3 3" />
      <circle cx="18.5" cy="5.5" r="2.5" />
      <circle cx="5.5" cy="18.5" r="2.5" />
    </symbol>
    <symbol id="ticket-check" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="m9 12 2 2 4-4" />
    </symbol>
    <symbol id="ticket-minus" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M9 12h6" />
    </symbol>
    <symbol id="ticket-percent" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M9 9h.01" />
      <path d="m15 9-6 6" />
      <path d="M15 15h.01" />
    </symbol>
    <symbol id="ticket-plus" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </symbol>
    <symbol id="ticket-slash" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="m9.5 14.5 5-5" />
    </symbol>
    <symbol id="ticket-x" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="m9.5 14.5 5-5" />
      <path d="m9.5 9.5 5 5" />
    </symbol>
    <symbol id="ticket" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </symbol>
    <symbol id="tickets-plane" viewBox="0 0 24 24">
      <path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
      <path d="m12 13.5 3.794.506" />
      <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" />
      <path d="M6 10V8" />
      <path d="M6 14v1" />
      <path d="M6 19v2" />
      <rect x="2" y="8" width="20" height="13" rx="2" />
    </symbol>
    <symbol id="tickets" viewBox="0 0 24 24">
      <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" />
      <path d="M6 10V8" />
      <path d="M6 14v1" />
      <path d="M6 19v2" />
      <rect x="2" y="8" width="20" height="13" rx="2" />
    </symbol>
    <symbol id="timeline" viewBox="0 0 24 24">
      <path d="M4 12h.01" />
      <path d="M4 16h.01" />
      <path d="M4 20h.01" />
      <path d="M4 4h.01" />
      <path d="M4 8h.01" />
      <path d="M9.414 13.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 12z" />
      <path d="M9.414 21.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 20z" />
      <path d="M9.414 5.414A2 2 0 0 0 10.828 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 4z" />
    </symbol>
    <symbol id="timer-off" viewBox="0 0 24 24">
      <path d="M10 2h4" />
      <path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
      <path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
      <path d="m2 2 20 20" />
      <path d="M12 12v-2" />
    </symbol>
    <symbol id="timer-reset" viewBox="0 0 24 24">
      <path d="M10 2h4" />
      <path d="M12 14v-4" />
      <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
      <path d="M9 17H4v5" />
    </symbol>
    <symbol id="timer" viewBox="0 0 24 24">
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </symbol>
    <symbol id="toggle-left" viewBox="0 0 24 24">
      <circle cx="9" cy="12" r="3" />
      <rect width="20" height="14" x="2" y="5" rx="7" />
    </symbol>
    <symbol id="toggle-right" viewBox="0 0 24 24">
      <circle cx="15" cy="12" r="3" />
      <rect width="20" height="14" x="2" y="5" rx="7" />
    </symbol>
    <symbol id="toilet" viewBox="0 0 24 24">
      <path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" />
      <path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
    </symbol>
    <symbol id="tombstone" viewBox="0 0 24 24">
      <path d="M11 10h2" />
      <path d="M19 21V10a7 7 0 00-14 0v11" />
      <path d="M2 21h20" />
      <path d="M9 14h6" />
    </symbol>
    <symbol id="tool-case" viewBox="0 0 24 24">
      <path d="M10 15h4" />
      <path d="m14.5 4.058.571-1.429a1 1 0 011.3-.558l5 2a1 1 0 01.549.534.88.88 0 01.01.765l-2.332 5.83" />
      <path d="M15.634 11a2 2 0 00-.186-.34l-1.17-1.757 1.31-1.656a2 2 0 00-2.109-3.165l-2.032.57-1.17-1.758a2 2 0 00-3.664 1.028l-.086 2.11-2.032.568a2 2 0 00-.155 3.8l1.617.6" />
      <path d="M4 12.006A1 1 0 014.994 11H19a1 1 0 011 1v7a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
    </symbol>
    <symbol id="toolbox" viewBox="0 0 24 24">
      <path d="M16 12v4" />
      <path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <path d="M17 6a2 2 0 011.414.586l3 3A2 2 0 0122 11v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 01.586-1.414l3-3A2 2 0 017 6z" />
      <path d="M2 14h20" />
      <path d="M8 12v4" />
    </symbol>
    <symbol id="toothbrush-sparkles" viewBox="0 0 24 24">
      <path d="M10 3H8" />
      <path d="M14.586 11.414 22 4" />
      <path d="M15 11a8 8 0 01-.429.4" />
      <path d="m2 22 7-7c1.857-1.857 3.714-1.99 5.571-3.6l-1.985-1.986A2 2 0 0114 6a2 2 0 012-2 2 2 0 013.262-1.552l2.152 2.138" />
      <path d="M20 15v4" />
      <path d="M22 17h-4" />
      <path d="M4 5v4" />
      <path d="M6 7H2" />
      <path d="M9 2v2" />
    </symbol>
    <symbol id="toothbrush" viewBox="0 0 24 24">
      <path d="M15 11c-2 2-4 2-6 4l-7 7" />
      <path d="m22 4-7.414 7.414-2-2A2 2 0 0114 6c0-.512.196-1.024.586-1.414A2 2 0 0116 4a2 2 0 013.262-1.552l2.152 2.138" />
    </symbol>
    <symbol id="tornado" viewBox="0 0 24 24">
      <path d="M21 4H3" />
      <path d="M18 8H6" />
      <path d="M19 12H9" />
      <path d="M16 16h-6" />
      <path d="M11 20H9" />
    </symbol>
    <symbol id="torus" viewBox="0 0 24 24">
      <ellipse cx="12" cy="11" rx="3" ry="2" />
      <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
    </symbol>
    <symbol id="touchpad-off" viewBox="0 0 24 24">
      <path d="M12 20v-6" />
      <path d="M19.656 14H22" />
      <path d="M2 14h12" />
      <path d="m2 2 20 20" />
      <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
      <path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" />
    </symbol>
    <symbol id="touchpad" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 14h20" />
      <path d="M12 20v-6" />
    </symbol>
    <symbol id="towel-rack" viewBox="0 0 24 24">
      <path d="M22 7h-2" />
      <path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4" />
      <path d="M9 7H2" />
    </symbol>
    <symbol id="tower-control" viewBox="0 0 24 24">
      <path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
      <path d="M8 13v9" />
      <path d="M16 22v-9" />
      <path d="m9 6 1 7" />
      <path d="m15 6-1 7" />
      <path d="M12 6V2" />
      <path d="M13 2h-2" />
    </symbol>
    <symbol id="toy-brick" viewBox="0 0 24 24">
      <rect width="18" height="12" x="3" y="8" rx="1" />
      <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
    </symbol>
    <symbol id="tractor" viewBox="0 0 24 24">
      <path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" />
      <path d="M16 18h-5" />
      <path d="M18 5a1 1 0 0 0-1 1v5.573" />
      <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" />
      <path d="M4 11V4" />
      <path d="M7 15h.01" />
      <path d="M8 10.1V4" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="7" cy="15" r="5" />
    </symbol>
    <symbol id="traffic-cone" viewBox="0 0 24 24">
      <path d="M16.05 10.966a5 2.5 0 0 1-8.1 0" />
      <path d="m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" />
      <path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" />
      <path d="M9.194 6.57a5 2.5 0 0 0 5.61 0" />
    </symbol>
    <symbol id="trailer" viewBox="0 0 24 24">
      <path d="M10 11.341V10" />
      <path d="M14 13v-3" />
      <path d="M18 17V8a2 2 0 00-2-2H4a2 2 0 00-2 2v7a2 2 0 002 2h2" />
      <path d="M22 15v1a1 1 0 01-1 1H10" />
      <path d="M6 11.341V10" />
      <circle cx="8" cy="17" r="2" />
    </symbol>
    <symbol id="train-front-tunnel" viewBox="0 0 24 24">
      <path d="M2 22V12a10 10 0 1 1 20 0v10" />
      <path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
      <path d="M10 15h.01" />
      <path d="M14 15h.01" />
      <path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
      <path d="m9 19-2 3" />
      <path d="m15 19 2 3" />
    </symbol>
    <symbol id="train-front" viewBox="0 0 24 24">
      <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
      <path d="m9 15-1-1" />
      <path d="m15 15 1-1" />
      <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
      <path d="m8 19-2 3" />
      <path d="m16 19 2 3" />
    </symbol>
    <symbol id="train-track" viewBox="0 0 24 24">
      <path d="M2 17 17 2" />
      <path d="m2 14 8 8" />
      <path d="m5 11 8 8" />
      <path d="m8 8 8 8" />
      <path d="m11 5 8 8" />
      <path d="m14 2 8 8" />
      <path d="M7 22 22 7" />
    </symbol>
    <symbol id="tram-front" viewBox="0 0 24 24">
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="m8 19-2 3" />
      <path d="m18 22-2-3" />
      <path d="M8 15h.01" />
      <path d="M16 15h.01" />
    </symbol>
    <symbol id="transgender" viewBox="0 0 24 24">
      <path d="M12 16v6" />
      <path d="M14 20h-4" />
      <path d="M18 2h4v4" />
      <path d="m2 2 7.17 7.17" />
      <path d="M2 5.355V2h3.357" />
      <path d="m22 2-7.17 7.17" />
      <path d="M8 5 5 8" />
      <circle cx="12" cy="12" r="4" />
    </symbol>
    <symbol id="trash-off" viewBox="0 0 24 24">
      <path d="M10 11v6" />
      <path d="M14 17v-3" />
      <path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-1.576.768" />
      <path d="M19 6v7.344" />
      <path d="m2 2 20 20" />
      <path d="M21 6h-9.344" />
      <path d="M3 6h3" />
      <path d="M5 6v14a2 2 0 002 2h10a2 2 0 002-2v-1" />
    </symbol>
    <symbol id="trash" viewBox="0 0 24 24">
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="tree-deciduous" viewBox="0 0 24 24">
      <path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" />
      <path d="M12 19v3" />
    </symbol>
    <symbol id="tree-palm" viewBox="0 0 24 24">
      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
      <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
      <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
      <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
    </symbol>
    <symbol id="tree-pine" viewBox="0 0 24 24">
      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
      <path d="M12 22v-3" />
    </symbol>
    <symbol id="trees" viewBox="0 0 24 24">
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </symbol>
    <symbol id="trending-down" viewBox="0 0 24 24">
      <path d="M16 17h6v-6" />
      <path d="m22 17-8.5-8.5-5 5L2 7" />
    </symbol>
    <symbol id="trending-up-down" viewBox="0 0 24 24">
      <path d="M14.828 14.828 21 21" />
      <path d="M21 16v5h-5" />
      <path d="m21 3-9 9-4-4-6 6" />
      <path d="M21 8V3h-5" />
    </symbol>
    <symbol id="trending-up" viewBox="0 0 24 24">
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </symbol>
    <symbol id="triangle-dashed" viewBox="0 0 24 24">
      <path d="M10.17 4.193a2 2 0 0 1 3.666.013" />
      <path d="M14 21h2" />
      <path d="m15.874 7.743 1 1.732" />
      <path d="m18.849 12.952 1 1.732" />
      <path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" />
      <path d="M4.024 21a2 2 0 0 1-1.839-2.839" />
      <path d="m5.136 12.952-1 1.732" />
      <path d="M8 21h2" />
      <path d="m8.102 7.743-1 1.732" />
    </symbol>
    <symbol id="triangle-exclamation-point" viewBox="0 0 24 24">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="triangle-right" viewBox="0 0 24 24">
      <path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" />
    </symbol>
    <symbol id="triangle" viewBox="0 0 24 24">
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </symbol>
    <symbol id="triangles-centerline-dashed-horizontal" viewBox="0 0 24 24">
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
      <path d="M4 12H2" />
      <path d="M7.298 20.288A1 1 0 008 22h8a1 1 0 00.703-1.712l-3.991-3.99a1 1 0 00-1.424-.001z" />
      <path d="M7.298 3.712A1 1 0 018 2h8a1 1 0 01.703 1.712l-3.991 3.99a1 1 0 01-1.424.001z" />
    </symbol>
    <symbol id="triangles-centerline-dashed-vertical" viewBox="0 0 24 24">
      <path d="M12 14v2" />
      <path d="M12 20v2" />
      <path d="M12 2v2" />
      <path d="M12 8v2" />
      <path d="M20.288 16.703A1 1 0 0022 16V8a1 1 0 00-1.712-.703l-3.99 3.991a1 1 0 00-.001 1.424z" />
      <path d="M3.712 16.703A1 1 0 012 16V8a1 1 0 011.712-.703l3.99 3.991a1 1 0 01.001 1.424z" />
    </symbol>
    <symbol id="trophy" viewBox="0 0 24 24">
      <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
      <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
      <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
      <path d="M4 22h16" />
      <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
      <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
    </symbol>
    <symbol id="truck-electric" viewBox="0 0 24 24">
      <path d="M14 19V7a2 2 0 0 0-2-2H9" />
      <path d="M15 19H9" />
      <path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" />
      <path d="M2 13v5a1 1 0 0 0 1 1h2" />
      <path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" />
      <circle cx="17" cy="19" r="2" />
      <circle cx="7" cy="19" r="2" />
    </symbol>
    <symbol id="truck" viewBox="0 0 24 24">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </symbol>
    <symbol id="tube-lotion" viewBox="0 0 24 24">
      <path d="M15 18v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3" />
      <path d="M17 2a2 2 0 0 1 1.6 3.2A8 8 0 0 0 17 10v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a8 8 0 0 0-1.6-4.8A2 2 0 0 1 7 2z" />
      <path d="M7 10a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </symbol>
    <symbol id="turkish-lira" viewBox="0 0 24 24">
      <path d="m14 10-8 4" />
      <path d="M14 5 6 9" />
      <path d="M18 12a8 8 0 01-7.003 7.937c-.547.07-.997-.385-.997-.937V4" />
    </symbol>
    <symbol id="turntable" viewBox="0 0 24 24">
      <path d="M10 12.01h.01" />
      <path d="M18 8v4a8 8 0 0 1-1.07 4" />
      <circle cx="10" cy="12" r="4" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </symbol>
    <symbol id="turtle" viewBox="0 0 24 24">
      <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
      <path d="M4.82 7.9 8 10" />
      <path d="M15.18 7.9 12 10" />
      <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
    </symbol>
    <symbol id="tv-minimal-play" viewBox="0 0 24 24">
      <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
      <path d="M7 21h10" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
    </symbol>
    <symbol id="tv-minimal" viewBox="0 0 24 24">
      <path d="M7 21h10" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
    </symbol>
    <symbol id="tv" viewBox="0 0 24 24">
      <path d="m17 2-5 5-5-5" />
      <rect width="20" height="15" x="2" y="7" rx="2" />
    </symbol>
    <symbol id="type-outline" viewBox="0 0 24 24">
      <path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" />
    </symbol>
    <symbol id="type" viewBox="0 0 24 24">
      <path d="M12 4v16" />
      <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
      <path d="M9 20h6" />
    </symbol>
    <symbol id="umbrella-off" viewBox="0 0 24 24">
      <path d="M12 13v7a2 2 0 0 0 4 0" />
      <path d="M12 2v2" />
      <path d="M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" />
      <path d="m2 2 20 20" />
      <path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" />
    </symbol>
    <symbol id="umbrella" viewBox="0 0 24 24">
      <path d="M12 13v7a2 2 0 0 0 4 0" />
      <path d="M12 2v2" />
      <path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" />
    </symbol>
    <symbol id="underline" viewBox="0 0 24 24">
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" x2="20" y1="20" y2="20" />
    </symbol>
    <symbol id="undo-2" viewBox="0 0 24 24">
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
    </symbol>
    <symbol id="undo-dot" viewBox="0 0 24 24">
      <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
      <path d="M3 7v6h6" />
      <circle cx="12" cy="17" r="1" />
    </symbol>
    <symbol id="undo" viewBox="0 0 24 24">
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </symbol>
    <symbol id="unfold-horizontal" viewBox="0 0 24 24">
      <path d="M16 12h6" />
      <path d="M8 12H2" />
      <path d="M12 2v2" />
      <path d="M12 8v2" />
      <path d="M12 14v2" />
      <path d="M12 20v2" />
      <path d="m19 15 3-3-3-3" />
      <path d="m5 9-3 3 3 3" />
    </symbol>
    <symbol id="unfold-vertical" viewBox="0 0 24 24">
      <path d="M12 22v-6" />
      <path d="M12 8V2" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
      <path d="m15 19-3 3-3-3" />
      <path d="m15 5-3-3-3 3" />
    </symbol>
    <symbol id="ungroup" viewBox="0 0 24 24">
      <rect x="11" y="14" width="10" height="7" rx="2" />
      <rect x="3" y="3" width="10" height="7" rx="2" />
    </symbol>
    <symbol id="university" viewBox="0 0 24 24">
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M18 12h.01" />
      <path d="M18 16h.01" />
      <path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
      <path d="M6 12h.01" />
      <path d="M6 16h.01" />
      <circle cx="12" cy="10" r="2" />
    </symbol>
    <symbol id="unlink-2" viewBox="0 0 24 24">
      <path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" />
    </symbol>
    <symbol id="unlink" viewBox="0 0 24 24">
      <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
      <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
      <line x1="8" x2="8" y1="2" y2="5" />
      <line x1="2" x2="5" y1="8" y2="8" />
      <line x1="16" x2="16" y1="19" y2="22" />
      <line x1="19" x2="22" y1="16" y2="16" />
    </symbol>
    <symbol id="unplug" viewBox="0 0 24 24">
      <path d="m19 5 3-3" />
      <path d="m2 22 3-3" />
      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
      <path d="M7.5 13.5 10 11" />
      <path d="M10.5 16.5 13 14" />
      <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
    </symbol>
    <symbol id="upload" viewBox="0 0 24 24">
      <path d="M12 3v12" />
      <path d="m17 8-5-5-5 5" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </symbol>
    <symbol id="usb-c-port" viewBox="0 0 24 24">
      <path d="M6 12h12" />
      <rect x="2" y="8" width="20" height="8" rx="4" />
    </symbol>
    <symbol id="usb" viewBox="0 0 24 24">
      <circle cx="10" cy="7" r="1" />
      <circle cx="4" cy="20" r="1" />
      <path d="M4.7 19.3 19 5" />
      <path d="m21 3-3 1 2 2Z" />
      <path d="M9.26 7.68 5 12l2 5" />
      <path d="m10 14 5 2 3.5-3.5" />
      <path d="m18 12 1-1 1 1-1 1Z" />
    </symbol>
    <symbol id="user-check" viewBox="0 0 24 24">
      <path d="m16 11 2 2 4-4" />
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </symbol>
    <symbol id="user-cog" viewBox="0 0 24 24">
      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
      <path d="m14.305 16.53.923-.382" />
      <path d="m15.228 13.852-.923-.383" />
      <path d="m16.852 12.228-.383-.923" />
      <path d="m16.852 17.772-.383.924" />
      <path d="m19.148 12.228.383-.923" />
      <path d="m19.53 18.696-.382-.924" />
      <path d="m20.772 13.852.924-.383" />
      <path d="m20.772 16.148.924.383" />
      <circle cx="18" cy="15" r="3" />
      <circle cx="9" cy="7" r="4" />
    </symbol>
    <symbol id="user-exclamation-point" viewBox="0 0 24 24">
      <path d="M15 15H9a4 4 0 00-4 4v2" />
      <path d="M18.988 13v4" />
      <path d="M18.988 21h.01" />
      <circle cx="12" cy="7" r="4" />
    </symbol>
    <symbol id="user-group" viewBox="0 0 24 24">
      <path d="M17 21v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1" />
      <path d="M19 10h1a2 2 0 012 2v1" />
      <path d="M5 10H4a2 2 0 00-2 2v1" />
      <circle cx="12" cy="11" r="3" />
      <circle cx="18" cy="4" r="2" />
      <circle cx="6" cy="4" r="2" />
    </symbol>
    <symbol id="user-key" viewBox="0 0 24 24">
      <path d="M20 11v6" />
      <path d="M20 13h2" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
      <circle cx="10" cy="7" r="4" />
      <circle cx="20" cy="19" r="2" />
    </symbol>
    <symbol id="user-lock" viewBox="0 0 24 24">
      <path d="M19 16v-2a2 2 0 0 0-4 0v2" />
      <path d="M9.5 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <rect x="13" y="16" width="8" height="5" rx=".899" />
    </symbol>
    <symbol id="user-minus" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </symbol>
    <symbol id="user-pen" viewBox="0 0 24 24">
      <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <circle cx="10" cy="7" r="4" />
    </symbol>
    <symbol id="user-plus" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </symbol>
    <symbol id="user-round-arrow-left" viewBox="0 0 24 24">
      <path d="m19 16-3 3" />
      <path d="M2 21a8 8 0 0 1 12.664-6.5" />
      <path d="M22 19h-6l3 3" />
      <circle cx="10" cy="8" r="5" />
    </symbol>
    <symbol id="user-round-check" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <circle cx="10" cy="8" r="5" />
      <path d="m16 19 2 2 4-4" />
    </symbol>
    <symbol id="user-round-cog" viewBox="0 0 24 24">
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <circle cx="10" cy="8" r="5" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="user-round-exclamation-point" viewBox="0 0 24 24">
      <path d="M19.99 13v4" />
      <path d="M19.99 21H20" />
      <path d="M4 21a8 8 0 0111.99-6.934" />
      <circle cx="12" cy="8" r="5" />
    </symbol>
    <symbol id="user-round-group" viewBox="0 0 24 24">
      <path d="M17 21a5 5 0 00-10 0" />
      <path d="M22 10.5a3.5 3.5 0 00-5.507-2.868" />
      <path d="M7.507 7.632A3.5 3.5 0 002 10.5" />
      <circle cx="12" cy="13" r="3" />
      <circle cx="18.5" cy="4.5" r="2.5" />
      <circle cx="5.5" cy="4.5" r="2.5" />
    </symbol>
    <symbol id="user-round-key" viewBox="0 0 24 24">
      <path d="M19 11v6" />
      <path d="M19 13h2" />
      <path d="M2 21a8 8 0 0 1 12.868-6.349" />
      <circle cx="10" cy="8" r="5" />
      <circle cx="19" cy="19" r="2" />
    </symbol>
    <symbol id="user-round-minus" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 19h-6" />
    </symbol>
    <symbol id="user-round-pen" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 10.821-7.487" />
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <circle cx="10" cy="8" r="5" />
    </symbol>
    <symbol id="user-round-plus" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <circle cx="10" cy="8" r="5" />
      <path d="M19 16v6" />
      <path d="M22 19h-6" />
    </symbol>
    <symbol id="user-round-search" viewBox="0 0 24 24">
      <circle cx="10" cy="8" r="5" />
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <circle cx="18" cy="18" r="3" />
      <path d="m22 22-1.9-1.9" />
    </symbol>
    <symbol id="user-round-shield" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 8-8 5 5 0 1 1 4.845-3.759" />
      <path d="M22 17.5c0 2.5-1.75 3.75-3.83 4.474a.5.5 0 0 1-.335-.005C15.75 21.25 14 20 14 17.5V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" />
    </symbol>
    <symbol id="user-round-star" viewBox="0 0 24 24">
      <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
      <path d="M2 21a8 8 0 0 1 6.778-7.905" />
      <path d="M8.927 12.885a5 5 0 1 1 6.061-4.535" />
    </symbol>
    <symbol id="user-round-x" viewBox="0 0 24 24">
      <path d="m16.5 16.5 5 5" />
      <path d="M2 21a8 8 0 0 1 11.531-7.18" />
      <path d="m21.5 16.5-5 5" />
      <circle cx="10" cy="8" r="5" />
    </symbol>
    <symbol id="user-round" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </symbol>
    <symbol id="user-search" viewBox="0 0 24 24">
      <circle cx="10" cy="7" r="4" />
      <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="17" cy="17" r="3" />
      <path d="m21 21-1.9-1.9" />
    </symbol>
    <symbol id="user-shield" viewBox="0 0 24 24">
      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
      <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" />
      <circle cx="9" cy="7" r="4" />
    </symbol>
    <symbol id="user-star" viewBox="0 0 24 24">
      <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
      <path d="M8 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
    </symbol>
    <symbol id="user-x" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="17" x2="22" y1="8" y2="13" />
      <line x1="22" x2="17" y1="8" y2="13" />
    </symbol>
    <symbol id="user" viewBox="0 0 24 24">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </symbol>
    <symbol id="users-collaboration" viewBox="0 0 24 24">
      <path d="M12.925 3.047a9 9 0 017.616 6.11" />
      <path d="M13 22a2 2 0 012-2h4a2 2 0 012 2" />
      <path d="M3 12a2 2 0 012-2h4a2 2 0 012 2" />
      <path d="M3.889 15.9a9 9 0 005.247 4.632" />
      <circle cx="17" cy="14" r="2" />
      <circle cx="7" cy="4" r="2" />
    </symbol>
    <symbol id="users-round-collaboration" viewBox="0 0 24 24">
      <path d="M20.453 8.911a9 9 0 00-6.696-5.738" />
      <path d="M21 22a4 4 0 00-8 0" />
      <path d="M3 12a4 4 0 017.963-.543" />
      <path d="M3.889 15.9a9 9 0 005.247 4.632" />
      <circle cx="17" cy="15" r="3" />
      <circle cx="7" cy="5" r="3" />
    </symbol>
    <symbol id="users-round" viewBox="0 0 24 24">
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </symbol>
    <symbol id="users" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </symbol>
    <symbol id="utensils-crossed" viewBox="0 0 24 24">
      <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
      <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
      <path d="m2.1 21.8 6.4-6.3" />
      <path d="m19 5-7 7" />
    </symbol>
    <symbol id="utensils" viewBox="0 0 24 24">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </symbol>
    <symbol id="utility-pole" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="M2 5h20" />
      <path d="M3 3v2" />
      <path d="M7 3v2" />
      <path d="M17 3v2" />
      <path d="M21 3v2" />
      <path d="m19 5-7 7-7-7" />
    </symbol>
    <symbol id="van" viewBox="0 0 24 24">
      <path d="M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3" />
      <path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </symbol>
    <symbol id="variable" viewBox="0 0 24 24">
      <path d="M8 21s-4-3-4-9 4-9 4-9" />
      <path d="M16 3s4 3 4 9-4 9-4 9" />
      <line x1="15" x2="9" y1="9" y2="15" />
      <line x1="9" x2="15" y1="9" y2="15" />
    </symbol>
    <symbol id="vault" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      <path d="m7.9 7.9 2.7 2.7" />
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
      <path d="m13.4 10.6 2.7-2.7" />
      <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
      <path d="m7.9 16.1 2.7-2.7" />
      <circle cx="16.5" cy="16.5" r=".5" fill="currentColor" />
      <path d="m13.4 13.4 2.7 2.7" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="vector-polygon" viewBox="0 0 24 24">
      <path d="m12.828 4.813 5.344 2.375" />
      <path d="m15.769 18.153 3.461-8.306" />
      <path d="m5.687 14.074 7.625 4.852" />
      <path d="M9.772 5.579 5.228 11.42" />
      <circle cx="11" cy="4" r="2" />
      <circle cx="15" cy="20" r="2" />
      <circle cx="20" cy="8" r="2" />
      <circle cx="4" cy="13" r="2" />
    </symbol>
    <symbol id="vector-square" viewBox="0 0 24 24">
      <path d="M17.055 4.533a24 24 0 00-10.11 0" />
      <path d="M19.467 17.055a24 24 0 000-10.11" />
      <path d="M4.533 6.945a24 24 0 000 10.11" />
      <path d="M6.945 19.467a24 24 0 0010.11 0" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
    </symbol>
    <symbol id="vegan" viewBox="0 0 24 24">
      <path d="M16 8q6 0 6-6-6 0-6 6" />
      <path d="M17.41 3.59a10 10 0 1 0 3 3" />
      <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
    </symbol>
    <symbol id="venetian-mask" viewBox="0 0 24 24">
      <path d="M18 11c-1.5 0-2.5.5-3 2" />
      <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
      <path d="M6 11c1.5 0 2.5.5 3 2" />
    </symbol>
    <symbol id="venus-and-mars" viewBox="0 0 24 24">
      <path d="M10 20h4" />
      <path d="M12 16v6" />
      <path d="M17 2h4v4" />
      <path d="m21 2-5.46 5.46" />
      <circle cx="12" cy="11" r="5" />
    </symbol>
    <symbol id="venus" viewBox="0 0 24 24">
      <path d="M12 15v7" />
      <path d="M9 19h6" />
      <circle cx="12" cy="9" r="6" />
    </symbol>
    <symbol id="vibrate-off" viewBox="0 0 24 24">
      <path d="m2 8 2 2-2 2 2 2-2 2" />
      <path d="m22 8-2 2 2 2-2 2 2 2" />
      <path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
      <path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="vibrate" viewBox="0 0 24 24">
      <path d="m2 8 2 2-2 2 2 2-2 2" />
      <path d="m22 8-2 2 2 2-2 2 2 2" />
      <rect width="8" height="14" x="8" y="5" rx="1" />
    </symbol>
    <symbol id="video-off" viewBox="0 0 24 24">
      <path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" />
      <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="video" viewBox="0 0 24 24">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </symbol>
    <symbol id="videotape" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 8h20" />
      <circle cx="8" cy="14" r="2" />
      <path d="M8 12h8" />
      <circle cx="16" cy="14" r="2" />
    </symbol>
    <symbol id="view" viewBox="0 0 24 24">
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
    </symbol>
    <symbol id="virus-off" viewBox="0 0 24 24">
      <path d="M10.01 10h.01" />
      <path d="M12 14.991h.01" />
      <path d="M12 22v-3" />
      <path d="M12 2v3" />
      <path d="M13 22h-2" />
      <path d="M13 2h-2" />
      <path d="m16.5 19.794-1-1.733" />
      <path d="m16.5 4.205-1 1.732" />
      <path d="M18.891 13.235a7 7 0 00-8.126-8.126" />
      <path d="m19.794 7.5-1.732 1" />
      <path d="M2 12h3" />
      <path d="M2 13v-2" />
      <path d="m2 2 20 20" />
      <path d="M22 12h-3" />
      <path d="M22 13v-2" />
      <path d="m4.206 16.5 1.732-1" />
      <path d="m4.206 7.5 1.732 1" />
      <path d="M7.05 7.05a7 7 0 009.9 9.9" />
      <path d="m7.5 19.794 1-1.733" />
      <path d="M9 12h.01" />
    </symbol>
    <symbol id="virus" viewBox="0 0 24 24">
      <path d="M12 14.991h.01" />
      <path d="M12 22v-3" />
      <path d="M12 2v3" />
      <path d="M13 22h-2" />
      <path d="M13 2h-2" />
      <path d="M13.99 10H14" />
      <path d="m16.5 19.794-1-1.733" />
      <path d="m16.5 4.205-1 1.732" />
      <path d="m19.794 16.5-1.732-1" />
      <path d="m19.794 7.5-1.732 1" />
      <path d="M2 12h3" />
      <path d="M2 13v-2" />
      <path d="M22 12h-3" />
      <path d="M22 13v-2" />
      <path d="m4.206 16.5 1.732-1" />
      <path d="m4.206 7.5 1.732 1" />
      <path d="m7.5 19.794 1-1.733" />
      <path d="m7.5 4.205 1 1.732" />
      <path d="M9 12h.01" />
      <circle cx="12" cy="12" r="7" />
    </symbol>
    <symbol id="voicemail" viewBox="0 0 24 24">
      <circle cx="6" cy="12" r="4" />
      <circle cx="18" cy="12" r="4" />
      <line x1="6" x2="18" y1="16" y2="16" />
    </symbol>
    <symbol id="volleyball" viewBox="0 0 24 24">
      <path d="M11 7a16 16 20 0 1 10.98 4.362" />
      <path d="M12 12a13 13 0 0 1-8.66 5" />
      <path d="M16.83 13.634a16 16 0 0 1-9.267 7.328" />
      <path d="M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10" />
      <path d="M8.17 15.366a16 16 0 0 1-1.713-11.69" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="volume-1" viewBox="0 0 24 24">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
    </symbol>
    <symbol id="volume-2" viewBox="0 0 24 24">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
      <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
    </symbol>
    <symbol id="volume-off" viewBox="0 0 24 24">
      <path d="M16 9a5 5 0 0 1 .95 2.293" />
      <path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
      <path d="m2 2 20 20" />
      <path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
      <path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
    </symbol>
    <symbol id="volume-x" viewBox="0 0 24 24">
      <path d="M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z" />
      <path d="m16.5 14.5 5-5" />
      <path d="m16.5 9.5 5 5" />
    </symbol>
    <symbol id="volume" viewBox="0 0 24 24">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
    </symbol>
    <symbol id="vote" viewBox="0 0 24 24">
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </symbol>
    <symbol id="wallet-cards" viewBox="0 0 24 24">
      <path d="M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21" />
      <path d="M3 7h18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="wallet-minimal" viewBox="0 0 24 24">
      <path d="M17 14h.01" />
      <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
    </symbol>
    <symbol id="wallet" viewBox="0 0 24 24">
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </symbol>
    <symbol id="wallpaper" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" />
      <circle cx="8" cy="9" r="2" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="wand-sparkles" viewBox="0 0 24 24">
      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
      <path d="m14 7 3 3" />
      <path d="M5 6v4" />
      <path d="M19 14v4" />
      <path d="M10 2v2" />
      <path d="M7 8H3" />
      <path d="M21 16h-4" />
      <path d="M11 3H9" />
    </symbol>
    <symbol id="wand" viewBox="0 0 24 24">
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h.01" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </symbol>
    <symbol id="warehouse" viewBox="0 0 24 24">
      <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" />
      <path d="M6 13h12" />
      <path d="M6 17h12" />
    </symbol>
    <symbol id="washing-machine" viewBox="0 0 24 24">
      <path d="M3 6h3" />
      <path d="M17 6h.01" />
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </symbol>
    <symbol id="watch" viewBox="0 0 24 24">
      <path d="M12 10v2.2l1.6 1" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
      <circle cx="12" cy="12" r="6" />
    </symbol>
    <symbol id="waves-arrow-down" viewBox="0 0 24 24">
      <path d="M12 10L12 2" />
      <path d="M16 6L12 10L8 6" />
      <path d="M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15" />
      <path d="M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21" />
    </symbol>
    <symbol id="waves-arrow-up" viewBox="0 0 24 24">
      <path d="M12 2v8" />
      <path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="m8 6 4-4 4 4" />
    </symbol>
    <symbol id="waves-horizontal" viewBox="0 0 24 24">
      <path d="M2 12q2.5 2 5 0t5 0 5 0 5 0" />
      <path d="M2 19q2.5 2 5 0t5 0 5 0 5 0" />
      <path d="M2 5q2.5 2 5 0t5 0 5 0 5 0" />
    </symbol>
    <symbol id="waves-ladder" viewBox="0 0 24 24">
      <path d="M19 5a2 2 0 0 0-2 2v11" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M7 13h10" />
      <path d="M7 9h10" />
      <path d="M9 5a2 2 0 0 0-2 2v11" />
    </symbol>
    <symbol id="waves-vertical" viewBox="0 0 24 24">
      <path d="M12 2q2 2.5 0 5t0 5 0 5 0 5" />
      <path d="M19 2q2 2.5 0 5t0 5 0 5 0 5" />
      <path d="M5 2q2 2.5 0 5t0 5 0 5 0 5" />
    </symbol>
    <symbol id="waypoints" viewBox="0 0 24 24">
      <path d="m10.586 5.414-5.172 5.172" />
      <path d="m18.586 13.414-5.172 5.172" />
      <path d="M6 12h12" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="20" cy="12" r="2" />
      <circle cx="4" cy="12" r="2" />
    </symbol>
    <symbol id="webcam-off" viewBox="0 0 24 24">
      <path d="M12 22v-4" />
      <path d="M12.754 7.096a3 3 0 0 1 2.15 2.15" />
      <path d="M12.863 12.873a3 3 0 0 1-3.736-3.735" />
      <path d="M16.566 16.57A8 8 0 0 1 5.43 5.433" />
      <path d="m2 2 20 20" />
      <path d="M7 22h10" />
      <path d="M8.478 2.817a8 8 0 0 1 10.705 10.705" />
    </symbol>
    <symbol id="webcam" viewBox="0 0 24 24">
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </symbol>
    <symbol id="webhook-off" viewBox="0 0 24 24">
      <path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" />
      <path d="M9 3.4a4 4 0 0 1 6.52.66" />
      <path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" />
      <path d="M20.3 20.3a4 4 0 0 1-2.3.7" />
      <path d="M18.6 13a4 4 0 0 1 3.357 3.414" />
      <path d="m12 6 .6 1" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="webhook" viewBox="0 0 24 24">
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </symbol>
    <symbol id="weight-tilde" viewBox="0 0 24 24">
      <path d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" />
      <path d="M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" />
      <circle cx="12" cy="5" r="3" />
    </symbol>
    <symbol id="weight" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="3" />
      <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
    </symbol>
    <symbol id="wheat-off" viewBox="0 0 24 24">
      <path d="m2 22 10-10" />
      <path d="m16 8-1.17 1.17" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" />
      <path d="M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" />
      <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
      <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" />
      <path d="M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="wheat" viewBox="0 0 24 24">
      <path d="M2 22 16 8" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
      <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
    </symbol>
    <symbol id="whistle" viewBox="0 0 24 24">
      <path d="M10 6v4" />
      <path d="M21 6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.675A7 7 0 1 1 9 6z" />
    </symbol>
    <symbol id="whole-word" viewBox="0 0 24 24">
      <circle cx="7" cy="12" r="3" />
      <path d="M10 9v6" />
      <circle cx="17" cy="12" r="3" />
      <path d="M14 7v8" />
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </symbol>
    <symbol id="wifi-cog" viewBox="0 0 24 24">
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="M2 8.82a15 15 0 0120 0" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <path d="M5 12.859a10 10 0 0110.18-2.342" />
      <path d="M8.5 16.429a5 5 0 011.998-1.2" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="wifi-high" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </symbol>
    <symbol id="wifi-lock" viewBox="0 0 24 24">
      <path d="M2 8.82a15 15 0 0120 0" />
      <path d="M20 16v-2a2 2 0 00-4 0v2" />
      <path d="M5 12.859a10 10 0 018.436-2.756" />
      <path d="M8.5 16.429a5 5 0 011.794-1.13" />
      <rect x="14" y="16" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="wifi-low" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </symbol>
    <symbol id="wifi-off" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
      <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
      <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
      <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="wifi-pen" viewBox="0 0 24 24">
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <path d="M5 12.859a10 10 0 0 1 10.5-2.222" />
      <path d="M8.5 16.429a5 5 0 0 1 3-1.406" />
    </symbol>
    <symbol id="wifi-sync" viewBox="0 0 24 24">
      <path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" />
      <path d="M11.965 14.105h4" />
      <path d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M21.965 22.105v-4" />
      <path d="M5 12.86a10 10 0 0 1 3-2.032" />
      <path d="M8.5 16.429h.01" />
    </symbol>
    <symbol id="wifi-zero" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
    </symbol>
    <symbol id="wifi" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </symbol>
    <symbol id="wind-arrow-down" viewBox="0 0 24 24">
      <path d="M10 2v8" />
      <path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
      <path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
      <path d="m6 6 4 4 4-4" />
    </symbol>
    <symbol id="wind-arrow-up" viewBox="0 0 24 24">
      <path d="M10 2v8" />
      <path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
      <path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
      <path d="m6 6 4 -4 4 4" />
    </symbol>
    <symbol id="wind" viewBox="0 0 24 24">
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </symbol>
    <symbol id="wine-off" viewBox="0 0 24 24">
      <path d="M8 22h8" />
      <path d="M7 10h3m7 0h-1.343" />
      <path d="M12 15v7" />
      <path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="wine" viewBox="0 0 24 24">
      <path d="M8 22h8" />
      <path d="M7 10h10" />
      <path d="M12 15v7" />
      <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
    </symbol>
    <symbol id="workflow" viewBox="0 0 24 24">
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </symbol>
    <symbol id="worm" viewBox="0 0 24 24">
      <path d="m19 12-1.5 3" />
      <path d="M19.63 18.81 22 20" />
      <path d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" />
    </symbol>
    <symbol id="wrench-off" viewBox="0 0 24 24">
      <path d="M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842" />
      <path d="m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="wrench" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </symbol>
    <symbol id="x-line-top" viewBox="0 0 24 24">
      <path d="M18 4H6" />
      <path d="M18 8 6 20" />
      <path d="m6 8 12 12" />
    </symbol>
    <symbol id="x" viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </symbol>
    <symbol id="zap-off" viewBox="0 0 24 24">
      <path d="M10.768 5.111 13.44 2.44a1.5 1.5 0 012.474 1.561l-1.633 4.625" />
      <path d="m18.889 13.232.672-.672A1.5 1.5 0 0018.5 10h-2.844" />
      <path d="m2 2 20 20" />
      <path d="m7.94 7.94-3.5 3.499A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l5.5-5.5" />
    </symbol>
    <symbol id="zap" viewBox="0 0 24 24">
      <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" />
    </symbol>
    <symbol id="zodiac-aquarius" viewBox="0 0 24 24">
      <path d="m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10" />
      <path d="m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002" />
    </symbol>
    <symbol id="zodiac-aries" viewBox="0 0 24 24">
      <path d="M12 7.5a4.5 4.5 0 1 1 5 4.5" />
      <path d="M7 12a4.5 4.5 0 1 1 5-4.5V21" />
    </symbol>
    <symbol id="zodiac-cancer" viewBox="0 0 24 24">
      <path d="M21 14.5A9 6.5 0 0 1 5.5 19" />
      <path d="M3 9.5A9 6.5 0 0 1 18.5 5" />
      <circle cx="17.5" cy="14.5" r="3.5" />
      <circle cx="6.5" cy="9.5" r="3.5" />
    </symbol>
    <symbol id="zodiac-capricorn" viewBox="0 0 24 24">
      <path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" />
      <path d="M7 19V6a3 3 0 0 0-3-3h0" />
      <circle cx="17" cy="17" r="3" />
    </symbol>
    <symbol id="zodiac-gemini" viewBox="0 0 24 24">
      <path d="M16 4.525v14.948" />
      <path d="M20 3A17 17 0 0 1 4 3" />
      <path d="M4 21a17 17 0 0 1 16 0" />
      <path d="M8 4.525v14.948" />
    </symbol>
    <symbol id="zodiac-leo" viewBox="0 0 24 24">
      <path d="M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0" />
      <circle cx="7" cy="16" r="3" />
    </symbol>
    <symbol id="zodiac-libra" viewBox="0 0 24 24">
      <path d="M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21" />
      <path d="M3 20h18" />
    </symbol>
    <symbol id="zodiac-ophiuchus" viewBox="0 0 24 24">
      <path d="M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" />
      <path d="M6 3v12a6 6 0 0 0 12 0V3" />
    </symbol>
    <symbol id="zodiac-pisces" viewBox="0 0 24 24">
      <path d="M19 21a15 15 0 0 1 0-18" />
      <path d="M20 12H4" />
      <path d="M5 3a15 15 0 0 1 0 18" />
    </symbol>
    <symbol id="zodiac-sagittarius" viewBox="0 0 24 24">
      <path d="M15 3h6v6" />
      <path d="M21 3 3 21" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="zodiac-scorpio" viewBox="0 0 24 24">
      <path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" />
      <path d="m22 19-3 3" />
      <path d="M5 19V5.5a1 1 0 0 1 5 0" />
      <path d="M5 5.5A2.5 2.5 0 0 0 2.5 3" />
    </symbol>
    <symbol id="zodiac-taurus" viewBox="0 0 24 24">
      <circle cx="12" cy="15" r="6" />
      <path d="M18 3A6 6 0 0 1 6 3" />
    </symbol>
    <symbol id="zodiac-virgo" viewBox="0 0 24 24">
      <path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" />
      <path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" />
      <path d="M6 19V6a3 3 0 0 0-3-3h0" />
      <path d="M6 5.5a1 1 0 0 1 5 0V19" />
    </symbol>
    <symbol id="zoom-in" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </symbol>
    <symbol id="zoom-out" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </symbol>
  </defs>
</svg>
`,oy={install(e){let t=document.createElement(`div`);t.id=`lucide-sprite`,t.style.display=`none`,t.innerHTML=ay,document.body.prepend(t)}},sy=i_({history:Cg(`/admin`),routes:[{path:`/`,name:`MyAccount`,component:()=>iy(()=>import(`./MyAccount-C9wcE-cX.js`),__vite__mapDeps([0,1]))},{path:`/users`,name:`Users`,component:()=>iy(()=>import(`./Users-D7M55-6a.js`),__vite__mapDeps([2,1,3]))}]});sy.beforeEach(e=>e.name===`Users`&&!window.can_manage_users?{name:`MyAccount`}:!0);var cy={inheritAttrs:!1,render(){return X(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`,...this.$attrs,innerHTML:`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" />`})}},ly={inheritAttrs:!1,render(){return X(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`,...this.$attrs,innerHTML:`<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />`})}},uy=gs({__name:`App`,setup(e){let t=window.can_manage_users;return(e,n)=>{let r=ly,i=cy,a=Qr(`RouterView`);return H(),W(P(Nv),null,{sidebar:I(()=>[K(P(Lv),null,{default:I(()=>[K(P(Qv),{title:e.__(`Admin`),subtitle:`COMPASS`},null,8,[`title`]),K(P(Gv),{label:e.__(`My account`),route:{name:`MyAccount`}},{prefix:I(()=>[K(r,{class:`size-4`})]),_:1},8,[`label`]),P(t)?(H(),W(P(Gv),{key:0,label:e.__(`User management`),route:{name:`Users`}},{prefix:I(()=>[K(i,{class:`size-4`})]),_:1},8,[`label`])):q(``,!0)]),_:1})]),default:I(()=>[K(a)]),_:1})}}});Ns(`resourceFetcher`,H_),uy.use(ac),uy.use(oy),uy.use(sy),uy.config.globalProperties.__=e=>(window.translated_messages||{})[e]||e,uy.mount(`#app`);export{dc as $,P as $t,Gu as A,Gr as At,Xl as B,di as Bt,xp as C,eo as Ct,Xu as D,J as Dt,td as E,gi as Et,cu as F,B as Ft,kl as G,I as Gt,jl as H,R as Ht,su as I,ei as It,wl as J,M as Jt,Dl as K,Yn as Kt,iu as L,oi as Lt,zu as M,Kr as Mt,ju as N,H as Nt,Ju as O,Fn as Ot,gu as P,ri as Pt,al as Q,F as Qt,$l as R,fi as Rt,Cp as S,z as St,ad as T,Qn as Tt,Al as U,L as Ut,Yl as V,Or as Vt,Z as W,rr as Wt,Kc as X,N as Xt,xl as Y,Wt as Yt,il as Z,dn as Zt,p_ as _,q as _t,j_ as a,sc as at,nh as b,Wa as bt,w_ as c,ys as ct,b_ as d,us as dt,k as en,hc as et,y_ as f,V as ft,m_ as g,W as gt,d_ as h,G as ht,R_ as i,cc as it,Vu as j,Hr as jt,qu as k,Vr as kt,C_ as l,No as lt,f_ as m,Y as mt,wv as n,O as nn,Ic as nt,k_ as o,oc as ot,__ as p,vr as pt,Tl as q,vo as qt,H_ as r,we as rn,lc as rt,D_ as s,Ps as st,xv as t,he as tn,Fc as tt,x_ as u,fs as ut,c_ as v,U as vt,od as w,Ha as wt,wp as x,K as xt,s_ as y,ii as yt,eu as z,Ii as zt};