!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("ejkSG"),l=document.querySelector(".form"),u=l.elements.delay,c=l.elements.step,a=l.elements.amount;l.querySelector("button").addEventListener("click",(function(n){var t=a.value;n.preventDefault(),setTimeout((function(){setInterval((function(){var n,o,r;(n=t,o=c.value,r=Math.random()>.3,new Promise((function(e,t){r?e("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")):t("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))).then((function(n){t>0&&(e(i).Notify.success(n),t--)})).catch((function(n){t>0&&(e(i).Notify.failure(n),t--)}))}),c.value)}),u.value)}))}();
//# sourceMappingURL=03-promises.9f11d690.js.map