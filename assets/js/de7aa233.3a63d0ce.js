(self.webpackChunkparty_js_docs=self.webpackChunkparty_js_docs||[]).push([[647],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9448:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={title:"Server-Side Rendering"},c={unversionedId:"advanced/ssr",id:"advanced/ssr",isDocsHomePage:!1,title:"Server-Side Rendering",description:"To allow the usage of the library in server-side rendered applications, the library utilizes lazy initialization.",source:"@site/docs/advanced/ssr.md",sourceDirName:"advanced",slug:"/advanced/ssr",permalink:"/docs/advanced/ssr",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/advanced/ssr.md",version:"current",frontMatter:{title:"Server-Side Rendering"},sidebar:"sidebar",previous:{title:"Custom Effects",permalink:"/docs/guides/custom-effects"}},s=[],l={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To allow the usage of the library in server-side rendered applications, the library utilizes ",(0,a.kt)("em",{parentName:"p"},"lazy initialization"),"."),(0,a.kt)("p",null,"Document elements, like the debug interface and the scene container, are only created once they are needed, and not when immediately loading the library. This allows you to import and hook up the library's callback functions, without actually creating the elements when the server is rendering the files."),(0,a.kt)("p",null,"However, you can ",(0,a.kt)("strong",{parentName:"p"},"not")," call templated effects or access the ",(0,a.kt)("inlineCode",{parentName:"p"},"scene")," object during server-side rendering."))}u.isMDXComponent=!0}}]);