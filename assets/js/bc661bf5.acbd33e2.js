"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4193],{3132:function(e,t,r){r.d(t,{c:function(){return _}});var a=r(6687),n=r(9004),o="HeroContainer_2kmS",c="HeroContent_2O6v",i="HeroTitle_G8YS",s="HeroDescription_1bRq",l="CallToActions_3Qbm",m="ctaButtons_3tNE",u="SocialButtons_1w-w",p=r(4602),d=function(e){var t=e.userId,r=e.repoName,n=void 0===r?void 0:r,o=e.type,c=void 0===o?"Follow":o,i=""+t,s=""+c,l=""+c;return"Follow"!==c&&n&&(s+=" "+(i+="/"+n)),"Watch"===c?i+="/subscription":"Fork"===c?i+="/fork":"Follow"===c&&(l+=" @"+t),a.createElement(p.Z,{href:"https://github.com/"+i,"data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-size":"large","data-show-count":"true","aria-label":s+" on GitHub"},l)},f=r(6355),g=r(2428),E=function(e){var t=e.href,r=e.type,n=e.target,o=e.text;return a.createElement(g.rU,{className:(0,f.Z)("button",r),to:t,target:n},o)},v=r(9674),b=r.n(v),N=function(e){var t=e.title,r=e.tagLine;return a.createElement("div",{className:c},a.createElement("h1",{className:i},t),a.createElement(b(),{avgTypingDelay:40,cursor:{hideWhenDone:!0,show:!1}},a.createElement("p",{className:s},r)))},h=function(e){var t=e.buttons;return a.createElement("div",{className:m},t&&t.map((function(e){return a.createElement(E,{key:e.id,href:(0,n.Z)(e.href),text:e.text,type:e.type,target:e.target})})))},k=function(e){var t=e.gitButtons;return a.createElement("div",{className:u},t&&t.map((function(e){return a.createElement(d,{key:e.id,id:e.id,userId:e.userId,repoName:e.repoName,type:e.type})})))},_=function(e){var t=e.title,r=e.tagLine,c=e.image,i=e.buttons,s=void 0===i?[]:i,m=e.gitButtons,u=void 0===m?[]:m;return a.createElement("section",{className:o,style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+(0,n.Z)(c)+")"}},a.createElement(N,{title:t,tagLine:r}),a.createElement("div",{className:l},a.createElement(h,{buttons:s}),a.createElement(k,{gitButtons:u})))}},6085:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var a=r(9004),n=r(9839),o=r(6687),c=r(3132),i=r(891),s=r(2428),l=r(6355),m="ProjectsContainer_24vV",u="Project_2umy",p="ProjectImage_56Ex",d="ProjectInfo_2KIK",f="ProjectTitle_2SPM",g="ProjectDescription_xrlm",E=function(e){var t=e.title,r=e.image,n=e.description,c=e.link;return o.createElement("article",{className:(0,l.Z)(u,"col col--4")},o.createElement("div",{className:p},o.createElement("img",{src:(0,a.Z)(r),alt:t})),o.createElement("div",{className:d},o.createElement("h3",{className:f},o.createElement(s.rU,{to:(0,a.Z)(c),target:"_self"},t)),o.createElement("p",{className:g},n)))},v=function(e){var t=e.projects;return o.createElement("section",{className:m},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},t.map((function(e,t){return o.createElement(E,(0,i.Z)({key:t},e))})))))},b=JSON.parse('{"TN":"My Projects","WL":"Checkout my open source projects hosted on GitHub listed below.","BH":"/img/projects/projects.jpg","q":[{"title":"Coteafs-Appium","description":"Wrapper Appium Test Automation Framework which supports Automation of Mobile and Tablet apps for Android and iOS Real Devices / Emulators.","image":"/img/projects/coteafs-appium/appium-banner.gif","link":"/projects/coteafs-appium"}]}'),N=function(){return o.createElement(n.Z,null,o.createElement(c.c,{image:(0,a.Z)(b.BH),tagLine:b.WL,title:b.TN,buttons:[],gitButtons:[]}),o.createElement(v,{projects:b.q}))}}}]);