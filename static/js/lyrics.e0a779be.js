(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{370:function(i,e,a){"use strict";function t(i,e,a){return{get:function(){var i=a.value.bind(this);return Object.defineProperty(this,e,{value:i}),i}}}a.d(e,"a",function(){return t})},372:function(i,e,a){"use strict";var t=a(370),r=function(i,e,a,t){var r,n=arguments.length,o=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(i,e,a,t);else for(var c=i.length-1;c>=0;c--)(r=i[c])&&(o=(n<3?r(o):n>3?r(e,a,o):r(e,a))||o);return n>3&&o&&Object.defineProperty(e,a,o),o},n=function(){function i(i){var e,a,t,r,n,o,c;e=i.vocal,this.vocal=void 0===e?"":e,a=i.original,this.original=void 0===a?"":a,t=i.composer,this.composer=void 0===t?"":t,r=i.arrange,this.arrange=void 0===r?"":r,n=i.lyrics,this.lyrics=void 0===n?"":n,o=i.pv,this.pv=void 0===o?"":o,c=i.illustrator,this.illustrator=void 0===c?"":c}return i.prototype.merge=function(i,e){return""===this[i]&&""===this[e]?"":""===this[i]?this[e]:""===this[e]?this[i]:this[i]+" | "+this[e]},r([t.a],i.prototype,"merge",null),i}();e.a=n},373:function(i,e,a){"use strict";a.d(e,"a",function(){return t});var t=function(){return function(i,e,a){this.music=i,this.image=e,this.videoId=a}}()},377:function(i){i.exports=[{name:"album001",code:"HATO001",cover:"https://via.placeholder.com/500x500",date:"2017-12-9",thanks:"Renka",product_link:{taobao:"https://www.taobao.com"},tracks:[{title:"track 001",vocal:"CoreTania",original:"original track 001",composer:"xxx",arrange:"xiaobai2",pv:"some_one",lyrics:"N-apoleon1",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 002",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0}]},{name:"album002",code:"HATO002",date:"2017-12-12",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 004",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 005",vocal:"CoreTania",original:"original track 001",pv:"some_one",illustrator:"TOMATO",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!1}]},{name:"album003",code:"HATO003",date:"2017-11-11",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 008",vocal:"CoreTania",original:"original track 001",illustrator:"TOMATO",arrange:"xiaobai",lyrics:"N-apoleon",pv:"some_one",length:"04:32",link:"mp3_link",has_lyrics:!1},{title:"track 007",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0}]},{name:"album004",code:"HATO004",date:"2017-11-11",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 021",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",composer:"composer",illustrator:"TOMATO",lyrics:"N-apoleon",length:"04:32",pv:"some_one",link:"mp3_link",has_lyrics:!0},{title:"track 011",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",pv:"some_one",has_lyrics:!0}]}]},378:function(i,e,a){"use strict";var t=a(377),r=a(372),n=function(){function i(i,e,a,t,r,n,o){this.code=i,this.name=e,this.date=a,this.cover=t,this.thanks=r,this.purchaseLink=n,this.tracks=o,this.author=this.generateAuthor()}return i.prototype.generateAuthor=function(){var i=new Map;this.tracks.forEach(function(e){Object.keys(e.author).forEach(function(a){""===e.author[a]&&void 0!==e.author[a]||(void 0===i.get(a)?i.set(a,[e.author[a]]):i.get(a).findIndex(function(i){return i===e.author[a]})<0&&i.get(a).push(e.author[a]))})});for(var e=new r.a({}),a=i.entries(),t=a.next().value;void 0!==t;){var n=t[0],o=t[1];void 0!==o&&(e[n]=o.join(" | ")),t=a.next().value}return e},i}(),o=a(373),c=function(){return function(i,e,a,t,r){void 0===t&&(t=""),void 0===r&&(r=!1),this.title=i,this.length=e,this.author=a,this.hasLyrics=r,this.links=new o.a,this.links.music=t}}(),l=t.map(function(i){return new n(i.code,i.name,i.date,i.cover,i.thanks,i.product_link,i.tracks.map(function(i){return new c(i.title,i.length,new r.a(i),i.link,i.has_lyrics)}))});e.a=l},380:function(i,e,a){"use strict";var t=a(381),r=a.n(t),n=a(373),o=function(){return function(i,e,a,t,r,o,c,l){this.cover=i,this.title=e,this.principle=a,this.author=t,this.description=c,this.hasLyrics=l,this.links=new n.a,this.links.videoId=r,this.links.music=o}}(),c=a(372),l=function(){return(l=Object.assign||function(i){for(var e,a=1,t=arguments.length;a<t;a++)for(var r in e=arguments[a])Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r]);return i}).apply(this,arguments)},s=r.a.map(function(i,e){return new o(i.cover,i.title,{name:i.principle,link:i.principle_url},new c.a(l({},i)),{bilibili:i.video_bilibili,niconico:i.video_niconico,youtube:i.video_youtube},i.ext_link,{top:i.info_1.split(";"),bottom:i.info_2},"true"===i.has_lyrics)});e.a=s},381:function(i,e){i.exports=[{principle:"work001",principle_url:"https://weibo.com/u/6500013650",title:"title1",cover:"https://via.placeholder.com/270x150",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"收录于专辑bbbbb",video_bilibili:"av35219233/?p=1",video_niconico:"",video_youtube:"sm30379034",original:"CoreTania",compose:"magic girl",arrange:"CoreTania",lyric:"CoreTania",illust:"CoreTania",vocal:"CoreTania",pv:"CoreTania",has_lyrics:"true",ext_link:""},{principle:"work002",principle_url:"",title:"title2",cover:"https://via.placeholder.com/190x190",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"",video_bilibili:"av2739129/?p=2",video_niconico:"dpw9EHDh2bM",video_youtube:"",original:"",compose:"magic girl",arrange:"CoreTania",lyric:"CoreTania",illust:"",vocal:"CoreTania",pv:"",has_lyrics:"true",ext_link:"https://weibo.com/u/6500013650"},{principle:"work003",principle_url:"https://weibo.com/u/6500013650",title:"title1",cover:"",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"收录于专辑bbbbb",video_bilibili:"av35219233/?p=1",video_niconico:"",video_youtube:"sm30379034",original:"CoreTania",compose:"magic girl",arrange:"CoreTania",lyric:"",illust:"CoreTania",vocal:"CoreTania",pv:"CoreTania",has_lyrics:"false",ext_link:""},{principle:"work004",principle_url:"",title:"title3",cover:"https://via.placeholder.com/190x190",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"收录于专辑bbbbb",video_bilibili:"av35219233/?p=1",video_niconico:"dpw9EHDh2bM",video_youtube:"",original:"CoreTania",compose:"",arrange:"CoreTania",lyric:"CoreTania",illust:"",vocal:"",pv:"",has_lyrics:"true",ext_link:"https://weibo.com/u/6500013650"},{principle:"work005",principle_url:"https://weibo.com/u/6500013650",title:"title4",cover:"https://via.placeholder.com/270x150",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"",video_bilibili:"av35219233/?p=1",video_niconico:"dpw9EHDh2bM",video_youtube:"sm30379034",original:"CoreTania",compose:"magic girl",arrange:"",lyric:"",illust:"CoreTania",vocal:"",pv:"CoreTania",has_lyrics:"false",ext_link:"https://weibo.com/u/6500013650"}]},391:function(i,e,a){var t={"./HATO001/01.csv":[404,9],"./HATO001/02.csv":[405,10],"./HATO002/01.csv":[406,11],"./HATO003/01.csv":[407,12],"./HATO004/01.csv":[408,13],"./HATO004/02.csv":[409,14],"./works/001.csv":[410,15],"./works/002.csv":[411,16],"./works/004.csv":[412,17]};function r(i){var e=t[i];return e?a.e(e[1]).then(function(){var i=e[0];return a.t(i,7)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e})}r.keys=function(){return Object.keys(t)},r.id=391,i.exports=r},392:function(i,e,a){},419:function(i,e,a){"use strict";a.r(e);var t=a(1),r=a.n(t),n=a(365),o=a(378),c=a(380);a(392);function l(i){var e=i.info;return null===e?r.a.createElement("article",null):r.a.createElement("article",{className:"track-info__container"},r.a.createElement("header",{className:"track-info__header"},r.a.createElement("h2",{className:"track-info__title page__title"},e.title),r.a.createElement("div",{className:"track-info__links"},void 0!==e.links.music&&r.a.createElement("a",{href:e.links.music,target:"_blank",className:"track-info__link track-info__link--music"}),void 0!==e.links.videoId&&r.a.createElement("a",{href:"https://www.bilibili.com/video/"+e.links.videoId.bilibili,target:"_blank",className:"track-info__link track-info__link--video"}),void 0!==e.links.image&&r.a.createElement("a",{className:"track-info__link track-info__link--cover"}))),r.a.createElement("section",{className:"track-info__author"},r.a.createElement("p",{className:"author__field"},"Original: ",e.author.original),r.a.createElement("p",{className:"author__field"},"Arrange: ",e.author.arrange),r.a.createElement("p",{className:"author__field"},"Lyric: ",e.author.lyrics),r.a.createElement("p",{className:"author__field"},"Vocal: ",e.author.vocal)))}a.d(e,"default",function(){return h});var s=function(i){var e=i.lyrics;return r.a.createElement("article",{className:"lyrics__body",id:"content"},["left","right"].map(function(i){return r.a.createElement("ul",{className:"lyrics__list lyrics__list--"+i,key:i},e.map(function(e){return e[i]}).map(function(i,e){return r.a.createElement("p",{className:"lyrics__line",key:e},i)}))}))};function u(i){var e=i.albumCode,a=void 0===e?"":e,t=i.trackId,r=void 0===t?"":t;return[o.a.findIndex(function(i){return i.code.toLowerCase()===a.toLowerCase()}),parseInt(r,10)-1]}function h(i){var e=Object(t.useState)([]),h=e[0],p=e[1],v=Object(t.useState)(null),m=v[0],d=v[1],f=Object(t.useState)(!1),_=f[0],k=f[1];function b(){var e=u(i.match.params),t=e[0],r=e[1];(function(i,e){var t=("00"+(e+1)).slice(-3);return"works"!==i&&(t=t.slice(-2)),new Promise(function(e,r){a(391)("./"+i+"/"+t+".csv").then(function(i){var a=i.default;return e(a)}).catch(r)})})("works"===i.match.params.albumCode?"works":o.a[t].code,r).then(function(i){p(i)}).catch(function(i){console.error(i),k(!0)})}return Object(t.useEffect)(function(){if(!function(i){var e=i.albumCode,a=void 0===e?"":e,t=i.trackId,r=void 0===t?"":t;if("works"===a){var n=parseInt(r,10);return!0===c.a[n-1].hasLyrics}if(a.toLowerCase()!==a)return!1;var l=o.a.findIndex(function(i){return i.code.toLowerCase()===a});if(l<0)return!1;if(2!==r.length)return!1;if(""===r||isNaN(r))return!1;var s=parseFloat(r)-1;return s===Math.floor(s)&&void 0!==o.a[l].tracks[s]&&!0===o.a[l].tracks[s].hasLyrics}(i.match.params))return console.error("url not valid"),void k(!0);!function(){if("works"===i.match.params.albumCode){var e=parseInt(i.match.params.trackId)-1;d(c.a[e])}else{var a=u(i.match.params),t=a[0];e=a[1],d(o.a[t].tracks[e])}}(),b()},[]),_?r.a.createElement(n.a,{to:"/404"}):r.a.createElement("main",{className:"lyrics__container"},r.a.createElement("div",{className:"background"},r.a.createElement(l,{info:m}),r.a.createElement(s,{lyrics:h})))}}}]);