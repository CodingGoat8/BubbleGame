
// Ye bubble print krne ke lye
function makeBubbble () {
    
var clutter = "";
for (var i = 1; i<91; i++){
    var x = Math.floor(Math.random()*10);
    clutter += `<div class="bubble"> ${x} </div>`;
}

document.querySelector("#pbottom").innerHTML = clutter;

}

// Ye hit ka functionn change krne ke lye
var hitrn =  0;   // Humne isko yeha funnction ke bahar liya hai kyuki hume isko orr v gagah use krna hai
function getnewHit (){
     hitrn = Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent = hitrn;
}

// Ye timer decrease krne ke lye hai             
var timer  = 60;
function runTimer(){
    var timerint = setInterval(function (){
           if (timer >  0) {
            timer--;
            document.querySelector("#timerval").textContent  = timer;
           }
           else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1> GAME OVER </h1>`;
           }
    },1000);
}

// Ye score badhane ke lye
var score = 0;
function increseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score; 
}

// Ye button click 
document.querySelector("#pbottom").addEventListener("click",
    function (dets){
        var clickednum = Number(dets.target.textContent);
        if( clickednum === hitrn){
            increseScore();
            makeBubbble();
            getnewHit();
        }
    });

 

makeBubbble();
getnewHit();
runTimer();







//  Soo this code is completed 

































