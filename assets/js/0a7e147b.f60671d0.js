"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9713],{7182:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(5905),i=n(7501),o=(n(6687),n(7182)),a=["components"],l={title:"ORP - Object Repository Pattern",id:"orp"},c=void 0,s={unversionedId:"orp",id:"orp",title:"ORP - Object Repository Pattern",description:"Problem Statement",source:"@site/docs/coteafs-appium/object-repo-pattern.md",sourceDirName:".",slug:"/orp",permalink:"/website/projects/coteafs-appium/orp",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/object-repo-pattern.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1646051070,formattedLastUpdatedAt:"2/28/2022",frontMatter:{title:"ORP - Object Repository Pattern",id:"orp"},sidebar:"docs",previous:{title:"Device Settings",permalink:"/website/projects/coteafs-appium/device-setting"},next:{title:"Supported Devices",permalink:"/website/projects/coteafs-appium/supported-devices"}},p=[{value:"Problem Statement",id:"problem-statement",children:[],level:2},{value:"Solution provided by this framework",id:"solution-provided-by-this-framework",children:[],level:2},{value:"What is DeviceElement and how it handles multiple elements?",id:"what-is-deviceelement-and-how-it-handles-multiple-elements",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"When we write Appium tests traditionally, locators tend to get scattered around our tests and it becomes very difficult to maintain it. Now, when we use Page Object concept, although it is the most recommended approach, it can still be a problem with maintenance when there are too many activities in an App."),(0,o.kt)("h2",{id:"solution-provided-by-this-framework"},"Solution provided by this framework"),(0,o.kt)("p",null,"This framework uses Object repository concept where all the user interactive elements are saved in their respective Activity classes and are declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"DeviceElement")," class. Hence, by using this concept it is easy to maintain the elements of a particular page, thereby, allowing us to access the elements easily."),(0,o.kt)("h2",{id:"what-is-deviceelement-and-how-it-handles-multiple-elements"},"What is DeviceElement and how it handles multiple elements?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DeviceElement")," class saves all the elements available on current Activity in hierarchical structure. Instead of finding all the elements on driver, it will help finding elements in a single hierarchy. It is mandatory to have a root element of that Activity as parent and all it's interactive elements as it's child."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Suppose you want to create a login test for a mobile app.\nHere is an example of how to create ",(0,o.kt)("inlineCode",{parentName:"p"},"DeviceElement")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginActivity")," class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'  // This is the root element as seen in Inspector\n  // which contains all the other input elements.\n  final DeviceElement main = DeviceElement.create ("Main")\n    .forAndroid (By.id ("android:id/content"));\n  DeviceElement.create ("Back")\n    .parent (main)    // Parent of current element.\n    .waitStrategy (WaitStrategy.VISIBLE)  // Wait strategy to be used while finding the element.\n    .forAndroid (By.xpath ("//android.widget.TextView[@text=\\"Back\\"]"))     // Locator used to find the element.\n    // We can set multiple locators for different Automation names.\n    .forAndroid (AutomationType.UIAUTOMATOR2, MobileBy.AndroidUIAutomator ("new UiSelector ().text (\\"Back\\");"));\n  DeviceElement.create ("UserName")\n    .forAndroid (MobileBy.AccessibilityId ("username"))\n    .index (1)    // Index of element when multiple elements for same locator exists.\n    .parent (main);\n  DeviceElement.create ("Password")\n    .forAndroid (MobileBy.AccessibilityId ("password"))\n    .parent (main);\n  DeviceElement.create ("Login")\n    .forAndroid (MobileBy.AccessibilityId ("login"))\n    .parent (main);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Did you notice ",(0,o.kt)("inlineCode",{parentName:"p"},"forAndroid")," method used in the code above?")),(0,o.kt)("p",null,"It refers to locators specific for Android platform.\nLikewise, ",(0,o.kt)("inlineCode",{parentName:"p"},"forIos")," method is used to save iOS platform specific locator."),(0,o.kt)("p",null,"If you still find it difficult to understand, message me by clicking on the chat icon on the extreme right bottom of this site."))}m.isMDXComponent=!0}}]);