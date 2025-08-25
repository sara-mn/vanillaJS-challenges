const spacingElement = document.getElementById("spacing");
const blurElement = document.getElementById("blur");
const colorElement = document.getElementById("colorInput");


spacingElement.addEventListener("input", (event) => {
 console.log(event.target.value);
  const mainElement = document.getElementsByClassName("main-bg")[0];
  mainElement.style.backgroundPositionX = 50 + (event.target.valueAsNumber / 2) + "%";
  mainElement.style.backgroundPositionY = 50 + (event.target.valueAsNumber / 2) + "%";
});

blurElement.addEventListener("input", (event) => {
 console.log(event.target.value);
  const mainElement = document.getElementsByClassName("play")[0];
  mainElement.style.backdropFilter = `blur(${event.target.value}px)`
});

colorElement.addEventListener("input", (event) => {
 console.log(event.target.value);
  const mainElement = document.getElementsByClassName("main-bg")[0];
  mainElement.style.backgroundColor = `${event.target.value}`
});
