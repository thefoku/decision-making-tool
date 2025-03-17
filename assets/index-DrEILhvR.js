(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();class O{constructor(){this.header=document.createElement("header");const t=document.createElement("h1");t.innerText="Decision Making Tool",this.header.append(t)}appendTo(t){t.appendChild(this.header)}getElement(){return this.header}}class k{constructor(){this.main=document.createElement("main"),this.main.classList.add("main")}appendTo(t){t.appendChild(this.main)}append(t){this.main.appendChild(t)}}class U{constructor(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("main__wrapper"),this.wrapperMenu=document.createElement("div"),this.wrapperMenu.classList.add("main__menu-wrapper"),this.wrapper.append(this.wrapperMenu)}appendTo(t){t.appendChild(this.wrapper)}append(t){this.wrapper.appendChild(t)}appendToMenu(t){this.wrapperMenu.appendChild(t)}getElement(){return this.wrapper}}function y(i){const t=i.map(e=>{const s=e.textInputElement.id.split("-")[1],n=e.textInputElement.value,o=parseFloat(e.numberInputElement.value);return{id:s,title:n,weight:o}});return localStorage.setItem("options-list",JSON.stringify(t)),t}function v(){const i=localStorage.getItem("options-list");if(i)return JSON.parse(i)}const D=""+new URL("click-DRE_h4JL.wav",import.meta.url).href,F=""+new URL("win1-C-QfgZqh.mov",import.meta.url).href;class R{constructor(t){this.sound=new Audio(t)}play(){this.isEnabled()&&this.sound.play()}isEnabled(){let t=localStorage.getItem("sound");return!t||t==="true"}}const $=new R(F),b=new R(D),a=class a{constructor(){this.liElement=document.createElement("li"),this.labelElement=document.createElement("label"),this.textInputElement=document.createElement("input"),this.numberInputElement=document.createElement("input"),this.deleteButtonElement=document.createElement("button"),this.liElement.classList.add("main__options-item");const t=v();t&&t.length>0&&t.length>a.options.length&&(a.index=parseInt(t[a.options.length].id)-1),a.index+=1,this.labelElement.setAttribute("for",`option-${a.index}`),this.labelElement.textContent=`#${a.index}`,this.textInputElement.id=`option-${a.index}`,this.textInputElement.type="text",this.textInputElement.classList.add("text-input"),this.textInputElement.placeholder="Title",this.numberInputElement.type="number",this.numberInputElement.classList.add("number-input"),this.numberInputElement.placeholder="Weight",this.numberInputElement.min="0",this.deleteButtonElement.textContent="Delete",this.liElement.appendChild(this.labelElement),this.liElement.appendChild(this.textInputElement),this.liElement.appendChild(this.numberInputElement),this.liElement.appendChild(this.deleteButtonElement),this.deleteButtonElement.addEventListener("click",()=>{var s,n;if(b.play(),this.liElement.remove(),a.options.indexOf(this)===a.options.length-1){let o;this.labelElement&&(o=(n=(s=a.options[a.options.length-2])==null?void 0:s.labelElement)==null?void 0:n.innerText.split("#")[1],a.index=parseInt(o)||0)}a.options.splice(a.options.indexOf(this),1),y(a.options)})}getElement(){return this.liElement}appendTo(t){t.appendChild(this.liElement)}setTitleAndWeight(t,e,s){s?this.labelElement.textContent=`#${s}`:this.labelElement.textContent=`#${a.index}`,this.textInputElement.value=t||"",this.numberInputElement.value=e==null?void 0:e.toString()}static createList(t){for(let e of t){const s=new a;s.setTitleAndWeight(e.title,e.weight,e.id),s.appendTo(m.getElement()),a.options.push(s)}}static getIndex(){return a.index}};a.options=[],a.index=0;let d=a;class H{constructor(){this.div=document.createElement("div"),this.div.classList.add("modal"),this.div.classList.add("hidden"),this.span=document.createElement("span"),this.div.append(this.span),this.line=document.createElement("div"),this.line.classList.add("modal-line"),this.div.append(this.line)}append(t){this.div.append(t)}showWithText(t){this.span.innerText=t,h.getModal().classList.remove("hidden");let e=100;const s=setInterval(()=>{e-=10,h.getLine().style.width=`${e}%`,e<0&&(clearInterval(s),h.getModal().classList.add("hidden"),h.getLine().style.width="100%")},300)}getModal(){return this.div}getLine(){return this.line}}const h=new H;class j{constructor(){this.ul=document.createElement("ul"),this.ul.classList.add("main__options-list")}appendTo(t){t.append(this.ul)}getElement(){return this.ul}removeChild(){const t=this.ul.childNodes;for(let e of t)setTimeout(()=>{this.ul.removeChild(e)},0)}}class p{constructor(t,e,s){this.element=document.createElement("button"),this.element.setAttribute("id",t),this.element.innerText=e,this.element.addEventListener("click",s)}appendTo(t){t.appendChild(this.element)}innerText(t){this.element.innerText=t}getElement(){return this.element}setClass(t){this.element.classList.add(t)}setAttribute(t,e){this.element.setAttribute(t,e)}}class N{constructor(t,e,s,n){this.button=document.createElement("button"),this.button.setAttribute("id",t),this.button.addEventListener("click",e),this.image=document.createElement("img"),this.image.src=s,this.image.alt=n??"",this.image.width=30,this.image.height=30,this.button.append(this.image)}appendTo(t){t.appendChild(this.button)}getElement(){return this.button}getImageUrl(){return this.image.src}setImageUrl(t){this.image.src=t}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}}const Y=""+new URL("sound-4TO1uW0K.png",import.meta.url).href,q=""+new URL("soundOn-CMi0u_tW.png",import.meta.url).href,J=""+new URL("undo-DKYIcWbg.png",import.meta.url).href,u=[{id:"addOptionBtn",text:"Add Option"},{id:"pasteListBtn",text:"Paste List"},{id:"clearListBtn",text:"Clear List"},{id:"saveListBtn",text:"Save List to File"},{id:"loadListBtn",text:"Load List from File"},{id:"startBtn",text:"Start"}],E=[{id:"backBtn",imageUrl:J,imageAlt:"Back"},{id:"soundBtn",imageUrl:q,imageAlt:"Sound"},{id:"soundBtn",imageUrl:Y,imageAlt:"Sound"}],z=""+new URL("timer-D5zvtUB9.png",import.meta.url).href;class V{constructor(){this.label=document.createElement("label"),this.label.setAttribute("for","timer"),this.image=document.createElement("img"),this.image.src=z,this.image.alt="Timer",this.image.width=30,this.image.height=30,this.label.append(this.image),this.input=document.createElement("input"),this.input.type="number",this.input.name="timer",this.input.id="timer",this.input.classList.add("timer-input"),this.input.min="5",this.input.max="30",this.input.value="10"}appendInputTo(t){t.appendChild(this.input)}appendLabelTo(t){t.appendChild(this.label)}getInput(){return this.input}getLabel(){return this.label}disable(){this.input.disabled=!0,this.label.classList.add("disabled")}enable(){this.input.disabled=!1,this.label.classList.remove("disabled")}}const L=new V;class X{constructor(){this.div=document.createElement("div"),this.div.classList.add("wheel-start"),this.button=document.createElement("button"),this.button.id="startWheelBtn",this.button.classList.add("startWheelBtn"),this.button.innerText="Start",this.button.addEventListener("click",pt),this.div.append(this.button)}getElement(){return this.div}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}}const C=new X;class K{constructor(){this.div=document.createElement("div"),this.div.classList.add("wheel-text-menu"),this.span=document.createElement("span"),this.span.textContent="Click Start Button",this.div.append(this.span)}append(t){this.div.append(t)}getElement(){return this.div}highlight(){this.div.classList.add("highlight")}deHighlight(){this.div.classList.remove("highlight")}setText(t){this.span.innerText=t}getText(){return this.span.textContent}}const w=new K;class G{constructor(t=[]){this.isColorsUpdated=!1,this.totalWeight=0,this.colors=[],this.isSpinning=!1,this.canvas=document.createElement("canvas"),this.canvas.width=600,this.canvas.height=600,this.canvas.id="canvas",this.ctx=this.canvas.getContext("2d"),this.isColorsUpdated=!1,this.sections=t,this.rotation=0,this.arrowAngle=Math.PI/2,this.draw()}draw(){this.isSpinning&&(this.getTextAtArrowPosition().length>15?w.setText(this.getTextAtArrowPosition().slice(0,15)+"..."):w.setText(this.getTextAtArrowPosition())),this.isColorsUpdated||this.updateSections();const t=this.canvas.width/2,e=this.canvas.height/2,s=Math.min(t,e)-10;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let n=this.rotation;this.sections&&this.sections.forEach((o,l)=>{const r=o.weight/this.totalWeight*2*Math.PI;this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.arc(t,e,s,n,n+r),this.ctx.closePath(),this.ctx.fillStyle=this.colors[l].color,this.ctx.fill(),this.ctx.strokeStyle="white",this.ctx.lineWidth=2,this.ctx.stroke(),this.ctx.closePath(),n+=r}),this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.arc(t,e,20,0,Math.PI*2),this.ctx.closePath(),this.ctx.fillStyle="#9370DB",this.ctx.strokeStyle="white",this.ctx.lineWidth=5,this.ctx.stroke(),this.ctx.fill(),n=this.rotation,this.sections&&this.sections.forEach((o,l)=>{const r=o.weight/this.totalWeight*2*Math.PI;if(!(r<=.2)){if(this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(n+r/2),this.ctx.strokeStyle="black",this.ctx.fillStyle="white",this.ctx.font="24px Arial",this.ctx.textAlign="center",o.title.length>15){const c=o.title.slice(0,15)+"...";this.ctx.strokeText(c,s/2,5),this.ctx.fillText(c,s/2,5)}else this.ctx.strokeText(o.title,s/2,5),this.ctx.fillText(o.title,s/2,5);this.ctx.closePath()}this.ctx.restore(),n+=r}),this.ctx.strokeStyle="white",this.ctx.fillStyle="#c95dc9",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.shadowColor="rgba(0, 0, 0, 0.5)",this.ctx.shadowBlur=5,this.ctx.shadowOffsetX=3,this.ctx.shadowOffsetY=3,this.ctx.moveTo(t,e/6),this.ctx.lineTo(t-20,1),this.ctx.lineTo(t,10),this.ctx.lineTo(t+20,1),this.ctx.lineTo(t,e/6),this.ctx.fill(),this.ctx.stroke()}spin(t){this.isSpinning=!0;const e=Date.now(),s=e+t*1e3,n=this.rotation,o=Math.random()*100*Math.PI,l=setInterval(()=>{const r=Date.now();if(r>=s){clearInterval(l),this.rotation=n+o,this.draw(),this.enableMenu(),this.isSpinning=!1,h.showWithText(`Your value: ${w.getText()}`),w.highlight(),$.play();return}const c=(r-e)/(t*1e3),I=(x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2)(c);this.rotation=n+o*I,this.draw(),this.disableMenu()},16)}updateSections(){this.sections=v(),this.sections&&(this.totalWeight=this.sections.reduce((e,s)=>e+s.weight,0));const t=this.sections;t&&(this.colors=this.generateRandomColor(t.length)),this.isColorsUpdated=!0}generateRandomColor(t){const e=()=>{const n="0123456789ABCDEF";let o="#";for(let l=0;l<6;l++)o+=n[Math.floor(Math.random()*16)];return o},s=[];for(let n=0;n<t;n++)s.push({color:e()});return s}getTextAtArrowPosition(){const t=this.canvas.width/2,e=this.canvas.height/2,s=t,n=e/4,o=s-t,l=n-e,r=Math.atan2(l,o),c=r<0?r+2*Math.PI:r;let f=this.rotation;for(const I of this.sections){const x=I.weight/this.totalWeight*2*Math.PI,W=f+x,B=f%(2*Math.PI),M=W%(2*Math.PI);if(B<=M&&c>=B&&c<=M||B>M&&(c>=B||c<=M))return I.title;f=W}return null}disableMenu(){C.disable(),L.disable(),P.disable(),g.disable()}enableMenu(){C.enable(),L.enable(),P.enable(),g.enable()}getElement(){return this.canvas}}function Q(){const i=g.getImageUrl().split("/");i[i.length-1]==="soundOn.png"?(localStorage.setItem("sound","false"),g.setImageUrl("./src/assets/imgs/soundOff.png")):(localStorage.setItem("sound","true"),g.setImageUrl("./src/assets/imgs/soundOn.png"))}function Z(){let i=localStorage.getItem("sound");!i||i==="true"?g.setImageUrl("./src/assets/imgs/soundOn.png"):g.setImageUrl("./src/assets/imgs/soundOff.png")}const _=v(),T=new G(_);class tt{constructor(){document.body.remove(),document.body=document.createElement("body")}render(){document.body.remove(),document.body=document.createElement("body");const t=document.createElement("link");t.rel="stylesheet",t.href="./src/assets/styles/wheel-style.css",document.head.append(t);const e=new O,s=new k,n=new U;T.draw(),n.appendToMenu(P.getElement()),n.appendToMenu(g.getElement()),n.appendToMenu(L.getLabel()),n.appendToMenu(L.getInput()),Z(),n.append(C.getElement()),n.append(w.getElement()),n.append(T.getElement()),s.append(n.getElement()),e.appendTo(document.body),s.appendTo(document.body),document.body.append(h.getModal())}}function et(){h.getModal().classList.remove("hidden"),h.showWithText("Please, add at least 2 options.")}function nt(){h.getModal().classList.remove("hidden"),h.showWithText("Please, fulfill options Title and Weight.")}function st(i){return i.filter(e=>e.textInputElement.value===""||e.numberInputElement.value==="").length>0}function it(i){const t=i.split(`
`),e=[];for(const s of t){const n=s.trim();if(!n)continue;const o=n.lastIndexOf(","),l=n.slice(0,o),r=parseInt(n.slice(o+1,n.length));if(isNaN(r)){h.showWithText("Please, enter correct weight value.");continue}e.push({title:l,weight:r})}return e}class ot{constructor(){this.dialog=document.createElement("dialog"),this.dialog.classList.add("paste-list-dialog"),this.dialog.addEventListener("click",t=>{t.target===this.dialog&&this.hidePasteListModal()}),this.divContainer=document.createElement("div"),this.divContainer.classList.add("paste-list-container"),this.form=document.createElement("form"),this.form.addEventListener("submit",t=>t.preventDefault()),this.form.classList.add("paste-list-container"),this.divTextarea=document.createElement("div"),this.divButtons=document.createElement("div"),this.divButtons.classList.add("paste-list-buttons-container"),this.confirmButton=new p("confirmBtn","Confirm",()=>ft()),this.confirmButton.setClass("paste-list__btn"),this.cancelButton=new p("cancelBtn","Cancel",()=>this.hidePasteListModal()),this.cancelButton.setClass("paste-list__btn"),this.textarea=document.createElement("textarea"),this.textarea.placeholder=`Paste a list of new options in a CSV-like format:

title, 1                 -> | title                 | 1 |
title with whitespace, 2 -> | title with whitespace | 2 |
title , with , commas, 3 -> | title , with , commas | 3 |
title with "quotes"  4   -> | title with "quotes"   | 4 |
    `,this.textarea.cols=64,this.textarea.rows=12,this.divButtons.append(this.confirmButton.getElement(),this.cancelButton.getElement()),this.divTextarea.append(this.textarea),this.divContainer.append(this.divTextarea),this.divContainer.append(this.divButtons),this.dialog.append(this.divContainer),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.hidePasteListModal()})}getDialog(){return this.dialog}getText(){return this.textarea.value}showPasteListModal(){document.body.append(this.dialog),this.dialog.showModal()}hidePasteListModal(){this.textarea.value="",this.dialog.close(),this.dialog.remove()}}const A=new ot;function at(i){return new Promise((t,e)=>{const s=indexedDB.open("MyDatabase",1);s.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains("MyStore")||o.createObjectStore("MyStore",{keyPath:"id"})},s.onsuccess=n=>{const l=n.target.result.transaction("MyStore","readwrite"),r=l.objectStore("MyStore");i.forEach(c=>{r.put(c)}),l.oncomplete=()=>{t()},l.onerror=c=>{e(c.target.error)}},s.onerror=n=>{e(n.target.error)}})}function lt(i,t){const e=JSON.stringify(i,null,2),s=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(s),o=document.createElement("a");o.href=n,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)}function rt(){return new Promise((i,t)=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=s=>{var l;const n=(l=s.target.files)==null?void 0:l[0];if(!n){t(new Error("Файл не выбран"));return}const o=new FileReader;o.onload=r=>{try{const c=r.target.result,f=JSON.parse(c);d.createList(f),i(f)}catch{t(new Error("Ошибка при чтении файла"))}},o.onerror=()=>{t(new Error("Ошибка при чтении файла"))},o.readAsText(n)},e.click()})}function dt(){b.play();const i=new d;d.options.push(i),i.appendTo(m.getElement()),y(d.options)}function ct(){d.options.length=0,d.index=0,m.removeChild(),y([]),b.play()}function ht(){if(b.play(),d.options.length<2)et();else if(st(d.options))nt();else{y(d.options);const i=new S;T.isColorsUpdated=!1,T.draw(),i.navigate("/wheel")}}function ut(){new S().navigate("/"),b.play()}function pt(){w.deHighlight();const i=parseFloat(L.getInput().value);!isNaN(i)&&i>0&&T.spin(i),b.play()}function mt(){Q(),b.play()}function gt(){A.showPasteListModal()}function ft(){const i=it(A.getText());for(let t of i){const e=new d;e.setTitleAndWeight(t.title,t.weight),e.appendTo(m.getElement()),d.options.push(e)}A.hidePasteListModal()}async function xt(){await y(d.options);const i=await v();await at(i),await lt(i,"saved-options"),h.showWithText("List of options saved in IndexedDB")}async function bt(){rt()}const wt=new p(u[0].id,u[0].text,dt),Et=new p(u[1].id,u[1].text,gt),vt=new p(u[5].id,u[2].text,ct),Lt=new p(u[5].id,u[3].text,xt),Tt=new p(u[5].id,u[4].text,bt),yt=new p(u[5].id,u[5].text,ht),P=new N(E[0].id,ut,E[0].imageUrl,E[0].imageAlt),g=new N(E[1].id,mt,E[1].imageUrl,E[1].imageAlt),m=new j;class It{constructor(){this.buttons=[],document.body.remove(),document.body=document.createElement("body")}removeBody(){document.body.remove(),document.body=document.createElement("body")}render(){this.removeBody();const t=new O,e=new k,s=new U;s.appendToMenu(wt.getElement()),s.appendToMenu(Et.getElement()),s.appendToMenu(vt.getElement()),s.appendToMenu(Lt.getElement()),s.appendToMenu(Tt.getElement()),s.appendToMenu(yt.getElement()),this.renderOptions(),e.append(s.getElement()),s.append(m.getElement()),t.appendTo(document.body),e.appendTo(document.body),document.body.append(h.getModal())}getButtons(){return this.buttons}renderOptions(){const t=v();if(t&&m.getElement().childNodes.length<2)d.createList(t);else if(!(d.options.length===1||m.getElement().childNodes.length>0)){const e=new d;d.options.push(e),e.appendTo(m.getElement())}}}class Bt{constructor(){document.body.remove(),document.body=document.createElement("body"),this.div=document.createElement("div"),this.h2=document.createElement("h2"),this.h2.innerText="This page doesn't exist. Click 'Go to Home page'.",this.h2.classList.add("error-message"),this.router=new S,this.div.append(this.h2)}removeBody(){document.body.remove(),document.body=document.createElement("body")}render(){this.removeBody();const t=new p("backHome","Go to Home page",()=>{this.router.navigate("/")}),e=new O,s=new k;s.append(t.getElement()),document.body.append(e.getElement()),document.body.append(this.div),s.appendTo(document.body)}}class S{constructor(){this.routes={},window.addEventListener("popstate",()=>this.route())}addRoute(t,e){this.routes[t]=e}navigate(t){history.pushState({},"",t),this.route()}getLocation(){return window.location.pathname}route(){const t=window.location.pathname,e=v();if(t==="/wheel")if(!e||e.length<2){this.navigate("/"),h.showWithText("Add at least 2 options to continue.");return}else{new tt().render();return}else if(t==="/"||t==="/index.html"){new It().render();return}else new Bt().render()}}const Mt=new S;Mt.route();
