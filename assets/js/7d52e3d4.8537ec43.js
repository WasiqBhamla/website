"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[219],{7182:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var i=n(5177),a=n(4416),l=(n(6687),n(7182)),o=["components"],r={title:"Beginners guide for Appium Automation for iOS apps",authors:"wasiq",image:"./images/appium-ios.jpeg",tags:["Appium","Appium iOS"]},s=void 0,p={permalink:"/website/blog/2017/04/24/appium-automation-ios",editUrl:"https://github.com/WasiqBhamla/website/edit/main/blog/blog/2017-04-24-appium-automation-ios/index.md",source:"@site/blog/2017-04-24-appium-automation-ios/index.md",title:"Beginners guide for Appium Automation for iOS apps",description:"Introduction",date:"2017-04-24T00:00:00.000Z",formattedDate:"April 24, 2017",tags:[{label:"Appium",permalink:"/website/blog/tags/appium"},{label:"Appium iOS",permalink:"/website/blog/tags/appium-i-os"}],readingTime:6.225,truncated:!0,authors:[{name:"Wasiq Amjad Bhamla",title:"Senior QA Consultant at Thoughtworks",url:"https://github.com/WasiqB",imageURL:"https://github.com/WasiqB.png",key:"wasiq"}],frontMatter:{title:"Beginners guide for Appium Automation for iOS apps",authors:"wasiq",image:"./images/appium-ios.jpeg",tags:["Appium","Appium iOS"]},prevItem:{title:"Introduction to GitHub Actions Workflows",permalink:"/website/blog/2019/02/23/github-actions-workflows"}},u={image:n(3893).Z,authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What do we need for iOS Automation?",id:"what-do-we-need-for-ios-automation",level:2},{value:"Step 1: Needs Mac OS X",id:"step-1-needs-mac-os-x",level:3},{value:"Step 2: Create Apple Developer ID",id:"step-2-create-apple-developer-id",level:3},{value:"Step 3: Install XCode",id:"step-3-install-xcode",level:3},{value:"Step 4: Install Homebrew",id:"step-4-install-homebrew",level:3},{value:"Step 5: Install NodeJS",id:"step-5-install-nodejs",level:3},{value:"Step 6: Install Appium Command Line tool",id:"step-6-install-appium-command-line-tool",level:3},{value:"Step 7: Download Appium Desktop",id:"step-7-download-appium-desktop",level:3},{value:"Step 8: Install ideviceinstaller",id:"step-8-install-ideviceinstaller",level:3},{value:"Step 9: Install ios-deploy",id:"step-9-install-ios-deploy",level:3},{value:"Step 10: Install\xa0carthage",id:"step-10-installcarthage",level:3},{value:"Step 11:\xa0Navigate to the bin folder",id:"step-11navigate-to-the-bin-folder",level:3},{value:"Step 12: Install Appium XCUI Driver",id:"step-12-install-appium-xcui-driver",level:3},{value:"Step 13: Finding device UDID",id:"step-13-finding-device-udid",level:3},{value:"Step 14: Open WebDriverAgent project in XCode",id:"step-14-open-webdriveragent-project-in-xcode",level:3},{value:"Step 15: Enable Automatic\xa0Code Signing",id:"step-15-enable-automaticcode-signing",level:3},{value:"Step 16: Building WebDriverAgent from Terminal",id:"step-16-building-webdriveragent-from-terminal",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"I just completed setting up my Mac for Appium and wanted to share my findings with all. Unlike Windows,\xa0the steps to setting up Mac machine for iOS devices is not that easy. We will see the complete steps required in order to get us ready for iOS testing with Appium on Mac OS X."),(0,l.kt)("h2",{id:"what-do-we-need-for-ios-automation"},"What do we need for iOS Automation?"),(0,l.kt)("p",null,"Now we will see what steps we need to follow, so make sure you are following it properly."),(0,l.kt)("h3",{id:"step-1-needs-mac-os-x"},"Step 1: Needs Mac OS X"),(0,l.kt)("p",null,"iOS Automation with Appium can only be done on Mac OS X machine so it is advisable to upgrade the OS to the latest version (which in my case is 10.12 Seirra). This can be done from the App Store."),(0,l.kt)("h3",{id:"step-2-create-apple-developer-id"},"Step 2: Create Apple Developer ID"),(0,l.kt)("p",null,"Now you need to create your ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/"},"Apple Developer ID"),". This is required in later steps."),(0,l.kt)("h3",{id:"step-3-install-xcode"},"Step 3: Install XCode"),(0,l.kt)("p",null,"Install the latest version of XCode available in App Store."),(0,l.kt)("h3",{id:"step-4-install-homebrew"},"Step 4: Install Homebrew"),(0,l.kt)("p",null,"Homebrew is an easy to use utility to install packages on our Mac. You need to just enter the following command in the terminal, and hit return."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,l.kt)("h3",{id:"step-5-install-nodejs"},"Step 5: Install NodeJS"),(0,l.kt)("p",null,"Instead of using brew to install NodeJS, it is advisable to use installer package for the latest version available ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"here"),"\xa0for installing NodeJS. It is a simple user friendly installer which will guide you in installation process."),(0,l.kt)("h3",{id:"step-6-install-appium-command-line-tool"},"Step 6: Install Appium Command Line tool"),(0,l.kt)("p",null,"To install latest version of Appium, you need to execute the following command in the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ npm install -g appium\n")),(0,l.kt)("h3",{id:"step-7-download-appium-desktop"},"Step 7: Download Appium Desktop"),(0,l.kt)("p",null,"Next, download the latest version of Appium Desktop available ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/appium/appium-desktop/releases"},"here"),". We will see in detail how to use this tool\xa0later."),(0,l.kt)("h3",{id:"step-8-install-ideviceinstaller"},"Step 8: Install ideviceinstaller"),(0,l.kt)("p",null,"Install the latest version for ",(0,l.kt)("inlineCode",{parentName:"p"},"ideviceinstaller")," by executing the following command in the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ brew install ideviceinstaller\n")),(0,l.kt)("h3",{id:"step-9-install-ios-deploy"},"Step 9: Install ios-deploy"),(0,l.kt)("p",null,"Install the latest version for ",(0,l.kt)("inlineCode",{parentName:"p"},"ios-deploy")," by executing the following command in the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ npm install -g ios-deploy\n")),(0,l.kt)("h3",{id:"step-10-installcarthage"},"Step 10: Install\xa0carthage"),(0,l.kt)("p",null,"Install the latest version for ",(0,l.kt)("inlineCode",{parentName:"p"},"carthage"),"\xa0by executing the following command in the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ brew install carthage\n")),(0,l.kt)("h3",{id:"step-11navigate-to-the-bin-folder"},"Step 11:\xa0Navigate to the bin folder"),(0,l.kt)("p",null,"From terminal, run the following command to navigate to the bin folder where Appium is installed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ which appium\n$ cd /to/the/path/returned/above\n$ cd ..\n")),(0,l.kt)("h3",{id:"step-12-install-appium-xcui-driver"},"Step 12: Install Appium XCUI Driver"),(0,l.kt)("p",null,"Install the latest version of appium-xcui-driver by executing the following command in the terminal while being on the path from the previous step."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ npm install -g appium-xcuitest-driver\n")),(0,l.kt)("h3",{id:"step-13-finding-device-udid"},"Step 13: Finding device UDID"),(0,l.kt)("p",null,"Connect the device to the machine via USB, then open XCode. Navigate to the menu Window\xa0\u2192 Devices. Then select your device from left panel."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Device list",src:n(6192).Z})),(0,l.kt)("p",null,"Once you select your device, you should see the details as shown, You need to save the device identifier for later use."),(0,l.kt)("h3",{id:"step-14-open-webdriveragent-project-in-xcode"},"Step 14: Open WebDriverAgent project in XCode"),(0,l.kt)("p",null,"In order to open the project in XCode, execute the following set of commands in the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ cd lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent\n$ open WebDriverAgent.xcodeproj\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Xcode General screen",src:n(279).Z})),(0,l.kt)("p",null,"A window like this will open up."),(0,l.kt)("h3",{id:"step-15-enable-automaticcode-signing"},"Step 15: Enable Automatic\xa0Code Signing"),(0,l.kt)("p",null,"We need to enable Automatic code signing and deploy the runner project on the device. This can be illustrated as below."),(0,l.kt)("p",null,"First, we will select WebDriverAgentLib, and select Automatically manage signing. A pop-up will appear, click on ",(0,l.kt)("strong",{parentName:"p"},"Enable Automatic"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"XCode General Auto sign screen",src:n(1946).Z})),(0,l.kt)("p",null,"Once you enable Auto signing, you will see Team drop down, there you need to select your Apple Developer Account from the list."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"XCode Auto sign team setting screen",src:n(3266).Z})),(0,l.kt)("p",null,"This is shown as illustrated above."),(0,l.kt)("p",null,"Now, select WebDriverAgentRunner from the Target list, and enable Automatic signing as done earlier. But this time you\xa0will see an Error as shown below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"XCode Auto sign error screen",src:n(6402).Z})),(0,l.kt)("p",null,"In order to solve this Error, you need to modify\xa0Product Bundle Identifier\xa0under Build settings tab from com.facebook.WebDriverAgentRunner to something unique as shown below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"XCode Build screen",src:n(6272).Z})),(0,l.kt)("p",null,"Now, again go to General tab to check the Error. Now you will notice that the Error is gone. Same can be seen below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"XCode Auto sign succeeded",src:n(2268).Z})),(0,l.kt)("p",null,"Now once, all is set we need to build the project from within XCode by clicking the play button on the top."),(0,l.kt)("h3",{id:"step-16-building-webdriveragent-from-terminal"},"Step 16: Building WebDriverAgent from Terminal"),(0,l.kt)("p",null,"Before building the project, make sure the device is plugged in to the system and you have your device UDID with you,\xa0execute the following command in the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ mkdir -p Resources/WebDriverAgent.bundle\n$ ./Scripts/bootstrap.sh -d\n")),(0,l.kt)("p",null,"Once above commands are executed, now execute following build command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ xcodebuild -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination 'id=<Device Id>' test\n")),(0,l.kt)("p",null,"First time when you build the project, a WebDriverAgentRunner app will be installed on the device, and the build will fail with following Error."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"Testing failed:\n Test target WebDriverAgentRunner encountered an error (Early unexpected exit, operation never finished bootstrapping - no restart will be attempted)\n** TEST FAILED **\n")),(0,l.kt)("p",null,"To solve this Error, we need to navigate to Settings\xa0\u21d2 General\xa0\u21d2 Device Management\xa0\u21d2 , and trust the developer as shown below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iOS Trust developer screen",src:n(7300).Z})),(0,l.kt)("p",null,"When you click on Trust button, a pop-up confirmation dialog will appear as shown below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iOS trust developer confirmation dialog",src:n(7085).Z})),(0,l.kt)("p",null,"Now, again, if we build the project using the above command, the build will pass and a server will be started. We can confirm it by seeing the build output."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"2017-04-24 16:41:06.470869 XCTRunner[459:77583] Running tests...\n2017-04-24 16:41:07.379622 XCTRunner[459:77583] Continuing to run tests in the background with task ID 1\nTest Suite 'All tests' started at 2017-04-24 16:41:08.061\nTest Suite 'WebDriverAgentRunner.xctest' started at 2017-04-24 16:41:08.063\nTest Suite 'UITestingUITests' started at 2017-04-24 16:41:08.064\nTest Case '-[UITestingUITests testRunner]' started.\n t = 0.00s Start Test at 2017-04-24 16:41:08.067\n t = 0.01s Set Up\n2017-04-24 16:41:08.077064 XCTRunner[459:77658] [User Defaults] Failed to write value for key AutomationDisableFauxCollectionCells in CFPrefsPlistSource (Domain: com.apple.Accessibility, User: kCFPreferencesCurrentUser, ByHost: No, Container: (null)): setting preferences outside an application's container requires user-preference-write or file-write-data sandbox access, switching to read-only\n2017-04-24 16:41:08.079603 XCTRunner[459:77583] Built at Apr 24 2017 15:57:52\n2017-04-24 16:41:08.115981 XCTRunner[459:77583] ServerURLHere->http://192.168.0.104:8100<-ServerURLHere\n")),(0,l.kt)("p",null,"To be 100% sure if all is well with setup until now, open a separate terminal window and execute following set of commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"$ export DEVICE_URL='http://192.168.0.104:8100'\n$ export JSON_HEADER='-H \"Content-Type: application/json;charset=UTF-8, accept: application/json\"'\n$ curl -X GET $JSON_HEADER $DEVICE_URL/status\n")),(0,l.kt)("p",null,"You should see the following output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},'$ curl: (6) Could not resolve host: application curl: (6) Could not resolve host: accept curl: (6) Could not resolve host: application { "value" : { "state" : "success", "os" : { "name" : "iOS", "version" : "10.0.2" }, "ios" : { "simulatorVersion" : "10.0.2", "ip" : "192.168.0.104" }, "build" : { "time" : "Apr 24 2017 15:57:52" } }, "sessionId" : "9F5D94DA-8F60-4A9F-9871-EFCE7F847D8E", "status" : 0 }\n')),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"Phew!! That was a lot of steps we did in this post. Congratulations on setting up your machine for iPhone Automation with Appium.\xa0In the next post, we will see how to identify Elements in the iPhone app and lot more. Until then,\xa0happy testing!!!"),(0,l.kt)("p",null,"If you find this post useful, than share it with your colleagues and friends. If you have any questions or suggestion or feedback, you can share it with me in the comments section."),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/imurchie/appium-xcuitest-driver/blob/isaac-rs/docs/real-device-config.md#basic-manual-configuration"},"Appium Docs")))}m.isMDXComponent=!0},3893:function(e,t,n){t.Z=n.p+"assets/images/appium-ios-e726b6cccd37794da3e6e785b9ceb6e1.jpeg"},7300:function(e,t,n){t.Z=n.p+"assets/images/trust-dev-0f0372b685ce17f07098e27558225c6d.png"},7085:function(e,t,n){t.Z=n.p+"assets/images/trust-page-e6f344fcb0017e7972d5ab7c36d19ae5.png"},6272:function(e,t,n){t.Z=n.p+"assets/images/xcode-build-8749f9044f3a1fe0792c333c94c67c97.png"},6192:function(e,t,n){t.Z=n.p+"assets/images/xcode-device-manager-ec28339c1a7137f53dc4f1f07b44983d.png"},279:function(e,t,n){t.Z=n.p+"assets/images/xcode-general-1-20554374522db0140eb0c8f1de5cb3bd.png"},1946:function(e,t,n){t.Z=n.p+"assets/images/xcode-general-auto-sign-f99998325ea0a712a9161ceece1f6f30.png"},3266:function(e,t,n){t.Z=n.p+"assets/images/xcode-general-sign-team-752e66fa2d3fdb269c778b643c0ae0bf.png"},6402:function(e,t,n){t.Z=n.p+"assets/images/xcode-general-sign-b80685447b29fb915499a85414352758.png"},2268:function(e,t,n){t.Z=n.p+"assets/images/xcode-general-03b76e6e6d9920b71c1620dcfa2d771a.png"}}]);