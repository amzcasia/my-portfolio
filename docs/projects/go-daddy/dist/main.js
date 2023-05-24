// const pricingBox = document.querySelectorAll(".pricingBox");
// const price = document.querySelectorAll(".price");
// const arrow = document.querySelectorAll(".arrow");

const body = document.querySelector("body");
const mobileSlidingNav = document.getElementById("mobile-sliding-nav");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavOpen = document.getElementById("mobile-nav-open");
const mobileNavLogo = document.getElementById("mobile-nav-logo");

mobileNavClose.addEventListener("click",()=>{
    mobileSlidingNav.classList.add('translate-x-[-100%]');
    body.classList.remove("overflow-hidden");
});

mobileNavLogo.addEventListener("click",()=>{
    mobileSlidingNav.classList.add('translate-x-[-100%]');
    body.classList.remove("overflow-hidden");
});

mobileNavOpen.addEventListener("click",()=>{
    mobileSlidingNav.classList.remove('translate-x-[-100%]');
    body.classList.add("overflow-hidden");
});