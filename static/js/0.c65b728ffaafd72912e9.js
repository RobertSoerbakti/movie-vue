webpackJsonp([0],{B90M:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={mixins:[e("vVVX").a],props:["getLoader"],data:function(){return{iframe:{src:"https://database.gdriveplayer.us/player.php?imdb=tt6193408",loaded:!1}}},methods:{load:function(){this.iframe.loaded=!0}},computed:{getPlayerData:function(){return this.$store.state.PlayerData?this.$store.state.PlayerData.data:"NTW"}}},i={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"BxPlayer"},["NTW"!==a.getPlayerData?e("div",{staticClass:"BxPlayer__BxLeft"},[e("iframe",{directives:[{name:"show",rawName:"v-show",value:a.iframe.loaded,expression:"iframe.loaded"}],ref:"frame",staticClass:"BxFrame",attrs:{src:a.getPlayerData.player_url,frameborder:"0",allowfullscreen:"true"},on:{load:a.load}}),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.iframe.loaded,expression:"!iframe.loaded"}],staticClass:"BxFrame",class:{BxPreload:a.getLoader},staticStyle:{border:"none !important",display:"flex","justify-content":"center","align-items":"center"}},[e("v-progress-circular",{attrs:{size:80,width:10,color:"#4dcba1",indeterminate:""}})],1)]):a._e(),a._v(" "),"NTW"!==a.getPlayerData||a.getLoader?a._e():e("div",{staticClass:"BxPlayer__BxCenter"},[a._v("\n      Something Wrong, "),e("br"),a._v(" Please try again Later\n   ")]),a._v(" "),"NTW"!==a.getPlayerData?e("div",{staticClass:"BxPlayer__BxRight",class:{BxPreload:a.getLoader}},[e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Title")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Title)))])]),a._v(" "),e("div",{staticClass:"BxFusion"},[e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Year")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Year)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Released")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Released)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Runtime")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Runtime)))])])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Rated")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Rated)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Genre")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Genre)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Director")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Director)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Writer")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Writer)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Actors")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Actors)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Plot")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Plot)))])]),a._v(" "),e("div",{staticClass:"BxFusion"},[e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Language")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Language)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Country")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Country)))])])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Awards")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Awards)))])]),a._v(" "),e("div",{staticClass:"BxFusion"},[e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("imdbRating")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.imdbRating)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("imdbVotes")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.imdbVotes)))])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Type")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Type)))])])]),a._v(" "),e("div",{staticClass:"BxPlayer__BxRight--BxDetail"},[e("span",[a._v("Production")]),a._v(" "),e("span",[a._v(a._s(a._f("NotEmpty")(a.getPlayerData.Production)))])])]):a._e()])},staticRenderFns:[]};var _=e("VU/8")(s,i,!1,function(a){e("DU0x")},null,null);t.default=_.exports},DU0x:function(a,t){},vVVX:function(a,t,e){"use strict";e.d(t,"a",function(){return s});var s={filters:{NotEmpty:function(a){return a||"—"}}}}});
//# sourceMappingURL=0.c65b728ffaafd72912e9.js.map