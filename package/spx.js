var g=(e,t,r)=>new Promise((o,n)=>{var i=L=>{try{M(r.next(L))}catch(Pe){n(Pe)}},l=L=>{try{M(r.throw(L))}catch(Pe){n(Pe)}},M=L=>L.done?o(L.value):Promise.resolve(L.value).then(i,l);M((r=r.apply(e,t)).next())});var E=window.history,ee=window.location.origin;var I=Object.assign,c=Object.create,te=Array.isArray,$=Array.from,re="";function Ye(){let e=c(null);return e.targets=["body"],e.timeout=3e4,e.poll=15,e.schema="spx",e.async=!0,e.cache=!0,e.limit=50,e.preload=null,e.session=!1,e.hover=c(null),e.hover.trigger="attribute",e.hover.threshold=250,e.intersect=c(null),e.intersect.rootMargin="0px 0px 0px 0px",e.intersect.threshold=0,e.proximity=c(null),e.proximity.distance=75,e.proximity.threshold=250,e.proximity.throttle=500,e.progress=c(null),e.progress.background="#111",e.progress.height="3px",e.progress.minimum=.09,e.progress.easing="linear",e.progress.speed=300,e.progress.trickle=!0,e.progress.threshold=500,e.progress.trickleSpeed=300,e}var s=Ye(),f=c(null),T=c(null),u=c(null),m=c(null),b=c(null),Ie=new Set;function p(e,t){if(e===1)console.info("SPX: "+t);else if(e===2)console.warn("SPX: "+t);else{console.error("SPX: "+t);try{throw e===3?new TypeError(t):new Error(t)}catch(r){}}}function a(e,t){return t in e}function ze(){return Math.random().toString(36).slice(2)}function Je(e=2){return(t,r)=>{let o=t.length;return(o<1||t[o-1].length===e?t.push([r]):t[o-1].push(r))&&t}}function we(e){return e<1024?e+" B":e<1048576?(e/1024).toFixed(1)+" KB":e<1073741824?(e/1048576).toFixed(1)+" MB":(e/1073741824).toFixed(1)+" GB"}function w(e,t){if(arguments.length===1)return o=>w(e,o);let r=t.length;if(r!==0)for(let o=0;o<r;o++)e(t[o],o,t)}function Re(e){for(let t in e)delete e[t]}function Te(e={}){if(a(e,"hover")&&(typeof e.hover!="boolean"?I(s.hover,e.hover):e.hover===!1&&(s.hover=e.hover),delete e.hover),a(e,"intersect")&&(typeof e.intersect!="boolean"?I(s.intersect,e.intersect):e.intersect===!1&&(s.intersect=e.intersect),delete e.intersect),a(e,"proximity")&&(typeof e.proximity!="boolean"?I(s.proximity,e.proximity):e.proximity===!1&&(s.proximity=e.proximity),delete e.proximity),a(e,"progress")&&(typeof e.progress!="boolean"?I(s.progress,e.progress):e.progress===!1&&(s.progress=e.progress),delete e.progress),a(e,"session")){if(e.session==="persist"){let o=localStorage.getItem("spx");o===null?(s.session=Math.floor(1e3+Math.random()*9e3).toString(),localStorage.setItem("spx",s.session)):s.session=o}delete e.session}let t=s.schema===null?"data":`data-${s.schema}`,r=`:not([${t}-disable]):not([href^="#"])`;u.attrs=new RegExp("^href|"+t+"-("+"hydrate|append|prepend|replace|progress|threshold|position|proximity|hover"+")$","i"),u.hydrate=`[${t}-hydrate]`,u.track=`[${t}-track]:not([${t}-track=false])`,u.script=`script:not([${t}-eval=false])`,u.style=`style:not([${t}-eval=false])`,u.styleLink=`link[rel=stylesheet]:not([${t}-eval=false])`,u.href=`a${r}`,s.intersect!==!1&&(u.intersect=`[${t}-intersect]:not([${t}-intersect=false])`,u.interHref=`a${r}:not([${t}-intersect=false])`),s.proximity!==!1&&(u.proximity=`a[${t}-proximity]${r}:not([${t}-proximity=false])`),s.hover!==!1&&(u.hover=s.hover.trigger==="href"?`a${r}:not([${t}-hover=false]):not([${t}-intersect]):not([${t}-proximity])`:`a[${t}-hover]${r}:not([${t}-hover=false]):not([${t}-intersect]):not([${t}-proximity])`),I(s,e),T.bytes=0,T.limit=s.limit,T.visits=0}var Ge=/(?:https?:)?\/\/(?:www\.)?/;var Ue=/\b(?:append|prepend)/,_e=/^(?:application|text)\/(?:x-)?(?:ecma|java)script|text\/javascript$/,Qe=/^\b(?:true|false)$/i,oe=/^[+-]?\d*\.?\d+$/,Ze=/\s+/g;var et=/\b(?:intersect|hover|proximity)\b/;var Le=/\[?[^,'"[\]()\s]+\]?/g,tt=/\(?\[(['"]?.*['"]?,?)\]\)?/,rt=/[xy]:[0-9.]+/,ot=/[xy]|\d*\.?\d+/g;var P=ee.replace(Ge,re);function jt(e){let t=c(null);return w((r,o,n)=>{let i=n.length-1>=o?o-1:o;o%2&&(t[n[i]]=oe.test(r)?Number(r):r)},e),t}function Oe(e,t){let r=t||c(null);for(let{nodeName:o,nodeValue:n}of e.attributes){if(!u.attrs.test(o))continue;if(o==="href"){r.rev=location.pathname+location.search,t||(r.location=st(n),r.key=r.location.pathname+r.location.search);continue}let i=o.slice(1+o.lastIndexOf("-")),l=n.replace(Ze,re);tt.test(l)?r[i]=Ue.test(i)?l.match(Le).reduce(Je(2),[]):l.match(Le):rt.test(l)?r[i]=jt(l.match(ot)):Qe.test(l)?et.test(o)||(r[i]=l==="true"):oe.test(l)?r[i]=Number(l):r[i]=l}return r}function Y(e){let t=c(null),r=e.indexOf("#");r>=0?(t.hash=e.slice(r),e=e.slice(0,r)):t.hash=re;let o=e.indexOf("?");return o>=0?(t.search=e.slice(o),e=e.slice(0,o)):t.search=re,t.pathname=e,t}function ue(e,t){let r=e.indexOf("/",t);if(r>t){let n=e.indexOf("#",r);return n<0?e.slice(r):e.slice(r,n)}let o=e.indexOf("?",t);if(o>t){let n=e.indexOf("#",o);return n<0?e.slice(o):e.slice(o,n)}return e.length-t===P.length?"/":null}function Ae(e){let t=e.startsWith("www.")?e.slice(4):e,r=t.indexOf("/");if(r>=0){let o=t.slice(r);if(t.slice(0,r)===P)return o.length?Y(o):Y("/")}else{let o=t.search(/[?#]/);if(o>=0){if(t.slice(0,o)===P)return Y("/"+t.slice(o))}else if(t===P)return Y("/")}return null}function Dt(e){return e.startsWith("http")?1:e.startsWith("//")?2:e.startsWith("www.")?3:0}function nt(e){if(typeof e!="string"||e.length===0)return!1;if(e.charCodeAt(0)===47)return e.charCodeAt(1)!==47?!0:e.startsWith("www.",2)?e.startsWith(P,6):e.startsWith(P,2);if(e.charCodeAt(0)===63)return!0;if(e.startsWith("www."))return e.startsWith(P,4);if(e.startsWith("http")){let t=e.indexOf("/",4)+2;return e.startsWith("www.",t)?e.startsWith(P,t+4):e.startsWith(P,t)}}function Ft(e){return e.charCodeAt(0)===47?e.charCodeAt(1)!==47?Y(e):Ae(e.slice(2)):e.charCodeAt(0)===63?Y(location.pathname+e):e.startsWith("https:")||e.startsWith("http:")?Ae(e.slice(e.indexOf("/",4)+2)):e.startsWith("www.")?Ae(e):null}function A(e){if(typeof e=="object")return e.pathname+e.search;let t=Dt(e);if(t===1){let r=e.charCodeAt(4)===115?8:7,o=e.startsWith("www.",r)?r+4:r;return e.startsWith(P,o)?ue(e,o):null}if(t===2){let r=e.startsWith("www.",2)?6:2;return e.startsWith(P,r)?ue(e,r):null}return t===3?e.startsWith(P,4)?ue(e,4):null:e.startsWith(P,0)?ue(e,0):null}function st(e){let t=Ft(e);return t.origin=ee,t.hostname=P,t}function d(e,t){if(e instanceof Element){let o=Oe(e);return o.type=t||2,o}let r=c(null);return r.fwd=null,r.rev=location.pathname+location.search,r.location=st(typeof e=="string"?e:r.rev),r.key=A(r.location),r.type=t||2,r}var Kt=new DOMParser;function W(e){return Kt.parseFromString(e,"text/html")}function Ne(e){let t=e.indexOf(">",e.indexOf("<title"))+1,r=e.indexOf("</title",t);return e.slice(t,r)}var D=c(null);function v(e,...t){let r=e==="store";r&&t.splice(-1,1,W(t[t.length-1]));let o=!0;return w(n=>{let i=n.apply(null,t);r?i instanceof Document?o=i.documentElement.outerHTML:typeof o!="string"&&(o=i!==!1):o=i!==!1},D[e]||[]),o}function Xt(e,t){e in D||(D[e]=[]),D[e].push(t)}function Vt(e,t){let r=D[e],o=[];if(r&&t){let n=0,i=r.length;for(;n<i;n++)r[n]!==t&&o.push(r[n])}return o.length?D[e]=o:delete D[e],this}function it(e=[]){let t=te(e)?e:[e];for(let r in m){let o=t.indexOf(r);o>=0&&(delete b[m[r].uuid],delete m[r],t.splice(o,1))}}function F(e){e?typeof e=="string"?(delete b[m[e].uuid],delete m[e]):te(e)&&w(t=>{delete m[t],delete b[m[t].uuid]},e):(Re(m),Re(b))}function h(e){return e.replace=a(e,"replace")?[].concat(s.targets,e.replace):s.targets,s.cache&&(a(e,"cache")||(e.cache=s.cache),a(e,"uuid")||(e.uuid=ze())),a(e,"position")||(e.position=c(null),e.position.y=0,e.position.x=0),s.hover!==!1&&e.type===4&&(a(e,"threshold")||(e.threshold=s.hover.threshold)),s.proximity!==!1&&e.type===6&&(a(e,"proximity")||(e.proximity=s.proximity.distance),a(e,"threshold")||(e.threshold=s.proximity.threshold)),s.progress!==!1&&!a(e,"progress")&&(e.progress=s.progress.threshold),a(e,"visits")||(e.visits=0),m[e.key]=e}function me(e,t){console.log(e);let r=v("store",e,t),o=typeof r=="string"?r:t;return e.type>3&&e.type<7&&(e.type=11),e.title=Ne(o),!s.cache||r===!1||(m[e.key]=e,b[e.uuid]=o,v("cached",e)),e}function q(e,t){let r=a(m,e.key)?m[e.key]:h(e);return typeof t=="string"&&(b[e.uuid]=t,e.title=Ne(t)),I(r,e)}function Se(e=E.state.key){if(a(m,e)){let t=c(null);return t.page=m[e],t.dom=W(b[t.page.uuid]),t}p(4,`No record exists: ${e}`)}function x(e){return a(m,e)&&a(m[e],"uuid")&&a(b,m[e].uuid)}var R=typeof window<"u"?window:{screen:{},navigator:{}},z=(R.matchMedia||function(){return{matches:!1}}).bind(R),Bt=!1,Yt={get passive(){return Bt=!0}},ct=function(){};R.addEventListener&&R.addEventListener("p",ct,Yt);R.removeEventListener&&R.removeEventListener("p",ct,!1);var S="PointerEvent"in R,Me="ontouchstart"in R,zt="TouchEvent"in R,Jt=Me||zt&&z("(any-pointer: coarse)").matches,zr=(R.navigator.maxTouchPoints||0)>0||Jt,at=R.navigator.userAgent||"",Gt=z("(pointer: coarse)").matches&&/iPad|Macintosh/.test(at)&&Math.min(R.screen.width||0,R.screen.height||0)>=768,Jr=(z("(pointer: coarse)").matches||!z("(pointer: fine)").matches&&Me)&&!/Windows.*Firefox/.test(at),Gr=z("(any-pointer: fine)").matches||z("(any-hover: hover)").matches||Gt||!Me;function ne(e,t){if(!(e instanceof Element))return!1;let r=e.closest(t);return r&&r.tagName==="A"?r:!1}function qe(e){if(e.nodeName!=="A")return!1;let t=e.href;return nt(t)?!x(A(t)):!1}function ft(e,t){return $(document.body.querySelectorAll(e)).flatMap(r=>r.nodeName!=="A"?$(r.querySelectorAll(t)).filter(qe):qe(r)?r:[])}var se=e=>$(document.body.querySelectorAll(e)).filter(qe);var ie=c(null),K=c(null),k=c(null);function pe(e){let t=k[e]=new XMLHttpRequest;return new Promise(function(r,o){t.open("GET",e,s.async),t.setRequestHeader("X-SPX","true"),t.setRequestHeader("X-SPX-Session","true"),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.onload=function(){r(t.responseText)},t.onloadend=function(n){T.bytes=T.bytes+n.loaded,T.visits=T.visits+1,delete k[e]},t.onerror=function(){o(this.statusText)},t.onabort=function(){delete k[e]},t.send(null)})}function de(e,t,r){a(K,e)||x(e)||(K[e]=setTimeout(t,r))}function lt(e){return a(K,e)?(clearTimeout(K[e]),delete K[e]):!0}function He(e){if(a(k,e))for(let t in k)e!==t&&(k[t].abort(),p(2,`Pending fetch aborted: ${t}`))}function ut(e){if(s.preload!==null){if(te(s.preload))return Promise.all(s.preload.filter(t=>{let r=d(t,7);return r.key!==t?y(h(r)):!1}));if(typeof s.preload=="object"&&a(s.preload,e.key))return Promise.all(s.preload[e.key].map(t=>y(h(d(t,7)))))}}function J(e){if(x(e))return;let t=d(e,8),r=h(t);y(r)}function ke(e){return g(this,null,function*(){if(!a(ie,e.key))return Promise.resolve(e);let t=yield ie[e.key];return me(e,t)})}function y(e){return a(k,e.key)?(e.type===8?(a(k,e.rev)&&k[e.rev].abort(),p(2,`Reverse fetch aborted: ${e.key}`)):p(2,`Fetch already in transit: ${e.key}`),Promise.resolve(!1)):v("fetch",e)?(ie[e.key]=pe(e.key),ke(e)):(p(2,`Fetch cancelled within dispatched event: ${e.key}`),Promise.resolve(!1))}function ge(e){let t=ne(e.target,u.hover);t&&(lt(A(t.href)),mt(t))}function G(e){let t=ne(e.target,u.hover);if(!t)return;let r=d(t,4);if(a(K,r.key))return;if(x(r.key))return he(t);Ut(t);let o=h(r),n=o.threshold||s.hover.threshold;de(r.key,function(){if(!v("prefetch",t,r))return he(t);y(o).then(function(i){return i?he(t):null})},n)}function mt(e){S?e.addEventListener("pointerenter",G,!1):e.addEventListener("mouseenter",G,!1)}function Ut(e){S?(e.addEventListener("pointerout",ge,!1),e.removeEventListener("pointerenter",G,!1)):(e.addEventListener("mouseleave",ge,!1),e.removeEventListener("mouseenter",G,!1))}function he(e){S?(e.removeEventListener("pointerenter",G,!1),e.removeEventListener("pointerout",ge,!1)):(e.removeEventListener("mouseleave",ge,!1),e.removeEventListener("mouseenter",G,!1))}function ve(){!s.hover||f.hover||(w(mt,se(u.hover)),f.hover=!0)}function U(){!f.hover||(w(he,se(u.hover)),f.hover=!1)}function _t({clientX:e,clientY:t},r){return e<=r.right&&e>=r.left&&t<=r.bottom&&t>=r.top}function Qt(e){let t=c(null),r=e.getBoundingClientRect(),o=e.getAttribute(`${s.schema}-proximity`),n=oe.test(o)?Number(o):s.proximity.distance;return t.target=e,t.top=r.top-n,t.bottom=r.bottom+n,t.left=r.left-n,t.right=r.right+n,t}function Zt(e){let t=!1;return r=>{if(t)return;t=!0;let o=e.findIndex(n=>_t(r,n));if(o===-1)setTimeout(()=>{t=!1},s.proximity.throttle);else{let{target:n}=e[o],i=h(d(n,6)),l=i.threshold||s.proximity.threshold;de(i.key,()=>v("prefetch",n,i)?y(i).then(M=>{M&&(e.splice(o,1),t=!1,e.length===0&&(C(),p(1,"Proximity observer disconnected")))}):C(),l)}}}var ce;function ye(){if(!s.proximity||f.proximity)return;let e=se(u.proximity).map(Qt);e.length>0&&(ce=Zt(e),S?addEventListener("pointermove",ce,!1):addEventListener("mousemove",ce,!1),f.proximity=!0)}function C(){!f.proximity||(S?removeEventListener("pointermove",ce,!1):removeEventListener("mousemove",ce,!1),f.proximity=!1)}var V;function er(e){return g(this,null,function*(){if(e.isIntersecting){let t=d(e.target,5);if(!v("prefetch",e.target,t))return V.unobserve(e.target);(yield y(h(t)))?V.unobserve(e.target):(p(2,`Prefetch will retry at next intersect for: ${t.key}`),V.observe(e.target))}})}function xe(){!s.intersect||f.intersect||(V||(V=new IntersectionObserver(w(er),s.intersect)),w(e=>V.observe(e),ft(u.intersect,u.interHref)),f.intersect=!0)}function _(){!f.intersect||(V.disconnect(),f.intersect=!1)}var B=null,pt,ae=null,je=[];function De(e){let{speed:t,easing:r,minimum:o}=s.progress,n=typeof B=="number";e=ht(e,o,1),B=e===1?null:e;let i=tr(!n);i.offsetWidth,or(l=>{if(i.style.transform=`translate3d(${gt(e)}%,0,0)`,i.style.transition=`all ${t}ms ${r}`,e!==1)return setTimeout(l,t);i.style.transition="none",i.style.opacity="1",i.offsetWidth,setTimeout(()=>{i.style.transition=`all ${t}ms ${r}`,i.style.opacity="0",setTimeout(()=>[rr(),l()],t)},t)})}function dt(e){let t=B;if(!t)return Ee();if(t<1)return typeof e!="number"&&(t>=0&&t<.2?e=.1:t>=.2&&t<.5?e=.04:t>=.5&&t<.8?e=.02:t>=.8&&t<.99?e=.005:e=0),t=ht(t+e,0,.994),De(t)}function tr(e){if(ae)return ae;document.documentElement.classList.add("spx-load");let t=e?"-100":gt(B||0),r=document.createElement("div");return r.id="spx-progress",r.style.pointerEvents="none",r.style.background=s.progress.background,r.style.height=s.progress.height,r.style.position="fixed",r.style.zIndex="9999",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.transition="all 0 linear",r.style.transform=`translate3d(${t}%,0,0)`,document.body.appendChild(r),ae=r,r}function rr(){document.documentElement.classList.remove("spx-load"),document.getElementById("spx-progress")&&document.body.removeChild(ae),ae=null}function ht(e,t,r){return e<t?t:e>r?r:e}function gt(e){return(-1+e)*100}function or(e){let t=()=>{let r=je.shift();r&&r(t)};je.push(e),je.length===1&&t()}function Ee(e){!s.progress||(pt=setTimeout(function(){B||De(0);let t=function(){setTimeout(()=>{!B||(dt(),t())},s.progress.trickleSpeed)};s.progress.trickle&&t()},e||0))}function vt(e){if(clearTimeout(pt),!(!e&&!B))return dt(.3+.5*Math.random()),De(1)}function nr(e){return new Promise((t,r)=>{let o=document.createElement("script");o.addEventListener("error",r),o.async=!1,o.text=e.target.text;for(let{nodeName:n,nodeValue:i}of e.target.attributes)o.setAttribute(n,i);document.contains(e.target)?e.target.replaceWith(o):(document.head.append(o),e.external?o.addEventListener("load",()=>o.remove()):o.remove()),e.external?o.addEventListener("load",()=>t()):t()})}function sr(e){if(!e.hasAttribute("src")&&!e.text)return;let t=e.type?e.type.trim().toLowerCase():"text/javascript",r=_e.test(t)?1:t==="module"?2:NaN,o=c(null);return o.blocking=!0,o.evaluate=!1,o.external=!1,isNaN(r)||e.noModule&&r===1||(e.src&&(o.external=!0),(r!==1||o.external&&(e.hasAttribute("async")||e.defer))&&(o.blocking=!1),o.evaluate=!0,o.target=e),o}function xt(e){return g(this,null,function*(){try{let t=nr(e);e.blocking&&(yield t)}catch(t){console.error(t)}})}function Et(e){return g(this,null,function*(){let r=$(e,sr).filter(o=>o.evaluate).reduce((o,n)=>g(this,null,function*(){return n.external?Promise.all([o,xt(n)]):(yield o,yield xt(n))}),Promise.resolve());yield Promise.race([r])})}var Q=c(null),Fe=!1;function fe(){return Q}function ir(){Q.y=window.scrollY,Q.x=window.scrollX,Fe||(requestAnimationFrame(fe),Fe=!0)}function le(){return Fe=!1,Q.x=0,Q.y=0,Q}function bt(){f.scroll||(addEventListener("scroll",ir,{passive:!0}),f.scroll=!0)}function Pt(){!f.scroll||(removeEventListener("scroll",onscroll,!1),le(),f.scroll=!1)}function cr(e,t){return e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING||-1}function ar(e){return g(this,null,function*(){let t=$(e.querySelectorAll(u.script));t.sort(cr),yield Et(t)})}function fr(e){e.querySelectorAll(u.track).forEach(t=>{!t.hasAttribute("id")||Ie.has(t.id)||(document.body.appendChild(t),Ie.add(t.id))})}function lr(e,t){let r=e.replace;if(r.length===1&&r[0]==="body")return document.body.replaceWith(t.body);let o=r.join(","),n=document.body.querySelectorAll(o),i=t.body.querySelectorAll(o);n.forEach((l,M)=>{if(!!l.matches(r[M])&&!!v("render",l,i[M])&&(l.replaceWith(i[M]),e.append||e.prepend)){let L=document.createElement("div");return t.childNodes.forEach(L.appendChild),e.append?l.appendChild(L):l.insertBefore(L,l.firstChild)}}),fr(t.body)}function ur(e,t){let r=e.hydrate.join(","),o=document.body.querySelectorAll(r);if(o.length>0){let n=t.body.querySelectorAll(r);o.forEach((i,l)=>{!n[l]||!v("hydrate",i,n[l])||(i.firstChild.nodeType===Node.TEXT_NODE?i.innerHTML=n[l].innerHTML:i.replaceWith(n[l]))})}e.type=2,q(e),it(e.key)}function O(e){U(),_(),C();let t=W(b[e.uuid]);return e.type===3?ur(e,t):(lr(e,t),scrollTo(e.position.x,e.position.y)),ar(t.head),vt(),le(),ve(),xe(),ye(),v("load",e),e}function wt(e){let t=c(null);return t.key=e.key,t.rev=e.rev,t.title=e.title,t.uuid=e.uuid,t.cache=e.cache,t.replace=e.replace,t.type=e.type,t.progress=e.progress,t.position=le(),t}function Xe(){return document.readyState==="complete"}function Rt(){return E.state!==null&&a(E.state,"rev")&&E.state.key!==E.state.rev}function Tt(e){return E.replaceState(wt(e),e.title,e.key),e}function Lt(e){return E.pushState(wt(e),e.title,e.key),e}var It;function At(e,t){if(!Xe())return;let{state:r}=e;if(clearInterval(It),x(r.key))return J(r.rev),O(m[r.key]);It=setTimeout(function(){return g(this,null,function*(){r.type=9;let o=yield y(r);if(!o)return location.assign(r.key);let n=A(location);if(o.key===n)return O(o);if(x(n))return O(m[n]);let i=h(d(n,9));y(i),E.replaceState(i,document.title,n)})},300)}function Ot(){f.history||(addEventListener("popstate",At,!1),addEventListener("load",Xe,!1),f.history=!0)}function Nt(){!f.history||(removeEventListener("popstate",At,!1),addEventListener("load",Xe,!1),f.history=!1)}function mr(e){return!(e.target&&e.target.isContentEditable||e.defaultPrevented||e.which>1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}function Z(e){if(!mr(e))return;let t=ne(e.target,u.href);if(!t)return;let r=A(t.href);if(r!==null&&(U(),C(),_(),!!v("visit",e)))if(a(ie,r)){let o=m[r];He(r),t.addEventListener("click",function n(i){return i.preventDefault(),t.removeEventListener("click",n,!1),Ve(o)},!1)}else if(x(r)){let o=Oe(t,m[r]),n=q(o);t.addEventListener("click",function i(l){return l.preventDefault(),t.removeEventListener("click",i,!1),O(n)},!1)}else{He();let o=d(t,2),n=h(o);y(n),t.addEventListener("click",function i(l){return l.preventDefault(),t.removeEventListener("click",i,!1),Ve(n)},!1)}}function Ve(e){Ee(e.progress),ke(e).then(function(t){t?(Lt(t),O(t)):location.assign(e.key)}).catch(function(t){location.assign(e.key),p(4,t)})}function Be(e,t){if(t)typeof t.cache=="string"&&(t.cache==="clear"?F():F(t.key)),Ee(t.progress),y(t).then(function(r){return r?O(r):location.assign(t.key)});else return Ve(m[e])}function Mt(){f.hrefs||(S?addEventListener("pointerdown",Z,!1):(addEventListener("mousedown",Z,!1),addEventListener("touchstart",Z,!1)),f.hrefs=!0)}function qt(){!f.hrefs||(S?removeEventListener("pointerdown",Z,!1):(removeEventListener("mousedown",Z,!1),removeEventListener("touchstart",Z,!1)),f.hrefs=!1)}function kt(){let e=h(d(1)),t=me(e,document.documentElement.outerHTML);Rt()&&(t.rev=E.state.rev),t.position=fe(),v("connected",t),Tt(t),J(t.rev),ut(t),removeEventListener("load",kt)}function $t(){bt(),Ot(),Mt(),ve(),xe(),ye(),addEventListener("load",kt),p(1,"Connection Established \u26A1")}function Wt(){Pt(),Nt(),qt(),U(),_(),C(),F(),p(1,"Disconnected \u{1F614}")}var dr=!!(E.pushState&&window.requestAnimationFrame&&window.addEventListener&&window.DOMParser);function pn(e={}){Te(e),dr?/https?/.test(window.location.protocol)?addEventListener("DOMContentLoaded",$t):p(4,"Invalid protocol, SPX expects https or http protocol"):p(4,"Browser is not supported")}function dn(e,t){if(e)if(t)e==="config"&&Te(t),e==="observers"&&I(f,t);else{if(e==="config")return s;if(e==="observers")return f;if(e==="pages")return m;if(e==="snapshots")return b;if(e==="memory")return we(T.bytes)}let r=c(null);return r.config=s,r.snapshots=b,r.pages=m,r.selectors=u,r.observers=f,r.memory=T,r.memory.size=we(r.memory.bytes),r}function hn(e,t){return g(this,null,function*(){if(e===void 0)return Se();if(typeof e=="string"){let r=A(e);x(r)||p(4,`No store exists at: ${r}`);let o=Se(r);return t!==void 0?q(I(o.page,t)):o}if(typeof e=="object")return q(e)})}function gn(e){return g(this,null,function*(){let t=m[E.state.key];e&&I(t,e),t.type=10;let r=yield y(t);return r?(p(1,"Triggered reload, page was re-cached"),O(r)):(p(2,"Reload failed, triggering refresh (cache will be purged)"),location.assign(t.key))})}function vn(e){return g(this,null,function*(){let t=d(e,13);t.location.origin!==ee&&p(4,"Cross origin fetches are not allowed");let r=yield pe(t.key);if(r)return W(r)})}function yn(e){return F(e)}function xn(e){return g(this,null,function*(){})}function En(e,t){return g(this,null,function*(){let r=d(3);r.position=fe(),r.hydrate=t;let o=yield pe(e);if(!o)return p(2,"Hydration fetch failed");let n=x(r.key)?q(r,o):h(r);return J(r.rev),O(n)})}function bn(e){return g(this,null,function*(){let t=d(e,11);if(x(t.key)){p(2,`Cache already exists for ${t.key}, prefetch skipped`);return}let r=yield y(h(t));if(r)return r;p(4,`Prefetch failed for ${t.key}`)})}function Pn(e,t){return g(this,null,function*(){let r=d(e),o=typeof t=="object"?I(r,t):r;return x(r.key)?Be(r.key,q(o)):Be(r.key,h(o))})}function In(){Wt()}export{yn as clear,pn as connect,In as disconnect,vn as fetch,En as hydrate,Vt as off,Xt as on,bn as prefetch,gn as reload,dn as session,hn as state,dr as supported,xn as update,Pn as visit};
