(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(t,e,r){t.exports=r.p+"img/e62fb5a.png"},235:function(t,e,r){"use strict";r.r(e);r(25);var n=r(3),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","description","thumbnail","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return c=e.sent,l=c[0],e.next=7,r("articles",n.slug).only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 7:return(o=e.sent).push({title:"Added 1"}),e.abrupt("return",{articles:c,recent:l,topPicks:o});case 10:case"end":return e.stop()}}),e)})))()}},l=r(26),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"p-3 px-10"},[n("div",{staticClass:"grid grid grid-cols-3 gap-4 p-2"},[n("div",{staticClass:"col-span-2 shadow-md"},[n("figure",{},[n("img",{attrs:{src:t.recent.thumbnail,alt:"Elephant at sunset"}}),t._v(" "),n("figcaption",{staticClass:"p-2"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.recent.slug}}}},[n("h1",{staticClass:"text-2xl text-indigo-700"},[t._v(t._s(t.recent.title))])]),t._v(" "),n("div",{staticClass:"text-s text-gray-600 leading-relaxed"},[t._v(t._s(t.recent.description)+" ")])],1)])]),t._v(" "),n("div",{staticClass:"shadow-md"},[n("strong",[t._v("Top Picks")]),t._v(" "),t._l(t.topPicks,(function(e){return n("div",{key:e.slug,staticClass:"p-8 border"},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2)]),t._v(" "),n("div",{staticClass:"grid grid grid-cols-3 gap-4 p-2"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"border"},[n("figure",{staticClass:"shadow-xl"},[n("img",{attrs:{src:r(217),alt:"Elephant at sunset"}}),t._v(" "),n("figcaption",{staticClass:"p-2 text-s"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("h1",{staticClass:"text-xl text-indigo-700"},[t._v(t._s(article.title))])]),t._v(" "),n("div",{staticClass:"text-gray-600 leading-relaxed"},[t._v(t._s(article.description)+" ")])],1)])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);