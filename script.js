console.log("Welcome to spotify");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
let masterPlay = document.querySelector('.df');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Timro Pratiksa", filePath: "songs/1.mp3", coverPath: "covers/1.webp" },
    { songName: "Timi nacha na", filePath: "songs/2.mp3", coverPath: "covers/2.webp" },
    { songName: "Too many nights", filePath: "songs/3.mp3", coverPath: "covers/3.webp" },
    { songName: "Motley Crew", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Becane-A colors show", filePath: "songs/5.mp3", coverPath: "covers/5.webp" },
    { songName: "Bachau(Albatross)", filePath: "songs/6.mp3", coverPath: "covers/6.webp" }

]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// function playing(){
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// }
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //Update Seeker
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (audioElement.duration * myProgressBar.value) / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})