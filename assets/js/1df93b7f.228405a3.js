"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{8411:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(891),a=n(6687),i=n(6355),o="features_Nvz5",l="featureSvg_12dn",c=n(7872),s=function(e){var t=e.title,n=e.image;return a.createElement("div",{className:"text--center"},a.createElement("img",{className:l,alt:t,src:(0,c.Z)(n)}))},m=function(e){var t=e.title,n=e.description;return a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h2",null,t),a.createElement("p",null,n))},u=function(e){var t=e.title,n=e.image,r=e.description;return a.createElement("div",{className:(0,i.Z)("col col--4")},a.createElement(s,{title:t,image:n}),a.createElement(m,{title:t,description:r}))},d=function(e){var t=e.features;return a.createElement("section",{className:o},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement(u,(0,r.Z)({key:t},e))})))))}},1656:function(e,t,n){n.d(t,{c:function(){return N}});var r=n(6687),a=n(7872),i="HeroContainer_2kmS",o="HeroContent_2O6v",l="HeroTitle_G8YS",c="HeroDescription_1bRq",s="CallToActions_3Qbm",m="ctaButtons_3tNE",u="SocialButtons_1w-w",d=n(4602),g=function(e){var t=e.userId,n=e.repoName,a=void 0===n?void 0:n,i=e.type,o=void 0===i?"Follow":i,l=""+t,c=""+o,s=""+o;return"Follow"!==o&&a&&(c+=" "+(l+="/"+a)),"Watch"===o?l+="/subscription":"Fork"===o?l+="/fork":"Follow"===o&&(s+=" @"+t),r.createElement(d.Z,{href:"https://github.com/"+l,"data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-size":"large","data-show-count":"true","aria-label":c+" on GitHub"},s)},p=n(6355),f=n(2428),v=function(e){var t=e.href,n=e.type,a=e.target,i=e.text;return r.createElement(f.rU,{className:(0,p.Z)("button",n),to:t,target:a},i)},h=n(9674),E=n.n(h),w=n(6783),b=function(e){var t=e.title,n=e.tagLine;return r.createElement("div",{className:o},r.createElement("h1",{className:l},t),r.createElement(E(),{avgTypingDelay:40,cursor:{hideWhenDone:!0,show:!1}},r.createElement("p",{className:c},n)))},k=function(e){var t=e.buttons;return r.createElement("div",{className:m},t&&t.map((function(e){return r.createElement(v,{key:e.id,href:(0,a.Z)(e.href),text:e.text,type:e.type,target:e.target})})))},y=function(e){var t=e.gitButtons,n=e.showTwitter;return r.createElement("div",{className:u},t&&t.map((function(e){return r.createElement(g,{key:e.id,id:e.id,userId:e.userId,repoName:e.repoName,type:e.type})})),n&&r.createElement(w.AI,{screenName:"WasiqBhamla"}))},N=function(e){var t=e.title,n=e.tagLine,o=e.image,l=e.buttons,c=void 0===l?[]:l,m=e.gitButtons,u=void 0===m?[]:m,d=e.showTwitter,g=void 0!==d&&d;return r.createElement("section",{className:i,style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+(0,a.Z)(o)+")"}},r.createElement(b,{title:t,tagLine:n}),r.createElement("div",{className:s},r.createElement(k,{buttons:c}),r.createElement(y,{gitButtons:u,showTwitter:g})))}},2369:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(6687),a=n(9681),i=n(4188),o=n(8411),l=n(1656),c=JSON.parse('{"ZY":[{"id":1,"type":"button--primary","target":"_self","text":"About","href":"/about"}],"tr":[{"id":1,"userId":"WasiqB","type":"Follow","repoName":null}],"uZ":[{"title":"Freelancing projects","image":"/img/undraw_Organizing_projects.svg","description":"I can help automate any product for any platform (e.g: Web, API, Android and iOS) or help you create Test automation frameworks."},{"title":"Personalized Training","image":"/img/undraw_personal_training.svg","description":"I can provide personalized training for any tech stack related to Test Automation and CI / CD."},{"title":"Mentoring","image":"/img/undraw_teacher.svg","description":"I can help mentor you in Test Automation space, understand different concepts and tools used for Automation and CI / CD."},{"title":"Knowledge sharing","image":"/img/undraw_knowledge.svg","description":"I like sharing my knowledge with the QA community. I am thinking of sharing my knowledge via blogs, YouTube videos, workshops, talks, etc."}]}'),s=n(1423),m=function(e){var t=e.title,n=e.description;return r.createElement(l.c,{image:"/img/home_banner.jpg",tagLine:n,title:t,buttons:c.ZY,gitButtons:c.tr,showTwitter:!0})},u=function(){var e=(0,i.Z)().siteConfig;return r.createElement(a.Z,{title:e.title,description:e.tagline},r.createElement(m,{title:e.title,description:e.tagline}),r.createElement("main",null,r.createElement(o.A,{features:c.uZ})),r.createElement(s.Z,null))}}}]);