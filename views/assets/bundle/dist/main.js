!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1);var n=o(2);window.addEventListener("load",(function(){window.dispatchEvent(new Event("scroll")),document.body.classList.remove("loading"),n.update(".lazy_load")})),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.querySelector("body > nav").classList.contains("not_top");e>0?t||document.querySelector("body > nav").classList.add("not_top"):t&&document.querySelector("body > nav").classList.remove("not_top")})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/views/assets/js/service_worker.js").then((function(e){console.log("Service Worker Registered Successfully")})).catch((function(e){console.log("Service Worker Register Failure: ",e)})),Array.from(document.querySelectorAll("body > div.container .post_content a")).forEach((function(e){e.hasAttribute("target")||e.hostname==window.location.hostname||(e.setAttribute("target","_blank"),e.setAttribute("rel","nofollow noreferrer"))})),"undefined"!=typeof postBlocksToLoadOnScroll&&window.addEventListener("scroll",(function(){if(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-(window.pageYOffset+window.innerHeight)<10*parseFloat(getComputedStyle(document.documentElement).fontSize))if(postBlocksToLoadOnScroll.length<=15)postBlocksToLoadOnScroll.forEach((function(e){document.querySelector("body > div.container > ul.block_list").innerHTML+=atob(e),n.update(".lazy_load")})),postBlocksToLoadOnScroll=[];else{for(var e=0;e<15;e++)document.querySelector("body > div.container > ul.block_list").innerHTML+=atob(postBlocksToLoadOnScroll[e]),n.update(".lazy_load");postBlocksToLoadOnScroll=postBlocksToLoadOnScroll.slice(15)}}))},function(e,t,o){},function(e,t){e.exports={getURLsFromCSS:function(e){return[(new CSSParser).parse(e,!1,!0).rules].reduce((function(e,t){var o=t.style.backgroundImage.match(/url\(\"(.+)\"\)/);return o&&e.push(o[1]),e}),[])},update:function(e){Array.from(document.querySelectorAll(e)).forEach((function(e){if(!e.classList.contains("loaded")&&e.hasAttribute("data-src")){var t=new Image;t.onload=function(){e.setAttribute("src",e.getAttribute("data-src"))},t.src=e.getAttribute("data-src")}}))}}}]);