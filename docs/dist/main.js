console.log("Project Start");

const tabButtons = document.querySelectorAll(".tab-button")
const projectItems = document.querySelectorAll(".project-item");

const BUTTON_0 = 0;
const BUTTON_1 = 1;
const BUTTON_2 = 2;
const BUTTON_3 = 3;
const BUTTON_4 = 4;
const BUTTON_5 = 5;

changeTab(5);

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