(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{364:function(t,a,e){"use strict";function i(t,a,e){return{get:function(){var t=e.value.bind(this);return Object.defineProperty(this,a,{value:t}),t}}}e.d(a,"a",function(){return i})},366:function(t,a,e){"use strict";var i=e(364),o=function(t,a,e,i){var o,r=arguments.length,n=r<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(n=(r<3?o(n):r>3?o(a,e,n):o(a,e))||n);return r>3&&n&&Object.defineProperty(a,e,n),n},r=function(){function t(t){var a,e,i,o,r,n,c;a=t.vocal,this.vocal=void 0===a?"":a,e=t.original,this.original=void 0===e?"":e,i=t.composer,this.composer=void 0===i?"":i,o=t.arrange,this.arrange=void 0===o?"":o,r=t.lyrics,this.lyrics=void 0===r?"":r,n=t.pv,this.pv=void 0===n?"":n,c=t.illustrator,this.illustrator=void 0===c?"":c}return t.prototype.merge=function(t,a){return""===this[t]&&""===this[a]?"":""===this[t]?this[a]:""===this[a]?this[t]:this[t]+" | "+this[a]},o([i.a],t.prototype,"merge",null),t}();a.a=r},367:function(t,a,e){"use strict";e.d(a,"a",function(){return i});var i=function(){return function(t,a,e){this.music=t,this.image=a,this.videoId=e}}()},371:function(t){t.exports=[{name:"album001",code:"HATO001",cover:"https://via.placeholder.com/500x500",date:"2017-12-9",thanks:"Renka",product_link:{taobao:"https://www.taobao.com"},tracks:[{title:"track 001",vocal:"CoreTania",original:"original track 001",composer:"xxx",arrange:"xiaobai2",pv:"some_one",lyrics:"N-apoleon1",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 002",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0}]},{name:"album002",code:"HATO002",date:"2017-12-12",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 004",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 005",vocal:"CoreTania",original:"original track 001",pv:"some_one",illustrator:"TOMATO",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!1}]},{name:"album003",code:"HATO003",date:"2017-11-11",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 008",vocal:"CoreTania",original:"original track 001",illustrator:"TOMATO",arrange:"xiaobai",lyrics:"N-apoleon",pv:"some_one",length:"04:32",link:"mp3_link",has_lyrics:!1},{title:"track 007",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0}]},{name:"album004",code:"HATO004",date:"2017-11-11",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 021",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",composer:"composer",illustrator:"TOMATO",lyrics:"N-apoleon",length:"04:32",pv:"some_one",link:"mp3_link",has_lyrics:!0},{title:"track 011",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",pv:"some_one",has_lyrics:!0}]}]},372:function(t,a,e){"use strict";var i=e(371),o=e(366),r=function(){function t(t,a,e,i,o,r,n){this.code=t,this.name=a,this.date=e,this.cover=i,this.thanks=o,this.purchaseLink=r,this.tracks=n,this.author=this.generateAuthor()}return t.prototype.generateAuthor=function(){var t=new Map;this.tracks.forEach(function(a){Object.keys(a.author).forEach(function(e){""===a.author[e]&&void 0!==a.author[e]||(void 0===t.get(e)?t.set(e,[a.author[e]]):t.get(e).findIndex(function(t){return t===a.author[e]})<0&&t.get(e).push(a.author[e]))})});for(var a=new o.a({}),e=t.entries(),i=e.next().value;void 0!==i;){var r=i[0],n=i[1];void 0!==n&&(a[r]=n.join(" | ")),i=e.next().value}return a},t}(),n=e(367),c=function(){return function(t,a,e,i,o){void 0===i&&(i=""),void 0===o&&(o=!1),this.title=t,this.length=a,this.author=e,this.hasLyrics=o,this.links=new n.a,this.links.music=i}}(),l=i.map(function(t){return new r(t.code,t.name,t.date,t.cover,t.thanks,t.product_link,t.tracks.map(function(t){return new c(t.title,t.length,new o.a(t),t.link,t.has_lyrics)}))});a.a=l},394:function(t,a,e){"use strict";e.r(a);var i=e(1),o=e.n(i),r=e(372),n=(e(395),function(t){var a=t.name,e=t.cover,i=t.code,r=t.idx;return o.a.createElement("li",{className:"album__item album__item--"+r%3+" clickable"},o.a.createElement("a",{className:"album__link",href:"/discography/album/"+i,target:"_blank"},o.a.createElement("img",{className:"item__cover",src:e}),o.a.createElement("h4",{className:"item__title"},"『",a,"』")))});a.default=function(){return o.a.createElement("ul",{className:"album__list"},r.a.map(function(t,a){return o.a.createElement(n,{name:t.name,cover:t.cover,code:t.code,key:t.code,idx:a})}))}},395:function(t,a,e){}}]);