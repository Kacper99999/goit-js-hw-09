!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var l,i=r("ejkSG"),a=document.querySelector(".form"),u=a.elements.delay,c=a.elements.step,f=a.elements.amount;a.querySelector("button").addEventListener("click",(function(n){var t=f.value;n.preventDefault(),setTimeout((function(){l=setInterval((function(){var n,o,r;(n=t,o=c.value,r=Math.random()>.3,new Promise((function(e,t){r?e("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")):t("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))).then((function(n){t>0?(e(i).Notify.success(n),t--):clearInterval(l)})).catch((function(n){t>0?(e(i).Notify.failure(n),t--):clearInterval(l)}))}),c.value)}),u.value)}))}();
//# sourceMappingURL=03-promises.04d4b379.js.map
