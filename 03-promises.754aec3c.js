!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=o);var a=o("6JpON"),i=document.querySelector(".form"),u=i.querySelectorAll("label"),l=i.querySelector("button");function s(e,t){var r=Math.random()>.3;return new Promise((function(n,o){setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.classList.add("timer"),u.forEach((function(e){return e.classList.add("field-promises")})),l.classList.add("btn-form-promises");i.addEventListener("submit",(function(t){t.preventDefault();var r,n,o,i,u=(r=t.currentTarget.elements,n=r.delay,o=r.step,i=r.amount,{currentDelay:Number(n.value),amount:Number(i.value),step:Number(o.value)});(function(t){var r=t.currentDelay,n=t.amount,o=t.step;return r<0?e(a).Notify.failure("The First delay must be greater than or equal to 0"):o<0?e(a).Notify.failure("The Delay step must be greater than or equal to 0"):!(n<=0)||e(a).Notify.failure("The Amount must be greater than 0")})(u)&&(!function(t){for(var r=t.currentDelay,n=t.amount,o=t.step,i=1;i<=n;i+=1)s(i,r).then((function(t){var r=t.position,n=t.delay;e(a).Notify.success("Fulfilled promise ".concat(r," in ").concat(n,"ms"))})).catch((function(t){var r=t.position,n=t.delay;e(a).Notify.failure("Rejected promise ".concat(r," in ").concat(n,"ms"))})),r+=o}(u),t.currentTarget.reset())}))}();
//# sourceMappingURL=03-promises.754aec3c.js.map