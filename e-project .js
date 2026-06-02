let audio = document.getElementById("audioPlayer");
let songName = document.getElementById("songName");

function playSong(src, name) {
    audio.src = src;
    audio.play();
    songName.innerText = "Playing: " + name;
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
let songList = document.getElementById("songList");
let audio  = new Audio();

songs.forEach((song, index) => {
  songList.innerHTML += `
    <div class="col-md-2 col-6 mb-3">
      <div class="music-card" onclick="playSong(${index})">
        <img src="${song.cover}">
        <p>${song.name}</p>
        <small>${song.artist}</small>
      </div>
    </div>
  `;
});
function openModal(type) {
  document.getElementById("overlay").style.display = "block";

  if (type === "login") {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
  } else {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
  }
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "none";
}