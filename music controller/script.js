let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Update progress automatically while playing
song.ontimeupdate = function(){
    progress.value = song.currentTime;
};

function playPause(){
    if(song.paused){
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } 
    else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// When user drags progress bar
progress.oninput = function(){
    song.currentTime = progress.value;
};