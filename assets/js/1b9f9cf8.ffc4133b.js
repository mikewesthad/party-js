(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(b,c(c({ref:t},l),{},{components:a})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(10),i=(a(0),a(107)),o={title:"Variations"},c={unversionedId:"variations",id:"variations",isDocsHomePage:!1,title:"Variations",description:"Introduction",source:"@site/docs/03-variations.md",sourceDirName:".",slug:"/variations",permalink:"/docs/variations",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/03-variations.md",version:"current",sidebarPosition:3,frontMatter:{title:"Variations"},sidebar:"sidebar",previous:{title:"Templates",permalink:"/docs/templates"},next:{title:"Shapes",permalink:"/docs/shapes"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Helper Methods",id:"helper-methods",children:[]}],l={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The library makes heavy use of so-called ",Object(i.b)("em",{parentName:"p"},"variations")," to allow the variation/customization of individual values. Variations are generic - in theory they can take any value, no matter if it's a number, Vector or Colour. A variation can be represented by a ",Object(i.b)("em",{parentName:"p"},"constant"),", an ",Object(i.b)("em",{parentName:"p"},"array"),", or a ",Object(i.b)("em",{parentName:"p"},"function returning a value"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"type Variation<T> = T | T[] | (() => T);\n")),Object(i.b)("p",null,"Variations can be evaluated by an internal helper method, so produce a raw value from it. This means that either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The primitive value is returned."),Object(i.b)("li",{parentName:"ul"},"A random element from the array is picked."),Object(i.b)("li",{parentName:"ul"},"The function is evaluated and returned.")),Object(i.b)("p",null,"This makes variations a powerful tool to customize properties of emitters."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"party.confetti(myElement, {\n    // We want to randomize the amount of confetti that is emitted, so we\n    // create a range from 20 to 40. When the particles are created, this\n    // variation is evaluated, randomizing the amount of spawned particles.\n    count: party.variation.range(20, 40),\n});\n")),Object(i.b)("h2",{id:"helper-methods"},"Helper Methods"),Object(i.b)("p",null,"To assist in creating variations aside from constants and arrays, the library offers pre-made helper methods - these return a valid variation that can be evaluated."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"party.variation.range(min, max)"),": Creates a variation that returns a random number from min to max."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"party.variation.skew(value, amount)"),": Creates a variation that skews the specified value by a specified, absolute amount. This means that instead of the value itself, a random number that deviates at most by the specified amount is returned."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"party.variation.skewRelative(value, percentage)"),": Creates a variation that skews the specified value by a specified percentage. This means that instead of the value itself, a random number that deviates by a maximum of the specified percentage is returned."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"party.variation.splineSample(spline)"),": Creates a variation that returns a random sample from the given spline."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"party.variation.gradientSample(gradient)"),": Creates a variation that returns a random colour sample from the given gradient.")))}u.isMDXComponent=!0}}]);