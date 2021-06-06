const zoomIn = document.querySelector(".zoom__in");
console.log(zoomIn);

zoomIn.addEventListener("click", deleteElement);

document
  .querySelectorAll(".zoom")
  .forEach((element) => element.addEventListener("click", zoomElements));

function zoomElements(e) {
  console.log(window.event, e.srcElement);
  const element = e.srcElement;
  //const newElement = document.createElement("div");
  const childrenDiv = document.createElement("div");
  zoomIn.appendChild(childrenDiv);
  childrenDiv.innerHTML = element.outerHTML;
  zoomIn.classList.add("zoom--active");
  element.classList.contains("plan__img")
    ? zoomIn.children[0].children[0].classList.add("zoom--width")
    : zoomIn.children[0].children[0].classList.add("zoom--height");
  document.body.classList.add("body--lock");
  //newElement.addEventListener("click", deleteElement); //() => (newElement.innerHTML = ""));
  //document.body.appendChild(newElement);
  //element.classList.toggle("zoom--active");
  //element.classList.toggle("zoom--height");
}

function deleteElement(e) {
  console.log(e, e.path[2] instanceof HTMLBodyElement, e.srcElement);
  zoomIn.innerHTML = "";
  zoomIn.classList.remove("zoom--active");
  document.body.classList.remove("body--lock");
  /*e.path[2] instanceof HTMLBodyElement
    ? e.path[1].removeEventListener("click", deleteElement)
    : e.path[2].removeEventListener("click", deleteElement);
  e.path[2] instanceof HTMLBodyElement
    ? (e.path[1].innerHTML = "")
    : (e.path[2].innerHTML = "");*/
}
