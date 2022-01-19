"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8143],{7182:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(891),a=n(466),i=(n(6687),n(7182)),l=["components"],o={id:"config-basics",title:"Basic Config structure"},p=void 0,s={unversionedId:"config-basics",id:"config-basics",title:"Basic Config structure",description:"Overview",source:"@site/docs/coteafs-appium/config-basics.md",sourceDirName:".",slug:"/config-basics",permalink:"/website/projects/coteafs-appium/config-basics",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/config-basics.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1642610379,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"config-basics",title:"Basic Config structure"},sidebar:"docs",previous:{title:"Usage",permalink:"/website/projects/coteafs-appium/usage"},next:{title:"Server Settings",permalink:"/website/projects/coteafs-appium/server-setting"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Points to remember",id:"points-to-remember",children:[],level:2},{value:"Secret values interpolation",id:"secret-values-interpolation",children:[],level:2},{value:"Config structure",id:"config-structure",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Config file is the heart of this framework. It is supported by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasiqB/coteafs-datasource"},"coteafs-datasource")," framework which supports yaml file format parsing. This config file will contain all the settings needed for your tests. The framework will try to find the file with file name ",(0,i.kt)("inlineCode",{parentName:"p"},"appium-config.yaml")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/test/resources")," directory. If this file is not found in that location as well, then it will throw ",(0,i.kt)("inlineCode",{parentName:"p"},"CoteafsConfigFileNotFoundError"),"."),(0,i.kt)("h2",{id:"points-to-remember"},"Points to remember"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Config file should be always inside ",(0,i.kt)("inlineCode",{parentName:"li"},"src/test/resources")," folder of your project."),(0,i.kt)("li",{parentName:"ul"},"Config file name should be ",(0,i.kt)("inlineCode",{parentName:"li"},"appium-config")," and can be any of the following formats:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"properties")))),(0,i.kt)("li",{parentName:"ul"},"Whichever key is defined (",(0,i.kt)("em",{parentName:"li"},"in coming sections"),") as ",(0,i.kt)("inlineCode",{parentName:"li"},"key-value")," pair can have any casing key."),(0,i.kt)("li",{parentName:"ul"},"Spelling of the key should be same as provided in it's individual sections.")),(0,i.kt)("h2",{id:"secret-values-interpolation"},"Secret values interpolation"),(0,i.kt)("p",null,"Config file supports using of variables to hide sensitive values. Variables are enclosed in curly brackets, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"${variables}"),". Following are the supported variable formats."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input type"),(0,i.kt)("th",{parentName:"tr",align:null},"Variable sample"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Base64 Decoder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${base64Decoder:SGVsbG9Xb3JsZCE=}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Base64 Encoder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${base64Encoder:HelloWorld!}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Java Constant"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${const:java.awt.event.KeyEvent.VK_ESCAPE}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${date:yyyy-MM-dd}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DNS"),(0,i.kt)("td",{parentName:"tr",align:null},"`${dns:address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Environment Variable"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${env:USERNAME}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"File Content"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${file:UTF-8:src/test/resources/document.properties}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Java"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${java:version}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Localhost"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${localhost:canonical-name}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Properties File"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${properties:src/test/resources/document.properties::mykey}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Resource Bundle"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${resourceBundle:org.example.testResourceBundleLookup:mykey}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Script"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${script:javascript:3 + 4}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"System Property"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${sys:user.dir}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL Decoder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${urlDecoder:Hello%20World%21}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL Encoder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${urlEncoder:Hello World!}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL Content (HTTP)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${url:UTF-8:http://www.apache.org}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL Content (HTTPS)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${url:UTF-8:https://www.apache.org}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL Content (File)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${url:UTF-8:file:///${sys:user.dir}/src/test/resources/document.properties}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"XML XPath"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${xml:src/test/resources/document.xml:/root/path/to/node}"))))),(0,i.kt)("h2",{id:"config-structure"},"Config structure"),(0,i.kt)("p",null,"Config file structure is of the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"servers:\n  server_1:\n    . . .\n  server_2:\n    . . .\n\ndevices:\n  device_1:\n    . . .\n  device_2:\n    . . .\n")),(0,i.kt)("p",null,"To know more about each configuration section, see the documentation at,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/projects/coteafs-appium/server-setting/"},"Server configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/projects/coteafs-appium/device-setting/"},"Device configuration"))))}c.isMDXComponent=!0}}]);