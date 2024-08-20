"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Layout",p={unversionedId:"api/layout",id:"api/layout",title:"Layout",description:"",source:"@site/docs/api/layout.md",sourceDirName:"api",slug:"/api/layout",permalink:"/docs/api/layout",draft:!1,editUrl:"https://github.com/ankareport/ankareport/tree/main/docs/docs/api/layout.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Anka Report",permalink:"/docs/api/introduction"},next:{title:"Designer",permalink:"/docs/api/designer"}},l={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"layout"},"Layout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ILayout"',title:'"ILayout"'},"export interface ILayout extends IStyle {\n  width: number;\n  headerSection: ISection;\n  contentSection: ISection;\n  footerSection: ISection;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ISection"',title:'"ISection"'},"export interface ISection extends IStyle {\n  height: number;\n  binding: string;\n  items?: IReportItem[];\n  sections?: ISection[];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="IBaseReportItem"',title:'"IBaseReportItem"'},"export interface IBaseReportItem extends IStyle {\n  x: number;\n  y: number;\n  width: number;\n  height: number;\n  name: string;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ITextReportItem"',title:'"ITextReportItem"'},'export interface ITextReportItem extends IBaseReportItem {\n  type: "text";\n  text: string;\n  binding?: string;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="IImageReportItem"',title:'"IImageReportItem"'},'export interface IImageReportItem extends IBaseReportItem {\n  type: "image";\n  source: string;\n  binding?: string;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="IBarcodeReportItem"',title:'"IBarcodeReportItem"'},'export interface IBarcodeReportItem extends IBaseReportItem {\n  type: "barcode";\n  value: string;\n  binding?: string;\n  format?: string;\n  barWidth: 1 | 2 | 3 | 4;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="IReportItem"',title:'"IReportItem"'},"export type IReportItem = ITextReportItem | IImageReportItem | IBarcodeReportItem;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="IStyle"',title:'"IStyle"'},"export interface IStyle {\n  color?: string;\n  backgroundColor?: string;\n  textAlign?: TextAlign;\n  borderWidth?: number;\n  borderStyle?: string;\n  borderColor?: string;\n  fontFamily?: string;\n  fontSize?: string;\n  fontWeight?: string;\n}\n")))}m.isMDXComponent=!0}}]);