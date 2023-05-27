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

let currentIndex = -1;



footerAboutHeading.addEventListener("click", () => {
    /*
    footerLinks.forEach((x) => {
        x.classList.add("hidden");
    });
    setTimeout(() => {
       if(currentIndex != 0){
        footerAbout.classList.remove("hidden");
        currentIndex = 0;
       }
       else{
        currentIndex = -1;
       }
    },0);
    */
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

    console.log(currentIndex);
}







