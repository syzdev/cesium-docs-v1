(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{547:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-获取椭球体表面的经纬度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取椭球体表面的经纬度"}},[t._v("#")]),t._v(" 1 获取椭球体表面的经纬度")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScreenSpaceEventHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInputAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 屏幕坐标转世界坐标——关键点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ellipsoid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ellipsoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cartesian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pickEllipsoid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ellipsoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将笛卡尔坐标转换为地理坐标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cartographic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCartesian")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartesian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将弧度转为度的十进制度表示")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDegrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDegrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出经纬度")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' / '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("lat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScreenSpaceEventType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LEFT_CLICK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h2",{attrs:{id:"_2-获取地形表面经纬度和高度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取地形表面经纬度和高度"}},[t._v("#")]),t._v(" 2 获取地形表面经纬度和高度")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScreenSpaceEventHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInputAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 屏幕坐标转世界坐标——关键点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPickRay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cartesian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将笛卡尔坐标转换为地理坐标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cartographic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCartesian")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartesian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将弧度转为度的十进制度表示")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDegrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDegrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取海拔高度")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScreenSpaceEventType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LEFT_CLICK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"_3-实时获取鼠标经纬度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实时获取鼠标经纬度"}},[t._v("#")]),t._v(" 3 实时获取鼠标经纬度")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" selft  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scene "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScreenSpaceEventHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInputAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("movement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cartesian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pickEllipsoid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("movement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endPosition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ellipsoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ellipsoid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ellipsoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartesian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//能获取，显示坐标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cartographic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ellipsoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cartesianToCartographic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartesian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" coords "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'经度'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDegrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'纬度'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDegrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      cartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'高度 '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("positionCartographic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不能获取不显示")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScreenSpaceEventType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MOUSE_MOVE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);