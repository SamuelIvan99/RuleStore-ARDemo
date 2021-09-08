function switchSrc(element, name) {
  const modelViewer = document.querySelector("model-viewer");
  const modelBase = "./src/assets/models/" + name;
  const posterBase = "./src/assets/images/" + name;
  modelViewer.src = modelBase + ".glb";
  modelViewer.poster = posterBase + ".png";
  const slides = document.querySelectorAll(".slide");
  slides.forEach((el) => {
    el.classList.remove("selected");
  });
  element.classList.add("selected");
  document.querySelector(".slider").addEventListener("beforexrselect", (ev) => {
    ev.preventDefault();
  });
}
