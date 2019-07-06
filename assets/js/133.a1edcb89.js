(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{314:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"modularity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modularity","aria-hidden":"true"}},[t._v("#")]),t._v(" Modularity")]),t._v(" "),a("h2",{attrs:{id:"built-in-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-modules","aria-hidden":"true"}},[t._v("#")]),t._v(" Built-in modules")]),t._v(" "),a("p",[t._v("Modules can be created in the following way (more about binding C++ classes "),a("router-link",{attrs:{to:"/docs/bind_cpp_class.html"}},[t._v("here")]),t._v("):")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("wren"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("VM vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mymodule"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("klass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Entity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v('But, you are also able to create your own "raw" modules.')]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("wren"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("VM vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mymodule"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token raw-string string"}},[t._v('R"(\n    class Vec3 {\n        construct new (x, y, z) {\n            ...\n        }\n    }\n)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("These modules can be loaded in Wren by calling:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mymodule"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Vec3\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("Note!")]),t._v(" "),a("p",[t._v("You can use "),a("code",[t._v("mymodule/something")]),t._v(" as a built in module names. Slashes are allowed.")])]),t._v(" "),a("h2",{attrs:{id:"files-as-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files-as-modules","aria-hidden":"true"}},[t._v("#")]),t._v(" Files as modules")]),t._v(" "),a("p",[t._v("Files can also be loaded into Wren. But this depends on the lookup paths. When creating an instance of the VM, the first argument is a list of paths to use for lookup. Example below:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" paths "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some/relative/path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:/absolute/path"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwren"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("VM "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("Warning!")]),t._v(" "),a("p",[t._v("The default value of the VM constructor is "),a("code",[t._v('{"./"}')]),t._v(". This means that by default the VM will look for files relative to your working directory! If there is a file "),a("code",[t._v("libs/mylib.wren")]),t._v(" in your working directory, and in Wren you load it as "),a("code",[t._v('import "libs/mylib" for XYZ')]),t._v(" then it will load it from your working directory.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("Note!")]),t._v(" "),a("p",[t._v("You can use "),a("code",[t._v('vm.runFromModule("main")')]),t._v(" to load a file "),a("code",[t._v("main.wren")]),t._v(" that is located in one of the paths ("),a("code",[t._v("relative/folder")]),t._v(") that you have passed to the VM constructor. If you want to explicitly run a specific file (let's say you have multiple "),a("code",[t._v("main.wren")]),t._v(" in different paths), you will have to use "),a("code",[t._v('vm.runFromFile("relative/folder/main", "path to the real file")')]),t._v(". Or just use "),a("code",[t._v('vm.runFromSource("relative/folder/main", "source code")')]),t._v(".")])]),t._v(" "),a("p",[t._v("So what happens if I want to load "),a("code",[t._v("other.wren")]),t._v(" that is located in "),a("code",[t._v("some/relative/path")]),t._v("? The VM will first look for internal built-in modules. If you have a module named "),a("code",[t._v("other")]),t._v(" it will be used, and the VM will not look for files on your system. If the file "),a("code",[t._v("other.wren")]),t._v(" exists in any of the paths you have passed to the VM constructor, it will be loaded. This is somehow similar to how "),a("code",[t._v("import")]),t._v(" or "),a("code",[t._v("require")]),t._v(" works in modern JavaScript or TypeScript with npm modules.")]),t._v(" "),a("p",[t._v("For example, you have "),a("code",[t._v('import "utils/other/common" for Tokenizer')]),t._v(" statement somewhere in your Wren script. Then the VM will look for "),a("code",[t._v("utils/other/common")]),t._v(" module in the list of the built-in modules you have specified as "),a("code",[t._v('vm.m("mymodule")')]),t._v(". If that fails, it will look inside of the paths you have specified in the VM constructor, and will look for a file "),a("code",[t._v("utils/other/common.wren")]),t._v(" in all of the paths. Only the first match is used. So the order of the paths in the constructor matters.")]),t._v(" "),a("p",[t._v("If the module is not found, an exception is thrown.")]),t._v(" "),a("p",[t._v("In short, it works like this:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Not real source code, this is just a pseudocode!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".wren"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NotFound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("Warning!")]),t._v(" "),a("p",[t._v("Relative paths do not work. This is a limitation of Wren. Only absolute paths work. Consider that you have passed "),a("code",[t._v("relative/folder")]),t._v(" into the VM constructor, and you are running file "),a("code",[t._v("relative/folder/main.wren")]),t._v(". Now you want to import "),a("code",[t._v("relative/folder/other.wren")]),t._v(", you must use "),a("code",[t._v('import "relative/folder/other" for XYZ')]),t._v(" inside of the "),a("code",[t._v("main.wren")]),t._v(". The "),a("code",[t._v('import "other" for XYZ')]),t._v(" won't work!")])])])},[],!1,null,null,null);s.default=n.exports}}]);