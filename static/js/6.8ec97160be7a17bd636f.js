webpackJsonp([6],{XTVN:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={mixins:[e("vVVX").a],props:["getLoader"],data:function(){return{currentPage:1,maxItemPerPage:19,lastPage:null}},computed:{getFistData:function(){return this.$store.state.FirstData?this.$store.state.FirstData.data:"NFD"},getUpFistData:function(){var t=this;return this.getFistData.filter(function(a,e){return e<t.currentPage*t.maxItemPerPage&&e>=(t.currentPage-1)*t.maxItemPerPage})},isMaxPage:function(){return this.currentPage>=this.getLastPage},getLastPage:function(){var t=Math.ceil(this.getFistData.length/this.maxItemPerPage);return this.lastPage=t}},methods:{SelectedMovie:function(t){var a=t;this.$store.commit("MutPlayerStat",!0),this.$store.dispatch("GET_PLAYER_DATA",a),this.$store.commit("MutLoaderDt",!0)}}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"ContMovies"},["NFM"===t.getFistData||void 0===t.getFistData?s("div",{staticClass:"BxMovie"},[s("div",{staticClass:"BxNotReady"},[t._v("\n        Not Found Movie\n      ")])]):t._e(),t._v(" "),"NFM"!==t.getFistData&&void 0!==t.getFistData?s("div",{staticClass:"BxMovie"},[t._l(t.getUpFistData,function(a,i){return s("div",{key:i,staticClass:"BxFrame",class:{BxPreload:t.getLoader},on:{click:function(e){return t.SelectedMovie(a.imdb)}}},[s("div",{staticClass:"BxFrame__Poster"},[a.poster?s("img",{attrs:{src:a.poster,alt:"poster"}}):s("img",{attrs:{src:e("bKuI"),alt:"poster"}})]),t._v(" "),s("div",{staticClass:"BxFrame__InfoUp"},[s("p",{staticClass:"BxFrame__InfoUp--quality"},[t._v(t._s(t._f("NotEmpty")(a.quality)))]),t._v(" "),s("div",{staticClass:"BxFrame__InfoUp--rating"},[s("i",{staticClass:"fa fa-star"}),t._v(" "),s("p",[t._v(t._s(t._f("NotEmpty")(a.rating)))])])]),t._v(" "),s("div",{staticClass:"BxFrame__InfoBottom"},[s("span",{staticClass:"BxFrame__InfoBottom--Titles"},[s("p",[t._v(t._s(t._f("NotEmpty")(a.title)))]),t._v(" "),s("p",[t._v("( "+t._s(t._f("NotEmpty")(a.year))+" )")])])])])}),t._v(" "),t._l(5,function(t,a){return s("div",{key:"A"+a,staticClass:"BxFrame",staticStyle:{visibility:"hidden",height:"20px !important","margin-bottom":"0 !important","margin-top":"0 !important"}})})],2):t._e(),t._v(" "),"NFM"!==t.getFistData&&void 0!==t.getFistData?s("div",{staticClass:"BXpaginations"},[s("v-app",[s("v-pagination",{attrs:{color:"#4dcba1",dark:"",circle:"",length:t.getLastPage},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1)],1):t._e()])},staticRenderFns:[]},r=e("VU/8")(s,i,!1,null,null,null);a.default=r.exports},bKuI:function(t,a,e){t.exports=e.p+"static/img/opss.c65cc5a.png"},vVVX:function(t,a,e){"use strict";e.d(a,"a",function(){return s});var s={filters:{NotEmpty:function(t){return t||"—"}}}}});
//# sourceMappingURL=6.8ec97160be7a17bd636f.js.map