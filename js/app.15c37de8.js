(function(t){function e(e){for(var o,i,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-a149f640":"525c68db"}[t]+".js"}var s={};var u={ffad:function(){return{"./miner_back_bg.js":{__wbg_alert_235ea9c6c45851b8:function(t,e){return o["16de"].exports["d"](t,e)},__wbg_random_7b8246250fd79f60:function(){return o["16de"].exports["e"]()},__wbindgen_throw:function(t,e){return o["16de"].exports["f"](t,e)}}}}};function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}var p={"chunk-a149f640":["ffad"]}[t]||[];return p.forEach((function(t){var n=s[t];if(n)e.push(n);else{var o,r=u[t](),a=fetch(c.p+""+{ffad:"2d0ab8ab25a8aaea3435"}[t]+".module.wasm");if(r instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)o=Promise.all([WebAssembly.compileStreaming(a),r]).then((function(t){return WebAssembly.instantiate(t[0],t[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)o=WebAssembly.instantiateStreaming(a,r);else{var i=a.then((function(t){return t.arrayBuffer()}));o=i.then((function(t){return WebAssembly.instantiate(t,r)}))}e.push(s[t]=o.then((function(e){return c.w[t]=(e.instance||e).exports})))}})),Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/games/mine-sweeper/",c.oe=function(t){throw console.error(t),t},c.w={};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"072e":function(t,e,n){t.exports=n.p+"img/oops1.169b628d.png"},"074d":function(t,e,n){t.exports=n.p+"img/oops2.8b74a990.png"},"0b60":function(t,e,n){var o={"./dead0.png":"8b39","./dead1.png":"dd72","./dead2.png":"85ea","./dead3.png":"82a9","./grin0.png":"bee2","./grin1.png":"db1d","./grin2.png":"65e5","./grin3.png":"826b","./oops0.png":"2251","./oops1.png":"072e","./oops2.png":"074d","./oops3.png":"5c6b","./win.png":"6ebc"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="0b60"},2251:function(t,e,n){t.exports=n.p+"img/oops0.8ec664b1.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("3ca3"),n("ddb0");var o=n("2b0e"),r=n("5f5b"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("div",{staticClass:"container"},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"},on:{click:function(e){return t.mmm()}}},[t._v(" Avoid the bombs! ")])],1)],1)]),n("div",[n("GameBoard")],1)],1)},i=[],s=function(){var t=this,e=this,o=e.$createElement,r=e._self._c||o;return r("div",[r("div",{attrs:{id:"container"}},[r("div",{staticClass:"buttonPressed",attrs:{id:"scoreContainer"}},[r("div",{attrs:{id:"flag"}},[r("span",{staticClass:"buttonPressed",attrs:{id:"flagIndicator"}},[e._v(e._s(this.flagStr))])]),r("div",{staticClass:"buttonNormal",attrs:{id:"face"},on:{mousedown:function(t){return e.buttonPress(t)},mouseup:function(n){e.buttonRelease(n),e.getFace(0),e.init(t.row,t.col,t.bombPercentage)},mouseleave:function(t){return e.buttonRelease(t)}}},[r("img",{staticClass:"faceImg",attrs:{src:n("0b60")("./"+e.faceType+".png")}})])]),r("div",{attrs:{id:"tableContainer"}},[r("table",{staticClass:"buttonPressed",attrs:{id:"table",oncontextmenu:"return false;"}},[r("tbody",{attrs:{id:"tableBody"}},e._l(e.rowIndex,(function(t){return r("tr",{key:t},e._l(e.colIndex,(function(n){return r("td",{key:n,staticClass:"buttonNormal cellFixed",on:{mousedown:function(t){e.buttonPress(t),e.getFace(1)},mouseup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"left",37,o.key,["Left","ArrowLeft"])||"button"in o&&0!==o.button?null:function(o){e.uncoverWrap(t,n),e.buttonRelease(o),e.getFace(0),o.target.classList.add("noClick")}(o)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"right",39,o.key,["Right","ArrowRight"])||"button"in o&&2!==o.button?null:function(o){e.toggleFlag(t,n,o)}(o)}],mouseout:function(t){e.buttonRelease(t)}}})})),0)})),0)])])]),r("div",{attrs:{id:"optionTab"}},[r("div",{attrs:{id:"optionContent"}},[e._v("#Rows:")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.rowInput,expression:"rowInput",modifiers:{lazy:!0}}],staticClass:"optionInput",attrs:{placeholder:"16"},domProps:{value:e.rowInput},on:{change:function(t){e.rowInput=t.target.value}}}),r("div",{attrs:{id:"optionContent"}},[e._v("#Columns:")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.colInput,expression:"colInput",modifiers:{lazy:!0}}],staticClass:"optionInput",attrs:{placeholder:"16"},domProps:{value:e.colInput},on:{change:function(t){e.colInput=t.target.value}}}),r("div",{attrs:{id:"optionContent"}},[e._v("%Bombs:")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.bombPercentageInput,expression:"bombPercentageInput",modifiers:{lazy:!0}}],staticClass:"optionInput",attrs:{placeholder:"0-1"},domProps:{value:e.bombPercentageInput},on:{change:function(t){e.bombPercentageInput=t.target.value}}}),r("div",{staticClass:"optionButton buttonNormal",on:{mousedown:function(t){return e.buttonPress(t)},mouseup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:function(t){e.buttonRelease(t),e.updateInit()}(t)}}},[e._v(" customize ")]),r("div",{staticClass:"optionButton buttonNormal",on:{mousedown:function(t){return e.buttonPress(t)},mouseup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:function(t){e.buttonRelease(t),e.updateInit()}(t)}}},[e._v(" beginner ")]),r("div",{staticClass:"optionButton buttonNormal",on:{mousedown:function(t){return e.buttonPress(t)},mouseup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:function(t){e.buttonRelease(t),e.updateInit()}(t)}}},[e._v(" intermediate ")]),r("div",{staticClass:"optionButton buttonNormal",on:{mousedown:function(t){return e.buttonPress(t)},mouseup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:function(t){e.buttonRelease(t),e.updateInit()}(t)}}},[e._v(" master ")])]),e._m(0)])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"option"}},[n("div",[t._v("options")])])}],c=(n("a630"),n("fb6a"),n("890b")),l=n.n(c);o["default"].use(l.a);var d={name:"GameBoard",data:function(){return{row:16,col:16,rowIndex:Array.from(Array(16).keys()),colIndex:Array.from(Array(16).keys()),bombPercentage:.15,board:this.$minerBack.Board.new(16,16,.15),faceType:"grin0",rowInput:null,colInput:null,bombPercentageInput:null,flagStr:"0038"}},methods:{boom:function(){document.getElementById("tableBody").classList.add("noClick");for(var t=0;t<this.row;t++)for(var e=0;e<this.col;e++){var n=this.board.uncover(t,e);if(-1==n){var o=document.getElementById("tableBody").rows[t].cells[e];o.classList.contains("flagged")?(o.classList.remove("flagged"),o.classList.add("boom2","uncovered")):o.classList.add("boom","uncovered")}}},buttonPress:function(t){t.target.classList.add("buttonPressed")},buttonRelease:function(t){t.target.classList.remove("buttonPressed")},clearStyle:function(){for(var t=0;t<this.row;t++)for(var e=0;e<this.col;e++){var n=document.getElementById("tableBody").rows[t].cells[e];n.classList.remove("boom","uncovered","boomRed","flagged","bomb0","bomb1","bomb2","bomb3","bomb4","bomb5","bomb6","bomb7","bomb8","noClick","boom2"),n.classList.add("bomb0")}document.getElementById("tableBody").classList.remove("noClick")},getFace:function(t){var e=this.board.get_state(),n=Math.floor(4*Math.random());if(e!=this.$minerBack.GameState.Dead)return e==this.$minerBack.GameState.Won?(this.faceType="win",document.getElementById("tableBody").classList.add("noClick"),void this.$confetti.start()):void(this.faceType=1!=t?"grin"+n:"oops"+n);this.faceType="dead"+n},init:function(t,e,n){this.$confetti.stop(),this.rowIndex=Array.from(Array(parseInt(t)).keys()),this.colIndex=Array.from(Array(parseInt(e)).keys()),console.log(this.colIndex),this.board=this.$minerBack.Board.new(t,e,n),console.log(this.board.get_flagcnt()),this.clearStyle(),this.updateFlagCnt(),this.getFace(0)},toggleFlag:function(t,e,n){var o=this.board.toggle_flag(t,e);o==this.$minerBack.CellState.Flagged?(console.log("ok"),n.target.classList.add("flagged")):o==this.$minerBack.CellState.Covered&&n.target.classList.remove("flagged"),this.updateFlagCnt()},uncover:function(t,e){var n=this.board.uncover(t,e),o=document.getElementById("tableBody").rows[t].cells[e];return n>=0?o.classList.add("bomb".concat(n),"uncovered"):-1==n&&(o.classList.add("boom","uncovered","boomRed"),this.boom()),n},uncoverWrap:function(t,e){console.log("uncoverWrap: ",t," ",e);var n=this.uncover(t,e);if(-2!=n&&-1!=n){if(0==n)for(var o=Math.max(t-1,0);o<=Math.min(t+1,this.row-1);o++)for(var r=Math.max(e-1,0);r<=Math.min(e+1,this.col-1);r++)o==t&&r==e||this.uncoverWrap(o,r);this.board.get_state()==this.$minerBack.Board.Won&&(this.faceType="win",document.getElementById("tableBody").classList.add("noClick"),this.$confetti.start())}},updateFlagCnt:function(){var t=this.board.get_flagcnt();this.flagStr=("000"+t).slice(-4)},updateInit:function(){var t=parseInt(this.rowInput,10),e=parseInt(this.colInput,10),n=parseFloat(this.bombPercentageInput);if(isNaN(t)||isNaN(e)||isNaN(n))alert("Please check your inputs.");else if(n<0||n>1)alert("%Bombs: enter a number in range [0, 1].");else{this.clearStyle(),this.row=t,this.col=e,this.bombPercentage=n;var o=25*e,r=25*t;document.getElementById("tableContainer").style.width="".concat(o,"px"),document.getElementById("tableContainer").style.height="".concat(r,"px"),o+=40,r+=100,document.getElementById("container").style.width="".concat(o,"px"),document.getElementById("container").style.height="".concat(r,"px"),this.getFace(0),this.init(t,e,n)}}}},f=d,p=(n("6e33"),n("2877")),m=Object(p["a"])(f,s,u,!1,null,null,null),b=m.exports,g=n("9224"),v={name:"App",components:{GameBoard:b},data:function(){return{name:g["a"],version:g["b"]}},methods:{mmm:function(){this.$minerBack.greet();var t=this.$minerBack.Board.new();console.log(t)}}},h=v,y=(n("034f"),Object(p["a"])(h,a,i,!1,null,null,null)),w=y.exports;n("f9e3"),n("2dd8");n.e("chunk-a149f640").then(n.bind(null,"938b")).then((function(t){o["default"].prototype.$minerBack=t,o["default"].use(r["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(w)}}).$mount("#app")}))},"5c6b":function(t,e,n){t.exports=n.p+"img/oops3.5346326a.png"},"65e5":function(t,e,n){t.exports=n.p+"img/grin2.b6670cba.png"},"6e33":function(t,e,n){"use strict";n("993c")},"6ebc":function(t,e,n){t.exports=n.p+"img/win.d9716a2b.png"},"826b":function(t,e,n){t.exports=n.p+"img/grin3.1140a190.png"},"82a9":function(t,e,n){t.exports=n.p+"img/dead3.e8cd5c92.png"},"85ea":function(t,e,n){t.exports=n.p+"img/dead2.bf1203f7.png"},"85ec":function(t,e,n){},"8b39":function(t,e,n){t.exports=n.p+"img/dead0.ae002147.png"},9224:function(t){t.exports=JSON.parse('{"a":"miner-front","b":"0.1.0"}')},"993c":function(t,e,n){},bee2:function(t,e,n){t.exports=n.p+"img/grin0.fa0cee2e.png"},db1d:function(t,e,n){t.exports=n.p+"img/grin1.4ec3f98c.png"},dd72:function(t,e,n){t.exports=n.p+"img/dead1.4c990cd3.png"}});
//# sourceMappingURL=app.15c37de8.js.map