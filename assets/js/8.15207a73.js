(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"call-wren-and-return-c-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-wren-and-return-c-class","aria-hidden":"true"}},[t._v("#")]),t._v(" Call Wren and return C++ class")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("If the return value is a C++ class, you can return it in different ways. Consider the following Wren example:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mymodule"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" CppClass\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" CppClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("On C++ side, you can return it as a copy, pointer, or a shared_ptr:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("wren"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ReturnValue res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nCppClass copy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CppClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCppClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ptr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CppClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CppClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sptr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CppClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Returning as a copy depends on the implementation of the C++ class. If it does not support copying, it will result in a compilation error. However, returning as a pointer does not result in a copy (for obvious reasons). But, there is a catch! What happens with the pointer? Will it get deleted automatically? Well, sort of, "),a("router-link",{attrs:{to:"/docs/liveness_garbage.html"}},[t._v("read here about garbage collection and liveness of variables")]),t._v(".")],1)])},[],!1,null,null,null);s.default=e.exports}}]);