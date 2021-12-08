"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3082],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5636:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>d,default:()=>m});var a=t(5900),r=t(4750),i=(t(9496),t(9613)),o=["components"],p={id:"package_json",title:"package.json"},l=void 0,s={unversionedId:"package_json",id:"version-5.x/package_json",isDocsHomePage:!1,title:"package.json",description:"The manifest file of a package. It contains all the package's metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/tr/5.x/package_json",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"5.x",frontMatter:{id:"package_json",title:"package.json"},sidebar:"version-5.x/docs",previous:{title:"pnpm store",permalink:"/tr/5.x/cli/store"},next:{title:".npmrc",permalink:"/tr/5.x/npmrc"}},d=[{value:"Fields",id:"fields",children:[{value:"engines",id:"engines",children:[],level:3},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",children:[],level:4}],level:3},{value:"publishConfig",id:"publishconfig",children:[],level:3},{value:"pnpm.overrides",id:"pnpmoverrides",children:[],level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[],level:3}],level:2}],c={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The manifest file of a package. It contains all the package's metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm."),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("h3",{id:"engines"},"engines"),(0,i.kt)("p",null,"You can specify the version of Node and pnpm that your software works on:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,i.kt)("p",null,"During local development, pnpm will always fail with an error message if its version does not match the one specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"engines")," field."),(0,i.kt)("p",null,"Unless the user has set the ",(0,i.kt)("inlineCode",{parentName:"p"},"engine-strict")," config flag (see ",(0,i.kt)("a",{parentName:"p",href:"/tr/5.x/npmrc#engine-strict"},".npmrc"),"), this field is advisory only and will only produce warnings when your package is installed as a dependency."),(0,i.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,i.kt)("p",null,"This field lists some extra information related to the dependencies listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," field."),(0,i.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,i.kt)("p",null,"If this is set to true, the selected peer dependency will be marked as optional by the package manager. Therefore, the consumer omitting it will no longer be reported as an error."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Note that even though ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," was not specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", it is marked as optional. pnpm will therefore assume that any version of bar is fine. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is optional, but only to the required version specification."),(0,i.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,i.kt)("p",null,"S\xfcr\xfcm 3.4.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"It is possible to override some fields in the manifest before the package is packed. The following fields may be overridden: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},(0,i.kt)("inlineCode",{parentName:"a"},"bin")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},(0,i.kt)("inlineCode",{parentName:"a"},"main")),", ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,i.kt)("inlineCode",{parentName:"a"},"exports")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},(0,i.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,i.kt)("inlineCode",{parentName:"a"},"typings")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},(0,i.kt)("inlineCode",{parentName:"a"},"module")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},(0,i.kt)("inlineCode",{parentName:"a"},"browser")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},(0,i.kt)("inlineCode",{parentName:"a"},"esnext")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},(0,i.kt)("inlineCode",{parentName:"a"},"es2015")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,i.kt)("inlineCode",{parentName:"a"},"unpkg"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},(0,i.kt)("inlineCode",{parentName:"a"},"umd:main")),"."),(0,i.kt)("p",null,"To override a field, add the publish version of the field to ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,i.kt)("p",null,"For instance, the following ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,i.kt)("p",null,"Will be published as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,i.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,i.kt)("p",null,"S\xfcr\xfcm 5.10.1 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"This field allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."),(0,i.kt)("p",null,"Note that the overrides field can only be set at the root of the project."),(0,i.kt)("p",null,"An example of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,i.kt)("p",null,'You may specify the package the overriden dependency belongs to by separating the package selector from the dependency selector with a ">", for example ',(0,i.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",(0,i.kt)("inlineCode",{parentName:"p"},"zoo")," dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"qar@1"),", not for any other dependencies."),(0,i.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,i.kt)("p",null,"S\xfcr\xfcm 5.16.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"This field allows to ignore the builds of specific dependencies."),(0,i.kt)("p",null,"An example of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);