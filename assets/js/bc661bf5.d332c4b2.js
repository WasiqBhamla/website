"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4193],{7877:function(e,t,r){r.d(t,{c:function(){return _}});var a=r(6687),n=r(4910),o="HeroContainer_v2Am",c="HeroContent_wUuq",i="HeroTitle_d7d0",s="HeroDescription_Bq3r",l="CallToActions_tDGG",m="ctaButtons_Nl6G",u="SocialButtons_sdl9",p=r(2405),d=function(e){var t=e.userId,r=e.repoName,n=void 0===r?void 0:r,o=e.type,c=void 0===o?"Follow":o,i=""+t,s=""+c,l=""+c;return"Follow"!==c&&n&&(s+=" "+(i+="/"+n)),"Watch"===c?i+="/subscription":"Fork"===c?i+="/fork":"Follow"===c&&(l+=" @"+t),a.createElement(p.Z,{href:"https://github.com/"+i,"data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-size":"large","data-show-count":"true","aria-label":s+" on GitHub"},l)},f=r(6355),g=r(7459),E=function(e){var t=e.href,r=e.type,n=e.target,o=e.text;return a.createElement(g.Z,{className:(0,f.Z)("button",r),to:t,target:n},o)},v=r(9674),h=r.n(v),N=r(6783),b=function(e){var t=e.title,r=e.tagLine;return a.createElement("div",{className:c},a.createElement("h1",{className:i},t),a.createElement(h(),{avgTypingDelay:40,cursor:{hideWhenDone:!0,show:!1}},a.createElement("p",{className:s},r)))},w=function(e){var t=e.buttons;return a.createElement("div",{className:m},t&&t.map((function(e){return a.createElement(E,{key:e.id,href:(0,n.Z)(e.href),text:e.text,type:e.type,target:e.target})})))},k=function(e){var t=e.gitButtons,r=e.showTwitter;return a.createElement("div",{className:u},t&&t.map((function(e){return a.createElement(d,{key:e.id,id:e.id,userId:e.userId,repoName:e.repoName,type:e.type})})),r&&a.createElement(N.AI,{screenName:"WasiqBhamla"}))},_=function(e){var t=e.title,r=e.tagLine,c=e.image,i=e.buttons,s=void 0===i?[]:i,m=e.gitButtons,u=void 0===m?[]:m,p=e.showTwitter,d=void 0!==p&&p;return a.createElement("section",{className:o,style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+(0,n.Z)(c)+")"}},a.createElement(b,{title:t,tagLine:r}),a.createElement("div",{className:l},a.createElement(w,{buttons:s}),a.createElement(k,{gitButtons:u,showTwitter:d})))}},8524:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var a=r(4910),n=r(1346),o=r(7805),c=r(6687),i=r(7877),s=r(5177),l=r(7459),m=r(6355),u="ProjectsContainer_MLXs",p="Project_CTH8",d="ProjectImage_yvHz",f="ProjectInfo_jUrv",g="ProjectTitle_XpKp",E="ProjectDescription_JLGn",v=function(e){var t=e.title,r=e.image,n=e.description,o=e.link;return c.createElement("article",{className:(0,m.Z)(p,"col col--4")},c.createElement("div",{className:d},c.createElement("img",{src:(0,a.Z)(r),alt:t})),c.createElement("div",{className:f},c.createElement("h3",{className:g},c.createElement(l.Z,{to:(0,a.Z)(o),target:"_self"},t)),c.createElement("p",{className:E},n)))},h=function(e){var t=e.projects;return c.createElement("section",{className:u},c.createElement("div",{className:"container"},c.createElement("div",{className:"row"},t.map((function(e,t){return c.createElement(v,(0,s.Z)({key:t},e))})))))},N=JSON.parse('{"TN":"My Projects","WL":"Checkout my open source projects hosted on GitHub listed below.","BH":"/img/projects/projects.jpg","q":[{"title":"Coteafs-Appium","description":"Wrapper Appium Test Automation Framework which supports Automation of Mobile and Tablet apps for Android and iOS Real Devices / Emulators.","image":"/img/projects/coteafs-appium/appium-banner.gif","link":"/projects/coteafs-appium"}]}'),b=function(){return c.createElement(o.Z,null,c.createElement(i.c,{image:(0,a.Z)(N.BH),tagLine:N.WL,title:N.TN,buttons:[],gitButtons:[]}),c.createElement(h,{projects:N.q}),c.createElement(n.Z,null))}}}]);