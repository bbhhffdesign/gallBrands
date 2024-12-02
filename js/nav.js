const tween_nav = [
  gsap.to("#navbar", { paused: true, y: -100 }),
  gsap.from("#themeSwitch2", { paused: true, x: 100 }),
  gsap.from("#switch3",{paused: true, y: 100})

];

ScrollTrigger.create({
  // markers: true,
    trigger: "#gemstone-section",
  start: "top top",
  end: "110% top",
  onEnter: () => {
    document.querySelector("#navbar").style.willChange = "transform";
    tween_nav.forEach(tween => tween.play())
  },
  onLeave: () => {
    document.querySelector("#navbar").style.willChange = "auto";
  },
  onEnterBack: () => {
    document.querySelector("#navbar").style.willChange = "transform";
  },
  onLeaveBack: () => {
    document.querySelector("#navbar").style.willChange = "auto";
    tween_nav.forEach(tween => tween.reverse())
  },
});
