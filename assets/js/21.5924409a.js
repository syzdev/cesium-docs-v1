(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{535:function(s,t,e){"use strict";e.r(t);var a=e(10),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"数据加载事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据加载事件"}},[s._v("#")]),s._v(" 数据加载事件")]),s._v(" "),e("p",[s._v("在Cesium中，常见的数据加载类型和相关事件包含以下几种：")]),s._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#Cesium3DTileset",target:"_blank",rel:"noopener noreferrer"}},[s._v("Cesium3DTileset"),e("OutboundLink")],1),s._v("：常见事件如下：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#allTilesLoaded",target:"_blank",rel:"noopener noreferrer"}},[s._v("allTilesLoaded"),e("OutboundLink")],1),s._v("：当所有满足屏幕空间误差的瓦片集加载完成后触发，此时瓦片集已经完全加载；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#initialTilesLoaded",target:"_blank",rel:"noopener noreferrer"}},[s._v("initialTilesLoaded"),e("OutboundLink")],1),s._v("：当所有满足屏幕空间误差的瓦片集加载完成后触发，此时初始视图已经加载完成，该方法的触发在"),e("code",[s._v("allTilesLoaded")]),s._v("之后；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#loadProgress",target:"_blank",rel:"noopener noreferrer"}},[s._v("loadProgress"),e("OutboundLink")],1),s._v("：当请求瓦片时触发，该方法会提供请求挂起的瓦片数量"),e("code",[s._v("numberOfPendingRequests")]),s._v("和正在处理的瓦片数量"),e("code",[s._v("numberOfTilesProcessing")]),s._v("两个参数；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#tileFailed",target:"_blank",rel:"noopener noreferrer"}},[s._v("tileFailed"),e("OutboundLink")],1),s._v("：当一个瓦片请求失败时触发，该方法会提供一个"),e("code",[s._v("error")]),s._v("对象，包含请求失败的瓦片url和请求失败的原因"),e("code",[s._v("message")]),s._v("；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#tileUnload",target:"_blank",rel:"noopener noreferrer"}},[s._v("tileUnload"),e("OutboundLink")],1),s._v("：当一个瓦片卸载后触发，卸载指的是从内存中删除，被卸载的原因为设置的"),e("code",[s._v("maximumMemoryUsage")]),s._v("大小不足，或者是"),e("code",[s._v("trimLoadedTiles()")]),s._v("方法被调用。")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#tileLoad",target:"_blank",rel:"noopener noreferrer"}},[s._v("tileLoad"),e("OutboundLink")],1),s._v("：当一个瓦片加载后触发；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#tileVisible",target:"_blank",rel:"noopener noreferrer"}},[s._v("tileVisible"),e("OutboundLink")],1),s._v("：当一个瓦片可见时触发。")])])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Entity.html?classFilter=entity#Entity",target:"_blank",rel:"noopener noreferrer"}},[s._v("Entity"),e("OutboundLink")],1),s._v("：常见事件如下：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Entity.html?classFilter=entit#definitionChanged",target:"_blank",rel:"noopener noreferrer"}},[s._v("definitionChanged"),e("OutboundLink")],1),s._v("：当实体的属性发生改变时触发。")])])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html?classFilter=data#DataSource",target:"_blank",rel:"noopener noreferrer"}},[s._v("DataSource"),e("OutboundLink")],1),s._v("：常见事件如下：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html?classFilter=data#changedEvent",target:"_blank",rel:"noopener noreferrer"}},[s._v("changedEvent"),e("OutboundLink")],1),s._v("：当数据发生改变时触发；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html?classFilter=data#errorEvent",target:"_blank",rel:"noopener noreferrer"}},[s._v("errorEvent"),e("OutboundLink")],1),s._v("：当数据加载时发生错误触发；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html?classFilter=data#loadingEvent",target:"_blank",rel:"noopener noreferrer"}},[s._v("loadingEvent"),e("OutboundLink")],1),s._v("：当数据的值发生改变时触发。")])])])]),s._v(" "),e("h2",{attrs:{id:"cesium3dtileset-加载示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cesium3dtileset-加载示例"}},[s._v("#")]),s._v(" Cesium3DTileset 加载示例")]),s._v(" "),e("p",[s._v("本例中将使用"),e("code",[s._v("allTilesLoaded")]),s._v("、"),e("code",[s._v("initialTilesLoaded")]),s._v("、"),e("code",[s._v("loadProgress")]),s._v("和"),e("code",[s._v("tileLoad")]),s._v("这四个事件说明3D tiles的加载过程。")]),s._v(" "),e("p",[s._v("主要代码如下：")]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载3D tiles")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" tileset "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" viewer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("primitives"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cesium3DTileset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../3dtiles/tilesset/tileset.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 视角定位到3D tiles")]),s._v("\nviewer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zoomTo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tileset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// allTilesLoaded 瓦片集加载完成")]),s._v("\ntileset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("allTilesLoaded"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'allTilesLoaded，瓦片集加载完成'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// initialTilesLoaded 瓦片集加载完成，并且场景初始化完成")]),s._v("\ntileset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("initialTilesLoaded"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'initialTilesLoaded，瓦片集加载完成，并且场景初始化完成'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// loadProgress 瓦片加载进度")]),s._v("\ntileset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loadProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("numberOfPendingRequests"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" numberOfTilesProcessing")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("numberOfPendingRequests "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("numberOfTilesProcessing "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'loadProgress，加载完成'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'loadProgress，请求挂起的瓦片数量'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" numberOfPendingRequests "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("', 正在处理的瓦片数量: '")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" numberOfTilesProcessing"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tileLoad 一个瓦片被加载")]),s._v("\ntileset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tileLoad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("tile")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tileLoad，一个瓦片被加载了'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示3D tiles的瓦片包围盒")]),s._v("\ntileset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("debugShowContentBoundingVolume "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br")])]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击查看在线示例：Cesium3DTileset 加载示例")]),s._v(" "),e("p",[s._v("由于本例需要查看浏览器控制台输出，请读者点击下方链接跳转到示例页面，按F12打开控制台查看输出：\n"),e("a",[s._v("https://syzdev.cn/cesium-docs-demo/event/dataLoadEvent.html")])])]),s._v(" "),e("p",[s._v("页面效果如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/cesium-docs/assets/img/advance/dle-01.png",alt:"dle-01"}})]),s._v(" "),e("p",[s._v("根据控制台输出可以得到如下结论：")]),s._v(" "),e("ul",[e("li",[s._v("最先被调用的是"),e("code",[s._v("loadProgress")]),s._v("，表示当前正处于瓦片请求阶段；")]),s._v(" "),e("li",[s._v("第二个被调用的是"),e("code",[s._v("tileLoad")]),s._v("，表示当前正处于单个瓦片加载阶段，根据3D tiles瓦片包围盒可以看到共有5个"),e("code",[s._v("Cesium3Dtiles")]),s._v("，因此该事件被触发了5次；")]),s._v(" "),e("li",[s._v("第三个被调用的是"),e("code",[s._v("allTilesLoaded")]),s._v("，表示满足当前屏幕空间误差的瓦片集已经完全加载；")]),s._v(" "),e("li",[s._v("最后一个被调用的是"),e("code",[s._v("initialTilesLoaded")]),s._v("，表示满足当前屏幕空间误差的瓦片集已经完全加载，并且初始化视图已经完成。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);