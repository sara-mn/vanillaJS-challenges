// document.querySelectorAll("button").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // pause any currently playing song
//     if (window.currentSong) {
//       window.currentSong.pause();
//       window.currentSong.currentTime = 0;
//     }
//
//     const song = btn.querySelector("audio");
//     if (song) {
//       song.play();
//       window.currentSong = song; // keep track of playing song
//     }
//   });
// });
//
// // Keyboard support: press a key matching button's id
// document.addEventListener("keydown", (event) => {
//   const playBtn = document.getElementById(event.key);
//   if (playBtn) {
//     playBtn.click(); // trigger the button click
//   }
// });
// let song;
// let playBtn;
//
// playBtn?.addEventListener("click", () => {
//   song?.play(); // Play the song
// });
//
// document.addEventListener("keydown", function (event) {
//
//   // song?.pause();
//   playBtn = document.getElementById(event.key);
//
//
//   if (playBtn) {
//     // song?.pause();
//     song = playBtn.querySelector('audio');
//     playBtn.click();
//   }
//
// });

// document.addEventListener("click", function (event) {
//
//   song?.pause();
//   let playBtn = document.getElementById(event.key);
//
//
//   if (playBtn) {
//     song.pause();
//     song = playBtn.querySelector('audio');
//     playBtn.click();
//   }
//   playBtn.addEventListener("click", () => {
//     song.play(); // Play the song
//   });
// });
