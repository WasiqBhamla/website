"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2613],{7182:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9603:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(498),r=n(972),i=(n(6687),n(7182)),o=["components"],l={title:"Why is Maven project more preferable than simple Java project?",authors:"faisal",image:"./images/discussion_overlay.png",tags:["Maven","CI","Automation testing"]},c=void 0,s={permalink:"/website/blog/2019/03/03/mavenproject-vs-javaproject",editUrl:"https://github.com/WasiqBhamla/website/edit/main/blog/blog/2019-03-03-mavenproject-vs-javaproject/index.md",source:"@site/blog/2019-03-03-mavenproject-vs-javaproject/index.md",title:"Why is Maven project more preferable than simple Java project?",description:"Introduction",date:"2019-03-03T00:00:00.000Z",formattedDate:"March 3, 2019",tags:[{label:"Maven",permalink:"/website/blog/tags/maven"},{label:"CI",permalink:"/website/blog/tags/ci"},{label:"Automation testing",permalink:"/website/blog/tags/automation-testing"}],readingTime:3.44,truncated:!0,authors:[{name:"Mohammad Faisal Khatri",title:"Engineer by profession, poet by heart.",url:"https://github.com/mfaisalkhatri",imageURL:"https://github.com/mfaisalkhatri.png",key:"faisal"}],frontMatter:{title:"Why is Maven project more preferable than simple Java project?",authors:"faisal",image:"./images/discussion_overlay.png",tags:["Maven","CI","Automation testing"]},prevItem:{title:"How to write API Tests using REST-Assured and OkHttp?",permalink:"/website/blog/2020/03/14/restassured-okhttp"},nextItem:{title:"Introduction to GitHub Actions Workflows",permalink:"/website/blog/2019/02/23/github-actions-workflows"}},p={image:n(4743).Z,authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What is Maven?",id:"what-is-maven",level:2},{value:"What is <code>pom.xml</code>?",id:"what-is-pomxml",level:2},{value:"Maven CLI Commands",id:"maven-cli-commands",level:2},{value:"References",id:"references",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Hello Everyone,"),(0,i.kt)("p",null,"Today we will be discussing about maven and java projects."),(0,i.kt)("p",null,"Many people are aware of Maven. But if I ask why would you prefer Maven based Java project over simple Java project?\nMany may give just a normal answer like \u201cMaven has the ability to download dependencies automatically based on the dependencies block you put in respective maven project\u2019s pom.xml file\u201d."),(0,i.kt)("p",null,"Yes, that\u2019s true and its one of the major bonus point of maven based java project. But there are certain other benefits in maven which when utilised fully can help you a lot in managing and implementing your project."),(0,i.kt)("p",null,"Let me describe you all the benefits of using maven on by one."),(0,i.kt)("p",null,"So, let\u2019s get started."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"maven-vs-java-discussion",src:n(2242).Z})),(0,i.kt)("h2",{id:"what-is-maven"},"What is Maven?"),(0,i.kt)("p",null,"Maven is a powerful project management tool that is based on POM (project object model). It is used for projects build, dependency and documentation."),(0,i.kt)("p",null,"How Maven solves the following problems we face in project management:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It adds all the necessary jars to the project as per the dependencies put ny user in pom.xml file."),(0,i.kt)("li",{parentName:"ol"},"Automatically creates the right project structure."),(0,i.kt)("li",{parentName:"ol"},"It makes a project easy to build."),(0,i.kt)("li",{parentName:"ol"},"It provides project information like log document, cross references sources, mailing list, dependency list, unit test reports, etc."),(0,i.kt)("li",{parentName:"ol"},"Works with CLI(Command line interface).")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Following is the project structure of maven project, created in Eclipse IDE:")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"maven-project-structure",src:n(2650).Z})),(0,i.kt)("h2",{id:"what-is-pomxml"},"What is ",(0,i.kt)("inlineCode",{parentName:"h2"},"pom.xml"),"?"),(0,i.kt)("p",null,"POM is an acronym for Project Object Model. It contains information about project and configuration of the project such as dependencies, build directory, source directory, test source directory, plugins, goal, etc.\nMaven reads pom.xml and then executes goal."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Following is the sample of pom.xm file:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <groupId>com.mfaisalkhatri</groupId>\n  <artifactId>cucumberpractice</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <packaging>jar</packaging>\n\n  <dependencies>\n    <dependency>\n      <groupId>junit</groupId>\n      <artifactId>junit</artifactId>\n      <version>4.12</version>\n      <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>org.seleniumhq.selenium</groupId>\n        <artifactId>selenium-java</artifactId>\n        <version>3.14.0</version>\n    </dependency>\n  </dependencies>\n  <build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.7.0</version>\n            <configuration>\n                <encoding>UTF-8</encoding>\n                <source>1.8</source>\n                <target>1.8</target>\n                <compilerArgument>-Werror</compilerArgument>\n            </configuration>\n        </plugin>\n    </plugins>\n  </build>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n</project>\n')))),(0,i.kt)("p",null,"Once you put dependencies inside the file and save it, maven searches for dependency in maven central repository and downloads the jar files accordingly for your project."),(0,i.kt)("h2",{id:"maven-cli-commands"},"Maven CLI Commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn validate")," : Validate the project is correct and all necessary information is available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn compile")," : Compile the source code of the project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn test")," : Test the compiled source code using a suitable unit testing framework. These tests should not require the code be packaged or deployed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn package")," : Take the compiled code and package it in its distributable format, such as a JAR."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn integration-test")," : Process and deploy the package if necessary into an environment where integration tests can be run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn verify")," : Run any checks to verify the package is valid and meets quality criteria."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn install")," : Install the package into the local repository, for use as a dependency in other projects locally."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn deploy")," : Done in an integration or release environment, copies the final package to the remote repository for sharing with other developers and projects.")),(0,i.kt)("p",null,"There are two other Maven life cycles of note beyond the default list above. They are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn clean")," : Cleans up artefacts created by prior builds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn site")," : Generates site documentation for this project.")),(0,i.kt)("p",null,"Phases are actually mapped to underlying goals. The specific goals executed per phase is dependent upon the packaging type of the project."),(0,i.kt)("p",null,"You can also run the above commands using life cycles commands for e.g."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn clean install")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn clean test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mvn clean verify"))),(0,i.kt)("p",null,"The other major flaw in simple java project is that you cannot run it from CLI also, all the packaging and deploying tasks needs to be taken care manually which is a very tedious task."),(0,i.kt)("p",null,"Hope, you have got the basic knowledge of how maven works and why it would be more preferable than the simple java project where you have to do everything manually."),(0,i.kt)("p",null,"Keep watching this site for more such interesting blogs."),(0,i.kt)("p",null,"Regards,"),(0,i.kt)("p",null,"Faisal Khatri."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maven commands have been taken from ",(0,i.kt)("a",{parentName:"li",href:"https://maven.apache.org"},"Maven"),".")))}m.isMDXComponent=!0},2242:function(e,t,n){t.Z=n.p+"assets/images/discussion-25eaea46c127c4f8fe197744b9819535.jpg"},4743:function(e,t){t.Z="data:image/png;base64,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"},2650:function(e,t){t.Z="data:image/png;base64,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"}}]);