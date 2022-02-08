"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6093],{7182:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(v,o(o({ref:t},d),{},{components:n})):i.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5723:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var i=n(891),a=n(466),r=(n(6687),n(7182)),o=["components"],s={id:"action-class",title:"Abstract Activity Action Class"},c=void 0,l={unversionedId:"action-class",id:"action-class",title:"Abstract Activity Action Class",description:"Background",source:"@site/docs/coteafs-appium/action-class.md",sourceDirName:".",slug:"/action-class",permalink:"/website/projects/coteafs-appium/action-class",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/action-class.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1644325023,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"action-class",title:"Abstract Activity Action Class"},sidebar:"docs",previous:{title:"Abstract Activity Class",permalink:"/website/projects/coteafs-appium/activity-class"},next:{title:"Error Handling",permalink:"/website/projects/coteafs-appium/error-handling"}},d=[{value:"Background",id:"background",children:[],level:2},{value:"How to write an Activity Action class?",id:"how-to-write-an-activity-action-class",children:[],level:2},{value:"How to use Activity Actions in Tests?",id:"how-to-use-activity-actions-in-tests",children:[],level:2},{value:"Other methods exposed by ActivityActions class are:",id:"other-methods-exposed-by-activityactions-class-are",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Let's take an example of LoginActivity provided in previous topic of ",(0,r.kt)("a",{parentName:"p",href:"/projects/coteafs-appium/activity-class/"},"Abstract Activity Class"),". If say there are multiple tests to be written, where Login activity is used for logging in different types of user's, it will be unnecessary code duplication of Login flow actions. In order to avoid such scenario's, a device specific abstract class is available which extends ",(0,r.kt)("inlineCode",{parentName:"p"},"DeviceActivityActions")," class, and simplifies the tedious task."),(0,r.kt)("p",null,"Following are the list of available actions classes for each type of platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AndroidActivityActions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IOSActivityActions"))),(0,r.kt)("p",null,"Whenever the above mentioned classes are extended, ",(0,r.kt)("inlineCode",{parentName:"p"},"perform")," method needs to be overridden by adding the Activity specific flow actions. If in case, some input values are required to be used in Activity flow, than ",(0,r.kt)("inlineCode",{parentName:"p"},"addInputValue")," method can be used to add input values in key-value format. Now to get the input values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"perform")," method, ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," method needs to be called by passing corresponding key for the input field for which value is required."),(0,r.kt)("h2",{id:"how-to-write-an-activity-action-class"},"How to write an Activity Action class?"),(0,r.kt)("p",null,"Lets take example of Login Activity a bit further and assume platform is ",(0,r.kt)("inlineCode",{parentName:"p"},"Android")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.github.wasiqb.coteafs.appium.android.AndroidActivityActions;\nimport com.github.wasiqb.coteafs.appium.android.AndroidDevice;\n\npublic class LoginActivityActions extends AndroidActivityActions {\n  public LoginActivityActions (final AndroidDevice device) {\n    super (device);\n  }\n\n  @Override\n  public void perform () {\n    final LoginActivity login = new LoginActivity (getDevice ());\n    login.onElement ("UserName")\n      .enterText (value ("UserName"));\n    login.onElement ("Password")\n      .enterText (value ("Password"));\n    login.onDevice ()\n      .hideKeyboard ();\n    login.onElement ("Login")\n      .tap ();\n  }\n}\n')),(0,r.kt)("h2",{id:"how-to-use-activity-actions-in-tests"},"How to use Activity Actions in Tests?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'. . .\n@Test (dataProvider = "loginDataProvider")\npublic void testLogin (final String user, final String password) {\n  final LoginActivityActions login = new LoginActivityActions (this.androidDevice);\n  login.addInputValue ("UserName", user)\n    .addInputValue ("Password", password)\n    .perform ();\n}\n. . .\n')),(0,r.kt)("h2",{id:"other-methods-exposed-by-activityactions-class-are"},"Other methods exposed by ActivityActions class are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getDevice")),(0,r.kt)("td",{parentName:"tr",align:null},"While return the currently used device instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addInputValue")),(0,r.kt)("td",{parentName:"tr",align:null},"Add input value by specifying the element name as key for corresponding Element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the input value specified in our Tests")))))}u.isMDXComponent=!0}}]);