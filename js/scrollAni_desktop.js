gsap.config({
  autoSleep: 1,
});
const gemstone_texts = [
  document.getElementById("gemstone-text-2"),
  document.getElementById("gemstone-text-3"),
  document.getElementById("gemstone-text-4"),
  document.getElementById("gemstone-text-5"),
  document.getElementById("gemstone-text-6"),
  document.getElementById("gemstone-text-7"),
];
const pasos_containers = [
  document.getElementById("paso-1-content"),
  document.getElementById("paso-2-content"),
  document.getElementById("paso-3-content"),
];
const pasos_numbers = [
  document.getElementById("paso-number-1"),
  document.getElementById("paso-number-2"),
  document.getElementById("paso-number-3"),
];
const pasos_text = [
  document.getElementById("paso-text-1"),
  document.getElementById("paso-text-2"),
  document.getElementById("paso-text-3"),
];

function gemstoneTexts(arrayTextos, start, end, minus, marker) {
  for (let i = 0; i < arrayTextos.length; i++) {
    const startValue = i === 0 ? `${start}% ${marker}%` : `${start-minus}% ${marker}%`;
    const endValue = i === 0 ? `${end}% ${marker}%` : `${end - minus}% ${marker}%`; 

    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: arrayTextos[i],
        start: startValue,
        end: endValue,
        scrub: true,
        onEnter: () => {
          arrayTextos[i].style.willChange = "transform, opacity, scale";
        },
        onEnterBack: () => {
          arrayTextos[i].style.willChange = "transform, opacity, scale";
        },
        onLeave: () => {
          arrayTextos[i].style.willChange = "auto";
        },
        onLeaveBack: () => {
          arrayTextos[i].style.willChange = "auto";
        },
      },
    });
    tl.from(arrayTextos[i], {
      opacity: 0,
      y: 70,
      scale: 0.9,
      transformOrigin: "0% 50%",
    });
  }
}


function pasosAnim(containers,numbers, texts, start, end, marker){
  containers.forEach((container, i) => {
    const tl = gsap.timeline({
      scrollTrigger:{
        // markers: true,
        trigger: container,
        start: `${start}% ${marker}%`,
        end: `${end}% ${marker}%`,
        onEnter: () => {
          numbers[i].style.willChange = "opacity, transform";
          texts[i].style.willChange = "opacity, transform";
        },
        onLeave: () => {
          numbers[i].style.willChange = "auto";
          texts[i].style.willChange = "auto";
        }
      }
    });
    tl.from(numbers[i],{
      y: 100,
      opacity: 0,
      scale: 0.9,
      transformOrigin: "0% 50%",
    }).from(
      texts[i],
      { y: 100, opacity: 0,
        scale: 0.9,
        transformOrigin: "0% 50%" },
      "<"
    );
  });

}

const mmDesktopGeneral = gsap.matchMedia();

mmDesktopGeneral.add("(min-width: 769px)", () => {
  const servText = [
    document.getElementById("services-text-1"),
    document.getElementById("services-text-2"),
  ];

  for (let i = 0; i < servText.length; i++) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: servText[i],
        start: "-1000% 90%",
        end: "bottom 90%",
        // markers: true,
        onEnter: () => {
          servText[i].style.willChange = "transform";
        },
        onLeave: () => {
          servText[i].style.willChange = "auto";
        },
      },
    });
    tl.from(servText[i], { y: 200 });
  }

  const servBoxesContent = [
    document.getElementById("services-box-1-content"),
    document.getElementById("services-box-2-content"),
    document.getElementById("services-box-3-content"),
  ];
  const servBoxes = [
    document.getElementById("services-box-1"),
    document.getElementById("services-box-2"),
    document.getElementById("services-box-3"),
  ];

  for (let i = 0; i < servBoxes.length; i++) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: servBoxes[i],
        start: "top 90%",
        end: "bottom 90%",
        // markers: true,
        onEnter: () => {
          servBoxesContent[i].style.willChange = "transform";
        },
        onLeave: () => {
          servBoxesContent[i].style.willChange = "auto";
        },
      },
    });
    tl.from(servBoxesContent[i], { y: "100%" });
  }

});

const mmDeskSm = gsap.matchMedia();

mmDeskSm.add("(min-width: 1280px)", () => {
  ///////////GEMBG/////////
  const gemstone_section = document.getElementById("gemstone-text-1-container");
  const gemBg = [
    document.getElementById("borde-ext"),
    document.getElementById("borde-int"),
    document.getElementById("gemstone-sup"),
    document.getElementById("gemstone-inf"),
  ];

  for (let i = 0; i < gemBg.length; i++) {
    const length = gemBg[i].getTotalLength();

    gsap.set(gemBg[i], {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
  }
  const gemBg_tween = gsap.to(".gemstone-bg-path", {
    strokeDashoffset: 0,
    duration: 6,
    paused: true,
  });

  let tl_gemstone = gsap.timeline({
    scrollTrigger: {
      trigger: "#gemstone-text-1-container",
      start: "40% center",
      end: "150% center",
      pin: true,
      scrub: true,
      // markers: true,
      onEnter: () => {
        document.getElementById("tsparticles").style.willChange = "opacity";
      },
      onLeave: () => {
        document.getElementById("tsparticles").style.willChange = "auto";
        const particles = tsParticles.domItem(0);
        particles.stop();
        gemBg_tween.play();
      },
      onEnterBack: () => {
        document.getElementById("tsparticles").style.willChange = "opacity";
        const particles = tsParticles.domItem(0);
        particles.refresh();
        gemBg_tween.timeScale(4).reverse();
      },
      onLeaveBack: () => {
        document.getElementById("tsparticles").style.willChange = "auto";
      },
    },
  });

  tl_gemstone.to("#tsparticles", { opacity: 0 }, "80%");



});

const mm = gsap.matchMedia();

mm.add("(min-width: 769px) and (max-width: 1400px)", () => {
  
  gemstoneTexts(gemstone_texts, 0, 500, 0, 90);
  pasosAnim(pasos_containers,pasos_numbers, pasos_text, "0", "100", 90)

});

mm.add("(min-width: 1401px) and (max-width: 1920px)", () => {
  
  gemstoneTexts(gemstone_texts, "800", "1100", "500", 100);
  pasosAnim(pasos_containers,pasos_numbers, pasos_text, "0", "100", 90)

});
