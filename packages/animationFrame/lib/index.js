!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.animationFrame=n():t.animationFrame=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(9),o=e(14);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";e.r(n);e(7);var r=window,o={},i=r.performance&&"function"==typeof r.performance.now,u=Date.now();function f(){return i?r.performance.now():Date.now()-u}o.raf=r.requestAnimationFrame||r.webkitRequestAnimationFrame,o.caf=r.cancelAnimationFrame||r.webkitCancelAnimationFrame||r.webkitCancelRequestAnimationFrame,o.raf||(o.raf=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return setTimeout(function(){t(f())},1e3/60)}),o.caf||(o.caf=function(t){clearTimeout(t)}),n.default={raf:function(t){return o.raf.call(r,t)},caf:function(t){return o.caf.call(r,t)},highResTimestamp:f}},function(t,n,e){var r=e(8);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,e){var r=e(0),o=e(3),i=e(4),u=e(15),f=e(18),c=function(t,n,e){var a,p,l,s,y=t&c.F,d=t&c.G,m=t&c.S,v=t&c.P,b=t&c.B,w=d?r:m?r[n]||(r[n]={}):(r[n]||{}).prototype,x=d?o:o[n]||(o[n]={}),g=x.prototype||(x.prototype={});for(a in d&&(e=n),e)l=((p=!y&&w&&void 0!==w[a])?w:e)[a],s=b&&p?f(l,r):v&&"function"==typeof l?f(Function.call,l):l,w&&u(w,a,l,t&c.U),x[a]!=l&&i(x,a,s),v&&g[a]!=l&&(g[a]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(10),o=e(11),i=e(13),u=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(2)&&!e(5)(function(){return 7!=Object.defineProperty(e(12)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(1),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=e(4),i=e(16),u=e(17)("src"),f=Function.toString,c=(""+f).split("toString");e(3).inspectSource=function(t){return f.call(t)},(t.exports=function(t,n,e,f){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:f?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||f.call(this)})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(19);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}}]).default});