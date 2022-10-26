"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),g=i,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="Introduction",c={unversionedId:"designer/introduction",id:"designer/introduction",title:"Introduction",description:"Have a look at designer api",source:"@site/docs/designer/introduction.md",sourceDirName:"designer",slug:"/designer/introduction",permalink:"/docs/designer/introduction",draft:!1,editUrl:"https://github.com/ankareport/ankareport/tree/main/docs/docs/designer/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Designer",permalink:"/docs/category/designer"},next:{title:"Data Source",permalink:"/docs/designer/data-source"}},l={},s=[{value:"Basic Initialization",id:"basic-initialization",level:2},{value:"Full Initialization",id:"full-initialization",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Have a look at ",(0,i.kt)("a",{parentName:"p",href:"../api/designer"},"designer api")),(0,i.kt)("h2",{id:"basic-initialization"},"Basic Initialization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  const designerDiv = document.getElementById("designer");\n  const designer = AnkaReport.designer({ element: designerDiv });\n<\/script>\n')),(0,i.kt)("h2",{id:"full-initialization"},"Full Initialization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  const designerDiv = document.getElementById("designer");\n  const designer = AnkaReport.designer({\n    element: designerDiv,\n    dataSource: dataSource,\n    layout: layout,\n    onSaveButtonClick: (layout) => {\n      console.log(layout);\n    },\n  });\n<\/script>\n')))}d.isMDXComponent=!0}}]);