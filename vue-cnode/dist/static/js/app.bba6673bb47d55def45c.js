webpackJsonp([10],{NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("fZjL"),a=t.n(o),c=t("4bK6"),i=t.n(c),u={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},u,!1,function(n){t("ymcE")},null,null).exports,s=t("/ocq"),l=t("NYxO");i.a.use(l.a);var m=new l.a.Store({state:{userInfo:{}},getters:{getUserInfo:function(n){return n.userInfo}},mutations:{setUserInfo:function(n,e){n.userInfo=e}},actions:{setUserInfo:function(n,e){(0,n.commit)("setUserInfo",e)}}});i.a.use(s.a);var f=function(n){t.e(3).then(function(){n(t("8hXn"))}.bind(null,t)).catch(t.oe)},p=new s.a({routes:[{path:"/",name:"home",component:f},{path:"/cnodevue",name:"cnodevue",component:f},{path:"/list",name:"list",component:function(n){Promise.all([t.e(0),t.e(1)]).then(function(){n(t("80bi"))}.bind(null,t)).catch(t.oe)}},{path:"/topic/:id",name:"topic",component:function(n){Promise.all([t.e(0),t.e(2)]).then(function(){n(t("cOqS"))}.bind(null,t)).catch(t.oe)}},{path:"/add",name:"add",component:function(n){Promise.all([t.e(0),t.e(5)]).then(function(){n(t("Y6A4"))}.bind(null,t)).catch(t.oe)},meta:{requiresAuth:!0}},{path:"/message",name:"message",component:function(n){Promise.all([t.e(0),t.e(7)]).then(function(){n(t("J4Wv"))}.bind(null,t)).catch(t.oe)},meta:{requiresAuth:!0}},{path:"/user/:loginname",name:"user",component:function(n){Promise.all([t.e(0),t.e(6)]).then(function(){n(t("nXOw"))}.bind(null,t)).catch(t.oe)}},{path:"/about",name:"about",component:function(n){Promise.all([t.e(0),t.e(8)]).then(function(){n(t("FBzZ"))}.bind(null,t)).catch(t.oe)}},{path:"/login",name:"login",component:function(n){Promise.all([t.e(0),t.e(4)]).then(function(){n(t("Quw4"))}.bind(null,t)).catch(t.oe)}},{path:"*",component:f}]});p.beforeEach(function(n,e,t){document.getElementById("overflow-control").style.overflow="auto",n.matched.some(function(n){return n.meta.requiresAuth})?m.state.userInfo.userId?t():t({path:"/login",query:{redirect:n.fullPath}}):t()});var h=p,d=t("mowP"),b=t.n(d);t("7t+N");i.a.config.productionTip=!1,window.sessionStorage.user&&m.dispatch("setUserInfo",JSON.parse(window.sessionStorage.user)),a()(b.a).forEach(function(n){return i.a.filter(n,b.a[n])}),new i.a({el:"#app",router:h,store:m,components:{App:r},template:"<App/>"})},mowP:function(n,e){},ymcE:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.bba6673bb47d55def45c.js.map