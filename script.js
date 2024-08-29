var timer=60;
var score=0;
var hitrn=0;


function incScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i=1 ; i<=160 ;i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timeInt=setInterval(function(){
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timerVal").textContent=timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER<h1>`;
        }
        
    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn)
    {
        incScore();
        getNewHit();
        makeBubble();
    }   
    else{
        timer=0;
    }
    
})


getNewHit();
makeBubble();
runTimer();