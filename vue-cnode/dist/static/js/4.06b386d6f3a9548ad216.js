webpackJsonp([4],{Quw4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mvHQ"),s=n.n(a),o=n("7t+N"),r=n.n(o),i={data:function(){return{token:""}},methods:{logon:function(){var e=this;if(""===this.token)return this.$alert("令牌格式错误,应为36位UUID字符串"),!1;r.a.ajax({type:"POST",url:"https://cnodejs.org/api/v1/accesstoken",data:{accesstoken:this.token},dataType:"json",success:function(t){var n={loginname:t.loginname,avatar_url:t.avatar_url,userId:t.id,token:e.token};window.window.sessionStorage.user=s()(n),e.$store.dispatch("setUserInfo",n);var a=decodeURIComponent(e.$route.query.redirect||"/");e.$router.push({path:a})},error:function(t){var n=JSON.parse(t.responseText);e.$alert(n.error_msg)}})}},components:{nvHead:n("Cz8s").a}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-page"},[n("nv-head",{attrs:{"page-type":"登录","need-add":!1,"need-res":!0}}),e._v(" "),n("section",{staticClass:"page-body"},[n("div",{staticClass:"label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],staticClass:"txt",attrs:{type:"text",placeholder:"Access Token",maxlength:"36"},domProps:{value:e.token},on:{input:function(t){t.target.composing||(e.token=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"label"},[n("a",{staticClass:"button",on:{click:e.logon}},[e._v("登录")])])])],1)},staticRenderFns:[]};var l=n("VU/8")(i,c,!1,function(e){n("t6Kc")},null,null);t.default=l.exports},mvHQ:function(e,t,n){e.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(e,t,n){var a=n("FeBl"),s=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},t6Kc:function(e,t){}});
//# sourceMappingURL=4.06b386d6f3a9548ad216.js.map