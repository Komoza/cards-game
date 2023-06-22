(()=>{"use strict";var n={61:(n,e,t)=>{t.d(e,{Z:()=>u});var A=t(537),i=t.n(A),a=t(645),r=t.n(a),o=t(667),c=t.n(o),s=new URL(t(976),t.b),l=new URL(t(803),t.b),d=r()(i()),f=c()(s),p=c()(l);d.push([n.id,`@font-face{font-family:StratosSkyeng;font-style:normal;font-weight:400;font-display:swap;src:url(${f}) format("woff2")}@font-face{font-family:StratosSkyeng;font-style:normal;font-weight:500;font-display:swap;src:url(${p}) format("woff2")}*{margin:0;padding:0;box-sizing:border-box;font-family:StratosSkyeng,sans-serif}li{list-style:none}.container{background:#004980;padding:20px;width:100vw;min-height:100vh;display:flex;flex-direction:column;align-items:center}.difficulty{margin:auto;background:#c2f5ff;padding:52px 69px;display:flex;flex-direction:column;align-items:center;border-radius:12px;gap:48px}.difficulty__text{width:208px;font-style:normal;font-weight:400;font-size:40px;line-height:48px;text-align:center;color:#004980}.difficulty__form{display:flex;flex-direction:column;align-items:center;gap:68px}.difficulty__value-wrap{display:flex;gap:26px}.difficulty__value{padding:13px 33px;background:#fff;border-radius:12px;border:2px solid #fff;font-style:normal;font-weight:400;font-size:64px;line-height:72px;color:#0080c1;cursor:pointer;transition:transform .3s}.difficulty__value-radio{display:none}.difficulty__value:hover{transform:scale(1.1)}.difficulty__value--active{border:2px solid #004980}.difficulty__start{width:246px;height:50px;background:#969696;border:0;border-radius:12px;font-style:normal;font-weight:400;font-size:24px;line-height:32px;color:#fff}.difficulty__start--active{background:#7ac100;cursor:pointer}.difficulty__start--active:hover{opacity:.7}.header{width:100%;margin:30px 0 46px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.new-game{width:246px;height:50px;background:#969696;border:0;border-radius:12px;font-style:normal;font-weight:400;font-size:24px;line-height:32px;color:#fff}.new-game--active{background:#7ac100;cursor:pointer}.new-game--active:hover{opacity:.7}.timer__text{padding-right:4px;display:flex;justify-content:end;gap:57px;font-style:normal;font-weight:400;font-size:16px;line-height:10px;color:#fff}.timer__counter{font-style:normal;font-weight:400;font-size:64px;line-height:72px;color:#fff}.game{max-width:1024px}.game__field{display:flex;flex-wrap:wrap;justify-content:center;gap:15px}.game__card{border-radius:4px;transition:transform .3s;cursor:pointer}.game__card:hover{transform:scale(1.1)}.end{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0,73,128,.9)}.end__wrap{display:flex;flex-direction:column;align-items:center;background-color:#c2f5ff;border-radius:12px;padding:40px 120px}.end__status{text-align:center;margin-top:4px;font-style:normal;font-weight:400;font-size:40px;line-height:48px;color:#004980}.end__time{margin-top:10px;font-style:normal;font-weight:400;font-size:64px;line-height:72px;color:#000}.end__time-text{margin-top:28px;font-style:normal;font-weight:400;font-size:24px;line-height:32px;color:#000}.end__again{margin-top:40px;width:246px;height:50px;background:#7ac100;border:0;border-radius:12px;font-style:normal;font-weight:400;font-size:24px;line-height:32px;color:#fff;cursor:pointer}.end__again:hover{opacity:.7}@media(width <= 768px){.container{padding:20px}.difficulty{padding:30px 16px}.difficulty__text{font-size:32px}.difficulty__value-wrap{gap:10px}.difficulty__value{padding:5px 30px;font-size:40px}.new-game{width:170px;height:40px;border-radius:8px;font-size:16px}.header{padding-left:20px;padding-right:20px;justify-content:center;gap:20px}.end__wrap{padding:20px 40px}}@media(width <= 375px){.difficulty__value-wrap{gap:10px}.difficulty__value{padding:0 20px;font-size:32px}.end__wrap{padding:20px}.end__status{font-size:32px}}`,"",{version:3,sources:["webpack://./src/styles/index.scss","webpack://./src/components/difficulty/_difficulty.scss","webpack://./src/components/game/_game.scss","webpack://./src/components/end-game/_end-game.scss","webpack://./src/styles/_adaptive.scss"],names:[],mappings:"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",sourcesContent:["@font-face {\n    font-family: StratosSkyeng;\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: url('../assets/fonts/stratosskyengweb-regular.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: StratosSkyeng;\n    font-style: normal;\n    font-weight: 500;\n    font-display: swap;\n    src: url('../assets/fonts/stratosskyengweb-medium.woff2') format('woff2');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: StratosSkyeng, sans-serif;\n}\n\nli {\n    list-style: none;\n}\n\n.container {\n    background: #004980;\n    padding: 20px;\n    width: 100vw;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n/* stylelint-disable */\n@import '../components/difficulty/difficulty';\n@import '../components/game/game';\n@import '../components/end-game/end-game';\n@import './adaptive';\n/* stylelint-enable */\n",".difficulty {\n    margin: auto;\n    background: #c2f5ff;\n    padding: 52px 69px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 12px;\n    gap: 48px;\n\n    &__text {\n        width: 208px;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 40px;\n        line-height: 48px;\n        text-align: center;\n        color: #004980;\n    }\n\n    &__form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 68px;\n    }\n\n    &__value-wrap {\n        display: flex;\n        gap: 26px;\n    }\n\n    &__value {\n        padding: 13px 33px;\n        background: #fff;\n        border-radius: 12px;\n        border: 2px solid #fff;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 64px;\n        line-height: 72px;\n        color: #0080c1;\n        cursor: pointer;\n        transition: transform 0.3s;\n\n        &-radio {\n            display: none;\n        }\n\n        &:hover {\n            transform: scale(1.1);\n        }\n\n        &--active {\n            border: 2px solid #004980;\n        }\n    }\n\n    &__start {\n        width: 246px;\n        height: 50px;\n        background: #969696;\n        border: 0;\n        border-radius: 12px;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 24px;\n        line-height: 32px;\n        color: #fff;\n\n        &--active {\n            background: #7ac100;\n            cursor: pointer;\n\n            &:hover {\n                opacity: 0.7;\n            }\n        }\n    }\n}\n",".header {\n    width: 100%;\n    margin: 30px 0 46px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.new-game {\n    width: 246px;\n    height: 50px;\n    background: #969696;\n    border: 0;\n    border-radius: 12px;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 32px;\n    color: #fff;\n\n    &--active {\n        background: #7ac100;\n        cursor: pointer;\n\n        &:hover {\n            opacity: 0.7;\n        }\n    }\n}\n\n.timer {\n    &__text {\n        padding-right: 4px;\n        display: flex;\n        justify-content: end;\n        gap: 57px;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 10px;\n        color: #fff;\n    }\n\n    &__counter {\n        font-style: normal;\n        font-weight: 400;\n        font-size: 64px;\n        line-height: 72px;\n        color: #fff;\n    }\n}\n\n.game {\n    max-width: 1024px;\n\n    &__field {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        gap: 15px;\n    }\n\n    &__card {\n        border-radius: 4px;\n        transition: transform 0.3s;\n        cursor: pointer;\n\n        &:hover {\n            transform: scale(1.1);\n        }\n    }\n}\n",".end {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(0 73 128 / 90%);\n\n    &__wrap {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: #c2f5ff;\n        border-radius: 12px;\n        padding: 40px 120px;\n    }\n\n    &__status {\n        text-align: center;\n        margin-top: 4px;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 40px;\n        line-height: 48px;\n        color: #004980;\n    }\n\n    &__time {\n        margin-top: 10px;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 64px;\n        line-height: 72px;\n        color: #000;\n\n        &-text {\n            margin-top: 28px;\n            font-style: normal;\n            font-weight: 400;\n            font-size: 24px;\n            line-height: 32px;\n            color: #000;\n        }\n    }\n\n    &__again {\n        margin-top: 40px;\n        width: 246px;\n        height: 50px;\n        background: #7ac100;\n        border: 0;\n        border-radius: 12px;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 24px;\n        line-height: 32px;\n        color: #fff;\n        cursor: pointer;\n\n        &:hover {\n            opacity: 0.7;\n        }\n    }\n}\n","/* tablet */\n@media (width <= 768px) {\n    .container {\n        padding: 20px;\n    }\n\n    /* difficulty */\n    .difficulty {\n        padding: 30px 16px;\n\n        &__text {\n            font-size: 32px;\n        }\n\n        &__value-wrap {\n            gap: 10px;\n        }\n\n        &__value {\n            padding: 5px 30px;\n            font-size: 40px;\n        }\n    }\n\n    /* game field */\n    .new-game {\n        width: 170px;\n        height: 40px;\n        border-radius: 8px;\n        font-size: 16px;\n    }\n\n    .header {\n        padding-left: 20px;\n        padding-right: 20px;\n        justify-content: center;\n        gap: 20px;\n    }\n\n    /* end game */\n    .end {\n        &__wrap {\n            padding: 20px 40px;\n        }\n    }\n}\n\n/* mobile */\n@media (width <= 375px) {\n    /* difficulty */\n    .difficulty {\n        &__value-wrap {\n            gap: 10px;\n        }\n\n        &__value {\n            padding: 0 20px;\n            font-size: 32px;\n        }\n    }\n\n    /* end game */\n    .end {\n        &__wrap {\n            padding: 20px;\n        }\n\n        &__status {\n            font-size: 32px;\n        }\n    }\n}\n"],sourceRoot:""}]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",A=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),A&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),A&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,A,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(A)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);A&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),a="/*# ".concat(i," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,A=0;A<e.length;A++)if(e[A].identifier===n){t=A;break}return t}function A(n,A){for(var a={},r=[],o=0;o<n.length;o++){var c=n[o],s=A.base?c[0]+A.base:c[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var f=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var u=i(p,A);A.byIndex=o,e.splice(o,0,{identifier:d,updater:u,references:1})}r.push(d)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=A(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var o=t(a[r]);e[o].references--}for(var c=A(n,i),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var A=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var A="";t.supports&&(A+="@supports (".concat(t.supports,") {")),t.media&&(A+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(A+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),A+=t.css,i&&(A+="}"),t.media&&(A+="}"),t.supports&&(A+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(A,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},803:(n,e,t)=>{n.exports=t.p+"df607770dd56217f1c94.woff2"},976:(n,e,t)=>{n.exports=t.p+"ce93393e831d32412096.woff2"}},e={};function t(A){var i=e[A];if(void 0!==i)return i.exports;var a=e[A]={id:A,exports:{}};return n[A](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var A in e)t.o(e,A)&&!t.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:e[A]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0;var A={};(()=>{t.d(A,{I:()=>k});var n=0,e=document.getElementById("root"),i=function(n,t){if(e){e.innerHTML+='\n        <div class="end">\n            <div class="end__wrap">\n                <img class="end__image" src="./images/'.concat(n?"win":"lose",'-game.png" alt="').concat(n?"win":"lose",' game">\n                <p class="end__status">').concat(n?"Вы выиграли!":"Вы проиграли!",'</p>\n                <p class="end__time-text">Затраченое время</p>\n                <p class="end__time">').concat(t.min,".").concat(t.sec,'</p>\n                <button class="end__again">Играть снова</button>\n            </div>\n        </div>\n    ');var A=document.querySelector(".end__again");null==A||A.addEventListener("click",(function(){k("Difficulty")}))}},a=[],r=function(n){switch(n){case 1:return"spades";case 2:return"hearts";case 3:return"diamonds";case 4:return"clubs";default:return"error"}},o=function(n){switch(n){case 6:return"six";case 7:return"seven";case 8:return"eight";case 9:return"nine";case 10:return"ten";case 11:return"jack";case 12:return"queen";case 13:return"king";case 14:return"ace";default:return"error"}},c=function(){var n={value:"",nod:null},e={value:"",nod:null},t=document.querySelector(".new-game");t&&(t.classList.add("new-game--active"),t.addEventListener("click",(function(){k("Difficulty")})));var A=document.querySelector(".timer__counter--min"),a=document.querySelector(".timer__counter--sec"),r="",o="";setInterval((function(){a&&A&&(r=(Number(a.innerHTML)+1).toString(),Number(r)<60?a.innerHTML=Number(r)<10?"0"+r:r:(o=(Number(A.innerHTML)+1).toString(),A.innerHTML=Number(o)<10?"0"+o:o,a.innerHTML="00"))}),1e3),document.querySelectorAll(".game__card").forEach((function(t){t.addEventListener("click",(function(){var A,a=t;"open"!==a.dataset.status&&(a.setAttribute("src","./images/card/".concat(a.dataset.value,".jpg")),n.value?(e.value=a.dataset.value,e.nod=a,function(n,e){var t,A,a=document.querySelector(".timer__counter--min"),r=document.querySelector(".timer__counter--sec"),o=null==a?void 0:a.innerHTML,c=null==r?void 0:r.innerHTML;o&&c&&(n.value!==e.value?i(!1,{min:o,sec:c}):(null===(t=n.nod)||void 0===t||t.setAttribute("data-status","open"),null===(A=e.nod)||void 0===A||A.setAttribute("data-status","open"),function(){for(var n=0,e=Array.from(document.querySelectorAll(".game__card"));n<e.length;n++)if("open"!==e[n].dataset.status)return!1;return!0}()?i(!0,{min:o,sec:c}):(n.value="",n.nod=null,e.value="",e.nod=null)))}(n,e)):(n.value=a.dataset.value,n.nod=a,null===(A=n.nod)||void 0===A||A.setAttribute("data-status","open")))}))}))},s=function(n,e){var t="",A="";n>72&&(n=72);for(var i=0;i<n/2;i++){do{t=o(Math.floor(9*Math.random())+6),A=r(Math.floor(4*Math.random())+1)}while(e.includes('<img data-value="'.concat(t,"-of-").concat(A,'" class="game__card" src="./images/card/').concat(t,"-of-").concat(A,'.jpg" alt="card"/>')));var a='<img data-value="'.concat(t,"-of-").concat(A,'" class="game__card" src="./images/card/').concat(t,"-of-").concat(A,'.jpg" alt="card"/>'),c=Math.floor(Math.random()*n),s=!1;do{e[c]?c===n-1?c=0:c++:(e[c]=a,s=!0)}while(!s);c=Math.floor(Math.random()*n),s=!1;do{e[c]?c===n-1?c=0:c++:(e[c]=a,s=!0)}while(!s)}setTimeout((function(){document.querySelectorAll(".game__card").forEach((function(n){n.setAttribute("src","./images/card/dealer-shirt.jpg")}))}),5e3)},l=t(379),d=t.n(l),f=t(795),p=t.n(f),u=t(569),C=t.n(u),g=t(565),m=t.n(g),x=t(216),h=t.n(x),y=t(589),_=t.n(y),v=t(61),w={};w.styleTagTransform=_(),w.setAttributes=m(),w.insert=C().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=h(),d()(v.Z,w),v.Z&&v.Z.locals&&v.Z.locals;var b=document.getElementById("root"),B="Difficulty",k=function(n){B=n,I()},I=function(){switch(B){case"Difficulty":b&&function(e){n=0,e&&(e.innerHTML='\n  <div class="container">\n    <div class="difficulty">\n      <h2 class="difficulty__text">Выбери сложность</h2>\n      <form class="difficulty__form">\n        <div class="difficulty__value-wrap">\n          <label class="difficulty__value">\n            <input class="difficulty__value-radio" type="radio" name="difficulty" value="1">\n            <span>1</span>\n          </label>\n          <label class="difficulty__value">\n            <input class="difficulty__value-radio" type="radio" name="difficulty" value="2">\n            <span>2</span>\n          </label>\n          <label class="difficulty__value">\n            <input class="difficulty__value-radio" type="radio" name="difficulty" value="3">\n            <span>3</span>\n          </label>\n        </div>\n        <button type="submit" class="difficulty__start">Старт</button>\n      </form>\n      </div>\n  </div>\n');var t=document.querySelector(".difficulty__form");t&&t.addEventListener("submit",(function(e){e.preventDefault();for(var t=0,A=Array.from(document.querySelectorAll('.difficulty__value input[type="radio"]'));t<A.length;t++){var i=A[t];if(i.checked){n=Number(i.value),k("Game");break}}n||alert("выберите сложность")}));var A=document.querySelectorAll(".difficulty__value"),i=document.querySelector(".difficulty__start");A.forEach((function(n){n.addEventListener("click",(function(){var e;null==i||i.classList.add("new-game--active"),null===(e=document.querySelector(".difficulty__value--active"))||void 0===e||e.classList.remove("difficulty__value--active"),n.classList.add("difficulty__value--active")}))}))}(b);break;case"Game":b&&function(e){switch(a=[],n){case 1:s(6,a);break;case 2:s(12,a);break;case 3:s(18,a)}e.innerHTML='\n    <div class="container">\n        <div class="game">\n            <div class="header">\n                <div class="timer">\n                    <div class="timer__text">\n                        <div class="timer__text-min">min</div>\n                        <div class="timer__text-sec">sec</div>\n                    </div>\n                    <div class="timer__counter">\n                    <span class="timer__counter--min">00</span>.<span class="timer__counter--sec">00</span></div>\n                </div>\n                <button class="new-game">Начать заново</button>\n            </div>\n\n            <main class="game-wrap">\n                <div class="game__field">\n                    '.concat(a.map((function(n){return n})).join(""),"\n                </div>\n            </main>\n        </div>\n    </div>\n  "),setTimeout(c,5e3)}(b);break;default:console.log("404")}};I()})()})();