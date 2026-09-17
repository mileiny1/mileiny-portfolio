(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const y of h)if(y.type==="childList")for(const N of y.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&o(N)}).observe(document,{childList:!0,subtree:!0});function s(h){const y={};return h.integrity&&(y.integrity=h.integrity),h.referrerPolicy&&(y.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?y.credentials="include":h.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function o(h){if(h.ep)return;h.ep=!0;const y=s(h);fetch(h.href,y)}})();var yr={exports:{}},Mn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Rm(){if(Rd)return Mn;Rd=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function s(o,h,y){var N=null;if(y!==void 0&&(N=""+y),h.key!==void 0&&(N=""+h.key),"key"in h){y={};for(var O in h)O!=="key"&&(y[O]=h[O])}else y=h;return h=y.ref,{$$typeof:c,type:o,key:N,ref:h!==void 0?h:null,props:y}}return Mn.Fragment=d,Mn.jsx=s,Mn.jsxs=s,Mn}var Md;function Mm(){return Md||(Md=1,yr.exports=Rm()),yr.exports}var f=Mm(),br={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function wm(){if(wd)return ee;wd=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.iterator;function H(g){return g===null||typeof g!="object"?null:(g=U&&g[U]||g["@@iterator"],typeof g=="function"?g:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,k={};function Q(g,_,q){this.props=g,this.context=_,this.refs=k,this.updater=q||W}Q.prototype.isReactComponent={},Q.prototype.setState=function(g,_){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,_,"setState")},Q.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function C(){}C.prototype=Q.prototype;function ue(g,_,q){this.props=g,this.context=_,this.refs=k,this.updater=q||W}var I=ue.prototype=new C;I.constructor=ue,X(I,Q.prototype),I.isPureReactComponent=!0;var Se=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Ue=Object.prototype.hasOwnProperty;function Oe(g,_,q,B,Z,ce){return q=ce.ref,{$$typeof:c,type:g,key:_,ref:q!==void 0?q:null,props:ce}}function He(g,_){return Oe(g.type,_,void 0,void 0,void 0,g.props)}function Ne(g){return typeof g=="object"&&g!==null&&g.$$typeof===c}function et(g){var _={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return _[q]})}var st=/\/+/g;function Xe(g,_){return typeof g=="object"&&g!==null&&g.key!=null?et(""+g.key):_.toString(36)}function Ta(){}function Na(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Ta,Ta):(g.status="pending",g.then(function(_){g.status==="pending"&&(g.status="fulfilled",g.value=_)},function(_){g.status==="pending"&&(g.status="rejected",g.reason=_)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function ke(g,_,q,B,Z){var ce=typeof g;(ce==="undefined"||ce==="boolean")&&(g=null);var P=!1;if(g===null)P=!0;else switch(ce){case"bigint":case"string":case"number":P=!0;break;case"object":switch(g.$$typeof){case c:case d:P=!0;break;case A:return P=g._init,ke(P(g._payload),_,q,B,Z)}}if(P)return Z=Z(g),P=B===""?"."+Xe(g,0):B,Se(Z)?(q="",P!=null&&(q=P.replace(st,"$&/")+"/"),ke(Z,_,q,"",function(Ft){return Ft})):Z!=null&&(Ne(Z)&&(Z=He(Z,q+(Z.key==null||g&&g.key===Z.key?"":(""+Z.key).replace(st,"$&/")+"/")+P)),_.push(Z)),1;P=0;var tt=B===""?".":B+":";if(Se(g))for(var be=0;be<g.length;be++)B=g[be],ce=tt+Xe(B,be),P+=ke(B,_,q,ce,Z);else if(be=H(g),typeof be=="function")for(g=be.call(g),be=0;!(B=g.next()).done;)B=B.value,ce=tt+Xe(B,be++),P+=ke(B,_,q,ce,Z);else if(ce==="object"){if(typeof g.then=="function")return ke(Na(g),_,q,B,Z);throw _=String(g),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return P}function R(g,_,q){if(g==null)return g;var B=[],Z=0;return ke(g,B,"","",function(ce){return _.call(q,ce,Z++)}),B}function Y(g){if(g._status===-1){var _=g._result;_=_(),_.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=_)}if(g._status===1)return g._result.default;throw g._result}var J=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function me(){}return ee.Children={map:R,forEach:function(g,_,q){R(g,function(){_.apply(this,arguments)},q)},count:function(g){var _=0;return R(g,function(){_++}),_},toArray:function(g){return R(g,function(_){return _})||[]},only:function(g){if(!Ne(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ee.Component=Q,ee.Fragment=s,ee.Profiler=h,ee.PureComponent=ue,ee.StrictMode=o,ee.Suspense=x,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(g){return F.H.useMemoCache(g)}},ee.cache=function(g){return function(){return g.apply(null,arguments)}},ee.cloneElement=function(g,_,q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var B=X({},g.props),Z=g.key,ce=void 0;if(_!=null)for(P in _.ref!==void 0&&(ce=void 0),_.key!==void 0&&(Z=""+_.key),_)!Ue.call(_,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&_.ref===void 0||(B[P]=_[P]);var P=arguments.length-2;if(P===1)B.children=q;else if(1<P){for(var tt=Array(P),be=0;be<P;be++)tt[be]=arguments[be+2];B.children=tt}return Oe(g.type,Z,void 0,void 0,ce,B)},ee.createContext=function(g){return g={$$typeof:N,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:y,_context:g},g},ee.createElement=function(g,_,q){var B,Z={},ce=null;if(_!=null)for(B in _.key!==void 0&&(ce=""+_.key),_)Ue.call(_,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Z[B]=_[B]);var P=arguments.length-2;if(P===1)Z.children=q;else if(1<P){for(var tt=Array(P),be=0;be<P;be++)tt[be]=arguments[be+2];Z.children=tt}if(g&&g.defaultProps)for(B in P=g.defaultProps,P)Z[B]===void 0&&(Z[B]=P[B]);return Oe(g,ce,void 0,void 0,null,Z)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(g){return{$$typeof:O,render:g}},ee.isValidElement=Ne,ee.lazy=function(g){return{$$typeof:A,_payload:{_status:-1,_result:g},_init:Y}},ee.memo=function(g,_){return{$$typeof:m,type:g,compare:_===void 0?null:_}},ee.startTransition=function(g){var _=F.T,q={};F.T=q;try{var B=g(),Z=F.S;Z!==null&&Z(q,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(me,J)}catch(ce){J(ce)}finally{F.T=_}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(g){return F.H.use(g)},ee.useActionState=function(g,_,q){return F.H.useActionState(g,_,q)},ee.useCallback=function(g,_){return F.H.useCallback(g,_)},ee.useContext=function(g){return F.H.useContext(g)},ee.useDebugValue=function(){},ee.useDeferredValue=function(g,_){return F.H.useDeferredValue(g,_)},ee.useEffect=function(g,_,q){var B=F.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(g,_)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(g,_,q){return F.H.useImperativeHandle(g,_,q)},ee.useInsertionEffect=function(g,_){return F.H.useInsertionEffect(g,_)},ee.useLayoutEffect=function(g,_){return F.H.useLayoutEffect(g,_)},ee.useMemo=function(g,_){return F.H.useMemo(g,_)},ee.useOptimistic=function(g,_){return F.H.useOptimistic(g,_)},ee.useReducer=function(g,_,q){return F.H.useReducer(g,_,q)},ee.useRef=function(g){return F.H.useRef(g)},ee.useState=function(g){return F.H.useState(g)},ee.useSyncExternalStore=function(g,_,q){return F.H.useSyncExternalStore(g,_,q)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.0",ee}var Od;function Rr(){return Od||(Od=1,br.exports=wm()),br.exports}var w=Rr(),xr={exports:{}},wn={},Sr={exports:{}},Er={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Om(){return Dd||(Dd=1,function(c){function d(R,Y){var J=R.length;R.push(Y);e:for(;0<J;){var me=J-1>>>1,g=R[me];if(0<h(g,Y))R[me]=Y,R[J]=g,J=me;else break e}}function s(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var Y=R[0],J=R.pop();if(J!==Y){R[0]=J;e:for(var me=0,g=R.length,_=g>>>1;me<_;){var q=2*(me+1)-1,B=R[q],Z=q+1,ce=R[Z];if(0>h(B,J))Z<g&&0>h(ce,B)?(R[me]=ce,R[Z]=J,me=Z):(R[me]=B,R[q]=J,me=q);else if(Z<g&&0>h(ce,J))R[me]=ce,R[Z]=J,me=Z;else break e}}return Y}function h(R,Y){var J=R.sortIndex-Y.sortIndex;return J!==0?J:R.id-Y.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;c.unstable_now=function(){return y.now()}}else{var N=Date,O=N.now();c.unstable_now=function(){return N.now()-O}}var x=[],m=[],A=1,U=null,H=3,W=!1,X=!1,k=!1,Q=!1,C=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function Se(R){for(var Y=s(m);Y!==null;){if(Y.callback===null)o(m);else if(Y.startTime<=R)o(m),Y.sortIndex=Y.expirationTime,d(x,Y);else break;Y=s(m)}}function F(R){if(k=!1,Se(R),!X)if(s(x)!==null)X=!0,Ue||(Ue=!0,Xe());else{var Y=s(m);Y!==null&&ke(F,Y.startTime-R)}}var Ue=!1,Oe=-1,He=5,Ne=-1;function et(){return Q?!0:!(c.unstable_now()-Ne<He)}function st(){if(Q=!1,Ue){var R=c.unstable_now();Ne=R;var Y=!0;try{e:{X=!1,k&&(k=!1,ue(Oe),Oe=-1),W=!0;var J=H;try{t:{for(Se(R),U=s(x);U!==null&&!(U.expirationTime>R&&et());){var me=U.callback;if(typeof me=="function"){U.callback=null,H=U.priorityLevel;var g=me(U.expirationTime<=R);if(R=c.unstable_now(),typeof g=="function"){U.callback=g,Se(R),Y=!0;break t}U===s(x)&&o(x),Se(R)}else o(x);U=s(x)}if(U!==null)Y=!0;else{var _=s(m);_!==null&&ke(F,_.startTime-R),Y=!1}}break e}finally{U=null,H=J,W=!1}Y=void 0}}finally{Y?Xe():Ue=!1}}}var Xe;if(typeof I=="function")Xe=function(){I(st)};else if(typeof MessageChannel<"u"){var Ta=new MessageChannel,Na=Ta.port2;Ta.port1.onmessage=st,Xe=function(){Na.postMessage(null)}}else Xe=function(){C(st,0)};function ke(R,Y){Oe=C(function(){R(c.unstable_now())},Y)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(R){R.callback=null},c.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<R?Math.floor(1e3/R):5},c.unstable_getCurrentPriorityLevel=function(){return H},c.unstable_next=function(R){switch(H){case 1:case 2:case 3:var Y=3;break;default:Y=H}var J=H;H=Y;try{return R()}finally{H=J}},c.unstable_requestPaint=function(){Q=!0},c.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=H;H=R;try{return Y()}finally{H=J}},c.unstable_scheduleCallback=function(R,Y,J){var me=c.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,R){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=J+g,R={id:A++,callback:Y,priorityLevel:R,startTime:J,expirationTime:g,sortIndex:-1},J>me?(R.sortIndex=J,d(m,R),s(x)===null&&R===s(m)&&(k?(ue(Oe),Oe=-1):k=!0,ke(F,J-me))):(R.sortIndex=g,d(x,R),X||W||(X=!0,Ue||(Ue=!0,Xe()))),R},c.unstable_shouldYield=et,c.unstable_wrapCallback=function(R){var Y=H;return function(){var J=H;H=Y;try{return R.apply(this,arguments)}finally{H=J}}}}(Er)),Er}var _d;function Dm(){return _d||(_d=1,Sr.exports=Om()),Sr.exports}var Tr={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function _m(){if(Ud)return Ke;Ud=1;var c=Rr();function d(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)m+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(d(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},h=Symbol.for("react.portal");function y(x,m,A){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:U==null?null:""+U,children:x,containerInfo:m,implementation:A}}var N=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ke.createPortal=function(x,m){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(d(299));return y(x,m,null,A)},Ke.flushSync=function(x){var m=N.T,A=o.p;try{if(N.T=null,o.p=2,x)return x()}finally{N.T=m,o.p=A,o.d.f()}},Ke.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(x,m))},Ke.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},Ke.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var A=m.as,U=O(A,m.crossOrigin),H=typeof m.integrity=="string"?m.integrity:void 0,W=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;A==="style"?o.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:U,integrity:H,fetchPriority:W}):A==="script"&&o.d.X(x,{crossOrigin:U,integrity:H,fetchPriority:W,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ke.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var A=O(m.as,m.crossOrigin);o.d.M(x,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(x)},Ke.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var A=m.as,U=O(A,m.crossOrigin);o.d.L(x,A,{crossOrigin:U,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ke.preloadModule=function(x,m){if(typeof x=="string")if(m){var A=O(m.as,m.crossOrigin);o.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(x)},Ke.requestFormReset=function(x){o.d.r(x)},Ke.unstable_batchedUpdates=function(x,m){return x(m)},Ke.useFormState=function(x,m,A){return N.H.useFormState(x,m,A)},Ke.useFormStatus=function(){return N.H.useHostTransitionStatus()},Ke.version="19.1.0",Ke}var Hd;function Um(){if(Hd)return Tr.exports;Hd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),Tr.exports=_m(),Tr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function Hm(){if(Cd)return wn;Cd=1;var c=Dm(),d=Rr(),s=Um();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function N(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(y(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=y(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return O(n),e;if(i===l)return O(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,r=n.child;r;){if(r===a){u=!0,a=n,l=i;break}if(r===l){u=!0,l=n,a=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===a){u=!0,a=i,l=n;break}if(r===l){u=!0,l=i,a=n;break}r=r.sibling}if(!u)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,U=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),I=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),st=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=st&&e[st]||e["@@iterator"],typeof e=="function"?e:null)}var Ta=Symbol.for("react.client.reference");function Na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ta?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Q:return"Profiler";case k:return"StrictMode";case F:return"Suspense";case Ue:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case I:return(e.displayName||"Context")+".Provider";case ue:return(e._context.displayName||"Context")+".Consumer";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oe:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}var ke=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},me=[],g=-1;function _(e){return{current:e}}function q(e){0>g||(e.current=me[g],me[g]=null,g--)}function B(e,t){g++,me[g]=e.current,e.current=t}var Z=_(null),ce=_(null),P=_(null),tt=_(null);function be(e,t){switch(B(P,t),B(ce,e),B(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ad(t),e=ld(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Z),B(Z,e)}function Ft(){q(Z),q(ce),q(P)}function lu(e){e.memoizedState!==null&&B(tt,e);var t=Z.current,a=ld(t,e.type);t!==a&&(B(ce,e),B(Z,a))}function Cn(e){ce.current===e&&(q(Z),q(ce)),tt.current===e&&(q(tt),Nn._currentValue=J)}var nu=Object.prototype.hasOwnProperty,iu=c.unstable_scheduleCallback,uu=c.unstable_cancelCallback,up=c.unstable_shouldYield,cp=c.unstable_requestPaint,zt=c.unstable_now,rp=c.unstable_getCurrentPriorityLevel,Ur=c.unstable_ImmediatePriority,Hr=c.unstable_UserBlockingPriority,Bn=c.unstable_NormalPriority,op=c.unstable_LowPriority,Cr=c.unstable_IdlePriority,fp=c.log,sp=c.unstable_setDisableYieldValue,Ol=null,at=null;function Pt(e){if(typeof fp=="function"&&sp(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Ol,e)}catch{}}var lt=Math.clz32?Math.clz32:hp,dp=Math.log,pp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(dp(e)/pp|0)|0}var Yn=256,qn=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ln(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=za(l):(u&=r,u!==0?n=za(u):a||(a=r&~e,a!==0&&(n=za(a))))):(r=l&~i,r!==0?n=za(r):u!==0?n=za(u):a||(a=l&~e,a!==0&&(n=za(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(){var e=Yn;return Yn<<=1,(Yn&4194048)===0&&(Yn=256),e}function Yr(){var e=qn;return qn<<=1,(qn&62914560)===0&&(qn=4194304),e}function cu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gp(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,p=e.expirationTimes,E=e.hiddenUpdates;for(a=u&~a;0<a;){var j=31-lt(a),D=1<<j;r[j]=0,p[j]=-1;var T=E[j];if(T!==null)for(E[j]=null,j=0;j<T.length;j++){var z=T[j];z!==null&&(z.lane&=-536870913)}a&=~D}l!==0&&qr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function qr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Lr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-lt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ru(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ou(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gr(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Ed(e.type))}function vp(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var It=Math.random().toString(36).slice(2),Ze="__reactFiber$"+It,$e="__reactProps$"+It,Xa="__reactContainer$"+It,fu="__reactEvents$"+It,yp="__reactListeners$"+It,bp="__reactHandles$"+It,Qr="__reactResources$"+It,Ul="__reactMarker$"+It;function su(e){delete e[Ze],delete e[$e],delete e[fu],delete e[yp],delete e[bp]}function ka(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cd(e);e!==null;){if(a=e[Ze])return a;e=cd(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[Ze]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Va(e){var t=e[Qr];return t||(t=e[Qr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[Ul]=!0}var Xr=new Set,kr={};function ja(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(kr[e]=t,e=0;e<t.length;e++)Xr.add(t[e])}var xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zr={},Vr={};function Sp(e){return nu.call(Vr,e)?!0:nu.call(Zr,e)?!1:xp.test(e)?Vr[e]=!0:(Zr[e]=!0,!1)}function Gn(e,t,a){if(Sp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ut(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var du,Kr;function Ja(e){if(du===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);du=t&&t[1]||"",Kr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+du+e+Kr}var pu=!1;function hu(e,t){if(!e||pu)return"";pu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(z){var T=z}Reflect.construct(e,[],D)}else{try{D.call()}catch(z){T=z}e.call(D.prototype)}}else{try{throw Error()}catch(z){T=z}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(z){if(z&&T&&typeof z.stack=="string")return[z.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var p=u.split(`
`),E=r.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===E.length)for(l=p.length-1,n=E.length-1;1<=l&&0<=n&&p[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==E[n]){var j=`
`+p[l].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=l&&0<=n);break}}}finally{pu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function Ep(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return hu(e.type,!1);case 11:return hu(e.type.render,!1);case 1:return hu(e.type,!0);case 31:return Ja("Activity");default:return""}}function Jr(e){try{var t="";do t+=Ep(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $r(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tp(e){var t=$r(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xn(e){e._valueTracker||(e._valueTracker=Tp(e))}function Wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=$r(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Np=/[\n"\\]/g;function pt(e){return e.replace(Np,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mu(e,t,a,l,n,i,u,r){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?gu(e,u,dt(t)):a!=null?gu(e,u,dt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+dt(r):e.removeAttribute("name")}function Fr(e,t,a,l,n,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function gu(e,t,a){t==="number"&&kn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Pr(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Ir(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(ke(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var zp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||zp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function to(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&eo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&eo(e,i,t[i])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ap=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(e){return Ap.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yu=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function ao(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(mu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[$e]||null;if(!n)throw Error(o(90));mu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Wr(l)}break e;case"textarea":Pr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var xu=!1;function lo(e,t,a){if(xu)return e(t,a);xu=!0;try{var l=e(t);return l}finally{if(xu=!1,(Fa!==null||Pa!==null)&&(wi(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,ao(t),e)))for(t=0;t<e.length;t++)ao(e[t])}}function Cl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[$e]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Ht)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{Su=!1}var ea=null,Eu=null,Vn=null;function no(){if(Vn)return Vn;var e,t=Eu,a=t.length,l,n="value"in ea?ea.value:ea.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Vn=n.slice(e,1<l?1-l:void 0)}function Kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function io(){return!1}function We(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jn:io,this.isPropagationStopped=io,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=We(Aa),Yl=A({},Aa,{view:0,detail:0}),Rp=We(Yl),Tu,Nu,ql,Wn=A({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ql&&(ql&&e.type==="mousemove"?(Tu=e.screenX-ql.screenX,Nu=e.screenY-ql.screenY):Nu=Tu=0,ql=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),uo=We(Wn),Mp=A({},Wn,{dataTransfer:0}),wp=We(Mp),Op=A({},Yl,{relatedTarget:0}),zu=We(Op),Dp=A({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=We(Dp),Up=A({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=We(Up),Cp=A({},Aa,{data:0}),co=We(Cp),Bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qp[e])?!!t[e]:!1}function ju(){return Lp}var Gp=A({},Yl,{key:function(e){if(e.key){var t=Bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?Kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qp=We(Gp),Xp=A({},Wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ro=We(Xp),kp=A({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Zp=We(kp),Vp=A({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=We(Vp),Jp=A({},Wn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=We(Jp),Wp=A({},Aa,{newState:0,oldState:0}),Fp=We(Wp),Pp=[9,13,27,32],Au=Ht&&"CompositionEvent"in window,Ll=null;Ht&&"documentMode"in document&&(Ll=document.documentMode);var Ip=Ht&&"TextEvent"in window&&!Ll,oo=Ht&&(!Au||Ll&&8<Ll&&11>=Ll),fo=" ",so=!1;function po(e,t){switch(e){case"keyup":return Pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ho(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function eh(e,t){switch(e){case"compositionend":return ho(t);case"keypress":return t.which!==32?null:(so=!0,fo);case"textInput":return e=t.data,e===fo&&so?null:e;default:return null}}function th(e,t){if(Ia)return e==="compositionend"||!Au&&po(e,t)?(e=no(),Vn=Eu=ea=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oo&&t.locale!=="ko"?null:t.data;default:return null}}var ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ah[e.type]:t==="textarea"}function go(e,t,a,l){Fa?Pa?Pa.push(l):Pa=[l]:Fa=l,t=Ci(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Gl=null,Ql=null;function lh(e){Fs(e,0)}function Fn(e){var t=Hl(e);if(Wr(t))return e}function vo(e,t){if(e==="change")return t}var yo=!1;if(Ht){var Ru;if(Ht){var Mu="oninput"in document;if(!Mu){var bo=document.createElement("div");bo.setAttribute("oninput","return;"),Mu=typeof bo.oninput=="function"}Ru=Mu}else Ru=!1;yo=Ru&&(!document.documentMode||9<document.documentMode)}function xo(){Gl&&(Gl.detachEvent("onpropertychange",So),Ql=Gl=null)}function So(e){if(e.propertyName==="value"&&Fn(Ql)){var t=[];go(t,Ql,e,bu(e)),lo(lh,t)}}function nh(e,t,a){e==="focusin"?(xo(),Gl=t,Ql=a,Gl.attachEvent("onpropertychange",So)):e==="focusout"&&xo()}function ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fn(Ql)}function uh(e,t){if(e==="click")return Fn(t)}function ch(e,t){if(e==="input"||e==="change")return Fn(t)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:rh;function Xl(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!nu.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function To(e,t){var a=Eo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Eo(a)}}function No(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?No(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=kn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=kn(e.document)}return t}function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var oh=Ht&&"documentMode"in document&&11>=document.documentMode,el=null,Ou=null,kl=null,Du=!1;function jo(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||el==null||el!==kn(l)||(l=el,"selectionStart"in l&&wu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),kl&&Xl(kl,l)||(kl=l,l=Ci(Ou,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Ra(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},_u={},Ao={};Ht&&(Ao=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ma(e){if(_u[e])return _u[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ao)return _u[e]=t[a];return e}var Ro=Ma("animationend"),Mo=Ma("animationiteration"),wo=Ma("animationstart"),fh=Ma("transitionrun"),sh=Ma("transitionstart"),dh=Ma("transitioncancel"),Oo=Ma("transitionend"),Do=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Et(e,t){Do.set(e,t),ja(t,[e])}var _o=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var a=_o.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Jr(t)},_o.set(e,t),t)}return{value:e,source:t,stack:Jr(t)}}var mt=[],al=0,Hu=0;function Pn(){for(var e=al,t=Hu=al=0;t<e;){var a=mt[t];mt[t++]=null;var l=mt[t];mt[t++]=null;var n=mt[t];mt[t++]=null;var i=mt[t];if(mt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Uo(a,n,i)}}function In(e,t,a,l){mt[al++]=e,mt[al++]=t,mt[al++]=a,mt[al++]=l,Hu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cu(e,t,a,l){return In(e,t,a,l),ei(e)}function ll(e,t){return In(e,null,null,t),ei(e)}function Uo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-lt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ei(e){if(50<gn)throw gn=0,Qc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function ph(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,l){return new ph(e,t,a,l)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ct(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ho(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Bu(e)&&(u=1);else if(typeof e=="string")u=mm(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=it(31,a,t,n),e.elementType=Ne,e.lanes=i,e;case X:return wa(a.children,n,i,t);case k:u=8,n|=24;break;case Q:return e=it(12,a,t,n|2),e.elementType=Q,e.lanes=i,e;case F:return e=it(13,a,t,n),e.elementType=F,e.lanes=i,e;case Ue:return e=it(19,a,t,n),e.elementType=Ue,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case I:u=10;break e;case ue:u=9;break e;case Se:u=11;break e;case Oe:u=14;break e;case He:u=16,l=null;break e}u=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=it(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function wa(e,t,a,l){return e=it(7,e,l,t),e.lanes=a,e}function Yu(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function qu(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var il=[],ul=0,ai=null,li=0,gt=[],vt=0,Oa=null,Bt=1,Yt="";function Da(e,t){il[ul++]=li,il[ul++]=ai,ai=e,li=t}function Co(e,t,a){gt[vt++]=Bt,gt[vt++]=Yt,gt[vt++]=Oa,Oa=e;var l=Bt;e=Yt;var n=32-lt(l)-1;l&=~(1<<n),a+=1;var i=32-lt(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Bt=1<<32-lt(t)+n|a<<n|l,Yt=i+e}else Bt=1<<i|a<<n|l,Yt=e}function Lu(e){e.return!==null&&(Da(e,1),Co(e,1,0))}function Gu(e){for(;e===ai;)ai=il[--ul],il[ul]=null,li=il[--ul],il[ul]=null;for(;e===Oa;)Oa=gt[--vt],gt[vt]=null,Yt=gt[--vt],gt[vt]=null,Bt=gt[--vt],gt[vt]=null}var Je=null,ze=null,oe=!1,_a=null,jt=!1,Qu=Error(o(519));function Ua(e){var t=Error(o(418,""));throw Kl(ht(t,e)),Qu}function Bo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[$e]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<yn.length;a++)ne(yn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Fr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xn(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Ir(t,l.value,l.defaultValue,l.children),Xn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||td(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Bi),t=!0):t=!1,t||Ua(e)}function Yo(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:Je=Je.return}}function Zl(e){if(e!==Je)return!1;if(!oe)return Yo(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nr(e.type,e.memoizedProps)),a=!a),a&&ze&&Ua(e),Yo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){ze=Nt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}ze=null}}else t===27?(t=ze,ga(e.type)?(e=rr,rr=null,ze=e):ze=t):ze=Je?Nt(e.stateNode.nextSibling):null;return!0}function Vl(){ze=Je=null,oe=!1}function qo(){var e=_a;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),_a=null),e}function Kl(e){_a===null?_a=[e]:_a.push(e)}var Xu=_(null),Ha=null,qt=null;function ta(e,t,a){B(Xu,t._currentValue),t._currentValue=a}function Lt(e){e._currentValue=Xu.current,q(Xu)}function ku(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Zu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=n;for(var p=0;p<t.length;p++)if(r.context===t[p]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),ku(i.return,a,e),l||(u=null);break e}i=r.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(o(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),ku(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Jl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var r=n.type;nt(n.pendingProps.value,u.value)||(e!==null?e.push(r):e=[r])}}else if(n===tt.current){if(u=n.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Nn):e=[Nn])}n=n.return}e!==null&&Zu(t,e,a,l),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ha=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Lo(Ha,e)}function ii(e,t){return Ha===null&&Ca(e),Lo(e,t)}function Lo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(e===null)throw Error(o(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return a}var hh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},mh=c.unstable_scheduleCallback,gh=c.unstable_NormalPriority,De={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new hh,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&mh(gh,function(){e.controller.abort()})}var Wl=null,Ku=0,cl=0,rl=null;function vh(e,t){if(Wl===null){var a=Wl=[];Ku=0,cl=$c(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ku++,t.then(Go,Go),t}function Go(){if(--Ku===0&&Wl!==null){rl!==null&&(rl.status="fulfilled");var e=Wl;Wl=null,cl=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Qo=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&vh(e,t),Qo!==null&&Qo(e,t)};var Ba=_(null);function Ju(){var e=Ba.current;return e!==null?e:ye.pooledCache}function ui(e,t){t===null?B(Ba,Ba.current):B(Ba,t.pool)}function Xo(){var e=Ju();return e===null?null:{parent:De._currentValue,pool:e}}var Fl=Error(o(460)),ko=Error(o(474)),ci=Error(o(542)),$u={then:function(){}};function Zo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ri(){}function Vo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ri,ri),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jo(e),e;default:if(typeof t.status=="string")t.then(ri,ri);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jo(e),e}throw Pl=t,Fl}}var Pl=null;function Ko(){if(Pl===null)throw Error(o(459));var e=Pl;return Pl=null,e}function Jo(e){if(e===Fl||e===ci)throw Error(o(483))}var aa=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ei(e),Uo(e,null,a),t}return In(e,l,t,a),ei(e)}function Il(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Lr(e,a)}}function Pu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Iu=!1;function en(){if(Iu){var e=rl;if(e!==null)throw e}}function tn(e,t,a,l){Iu=!1;var n=e.updateQueue;aa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var p=r,E=p.next;p.next=null,u===null?i=E:u.next=E,u=p;var j=e.alternate;j!==null&&(j=j.updateQueue,r=j.lastBaseUpdate,r!==u&&(r===null?j.firstBaseUpdate=E:r.next=E,j.lastBaseUpdate=p))}if(i!==null){var D=n.baseState;u=0,j=E=p=null,r=i;do{var T=r.lane&-536870913,z=T!==r.lane;if(z?(ie&T)===T:(l&T)===T){T!==0&&T===cl&&(Iu=!0),j!==null&&(j=j.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var $=e,V=r;T=t;var he=a;switch(V.tag){case 1:if($=V.payload,typeof $=="function"){D=$.call(he,D,T);break e}D=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=V.payload,T=typeof $=="function"?$.call(he,D,T):$,T==null)break e;D=A({},D,T);break e;case 2:aa=!0}}T=r.callback,T!==null&&(e.flags|=64,z&&(e.flags|=8192),z=n.callbacks,z===null?n.callbacks=[T]:z.push(T))}else z={lane:T,tag:r.tag,payload:r.payload,callback:r.callback,next:null},j===null?(E=j=z,p=D):j=j.next=z,u|=T;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;z=r,r=z.next,z.next=null,n.lastBaseUpdate=z,n.shared.pending=null}}while(!0);j===null&&(p=D),n.baseState=p,n.firstBaseUpdate=E,n.lastBaseUpdate=j,i===null&&(n.shared.lanes=0),da|=u,e.lanes=u,e.memoizedState=D}}function $o(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Wo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$o(a[e],t)}var ol=_(null),oi=_(0);function Fo(e,t){e=Kt,B(oi,e),B(ol,t),Kt=e|t.baseLanes}function ec(){B(oi,Kt),B(ol,ol.current)}function tc(){Kt=oi.current,q(ol),q(oi)}var ia=0,te=null,de=null,Me=null,fi=!1,fl=!1,Ya=!1,si=0,an=0,sl=null,bh=0;function Ae(){throw Error(o(321))}function ac(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function lc(e,t,a,l,n,i){return ia=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Hf:Cf,Ya=!1,i=a(l,n),Ya=!1,fl&&(i=Io(t,a,l,n)),Po(e),i}function Po(e){R.H=vi;var t=de!==null&&de.next!==null;if(ia=0,Me=de=te=null,fi=!1,an=0,sl=null,t)throw Error(o(300));e===null||Be||(e=e.dependencies,e!==null&&ni(e)&&(Be=!0))}function Io(e,t,a,l){te=e;var n=0;do{if(fl&&(sl=null),an=0,fl=!1,25<=n)throw Error(o(301));if(n+=1,Me=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=jh,i=t(a,l)}while(fl);return i}function xh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ln(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(te.flags|=1024),t}function nc(){var e=si!==0;return si=0,e}function ic(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function uc(e){if(fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fi=!1}ia=0,Me=de=te=null,fl=!1,an=si=0,sl=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?te.memoizedState=Me=e:Me=Me.next=e,Me}function we(){if(de===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Me===null?te.memoizedState:Me.next;if(t!==null)Me=t,de=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Me===null?te.memoizedState=Me=e:Me=Me.next=e}return Me}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ln(e){var t=an;return an+=1,sl===null&&(sl=[]),e=Vo(sl,e,t),t=te,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Hf:Cf),e}function di(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ln(e);if(e.$$typeof===I)return Ve(e)}throw Error(o(438,String(e)))}function rc(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=cc(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=et;return t.index++,a}function Gt(e,t){return typeof t=="function"?t(e):t}function pi(e){var t=we();return oc(t,de,e)}function oc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var r=u=null,p=null,E=t,j=!1;do{var D=E.lane&-536870913;if(D!==E.lane?(ie&D)===D:(ia&D)===D){var T=E.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),D===cl&&(j=!0);else if((ia&T)===T){E=E.next,T===cl&&(j=!0);continue}else D={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(r=p=D,u=i):p=p.next=D,te.lanes|=T,da|=T;D=E.action,Ya&&a(i,D),i=E.hasEagerState?E.eagerState:a(i,D)}else T={lane:D,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(r=p=T,u=i):p=p.next=T,te.lanes|=D,da|=D;E=E.next}while(E!==null&&E!==t);if(p===null?u=i:p.next=r,!nt(i,e.memoizedState)&&(Be=!0,j&&(a=rl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function fc(e){var t=we(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);nt(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ef(e,t,a){var l=te,n=we(),i=oe;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var u=!nt((de||n).memoizedState,a);u&&(n.memoizedState=a,Be=!0),n=n.queue;var r=lf.bind(null,l,n,e);if(nn(2048,8,r,[e]),n.getSnapshot!==t||u||Me!==null&&Me.memoizedState.tag&1){if(l.flags|=2048,dl(9,hi(),af.bind(null,l,n,a,t),null),ye===null)throw Error(o(349));i||(ia&124)!==0||tf(l,t,a)}return a}function tf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=cc(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function af(e,t,a,l){t.value=a,t.getSnapshot=l,nf(t)&&uf(e)}function lf(e,t,a){return a(function(){nf(t)&&uf(e)})}function nf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function uf(e){var t=ll(e,2);t!==null&&ft(t,e,2)}function sc(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Ya){Pt(!0);try{a()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function cf(e,t,a,l){return e.baseState=a,oc(e,de,typeof l=="function"?l:Gt)}function Sh(e,t,a,l,n){if(gi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,rf(t,i)):(i.next=a.next,t.pending=a.next=i)}}function rf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,u={};R.T=u;try{var r=a(n,l),p=R.S;p!==null&&p(u,r),of(e,t,r)}catch(E){dc(e,t,E)}finally{R.T=i}}else try{i=a(n,l),of(e,t,i)}catch(E){dc(e,t,E)}}function of(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ff(e,t,l)},function(l){return dc(e,t,l)}):ff(e,t,a)}function ff(e,t,a){t.status="fulfilled",t.value=a,sf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,rf(e,a)))}function dc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,sf(t),t=t.next;while(t!==l)}e.action=null}function sf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function df(e,t){return t}function pf(e,t){if(oe){var a=ye.formState;if(a!==null){e:{var l=te;if(oe){if(ze){t:{for(var n=ze,i=jt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Nt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ze=Nt(n.nextSibling),l=n.data==="F!";break e}}Ua(l)}l=!1}l&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:df,lastRenderedState:t},a.queue=l,a=Df.bind(null,te,l),l.dispatch=a,l=sc(!1),i=vc.bind(null,te,!1,l.queue),l=Fe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Sh.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function hf(e){var t=we();return mf(t,de,e)}function mf(e,t,a){if(t=oc(e,t,df)[0],e=pi(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ln(t)}catch(u){throw u===Fl?ci:u}else l=t;t=we();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,dl(9,hi(),Eh.bind(null,n,a),null)),[l,i,e]}function Eh(e,t){e.action=t}function gf(e){var t=we(),a=de;if(a!==null)return mf(t,a,e);we(),t=t.memoizedState,a=we();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=cc(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function hi(){return{destroy:void 0,resource:void 0}}function vf(){return we().memoizedState}function mi(e,t,a,l){var n=Fe();l=l===void 0?null:l,te.flags|=e,n.memoizedState=dl(1|t,hi(),a,l)}function nn(e,t,a,l){var n=we();l=l===void 0?null:l;var i=n.memoizedState.inst;de!==null&&l!==null&&ac(l,de.memoizedState.deps)?n.memoizedState=dl(t,i,a,l):(te.flags|=e,n.memoizedState=dl(1|t,i,a,l))}function yf(e,t){mi(8390656,8,e,t)}function bf(e,t){nn(2048,8,e,t)}function xf(e,t){return nn(4,2,e,t)}function Sf(e,t){return nn(4,4,e,t)}function Ef(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tf(e,t,a){a=a!=null?a.concat([e]):null,nn(4,4,Ef.bind(null,t,e),a)}function pc(){}function Nf(e,t){var a=we();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ac(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function zf(e,t){var a=we();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ac(t,l[1]))return l[0];if(l=e(),Ya){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l}function hc(e,t,a){return a===void 0||(ia&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Rs(),te.lanes|=e,da|=e,a)}function jf(e,t,a,l){return nt(a,t)?a:ol.current!==null?(e=hc(e,a,l),nt(e,t)||(Be=!0),e):(ia&42)===0?(Be=!0,e.memoizedState=a):(e=Rs(),te.lanes|=e,da|=e,t)}function Af(e,t,a,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var u=R.T,r={};R.T=r,vc(e,!1,t,a);try{var p=n(),E=R.S;if(E!==null&&E(r,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var j=yh(p,l);un(e,t,j,ot(e))}else un(e,t,l,ot(e))}catch(D){un(e,t,{then:function(){},status:"rejected",reason:D},ot())}finally{Y.p=i,R.T=u}}function Th(){}function mc(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Rf(e).queue;Af(e,n,t,J,a===null?Th:function(){return Mf(e),a(l)})}function Rf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mf(e){var t=Rf(e).next.queue;un(e,t,{},ot())}function gc(){return Ve(Nn)}function wf(){return we().memoizedState}function Of(){return we().memoizedState}function Nh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ot();e=la(a);var l=na(t,e,a);l!==null&&(ft(l,t,a),Il(l,t,a)),t={cache:Vu()},e.payload=t;return}t=t.return}}function zh(e,t,a){var l=ot();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gi(e)?_f(t,a):(a=Cu(e,t,a,l),a!==null&&(ft(a,e,l),Uf(a,t,l)))}function Df(e,t,a){var l=ot();un(e,t,a,l)}function un(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gi(e))_f(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,r=i(u,a);if(n.hasEagerState=!0,n.eagerState=r,nt(r,u))return In(e,t,n,0),ye===null&&Pn(),!1}catch{}finally{}if(a=Cu(e,t,n,l),a!==null)return ft(a,e,l),Uf(a,t,l),!0}return!1}function vc(e,t,a,l){if(l={lane:2,revertLane:$c(),action:l,hasEagerState:!1,eagerState:null,next:null},gi(e)){if(t)throw Error(o(479))}else t=Cu(e,a,l,2),t!==null&&ft(t,e,2)}function gi(e){var t=e.alternate;return e===te||t!==null&&t===te}function _f(e,t){fl=fi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Uf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Lr(e,a)}}var vi={readContext:Ve,use:di,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae},Hf={readContext:Ve,use:di,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:yf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,mi(4194308,4,Ef.bind(null,t,e),a)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var l=e();if(Ya){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Fe();if(a!==void 0){var n=a(t);if(Ya){Pt(!0);try{a(t)}finally{Pt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=zh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=sc(e);var t=e.queue,a=Df.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:pc,useDeferredValue:function(e,t){var a=Fe();return hc(a,e,t)},useTransition:function(){var e=sc(!1);return e=Af.bind(null,te,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=Fe();if(oe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ye===null)throw Error(o(349));(ie&124)!==0||tf(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,yf(lf.bind(null,l,i,e),[e]),l.flags|=2048,dl(9,hi(),af.bind(null,l,i,a,t),null),a},useId:function(){var e=Fe(),t=ye.identifierPrefix;if(oe){var a=Yt,l=Bt;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=si++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=bh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:gc,useFormState:pf,useActionState:pf,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=vc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:rc,useCacheRefresh:function(){return Fe().memoizedState=Nh.bind(null,te)}},Cf={readContext:Ve,use:di,useCallback:Nf,useContext:Ve,useEffect:bf,useImperativeHandle:Tf,useInsertionEffect:xf,useLayoutEffect:Sf,useMemo:zf,useReducer:pi,useRef:vf,useState:function(){return pi(Gt)},useDebugValue:pc,useDeferredValue:function(e,t){var a=we();return jf(a,de.memoizedState,e,t)},useTransition:function(){var e=pi(Gt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:ef,useId:wf,useHostTransitionStatus:gc,useFormState:hf,useActionState:hf,useOptimistic:function(e,t){var a=we();return cf(a,de,e,t)},useMemoCache:rc,useCacheRefresh:Of},jh={readContext:Ve,use:di,useCallback:Nf,useContext:Ve,useEffect:bf,useImperativeHandle:Tf,useInsertionEffect:xf,useLayoutEffect:Sf,useMemo:zf,useReducer:fc,useRef:vf,useState:function(){return fc(Gt)},useDebugValue:pc,useDeferredValue:function(e,t){var a=we();return de===null?hc(a,e,t):jf(a,de.memoizedState,e,t)},useTransition:function(){var e=fc(Gt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:ef,useId:wf,useHostTransitionStatus:gc,useFormState:gf,useActionState:gf,useOptimistic:function(e,t){var a=we();return de!==null?cf(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rc,useCacheRefresh:Of},pl=null,cn=0;function yi(e){var t=cn;return cn+=1,pl===null&&(pl=[]),Vo(pl,e,t)}function rn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bi(e,t){throw t.$$typeof===U?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bf(e){var t=e._init;return t(e._payload)}function Yf(e){function t(b,v){if(e){var S=b.deletions;S===null?(b.deletions=[v],b.flags|=16):S.push(v)}}function a(b,v){if(!e)return null;for(;v!==null;)t(b,v),v=v.sibling;return null}function l(b){for(var v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function n(b,v){return b=Ct(b,v),b.index=0,b.sibling=null,b}function i(b,v,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<v?(b.flags|=67108866,v):S):(b.flags|=67108866,v)):(b.flags|=1048576,v)}function u(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function r(b,v,S,M){return v===null||v.tag!==6?(v=Yu(S,b.mode,M),v.return=b,v):(v=n(v,S),v.return=b,v)}function p(b,v,S,M){var L=S.type;return L===X?j(b,v,S.props.children,M,S.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===He&&Bf(L)===v.type)?(v=n(v,S.props),rn(v,S),v.return=b,v):(v=ti(S.type,S.key,S.props,null,b.mode,M),rn(v,S),v.return=b,v)}function E(b,v,S,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=qu(S,b.mode,M),v.return=b,v):(v=n(v,S.children||[]),v.return=b,v)}function j(b,v,S,M,L){return v===null||v.tag!==7?(v=wa(S,b.mode,M,L),v.return=b,v):(v=n(v,S),v.return=b,v)}function D(b,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Yu(""+v,b.mode,S),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case H:return S=ti(v.type,v.key,v.props,null,b.mode,S),rn(S,v),S.return=b,S;case W:return v=qu(v,b.mode,S),v.return=b,v;case He:var M=v._init;return v=M(v._payload),D(b,v,S)}if(ke(v)||Xe(v))return v=wa(v,b.mode,S,null),v.return=b,v;if(typeof v.then=="function")return D(b,yi(v),S);if(v.$$typeof===I)return D(b,ii(b,v),S);bi(b,v)}return null}function T(b,v,S,M){var L=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return L!==null?null:r(b,v,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case H:return S.key===L?p(b,v,S,M):null;case W:return S.key===L?E(b,v,S,M):null;case He:return L=S._init,S=L(S._payload),T(b,v,S,M)}if(ke(S)||Xe(S))return L!==null?null:j(b,v,S,M,null);if(typeof S.then=="function")return T(b,v,yi(S),M);if(S.$$typeof===I)return T(b,v,ii(b,S),M);bi(b,S)}return null}function z(b,v,S,M,L){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return b=b.get(S)||null,r(v,b,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case H:return b=b.get(M.key===null?S:M.key)||null,p(v,b,M,L);case W:return b=b.get(M.key===null?S:M.key)||null,E(v,b,M,L);case He:var ae=M._init;return M=ae(M._payload),z(b,v,S,M,L)}if(ke(M)||Xe(M))return b=b.get(S)||null,j(v,b,M,L,null);if(typeof M.then=="function")return z(b,v,S,yi(M),L);if(M.$$typeof===I)return z(b,v,S,ii(v,M),L);bi(v,M)}return null}function $(b,v,S,M){for(var L=null,ae=null,G=v,K=v=0,qe=null;G!==null&&K<S.length;K++){G.index>K?(qe=G,G=null):qe=G.sibling;var re=T(b,G,S[K],M);if(re===null){G===null&&(G=qe);break}e&&G&&re.alternate===null&&t(b,G),v=i(re,v,K),ae===null?L=re:ae.sibling=re,ae=re,G=qe}if(K===S.length)return a(b,G),oe&&Da(b,K),L;if(G===null){for(;K<S.length;K++)G=D(b,S[K],M),G!==null&&(v=i(G,v,K),ae===null?L=G:ae.sibling=G,ae=G);return oe&&Da(b,K),L}for(G=l(G);K<S.length;K++)qe=z(G,b,K,S[K],M),qe!==null&&(e&&qe.alternate!==null&&G.delete(qe.key===null?K:qe.key),v=i(qe,v,K),ae===null?L=qe:ae.sibling=qe,ae=qe);return e&&G.forEach(function(Sa){return t(b,Sa)}),oe&&Da(b,K),L}function V(b,v,S,M){if(S==null)throw Error(o(151));for(var L=null,ae=null,G=v,K=v=0,qe=null,re=S.next();G!==null&&!re.done;K++,re=S.next()){G.index>K?(qe=G,G=null):qe=G.sibling;var Sa=T(b,G,re.value,M);if(Sa===null){G===null&&(G=qe);break}e&&G&&Sa.alternate===null&&t(b,G),v=i(Sa,v,K),ae===null?L=Sa:ae.sibling=Sa,ae=Sa,G=qe}if(re.done)return a(b,G),oe&&Da(b,K),L;if(G===null){for(;!re.done;K++,re=S.next())re=D(b,re.value,M),re!==null&&(v=i(re,v,K),ae===null?L=re:ae.sibling=re,ae=re);return oe&&Da(b,K),L}for(G=l(G);!re.done;K++,re=S.next())re=z(G,b,K,re.value,M),re!==null&&(e&&re.alternate!==null&&G.delete(re.key===null?K:re.key),v=i(re,v,K),ae===null?L=re:ae.sibling=re,ae=re);return e&&G.forEach(function(Am){return t(b,Am)}),oe&&Da(b,K),L}function he(b,v,S,M){if(typeof S=="object"&&S!==null&&S.type===X&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case H:e:{for(var L=S.key;v!==null;){if(v.key===L){if(L=S.type,L===X){if(v.tag===7){a(b,v.sibling),M=n(v,S.props.children),M.return=b,b=M;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===He&&Bf(L)===v.type){a(b,v.sibling),M=n(v,S.props),rn(M,S),M.return=b,b=M;break e}a(b,v);break}else t(b,v);v=v.sibling}S.type===X?(M=wa(S.props.children,b.mode,M,S.key),M.return=b,b=M):(M=ti(S.type,S.key,S.props,null,b.mode,M),rn(M,S),M.return=b,b=M)}return u(b);case W:e:{for(L=S.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){a(b,v.sibling),M=n(v,S.children||[]),M.return=b,b=M;break e}else{a(b,v);break}else t(b,v);v=v.sibling}M=qu(S,b.mode,M),M.return=b,b=M}return u(b);case He:return L=S._init,S=L(S._payload),he(b,v,S,M)}if(ke(S))return $(b,v,S,M);if(Xe(S)){if(L=Xe(S),typeof L!="function")throw Error(o(150));return S=L.call(S),V(b,v,S,M)}if(typeof S.then=="function")return he(b,v,yi(S),M);if(S.$$typeof===I)return he(b,v,ii(b,S),M);bi(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(a(b,v.sibling),M=n(v,S),M.return=b,b=M):(a(b,v),M=Yu(S,b.mode,M),M.return=b,b=M),u(b)):a(b,v)}return function(b,v,S,M){try{cn=0;var L=he(b,v,S,M);return pl=null,L}catch(G){if(G===Fl||G===ci)throw G;var ae=it(29,G,null,b.mode);return ae.lanes=M,ae.return=b,ae}finally{}}}var hl=Yf(!0),qf=Yf(!1),yt=_(null),At=null;function ua(e){var t=e.alternate;B(_e,_e.current&1),B(yt,e),At===null&&(t===null||ol.current!==null||t.memoizedState!==null)&&(At=e)}function Lf(e){if(e.tag===22){if(B(_e,_e.current),B(yt,e),At===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(At=e)}}else ca()}function ca(){B(_e,_e.current),B(yt,yt.current)}function Qt(e){q(yt),At===e&&(At=null),q(_e)}var _e=_(0);function xi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||cr(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function yc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:A({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ot(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(ft(t,e,l),Il(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ot(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(ft(t,e,l),Il(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ot(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(ft(t,e,a),Il(t,e,a))}};function Gf(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Xl(a,l)||!Xl(n,i):!0}function Qf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=A({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xf(e){Si(e)}function kf(e){console.error(e)}function Zf(e){Si(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Vf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function xc(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function Kf(e){return e=la(e),e.tag=3,e}function Jf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Vf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Vf(t,a,l),typeof n!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Ah(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Jl(t,a,n,!0),a=yt.current,a!==null){switch(a.tag){case 13:return At===null?kc():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===$u?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Vc(e,l,n)),!1;case 22:return a.flags|=65536,l===$u?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Vc(e,l,n)),!1}throw Error(o(435,a.tag))}return Vc(e,l,n),kc(),!1}if(oe)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Qu&&(e=Error(o(422),{cause:l}),Kl(ht(e,a)))):(l!==Qu&&(t=Error(o(423),{cause:l}),Kl(ht(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ht(l,a),n=xc(e.stateNode,l,n),Pu(e,n),je!==4&&(je=2)),!1;var i=Error(o(520),{cause:l});if(i=ht(i,a),mn===null?mn=[i]:mn.push(i),je!==4&&(je=2),t===null)return!0;l=ht(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=xc(a.stateNode,l,e),Pu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Kf(n),Jf(n,e,a,l),Pu(a,n),!1}a=a.return}while(a!==null);return!1}var $f=Error(o(461)),Be=!1;function Le(e,t,a,l){t.child=e===null?qf(t,null,a,l):hl(t,e.child,a,l)}function Wf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return Ca(t),l=lc(e,t,a,u,i,n),r=nc(),e!==null&&!Be?(ic(e,t,n),Xt(e,t,n)):(oe&&r&&Lu(t),t.flags|=1,Le(e,t,l,n),t.child)}function Ff(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Bu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Pf(e,t,i,l,n)):(e=ti(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Rc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Xl,a(u,l)&&e.ref===t.ref)return Xt(e,t,n)}return t.flags|=1,e=Ct(i,l),e.ref=t.ref,e.return=t,t.child=e}function Pf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Xl(i,l)&&e.ref===t.ref)if(Be=!1,t.pendingProps=l=i,Rc(e,n))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Xt(e,t,n)}return Sc(e,t,a,l,n)}function If(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return es(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?Fo(t,i):ec(),Lf(t);else return t.lanes=t.childLanes=536870912,es(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ui(t,i.cachePool),Fo(t,i),ca(),t.memoizedState=null):(e!==null&&ui(t,null),ec(),ca());return Le(e,t,n,a),t.child}function es(e,t,a,l){var n=Ju();return n=n===null?null:{parent:De._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ui(t,null),ec(),Lf(t),e!==null&&Jl(e,t,l,!0),null}function Ti(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Sc(e,t,a,l,n){return Ca(t),a=lc(e,t,a,l,void 0,n),l=nc(),e!==null&&!Be?(ic(e,t,n),Xt(e,t,n)):(oe&&l&&Lu(t),t.flags|=1,Le(e,t,a,n),t.child)}function ts(e,t,a,l,n,i){return Ca(t),t.updateQueue=null,a=Io(t,l,a,n),Po(e),l=nc(),e!==null&&!Be?(ic(e,t,i),Xt(e,t,i)):(oe&&l&&Lu(t),t.flags|=1,Le(e,t,a,i),t.child)}function as(e,t,a,l,n){if(Ca(t),t.stateNode===null){var i=nl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ve(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Wu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ve(u):nl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(yc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&bc.enqueueReplaceState(i,i.state,null),tn(t,l,i,n),en(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,p=qa(a,r);i.props=p;var E=i.context,j=a.contextType;u=nl,typeof j=="object"&&j!==null&&(u=Ve(j));var D=a.getDerivedStateFromProps;j=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,j||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||E!==u)&&Qf(t,i,l,u),aa=!1;var T=t.memoizedState;i.state=T,tn(t,l,i,n),en(),E=t.memoizedState,r||T!==E||aa?(typeof D=="function"&&(yc(t,a,D,l),E=t.memoizedState),(p=aa||Gf(t,a,p,l,T,E,u))?(j||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=u,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Fu(e,t),u=t.memoizedProps,j=qa(a,u),i.props=j,D=t.pendingProps,T=i.context,E=a.contextType,p=nl,typeof E=="object"&&E!==null&&(p=Ve(E)),r=a.getDerivedStateFromProps,(E=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==D||T!==p)&&Qf(t,i,l,p),aa=!1,T=t.memoizedState,i.state=T,tn(t,l,i,n),en();var z=t.memoizedState;u!==D||T!==z||aa||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof r=="function"&&(yc(t,a,r,l),z=t.memoizedState),(j=aa||Gf(t,a,j,l,T,z,p)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,z,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,z,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=p,l=j):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ti(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=hl(t,e.child,null,n),t.child=hl(t,null,a,n)):Le(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Xt(e,t,n),e}function ls(e,t,a,l){return Vl(),t.flags|=256,Le(e,t,a,l),t.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:Xo()}}function Nc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function ns(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?ua(t):ca(),oe){var r=ze,p;if(p=r){e:{for(p=r,r=jt;p.nodeType!==8;){if(!r){r=null;break e}if(p=Nt(p.nextSibling),p===null){r=null;break e}}r=p}r!==null?(t.memoizedState={dehydrated:r,treeContext:Oa!==null?{id:Bt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},p=it(18,null,null,0),p.stateNode=r,p.return=t,t.child=p,Je=t,ze=null,p=!0):p=!1}p||Ua(t)}if(r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return cr(r)?t.lanes=32:t.lanes=536870912,null;Qt(t)}return r=l.children,l=l.fallback,n?(ca(),n=t.mode,r=Ni({mode:"hidden",children:r},n),l=wa(l,n,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,n=t.child,n.memoizedState=Tc(a),n.childLanes=Nc(e,u,a),t.memoizedState=Ec,l):(ua(t),zc(t,r))}if(p=e.memoizedState,p!==null&&(r=p.dehydrated,r!==null)){if(i)t.flags&256?(ua(t),t.flags&=-257,t=jc(e,t,a)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,t=null):(ca(),n=l.fallback,r=t.mode,l=Ni({mode:"visible",children:l.children},r),n=wa(n,r,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,hl(t,e.child,null,a),l=t.child,l.memoizedState=Tc(a),l.childLanes=Nc(e,u,a),t.memoizedState=Ec,t=n);else if(ua(t),cr(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var E=u.dgst;u=E,l=Error(o(419)),l.stack="",l.digest=u,Kl({value:l,source:null,stack:null}),t=jc(e,t,a)}else if(Be||Jl(e,t,a,!1),u=(a&e.childLanes)!==0,Be||u){if(u=ye,u!==null&&(l=a&-a,l=(l&42)!==0?1:ru(l),l=(l&(u.suspendedLanes|a))!==0?0:l,l!==0&&l!==p.retryLane))throw p.retryLane=l,ll(e,l),ft(u,e,l),$f;r.data==="$?"||kc(),t=jc(e,t,a)}else r.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,ze=Nt(r.nextSibling),Je=t,oe=!0,_a=null,jt=!1,e!==null&&(gt[vt++]=Bt,gt[vt++]=Yt,gt[vt++]=Oa,Bt=e.id,Yt=e.overflow,Oa=t),t=zc(t,l.children),t.flags|=4096);return t}return n?(ca(),n=l.fallback,r=t.mode,p=e.child,E=p.sibling,l=Ct(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,E!==null?n=Ct(E,n):(n=wa(n,r,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,r=e.child.memoizedState,r===null?r=Tc(a):(p=r.cachePool,p!==null?(E=De._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=Xo(),r={baseLanes:r.baseLanes|a,cachePool:p}),n.memoizedState=r,n.childLanes=Nc(e,u,a),t.memoizedState=Ec,l):(ua(t),a=e.child,e=a.sibling,a=Ct(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function zc(e,t){return t=Ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ni(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function jc(e,t,a){return hl(t,e.child,null,a),e=zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function is(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ku(e.return,t,a)}function Ac(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function us(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Le(e,t,l.children,a),l=_e.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&is(e,a,t);else if(e.tag===19)is(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(B(_e,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&xi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ac(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&xi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ac(t,!0,a,null,i);break;case"together":Ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ct(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ct(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function Rh(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,De,e.memoizedState.cache),Vl();break;case 27:case 5:lu(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ns(e,t,a):(ua(t),e=Xt(e,t,a),e!==null?e.sibling:null);ua(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Jl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return us(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(_e,_e.current),l)break;return null;case 22:case 23:return t.lanes=0,If(e,t,a);case 24:ta(t,De,e.memoizedState.cache)}return Xt(e,t,a)}function cs(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Rc(e,a)&&(t.flags&128)===0)return Be=!1,Rh(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,oe&&(t.flags&1048576)!==0&&Co(t,li,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Bu(l)?(e=qa(l,e),t.tag=1,t=as(null,t,l,e,a)):(t.tag=0,t=Sc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===Se){t.tag=11,t=Wf(null,t,l,e,a);break e}else if(n===Oe){t.tag=14,t=Ff(null,t,l,e,a);break e}}throw t=Na(l)||l,Error(o(306,t,""))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=qa(l,t.pendingProps),as(e,t,l,n,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Fu(e,t),tn(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ta(t,De,l),l!==i.cache&&Zu(t,[De],a,!0),en(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ls(e,t,l,a);break e}else if(l!==n){n=ht(Error(o(424)),t),Kl(n),t=ls(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=Nt(e.firstChild),Je=t,oe=!0,_a=null,jt=!0,a=qf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vl(),l===n){t=Xt(e,t,a);break e}Le(e,t,l,a)}t=t.child}return t;case 26:return Ti(e,t),e===null?(a=sd(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Yi(P.current).createElement(a),l[Ze]=t,l[$e]=e,Qe(l,a,e),Ce(l),t.stateNode=l):t.memoizedState=sd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lu(t),e===null&&oe&&(l=t.stateNode=rd(t.type,t.pendingProps,P.current),Je=t,jt=!0,n=ze,ga(t.type)?(rr=n,ze=Nt(l.firstChild)):ze=n),Le(e,t,t.pendingProps.children,a),Ti(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=ze)&&(l=am(l,t.type,t.pendingProps,jt),l!==null?(t.stateNode=l,Je=t,ze=Nt(l.firstChild),jt=!1,n=!0):n=!1),n||Ua(t)),lu(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,nr(n,i)?l=null:u!==null&&nr(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=lc(e,t,xh,null,null,a),Nn._currentValue=n),Ti(e,t),Le(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=ze)&&(a=lm(a,t.pendingProps,jt),a!==null?(t.stateNode=a,Je=t,ze=null,e=!0):e=!1),e||Ua(t)),null;case 13:return ns(e,t,a);case 4:return be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=hl(t,null,l,a):Le(e,t,l,a),t.child;case 11:return Wf(e,t,t.type,t.pendingProps,a);case 7:return Le(e,t,t.pendingProps,a),t.child;case 8:return Le(e,t,t.pendingProps.children,a),t.child;case 12:return Le(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),Le(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ca(t),n=Ve(n),l=l(n),t.flags|=1,Le(e,t,l,a),t.child;case 14:return Ff(e,t,t.type,t.pendingProps,a);case 15:return Pf(e,t,t.type,t.pendingProps,a);case 19:return us(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ni(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ct(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return If(e,t,a);case 24:return Ca(t),l=Ve(De),e===null?(n=Ju(),n===null&&(n=ye,i=Vu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Wu(t),ta(t,De,n)):((e.lanes&a)!==0&&(Fu(e,t),tn(t,null,null,a),en()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,De,l)):(l=i.cache,ta(t,De,l),l!==n.cache&&Zu(t,[De],a,!0))),Le(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function kt(e){e.flags|=4}function rs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gd(t)){if(t=yt.current,t!==null&&((ie&4194048)===ie?At!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==At))throw Pl=$u,ko;e.flags|=8192}}function zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yr():536870912,e.lanes|=t,yl|=t)}function on(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Mh(e,t,a){var l=t.pendingProps;switch(Gu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(De),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zl(t)?kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qo())),Ee(t),null;case 26:return a=t.memoizedState,e===null?(kt(t),a!==null?(Ee(t),rs(t,a)):(Ee(t),t.flags&=-16777217)):a?a!==e.memoizedState?(kt(t),Ee(t),rs(t,a)):(Ee(t),t.flags&=-16777217):(e.memoizedProps!==l&&kt(t),Ee(t),t.flags&=-16777217),null;case 27:Cn(t),a=P.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ee(t),null}e=Z.current,Zl(t)?Bo(t):(e=rd(n,l,a),t.stateNode=e,kt(t))}return Ee(t),null;case 5:if(Cn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ee(t),null}if(e=Z.current,Zl(t))Bo(t);else{switch(n=Yi(P.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ze]=t,e[$e]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&kt(t)}}return Ee(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=P.current,Zl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||td(e.nodeValue,a)),e||Ua(t)}else e=Yi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return Ee(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Zl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Ze]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),n=!1}else n=qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Qt(t),t):(Qt(t),null)}if(Qt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),zi(t,t.updateQueue),Ee(t),null;case 4:return Ft(),e===null&&Ic(t.stateNode.containerInfo),Ee(t),null;case 10:return Lt(t.type),Ee(t),null;case 19:if(q(_e),n=t.memoizedState,n===null)return Ee(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)on(n,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=xi(e),i!==null){for(t.flags|=128,on(n,!1),e=i.updateQueue,t.updateQueue=e,zi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ho(a,e),a=a.sibling;return B(_e,_e.current&1|2),t.child}e=e.sibling}n.tail!==null&&zt()>Ri&&(t.flags|=128,l=!0,on(n,!1),t.lanes=4194304)}else{if(!l)if(e=xi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,zi(t,e),on(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!oe)return Ee(t),null}else 2*zt()-n.renderingStartTime>Ri&&a!==536870912&&(t.flags|=128,l=!0,on(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=zt(),t.sibling=null,e=_e.current,B(_e,l?e&1|2:e&1),t):(Ee(t),null);case 22:case 23:return Qt(t),tc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&zi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&q(Ba),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(De),Ee(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function wh(e,t){switch(Gu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(De),Ft(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Cn(t),null;case 13:if(Qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(_e),null;case 4:return Ft(),null;case 10:return Lt(t.type),null;case 22:case 23:return Qt(t),tc(),e!==null&&q(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(De),null;case 25:return null;default:return null}}function os(e,t){switch(Gu(t),t.tag){case 3:Lt(De),Ft();break;case 26:case 27:case 5:Cn(t);break;case 4:Ft();break;case 13:Qt(t);break;case 19:q(_e);break;case 10:Lt(t.type);break;case 22:case 23:Qt(t),tc(),e!==null&&q(Ba);break;case 24:Lt(De)}}function fn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(r){ge(t,t.return,r)}}function ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,n=t;var p=a,E=r;try{E()}catch(j){ge(n,p,j)}}}l=l.next}while(l!==i)}}catch(j){ge(t,t.return,j)}}function fs(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Wo(t,a)}catch(l){ge(e,e.return,l)}}}function ss(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function sn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function Rt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function ds(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function Mc(e,t,a){try{var l=e.stateNode;Fh(l,e.type,a,t),l[$e]=t}catch(n){ge(e,e.return,n)}}function ps(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ps(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Bi));else if(l!==4&&(l===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Oc(e,t,a),e=e.sibling;e!==null;)Oc(e,t,a),e=e.sibling}function ji(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ji(e,t,a),e=e.sibling;e!==null;)ji(e,t,a),e=e.sibling}function hs(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qe(t,l,a),t[Ze]=e,t[$e]=a}catch(i){ge(e,e.return,i)}}var Zt=!1,Re=!1,Dc=!1,ms=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Oh(e,t){if(e=e.containerInfo,ar=ki,e=zo(e),wu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,r=-1,p=-1,E=0,j=0,D=e,T=null;t:for(;;){for(var z;D!==a||n!==0&&D.nodeType!==3||(r=u+n),D!==i||l!==0&&D.nodeType!==3||(p=u+l),D.nodeType===3&&(u+=D.nodeValue.length),(z=D.firstChild)!==null;)T=D,D=z;for(;;){if(D===e)break t;if(T===a&&++E===n&&(r=u),T===i&&++j===l&&(p=u),(z=D.nextSibling)!==null)break;D=T,T=D.parentNode}D=z}a=r===-1||p===-1?null:{start:r,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(lr={focusedElem:e,selectionRange:a},ki=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=qa(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(V){ge(a,a.return,V)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ur(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ur(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function gs(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),l&4&&fn(5,a);break;case 1:if(oa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ge(a,a.return,u)}else{var n=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ge(a,a.return,u)}}l&64&&fs(a),l&512&&sn(a,a.return);break;case 3:if(oa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wo(e,t)}catch(u){ge(a,a.return,u)}}break;case 27:t===null&&l&4&&hs(a);case 26:case 5:oa(e,a),t===null&&l&4&&ds(a),l&512&&sn(a,a.return);break;case 12:oa(e,a);break;case 13:oa(e,a),l&4&&bs(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lh.bind(null,a),nm(e,a))));break;case 22:if(l=a.memoizedState!==null||Zt,!l){t=t!==null&&t.memoizedState!==null||Re,n=Zt;var i=Re;Zt=l,(Re=t)&&!i?fa(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),Zt=n,Re=i}break;case 30:break;default:oa(e,a)}}function vs(e){var t=e.alternate;t!==null&&(e.alternate=null,vs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&su(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,Pe=!1;function Vt(e,t,a){for(a=a.child;a!==null;)ys(e,t,a),a=a.sibling}function ys(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ol,a)}catch{}switch(a.tag){case 26:Re||Rt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Rt(a,t);var l=xe,n=Pe;ga(a.type)&&(xe=a.stateNode,Pe=!1),Vt(e,t,a),xn(a.stateNode),xe=l,Pe=n;break;case 5:Re||Rt(a,t);case 6:if(l=xe,n=Pe,xe=null,Vt(e,t,a),xe=l,Pe=n,xe!==null)if(Pe)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{xe.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:xe!==null&&(Pe?(e=xe,ud(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rn(e)):ud(xe,a.stateNode));break;case 4:l=xe,n=Pe,xe=a.stateNode.containerInfo,Pe=!0,Vt(e,t,a),xe=l,Pe=n;break;case 0:case 11:case 14:case 15:Re||ra(2,a,t),Re||ra(4,a,t),Vt(e,t,a);break;case 1:Re||(Rt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ss(a,t,l)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:Re=(l=Re)||a.memoizedState!==null,Vt(e,t,a),Re=l;break;default:Vt(e,t,a)}}function bs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rn(e)}catch(a){ge(t,t.return,a)}}function Dh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ms),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ms),t;default:throw Error(o(435,e.tag))}}function _c(e,t){var a=Dh(e);t.forEach(function(l){var n=Gh.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function ut(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,r=u;e:for(;r!==null;){switch(r.tag){case 27:if(ga(r.type)){xe=r.stateNode,Pe=!1;break e}break;case 5:xe=r.stateNode,Pe=!1;break e;case 3:case 4:xe=r.stateNode.containerInfo,Pe=!0;break e}r=r.return}if(xe===null)throw Error(o(160));ys(i,u,n),xe=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xs(t,e),t=t.sibling}var Tt=null;function xs(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),ct(e),l&4&&(ra(3,e,e.return),fn(3,e),ra(5,e,e.return));break;case 1:ut(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),l&64&&Zt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Tt;if(ut(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ul]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Qe(i,l,a),i[Ze]=e,Ce(i),l=i;break e;case"link":var u=hd("link","href",n).get(l+(a.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(r,1);break t}}i=n.createElement(l),Qe(i,l,a),n.head.appendChild(i);break;case"meta":if(u=hd("meta","content",n).get(l+(a.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(r,1);break t}}i=n.createElement(l),Qe(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Ze]=e,Ce(i),l=i}e.stateNode=l}else md(n,e.type,e.stateNode);else e.stateNode=pd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?md(n,e.type,e.stateNode):pd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Mc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),a!==null&&l&4&&Mc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(z){ge(e,e.return,z)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Mc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Dc=!0);break;case 6:if(ut(t,e),ct(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(z){ge(e,e.return,z)}}break;case 3:if(Gi=null,n=Tt,Tt=qi(t.containerInfo),ut(t,e),Tt=n,ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(z){ge(e,e.return,z)}Dc&&(Dc=!1,Ss(e));break;case 4:l=Tt,Tt=qi(e.stateNode.containerInfo),ut(t,e),ct(e),Tt=l;break;case 12:ut(t,e),ct(e);break;case 13:ut(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qc=zt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_c(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,E=Zt,j=Re;if(Zt=E||n,Re=j||p,ut(t,e),Re=j,Zt=E,ct(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||Zt||Re||La(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=p.stateNode;var D=p.memoizedProps.style,T=D!=null&&D.hasOwnProperty("display")?D.display:null;r.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(z){ge(p,p.return,z)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(z){ge(p,p.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_c(e,a))));break;case 19:ut(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_c(e,l)));break;case 30:break;case 21:break;default:ut(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(ps(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=wc(e);ji(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Wa(u,""),a.flags&=-33);var r=wc(e);ji(e,r,u);break;case 3:case 4:var p=a.stateNode.containerInfo,E=wc(e);Oc(e,E,p);break;default:throw Error(o(161))}}catch(j){ge(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ss(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ss(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gs(e,t.alternate,t),t=t.sibling}function La(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),La(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ss(t,t.return,a),La(t);break;case 27:xn(t.stateNode);case 26:case 5:Rt(t,t.return),La(t);break;case 22:t.memoizedState===null&&La(t);break;case 30:La(t);break;default:La(t)}e=e.sibling}}function fa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:fa(n,i,a),fn(4,i);break;case 1:if(fa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){ge(l,l.return,E)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)$o(p[n],r)}catch(E){ge(l,l.return,E)}}a&&u&64&&fs(i),sn(i,i.return);break;case 27:hs(i);case 26:case 5:fa(n,i,a),a&&l===null&&u&4&&ds(i),sn(i,i.return);break;case 12:fa(n,i,a);break;case 13:fa(n,i,a),a&&u&4&&bs(n,i);break;case 22:i.memoizedState===null&&fa(n,i,a),sn(i,i.return);break;case 30:break;default:fa(n,i,a)}t=t.sibling}}function Uc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$l(a))}function Hc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function Mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Es(e,t,a,l),t=t.sibling}function Es(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,l),n&2048&&fn(9,t);break;case 1:Mt(e,t,a,l);break;case 3:Mt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e)));break;case 12:if(n&2048){Mt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ge(t,t.return,p)}}else Mt(e,t,a,l);break;case 13:Mt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,a,l):dn(e,t):i._visibility&2?Mt(e,t,a,l):(i._visibility|=2,ml(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Uc(u,t);break;case 24:Mt(e,t,a,l),n&2048&&Hc(t.alternate,t);break;default:Mt(e,t,a,l)}}function ml(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,u=t,r=a,p=l,E=u.flags;switch(u.tag){case 0:case 11:case 15:ml(i,u,r,p,n),fn(8,u);break;case 23:break;case 22:var j=u.stateNode;u.memoizedState!==null?j._visibility&2?ml(i,u,r,p,n):dn(i,u):(j._visibility|=2,ml(i,u,r,p,n)),n&&E&2048&&Uc(u.alternate,u);break;case 24:ml(i,u,r,p,n),n&&E&2048&&Hc(u.alternate,u);break;default:ml(i,u,r,p,n)}t=t.sibling}}function dn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:dn(a,l),n&2048&&Uc(l.alternate,l);break;case 24:dn(a,l),n&2048&&Hc(l.alternate,l);break;default:dn(a,l)}t=t.sibling}}var pn=8192;function gl(e){if(e.subtreeFlags&pn)for(e=e.child;e!==null;)Ts(e),e=e.sibling}function Ts(e){switch(e.tag){case 26:gl(e),e.flags&pn&&e.memoizedState!==null&&vm(Tt,e.memoizedState,e.memoizedProps);break;case 5:gl(e);break;case 3:case 4:var t=Tt;Tt=qi(e.stateNode.containerInfo),gl(e),Tt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=pn,pn=16777216,gl(e),pn=t):gl(e));break;default:gl(e)}}function Ns(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,js(l,e)}Ns(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zs(e),e=e.sibling}function zs(e){switch(e.tag){case 0:case 11:case 15:hn(e),e.flags&2048&&ra(9,e,e.return);break;case 3:hn(e);break;case 12:hn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ai(e)):hn(e);break;default:hn(e)}}function Ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,js(l,e)}Ns(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),Ai(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ai(t));break;default:Ai(t)}e=e.sibling}}function js(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(vs(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var _h={getCacheForType:function(e){var t=Ve(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Uh=typeof WeakMap=="function"?WeakMap:Map,fe=0,ye=null,le=null,ie=0,se=0,rt=null,sa=!1,vl=!1,Cc=!1,Kt=0,je=0,da=0,Ga=0,Bc=0,bt=0,yl=0,mn=null,Ie=null,Yc=!1,qc=0,Ri=1/0,Mi=null,pa=null,Ge=0,ha=null,bl=null,xl=0,Lc=0,Gc=null,As=null,gn=0,Qc=null;function ot(){if((fe&2)!==0&&ie!==0)return ie&-ie;if(R.T!==null){var e=cl;return e!==0?e:$c()}return Gr()}function Rs(){bt===0&&(bt=(ie&536870912)===0||oe?Br():536870912);var e=yt.current;return e!==null&&(e.flags|=32),bt}function ft(e,t,a){(e===ye&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ma(e,ie,bt,!1)),_l(e,a),((fe&2)===0||e!==ye)&&(e===ye&&((fe&2)===0&&(Ga|=a),je===4&&ma(e,ie,bt,!1)),wt(e))}function Ms(e,t,a){if((fe&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Dl(e,t),n=l?Bh(e,t):Zc(e,t,!0),i=l;do{if(n===0){vl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Hh(a)){n=Zc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var r=e;n=mn;var p=r.current.memoizedState.isDehydrated;if(p&&(Sl(r,u).flags|=256),u=Zc(r,u,!1),u!==2){if(Cc&&!p){r.errorRecoveryDisabledLanes|=i,Ga|=i,n=4;break e}i=Ie,Ie=n,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,bt,!sa);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=qc+300-zt(),10<n)){if(ma(l,t,bt,!sa),Ln(l,0,!0)!==0)break e;l.timeoutHandle=nd(ws.bind(null,l,a,Ie,Mi,Yc,t,bt,Ga,yl,sa,i,2,-0,0),n);break e}ws(l,a,Ie,Mi,Yc,t,bt,Ga,yl,sa,i,0,-0,0)}}break}while(!0);wt(e)}function ws(e,t,a,l,n,i,u,r,p,E,j,D,T,z){if(e.timeoutHandle=-1,D=t.subtreeFlags,(D&8192||(D&16785408)===16785408)&&(Tn={stylesheets:null,count:0,unsuspend:gm},Ts(t),D=ym(),D!==null)){e.cancelPendingCommit=D(Bs.bind(null,e,t,i,a,l,n,u,r,p,j,1,T,z)),ma(e,i,u,!E);return}Bs(e,t,i,a,l,n,u,r,p)}function Hh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!nt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~Bc,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-lt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&qr(e,a,t)}function wi(){return(fe&6)===0?(vn(0),!1):!0}function Xc(){if(le!==null){if(se===0)var e=le.return;else e=le,qt=Ha=null,uc(e),pl=null,cn=0,e=le;for(;e!==null;)os(e.alternate,e),e=e.return;le=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ih(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xc(),ye=e,le=a=Ct(e.current,null),ie=t,se=0,rt=null,sa=!1,vl=Dl(e,t),Cc=!1,yl=bt=Bc=Ga=da=je=0,Ie=mn=null,Yc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-lt(l),i=1<<n;t|=e[n],l&=~i}return Kt=t,Pn(),a}function Os(e,t){te=null,R.H=vi,t===Fl||t===ci?(t=Ko(),se=3):t===ko?(t=Ko(),se=4):se=t===$f?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,le===null&&(je=1,Ei(e,ht(t,e.current)))}function Ds(){var e=R.H;return R.H=vi,e===null?vi:e}function _s(){var e=R.A;return R.A=_h,e}function kc(){je=4,sa||(ie&4194048)!==ie&&yt.current!==null||(vl=!0),(da&134217727)===0&&(Ga&134217727)===0||ye===null||ma(ye,ie,bt,!1)}function Zc(e,t,a){var l=fe;fe|=2;var n=Ds(),i=_s();(ye!==e||ie!==t)&&(Mi=null,Sl(e,t)),t=!1;var u=je;e:do try{if(se!==0&&le!==null){var r=le,p=rt;switch(se){case 8:Xc(),u=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var E=se;if(se=0,rt=null,El(e,r,p,E),a&&vl){u=0;break e}break;default:E=se,se=0,rt=null,El(e,r,p,E)}}Ch(),u=je;break}catch(j){Os(e,j)}while(!0);return t&&e.shellSuspendCounter++,qt=Ha=null,fe=l,R.H=n,R.A=i,le===null&&(ye=null,ie=0,Pn()),u}function Ch(){for(;le!==null;)Us(le)}function Bh(e,t){var a=fe;fe|=2;var l=Ds(),n=_s();ye!==e||ie!==t?(Mi=null,Ri=zt()+500,Sl(e,t)):vl=Dl(e,t);e:do try{if(se!==0&&le!==null){t=le;var i=rt;t:switch(se){case 1:se=0,rt=null,El(e,t,i,1);break;case 2:case 9:if(Zo(i)){se=0,rt=null,Hs(t);break}t=function(){se!==2&&se!==9||ye!==e||(se=7),wt(e)},i.then(t,t);break e;case 3:se=7;break e;case 4:se=5;break e;case 7:Zo(i)?(se=0,rt=null,Hs(t)):(se=0,rt=null,El(e,t,i,7));break;case 5:var u=null;switch(le.tag){case 26:u=le.memoizedState;case 5:case 27:var r=le;if(!u||gd(u)){se=0,rt=null;var p=r.sibling;if(p!==null)le=p;else{var E=r.return;E!==null?(le=E,Oi(E)):le=null}break t}}se=0,rt=null,El(e,t,i,5);break;case 6:se=0,rt=null,El(e,t,i,6);break;case 8:Xc(),je=6;break e;default:throw Error(o(462))}}Yh();break}catch(j){Os(e,j)}while(!0);return qt=Ha=null,R.H=l,R.A=n,fe=a,le!==null?0:(ye=null,ie=0,Pn(),je)}function Yh(){for(;le!==null&&!up();)Us(le)}function Us(e){var t=cs(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Oi(e):le=t}function Hs(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ts(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=ts(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:uc(t);default:os(a,t),t=le=Ho(t,Kt),t=cs(a,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Oi(e):le=t}function El(e,t,a,l){qt=Ha=null,uc(t),pl=null,cn=0;var n=t.return;try{if(Ah(e,n,t,a,ie)){je=1,Ei(e,ht(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;je=1,Ei(e,ht(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:vl||(ie&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=yt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cs(t,e)):Oi(t)}function Oi(e){var t=e;do{if((t.flags&32768)!==0){Cs(t,sa);return}e=t.return;var a=Mh(t.alternate,t,Kt);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);je===0&&(je=5)}function Cs(e,t){do{var a=wh(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);je=6,le=null}function Bs(e,t,a,l,n,i,u,r,p){e.cancelPendingCommit=null;do Di();while(Ge!==0);if((fe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Hu,gp(e,a,i,u,r,p),e===ye&&(le=ye=null,ie=0),bl=t,ha=e,xl=a,Lc=i,Gc=n,As=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qh(Bn,function(){return Qs(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=Y.p,Y.p=2,u=fe,fe|=4;try{Oh(e,t,a)}finally{fe=u,Y.p=n,R.T=l}}Ge=1,Ys(),qs(),Ls()}}function Ys(){if(Ge===1){Ge=0;var e=ha,t=bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=Y.p;Y.p=2;var n=fe;fe|=4;try{xs(t,e);var i=lr,u=zo(e.containerInfo),r=i.focusedElem,p=i.selectionRange;if(u!==r&&r&&r.ownerDocument&&No(r.ownerDocument.documentElement,r)){if(p!==null&&wu(r)){var E=p.start,j=p.end;if(j===void 0&&(j=E),"selectionStart"in r)r.selectionStart=E,r.selectionEnd=Math.min(j,r.value.length);else{var D=r.ownerDocument||document,T=D&&D.defaultView||window;if(T.getSelection){var z=T.getSelection(),$=r.textContent.length,V=Math.min(p.start,$),he=p.end===void 0?V:Math.min(p.end,$);!z.extend&&V>he&&(u=he,he=V,V=u);var b=To(r,V),v=To(r,he);if(b&&v&&(z.rangeCount!==1||z.anchorNode!==b.node||z.anchorOffset!==b.offset||z.focusNode!==v.node||z.focusOffset!==v.offset)){var S=D.createRange();S.setStart(b.node,b.offset),z.removeAllRanges(),V>he?(z.addRange(S),z.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),z.addRange(S))}}}}for(D=[],z=r;z=z.parentNode;)z.nodeType===1&&D.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<D.length;r++){var M=D[r];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ki=!!ar,lr=ar=null}finally{fe=n,Y.p=l,R.T=a}}e.current=t,Ge=2}}function qs(){if(Ge===2){Ge=0;var e=ha,t=bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=Y.p;Y.p=2;var n=fe;fe|=4;try{gs(e,t.alternate,t)}finally{fe=n,Y.p=l,R.T=a}}Ge=3}}function Ls(){if(Ge===4||Ge===3){Ge=0,cp();var e=ha,t=bl,a=xl,l=As;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,bl=ha=null,Gs(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(pa=null),ou(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=Y.p,Y.p=2,R.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var r=l[u];i(r.value,{componentStack:r.stack})}}finally{R.T=t,Y.p=n}}(xl&3)!==0&&Di(),wt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Qc?gn++:(gn=0,Qc=e):gn=0,vn(0)}}function Gs(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function Di(e){return Ys(),qs(),Ls(),Qs()}function Qs(){if(Ge!==5)return!1;var e=ha,t=Lc;Lc=0;var a=ou(xl),l=R.T,n=Y.p;try{Y.p=32>a?32:a,R.T=null,a=Gc,Gc=null;var i=ha,u=xl;if(Ge=0,bl=ha=null,xl=0,(fe&6)!==0)throw Error(o(331));var r=fe;if(fe|=4,zs(i.current),Es(i,i.current,u,a),fe=r,vn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ol,i)}catch{}return!0}finally{Y.p=n,R.T=l,Gs(e,t)}}function Xs(e,t,a){t=ht(a,t),t=xc(e.stateNode,t,2),e=na(e,t,2),e!==null&&(_l(e,2),wt(e))}function ge(e,t,a){if(e.tag===3)Xs(e,e,a);else for(;t!==null;){if(t.tag===3){Xs(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))){e=ht(a,e),a=Kf(2),l=na(t,a,2),l!==null&&(Jf(a,l,t,e),_l(l,2),wt(l));break}}t=t.return}}function Vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Uh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Cc=!0,n.add(a),e=qh.bind(null,e,t,a),t.then(e,e))}function qh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(ie&a)===a&&(je===4||je===3&&(ie&62914560)===ie&&300>zt()-qc?(fe&2)===0&&Sl(e,0):Bc|=a,yl===ie&&(yl=0)),wt(e)}function ks(e,t){t===0&&(t=Yr()),e=ll(e,t),e!==null&&(_l(e,t),wt(e))}function Lh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ks(e,a)}function Gh(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),ks(e,a)}function Qh(e,t){return iu(e,t)}var _i=null,Tl=null,Kc=!1,Ui=!1,Jc=!1,Qa=0;function wt(e){e!==Tl&&e.next===null&&(Tl===null?_i=Tl=e:Tl=Tl.next=e),Ui=!0,Kc||(Kc=!0,kh())}function vn(e,t){if(!Jc&&Ui){Jc=!0;do for(var a=!1,l=_i;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=n&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Js(l,i))}else i=ie,i=Ln(l,l===ye?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Dl(l,i)||(a=!0,Js(l,i));l=l.next}while(a);Jc=!1}}function Xh(){Zs()}function Zs(){Ui=Kc=!1;var e=0;Qa!==0&&(Ph()&&(e=Qa),Qa=0);for(var t=zt(),a=null,l=_i;l!==null;){var n=l.next,i=Vs(l,t);i===0?(l.next=null,a===null?_i=n:a.next=n,n===null&&(Tl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ui=!0)),l=n}vn(e)}function Vs(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-lt(i),r=1<<u,p=n[u];p===-1?((r&a)===0||(r&l)!==0)&&(n[u]=mp(r,t)):p<=t&&(e.expiredLanes|=r),i&=~r}if(t=ye,a=ie,a=Ln(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&uu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&uu(l),ou(a)){case 2:case 8:a=Hr;break;case 32:a=Bn;break;case 268435456:a=Cr;break;default:a=Bn}return l=Ks.bind(null,e),a=iu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&uu(l),e.callbackPriority=2,e.callbackNode=null,2}function Ks(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Di()&&e.callbackNode!==a)return null;var l=ie;return l=Ln(e,e===ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ms(e,l,t),Vs(e,zt()),e.callbackNode!=null&&e.callbackNode===a?Ks.bind(null,e):null)}function Js(e,t){if(Di())return null;Ms(e,t,!0)}function kh(){em(function(){(fe&6)!==0?iu(Ur,Xh):Zs()})}function $c(){return Qa===0&&(Qa=Br()),Qa}function $s(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zn(""+e)}function Ws(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Zh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=$s((n[$e]||null).action),u=l.submitter;u&&(t=(t=u[$e]||null)?$s(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var r=new $n("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Qa!==0){var p=u?Ws(n,u):new FormData(n);mc(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(r.preventDefault(),p=u?Ws(n,u):new FormData(n),mc(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var Wc=0;Wc<Uu.length;Wc++){var Fc=Uu[Wc],Vh=Fc.toLowerCase(),Kh=Fc[0].toUpperCase()+Fc.slice(1);Et(Vh,"on"+Kh)}Et(Ro,"onAnimationEnd"),Et(Mo,"onAnimationIteration"),Et(wo,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(fh,"onTransitionRun"),Et(sh,"onTransitionStart"),Et(dh,"onTransitionCancel"),Et(Oo,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ja("onBeforeInput",["compositionend","keypress","textInput","paste"]),ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yn));function Fs(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var r=l[u],p=r.instance,E=r.currentTarget;if(r=r.listener,p!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=E;try{i(n)}catch(j){Si(j)}n.currentTarget=null,i=p}else for(u=0;u<l.length;u++){if(r=l[u],p=r.instance,E=r.currentTarget,r=r.listener,p!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=E;try{i(n)}catch(j){Si(j)}n.currentTarget=null,i=p}}}}function ne(e,t){var a=t[fu];a===void 0&&(a=t[fu]=new Set);var l=e+"__bubble";a.has(l)||(Ps(t,e,2,!1),a.add(l))}function Pc(e,t,a){var l=0;t&&(l|=4),Ps(a,e,l,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function Ic(e){if(!e[Hi]){e[Hi]=!0,Xr.forEach(function(a){a!=="selectionchange"&&(Jh.has(a)||Pc(a,!1,e),Pc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Pc("selectionchange",!1,t))}}function Ps(e,t,a,l){switch(Ed(t)){case 2:var n=Sm;break;case 8:n=Em;break;default:n=pr}a=n.bind(null,t,a,e),n=void 0,!Su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function er(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===n)break;if(u===4)for(u=l.return;u!==null;){var p=u.tag;if((p===3||p===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;r!==null;){if(u=ka(r),u===null)return;if(p=u.tag,p===5||p===6||p===26||p===27){l=i=u;continue e}r=r.parentNode}}l=l.return}lo(function(){var E=i,j=bu(a),D=[];e:{var T=Do.get(e);if(T!==void 0){var z=$n,$=e;switch(e){case"keypress":if(Kn(a)===0)break e;case"keydown":case"keyup":z=Qp;break;case"focusin":$="focus",z=zu;break;case"focusout":$="blur",z=zu;break;case"beforeblur":case"afterblur":z=zu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Zp;break;case Ro:case Mo:case wo:z=_p;break;case Oo:z=Kp;break;case"scroll":case"scrollend":z=Rp;break;case"wheel":z=$p;break;case"copy":case"cut":case"paste":z=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=ro;break;case"toggle":case"beforetoggle":z=Fp}var V=(t&4)!==0,he=!V&&(e==="scroll"||e==="scrollend"),b=V?T!==null?T+"Capture":null:T;V=[];for(var v=E,S;v!==null;){var M=v;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||b===null||(M=Cl(v,b),M!=null&&V.push(bn(v,M,S))),he)break;v=v.return}0<V.length&&(T=new z(T,$,null,a,j),D.push({event:T,listeners:V}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",T&&a!==yu&&($=a.relatedTarget||a.fromElement)&&(ka($)||$[Xa]))break e;if((z||T)&&(T=j.window===j?j:(T=j.ownerDocument)?T.defaultView||T.parentWindow:window,z?($=a.relatedTarget||a.toElement,z=E,$=$?ka($):null,$!==null&&(he=y($),V=$.tag,$!==he||V!==5&&V!==27&&V!==6)&&($=null)):(z=null,$=E),z!==$)){if(V=uo,M="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(V=ro,M="onPointerLeave",b="onPointerEnter",v="pointer"),he=z==null?T:Hl(z),S=$==null?T:Hl($),T=new V(M,v+"leave",z,a,j),T.target=he,T.relatedTarget=S,M=null,ka(j)===E&&(V=new V(b,v+"enter",$,a,j),V.target=S,V.relatedTarget=he,M=V),he=M,z&&$)t:{for(V=z,b=$,v=0,S=V;S;S=Nl(S))v++;for(S=0,M=b;M;M=Nl(M))S++;for(;0<v-S;)V=Nl(V),v--;for(;0<S-v;)b=Nl(b),S--;for(;v--;){if(V===b||b!==null&&V===b.alternate)break t;V=Nl(V),b=Nl(b)}V=null}else V=null;z!==null&&Is(D,T,z,V,!1),$!==null&&he!==null&&Is(D,he,$,V,!0)}}e:{if(T=E?Hl(E):window,z=T.nodeName&&T.nodeName.toLowerCase(),z==="select"||z==="input"&&T.type==="file")var L=vo;else if(mo(T))if(yo)L=ch;else{L=ih;var ae=nh}else z=T.nodeName,!z||z.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&vu(E.elementType)&&(L=vo):L=uh;if(L&&(L=L(e,E))){go(D,L,a,j);break e}ae&&ae(e,T,E),e==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&gu(T,"number",T.value)}switch(ae=E?Hl(E):window,e){case"focusin":(mo(ae)||ae.contentEditable==="true")&&(el=ae,Ou=E,kl=null);break;case"focusout":kl=Ou=el=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,jo(D,a,j);break;case"selectionchange":if(oh)break;case"keydown":case"keyup":jo(D,a,j)}var G;if(Au)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ia?po(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(oo&&a.locale!=="ko"&&(Ia||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ia&&(G=no()):(ea=j,Eu="value"in ea?ea.value:ea.textContent,Ia=!0)),ae=Ci(E,K),0<ae.length&&(K=new co(K,e,null,a,j),D.push({event:K,listeners:ae}),G?K.data=G:(G=ho(a),G!==null&&(K.data=G)))),(G=Ip?eh(e,a):th(e,a))&&(K=Ci(E,"onBeforeInput"),0<K.length&&(ae=new co("onBeforeInput","beforeinput",null,a,j),D.push({event:ae,listeners:K}),ae.data=G)),Zh(D,e,E,a,j)}Fs(D,t)})}function bn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ci(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Cl(e,a),n!=null&&l.unshift(bn(e,n,i)),n=Cl(e,t),n!=null&&l.push(bn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Is(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var r=a,p=r.alternate,E=r.stateNode;if(r=r.tag,p!==null&&p===l)break;r!==5&&r!==26&&r!==27||E===null||(p=E,n?(E=Cl(a,i),E!=null&&u.unshift(bn(a,E,p))):n||(E=Cl(a,i),E!=null&&u.push(bn(a,E,p)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var $h=/\r\n?/g,Wh=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace($h,`
`).replace(Wh,"")}function td(e,t){return t=ed(t),ed(e)===t}function Bi(){}function pe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":Qn(e,"class",l);break;case"tabIndex":Qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,a,l);break;case"style":to(e,l,i);break;case"data":if(t!=="object"){Qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&pe(e,t,"name",n.name,n,null),pe(e,t,"formEncType",n.formEncType,n,null),pe(e,t,"formMethod",n.formMethod,n,null),pe(e,t,"formTarget",n.formTarget,n,null)):(pe(e,t,"encType",n.encType,n,null),pe(e,t,"method",n.method,n,null),pe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Bi);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Gn(e,"popover",l);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Gn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jp.get(a)||a,Gn(e,a,l))}}function tr(e,t,a,l,n,i){switch(a){case"style":to(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[$e]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Gn(e,a,l)}}}function Qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:pe(e,t,i,u,a,null)}}n&&pe(e,t,"srcSet",a.srcSet,a,null),l&&pe(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var r=i=u=n=null,p=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var j=a[l];if(j!=null)switch(l){case"name":n=j;break;case"type":u=j;break;case"checked":p=j;break;case"defaultChecked":E=j;break;case"value":i=j;break;case"defaultValue":r=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:pe(e,t,l,j,a,null)}}Fr(e,i,r,p,E,u,n,!1),Xn(e);return;case"select":ne("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:pe(e,t,n,r,a,null)}t=i,a=u,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(r=a[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:pe(e,t,u,r,a,null)}Ir(e,l,n,i),Xn(e);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:pe(e,t,p,l,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<yn.length;l++)ne(yn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:pe(e,t,E,l,a,null)}return;default:if(vu(t)){for(j in a)a.hasOwnProperty(j)&&(l=a[j],l!==void 0&&tr(e,t,j,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&pe(e,t,r,l,a,null))}function Fh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,r=null,p=null,E=null,j=null;for(z in a){var D=a[z];if(a.hasOwnProperty(z)&&D!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":p=D;default:l.hasOwnProperty(z)||pe(e,t,z,null,l,D)}}for(var T in l){var z=l[T];if(D=a[T],l.hasOwnProperty(T)&&(z!=null||D!=null))switch(T){case"type":i=z;break;case"name":n=z;break;case"checked":E=z;break;case"defaultChecked":j=z;break;case"value":u=z;break;case"defaultValue":r=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==D&&pe(e,t,T,z,l,D)}}mu(e,u,r,p,E,j,i,n);return;case"select":z=u=r=T=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":z=p;default:l.hasOwnProperty(i)||pe(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":T=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==p&&pe(e,t,n,i,l,p)}t=r,a=u,l=z,T!=null?$a(e,!!a,T,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":z=T=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:pe(e,t,r,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":T=n;break;case"defaultValue":z=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&pe(e,t,u,n,l,i)}Pr(e,T,z);return;case"option":for(var $ in a)if(T=a[$],a.hasOwnProperty($)&&T!=null&&!l.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:pe(e,t,$,null,l,T)}for(p in l)if(T=l[p],z=a[p],l.hasOwnProperty(p)&&T!==z&&(T!=null||z!=null))switch(p){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:pe(e,t,p,T,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in a)T=a[V],a.hasOwnProperty(V)&&T!=null&&!l.hasOwnProperty(V)&&pe(e,t,V,null,l,T);for(E in l)if(T=l[E],z=a[E],l.hasOwnProperty(E)&&T!==z&&(T!=null||z!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:pe(e,t,E,T,l,z)}return;default:if(vu(t)){for(var he in a)T=a[he],a.hasOwnProperty(he)&&T!==void 0&&!l.hasOwnProperty(he)&&tr(e,t,he,void 0,l,T);for(j in l)T=l[j],z=a[j],!l.hasOwnProperty(j)||T===z||T===void 0&&z===void 0||tr(e,t,j,T,l,z);return}}for(var b in a)T=a[b],a.hasOwnProperty(b)&&T!=null&&!l.hasOwnProperty(b)&&pe(e,t,b,null,l,T);for(D in l)T=l[D],z=a[D],!l.hasOwnProperty(D)||T===z||T==null&&z==null||pe(e,t,D,T,l,z)}var ar=null,lr=null;function Yi(e){return e.nodeType===9?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ld(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ir=null;function Ph(){var e=window.event;return e&&e.type==="popstate"?e===ir?!1:(ir=e,!0):(ir=null,!1)}var nd=typeof setTimeout=="function"?setTimeout:void 0,Ih=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,em=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(tm)}:nd;function tm(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function ud(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var u=e.ownerDocument;if(a&1&&xn(u.documentElement),a&2&&xn(u.body),a&4)for(a=u.head,xn(a),u=a.firstChild;u;){var r=u.nextSibling,p=u.nodeName;u[Ul]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=r}}if(n===0){e.removeChild(i),Rn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Rn(t)}function ur(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ur(a),su(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function am(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ul])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Nt(e.nextSibling),e===null)break}return null}function lm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Nt(e.nextSibling),e===null))return null;return e}function cr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function nm(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var rr=null;function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function rd(e,t,a){switch(t=Yi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function xn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);su(e)}var xt=new Map,od=new Set;function qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=Y.d;Y.d={f:im,r:um,D:cm,C:rm,L:om,m:fm,X:dm,S:sm,M:pm};function im(){var e=Jt.f(),t=wi();return e||t}function um(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?Mf(t):Jt.r(e)}var zl=typeof document>"u"?null:document;function fd(e,t,a){var l=zl;if(l&&typeof t=="string"&&t){var n=pt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),od.has(n)||(od.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Qe(t,"link",e),Ce(t),l.head.appendChild(t)))}}function cm(e){Jt.D(e),fd("dns-prefetch",e,null)}function rm(e,t){Jt.C(e,t),fd("preconnect",e,t)}function om(e,t,a){Jt.L(e,t,a);var l=zl;if(l&&e&&t){var n='link[rel="preload"][as="'+pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+pt(a.imageSizes)+'"]')):n+='[href="'+pt(e)+'"]';var i=n;switch(t){case"style":i=jl(e);break;case"script":i=Al(e)}xt.has(i)||(e=A({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),xt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Sn(i))||t==="script"&&l.querySelector(En(i))||(t=l.createElement("link"),Qe(t,"link",e),Ce(t),l.head.appendChild(t)))}}function fm(e,t){Jt.m(e,t);var a=zl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+pt(l)+'"][href="'+pt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Al(e)}if(!xt.has(i)&&(e=A({rel:"modulepreload",href:e},t),xt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(En(i)))return}l=a.createElement("link"),Qe(l,"link",e),Ce(l),a.head.appendChild(l)}}}function sm(e,t,a){Jt.S(e,t,a);var l=zl;if(l&&e){var n=Va(l).hoistableStyles,i=jl(e);t=t||"default";var u=n.get(i);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(Sn(i)))r.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},a),(a=xt.get(i))&&or(e,a);var p=u=l.createElement("link");Ce(p),Qe(p,"link",e),p._p=new Promise(function(E,j){p.onload=E,p.onerror=j}),p.addEventListener("load",function(){r.loading|=1}),p.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Li(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:r},n.set(i,u)}}}function dm(e,t){Jt.X(e,t);var a=zl;if(a&&e){var l=Va(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(En(n)),i||(e=A({src:e,async:!0},t),(t=xt.get(n))&&fr(e,t),i=a.createElement("script"),Ce(i),Qe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function pm(e,t){Jt.M(e,t);var a=zl;if(a&&e){var l=Va(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(En(n)),i||(e=A({src:e,async:!0,type:"module"},t),(t=xt.get(n))&&fr(e,t),i=a.createElement("script"),Ce(i),Qe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function sd(e,t,a,l){var n=(n=P.current)?qi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=jl(a.href),a=Va(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jl(a.href);var i=Va(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Sn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xt.set(e,a),i||hm(n,e,a,u.state))),t&&l===null)throw Error(o(528,""));return u}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Va(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function jl(e){return'href="'+pt(e)+'"'}function Sn(e){return'link[rel="stylesheet"]['+e+"]"}function dd(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function hm(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Qe(t,"link",a),Ce(t),e.head.appendChild(t))}function Al(e){return'[src="'+pt(e)+'"]'}function En(e){return"script[async]"+e}function pd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+pt(a.href)+'"]');if(l)return t.instance=l,Ce(l),l;var n=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ce(l),Qe(l,"style",n),Li(l,a.precedence,e),t.instance=l;case"stylesheet":n=jl(a.href);var i=e.querySelector(Sn(n));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;l=dd(a),(n=xt.get(n))&&or(l,n),i=(e.ownerDocument||e).createElement("link"),Ce(i);var u=i;return u._p=new Promise(function(r,p){u.onload=r,u.onerror=p}),Qe(i,"link",l),t.state.loading|=4,Li(i,a.precedence,e),t.instance=i;case"script":return i=Al(a.src),(n=e.querySelector(En(i)))?(t.instance=n,Ce(n),n):(l=a,(n=xt.get(i))&&(l=A({},a),fr(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),Qe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Li(l,a.precedence,e));return t.instance}function Li(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===t)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function hd(e,t,a){if(Gi===null){var l=new Map,n=Gi=new Map;n.set(a,l)}else n=Gi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ul]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var r=l.get(u);r?r.push(i):l.set(u,[i])}}return l}function md(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function mm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Tn=null;function gm(){}function vm(e,t,a){if(Tn===null)throw Error(o(475));var l=Tn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=jl(a.href),i=e.querySelector(Sn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Qi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ce(i);return}i=e.ownerDocument||e,a=dd(a),(n=xt.get(n))&&or(a,n),i=i.createElement("link"),Ce(i);var u=i;u._p=new Promise(function(r,p){u.onload=r,u.onerror=p}),Qe(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Qi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function ym(){if(Tn===null)throw Error(o(475));var e=Tn;return e.stylesheets&&e.count===0&&sr(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&sr(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Qi(){if(this.count--,this.count===0){if(this.stylesheets)sr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xi=null;function sr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xi=new Map,t.forEach(bm,e),Xi=null,Qi.call(e))}function bm(e,t){if(!(t.state.loading&4)){var a=Xi.get(e);if(a)var l=a.get(null);else{a=new Map,Xi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Qi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Nn={$$typeof:I,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function xm(e,t,a,l,n,i,u,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.hiddenUpdates=cu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function vd(e,t,a,l,n,i,u,r,p,E,j,D){return e=new xm(e,t,a,u,r,p,E,D),t=1,i===!0&&(t|=24),i=it(3,null,null,t),e.current=i,i.stateNode=e,t=Vu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Wu(i),e}function yd(e){return e?(e=nl,e):nl}function bd(e,t,a,l,n,i){n=yd(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=na(e,l,t),a!==null&&(ft(a,e,t),Il(a,e,t))}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function dr(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function Sd(e){if(e.tag===13){var t=ll(e,67108864);t!==null&&ft(t,e,67108864),dr(e,67108864)}}var ki=!0;function Sm(e,t,a,l){var n=R.T;R.T=null;var i=Y.p;try{Y.p=2,pr(e,t,a,l)}finally{Y.p=i,R.T=n}}function Em(e,t,a,l){var n=R.T;R.T=null;var i=Y.p;try{Y.p=8,pr(e,t,a,l)}finally{Y.p=i,R.T=n}}function pr(e,t,a,l){if(ki){var n=hr(l);if(n===null)er(e,t,l,Zi,a),Td(e,l);else if(Nm(n,e,t,a,l))l.stopPropagation();else if(Td(e,l),t&4&&-1<Tm.indexOf(e)){for(;n!==null;){var i=Za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=za(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var p=1<<31-lt(u);r.entanglements[1]|=p,u&=~p}wt(i),(fe&6)===0&&(Ri=zt()+500,vn(0))}}break;case 13:r=ll(i,2),r!==null&&ft(r,i,2),wi(),dr(i,2)}if(i=hr(l),i===null&&er(e,t,l,Zi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else er(e,t,l,null,a)}}function hr(e){return e=bu(e),mr(e)}var Zi=null;function mr(e){if(Zi=null,e=ka(e),e!==null){var t=y(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=N(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function Ed(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rp()){case Ur:return 2;case Hr:return 8;case Bn:case op:return 32;case Cr:return 268435456;default:return 32}default:return 32}}var gr=!1,va=null,ya=null,ba=null,zn=new Map,jn=new Map,xa=[],Tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Td(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function An(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Za(t),t!==null&&Sd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Nm(e,t,a,l,n){switch(t){case"focusin":return va=An(va,e,t,a,l,n),!0;case"dragenter":return ya=An(ya,e,t,a,l,n),!0;case"mouseover":return ba=An(ba,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return zn.set(i,An(zn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,jn.set(i,An(jn.get(i)||null,e,t,a,l,n)),!0}return!1}function Nd(e){var t=ka(e.target);if(t!==null){var a=y(t);if(a!==null){if(t=a.tag,t===13){if(t=N(a),t!==null){e.blockedOn=t,vp(e.priority,function(){if(a.tag===13){var l=ot();l=ru(l);var n=ll(a,l);n!==null&&ft(n,a,l),dr(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=hr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);yu=l,a.target.dispatchEvent(l),yu=null}else return t=Za(a),t!==null&&Sd(t),e.blockedOn=a,!1;t.shift()}return!0}function zd(e,t,a){Vi(e)&&a.delete(t)}function zm(){gr=!1,va!==null&&Vi(va)&&(va=null),ya!==null&&Vi(ya)&&(ya=null),ba!==null&&Vi(ba)&&(ba=null),zn.forEach(zd),jn.forEach(zd)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,gr||(gr=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,zm)))}var Ji=null;function jd(e){Ji!==e&&(Ji=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(mr(l||a)===null)continue;break}var i=Za(a);i!==null&&(e.splice(t,3),t-=3,mc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Rn(e){function t(p){return Ki(p,e)}va!==null&&Ki(va,e),ya!==null&&Ki(ya,e),ba!==null&&Ki(ba,e),zn.forEach(t),jn.forEach(t);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)Nd(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[$e]||null;if(typeof i=="function")u||jd(a);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[$e]||null)r=u.formAction;else if(mr(n)!==null)continue}else r=u.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),jd(a)}}}function vr(e){this._internalRoot=e}$i.prototype.render=vr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=ot();bd(a,l,e,t,null,null)},$i.prototype.unmount=vr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bd(e.current,2,null,e,null,null),wi(),t[Xa]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&Nd(e)}};var Ad=d.version;if(Ad!=="19.1.0")throw Error(o(527,Ad,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var jm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Ol=Wi.inject(jm),at=Wi}catch{}}return wn.createRoot=function(e,t){if(!h(e))throw Error(o(299));var a=!1,l="",n=Xf,i=kf,u=Zf,r=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(r=t.unstable_transitionCallbacks)),t=vd(e,1,!1,null,null,a,l,n,i,u,r,null),e[Xa]=t.current,Ic(e),new vr(t)},wn.hydrateRoot=function(e,t,a){if(!h(e))throw Error(o(299));var l=!1,n="",i=Xf,u=kf,r=Zf,p=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),t=vd(e,1,!0,t,a??null,l,n,i,u,r,p,E),t.context=yd(null),a=t.current,l=ot(),l=ru(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,_l(t,a),wt(t),e[Xa]=t.current,Ic(e),new $i(t)},wn.version="19.1.0",wn}var Bd;function Cm(){if(Bd)return xr.exports;Bd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),xr.exports=Hm(),xr.exports}var Bm=Cm();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yd="popstate";function Ym(c={}){function d(o,h){let{pathname:y,search:N,hash:O}=o.location;return jr("",{pathname:y,search:N,hash:O},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function s(o,h){return typeof h=="string"?h:Dn(h)}return Lm(d,s,null,c)}function Te(c,d){if(c===!1||c===null||typeof c>"u")throw new Error(d)}function Ot(c,d){if(!c){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function qm(){return Math.random().toString(36).substring(2,10)}function qd(c,d){return{usr:c.state,key:c.key,idx:d}}function jr(c,d,s=null,o){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof d=="string"?Ml(d):d,state:s,key:d&&d.key||o||qm()}}function Dn({pathname:c="/",search:d="",hash:s=""}){return d&&d!=="?"&&(c+=d.charAt(0)==="?"?d:"?"+d),s&&s!=="#"&&(c+=s.charAt(0)==="#"?s:"#"+s),c}function Ml(c){let d={};if(c){let s=c.indexOf("#");s>=0&&(d.hash=c.substring(s),c=c.substring(0,s));let o=c.indexOf("?");o>=0&&(d.search=c.substring(o),c=c.substring(0,o)),c&&(d.pathname=c)}return d}function Lm(c,d,s,o={}){let{window:h=document.defaultView,v5Compat:y=!1}=o,N=h.history,O="POP",x=null,m=A();m==null&&(m=0,N.replaceState({...N.state,idx:m},""));function A(){return(N.state||{idx:null}).idx}function U(){O="POP";let Q=A(),C=Q==null?null:Q-m;m=Q,x&&x({action:O,location:k.location,delta:C})}function H(Q,C){O="PUSH";let ue=jr(k.location,Q,C);m=A()+1;let I=qd(ue,m),Se=k.createHref(ue);try{N.pushState(I,"",Se)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;h.location.assign(Se)}y&&x&&x({action:O,location:k.location,delta:1})}function W(Q,C){O="REPLACE";let ue=jr(k.location,Q,C);m=A();let I=qd(ue,m),Se=k.createHref(ue);N.replaceState(I,"",Se),y&&x&&x({action:O,location:k.location,delta:0})}function X(Q){return Gm(Q)}let k={get action(){return O},get location(){return c(h,N)},listen(Q){if(x)throw new Error("A history only accepts one active listener");return h.addEventListener(Yd,U),x=Q,()=>{h.removeEventListener(Yd,U),x=null}},createHref(Q){return d(h,Q)},createURL:X,encodeLocation(Q){let C=X(Q);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:H,replace:W,go(Q){return N.go(Q)}};return k}function Gm(c,d=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Te(s,"No window.location.(origin|href) available to create URL");let o=typeof c=="string"?c:Dn(c);return o=o.replace(/ $/,"%20"),!d&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function Xd(c,d,s="/"){return Qm(c,d,s,!1)}function Qm(c,d,s,o){let h=typeof d=="string"?Ml(d):d,y=Wt(h.pathname||"/",s);if(y==null)return null;let N=kd(c);Xm(N);let O=null;for(let x=0;O==null&&x<N.length;++x){let m=e0(y);O=Pm(N[x],m,o)}return O}function kd(c,d=[],s=[],o=""){let h=(y,N,O)=>{let x={relativePath:O===void 0?y.path||"":O,caseSensitive:y.caseSensitive===!0,childrenIndex:N,route:y};x.relativePath.startsWith("/")&&(Te(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length));let m=$t([o,x.relativePath]),A=s.concat(x);y.children&&y.children.length>0&&(Te(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),kd(y.children,d,A,m)),!(y.path==null&&!y.index)&&d.push({path:m,score:Wm(m,y.index),routesMeta:A})};return c.forEach((y,N)=>{if(y.path===""||!y.path?.includes("?"))h(y,N);else for(let O of Zd(y.path))h(y,N,O)}),d}function Zd(c){let d=c.split("/");if(d.length===0)return[];let[s,...o]=d,h=s.endsWith("?"),y=s.replace(/\?$/,"");if(o.length===0)return h?[y,""]:[y];let N=Zd(o.join("/")),O=[];return O.push(...N.map(x=>x===""?y:[y,x].join("/"))),h&&O.push(...N),O.map(x=>c.startsWith("/")&&x===""?"/":x)}function Xm(c){c.sort((d,s)=>d.score!==s.score?s.score-d.score:Fm(d.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var km=/^:[\w-]+$/,Zm=3,Vm=2,Km=1,Jm=10,$m=-2,Ld=c=>c==="*";function Wm(c,d){let s=c.split("/"),o=s.length;return s.some(Ld)&&(o+=$m),d&&(o+=Vm),s.filter(h=>!Ld(h)).reduce((h,y)=>h+(km.test(y)?Zm:y===""?Km:Jm),o)}function Fm(c,d){return c.length===d.length&&c.slice(0,-1).every((o,h)=>o===d[h])?c[c.length-1]-d[d.length-1]:0}function Pm(c,d,s=!1){let{routesMeta:o}=c,h={},y="/",N=[];for(let O=0;O<o.length;++O){let x=o[O],m=O===o.length-1,A=y==="/"?d:d.slice(y.length)||"/",U=eu({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},A),H=x.route;if(!U&&m&&s&&!o[o.length-1].route.index&&(U=eu({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},A)),!U)return null;Object.assign(h,U.params),N.push({params:h,pathname:$t([y,U.pathname]),pathnameBase:n0($t([y,U.pathnameBase])),route:H}),U.pathnameBase!=="/"&&(y=$t([y,U.pathnameBase]))}return N}function eu(c,d){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[s,o]=Im(c.path,c.caseSensitive,c.end),h=d.match(s);if(!h)return null;let y=h[0],N=y.replace(/(.)\/+$/,"$1"),O=h.slice(1);return{params:o.reduce((m,{paramName:A,isOptional:U},H)=>{if(A==="*"){let X=O[H]||"";N=y.slice(0,y.length-X.length).replace(/(.)\/+$/,"$1")}const W=O[H];return U&&!W?m[A]=void 0:m[A]=(W||"").replace(/%2F/g,"/"),m},{}),pathname:y,pathnameBase:N,pattern:c}}function Im(c,d=!1,s=!0){Ot(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let o=[],h="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(N,O,x)=>(o.push({paramName:O,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return c.endsWith("*")?(o.push({paramName:"*"}),h+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?h+="\\/*$":c!==""&&c!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,d?void 0:"i"),o]}function e0(c){try{return c.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Ot(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),c}}function Wt(c,d){if(d==="/")return c;if(!c.toLowerCase().startsWith(d.toLowerCase()))return null;let s=d.endsWith("/")?d.length-1:d.length,o=c.charAt(s);return o&&o!=="/"?null:c.slice(s)||"/"}function t0(c,d="/"){let{pathname:s,search:o="",hash:h=""}=typeof c=="string"?Ml(c):c;return{pathname:s?s.startsWith("/")?s:a0(s,d):d,search:i0(o),hash:u0(h)}}function a0(c,d){let s=d.replace(/\/+$/,"").split("/");return c.split("/").forEach(h=>{h===".."?s.length>1&&s.pop():h!=="."&&s.push(h)}),s.length>1?s.join("/"):"/"}function Nr(c,d,s,o){return`Cannot include a '${c}' character in a manually specified \`to.${d}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function l0(c){return c.filter((d,s)=>s===0||d.route.path&&d.route.path.length>0)}function Vd(c){let d=l0(c);return d.map((s,o)=>o===d.length-1?s.pathname:s.pathnameBase)}function Kd(c,d,s,o=!1){let h;typeof c=="string"?h=Ml(c):(h={...c},Te(!h.pathname||!h.pathname.includes("?"),Nr("?","pathname","search",h)),Te(!h.pathname||!h.pathname.includes("#"),Nr("#","pathname","hash",h)),Te(!h.search||!h.search.includes("#"),Nr("#","search","hash",h)));let y=c===""||h.pathname==="",N=y?"/":h.pathname,O;if(N==null)O=s;else{let U=d.length-1;if(!o&&N.startsWith("..")){let H=N.split("/");for(;H[0]==="..";)H.shift(),U-=1;h.pathname=H.join("/")}O=U>=0?d[U]:"/"}let x=t0(h,O),m=N&&N!=="/"&&N.endsWith("/"),A=(y||N===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(m||A)&&(x.pathname+="/"),x}var $t=c=>c.join("/").replace(/\/\/+/g,"/"),n0=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),i0=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,u0=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c;function c0(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}var Jd=["POST","PUT","PATCH","DELETE"];new Set(Jd);var r0=["GET",...Jd];new Set(r0);var wl=w.createContext(null);wl.displayName="DataRouter";var tu=w.createContext(null);tu.displayName="DataRouterState";w.createContext(!1);var $d=w.createContext({isTransitioning:!1});$d.displayName="ViewTransition";var o0=w.createContext(new Map);o0.displayName="Fetchers";var f0=w.createContext(null);f0.displayName="Await";var Dt=w.createContext(null);Dt.displayName="Navigation";var _n=w.createContext(null);_n.displayName="Location";var _t=w.createContext({outlet:null,matches:[],isDataRoute:!1});_t.displayName="Route";var Mr=w.createContext(null);Mr.displayName="RouteError";function s0(c,{relative:d}={}){Te(Un(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=w.useContext(Dt),{hash:h,pathname:y,search:N}=Hn(c,{relative:d}),O=y;return s!=="/"&&(O=y==="/"?s:$t([s,y])),o.createHref({pathname:O,search:N,hash:h})}function Un(){return w.useContext(_n)!=null}function Ea(){return Te(Un(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(_n).location}var Wd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fd(c){w.useContext(Dt).static||w.useLayoutEffect(c)}function Pd(){let{isDataRoute:c}=w.useContext(_t);return c?z0():d0()}function d0(){Te(Un(),"useNavigate() may be used only in the context of a <Router> component.");let c=w.useContext(wl),{basename:d,navigator:s}=w.useContext(Dt),{matches:o}=w.useContext(_t),{pathname:h}=Ea(),y=JSON.stringify(Vd(o)),N=w.useRef(!1);return Fd(()=>{N.current=!0}),w.useCallback((x,m={})=>{if(Ot(N.current,Wd),!N.current)return;if(typeof x=="number"){s.go(x);return}let A=Kd(x,JSON.parse(y),h,m.relative==="path");c==null&&d!=="/"&&(A.pathname=A.pathname==="/"?d:$t([d,A.pathname])),(m.replace?s.replace:s.push)(A,m.state,m)},[d,s,y,h,c])}w.createContext(null);function p0(){let{matches:c}=w.useContext(_t),d=c[c.length-1];return d?d.params:{}}function Hn(c,{relative:d}={}){let{matches:s}=w.useContext(_t),{pathname:o}=Ea(),h=JSON.stringify(Vd(s));return w.useMemo(()=>Kd(c,JSON.parse(h),o,d==="path"),[c,h,o,d])}function h0(c,d){return Id(c,d)}function Id(c,d,s,o){Te(Un(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=w.useContext(Dt),{matches:y}=w.useContext(_t),N=y[y.length-1],O=N?N.params:{},x=N?N.pathname:"/",m=N?N.pathnameBase:"/",A=N&&N.route;{let C=A&&A.path||"";ep(x,!A||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let U=Ea(),H;if(d){let C=typeof d=="string"?Ml(d):d;Te(m==="/"||C.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${C.pathname}" was given in the \`location\` prop.`),H=C}else H=U;let W=H.pathname||"/",X=W;if(m!=="/"){let C=m.replace(/^\//,"").split("/");X="/"+W.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=Xd(c,{pathname:X});Ot(A||k!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Ot(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=b0(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},O,C.params),pathname:$t([m,h.encodeLocation?h.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:$t([m,h.encodeLocation?h.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),y,s,o);return d&&Q?w.createElement(_n.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},Q):Q}function m0(){let c=N0(),d=c0(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),s=c instanceof Error?c.stack:null,o="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:o},y={padding:"2px 4px",backgroundColor:o},N=null;return console.error("Error handled by React Router default ErrorBoundary:",c),N=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:y},"ErrorBoundary")," or"," ",w.createElement("code",{style:y},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},d),s?w.createElement("pre",{style:h},s):null,N)}var g0=w.createElement(m0,null),v0=class extends w.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,d){return d.location!==c.location||d.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:d.error,location:d.location,revalidation:c.revalidation||d.revalidation}}componentDidCatch(c,d){console.error("React Router caught the following error during render",c,d)}render(){return this.state.error!==void 0?w.createElement(_t.Provider,{value:this.props.routeContext},w.createElement(Mr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function y0({routeContext:c,match:d,children:s}){let o=w.useContext(wl);return o&&o.static&&o.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=d.route.id),w.createElement(_t.Provider,{value:c},s)}function b0(c,d=[],s=null,o=null){if(c==null){if(!s)return null;if(s.errors)c=s.matches;else if(d.length===0&&!s.initialized&&s.matches.length>0)c=s.matches;else return null}let h=c,y=s?.errors;if(y!=null){let x=h.findIndex(m=>m.route.id&&y?.[m.route.id]!==void 0);Te(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),h=h.slice(0,Math.min(h.length,x+1))}let N=!1,O=-1;if(s)for(let x=0;x<h.length;x++){let m=h[x];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(O=x),m.route.id){let{loaderData:A,errors:U}=s,H=m.route.loader&&!A.hasOwnProperty(m.route.id)&&(!U||U[m.route.id]===void 0);if(m.route.lazy||H){N=!0,O>=0?h=h.slice(0,O+1):h=[h[0]];break}}}return h.reduceRight((x,m,A)=>{let U,H=!1,W=null,X=null;s&&(U=y&&m.route.id?y[m.route.id]:void 0,W=m.route.errorElement||g0,N&&(O<0&&A===0?(ep("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,X=null):O===A&&(H=!0,X=m.route.hydrateFallbackElement||null)));let k=d.concat(h.slice(0,A+1)),Q=()=>{let C;return U?C=W:H?C=X:m.route.Component?C=w.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=x,w.createElement(y0,{match:m,routeContext:{outlet:x,matches:k,isDataRoute:s!=null},children:C})};return s&&(m.route.ErrorBoundary||m.route.errorElement||A===0)?w.createElement(v0,{location:s.location,revalidation:s.revalidation,component:W,error:U,children:Q(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):Q()},null)}function wr(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function x0(c){let d=w.useContext(wl);return Te(d,wr(c)),d}function S0(c){let d=w.useContext(tu);return Te(d,wr(c)),d}function E0(c){let d=w.useContext(_t);return Te(d,wr(c)),d}function Or(c){let d=E0(c),s=d.matches[d.matches.length-1];return Te(s.route.id,`${c} can only be used on routes that contain a unique "id"`),s.route.id}function T0(){return Or("useRouteId")}function N0(){let c=w.useContext(Mr),d=S0("useRouteError"),s=Or("useRouteError");return c!==void 0?c:d.errors?.[s]}function z0(){let{router:c}=x0("useNavigate"),d=Or("useNavigate"),s=w.useRef(!1);return Fd(()=>{s.current=!0}),w.useCallback(async(h,y={})=>{Ot(s.current,Wd),s.current&&(typeof h=="number"?c.navigate(h):await c.navigate(h,{fromRouteId:d,...y}))},[c,d])}var Gd={};function ep(c,d,s){!d&&!Gd[c]&&(Gd[c]=!0,Ot(!1,s))}w.memo(j0);function j0({routes:c,future:d,state:s}){return Id(c,void 0,s,d)}function Rl(c){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function A0({basename:c="/",children:d=null,location:s,navigationType:o="POP",navigator:h,static:y=!1}){Te(!Un(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=c.replace(/^\/*/,"/"),O=w.useMemo(()=>({basename:N,navigator:h,static:y,future:{}}),[N,h,y]);typeof s=="string"&&(s=Ml(s));let{pathname:x="/",search:m="",hash:A="",state:U=null,key:H="default"}=s,W=w.useMemo(()=>{let X=Wt(x,N);return X==null?null:{location:{pathname:X,search:m,hash:A,state:U,key:H},navigationType:o}},[N,x,m,A,U,H,o]);return Ot(W!=null,`<Router basename="${N}"> is not able to match the URL "${x}${m}${A}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:w.createElement(Dt.Provider,{value:O},w.createElement(_n.Provider,{children:d,value:W}))}function R0({children:c,location:d}){return h0(Ar(c),d)}function Ar(c,d=[]){let s=[];return w.Children.forEach(c,(o,h)=>{if(!w.isValidElement(o))return;let y=[...d,h];if(o.type===w.Fragment){s.push.apply(s,Ar(o.props.children,y));return}Te(o.type===Rl,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!o.props.index||!o.props.children,"An index route cannot have child routes.");let N={id:o.props.id||y.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(N.children=Ar(o.props.children,y)),s.push(N)}),s}var Pi="get",Ii="application/x-www-form-urlencoded";function au(c){return c!=null&&typeof c.tagName=="string"}function M0(c){return au(c)&&c.tagName.toLowerCase()==="button"}function w0(c){return au(c)&&c.tagName.toLowerCase()==="form"}function O0(c){return au(c)&&c.tagName.toLowerCase()==="input"}function D0(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function _0(c,d){return c.button===0&&(!d||d==="_self")&&!D0(c)}var Fi=null;function U0(){if(Fi===null)try{new FormData(document.createElement("form"),0),Fi=!1}catch{Fi=!0}return Fi}var H0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zr(c){return c!=null&&!H0.has(c)?(Ot(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ii}"`),null):c}function C0(c,d){let s,o,h,y,N;if(w0(c)){let O=c.getAttribute("action");o=O?Wt(O,d):null,s=c.getAttribute("method")||Pi,h=zr(c.getAttribute("enctype"))||Ii,y=new FormData(c)}else if(M0(c)||O0(c)&&(c.type==="submit"||c.type==="image")){let O=c.form;if(O==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=c.getAttribute("formaction")||O.getAttribute("action");if(o=x?Wt(x,d):null,s=c.getAttribute("formmethod")||O.getAttribute("method")||Pi,h=zr(c.getAttribute("formenctype"))||zr(O.getAttribute("enctype"))||Ii,y=new FormData(O,c),!U0()){let{name:m,type:A,value:U}=c;if(A==="image"){let H=m?`${m}.`:"";y.append(`${H}x`,"0"),y.append(`${H}y`,"0")}else m&&y.append(m,U)}}else{if(au(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Pi,o=null,h=Ii,N=c}return y&&h==="text/plain"&&(N=y,y=void 0),{action:o,method:s.toLowerCase(),encType:h,formData:y,body:N}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Dr(c,d){if(c===!1||c===null||typeof c>"u")throw new Error(d)}function B0(c,d,s){let o=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return o.pathname==="/"?o.pathname=`_root.${s}`:d&&Wt(o.pathname,d)==="/"?o.pathname=`${d.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function Y0(c,d){if(c.id in d)return d[c.id];try{let s=await import(c.module);return d[c.id]=s,s}catch(s){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function q0(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function L0(c,d,s){let o=await Promise.all(c.map(async h=>{let y=d.routes[h.route.id];if(y){let N=await Y0(y,s);return N.links?N.links():[]}return[]}));return k0(o.flat(1).filter(q0).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Qd(c,d,s,o,h,y){let N=(x,m)=>s[m]?x.route.id!==s[m].route.id:!0,O=(x,m)=>s[m].pathname!==x.pathname||s[m].route.path?.endsWith("*")&&s[m].params["*"]!==x.params["*"];return y==="assets"?d.filter((x,m)=>N(x,m)||O(x,m)):y==="data"?d.filter((x,m)=>{let A=o.routes[x.route.id];if(!A||!A.hasLoader)return!1;if(N(x,m)||O(x,m))return!0;if(x.route.shouldRevalidate){let U=x.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function G0(c,d,{includeHydrateFallback:s}={}){return Q0(c.map(o=>{let h=d.routes[o.route.id];if(!h)return[];let y=[h.module];return h.clientActionModule&&(y=y.concat(h.clientActionModule)),h.clientLoaderModule&&(y=y.concat(h.clientLoaderModule)),s&&h.hydrateFallbackModule&&(y=y.concat(h.hydrateFallbackModule)),h.imports&&(y=y.concat(h.imports)),y}).flat(1))}function Q0(c){return[...new Set(c)]}function X0(c){let d={},s=Object.keys(c).sort();for(let o of s)d[o]=c[o];return d}function k0(c,d){let s=new Set;return new Set(d),c.reduce((o,h)=>{let y=JSON.stringify(X0(h));return s.has(y)||(s.add(y),o.push({key:y,link:h})),o},[])}function tp(){let c=w.useContext(wl);return Dr(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function Z0(){let c=w.useContext(tu);return Dr(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var _r=w.createContext(void 0);_r.displayName="FrameworkContext";function ap(){let c=w.useContext(_r);return Dr(c,"You must render this element inside a <HydratedRouter> element"),c}function V0(c,d){let s=w.useContext(_r),[o,h]=w.useState(!1),[y,N]=w.useState(!1),{onFocus:O,onBlur:x,onMouseEnter:m,onMouseLeave:A,onTouchStart:U}=d,H=w.useRef(null);w.useEffect(()=>{if(c==="render"&&N(!0),c==="viewport"){let k=C=>{C.forEach(ue=>{N(ue.isIntersecting)})},Q=new IntersectionObserver(k,{threshold:.5});return H.current&&Q.observe(H.current),()=>{Q.disconnect()}}},[c]),w.useEffect(()=>{if(o){let k=setTimeout(()=>{N(!0)},100);return()=>{clearTimeout(k)}}},[o]);let W=()=>{h(!0)},X=()=>{h(!1),N(!1)};return s?c!=="intent"?[y,H,{}]:[y,H,{onFocus:On(O,W),onBlur:On(x,X),onMouseEnter:On(m,W),onMouseLeave:On(A,X),onTouchStart:On(U,W)}]:[!1,H,{}]}function On(c,d){return s=>{c&&c(s),s.defaultPrevented||d(s)}}function K0({page:c,...d}){let{router:s}=tp(),o=w.useMemo(()=>Xd(s.routes,c,s.basename),[s.routes,c,s.basename]);return o?w.createElement($0,{page:c,matches:o,...d}):null}function J0(c){let{manifest:d,routeModules:s}=ap(),[o,h]=w.useState([]);return w.useEffect(()=>{let y=!1;return L0(c,d,s).then(N=>{y||h(N)}),()=>{y=!0}},[c,d,s]),o}function $0({page:c,matches:d,...s}){let o=Ea(),{manifest:h,routeModules:y}=ap(),{basename:N}=tp(),{loaderData:O,matches:x}=Z0(),m=w.useMemo(()=>Qd(c,d,x,h,o,"data"),[c,d,x,h,o]),A=w.useMemo(()=>Qd(c,d,x,h,o,"assets"),[c,d,x,h,o]),U=w.useMemo(()=>{if(c===o.pathname+o.search+o.hash)return[];let X=new Set,k=!1;if(d.forEach(C=>{let ue=h.routes[C.route.id];!ue||!ue.hasLoader||(!m.some(I=>I.route.id===C.route.id)&&C.route.id in O&&y[C.route.id]?.shouldRevalidate||ue.hasClientLoader?k=!0:X.add(C.route.id))}),X.size===0)return[];let Q=B0(c,N,"data");return k&&X.size>0&&Q.searchParams.set("_routes",d.filter(C=>X.has(C.route.id)).map(C=>C.route.id).join(",")),[Q.pathname+Q.search]},[N,O,o,h,m,d,c,y]),H=w.useMemo(()=>G0(A,h),[A,h]),W=J0(A);return w.createElement(w.Fragment,null,U.map(X=>w.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...s})),H.map(X=>w.createElement("link",{key:X,rel:"modulepreload",href:X,...s})),W.map(({key:X,link:k})=>w.createElement("link",{key:X,...k})))}function W0(...c){return d=>{c.forEach(s=>{typeof s=="function"?s(d):s!=null&&(s.current=d)})}}var lp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lp&&(window.__reactRouterVersion="7.7.0")}catch{}function F0({basename:c,children:d,window:s}){let o=w.useRef();o.current==null&&(o.current=Ym({window:s,v5Compat:!0}));let h=o.current,[y,N]=w.useState({action:h.action,location:h.location}),O=w.useCallback(x=>{w.startTransition(()=>N(x))},[N]);return w.useLayoutEffect(()=>h.listen(O),[h,O]),w.createElement(A0,{basename:c,children:d,location:y.location,navigationType:y.action,navigator:h})}var np=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ve=w.forwardRef(function({onClick:d,discover:s="render",prefetch:o="none",relative:h,reloadDocument:y,replace:N,state:O,target:x,to:m,preventScrollReset:A,viewTransition:U,...H},W){let{basename:X}=w.useContext(Dt),k=typeof m=="string"&&np.test(m),Q,C=!1;if(typeof m=="string"&&k&&(Q=m,lp))try{let Ne=new URL(window.location.href),et=m.startsWith("//")?new URL(Ne.protocol+m):new URL(m),st=Wt(et.pathname,X);et.origin===Ne.origin&&st!=null?m=st+et.search+et.hash:C=!0}catch{Ot(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ue=s0(m,{relative:h}),[I,Se,F]=V0(o,H),Ue=tg(m,{replace:N,state:O,target:x,preventScrollReset:A,relative:h,viewTransition:U});function Oe(Ne){d&&d(Ne),Ne.defaultPrevented||Ue(Ne)}let He=w.createElement("a",{...H,...F,href:Q||ue,onClick:C||y?d:Oe,ref:W0(W,Se),target:x,"data-discover":!k&&s==="render"?"true":void 0});return I&&!k?w.createElement(w.Fragment,null,He,w.createElement(K0,{page:ue})):He});ve.displayName="Link";var P0=w.forwardRef(function({"aria-current":d="page",caseSensitive:s=!1,className:o="",end:h=!1,style:y,to:N,viewTransition:O,children:x,...m},A){let U=Hn(N,{relative:m.relative}),H=Ea(),W=w.useContext(tu),{navigator:X,basename:k}=w.useContext(Dt),Q=W!=null&&ug(U)&&O===!0,C=X.encodeLocation?X.encodeLocation(U).pathname:U.pathname,ue=H.pathname,I=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;s||(ue=ue.toLowerCase(),I=I?I.toLowerCase():null,C=C.toLowerCase()),I&&k&&(I=Wt(I,k)||I);const Se=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let F=ue===C||!h&&ue.startsWith(C)&&ue.charAt(Se)==="/",Ue=I!=null&&(I===C||!h&&I.startsWith(C)&&I.charAt(C.length)==="/"),Oe={isActive:F,isPending:Ue,isTransitioning:Q},He=F?d:void 0,Ne;typeof o=="function"?Ne=o(Oe):Ne=[o,F?"active":null,Ue?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let et=typeof y=="function"?y(Oe):y;return w.createElement(ve,{...m,"aria-current":He,className:Ne,ref:A,style:et,to:N,viewTransition:O},typeof x=="function"?x(Oe):x)});P0.displayName="NavLink";var I0=w.forwardRef(({discover:c="render",fetcherKey:d,navigate:s,reloadDocument:o,replace:h,state:y,method:N=Pi,action:O,onSubmit:x,relative:m,preventScrollReset:A,viewTransition:U,...H},W)=>{let X=ng(),k=ig(O,{relative:m}),Q=N.toLowerCase()==="get"?"get":"post",C=typeof O=="string"&&np.test(O),ue=I=>{if(x&&x(I),I.defaultPrevented)return;I.preventDefault();let Se=I.nativeEvent.submitter,F=Se?.getAttribute("formmethod")||N;X(Se||I.currentTarget,{fetcherKey:d,method:F,navigate:s,replace:h,state:y,relative:m,preventScrollReset:A,viewTransition:U})};return w.createElement("form",{ref:W,method:Q,action:k,onSubmit:o?x:ue,...H,"data-discover":!C&&c==="render"?"true":void 0})});I0.displayName="Form";function eg(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ip(c){let d=w.useContext(wl);return Te(d,eg(c)),d}function tg(c,{target:d,replace:s,state:o,preventScrollReset:h,relative:y,viewTransition:N}={}){let O=Pd(),x=Ea(),m=Hn(c,{relative:y});return w.useCallback(A=>{if(_0(A,d)){A.preventDefault();let U=s!==void 0?s:Dn(x)===Dn(m);O(c,{replace:U,state:o,preventScrollReset:h,relative:y,viewTransition:N})}},[x,O,m,s,o,d,c,h,y,N])}var ag=0,lg=()=>`__${String(++ag)}__`;function ng(){let{router:c}=ip("useSubmit"),{basename:d}=w.useContext(Dt),s=T0();return w.useCallback(async(o,h={})=>{let{action:y,method:N,encType:O,formData:x,body:m}=C0(o,d);if(h.navigate===!1){let A=h.fetcherKey||lg();await c.fetch(A,s,h.action||y,{preventScrollReset:h.preventScrollReset,formData:x,body:m,formMethod:h.method||N,formEncType:h.encType||O,flushSync:h.flushSync})}else await c.navigate(h.action||y,{preventScrollReset:h.preventScrollReset,formData:x,body:m,formMethod:h.method||N,formEncType:h.encType||O,replace:h.replace,state:h.state,fromRouteId:s,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,d,s])}function ig(c,{relative:d}={}){let{basename:s}=w.useContext(Dt),o=w.useContext(_t);Te(o,"useFormAction must be used inside a RouteContext");let[h]=o.matches.slice(-1),y={...Hn(c||".",{relative:d})},N=Ea();if(c==null){y.search=N.search;let O=new URLSearchParams(y.search),x=O.getAll("index");if(x.some(A=>A==="")){O.delete("index"),x.filter(U=>U).forEach(U=>O.append("index",U));let A=O.toString();y.search=A?`?${A}`:""}}return(!c||c===".")&&h.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(y.pathname=y.pathname==="/"?s:$t([s,y.pathname])),Dn(y)}function ug(c,d={}){let s=w.useContext($d);Te(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=ip("useViewTransitionState"),h=Hn(c,{relative:d.relative});if(!s.isTransitioning)return!1;let y=Wt(s.currentLocation.pathname,o)||s.currentLocation.pathname,N=Wt(s.nextLocation.pathname,o)||s.nextLocation.pathname;return eu(h.pathname,N)!=null||eu(h.pathname,y)!=null}function cg(){const[c,d]=w.useState(!1),[s,o]=w.useState(!1),{pathname:h}=Ea();w.useEffect(()=>{const N=()=>o(window.scrollY>8);return window.addEventListener("scroll",N,{passive:!0}),()=>window.removeEventListener("scroll",N)},[]),w.useEffect(()=>d(!1),[h]);const y=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/projects",label:"Projects"},{to:"/resume",label:"Resume & Certs"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&family=Manrope:wght@400;500&display=swap');
 
        .pf-nav {
          position: sticky;
          top: 0;
          z-index: 200;
          font-family: 'Manrope', sans-serif;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 0.5px solid transparent;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .pf-nav.scrolled {
          border-bottom-color: #e8e8e8;
          box-shadow: 0 1px 16px rgba(0, 0, 0, 0.05);
        }
 
        .pf-nav-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 28px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
 
        .pf-nav-brand {
          font-family: 'Lora', serif;
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          text-decoration: none;
          letter-spacing: -0.01em;
          flex-shrink: 0;
        }
        .pf-nav-brand:hover { color: #2563eb; }
        .pf-nav-brand, .pf-nav-brand:hover { transition: color 0.18s; }
 
        /* ── Desktop links ── */
        .pf-nav-links {
          display: flex;
          gap: 2px;
          align-items: center;
        }
 
        .pf-nav-link {
          position: relative;
          font-size: 13px;
          color: #6b7280;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 8px;
          font-weight: 400;
          letter-spacing: 0.01em;
          transition: color 0.18s, background 0.18s;
        }
        .pf-nav-link:hover {
          color: #0f172a;
          background: #f4f4f5;
        }
        .pf-nav-link.active {
          color: #2563eb;
          font-weight: 500;
          background: #eff6ff;
        }
        /* Blue underline on active */
        .pf-nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 2px;
          border-radius: 2px;
          background: #2563eb;
        }
 
        /* ── Hamburger button ── */
        .pf-nav-toggle {
          display: none;
          background: none;
          border: 0.5px solid #d1d5db;
          border-radius: 8px;
          padding: 7px 11px;
          cursor: pointer;
          color: #374151;
          font-size: 15px;
          line-height: 1;
          transition: background 0.18s, border-color 0.18s;
        }
        .pf-nav-toggle:hover {
          background: #f4f4f5;
          border-color: #9ca3af;
        }
 
        /* ── Mobile drawer ── */
        @media (max-width: 620px) {
          .pf-nav-toggle { display: flex; align-items: center; justify-content: center; }
 
          .pf-nav-links {
            /* slide-down drawer */
            position: absolute;
            top: 62px;
            left: 0; right: 0;
            background: rgba(255,255,255,0.97);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border-bottom: 0.5px solid #e8e8e8;
            flex-direction: column;
            align-items: stretch;
            padding: 10px 20px 16px;
            gap: 2px;
 
            /* animation */
            opacity: 0;
            transform: translateY(-8px);
            pointer-events: none;
            transition: opacity 0.22s ease, transform 0.22s ease;
          }
          .pf-nav-links.open {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
 
          .pf-nav-link {
            font-size: 14px;
            padding: 11px 14px;
            border-radius: 8px;
          }
          .pf-nav-link.active::after { display: none; }
          .pf-nav-link.active {
            border-left: 3px solid #2563eb;
            padding-left: 11px;
            border-radius: 0 8px 8px 0;
          }
        }
      `}),f.jsx("nav",{className:`pf-nav${s?" scrolled":""}`,children:f.jsxs("div",{className:"pf-nav-inner",children:[f.jsx(ve,{className:"pf-nav-brand",to:"/",children:"Mileiny Nolasco"}),f.jsx("button",{className:"pf-nav-toggle",onClick:()=>d(N=>!N),"aria-label":"Toggle menu","aria-expanded":c,children:c?"✕":"☰"}),f.jsx("div",{className:`pf-nav-links${c?" open":""}`,children:y.map(({to:N,label:O})=>f.jsx(ve,{to:N,className:`pf-nav-link${h===N?" active":""}`,onClick:()=>d(!1),children:O},N))})]})})]})}const rg="/assets/developer-CLugONMx.jpeg",og=[{title:"Languages",items:["Python","JavaScript","SQL","HTML","CSS"]},{title:"AI & Machine Learning",items:["PyTorch","RAG","LLM APIs","Embeddings","pgvector","Machine Learning","Prompt Engineering"]},{title:"Frontend",items:["React","Bootstrap"]},{title:"Backend",items:["Django","Node.js","Express","FastAPI","REST APIs"]},{title:"Databases",items:["PostgreSQL","SQL","MongoDB","Mongoose","pgvector"]},{title:"Testing & Development",items:["Pytest","Jest","Cypress","Postman","Git","GitHub"]},{title:"Deployment",items:["Vercel","Heroku"]}],fg=()=>f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .h-section {
          min-height: 100vh;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }
        .h-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 50% 40%, #dbeafe55 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 15% 90%, #eff6ff44 0%, transparent 60%);
          pointer-events: none;
        }
        .h-inner {
          position: relative;
          z-index: 1;
          max-width: 600px;
          width: 100%;
        }
        .h-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 22px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.1s;
        }
        .h-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2563eb;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.45; transform: scale(0.8); }
        }
        .h-title {
          font-family: 'Lora', serif;
          font-size: clamp(32px, 6vw, 52px);
          font-weight: 600;
          color: #0f172a;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.2s;
        }
        .h-title span { color: #2563eb; }
        .h-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #64748b;
          letter-spacing: 0.02em;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.3s;
        }
        .h-avatar-wrap {
          position: relative;
          display: inline-block;
          margin-bottom: 36px;
          opacity: 0;
          animation: zoomIn 0.7s ease forwards 0.35s;
        }
        .h-avatar {
          width: 170px; height: 170px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
          box-shadow: 0 0 0 5px #dbeafe, 0 16px 40px rgba(37,99,235,0.12);
          display: block;
        }
        .h-avatar-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1.5px dashed #93c5fd;
          animation: spin 18s linear infinite;
          pointer-events: none;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .h-status {
          position: absolute;
          bottom: 6px; right: -8px;
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 4px 11px;
          font-family: 'Manrope', sans-serif;
          font-size: 11px; font-weight: 500;
          color: #1a1a1a;
          display: flex; align-items: center; gap: 5px;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        }
        .h-status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22c55e;
        }
        .h-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.55s;
        }
        .h-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 22px;
          border-radius: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 13px; font-weight: 500;
          text-decoration: none;
          transition: transform 0.18s, box-shadow 0.18s, background 0.18s, border-color 0.18s;
          cursor: pointer;
          border: 1px solid transparent;
          letter-spacing: 0.01em;
        }
        .h-btn:hover { transform: translateY(-2px); }
        .h-btn-dark {
          background: #0f172a; color: #fff;
          box-shadow: 0 2px 8px rgba(15,23,42,0.18);
        }
        .h-btn-dark:hover { background: #1e293b; box-shadow: 0 6px 18px rgba(15,23,42,0.22); }
        .h-btn-blue {
          background: #2563eb; color: #fff;
          box-shadow: 0 2px 8px rgba(37,99,235,0.22);
        }
        .h-btn-blue:hover { background: #1d4ed8; box-shadow: 0 6px 18px rgba(37,99,235,0.3); }
        .h-btn-green {
          background: #f0fdf4; color: #166534;
          border-color: #bbf7d0;
        }
        .h-btn-green:hover { background: #dcfce7; border-color: #86efac; }

        /* ── TOOLS SECTION ── */
        .t-section {
          padding: 72px 24px;
          background: #f8fafc;
          border-top: 0.5px solid #e8e8e8;
        }
        .t-inner { max-width: 1100px; margin: 0 auto; }
        .t-label {
          text-align: center;
          font-family: 'Manrope', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px;
        }
        .t-heading {
          font-family: 'Lora', serif;
          font-size: 26px; font-weight: 600;
          color: #0f172a; text-align: center;
          letter-spacing: -0.02em; margin-bottom: 40px;
        }
        .t-groups {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }
        .t-group {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 18px;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.03);
        }
        .t-group-title {
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 14px;
        }
        .t-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .t-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 10px;
          border-radius: 999px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.2;
        }

        /* ── FOOTER (matches Resume page) ── */
        .rv-footer {
          border-top: 1px solid #d8d4cc;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: #f0ede6;
          font-family: 'Manrope', sans-serif;
        }
        .rv-footer-nav { display: flex; gap: 24px; }
        .rv-footer-nav a {
          font-size: 13px;
          color: #5a5650;
          text-decoration: none;
          transition: color 0.15s;
        }
        .rv-footer-nav a:hover { color: #1a1814; }
        .rv-footer-right { display: flex; align-items: center; gap: 16px; }
        .rv-footer-copy { font-size: 12px; color: #7a7268; }
        .rv-open-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #4a7c59;
          background: #e4efe8;
          padding: 5px 10px;
          border-radius: 100px;
        }
        .rv-open-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4a7c59;
          animation: badgePulse 2s infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.82); }
          to   { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 640px) {
          .rv-footer { padding: 20px 24px; }
        }
      `}),f.jsx("section",{className:"h-section",children:f.jsxs("div",{className:"h-inner",children:[f.jsxs("div",{className:"h-eyebrow",children:[f.jsx("div",{className:"h-eyebrow-dot"}),"Full Stack Developer"]}),f.jsxs("h1",{className:"h-title",children:["Hi, I'm",f.jsx("br",{}),f.jsx("span",{children:"Mileiny Nolasco"})]}),f.jsx("p",{className:"h-subtitle",children:"Always learning. Always building. Always growing."}),f.jsxs("div",{className:"h-avatar-wrap",children:[f.jsx("div",{className:"h-avatar-ring"}),f.jsx("img",{src:rg,alt:"Mileiny Nolasco",className:"h-avatar"}),f.jsxs("div",{className:"h-status",children:[f.jsx("div",{className:"h-status-dot"}),"Open to work"]})]}),f.jsxs("div",{className:"h-buttons",children:[f.jsxs("a",{className:"h-btn h-btn-dark",href:"https://github.com/mileiny1",target:"_blank",rel:"noreferrer",children:[f.jsx("i",{className:"bi bi-github"})," GitHub"]}),f.jsxs("a",{className:"h-btn h-btn-blue",href:"https://www.linkedin.com/in/mileiny-nolasco-4ab943328/",target:"_blank",rel:"noreferrer",children:[f.jsx("i",{className:"bi bi-linkedin"})," LinkedIn"]}),f.jsxs("a",{className:"h-btn h-btn-green",href:"mailto:mileinygreys@gmail.com",children:[f.jsx("i",{className:"bi bi-envelope"})," Get in Touch"]})]})]})}),f.jsx("section",{className:"t-section",children:f.jsxs("div",{className:"t-inner",children:[f.jsx("p",{className:"t-label",children:"Stack"}),f.jsx("h2",{className:"t-heading",children:"Tools & Technologies"}),f.jsx("div",{className:"t-groups",children:og.map(c=>f.jsxs("div",{className:"t-group",children:[f.jsx("h3",{className:"t-group-title",children:c.title}),f.jsx("div",{className:"t-tags",children:c.items.map(d=>f.jsx("span",{className:"t-tag",children:d},`${c.title}-${d}`))})]},c.title))})]})}),f.jsxs("footer",{className:"rv-footer",children:[f.jsxs("nav",{className:"rv-footer-nav",children:[f.jsx(ve,{to:"/",children:"Home"}),f.jsx(ve,{to:"/about",children:"About"}),f.jsx(ve,{to:"/projects",children:"Projects"}),f.jsx(ve,{to:"/resume",children:"Resume"})]}),f.jsxs("div",{className:"rv-footer-right",children:[f.jsx("span",{className:"rv-open-badge",children:"Open to work"}),f.jsxs("span",{className:"rv-footer-copy",children:["© ",new Date().getFullYear()," Mileiny Nolasco"]})]})]})]}),sg="/assets/myphoto-BVT_voGi.jpg",dg=[{emoji:"🎓",label:"Education",value:"3 Years CIS Study"},{emoji:"💻",label:"Background",value:"Self-Taught + College"},{emoji:"🏥",label:"Former Role",value:"Nursing Assistant"},{emoji:"🚤",label:"Hobby",value:"Jet Ski Enthusiast"}],pg=()=>f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── PAGE ── */
        .ab-page {
          background: #fff;
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
        }

        /* ── HERO STRIP ── */
        .ab-hero {
          background: #fff;
          padding: 72px 24px 0;
          position: relative;
          overflow: hidden;
        }
        .ab-hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 60% at 90% 20%, #dbeafe44 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 5% 80%,  #eff6ff33 0%, transparent 60%);
          pointer-events: none;
        }
        .ab-hero-inner {
          max-width: 900px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 64px;
          align-items: center;
          position: relative; z-index: 1;
          padding-bottom: 72px;
        }

        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #2563eb; margin-bottom: 18px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.1s;
        }
        .ab-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2563eb;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.8); }
        }
        .ab-heading {
          font-family: 'Lora', serif;
          font-size: clamp(30px, 4vw, 42px);
          font-weight: 600; color: #2563eb;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 24px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.2s;
        }
        .ab-heading span { color: #2563eb; }
        .ab-bio {
          font-size: 16px; color: #475569;
          line-height: 1.8; font-weight: 400;
          max-width: 480px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.3s;
        }
        .ab-bio strong { color: #0f172a; font-weight: 600; }

        /* ── PHOTO ── */
        .ab-photo-wrap {
          position: relative;
          opacity: 0; animation: zoomIn 0.6s ease forwards 0.25s;
        }
        .ab-photo {
          width: 100%; aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 20px; display: block;
          box-shadow: 0 24px 60px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.06);
        }
        .ab-photo-wrap::before {
          content: '';
          position: absolute; top: -10px; right: -10px;
          width: 70%; height: 70%;
          border-top: 2px solid #bfdbfe;
          border-right: 2px solid #bfdbfe;
          border-radius: 0 20px 0 0;
          pointer-events: none;
        }
        .ab-photo-wrap::after {
          content: '';
          position: absolute; bottom: -10px; left: -10px;
          width: 50%; height: 40%;
          border-bottom: 2px solid #dbeafe;
          border-left: 2px solid #dbeafe;
          border-radius: 0 0 0 20px;
          pointer-events: none;
        }

        /* ── FACTS STRIP ── */
        .ab-facts {
          background: #f8fafc;
          border-top: 0.5px solid #e8e8e8;
          border-bottom: 0.5px solid #e8e8e8;
          padding: 48px 24px;
        }
        .ab-facts-inner {
          max-width: 900px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: #e8e8e8;
          border: 0.5px solid #e8e8e8;
          border-radius: 16px; overflow: hidden;
        }
        .ab-fact {
          background: #fff; padding: 28px 20px;
          text-align: center; transition: background 0.18s;
        }
        .ab-fact:hover { background: #f0f7ff; }
        .ab-fact-emoji { font-size: 26px; margin-bottom: 10px; }
        .ab-fact-value {
          font-family: 'Lora', serif;
          font-size: 15px; font-weight: 600;
          color: #0f172a; margin-bottom: 4px; line-height: 1.3;
        }
        .ab-fact-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #94a3b8;
        }

        /* ── JOURNEY SECTION ── */
        .ab-journey { padding: 72px 24px; background: #fff; }
        .ab-journey-inner { max-width: 900px; margin: 0 auto; }
        .ab-section-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px;
        }
        .ab-section-title {
          font-family: 'Lora', serif;
          font-size: 26px; font-weight: 600;
          color: #0f172a; letter-spacing: -0.02em; margin-bottom: 40px;
        }
        .ab-timeline {
          display: flex; flex-direction: column; gap: 0;
          border-left: 1.5px solid #e2e8f0;
          padding-left: 32px; margin-left: 8px;
        }
        .ab-timeline-item { position: relative; padding-bottom: 36px; }
        .ab-timeline-item:last-child { padding-bottom: 0; }
        .ab-timeline-item::before {
          content: '';
          position: absolute; left: -39px; top: 4px;
          width: 12px; height: 12px; border-radius: 50%;
          background: #fff; border: 2px solid #2563eb;
        }
        .ab-tl-year {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #2563eb; margin-bottom: 6px;
        }
        .ab-tl-title {
          font-family: 'Lora', serif;
          font-size: 17px; font-weight: 600;
          color: #0f172a; margin-bottom: 6px;
        }
        .ab-tl-body {
          font-size: 14px; color: #64748b;
          line-height: 1.7; max-width: 560px;
        }

        /* ── FOOTER (matches all other pages) ── */
        .rv-footer {
          border-top: 1px solid #d8d4cc;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: #f0ede6;
          font-family: 'Manrope', sans-serif;
        }
        .rv-footer-nav { display: flex; gap: 24px; }
        .rv-footer-nav a {
          font-size: 13px; color: #5a5650;
          text-decoration: none; transition: color 0.15s;
        }
        .rv-footer-nav a:hover { color: #1a1814; }
        .rv-footer-right { display: flex; align-items: center; gap: 16px; }
        .rv-footer-copy { font-size: 12px; color: #7a7268; }
        .rv-open-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500;
          color: #4a7c59; background: #e4efe8;
          padding: 5px 10px; border-radius: 100px;
        }
        .rv-open-badge::before {
          content: '';
          width: 6px; height: 6px; border-radius: 50%;
          background: #4a7c59;
          animation: badgePulse 2s infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity:0; transform:scale(0.9); }
          to   { opacity:1; transform:scale(1); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 700px) {
          .ab-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .ab-photo-wrap { order: -1; max-width: 280px; margin: 0 auto; }
          .ab-facts-inner { grid-template-columns: repeat(2, 1fr); }
          .rv-footer { padding: 20px 24px; }
        }
      `}),f.jsxs("div",{className:"ab-page",children:[f.jsx("section",{className:"ab-hero",children:f.jsxs("div",{className:"ab-hero-inner",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ab-eyebrow",children:[f.jsx("div",{className:"ab-eyebrow-dot"}),"About Me"]}),f.jsxs("h1",{className:"ab-heading",children:["Building clean, performant",f.jsx("br",{}),"web experiences."]}),f.jsxs("p",{className:"ab-bio",children:[f.jsx("strong",{children:"Mileiny Nolasco"})," is an aspiring Software Engineer with a strong passion for technology, problem solving, and continuous learning. After three years of college level study and extensive self taught experience in Computer Information Systems, I decided to follow my passion for technology and build a career in the tech industry after working as a Nursing Assistant. I enjoy building web applications and creating solutions that improve user experiences. My technical skills include JavaScript, Python, React, HTML, CSS, Node.js, Express.js, MongoDB, PostgreSQL, and cloud technologies. Through hands on projects and real-world experience, I have developed a strong foundation in software development, troubleshooting, and system administration. I also use Postman for API testing and Cypress for front-end testing, allowing me to thoroughly test and validate the applications I develop. When I'm not coding, I enjoy spending time with family, learning new technologies, and jet skiing. I am always looking for opportunities to grow as a developer, expand my technical expertise, and contribute to meaningful projects that make a positive impact."]})]}),f.jsx("div",{className:"ab-photo-wrap",children:f.jsx("img",{src:sg,alt:"Mileiny Nolasco",className:"ab-photo"})})]})}),f.jsx("section",{className:"ab-facts",children:f.jsx("div",{className:"ab-facts-inner",children:dg.map(({emoji:c,label:d,value:s})=>f.jsxs("div",{className:"ab-fact",children:[f.jsx("div",{className:"ab-fact-emoji",children:c}),f.jsx("div",{className:"ab-fact-value",children:s}),f.jsx("div",{className:"ab-fact-label",children:d})]},d))})}),f.jsx("section",{className:"ab-journey",children:f.jsxs("div",{className:"ab-journey-inner",children:[f.jsx("p",{className:"ab-section-label",children:"My Path"}),f.jsx("h2",{className:"ab-section-title",children:"The journey so far"}),f.jsxs("div",{className:"ab-timeline",children:[f.jsxs("div",{className:"ab-timeline-item",children:[f.jsx("div",{className:"ab-tl-year",children:"2021 — Present"}),f.jsx("div",{className:"ab-tl-title",children:"Nursing Assistant"}),f.jsx("div",{className:"ab-tl-body",children:"Worked in healthcare, developing sharp attention to detail, empathy under pressure, and a drive to solve real human problems skills that translate directly to great software."})]}),f.jsxs("div",{className:"ab-timeline-item",children:[f.jsx("div",{className:"ab-tl-year",children:"2023 — 2026"}),f.jsx("div",{className:"ab-tl-title",children:"CIS Studies & Self-Teaching"}),f.jsx("div",{className:"ab-tl-body",children:"Pursued three years of college level computer information systems while simultaneously diving deep into self-taught full-stack development  Python, React, Django, Node.js, JavaScript, SQL and more."})]}),f.jsxs("div",{className:"ab-timeline-item",children:[f.jsx("div",{className:"ab-tl-year",children:"2024 — Present"}),f.jsx("div",{className:"ab-tl-title",children:"Full Stack Developer"}),f.jsx("div",{className:"ab-tl-body",children:"A passionate Full-Stack Developer who transitioned from healthcare to technology, with a strong foundation in software development, problem-solving, and modern web technologies gained through self study and formal education in Computer Information Systems. Dedicated to building applications that make a positive impact on people's lives and enhance user experiences. Passionate about creating clean, scalable, and high performing web applications from front to back, with a continuous commitment to learning and professional growth. Enjoys transforming ideas into practical, user-friendly solutions and is open to new opportunities where creativity, dedication, and technical expertise can make a meaningful impact. Outside of coding, enjoys jet skiing, spending time on the water, and soaking up sunny days."})]})]})]})}),f.jsxs("footer",{className:"rv-footer",children:[f.jsxs("nav",{className:"rv-footer-nav",children:[f.jsx(ve,{to:"/",children:"Home"}),f.jsx(ve,{to:"/about",children:"About"}),f.jsx(ve,{to:"/projects",children:"Projects"}),f.jsx(ve,{to:"/resume",children:"Resume"})]}),f.jsxs("div",{className:"rv-footer-right",children:[f.jsx("span",{className:"rv-open-badge",children:"Open to work"}),f.jsxs("span",{className:"rv-footer-copy",children:["© ",new Date().getFullYear()," Mileiny Nolasco"]})]})]})]})]}),hg="/assets/stirs-Cn-6m6gJ.png",mg="/assets/quizgame-DUJzefYA.png",gg="/assets/todoapp-C47IWvAs.png",vg="/assets/projects5-D45Z7jTU.png",yg="/assets/paycheck-BI84JDlK.png",bg="/assets/aifood-BHbFS-4V.png",St=[{id:1,title:"Stirs Craft Cocktails",description:"A sophisticated Django web application for cocktail enthusiasts, bartenders, and culinary professionals. Team lead for production-ready platform with comprehensive social features, advanced database relationships, and professional deployment Sophisticated demo data system with 15+ themed users, 316 total favorites, and 209 professional cocktails with metadata.",concept:"Cocktail recipe manager built with full-stack tools.",technologies:["Django","Python","PostgreSQL","Bootstrap","HTML","JavaScript","CSS","Heroku"],features:["Modern, responsive design, user authentication, social features, advanced database relationships, production deployment"],live:"https://stircraft-app-0dd06cf5d30a.herokuapp.com/",code:"https://github.com/mileiny1/stir-craft",image:hg},{id:2,title:"To Do List App",description:"Help users manage and organize their tasks effectively.",concept:"Task management that helps users stay organized and productive.",technologies:["React","Node.js","CSS","Vercel"],features:["Modern Web Design","Add, delete tasks","Responsive layout"],live:"https://to-do-app-azure-eta.vercel.app/",code:"https://github.com/mileiny1/To-Do-App",image:gg},{id:3,title:"Quiz Game",description:"Quiz Game is an interactive web application designed to test users' knowledge through a series of multiple choice questions. Players must answer each question within a 10 second time limit while the application tracks their score and provides instant feedback on their responses.",concept:"Interactive quiz game that challenges players to answer multiple choice questions within a time limit while tracking their score and providing instant feedback.",technologies:["HTML","Javascript","CSS","Vercel"],features:["Timed quizzes","Score tracking"],live:"https://mileiny1.github.io/quiz-game/",code:"https://github.com/mileiny1/language-quiz",image:mg},{id:4,title:"Vet Connect",description:"A web application designed to connect pet owners with veterinary services. The platform provides an easy way for users to manage appointments times, store pet information, and communicate with veterinary professionals.",concept:"Connecting pet owners with veterinary services.",technologies:["Python","Django","SQL","HTML","Bootstrap","CSS","Javascript","Heroku"],features:["User authentication, appointment scheduling, vet directory, responsive design"],live:"https://vetconnect-57f3b024748b.herokuapp.com/appointments/",code:"https://github.com/mileiny1/VetConnect",image:vg},{id:5,title:"Paycheck Calculator",description:"A simple paycheck calculator web application that helps users calculate their net pay after taxes and deductions and also provides a bookfinder for books and students directory and guestbook for students and teachers.",concept:"A tool to calculate net pay based on user input. It also includes a bookfinder, student directory, and guestbook. The bookfinder allows users to search for books by title or author, the student directory provides information about students, and the guestbook allows users to leave messages. The guestbook is a space where users can leave messages and connect with each other. The student directory is a list of students with their contact information, and the bookfinder is a search tool that allows users to find books by title or author. ",technologies:["Bootstrap","HTML","CSS","PHP","MySQL"],features:["User-friendly interface","Tax calculations","Responsive design"],live:"https://mileinyproject.infinityfree.me/index.php",code:"https://github.com/mileiny1/Paycheck-Calculator-Student-Directory-Web-Application",image:yg},{id:6,title:"AI Food Search",description:"AI Food Search is a smart restaurant discovery web app that allows users to find nearby dining options using AI powered restaurant recommendations, natural language queries, and advanced filters.",concept:"A web application that allows users to search for nearby restaurants using natural language queries and smart filters. The frontend handles geocoding through OpenStreetMap Nominatim to convert user-typed locations into coordinates, then sends the search request to the Django backend which routes it through Yelp or Google Places and optionally enhances results with OpenAI recommendations. Users can create an account, manage their profile, and view their search history. The backend supports JWT authentication with access and refresh tokens, Redis backed response caching, and a mock fallback mode for development without API keys.",technologies:["React","Vite","Bootstrap","JavaScript","Python","Django","PostgreSQL","Redis","Vercel","Heroku","CSS","Claude"],features:["AI powered restaurant recommendations","Location aware search with filters","JWT authentication with token refresh","User profile management","Per user search history","Responsive design"],live:"https://ai-foodsearch-frontend.vercel.app/",code:"https://github.com/mileiny1/Ai-foodsearch-frontend",image:bg}],xg=()=>{const[c,d]=w.useState(null);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pr-page {
          background: #f8fafc;
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
        }

        /* ── HEADER ── */
        .pr-header {
          background: #fff;
          padding: 80px 32px 64px;
          position: relative;
          overflow: hidden;
          border-bottom: 0.5px solid #e8e8e8;
        }
        .pr-header::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 70% at 95% 10%, #dbeafe55 0%, transparent 60%),
            radial-gradient(ellipse 45% 55% at 0% 100%, #eff6ff44 0%, transparent 60%);
          pointer-events: none;
        }

        .pr-header-deco {
          position: absolute;
          right: 32px; top: 50%;
          transform: translateY(-50%);
          font-family: 'Lora', serif;
          font-size: clamp(80px, 14vw, 160px);
          font-weight: 600;
          color: #eff6ff;
          letter-spacing: -0.04em;
          user-select: none;
          line-height: 1;
          pointer-events: none;
        }

        .pr-header-inner {
          max-width: 900px; margin: 0 auto;
          position: relative; z-index: 1;
        }
        .pr-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #2563eb; margin-bottom: 18px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.1s;
        }
        .pr-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2563eb;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.35; transform:scale(0.75); }
        }
        .pr-heading {
          font-family: 'Lora', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 600; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.025em;
          margin-bottom: 16px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.18s;
        }
        .pr-heading em { color: #2563eb; font-style: italic; }
        .pr-subheading {
          font-size: 15px; color: #64748b; line-height: 1.7;
          max-width: 440px; font-weight: 400;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.28s;
        }
        .pr-count {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 24px;
          background: #eff6ff;
          border: 0.5px solid #bfdbfe;
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 12px; font-weight: 500; color: #1d4ed8;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.36s;
        }

        /* ── GRID SECTION ── */
        .pr-section { padding: 52px 32px 80px; }
        .pr-grid {
          max-width: 900px; margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
          gap: 22px;
        }

        /* ── CARD ── */
        .pr-card {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.25s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.25s ease,
                      border-color 0.25s ease;
          opacity: 0;
          animation: fadeUp 0.55s ease forwards;
          position: relative;
        }
        .pr-card.is-hovered {
          transform: translateY(-6px) scale(1.01);
          border-color: #93c5fd;
          box-shadow: 0 0 0 4px #eff6ff, 0 16px 48px rgba(37,99,235,0.13);
        }
        .pr-card-num {
          position: absolute; top: 14px; left: 14px; z-index: 10;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
          border: 0.5px solid #e2e8f0;
          border-radius: 8px;
          padding: 3px 9px;
          font-size: 11px; font-weight: 600;
          color: #94a3b8; letter-spacing: 0.04em;
        }
        .pr-card-img-wrap {
          width: 100%; aspect-ratio: 16/9;
          overflow: hidden; position: relative;
          background: #f1f5f9;
        }
        .pr-card-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.5s cubic-bezier(.22,.68,0,1.1);
        }
        .pr-card.is-hovered .pr-card-img { transform: scale(1.06); }
        .pr-card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.35) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .pr-card.is-hovered .pr-card-img-overlay { opacity: 1; }
        .pr-card-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, #f0f7ff, #dbeafe);
          font-size: 32px;
        }
        .pr-card-placeholder span {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #93c5fd;
        }
        .pr-card-body {
          padding: 22px 22px 18px;
          flex: 1; display: flex; flex-direction: column;
        }
        .pr-card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
        .pr-tag {
          background: #f0f7ff; color: #2563eb;
          border: 0.5px solid #bfdbfe; border-radius: 20px;
          padding: 2px 10px;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .pr-card-title {
          font-family: 'Lora', serif;
          font-size: 18px; font-weight: 600;
          color: #0f172a; margin-bottom: 8px; line-height: 1.25;
        }
        .pr-card-desc {
          font-size: 13px; color: #64748b;
          line-height: 1.75; flex: 1; margin-bottom: 20px;
        }
        .pr-card-actions {
          display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
          padding-top: 16px; border-top: 0.5px solid #f1f5f9;
        }
        .pr-card-actions .pr-btn-details { grid-column: 1 / -1; }
        .pr-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          padding: 9px 14px; border-radius: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 12px; font-weight: 500;
          text-decoration: none; cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.18s ease;
          letter-spacing: 0.01em; white-space: nowrap;
        }
        .pr-btn:hover { transform: translateY(-1px); }
        .pr-btn i { font-size: 13px; }
        .pr-btn-live { background: #f0fdf4; color: #15803d; border-color: #bbf7d0; }
        .pr-btn-live:hover { background: #dcfce7; border-color: #86efac; }
        .pr-btn-code { background: #0f172a; color: #e2e8f0; }
        .pr-btn-code:hover { background: #1e293b; }
        .pr-btn-details { background: transparent; color: #374151; border-color: #e2e8f0; }
        .pr-btn-details:hover { background: #f8fafc; border-color: #cbd5e1; color: #0f172a; }

        /* ── EMPTY ── */
        .pr-empty {
          max-width: 900px; margin: 0 auto;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 100px 24px; text-align: center;
        }
        .pr-empty-icon { font-size: 52px; margin-bottom: 20px; }
        .pr-empty-title {
          font-family: 'Lora', serif;
          font-size: 22px; font-weight: 600;
          color: #0f172a; margin-bottom: 10px;
        }
        .pr-empty-sub { font-size: 14px; color: #94a3b8; }

        /* ── FOOTER (matches Resume, Home & ProjectDetails pages) ── */
        .rv-footer {
          border-top: 1px solid #d8d4cc;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: #f0ede6;
          font-family: 'Manrope', sans-serif;
        }
        .rv-footer-nav { display: flex; gap: 24px; }
        .rv-footer-nav a {
          font-size: 13px; color: #5a5650;
          text-decoration: none; transition: color 0.15s;
        }
        .rv-footer-nav a:hover { color: #1a1814; }
        .rv-footer-right { display: flex; align-items: center; gap: 16px; }
        .rv-footer-copy { font-size: 12px; color: #7a7268; }
        .rv-open-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500;
          color: #4a7c59; background: #e4efe8;
          padding: 5px 10px; border-radius: 100px;
        }
        .rv-open-badge::before {
          content: '';
          width: 6px; height: 6px; border-radius: 50%;
          background: #4a7c59;
          animation: badgePulse 2s infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        @media (max-width: 620px) {
          .pr-header { padding: 60px 20px 48px; }
          .pr-section { padding: 40px 20px 64px; }
          .pr-grid { grid-template-columns: 1fr; gap: 16px; }
          .pr-header-deco { display: none; }
          .pr-card-actions { grid-template-columns: 1fr; }
          .pr-card-actions .pr-btn-details { grid-column: 1; }
          .rv-footer { padding: 20px 24px; }
        }
      `}),f.jsxs("div",{className:"pr-page",children:[f.jsxs("section",{className:"pr-header",children:[f.jsx("div",{className:"pr-header-deco",children:St?.length??0}),f.jsxs("div",{className:"pr-header-inner",children:[f.jsxs("div",{className:"pr-eyebrow",children:[f.jsx("div",{className:"pr-eyebrow-dot"}),"Portfolio"]}),f.jsxs("h1",{className:"pr-heading",children:["Things I've ",f.jsx("em",{children:"built"})]}),f.jsx("p",{className:"pr-subheading",children:"Full-stack apps, creative experiments, and everything in between each project a new problem solved."}),St?.length>0&&f.jsxs("div",{className:"pr-count",children:[f.jsx("i",{className:"bi bi-grid-3x3-gap"}),St.length," project",St.length!==1?"s":""]})]})]}),f.jsx("section",{className:"pr-section",children:St&&St.length>0?f.jsx("div",{className:"pr-grid",children:St.map(({id:s,title:o,description:h,image:y,live:N,code:O,tags:x},m)=>f.jsxs("div",{className:`pr-card${c===s?" is-hovered":""}`,style:{animationDelay:`${.06+m*.09}s`},onMouseEnter:()=>d(s),onMouseLeave:()=>d(null),children:[f.jsx("div",{className:"pr-card-num",children:String(m+1).padStart(2,"0")}),f.jsx("div",{className:"pr-card-img-wrap",children:y?f.jsxs(f.Fragment,{children:[f.jsx("img",{src:y,alt:o,className:"pr-card-img"}),f.jsx("div",{className:"pr-card-img-overlay"})]}):f.jsxs("div",{className:"pr-card-placeholder",children:["🖥️",f.jsx("span",{children:"Preview"})]})}),f.jsxs("div",{className:"pr-card-body",children:[x&&x.length>0&&f.jsx("div",{className:"pr-card-tags",children:x.slice(0,3).map(A=>f.jsx("span",{className:"pr-tag",children:A},A))}),f.jsx("div",{className:"pr-card-title",children:o}),f.jsx("p",{className:"pr-card-desc",children:h}),f.jsxs("div",{className:"pr-card-actions",children:[N&&f.jsxs("a",{className:"pr-btn pr-btn-live",href:N,target:"_blank",rel:"noopener noreferrer",children:[f.jsx("i",{className:"bi bi-box-arrow-up-right"})," Live"]}),O&&f.jsxs("a",{className:"pr-btn pr-btn-code",href:O,target:"_blank",rel:"noopener noreferrer",children:[f.jsx("i",{className:"bi bi-github"})," Code"]}),f.jsxs(ve,{to:`/projects/${s}`,className:"pr-btn pr-btn-details pr-btn-details",children:[f.jsx("i",{className:"bi bi-arrow-right"})," View Details"]})]})]})]},s))}):f.jsxs("div",{className:"pr-empty",children:[f.jsx("div",{className:"pr-empty-icon",children:"🚧"}),f.jsx("div",{className:"pr-empty-title",children:"Coming soon"}),f.jsx("p",{className:"pr-empty-sub",children:"Projects are on their way — check back soon!"})]})}),f.jsxs("footer",{className:"rv-footer",children:[f.jsxs("nav",{className:"rv-footer-nav",children:[f.jsx(ve,{to:"/",children:"Home"}),f.jsx(ve,{to:"/about",children:"About"}),f.jsx(ve,{to:"/projects",children:"Projects"}),f.jsx(ve,{to:"/resume",children:"Resume"})]}),f.jsxs("div",{className:"rv-footer-right",children:[f.jsx("span",{className:"rv-open-badge",children:"Open to work"}),f.jsxs("span",{className:"rv-footer-copy",children:["© ",new Date().getFullYear()," Mileiny Nolasco"]})]})]})]})]})},Sg=()=>{const{id:c}=p0(),d=Pd(),s=St.find(N=>N.id===parseInt(c));if(!s)return f.jsxs("div",{style:{minHeight:"60vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"Manrope, sans-serif",gap:16},children:[f.jsx("div",{style:{fontSize:48},children:"🔍"}),f.jsx("h2",{style:{fontFamily:"Lora, serif",color:"#0f172a"},children:"Project not found"}),f.jsx(ve,{to:"/projects",style:{color:"#2563eb",fontSize:14},children:"← Back to Projects"})]});const o=St.findIndex(N=>N.id===parseInt(c)),h=o>0?St[o-1]:null,y=o<St.length-1?St[o+1]:null;return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pd-page {
          background: #f8fafc;
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
        }

        /* ── HERO IMAGE BANNER ── */
        .pd-banner {
          width: 100%;
          aspect-ratio: 21/7;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #dbeafe, #eff6ff);
        }
        .pd-banner-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: brightness(0.88);
        }
        .pd-banner-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.1) 60%, transparent 100%);
        }
        .pd-banner-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 56px;
        }

        .pd-banner-title {
          position: absolute;
          bottom: 28px; left: 32px; right: 32px;
          font-family: 'Lora', serif;
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 600; color: #fff;
          letter-spacing: -0.02em; line-height: 1.15;
          text-shadow: 0 2px 12px rgba(0,0,0,0.25);
        }

        .pd-back-btn {
          position: absolute;
          top: 20px; left: 24px;
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 0.5px solid rgba(255,255,255,0.3);
          color: #fff;
          border-radius: 8px;
          padding: 7px 14px;
          font-size: 12px; font-weight: 500;
          text-decoration: none;
          transition: background 0.18s;
        }
        .pd-back-btn:hover { background: rgba(255,255,255,0.25); color: #fff; }

        /* ── MAIN LAYOUT ── */
        .pd-main {
          max-width: 860px; margin: 0 auto;
          padding: 40px 24px 80px;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 32px;
          align-items: start;
        }

        .pd-concept-card {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 24px;
          border-left: 3px solid #2563eb;
        }
        .pd-concept-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #2563eb; margin-bottom: 8px;
        }
        .pd-concept-text {
          font-family: 'Lora', serif;
          font-size: 17px; font-style: italic;
          color: #1e293b; line-height: 1.65;
        }

        .pd-desc {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 24px;
        }
        .pd-section-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 12px;
        }
        .pd-desc-text {
          font-size: 14px; color: #475569;
          line-height: 1.8;
        }

        .pd-features-card {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 24px;
        }
        .pd-feature-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 10px 0;
          border-bottom: 0.5px solid #f1f5f9;
          font-size: 14px; color: #374151; line-height: 1.55;
        }
        .pd-feature-item:last-child { border-bottom: none; padding-bottom: 0; }
        .pd-feature-dot {
          width: 20px; height: 20px; flex-shrink: 0;
          border-radius: 50%;
          background: #eff6ff; border: 1px solid #bfdbfe;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .pd-feature-dot i { font-size: 10px; color: #2563eb; }

        /* ── RIGHT SIDEBAR ── */
        .pd-actions {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .pd-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px 18px; border-radius: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 13px; font-weight: 500;
          text-decoration: none; cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.18s ease;
          width: 100%;
        }
        .pd-btn:hover { transform: translateY(-1px); }
        .pd-btn-live {
          background: #f0fdf4; color: #15803d;
          border-color: #bbf7d0;
        }
        .pd-btn-live:hover { background: #dcfce7; border-color: #86efac; }
        .pd-btn-code {
          background: #0f172a; color: #e2e8f0;
        }
        .pd-btn-code:hover { background: #1e293b; }

        .pd-tech-card {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .pd-tech-grid {
          display: flex; flex-wrap: wrap; gap: 7px;
          margin-top: 12px;
        }
        .pd-tech-tag {
          background: #f0f7ff;
          color: #1d4ed8;
          border: 0.5px solid #bfdbfe;
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.04em;
        }

        .pd-meta-card {
          background: #0f172a;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .pd-meta-num {
          font-family: 'Lora', serif;
          font-size: 44px; font-weight: 600;
          color: #1e3a5f; line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.03em;
        }
        .pd-meta-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #475569;
        }
        .pd-meta-title {
          font-family: 'Lora', serif;
          font-size: 15px; color: #94a3b8;
          margin-top: 12px; line-height: 1.4;
        }

        /* ── PREV / NEXT NAV ── */
        .pd-nav {
          max-width: 860px; margin: 0 auto;
          padding: 0 24px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .pd-nav-btn {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 20px;
          text-decoration: none;
          transition: all 0.2s ease;
          display: flex; align-items: center; gap: 12px;
          cursor: pointer;
        }
        .pd-nav-btn:hover {
          border-color: #93c5fd;
          box-shadow: 0 6px 20px rgba(37,99,235,0.09);
          transform: translateY(-2px);
        }
        .pd-nav-btn.next { justify-content: flex-end; text-align: right; }
        .pd-nav-btn.placeholder { pointer-events: none; opacity: 0; }
        .pd-nav-arrow {
          width: 32px; height: 32px; flex-shrink: 0;
          border-radius: 8px;
          background: #eff6ff;
          display: flex; align-items: center; justify-content: center;
          color: #2563eb; font-size: 14px;
        }
        .pd-nav-meta { flex: 1; min-width: 0; }
        .pd-nav-dir {
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 3px;
        }
        .pd-nav-name {
          font-family: 'Lora', serif;
          font-size: 14px; font-weight: 600;
          color: #0f172a; white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis;
        }

        /* ── FOOTER (matches Resume & Home pages) ── */
        .rv-footer {
          border-top: 1px solid #d8d4cc;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: #f0ede6;
          font-family: 'Manrope', sans-serif;
        }
        .rv-footer-nav { display: flex; gap: 24px; }
        .rv-footer-nav a {
          font-size: 13px;
          color: #5a5650;
          text-decoration: none;
          transition: color 0.15s;
        }
        .rv-footer-nav a:hover { color: #1a1814; }
        .rv-footer-right { display: flex; align-items: center; gap: 16px; }
        .rv-footer-copy { font-size: 12px; color: #7a7268; }
        .rv-open-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #4a7c59;
          background: #e4efe8;
          padding: 5px 10px;
          border-radius: 100px;
        }
        .rv-open-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4a7c59;
          animation: badgePulse 2s infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pd-main { animation: fadeUp 0.5s ease forwards 0.1s; opacity: 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          .pd-main {
            grid-template-columns: 1fr;
            padding: 28px 18px 60px;
            gap: 20px;
          }
          .pd-sidebar { order: -1; }
          .pd-actions { flex-direction: row; }
          .pd-banner { aspect-ratio: 16/9; }
          .pd-banner-title { font-size: 20px; bottom: 18px; left: 18px; }
          .pd-nav { grid-template-columns: 1fr 1fr; gap: 10px; padding: 0 18px 40px; }
          .rv-footer { padding: 20px 24px; }
        }
      `}),f.jsxs("div",{className:"pd-page",children:[f.jsxs("div",{className:"pd-banner",children:[s.image?f.jsxs(f.Fragment,{children:[f.jsx("img",{src:s.image,alt:s.title,className:"pd-banner-img"}),f.jsx("div",{className:"pd-banner-overlay"})]}):f.jsx("div",{className:"pd-banner-placeholder",children:"🖥️"}),f.jsxs(ve,{to:"/projects",className:"pd-back-btn",children:[f.jsx("i",{className:"bi bi-arrow-left"})," Projects"]}),f.jsx("div",{className:"pd-banner-title",children:s.title})]}),f.jsxs("div",{className:"pd-main",children:[f.jsxs("div",{className:"pd-left",children:[s.concept&&f.jsxs("div",{className:"pd-concept-card",children:[f.jsx("div",{className:"pd-concept-label",children:"Concept"}),f.jsxs("p",{className:"pd-concept-text",children:['"',s.concept,'"']})]}),f.jsxs("div",{className:"pd-desc",children:[f.jsx("div",{className:"pd-section-label",children:"Overview"}),f.jsx("p",{className:"pd-desc-text",children:s.description})]}),s.features&&s.features.length>0&&f.jsxs("div",{className:"pd-features-card",children:[f.jsx("div",{className:"pd-section-label",children:"Main Features"}),s.features.map((N,O)=>f.jsxs("div",{className:"pd-feature-item",children:[f.jsx("div",{className:"pd-feature-dot",children:f.jsx("i",{className:"bi bi-check"})}),N]},O))]})]}),f.jsxs("div",{className:"pd-sidebar",children:[f.jsxs("div",{className:"pd-meta-card",children:[f.jsx("div",{className:"pd-meta-num",children:String(o+1).padStart(2,"0")}),f.jsx("div",{className:"pd-meta-label",children:"Project"}),f.jsx("div",{className:"pd-meta-title",children:s.title})]}),(s.live||s.code)&&f.jsxs("div",{className:"pd-actions",children:[s.live&&f.jsxs("a",{className:"pd-btn pd-btn-live",href:s.live,target:"_blank",rel:"noopener noreferrer",children:[f.jsx("i",{className:"bi bi-box-arrow-up-right"})," View Live"]}),s.code&&f.jsxs("a",{className:"pd-btn pd-btn-code",href:s.code,target:"_blank",rel:"noopener noreferrer",children:[f.jsx("i",{className:"bi bi-github"})," View Code"]})]}),s.technologies&&s.technologies.length>0&&f.jsxs("div",{className:"pd-tech-card",children:[f.jsx("div",{className:"pd-section-label",children:"Tech Stack"}),f.jsx("div",{className:"pd-tech-grid",children:s.technologies.map((N,O)=>f.jsx("span",{className:"pd-tech-tag",children:N},O))})]})]})]}),f.jsxs("div",{className:"pd-nav",children:[h?f.jsxs("div",{className:"pd-nav-btn",onClick:()=>d(`/projects/${h.id}`),children:[f.jsx("div",{className:"pd-nav-arrow",children:f.jsx("i",{className:"bi bi-arrow-left"})}),f.jsxs("div",{className:"pd-nav-meta",children:[f.jsx("div",{className:"pd-nav-dir",children:"Previous"}),f.jsx("div",{className:"pd-nav-name",children:h.title})]})]}):f.jsx("div",{className:"pd-nav-btn placeholder"}),y?f.jsxs("div",{className:"pd-nav-btn next",onClick:()=>d(`/projects/${y.id}`),children:[f.jsxs("div",{className:"pd-nav-meta",children:[f.jsx("div",{className:"pd-nav-dir",children:"Next"}),f.jsx("div",{className:"pd-nav-name",children:y.title})]}),f.jsx("div",{className:"pd-nav-arrow",children:f.jsx("i",{className:"bi bi-arrow-right"})})]}):f.jsx("div",{className:"pd-nav-btn placeholder"})]}),f.jsxs("footer",{className:"rv-footer",children:[f.jsxs("nav",{className:"rv-footer-nav",children:[f.jsx(ve,{to:"/",children:"Home"}),f.jsx(ve,{to:"/about",children:"About"}),f.jsx(ve,{to:"/projects",children:"Projects"}),f.jsx(ve,{to:"/resume",children:"Resume"})]}),f.jsxs("div",{className:"rv-footer-right",children:[f.jsx("span",{className:"rv-open-badge",children:"Open to work"}),f.jsxs("span",{className:"rv-footer-copy",children:["© ",new Date().getFullYear()," Mileiny Nolasco"]})]})]})]})]})},Eg="/assets/certificates-g-G-nnHC.jpg",Tg="/assets/CompTIA%20A_%20ce%20certificate_page-0001-CHZBiKPY.jpg",Ng="/assets/certificate_of_completion_html_page-0001-DObYxqm3.jpg",zg="/assets/awscloud_page-0001-Bx9iAPdO.jpg",jg=[{src:Eg,alt:"W3Schools Python Certification",label:"Python",issuer:"W3Schools"},{src:Tg,alt:"CompTIA A+ Certification",label:"CompTIA A+",issuer:"CompTIA"},{src:Ng,alt:"W3Schools HTML Certification",label:"HTML",issuer:"W3Schools"},{src:zg,alt:"AWS Certified Cloud Practitioner",label:"Cloud Practitioner",issuer:"Amazon Web Services"}],Ag=()=>f.jsxs("div",{style:{fontFamily:"'DM Sans', 'Helvetica Neue', sans-serif",minHeight:"100vh",display:"flex",flexDirection:"column"},children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .rv-root { background: #f7f5f1; color: #1a1814; }

        /* ── HERO ── */
        .rv-hero {
          padding: 80px 48px 64px;
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .rv-hero-text {}
        .rv-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a7268;
          margin-bottom: 14px;
        }
        .rv-hero h1 {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 400;
          line-height: 1.05;
          color: #1a1814;
          margin-bottom: 16px;
        }
        .rv-hero h1 em {
          font-style: italic;
          color: #4a7c59;
        }
        .rv-hero-sub {
          font-size: 16px;
          font-weight: 300;
          color: #5a5650;
          max-width: 400px;
          line-height: 1.65;
        }
        .rv-hero-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }
        .rv-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          background: #1a1814;
          color: #f7f5f1;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          border-radius: 4px;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .rv-btn-primary:hover { background: #4a7c59; transform: translateY(-1px); }
        .rv-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          background: transparent;
          color: #1a1814;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          border-radius: 4px;
          border: 1.5px solid #c8c4bc;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .rv-btn-outline:hover { border-color: #1a1814; transform: translateY(-1px); }

        /* ── DIVIDER ── */
        .rv-rule { border: none; border-top: 1px solid #d8d4cc; margin: 0 48px; }

        /* ── GRID ── */
        .rv-section {
          max-width: 1080px;
          margin: 0 auto;
          padding: 64px 48px;
        }
        .rv-section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a7268;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .rv-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #d8d4cc;
        }

        .rv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1px;
          background: #d8d4cc;
          border: 1px solid #d8d4cc;
          border-radius: 12px;
          overflow: hidden;
        }
        .rv-card {
          background: #f7f5f1;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: background 0.25s;
          cursor: default;
        }
        .rv-card:hover { background: #fff; }
        .rv-card:hover .rv-card-img { transform: scale(1.03); }
        .rv-card-img-wrap {
          overflow: hidden;
          aspect-ratio: 4 / 3;
          background: #ede9e2;
        }
        .rv-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s cubic-bezier(.25,.8,.25,1);
        }
        .rv-card-body {
          padding: 18px 20px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .rv-card-issuer {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7a7268;
        }
        .rv-card-name {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: #1a1814;
          line-height: 1.2;
        }
        .rv-card-badge {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 500;
          color: #4a7c59;
          letter-spacing: 0.04em;
        }
        .rv-card-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4a7c59;
          flex-shrink: 0;
        }

        /* ── CONTACT ── */
        .rv-contact-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .rv-contact-card {
          flex: 1;
          min-width: 200px;
          background: #1a1814;
          color: #f7f5f1;
          border-radius: 8px;
          padding: 28px 28px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: block;
        }
        .rv-contact-card:hover { background: #4a7c59; transform: translateY(-2px); }
        .rv-contact-type {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8a8680;
          margin-bottom: 8px;
        }
        .rv-contact-card:hover .rv-contact-type { color: #a0c8b0; }
        .rv-contact-val {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          color: #f7f5f1;
        }

        /* ── FOOTER ── */
        .rv-footer {
          margin-top: auto;
          border-top: 1px solid #d8d4cc;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: #f0ede6;
        }
        .rv-footer-nav { display: flex; gap: 24px; }
        .rv-footer-nav a {
          font-size: 13px;
          color: #5a5650;
          text-decoration: none;
          transition: color 0.15s;
        }
        .rv-footer-nav a:hover { color: #1a1814; }
        .rv-footer-right { display: flex; align-items: center; gap: 16px; }
        .rv-footer-copy { font-size: 12px; color: #7a7268; }
        .rv-open-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #4a7c59;
          background: #e4efe8;
          padding: 5px 10px;
          border-radius: 100px;
        }
        .rv-open-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4a7c59;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 640px) {
          .rv-hero, .rv-section { padding-left: 24px; padding-right: 24px; }
          .rv-rule { margin-left: 24px; margin-right: 24px; }
          .rv-hero { padding-top: 48px; }
          .rv-footer { padding: 20px 24px; }
        }
      `}),f.jsxs("div",{className:"rv-root",style:{flex:1,display:"flex",flexDirection:"column"},children:[f.jsxs("div",{className:"rv-hero",children:[f.jsxs("div",{className:"rv-hero-text",children:[f.jsx("p",{className:"rv-eyebrow",children:"Portfolio — Mileiny Nolasco"}),f.jsxs("h1",{children:["Credentials &",f.jsx("br",{}),f.jsx("em",{children:"Certifications"})]}),f.jsx("p",{className:"rv-hero-sub",children:"Professional certifications and technical achievements across cloud, systems, and web development."})]}),f.jsxs("div",{className:"rv-hero-actions",children:[f.jsx("a",{href:"/resumes.mileinyvaldez.pdf",target:"_blank",rel:"noopener noreferrer",className:"rv-btn-primary",children:"↗ View Resume"}),f.jsx("a",{href:"/resumes.mileinyvaldez.docx",download:!0,className:"rv-btn-outline",children:"↓ Download .docx"})]})]}),f.jsx("hr",{className:"rv-rule"}),f.jsxs("div",{className:"rv-section",children:[f.jsx("p",{className:"rv-section-label",children:"Certifications"}),f.jsx("div",{className:"rv-grid",children:jg.map(c=>f.jsxs("div",{className:"rv-card",children:[f.jsx("div",{className:"rv-card-img-wrap",children:f.jsx("img",{src:c.src,alt:c.alt,className:"rv-card-img"})}),f.jsxs("div",{className:"rv-card-body",children:[f.jsx("p",{className:"rv-card-issuer",children:c.issuer}),f.jsx("p",{className:"rv-card-name",children:c.label}),f.jsx("p",{className:"rv-card-badge",children:"Verified"})]})]},c.label))})]}),f.jsx("hr",{className:"rv-rule"}),f.jsxs("div",{className:"rv-section",style:{paddingTop:48,paddingBottom:72},children:[f.jsx("p",{className:"rv-section-label",children:"Get in Touch"}),f.jsxs("div",{className:"rv-contact-row",children:[f.jsxs("a",{href:"tel:+13475969308",className:"rv-contact-card",children:[f.jsx("p",{className:"rv-contact-type",children:"Phone"}),f.jsx("p",{className:"rv-contact-val",children:"+1 347-596-9308"})]}),f.jsxs("div",{className:"rv-contact-card",style:{cursor:"default"},children:[f.jsx("p",{className:"rv-contact-type",children:"Email"}),f.jsxs("p",{className:"rv-contact-val",children:[f.jsx("a",{href:"mailto:mileinygreys_402@hotmail.com",style:{color:"inherit",textDecoration:"none",display:"block"},children:"mileinygreys_402@hotmail.com"}),f.jsx("a",{href:"mailto:mileinygreys@gmail.com",style:{color:"inherit",textDecoration:"none",display:"block"},children:"mileinygreys@gmail.com"})]})]}),f.jsxs("a",{href:"https://github.com/mileiny1",target:"_blank",rel:"noreferrer",className:"rv-contact-card",children:[f.jsx("p",{className:"rv-contact-type",children:"GitHub"}),f.jsx("p",{className:"rv-contact-val",children:"github.com/mileiny1"})]}),f.jsxs("a",{href:"https://www.linkedin.com/in/mileiny-nolasco-4ab943328/",target:"_blank",rel:"noreferrer",className:"rv-contact-card",children:[f.jsx("p",{className:"rv-contact-type",children:"LinkedIn"}),f.jsx("p",{className:"rv-contact-val",children:"Mileiny Nolasco"})]})]})]}),f.jsxs("footer",{className:"rv-footer",children:[f.jsxs("nav",{className:"rv-footer-nav",children:[f.jsx(ve,{to:"/",children:"Home"}),f.jsx(ve,{to:"/about",children:"About"}),f.jsx(ve,{to:"/projects",children:"Projects"}),f.jsx(ve,{to:"/resume",children:"Resume"})]}),f.jsxs("div",{className:"rv-footer-right",children:[f.jsx("span",{className:"rv-open-badge",children:"Open to work"}),f.jsxs("span",{className:"rv-footer-copy",children:["© ",new Date().getFullYear()," Mileiny Nolasco"]})]})]})]})]});function Rg(){return f.jsxs(F0,{children:[f.jsx(cg,{}),f.jsxs(R0,{children:[f.jsx(Rl,{path:"/",element:f.jsx(fg,{})}),f.jsx(Rl,{path:"/about",element:f.jsx(pg,{})}),f.jsx(Rl,{path:"/projects",element:f.jsx(xg,{})}),"  ",f.jsx(Rl,{path:"/projects/:id",element:f.jsx(Sg,{})}),f.jsx(Rl,{path:"/resume",element:f.jsx(Ag,{})})]})]})}Bm.createRoot(document.getElementById("root")).render(f.jsx(w.StrictMode,{children:f.jsx(Rg,{})}));
