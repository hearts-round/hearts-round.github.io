(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(e,a){e.exports=[{title:"video001",album:"album001",original:"Zun",arrange:"xiaobai",lyrics:"Coretania",illust:"magic girl",vocal:"Coretania",cover:"https://via.placeholder.com/290x290",id_youtube:"dpw9EHDh2bM",id_bilibili:"av35219233/?p=1",id_niconico:"sm30379034"},{title:"video002",album:"album002",original:"Zun",arrange:"xiaobai",lyrics:"Coretania",illust:"magic girl",vocal:"Coretania",cover:"https://via.placeholder.com/290x290",id_youtube:"dpw9EHDh2bM",id_bilibili:"av2739129/?p=2",id_niconico:"sm30379034"},{title:"video003",album:"album003",original:"Zun",arrange:"xiaobai",lyrics:"Coretania",illust:"magic girl",vocal:"Coretania",cover:"https://via.placeholder.com/290x290",id_youtube:"dpw9EHDh2bM",id_bilibili:"av35219233/?p=1",id_niconico:"sm30379034"},{title:"video004",album:"album004",original:"Zun",arrange:"xiaobai",lyrics:"Coretania",illust:"magic girl",vocal:"Coretania",cover:"https://via.placeholder.com/290x290",id_youtube:"dpw9EHDh2bM",id_bilibili:"av35219233/?p=1",id_niconico:"sm30379034"},{title:"video005",album:"album005",original:"Zun",arrange:"xiaobai",lyrics:"Coretania",illust:"magic girl",vocal:"Coretania",cover:"https://via.placeholder.com/290x290",id_youtube:"dpw9EHDh2bM",id_bilibili:"av35219233/?p=1",id_niconico:"sm30379034"}]},131:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(130),o=function(){return(o=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var i in a=arguments[t])Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);return e}).apply(this,arguments)},r=t.n(l).a.map(function(e){return o({},e,{videoId:{bilibili:e.id_bilibili,niconico:e.id_niconico,youtube:e.id_youtube}})}),c=t(13),s=t(43),m=t(63),u=t(45),d=t(42),_=t(52),p=function(){return(p=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var i in a=arguments[t])Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);return e}).apply(this,arguments)},h=Object(n.createContext)(null);var b=Object(n.forwardRef)(function(e,a){var t=e.width,l=e.height,o=Object(n.useContext)(h),r=o.videoId,c={width:t,height:l,frameBorder:0,allowFullScreen:!0,type:"text/html",ref:a};switch(o.site){case"youtube":c.src="https://www.youtube.com/embed/"+r.youtube;break;case"bilibili":var s=r.bilibili.slice(2).split("/?p="),m=s[0],u=s[1];c.src="https://player.bilibili.com/player.html?aid="+m+"&page="+u}return i.a.createElement("iframe",p({},c,{className:"v-modal__embed"}))});function v(){var e=Object(n.useContext)(h),a=Object(n.useRef)(null);return i.a.createElement("main",{className:"video-modal__window"},i.a.createElement("div",{className:"video-modal__column--video"},i.a.createElement("div",{className:"video-modal__title-container"},i.a.createElement("h2",{className:"video-modal__title"},e.title)),i.a.createElement(b,{height:300,width:530,key:e.title,ref:a})),i.a.createElement("article",{className:"video-modal__column--description"},i.a.createElement("section",{className:"video-modal-description__section"},i.a.createElement("p",{className:"section__text"},i.a.createElement("a",{className:"clickable",onClick:function(e,a){var t=_.a.findIndex(function(a){return a.name===e});t<0?alert("The album can not be found"):null!==a.current&&(a.current.src=a.current.src,Object(m.a)(t))}.bind(null,e.album,a)},"『",e.album,"』"),"ss")),i.a.createElement("section",{className:"video-modal-description__section"},i.a.createElement("p",{className:"section__text"},"Original: ",e.original),i.a.createElement("p",{className:"section__text"},"Arrange: ",e.arrange),i.a.createElement("p",{className:"section__text"},"Lyric: ",e.lyrics),i.a.createElement("p",{className:"section__text"},"Illust: ",e.illust),i.a.createElement("p",{className:"section__text"},"Vocal: ",e.vocal)),i.a.createElement("section",{className:"video-modal-description__section video-modal-description__section--link"},i.a.createElement("p",{className:"section__text"},"Link"),i.a.createElement("p",{className:"section__text"},i.a.createElement("a",{target:"_blank",href:"https://www.bilibili.com/video/"+e.videoId.bilibili},"Bilibili")),i.a.createElement("p",{className:"section__text"},i.a.createElement("a",{target:"_blank",href:"https://www.nicovideo.jp/watch/"+e.videoId.niconico},"Niconico")),i.a.createElement("p",{className:"section__text"},i.a.createElement("a",{target:"_blank",href:"https://www.youtube.com/watch?v="+e.videoId.youtube},"Youtube")))))}function f(e){var a=e.contents,t=e.initialIdx,l=e.container,o=e.site,r=Object(n.useState)(t),c=r[0],m=r[1],_=i.a.useRef(null);return Object(s.a)(_,d.a.closeModal.bind(d.a,l),l),i.a.createElement(u.a,{prevLabel:c>0?a[c-1].title:"",nextLabel:c<a.length-1?a[c+1].title:"",handleNext:function(){return m(c+1)},handlePrev:function(){return m(c-1)},ref:_,className:"video-modal"},i.a.createElement(h.Provider,{value:p({},a[c],{site:o})},i.a.createElement(v,null)))}t(131);var g=function(e){var a=e.info,t=e.idx;return i.a.createElement("section",{className:"list__video"},i.a.createElement("div",{className:"video__cover clickable",onClick:function(e,a,t){var n=d.a.createFullscreenMask();Object(c.render)(i.a.createElement(f,{initialIdx:t,contents:e,site:a,container:n}),n),document.getElementsByTagName("body")[0].appendChild(n)}.bind(null,r,"bilibili",t)},i.a.createElement("img",{src:a.cover}),i.a.createElement("div",{className:"video__button--outer"},i.a.createElement("i",{className:"video__button--inner"}))),i.a.createElement("article",{className:"video__info"},i.a.createElement("h1",{className:"info__title"},a.title),i.a.createElement("p",{className:"indent info__album"},"『",a.album,"』"),i.a.createElement("p",{className:"indent info__others"},"Original: ",a.original),i.a.createElement("p",{className:"indent info__others"},"Arrange: ",a.arrange),i.a.createElement("p",{className:"indent info__others"},"Lyric: ",a.lyrics),i.a.createElement("p",{className:"indent info__others"},"Illust: ",a.illust),i.a.createElement("p",{className:"indent info__others"},"Vocal: ",a.vocal),i.a.createElement("div",{className:"indent info__urls"},i.a.createElement("i",{className:"urls__icon urls__icon--bilibili clickable"}),i.a.createElement("i",{className:"urls__icon urls__icon--niconico clickable"}),i.a.createElement("i",{className:"urls__icon urls__icon--youtube clickable"}))))};a.default=function(){return i.a.createElement("div",{className:"video__container"},r.map(function(e,a){return i.a.createElement(g,{info:e,idx:a,key:a})}))}},40:function(e,a,t){},41:function(e,a,t){"use strict";function n(e,a,t){return{get:function(){var e=t.value.bind(this);return Object.defineProperty(this,a,{value:e}),e}}}t.d(a,"a",function(){return n})},42:function(e,a,t){"use strict";var n=t(13),i=t(41),l=(t(40),function(e,a,t,n){var i,l=arguments.length,o=l<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,a,t,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(l<3?i(o):l>3?i(a,t,o):i(a,t))||o);return l>3&&o&&Object.defineProperty(a,t,o),o}),o=new(function(){function e(){this.historyCount=0,this.openCount=0,this.baseZIndex=999}return e.prototype.createFullscreenMask=function(){this.historyCount++,this.openCount++;var e=document.createElement("div");return e.style.zIndex=(this.baseZIndex+this.historyCount).toString(),e.classList.add("lt-modal__mask"),document.getElementsByTagName("body")[0].classList.add("modal-open"),e},e.prototype.closeModal=function(e){Object(n.unmountComponentAtNode)(e),this.openCount--,0===this.openCount&&document.getElementsByTagName("body")[0].classList.remove("modal-open"),e.parentNode.removeChild(e)},l([i.a],e.prototype,"createFullscreenMask",null),l([i.a],e.prototype,"closeModal",null),e}());a.a=o},43:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(0),i=t.n(n);function l(e,a,t){function n(t){null!==e.current&&(e.current.contains(t.target)||a())}i.a.useEffect(function(){return void 0===t&&(t=document),t.addEventListener("click",n),function(){t.removeEventListener("click",n)}},[])}},45:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=(t(40),i.a.forwardRef(function(e,a){var t=e.className,n=void 0===t?"":t,l=e.children,o=e.nextLabel,r=e.prevLabel,c=e.handlePrev,s=e.handleNext;return i.a.createElement("div",{ref:a,className:"lt-modal__window lt-modal__window--center lt-modal__window--nav "+n},l,i.a.createElement("div",{className:"nav__wrapper"},i.a.createElement("a",{onClick:c,className:"nav__button nav__button--previous clickable "+(""===r?"hide":"")},i.a.createElement("span",null,"← ",r)),i.a.createElement("a",{onClick:s,className:"nav__button nav__button--next clickable "+(""===o?"hide":"")},i.a.createElement("span",null,o," →"))))}));a.a=l},51:function(e,a,t){},52:function(e,a,t){"use strict";var n=t(62),i=function(){function e(e){var a,t,n,i,l,o;a=e.vocal,this.vocal=void 0===a?"":a,t=e.original,this.original=void 0===t?"":t,n=e.composer,this.composer=void 0===n?"":n,i=e.arrange,this.arrange=void 0===i?"":i,l=e.lyrics,this.lyrics=void 0===l?"":l,o=e.pv,this.pv=void 0===o?"":o}return e.prototype.merge=function(e,a){return""===this[e]&&""===this[a]?"":""===this[e]?this[a]:""===this[a]?this[e]:this[e]+" | "+this[a]},e}(),l=n.map(function(e){return{code:e.code,name:e.name,date:e.date,cover:e.cover,illustration:e.illustration,thanks:e.thanks,author:new i({}),productLink:e.product_link,tracks:e.tracks.map(function(e){return{title:e.title,length:e.length,link:e.link,hasLyrics:e.has_lyrics,author:new i({vocal:e.vocal,original:e.original,composer:e.composer,arrange:e.arrange,lyrics:e.lyrics})}})}});l.forEach(function(e){var a={};e.tracks.forEach(function(e){Object.keys(e.author).forEach(function(t){""===e.author[t]&&void 0!==e.author[t]||(void 0===a[t]?a[t]=[e.author[t]]:a[t].findIndex(function(a){return a===e.author[t]})<0&&a[t].push(e.author[t]))})}),Object.keys(a).forEach(function(t){void 0!==a[t]&&(e.author[t]=a[t].join(" | "))})});a.a=l},62:function(e){e.exports=[{name:"album001",code:"HATO001",cover:"https://via.placeholder.com/500x500",date:"2017-12-9",illustration:"TOMATO",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 001",vocal:"CoreTania",original:"original track 001",composer:"xxx",arrange:"xiaobai2",lyrics:"N-apoleon1",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 001",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!1}]},{name:"album002",code:"HATO002",date:"2017-12-12",cover:"https://via.placeholder.com/500x500",illustration:"TOMATO",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 004",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 005",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!1}]},{name:"album003",code:"HATO003",date:"2017-11-11",cover:"https://via.placeholder.com/500x500",illustration:"TOMATO",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 008",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!1},{title:"track 007",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0}]},{name:"album004",code:"HATO004",date:"2017-11-11",cover:"https://via.placeholder.com/500x500",illustration:"TOMATO",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 021",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 011",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0}]}]},63:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(13),o=t(43),r=t(45),c=t(42),s=t(52);t(40),t(51);function m(e){var a=e.links,t=e.container,l=Object(n.useRef)(null);return Object(o.a)(l,c.a.closeModal.bind(c.a,t)),i.a.createElement("ul",{ref:l,className:"lt-modal__window lt-modal__window--center purchase-modal__container"},i.a.createElement("li",{className:"purchase-modal__item"},i.a.createElement("a",{href:a.taobao,className:"purchase-modal__link"},i.a.createElement("i",{className:"purchase-modal__icon purchase-modal__icon--taobao"}),i.a.createElement("p",{className:"purchase-modal__region"},"中国大陆"))),i.a.createElement("li",{className:"purchase-modal__item"},i.a.createElement("a",{href:a.tora,className:"purchase-modal__link"},i.a.createElement("i",{className:"purchase-modal__icon purchase-modal__icon--tora"}),i.a.createElement("p",{className:"purchase-modal__region"},"日本"))))}t.d(a,"a",function(){return _});var u=function(e){var a=e.field,t=e.value;return i.a.createElement("li",{className:"album-info__author-item"},i.a.createElement("p",{className:"album-info__author album-info__author--field"},i.a.createElement("span",{className:"underlined"},a)),i.a.createElement("p",{className:"album-info__author album-info__author--value"},t))};function d(e){var a=e.initialIdx,t=e.container,d=Object(n.useState)(a),_=d[0],p=d[1],h=i.a.useRef(null);Object(o.a)(h,c.a.closeModal.bind(c.a,t),t);var b=s.a[_];return i.a.createElement(r.a,{prevLabel:_>0?s.a[_-1].name:"",nextLabel:_<s.a.length-1?s.a[_+1].name:"",handleNext:function(){return p(_+1)},handlePrev:function(){return p(_-1)},ref:h,className:"album-modal"},i.a.createElement("main",{className:"album-modal__window"},i.a.createElement("section",{className:"album-info__container"},i.a.createElement("div",{className:"album-info__column--left"},i.a.createElement("img",{src:b.cover,className:"album-info__cover"}),i.a.createElement("p",{className:"album-info__code"},b.code," ©Hearts Rounds 2017 All Rights Reserved.")),i.a.createElement("article",{className:"album-info__column--right"},i.a.createElement("header",{className:"album-info__header"},i.a.createElement("div",{className:"album-info__title-wrapper"},i.a.createElement("h2",{className:"album-info__title"},"『",b.name,"』"),i.a.createElement("time",{className:"album-info__time"},b.date)),i.a.createElement("i",{onClick:function(e){var a=c.a.createFullscreenMask();Object(l.render)(i.a.createElement(m,{links:e,container:a}),a),document.getElementsByTagName("body")[0].appendChild(a)}.bind(null,b.productLink),className:"album-info__buy clickable"})),i.a.createElement("ul",{className:"album-info__author-list"},i.a.createElement(u,{field:"Original",value:b.author.original}),i.a.createElement(u,{field:"Compose & Arrange",value:b.author.merge("composer","arrange")}),i.a.createElement(u,{field:"Lyrics",value:b.author.lyrics}),i.a.createElement(u,{field:"Vocal",value:b.author.vocal}),i.a.createElement(u,{field:"Illustration",value:b.illustration}),i.a.createElement(u,{field:"Special Thanks",value:b.thanks})))),i.a.createElement("section",{className:"track-info__container"},i.a.createElement("ul",{className:"track-info__list"}))))}function _(e){var a=c.a.createFullscreenMask();Object(l.render)(i.a.createElement(d,{initialIdx:e,container:a}),a),document.getElementsByTagName("body")[0].appendChild(a)}}}]);