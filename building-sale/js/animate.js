let skroll = new Skroll()
  .add(".fade-in", {
    animation: "fadeInUp",
    delay: 120,
    duration: 600,
    wait: 250,
  })
  .add(".slide-in--left", {
    animation: "slideInLeft",
    delay: 80,
    duration: 800,
  })
  .add(".slide-in--right", {
    animation: "slideInRight",
    delay: 80,
    duration: 800,
  })
  .add(".flip-in--x", {
    animation: "flipInX",
    delay: 120,
    duration: 750,
  })
  .init();

window.onresize = function (event) {
  document.location.reload(true);
};

function pressMenu(e) {
  const href = e.srcElement.href.split("#")[1];
  const idElem = document.querySelector("#" + href);
  console.log(idElem.parentNode.querySelectorAll(".fade-in"));
  idElem.parentNode.querySelectorAll(".fade-in").forEach((el) => {
    el.style.transform = "translate(0px, 0%)";
    el.style.opacity = 1;
    el.style.transition = "all 600ms ease 0s";
  });
  idElem.parentNode.querySelectorAll(".slide-in--left").forEach((el) => {
    el.style.transform = "translate(0%, 0px) scale(1, 1)";
    el.style.opacity = 1;
    el.style.transition = "all 600ms ease 0s";
  });
}

document
  .querySelectorAll(".menu__link")
  .forEach((element) => element.addEventListener("click", pressMenu));
