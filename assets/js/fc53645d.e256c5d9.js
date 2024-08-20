"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3992],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1},i="Introduction",c={unversionedId:"renderer/introduction",id:"renderer/introduction",title:"Introduction",description:"Initialization",source:"@site/docs/renderer/introduction.md",sourceDirName:"renderer",slug:"/renderer/introduction",permalink:"/docs/renderer/introduction",draft:!1,editUrl:"https://github.com/ankareport/ankareport/tree/main/docs/docs/renderer/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Renderer",permalink:"/docs/category/renderer"},next:{title:"Third-Party",permalink:"/docs/category/third-party"}},l={},d=[{value:"Initialization",id:"initialization",level:2},{value:"Example Data",id:"example-data",level:2},{value:"Example Layout",id:"example-layout",level:2}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  const rendererDiv = document.getElementById("renderer");\n  const renderer = AnkaReport.renderer({\n    element: rendererDiv,\n    layout: layout,\n    data: data,\n  });\n<\/script>\n')),(0,a.kt)("h2",{id:"example-data"},"Example Data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const data = {\n  header1: "Header 1",\n  header2: "Header 2",\n  content: [\n    { name: "John1", surname: "Doe1" },\n    { name: "John2", surname: "Doe2" },\n    { name: "John3", surname: "Doe3" },\n  ],\n  footer1: "Footer 1",\n  footer2: "Footer 2",\n};\n')),(0,a.kt)("h2",{id:"example-layout"},"Example Layout"),(0,a.kt)("p",null,"Have a look at ",(0,a.kt)("a",{parentName:"p",href:"../api/layout"},"layout api"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const layout = {\n  width: 500,\n  headerSection: {\n    height: 50,\n    items: [\n      {\n        text: "Header 1",\n        binding: "header1",\n        x: 5,\n        y: 5,\n        width: 100,\n        height: 20,\n      },\n      {\n        text: "Header 2",\n        binding: "header2",\n        x: 5,\n        y: 30,\n        width: 200,\n        height: 20,\n      },\n    ],\n  },\n  contentSection: {\n    height: 75,\n    binding: "content",\n    items: [\n      {\n        text: "Label1",\n        binding: "name",\n        x: 9,\n        y: 6,\n        width: 100,\n        height: 20,\n      },\n      {\n        text: "Label2",\n        binding: "surname",\n        x: 9,\n        y: 26,\n        width: 200,\n        height: 40,\n      },\n    ],\n  },\n  footerSection: {\n    height: 40,\n    items: [\n      { text: "Copyright", x: 150, y: 8, width: 100, height: 20 },\n      {\n        text: "Desc",\n        binding: "footer2",\n        x: 250,\n        y: 8,\n        width: 100,\n        height: 20,\n      },\n    ],\n  },\n};\n')))}u.isMDXComponent=!0}}]);