!function(i){function e(e){for(var t,n,a=e[0],r=e[1],o=e[2],l=0,c=[];l<a.length;l++)n=a[l],p[n]&&c.push(p[n][0]),p[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t]);for(f&&f(e);c.length;)c.shift()();return u.push.apply(u,o||[]),s()}function s(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==p[o]&&(a=!1)}a&&(u.splice(t--,1),e=d(d.s=n[0]))}return e}var n={},m={6:0},p={6:0},u=[];function d(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(u){var e=[];m[u]?e.push(m[u]):0!==m[u]&&{1:1,2:1,4:1,5:1}[u]&&e.push(m[u]=new Promise(function(e,a){for(var t=({1:"contact",2:"discography",3:"discography-album",4:"discography-video",5:"home",7:"management"}[u]||u)+".3b1701b5.css",r=d.p+t,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var l=(i=n[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===t||l===r))return e()}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){var i;if((l=(i=c[o]).getAttribute("data-href"))===t||l===r)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var t=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+u+" failed.\n("+t+")");n.request=t,a(n)},s.href=r,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){m[u]=0}));var t,n=p[u];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,t){n=p[u]=[e,t]});e.push(n[2]=a);var r,o=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=d.p+""+({1:"contact",2:"discography",3:"discography-album",4:"discography-video",5:"home",7:"management"}[t=u]||t)+".3b1701b5.js",r=function(e){l.onerror=l.onload=null,clearTimeout(c);var t=p[u];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+u+" failed.\n("+n+": "+a+")");r.type=n,r.request=a,t[1](r)}p[u]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,o.appendChild(l)}return Promise.all(e)},d.m=i,d.c=n,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)d.d(n,a,function(e){return t[e]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var f=a;u.push([55,0]),s()}({10:function(e,t,n){"use strict";var a=n(0),r=(n(32),function(e){var t=e.className,n=void 0===t?"":t;return a.createElement("div",{className:"lt-loading__container "+n},a.createElement("div",{className:"lt-loading__rect lt-loading__rect--0"}),a.createElement("div",{className:"lt-loading__rect lt-loading__rect--1"}),a.createElement("div",{className:"lt-loading__rect lt-loading__rect--2"}))});n(33),t.a=function(){return a.createElement("div",{className:"global__page-loading"},a.createElement(r,null))}},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),o=n(59),l=n(61),c=n(58),i=n(22),s=n(9),u=(n(29),n(60)),m=(n(30),[{label:"home",exact:!0,path:"/home"},{label:"discography",exact:!1,path:"/discography"},{label:"gallery",exact:!1,path:"/gallery"},{label:"works",exact:!1,path:"/works"},{label:"about",exact:!1,path:"/about"},{label:"contact",exact:!0,path:"/contact"}]);function p(e,t){return a.createElement("li",{className:"nav__item",key:e.label},a.createElement(u.a,{className:"nav__item-text",activeClassName:"active",to:e.path,exact:e.exact},e.label))}var d,f=function(){return a.createElement("header",{className:"global__header"},a.createElement("nav",{className:"nav__container"},a.createElement("div",{className:"logo__wrapper"},a.createElement("img",{className:"logo"})),a.createElement("ul",{className:"nav__list"},m.map(p))))},g=n(10),_=(n(34),function(){return a.createElement("footer",{className:"global__footer"},a.createElement("section",{className:"footer__section footer__section--social"},a.createElement("div",{className:"social__logo-wrapper social__logo-wrapper--twitter"},a.createElement("i",{className:"social__logo social__logo--twitter"})),a.createElement("div",{className:"social__logo-wrapper social__logo-wrapper--weibo"},a.createElement("i",{className:"social__logo social__logo--weibo"}))),a.createElement("section",{className:"footer__section footer__section--site-name"},a.createElement("p",{className:"section__paragraph"},"- All Rounds of Hearts -")),a.createElement("section",{className:"footer__section footer__section--copyright"},a.createElement("p",{className:"section__paragraph"},"© 2018 HeartsRounds All Rights Reserved.")))}),h=(n(35),d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),v=s({loader:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,74))},loading:g.a}),y=s({loader:function(){return n.e(2).then(n.bind(null,72))},loading:g.a}),b=s({loader:function(){return n.e(1).then(n.bind(null,73))},loading:g.a}),E=s({loader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,75))},loading:g.a}),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return h(t,e),t.prototype.render=function(){return[a.createElement(f,{key:"nav"}),a.createElement("div",{className:"global__body",key:"body"},a.createElement(l.a,null,a.createElement(c.a,{exact:!0,path:"/",to:"/home"}),a.createElement(i.a,{exact:!0,path:"/home",component:v}),a.createElement(i.a,{path:"/discography",component:y}),a.createElement(i.a,{exact:!0,path:"/contact",component:b}),a.createElement(i.a,{exact:!0,path:"/management",component:E}))),a.createElement(_,{key:"footer"})]},t}(a.Component);Object(r.render)(a.createElement(o.a,null,a.createElement(N,null)),document.getElementById("root")),(void 0).hot&&(void 0).hot.accept()}});