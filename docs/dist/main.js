console.log("Project Start");

const body = document.querySelector("body");
const tabButtons = document.querySelectorAll(".tab-button")
const projectItems = document.querySelectorAll(".project-item");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavButton1 = document.getElementById("mobile-nav-button-1");
const mobileNavButton2 = document.getElementById("mobile-nav-button-2");
const mobileNavLinkContainer = document.getElementById("mobile-nav-link-container");

const mainSections = document.querySelectorAll(".main-section");
const navOptionsLine = document.querySelectorAll("#nav-options-lg div")
const mobileNavLinks = document.querySelectorAll("#mobile-nav span")
console.log(navOptionsLine);

changeTab(0);

function changeTab(tabIndex){
    tabButtons.forEach( (x,i) => {
        if(i == tabIndex){
            x.classList.add("bg-primary");
            x.classList.remove("bg-secondary");
            projectItems[i].classList.remove("hidden");
        }
        else{
            x.classList.remove("bg-primary");
            x.classList.add("bg-secondary");
            // if(i < ){
                projectItems[i].classList.add("hidden");
            // }
        }
    });

    setTimeout(() => {
        tabButtons[tabIndex].classList.add("bg-primary");
    }, 1);
}

// const mobileNavButton1 = document.getElementById("mobile-nav-button-1");

function toggleMobileNav(){
    
    if(mobileNav.classList.contains("scale-y-0")){
        setTimeout(() => {
            mobileNavLinkContainer.classList.remove("hidden");
        }, 201);
    }
    else{
        setTimeout(() => {
            mobileNavLinkContainer.classList.add("hidden");
        }, 1);
    }

    mobileNav.classList.toggle("scale-y-0")
    body.classList.toggle("overflow-hidden");
    mobileNavButton1.classList.toggle("hidden");
    mobileNavButton2.classList.toggle("hidden");
    mobileNavButton1.classList.contains()
    setTimeout(() => {
        // mobileNavLinkContainer.classList.toggle("hidden");
    }, 200);
}

function closeMenu(){
    mobileNavLinkContainer.classList.add("hidden");
    mobileNav.classList.add("scale-y-0")
    body.classList.remove("overflow-hidden");
    mobileNavButton1.classList.remove("hidden");
    mobileNavButton2.classList.add("hidden");
}

let prev_navIndex = 0;

document.addEventListener("scroll",()=>{
    mainSections.forEach((sec,index) => {
        let activeSectionY = sec.getBoundingClientRect().top;
        if( (activeSectionY >= 0) && (activeSectionY <= 120 )){
            // console.log(`section on top: ${activeSectionY}`);
            checkScrollPosition(index);
        }
    });
});

function checkScrollPosition(navIndex){
    if (prev_navIndex != navIndex){
        highlight(navIndex);
        prev_navIndex = navIndex;
        // console.log(`current Index: ${navIndex}`);
    }
}

// const navOptionsLine = document.querySelectorAll("#nav-options-lg div")

function highlight(navIndex){
    let notActiveNav = navOptionsLine[prev_navIndex];
    let activeNav = navOptionsLine[navIndex];

    mobileNavLinks[prev_navIndex].classList.remove("border-l-4")
    mobileNavLinks[prev_navIndex].classList.remove("text-accent")
    mobileNavLinks[navIndex].classList.add("border-l-4")
    mobileNavLinks[navIndex].classList.add("text-accent")

    notActiveNav.classList.add("scale-x-0");
    activeNav.classList.remove("scale-x-0");
}

//initialize highligh on load
mainSections.forEach((sec,index) => {
    let activeSectionY = sec.getBoundingClientRect().top;
    if( (activeSectionY >= 0) && (activeSectionY <= 120 )){
        // console.log(`on load- section on top: ${index}`);
        highlight(index);
    }
});