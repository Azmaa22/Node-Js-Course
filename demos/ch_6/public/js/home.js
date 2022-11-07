var video ,volumVal,speedVal;
video=document.getElementById("video");

document.getElementById("volum").addEventListener("input",changeVolum);
document.getElementById("speed").addEventListener("input",changeSpeed);

function changeVolum(){
    volumVal = document.getElementById("volum").value;
    video.volume=volumVal;
    
}

function changeSpeed(){
    speedVal = document.getElementById("speed").value;
    video.playbackRate=speedVal;
    
}

function decreaseTime(){
    video.currentTime-=5;
}

function increaseTime(){
    video.currentTime+=5;
}


function play(){
 var btnValue;
    btnValue=document.getElementById("playVideo").value;
    if(btnValue == "play" && video.currentTime!=81){
       video.play();
       document.getElementById("playVideo").value="pause";
       document.getElementById("currentTime").textContent=video.currentTime;
       document.getElementById("myRange").value=video.currentTime;    
    }
    else{
        video.pause();
        document.getElementById("playVideo").value="play";
        document.getElementById("currentTime").textContent=video.currentTime;
       document.getElementById("myRange").value=video.currentTime;  
    }
}

function stop(){
        video.pause();
        video.currentTime=0.00;
        document.getElementById("currentTime").textContent=video.currentTime;
        document.getElementById("myRange").value=video.currentTime;  
}
 
function goToStart(){
    
        video.currentTime=0.00;
        document.getElementById("currentTime").textContent=video.currentTime;
        document.getElementById("myRange").value=video.currentTime;  
}
function goToEnd(){
    
        video.currentTime=81;
        document.getElementById("currentTime").textContent=video.currentTime;
        document.getElementById("myRange").value=video.currentTime;  
}
function muteVideo(){
    var btnMute ;
    btnMute=document.getElementById("muteAudio").value;
    
    if(btnMute == "mute"){
         video.muted=true;
        document.getElementById("volum").value=0.0;
        btnMute=document.getElementById("muteAudio").value="unmute";
    }
    else{
         video.muted=false;
        document.getElementById("volum").value=0.5;
        btnMute=document.getElementById("muteAudio").value="mute";
    }
   
}