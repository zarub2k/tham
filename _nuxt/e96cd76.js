(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(t,e,n){var map={"./flutter.png":219,"./linkedin.png":220,"./tham.png":218,"./twitter.png":221,"./youtube.png":222};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=217},218:function(t,e,n){t.exports=n.p+"img/tham.c587d5e.png"},219:function(t,e,n){t.exports=n.p+"img/flutter.e62fb5a.png"},220:function(t,e,n){t.exports=n.p+"img/linkedin.f53c4c9.png"},221:function(t,e,n){t.exports=n.p+"img/twitter.b7cef21.png"},222:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGsSURBVFiF7dbPahNRFMfxzwzB4p9UowtdWWPoQoVCH6ArcREQ+gYFu+yTdNsHcOMr9CkEuxDELEpNFnWh2JamJmCsHBeTtCkoZCZDs2i/cOAyc+89v+H8Bn5cc9VJJtkU3MUt3Bx7fAO3h+seBmPv+ugndCcWEDzGGzxDHQu4M9akKN2hwC9o4zPeJXw92xG8CrpBXFIdBy8hCaro4P6UX5qXA9RTrM6gOTzAaoqlGTQfsZTi+QwFvEjxKNeRRoP1ddK0DAEPBZ1cDl5ejoiI2NmJWFmZ9m/oCA4KCRixvR1RrxcVcCjoTSUgIqLfj9jcjKhW8wroCU6nFjBifz9ibS0iSSa973cpTjpjbo5aLY9Bk3JGMBhEbG1FzM/nHcHPckzYaBQ14Q9Bu5CAViui2SzaeFR7gg+5Di0uRmxsRFQq0zaP4H0F33IZbXc3q3L4nqJV1m0FaKX4OEMBn5LI8l4btUtufownIGgGJyWYatLqBa+5GEoXnIfSp7KQek+WfqfhDw5lIbQj89zbhL0LAv5HnMfv0Ygqshz5L05wOlwfyaL5r6LKr7ka/AXL2d7/fwgUogAAAABJRU5ErkJggg=="},223:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{email:""}},methods:{onSubscribe:function(){console.log("Email subscribed successfully!"),this.email=""}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"text-center w-full p-10 border inline bg-gradient-to-r from-teal-400 to-blue-500"},[n("h2",{staticClass:"mb-5 text-3xl text-white"},[t._v("Technology and growth hacks for your inbox")]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w-1/2 h-10 p-2 border-gray-300 focus:border-blue-200 text-gray-600",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("button",{staticClass:"bg-teal-900 p-2 text-white",on:{click:t.onSubscribe}},[t._v("Subscribe")])])])])}),[],!1,null,null,null);e.default=component.exports},248:function(t,e,n){"use strict";n.r(e);n(26);var r,o,c,l,h=n(3),d={data:function(){return{email:"",total:0,page:1,articles:[],recent:{},topPicks:[],hasMore:!0}},created:function(){this.onTotal(),this.onRecent(),this.onTopRated(),this.onData(),console.log("Total items: "+this.total)},methods:{onMore:function(){console.log("Enters onMore() > "+this.page),this.page++,this.onData(this.page)},onTotal:(l=Object(h.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Enters onTotal()"),t.next=3,this.$content("articles").only([]).where({published:!0}).fetch();case 3:e=t.sent.length,this.total=e;case 5:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),onData:(c=Object(h.a)(regeneratorRuntime.mark((function t(e){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Enters onData()"),n=6*e,t.next=5,this.$content("articles").only(["title","description","thumbnail","slug","author"]).where({published:!0}).sortBy("publishedOn","desc").limit(6).skip(n).fetch();case 5:for(i in r=t.sent)this.articles.push(r[i]);this.hasMore=r.length>0;case 8:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)}),onRecent:(o=Object(h.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content("articles").only(["title","description","thumbnail","slug","author"]).sortBy("publishedOn","desc").limit(1).fetch();case 2:e=t.sent,this.recent=e[0];case 4:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),onTopRated:(r=Object(h.a)(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content("articles").only(["title","slug"]).where({rated:!0}).sortBy("publishedOn","desc").limit(4).fetch();case 2:for(i in e=t.sent)this.topPicks.push(e[i]);case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},f=n(12),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"grid grid grid-cols-3 gap-4 p-2"},[t.recent.thumbnail?r("div",{staticClass:"col-span-2 shadow-md"},[r("figure",{},[r("img",{staticClass:"object-cover w-full",attrs:{src:n(217)("./"+t.recent.thumbnail),alt:"Elephant at sunset"}}),t._v(" "),r("figcaption",{staticClass:"p-2"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.recent.slug}}}},[r("h1",{staticClass:"text-2xl text-indigo-700"},[t._v(t._s(t.recent.title))])]),t._v(" "),r("div",{staticClass:"text-s text-gray-600 leading-relaxed"},[t._v(t._s(t.recent.description)+" ")])],1)])]):t._e(),t._v(" "),r("div",{staticClass:"shadow-md border p-2"},[r("strong",[t._v("Top Picks")]),t._v(" "),t._l(t.topPicks,(function(e){return r("div",{key:e.slug,staticClass:"p-8 border mt-2"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:e.slug}}}},[r("h1",{staticClass:"text-xl text-indigo-500"},[t._v(t._s(e.title))])])],1)}))],2)]),t._v(" "),r("div",{staticClass:"p-2 mt-2"},[r("Subscribe")],1),t._v(" "),r("p",{staticClass:"p-2 text-indigo-500 text-2xl"},[t._v("\n    Recently published\n  ")]),t._v(" "),t.articles.length>0?r("div",{staticClass:"grid grid grid-cols-3 gap-4 p-2"},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"border shadow-md"},[r("figure",{},[r("img",{attrs:{src:n(217)("./"+article.thumbnail),alt:"Elephant at sunset"}}),t._v(" "),r("figcaption",{staticClass:"p-2 text-s"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("h1",{staticClass:"text-xl text-indigo-700"},[t._v(t._s(article.title))])]),t._v(" "),r("div",{staticClass:"text-gray-600 leading-relaxed"},[t._v(t._s(article.description)+" ")])],1)])])})),0):t._e(),t._v(" "),t.hasMore?r("div",{staticClass:"text-center mt-2"},[r("button",{staticClass:"bg-teal-900 p-2 text-white",on:{click:t.onMore}},[t._v("Show more")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Subscribe:n(223).default})}}]);