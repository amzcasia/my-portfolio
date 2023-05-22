let itemContainer = document.getElementById('itemContainer');
let itemElements = document.querySelectorAll('.itemElement');
let shiftLeft = document.getElementById('shiftLeft');
let shiftRight = document.getElementById('shiftRight');
let beginBtn = document.getElementById('beginBtn');
let testBtn = document.getElementById('testBtn');
let menuBtn = document.getElementById('menuBtn');
let navMenu = document.getElementById('navMenu');
let menuHamburger = document.getElementById('menuHamburger');
let menuClose = document.getElementById('menuClose');
let navItems = document.getElementById('navItems');

let shiftIndex = 3;
let maxIndex = itemElements.length;
//console.log(`itemElement# 3 is: ${itemElements[2]}`);

itemContainer.style.transform = `translate(-900px)`;


function nextItem(){
    itemContainer.style.transition = 'transform 0.3s ease-in-out';
    shiftIndex++;
    console.log(shiftIndex);
    itemContainer.style.transform = `translate(${-shiftIndex*300}px)`;
    setTimeout(()=>{
        if(shiftIndex >= maxIndex-3){ //maxindex = 11, will shift at 8
        console.log('reset at: ' + shiftIndex);
        itemContainer.style.transition = 'none';
        itemContainer.style.transitionDuration = '0s';
            console.log('done waiting');            
            itemContainer.style.transform = `translate(-900px)`;
            shiftIndex = 3;
            
        }
    },301);
}

/*
0   3    0       *
1   4   -300
2   5   -600
3   1   -900
4   2   -1200
5   3   -1500
6   4   -1800
7   5   -2100
8   1   -2400 *
9   2   -2700
10  3   -3000


*/

function prevItem(){
    itemContainer.style.transition = 'transform 0.3s ease-in-out';
    shiftIndex--;
    itemContainer.style.transform = `translate(${-shiftIndex*300}px)`;
    
    console.log(shiftIndex);
    setTimeout(()=>{
        if(shiftIndex <= 0){ //maxindex = 11, will shift at 8
            console.log('prev');
            itemContainer.style.transition = 'none';    
            itemContainer.style.transitionDuration = '0s';
            itemContainer.style.transform = `translate(-1500px)`;
            shiftIndex = 5;
        }
    },310);
}


shiftRight.addEventListener('click', () => {nextItem()});
/*
shiftRight.addEventListener('click', () => {
    
    shiftIndex++;
    console.log(shiftIndex);
    itemContainer.style.transform = `translate(${-shiftIndex*300}px)`;
    setTimeout(()=>{
        if(shiftIndex >= maxIndex-3){ //maxindex = 11, will shift at 8
        console.log('reset at: ' + shiftIndex);
        itemContainer.style.transition = 'none';
        itemContainer.style.transitionDuration = '0s';
            console.log('done waiting');            
            itemContainer.style.transform = `translate(-900px)`;
            shiftIndex = 3;
            itemContainer.style.transition = 'transform 0.3s ease-in-out';
        }
    },301);
});*/

//beginBtn.addEventListener('click', nextItem());

shiftLeft.addEventListener('click', () => {prevItem()});

    /*
    console.log('left')
    if(shiftIndex < 1) return;
    shiftIndex--;
    console.log(shiftIndex);
    itemContainer.style.transform = `translate(${-shiftIndex*300}px)`;
    setTimeout(nextItem(), 400);
    //nextItem();
    
    
});  */

itemContainer.addEventListener('transitionend',() =>{
    //console.log('test');
    //nextItem();
});


let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


testBtn.addEventListener('click',()=>{
    let runningCode = true;
    //console.log('start timer');
   // today = new Date();
    //time = today.getMilliseconds();
    //console.log(time);
    //setTimeout(()=>{
    //    runningCode = false;
    //},1000);
    //while(false){
    today = new Date();
    time = today.getMilliseconds();
    let startTime = today.getMilliseconds();
    let curTime = today.getMilliseconds();
    

    let delay = 800;
    //let offset = 
    //startTime = (startTime >= (1000-delay)) ? startTime - delay : startTime;

    if (startTime >= 1000 - delay){
        startTime -= delay;
    }

    console.log('start timer: ' + startTime);

    start = 0;
    

    while (curTime-startTime < delay){
        today = new Date();
        curTime = today.getMilliseconds();
        //console.log(curTime);
    }
    console.log(delay + 'ms passed. It is now: '+ curTime);
    
    
    //console.log('after 1 second')


});

let menuState = false;

menuBtn.addEventListener('click', () => {
    if(!menuState){
        menuHamburger.classList.add('hidden');
        menuClose.classList.remove('hidden');

        navMenu.classList.remove('hidden');
        setTimeout(() => {
           //navMenu.classList.remove('translate-y-[-100%]');
           navMenu.classList.remove('h-0');
           navMenu.classList.add('h-full');
           
           
            
        },1);
        menuState =  true;
        
    }else{
        menuHamburger.classList.remove('hidden');
        menuClose.classList.add('hidden');
        //navMenu.classList.add('hidden');
        //navMenu.classList.add('translate-y-[-100%]');
        
        navMenu.classList.remove('h-full');
        navMenu.classList.add('h-0');
        menuState =  false;
        setTimeout(() => {
            navMenu.classList.add('hidden');
        },200);
    }
    console.log(menuState);

});



