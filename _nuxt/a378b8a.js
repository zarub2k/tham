(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{237:function(t,e,r){"use strict";r.r(e);r(25);var n=r(3),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","description","img","slug","author"]).sortBy("createdAt","asc").fetch();case 3:return c=e.sent,e.abrupt("return",{articles:c});case 5:case"end":return e.stop()}}),e)})))()}},l=r(26),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Blog Posts")]),t._v(" "),r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("img",{attrs:{src:article.img}}),t._v(" "),r("div",[r("h2",[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"text-gray-600"},[t._v(t._s(article.description))])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);