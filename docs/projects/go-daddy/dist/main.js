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

const footerAboutHeading = document.getElementById("footer-about-heading");
const footerAbout = document.getElementById("footer-about");
const footerSupportHeading = document.getElementById("footer-support-heading");
const footerSupport = document.getElementById("footer-support");
const footerLinks = document.querySelectorAll(".footer-links");
const footerResourcesHeading = document.getElementById("footer-resources-heading");
const footerResources = document.getElementById("footer-resources");
const footerPartnerHeading = document.getElementById("footer-partner-heading");
const footerPartner = document.getElementById("footer-partner");
const footerAccountHeading = document.getElementById("footer-account-heading");
const footerAccount = document.getElementById("footer-account");
const footerShoppingHeading = document.getElementById("footer-shopping-heading");
const footerShopping = document.getElementById("footer-shopping");

const faq1 = document.getElementById("faq-1");
const faq2 = document.getElementById("faq-2");
const faq3 = document.getElementById("faq-3");
const faq4 = document.getElementById("faq-4");
const faq5 = document.getElementById("faq-5");
const faq6 = document.getElementById("faq-6");
const faq7 = document.getElementById("faq-7");
const faq8 = document.getElementById("faq-8");
const faq9 = document.getElementById("faq-9");

const faqAnswer = document.querySelectorAll(".faq-answer");
const faqArrow = document.querySelectorAll(".faq-arrow");

const productLimit = document.getElementById("product-limit");
const productLimitClose = document.getElementById("product-limit-close");
const productLimitOpen = document.getElementById("product-limit-open");

const FOOTER_ABOUT_INDEX = 0;
const FOOTER_SUPPORT_INDEX = 1;
const FOOTER_RESOURCES_INDEX = 2;
const FOOTER_PARTNER_INDEX = 3;
const FOOTER_ACCOUNT_INDEX = 4;
const FOOTER_SHOPPING_INDEX = 5;

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


footerAboutHeading.addEventListener("click", () => {
    switchActiveLink(FOOTER_ABOUT_INDEX);
});

footerSupportHeading.addEventListener("click",() => {
    switchActiveLink(FOOTER_SUPPORT_INDEX);
});

footerResourcesHeading.addEventListener("click", () => {
    switchActiveLink(FOOTER_RESOURCES_INDEX);
})

footerPartnerHeading.addEventListener("click", () => {
    switchActiveLink(FOOTER_PARTNER_INDEX);
})

footerAccountHeading.addEventListener("click", () => {
    switchActiveLink(FOOTER_ACCOUNT_INDEX);
})

footerShoppingHeading.addEventListener("click", () => {
    switchActiveLink(FOOTER_SHOPPING_INDEX);
})

let currentIndex = -1;

function switchActiveLink(activeIndex){
    if(currentIndex == activeIndex){
        activeIndex = -1;
    }

    footerLinks.forEach((x) => {
        if(x.dataset.index == activeIndex){
            x.classList.remove("hidden");
        }
        else{
            x.classList.add("hidden");
        }
    });
    currentIndex = activeIndex;
}

faq1.addEventListener("click", ()=>{
    activateFAQ(1);
});

faq2.addEventListener("click",()=>{
    activateFAQ(2);
});

faq3.addEventListener("click",()=>{
    activateFAQ(3);
});

faq4.addEventListener("click",()=>{
    activateFAQ(4);
});

faq5.addEventListener("click",()=>{
    activateFAQ(5);
});

faq6.addEventListener("click",()=>{
    activateFAQ(6);
});

faq7.addEventListener("click",()=>{
    activateFAQ(7);
});

faq8.addEventListener("click",()=>{
    activateFAQ(8);
});

faq9.addEventListener("click",()=>{
    activateFAQ(9);
});


function activateFAQ(faqIndex){
    faqAnswer.forEach((x,index) => {
        if(x.dataset.index == faqIndex){
            x.classList.toggle("hidden");
            faqArrow[index].classList.toggle("rotate-180");
        }
    });
}

productLimitOpen.addEventListener("click", () =>{
    body.classList.add("overflow-hidden");
    productLimit.classList.remove("hidden");
});

productLimitClose.addEventListener("click", ()=> {
    body.classList.remove("overflow-hidden");
    productLimit.classList.add("hidden");

});








