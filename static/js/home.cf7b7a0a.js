(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=(n(70),Object(a.createContext)({width:0,height:0}));function r(e){var t=e.children,n=Object(a.useContext)(i),r=n.width,l=n.height;return c.a.createElement("li",{style:{width:r,height:l},className:"lt-carousel__item"},t)}function l(e){var t=e.children,n=e.displayedIdx,a=e.height,r=e.width;return c.a.createElement(i.Provider,{value:{width:r,height:a}},c.a.createElement("div",{style:{width:r,height:a},className:"lt-carousel__frame"},c.a.createElement("ul",{style:{transform:"translateX(-"+n*r+"px)"},className:"lt-carousel__list"},t)))}var o=n(71),s=n.n(o),u=n(13),d=n(49),m=n(50),f=n(51);n(72);function h(e){var t=e.news,n=e.initIdx,a=e.container,i=c.a.useState(n),r=i[0],l=i[1],o=c.a.useRef(null);return Object(f.a)(o,m.a.closeModal.bind(m.a,a)),c.a.createElement(d.a,{prevLabel:r>0?"上一条":"",nextLabel:r<t.length-1?"下一条":"",handleNext:function(){return l(r+1)},handlePrev:function(){return l(r-1)},ref:o,className:"news-modal"},c.a.createElement("article",{className:"news-modal__container"},c.a.createElement("h1",{className:"news-modal__date"},c.a.createElement("time",null,t[r].date)),c.a.createElement("p",{className:"news-modal__content"},t[r].title.chs)))}var p=n(52),_=new(function(){function e(){}return e.prototype.getNews=function(){return new Promise(function(e,t){e(p.a)})},e}());n(73);function v(){var e=c.a.useState([]),t=e[0],n=e[1];function a(e){var n=e.item,a=e.idx;return c.a.createElement("li",{className:"news__item"},c.a.createElement("time",{className:"news__time"},n.date),c.a.createElement("p",{className:"news__content"},c.a.createElement("span",{className:"news__text clickable",onClick:function(){return function(e,t){var n=m.a.createFullscreenMask();Object(u.render)(c.a.createElement(h,{container:n,news:e,initIdx:t}),n),document.getElementsByTagName("body")[0].appendChild(n)}(t,a)}},n.title.chs)))}return c.a.useEffect(function(){_.getNews().then(n).catch(console.error)},[]),c.a.createElement("section",{className:"news__container"},c.a.createElement("h1",{className:"news__title page__title"},"News"),c.a.createElement("ul",{className:"news__list"},t.map(function(e,t){return c.a.createElement(a,{item:e,idx:t,key:t})})))}n(74);function w(){var e=Object(a.useState)(0),t=e[0],n=e[1];return c.a.createElement("div",{className:"banner__container"},c.a.createElement(l,{width:885,height:424,displayedIdx:t},s.a.map(function(e,t){return c.a.createElement(r,{key:t},c.a.createElement("div",{className:"banner__wrapper"},c.a.createElement("img",{src:e.image,className:"banner__image"}),c.a.createElement("p",{className:"banner__title"},e.title)))})),c.a.createElement("div",{className:"banner__controller"},s.a.map(function(e,a){return c.a.createElement("a",{key:a,className:"controller__jumper clickable "+(t===a?"selected":""),onClick:n.bind(null,a)})})))}function b(){return c.a.createElement("main",{className:"home__container"},c.a.createElement(w,null),c.a.createElement(v,null))}n.d(t,"default",function(){return b})},38:function(e,t,n){"use strict";function a(e,t,n){return{get:function(){var e=n.value.bind(this);return Object.defineProperty(this,t,{value:e}),e}}}n.d(t,"a",function(){return a})},42:function(e,t,n){},43:function(e,t,n){"use strict";var a=function(){return function(e,t,n){void 0===e&&(e=""),void 0===t&&(t=""),void 0===n&&(n=""),this.chs=e,this.cht=t,this.jp=n}}();t.a=a},46:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(43),c=n(38),i=function(e,t,n,a){var c,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},r=function(){return function(e,t){this.date=e,this.title=t}}();t.b=r;var l=function(){function e(e){void 0===e&&(e=new r("",new a.a)),this.news=e,this.editable=!1,this.edited=!1,this.editing=!1}return Object.defineProperty(e.prototype,"date",{get:function(){return this.news.date},set:function(e){this.news.date=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this.news.title},enumerable:!0,configurable:!0}),e.prototype.addEditEffect=function(e){var t=this;void 0===e&&(e=0),this.edited=!0,setTimeout(function(){return t.edited=!1},e)},i([c.a],e.prototype,"addEditEffect",null),e}()},49:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=(n(42),c.a.forwardRef(function(e,t){var n=e.className,a=void 0===n?"":n,i=e.children,r=e.nextLabel,l=e.prevLabel,o=e.handlePrev,s=e.handleNext;return c.a.createElement("div",{ref:t,className:"lt-modal__window lt-modal__window--center lt-modal__window--nav "+a},i,c.a.createElement("div",{className:"nav__wrapper"},c.a.createElement("a",{onClick:o,className:"nav__button nav__button--previous clickable "+(""===l?"hide":"")},c.a.createElement("span",null,"← ",l)),c.a.createElement("a",{onClick:s,className:"nav__button nav__button--next clickable "+(""===r?"hide":"")},c.a.createElement("span",null,r," →"))))}));t.a=i},50:function(e,t,n){"use strict";var a=n(13),c=n(38),i=(n(42),function(e,t,n,a){var c,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r}),r=new(function(){function e(){this.historyCount=0,this.openCount=0,this.baseZIndex=999}return e.prototype.createFullscreenMask=function(){this.historyCount++,this.openCount++;var e=document.createElement("div");return e.style.zIndex=(this.baseZIndex+this.historyCount).toString(),e.classList.add("lt-modal__mask"),document.getElementsByTagName("body")[0].classList.add("modal-open"),e},e.prototype.closeModal=function(e){Object(a.unmountComponentAtNode)(e),this.openCount--,0===this.openCount&&document.getElementsByTagName("body")[0].classList.remove("modal-open"),e.parentNode.removeChild(e)},i([c.a],e.prototype,"createFullscreenMask",null),i([c.a],e.prototype,"closeModal",null),e}());t.a=r},51:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),c=n.n(a);function i(e,t){function n(n){null!==e.current&&(e.current.contains(n.target)||t())}c.a.useEffect(function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}},[])}},52:function(e,t,n){"use strict";var a=n(53),c=n.n(a),i=n(46),r=n(43);var l=c.a.map(function(e){var t=new r.a(e.title_chs,e.title_cht,e.title_jp);return new i.b(e.date,t)});t.a=l},53:function(e,t){e.exports=[{date:"8102年15月61日",title_chs:"Ovovovovoo",title_cht:"Oxixixici",title_jp:"Jcjcjcjcjcjc"},{date:"2018年10月07日",title_chs:"测试 07",title_cht:"测试 07",title_jp:"测试 07"},{date:"8102年10月09日",title_chs:"測試 09",title_cht:"測試 09",title_jp:"測試 09"},{date:"2018年10月08日",title_chs:"测试 08",title_cht:"测试 08",title_jp:"测试 08"},{date:"2018年11月02日",title_chs:"客户端测试1",title_cht:"客户端测试1",title_jp:"客户端测试1"}]},70:function(e,t,n){},71:function(e,t){e.exports=[{image:"https://via.placeholder.com/885x424",title:"title1"},{image:"https://via.placeholder.com/885x424",title:"title2"},{image:"https://via.placeholder.com/885x424",title:"title3"},{image:"https://via.placeholder.com/885x424",title:"title4"}]},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){}}]);