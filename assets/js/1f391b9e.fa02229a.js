"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3085],{7690:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(6687),l=n(6355),i=n(5679),s=n(7182),c=n(9251),r=n(2116),m=n(8511),o="mdxPageWrapper_ou9Q";function d(e){var a=e.content,n=a.metadata,d=n.title,u=n.description,v=n.permalink,f=n.frontMatter,N=f.wrapperClassName,g=f.hide_table_of_contents;return t.createElement(i.Z,{title:d,description:u,permalink:v,wrapperClassName:null!=N?N:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!g&&"col--8")},t.createElement(s.Zo,{components:c.Z},t.createElement(a,null))),!g&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(r.Z,{toc:a.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},2116:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(498),l=n(972),i=n(6687),s=n(6355),c=n(7496),r="tableOfContents_urnx",m=["className"];function o(e){var a=e.className,n=(0,l.Z)(e,m);return i.createElement("div",{className:(0,s.Z)(r,"thin-scrollbar",a)},i.createElement(c.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7496:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(498),l=n(972),i=n(6687),s=n(8511),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,l.Z)(e,c),k=(0,s.LU)(),C=null!=f?f:k.tableOfContents.minHeadingLevel,_=null!=N?N:k.tableOfContents.maxHeadingLevel,p=(0,s.b9)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),b=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:C,maxHeadingLevel:_}}),[d,v,C,_]);return(0,s.Si)(b),i.createElement(r,(0,t.Z)({toc:p,className:m,linkClassName:d},g))}}}]);