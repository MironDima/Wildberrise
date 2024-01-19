(()=>{"use strict";const t=t=>{const e=document.querySelector(".long-goods-list");e.innerHTML="",t.forEach((t=>{const o=document.createElement("div");o.classList.add("col-lg-3"),o.classList.add("col-sm-6"),o.innerHTML=`\n\t\t<div class="goods-card">\n\t\t\t<span class="label ${t.label?null:"d-none"}" >${t.label}</span>\n\t\t\t\t<img src="./db/${t.img}" alt=${t.name} class="goods-image">\n\t\t\t\t<h3 class="goods-title">${t.name}</h3>\n\t\t\t\t<p class="goods-description">${t.description}</p>\n\t\t\t\t<button class="button goods-card-btn add-to-cart" data-id=${t.id}>\n\t\t\t<span class="button-price">$${t.price}</span>\n\t\t\t</button>\n\t\t\t</div>`,e.append(o)}))},e=t=>fetch(t).then((t=>t.json())),o=e=>{localStorage.setItem("array",JSON.stringify(e)),"goods.html"!==window.location.pathname?window.location.href="goods.html":t(e)},a=t=>{const e=document.querySelector(".cart-table__goods");e.innerHTML="",t.forEach((t=>{const o=document.createElement("tr");o.innerHTML=`\n\t<td>${t.name}</td> \n\t<td>${t.price}$</td>\n\t<td><button class="cart-btn-minus">-</button></td>\n\t<td>${t.count}</td>\n\t<td><button class=" cart-btn-plus">+</button></td>\n\t<td>${+t.count*+t.price}</td>\n\t<td><button class="cart-btn-delete">x</button></td>`,e.append(o),((t,e)=>{t.addEventListener("click",(t=>{t.target.classList.contains("cart-btn-minus")?(t=>{const e=JSON.parse(localStorage.getItem("cart")).map((e=>(e.id===t&&e.count>0&&e.count--,e)));localStorage.setItem("cart",JSON.stringify(e)),a(JSON.parse(localStorage.getItem("cart")))})(e):t.target.classList.contains("cart-btn-plus")?(t=>{const e=JSON.parse(localStorage.getItem("cart")).map((e=>(e.id===t&&e.count++,e)));localStorage.setItem("cart",JSON.stringify(e)),a(JSON.parse(localStorage.getItem("cart")))})(e):t.target.classList.contains("cart-btn-delete")&&(t=>{const e=JSON.parse(localStorage.getItem("cart")).filter((e=>e.id!==t));localStorage.setItem("cart",JSON.stringify(e)),a(JSON.parse(localStorage.getItem("cart")))})(e)}))})(o,t.id)})),(t=>{const e=document.querySelector(".card-table__total"),o=t.reduce(((t,e)=>t+ +e.price*+e.count),0);e.innerHTML=`${o}$`})(t)};(()=>{const t=document.querySelector(".button-cart"),e=document.querySelector("#modal-cart");t.addEventListener("click",(()=>{e.style.display="flex";const t=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];a(t)})),e.addEventListener("click",(t=>{(!t.target.closest(".modal")&&t.target.classList.contains("overlay")||t.target.classList.contains("modal-close"))&&(e.style.display="")}))})(),e("./db/db.json").then((t=>t)),localStorage.getItem("array")&&"goods.html"===window.location.pathname&&t(JSON.parse(localStorage.getItem("array"))),document.querySelectorAll(".navigation-item > a").forEach((o=>{o.addEventListener("click",(a=>{a.preventDefault();const n=o.textContent,c=o.dataset.field;e("./db/db.json").then((e=>((e,o,a)=>{const n=a?e.filter((t=>t[a]===o)):e;localStorage.setItem("array",JSON.stringify(n)),"goods.html"!==window.location.pathname?window.location.href="goods.html":t(n)})(e,n,c)))}))})),(()=>{const o=document.querySelector(".search-block > input");document.querySelector(".search-block > button").addEventListener("click",(()=>{e("./db/db.json").then((e=>((e,o)=>{const a=e.filter((t=>t.name.toLowerCase().includes(o.toLowerCase())));localStorage.setItem("array",JSON.stringify(e)),"goods.html"!==window.location.pathname?window.location.href="goods.html":t(a)})(e,o.value)))}))})(),(()=>{const t=document.querySelector(".more"),a=document.querySelectorAll(".button-view-all");a&&a.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),e("./db/db.json").then((t=>o(t)))}))})),t&&t.addEventListener("click",(t=>{t.preventDefault(),e("./db/db.json").then((t=>o(t)))}))})(),document.querySelector(".long-goods-list").addEventListener("click",(t=>{t.target.closest(".add-to-cart")&&(t=>{const e=JSON.parse(localStorage.getItem("array")).find((e=>e.id===t)),o=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];o.some((t=>t.id===e.id))?o.map((t=>(t.id===e.id&&t.count++,t))):(e.count=1,o.push(e)),localStorage.setItem("cart",JSON.stringify(o))})(t.target.closest(".add-to-cart").dataset.id)})),(({formClass:t,someElem:e=[]})=>{const o=document.querySelector(t);o.addEventListener("submit",(t=>{t.preventDefault();const a=new FormData(o),n=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],c={};a.forEach(((t,e)=>{c[e]=t})),e.forEach((t=>{const e=document.getElementById(t.totalClass);c[t.totalClass]=e.textContent.slice(0,-1)})),((t,e)=>{const o=document.querySelector(".modal");console.log(o);const a="Проверьте вводимые данные";let n=document.createElement("div");n.classList.add("inform"),o.append(n);const c=document.querySelectorAll(".modal-input");if((t=>{let e=!0;return t.forEach((t=>{"nameCustomer"===t.name?t.value.length<3&&(e=!1):"phoneCustomer"===t.name&&t.value.length<9&&(e=!1,console.log("false phoneCustomer"))})),e})(c)){const o=document.querySelector("#modal-cart");fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({cart:e,name:t.nameCustomer,phone:t.phoneCustomer,total:t.card_table__total}),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{n.textContent="Данные отправлены!",setTimeout((()=>{o.style.display=""}),1800),c.forEach((t=>{t.value="",setTimeout((()=>{n.textContent=""}),1800)})),localStorage.removeItem("cart")})).catch((t=>n.textContent=a))}else n.textContent=a,n.style.color="red",c.forEach((t=>{t.style.color="red"})),setTimeout((()=>{n.textContent=""}),1800),console.log("ошибка")})(c,n)}))})({formClass:".modal-form",someElem:[{type:"block",totalClass:"card_table__total"}]})})();