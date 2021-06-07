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
