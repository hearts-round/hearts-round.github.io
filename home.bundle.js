(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{34:function(e,t,n){},35:function(e,t){e.exports=[{date:"2018年10月07日",title_chs:"测试 07",title_cht:"测试 07",title_jp:"测试 07"},{date:"2018年10月08日",title_chs:"测试 08",title_cht:"测试 08",title_jp:"测试 08"},{date:"8102年10月09日",title_chs:"測試 09",title_cht:"測試 09",title_jp:"測試 09"}]},36:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(30),r=n(3),c=n(6),l=n(35),a=function(e,t){this.date=e,this.title=t},i=function(e,t,n){this.chs=e,this.cht=t,this.jp=n};var p=n.n(l).a.map(function(e){var t=new i(e.title_chs,e.title_cht,e.title_jp);return new a(e.date,t)}),u=new(function(){function e(){}return e.prototype.getNews=function(){return new Promise(function(e,t){e(p)})},e}());function f(e,t,n){return{get:function(){var e=n.value.bind(this);return Object.defineProperty(this,t,{value:e}),e}}}var d,h,m=(d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(e,t,n,o){var r,c=arguments.length,l=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;0<=a;a--)(r=e[a])&&(l=(c<3?r(l):3<c?r(t,n,l):r(t,n))||l);return 3<c&&l&&Object.defineProperty(t,n,l),l},y=function(n){function e(e){var t=n.call(this,e)||this;return t.wrapperRef=null,t.wrapperRef=s.createRef(),t}return m(e,n),e.prototype.render=function(){return s.createElement("div",{className:this.props.className,ref:this.wrapperRef},this.props.children)},e.prototype.componentDidMount=function(){document.addEventListener("click",this.handleClick)},e.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleClick)},e.prototype.handleClick=function(e){null!==this.wrapperRef&&null!==this.wrapperRef.current&&void 0!==this.wrapperRef.current&&(this.wrapperRef.current.contains(e.target)||this.props.listener(e))},e.defaultProps={className:"",listener:function(){}},w([f],e.prototype,"handleClick",null),e}(s.Component),_=(n(34),function(e){var t=e.className,n=void 0===t?"":t,o=e.children,r=e.nextLabel,c=e.prevLabel,l=e.handlePrev,a=e.handleNext,i=e.handleClose;return s.createElement(y,{className:"lt-modal__window lt-modal__window--center lt-modal__window--nav "+n,listener:i},o,s.createElement("div",{className:"nav__wrapper"},s.createElement("a",{onClick:l,className:"nav__button nav__button--previous clickable "+(""===c?"hide":"")},s.createElement("span",null,"← ",c)),s.createElement("a",{onClick:a,className:"nav__button nav__button--next clickable "+(""===r?"hide":"")},s.createElement("span",null,r," →"))))}),b=(n(36),Object(o.a)(function(e){var t=e.store;return s.createElement(_,{prevLabel:t.prevLabel,nextLabel:t.nextLabel,handleNext:t.handleNext,handlePrev:t.handlePrev,handleClose:t.handleClose,className:"news-modal"},s.createElement("article",{className:"news-modal__container"},s.createElement("h1",{className:"news-modal__date"},s.createElement("time",null,t.theNews.date)),s.createElement("p",{className:"news-modal__content"},t.theNews.title.chs)))})),v=function(e,t,n,o){var r,c=arguments.length,l=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;0<=a;a--)(r=e[a])&&(l=(c<3?r(l):3<c?r(t,n,l):r(t,n))||l);return 3<c&&l&&Object.defineProperty(t,n,l),l},N=new(function(){function e(){this.historyCount=0,this.openCount=0,this.baseZIndex=999}return e.prototype.createFullscreenMask=function(){this.historyCount++,this.openCount++;var e=document.createElement("div");return e.style.zIndex=(this.baseZIndex+this.historyCount).toString(),e.classList.add("lt-modal__mask"),document.getElementsByTagName("body")[0].classList.add("modal-open"),e},e.prototype.turnoffMask=function(e){this.openCount--,0===this.openCount&&document.getElementsByTagName("body")[0].classList.remove("modal-open"),e.parentNode.removeChild(e)},v([f],e.prototype,"createFullscreenMask",null),v([f],e.prototype,"turnoffMask",null),e}()),g=function(e,t,n,o){var r,c=arguments.length,l=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;0<=a;a--)(r=e[a])&&(l=(c<3?r(l):3<c?r(t,n,l):r(t,n))||l);return 3<c&&l&&Object.defineProperty(t,n,l),l},E=function(){function e(e,t,n){this.container=n,this.newsArray=e,this.newsIdx=t}return Object.defineProperty(e.prototype,"nextLabel",{get:function(){return this.newsIdx>=this.newsArray.length-1?"":"下一条"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"prevLabel",{get:function(){return this.newsIdx<=0?"":"上一条"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"theNews",{get:function(){return 0<=this.newsIdx&&this.newsIdx<this.newsArray.length?this.newsArray[this.newsIdx]:null},enumerable:!0,configurable:!0}),e.prototype.handleNext=function(){this.newsIdx++},e.prototype.handlePrev=function(){this.newsIdx--},e.prototype.handleClose=function(){Object(c.unmountComponentAtNode)(this.container),N.turnoffMask(this.container)},g([r.l],e.prototype,"newsArray",void 0),g([r.l],e.prototype,"newsIdx",void 0),g([r.e],e.prototype,"nextLabel",null),g([r.e],e.prototype,"prevLabel",null),g([r.e],e.prototype,"theNews",null),g([r.d.bound],e.prototype,"handleNext",null),g([r.d.bound],e.prototype,"handlePrev",null),g([r.d.bound],e.prototype,"handleClose",null),e}(),j=new(function(){function e(){this.news=[]}return e.prototype.fetchNews=function(){var t=this;u.getNews().then(function(e){t.news=e}).catch(function(){console.error("error in reading news")})},e.prototype.popupNews=function(e){var t=N.createFullscreenMask(),n=new E(this.news,e,t);Object(c.render)(s.createElement(b,{store:n}),t),document.getElementsByTagName("body")[0].appendChild(t)},g([r.l],e.prototype,"news",void 0),g([r.d],e.prototype,"fetchNews",null),g([r.d.bound],e.prototype,"popupNews",null),e}()),x=(n(37),h=function(e,t){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e,t,n,o){var r,c=arguments.length,l=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;0<=a;a--)(r=e[a])&&(l=(c<3?r(l):3<c?r(t,n,l):r(t,n))||l);return 3<c&&l&&Object.defineProperty(t,n,l),l},C=function(e){var t=e.item,n=e.idx;return s.createElement("li",{className:"news__item"},s.createElement("time",{className:"news__time"},t.date),s.createElement("p",{className:"news__content"},s.createElement("span",{className:"news__text clickable",onClick:j.popupNews.bind(j,n)},t.title.chs)))},P=function(e){var t=e.news;return s.createElement("div",{className:"news__container"},s.createElement("h1",{className:"news__title"},"News"),s.createElement("ul",{className:"news__list"},t.map(function(e,t){return s.createElement(C,{item:e,idx:t,key:t})})))},k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return x(t,e),t.prototype.render=function(){var e=j.news;return s.createElement("main",{className:"home__container"},s.createElement(P,{news:e}))},t.prototype.componentDidMount=function(){j.fetchNews()},t=O([o.a],t)}(s.Component);t.default=k}}]);