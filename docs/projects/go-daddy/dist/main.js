// const pricingBox = document.querySelectorAll(".pricingBox");
// const price = document.querySelectorAll(".price");
// const arrow = document.querySelectorAll(".arrow");

const body = document.querySelector("body");
const mobileSlidingNav = document.getElementById("mobile-sliding-nav");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavOpen = document.getElementById("mobile-nav-open");
const mobileNavLogo = document.getElementById("mobile-nav-logo");
const contactNav = document.getElementById("contact-nav");
const contactNavLg = document.getElementById("contact-nav-lg");
const contactDropdown = document.getElementById("contact-dropdown");
const contactEntry = document.querySelectorAll(".contact-entry");
const userLogin = document.getElementById("user-login");
const userLoginButton = document.getElementById("user-login-button");
const userLoginButtonSm = document.getElementById("user-login-button-sm");
const userLoginButtonClose = document.getElementById("user-login-button-close");

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

contactNav.addEventListener("click", () => {
    contactDropdown.classList.toggle("hidden");
    setTimeout(() => {
        contactDropdown.classList.toggle("scale-y-0");
    setTimeout(() => {
        contactEntry.forEach(x => {
            x.classList.toggle("hidden");
        });
    }, 300);
    }, 1);
});

contactNavLg.addEventListener("click", () => {
    contactDropdown.classList.toggle("hidden");
    setTimeout(() => {
        contactDropdown.classList.toggle("scale-y-0");
    setTimeout(() => {
        contactEntry.forEach(x => {
            x.classList.toggle("hidden");
        });
    }, 300);
    }, 1);
});

userLoginButton.addEventListener("click", ()=>{
    userLogin.classList.toggle("hidden");
});

userLoginButtonSm.addEventListener("click", ()=>{
    userLogin.classList.toggle("hidden");
});

userLoginButtonClose.addEventListener("click", ()=>{
    userLogin.classList.toggle("hidden");
});