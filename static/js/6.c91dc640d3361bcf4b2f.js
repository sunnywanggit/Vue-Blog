webpackJsonp([6],{R6sS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ZYmg"),a={data:function(){return{blogId:null,title:"",description:"",content:"",atIndex:!1,titleMax:"",descriptMax:"",contentLength:""}},created:function(){var t=this;this.blogId=this.$route.params.blogId,i.a.getDetail({blogId:this.blogId}).then(function(e){t.title=e.data.title,t.content=e.data.content,t.description=e.data.description,t.atIndex=e.data.atIndex,t.titleMax=20-e.data.title.length,t.descriptMax=100-e.data.description.length,t.contentLength=e.data.content.length})},methods:{onEdit:function(){var t=this;i.a.updateBlog({blogId:this.blogId},{title:this.title,description:this.description,content:this.content,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})},titleInput:function(){var t=this.title.length;this.titleMax=20-t,0===this.titleMax&&this.$message.warning("字数太多了哦")},descriptInput:function(){var t=this.description.length;this.descriptMax=100-t,0===this.descriptMax&&this.$message.warning("字数太多了哦")},contentInput:function(){this.contentLength=this.content.length}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("h1",[t._v("编辑文章")]),t._v(" "),n("h3",[t._v("文章标题")]),t._v(" "),n("el-input",{attrs:{placeholder:"输入您的标题",maxlength:"20"},on:{input:t.titleInput},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("p",{staticClass:"msg"},[n("span",[t._v(t._s(t.titleMax)+"/20")])]),t._v(" "),n("h3",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"展示博客简介",maxlength:"100"},on:{input:t.descriptInput},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("p",{staticClass:"msg"},[n("span",[t._v(t._s(t.descriptMax)+"/100")])]),t._v(" "),n("h3",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:30},placeholder:"请输入内容"},on:{input:t.contentInput},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("p",{staticClass:"msg"},[n("span",[t._v("已输入"+t._s(t.contentLength)+"个字")])]),t._v(" "),n("p",[n("label",[t._v("是否展示到首页")]),t._v(" "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("el-button",{on:{click:t.onEdit}},[t._v("确定")])],1)},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("yHhX")},null,null);e.default=o.exports},yHhX:function(t,e){}});
//# sourceMappingURL=6.c91dc640d3361bcf4b2f.js.map