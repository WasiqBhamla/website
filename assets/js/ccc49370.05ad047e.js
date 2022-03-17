"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{7525:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(972),l=a(6687),r=a(6355),i=a(5679),o=a(5882),s="sidebar_Nt4n",m="sidebarItemTitle_fEyz",c="sidebarItemList_bOWG",u="sidebarItem_CaZx",d="sidebarItemLink_o1kq",g="sidebarItemLinkActive_fyXK",p=a(7965);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];function b(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},4632:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(6687),l=a(6355),r=a(7182),i=a(7965),o=a(5882),s=a(3688),m=a(8511),c=a(1496),u=a(9251),d=a(9395),g="blogPostTitle_Rc0Z",p="blogPostData_ihZN",v="blogPostDetailsFull_Y2yT",h=a(4607),b="image_WoUL";function E(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function f(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL,o=t.email,s=r||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(E,{href:s},n.createElement("img",{className:b,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var N="authorCol_SQPC",_="imageOnlyAuthorRow_cGgT",Z="imageOnlyAuthorCol_MokU";function k(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?_:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?Z:N),key:t},n.createElement(f,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function P(e){var t,a,b,E=(b=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return b(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,s.C)().withBaseUrl,N=e.children,_=e.frontMatter,Z=e.assets,P=e.metadata,L=e.truncated,C=e.isBlogPostPage,T=void 0!==C&&C,y=P.date,w=P.formattedDate,I=P.permalink,x=P.tags,A=P.readingTime,M=P.title,R=P.editUrl,H=P.authors,U=null!=(t=Z.image)?t:_.image,B=!T&&L,O=x.length>0,F=T?"h1":"h2";return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(F,{className:g,itemProp:"headline"},T?M:n.createElement(o.Z,{itemProp:"url",to:I},M)),n.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},n.createElement("time",{dateTime:y,itemProp:"datePublished"},w),void 0!==A&&n.createElement(n.Fragment,null," \xb7 ",E(A))),n.createElement(k,{authors:H,assets:Z})),U&&n.createElement("meta",{itemProp:"image",content:f(U,{absolute:!0})}),n.createElement("div",{id:T?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:u.Z},N)),(O||L)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[v]=T,a))},O&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":B})},n.createElement(h.Z,{tags:x})),T&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:R})),B&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":O})},n.createElement(o.Z,{to:P.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},144:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(6687),l=a(748),r=a(7525),i=a(4632),o=a(498),s=a(7965),m=a(355);function c(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,(0,o.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,(0,o.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var u=a(8511),d=a(2116);function g(e){var t,a=e.content,o=e.sidebar,s=a.assets,m=a.metadata,g=m.title,p=m.description,v=m.nextItem,h=m.prevItem,b=m.date,E=m.tags,f=m.authors,N=m.frontMatter,_=N.hide_table_of_contents,Z=N.keywords,k=N.toc_min_heading_level,P=N.toc_max_heading_level,L=null!=(t=s.image)?t:N.image;return n.createElement(r.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:o,toc:!_&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:g,description:p,keywords:Z,image:L},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),f.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:f.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:N,assets:s,metadata:m,isBlogPostPage:!0},n.createElement(a,null)),(v||h)&&n.createElement(c,{nextItem:v,prevItem:h}))}},9395:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(6687),l=a(7965),r=a(498),i=a(972),o=a(6355),s="iconEdit_E8ui",m=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(8511);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},355:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(6687),l=a(5882);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},2116:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(498),l=a(972),r=a(6687),i=a(6355),o=a(7496),s="tableOfContents_urnx",m=["className"];function c(e){var t=e.className,a=(0,l.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7496:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(498),l=a(972),r=a(6687),i=a(8511),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,g=void 0===d?void 0:d,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,o),b=(0,i.LU)(),E=null!=p?p:b.tableOfContents.minHeadingLevel,f=null!=v?v:b.tableOfContents.maxHeadingLevel,N=(0,i.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),_=(0,r.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:f}}),[u,g,E,f]);return(0,i.Si)(_),r.createElement(s,(0,n.Z)({toc:N,className:m,linkClassName:u},h))}},7747:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(6687),l=a(6355),r=a(5882),i="tag_NtCW",o="tagRegular_RjL0",s="tagWithCount_BbNu";function m(e){var t,a=e.permalink,m=e.name,c=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[o]=!c,t[s]=c,t))},m,c&&n.createElement("span",null,c))}},4607:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(6687),l=a(6355),r=a(7965),i=a(7747),o="tags_rRFV",s="tag_nhRF";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);