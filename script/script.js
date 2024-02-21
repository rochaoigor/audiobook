const playPause = document.getElementById('play-pause');
const audio = document.getElementById('player');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('prev');
const chapterName = document.getElementById('chapter')
const numChapter = 30;
let startAudio = false;
let chapter = 1

function playTrack() {
    audio.play();
    playPause.classList.remove("bi-play-circle");
    playPause.classList.add("bi-pause-circle")
    startAudio = true;
}


function pauseTrack() {
    audio.pause();
    playPause.classList.add("bi-play-circle");
    playPause.classList.remove("bi-pause-circle");
    startAudio = false;
}

function playAndPauseTrack() {
    if (startAudio === true){
        pauseTrack();
    }else {
        playTrack();
    }
};


function nextChapter() {
    chapter += 1;
    audio.src = 'books/dom-casmurro/'+ chapter + ".mp3";
    chapterName.innerText = "Capitulo " + chapter;
    playTrack();
}

function previousChapter() {
    if(chapter === 1) {
        chapter = numChapter;

    }else {
        chapter -= 1;
    }

    audio.src = 'books/dom-casmurro/'+ chapter + ".mp3";
    chapterName.innerText = "Capitulo " + chapter;
    playTrack();
}

playPause.addEventListener('click', playAndPauseTrack)
nextButton.addEventListener('click', nextChapter)
previousButton.addEventListener('click', previousChapter)
audio.addEventListener('ended', nextChapter)