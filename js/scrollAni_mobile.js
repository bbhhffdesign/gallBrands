gsap.config({
  autoSleep: 1,
});


  
const mmMobile = gsap.matchMedia();

mmMobile.add("(max-width: 768px)", () => {
  
  ///////////GEMBG/////////
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

gsap.timeline({
  scrollTrigger: {
    trigger: ".gemstone-text-1-container",
    start: "30% center",
    end: "70% center",
    // pin: true,
    scrub: true,
    // markers: true,
    onEnter: () => {
      document.getElementById("tsparticles").style.willChange = "opacity";
      gsap.to("#tsparticles", { opacity: 0 });
    },
    onLeave: () => {
      document.getElementById("tsparticles").style.willChange = "auto";
      gemBg_tween.play();
      const particles = tsParticles.domItem(0);
      particles.stop();
    },
    onEnterBack: () => {
      document.getElementById("tsparticles").style.willChange = "opacity";
      gemBg_tween.timeScale(4).reverse();
      const particles = tsParticles.domItem(0);
      particles.refresh();
    },
    onLeaveBack: () => {
      document.getElementById("tsparticles").style.willChange = "auto";
      gsap.to("#tsparticles", { opacity: 1 });
    },
  },
});
////////////////////////

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".gemstone-text-content",
      start: "bottom 90%",
      end: "150% 90%",
      // markers: true,
      onEnter: () => {
        document.querySelectorAll(".gem-txt").forEach((el) => {
          el.style.willChange = "transform, opacity";
        });
      },
      onEnterBack: () => {
        document.querySelectorAll(".gem-txt").forEach((el) => {
          el.style.willChange = "transform, opacity";
        });
      },
      onLeave: () => {
        document.querySelectorAll(".gem-txt").forEach((el) => {
          el.style.willChange = "auto";
        });
      },
      onLeaveBack: () => {
        document.querySelectorAll(".gem-txt").forEach((el) => {
          el.style.willChange = "auto";
        });
      },
    },
  })
  .from("#gemstone-text-7", {
    opacity: 0,
    y: 70,
    // stagger: 0.6,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".paso-1",
      start: "top 80%",
      end: "400% 80%",
    //   markers: true,
      onEnter: () => {
        document.querySelectorAll(".paso-number").forEach((el) => {
          el.style.willChange = "transform, opacity";
        });
        document.querySelectorAll(".paso-text").forEach((el) => {
          el.style.willChange = "transform, opacity";
        });
      },
      onEnterBack: () => {
        document.querySelectorAll(".paso-number").forEach((el) => {
          el.style.willChange = "transform, opacity";
        });
        document.querySelectorAll(".paso-text").forEach((el) => {
          el.style.willChange = "transform, opacity";
        });
      },
      onLeave: () => {
        document.querySelectorAll(".paso-number").forEach((el) => {
          el.style.willChange = "auto";
        });
        document.querySelectorAll(".paso-text").forEach((el) => {
          el.style.willChange = "auto";
        });
      },
      onLeaveBack: () => {
        document.querySelectorAll(".paso-number").forEach((el) => {
          el.style.willChange = "auto";
        });
        document.querySelectorAll(".paso-text").forEach((el) => {
          el.style.willChange = "auto";
        });
      },

    },
  })
  .from(".paso-number", {
    opacity: 0,
    y: "80%",
    stagger: 0.6,
  })
  .from(
    ".paso-text",
    {
      opacity: 0,
      y: "80%",
      stagger: 0.6,
    },
    "<"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".orbita__text",
      start: "bottom 80%",
      end: "150% 80%",
      // markers: true,
      onEnter: () => {
        document.querySelectorAll(".orbitxt").forEach((el) => {
          el.style.willChange = "transform, opacity";
        });
      },
      onEnterBack: () => {
        document.querySelectorAll(".orbitxt").forEach((el) => {
          el.style.willChange = "transform, opacity";
        });
      },
      onLeave: () => {
        document.querySelectorAll(".orbitxt").forEach((el) => {
          el.style.willChange = "auto";
        });
      },
      onLeaveBack: () => {
        document.querySelectorAll(".orbitxt").forEach((el) => {
          el.style.willChange = "auto";
        });
      },
    },
  })
  .from("#orbita-text6", {
    opacity: 0,
    y: "100",
    stagger: 0.3,
  });

})



