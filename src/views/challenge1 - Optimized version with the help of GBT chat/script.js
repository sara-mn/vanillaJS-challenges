// Select all keys
const keys = document.querySelectorAll(".qube");

keys.forEach(key => {
  const sound = new Audio(`/sounds/${key.dataset.sound}`);

  // Store audio object inside element for reuse
  key.audio = sound;

  key.addEventListener("click", () => playSound(key));
});

document.addEventListener("keydown", (event) => {
  const key = document.querySelector(`.qube[data-key="${event.key.toLowerCase()}"]`);
  if (key) {
    key.classList.add("focused");
  }
});

document.addEventListener("keyup", (event) => {
  const key = document.querySelector(`.qube[data-key="${event.key.toLowerCase()}"]`);
  if (key) {
    key.classList.remove("focused");
    playSound(key);
  }
});

function playSound(key) {
  if (window.currentSong) {
    window.currentSong.pause();
    window.currentSong.currentTime = 0;
  }
  key.audio.currentTime = 0;
  key.audio.play();
  window.currentSong = key.audio;
}
