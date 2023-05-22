/*

<div class="code_box">
    <div class="bg-slate-900 flex rounded-t-xl items-center justify-between px-5 pt-1">
        <div class="tab"></div> <!-- Tab Title Here -->
        <div>
            <span id="codex" class="hidden opacity-0 bg-slate-500 rounded-md pl-1 mr-1 border border-slate-500 text-slate-900 text-base transition duration-200" >
                <!-- Replace codex -->
                <i class="fa-solid fa-caret-down"></i>
                Copied
            </span>
            <button onclick="copy('code_x','codex')" class="hover:text-slate-700 duration-200">
                <!-- Replace (code_x, codex) -->
                <i class="fa-solid fa-copy text-xl"></i>
            </button>
        </div>
    </div>
<!-- replace code_x -->
<pre id="code_x" class="p-2">



*/


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
    
    // notActiveMenu.classList.remove('texthighlight');
    setTimeout( ()=>{
        activeMenu.classList.add('text-[#55BFFB]');
        // activeMenu.classList.add('texthighlight');
    },1);
    

    prev_activeMenu = nthChild;

    // console.log(notActiveMenu.textContent);
}


/*

1   0
2   140
3   1603
4   2120
5   2688
6   2852
7   3467
8   3831
9   4739
10  5573
11  6321
12  6413
13  6529
14  7269
15  7730

*/

let body = document.querySelector('body');
let navIndex = 1;
let prev_navIndex = 0;

let navScroll = document.getElementById('contents');

navScroll.addEventListener('scroll', () => {
    console.log(navScroll.scrollTop);
    //console.log("test");
});




document.addEventListener('scroll', () => {
    checkYpos(window.scrollY);
    navScroll.scrollTop = 90 * ((window.scrollY) / 7730);
});
    //console.log(window.scrollY);
//checkYpos(window.scrollY);

function checkYpos(yPos){
    // yPos = window.scrollY;
    
    //console.log(yPos);
    if (yPos < 140){
        navIndex = 1;
    }
    else if( yPos >= 140 && yPos < 1603){
        navIndex = 2;
    }
    else if( yPos >= 1603 && yPos < 2120){
        navIndex = 3;
    }
    else if( yPos >= 2120 && yPos < 2688){
        navIndex = 4;
    }
    else if( yPos >= 2688 && yPos < 2852){
        navIndex = 5;
    }
    else if( yPos >= 2852 && yPos < 3467){
        navIndex = 6;
    }
    else if( yPos >= 3467 && yPos < 3831){
        navIndex = 7;
    }
    else if( yPos >= 3831 && yPos < 4739){
        navIndex = 8;
    }
    else if( yPos >= 4739  && yPos < 5573){
        navIndex = 9;
    }
    else if( yPos >= 5573 && yPos < 6321){
        navIndex = 10;
    }
    else if( yPos >= 6321 && yPos < 6413 ){
        navIndex = 11;
    }
    else if( yPos >= 6413  && yPos < 6529 ){
        navIndex = 12;
    }
    else if( yPos  >= 6529 && yPos < 7269){
        navIndex = 13;
    }
    else if (yPos >= 7269 && yPos < 7600){
        navIndex = 14;
    }
    else{
        navIndex = 15;
    }
    if (prev_navIndex != navIndex){
        //console.log(`y = ${yPos}; navIndex = ${navIndex}`);
        highlight(navIndex);
        prev_navIndex = navIndex;
        //zzz();
    }
}
