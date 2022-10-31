(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{552:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"影像叠加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影像叠加"}},[s._v("#")]),s._v(" 影像叠加")]),s._v(" "),a("p",[s._v("在Cesium中可以将多个影像都加载到虚拟地球上，如下面代码中加载了Arcgis影像服务和切片Tile坐标两种影像：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" viewer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Viewer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cesiumContainer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  imageryProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ArcGisMapServerImageryProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nviewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imageryLayers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addImageryProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TileCoordinatesImageryProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("加载后的效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/il01.png",alt:"il-01"}})]),s._v(" "),a("h2",{attrs:{id:"影像图层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影像图层"}},[s._v("#")]),s._v(" 影像图层")]),s._v(" "),a("p",[s._v("每一个加载到Cesium中的"),a("code",[s._v("ImageryProvider")]),s._v("都属于"),a("code",[s._v("ImageryLayer")]),s._v("类所实例化的对象，以上面的代码为例，可以在浏览器控制台中输出"),a("code",[s._v("viewer.scene.imageryLayers")]),s._v("：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/guide/il02.png",alt:"il-02"}})]),s._v(" "),a("p",[s._v("发现属性"),a("code",[s._v("_layers")]),s._v("为一个数组，其内容为添加的两个影像，一个为"),a("code",[s._v("WebMapTileServiceImageryProvider")]),s._v("，另一个为"),a("code",[s._v("TileCoordinatesImageryProvider")]),s._v("，正好对应了例子中添加的Arcgis影像服务和切片Tile坐标两种影像。")]),s._v(" "),a("h2",{attrs:{id:"imagerylayer-的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imagerylayer-的属性"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/ImageryLayer.html?classFilter=imag#ImageryLayer",target:"_blank",rel:"noopener noreferrer"}},[s._v("ImageryLayer"),a("OutboundLink")],1),s._v(" 的属性")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("ImageryLayer")]),s._v("实例化对象可以修改影像的外观属性，常见的可修改的属性见下表：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("属性含义")]),s._v(" "),a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("透明度")]),s._v(" "),a("td",[a("code",[s._v("alpha")])]),s._v(" "),a("td",[a("code",[s._v("1.0")])])]),s._v(" "),a("tr",[a("td",[s._v("明亮值")]),s._v(" "),a("td",[a("code",[s._v("brightness")])]),s._v(" "),a("td",[a("code",[s._v("1.0")])])]),s._v(" "),a("tr",[a("td",[s._v("对比度")]),s._v(" "),a("td",[a("code",[s._v("contrast")])]),s._v(" "),a("td",[a("code",[s._v("1.0")])])]),s._v(" "),a("tr",[a("td",[s._v("色调")]),s._v(" "),a("td",[a("code",[s._v("hue")])]),s._v(" "),a("td",[a("code",[s._v("0.0")])])]),s._v(" "),a("tr",[a("td",[s._v("饱和度")]),s._v(" "),a("td",[a("code",[s._v("saturation")])]),s._v(" "),a("td",[a("code",[s._v("1.0")])])]),s._v(" "),a("tr",[a("td",[s._v("伽马值")]),s._v(" "),a("td",[a("code",[s._v("gamma")])]),s._v(" "),a("td",[a("code",[s._v("1.0")])])])])]),s._v(" "),a("p",[s._v("在下面这个例子中，通过"),a("code",[s._v("viewer.imageryLayers._layers[0]")]),s._v("获取到第一个影像图层，即Arcgis影像图层，再修改其"),a("code",[s._v("alpha")]),s._v("、"),a("code",[s._v("brightness")]),s._v("和"),a("code",[s._v("contrast")]),s._v("属性对其影像的透明度、明亮度和对比度等属性进行修改：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" viewer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Viewer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cesiumContainer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  imageryProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ArcGisMapServerImageryProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改影像的透明度、明亮度和对比度")]),s._v("\nviewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imageryLayers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alpha "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\nviewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imageryLayers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("brightness "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nviewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imageryLayers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看在线示例：修改影像的透明度、明亮度和对比度")]),s._v(" "),a("br"),s._v(" "),a("iframe",{attrs:{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/imagery/ImageryConfig.html",frameborder:"0"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);