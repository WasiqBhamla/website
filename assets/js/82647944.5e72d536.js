"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[432],{7182:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(6687);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=g(t),u=o,d=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=t[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},987:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return p},default:function(){return m}});var r=t(5905),o=t(7501),i=(t(6687),t(7182)),a=["components"],l={title:"Logging",id:"logging"},s=void 0,g={unversionedId:"logging",id:"logging",title:"Logging",description:"Problem Statement",source:"@site/docs/coteafs-appium/logging.md",sourceDirName:".",slug:"/logging",permalink:"/website/projects/coteafs-appium/logging",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/logging.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1645600253,formattedLastUpdatedAt:"2/23/2022",frontMatter:{title:"Logging",id:"logging"},sidebar:"docs",previous:{title:"Error Handling",permalink:"/website/projects/coteafs-appium/error-handling"},next:{title:"Verification of Elements",permalink:"/website/projects/coteafs-appium/verification"}},p=[{value:"Problem Statement",id:"problem-statement",children:[],level:2},{value:"Solution provided by this framework",id:"solution-provided-by-this-framework",children:[],level:2},{value:"Sample coteafs-logger config file",id:"sample-coteafs-logger-config-file",children:[],level:2}],c={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Many a time it happens that user is not able to identify which statement of code is running or where it gets stuck and he has to run the tests again in debug mode to make it clear."),(0,i.kt)("h2",{id:"solution-provided-by-this-framework"},"Solution provided by this framework"),(0,i.kt)("p",null,"This framework supports logging of low level events by using Log4j2. You can configure log4j2 config to turn on the logging."),(0,i.kt)("p",null,"Following is the sample output you'll get when logging is turned on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[21:25:58.889] [INFO ] - Preparing to perform actions on iOS device element UserName... (IOSActivity:)\n[21:25:58.903] [INFO ] - Loading elements on iOS activity... (DeviceActivity:)\n[21:26:03.472] [INFO ] - Clearing element [UserName]... (DeviceElementActions:)\n[21:26:05.509] [INFO ] - Entering text [User1] in element [UserName]... (DeviceElementActions:)\n[21:26:07.148] [INFO ] - Preparing to perform actions on iOS device element Password... (IOSActivity:)\n[21:26:12.372] [INFO ] - Clearing element [Password]... (DeviceElementActions:)\n[21:26:14.491] [INFO ] - Entering text [Pass@123] in element [Password]... (DeviceElementActions:)\n[21:26:15.985] [INFO ] - Preparing to perform actions on iOS device element Go... (IOSActivity:)\n[21:26:23.432] [INFO ] - Tapping on element [Go]... (DeviceElementActions:)\n")),(0,i.kt)("h2",{id:"sample-coteafs-logger-config-file"},"Sample coteafs-logger config file"),(0,i.kt)("p",null,"Following is the sample content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"log4j2.yaml")," which is used by the framework while executing it's tests."),(0,i.kt)("p",null,"The content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/log4j2.yaml")," is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'Configuration:\n  status: warn\n  name: Default\n  monitorInterval: 30\n\n  properties:\n    property:\n      - name: log-path\n        value: logs\n      - name: error-log\n        value: coteafs-appium-log-error\n      - name: all-log\n        value: coteafs-appium-log-all\n      - name: test-log\n        value: coteafs-appium-log-main\n      - name: log-pattern\n        value: "[%d{HH:mm:ss.SSS}] [%-5level] - %msg (%logger{1}:%L) %throwable{short.message}%n"\n\n  appenders:\n    Console:\n      name: "console-log"\n      target: SYSTEM_OUT\n      PatternLayout:\n        pattern: ${log-pattern}\n    RollingFile:\n      - name: "all-log-appender"\n        fileName: ${log-path}/${all-log}.log\n        filePattern: ${log-path}/${all-log}-%d{yyyy-MM-dd}.log\n        append: false\n        immediateFlush: true\n        PatternLayout:\n          pattern: ${log-pattern}\n        Policies:\n          TimeBasedTriggeringPolicy:\n            interval: 1\n            modulate: true\n          SizeBasedTriggeringPolicy:\n            size: 5MB\n      - name: "test-log-appender"\n        fileName: ${log-path}/${test-log}.log\n        filePattern: ${log-path}/${test-log}-%d{yyyy-MM-dd}.log\n        append: false\n        immediateFlush: true\n        PatternLayout:\n          pattern: ${log-pattern}\n        Policies:\n          TimeBasedTriggeringPolicy:\n            interval: 1\n            modulate: true\n          SizeBasedTriggeringPolicy:\n            size: 5MB\n      - name: "error-log-appender"\n        fileName: ${log-path}/${error-log}.log\n        filePattern: ${log-path}/${error-log}-%d{yyyy-MM-dd}.log\n        append: false\n        immediateFlush: true\n        PatternLayout:\n          pattern: ${log-pattern}\n        Policies:\n          TimeBasedTriggeringPolicy:\n            interval: 1\n            modulate: true\n          SizeBasedTriggeringPolicy:\n            size: 5MB\n    Async:\n      name: async\n      AppenderRef:\n        ref: "test-log-appender"\n\n  Loggers:\n    Root:\n      level: all\n      AppenderRef:\n        - ref: "console-log"\n          level: debug\n        - ref: "async"\n          level: info\n        - ref: "all-log-appender"\n          level: trace\n        - ref: "error-log-appender"\n          level: error\n')))}m.isMDXComponent=!0}}]);