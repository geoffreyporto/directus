(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-204"],{"2cfd":function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},4170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=u(n("701a")),a=u(n("6068"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){(0,a.default)(2,arguments);var u=(0,r.default)(e,n),o=(0,r.default)(t,n);return u.getTime()===o.getTime()}e.exports=t.default},"55a4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(n("4170"));function a(e){return e&&e.__esModule?e:{default:e}}var u=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function o(e){switch(e){case 0:return"'domenica scorsa alle' p";default:return"'"+u[e]+" scorso alle' p"}}function l(e){return"'"+u[e]+" alle' p"}function s(e){switch(e){case 0:return"'domenica prossima alle' p";default:return"'"+u[e]+" prossimo alle' p"}}var f={lastWeek:function(e,t,n){var a=e.getUTCDay();return(0,r.default)(e,t,n)?l(a):o(a)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,n){var a=e.getUTCDay();return(0,r.default)(e,t,n)?l(a):s(a)},other:"P"};function i(e,t,n,r){var a=f[e];return"function"===typeof a?a(t,n,r):a}e.exports=t.default},6068:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},"701a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var r=o(n("2cfd")),a=o(n("d8e8")),u=o(n("6068"));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){(0,u.default)(1,arguments);var n=t||{},o=n.locale,l=o&&o.options&&o.options.weekStartsOn,s=null==l?0:(0,r.default)(l),f=null==n.weekStartsOn?s:(0,r.default)(n.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var i=(0,a.default)(e),d=i.getUTCDay(),c=(d<f?7:0)+d-f;return i.setUTCDate(i.getUTCDate()-c),i.setUTCHours(0,0,0,0),i}e.exports=t.default},d8e8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=a(n("6068"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}e.exports=t.default}}]);
//# sourceMappingURL=df-204.7149b35e.js.map