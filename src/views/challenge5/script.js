window.addEventListener("hashchange", () => {
  if (location.hash === "#/challenge/5/flex_panels_image_gallery") {
    setTimeout(play, 50);
  }
});

play();

function play() {
  const items = document.querySelectorAll(".item");
  items.forEach(panel => {
    panel.addEventListener("click", (e) => {
      // const openItem = items.find(item => item.propertyName.includes("flex"));
      //   if(openItem){
      //     openItem.classList.toggle("open");
      //     openItem.classList.toggle("active-panel")
      //   }
      panel.classList.toggle("open");
    })

  });
  items.forEach(panel => {
    panel.addEventListener("transitionend", (e) => {
      if (e.propertyName.includes("flex")) {
        panel.classList.toggle("active-panel")
      }
    })

  });

}

