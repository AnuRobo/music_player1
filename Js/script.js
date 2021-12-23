const music = document.querySelector("audio");
const play = document.querySelector("#play");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const songs = [
  {
    name: "ride",
    title: "Ride",
    artist: "21 pilots",
  },
  {
    name: "heathens",
    title: "Heathens",
    artist: "21 pilots",
  },
  {
    name: "stressed_out",
    title: "Stressed out",
    artist: "21 pilots",
  },
];

// Album image
const albumDisc = document.querySelector("img");

let flag = true;
play.addEventListener("click", function () {
  if (flag) {
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    albumDisc.classList.add("anime");
    flag = false;
  } else {
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    albumDisc.classList.remove("anime");
    flag = true;
  }
});

// Changing the music data
const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  albumDisc.src = `images/${songs.name}.jpg`;
};

let songIndex = 0;
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  //   songIndex += 1;
  //   if (songIndex < songs.length) {
  //     console.log(songIndex);
  //     loadSong(songs[songIndex]);
  //   } else {
  //     songIndex = 0;
  //     loadSong(songs[songIndex]);
  //   }
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
