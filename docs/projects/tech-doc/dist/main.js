function printf(text,variable){
    console.log (text + variable);
}


/**************        Copy Paste from code window          *************/
function copy(codeId,codeInfo) {
    // Get the text field
    let copyText = document.getElementById(codeId).textContent;
    let infoText = document.getElementById(codeInfo);

    infoText.classList.remove('hidden');
    setTimeout(()=>{
        // after 10 ms
        infoText.classList.remove('opacity-0');
    },10);
    setTimeout(()=>{
        // after 1000 ms
        infoText.classList.add('opacity-0');
        setTimeout(() => {
        //after 1210 ms
            infoText.classList.add('hidden');
        }, 210);
    },1000);

    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    //alert("Copied the text: " + copyText);
}

let prev_activeMenu = 1;

/***********            Highlight navigation                    *************/
function highlight(nthChild){
    let activeMenu = document.querySelector(`#contents :nth-child(${nthChild}) p`);
    let notActiveMenu; // = document.querySelector(`#contents :nth-child(${prev_activeMenu}) p`);

    for(let i = 1; i <= 15; i++){
        notActiveMenu = document.querySelector(`#contents :nth-child(${i}) p`);
        notActiveMenu.classList.remove('text-[#55BFFB]');
    }
    setTimeout( ()=>{
        activeMenu.classList.add('text-[#55BFFB]');
    },1);
    prev_activeMenu = nthChild;
}

let body = document.querySelector('body');
let navIndex = 0;
let prev_navIndex = -1;

const mainSections = document.querySelectorAll(".main-section header");
const navScroll = document.getElementById('contents');
const lastDiv = document.getElementById("lastDiv");
const firstDiv = document.getElementById("firstDiv");
const navContainer = document.getElementById("nav_container");
const firstNav = document.getElementById("firstNav");
const lastNav = document.getElementById("lastNav");
const brand = document.getElementById("brand");

highlight(1);

   
/*
navScroll.addEventListener('scroll', () => {
});
*/

document.addEventListener('scroll', () => {
    let div1 = firstDiv.getBoundingClientRect().top;
    let div2 = lastDiv.getBoundingClientRect().top;
    let windowHeight = navContainer.clientHeight;
    let brandHeight = brand.clientHeight;
    let nav1 = firstNav.getBoundingClientRect().top;
    let nav2 = lastNav.getBoundingClientRect().top;

    let windowScrollPercent = Math.abs( div1 / (div2 -  div1 - windowHeight));
    let maxNavScroll = nav2-nav1 - windowHeight + brandHeight;
    
    navScroll.scrollTop = maxNavScroll * windowScrollPercent;
    console.log(maxNavScroll * windowScrollPercent);
    mainSections.forEach((x,index) => {
        if((x.getBoundingClientRect().top) == 0){
            checkScrollPosition(index+1);
            //printf('section on top: ',index);
        }
    });
});




function checkScrollPosition(yPos){

    navIndex = yPos;
    if (prev_navIndex != navIndex){
        //console.log(`y = ${yPos}; navIndex = ${navIndex}`);
        highlight(navIndex);
        prev_navIndex = navIndex;
        //zzz();
    }
}
