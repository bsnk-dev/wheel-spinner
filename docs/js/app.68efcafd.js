(function(e){function t(t){for(var s,a,i=t[0],c=t[1],l=t[2],m=0,u=[];m<i.length;m++)a=i[m],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={app:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09a3":function(e,t,n){},1500:function(e,t,n){"use strict";n("9213")},"18a1":function(e,t,n){"use strict";n("09a3")},"4ff2":function(e,t,n){"use strict";n("d43f")},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("7a23");const r={id:"app flex-column"},o={class:"flex w-screen-99"},a={class:"ml-auto p-4"},i={class:"flex h-full w-screen-99"},c={class:"wheel-name-container sm:ml-20 lg:ml-10"},l={class:"font-sans text-2xl font-bold"};function d(e,t,n,d,m,u){const h=Object(s["p"])("Settings"),g=Object(s["p"])("wheel"),p=Object(s["p"])("name-celebration-overlay");return Object(s["m"])(),Object(s["f"])("div",r,[Object(s["g"])("div",o,[Object(s["g"])("div",a,[Object(s["i"])(h)])]),Object(s["g"])("div",i,[Object(s["g"])("div",c,[Object(s["i"])(g,{names:u.devOverride?u.names(u.devNameCount):u.storedNames,onChange:t[0]||(t[0]=e=>{m.selectedName=e,m.spinning=!0}),onDoneSpinning:t[1]||(t[1]=e=>{m.selectedName,m.spinning=!1}),ref:"wheel"},null,8,["names"]),Object(s["g"])("div",null,[Object(s["g"])("h1",l,Object(s["q"])(m.spinning?"Spinning...":"Click to spin"),1)])])]),""==m.selectedName||m.spinning?Object(s["e"])("",!0):(Object(s["m"])(),Object(s["d"])(p,{key:0,name:m.selectedName+"!",onDismissed:t[2]||(t[2]=e=>{u.hideName(m.selectedName),m.selectedName=""})},null,8,["name"]))])}const m={style:{display:"flex","flex-direction":"column"}},u={class:"wheel-needle-container"},h={class:"name"},g=Object(s["g"])("div",{class:"needle"},[Object(s["g"])("div",{class:"inner-needle"})],-1);function p(e,t,n,r,o,a){return Object(s["m"])(),Object(s["f"])("div",m,[Object(s["g"])("div",u,[Object(s["g"])("div",{class:"wheel-container",ref:"wheel",onClick:t[0]||(t[0]=e=>a.spinWheel()),onTransitionend:t[1]||(t[1]=t=>{e.$emit("doneSpinning"),this.speechRecognitionMutex=!1})},[(Object(s["m"])(!0),Object(s["f"])(s["a"],null,Object(s["o"])(a.numberOfNames,e=>(Object(s["m"])(),Object(s["f"])("div",{class:Object(s["k"])({wedge:a.numberOfNames>2,square:a.numberOfNames<=2,single:1==a.numberOfNames}),style:Object(s["l"])({transform:"rotate("+e*(360/a.numberOfNames)+"deg)","border-top-width":3.14*(300+a.circumferenceInset(a.numberOfNames))/a.numberOfNames+"px","border-bottom-width":3.14*(300+a.circumferenceInset(a.numberOfNames))/a.numberOfNames+"px","border-color":a.numberOfNames<=2?a.wedgeColor(e):"transparent","border-right-color":a.wedgeColor(e)}),key:e},[Object(s["g"])("div",h,Object(s["q"])(n.names[e-1]),1)],6))),128))],544),g])])}var b={name:"SpinnerWheel",data(){return{degrees:0,selectedName:"",speechRecognitionMutex:!1}},props:{names:{type:Array,default:()=>["Name One","Two","Three","Four Five","Six"]}},computed:{numberOfNames(){return this.names.length}},methods:{spinWheel(){const e=this.$refs.wheel,t=Math.floor(1e3*Math.random()+400);this.degrees+=t,e.style.transform="rotate("+this.degrees+"deg)",this.getSelectedName()},wedgeColor(e){const t=["#59CD90","#EE6352","#3FA7D6","#FAC05E","#F79D84"];return t[(e-1)%t.length||0]},circumferenceInset(e){return[0,0,0,200,82,47,32,22,17,14,10,10,9,8,7,6,5,4,3,2,1][e]||0},calculateSelectedName(e){let t=e%360;const n=360/this.numberOfNames,s=(360-t+.3*n)/n;let r=Math.floor(s);return r--,-1===r&&(r=this.names.length-1),r},getSelectedName(){const e=this.calculateSelectedName(this.degrees);this.selectedName=this.names[e],this.$emit("change",this.selectedName)},reverseIndex(e,t){return Math.abs(e-(t-1))},setSelectedName(e){if(this.speechRecognitionMutex)return;this.speechRecognitionMutex=!0;const t=360/this.numberOfNames;let n,s=this.reverseIndex(this.calculateSelectedName(this.degrees),this.names.length);for(const[o,a]of Object.entries(this.names))a==e&&(n=this.reverseIndex(Number(o),this.names.length));let r=n-s;n<s?r+=this.names.length-1:s++,console.table({expectedNameIndexIncrease:r,expectedNameIndex:n,currentNameIndex:s,currentName:this.names[s]}),this.degrees+=t*r,this.selectedName=e,this.$emit("change",this.selectedName),this.$refs.wheel.style.transform="rotate("+this.degrees+"deg)"},speechRecognitionToSelectedNameAnalysisHandler(e){for(const n of this.names)if(n.toString().toLowerCase().trim()==e.toString().toLowerCase().trim())try{this.setSelectedName(n)}catch(t){this.speechRecognitionMutex=!1}}}},f=(n("4ff2"),n("6b0d")),v=n.n(f);const O=v()(b,[["render",p]]);var j=O;const w=Object(s["h"])(" Settings "),N=Object(s["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(s["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),Object(s["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),x=[w,N],y={class:"z-20 absolute right-4"},S={class:"origin-top-right mt-2 w-72 h-96 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"},k={key:0,class:"py-1",role:"none"},C=Object(s["g"])("div",{class:"w-20 h-16 bg-yellow-100 rounded-xl flex"},[Object(s["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 m-auto",fill:"none",viewBox:"0 0 24 24",stroke:"rgb(245, 158, 11)"},[Object(s["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})])],-1),$=Object(s["g"])("div",{class:"ml-4 text-left"},[Object(s["g"])("div",{class:"font-lg font-bold"},"Wheel names"),Object(s["g"])("div",{class:"text-sm font-medium text-gray-500"}," Edit the names are on the wheel ")],-1),H=[C,$],M=Object(s["g"])("div",{class:"w-20 h-16 bg-green-100 rounded-xl flex"},[Object(s["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 m-auto",fill:"none",viewBox:"0 0 24 24",stroke:"rgb(16, 185, 129)"},[Object(s["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})])],-1),R=Object(s["g"])("div",{class:"ml-4 text-left"},[Object(s["g"])("div",{class:"font-lg font-bold"},"Developer"),Object(s["g"])("div",{class:"text-sm font-medium text-gray-500"}," Show off features of the spinner ")],-1),D=[M,R],I=Object(s["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(s["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),E=Object(s["h"])(" Back "),A=[I,E],P={key:2,class:"p-4 pt-0 text-left"},_=Object(s["g"])("h2",{class:"text-xl font-bold mb-2"},"Names",-1),V=["value"],W={class:"inline-flex items-center mt-3"},z=Object(s["g"])("span",{class:"ml-2 text-gray-700 text-sm"},"Auto-Hide Selected Names",-1),T=Object(s["g"])("h2",{class:"text-xl font-bold mt-2"},"Hidden Names",-1),q=Object(s["g"])("h3",{class:"text-sm font-medium"}," Add/delete names from this list to hide or unhide them. ",-1),B=["value"],F={key:3,class:"p-4 pt-0 text-left"},U=Object(s["g"])("h2",{class:"text-xl font-bold mb-2"},"Developer Settings",-1),J={class:"inline-flex items-center mt-3"},L=Object(s["g"])("span",{class:"ml-2 text-gray-700 text-sm"},"Override Names",-1),G={class:"inline-flex items-center mt-3"},K={class:"ml-2 text-gray-700 text-sm"},Q={class:"inline-flex items-center mt-3"},X=Object(s["g"])("span",{class:"ml-2 text-gray-700 text-sm"},"Enable Speech Recognition",-1);function Y(e,t,n,r,o,a){return Object(s["m"])(),Object(s["f"])("div",null,[Object(s["g"])("button",{type:"button",class:"inline-flex justify-center w-full rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-bold",id:"menu-button","aria-expanded":"true","aria-haspopup":"true",onClick:t[0]||(t[0]=e=>o.open=!o.open)},x),Object(s["i"])(s["b"],{name:"menu"},{default:Object(s["v"])(()=>[Object(s["w"])(Object(s["g"])("div",y,[Object(s["g"])("div",S,["select"==o.page?(Object(s["m"])(),Object(s["f"])("div",k,[Object(s["g"])("div",{class:"hover:bg-gray-50 flex items-center p-4 cursor-pointer",onClick:t[1]||(t[1]=e=>o.page="wheel-names")},H),Object(s["g"])("div",{class:"hover:bg-gray-50 flex items-center p-4 cursor-pointer",onClick:t[2]||(t[2]=e=>o.page="developer")},D)])):Object(s["e"])("",!0),"select"!=o.page?(Object(s["m"])(),Object(s["f"])("div",{key:1,class:"text-blue-500 font-semibold cursor-pointer flex p-4 pl-2 hover:bg-gray-100 rounded-t-lg",onClick:t[3]||(t[3]=e=>o.page="select")},A)):Object(s["e"])("",!0),"wheel-names"==o.page?(Object(s["m"])(),Object(s["f"])("div",P,[_,Object(s["g"])("textarea",{class:"focus:ring-yellow-500 focus:border-yellow-500 w-full border-gray-400 border-1 bg-transparent text-gray-500 sm:text-sm rounded-md h-1/3",value:o.wheelSettings.names,onChange:t[4]||(t[4]=e=>o.wheelSettings.names=e.target.value)},null,40,V),Object(s["g"])("label",W,[Object(s["w"])(Object(s["g"])("input",{type:"checkbox",class:"form-checkbox h-5 w-5 text-yellow-400 rounded-md focus:ring-yellow-500 focus:border-yellow-500","onUpdate:modelValue":t[5]||(t[5]=e=>o.wheelSettings.autoHideNames=e)},null,512),[[s["r"],o.wheelSettings.autoHideNames]]),z]),T,q,Object(s["g"])("textarea",{class:"focus:ring-yellow-500 focus:border-yellow-500 w-full border-gray-400 border-1 bg-transparent text-gray-500 sm:text-sm rounded-md h-1/3 mt-2",value:o.wheelSettings.hiddenNames,onChange:t[6]||(t[6]=e=>o.wheelSettings.hiddenNames=e.target.value)},null,40,B)])):Object(s["e"])("",!0),"developer"==o.page?(Object(s["m"])(),Object(s["f"])("div",F,[U,Object(s["g"])("label",J,[Object(s["w"])(Object(s["g"])("input",{type:"checkbox",class:"form-checkbox h-5 w-5 text-green-400 rounded-md focus:ring-green-500 focus:border-green-500","onUpdate:modelValue":t[7]||(t[7]=e=>o.developer.overrideNames=e)},null,512),[[s["r"],o.developer.overrideNames]]),L]),Object(s["g"])("label",G,[Object(s["w"])(Object(s["g"])("input",{type:"range",min:"0",max:"900","onUpdate:modelValue":t[8]||(t[8]=e=>o.developer.nameCount=e)},null,512),[[s["s"],o.developer.nameCount]]),Object(s["g"])("span",K," Name Count: "+Object(s["q"])(o.developer.nameCount),1)]),Object(s["g"])("label",Q,[Object(s["w"])(Object(s["g"])("input",{type:"checkbox",class:"form-checkbox h-5 w-5 text-green-400 rounded-md focus:ring-green-500 focus:border-green-500","onUpdate:modelValue":t[9]||(t[9]=e=>o.developer.speechRecognition=e)},null,512),[[s["r"],o.developer.speechRecognition]]),X])])):Object(s["e"])("",!0)])],512),[[s["t"],o.open]])]),_:1})])}var Z={name:"SettingsPane",data(){return{open:!1,page:"select",developer:{overrideNames:!1,nameCount:16,speechRecognition:!1},wheelSettings:{names:"",autoHideNames:!1,hiddenNames:""}}},mounted(){this.$store.subscribe((e,t)=>{switch(e.type){case"setHiddenNames":this.wheelSettings.hiddenNames=t.hiddenNames.join("\n");break;case"setNames":this.wheelSettings.names=t.names.join("\n");break;case"setAutoHideNames":this.wheelSettings.autoHideNames=t.autoHideNames;break;case"setDeveloperOverride":this.developer.overrideNames=t.developerOverride;break;case"setDeveloperOverrideNameCount":this.developer.nameCount=t.developerOverrideNameCount}})},watch:{"developer.overrideNames":{handler(e){this.$store.commit("setDeveloperOverride",e),this.$store.dispatch("saveState")}},"developer.nameCount":{handler(e){this.$store.commit("setDeveloperOverrideNameCount",Number(e)),this.$store.dispatch("saveState")}},"developer.speechRecognition":{handler(e){this.$store.commit("setSpeechRecognition",e),this.$store.dispatch("saveState")}},"wheelSettings.names":{handler(e){this.$store.commit("setNames",e.split(/\n/g)),this.$store.dispatch("saveState")}},"wheelSettings.autoHideNames":{handler(e){this.$store.commit("setAutoHideNames",e),this.$store.dispatch("saveState")}},"wheelSettings.hiddenNames":{handler(e){this.$store.commit("setHiddenNames",e.split("\n")),this.$store.dispatch("saveState")}}}};n("b877");const ee=v()(Z,[["render",Y]]);var te=ee;const ne={class:"celebration-positioning celebration-overlay"},se={class:"celebration-positioning",style:{"pointer-events":"none"},ref:"confetti"};function re(e,t,n,r,o,a){return Object(s["m"])(),Object(s["f"])("div",ne,[Object(s["g"])("div",null,Object(s["q"])(n.name),1),Object(s["g"])("div",null,[Object(s["g"])("button",{type:"button",class:"inline-flex justify-center rounded-md px-4 py-2 text-sm p-8 text-white-700 bg-gray-400 hover:bg-gray-300 bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-bold",onClick:t[0]||(t[0]=t=>e.$emit("dismissed"))},"Close")]),Object(s["g"])("canvas",se,null,512)])}var oe=n("7129"),ae={props:{name:String},setup(){},mounted(){const e=this.$refs.confetti,t=oe["a"].create(e,{resize:!0}),n=15e3,s=Date.now()+n,r={startVelocity:30,spread:360,ticks:60,zIndex:0};function o(e,t){return Math.random()*(t-e)+e}var a=setInterval((function(){var e=s-Date.now();if(e<=0)return clearInterval(a);var i=e/n*100;t(Object.assign({},r,{particleCount:i,origin:{x:o(.1,.3),y:Math.random()-.2}})),t(Object.assign({},r,{particleCount:i,origin:{x:o(.7,.9),y:Math.random()-.2}}))}),250)}};n("18a1");const ie=v()(ae,[["render",re]]);var ce=ie,le=(n("5b31"),{name:"App",components:{Wheel:j,Settings:te,NameCelebrationOverlay:ce},data(){return{selectedName:"",spinning:!1}},computed:{devOverride(){return this.$store.getters.developerOverride},devNameCount(){return this.$store.getters.developerOverrideNameCount},storedNames(){let e=this.$store.getters.names;return e=e.length?e:["1","2","3"],e.filter(e=>!this.hiddenNames.includes(e))},hiddenNames(){return this.$store.getters.hiddenNames},speechRecognition(){return this.$store.getters.speechRecognition}},methods:{names(e){const t=[];for(let n=1;n<=e;n++)t.push(n);return t},hideName(e){this.$store.state.autoHideNames&&(this.$store.dispatch("hideName",{name:e}),this.$store.dispatch("saveState"))},voiceCommands(){window.SPEECH.addVoiceCommands([{command:"spin the wheel",callback:()=>{this.$refs.wheel.spinWheel()},min_confidence:.3},{command:"wheel of names",callback:()=>{this.$refs.wheel.spinWheel(),this.$refs.wheel.spinWheel()},min_confidence:.3}]),window.SPEECH.onResult(e=>{this.$refs.wheel.speechRecognitionToSelectedNameAnalysisHandler(e.transcript)}),window.SPEECH.start({min_confidence:.3,lang:"en-US"})},disableVoiceCommands(){window.SPEECH.stop()}},mounted(){this.$store.dispatch("loadState")},watch:{speechRecognition(e){if(e)try{this.voiceCommands()}catch(t){alert(t.stack)}else this.disableVoiceCommands()}}});n("1500");const de=v()(le,[["render",d]]);var me=de,ue=n("5502"),he=Object(ue["a"])({state:{names:[],autoHideNames:!1,hiddenNames:[],developerOverride:!1,developerOverrideNameCount:16,speechRecognition:!1},getters:{names(e){return e.names},autoHideNames(e){return e.autoHideNames},hiddenNames(e){return e.hiddenNames},developerOverride(e){return e.developerOverride},developerOverrideNameCount(e){return e.developerOverrideNameCount},speechRecognition(e){return e.speechRecognition}},mutations:{setNames(e,t){e.names=t},setAutoHideNames(e,t){e.autoHideNames=t},setHiddenNames(e,t){e.hiddenNames=t},setDeveloperOverride(e,t){e.developerOverride=t},setDeveloperOverrideNameCount(e,t){e.developerOverrideNameCount=t},setSpeechRecognition(e,t){e.speechRecognition=t}},actions:{hideName({state:e,commit:t},n){t("setHiddenNames",e.hiddenNames.concat([n.name]))},saveState({state:e}){localStorage.setItem("settings",JSON.stringify(e))},loadState({commit:e,dispatch:t}){try{const t=JSON.parse(localStorage.getItem("settings"));e("setNames",t.names),e("setHiddenNames",t.hiddenNames),e("setAutoHideNames",t.autoHideNames),e("setDeveloperOverride",t.developerOverride),e("setDeveloperOverrideNameCount",t.developerOverrideNameCount)}catch(n){t("saveState")}}},modules:{}});Object(s["c"])(me).use(he).mount("#app")},9213:function(e,t,n){},b877:function(e,t,n){"use strict";n("ff6c")},d43f:function(e,t,n){},ff6c:function(e,t,n){}});
//# sourceMappingURL=app.68efcafd.js.map