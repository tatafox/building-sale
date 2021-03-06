const galleryItem = document.querySelectorAll(".gallery__img");
const galleryList = document.querySelector(".gallery__wrapper");
const basicOffset = galleryItem[0].offsetWidth > 400 ? 215 : 195;
const offset =
  ((document.documentElement.clientWidth - 1900) / 10) * 5 -
  basicOffset -
  galleryItem[0].offsetWidth;
galleryList.style.left = offset + "px";

function pressRightSlider() {
  slide(".gallery__img", ".gallery__wrapper", false, "afterend");
}

function pressLeftSlider() {
  slide(".gallery__img", ".gallery__wrapper", true, "beforebegin");
}

function slide(itemName, listName, left, insertName, listWidth) {
  const item = document.querySelectorAll(itemName);
  const list = document.querySelector(listName);
  list.classList.add("slider-animation");
  const itemWidth = listWidth ? list.clientWidth : item[0].clientWidth;
  const leftOffset = left ? offset + itemWidth + 20 : offset - itemWidth - 20;
  list.style.left = leftOffset + "px";
  setTimeout(() => {
    list.classList.remove("slider-animation");
    let insertNumber = 0;
    let deleteNumber = 0;
    let itemLength = item.length;
    left ? (deleteNumber = itemLength - 1) : (insertNumber = itemLength - 1);
    const insItem = left ? itemLength - 3 : 2;
    item[insertNumber].insertAdjacentHTML(insertName, item[insItem].outerHTML);
    item[deleteNumber].remove();
    list.style.left = offset + "px";
  }, 300);
}

document
  .querySelectorAll(".gallery__button--left")
  .forEach((element) => element.addEventListener("click", pressLeftSlider));
document
  .querySelectorAll(".gallery__button--right")
  .forEach((element) => element.addEventListener("click", pressRightSlider));
