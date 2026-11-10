function yn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wt={exports:{}},xn=Wt.exports,Le;function wn(){return Le||(Le=1,(function(e,t){(function(n,r){e.exports=r()})(xn,function(){function n(l){return(n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(l)}var r=Object.prototype.toString,i=function(l){if(l===void 0)return"undefined";if(l===null)return"null";var d=n(l);if(d==="boolean")return"boolean";if(d==="string")return"string";if(d==="number")return"number";if(d==="symbol")return"symbol";if(d==="function")return(function(p){return o(p)==="GeneratorFunction"})(l)?"generatorfunction":"function";if((function(p){return Array.isArray?Array.isArray(p):p instanceof Array})(l))return"array";if((function(p){return p.constructor&&typeof p.constructor.isBuffer=="function"?p.constructor.isBuffer(p):!1})(l))return"buffer";if((function(p){try{if(typeof p.length=="number"&&typeof p.callee=="function")return!0}catch(f){if(f.message.indexOf("callee")!==-1)return!0}return!1})(l))return"arguments";if((function(p){return p instanceof Date||typeof p.toDateString=="function"&&typeof p.getDate=="function"&&typeof p.setDate=="function"})(l))return"date";if((function(p){return p instanceof Error||typeof p.message=="string"&&p.constructor&&typeof p.constructor.stackTraceLimit=="number"})(l))return"error";if((function(p){return p instanceof RegExp||typeof p.flags=="string"&&typeof p.ignoreCase=="boolean"&&typeof p.multiline=="boolean"&&typeof p.global=="boolean"})(l))return"regexp";switch(o(l)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if((function(p){return typeof p.throw=="function"&&typeof p.return=="function"&&typeof p.next=="function"})(l))return"generator";switch(d=r.call(l)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return d.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(l){return l.constructor?l.constructor.name:null}function a(l,d){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:["option"];return s(l,d,p),c(l,d,p),(function(f,v,m){var g=i(v),y=i(f);if(g==="object"){if(y!=="object")throw new Error("[Type Error]: '".concat(m.join("."),"' require 'object' type, but got '").concat(y,"'"));Object.keys(v).forEach(function(C){var L=f[C],S=v[C],b=m.slice();b.push(C),s(L,S,b),c(L,S,b),a(L,S,b)})}if(g==="array"){if(y!=="array")throw new Error("[Type Error]: '".concat(m.join("."),"' require 'array' type, but got '").concat(y,"'"));f.forEach(function(C,L){var S=f[L],b=v[L]||v[0],M=m.slice();M.push(L),s(S,b,M),c(S,b,M),a(S,b,M)})}})(l,d,p),l}function s(l,d,p){if(i(d)==="string"){var f=i(l);if(d[0]==="?"&&(d=d.slice(1)+"|undefined"),!(-1<d.indexOf("|")?d.split("|").map(function(v){return v.toLowerCase().trim()}).filter(Boolean).some(function(v){return f===v}):d.toLowerCase().trim()===f))throw new Error("[Type Error]: '".concat(p.join("."),"' require '").concat(d,"' type, but got '").concat(f,"'"))}}function c(l,d,p){if(i(d)==="function"){var f=d(l,i(l),p);if(f!==!0){var v=i(f);throw v==="string"?new Error(f):v==="error"?f:new Error("[Validator Error]: The scheme for '".concat(p.join("."),"' validator require return true, but got '").concat(f,"'"))}}}return a.kindOf=i,a})})(Wt)),Wt.exports}var kn=wn(),Ot=yn(kn),ke="5.4.0",Nt={properties:["audioTracks","autoplay","buffered","controller","controls","crossOrigin","currentSrc","currentTime","defaultMuted","defaultPlaybackRate","duration","ended","error","loop","mediaGroup","muted","networkState","paused","playbackRate","played","preload","readyState","seekable","seeking","src","startDate","textTracks","videoTracks","volume"],methods:["addTextTrack","canPlayType","load","play","pause"],events:["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],prototypes:["width","height","videoWidth","videoHeight","poster","webkitDecodedFrameCount","webkitDroppedFrameCount","playsInline","webkitSupportsFullscreen","webkitDisplayingFullscreen","onenterpictureinpicture","onleavepictureinpicture","disablePictureInPicture","cancelVideoFrameCallback","requestVideoFrameCallback","getVideoPlaybackQuality","requestPictureInPicture","webkitEnterFullScreen","webkitEnterFullscreen","webkitExitFullScreen","webkitExitFullscreen"]},Ht=globalThis?.CUSTOM_USER_AGENT??(typeof navigator<"u"?navigator.userAgent:""),Ie=/^(?:(?!chrome|android).)*safari/i.test(Ht),Re=/iPad|iPhone|iPod/i.test(Ht)&&!window.MSStream,Pe=Re||Ht.includes("Macintosh")&&navigator.maxTouchPoints>=1,j=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(Ht)||Pe,Gt=typeof window<"u"&&typeof document<"u";function ot(e,t=document){return t.querySelector(e)}function Vt(e,t=document){return Array.from(t.querySelectorAll(e))}function A(e,t){return e.classList.add(t)}function J(e,t){return e.classList.remove(t)}function mt(e,t){return e.classList.contains(t)}function w(e,t){return t instanceof Element?e.appendChild(t):e.insertAdjacentHTML("beforeend",String(t)),e.lastElementChild||e.lastChild}function Kt(e){return e.parentNode.removeChild(e)}function u(e,t,n){return e.style[t]=n,e}function Qt(e,t){for(let n in t)u(e,n,t[n]);return e}function $n(e,t,n=!0){let r=window.getComputedStyle(e,null).getPropertyValue(t);return n?Number.parseFloat(r):r}function Oe(e){return Array.from(e.parentElement.children).filter(t=>t!==e)}function ut(e,t){Oe(e).forEach(n=>J(n,t)),A(e,t)}function gt(e,t,n="top"){j||(e.setAttribute("aria-label",t),A(e,"hint--rounded"),A(e,`hint--${n}`))}function $e(e,t=0){let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,o=n.top-t<=r&&n.top+n.height+t>=0,a=n.left-t<=i+t&&n.left+n.width+t>=0;return o&&a}function Lt(e,t){return Ee(e).includes(t)}function Te(e,t){return t.parentNode.replaceChild(e,t),e}function K(e){return document.createElement(e)}function Ne(e="",t=""){let n=K("i");return A(n,"art-icon"),A(n,`art-icon-${e}`),w(n,t),n}function De(e,t){let n=document.getElementById(e);n||(n=document.createElement("style"),n.id=e,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.head.appendChild(n)}):(document.head||document.documentElement).appendChild(n)),n.textContent=t}function _e(){let e=document.createElement("div");return e.style.display="flex",e.style.display==="flex"}function ht(e){return e.getBoundingClientRect()}function He(e,t){return new Promise((n,r)=>{let i=new Image;i.onload=function(){if(!t||t===1)n(i);else{let o=document.createElement("canvas"),a=o.getContext("2d");o.width=i.width*t,o.height=i.height*t,a.drawImage(i,0,0,o.width,o.height),o.toBlob(s=>{let c=URL.createObjectURL(s),l=new Image;l.onload=function(){n(l)},l.onerror=function(){URL.revokeObjectURL(c),r(new Error(`Image load failed: ${e}`))},l.src=c})}},i.onerror=function(){r(new Error(`Image load failed: ${e}`))},i.src=e})}function Ee(e){if(e.composedPath)return e.composedPath();let t=[],n=e.target;for(;n;)t.push(n),n=n.parentNode;return!t.includes(window)&&window!==void 0&&t.push(window),t}var qt=class extends Error{constructor(t,n){super(t),typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,n||this.constructor),this.name="ArtPlayerError"}};function st(e,t){if(!e)throw new qt(t);return e}function _t(e){return e.includes("?")?_t(e.split("?")[0]):e.includes("#")?_t(e.split("#")[0]):e.trim().toLowerCase().split(".").pop()}function Ve(e,t){let n=document.createElement("a");n.style.display="none",n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}function it(e,t,n){return Math.max(Math.min(e,Math.max(t,n)),Math.min(t,n))}function Jt(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ft(e){if(!e)return"00:00";let t=o=>o<10?`0${o}`:String(o),n=Math.floor(e/3600),r=Math.floor((e-n*3600)/60),i=Math.floor(e-n*3600-r*60);return(n>0?[n,r,i]:[r,i]).map(t).join(":")}function Fe(e){return e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t)}function Tn(e){let t={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'},n=new RegExp(`(${Object.keys(t).join("|")})`,"g");return e.replace(n,r=>t[r]||r)}var k=Object.defineProperty,{hasOwnProperty:En}=Object.prototype;function Dt(e,t){return En.call(e,t)}function Be(e,t){return Object.getOwnPropertyDescriptor(e,t)}function Zt(...e){let t=n=>n&&typeof n=="object"&&!Array.isArray(n);return e.reduce((n,r)=>(Object.keys(r).forEach(i=>{let o=n[i],a=r[i];Array.isArray(o)&&Array.isArray(a)?n[i]=o.concat(...a):t(o)&&t(a)?n[i]=Zt(o,a):n[i]=a}),n),{})}function Cn(e){return e.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g,(t,n,r)=>{let i=r.slice(0,3);return r.length===1&&(i=`${r}00`),r.length===2&&(i=`${r}0`),`${n},${i}`})}function Ye(e){return`WEBVTT \r
\r
`.concat(Cn(e).replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").replace(/\{[\s\S]*?\}/g,"").concat(`\r
\r
`))}function jt(e){return URL.createObjectURL(new Blob([e],{type:"text/vtt"}))}function We(e){let t=new RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$","i");function n(r=""){return r.split(/[:.]/).map((i,o,a)=>{if(o===a.length-1){if(i.length===1)return`.${i}00`;if(i.length===2)return`.${i}0`}else if(i.length===1)return(o===0?"0":":0")+i;return o===0?i:o===a.length-1?`.${i}`:`:${i}`}).join("")}return`WEBVTT

${e.split(/\r?\n/).map(r=>{let i=r.match(t);return i?{start:n(i[1].trim()),end:n(i[2].trim()),text:i[5].replace(/\{[\s\S]*?\}/g,"").replace(/(\\N)/g,`
`).trim().split(/\r?\n/).map(o=>o.trim()).join(`
`)}:null}).filter(r=>r).map((r,i)=>r?`${i+1}
${r.start} --> ${r.end}
${r.text}`:"").filter(r=>r.trim()).join(`

`)}`}function zt(e=0){return new Promise(t=>setTimeout(t,e))}function je(e,t){let n;return function(...r){let i=()=>(n=null,e.apply(this,r));clearTimeout(n),n=setTimeout(i,t)}}function qe(e,t){let n=!1;return function(...r){n||(e.apply(this,r),n=!0,setTimeout(()=>{n=!1},t))}}var Sn=Object.freeze(Object.defineProperty({__proto__:null,ArtPlayerError:qt,addClass:A,append:w,assToVtt:We,capitalize:Jt,clamp:it,createElement:K,debounce:je,def:k,download:Ve,errorHandle:st,escape:Fe,get:Be,getComposedPath:Ee,getExt:_t,getIcon:Ne,getRect:ht,getStyle:$n,has:Dt,hasClass:mt,includeFromEvent:Lt,inverseClass:ut,isBrowser:Gt,isIOS:Re,isIOS13:Pe,isInViewport:$e,isMobile:j,isSafari:Ie,loadImg:He,mergeDeep:Zt,query:ot,queryAll:Vt,remove:Kt,removeClass:J,replaceElement:Te,secondToTime:ft,setStyle:u,setStyleText:De,setStyles:Qt,siblings:Oe,sleep:zt,srtToVtt:Ye,supportsFlex:_e,throttle:qe,tooltip:gt,unescape:Tn,userAgent:Ht,vttToBlob:jt},Symbol.toStringTag,{value:"Module"})),Me="array",H="boolean",tt="string",pt="number",St="object",yt="function";function Xe(e,t,n){return st(t===tt||t===pt||e instanceof Element,`${n.join(".")} require '${tt}' or 'Element' type`)}var Rt={html:Xe,disable:`?${H}`,name:`?${tt}`,index:`?${pt}`,style:`?${St}`,click:`?${yt}`,mounted:`?${yt}`,tooltip:`?${tt}|${pt}`,width:`?${pt}`,selector:`?${Me}`,onSelect:`?${yt}`,switch:`?${H}`,onSwitch:`?${yt}`,range:`?${Me}`,onRange:`?${yt}`,onChange:`?${yt}`},ie={id:tt,container:Xe,url:tt,poster:tt,type:tt,theme:tt,lang:tt,volume:pt,isLive:H,muted:H,autoplay:H,autoSize:H,autoMini:H,loop:H,flip:H,playbackRate:H,aspectRatio:H,screenshot:H,setting:H,hotkey:H,pip:H,mutex:H,backdrop:H,fullscreen:H,fullscreenWeb:H,subtitleOffset:H,miniProgressBar:H,useSSR:H,playsInline:H,lock:H,gesture:H,fastForward:H,autoPlayback:H,autoOrientation:H,airplay:H,proxy:`?${yt}`,plugins:[yt],layers:[Rt],contextmenu:[Rt],settings:[Rt],controls:[{...Rt,position:(e,t,n)=>{let r=["top","left","right"];return st(r.includes(e),`${n.join(".")} only accept ${r.toString()} as parameters`)}}],quality:[{default:`?${H}`,html:tt,url:tt}],highlight:[{time:pt,text:tt}],thumbnails:{url:tt,number:pt,column:pt,width:pt,height:pt,scale:pt},subtitle:{url:tt,name:tt,type:tt,style:St,escape:H,encoding:tt,onVttLoad:yt},moreVideoAttr:St,i18n:St,icons:St,cssVar:St,customType:St},vt=class{constructor(t){this.id=0,this.art=t,this.cache=new Map,this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.update=this.update.bind(this)}get show(){return mt(this.art.template.$player,`art-${this.name}-show`)}set show(t){let{$player:n}=this.art.template,r=`art-${this.name}-show`;t?A(n,r):J(n,r),this.art.emit(this.name,t)}toggle(){this.show=!this.show}add(t){let n=typeof t=="function"?t(this.art):t;if(n.html=n.html||"",Ot(n,Rt),!this.$parent||!this.name||n.disable)return;let r=n.name||`${this.name}${this.id}`;st(!this.cache.has(r),`Can't add an existing [${r}] to the [${this.name}]`),this.id+=1;let i=K("div");A(i,`art-${this.name}`),A(i,`art-${this.name}-${r}`);let o=Array.from(this.$parent.children);i.dataset.index=n.index||this.id;let a=o.find(c=>Number(c.dataset.index)>=Number(i.dataset.index));a?a.insertAdjacentElement("beforebegin",i):w(this.$parent,i),n.html&&w(i,n.html),n.style&&Qt(i,n.style),n.tooltip&&gt(i,n.tooltip);let s=[];if(n.click){let c=this.art.events.proxy(i,"click",l=>{l.preventDefault(),n.click.call(this.art,this,l)});s.push(c)}return n.selector&&["left","right"].includes(n.position)&&this.selector(n,i,s),this[r]=i,this.cache.set(r,{$ref:i,events:s,option:n}),n.mounted&&n.mounted.call(this.art,i),i}remove(t){st(this.cache.has(t),`Can't find [${t}] from the [${this.name}]`);let n=this.cache.get(t);n.option.beforeUnmount&&n.option.beforeUnmount.call(this.art,n.$ref);for(let r of n.events)this.art.events.remove(r);this.cache.delete(t),delete this[t],Kt(n.$ref)}update(t){if(this.cache.has(t.name)){let n=this.cache.get(t.name);t=Object.assign(n.option,t),this.remove(t.name)}return this.add(t)}};function Ln(e){return t=>{let{i18n:n,constructor:{ASPECT_RATIO:r}}=t,i=r.map(o=>`<span data-value="${o}">${o==="default"?n.get("Default"):o}</span>`).join("");return{...e,html:`${n.get("Aspect Ratio")}: ${i}`,click:(o,a)=>{let{value:s}=a.target.dataset;s&&(t.aspectRatio=s,o.show=!1)},mounted:o=>{let a=ot('[data-value="default"]',o);a&&ut(a,"art-current"),t.on("aspectRatio",s=>{let c=Vt("span",o).find(l=>l.dataset.value===s);c&&ut(c,"art-current")})}}}}function Mn(e){return t=>({...e,html:t.i18n.get("Close"),click:n=>{n.show=!1}})}function An(e){return t=>{let{i18n:n,constructor:{FLIP:r}}=t,i=r.map(o=>`<span data-value="${o}">${n.get(Jt(o))}</span>`).join("");return{...e,html:`${n.get("Video Flip")}: ${i}`,click:(o,a)=>{let{value:s}=a.target.dataset;s&&(t.flip=s.toLowerCase(),o.show=!1)},mounted:o=>{let a=ot('[data-value="normal"]',o);a&&ut(a,"art-current"),t.on("flip",s=>{let c=Vt("span",o).find(l=>l.dataset.value===s);c&&ut(c,"art-current")})}}}}function zn(e){return t=>({...e,html:t.i18n.get("Video Info"),click:n=>{t.info.show=!0,n.show=!1}})}function In(e){return t=>{let{i18n:n,constructor:{PLAYBACK_RATE:r}}=t,i=r.map(o=>`<span data-value="${o}">${o===1?n.get("Normal"):o.toFixed(1)}</span>`).join("");return{...e,html:`${n.get("Play Speed")}: ${i}`,click:(o,a)=>{let{value:s}=a.target.dataset;s&&(t.playbackRate=Number(s),o.show=!1)},mounted:o=>{let a=ot('[data-value="1"]',o);a&&ut(a,"art-current"),t.on("video:ratechange",()=>{let s=Vt("span",o).find(c=>Number(c.dataset.value)===t.playbackRate);s&&ut(s,"art-current")})}}}}function Rn(e){let t=Gt?location.href:"";return{...e,html:`<a href="https://artplayer.org?ref=${encodeURIComponent(t)}" target="_blank" style="width:100%;">ArtPlayer ${ke}</a>`}}var ae=class extends vt{constructor(t){super(t),this.name="contextmenu",this.$parent=t.template.$contextmenu,j||this.init()}init(){let{option:t,proxy:n,template:{$player:r,$contextmenu:i}}=this.art;t.playbackRate&&this.add(In({name:"playbackRate",index:10})),t.aspectRatio&&this.add(Ln({name:"aspectRatio",index:20})),t.flip&&this.add(An({name:"flip",index:30})),this.add(zn({name:"info",index:40})),this.add(Rn({name:"version",index:50})),this.add(Mn({name:"close",index:60}));for(let o=0;o<t.contextmenu.length;o++)this.add(t.contextmenu[o]);n(r,"contextmenu",o=>{if(!this.art.constructor.CONTEXTMENU)return;o.preventDefault(),this.show=!0;let a=o.clientX,s=o.clientY,{height:c,width:l,left:d,top:p}=ht(r),{height:f,width:v}=ht(i),m=a-d,g=s-p;a+v>d+l&&(m=l-v),s+f>p+c&&(g=c-f),Qt(i,{top:`${g}px`,left:`${m}px`})}),n(r,"click",o=>{Lt(o,i)||(this.show=!1)}),this.art.on("blur",()=>{this.show=!1})}};function Pn(e){return t=>({...e,tooltip:t.i18n.get("AirPlay"),mounted:n=>{let{proxy:r,icons:i}=t;w(n,i.airplay),r(n,"click",()=>t.airplay())}})}function On(e){return t=>({...e,tooltip:t.i18n.get("Fullscreen"),mounted:n=>{let{proxy:r,icons:i,i18n:o}=t,a=w(n,i.fullscreenOn),s=w(n,i.fullscreenOff);u(s,"display","none"),r(n,"click",()=>{t.fullscreen=!t.fullscreen}),t.on("fullscreen",c=>{c?(gt(n,o.get("Exit Fullscreen")),u(a,"display","none"),u(s,"display","inline-flex")):(gt(n,o.get("Fullscreen")),u(a,"display","inline-flex"),u(s,"display","none"))})}})}function Nn(e){return t=>({...e,tooltip:t.i18n.get("Web Fullscreen"),mounted:n=>{let{proxy:r,icons:i,i18n:o}=t,a=w(n,i.fullscreenWebOn),s=w(n,i.fullscreenWebOff);u(s,"display","none"),r(n,"click",()=>{t.fullscreenWeb=!t.fullscreenWeb}),t.on("fullscreenWeb",c=>{c?(gt(n,o.get("Exit Web Fullscreen")),u(a,"display","none"),u(s,"display","inline-flex")):(gt(n,o.get("Web Fullscreen")),u(a,"display","inline-flex"),u(s,"display","none"))})}})}function Dn(e){return t=>({...e,tooltip:t.i18n.get("PIP Mode"),mounted:n=>{let{proxy:r,icons:i,i18n:o}=t;w(n,i.pip),r(n,"click",()=>{t.pip=!t.pip}),t.on("pip",a=>{gt(n,o.get(a?"Exit PIP Mode":"PIP Mode"))})}})}function _n(e){return t=>({...e,mounted:n=>{let{proxy:r,icons:i,i18n:o}=t,a=w(n,i.play),s=w(n,i.pause);gt(a,o.get("Play")),gt(s,o.get("Pause")),r(a,"click",()=>{t.play()}),r(s,"click",()=>{t.pause()});function c(){u(a,"display","flex"),u(s,"display","none")}function l(){u(a,"display","none"),u(s,"display","flex")}t.playing?l():c(),t.on("video:playing",()=>{l()}),t.on("video:pause",()=>{c()})}})}function Pt(e,t){let{$progress:n}=e.template,{left:r}=ht(n),i=j?t.touches[0].clientX:t.clientX,o=it(i-r,0,n.clientWidth),a=o/n.clientWidth*e.duration,s=ft(a),c=it(o/n.clientWidth,0,1);return{second:a,time:s,width:o,percentage:c}}function Ue(e,t){if(e.isRotate){let n=t.touches[0].clientY/e.height,r=n*e.duration;e.emit("setBar","played",n,t),e.seek=r}else{let{second:n,percentage:r}=Pt(e,t);e.emit("setBar","played",r,t),e.seek=n}}function Hn(e){return t=>{let{icons:n,option:r,proxy:i}=t,{$player:o,$progress:a}=t.template;return{...e,html:`
                <div class="art-control-progress-inner">
                    <div class="art-progress-hover"></div>
                    <div class="art-progress-loaded"></div>
                    <div class="art-progress-played"></div>
                    <div class="art-progress-highlight"></div>
                    <div class="art-progress-indicator"></div>
                    <div class="art-progress-tip">00:00</div>
                </div>
            `,mounted:s=>{let c=null,l=!1,d=ot(".art-progress-hover",s),p=ot(".art-progress-loaded",s),f=ot(".art-progress-played",s),v=ot(".art-progress-highlight",s),m=ot(".art-progress-indicator",s),g=ot(".art-progress-tip",s);n.indicator?w(m,n.indicator):u(m,"backgroundColor","var(--art-theme)");function y(b){let{width:M}=Pt(t,b),{text:O}=b.target.dataset;g.textContent=O;let P=g.clientWidth;M<=P/2?u(g,"left",0):M>s.clientWidth-P/2?u(g,"left",`${s.clientWidth-P}px`):u(g,"left",`${M-P/2}px`)}function C(b,M){let{width:O,time:P}=M||Pt(t,b);g.textContent=P||"00:00";let I=g.clientWidth;O<=I/2?u(g,"left",0):O>s.clientWidth-I/2?u(g,"left",`${s.clientWidth-I}px`):u(g,"left",`${O-I/2}px`)}function L(){v.textContent="";for(let b=0;b<r.highlight.length;b++){let M=r.highlight[b],O=it(M.time,0,t.duration)/t.duration*100,P=`<span data-text="${M.text}" data-time="${M.time}" style="left: ${O}%"></span>`;w(v,P)}}function S(b,M,O){let P=b==="played"&&O&&j;if(b==="loaded"&&u(p,"width",`${M*100}%`),b==="hover"&&(u(d,"width",`${M*100}%`),Lt(O,v)?y(O):C(O),M===0?J(o,"art-progress-hover"):A(o,"art-progress-hover")),b==="played"&&(u(f,"width",`${M*100}%`),u(m,"left",`${M*100}%`)),P){A(o,"art-progress-hover");let I=s.clientWidth*M,W=ft(M*t.duration);C(O,{width:I,time:W}),clearTimeout(c),c=setTimeout(()=>{J(o,"art-progress-hover")},500)}}t.on("setBar",S),t.on("video:loadedmetadata",L),t.constructor.USE_RAF?t.on("raf",()=>{t.emit("setBar","played",t.played),t.emit("setBar","loaded",t.loaded)}):(t.on("video:timeupdate",()=>{t.emit("setBar","played",t.played)}),t.on("video:progress",()=>{t.emit("setBar","loaded",t.loaded)}),t.on("video:ended",()=>{t.emit("setBar","played",1)})),t.emit("setBar","loaded",t.loaded||0),j||(i(a,"click",b=>{b.target!==m&&Ue(t,b)}),i(a,"mousemove",b=>{let{percentage:M}=Pt(t,b);t.emit("setBar","hover",M,b)}),i(a,"mouseleave",b=>{t.emit("setBar","hover",0,b)}),i(a,"mousedown",b=>{l=b.button===0}),t.on("document:mousemove",b=>{if(l){let{second:M,percentage:O}=Pt(t,b);t.emit("setBar","played",O,b),t.seek=M}}),t.on("document:mouseup",()=>{l&&(l=!1)}))}}}}function Vn(e){return t=>({...e,tooltip:t.i18n.get("Screenshot"),mounted:n=>{let{proxy:r,icons:i}=t;w(n,i.screenshot),r(n,"click",()=>{t.screenshot()})}})}function Fn(e){return t=>({...e,tooltip:t.i18n.get("Show Setting"),mounted:n=>{let{proxy:r,icons:i,i18n:o}=t;w(n,i.setting),r(n,"click",()=>{t.setting.toggle(),t.setting.resize()}),t.on("setting",a=>{gt(n,o.get(a?"Hide Setting":"Show Setting"))})}})}function Bn(e){return t=>({...e,style:j?{fontSize:"12px",padding:"0 5px"}:{cursor:"auto",padding:"0 10px"},mounted:n=>{function r(){let o=`${ft(t.currentTime)} / ${ft(t.duration)}`;o!==n.textContent&&(n.textContent=o)}r();let i=["video:loadedmetadata","video:timeupdate","video:progress"];for(let o=0;o<i.length;o++)t.on(i[o],r)}})}function Yn(e){return t=>({...e,mounted:n=>{let{proxy:r,icons:i}=t,o=w(n,i.volume),a=w(n,i.volumeClose),s=w(n,'<div class="art-volume-panel"></div>'),c=w(s,'<div class="art-volume-inner"></div>'),l=w(c,'<div class="art-volume-val"></div>'),d=w(c,'<div class="art-volume-slider"></div>'),p=w(d,'<div class="art-volume-handle"></div>'),f=w(p,'<div class="art-volume-loaded"></div>'),v=w(d,'<div class="art-volume-indicator"></div>');function m(y){let{top:C,height:L}=ht(d);return 1-(y.clientY-C)/L}function g(){if(t.muted||t.volume===0)u(o,"display","none"),u(a,"display","flex"),u(v,"top","100%"),u(f,"top","100%"),l.textContent=0;else{let y=t.volume*100;u(o,"display","flex"),u(a,"display","none"),u(v,"top",`${100-y}%`),u(f,"top",`${100-y}%`),l.textContent=Math.floor(y)}}if(g(),t.on("video:volumechange",g),r(o,"click",()=>{t.muted=!0}),r(a,"click",()=>{t.muted=!1}),j)u(s,"display","none");else{let y=!1;r(d,"mousedown",C=>{y=C.button===0,t.volume=m(C)}),t.on("document:mousemove",C=>{y&&(t.muted=!1,t.volume=m(C))}),t.on("document:mouseup",()=>{y&&(y=!1)})}}})}var se=class extends vt{constructor(t){super(t),this.isHover=!1,this.name="control",this.timer=Date.now();let{constructor:n}=t,{$player:r,$bottom:i}=this.art.template;t.on("mousemove",()=>{j||(this.show=!0)}),t.on("click",()=>{j?this.toggle():this.show=!0}),t.on("document:mousemove",o=>{this.isHover=Lt(o,i)}),t.on("video:timeupdate",()=>{!t.setting.show&&!this.isHover&&!t.isInput&&t.playing&&this.show&&Date.now()-this.timer>=n.CONTROL_HIDE_TIME&&(this.show=!1)}),t.on("control",o=>{o?(J(r,"art-hide-cursor"),A(r,"art-hover"),this.timer=Date.now()):(A(r,"art-hide-cursor"),J(r,"art-hover"))}),this.init()}init(){let{option:t}=this.art;t.isLive||this.add(Hn({name:"progress",position:"top",index:10})),this.add({name:"thumbnails",position:"top",index:20}),this.add(_n({name:"playAndPause",position:"left",index:10})),this.add(Yn({name:"volume",position:"left",index:20})),t.isLive||this.add(Bn({name:"time",position:"left",index:30})),t.quality.length&&zt().then(()=>{this.art.quality=t.quality}),t.screenshot&&!j&&this.add(Vn({name:"screenshot",position:"right",index:20})),t.setting&&this.add(Fn({name:"setting",position:"right",index:30})),t.pip&&this.add(Dn({name:"pip",position:"right",index:40})),t.airplay&&window.WebKitPlaybackTargetAvailabilityEvent&&this.add(Pn({name:"airplay",position:"right",index:50})),t.fullscreenWeb&&this.add(Nn({name:"fullscreenWeb",position:"right",index:60})),t.fullscreen&&this.add(On({name:"fullscreen",position:"right",index:70}));for(let n=0;n<t.controls.length;n++)this.add(t.controls[n])}add(t){let n=typeof t=="function"?t(this.art):t,{$progress:r,$controlsLeft:i,$controlsRight:o}=this.art.template;switch(n.position){case"top":this.$parent=r;break;case"left":this.$parent=i;break;case"right":this.$parent=o;break;default:st(!1,"Control option.position must one of 'top', 'left', 'right'");break}super.add(n)}check(t){if(t){t.$control_value.innerHTML=t.html;for(let n=0;n<t.$control_option.length;n++){let r=t.$control_option[n];r.default=r===t,r.default&&ut(r.$control_item,"art-current")}}}selector(t,n,r){let{proxy:i}=this.art.events;A(n,"art-control-selector");let o=K("div");A(o,"art-selector-value"),w(o,t.html),n.textContent="",w(n,o);let a=K("div");A(a,"art-selector-list"),w(n,a);for(let c=0;c<t.selector.length;c++){let l=t.selector[c],d=K("div");A(d,"art-selector-item"),l.default&&A(d,"art-current"),d.dataset.index=c,d.dataset.value=l.value,d.innerHTML=l.html,w(a,d),k(l,"$control_option",{get:()=>t.selector}),k(l,"$control_item",{get:()=>d}),k(l,"$control_value",{get:()=>o})}let s=i(a,"click",async c=>{let l=Ee(c),d=t.selector.find(p=>p.$control_item===l.find(f=>p.$control_item===f));this.check(d),t.onSelect&&(o.innerHTML=await t.onSelect.call(this.art,d,d.$control_item,c))});r.push(s)}};function Wn(e,t){let{constructor:n,template:{$player:r,$video:i}}=e;function o(s){Lt(s,r)?(e.isInput=s.target.tagName==="INPUT",e.isFocus=!0,e.emit("focus",s)):(e.isInput=!1,e.isFocus=!1,e.emit("blur",s))}e.on("document:click",o),e.on("document:contextmenu",o);let a=[];t.proxy(i,"click",s=>{let c=Date.now();a.push(c);let{MOBILE_CLICK_PLAY:l,DBCLICK_TIME:d,MOBILE_DBCLICK_PLAY:p,DBCLICK_FULLSCREEN:f}=n,v=a.filter(m=>c-m<=d);switch(v.length){case 1:e.emit("click",s),j?!e.isLock&&l&&e.toggle():e.toggle(),a=v;break;case 2:e.emit("dblclick",s),j?!e.isLock&&p&&e.toggle():f&&(e.fullscreen=!e.fullscreen),a=[];break;default:a=[]}})}function jn(e,t){return Math.atan2(t,e)*180/Math.PI}function qn(e,t,n,r){let i=t-r,o=n-e,a=0;if(Math.abs(o)<2&&Math.abs(i)<2)return a;let s=jn(o,i);return s>=-45&&s<45?a=4:s>=45&&s<135?a=1:s>=-135&&s<-45?a=2:(s>=135&&s<=180||s>=-180&&s<-135)&&(a=3),a}function Xn(e,t){if(j&&!e.option.isLive){let{$video:n,$progress:r}=e.template,i=null,o=!1,a=0,s=0,c=0,l=f=>{if(f.touches.length===1&&!e.isLock){i===r&&Ue(e,f),o=!0;let{pageX:v,pageY:m}=f.touches[0];a=v,s=m,c=e.currentTime}},d=f=>{if(f.touches.length===1&&o&&e.duration){let{pageX:v,pageY:m}=f.touches[0],g=qn(a,s,v,m),y=[3,4].includes(g),C=[1,2].includes(g);if(y&&!e.isRotate||C&&e.isRotate){let S=it((v-a)/e.width,-1,1),b=it((m-s)/e.height,-1,1),M=e.isRotate?b:S,O=i===n?e.constructor.TOUCH_MOVE_RATIO:1,P=it(c+e.duration*M*O,0,e.duration);e.seek=P,e.emit("setBar","played",it(P/e.duration,0,1),f),e.notice.show=`${ft(P)} / ${ft(e.duration)}`}}},p=()=>{o&&(a=0,s=0,c=0,o=!1,i=null)};e.option.gesture&&(t.proxy(n,"touchstart",f=>{i=n,l(f)}),t.proxy(n,"touchmove",d)),t.proxy(r,"touchstart",f=>{i=r,l(f)}),t.proxy(r,"touchmove",d),e.on("document:touchend",p)}}function Un(e,t){let n=["click","mouseup","keydown","touchend","touchmove","mousemove","pointerup","contextmenu","pointermove","visibilitychange","webkitfullscreenchange"],r=["resize","scroll","orientationchange"],i=[];function o(a={}){for(let c=0;c<i.length;c++)t.remove(i[c]);i.length=0;let{$player:s}=e.template;n.forEach(c=>{let l=a.document||s.ownerDocument||document,d=t.proxy(l,c,p=>{e.emit(`document:${c}`,p)});i.push(d)}),r.forEach(c=>{let l=a.window||s.ownerDocument?.defaultView||window,d=t.proxy(l,c,p=>{e.emit(`window:${c}`,p)});i.push(d)})}o(),t.bindGlobalEvents=o}function Gn(e,t){let{$player:n}=e.template;t.hover(n,r=>{A(n,"art-hover"),e.emit("hover",!0,r)},r=>{J(n,"art-hover"),e.emit("hover",!1,r)})}function Kn(e,t){let{$player:n}=e.template;t.proxy(n,"mousemove",r=>{e.emit("mousemove",r)})}function Qn(e,t){let{option:n,constructor:r}=e;e.on("resize",()=>{let{aspectRatio:o,notice:a}=e;e.state==="standard"&&n.autoSize&&e.autoSize(),e.aspectRatio=o,a.show=""});let i=je(()=>e.emit("resize"),r.RESIZE_TIME);e.on("window:orientationchange",()=>i()),e.on("window:resize",()=>i()),screen&&screen.orientation&&screen.orientation.onchange&&t.proxy(screen.orientation,"change",()=>i())}function Jn(e){if(e.constructor.USE_RAF){let t=null;(function n(){e.playing&&e.emit("raf"),e.isDestroy||(t=requestAnimationFrame(n))})(),e.on("destroy",()=>{cancelAnimationFrame(t)})}}function Zn(e){let{option:t,constructor:n,template:{$container:r}}=e,i=qe(()=>{e.emit("view",$e(r,n.SCROLL_GAP))},n.SCROLL_TIME);e.on("window:scroll",()=>i()),e.on("view",o=>{t.autoMini&&(e.mini=!o)})}var le=class{constructor(t){this.destroyEvents=new Set,this.proxy=this.proxy.bind(this),this.hover=this.hover.bind(this),Wn(t,this),Gn(t,this),Kn(t,this),Qn(t,this),Xn(t,this),Zn(t),Un(t,this),Jn(t)}proxy(t,n,r,i={}){if(Array.isArray(n))return n.map(a=>this.proxy(t,a,r,i));t.addEventListener(n,r,i);let o=()=>t.removeEventListener(n,r,i);return this.destroyEvents.add(o),o}hover(t,n,r){n&&this.proxy(t,"mouseenter",n),r&&this.proxy(t,"mouseleave",r)}remove(t){if(this.destroyEvents.has(t))try{t()}catch(n){console.warn("Failed to remove event listener:",n)}finally{this.destroyEvents.delete(t)}}destroy(){for(let t of this.destroyEvents)try{t()}catch(n){console.warn("Failed to destroy event listener:",n)}this.destroyEvents.clear()}},ce=class{constructor(t){this.art=t,this.keys={},j||this.init()}init(){let{constructor:t}=this.art;this.art.option.hotkey&&(this.add("Escape",()=>{this.art.fullscreenWeb&&(this.art.fullscreenWeb=!1)}),this.add("Space",()=>{this.art.toggle()}),this.add("ArrowLeft",()=>{this.art.backward=t.SEEK_STEP}),this.add("ArrowUp",()=>{this.art.volume+=t.VOLUME_STEP}),this.add("ArrowRight",()=>{this.art.forward=t.SEEK_STEP}),this.add("ArrowDown",()=>{this.art.volume-=t.VOLUME_STEP})),this.art.on("document:keydown",n=>{if(this.art.isFocus){let r=document.activeElement.tagName.toUpperCase(),i=document.activeElement.getAttribute("contenteditable");if(r!=="INPUT"&&r!=="TEXTAREA"&&i!==""&&i!=="true"&&!n.altKey&&!n.ctrlKey&&!n.metaKey&&!n.shiftKey){let o=this.keys[n.code];if(o){n.preventDefault();for(let a=0;a<o.length;a++)o[a].call(this.art,n);this.art.emit("hotkey",n)}}}this.art.emit("keydown",n)})}add(t,n){return this.keys[t]?this.keys[t].includes(n)||this.keys[t].push(n):this.keys[t]=[n],this}remove(t,n){if(this.keys[t]){let r=this.keys[t].indexOf(n);r!==-1&&this.keys[t].splice(r,1),this.keys[t].length===0&&delete this.keys[t]}return this}},Ge={"Video Info":"\u7EDF\u8BA1\u4FE1\u606F",Close:"\u5173\u95ED","Video Load Failed":"\u52A0\u8F7D\u5931\u8D25",Volume:"\u97F3\u91CF",Play:"\u64AD\u653E",Pause:"\u6682\u505C",Rate:"\u901F\u5EA6",Mute:"\u9759\u97F3","Video Flip":"\u753B\u9762\u7FFB\u8F6C",Horizontal:"\u6C34\u5E73",Vertical:"\u5782\u76F4",Reconnect:"\u91CD\u65B0\u8FDE\u63A5","Show Setting":"\u663E\u793A\u8BBE\u7F6E","Hide Setting":"\u9690\u85CF\u8BBE\u7F6E",Screenshot:"\u622A\u56FE","Play Speed":"\u64AD\u653E\u901F\u5EA6","Aspect Ratio":"\u753B\u9762\u6BD4\u4F8B",Default:"\u9ED8\u8BA4",Normal:"\u6B63\u5E38",Open:"\u6253\u5F00","Switch Video":"\u5207\u6362","Switch Subtitle":"\u5207\u6362\u5B57\u5E55",Fullscreen:"\u5168\u5C4F","Exit Fullscreen":"\u9000\u51FA\u5168\u5C4F","Web Fullscreen":"\u7F51\u9875\u5168\u5C4F","Exit Web Fullscreen":"\u9000\u51FA\u7F51\u9875\u5168\u5C4F","Mini Player":"\u8FF7\u4F60\u64AD\u653E\u5668","PIP Mode":"\u5F00\u542F\u753B\u4E2D\u753B","Exit PIP Mode":"\u9000\u51FA\u753B\u4E2D\u753B","PIP Not Supported":"\u4E0D\u652F\u6301\u753B\u4E2D\u753B","Fullscreen Not Supported":"\u4E0D\u652F\u6301\u5168\u5C4F","Subtitle Offset":"\u5B57\u5E55\u504F\u79FB","Last Seen":"\u4E0A\u6B21\u770B\u5230","Jump Play":"\u8DF3\u8F6C\u64AD\u653E",AirPlay:"\u9694\u7A7A\u64AD\u653E","AirPlay Not Available":"\u9694\u7A7A\u64AD\u653E\u4E0D\u53EF\u7528"};typeof window<"u"&&(window["artplayer-i18n-zh-cn"]=Ge);var de=class{constructor(t){this.art=t,this.languages={"zh-cn":Ge},this.language={},this.update(t.option.i18n)}init(){let t=this.art.option.lang.toLowerCase();this.language=this.languages[t]||{}}get(t){return this.language[t]||t}update(t){this.languages=Zt(this.languages,t),this.init()}},tr=`<svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g>
        <path d="M16,1 L2,1 C1.447,1 1,1.447 1,2 L1,12 C1,12.553 1.447,13 2,13 L5,13 L5,11 L3,11 L3,3 L15,3 L15,11 L13,11 L13,13 L16,13 C16.553,13 17,12.553 17,12 L17,2 C17,1.447 16.553,1 16,1 L16,1 Z"></path>
        <polygon points="4 17 14 17 9 11"></polygon>
    </g>
</svg>
`,er=`<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" version="1.1" viewBox="0 0 32 32">
    <path d="M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z" />
</svg>`,nr=`<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" version="1.1" viewBox="0 0 32 32">
    <path d="m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z" />
</svg>`,rr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_216"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_216)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill-opacity="1" d=" M12.437999725341797,-12.70199966430664 C12.437999725341797,-12.70199966430664 9.618000030517578,-9.881999969482422 9.618000030517578,-9.881999969482422 C8.82800006866455,-9.092000007629395 8.82800006866455,-7.831999778747559 9.618000030517578,-7.052000045776367 C9.618000030517578,-7.052000045776367 16.687999725341797,0.017999999225139618 16.687999725341797,0.017999999225139618 C16.687999725341797,0.017999999225139618 9.618000030517578,7.0879998207092285 9.618000030517578,7.0879998207092285 C8.82800006866455,7.877999782562256 8.82800006866455,9.137999534606934 9.618000030517578,9.918000221252441 C9.618000030517578,9.918000221252441 12.437999725341797,12.748000144958496 12.437999725341797,12.748000144958496 C13.227999687194824,13.527999877929688 14.48799991607666,13.527999877929688 15.267999649047852,12.748000144958496 C15.267999649047852,12.748000144958496 26.58799934387207,1.437999963760376 26.58799934387207,1.437999963760376 C27.368000030517578,0.6579999923706055 27.368000030517578,-0.6119999885559082 26.58799934387207,-1.3919999599456787 C26.58799934387207,-1.3919999599456787 15.267999649047852,-12.70199966430664 15.267999649047852,-12.70199966430664 C14.48799991607666,-13.491999626159668 13.227999687194824,-13.491999626159668 12.437999725341797,-12.70199966430664z M-12.442000389099121,-12.70199966430664 C-13.182000160217285,-13.442000389099121 -14.362000465393066,-13.482000350952148 -15.142000198364258,-12.821999549865723 C-15.142000198364258,-12.821999549865723 -15.272000312805176,-12.70199966430664 -15.272000312805176,-12.70199966430664 C-15.272000312805176,-12.70199966430664 -26.582000732421875,-1.3919999599456787 -26.582000732421875,-1.3919999599456787 C-27.32200050354004,-0.6520000100135803 -27.36199951171875,0.5180000066757202 -26.70199966430664,1.3079999685287476 C-26.70199966430664,1.3079999685287476 -26.582000732421875,1.437999963760376 -26.582000732421875,1.437999963760376 C-26.582000732421875,1.437999963760376 -15.272000312805176,12.748000144958496 -15.272000312805176,12.748000144958496 C-14.531999588012695,13.48799991607666 -13.362000465393066,13.527999877929688 -12.571999549865723,12.868000030517578 C-12.571999549865723,12.868000030517578 -12.442000389099121,12.748000144958496 -12.442000389099121,12.748000144958496 C-12.442000389099121,12.748000144958496 -9.612000465393066,9.918000221252441 -9.612000465393066,9.918000221252441 C-8.871999740600586,9.178000450134277 -8.831999778747559,8.008000373840332 -9.501999855041504,7.2179999351501465 C-9.501999855041504,7.2179999351501465 -9.612000465393066,7.0879998207092285 -9.612000465393066,7.0879998207092285 C-9.612000465393066,7.0879998207092285 -16.68199920654297,0.017999999225139618 -16.68199920654297,0.017999999225139618 C-16.68199920654297,0.017999999225139618 -9.612000465393066,-7.052000045776367 -9.612000465393066,-7.052000045776367 C-8.871999740600586,-7.791999816894531 -8.831999778747559,-8.961999893188477 -9.501999855041504,-9.751999855041504 C-9.501999855041504,-9.751999855041504 -9.612000465393066,-9.881999969482422 -9.612000465393066,-9.881999969482422 C-9.612000465393066,-9.881999969482422 -12.442000389099121,-12.70199966430664 -12.442000389099121,-12.70199966430664z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></g></g></g></svg>',or=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" style="width: 100%; height: 100%;">
<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
</svg>`,ir=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1655876154826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22">
<path d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z" p-id="2131">
</path>
</svg>`,ar='<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z            M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></svg>',sr=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1652850026663" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2749" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50">
<path d="M593.8176 168.5504l356.00384 595.21024c26.15296 43.74528 10.73152 99.7376-34.44736 125.05088-14.39744 8.06912-30.72 12.30848-47.37024 12.30848H155.97568C103.75168 901.12 61.44 860.16 61.44 809.61536c0-16.09728 4.38272-31.92832 12.71808-45.8752L430.16192 168.5504c26.17344-43.7248 84.00896-58.65472 129.20832-33.34144a93.0816 93.0816 0 0 1 34.44736 33.34144zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88z m0-512a72.31488 72.31488 0 0 0-71.76192 81.3056l25.72288 205.7216a46.40768 46.40768 0 0 0 92.07808 0l25.72288-205.74208A72.31488 72.31488 0 0 0 512 307.2z" p-id="2750">
</path>
</svg>`,lr=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1652445277062" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
<path d="M554.666667 810.666667v85.333333h-85.333334v-85.333333h85.333334zM170.666667 178.005333a42.666667 42.666667 0 0 1 34.986666 18.218667l203.904 291.328a42.666667 42.666667 0 0 1 0 48.896l-203.946666 291.328A42.666667 42.666667 0 0 1 128 803.328V220.672a42.666667 42.666667 0 0 1 42.666667-42.666667z m682.666666 0a42.666667 42.666667 0 0 1 42.368 37.717334l0.298667 4.949333v582.656a42.666667 42.666667 0 0 1-74.24 28.629333l-3.413333-4.181333-203.904-291.328a42.666667 42.666667 0 0 1-3.029334-43.861333l3.029334-5.034667 203.946666-291.328A42.666667 42.666667 0 0 1 853.333333 178.005333zM554.666667 640v85.333333h-85.333334v-85.333333h85.333334zM196.266667 319.104V716.8L335.957333 512 196.309333 319.104zM554.666667 469.333333v85.333334h-85.333334v-85.333334h85.333334z m0-170.666666v85.333333h-85.333334V298.666667h85.333334z m0-170.666667v85.333333h-85.333334V128h85.333334z">
</path>
</svg>
`,cr=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M768 298.666667h170.666667v85.333333h-256V128h85.333333v170.666667zM341.333333 384H85.333333V298.666667h170.666667V128h85.333333v256z m426.666667 341.333333v170.666667h-85.333333v-256h256v85.333333h-170.666667zM341.333333 640v256H256v-170.666667H85.333333v-85.333333h256z" />
</svg>
`,dr=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M625.777778 256h142.222222V398.222222h113.777778V142.222222H625.777778v113.777778zM256 398.222222V256H398.222222v-113.777778H142.222222V398.222222h113.777778zM768 625.777778v142.222222H625.777778v113.777778h256V625.777778h-113.777778zM398.222222 768H256V625.777778h-113.777778v256H398.222222v-113.777778z" />
</svg>
`,pr=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4A76.8 76.8 0 0 0 76.8 1024h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM896 512a64 64 0 0 1 7.488 127.552L896 640h-128v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208L709.632 512H896zM256 512a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144L442.368 512H256z" />
</svg>
`,ur=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4A76.8 76.8 0 0 0 76.8 1024h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM448 192a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144L261.632 192H448zM704 832a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 0.384H704z" />
</svg>
`,hr=`<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default">
  <rect x="0" y="0" width="100" height="100" fill="none" class="bk"/>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(0 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(30 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(60 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(90 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(120 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(150 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(180 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(210 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(240 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(270 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(300 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(330 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/>
  </rect>
</svg>`,fr=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1650612139149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
<path d="M298.666667 426.666667V341.333333a213.333333 213.333333 0 1 1 426.666666 0v85.333334h42.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v256a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-256a85.333333 85.333333 0 0 1 85.333333-85.333333h42.666667z m213.333333-213.333334a128 128 0 0 0-128 128v85.333334h256V341.333333a128 128 0 0 0-128-128z"></path>
</svg>
`,mr=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"></path>
</svg>`,gr=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
<path d="M844.8 219.648h-665.6c-6.144 0-10.24 4.608-10.24 10.752v563.2c0 5.632 4.096 10.24 10.24 10.24h256v92.16h-256a102.4 102.4 0 0 1-102.4-102.4v-563.2c0-56.832 45.568-102.4 102.4-102.4h665.6a102.4 102.4 0 0 1 102.4 102.4v204.8h-92.16v-204.8c0-6.144-4.608-10.752-10.24-10.752zM614.4 588.8c-28.672 0-51.2 22.528-51.2 51.2v204.8c0 28.16 22.528 51.2 51.2 51.2h281.6c28.16 0 51.2-23.04 51.2-51.2v-204.8c0-28.672-23.04-51.2-51.2-51.2H614.4z"></path>
</svg>`,vr=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
  <path d="M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"></path>
</svg>`,br='<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10,8v8l6-4L10,8L10,8z M6.3,5L5.7,4.2C7.2,3,9,2.2,11,2l0.1,1C9.3,3.2,7.7,3.9,6.3,5z            M5,6.3L4.2,5.7C3,7.2,2.2,9,2,11 l1,.1C3.2,9.3,3.9,7.7,5,6.3z            M5,17.7c-1.1-1.4-1.8-3.1-2-4.8L2,13c0.2,2,1,3.8,2.2,5.4L5,17.7z            M11.1,21c-1.8-0.2-3.4-0.9-4.8-2 l-0.6,.8C7.2,21,9,21.8,11,22L11.1,21z            M22,12c0-5.2-3.9-9.4-9-10l-0.1,1c4.6,.5,8.1,4.3,8.1,9s-3.5,8.5-8.1,9l0.1,1 C18.2,21.5,22,17.2,22,12z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></svg>',yr=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50">
	<path d="M 19.402344 6 C 17.019531 6 14.96875 7.679688 14.5 10.011719 L 14.097656 12 L 9 12 C 6.238281 12 4 14.238281 4 17 L 4 38 C 4 40.761719 6.238281 43 9 43 L 41 43 C 43.761719 43 46 40.761719 46 38 L 46 17 C 46 14.238281 43.761719 12 41 12 L 35.902344 12 L 35.5 10.011719 C 35.03125 7.679688 32.980469 6 30.597656 6 Z M 25 17 C 30.519531 17 35 21.480469 35 27 C 35 32.519531 30.519531 37 25 37 C 19.480469 37 15 32.519531 15 27 C 15 21.480469 19.480469 17 25 17 Z M 25 19 C 20.589844 19 17 22.589844 17 27 C 17 31.410156 20.589844 35 25 35 C 29.410156 35 33 31.410156 33 27 C 33 22.589844 29.410156 19 25 19 Z "/>
</svg>
`,xr=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="2"></circle>
    <path d="M19.164 8.861L17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
</svg>`,wr=`<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
<path d="M9.5 9.325v5.35q0 .575.525.875t1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
</svg>
`,kr=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="26" height="26" viewBox="0 0 1740 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M511.8976 1024h670.5152c282.4192-0.4096 511.1808-229.4784 511.1808-511.8976 0-282.4192-228.7616-511.488-511.1808-511.8976H511.8976C229.4784 0.6144 0.7168 229.6832 0.7168 512.1024c0 282.4192 228.7616 511.488 511.1808 511.8976zM511.3344 48.64A464.5888 464.5888 0 1 1 48.0256 513.024 463.872 463.872 0 0 1 511.3344 48.4352V48.64z" />
</svg>
`,$r=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="26" height="26" viewBox="0 0 1664 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024z m0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z"  />
</svg>`,Tr=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1650612464266" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M666.752 194.517333L617.386667 268.629333A128 128 0 0 0 384 341.333333l0.042667 85.333334h384a85.333333 85.333333 0 0 1 85.333333 85.333333v256a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-256a85.333333 85.333333 0 0 1 85.333333-85.333333h42.666667V341.333333a213.333333 213.333333 0 0 1 368.085333-146.816z"></path></svg>
`,Er=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"></path>
    <path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"></path>
</svg>`,Cr=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"></path>
    <path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"></path>
</svg>`,pe=class{constructor(t){let n={loading:hr,state:wr,play:vr,pause:mr,check:or,volume:Cr,volumeClose:Er,screenshot:yr,setting:xr,pip:gr,arrowLeft:er,arrowRight:nr,playbackRate:br,aspectRatio:rr,config:ar,lock:fr,flip:lr,unlock:Tr,fullscreenOff:cr,fullscreenOn:dr,fullscreenWebOff:pr,fullscreenWebOn:ur,switchOn:$r,switchOff:kr,error:sr,close:ir,airplay:tr,...t.option.icons};for(let r in n)k(this,r,{get:()=>Ne(r,n[r])})}},ue=class extends vt{constructor(t){super(t),this.name="info",j||this.init()}init(){let{proxy:t,constructor:n,template:{$infoPanel:r,$infoClose:i,$video:o}}=this.art;t(i,"click",()=>{this.show=!1});let a=null,s=Vt("[data-video]",r)||[];this.art.on("destroy",()=>clearTimeout(a));function c(){for(let l=0;l<s.length;l++){let d=s[l],p=o[d.dataset.video],f=typeof p=="number"?p.toFixed(2):p;d.textContent!==f&&(d.textContent=f)}a=setTimeout(c,n.INFO_LOOP_TIME)}c()}},he=class extends vt{constructor(t){super(t);let{option:n,template:{$layer:r}}=t;this.name="layer",this.$parent=r;for(let i=0;i<n.layers.length;i++)this.add(n.layers[i])}},fe=class extends vt{constructor(t){super(t),this.name="loading",w(t.template.$loading,t.icons.loading)}},me=class extends vt{constructor(t){super(t),this.name="mask";let{template:n,icons:r,events:i}=t,o=w(n.$state,r.state),a=w(n.$state,r.error);u(a,"display","none"),t.on("destroy",()=>{u(o,"display","none"),u(a,"display",null)}),i.proxy(n.$state,"click",()=>t.play())}},ge=class{constructor(t){this.art=t,this.timer=null,t.on("destroy",()=>this.destroy())}destroy(){this.timer&&(clearTimeout(this.timer),this.timer=null)}set show(t){let{constructor:n,template:{$player:r,$noticeInner:i}}=this.art;t?(i.textContent=t instanceof Error?t.message.trim():t,A(r,"art-notice-show"),clearTimeout(this.timer),this.timer=setTimeout(()=>{i.textContent="",J(r,"art-notice-show")},n.NOTICE_TIME)):J(r,"art-notice-show")}get show(){let{template:{$player:t}}=this.art;return t.classList.contains("art-notice-show")}};function Sr(e){let{i18n:t,notice:n,proxy:r,template:{$video:i}}=e,o=!0;window.WebKitPlaybackTargetAvailabilityEvent&&i.webkitShowPlaybackTargetPicker?r(i,"webkitplaybacktargetavailabilitychanged",a=>{switch(a.availability){case"available":o=!0;break;case"not-available":o=!1;break}}):o=!1,k(e,"airplay",{value(){o?(i.webkitShowPlaybackTargetPicker(),e.emit("airplay")):n.show=t.get("AirPlay Not Available")}})}function Lr(e){let{i18n:t,notice:n,template:{$video:r,$player:i}}=e;k(e,"aspectRatio",{get(){return i.dataset.aspectRatio||"default"},set(o){if(o||(o="default"),o==="default")u(r,"width",null),u(r,"height",null),u(r,"margin",null),delete i.dataset.aspectRatio;else{let a=o.split(":").map(Number),{clientWidth:s,clientHeight:c}=i,l=s/c,d=a[0]/a[1];l>d?(u(r,"width",`${d*c}px`),u(r,"height","100%"),u(r,"margin","0 auto")):(u(r,"width","100%"),u(r,"height",`${s/d}px`),u(r,"margin","auto 0")),i.dataset.aspectRatio=o}n.show=`${t.get("Aspect Ratio")}: ${o==="default"?t.get("Default"):o}`,e.emit("aspectRatio",o)}})}function Mr(e){let{template:{$video:t}}=e;k(e,"attr",{value(n,r){if(r===void 0)return t[n];t[n]=r}})}function Ar(e){let{template:{$container:t,$video:n}}=e;k(e,"autoHeight",{value(){let{clientWidth:r}=t,{videoHeight:i,videoWidth:o}=n,a=i*(r/o);u(t,"height",`${a}px`),e.emit("autoHeight",a)}})}function zr(e){let{$container:t,$player:n,$video:r}=e.template;k(e,"autoSize",{value(){let{videoWidth:i,videoHeight:o}=r,{width:a,height:s}=ht(t),c=i/o;if(a/s>c){let d=s*c/a*100;u(n,"width",`${d}%`),u(n,"height","100%")}else{let d=a/c/s*100;u(n,"width","100%"),u(n,"height",`${d}%`)}e.emit("autoSize",{width:e.width,height:e.height})}})}function Ir(e){let{$player:t}=e.template;k(e,"cssVar",{value(n,r){return r?t.style.setProperty(n,r):getComputedStyle(t).getPropertyValue(n)}})}function Rr(e){let{$video:t}=e.template;k(e,"currentTime",{get:()=>t.currentTime||0,set:n=>{n=Number.parseFloat(n),!Number.isNaN(n)&&(t.currentTime=it(n,0,e.duration))}})}function Pr(e){k(e,"duration",{get:()=>{let{duration:t}=e.template.$video;return t===1/0?0:t||0}})}function Or(e){let{i18n:t,notice:n,option:r,constructor:i,proxy:o,template:{$player:a,$video:s,$poster:c}}=e,l=0;for(let d=0;d<Nt.events.length;d++)o(s,Nt.events[d],p=>{e.emit(`video:${p.type}`,p)});e.on("video:canplay",()=>{l=0,e.loading.show=!1}),e.once("video:canplay",()=>{e.loading.show=!1,e.controls.show=!0,e.mask.show=!0,e.isReady=!0,e.emit("ready")}),e.on("video:ended",()=>{r.loop?(e.seek=0,e.play(),e.controls.show=!1,e.mask.show=!1):(e.controls.show=!0,e.mask.show=!0)}),e.on("video:error",async d=>{l<i.RECONNECT_TIME_MAX?(await zt(i.RECONNECT_SLEEP_TIME),l+=1,e.url=r.url,n.show=`${t.get("Reconnect")}: ${l}`,e.emit("error",d,l)):(e.mask.show=!0,e.loading.show=!1,e.controls.show=!0,A(a,"art-error"),await zt(i.RECONNECT_SLEEP_TIME),n.show=t.get("Video Load Failed"))}),e.on("video:loadedmetadata",()=>{e.emit("resize"),j&&(e.loading.show=!1,e.controls.show=!0,e.mask.show=!0)}),e.on("video:loadstart",()=>{e.loading.show=!0,e.mask.show=!1,e.controls.show=!0}),e.on("video:pause",()=>{e.controls.show=!0,e.mask.show=!0}),e.on("video:play",()=>{e.mask.show=!1,u(c,"display","none")}),e.on("video:playing",()=>{e.mask.show=!1}),e.on("video:progress",()=>{e.playing&&(e.loading.show=!1)}),e.on("video:seeked",()=>{e.loading.show=!1,e.mask.show=!0}),e.on("video:seeking",()=>{e.loading.show=!0,e.mask.show=!1}),e.on("video:timeupdate",()=>{e.mask.show=!1}),e.on("video:waiting",()=>{e.loading.show=!0,e.mask.show=!1})}function Nr(e){let{template:{$player:t},i18n:n,notice:r}=e;k(e,"flip",{get(){return t.dataset.flip||"normal"},set(i){i||(i="normal"),i==="normal"?delete t.dataset.flip:t.dataset.flip=i,r.show=`${n.get("Video Flip")}: ${n.get(Jt(i))}`,e.emit("flip",i)}})}var Ae=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],$t=(()=>{if(typeof document>"u")return!1;let e=Ae[0],t={};for(let n of Ae)if(n[1]in document){for(let[i,o]of n.entries())t[e[i]]=o;return t}return!1})(),ze={change:$t.fullscreenchange,error:$t.fullscreenerror},Q={request(e=document.documentElement,t){return new Promise((n,r)=>{let i=()=>{Q.off("change",i),n()};Q.on("change",i);let o=e[$t.requestFullscreen](t);o instanceof Promise&&o.then(i).catch(r)})},exit(){return new Promise((e,t)=>{if(!Q.isFullscreen){e();return}let n=()=>{Q.off("change",n),e()};Q.on("change",n);let r=document[$t.exitFullscreen]();r instanceof Promise&&r.then(n).catch(t)})},toggle(e,t){return Q.isFullscreen?Q.exit():Q.request(e,t)},onchange(e){Q.on("change",e)},onerror(e){Q.on("error",e)},on(e,t){let n=ze[e];n&&document.addEventListener(n,t,!1)},off(e,t){let n=ze[e];n&&document.removeEventListener(n,t,!1)},raw:$t};Object.defineProperties(Q,{isFullscreen:{get:()=>!!document[$t.fullscreenElement]},element:{enumerable:!0,get:()=>document[$t.fullscreenElement]},isEnabled:{enumerable:!0,get:()=>!!document[$t.fullscreenEnabled]}});function Dr(e){let{i18n:t,notice:n,template:{$video:r,$player:i}}=e,o=s=>{Q.on("change",()=>{s.emit("fullscreen",Q.isFullscreen),Q.isFullscreen?(s.state="fullscreen",A(i,"art-fullscreen")):J(i,"art-fullscreen"),s.emit("resize")}),Q.on("error",c=>{s.emit("fullscreenError",c)}),k(s,"fullscreen",{get(){return Q.isFullscreen},async set(c){c?await Q.request(i):await Q.exit()}})},a=s=>{s.on("document:webkitfullscreenchange",()=>{s.emit("fullscreen",s.fullscreen),s.emit("resize")}),k(s,"fullscreen",{get(){return document.fullscreenElement===r},set(c){c?(s.state="fullscreen",r.webkitEnterFullscreen()):r.webkitExitFullscreen()}})};e.once("video:loadedmetadata",()=>{Q.isEnabled?o(e):r.webkitSupportsFullscreen?a(e):k(e,"fullscreen",{get(){return!1},set(){n.show=t.get("Fullscreen Not Supported")}}),k(e,"fullscreen",Be(e,"fullscreen"))})}function _r(e){let{constructor:t,template:{$container:n,$player:r}}=e,i="";k(e,"fullscreenWeb",{get(){return mt(r,"art-fullscreen-web")},set(o){o?(i=r.style.cssText,t.FULLSCREEN_WEB_IN_BODY&&w(document.body,r),e.state="fullscreenWeb",u(r,"width","100%"),u(r,"height","100%"),A(r,"art-fullscreen-web"),e.emit("fullscreenWeb",!0)):(t.FULLSCREEN_WEB_IN_BODY&&w(n,r),i&&(r.style.cssText=i,i=""),J(r,"art-fullscreen-web"),e.emit("fullscreenWeb",!1)),e.emit("resize")}})}function Hr(e){let{$video:t}=e.template;k(e,"loaded",{get:()=>e.loadedTime/t.duration}),k(e,"loadedTime",{get:()=>t.buffered.length?t.buffered.end(t.buffered.length-1):0})}function Vr(e){let{icons:t,proxy:n,storage:r,template:{$player:i,$video:o}}=e,a=!1,s=0,c=0;function l(){let{$mini:v}=e.template;v&&(J(i,"art-mini"),u(v,"display","none"),i.prepend(o),e.emit("mini",!1))}function d(v,m){e.playing?(u(v,"display","none"),u(m,"display","flex")):(u(v,"display","flex"),u(m,"display","none"))}function p(){let{$mini:v}=e.template;if(v)return w(v,o),u(v,"display","flex");{let m=K("div");A(m,"art-mini-popup"),w(document.body,m),e.template.$mini=m,w(m,o);let g=w(m,'<div class="art-mini-close"></div>');w(g,t.close),n(g,"click",l);let y=w(m,'<div class="art-mini-state"></div>'),C=w(y,t.play),L=w(y,t.pause);return n(C,"click",()=>e.play()),n(L,"click",()=>e.pause()),d(C,L),e.on("video:playing",()=>d(C,L)),e.on("video:pause",()=>d(C,L)),e.on("video:timeupdate",()=>d(C,L)),n(m,"mousedown",S=>{a=S.button===0,s=S.pageX,c=S.pageY}),e.on("document:mousemove",S=>{if(a){A(m,"art-mini-dragging");let b=S.pageX-s,M=S.pageY-c;u(m,"transform",`translate(${b}px, ${M}px)`)}}),e.on("document:mouseup",()=>{if(a){a=!1,J(m,"art-mini-dragging");let S=ht(m);r.set("left",S.left),r.set("top",S.top),u(m,"left",`${S.left}px`),u(m,"top",`${S.top}px`),u(m,"transform",null)}}),m}}function f(){let{$mini:v}=e.template,m=ht(v),g=window.innerHeight-m.height-50,y=window.innerWidth-m.width-50;r.set("top",g),r.set("left",y),u(v,"top",`${g}px`),u(v,"left",`${y}px`)}k(e,"mini",{get(){return mt(i,"art-mini")},set(v){if(v){e.state="mini",A(i,"art-mini");let m=p(),g=r.get("top"),y=r.get("left");typeof g=="number"&&typeof y=="number"?(u(m,"top",`${g}px`),u(m,"left",`${y}px`),$e(m)||f()):f(),e.emit("mini",!0)}else l()}})}function Fr(e){let{option:t,storage:n,template:{$video:r,$poster:i}}=e;for(let a in t.moreVideoAttr)e.attr(a,t.moreVideoAttr[a]);t.muted&&(e.muted=t.muted),t.volume&&(r.volume=it(t.volume,0,1));let o=n.get("volume");typeof o=="number"&&(r.volume=it(o,0,1)),t.poster&&u(i,"backgroundImage",`url(${t.poster})`),t.autoplay&&(r.autoplay=t.autoplay),t.playsInline&&(r.playsInline=!0,r["webkit-playsinline"]=!0),t.theme&&(t.cssVar["--art-theme"]=t.theme);for(let a in t.cssVar)e.cssVar(a,t.cssVar[a]);e.url=t.url}function Br(e){let{template:{$video:t},i18n:n,notice:r}=e;k(e,"pause",{value(){let i=t.pause();return r.show=n.get("Pause"),e.emit("pause"),i}})}function Yr(e){let{template:{$video:t},proxy:n,notice:r}=e;t.disablePictureInPicture=!1,k(e,"pip",{get(){return document.pictureInPictureElement},set(i){i?(e.state="pip",t.requestPictureInPicture().catch(o=>{throw r.show=o,o})):document.exitPictureInPicture().catch(o=>{throw r.show=o,o})}}),n(t,"enterpictureinpicture",()=>{e.emit("pip",!0)}),n(t,"leavepictureinpicture",()=>{e.emit("pip",!1)})}function Wr(e){let{$video:t}=e.template;t.webkitSetPresentationMode("inline"),k(e,"pip",{get(){return t.webkitPresentationMode==="picture-in-picture"},set(n){n?(e.state="pip",t.webkitSetPresentationMode("picture-in-picture"),e.emit("pip",!0)):(t.webkitSetPresentationMode("inline"),e.emit("pip",!1))}})}function jr(e){let{i18n:t,notice:n,template:{$video:r}}=e;document.pictureInPictureEnabled?Yr(e):r.webkitSupportsPresentationMode?Wr(e):k(e,"pip",{get(){return!1},set(){n.show=t.get("PIP Not Supported")}})}function qr(e){let{template:{$video:t},i18n:n,notice:r}=e;k(e,"playbackRate",{get(){return t.playbackRate},set(i){if(i){if(i===t.playbackRate)return;t.playbackRate=i,r.show=`${n.get("Rate")}: ${i===1?n.get("Normal"):`${i}x`}`}else e.playbackRate=1}})}function Xr(e){k(e,"played",{get:()=>e.currentTime/e.duration})}function Ur(e){let{$video:t}=e.template;k(e,"playing",{get:()=>typeof t.playing=="boolean"?t.playing:t.currentTime>0&&!t.paused&&!t.ended&&t.readyState>2})}function Gr(e){let{i18n:t,notice:n,option:r,constructor:{instances:i},template:{$video:o}}=e;k(e,"play",{async value(){let a=await o.play();if(n.show=t.get("Play"),e.emit("play"),r.mutex)for(let s=0;s<i.length;s++){let c=i[s];c!==e&&c.pause()}return a}})}function Kr(e){let{template:{$poster:t}}=e;k(e,"poster",{get:()=>{try{return t.style.backgroundImage.match(/"(.*)"/)[1]}catch{return""}},set(n){u(t,"backgroundImage",`url(${n})`)}})}function Qr(e){k(e,"quality",{set(t){let{controls:n,notice:r,i18n:i}=e,o=t.find(a=>a.default)||t[0];n.update({name:"quality",position:"right",index:10,style:{marginRight:"10px"},html:o?.html||"",selector:t,async onSelect(a){return await e.switchQuality(a.url),r.show=`${i.get("Switch Video")}: ${a.html}`,a.html}})}})}function Jr(e){k(e,"rect",{get:()=>ht(e.template.$player)});let t=["bottom","height","left","right","top","width"];for(let n=0;n<t.length;n++){let r=t[n];k(e,r,{get:()=>e.rect[r]})}k(e,"x",{get:()=>e.left+window.pageXOffset}),k(e,"y",{get:()=>e.top+window.pageYOffset})}function Zr(e){let{notice:t,template:{$video:n}}=e,r=K("canvas");k(e,"getDataURL",{value:()=>new Promise((i,o)=>{try{r.width=n.videoWidth,r.height=n.videoHeight,r.getContext("2d").drawImage(n,0,0),i(r.toDataURL("image/png"))}catch(a){t.show=a,o(a)}})}),k(e,"getBlobUrl",{value:()=>new Promise((i,o)=>{try{r.width=n.videoWidth,r.height=n.videoHeight,r.getContext("2d").drawImage(n,0,0),r.toBlob(a=>{i(URL.createObjectURL(a))})}catch(a){t.show=a,o(a)}})}),k(e,"screenshot",{value:async i=>{let o=await e.getDataURL(),a=i||`artplayer_${ft(n.currentTime)}`;return Ve(o,`${a}.png`),e.emit("screenshot",o),o}})}function to(e){let{notice:t}=e;k(e,"seek",{set(n){e.currentTime=n,e.duration&&(t.show=`${ft(e.currentTime)} / ${ft(e.duration)}`),e.emit("seek",e.currentTime,n)}}),k(e,"forward",{set(n){e.seek=e.currentTime+n}}),k(e,"backward",{set(n){e.seek=e.currentTime-n}})}function eo(e){let t=["mini","pip","fullscreen","fullscreenWeb"];k(e,"state",{get:()=>t.find(n=>e[n])||"standard",set(n){for(let r=0;r<t.length;r++){let i=t[r];i!==n&&e[i]&&(e[i]=!1)}}})}function no(e){let{notice:t,i18n:n,template:r}=e;k(e,"subtitleOffset",{get(){return r.$track?.offset||0},set(i){let{cues:o}=e.subtitle;if(!r.$track||o.length===0)return;let a=it(i,-10,10);r.$track.offset=a;for(let s=0;s<o.length;s++){let c=o[s];c.originalStartTime=c.originalStartTime??c.startTime,c.originalEndTime=c.originalEndTime??c.endTime,c.startTime=it(c.originalStartTime+a,0,e.duration),c.endTime=it(c.originalEndTime+a,0,e.duration)}e.subtitle.update(),t.show=`${n.get("Subtitle Offset")}: ${i}s`,e.emit("subtitleOffset",i)}})}function ro(e){function t(n,r){return new Promise((i,o)=>{if(n===e.url){i();return}let{playing:a,aspectRatio:s,playbackRate:c}=e;e.pause(),e.url=n,e.notice.show="";let l={};l.error=d=>{e.off("video:canplay",l.canplay),e.off("video:loadedmetadata",l.metadata),o(d)},l.metadata=()=>{e.currentTime=r},l.canplay=async()=>{e.off("video:error",l.error),e.playbackRate=c,e.aspectRatio=s,a&&await e.play(),e.notice.show="",i()},e.once("video:error",l.error),e.once("video:loadedmetadata",l.metadata),e.once("video:canplay",l.canplay)})}k(e,"switchQuality",{value:n=>t(n,e.currentTime)}),k(e,"switchUrl",{value:n=>t(n,0)}),k(e,"switch",{set:e.switchUrl})}function oo(e){k(e,"theme",{get(){return e.cssVar("--art-theme")},set(t){e.cssVar("--art-theme",t)}})}function io(e){let{option:t,template:{$progress:n,$video:r}}=e,i=null,o=!1,a=null;function s(){clearTimeout(i),i=null,o=!1,a=null}function c(l){let d=e.controls?.thumbnails;if(!d)return;let{number:p,column:f,width:v,height:m,scale:g}=t.thumbnails,y=v*g||a.naturalWidth/f,C=m*g||y/(r.videoWidth/r.videoHeight),L=n.clientWidth/p,S=Math.floor(l/L),b=Math.ceil(S/f)-1,M=S%f||f-1;u(d,"backgroundImage",`url(${a.src})`),u(d,"height",`${C}px`),u(d,"width",`${y}px`),u(d,"backgroundPosition",`-${M*y}px -${b*C}px`),l<=y/2?u(d,"left",0):l>n.clientWidth-y/2?u(d,"left",`${n.clientWidth-y}px`):u(d,"left",`${l-y/2}px`)}e.on("setBar",async(l,d,p)=>{let f=e.controls?.thumbnails,{url:v,scale:m}=t.thumbnails;if(!f||!v)return;if(l==="hover"||l==="played"&&p&&j){if(!a&&!o&&(o=!0,a=await He(v,m),o=!1),!a)return;let y=n.clientWidth*d;y>0&&y<n.clientWidth&&c(y)}}),k(e,"thumbnails",{get(){return e.option.thumbnails},set(l){l.url&&!e.option.isLive&&(e.option.thumbnails=l,s())}})}function ao(e){k(e,"toggle",{value(){return e.playing?e.pause():e.play()}})}function so(e){k(e,"type",{get(){return e.option.type},set(t){e.option.type=t}})}function lo(e){let{option:t,template:{$video:n}}=e;k(e,"url",{get(){return n.src},async set(r){if(r){let i=e.url,o=t.type||_t(r),a=t.customType[o];o&&a?(await zt(),e.loading.show=!0,a.call(e,n,r,e)):(URL.revokeObjectURL(i),n.src=r),i!==e.url&&(e.option.url=r,e.isReady&&i&&e.once("video:canplay",()=>{e.emit("restart",r)}))}else await zt(),e.loading.show=!0}})}function co(e){let{template:{$video:t},i18n:n,notice:r,storage:i}=e;k(e,"volume",{get:()=>t.volume||0,set:o=>{t.volume=it(o,0,1),r.show=`${n.get("Volume")}: ${Number.parseInt(t.volume*100,10)}`,t.volume!==0&&i.set("volume",t.volume)}}),k(e,"muted",{get:()=>t.muted,set:o=>{t.muted=o,e.emit("muted",o)}})}var ve=class{constructor(t){lo(t),Mr(t),Gr(t),Br(t),ao(t),to(t),co(t),Rr(t),Pr(t),ro(t),qr(t),Lr(t),Zr(t),Dr(t),_r(t),jr(t),Hr(t),Xr(t),Ur(t),zr(t),Jr(t),Nr(t),Vr(t),Kr(t),Ar(t),Ir(t),oo(t),so(t),eo(t),no(t),Sr(t),Qr(t),io(t),Or(t),Fr(t)}};function po(e){let{notice:t,constructor:n,template:{$player:r,$video:i}}=e,o="art-auto-orientation",a="art-auto-orientation-fullscreen",s=!1;function c(){let p=document.documentElement.clientWidth,f=document.documentElement.clientHeight;u(r,"width",`${f}px`),u(r,"height",`${p}px`),u(r,"transform-origin","0 0"),u(r,"transform",`rotate(90deg) translate(0, -${p}px)`),A(r,o),e.isRotate=!0,e.emit("resize")}function l(){u(r,"width",""),u(r,"height",""),u(r,"transform-origin",""),u(r,"transform",""),J(r,o),e.isRotate=!1,e.emit("resize")}function d(){let{videoWidth:p,videoHeight:f}=i,v=document.documentElement.clientWidth,m=document.documentElement.clientHeight;return p>f&&v<m||p<f&&v>m}return e.on("fullscreenWeb",p=>{if(p){if(d()){let f=Number(n.AUTO_ORIENTATION_TIME??0);setTimeout(()=>{e.fullscreenWeb&&!mt(r,o)&&c()},f)}}else mt(r,o)&&l()}),e.on("fullscreen",async p=>{let f=!!screen?.orientation?.lock;if(p){if(f&&d())try{let m=screen.orientation.type.startsWith("portrait")?"landscape":"portrait";await screen.orientation.lock(m),s=!0,A(r,a)}catch(v){s=!1,t.show=v}}else if(mt(r,a)&&J(r,a),f&&s){try{screen.orientation.unlock()}catch{}s=!1}}),{name:"autoOrientation",get state(){return mt(r,o)}}}function uo(e){let{i18n:t,icons:n,storage:r,constructor:i,proxy:o,template:{$poster:a}}=e,s=e.layers.add({name:"auto-playback",html:`
            <div class="art-auto-playback-close"></div>
            <div class="art-auto-playback-last"></div>
            <div class="art-auto-playback-jump"></div>
        `}),c=ot(".art-auto-playback-last",s),l=ot(".art-auto-playback-jump",s),d=ot(".art-auto-playback-close",s);w(d,n.close);let p=null;e.on("video:timeupdate",()=>{if(e.playing){let v=r.get("times")||{},m=Object.keys(v);m.length>i.AUTO_PLAYBACK_MAX&&delete v[m[0]],v[e.option.id||e.option.url]=e.currentTime,r.set("times",v)}});function f(){let m=(r.get("times")||{})[e.option.id||e.option.url];clearTimeout(p),u(s,"display","none"),m&&m>=i.AUTO_PLAYBACK_MIN&&(u(s,"display","flex"),c.textContent=`${t.get("Last Seen")} ${ft(m)}`,l.textContent=t.get("Jump Play"),o(d,"click",()=>{u(s,"display","none")}),o(l,"click",()=>{e.seek=m,e.play(),u(a,"display","none"),u(s,"display","none")}),e.once("video:timeupdate",()=>{p=setTimeout(()=>{u(s,"display","none")},i.AUTO_PLAYBACK_TIMEOUT)}))}return e.on("ready",f),e.on("restart",f),{name:"auto-playback",get times(){return r.get("times")||{}},clear(){return r.del("times")},delete(v){let m=r.get("times")||{};return delete m[v],r.set("times",m),m}}}function ho(e){let{constructor:t,proxy:n,template:{$player:r,$video:i}}=e,o=null,a=!1,s=1,c=d=>{d.touches.length===1&&e.playing&&!e.isLock&&(o=setTimeout(()=>{a=!0,s=e.playbackRate,e.playbackRate=t.FAST_FORWARD_VALUE,A(r,"art-fast-forward")},t.FAST_FORWARD_TIME))},l=()=>{clearTimeout(o),a&&(a=!1,e.playbackRate=s,J(r,"art-fast-forward"))};return n(i,"touchstart",c),e.on("document:touchmove",l),e.on("document:touchend",l),{name:"fastForward",get state(){return mt(r,"art-fast-forward")}}}function fo(e){let{layers:t,icons:n,template:{$player:r}}=e;function i(){return mt(r,"art-lock")}function o(){A(r,"art-lock"),e.isLock=!0,e.emit("lock",!0)}function a(){J(r,"art-lock"),e.isLock=!1,e.emit("lock",!1)}return t.add({name:"lock",mounted(s){let c=w(s,n.lock),l=w(s,n.unlock);u(c,"display","none"),e.on("lock",d=>{d?(u(c,"display","inline-flex"),u(l,"display","none")):(u(c,"display","none"),u(l,"display","inline-flex"))})},click(){i()?a():o()}}),{name:"lock",get state(){return i()},set state(s){s?o():a()}}}function mo(e){return e.on("control",t=>{t?J(e.template.$player,"art-mini-progress-bar"):A(e.template.$player,"art-mini-progress-bar")}),{name:"mini-progress-bar"}}var be=class{constructor(t){this.art=t,this.id=0;let{option:n}=t;n.miniProgressBar&&!n.isLive&&this.add(mo),n.lock&&j&&this.add(fo),n.autoPlayback&&!n.isLive&&this.add(uo),n.autoOrientation&&j&&this.add(po),n.fastForward&&j&&!n.isLive&&this.add(ho);for(let r=0;r<n.plugins.length;r++)this.add(n.plugins[r])}add(t){this.id+=1;let n=t.call(this.art,this.art);return n instanceof Promise?n.then(r=>this.next(t,r)):this.next(t,n)}next(t,n){let r=n&&n.name||t.name||`plugin${this.id}`;return st(!Dt(this,r),`Cannot add a plugin that already has the same name: ${r}`),k(this,r,{value:n}),this}};function go(e){let{i18n:t,icons:n,constructor:{SETTING_ITEM_WIDTH:r,ASPECT_RATIO:i}}=e;function o(s){return s==="default"?t.get("Default"):s}function a(){let s=e.setting.find(`aspect-ratio-${e.aspectRatio}`);e.setting.check(s)}return{width:r,name:"aspect-ratio",html:t.get("Aspect Ratio"),icon:n.aspectRatio,tooltip:o(e.aspectRatio),selector:i.map(s=>({value:s,name:`aspect-ratio-${s}`,default:s===e.aspectRatio,html:o(s)})),onSelect(s){return e.aspectRatio=s.value,s.html},mounted:()=>{a(),e.on("aspectRatio",()=>a())}}}function vo(e){let{i18n:t,icons:n,constructor:{SETTING_ITEM_WIDTH:r,FLIP:i}}=e;function o(s){return t.get(Jt(s))}function a(){let s=e.setting.find(`flip-${e.flip}`);e.setting.check(s)}return{width:r,name:"flip",html:t.get("Video Flip"),tooltip:o(e.flip),icon:n.flip,selector:i.map(s=>({value:s,name:`flip-${s}`,default:s===e.flip,html:o(s)})),onSelect(s){return e.flip=s.value,s.html},mounted:()=>{a(),e.on("flip",()=>a())}}}function bo(e){let{i18n:t,icons:n,constructor:{SETTING_ITEM_WIDTH:r,PLAYBACK_RATE:i}}=e;function o(s){return s===1?t.get("Normal"):s.toFixed(1)}function a(){let s=e.setting.find(`playback-rate-${e.playbackRate}`);e.setting.check(s)}return{width:r,name:"playback-rate",html:t.get("Play Speed"),tooltip:o(e.playbackRate),icon:n.playbackRate,selector:i.map(s=>({value:s,name:`playback-rate-${s}`,default:s===e.playbackRate,html:o(s)})),onSelect(s){return e.playbackRate=s.value,s.html},mounted:()=>{a(),e.on("video:ratechange",()=>a())}}}function yo(e){let{i18n:t,icons:n,constructor:r}=e;return{width:r.SETTING_ITEM_WIDTH,name:"subtitle-offset",html:t.get("Subtitle Offset"),icon:n.subtitle,tooltip:"0s",range:[0,-10,10,.1],onChange(i){return e.subtitleOffset=i.range[0],`${i.range[0]}s`},mounted:(i,o)=>{e.on("subtitleOffset",a=>{o.$range.value=a,o.tooltip=`${a}s`})}}}var ye=class extends vt{constructor(t){super(t);let{option:n,controls:r,template:{$setting:i}}=t;this.name="setting",this.$parent=i,this.id=0,this.active=null,this.cache=new Map,this.option=[...this.builtin,...n.settings],n.setting&&(this.format(),this.render(),t.on("blur",()=>{this.show&&(this.show=!1,this.render())}),t.on("focus",o=>{let a=Lt(o,r.setting),s=Lt(o,this.$parent);this.show&&!a&&!s&&(this.show=!1,this.render())}),t.on("resize",()=>this.resize()))}get builtin(){let t=[],{option:n}=this.art;return n.playbackRate&&t.push(bo(this.art)),n.aspectRatio&&t.push(go(this.art)),n.flip&&t.push(vo(this.art)),n.subtitleOffset&&t.push(yo(this.art)),t}traverse(t,n=this.option){for(let r=0;r<n.length;r++){let i=n[r];t(i),i.selector?.length&&this.traverse(t,i.selector)}}check(t){t&&(t.$parent.tooltip=t.html,this.traverse(n=>{n.default=n===t,n.default&&n.$item&&ut(n.$item,"art-current")},t.$option),this.render(t.$parents))}format(t=this.option,n,r,i=[]){for(let o=0;o<t.length;o++){let a=t[o];if(a?.name?(st(!i.includes(a.name),`The [${a.name}] already exists in [setting]`),i.push(a.name)):a.name=`setting-${this.id++}`,!a.$formatted){k(a,"$parent",{get:()=>n}),k(a,"$parents",{get:()=>r}),k(a,"$option",{get:()=>t});let s=[];k(a,"$events",{get:()=>s}),k(a,"$formatted",{get:()=>!0})}this.format(a.selector||[],a,t,i)}this.option=t}find(t=""){let n=null;return this.traverse(r=>{r.name===t&&(n=r)}),n}resize(){let{controls:t,constructor:{SETTING_WIDTH:n,SETTING_ITEM_HEIGHT:r},template:{$player:i,$setting:o}}=this.art;if(t.setting&&this.show){let a=this.active[0]?.$parent?.width||n,{left:s,width:c}=ht(t.setting),{left:l,width:d}=ht(i),p=s-l+c/2-a/2,f=this.active===this.option?this.active.length*r:(this.active.length+1)*r;if(u(o,"height",`${f}px`),u(o,"width",`${a}px`),this.art.isRotate||j)return;p+a>d?(u(o,"left",null),u(o,"right",null)):(u(o,"left",`${p}px`),u(o,"right","auto"))}}inactivate(t){for(let n=0;n<t.$events.length;n++)this.art.events.remove(t.$events[n]);t.$events.length=0}remove(t){let n=this.find(t);st(n,`Can't find [${t}] in the [setting]`);let r=n.$option.indexOf(n);n.$option.splice(r,1),this.inactivate(n),n.$item&&Kt(n.$item),this.render()}update(t){let n=this.find(t.name);return n?(this.inactivate(n),Object.assign(n,t),this.format(),this.createItem(n,!0),this.render(),n):this.add(t)}add(t,n=this.option){return n.push(t),this.format(),this.createItem(t),this.render(),t}createHeader(t){if(!this.cache.has(t.$option))return;let n=this.cache.get(t.$option),{proxy:r,icons:{arrowLeft:i},constructor:{SETTING_ITEM_HEIGHT:o}}=this.art,a=K("div");u(a,"height",`${o}px`),A(a,"art-setting-item"),A(a,"art-setting-item-back");let s=w(a,'<div class="art-setting-item-left"></div>'),c=K("div");A(c,"art-setting-item-left-icon"),w(c,i),w(s,c),w(s,t.$parent.html);let l=r(a,"click",()=>this.render(t.$parents));t.$parent.$events.push(l),w(n,a)}createItem(t,n=!1){if(!this.cache.has(t.$option))return;let r=this.cache.get(t.$option),i=t.$item,o="selector";Dt(t,"switch")&&(o="switch"),Dt(t,"range")&&(o="range"),Dt(t,"onClick")&&(o="button");let{icons:a,proxy:s,constructor:c}=this.art,l=K("div");A(l,"art-setting-item"),u(l,"height",`${c.SETTING_ITEM_HEIGHT}px`),l.dataset.name=t.name||"",l.dataset.value=t.value||"";let d=w(l,'<div class="art-setting-item-left"></div>'),p=w(l,'<div class="art-setting-item-right"></div>'),f=K("div");switch(A(f,"art-setting-item-left-icon"),o){case"button":case"switch":case"range":w(f,t.icon||a.config);break;case"selector":t.selector?.length?w(f,t.icon||a.config):w(f,a.check);break}w(d,f),k(t,"$icon",{configurable:!0,get:()=>f}),k(t,"icon",{configurable:!0,get(){return f.innerHTML},set(g){f.innerHTML="",w(f,g)}});let v=K("div");A(v,"art-setting-item-left-text"),w(v,t.html||""),w(d,v),k(t,"$html",{configurable:!0,get:()=>v}),k(t,"html",{configurable:!0,get(){return v.innerHTML},set(g){v.innerHTML="",w(v,g)}});let m=K("div");switch(A(m,"art-setting-item-right-tooltip"),w(m,t.tooltip||""),w(p,m),k(t,"$tooltip",{configurable:!0,get:()=>m}),k(t,"tooltip",{configurable:!0,get(){return m.innerHTML},set(g){m.innerHTML="",w(m,g)}}),o){case"switch":{let g=K("div");A(g,"art-setting-item-right-icon");let y=w(g,a.switchOn),C=w(g,a.switchOff);u(t.switch?C:y,"display","none"),w(p,g),k(t,"$switch",{configurable:!0,get:()=>g});let L=t.switch;k(t,"switch",{configurable:!0,get:()=>L,set(S){L=S,S?(u(C,"display","none"),u(y,"display",null)):(u(C,"display",null),u(y,"display","none"))}});break}case"range":{let g=K("div");A(g,"art-setting-item-right-icon");let y=w(g,'<input type="range">');y.value=t.range[0],y.min=t.range[1],y.max=t.range[2],y.step=t.range[3],A(y,"art-setting-range"),w(p,g),k(t,"$range",{configurable:!0,get:()=>y});let C=[...t.range];k(t,"range",{configurable:!0,get:()=>C,set(L){C=[...L],y.value=L[0],y.min=L[1],y.max=L[2],y.step=L[3]}})}break;case"selector":if(t.selector?.length){let g=K("div");A(g,"art-setting-item-right-icon"),w(g,a.arrowRight),w(p,g)}break}switch(o){case"switch":{if(t.onSwitch){let g=s(l,"click",async y=>{t.switch=await t.onSwitch.call(this.art,t,l,y)});t.$events.push(g)}break}case"range":{if(t.$range){if(t.onRange){let g=s(t.$range,"change",async y=>{t.range[0]=t.$range.valueAsNumber,t.tooltip=await t.onRange.call(this.art,t,l,y)});t.$events.push(g)}if(t.onChange){let g=s(t.$range,"input",async y=>{t.range[0]=t.$range.valueAsNumber,t.tooltip=await t.onChange.call(this.art,t,l,y)});t.$events.push(g)}}break}case"selector":{let g=s(l,"click",async y=>{t.selector?.length?this.render(t.selector):(this.check(t),t.$parent.onSelect&&(t.$parent.tooltip=await t.$parent.onSelect.call(this.art,t,l,y)))});t.$events.push(g),t.default&&A(l,"art-current")}break;case"button":if(t.onClick){let g=s(l,"click",async y=>{t.tooltip=await t.onClick.call(this.art,t,l,y)});t.$events.push(g)}break}k(t,"$item",{configurable:!0,get:()=>l}),n?Te(l,i):w(r,l),t.mounted&&setTimeout(()=>t.mounted.call(this.art,t.$item,t),0)}render(t=this.option){if(this.active=t,this.cache.has(t)){let n=this.cache.get(t);ut(n,"art-current")}else{let n=K("div");this.cache.set(t,n),A(n,"art-setting-panel"),w(this.$parent,n),ut(n,"art-current"),t[0]?.$parent&&this.createHeader(t[0]);for(let r=0;r<t.length;r++)this.createItem(t[r])}this.resize()}},xe=class{constructor(){this.name="artplayer_settings",this.settings={}}get(t){try{let n=JSON.parse(window.localStorage.getItem(this.name))||{};return t?n[t]:n}catch{return t?this.settings[t]:this.settings}}set(t,n){try{let r=Object.assign({},this.get(),{[t]:n});window.localStorage.setItem(this.name,JSON.stringify(r))}catch{this.settings[t]=n}}del(t){try{let n=this.get();delete n[t],window.localStorage.setItem(this.name,JSON.stringify(n))}catch{delete this.settings[t]}}clear(){try{window.localStorage.removeItem(this.name)}catch{this.settings={}}}},Ke=`.art-video-player {
  --art-theme: #f00;
  --art-font-color: #fff;
  --art-background-color: #000;
  --art-text-shadow-color: rgba(0, 0, 0, 0.5);
  --art-transition-duration: 0.2s;
  --art-padding: 10px;
  --art-border-radius: 3px;
  --art-progress-height: 6px;
  --art-progress-color: rgba(255, 255, 255, 0.25);
  --art-progress-top-gap: 10px;
  --art-hover-color: rgba(255, 255, 255, 0.25);
  --art-loaded-color: rgba(255, 255, 255, 0.25);
  --art-state-size: 80px;
  --art-state-opacity: 0.8;
  --art-bottom-height: 100px;
  --art-bottom-offset: 20px;
  --art-bottom-gap: 5px;
  --art-highlight-width: 8px;
  --art-highlight-color: rgba(255, 255, 255, 0.5);
  --art-control-height: 46px;
  --art-control-opacity: 0.75;
  --art-control-icon-size: 36px;
  --art-control-icon-scale: 1.1;
  --art-volume-height: 120px;
  --art-volume-handle-size: 14px;
  --art-lock-size: 36px;
  --art-indicator-scale: 0;
  --art-indicator-size: 16px;
  --art-fullscreen-web-index: 9999;
  --art-settings-icon-size: 24px;
  --art-settings-max-height: 300px;
  --art-selector-max-height: 300px;
  --art-contextmenus-min-width: 250px;
  --art-subtitle-font-size: 20px;
  --art-subtitle-gap: 5px;
  --art-subtitle-bottom: 15px;
  --art-subtitle-border: #000;
  --art-widget-background: rgba(0, 0, 0, 0.85);
  --art-tip-background: rgba(0, 0, 0, 0.7);
  --art-scrollbar-size: 4px;
  --art-scrollbar-background: rgba(255, 255, 255, 0.25);
  --art-scrollbar-background-hover: rgba(255, 255, 255, 0.5);
  --art-mini-progress-height: 2px;
}
.art-bg-cover {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.art-bottom-gradient {
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0.4), transparent);
  background-repeat: repeat-x;
  background-position: center bottom;
}
.art-backdrop-filter {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(0, 0, 0, 0.75) !important;
}
.art-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.art-video-player {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  outline: 0;
  zoom: 1;
  padding: 0;
  text-align: left;
  direction: ltr;
  font-size: 14px;
  line-height: 1.3;
  user-select: none;
  box-sizing: border-box;
  color: var(--art-font-color);
  background-color: var(--art-background-color);
  text-shadow: 0 0 2px var(--art-text-shadow-color);
  font-family: PingFang SC, Helvetica Neue, Microsoft YaHei, Roboto, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -ms-high-contrast-adjust: none;
}
.art-video-player *,
.art-video-player *::before,
.art-video-player *::after {
  box-sizing: border-box;
}
.art-video-player ::-webkit-scrollbar {
  width: var(--art-scrollbar-size);
  height: var(--art-scrollbar-size);
}
.art-video-player ::-webkit-scrollbar-thumb {
  background-color: var(--art-scrollbar-background);
}
.art-video-player ::-webkit-scrollbar-thumb:hover {
  background-color: var(--art-scrollbar-background-hover);
}
.art-video-player img {
  max-width: 100%;
  vertical-align: top;
}
.art-video-player svg {
  fill: var(--art-font-color);
}
.art-video-player a {
  color: var(--art-font-color);
  text-decoration: none;
}
.art-icon {
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.art-video-player.art-backdrop .art-contextmenus,
.art-video-player.art-backdrop .art-info,
.art-video-player.art-backdrop .art-settings,
.art-video-player.art-backdrop .art-layer-auto-playback,
.art-video-player.art-backdrop .art-selector-list,
.art-video-player.art-backdrop .art-volume-inner {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(0, 0, 0, 0.75) !important;
}
.art-video {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.art-poster {
  position: absolute;
  inset: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  pointer-events: none;
}
.art-video-player .art-subtitle {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  width: 100%;
  padding: 0 5%;
  text-align: center;
  pointer-events: none;
  gap: var(--art-subtitle-gap);
  bottom: var(--art-subtitle-bottom);
  font-size: var(--art-subtitle-font-size);
  transition: bottom var(--art-transition-duration) ease;
  text-shadow: var(--art-subtitle-border) 1px 0 1px, var(--art-subtitle-border) 0 1px 1px, var(--art-subtitle-border) -1px 0 1px, var(--art-subtitle-border) 0 -1px 1px, var(--art-subtitle-border) 1px 1px 1px, var(--art-subtitle-border) -1px -1px 1px, var(--art-subtitle-border) 1px -1px 1px, var(--art-subtitle-border) -1px 1px 1px;
}
.art-video-player.art-subtitle-show .art-subtitle {
  display: flex;
}
.art-video-player.art-control-show .art-subtitle {
  bottom: calc(var(--art-control-height) + var(--art-subtitle-bottom));
}
.art-danmuku {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}
.art-video-player .art-layers {
  position: absolute;
  inset: 0;
  z-index: 40;
  width: 100%;
  height: 100%;
  display: none;
  pointer-events: none;
}
.art-video-player .art-layers .art-layer {
  pointer-events: auto;
}
.art-video-player.art-layer-show .art-layers {
  display: flex;
}
.art-video-player .art-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-video-player .art-mask .art-state {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(2);
  width: var(--art-state-size);
  height: var(--art-state-size);
  transition: all var(--art-transition-duration) ease;
}
.art-video-player.art-mask-show .art-state {
  pointer-events: auto;
  opacity: var(--art-state-opacity);
  transform: scale(1);
}
.art-video-player.art-loading-show .art-state {
  display: none;
}
.art-video-player .art-loading {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  z-index: 70;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-video-player.art-loading-show .art-loading {
  display: flex;
}
.art-video-player.art-loading-show .art-mask {
  display: none;
}
.art-video-player .art-bottom {
  position: absolute;
  inset: 0;
  z-index: 60;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  padding: 0 var(--art-padding);
  transition: all var(--art-transition-duration) ease;
  background-size: 100% var(--art-bottom-height);
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0.4), transparent);
  background-repeat: repeat-x;
  background-position: center bottom;
}
.art-video-player .art-bottom .art-controls,
.art-video-player .art-bottom .art-progress {
  transform: translateY(var(--art-bottom-offset));
  transition: transform var(--art-transition-duration) ease;
}
.art-video-player.art-control-show .art-bottom,
.art-video-player.art-hover .art-bottom {
  opacity: 1;
}
.art-video-player.art-control-show .art-bottom .art-controls,
.art-video-player.art-hover .art-bottom .art-controls,
.art-video-player.art-control-show .art-bottom .art-progress,
.art-video-player.art-hover .art-bottom .art-progress {
  transform: translateY(0);
}
.art-bottom .art-progress {
  position: relative;
  z-index: 0;
  cursor: pointer;
  pointer-events: auto;
  padding-top: var(--art-progress-top-gap);
  padding-bottom: var(--art-bottom-gap);
}
.art-bottom .art-progress .art-control-progress {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--art-progress-height);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner {
  display: flex;
  align-items: center;
  position: relative;
  height: 50%;
  width: 100%;
  transition: height var(--art-transition-duration) ease;
  background-color: var(--art-progress-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-hover {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-hover-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-loaded-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played {
  position: absolute;
  inset: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-theme);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  right: auto;
  pointer-events: auto;
  width: var(--art-highlight-width) !important;
  transform: translateX(calc(var(--art-highlight-width) / -2));
  background-color: var(--art-highlight-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 40;
  left: 0;
  border-radius: 50%;
  width: var(--art-indicator-size);
  height: var(--art-indicator-size);
  transform: scale(var(--art-indicator-scale));
  margin-left: calc(var(--art-indicator-size) / -2);
  transition: transform var(--art-transition-duration) ease;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover {
  transform: scale(1.2) !important;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:active {
  transform: scale(1) !important;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip {
  transform-origin: bottom center;
  transform: scale(0.5);
  opacity: 0;
  position: absolute;
  z-index: 50;
  top: -25px;
  left: 0;
  padding: 3px 5px;
  line-height: 1;
  font-size: 12px;
  border-radius: var(--art-border-radius);
  white-space: nowrap;
  background-color: var(--art-tip-background);
  transition: transform var(--art-transition-duration) ease, opacity var(--art-transition-duration) ease;
}
.art-bottom .art-progress .art-control-thumbnails {
  transform-origin: bottom center;
  transform: scale(0.5);
  opacity: 0;
  position: absolute;
  bottom: calc(var(--art-bottom-gap) + 10px);
  left: 0;
  border-radius: var(--art-border-radius);
  pointer-events: none;
  background-color: var(--art-widget-background);
  transition: transform var(--art-transition-duration) ease, opacity var(--art-transition-duration) ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.2);
}
.art-bottom .art-progress:hover .art-control-progress .art-control-progress-inner {
  height: 100%;
}
.art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator {
  transform: scale(1);
}
.art-progress-hover .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip,
.art-progress-hover .art-bottom .art-progress .art-control-thumbnails {
  transform: scale(1);
  opacity: 1;
}
.art-video-player .art-controls {
  position: relative;
  z-index: 10;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--art-control-height);
}
.art-video-player .art-controls .art-controls-left,
.art-video-player .art-controls .art-controls-right {
  display: flex;
  height: 100%;
}
.art-video-player .art-controls .art-controls-center {
  display: none;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 0 10px;
}
.art-video-player .art-controls .art-controls-right {
  justify-content: flex-end;
}
.art-video-player .art-controls .art-control {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  white-space: nowrap;
  opacity: var(--art-control-opacity);
  min-height: var(--art-control-height);
  min-width: var(--art-control-height);
  transition: opacity var(--art-transition-duration) ease;
}
.art-video-player .art-controls .art-control .art-icon {
  height: var(--art-control-icon-size);
  width: var(--art-control-icon-size);
  transform: scale(var(--art-control-icon-scale));
  transition: transform var(--art-transition-duration) ease;
}
.art-video-player .art-controls .art-control .art-icon:active {
  transform: scale(calc(var(--art-control-icon-scale) * 0.8));
}
.art-video-player .art-controls .art-control:hover {
  opacity: 1;
}
.art-control-volume {
  position: relative;
}
.art-control-volume .art-volume-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 5px;
  font-size: 12px;
  text-align: center;
  cursor: default;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  bottom: var(--art-control-height);
  width: var(--art-control-height);
  height: var(--art-volume-height);
  transition: all var(--art-transition-duration) ease;
}
.art-control-volume .art-volume-panel .art-volume-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100%;
  width: 100%;
  padding: 10px 0 12px;
  border-radius: var(--art-border-radius);
  background-color: var(--art-widget-background);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider {
  flex: 1;
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: center;
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle {
  position: relative;
  display: flex;
  justify-content: center;
  width: 2px;
  border-radius: var(--art-border-radius);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.25);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle .art-volume-loaded {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: var(--art-theme);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-indicator {
  position: absolute;
  width: var(--art-volume-handle-size);
  height: var(--art-volume-handle-size);
  margin-top: calc(var(--art-volume-handle-size) / -2);
  flex-shrink: 0;
  transform: scale(1);
  border-radius: 100%;
  background-color: var(--art-theme);
  transition: transform var(--art-transition-duration) ease;
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider:active .art-volume-indicator {
  transform: scale(0.9);
}
.art-control-volume:hover .art-volume-panel {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.art-video-player .art-notice {
  display: none;
  position: absolute;
  inset: 0;
  z-index: 80;
  width: 100%;
  height: 100%;
  height: auto;
  bottom: auto;
  padding: var(--art-padding);
  pointer-events: none;
}
.art-video-player .art-notice .art-notice-inner {
  display: inline-flex;
  padding: 5px;
  line-height: 1;
  border-radius: var(--art-border-radius);
  background-color: var(--art-tip-background);
}
.art-video-player.art-notice-show .art-notice {
  display: flex;
}
.art-video-player .art-contextmenus {
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 120;
  padding: 5px 0;
  border-radius: var(--art-border-radius);
  font-size: 12px;
  background-color: var(--art-widget-background);
  min-width: var(--art-contextmenus-min-width);
}
.art-video-player .art-contextmenus .art-contextmenu {
  cursor: pointer;
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.art-video-player .art-contextmenus .art-contextmenu span {
  padding: 0 8px;
}
.art-video-player .art-contextmenus .art-contextmenu span:hover,
.art-video-player .art-contextmenus .art-contextmenu span.art-current {
  color: var(--art-theme);
}
.art-video-player .art-contextmenus .art-contextmenu:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.art-video-player .art-contextmenus .art-contextmenu:last-child {
  border-bottom: none;
}
.art-video-player.art-contextmenu-show .art-contextmenus {
  display: flex;
}
.art-video-player .art-settings {
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 90;
  left: auto;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: var(--art-border-radius);
  max-height: var(--art-settings-max-height);
  right: var(--art-padding);
  bottom: var(--art-control-height);
  transition: all var(--art-transition-duration) ease;
  background-color: var(--art-widget-background);
}
.art-video-player .art-settings .art-setting-panel {
  display: none;
  flex-direction: column;
}
.art-video-player .art-settings .art-setting-panel.art-current {
  display: flex;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color var(--art-transition-duration) ease;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current {
  color: var(--art-theme);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check {
  visibility: hidden;
  height: 15px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check {
  visibility: visible;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 5px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--art-settings-icon-size);
  width: var(--art-settings-icon-size);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip {
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.5);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  height: 24px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range {
  height: 3px;
  width: 80px;
  outline: none;
  appearance: none;
  background-color: rgba(255, 255, 255, 0.2);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item-back {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.art-video-player.art-setting-show .art-settings {
  display: flex;
}
.art-video-player .art-info {
  display: none;
  position: absolute;
  left: var(--art-padding);
  top: var(--art-padding);
  z-index: 100;
  padding: 10px;
  font-size: 12px;
  border-radius: var(--art-border-radius);
  background-color: var(--art-widget-background);
}
.art-video-player .art-info .art-info-panel {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.art-video-player .art-info .art-info-panel .art-info-item {
  display: flex;
  align-items: center;
  gap: 5px;
}
.art-video-player .art-info .art-info-panel .art-info-item .art-info-title {
  width: 100px;
  text-align: right;
}
.art-video-player .art-info .art-info-panel .art-info-item .art-info-content {
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: all;
}
.art-video-player .art-info .art-info-close {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.art-video-player.art-info-show .art-info {
  display: flex;
}
.art-hide-cursor * {
  cursor: none !important;
}
.art-video-player[data-aspect-ratio] {
  overflow: hidden;
}
.art-video-player[data-aspect-ratio] .art-video {
  object-fit: fill;
  box-sizing: content-box;
}
.art-fullscreen {
  --art-progress-height: 8px;
  --art-indicator-size: 20px;
  --art-control-height: 60px;
  --art-control-icon-scale: 1.3;
}
.art-fullscreen-web {
  --art-progress-height: 8px;
  --art-indicator-size: 20px;
  --art-control-height: 60px;
  --art-control-icon-scale: 1.3;
  position: fixed;
  inset: 0;
  z-index: var(--art-fullscreen-web-index);
  width: 100%;
  height: 100%;
}
.art-mini-popup {
  position: fixed;
  z-index: 9999;
  width: 320px;
  height: 180px;
  background: #000;
  border-radius: var(--art-border-radius);
  cursor: move;
  user-select: none;
  overflow: hidden;
  transition: opacity 0.2s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.art-mini-popup svg {
  fill: #fff;
}
.art-mini-popup .art-video {
  pointer-events: none;
}
.art-mini-popup .art-mini-close {
  position: absolute;
  z-index: 20;
  right: 10px;
  top: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.art-mini-popup .art-mini-state {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  background-color: rgba(0, 0, 0, 0.25);
}
.art-mini-popup .art-mini-state .art-icon {
  opacity: 0.75;
  cursor: pointer;
  transform: scale(3);
  pointer-events: auto;
  transition: transform 0.2s ease;
}
.art-mini-popup .art-mini-state .art-icon:active {
  transform: scale(2.5);
}
.art-mini-popup.art-mini-dragging {
  opacity: 0.9;
}
.art-mini-popup:hover .art-mini-close,
.art-mini-popup:hover .art-mini-state {
  opacity: 1;
}
.art-video-player[data-flip='horizontal'] .art-video {
  transform: scaleX(-1);
}
.art-video-player[data-flip='vertical'] .art-video {
  transform: scaleY(-1);
}
.art-video-player .art-layer-lock {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  height: var(--art-lock-size);
  width: var(--art-lock-size);
  left: var(--art-padding);
  background-color: var(--art-tip-background);
}
.art-video-player .art-layer-auto-playback {
  display: none;
  gap: 10px;
  align-items: center;
  position: absolute;
  border-radius: var(--art-border-radius);
  padding: 10px;
  line-height: 1;
  left: var(--art-padding);
  bottom: calc(var(--art-control-height) + var(--art-bottom-gap) + 10px);
  background-color: var(--art-widget-background);
}
.art-video-player .art-layer-auto-playback .art-auto-playback-close {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.art-video-player .art-layer-auto-playback .art-auto-playback-close svg {
  width: 15px;
  height: 15px;
  fill: var(--art-theme);
}
.art-video-player .art-layer-auto-playback .art-auto-playback-jump {
  color: var(--art-theme);
  cursor: pointer;
}
.art-video-player.art-lock .art-subtitle {
  bottom: var(--art-subtitle-bottom) !important;
}
.art-video-player.art-mini-progress-bar .art-bottom,
.art-video-player.art-lock .art-bottom {
  opacity: 1;
  padding: 0;
  background-image: none;
}
.art-video-player.art-mini-progress-bar .art-bottom .art-controls,
.art-video-player.art-lock .art-bottom .art-controls,
.art-video-player.art-mini-progress-bar .art-bottom .art-progress,
.art-video-player.art-lock .art-bottom .art-progress {
  transform: translateY(calc(var(--art-control-height) + var(--art-bottom-gap) + var(--art-progress-height) / 4));
}
.art-video-player.art-mini-progress-bar .art-bottom .art-progress-indicator,
.art-video-player.art-lock .art-bottom .art-progress-indicator {
  display: none !important;
}
.art-video-player.art-control-show .art-layer-lock {
  display: flex;
}
.art-control-selector {
  position: relative;
  display: flex;
  justify-content: center;
}
.art-control-selector .art-selector-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  border-radius: var(--art-border-radius);
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  bottom: var(--art-control-height);
  max-height: var(--art-selector-max-height);
  background-color: var(--art-widget-background);
  transition: all var(--art-transition-duration) ease;
}
.art-control-selector .art-selector-list .art-selector-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  flex-shrink: 0;
  line-height: 1;
}
.art-control-selector .art-selector-list .art-selector-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.art-control-selector .art-selector-list .art-selector-item:hover,
.art-control-selector .art-selector-list .art-selector-item.art-current {
  color: var(--art-theme);
}
.art-control-selector:hover .art-selector-list {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.art-video-player {
  /*! Hint.css - v2.7.0 - 2021-10-01
    * https://kushagra.dev/lab/hint/
    * Copyright (c) 2021 Kushagra Gour */
  /*-------------------------------------*\\
        HINT.css - A CSS tooltip library
    \\*-------------------------------------*/
  /**
    * HINT.css is a tooltip library made in pure CSS.
    *
    * Source: https://github.com/chinchang/hint.css
    * Demo: http://kushagragour.in/lab/hint/
    *
    */
  /**
    * source: hint-core.scss
    *
    * Defines the basic styling for the tooltip.
    * Each tooltip is made of 2 parts:
    * 	1) body (:after)
    * 	2) arrow (:before)
    *
    * Classes added:
    * 	1) hint
    */
  /**
    * source: hint-position.scss
    *
    * Defines the positoning logic for the tooltips.
    *
    * Classes added:
    * 	1) hint--top
    * 	2) hint--bottom
    * 	3) hint--left
    * 	4) hint--right
    */
  /**
    * set default color for tooltip arrows
    */
  /**
    * top tooltip
    */
  /**
    * bottom tooltip
    */
  /**
    * right tooltip
    */
  /**
    * left tooltip
    */
  /**
    * top-left tooltip
    */
  /**
    * top-right tooltip
    */
  /**
    * bottom-left tooltip
    */
  /**
    * bottom-right tooltip
    */
  /**
    * source: hint-sizes.scss
    *
    * Defines width restricted tooltips that can span
    * across multiple lines.
    *
    * Classes added:
    * 	1) hint--small
    * 	2) hint--medium
    * 	3) hint--large
    *
    */
  /**
    * source: hint-theme.scss
    *
    * Defines basic theme for tooltips.
    *
    */
  /**
    * source: hint-color-types.scss
    *
    * Contains tooltips of various types based on color differences.
    *
    * Classes added:
    * 	1) hint--error
    * 	2) hint--warning
    * 	3) hint--info
    * 	4) hint--success
    *
    */
  /**
    * Error
    */
  /**
    * Warning
    */
  /**
    * Info
    */
  /**
    * Success
    */
  /**
    * source: hint-always.scss
    *
    * Defines a persisted tooltip which shows always.
    *
    * Classes added:
    * 	1) hint--always
    *
    */
  /**
    * source: hint-rounded.scss
    *
    * Defines rounded corner tooltips.
    *
    * Classes added:
    * 	1) hint--rounded
    *
    */
  /**
    * source: hint-effects.scss
    *
    * Defines various transition effects for the tooltips.
    *
    * Classes added:
    * 	1) hint--no-animate
    * 	2) hint--bounce
    *
    */
}
.art-video-player [class*='hint--'] {
  position: relative;
  display: inline-block;
  font-style: normal;
  /**
        * tooltip arrow
        */
  /**
        * tooltip body
        */
}
.art-video-player [class*='hint--']:before,
.art-video-player [class*='hint--']:after {
  position: absolute;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  visibility: hidden;
  opacity: 0;
  z-index: 1000000;
  pointer-events: none;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  transition: 0.3s ease;
  -webkit-transition-delay: 0ms;
  -moz-transition-delay: 0ms;
  transition-delay: 0ms;
}
.art-video-player [class*='hint--']:hover:before,
.art-video-player [class*='hint--']:hover:after {
  visibility: visible;
  opacity: 1;
}
.art-video-player [class*='hint--']:hover:before,
.art-video-player [class*='hint--']:hover:after {
  -webkit-transition-delay: 100ms;
  -moz-transition-delay: 100ms;
  transition-delay: 100ms;
}
.art-video-player [class*='hint--']:before {
  content: '';
  position: absolute;
  background: transparent;
  border: 6px solid transparent;
  z-index: 1000001;
}
.art-video-player [class*='hint--']:after {
  background: #000000;
  color: white;
  padding: 8px 10px;
  font-size: 12px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 12px;
  white-space: nowrap;
}
.art-video-player [class*='hint--'][aria-label]:after {
  content: attr(aria-label);
}
.art-video-player [class*='hint--'][data-hint]:after {
  content: attr(data-hint);
}
.art-video-player [aria-label='']:before,
.art-video-player [aria-label='']:after,
.art-video-player [data-hint='']:before,
.art-video-player [data-hint='']:after {
  display: none !important;
}
.art-video-player .hint--top-left:before {
  border-top-color: #000000;
}
.art-video-player .hint--top-right:before {
  border-top-color: #000000;
}
.art-video-player .hint--top:before {
  border-top-color: #000000;
}
.art-video-player .hint--bottom-left:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--bottom-right:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--bottom:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--left:before {
  border-left-color: #000000;
}
.art-video-player .hint--right:before {
  border-right-color: #000000;
}
.art-video-player .hint--top:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top:before,
.art-video-player .hint--top:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top:after {
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
}
.art-video-player .hint--top:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--top:hover:after {
  -webkit-transform: translateX(-50%) translateY(-8px);
  -moz-transform: translateX(-50%) translateY(-8px);
  transform: translateX(-50%) translateY(-8px);
}
.art-video-player .hint--bottom:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom:before,
.art-video-player .hint--bottom:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom:after {
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
}
.art-video-player .hint--bottom:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--bottom:hover:after {
  -webkit-transform: translateX(-50%) translateY(8px);
  -moz-transform: translateX(-50%) translateY(8px);
  transform: translateX(-50%) translateY(8px);
}
.art-video-player .hint--right:before {
  margin-left: -11px;
  margin-bottom: -6px;
}
.art-video-player .hint--right:after {
  margin-bottom: -14px;
}
.art-video-player .hint--right:before,
.art-video-player .hint--right:after {
  left: 100%;
  bottom: 50%;
}
.art-video-player .hint--right:hover:before {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--right:hover:after {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--left:before {
  margin-right: -11px;
  margin-bottom: -6px;
}
.art-video-player .hint--left:after {
  margin-bottom: -14px;
}
.art-video-player .hint--left:before,
.art-video-player .hint--left:after {
  right: 100%;
  bottom: 50%;
}
.art-video-player .hint--left:hover:before {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--left:hover:after {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--top-left:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top-left:before,
.art-video-player .hint--top-left:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top-left:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top-left:after {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%);
}
.art-video-player .hint--top-left:after {
  margin-left: 12px;
}
.art-video-player .hint--top-left:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--top-left:hover:after {
  -webkit-transform: translateX(-100%) translateY(-8px);
  -moz-transform: translateX(-100%) translateY(-8px);
  transform: translateX(-100%) translateY(-8px);
}
.art-video-player .hint--top-right:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top-right:before,
.art-video-player .hint--top-right:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top-right:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top-right:after {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);
}
.art-video-player .hint--top-right:after {
  margin-left: -12px;
}
.art-video-player .hint--top-right:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--top-right:hover:after {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--bottom-left:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom-left:before,
.art-video-player .hint--bottom-left:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom-left:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom-left:after {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%);
}
.art-video-player .hint--bottom-left:after {
  margin-left: 12px;
}
.art-video-player .hint--bottom-left:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--bottom-left:hover:after {
  -webkit-transform: translateX(-100%) translateY(8px);
  -moz-transform: translateX(-100%) translateY(8px);
  transform: translateX(-100%) translateY(8px);
}
.art-video-player .hint--bottom-right:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom-right:before,
.art-video-player .hint--bottom-right:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom-right:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom-right:after {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);
}
.art-video-player .hint--bottom-right:after {
  margin-left: -12px;
}
.art-video-player .hint--bottom-right:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--bottom-right:hover:after {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--small:after,
.art-video-player .hint--medium:after,
.art-video-player .hint--large:after {
  white-space: normal;
  line-height: 1.4em;
  word-wrap: break-word;
}
.art-video-player .hint--small:after {
  width: 80px;
}
.art-video-player .hint--medium:after {
  width: 150px;
}
.art-video-player .hint--large:after {
  width: 300px;
}
.art-video-player [class*='hint--'] {
  /**
        * tooltip body
        */
}
.art-video-player [class*='hint--']:after {
  text-shadow: 0 -1px 0px black;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}
.art-video-player .hint--error:after {
  background-color: #b34e4d;
  text-shadow: 0 -1px 0px #592726;
}
.art-video-player .hint--error.hint--top-left:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--top-right:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--top:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom-left:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom-right:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--left:before {
  border-left-color: #b34e4d;
}
.art-video-player .hint--error.hint--right:before {
  border-right-color: #b34e4d;
}
.art-video-player .hint--warning:after {
  background-color: #c09854;
  text-shadow: 0 -1px 0px #6c5328;
}
.art-video-player .hint--warning.hint--top-left:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--top-right:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--top:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom-left:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom-right:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--left:before {
  border-left-color: #c09854;
}
.art-video-player .hint--warning.hint--right:before {
  border-right-color: #c09854;
}
.art-video-player .hint--info:after {
  background-color: #3986ac;
  text-shadow: 0 -1px 0px #1a3c4d;
}
.art-video-player .hint--info.hint--top-left:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--top-right:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--top:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom-left:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom-right:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--left:before {
  border-left-color: #3986ac;
}
.art-video-player .hint--info.hint--right:before {
  border-right-color: #3986ac;
}
.art-video-player .hint--success:after {
  background-color: #458746;
  text-shadow: 0 -1px 0px #1a321a;
}
.art-video-player .hint--success.hint--top-left:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--top-right:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--top:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--bottom-left:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--bottom-right:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--bottom:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--left:before {
  border-left-color: #458746;
}
.art-video-player .hint--success.hint--right:before {
  border-right-color: #458746;
}
.art-video-player .hint--always:after,
.art-video-player .hint--always:before {
  opacity: 1;
  visibility: visible;
}
.art-video-player .hint--always.hint--top:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top:after {
  -webkit-transform: translateX(-50%) translateY(-8px);
  -moz-transform: translateX(-50%) translateY(-8px);
  transform: translateX(-50%) translateY(-8px);
}
.art-video-player .hint--always.hint--top-left:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top-left:after {
  -webkit-transform: translateX(-100%) translateY(-8px);
  -moz-transform: translateX(-100%) translateY(-8px);
  transform: translateX(-100%) translateY(-8px);
}
.art-video-player .hint--always.hint--top-right:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top-right:after {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--bottom:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom:after {
  -webkit-transform: translateX(-50%) translateY(8px);
  -moz-transform: translateX(-50%) translateY(8px);
  transform: translateX(-50%) translateY(8px);
}
.art-video-player .hint--always.hint--bottom-left:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom-left:after {
  -webkit-transform: translateX(-100%) translateY(8px);
  -moz-transform: translateX(-100%) translateY(8px);
  transform: translateX(-100%) translateY(8px);
}
.art-video-player .hint--always.hint--bottom-right:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom-right:after {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--left:before {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--always.hint--left:after {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--always.hint--right:before {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--always.hint--right:after {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--rounded:after {
  border-radius: 4px;
}
.art-video-player .hint--no-animate:before,
.art-video-player .hint--no-animate:after {
  -webkit-transition-duration: 0ms;
  -moz-transition-duration: 0ms;
  transition-duration: 0ms;
}
.art-video-player .hint--bounce:before,
.art-video-player .hint--bounce:after {
  -webkit-transition: opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  -moz-transition: opacity 0.3s ease, visibility 0.3s ease, -moz-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
}
.art-video-player .hint--no-shadow:before,
.art-video-player .hint--no-shadow:after {
  text-shadow: initial;
  box-shadow: initial;
}
.art-video-player .hint--no-arrow:before {
  display: none;
}
.art-video-player.art-mobile {
  --art-bottom-gap: 10px;
  --art-control-height: 38px;
  --art-control-icon-scale: 1;
  --art-state-size: 60px;
  --art-settings-max-height: 180px;
  --art-selector-max-height: 180px;
  --art-indicator-scale: 1;
  --art-control-opacity: 1;
}
.art-video-player.art-mobile .art-controls-left {
  margin-left: calc(var(--art-padding) / -1);
}
.art-video-player.art-mobile .art-controls-right {
  margin-right: calc(var(--art-padding) / -1);
}
`,we=class extends vt{constructor(t){super(t),this.name="subtitle",this.option=null,this.destroyEvent=()=>null,this.init(t.option.subtitle);let n=!1;t.on("video:timeupdate",()=>{if(!this.url)return;let r=this.art.template.$video.webkitDisplayingFullscreen;typeof r=="boolean"&&r!==n&&(n=r,this.createTrack(r?"subtitles":"metadata",this.url))})}get url(){return this.art.template.$track.src}set url(t){this.switch(t)}get textTrack(){return this.art.template.$video?.textTracks?.[0]}get activeCues(){return this.textTrack?Array.from(this.textTrack.activeCues):[]}get cues(){return this.textTrack?Array.from(this.textTrack.cues):[]}style(t,n){let{$subtitle:r}=this.art.template;return typeof t=="object"?Qt(r,t):u(r,t,n)}update(){let{option:{subtitle:t},template:{$subtitle:n}}=this.art;n.innerHTML="",this.activeCues.length&&(this.art.emit("subtitleBeforeUpdate",this.activeCues),n.innerHTML=this.activeCues.map((r,i)=>r.text.split(/\r?\n/).filter(o=>o.trim()).map(o=>`<div class="art-subtitle-line" data-group="${i}">
                                ${t.escape?Fe(o):o}
                            </div>`).join("")).join(""),this.art.emit("subtitleAfterUpdate",this.activeCues))}async switch(t,n={}){let{i18n:r,notice:i,option:o}=this.art,a={...o.subtitle,...n,url:t},s=await this.init(a);return n.name&&(i.show=`${r.get("Switch Subtitle")}: ${n.name}`),s}createTrack(t,n){let{template:r,proxy:i,option:o}=this.art,{$video:a,$track:s}=r,c=K("track");c.default=!0,c.kind=t,c.src=n,c.label=o.subtitle.name||"Artplayer",c.track.mode="hidden",c.onload=()=>{this.art.emit("subtitleLoad",this.cues,this.option)},this.art.events.remove(this.destroyEvent),s.onload=null,Kt(s),w(a,c),r.$track=c,this.destroyEvent=i(this.textTrack,"cuechange",()=>this.update())}async init(t){let{notice:n,template:{$subtitle:r}}=this.art;if(!this.textTrack)return null;if(Ot(t,ie.subtitle),!!t.url)return this.option=t,this.style(t.style),fetch(t.url).then(i=>i.arrayBuffer()).then(i=>{let a=new TextDecoder(t.encoding).decode(i);switch(t.type||_t(t.url)){case"srt":{let s=Ye(a),c=t.onVttLoad(s);return jt(c)}case"ass":{let s=We(a),c=t.onVttLoad(s);return jt(c)}case"vtt":{let s=t.onVttLoad(a);return jt(s)}default:return t.url}}).then(i=>(r.innerHTML="",this.url===i||(URL.revokeObjectURL(this.url),this.createTrack("metadata",i)),i)).catch(i=>{throw r.innerHTML="",n.show=i,i})}},Xt=class e{constructor(t){this.art=t;let{option:n,constructor:r}=t;n.container instanceof Element?this.$container=n.container:(this.$container=ot(n.container),st(this.$container,`No container element found by ${n.container}`)),st(_e(),"The current browser does not support flex layout");let i=this.$container.tagName.toLowerCase();st(i==="div",`Unsupported container element type, only support 'div' but got '${i}'`),st(r.instances.every(o=>o.template.$container!==this.$container),"Cannot mount multiple instances on the same dom element"),this.query=this.query.bind(this),this.$container.dataset.artId=t.id,this.init()}static get html(){return`
          <div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show">
            <video class="art-video">
              <track default kind="metadata" src=""></track>
            </video>
            <div class="art-poster"></div>
            <div class="art-subtitle"></div>
            <div class="art-danmuku"></div>
            <div class="art-layers"></div>
            <div class="art-mask">
              <div class="art-state"></div>
            </div>
            <div class="art-bottom">
              <div class="art-progress"></div>
              <div class="art-controls">
                <div class="art-controls-left"></div>
                <div class="art-controls-center"></div>
                <div class="art-controls-right"></div>
              </div>
            </div>
            <div class="art-loading"></div>
            <div class="art-notice">
              <div class="art-notice-inner"></div>
            </div>
            <div class="art-settings"></div>
            <div class="art-info">
              <div class="art-info-panel">
                <div class="art-info-item">
                  <div class="art-info-title">Player version:</div>
                  <div class="art-info-content">${ke}</div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video url:</div>
                  <div class="art-info-content" data-video="currentSrc"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video volume:</div>
                  <div class="art-info-content" data-video="volume"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video time:</div>
                  <div class="art-info-content" data-video="currentTime"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video duration:</div>
                  <div class="art-info-content" data-video="duration"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video resolution:</div>
                  <div class="art-info-content">
                    <span data-video="videoWidth"></span> x <span data-video="videoHeight"></span>
                  </div>
                </div>
              </div>
              <div class="art-info-close">[x]</div>
            </div>
            <div class="art-contextmenus"></div>
          </div>
        `}query(t){return ot(t,this.$container)}init(){let{option:t}=this.art;if(t.useSSR||(this.$container.innerHTML=e.html),this.$player=this.query(".art-video-player"),this.$video=this.query(".art-video"),this.$track=this.query("track"),this.$poster=this.query(".art-poster"),this.$subtitle=this.query(".art-subtitle"),this.$danmuku=this.query(".art-danmuku"),this.$bottom=this.query(".art-bottom"),this.$progress=this.query(".art-progress"),this.$controls=this.query(".art-controls"),this.$controlsLeft=this.query(".art-controls-left"),this.$controlsCenter=this.query(".art-controls-center"),this.$controlsRight=this.query(".art-controls-right"),this.$layer=this.query(".art-layers"),this.$loading=this.query(".art-loading"),this.$notice=this.query(".art-notice"),this.$noticeInner=this.query(".art-notice-inner"),this.$mask=this.query(".art-mask"),this.$state=this.query(".art-state"),this.$setting=this.query(".art-settings"),this.$info=this.query(".art-info"),this.$infoPanel=this.query(".art-info-panel"),this.$infoClose=this.query(".art-info-close"),this.$contextmenu=this.query(".art-contextmenus"),t.proxy){let n=t.proxy.call(this.art,this.art);st(n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement,"Function 'option.proxy' needs to return 'HTMLVideoElement' or 'HTMLCanvasElement'"),Te(n,this.$video),n.className="art-video",this.$video=n}t.backdrop&&A(this.$player,"art-backdrop"),j&&A(this.$player,"art-mobile")}destroy(t){t?this.$container.innerHTML="":A(this.$player,"art-destroy")}},Ut=class{on(t,n,r){let i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:n,ctx:r}),this}once(t,n,r){let i=this;function o(...a){i.off(t,o),n.apply(r,a)}return o._=n,this.on(t,o,r)}emit(t,...n){let r=((this.e||(this.e={}))[t]||[]).slice();for(let i=0;i<r.length;i+=1)r[i].fn.apply(r[i].ctx,n);return this}off(t,n){let r=this.e||(this.e={}),i=r[t],o=[];if(i&&n)for(let a=0,s=i.length;a<s;a+=1)i[a].fn!==n&&i[a].fn._!==n&&o.push(i[a]);return o.length?r[t]=o:delete r[t],this}},xo=0,Yt=[],R=class e extends Ut{constructor(t,n){if(super(),!Gt)throw new Error("Artplayer can only be used in the browser environment");this.id=++xo;let r=Zt(e.option,t);if(r.container=t.container,this.option=Ot(r,ie),this.isLock=!1,this.isReady=!1,this.isFocus=!1,this.isInput=!1,this.isRotate=!1,this.isDestroy=!1,this.template=new Xt(this),this.events=new le(this),this.storage=new xe(this),this.icons=new pe(this),this.i18n=new de(this),this.notice=new ge(this),this.player=new ve(this),this.layers=new he(this),this.controls=new se(this),this.contextmenu=new ae(this),this.subtitle=new we(this),this.info=new ue(this),this.loading=new fe(this),this.hotkey=new ce(this),this.mask=new me(this),this.setting=new ye(this),this.plugins=new be(this),typeof n=="function"&&this.on("ready",()=>n.call(this,this)),e.DEBUG){let i=o=>console.log(`[ART.${this.id}] -> ${o}`);i(`Version@${e.version}`);for(let o=0;o<Nt.events.length;o++)this.on(`video:${Nt.events[o]}`,a=>i(`Event@${a.type}`))}Yt.push(this)}static get instances(){return Yt}static get version(){return ke}static get config(){return Nt}static get utils(){return Sn}static get scheme(){return ie}static get Emitter(){return Ut}static get validator(){return Ot}static get kindOf(){return Ot.kindOf}static get html(){return Xt.html}static get option(){return{id:"",container:"#artplayer",url:"",poster:"",type:"",theme:"#f00",volume:.7,isLive:!1,muted:!1,autoplay:!1,autoSize:!1,autoMini:!1,loop:!1,flip:!1,playbackRate:!1,aspectRatio:!1,screenshot:!1,setting:!1,hotkey:!0,pip:!1,mutex:!0,backdrop:!0,fullscreen:!1,fullscreenWeb:!1,subtitleOffset:!1,miniProgressBar:!1,useSSR:!1,playsInline:!0,lock:!1,gesture:!0,fastForward:!1,autoPlayback:!1,autoOrientation:!1,airplay:!1,proxy:void 0,layers:[],contextmenu:[],controls:[],settings:[],quality:[],highlight:[],plugins:[],thumbnails:{url:"",number:60,column:10,width:0,height:0,scale:1},subtitle:{url:"",type:"",style:{},name:"",escape:!0,encoding:"utf-8",onVttLoad:t=>t},moreVideoAttr:{controls:!1,preload:Ie?"auto":"metadata"},i18n:{},icons:{},cssVar:{},customType:{},lang:navigator?.language.toLowerCase()}}get proxy(){return this.events.proxy}get query(){return this.template.query}get video(){return this.template.$video}reset(){this.video.removeAttribute("src"),this.video.load()}destroy(t=!0){e.REMOVE_SRC_WHEN_DESTROY&&this.reset(),this.events.destroy(),this.template.destroy(t),Yt.splice(Yt.indexOf(this),1),this.isDestroy=!0,this.emit("destroy")}};R.STYLE=Ke;R.DEBUG=!1;R.CONTEXTMENU=!0;R.NOTICE_TIME=2e3;R.SETTING_WIDTH=250;R.SETTING_ITEM_WIDTH=200;R.SETTING_ITEM_HEIGHT=35;R.RESIZE_TIME=200;R.SCROLL_TIME=200;R.SCROLL_GAP=50;R.AUTO_PLAYBACK_MAX=10;R.AUTO_PLAYBACK_MIN=5;R.AUTO_PLAYBACK_TIMEOUT=3e3;R.RECONNECT_TIME_MAX=5;R.RECONNECT_SLEEP_TIME=1e3;R.CONTROL_HIDE_TIME=3e3;R.DBCLICK_TIME=300;R.DBCLICK_FULLSCREEN=!0;R.MOBILE_DBCLICK_PLAY=!0;R.MOBILE_CLICK_PLAY=!1;R.AUTO_ORIENTATION_TIME=200;R.INFO_LOOP_TIME=1e3;R.FAST_FORWARD_VALUE=3;R.FAST_FORWARD_TIME=1e3;R.TOUCH_MOVE_RATIO=.5;R.VOLUME_STEP=.1;R.SEEK_STEP=5;R.PLAYBACK_RATE=[.5,.75,1,1.25,1.5,2];R.ASPECT_RATIO=["default","4:3","16:9"];R.FLIP=["normal","horizontal","vertical"];R.FULLSCREEN_WEB_IN_BODY=!0;R.LOG_VERSION=!0;R.USE_RAF=!1;R.REMOVE_SRC_WHEN_DESTROY=!0;Gt&&(De("artplayer-style",Ke),setTimeout(()=>{R.LOG_VERSION&&console.log(`%c ArtPlayer %c ${R.version} %c https://artplayer.org`,"color: #fff; background: #5f5f5f","color: #fff; background: #4bc729","")},100));var Qe=`/* \u5BBF\u4E3B\u53EA\u4E0B\u53D1 background / text / muted / border / accent / accent-solid \u516D\u4E2A\u4E3B\u9898\u8272\u3002
   hover\u3001\u9009\u4E2D\u3001\u641C\u7D22\u547D\u4E2D\u3001\u62D6\u9009\u8FD9\u56DB\u5C42\u9AD8\u4EAE\u6CA1\u6709\u5BF9\u5E94\u53D8\u91CF\uFF0C\u6539\u7528\u534A\u900F\u660E\u53E0\u52A0\u4ECE\u5DF2\u6709\u989C\u8272\u6D3E\u751F\uFF1A
   \u540C\u4E00\u7EC4\u503C\u5728\u6D45\u8272\u548C\u6DF1\u8272\u4E3B\u9898\u4E0B\u90FD\u6210\u7ACB\uFF0C\u4E5F\u80FD\u8DDF\u7740\u81EA\u5B9A\u4E49\u4E3B\u9898\u8D70\u3002
   \u7528\u6CD5\u4FDD\u7559 \`var(--lexora-x, var(--player-x))\`\uFF0C\u5BBF\u4E3B\u4EE5\u540E\u8865\u4E0A\u540C\u540D\u53D8\u91CF\u4F1A\u81EA\u52A8\u4F18\u5148\u3002 */
:root {
  --player-hover: color-mix(in srgb, var(--lexora-text, #414844) 6%, transparent);
  --player-selected: color-mix(in srgb, var(--lexora-accent, #40597b) 15%, transparent);
  --player-mark: color-mix(in srgb, var(--lexora-accent, #40597b) 26%, transparent);
  --player-selection: color-mix(in srgb, var(--lexora-accent, #40597b) 30%, transparent);
}
.player-root {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, var(--player-split, 60%)) 6px minmax(0, 1fr);
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  background: var(--lexora-background, #fff);
  color: var(--lexora-text, #202124);
  font: 14px/1.6 system-ui, sans-serif;
}
.player-root *, .player-root *::before, .player-root *::after { box-sizing: border-box; }
.player-root [hidden] { display: none !important; }
.player-root button, .player-root input { font: inherit; }
.player-root button { cursor: pointer; }
.player-root :focus-visible { outline: 2px solid var(--lexora-focus, var(--lexora-accent-solid, #365edc)); outline-offset: 2px; }
.player-root ::selection { background: var(--lexora-selected, var(--player-selection)); color: var(--lexora-text, #202124); }
.player-media { position: relative; min-width: 0; min-height: 0; background: #000; }
.player-canvas, .player-canvas .art-video-player { width: 100%; height: 100%; }
.player-separator {
  z-index: 1;
  min-width: 0;
  background: var(--lexora-background, #fff);
  border-inline: 1px solid var(--lexora-border, #dedfe3);
  cursor: col-resize;
  touch-action: none;
}
.player-separator:hover, .player-separator:focus-visible, .is-resizing .player-separator { background: var(--lexora-accent-solid, #365edc); }
.player-root.is-resizing { user-select: none; cursor: col-resize; }
.player-root.is-expanded { grid-template-columns: minmax(0, 1fr); grid-template-rows: minmax(0, 1fr); }
.player-root.is-audio:not(.is-expanded) { grid-template-columns: minmax(0, 1fr); grid-template-rows: min(180px, 45%) minmax(0, 1fr); }
.is-audio .player-media { background: var(--lexora-background, #fff); }
.is-audio .transcript-panel { border-top: 1px solid var(--lexora-border, #dedfe3); }
.player-audio-cover { position: absolute; inset: 0 0 66px; display: flex; align-items: center; justify-content: center; gap: 14px; padding: 16px 24px; pointer-events: none; }
.player-audio-icon { flex: 0 0 40px; height: 40px; color: var(--lexora-accent, #365edc); }
.player-audio-icon svg { display: block; width: 100%; height: 100%; }
.player-audio-name { min-width: 0; max-width: 60ch; margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 15px; font-weight: 500; }
.is-audio .player-canvas { position: relative; z-index: 1; }
.is-audio .player-canvas .art-video-player { background: transparent; --art-volume-height: 90px; }
.is-audio .player-canvas .art-video { opacity: 0; }
.is-audio .player-canvas .art-mask .art-state { display: none; }
.is-audio .player-canvas .art-bottom { inset: auto 0 0; height: 66px; opacity: 1; background: #202124; overflow: visible; }
.is-audio .player-canvas .art-bottom .art-controls,
.is-audio .player-canvas .art-bottom .art-progress { transform: none; }
.player-canvas .art-subtitle-load,
.player-canvas .art-subtitle-toggle {
  display: block;
  max-width: 9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1;
}
.player-canvas .art-subtitle-load { padding: 0 8px; }
.player-canvas .art-subtitle-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--art-control-icon-size);
  height: var(--art-control-icon-size);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  opacity: 0.4;
  transform: scale(var(--art-control-icon-scale));
}
.player-canvas .art-subtitle-toggle[data-state="on"] { opacity: 1; }
.player-canvas .art-subtitle-toggle[data-state="off"] { opacity: 0.75; text-decoration: line-through; }
.player-canvas .player-expand {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--art-control-icon-size);
  height: var(--art-control-icon-size);
  padding: 0;
  border: 0;
  background: transparent;
  color: #fff;
}
.player-expand svg { width: 22px; height: 22px; pointer-events: none; }
.player-expand .player-expand-exit, .player-expand[data-expanded="true"] .player-expand-enter { display: none; }
.player-expand[data-expanded="true"] .player-expand-exit { display: block; }
.player-error {
  position: absolute;
  z-index: 2;
  left: 16px;
  right: 16px;
  bottom: 64px;
  margin: 0;
  padding: 10px 12px;
  background: #202124;
  color: #fff;
  font: 13px/1.5 system-ui, sans-serif;
}
.transcript-panel { display: flex; flex-direction: column; min-width: 0; min-height: 0; overflow: hidden; }
.transcript-tabs { display: flex; flex: 0 0 auto; gap: 24px; padding: 0 20px; border-bottom: 1px solid var(--lexora-border, #dedfe3); }
.transcript-tab {
  position: relative;
  min-height: 50px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--lexora-muted, #686b73);
  white-space: nowrap;
}
.transcript-tab[aria-selected="true"] { color: var(--lexora-accent, #365edc); font-weight: 600; }
.transcript-tab[aria-selected="true"]::after { position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; background: currentColor; content: ''; }
.transcript-content { position: relative; display: flex; flex: 1; flex-direction: column; min-height: 0; }
.transcript-search { display: flex; align-items: center; flex: 0 0 auto; gap: 6px; padding: 14px 16px; }
.transcript-search-input {
  width: 0;
  min-width: 0;
  flex: 1;
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--lexora-border, #dedfe3);
  border-radius: 6px;
  background: var(--lexora-background, #fff);
  color: inherit;
  caret-color: var(--lexora-accent, #365edc);
}
.transcript-search-input::placeholder { color: var(--lexora-muted, #686b73); opacity: 1; }
.transcript-search-count { min-width: 3ch; color: var(--lexora-muted, #686b73); font-size: 12px; font-variant-numeric: tabular-nums; white-space: nowrap; }
.transcript-search-nav { flex: 0 0 auto; min-height: 32px; padding: 0 4px; border: 0; border-radius: 4px; background: transparent; color: var(--lexora-text, #202124); font-size: 12px !important; }
.transcript-search-nav:hover:not(:disabled) { background: var(--lexora-hover, var(--player-hover)); }
.transcript-search-nav:disabled { opacity: 0.4; cursor: default; }
.transcript-scroll, .transcript-summary {
  flex: 1;
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--lexora-border, #c9ccd3) transparent;
}
.transcript-scroll { padding: 0 20px 72px; -webkit-touch-callout: none; }
.transcript-paragraph { margin: 8px 0 16px; }
.transcript-paragraph-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px; }
.transcript-paragraph-header .transcript-time { margin: 0; }
.transcript-paragraph-quote { display: inline-flex; align-items: center; justify-content: center; flex: 0 0 26px; width: 26px; min-height: 24px; padding: 3px; border: 0; border-radius: 3px; background: transparent; color: var(--lexora-accent, #365edc); opacity: 0; pointer-events: none; }
.transcript-paragraph-quote svg { width: 16px; height: 16px; pointer-events: none; }
.transcript-paragraph:hover .transcript-paragraph-quote,
.transcript-paragraph:focus-within .transcript-paragraph-quote { opacity: 1; pointer-events: auto; }
.transcript-paragraph-quote:hover:not(:disabled) { background: var(--lexora-hover, var(--player-hover)); }
.transcript-paragraph-quote:disabled { cursor: default; color: var(--lexora-muted, #686b73); }
@media (hover: none) {
  .transcript-paragraph-quote { opacity: 1; pointer-events: auto; }
}
.transcript-time { display: inline-block; margin: 0 0 4px; padding: 0; border: 0; background: transparent; color: var(--lexora-muted, #686b73); font-size: 12px !important; font-variant-numeric: tabular-nums; }
.transcript-time:hover { color: var(--lexora-accent, #365edc); text-decoration: underline; text-underline-offset: 3px; }
.transcript-text { margin: 0; font-size: 15px; line-height: 1.75; overflow-wrap: anywhere; }
.transcript-cue { position: relative; padding-block: 2px; border-radius: 2px; cursor: pointer; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
.transcript-cue:hover { background: var(--lexora-hover, var(--player-hover)); }
.transcript-cue.is-current { background: var(--lexora-selected, var(--player-selected)); box-shadow: -2px 0 0 var(--lexora-accent-solid, #365edc); }
.transcript-cue mark { border-radius: 2px; background: var(--lexora-accent-surface, var(--player-mark)); color: inherit; }
.transcript-cue mark.is-search-current { outline: 1px solid var(--lexora-accent, #365edc); outline-offset: 1px; }
.transcript-cue mark.is-reference { background: var(--lexora-selected, var(--player-selected)); text-decoration: underline; text-decoration-color: var(--lexora-accent, #365edc); text-underline-offset: 3px; }
.transcript-selection-status { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.transcript-follow-bar { position: absolute; z-index: 1; inset-inline: 16px; bottom: 16px; display: flex; justify-content: center; pointer-events: none; }
.transcript-follow { max-width: 100%; margin: 0; padding: 6px 12px; border: 1px solid var(--lexora-border, #dedfe3); border-radius: 6px; background: var(--lexora-background, #fff); color: var(--lexora-accent, #365edc); font-size: 12px !important; pointer-events: auto; }
.transcript-follow:hover { background: var(--lexora-hover, var(--player-hover)); }
.transcript-empty { max-width: 34ch; margin: 56px auto; color: var(--lexora-muted, #686b73); text-align: center; font-size: 13px; overflow-wrap: anywhere; }
.transcript-empty p { margin: 6px 0; }
.transcript-empty .transcript-empty-title { color: var(--lexora-text, #202124); font-size: 15px; font-weight: 500; }
.transcript-summary { padding: 0 24px; }
@media (max-width: 760px) {
  .player-root { grid-template-columns: minmax(0, 1fr); grid-template-rows: minmax(120px, 42%) minmax(0, 1fr); }
  .player-separator { display: none; }
  .transcript-panel { border-top: 1px solid var(--lexora-border, #dedfe3); }
  .transcript-tabs { padding-inline: 16px; }
  .transcript-scroll { padding-inline: 16px; }
}
`;function Je(e){return e.filter(t=>Number.isFinite(t.start)&&Number.isFinite(t.end)&&t.start>=0&&t.end>t.start&&t.text.trim()).map(t=>({...t,text:t.text.replace(/\s+/gu," ").trim()})).sort((t,n)=>t.start-n.start)}function Ze(e){let t=[],n=0;return e.forEach((r,i)=>{let o=e[i-1];(!o||r.start-o.end>=1.5||n+r.text.length>360)&&(t.push({start:r.start,indexes:[]}),n=0),t[t.length-1].indexes.push(i),n+=r.text.length}),t}function tn(e,t){let n=t.trim();if(!n)return[];let r=new RegExp(n.replace(/[.*+?^${}()|[\]\\]/gu,"\\$&"),"giu");return e.flatMap((i,o)=>Array.from(i.text.matchAll(r),a=>({cueIndex:o,start:a.index,end:a.index+a[0].length})))}function en(e,t){let n=0,r=e.length;for(;n<r;){let i=n+r>>>1;e[i].start<=t?n=i+1:r=i}for(let i=n-1;i>=0;i--)if(t<e[i].end)return i;return-1}function bt(e){let t=Math.max(0,Math.floor(Number.isFinite(e)?e:0)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=String(t%60).padStart(2,"0");return n?`${n}:${String(r).padStart(2,"0")}:${i}`:`${String(r).padStart(2,"0")}:${i}`}var Tt=32768,te=e=>e.replace(/\s/gu,""),xt=(e,t)=>Number.isInteger(e)&&e>=0&&e<=t,ee=e=>e!==null&&typeof e=="object"&&!Array.isArray(e)?e:null;function nn(e,t){if(!xt(t,e.length))return!1;let n=e.charCodeAt(t-1),r=e.charCodeAt(t);return!(n>=55296&&n<=56319&&r>=56320&&r<=57343)}function It(e,t,n,r,i){if(!xt(t,e.length-1)||!xt(n,e.length-1)||n<t)return null;let o=e[t],a=e[n];if(!nn(o.text,r)||!nn(a.text,i)||t===n&&i<=r)return null;let s=e.slice(t,n+1).map((c,l,d)=>c.text.slice(l?0:r,l===d.length-1?i:void 0)).join(" ");return s.trim()?{fromCue:t,toCue:n,fromOffset:r,toOffset:i,start:o.start,end:Math.max(...e.slice(t,n+1).map(c=>c.end)),text:s}:null}function rn(e){return{name:e.name,...e.relativePath?{relativePath:e.relativePath}:{}}}function on(e){let t=n=>n.replace(/[\r\n]/gu," ");return e.relativePath?`${t(e.relativePath)}\uFF08\u63A5\u53E3\u63D0\u4F9B\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF09`:`\u8DEF\u5F84\u4E0D\u53EF\u7528\uFF08\u6587\u4EF6\u540D\uFF1A${t(e.name)}\uFF09`}function sn(e,t,n,r){return{prefix:`\u6587\u4EF6\u8DEF\u5F84\uFF1A${on(e)}
\u9009\u4E2D\u5185\u5BB9\uFF1A
`,suffix:`

\u5B57\u5E55\u6E90\u5A92\u4F53\u8DEF\u5F84\uFF1A${on(t)}
\u65F6\u95F4\u8303\u56F4\uFF1A${bt(n)}\u2013${bt(r)}`}}function ln(e,t,n){if(!e.text.trim()||e.text.length>Tt)throw new Error("\u9009\u533A\u6700\u591A\u652F\u6301 32768 \u4E2A\u5B57\u7B26\uFF0C\u8BF7\u7F29\u5C0F\u9009\u533A\u3002");let r={...rn(t),id:t.id,type:t.type,encoding:t.encoding,show:t.show},i=rn(n),{prefix:o,suffix:a}=sn(r,i,e.start,e.end),s={kind:"transcript-selection",subtitle:r,media:i,fromCue:e.fromCue,toCue:e.toCue,fromOffset:e.fromOffset,toOffset:e.toOffset,start:e.start,end:e.end,prefixLength:o.length,selectionLength:e.text.length};if(new TextEncoder().encode(JSON.stringify(s)).byteLength>16384)throw new Error("\u5B57\u5E55\u6765\u6E90\u4FE1\u606F\u8FC7\u957F\uFF0C\u65E0\u6CD5\u521B\u5EFA\u5B9A\u4F4D\u5F15\u7528\u3002");return{kind:"content",title:`${t.name} \xB7 ${bt(e.start)}\u2013${bt(e.end)}`.slice(0,512),text:o+e.text+a,locator:{version:1,data:s}}}function an(e){let t=ee(e);return!t||typeof t.name!="string"||!t.name||t.name.length>512||t.relativePath!==void 0&&(typeof t.relativePath!="string"||t.relativePath.length>32768)?null:{name:t.name,...typeof t.relativePath=="string"?{relativePath:t.relativePath}:{}}}function cn(e,t){let n=ee(e),r=ee(n?.data);if(n?.version!==1||r?.kind!=="transcript-selection")return null;let i=ee(r.subtitle),o=an(i),a=an(r.media);if(!i||!o||!a||typeof i.id!="string"||!/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu.test(i.id)||typeof i.type!="string"||!["srt","vtt","ass"].includes(i.type)||typeof i.encoding!="string"||!["utf-8","gbk"].includes(i.encoding)||typeof i.show!="boolean"||!xt(r.fromCue,19999)||!xt(r.toCue,19999)||r.toCue<r.fromCue||!xt(r.fromOffset,8*1024*1024)||!xt(r.toOffset,8*1024*1024)||typeof r.start!="number"||!Number.isFinite(r.start)||r.start<0||typeof r.end!="number"||!Number.isFinite(r.end)||r.end<=r.start||!xt(r.prefixLength,t.length)||!xt(r.selectionLength,Tt)||!r.selectionLength)return null;let{prefix:s,suffix:c}=sn(o,a,r.start,r.end),l=t.slice(r.prefixLength,r.prefixLength+r.selectionLength);return!l.trim()||s.length!==r.prefixLength||s+l+c!==t?null:{data:r,text:l}}function dn(e,t){let n=te(t.text);if(!n)return null;let r=It(e,t.fromCue,t.toCue,t.fromOffset,t.toOffset);if(r&&Math.abs(r.start-t.start)<.01&&te(r.text)===n)return r;let i=e.map(m=>te(m.text)),o=i.join(""),a=o.indexOf(n);if(a<0||o.indexOf(n,a+1)>=0)return null;let s=a+n.length,c=0,l=-1,d=-1,p=0,f=0;for(let m=0;m<e.length;m++){let g=c+i[m].length,y=(C,L)=>{let S=0;for(let b=0;b<e[m].text.length;b++)if(!/\s/u.test(e[m].text[b])){if(!L&&S===C)return b;if(S++,L&&S===C)return b+1}return e[m].text.length};if(l<0&&a<g&&(l=m,p=y(a-c,!1)),l>=0&&s<=g){d=m,f=y(s-c,!0);break}c=g}let v=It(e,l,d,p,f);return v&&te(v.text)===n?v:null}var pn=e=>`<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="${e}"/></svg>`,un=pn("M8 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8zM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4zM4 6a2 2 0 0 1 1-1.732V14.5A2.5 2.5 0 0 0 7.5 17h6.232A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6z"),ne=pn("M7.826 8.62a8.802 8.802 0 0 1-.952 2.764c-.649 1.18-1.476 2.011-2.228 2.762a.5.5 0 0 0 .708.708l.011-.012c.747-.747 1.664-1.664 2.386-2.976C8.48 10.538 9 8.83 9 6.5a2.5 2.5 0 1 0-1.174 2.12zM8 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm6.826 2.12a8.8 8.8 0 0 1-.952 2.764c-.649 1.18-1.476 2.011-2.228 2.762a.5.5 0 0 0 .708.708l.012-.012c.746-.747 1.663-1.664 2.385-2.976C15.48 10.538 16 8.83 16 6.5a2.5 2.5 0 1 0-1.174 2.12zM13.5 8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z");function q(e,t="",n=""){let r=document.createElement(e);return r.className=t,r.textContent=n,r}function Mt(e,t=""){let n=q("button",t,e);return n.type="button",n}function hn(e,t,n){let r=q("aside","transcript-panel");r.setAttribute("aria-label","\u6587\u5B57\u8BB0\u5F55\u4E0E\u667A\u80FD\u7EAA\u8981");let i=q("div","transcript-tabs");i.setAttribute("role","tablist"),i.setAttribute("aria-label","\u5185\u5BB9\u7C7B\u578B");let o=Mt("\u6587\u5B57\u8BB0\u5F55","transcript-tab"),a=Mt("\u667A\u80FD\u7EAA\u8981","transcript-tab"),s=q("section","transcript-content"),c=q("section","transcript-summary");for(let[$,E,z]of[[o,s,"transcript"],[a,c,"summary"]])$.id=`${z}-tab`,$.setAttribute("role","tab"),$.setAttribute("aria-controls",`${z}-panel`),E.id=`${z}-panel`,E.setAttribute("role","tabpanel"),E.setAttribute("aria-labelledby",$.id);c.tabIndex=0;let l=q("div","transcript-empty");l.append(q("p","transcript-empty-title","\u6682\u65E0\u667A\u80FD\u7EAA\u8981"),q("p","","\u540E\u7EED\u652F\u6301\u7531 Agent \u6839\u636E\u6587\u5B57\u8BB0\u5F55\u751F\u6210\u3002")),c.append(l),i.append(o,a);let d=q("div","transcript-search"),p=q("input","transcript-search-input");p.type="search",p.placeholder="\u641C\u7D22\u6587\u5B57",p.setAttribute("aria-label","\u641C\u7D22\u6587\u5B57\u8BB0\u5F55");let f=q("span","transcript-search-count","0/0");f.setAttribute("role","status");let v=Mt("\u4E0A\u4E00\u5904","transcript-search-nav"),m=Mt("\u4E0B\u4E00\u5904","transcript-search-nav");d.append(p,f,v,m);let g=q("div","transcript-scroll");g.tabIndex=0,g.setAttribute("aria-label","\u6587\u5B57\u8BB0\u5F55\u6B63\u6587");let y=q("div","transcript-empty");y.append(q("p","transcript-empty-title","\u8FD8\u6CA1\u6709\u6587\u5B57\u7A3F"),q("p","","\u8BF7\u4F7F\u7528\u64AD\u653E\u5668\u5E95\u680F\u7684\u201C\u52A0\u8F7D\u5B57\u5E55\u201D\u9009\u62E9 SRT\u3001VTT \u6216 ASS \u6587\u4EF6\u3002"));let C=q("div","transcript-paragraphs");g.append(y,C);let L=q("div","transcript-follow-bar"),S=Mt("\u56DE\u5230\u5F53\u524D\u64AD\u653E\u4F4D\u7F6E","transcript-follow");S.hidden=!0,L.append(S),s.append(d,g,L),r.append(i,s,c);let b=[],M=[],O=[],P=-1,I=-1,W=!0,ct=0,kt=!1,At="transcript",x=0,N="",_=null;function B($){let E=M[$];if(!E||r.hidden||s.hidden)return;let z=E.getBoundingClientRect().top-g.getBoundingClientRect().top+g.scrollTop;g.scrollTo({top:Math.max(0,z-g.clientHeight*.3),behavior:"instant"})}function et(){b.length&&(W=!1,S.hidden=!1)}function Z($){At=$;let E=$==="transcript";s.hidden=!E,c.hidden=E,o.setAttribute("aria-selected",String(E)),a.setAttribute("aria-selected",String(!E)),o.tabIndex=E?0:-1,a.tabIndex=E?-1:0,E&&W&&kt&&B(I)}o.addEventListener("click",()=>Z("transcript"),{signal:e}),a.addEventListener("click",()=>Z("summary"),{signal:e}),i.addEventListener("keydown",$=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes($.key))return;$.preventDefault();let E=$.key==="Home"?"transcript":$.key==="End"||At==="transcript"?"summary":"transcript";Z(E),(E==="transcript"?o:a).focus()},{signal:e});function G($=!1){let E=en(b,ct),z=E!==I;z&&(I>=0&&(M[I]?.classList.remove("is-current"),M[I]?.removeAttribute("aria-current")),I=E,I>=0&&(M[I]?.classList.add("is-current"),M[I]?.setAttribute("aria-current","true"))),W&&($||z&&kt)&&B(I)}function at(){let $=new Map;O.forEach((E,z)=>{let h=$.get(E.cueIndex)??[];h.push({hit:E,index:z}),$.set(E.cueIndex,h)}),b.forEach((E,z)=>{let h=M[z];h.replaceChildren();let T=$.get(z)??[],V=_&&z>=_.fromCue&&z<=_.toCue?{start:z===_.fromCue?_.fromOffset:0,end:z===_.toCue?_.toOffset:E.text.length}:null,D=[...new Set([0,E.text.length,...T.flatMap(({hit:Y})=>[Y.start,Y.end]),...V?[V.start,V.end]:[]])].sort((Y,U)=>Y-U);for(let Y=0;Y<D.length-1;Y++){let U=D[Y],F=D[Y+1],X=T.find(({hit:rt})=>U>=rt.start&&F<=rt.end),nt=V&&U>=V.start&&F<=V.end,lt=E.text.slice(U,F);if(X||nt){let rt=[X?.index===P?"is-search-current":"",nt?"is-reference":""].filter(Boolean).join(" ");h.append(q("mark",rt,lt))}else h.append(document.createTextNode(lt))}}),f.textContent=O.length?`${P+1}/${O.length}`:"0/0",v.disabled=m.disabled=!O.length}function dt(){window.clearTimeout(x),N=p.value,O=tn(b,N),P=O.length?0:-1,at(),O.length&&(et(),B(O[0].cueIndex))}function Et($){if(window.clearTimeout(x),p.value!==N){dt();return}O.length&&(P=(P+$+O.length)%O.length,at(),et(),B(O[P].cueIndex))}p.addEventListener("input",()=>{window.clearTimeout(x),x=window.setTimeout(dt,120)},{signal:e}),p.addEventListener("keydown",$=>{$.key==="Enter"&&($.preventDefault(),Et($.shiftKey?-1:1))},{signal:e}),v.addEventListener("click",()=>Et(-1),{signal:e}),m.addEventListener("click",()=>Et(1),{signal:e}),S.addEventListener("click",()=>{W=!0,S.hidden=!0,G(!0)},{signal:e}),g.addEventListener("wheel",et,{signal:e,passive:!0}),g.addEventListener("touchmove",et,{signal:e,passive:!0}),g.addEventListener("pointerdown",et,{signal:e}),g.addEventListener("keydown",$=>{$.defaultPrevented||["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "].includes($.key)&&et()},{signal:e});function Ft($){if(!($ instanceof Element))return;let E=$.closest(".transcript-cue"),z=$.closest(".transcript-time"),h=E?b[Number(E.dataset.index)]?.start:z?Number(z.dataset.time):void 0;h===void 0||!Number.isFinite(h)||(W=!0,S.hidden=!0,t(h))}function oe($){if($.disabled||e.aborted)return;let E=Number($.dataset.fromCue),z=Number($.dataset.toCue),h=It(b,E,z,0,b[z]?.text.length??0);if(h){if(h.text.length>Tt){n.notice("\u6574\u6BB5\u5185\u5BB9\u8D85\u8FC7 32768 \u4E2A\u5B57\u7B26\uFF0C\u8BF7\u62D6\u9009\u8F83\u5C0F\u8303\u56F4\u540E\u5F15\u7528\u3002");return}n.quote({...h},$.getBoundingClientRect())}}return C.addEventListener("click",$=>{let E=$.target instanceof Element?$.target.closest(".transcript-paragraph-quote"):null;if(E){$.preventDefault(),oe(E);return}window.getSelection()?.isCollapsed!==!1&&Ft($.target)},{signal:e}),C.addEventListener("keydown",$=>{!($.target instanceof Element)||!$.target.closest(".transcript-cue")||$.key!=="Enter"&&$.key!==" "||($.preventDefault(),Ft($.target))},{signal:e}),e.addEventListener("abort",()=>window.clearTimeout(x),{once:!0}),Z("transcript"),p.disabled=v.disabled=m.disabled=!0,{element:r,readSelection(){let $=window.getSelection();if(!$||$.isCollapsed||$.rangeCount!==1||r.hidden||s.hidden)return null;let E=$.getRangeAt(0);if(!C.contains(E.startContainer)||!C.contains(E.endContainer))return null;let z=null,h=null;if(M.forEach((Y,U)=>{if(!E.intersectsNode(Y))return;let F=document.createRange();if(F.selectNodeContents(Y),E.compareBoundaryPoints(Range.START_TO_START,F)>0&&F.setStart(E.startContainer,E.startOffset),E.compareBoundaryPoints(Range.END_TO_END,F)<0&&F.setEnd(E.endContainer,E.endOffset),!F.toString().trim())return;let X=document.createRange();X.selectNodeContents(Y),X.setEnd(F.startContainer,F.startOffset);let nt=X.toString().length;z??={cue:U,offset:nt},h={cue:U,offset:nt+F.toString().length}}),!z||!h)return null;let T=z,V=h,D=It(b,T.cue,V.cue,T.offset,V.offset);return D?{selection:D,rect:E.getBoundingClientRect()}:null},locate($){return dn(b,$)},reveal($){_=$,Z("transcript"),W=!1,S.hidden=!1,at(),B($.fromCue)},setCues($){window.clearTimeout(x),b=Je($.map(z=>({start:z.startTime,end:z.endTime,text:z.getCueAsHTML().textContent??""}))),M=[],_=null,I=-1,W=!0,S.hidden=!0;let E=document.createDocumentFragment();for(let z of Ze(b)){let h=q("div","transcript-paragraph"),T=Mt(bt(z.start),"transcript-time");T.setAttribute("aria-label",`\u4ECE ${bt(z.start)} \u64AD\u653E`),T.dataset.time=String(z.start);let V=q("div","transcript-paragraph-header"),D=Mt("","transcript-paragraph-quote");D.innerHTML=ne;let Y=z.indexes[0],U=z.indexes[z.indexes.length-1],F=It(b,Y,U,0,b[U].text.length);D.dataset.fromCue=String(Y),D.dataset.toCue=String(U),D.disabled=!F||F.text.length>Tt,D.title=D.disabled?"\u6574\u6BB5\u5185\u5BB9\u8FC7\u957F\uFF0C\u8BF7\u62D6\u9009\u8F83\u5C0F\u8303\u56F4\u540E\u5F15\u7528":"\u5F15\u7528\u6574\u6BB5\u5230 AI\uFF08\u52A0\u5165\u804A\u5929\u8349\u7A3F\uFF0C\u4E0D\u4F1A\u76F4\u63A5\u53D1\u9001\uFF09",D.setAttribute("aria-label",`\u5F15\u7528 ${bt(z.start)} \u5F00\u59CB\u7684\u6574\u6BB5\u5185\u5BB9\u5230 AI`),V.append(T,D);let X=q("p","transcript-text");for(let nt of z.indexes){let lt=b[nt],rt=q("span","transcript-cue",lt.text);rt.tabIndex=0,rt.setAttribute("role","button"),rt.title=`\u4ECE ${bt(lt.start)} \u64AD\u653E`,rt.dataset.index=String(nt),M.push(rt),X.append(rt,document.createTextNode(" "))}h.append(V,X),E.append(h)}C.replaceChildren(E),y.hidden=!!b.length,p.disabled=!b.length,dt(),G()},update($,E){let z=!kt&&E;ct=$,kt=E,G(z)},refresh(){W&&B(I)}}}var ko=new Set(["mp3","wav","ogg","oga","opus","m4a","aac","flac"]);function fn(e){let t=e.lastIndexOf(".");return t>=0&&ko.has(e.slice(t+1).toLowerCase())}var re=class{revision=0;current=null;committing=!1;api;constructor(t){this.api=t}release(t){try{this.api.release(t.id).catch(()=>{})}catch{}}close(){this.revision++;let t=this.current;this.current=null,t&&!this.committing&&this.release(t)}async capture(t){if(this.committing)return null;this.close();let n=this.revision,r=await this.api.capture(t);return this.revision!==n?(r&&this.release(r),null):(this.current=r,r)}async commit(t){let n=this.current;if(!n||this.committing||!n.targets.some(i=>i.id===t))return!1;this.committing=!0;let r=!1;try{return r=await this.api.commit(n.id,{kind:"view",id:t}),r}finally{this.current===n&&(this.current=null,this.revision++),r||this.release(n),this.committing=!1}}};function mn(e){let t=e.targets.find(n=>n.id===e.defaultId);return[...t?[t]:[],...e.targets.filter(n=>n!==t)]}var gn=`/* ChatSelectionQuoteMenu.vue + theme/_selection-menu.scss and buddyTheme.ts.
   Mirror the chat menu's 128px width (8rem in the host's 16px root), two icon rows, 6px/3px radii, 12px
   labels, NDropdown small rows/icons and overlay shadow inside the plugin iframe; no Office theme. */
.transcript-reference-menu {
  --menu-background: var(--lexora-raised, var(--lexora-background, #fff));
  --menu-border: var(--lexora-border-strong, var(--lexora-border, #dedfe3));
  --menu-text: var(--lexora-text, #202124);
  --menu-muted: var(--lexora-muted, #686b73);
  --menu-hover: var(--lexora-accent-solid, #365edc);
  --menu-on-hover: var(--lexora-on-accent, #fff);
  --menu-shadow: 0 1px 2px rgb(31 37 33 / 8%), 0 8px 18px rgb(31 37 33 / 12%);
  position: fixed;
  z-index: 200;
  width: 128px;
  max-width: calc(100vw - 16px);
  padding: 4px;
  border: 1px solid var(--menu-border);
  border-radius: 6px;
  background: var(--menu-background);
  color: var(--menu-text);
  box-shadow: var(--menu-shadow);
  font-size: 12px;
}
.transcript-reference-menu[data-color-scheme="dark"] { --menu-shadow: 0 1px 2px rgb(0 0 0 / 22%), 0 8px 18px rgb(0 0 0 / 30%); }
.transcript-reference-menu .ctx-item { display: flex; align-items: center; gap: 8px; width: 100%; min-height: 28px; padding: 0 8px; border: 0; border-radius: 3px; background: transparent; color: inherit; font-size: 12px; line-height: 1.5; text-align: left; cursor: pointer; transition: background-color 80ms, color 80ms; }
.transcript-reference-menu .ctx-item:hover:not(:disabled), .transcript-reference-menu .ctx-item:focus-visible { background: var(--menu-hover); color: var(--menu-on-hover); }
.transcript-reference-menu .ctx-item:disabled { color: var(--menu-muted); opacity: .55; cursor: default; }
.transcript-reference-menu .chat-menu-icon { display: inline-flex; align-items: center; justify-content: center; flex: 0 0 14px; width: 14px; height: 14px; }
.transcript-reference-menu .chat-menu-icon svg { width: 14px; height: 14px; pointer-events: none; }
.transcript-reference-menu .ctx-label { min-width: 0; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.transcript-reference-menu .ctx-arrow { display: flex; flex: 0 0 12px; width: 12px; height: 12px; color: inherit; }
.transcript-reference-menu .ctx-arrow svg { width: 12px; height: 12px; pointer-events: none; }
.transcript-reference-menu .ctx-item-wrap { position: relative; }
.transcript-reference-menu .ctx-submenu { position: fixed; z-index: 201; width: 200px; max-width: min(280px, calc(100vw - 16px)); max-height: min(320px, calc(100vh - 16px)); overflow-y: auto; padding: 4px; border: 1px solid var(--menu-border); border-radius: 6px; background: var(--menu-background); color: var(--menu-text); box-shadow: var(--menu-shadow); }
@media (prefers-reduced-motion: reduce) {
  .transcript-reference-menu .ctx-item { transition-duration: 0ms; }
}
`;function vn(e,t,n,r){let i=document.createElement("style");i.textContent=gn;let o=document.createElement("div");o.className="transcript-reference-menu chat-selection-menu",o.setAttribute("role","menu"),o.setAttribute("aria-label","\u6587\u5B57\u5F15\u7528\u83DC\u5355"),o.hidden=!0;let a=(x,N)=>{let _=document.createElement("button");_.type="button",_.className="ctx-item",_.setAttribute("role","menuitem");let B=document.createElement("span");if(B.className="ctx-label",B.textContent=x,N){let et=document.createElement("span");et.className="chat-menu-icon",et.setAttribute("aria-hidden","true"),et.innerHTML=N,_.append(et)}return _.append(B),_},s=a("\u590D\u5236",un),c=document.createElement("div");c.className="ctx-item-wrap";let l=a("\u5F15\u7528",ne),d=document.createElement("span");d.className="ctx-arrow",d.setAttribute("aria-hidden","true"),d.innerHTML='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 4 4 4-4 4"/></svg>',d.hidden=!0,l.append(d);let p=document.createElement("div");p.className="ctx-submenu",p.setAttribute("role","menu"),p.setAttribute("aria-label","\u9009\u62E9\u76EE\u6807\u804A\u5929"),p.hidden=!0;let f=document.createElement("span");f.className="transcript-selection-status",f.setAttribute("role","status"),c.append(l,p),o.append(s,c),e.append(i,o,f);let v=new re(r.references),m=null,g=null,y=0,C=!1,L=!1;function S(){p.hidden=!0,l.setAttribute("aria-expanded","false")}function b(){y++,o.hidden=!0,S(),p.replaceChildren(),g=null,m=null,v.close()}function M(x){f.textContent=x,r.notice(x)}function O(x){return x instanceof Error?x.message:"\u65E0\u6CD5\u52A0\u5165\u5F15\u7528\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u540E\u91CD\u8BD5\u3002"}function P(x,N,_){let B=x.getBoundingClientRect();x.style.left=`${Math.max(8,Math.min(N,window.innerWidth-B.width-8))}px`,x.style.top=`${Math.max(8,Math.min(_,window.innerHeight-B.height-8))}px`}function I(){if(l.disabled||!g||g.targets.length<2)return;p.hidden=!1,l.setAttribute("aria-expanded","true");let x=l.getBoundingClientRect(),N=p.getBoundingClientRect();P(p,x.right+N.width<=window.innerWidth-8?x.right-4:x.left-N.width+4,x.top-5)}async function W(x,N){if(C||o.hidden||!g)return;let _=y;C=!0,N.disabled=l.disabled=!0,l.title="\u6B63\u5728\u52A0\u5165\u5F15\u7528\u2026";try{let B=await v.commit(x);if(n.aborted||_!==y)return;B?b():l.title="\u5BF9\u8BDD\u6216\u9009\u533A\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u540E\u5F15\u7528\u3002"}catch(B){!n.aborted&&_===y&&(l.title=O(B),M(l.title))}finally{C=!1}}async function ct(x,N,_,B){if(n.aborted||C)return;b();let et=y;if(m={...x},L=B,s.disabled=!1,l.disabled=!0,l.title=x.text.length>Tt?"\u9009\u4E2D\u7684\u6587\u5B57\u8FC7\u957F\uFF0C\u8BF7\u7F29\u5C0F\u8303\u56F4\u3002":"\u6B63\u5728\u8BFB\u53D6\u76EE\u6807\u804A\u5929\u2026",l.removeAttribute("aria-haspopup"),l.setAttribute("aria-expanded","false"),d.hidden=!0,o.dataset.colorScheme=r.colorScheme(),o.hidden=!1,P(o,N,_),!(x.text.length>Tt))try{let Z=r.reference({...x}),G=await v.capture(Z);if(n.aborted||et!==y||o.hidden)return;if(!G){l.title="\u5BF9\u8BDD\u6216\u9009\u533A\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u540E\u5F15\u7528\u3002";return}if(g=G,!G.targets.length){l.title="\u8BF7\u5148\u6253\u5F00\u4E00\u4E2A\u804A\u5929\u8F93\u5165\u6846\u3002";return}if(l.disabled=!1,l.title="\u5F15\u7528\u5230\u804A\u5929",G.targets.length>1){d.hidden=!1,l.setAttribute("aria-haspopup","menu");for(let at of mn(G)){let dt=a(at.label);dt.title=at.label,dt.dataset.targetId=at.id,p.append(dt)}}}catch(Z){!n.aborted&&et===y&&(l.title=O(Z))}}function kt(x){return x instanceof Element&&t.element.contains(x)&&!!x.closest(".transcript-scroll")}document.addEventListener("contextmenu",x=>{if(x.target instanceof Node&&o.contains(x.target)){x.preventDefault();return}if(!kt(x.target))return;x.preventDefault();let N=t.readSelection();N?ct(N.selection,x.clientX||N.rect.left,x.clientY||N.rect.bottom,!0):b()},{capture:!0,signal:n}),o.addEventListener("mousedown",x=>x.preventDefault(),{signal:n}),s.addEventListener("click",()=>{if(!m)return;let x=m.text;b(),r.copy(x).catch(N=>{n.aborted||M(O(N))})},{signal:n}),p.addEventListener("click",x=>{let N=x.target instanceof Element?x.target.closest("button[data-target-id]"):null;N?.dataset.targetId&&!N.disabled&&W(N.dataset.targetId,N)},{signal:n}),l.addEventListener("click",()=>{!g||l.disabled||(g.targets.length===1?W(g.targets[0].id,l):I())},{signal:n}),c.addEventListener("mouseenter",I,{signal:n}),c.addEventListener("mouseleave",()=>{c.contains(document.activeElement)||S()},{signal:n}),c.addEventListener("focusout",()=>queueMicrotask(()=>{c.contains(document.activeElement)||S()}),{signal:n});function At(x,N){let _=[...x.querySelectorAll(":scope > button:not(:disabled), :scope > .ctx-item-wrap > button:not(:disabled)")];if(!_.length)return;let B=_.indexOf(document.activeElement);_[N.key==="Home"?0:N.key==="End"?_.length-1:(B+(N.key==="ArrowDown"?1:-1)+_.length)%_.length].focus()}return o.addEventListener("keydown",x=>{x.key==="Escape"?(x.preventDefault(),b()):x.key==="ArrowRight"&&document.activeElement===l?(x.preventDefault(),I(),p.hidden||p.querySelector("button")?.focus()):x.key==="ArrowLeft"&&!p.hidden?(x.preventDefault(),S(),l.focus()):["ArrowDown","ArrowUp","Home","End"].includes(x.key)&&(x.preventDefault(),At(!p.hidden&&p.contains(document.activeElement)?p:o,x))},{signal:n}),document.addEventListener("pointerdown",x=>{x.target instanceof Node&&o.contains(x.target)||b()},{signal:n,capture:!0}),document.addEventListener("pointercancel",b,{signal:n}),document.addEventListener("selectionchange",()=>{if(o.hidden||!L||C)return;let x=t.readSelection();(!x||JSON.stringify(x.selection)!==JSON.stringify(m))&&b()},{signal:n}),document.addEventListener("keydown",x=>{(x.key==="Escape"||x.key==="Tab")&&b()},{signal:n}),e.addEventListener("scroll",x=>{(!(x.target instanceof Node)||!o.contains(x.target))&&b()},{signal:n,capture:!0,passive:!0}),window.addEventListener("resize",b,{signal:n}),window.addEventListener("blur",b,{signal:n}),n.addEventListener("abort",()=>{b(),i.remove(),o.remove(),f.remove()},{once:!0}),{dismiss:b,openParagraph:(x,N)=>{ct(x,N.left,N.bottom,!1)}}}var Ce=8*1024*1024,bn="pcbed1a21022e43b388ccce09fd4647b5.transcript-player.subtitle";function wt(e,t="",n=""){let r=document.createElement(e);return r.className=t,r.textContent=n,r}function To(e){let t=e.split(".").pop()?.toLowerCase();return t==="srt"||t==="vtt"||t==="ass"?t:null}function Eo(e,t){return new TextDecoder(t,{fatal:!0}).decode(e)}async function Co(e,t){let n=await fetch(e,{signal:t});if(!n.ok)throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u5B57\u5E55\u6587\u4EF6\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");if(Number(n.headers.get("content-length"))>Ce)throw await n.body?.cancel(),new Error("\u5B57\u5E55\u6587\u4EF6\u8D85\u8FC7 8 MiB\uFF0C\u8BF7\u62C6\u5206\u540E\u52A0\u8F7D\u3002");let r=new Uint8Array(await n.arrayBuffer());if(t.throwIfAborted(),!r.byteLength)throw new Error("\u5B57\u5E55\u6587\u4EF6\u4E3A\u7A7A\u3002");if(r.byteLength>Ce)throw new Error("\u5B57\u5E55\u6587\u4EF6\u8D85\u8FC7 8 MiB\uFF0C\u8BF7\u62C6\u5206\u540E\u52A0\u8F7D\u3002");for(let i of["utf-8","gbk"])try{if(Eo(r,i).trim())return i}catch{}throw new Error("\u5B57\u5E55\u7F16\u7801\u4E0D\u5339\u914D\uFF0C\u8BF7\u6539\u7528 UTF-8 \u6216 GBK\u3002")}function So(e){if(!e||typeof e!="object")return null;let t=e,n=t.type;return typeof t.id!="string"||typeof t.name!="string"||typeof t.encoding!="string"||typeof t.show!="boolean"||n!=="srt"&&n!=="vtt"&&n!=="ass"?null:{id:t.id,name:t.name,type:n,encoding:t.encoding,show:t.show,...typeof t.relativePath=="string"?{relativePath:t.relativePath}:{}}}function Lo(e,t){return t.throwIfAborted(),new Promise((n,r)=>{let i=window.setTimeout(()=>s(new Error("\u5B57\u5E55\u52A0\u8F7D\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u91CD\u65B0\u9009\u62E9\u3002")),15e3),o=c=>s(null,c),a=()=>s(new DOMException("\u5DF2\u53D6\u6D88","AbortError"));function s(c,l=[]){window.clearTimeout(i),e.off("subtitleLoad",o),t.removeEventListener("abort",a),c?r(c):n(l)}t.addEventListener("abort",a,{once:!0}),e.on("subtitleLoad",o)})}function Mo(e,t){return t.throwIfAborted(),new Promise((n,r)=>{let i=()=>{o(),r(new DOMException("\u5DF2\u53D6\u6D88","AbortError"))},o=()=>t.removeEventListener("abort",i);t.addEventListener("abort",i,{once:!0}),e.then(a=>{o(),n(a)},a=>{o(),r(a)})})}async function ti(e,t){if(e.signal.aborted)return;let n=new AbortController,r=n.signal,i=()=>n.abort();e.signal.addEventListener("abort",i,{once:!0});let o,a,s,c,l=!1,d=60,p=!1,f="",v=null,m=Promise.resolve(),g=!1,y=0,C=e.resource?.sourceId,L=fn(e.resource?.name??""),S=wt("style");S.textContent=Qe;let b=wt("main",L?"player-root is-audio":"player-root"),M=wt("section","player-media");if(M.setAttribute("aria-label",L?"\u97F3\u9891\u64AD\u653E\u5668":"\u64AD\u653E\u5668"),L){let h=wt("div","player-audio-cover"),T=wt("div","player-audio-icon");T.setAttribute("aria-hidden","true"),T.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13M9 9l12-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="3"/></svg>';let V=wt("p","player-audio-name",e.resource?.name??"");V.title=V.textContent??"",h.append(T,V),M.append(h)}let O=wt("div","player-canvas"),P=hn(r,h=>{o&&(o.seek=h,o.play().catch(()=>Z("\u65E0\u6CD5\u5F00\u59CB\u64AD\u653E\uFF0C\u8BF7\u70B9\u51FB\u64AD\u653E\u5668\u7684\u64AD\u653E\u6309\u94AE\u3002")),P.update(h,o.playing))},{quote:(h,T)=>ct.openParagraph(h,T),notice:Z}),I=wt("div","player-separator");I.hidden=L,I.tabIndex=0,I.setAttribute("role","separator"),I.setAttribute("aria-label","\u8C03\u6574\u64AD\u653E\u5668\u548C\u6587\u5B57\u8BB0\u5F55\u5BBD\u5EA6"),I.setAttribute("aria-orientation","vertical"),I.setAttribute("aria-valuemin","30"),I.setAttribute("aria-valuemax","75"),I.setAttribute("aria-valuenow",String(d));let W=wt("p","player-error");W.setAttribute("role","alert"),W.hidden=!0,M.append(O,W),b.append(M,I,P.element),t.append(S,b);let ct=vn(b,P,r,{async copy(h){if(typeof e.clipboard?.write!="function")throw new Error("\u5F53\u524D\u5E94\u7528\u7248\u672C\u4E0D\u652F\u6301\u63D2\u4EF6\u590D\u5236\uFF0C\u8BF7\u5347\u7EA7\u5E94\u7528\u3002");await e.clipboard.write({text:h})},reference:At,references:e.references,colorScheme:()=>e.environment.colorScheme,notice:Z}),kt=e.onEnvironmentChange(ct.dismiss);r.addEventListener("abort",()=>kt.dispose(),{once:!0});function At(h){if(p||g||!v||!f||!e.resource)throw new Error("\u8BF7\u7B49\u5F85\u5B57\u5E55\u52A0\u8F7D\u5B8C\u6210\u540E\u91CD\u65B0\u9009\u62E9\u3002");if(typeof e.references?.capture!="function"||typeof e.references?.commit!="function"||typeof e.references?.release!="function")throw new Error("\u5F53\u524D\u5E94\u7528\u7248\u672C\u4E0D\u652F\u6301\u5F15\u7528\u83DC\u5355\uFF0C\u8BF7\u5347\u7EA7\u5E94\u7528\u3002");let T={name:e.resource.name};return"relativePath"in e.resource&&typeof e.resource.relativePath=="string"&&(T.relativePath=e.resource.relativePath),ln(h,{...v},T)}function x(h){d=Math.min(75,Math.max(30,h)),b.style.setProperty("--player-split",`${d}%`),I.setAttribute("aria-valuenow",String(Math.round(d))),o?.emit("resize")}I.addEventListener("pointerdown",h=>{h.button===0&&(h.preventDefault(),I.setPointerCapture(h.pointerId),b.classList.add("is-resizing"))},{signal:r}),I.addEventListener("pointermove",h=>{if(!I.hasPointerCapture(h.pointerId))return;let T=b.getBoundingClientRect();T.width&&x((h.clientX-T.left)/T.width*100)},{signal:r});let N=()=>b.classList.remove("is-resizing");I.addEventListener("lostpointercapture",N,{signal:r}),I.addEventListener("pointerup",h=>{I.hasPointerCapture(h.pointerId)&&I.releasePointerCapture(h.pointerId)},{signal:r}),I.addEventListener("keydown",h=>{let T=h.key==="ArrowLeft"?d-2:h.key==="ArrowRight"?d+2:h.key==="Home"?30:h.key==="End"?75:null;T!==null&&(h.preventDefault(),x(T))},{signal:r});function _(h){if(l=h,b.classList.toggle("is-expanded",h),ct.dismiss(),P.element.hidden=h,I.hidden=h||L,c){let T=h?"\u9000\u51FA\u5168\u5C4F\u64AD\u653E":"\u5168\u5C4F\u64AD\u653E";c.title=h?`${T}\uFF08Esc\uFF09`:`${T}\uFF08\u5F53\u524D\u9875\u7B7E\uFF09`,c.setAttribute("aria-label",T),c.setAttribute("aria-pressed",String(h)),c.dataset.expanded=String(h)}o?.emit("resize"),h||P.refresh()}b.addEventListener("keydown",h=>{h.key==="Escape"&&l&&(h.preventDefault(),_(!1),c?.focus())},{signal:r}),r.addEventListener("abort",()=>{e.signal.removeEventListener("abort",i),o?.pause(),o?.destroy(),b.remove(),S.remove()},{once:!0});let B=0,et=e.onVisibilityChange(h=>{window.clearTimeout(B),h||(ct.dismiss(),B=window.setTimeout(()=>o?.pause(),800))});r.addEventListener("abort",()=>{window.clearTimeout(B),et.dispose()},{once:!0});function Z(h){o&&(o.notice.show=h)}function G(h,T=h){a&&(a.textContent=h,a.title=T,a.setAttribute("aria-label",T))}function at(h){if(!s)return;s.dataset.state=h;let T=h==="on"?"\u5B57\u5E55\u5DF2\u6253\u5F00":h==="off"?"\u5B57\u5E55\u5DF2\u5173\u95ED":"\u5B57\u5E55";s.title=T,s.setAttribute("aria-label",T),s.setAttribute("aria-disabled",h==="empty"?"true":"false")}async function dt(h){v=h,C&&await e.commands.execute(bn,h?{op:"put",key:C,value:h}:{op:"delete",key:C})}function Et(h,T,V,D=r,Y=!0){let U=m.catch(()=>{}).then(()=>Ft(h,T,V,D,Y));return m=U,U}async function Ft(h,T,V,D,Y){let U=new AbortController,F=AbortSignal.any([r,D,U.signal]);if(F.throwIfAborted(),!o)throw new Error("\u64AD\u653E\u5668\u8FD8\u6CA1\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u518D\u52A0\u8F7D\u5B57\u5E55\u3002");let X=o,nt=await e.resources.getUrl(h);F.throwIfAborted();let lt=await Co(nt,F);if(F.throwIfAborted(),!X.subtitle.textTrack)throw new Error("\u64AD\u653E\u5668\u8FD8\u6CA1\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u518D\u52A0\u8F7D\u5B57\u5E55\u3002");ct.dismiss();let rt=Lo(X,F);rt.catch(()=>{});try{if(!await X.subtitle.switch(nt,{type:T,encoding:lt,escape:!0}))throw new Error("\u64AD\u653E\u5668\u8FD8\u6CA1\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u518D\u52A0\u8F7D\u5B57\u5E55\u3002");let Bt=await rt;if(F.throwIfAborted(),!Bt.length||Bt.length>2e4)throw P.setCues([]),f="",X.subtitle.show=!1,at("empty"),Y?await dt(null).catch(()=>{}):v=null,new Error(Bt.length?"\u5B57\u5E55\u8D85\u8FC7 20,000 \u53E5\uFF0C\u8BF7\u62C6\u5206\u540E\u52A0\u8F7D\u3002":"\u6CA1\u6709\u8BFB\u5230\u6709\u6548\u5B57\u5E55\uFF0C\u8BF7\u68C0\u67E5\u5185\u5BB9\u540E\u91CD\u8BD5\u3002");P.setCues(Bt),P.update(X.currentTime,X.playing),f=h.name,X.subtitle.show=V,G(h.name,h.name),at(V?"on":"off");let Se={id:h.id,name:h.name,type:T,encoding:lt,show:V,...h.relativePath?{relativePath:h.relativePath}:{}};Y?await dt(Se).catch(()=>{}):v=Se}catch(Ct){throw r.aborted||(P.setCues([]),f="",v=null,X.subtitle.show=!1,G("\u52A0\u8F7D\u5B57\u5E55"),at("empty")),Ct}finally{U.abort()}}async function oe(){if(!(!o||p||g||r.aborted)){p=!0,G("\u6B63\u5728\u9009\u62E9\u2026");try{let[h]=await e.resources.pickFiles({filters:[{name:"\u5B57\u5E55",extensions:["srt","vtt","ass"]}],multiple:!1});if(r.throwIfAborted(),!h){G(f||"\u52A0\u8F7D\u5B57\u5E55",f||"\u52A0\u8F7D\u5B57\u5E55");return}let T=To(h.name);if(!T)throw new Error("\u8BF7\u9009\u62E9 SRT\u3001VTT \u6216 ASS \u5B57\u5E55\u3002");if(h.size>Ce)throw new Error("\u5B57\u5E55\u6587\u4EF6\u8D85\u8FC7 8 MiB\uFF0C\u8BF7\u62C6\u5206\u540E\u52A0\u8F7D\u3002");G("\u6B63\u5728\u52A0\u8F7D\u2026",h.name),await Et(h,T,!0)}catch(h){if(r.aborted||h instanceof DOMException&&h.name==="AbortError")return;let T=h instanceof Error?h.message:"\u5B57\u5E55\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002";Z(T),G(f||"\u52A0\u8F7D\u5B57\u5E55",f?`${f} \xB7 ${T}`:T)}finally{p=!1}}}function $(){if(!o||!f){Z("\u8BF7\u5148\u52A0\u8F7D\u5B57\u5E55\u3002");return}o.subtitle.show=!o.subtitle.show,at(o.subtitle.show?"on":"off"),v&&dt({...v,show:o.subtitle.show}).catch(()=>{})}async function E(){if(!o||!C||r.aborted)return;let h=So(await e.commands.execute(bn,{op:"get",key:C}));if(!(!h||r.aborted||f)){p=!0,G("\u6B63\u5728\u52A0\u8F7D\u2026",h.name);try{await Et(h,h.type,h.show)}catch(T){if(r.aborted||T instanceof DOMException&&T.name==="AbortError")return;let V=T instanceof Error?T.message:"\u4E0A\u6B21\u7684\u5B57\u5E55\u5DF2\u4E0D\u80FD\u8BFB\u53D6\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002";!V.includes("\u8FD8\u6CA1\u51C6\u5907\u597D")&&!V.includes("\u8D85\u65F6")&&await dt(null).catch(()=>{}),Z(V),G("\u52A0\u8F7D\u5B57\u5E55",V)}finally{p=!1}}}let z=e.resource;if(!z){W.hidden=!1,W.textContent="\u6CA1\u6709\u6536\u5230\u5A92\u4F53\u6587\u4EF6\u3002\u8BF7\u4ECE\u6587\u4EF6\u7684\u201C\u6253\u5F00\u65B9\u5F0F\u201D\u91CC\u7528 XTLaw\u64AD\u653E\u5668\u6253\u5F00\u3002";return}try{let h=await e.resources.getUrl(z);r.throwIfAborted(),o=new R({container:O,url:h,playbackRate:!0,aspectRatio:!L,setting:!0,pip:!L,subtitleOffset:!0,miniProgressBar:!L,flip:!L,fastForward:!0,lock:!L,airplay:!0,controls:[{name:"load-subtitle",position:"left",index:40,html:'<span class="art-subtitle-load">\u52A0\u8F7D\u5B57\u5E55</span>',mounted(D){a=D.querySelector(".art-subtitle-load")??D,G("\u52A0\u8F7D\u5B57\u5E55")},click(){oe()}},{name:"subtitle-toggle",position:"right",index:15,html:'<span class="art-subtitle-toggle">CC</span>',mounted(D){s=D.querySelector(".art-subtitle-toggle")??D,at("empty")},click(){$()}},{name:"page-expand",position:"right",index:100,html:'<button type="button" class="player-expand" aria-label="\u5168\u5C4F\u64AD\u653E" aria-pressed="false"><svg class="player-expand-enter" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg><svg class="player-expand-exit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h5V3m13 5h-5V3M8 21v-5H3m13 5v-5h5"/></svg></button>',mounted(D){c=D.querySelector(".player-expand")??void 0,_(!1)},click(){_(!l)}}]}),L&&(o.on("control",D=>{!D&&o&&(o.controls.show=!0)}),o.controls.show=!0);let T=()=>{o&&P.update(o.currentTime,o.playing)};o.on("video:timeupdate",T),o.on("video:seeked",T),o.on("video:play",T),o.on("video:pause",T),o.on("video:ended",T),o.on("subtitle",D=>{f&&at(D?"on":"off")});let V=E().catch(()=>{});if(typeof e.references?.onReveal=="function"){let D=e.references.onReveal(async(Y,U)=>{let F=cn(Y.locator,Y.text);if(!F)return!1;let X=++y;g=!0;let nt=AbortSignal.any([r,U]);try{if(await Mo(V,nt),p)return!1;let{data:lt,text:rt}=F;if(await Et(lt.subtitle,lt.subtitle.type,lt.subtitle.show,nt,!1),nt.throwIfAborted(),X!==y||!o)return!1;let Ct=P.locate({...lt,text:rt});return Ct?(o.pause(),_(!1),o.seek=Ct.start,P.update(Ct.start,!1),P.reveal(Ct),ct.dismiss(),!0):(Z("\u5F15\u7528\u539F\u6587\u4E0E\u5F53\u524D\u5B57\u5E55\u4E0D\u5339\u914D\uFF0C\u65E0\u6CD5\u5B9A\u4F4D\u3002"),!1)}catch{return nt.aborted||Z("\u65E0\u6CD5\u8BFB\u53D6\u5F15\u7528\u6240\u7528\u5B57\u5E55\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u5BF9\u5E94\u5B57\u5E55\u540E\u91CD\u8BD5\u3002"),!1}finally{X===y&&(g=!1)}});r.addEventListener("abort",()=>D.dispose(),{once:!0})}o.on("video:error",()=>{let D=o?.video.error?.code;W.hidden=!1,W.textContent=D===3||D===4?"\u5F53\u524D\u73AF\u5883\u4E0D\u80FD\u64AD\u653E\u8FD9\u4E2A\u7F16\u7801\uFF0C\u8BF7\u6362\u7528\u517C\u5BB9\u7684\u97F3\u89C6\u9891\u6587\u4EF6\u3002":"\u5A92\u4F53\u8BFB\u53D6\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u4ECD\u53EF\u8BBF\u95EE\u3002"})}catch{r.aborted||(W.hidden=!1,W.textContent="\u65E0\u6CD5\u6253\u5F00\u5A92\u4F53\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u88AB\u79FB\u52A8\u3001\u66FF\u6362\u6216\u64A4\u9500\u4E86\u6388\u6743\u3002")}}export{ti as render};
/*! Bundled license information:

artplayer/dist/artplayer.mjs:
  (*!
   * artplayer.js v5.4.0
   * Github: https://github.com/zhw2590582/ArtPlayer
   * (c) 2017-2026 Harvey Zhao
   * Released under the MIT License.
   *)
*/
