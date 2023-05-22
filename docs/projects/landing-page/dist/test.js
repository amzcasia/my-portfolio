/*const testBtn = document.getElementById("testBtn");*/

let testBtn = document.querySelector('#testBtn');
let testDiv = document.getElementById("testDiv");

/*
let eventListenerTest = () => {
  console.log("mouse click");
  console.log(testBtn);
}
*/

function eventListenerTest(){
  console.log("Hello World");
  console.log(testBtn);
}

// testBtn.addEventListener (event, function);
// example event: 'click', 'scroll'
// https://www.w3schools.com/jsref/dom_obj_event.asp

testBtn.addEventListener('click', () => { 
  if (testDiv.classList.contains('scale-x-0')){
    testDiv.classList.remove('scale-x-0');
    testDiv.classList.add('scale-x-100');
  }
  else{
    testDiv.classList.add('scale-x-0');
    testDiv.classList.remove('scale-x-100');
  }
});

let menuBtn = document.getElementById('menuBtn');
let smallNavbar = document.getElementById('smallNavbar');
let navbarEntries = document.getElementById('navbarEntries');
let htmlBody = document.querySelector('body');
let menuIcon = document.getElementById('menuIcon');
let htmlHeader = document.getElementById('htmlHeader');
//let smallNavbarContainer = document.getElementById('small_navbar_container');

menuBtn.addEventListener('click', () => {
    if (false){ return null }; 
    if (smallNavbar.classList.contains('hidden')){
        smallNavbar.classList.remove('hidden');
        htmlBody.classList.add('overflow-hidden');
        menuIcon.setAttribute('src','..\\images\\close.png');

        //htmlHeader.classList.remove('-translate-y-[70px]')

        setTimeout( () => {
            navbarEntries.classList.remove('translate-x-full');
            htmlHeader.classList.remove('-translate-y-[70px]');
        },10);
        
        //navbarEntries.classList.add('translate-x-full');
    }
    else{
        navbarEntries.classList.add('translate-x-full');
        htmlBody.classList.remove('overflow-hidden');
        menuIcon.setAttribute('src','..\\images\\more.png');
        setTimeout( () => {
            smallNavbar.classList.add('hidden');
        },300);
        
    }
});



let prevY = 0;

window.addEventListener('scroll', () => {
  if (false){ return null }; 
  if (Math.abs(prevY - window.scrollY) > 20){
      if (prevY > window.scrollY ){
          //console.log("Scroll Up");
          //htmlHeader.classList.remove('hidden');
          htmlHeader.classList.remove('-translate-y-[70px]')

          
      }
      else{
          //console.log("Scroll Down");
          htmlHeader.classList.add('-translate-y-[70px]')
          
          
      }
      prevY = window.scrollY;

      console.log(prevY);
  }   
});


