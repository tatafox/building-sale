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

async function slide(itemName, listName, left, insertName, listWidth) {
  const item = document.querySelectorAll(itemName);
  // const newItem = item;
  const list = document.querySelector(listName);
  const newList = list;
  list.classList.add("slider-animation");
  //setTimeout(() => {
  const itemWidth = listWidth ? list.clientWidth : item[0].clientWidth;
  const leftOffset = left ? itemWidth + 20 : 0 - itemWidth - 20;
  //transform: translateX(...)
  list.style.transform = "translateX(" + leftOffset + "px)";
  //setTimeout(() => {
  let insertNumber = 0;
  let deleteNumber = 0;
  let itemLength = item.length;
  left ? (deleteNumber = itemLength - 1) : (insertNumber = itemLength - 1);
  const insItem = left ? itemLength - 3 : 2;
  await sleep(300);
  item[insertNumber].insertAdjacentHTML(insertName, item[insItem].outerHTML);
  list.classList.remove("slider-animation");
  item[deleteNumber].remove();
  list.style.transform = "translateX(0px)";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document
  .querySelectorAll(".gallery__button--left")
  .forEach((element) => element.addEventListener("click", pressLeftSlider));
document
  .querySelectorAll(".gallery__button--right")
  .forEach((element) => element.addEventListener("click", pressRightSlider));
