webpackJsonp([9],{"PDh+":function(e,t){},"j3r+":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={components:{Home:function(){return i.e(7).then(i.bind(null,"M8hc"))},Search:function(){return i.e(6).then(i.bind(null,"XTVN"))}},props:["getLoader","getLabelMovie"],mounted:function(){this.LoadList()},methods:{LoadList:function(){this.$store.dispatch("GET_FIRSTDATA",1),this.$store.commit("MutLoaderDt",!0)}},watch:{getLabelMovie:function(e){"Newest Movies"===e&&this.$store.commit("MutValSearch",null)}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ContainerMovie"},["Newest Movies"==this.getLabelMovie?t("Home",{attrs:{getLoader:this.getLoader}}):this._e(),this._v(" "),"Search Result"==this.getLabelMovie?t("Search",{attrs:{getLoader:this.getLoader}}):this._e()],1)},staticRenderFns:[]};var s=i("VU/8")(n,o,!1,function(e){i("PDh+")},null,null);t.default=s.exports}});
//# sourceMappingURL=9.747330a91426ea23c948.js.map