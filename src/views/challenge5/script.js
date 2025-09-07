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
      panel.classList.toggle("open");
    })

  });
  items.forEach(panel => {
    panel.addEventListener("transitionend", (e) => {
      if (e.propertyName.includes("flex")) {
        const flexGrowValue = getComputedStyle(panel).flexGrow;
        if (flexGrowValue === "4") {
          panel.classList.add("active-panel");
        }
        else
          panel.classList.remove("active-panel");

      }
    })

  });

}

