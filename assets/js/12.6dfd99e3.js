(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{528:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"调整-3d-tiles-的位置及缩放大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调整-3d-tiles-的位置及缩放大小"}},[s._v("#")]),s._v(" 调整 3D Tiles 的位置及缩放大小")]),s._v(" "),a("p",[s._v("与前面所说的实体（Entity）和图形（Primitive）不一样，在"),a("code",[s._v("Cesium3DTileset")]),s._v("的构造函数中，是没有设定 3D Tiles 的位置及大小的参数的，之所以不指定位置就能加载 3D Tiles 是因为它自带原始坐标，这个坐标可以在生成 3D Tiles 时指定，但日常开发中更多的是在代码中调整 3D Tiles 的位置及大小，调整的方法如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载3D Tiles")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" tileset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("primitives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cesium3DTileset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./tlfs/tileset.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设定3D Tiles的位置及大小参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" params "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  tx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("116.391311")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型中心x轴坐标（经度，单位：十进制）")]),s._v("\n  ty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.90616")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型中心y轴坐标（经度，单位：十进制）")]),s._v("\n  tz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型中心y轴坐标（高程，单位：米）")]),s._v("\n  rx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x轴（经度）方向旋转角度（单位：度）")]),s._v("\n  ry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// y轴（纬度）方向旋转角度（单位：度）")]),s._v("\n  rz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// z轴（高程）方向旋转角度（单位：度）")]),s._v("\n  scale"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 缩放比例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调整3D Tiles的位置及大小")]),s._v("\ntileset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readyPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" position "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cartesian3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromDegrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tz\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" mat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Transforms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eastNorthUpToFixedFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" scale "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromUniformScale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" mx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromRotationX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRadians")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" my "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromRotationY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRadians")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" mz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromRotationZ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRadians")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" rotationX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromRotationTranslation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" rotationY "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromRotationTranslation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" rotationZ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromRotationTranslation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" scale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rotationX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rotationY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rotationZ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  tileset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("transform "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mat\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nviewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zoomTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tileset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HeadingPitchRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看在线示例：调整 3D Tiles 的位置及大小")]),s._v(" "),a("br"),s._v(" "),a("iframe",{attrs:{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/3dtiles/update3DTilesPosition.html",frameborder:"0"}})]),s._v(" "),a("h2",{attrs:{id:"显示-3d-tiles-包围盒"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示-3d-tiles-包围盒"}},[s._v("#")]),s._v(" 显示 3D Tiles 包围盒")]),s._v(" "),a("p",[s._v("3D Tiles 为三维瓦片数据，即数据在存储和加载时都是分块的，显示包围盒后能清楚的看到每块瓦片的划分情况，如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/advance/cbv-01.png",alt:"cbv-01"}})]),s._v(" "),a("p",[s._v("为 3D Tiles 添加包围盒的代码如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载3D Tiles")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" tileset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("primitives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cesium3DTileset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./tileset/tileset.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示3D Tiles包围盒")]),s._v("\ntileset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("debugShowContentBoundingVolume "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看在线示例：显示 3D Tiles 包围盒")]),s._v(" "),a("br"),s._v(" "),a("iframe",{attrs:{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/3dtiles/3DTilesContentBoundingVolume.html",frameborder:"0"}})]),s._v(" "),a("h2",{attrs:{id:"开启-3d-tiles-监视器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-3d-tiles-监视器"}},[s._v("#")]),s._v(" 开启 3D Tiles 监视器")]),s._v(" "),a("p",[s._v("在Cesium中，想要通过代码来查看和调试 3D Tiles 是有些麻烦的，因此官方提供了一个 3D Tiles Inspector 工具，开启该工具的代码如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewerCesium3DTilesInspectorMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("开启后在页面的右上角将出现如下窗口：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/advance/3dti-01.png",alt:"3dti-01"}})]),s._v(" "),a("p",[s._v("各展开菜单的功能如下：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Tileset")]),s._v("：用于鼠标拾取 Tileset 的 Properties；")]),s._v(" "),a("li",[a("code",[s._v("Display")]),s._v("：用于显示 Tileset 的着色样式（Colorize）、网格图（Wireframe）、边界体（Bounding Volumes）、内容体（Content Volumes）、请求体（Request Volumes）和点云着色（Point Cloud Shading）。")]),s._v(" "),a("li",[a("code",[s._v("Update")]),s._v("：用于显示定格帧（Freeze Frame）、动态屏幕空间误差（Dynamic Screen Space Error）；")]),s._v(" "),a("li",[a("code",[s._v("Logging")]),s._v("：用于显示 Tileset 的加载参数，包含几何、材质和批量表的内存占用信息和Draw Commands等重要性能参数；")]),s._v(" "),a("li",[a("code",[s._v("Tile Debug Labels")]),s._v("：用于直接在场景中显示 Tileset 的调试信息；")]),s._v(" "),a("li",[a("code",[s._v("Style")]),s._v("：用于设置 Tileset 的样式；")]),s._v(" "),a("li",[a("code",[s._v("Optimization")]),s._v("：用于调整LOD参数。")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看在线示例：显示 3D Tiles 监视器")]),s._v(" "),a("br"),s._v(" "),a("iframe",{attrs:{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/3dtiles/3DTilesInspector.html",frameborder:"0"}})]),s._v(" "),a("h2",{attrs:{id:"修改-3d-tiles-的颜色和透明度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-3d-tiles-的颜色和透明度"}},[s._v("#")]),s._v(" 修改 3D Tiles 的颜色和透明度")]),s._v(" "),a("p",[s._v("修改 3D Tiles 的颜色和透明度的代码如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("tileset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cesium3DTileStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"color('rgba(178, 34, 34, 0.5)')\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 淡红色，透明度为0.5，半透明")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("效果如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/advance/3dti-03.png",alt:"3dti-03"}})]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看在线示例：修改 3D Tiles 的颜色和透明度")]),s._v(" "),a("br"),s._v(" "),a("iframe",{attrs:{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/3dtiles/3DTilesColor.html",frameborder:"0"}})]),s._v(" "),a("h2",{attrs:{id:"修改单个或分类-3d-tiles-的颜色和透明度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改单个或分类-3d-tiles-的颜色和透明度"}},[s._v("#")]),s._v(" 修改单个或分类 3D Tiles 的颜色和透明度")]),s._v(" "),a("p",[s._v("前面提到的“修改 3D Tiles 的透明度或颜色”只能修改整个 3D Tileset，想要修改单个 Tile 那么必须获取其标识，可以是唯一标识"),a("code",[s._v("id")]),s._v("，也可以是某个属性标识（如同一分类的属性），通过该标识对单个或分类的 3D Tiles 进行修改，下面是修改单个 Tile 的流程：")]),s._v(" "),a("ol",[a("li",[s._v("获取 3D Tiles 的属性信息：")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载3D Tiles")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" tileset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("primitives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cesium3DTileset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./tilesset/tileset.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加点击事件，用于拾取3D Tiles")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ScreenSpaceEventHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nhandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setInputAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("movement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" feature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("movement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取点击的Tile的id属性信息，也可以将id换成其他属性")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("feature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ScreenSpaceEventType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LEFT_CLICK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("修改单个或分类 3D Tiles 的颜色或透明度：根据"),a("code",[s._v("id")]),s._v("值修改：")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改id为0的3D Tiles的颜色和透明度")]),s._v("\ntileset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cesium3DTileStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    conditions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${id} === 0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"color('rgba(178, 34, 34, 0.5)')\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("修改单个或分类 3D Tiles 的颜色或透明度：根据条件值修改：")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改高度值大于50的3D Tiles的颜色和透明度")]),s._v("\ntileset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cesium3DTileStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    conditions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${Height} > 50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"color('rgba(178, 34, 34, 0.5)')\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("效果如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/cesium-docs/assets/img/advance/3dti-02.png",alt:"3dti-02"}})]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看在线示例：修改单个或分类 3D Tiles 的颜色和透明度")]),s._v(" "),a("br"),s._v(" "),a("iframe",{attrs:{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/3dtiles/3DTilesColorSingle.html",frameborder:"0"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);