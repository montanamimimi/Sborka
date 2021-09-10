import bundlerPic1 from '../media/picture1.jpg';
import bundlerPic2 from '../media/picture2.jpg';
import bundlerPic3 from '../media/picture3.jpg';
import bundlerPic4 from '../media/picture4.jpg';
import bundlerPic5 from '../media/picture5.jpg';
import bundlerPic6 from '../media/picture6.jpg';
import music1 from '../media/music1.mp3';
import music2 from '../media/music2.mp3';
import video1 from '../media/video1.mp4';
import video2 from '../media/video2.mp4';
import '../css/main.scss';


const picArray = [
    { id: 1, src: bundlerPic1, text: "Cat 1"},
    { id: 2, src: bundlerPic2, text: "Cat 2"},
    { id: 3, src: bundlerPic3, text: "Cat 3"},
    { id: 4, src: bundlerPic4, text: "Cat 4"},
    { id: 5, src: bundlerPic5, text: "Cat 5"},
    { id: 6, src: bundlerPic6, text: "Cat 6"},
];

const soundArray = [
    { id: 1, src: music1, text: "Sound 1"},
    { id: 2, src: music2, text: "Sound 2"},
];

const videoArray = [
    { id: 1, src: video1, text: "Video 1"},
    { id: 2, src: video2, text: "Video 2"},
]


gallery = document.getElementById('gallery');

picArray.forEach((item) => {
    let picDiv = `<div class="cats-pic" id="catsPic${item.id}"><h2>${item.text}</h2></div>`;
    gallery.insertAdjacentHTML('beforeend', picDiv);

    let thisItem = document.getElementById(`catsPic${item.id}`);

    let pic = document.createElement('img');
    pic.src = item.src;
    pic.onload = () => {
        thisItem.appendChild(pic);
    };
    
});

soundArray.forEach((item) => {
    let soundDiv = `<div class="sound-div" id="soundPic${item.id}"><h2>${item.text}</h2></div>`;
    gallery.insertAdjacentHTML('beforeend', soundDiv);

    let thisItem = document.getElementById(`soundPic${item.id}`);

    let sound = document.createElement('audio');
    sound.src = item.src;
    sound.id = `audio-player${item.id}`;
    sound.controls = 'controls';
    thisItem.appendChild(sound);   
});

videoArray.forEach((item) => {
    let videoDiv = `<div class="video-div" id="videoPic${item.id}"><h2>${item.text}</h2></div>`;
    gallery.insertAdjacentHTML('beforeend', videoDiv);

    let thisItem = document.getElementById(`videoPic${item.id}`);

    let movie = document.createElement('video');
    movie.src = item.src;
    movie.id = `video-player${item.id}`;
    movie.controls = 'controls';
    movie.width = '300';
    thisItem.appendChild(movie);   
})


