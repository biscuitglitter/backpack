(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(81),i=t.n(o),d=t(645),r=t.n(d)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@500&display=swap);"]),r.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: \"Rubik\", sans-serif;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n\n#content-container {\n  display: flex;\n  flex-direction: column;\n  height: 850px;\n}\n\n#content {\n  display: flex;\n  flex-direction: row;\n}\n\n#navbar-container {\n  height: 55px;\n  width: 100%;\n  background: hsl(356, 85%, 57%);\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  min-width: 225px;\n  max-width: 225px;\n  background: hsl(224, 7%, 96%);\n  padding: 8px 12px;\n  padding-top: 38px;\n  height: 650px;\n}\n\n#sidebar_bottom {\n  width: 400px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n#greeting-message {\n  padding-bottom: 90px;\n}\n\n.day {\n  font-family: 'Ibarra Real Nova', serif;\n  font-size: 14px;\n  font-weight: 550;\n  font-style: italic;\n}\n\nh1 {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 0 8px;\n  padding-bottom: 10px;\n}\n\n#home,\n#projects {\n  font-size: 13px;\n  padding: 10px 8px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n}\n\n#home:hover,\n#projects:hover {\n  background: hsl(223, 7%, 98%);\n}\n\nh2 {\n  font-size: 13px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 0;\n  padding-top: 2px;\n  cursor: pointer;\n}\n\n#projectsbtn, #cta {\n  border: none;\n  background: none;\n  color: hsl(356, 85%, 57%);\n  font-size: 15px;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 700;\n  border-radius: 4px;\n}\n\n#cta {\n  font-size: 16px;\n  width: 100px;\n  height: 30px;\n}\n\n#modal-container-one {\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  text-align: center;\n  height: 50%;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: 1;\n}\n\n#modal-container-one.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n#modal-one {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 350px;\n  height: 300px;\n  gap: 15px;\n  text-align: center;\n  background: white;\n  border-radius: 5px;\n  transition: transform 0.3s ease;\n}\n\n#modal-stuff {\n  min-height: 200px;\n  display: flex;\n  justify-content: center;\n  margin: 5px 5px;\n  margin: 22px;\n}\n\n#project-name {\n  background: hsl(210, 9%, 96%);\n  height: 60px;\n  border: none;\n  border-radius: 6px;\n  width: 85%;\n  text-align: center;\n  margin-top: 40px;\n}\n\ninput::placeholder {\n  color: hsl(55, 0%, 44%, 0.8)\n}\n\ninput:focus::placeholder {\n  color: transparent;\n}\n\n#project-name:focus {\n  border: none;\n  outline: none;\n}\n\n#modal-footer-one {\n  height: 55px;\n  margin: 0;\n  background: hsl(224, 7%, 96%);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 10px 12px;\n}\n\n#modal-container-two {\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  text-align: center;\n  height: 50%;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: 1;\n}\n\n#modal-container-two.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n#modal-two {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 350px;\n  height: 300px;\n  gap: 15px;\n  text-align: center;\n  background: white;\n  border-radius: 5px;\n  transition: transform 0.3s ease;\n}\n\n#modal-questions {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  min-height: 200px;\n  margin: 5px 5px;\n  margin-top: 22px;\n}\n\n#todo-title, #todo-description, #priority-container {\n  background: hsl(210, 9%, 96%);\n  height: 55px;\n  border: none;\n  border-radius: 6px;\n  width: 85%;\n  text-align: center;\n}\n\n#todo-title:focus, #todo-description:focus, #priority-container:focus {\n  border: none;\n  outline: none;\n}\n\n#priority-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n}\n\n#modal-footer-two {\n  height: 55px;\n  margin: 0;\n  background: hsl(224, 7%, 96%);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 10px 12px;\n}\n\n#buttons-project, #buttons-questions {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 8px;\n}\n\n#cancel, #add, #agree, #close { \n  display: inline-block;\n  outline: 0;\n  font-size: 13px;\n  text-align: center;\n  cursor: pointer;\n  height: 28px;\n  border-radius: 3px;\n  border: 1px solid transparent;\n  transition: all .3s ease;\n  width: 75px;\n  padding-top: 3px;\n }\n\n #add, #agree {\n  background: hsl(356, 85%, 57%);\n  color: #fff\n }\n\n#container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 38px;\n  margin-left: 80px;\n  height: 100%;\n  width: 800px;\n}\n\n#current-tab {\n  font-size: 17px;\n  padding-bottom: 22px;\n}\n\n#projects-container {\n  min-height: 200px;\n  height: 400px;\n}\n\n.task {\n  font-size: 13px;\n  list-style: none;\n  padding-left: 15px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.task:hover {\n  background: hsl(223, 7%, 98%);\n}\n\nli {\n  cursor: pointer;\n}\n\n#priority-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  text-align: center;\n}\n\n#priority-content.show {\n    display: flex;\n    flex-direction: column;\n}\n\n#priority-content.hide {\n  display: none;\npointer-events: none\n;}\n\n#dropdown {\n  font-size: 12px;\n  height: 25px;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\na {\n  padding: 10px;\n}\n\na:hover {\n  background: hsl(223, 7%, 98%);\n  cursor: pointer;\n}\n\n#wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 70%;\n  height: 45px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding: 6px 8px;\n  font-size: 14px;\n  gap: 12px;\n}\n\n#wrapper:hover {\n  background: hsl(224, 7%, 96%)\n}\n\ndetails > summary {\n  list-style: none;\n  }\n\n.checkbox:hover {\n  cursor: pointer;\n}",""]);const a=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,d){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&r[p[0]]||(void 0!==d&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=d),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var d={},r=[],a=0;a<n.length;a++){var c=n[a],s=o.base?c[0]+o.base:c[0],p=d[s]||0,l="".concat(s," ").concat(p);d[s]=p+1;var m=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=i(u,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:h,references:1})}r.push(l)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var d=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<d.length;r++){var a=t(d[r]);e[a].references--}for(var c=o(n,i),s=0;s<d.length;s++){var p=t(d[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}d=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var d=e[o]={id:o,exports:{}};return n[o](d,d.exports,t),d.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),d=t(569),r=t.n(d),a=t(565),c=t.n(a),s=t(216),p=t.n(s),l=t(589),m=t.n(l),u=t(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const x=()=>{document.getElementById("todo-title").innerText="",document.getElementById("todo-description").innerText="",document.getElementById("project-name").innerText=""},f=()=>{let n=new class{constructor(n,e,t){this.title=n,this.description=e,this.priority=t}}(document.getElementById("todo-title").value,document.getElementById("todo-description").value,document.getElementById("todo-priority").innerText);console.log(n);const e=document.getElementById("container"),t=document.createElement("div");t.id="wrapper";const o=document.createElement("input");o.type="checkbox",o.classList.add("checkbox"),t.appendChild(o);const i=document.createElement("details");i.classList.add("details");const d=document.createElement("summary");d.className="summary-title";const r=document.createElement("p");d.innerText=`${n.title}`,r.innerText=`${n.description}`,e.appendChild(t),t.appendChild(i),i.appendChild(d),i.appendChild(r)};(()=>{const n=document.createElement("div");document.body.appendChild(n),n.id="navbar-container"})(),(()=>{const n=document.createElement("div");document.body.appendChild(n),n.id="content-container";const e=document.createElement("div");e.id="content",n.appendChild(e)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");n.appendChild(e),e.classList.add("sidebar");const t=document.createElement("div");t.id="sidebar-top",e.appendChild(t);const o=document.createElement("div");o.id="projects-container",e.appendChild(o);const i=document.createElement("h1");i.innerText="ACTIONS",t.appendChild(i);const d=document.createElement("div");d.id="home",t.appendChild(d);const r=document.createElement("h2");r.innerText="Home",d.appendChild(r);const a=document.createElement("div");a.id="projects",t.appendChild(a);const c=document.createElement("h2");c.innerText="Projects",a.appendChild(c);const s=document.createElement("div");s.id="greeting-message",e.appendChild(s);const p=document.createElement("div");p.classList.add("day"),s.appendChild(p),p.innerText="Enjoy the rest of your Thursday!"})(),(()=>{const n=document.getElementById("projects"),e=document.createElement("div");e.id="btn-container",n.appendChild(e);const t=document.createElement("button");t.innerText="+",t.id="projectsbtn",e.appendChild(t)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="container",n.appendChild(e);const t=document.createElement("h2");t.id="current-tab",e.appendChild(t);const o=document.createElement("button");o.id="cta",o.innerText="+   Add to-do",e.appendChild(o)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="modal-container-one",n.appendChild(e);const t=document.createElement("div");t.id="modal-one",e.appendChild(t);const o=document.createElement("div");o.id="modal-stuff",t.appendChild(o);const i=document.createElement("input");i.id="project-name",i.placeholder="What are you working on?",o.appendChild(i);const d=document.createElement("div");d.id="modal-footer-one",t.appendChild(d);const r=document.createElement("div");r.id="buttons-project",d.appendChild(r);const a=document.createElement("div");a.id="close",r.appendChild(a),a.innerText="Cancel";const c=document.createElement("div");c.id="add",r.appendChild(c),c.innerText="Add";const s=document.createElement("div");s.id="modal-container-two",n.appendChild(s);const p=document.createElement("div");p.id="modal-two",s.appendChild(p);const l=document.createElement("div");l.id="modal-questions",p.appendChild(l);const m=document.createElement("input");m.id="todo-title",m.placeholder="What do you want to name it?",l.appendChild(m);const u=document.createElement("input");u.id="todo-description",u.placeholder="How would you describe it?",l.appendChild(u);const h=document.createElement("div");h.id="priority-container",l.appendChild(h);const x=document.createElement("p");x.id="todo-priority",x.innerText="Priority",h.appendChild(x);const f=document.createElement("button");f.id="dropdown",f.innerText="▼",h.appendChild(f);const g=document.createElement("div");g.id="priority-content",h.appendChild(g);const y=document.createElement("a");y.innerText="High priority";const v=document.createElement("a");v.innerText="Medium priority";const b=document.createElement("a");b.innerText="Low priority",g.appendChild(y),g.appendChild(v),g.appendChild(b);const E=document.createElement("div");E.id="modal-footer-two",p.appendChild(E);const w=document.createElement("div");w.id="buttons-questions",E.appendChild(w);const C=document.createElement("div");C.id="cancel",w.appendChild(C),C.innerText="Cancel";const k=document.createElement("div");k.id="agree",w.appendChild(k),k.innerText="Add to-do"})(),(()=>{const n=document.querySelector(".day");let e=(new Date).getDay(),t=["Sunday","Monday","Ttuesday","Wednesday","Thursday","Friday","Saturday"],o=[0,1,2,3,4,5,6];for(let i=0;i<t.length;i++)e===o[i]&&(n.innerText="Enjoy the rest of your "+t[i]+"!")})(),(()=>{const n=document.getElementById("modal-container-one"),e=document.getElementById("modal-container-two"),t=document.getElementById("close"),o=document.getElementById("cancel"),i=document.getElementById("projectsbtn"),d=document.getElementById("add"),r=document.getElementById("agree"),a=document.getElementById("dropdown"),c=document.getElementById("priority-content"),s=document.getElementById("cta");i.addEventListener("click",(()=>{n.classList.add("show")})),t.addEventListener("click",(()=>{n.classList.remove("show")})),d.addEventListener("click",(()=>{n.classList.remove("show")})),r.addEventListener("click",(()=>{e.classList.remove("show")})),s.addEventListener("click",(()=>{n.classList.remove("show"),e.classList.add("show")})),o.addEventListener("click",(()=>{e.classList.remove("show"),n.classList.remove("show")})),a.addEventListener("click",(()=>{c.classList.add("show")}))})(),(()=>{const n=document.getElementById("add"),e=document.getElementById("project-name"),t=document.getElementById("projects-container");n.addEventListener("click",(()=>{const n=document.createElement("div");n.className="task";const o=document.createElement("li");n.append(o),t.appendChild(n),o.innerText=e.value}))})(),(()=>{const n=document.querySelectorAll("a"),e=document.getElementById("todo-priority");n.forEach((n=>{n.addEventListener("click",(()=>{let t=n.innerText;e.innerText=t,document.getElementById("priority-content").classList.add("hide")}))}))})(),document.getElementById("agree").addEventListener("click",(()=>{f(),x()})),document.getElementById("add").addEventListener("click",(()=>{modal_one.classList.remove("show"),x()}))})()})();