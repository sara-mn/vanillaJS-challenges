document.querySelectorAll(".qube").forEach((btn) => {
  btn.addEventListener("click", () => {

    if (window.currentSong) {
      window.currentSong.pause();
      window.currentSong.currentTime = 0;
    }

    const song = btn.querySelector("audio");
    if (song) {
      song.play().then();
      window.currentSong = song;
    }
  });

  btn.addEventListener("mousedown", (event) => {
    btn.firstElementChild.classList.add("focused");
  });

  btn.addEventListener("mouseup", (event) => {
    btn.firstElementChild.classList.remove("focused");
  });

  btn.addEventListener("mouseleave", (event) => {
    btn.firstElementChild.classList.remove("focused");
  });

});

let playBtn;

document.addEventListener("keydown", (event) => {
  playBtn = document.getElementById(event.key);
  if (playBtn) {
    playBtn.classList.add("focused");
  }
});

document.addEventListener("keyup", (event) => {
  playBtn = document.getElementById(event.key);
  if (playBtn) {
    playBtn.click();
    playBtn.classList.remove("focused");
  }
});



