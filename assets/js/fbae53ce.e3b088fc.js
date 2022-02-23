"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2083],{7182:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(6687);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=s,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4178:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return c},default:function(){return h}});var n=r(5905),s=r(7501),a=(r(6687),r(7182)),o=["components"],i={title:"How to write API Tests using REST-Assured and OkHttp?",authors:"faisal",image:"./images/christopher-gower-unsplash.jpg",tags:["OkHttp","REST-Assured","Automation testing","API Testing"]},u=void 0,l={permalink:"/website/blog/2020/03/14/restassured-okhttp",editUrl:"https://github.com/WasiqBhamla/website/edit/main/blog/blog/2020-03-14-restassured-okhttp/index.md",source:"@site/blog/2020-03-14-restassured-okhttp/index.md",title:"How to write API Tests using REST-Assured and OkHttp?",description:"What is REST-Assured?",date:"2020-03-14T00:00:00.000Z",formattedDate:"March 14, 2020",tags:[{label:"OkHttp",permalink:"/website/blog/tags/ok-http"},{label:"REST-Assured",permalink:"/website/blog/tags/rest-assured"},{label:"Automation testing",permalink:"/website/blog/tags/automation-testing"},{label:"API Testing",permalink:"/website/blog/tags/api-testing"}],readingTime:1.365,truncated:!0,authors:[{name:"Mohammad Faisal Khatri",title:"Engineer by profession, poet by heart.",url:"https://github.com/mfaisalkhatri",imageURL:"https://github.com/mfaisalkhatri.png",key:"faisal"}],nextItem:{title:"Why is Maven project more preferable than simple Java project?",permalink:"/website/blog/2019/03/03/mavenproject-vs-javaproject"}},p={image:r(4382).Z,authorsImageUrls:[void 0]},c=[{value:"\u2753 What is REST-Assured?",id:"-what-is-rest-assured",children:[],level:2},{value:"\u2753 What is OkHttp?",id:"-what-is-okhttp",children:[],level:2},{value:"\u2753 How to write API Tests using REST-Assured/ OkHttp?",id:"-how-to-write-api-tests-using-rest-assured-okhttp",children:[],level:2},{value:"\ud83d\udca1 REST-Assured or OkHttp?",id:"-rest-assured-or-okhttp",children:[],level:2}],d={toc:c};function h(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-what-is-rest-assured"},"\u2753 What is REST-Assured?"),(0,a.kt)("p",null,"REST Assured is a Java library that provides a domain-specific language (DSL) for writing powerful, maintainable tests for RESTful APIs."),(0,a.kt)("h2",{id:"-what-is-okhttp"},"\u2753 What is OkHttp?"),(0,a.kt)("p",null,"OkHTTP is an open source project designed to be an efficient HTTP client:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP/2 support allows all requests to the same host to share a socket."),(0,a.kt)("li",{parentName:"ul"},"Connection pooling reduces request latency (if HTTP/2 isn\u2019t available)."),(0,a.kt)("li",{parentName:"ul"},"Transparent GZIP shrinks download sizes."),(0,a.kt)("li",{parentName:"ul"},"Response caching avoids the network completely for repeat requests.")),(0,a.kt)("h2",{id:"-how-to-write-api-tests-using-rest-assured-okhttp"},"\u2753 How to write API Tests using REST-Assured/ OkHttp?"),(0,a.kt)("p",null,"As many of you know that REST-Assured and OkHttp are currently in demand for writing automation tests for APIs. I was learning about Rest-Assured and OkHttp, an idea just popped into my mind, why not save the code on github so it would serve as a learning material for beginners."),(0,a.kt)("p",null,"Hence, I created a repository on github(checkout the link below). It has API testing example codes for GET, POST, PUT, PATCH and DELETE requests using REST-Assured as well as OkHttp."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mfaisalkhatri/OkHttpRestAssuredExamples"},"OkHttpRestAssuredExamples")),(0,a.kt)("h2",{id:"-rest-assured-or-okhttp"},"\ud83d\udca1 REST-Assured or OkHttp?"),(0,a.kt)("p",null,"Interesting question! While I was running the tests, I found an interesting thing which caught my attention. The execution speed of OkHttp when compared to Rest-assured was far better.\nCheckout the following blog for more details about REST-Assured and OkHttp performance with reference to execution time:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://iamfaisalkhatri.wordpress.com/2020/03/10/rest-assured-or-okhttp/"},"REST-Assured or OkHttp?")),(0,a.kt)("p",null,"In the end, I would like to mention that it all depends on the project and your requirement for choosing the framework to write and execute the tests. Everything has something unique, its up to you how you choose!!"))}h.isMDXComponent=!0},4382:function(e,t,r){t.Z=r.p+"assets/images/christopher-gower-unsplash-cb2de6085bb7b1476261d3802c35ad22.jpg"}}]);