let skroll = new Skroll()
  /*.add(".header", {
    animation: "zoomIn",
    duration: 600,
  })*/
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
  /*           .add(".anim2",{
                   animation:"flipInX",
                   delay:120,
                   duration:750
           })
           .add(".anim3",{
                   animation:"rotateLeftIn",
                   delay:100,
                   duration:750
           })
           .add(".anim4",{
                   animation:"slideInLeft",
                   delay:80,
                   duration:800
           })
           .add(".anim5",{
                   animation:"growInLeft",
                   delay:80,
                   duration:500,
                   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
           })
           .add(".anim6",{
                   animation:"growInRight",
                   delay:80,
                   duration:500,
                   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)",
           })
           .addAnimation("spinIn",{
                   start:function(el){
                     el.style["transform"] = "rotate(-360deg) scale(.2,.2)";
                     el.style["transform-origin"] ="50% 50%";
                     el.style["opacity"] = 0;
              },
              end:function(el){
                  el.style["transform"] = "rotate(0deg) scale(1,1)";
                  el.style["opacity"] = 1;
              }
           })
           .add(".anim7",{
                   animation:"spinIn",
                   delay:80,
                   duration:500,
                   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
           })
           .add(".anim8",{
                   animation:"fadeInDown",
                   delay:75,
                   duration:150,
                   triggerBottom:1,
                   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
           })*/
  .init();
