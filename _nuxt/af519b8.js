(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{215:function(t,e,r){t.exports=r.p+"img/tham.c587d5e.png"},216:function(t,e,r){var map={"./flutter.png":219,"./tham.png":215};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=216},219:function(t,e,r){t.exports=r.p+"img/flutter.e62fb5a.png"},238:function(t,e,r){"use strict";r.r(e);r(26);var n=r(3),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","description","thumbnail","slug","author"]).sortBy("createdAt","desc").limit(6).fetch();case 3:return c=e.sent,l=c[0],e.next=7,r("articles",n.slug).only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 7:return(o=e.sent).push({title:"Added 1"}),e.abrupt("return",{articles:c,recent:l,topPicks:o});case 10:case"end":return e.stop()}}),e)})))()}},l=r(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"p-3 px-10"},[n("div",{staticClass:"grid grid grid-cols-3 gap-4 p-2"},[n("div",{staticClass:"col-span-2 shadow-md"},[n("figure",{},[n("img",{attrs:{src:r(216)("./"+t.recent.thumbnail),alt:"Elephant at sunset"}}),t._v(" "),n("figcaption",{staticClass:"p-2"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.recent.slug}}}},[n("h1",{staticClass:"text-2xl text-indigo-700"},[t._v(t._s(t.recent.title))])]),t._v(" "),n("div",{staticClass:"text-s text-gray-600 leading-relaxed"},[t._v(t._s(t.recent.description)+" ")])],1)])]),t._v(" "),n("div",{staticClass:"shadow-md border p-2"},[n("strong",[t._v("Top Picks")]),t._v(" "),t._l(t.topPicks,(function(e){return n("div",{key:e.slug,staticClass:"p-8 border mt-2"},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2)]),t._v(" "),n("div",{staticClass:"grid grid grid-cols-3 gap-4 p-2"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"border shadow-md"},[n("figure",{},[n("img",{attrs:{src:r(216)("./"+article.thumbnail),alt:"Elephant at sunset"}}),t._v(" "),n("figcaption",{staticClass:"p-2 text-s"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("h1",{staticClass:"text-xl text-indigo-700"},[t._v(t._s(article.title))])]),t._v(" "),n("div",{staticClass:"text-gray-600 leading-relaxed"},[t._v(t._s(article.description)+" ")])],1)])])})),0),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center p-2 mt-5"},[e("div",{staticClass:"text-center w-full p-10 border inline bg-gradient-to-r from-teal-400 to-blue-500"},[e("h2",{staticClass:"mb-5 text-3xl text-white"},[this._v("Technology and growth hacks for your inbox")]),this._v(" "),e("input",{staticClass:"w-1/2 h-10 p-2 border-gray-300 focus:border-blue-200 text-gray-600",attrs:{type:"text"}})])])}],!1,null,null,null);e.default=component.exports}}]);