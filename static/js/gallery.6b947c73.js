(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{37:function(e,t,a){"use strict";function n(e,t,a){return{get:function(){var e=a.value.bind(this);return Object.defineProperty(this,t,{value:e}),e}}}a.d(t,"a",function(){return n})},38:function(e,t,a){},41:function(e,t,a){"use strict";var n=a(11),o=a(37),r=(a(38),function(e,t,a,n){var o,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(l=(r<3?o(l):r>3?o(t,a,l):o(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l}),l=new(function(){function e(){this.historyCount=0,this.openCount=0,this.baseZIndex=999}return e.prototype.createFullscreenMask=function(){this.historyCount++,this.openCount++;var e=document.createElement("div");return e.style.zIndex=(this.baseZIndex+this.historyCount).toString(),e.classList.add("lt-modal__mask"),document.getElementsByTagName("body")[0].classList.add("modal-open"),e},e.prototype.closeModal=function(e){Object(n.unmountComponentAtNode)(e),this.openCount--,0===this.openCount&&document.getElementsByTagName("body")[0].classList.remove("modal-open"),e.parentNode.removeChild(e)},r([o.a],e.prototype,"createFullscreenMask",null),r([o.a],e.prototype,"closeModal",null),e}());t.a=l},42:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0),o=a.n(n);function r(e,t,a){function n(a){null!==e.current&&(e.current.contains(a.target)||t())}o.a.useEffect(function(){return void 0===a&&(a=document),a.addEventListener("click",n),function(){a.removeEventListener("click",n)}},[])}},43:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=(a(38),o.a.forwardRef(function(e,t){var a=e.className,n=void 0===a?"":a,r=e.children,l=e.nextLabel,c=e.prevLabel,i=e.handlePrev,u=e.handleNext;return o.a.createElement("div",{ref:t,className:"lt-modal__window lt-modal__window--center lt-modal__window--nav "+n},r,o.a.createElement("div",{className:"nav__wrapper"},o.a.createElement("a",{onClick:i,className:"nav__button nav__button--previous clickable "+(""===c?"hide":"")},o.a.createElement("span",null,"← ",c)),o.a.createElement("a",{onClick:u,className:"nav__button nav__button--next clickable "+(""===l?"hide":"")},o.a.createElement("span",null,l," →"))))}));t.a=r},60:function(e,t){e.exports=[{url_cover:"https://via.placeholder.com/280x290",url_modal:"https://via.placeholder.com/890x490",url_origin:"https://via.placeholder.com/890x490",author_name:"Coretania1",author_url:"https://weibo.com/u/6500013650",album_code:"",track_idx:""},{url_cover:"https://via.placeholder.com/290x280",url_modal:"https://via.placeholder.com/730x450",url_origin:"https://via.placeholder.com/890x490",author_name:"Coretania2",author_url:"https://weibo.com/u/6500013650",album_code:"",track_idx:""},{url_cover:"https://via.placeholder.com/270x290",url_modal:"https://via.placeholder.com/530x360",url_origin:"https://via.placeholder.com/890x490",author_name:"Coretania2",author_url:"https://weibo.com/u/6500013650",album_code:"HATO001",track_idx:"1"},{url_cover:"https://via.placeholder.com/290x270",url_modal:"https://via.placeholder.com/230x860",url_origin:"https://via.placeholder.com/890x490",author_name:"Coretania3",author_url:"https://weibo.com/u/6500013650",album_code:"",track_idx:""},{url_cover:"https://via.placeholder.com/250x290",url_modal:"https://via.placeholder.com/430x860",url_origin:"https://via.placeholder.com/890x490",author_name:"Coretania4",author_url:"https://weibo.com/u/6500013650",album_code:"HATO002",track_idx:"1"},{url_cover:"https://via.placeholder.com/290x250",url_modal:"https://via.placeholder.com/730x460",url_origin:"https://via.placeholder.com/890x490",author_name:"Coretania5",author_url:"",album_code:"",track_idx:""},{url_cover:"https://via.placeholder.com/210x210",url_modal:"https://via.placeholder.com/830x860",url_origin:"https://via.placeholder.com/890x490",author_name:"Coretania6",author_url:"",album_code:"HATO001",track_idx:"2"}]},61:function(e,t,a){},62:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(60),l=a.n(r).a.map(function(e){return{url:{cover:e.url_cover,origin:e.url_origin},author:{name:e.author_name,page:e.author_url}}}),c=a(11),i=a(41),u=a(43),s=a(42);a(61);function m(e){var t=e.initialIdx,a=e.container,r=Object(n.useState)(t),c=r[0],m=r[1],d=Object(n.useRef)(null),_=l[c];return Object(s.a)(d,i.a.closeModal.bind(i.a,a),a),o.a.createElement(u.a,{prevLabel:c>0?"Previous":"",nextLabel:c<l.length-1?"Next":"",handleNext:function(){return m(c+1)},handlePrev:function(){return m(c-1)},ref:d},o.a.createElement("main",{className:"gallery__modal"},o.a.createElement("img",{src:_.url.origin,className:"modal__image modal__image--gallery"}),o.a.createElement("article",{className:"modal__description modal__description--gallery"},o.a.createElement("section",{className:"description__section with-v-bar"},o.a.createElement("p",{className:"section__text"},_.author.name)),o.a.createElement("section",{className:"description__section description__section--link with-v-bar"},o.a.createElement("p",{className:"section__text section__text--gap"},"Link"),o.a.createElement("p",{className:"section__text"},o.a.createElement("a",{href:_.url.origin,target:"_blank",className:"modal__link"},"下载原图")),o.a.createElement("p",{className:"section__text"},o.a.createElement("a",{href:""===_.author.page?void 0:_.author.page,target:"_blank",className:""===_.author.page?"modal__link--disabled":"modal__link"},"画师主页"))))))}a(62);var d=function(e){var t=e.info,a=e.idx;return o.a.createElement("li",{onClick:function(e){var t=i.a.createFullscreenMask();Object(c.render)(o.a.createElement(m,{initialIdx:e,container:t}),t),document.getElementsByTagName("body")[0].appendChild(t)}.bind(null,a),className:"illustration__item illustration__item--"+a%3+" clickable"},o.a.createElement("img",{src:t.url.cover,className:"illustration__image"}))};t.default=function(){return o.a.createElement("ul",{className:"illustration__list"},l.map(function(e,t){return o.a.createElement(d,{info:e,idx:t,key:t})}))}}}]);