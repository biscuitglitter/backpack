(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(81),i=t.n(o),d=t(645),r=t.n(d)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@500&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@300&display=swap);"]),r.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\n\n.appear {\n  border: pink 4px solid;\n}\nhtml, body {\n  height: 100%;\n  font-family: \"Rubik\", sans-serif;\n  overflow: hidden;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n\n/* navbar */\n\n#navbar-container {\n  height: 55px;\n  width: 100vw;\n  background: hsl(356, 85%, 57%);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#navbar-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  min-width: 200px;\n  max-width: 300px;\n  gap: 10px;\n}\n\n#addtodo-button {\n  font-size: 22px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border: none;\n  text-align: center;\n  border-radius: 4px;\n  font-weight: 700;\n  cursor: pointer;\n  background: none;\n}\n\n#search {\n  background: #de1220;\n  border-radius: 4px;\n  width: 220px;\n  height: 40px;\n  font-size: 13px;\n  color: rgba(255, 246, 246, 0.842);\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n/* sidebar */\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n  max-width: 250px;\n  background: hsl(224, 7%, 96%);\n  padding: 8px 12px;\n  padding-top: 38px;\n  height: 100vh;\n}\n\n#sidebar_bottom {\n  width: 400px;\n  display: flex;\n  justify-content: flex-end;\n}\n.project {\n  font-size: 13px;\n  list-style: none;\n  padding-left: 15px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.project:hover {\n  background: hsl(223, 7%, 98%);\n  cursor: pointer;\n}\n\n.project.selected {\n  background: hsl(222, 84%, 56%);\n  color: #fff;\n  border-radius: 4px;\n}\n\n.currently {\n  background: hsl(223, 7%, 98%);\n  color: black;\n}\n\n#greeting-message {\n  padding-top: 85px;\n  display: flex;\n  justify-content: center;\n}\n\n.day {\n  font-family: 'Ibarra Real Nova', serif;\n  font-size: 14px;\n  font-weight: 550;\n  font-style: italic;\n}\n\n\n\nh1 {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 0 8px;\n  padding-bottom: 10px;\n}\n\n#home, #projects {\n  font-size: 13px;\n  padding: 10px 8px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  cursor: pointer;\n}\n\n#home:hover, #projects:hover {\n  background: hsl(223, 7%, 98%);\n}\n\nh2 {\n  font-size: 13px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 0;\n  padding-top: 2px;\n}\n\n#add-project {\n  border: none;\n  background: none;\n  color: hsl(356, 85%, 57%);\n  font-size: 15px;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 700;\n  border-radius: 4px;\n}\n\n#projects-container {\n  min-height: 200px;\n  height: 300px;\n}\n\n/* modal one */\n\n#modal-container-one {\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  height: 50%;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: 100;\n}\n\n#modal-container-one.show {\n  opacity: 1;\n  pointer-events: auto;\n  z-index: 1000;\n}\n\n#modal-one {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 350px;\n  height: 250px;\n  gap: 10px;\n  text-align: center;\n  background: white;\n  border-radius: 5px;\n  transition: transform 0.3s ease;\n}\n\n#modal-stuff {\n  max-height: 200px;\n  margin: 5px 5px;\n  margin-top: 22px;\n}\n\n#project-name {\n  background: hsl(210, 9%, 96%);\n  height: 60px;\n  border: none;\n  border-radius: 6px;\n  width: 85%;\n  text-align: center;\n  margin-top: 40px;\n}\n\ninput#project-name::placeholder, input#todo-title::placeholder, input#todo-description::placeholder {\n  color: hsl(55, 0%, 44%, 0.8)\n}\n\ninput#project-name:focus::placeholder, input#todo-title:focus::placeholder, input#todo-description:focus::placeholder {\n  color: transparent;\n}\n\n#project-name:focus {\n  border: none;\n  outline: none;\n}\n\n#modal-footer-one {\n  height: auto;\n  margin: 0;\n  background: hsl(224, 7%, 96%);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 10px 12px;\n}\n\n/* modal two */\n\n#modal-container-two {\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  text-align: center;\n  height: 50%;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n}\n\n#modal-container-two.show {\n  opacity: 1;\n  pointer-events: auto;\n  z-index: 1000;\n}\n\n\n#modal-two {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 350px;\n  height: 300px;\n  gap: 15px;\n  text-align: center;\n  background: white;\n  border-radius: 5px;\n  transition: transform 0.3s ease;\n}\n\n#modal-questions {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  min-height: 200px;\n  margin: 5px 5px;\n  margin-top: 22px;\n}\n\n#todo-title, #todo-description, #priority-container {\n  background: hsl(210, 9%, 96%);\n  height: 70px;\n  border: none;\n  border-radius: 6px;\n  width: 85%;\n  text-align: center;\n}\n\n#todo-title:focus, #todo-description:focus, #priority-container:focus {\n  border: none;\n  outline: none;\n}\n\n#priority-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n}\n\n#modal-footer-two {\n  height: 55px;\n  margin: 0;\n  background: hsl(224, 7%, 96%);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 10px 12px;\n}\n\n#buttons-project, #buttons-questions {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  padding: 8px;\n}\n\n#cancel, #confirm-project, #confirm-todo, #close { \n  display: inline-block;\n  outline: 0;\n  font-size: 13px;\n  text-align: center;\n  cursor: pointer;\n  height: 28px;\n  border-radius: 3px;\n  border: 1px solid transparent;\n  transition: all .3s ease;\n  width: 75px;\n  padding-top: 3px;\n }\n\n #confirm-project, #confirm-todo {\n  background: hsl(356, 85%, 57%);\n  color: #fff\n }\n\n \n#priority-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  text-align: center;\n}\n\n#priority-content.show {\n    display: flex;\n    flex-direction: column;\n}\n\n#dropdown {\n  font-size: 12px;\n  height: 25px;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\na {\n  padding: 10px;\n}\n\na:hover {\n  background: hsl(223, 7%, 98%);\n  cursor: pointer;\n}\n\n /* end of modal two */\n\n /* content  */\n\n #content-container {\n  display: flex;\n  flex-direction: column;\n  height: 850px;\n}\n\n#content {\n  display: flex;\n  flex-direction: row;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 38px;\n  margin-left: 80px;\n  height: 100%;\n  width: 800px;\n}\n\n#current-tab {\n  font-size: 17px;\n  padding-bottom: 22px;\n  text-align: left;\n}\n\n#wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 500px;\n  min-height: 40px;\n  max-height: 40px; \n  text-align: center;\n  gap: 20px;\n}\n\n.todo-title {\n  width: fit-content;\n  height: fit-content;\n  padding-top: 1px;\n}\n\n.checkbox {\n  cursor: pointer;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  transition: all 0.5s;\n}\n\n.hide {\n  visibility: hidden;\n  opacity: 0;\n}",""]);const a=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,d){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&r[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var d={},r=[],a=0;a<n.length;a++){var c=n[a],l=o.base?c[0]+o.base:c[0],s=d[l]||0,p="".concat(l," ").concat(s);d[l]=s+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=i(u,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var d=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<d.length;r++){var a=t(d[r]);e[a].references--}for(var c=o(n,i),l=0;l<d.length;l++){var s=t(d[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}d=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var d=e[o]={id:o,exports:{}};return n[o](d,d.exports,t),d.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),d=t(569),r=t.n(d),a=t(565),c=t.n(a),l=t(216),s=t.n(l),p=t(589),m=t.n(p),u=t(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=s(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=()=>{const n=document.getElementById("projects-container");let e=new class{constructor(n){this.title=n}}(document.getElementById("project-name").value);const t=document.createElement("div");t.className="project";const o=document.createElement("p");o.className="text",o.innerText=`${e.title}`,t.dataset.target=`${e.title}`,n.appendChild(t),t.appendChild(o)},x=()=>{let n=new class{constructor(n,e,t){this.title=n,this.priority=e,this.project=t}}(document.getElementById("todo-title").value,document.getElementById("todo-priority").innerText,document.querySelector(".selected").firstChild.innerText);const e=document.getElementById("container"),t=document.createElement("div");t.id="wrapper";const o=document.createElement("input");o.type="checkbox",o.classList.add("checkbox"),t.appendChild(o),t.dataset.target="Home";const i=document.createElement("p");i.className="todo-title",i.innerText=`${n.title}`,console.log(n),document.querySelectorAll(".project").forEach((e=>{n.project===e.firstChild.innerText&&(t.dataset.target=e.firstChild.innerText)})),e.appendChild(t),t.appendChild(o),t.appendChild(i)},g=()=>{document.getElementById("todo-title").value="",document.getElementById("project-name").value=""};(()=>{const n=document.createElement("div");document.body.appendChild(n),n.id="navbar-container";const e=document.createElement("div");e.id="navbar-content",n.appendChild(e);const t=document.createElement("div");t.id="search",t.innerText="Want to add a to-do?",e.appendChild(t);const o=document.createElement("button");o.id="addtodo-button",o.innerText="+",e.appendChild(o)})(),(()=>{const n=document.createElement("div");document.body.appendChild(n),n.id="content-container";const e=document.createElement("div");e.id="content",n.appendChild(e)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");n.appendChild(e),e.classList.add("sidebar");const t=document.createElement("div");t.id="sidebar-top",e.appendChild(t);const o=document.createElement("div");o.id="projects-container",e.appendChild(o);const i=document.createElement("h1");i.innerText="ACTIONS",t.appendChild(i);const d=document.createElement("div");d.id="home",d.classList.add("selected"),t.appendChild(d);const r=document.createElement("h2");r.innerText="Home",d.appendChild(r);const a=document.createElement("div");a.id="projects",t.appendChild(a);const c=document.createElement("h2");c.innerText="Projects",a.appendChild(c);const l=document.createElement("div");l.id="greeting-message",e.appendChild(l);const s=document.createElement("div");s.classList.add("day"),l.appendChild(s),s.innerText="Enjoy the rest of your Thursday!"})(),(()=>{const n=document.getElementById("projects"),e=document.createElement("div");e.id="btn-container",n.appendChild(e);const t=document.createElement("button");t.innerText="+",t.id="add-project",e.appendChild(t)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="container",n.appendChild(e);const t=document.createElement("h2");t.id="current-tab",e.appendChild(t)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="modal-container-one",n.appendChild(e);const t=document.createElement("div");t.id="modal-one",e.appendChild(t);const o=document.createElement("div");o.id="modal-stuff",t.appendChild(o);const i=document.createElement("input");i.id="project-name",i.placeholder="What are you working on?",o.appendChild(i);const d=document.createElement("div");d.id="modal-footer-one",t.appendChild(d);const r=document.createElement("div");r.id="buttons-project",d.appendChild(r);const a=document.createElement("div");a.id="close",r.appendChild(a),a.innerText="Cancel";const c=document.createElement("div");c.id="confirm-project",r.appendChild(c),c.innerText="Add";const l=document.createElement("div");l.id="modal-container-two",n.appendChild(l);const s=document.createElement("div");s.id="modal-two",l.appendChild(s);const p=document.createElement("div");p.id="modal-questions",s.appendChild(p);const m=document.createElement("input");m.id="todo-title",m.placeholder="What do you want to name it?",p.appendChild(m);const u=document.createElement("div");u.id="priority-container",p.appendChild(u);const h=document.createElement("p");h.id="todo-priority",h.innerText="Priority",u.appendChild(h);const f=document.createElement("button");f.id="dropdown",f.innerText="▼",u.appendChild(f);const x=document.createElement("div");x.id="priority-content",u.appendChild(x);const g=document.createElement("a");g.innerText="High priority";const y=document.createElement("a");y.innerText="Medium priority";const v=document.createElement("a");v.innerText="Low priority",x.appendChild(g),x.appendChild(y),x.appendChild(v);const b=document.createElement("div");b.id="modal-footer-two",s.appendChild(b);const E=document.createElement("div");E.id="buttons-questions",b.appendChild(E);const w=document.createElement("div");w.id="cancel",E.appendChild(w),w.innerText="Cancel";const C=document.createElement("div");C.id="confirm-todo",E.appendChild(C),C.innerText="Add to-do"})();const y=document.createElement("div");y.classList.add("overlay"),y.classList.add("hide"),document.body.appendChild(y),(()=>{const n=document.querySelector(".day");let e=(new Date).getDay(),t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=[0,1,2,3,4,5,6];for(let i=0;i<t.length;i++)e===o[i]&&(n.innerText="Enjoy the rest of your "+t[i]+"!")})(),(()=>{const n=document.getElementById("modal-container-one"),e=document.getElementById("modal-container-two"),t=document.getElementById("close"),o=document.getElementById("cancel"),i=document.getElementById("add-project"),d=document.getElementById("confirm-project"),r=document.getElementById("confirm-todo"),a=document.getElementById("dropdown"),c=document.getElementById("priority-content"),l=document.getElementById("addtodo-button"),s=document.querySelector(".overlay.hide");i.addEventListener("click",(()=>{n.classList.add("show"),s.classList.remove("hide")})),t.addEventListener("click",(()=>{n.classList.remove("show"),s.classList.add("hide")})),d.addEventListener("click",(()=>{n.classList.remove("show"),s.classList.add("hide"),f()})),r.addEventListener("click",(()=>{e.classList.remove("show"),x(),g(),s.classList.add("hide")})),l.addEventListener("click",(()=>{n.classList.remove("show"),e.classList.add("show"),s.classList.remove("hide")})),o.addEventListener("click",(()=>{e.classList.remove("show"),n.classList.remove("show"),s.classList.add("hide")})),a.addEventListener("click",(()=>{c.classList.add("show")}))})(),(()=>{const n=document.querySelectorAll("a"),e=document.getElementById("todo-priority"),t=document.getElementById("priority-content");n.forEach((n=>{n.addEventListener("click",(()=>{let o=n.innerText;e.innerText=o,t.classList.remove("show")}))}))})();const v=document.getElementById("confirm-todo"),b=document.getElementById("confirm-project");v.addEventListener("click",(()=>{g()})),b.addEventListener("click",(()=>{g(),document.querySelectorAll(".project").forEach((n=>{n.addEventListener("click",(n=>{document.querySelectorAll(".project").forEach((n=>{n.classList.remove("selected"),document.getElementById("home").classList.remove("selected"),document.getElementById("home").classList.remove("currently")})),n.target.parentNode.classList.add("selected")}))}))})),document.getElementById("home").addEventListener("click",(()=>{document.querySelectorAll("#wrapper")&&(document.getElementById("home").classList.add("currently"),document.querySelectorAll(".project").forEach((n=>n.classList.remove("selected"))),document.querySelectorAll("#wrapper").forEach((n=>n.style.display="flex")),document.getElementById("home").classList.add("selected"))})),document.getElementById("projects-container").addEventListener("click",(function(n){const e=n.target.closest(".project").dataset.target,t=document.querySelectorAll(`#wrapper[data-target="${e}"]`);console.log(t),document.querySelectorAll("#wrapper").forEach((n=>n.style.display="none")),t.forEach((n=>n.style.display="flex"))}))})()})();