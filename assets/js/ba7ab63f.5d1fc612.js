"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2869],{7182:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var i=n(498),r=n(972),a=(n(6687),n(7182)),o=["components"],l={id:"video-streaming",title:"Video streaming"},d=void 0,s={unversionedId:"video-streaming",id:"video-streaming",title:"Video streaming",description:"How to enable Video streaming",source:"@site/docs/coteafs-appium/video-streaming.md",sourceDirName:".",slug:"/video-streaming",permalink:"/website/projects/coteafs-appium/video-streaming",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/video-streaming.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1647499074,formattedLastUpdatedAt:"3/17/2022",frontMatter:{id:"video-streaming",title:"Video streaming"},sidebar:"docs",previous:{title:"Video Recording of tests",permalink:"/website/projects/coteafs-appium/video"},next:{title:"Clipboard handling",permalink:"/website/projects/coteafs-appium/clipboard-handling"}},p={},c=[{value:"How to enable Video streaming",id:"how-to-enable-video-streaming",level:2},{value:"Video streaming setting",id:"video-streaming-setting",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-enable-video-streaming"},"How to enable Video streaming"),(0,a.kt)("p",null,"Video streaming is only supported on Android device and can be configured and enabled in the config as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"devices:\n  android_device:\n    . . .\n    playback:\n      stream:\n        enabled: true\n        . . .\n")),(0,a.kt)("h2",{id:"video-streaming-setting"},"Video streaming setting"),(0,a.kt)("p",null,"Following are the available options which can be configured for video streaming."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," will enable the feature. To turn off, use ",(0,a.kt)("inlineCode",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host"),": Host IP to stream video on, default is ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port"),": Port on which to stream on, default ",(0,a.kt)("inlineCode",{parentName:"li"},"8093"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width"),": Screen width for streaming video, default ",(0,a.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height"),": Screen height for streaming video, default ",(0,a.kt)("inlineCode",{parentName:"li"},"1024")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"quality"),": Streaming quality, default is ",(0,a.kt)("inlineCode",{parentName:"li"},"HIGH"),". Allowed values are ",(0,a.kt)("inlineCode",{parentName:"li"},"HD"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"HIGH"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MEDIUM")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"LOW"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bit_rate"),": Stream mega bits per second, default is ",(0,a.kt)("inlineCode",{parentName:"li"},"50"))))}m.isMDXComponent=!0}}]);