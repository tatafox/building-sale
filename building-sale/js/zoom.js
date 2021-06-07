const zoomIn = document.querySelector(".zoom__in");

zoomIn.addEventListener("click", deleteElement);

document
  .querySelectorAll(".zoom")
  .forEach((element) => element.addEventListener("click", zoomElements));

function zoomElements(e) {
  const element = e.srcElement;
  const childrenDiv = document.createElement("div");
  zoomIn.appendChild(childrenDiv);
  childrenDiv.innerHTML = element.outerHTML;
  zoomIn.classList.add("zoom--active");
  element.classList.contains("plan__img")
    ? zoomIn.children[0].children[0].classList.add("zoom--width")
    : zoomIn.children[0].children[0].classList.add("zoom--height");
  document.body.classList.add("body--lock");
}

function deleteElement(e) {
  zoomIn.innerHTML = "";
  zoomIn.classList.remove("zoom--active");
  document.body.classList.remove("body--lock");
}
