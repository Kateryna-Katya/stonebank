import{S as m,A as w}from"./vendor-16iyBIrI.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();let f=null;function h(){window.innerWidth<1440&&!f&&(f=new m(".my-swiper",{modules:[w],slidesPerView:1.1,spaceBetween:16,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}})),window.innerWidth>=1440&&f&&(f.destroy(!0,!0),f=null)}h();window.addEventListener("resize",h);document.querySelectorAll(".faq-acc-el-trigger").forEach(c=>{c.addEventListener("click",()=>{const n=c.closest(".faq-acc-el"),l=n.querySelector(".faq-acc-el-descr-frame");n.classList.contains("open")?(n.classList.remove("open"),l.style.maxHeight="0"):(n.classList.add("open"),l.style.maxHeight=l.scrollHeight+"px")})});document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".menu-button"),n=c.querySelector(".icon"),l=document.querySelector(".modal"),d=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const a=`
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2486_2539)">
    <path d="M6.66663 10H33.3333" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.66663 20H33.3333" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.66663 30H33.3333" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_2486_2539">
      <rect width="40" height="40" fill="white" />
    </clipPath>
  </defs>
</svg>
    `,o=`
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2474_1906)">
    <path d="M30 10L10 30" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 10L30 30" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_2474_1906">
      <rect width="40" height="40" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;c.addEventListener("click",()=>{t=!t,n.innerHTML=t?o:a,t?i():r()}),d.forEach(u=>u.addEventListener("click",()=>{r(),n.innerHTML=a,t=!1})),window.addEventListener("scroll",s);function i(){l.style.display="block"}function r(){l.style.display="none"}function s(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function c(){const o=document.getElementById("site-header");return o?o.offsetHeight:0}function n(o){const i=document.getElementById(o);if(!i)return;const r=c(),s=i.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:s,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(o=>{o.addEventListener("click",function(i){const r=this.getAttribute("href");if(!r)return;const[s,u]=r.split("#");if(!u)return;const p=window.location.pathname.split("/").pop();!(s===""||s==="./"||s===p||s==="./"+p)||!document.getElementById(u)||(i.preventDefault(),n(u),t(u))})});const d=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navigation-item");function t(o){e.forEach(r=>r.classList.remove("active"));const i=document.querySelector(`.navigation-item a[href*="#${o}"]`);i&&i.closest(".navigation-item").classList.add("active")}function a(){const o=window.pageYOffset+c()+100;d.forEach(i=>{const r=i.offsetTop,s=r+i.offsetHeight;o>=r&&o<s&&t(i.id)})}if(window.addEventListener("scroll",a),window.location.hash){const o=window.location.hash.substring(1);setTimeout(()=>{n(o),t(o)},300)}});
//# sourceMappingURL=main-5aeVUKJw.js.map
