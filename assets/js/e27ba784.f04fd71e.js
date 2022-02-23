"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2654],{7182:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5206:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(5905),i=n(7501),o=(n(6687),n(7182)),a=["components"],l={id:"alerts",title:"Alert Handling"},s=void 0,p={unversionedId:"alerts",id:"alerts",title:"Alert Handling",description:"Problem Statement",source:"@site/docs/coteafs-appium/alert-handling.md",sourceDirName:".",slug:"/alerts",permalink:"/website/projects/coteafs-appium/alerts",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/alert-handling.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1645600253,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"alerts",title:"Alert Handling"},sidebar:"docs",previous:{title:"Verification of Elements",permalink:"/website/projects/coteafs-appium/verification"},next:{title:"Keyboard Handling",permalink:"/website/projects/coteafs-appium/keyboard"}},c=[{value:"Problem Statement",id:"problem-statement",children:[],level:2},{value:"Solution provided by this Framework",id:"solution-provided-by-this-framework",children:[],level:2},{value:"Android Permission Alert",id:"android-permission-alert",children:[],level:2},{value:"Android and iOS pop-up Alert",id:"android-and-ios-pop-up-alert",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Alert handling in mobile automation is a very tedious task, whether it be Mobile, Tablet, Android or iOS. Many users waste good amount of time finding the solutions for it."),(0,o.kt)("h2",{id:"solution-provided-by-this-framework"},"Solution provided by this Framework"),(0,o.kt)("p",null,"This is very elegantly handled in the framework. Following is the code snippet of how to use it:"),(0,o.kt)("h2",{id:"android-permission-alert"},"Android Permission Alert"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nfinal LoginActivity login = new LoginActivity (this.androidDevice);\nString message = login.onDevice ().handlePermissionAlert("Allow");\nSystem.out.println (message);\n. . .\n')),(0,o.kt)("h2",{id:"android-and-ios-pop-up-alert"},"Android and iOS pop-up Alert"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},". . .\nfinal LoginActivity login = new LoginActivity (this.iosDevice);\nString message = login.onDevice ().handleAlert();\nSystem.out.println (message);\n. . .\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE:\nCurrently Appium only supports iOS native Alerts, hence, same is handled explicitly for Android in coteafs-appium.")))}u.isMDXComponent=!0}}]);