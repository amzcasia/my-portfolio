console.log("Project Start");

const body = document.querySelector("body");
const tabButtons = document.querySelectorAll(".tab-button")
const projectItems = document.querySelectorAll(".project-item");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavButton = document.getElementById("mobile-nav-button");

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

function toggleMobileNav(){
    mobileNav.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden");
}

function toggleMenu2(){
    mobileNav.classList.add("hidden")
    body.classList.remove("overflow-hidden");
}

