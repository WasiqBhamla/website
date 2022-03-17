"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9698],{7182:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(498),i=n(972),o=(n(6687),n(7182)),a=["components"],l={id:"video",title:"Video Recording of tests"},c=void 0,d={unversionedId:"video",id:"video",title:"Video Recording of tests",description:"How to Enable Recording",source:"@site/docs/coteafs-appium/video-recording.md",sourceDirName:".",slug:"/video",permalink:"/website/projects/coteafs-appium/video",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/video-recording.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1647499074,formattedLastUpdatedAt:"3/17/2022",frontMatter:{id:"video",title:"Video Recording of tests"},sidebar:"docs",previous:{title:"Capture Screenshots",permalink:"/website/projects/coteafs-appium/screenshot"},next:{title:"Video streaming",permalink:"/website/projects/coteafs-appium/video-streaming"}},s={},p=[{value:"How to Enable Recording",id:"how-to-enable-recording",level:3},{value:"Video Record Settings",id:"video-record-settings",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],u={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-to-enable-recording"},"How to Enable Recording"),(0,o.kt)("p",null,"coteafs-appium supports the video recording of tests for Android as well as iOS."),(0,o.kt)("p",null,"To enable recording, following changes needs to be done in config file inside the devices block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},". . .\ndevices:\n  . . .\n  playback:\n    record:\n      enabled: true\n  . . .\n")),(0,o.kt)("h3",{id:"video-record-settings"},"Video Record Settings"),(0,o.kt)("p",null,"coteafs-appium also supports the customization of video recording settings. Following are the parameters which can be changed as per the requirement:"),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bit_rate"),": The video bit rate for the video, in megabits per second. Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"size"),": The video size of the generated media file. The format is ",(0,o.kt)("inlineCode",{parentName:"li"},"WIDTHxHEIGHT"),".")),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"quality"),": The video encoding quality (",(0,o.kt)("inlineCode",{parentName:"li"},"LOW"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"MEDIUM"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"HIGH"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PHOTO")," - defaults to medium). This option currently works for real devices Only.")))}f.isMDXComponent=!0}}]);