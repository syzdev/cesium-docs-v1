(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{563:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[s._v("注意")]),a("p",[s._v("本文假设读者有一定的前端基础。")])]),a("h2",{attrs:{id:"下载-cesium-到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-cesium-到本地"}},[s._v("#")]),s._v(" 下载 Cesium 到本地")]),s._v(" "),a("p",[s._v("打开"),a("a",{attrs:{href:"https://cesium.com/platform/cesiumjs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Cesium官网"),a("OutboundLink")],1),s._v("，在页面下方找到“Start building your 3D globe app”，再点击下方的“DOWNLOAD NOW”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/hc-01.png",alt:"hc-01"}})]),s._v(" "),a("p",[s._v("再点击“DOWNLOAD CESIUMJS”：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/hc-02.png",alt:"hc-02"}})]),s._v(" "),a("p",[s._v("注意，由于Cesium的服务器位于国外，直接下载的话速度很慢，可以点击下载后复制下载链接，然后在迅雷中新建下载任务粘贴下载链接，这种方式下载速度会快很多。接下来创建Cesium项目目录，如新建文件夹“CesiumExample185”，再解压下载完成后的“Cesium-1.85.zip”文件，将解压文件夹中的"),a("code",[s._v("build")]),s._v("文件夹以及"),a("code",[s._v("Apps/HelloWorld.html")]),s._v("文件复制到文件夹“CesiumExample185”中，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/hc-03.png",alt:"hc-03"}})]),s._v(" "),a("h2",{attrs:{id:"cesium-目录结构分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cesium-目录结构分析"}},[s._v("#")]),s._v(" Cesium 目录结构分析")]),s._v(" "),a("p",[a("code",[s._v("Build")]),s._v("文件夹下包含如下三个子文件夹：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Cesium")]),s._v("：Cesium中的资源及代码\n"),a("ul",[a("li",[a("code",[s._v("Assets")]),s._v("：Cesium中的静态资源，包括图片数据及JSON数据")]),s._v(" "),a("li",[a("code",[s._v("Scene")]),s._v("：自定义着色器指南，新手可以直接忽略。")]),s._v(" "),a("li",[a("code",[s._v("ThirdParty")]),s._v("：Cesium中使用的第三方库。")]),s._v(" "),a("li",[a("code",[s._v("Widgets")]),s._v("：Cesium中的CSS样式文件。")]),s._v(" "),a("li",[a("code",[s._v("Workers")]),s._v("：Cesium核心工作代码。")])])]),s._v(" "),a("li",[a("code",[s._v("CesiumUnminified")]),s._v("：同上，区别是该文件夹下的代码都是未经过压缩（Unminified）的。")]),s._v(" "),a("li",[a("code",[s._v("Documentation")]),s._v("：Cesium的API文档。")])]),s._v(" "),a("h2",{attrs:{id:"方法1-快速搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1-快速搭建"}},[s._v("#")]),s._v(" 方法1：快速搭建")]),s._v(" "),a("p",[s._v("下载并安装VS Code，在侧边栏的插件一栏中安装插件“Live Server”：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/hc-04.png",alt:"hc-04"}})]),s._v(" "),a("p",[s._v("通过VS Code打开之前创建的“CesiumExample185”文件夹，右键”HelloWorld.html“文件，点击”Open with Live Server“：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/hc-05.png",alt:"hc-05"}})]),s._v(" "),a("p",[s._v("点击后”Live Server“会自动开启一个端口号为5500的服务，并会由本机的默认浏览器~打开，能够看到Cesium创建的虚拟地球：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/hc-06.png",alt:"hc-06"}})]),s._v(" "),a("h2",{attrs:{id:"方法2-手动创建服务器搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2-手动创建服务器搭建"}},[s._v("#")]),s._v(" 方法2：手动创建服务器搭建")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[s._v("注意")]),a("p",[s._v("以下操作需要在Node环境下运行，若没有安装Node，请访问"),a("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node官网"),a("OutboundLink")],1),s._v("下载安装。")])]),a("p",[s._v("打开文件夹“CesiumExample185”，打开命令行工具，输入"),a("code",[s._v("npm i express")]),s._v("安装"),a("code",[s._v("express")]),s._v("服务器，安装完成后提示如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/hc-07.png",alt:"hc-07"}})]),s._v(" "),a("p",[s._v("在文件夹“CesiumExample185”下创建文件"),a("code",[s._v("server.js")]),s._v("，输入以下内容：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"express"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("App listening at port 8080")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("上面代码的含义是将文件夹“CesiumExample185”作为一个服务发布，监听的端口为8080端口，在命令行输入"),a("code",[s._v("node server.js")]),s._v("即可打开该服务，再在浏览器输入 http://localhost:8080/helloworld.html 即可打开项目：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/hc-08.png",alt:"hc-08"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);