const r={section:".js-cookie-bar",button:".js-cookie-bar-accept"},s="is-hidden";function u(i){let e=document.cookie.match(new RegExp("(?:^|; )"+i.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0}function d(i,e,t={}){t={path:"/",...t},t.expires instanceof Date&&(t.expires=t.expires.toUTCString());let n=encodeURIComponent(i)+"="+encodeURIComponent(e);for(let c in t){n+="; "+c;let a=t[c];a!==!0&&(n+="="+a)}document.cookie=n}const f=6e3;let o;function k(){if(o=document.querySelector(r.section),!o)return!1;setTimeout(C,f),m()}function l(){if(!o.hasAttribute("data-cookie-time"))return;let e=o.dataset.cookieTime*24*60*60;d("cookie_bar","1",{"max-age":e})}function m(){o.addEventListener("click",i=>{i.target.closest(r.button)&&b()})}function b(){l(),o.remove()}function C(){u("cookie_bar")||o.classList.remove(s)}k();
