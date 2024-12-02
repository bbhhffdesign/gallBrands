document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MotionPathPlugin)

  const icono_1 = document.getElementById("icono-1")
  const icono_2 = document.getElementById("icono-2")
  const icono_3 = document.getElementById("icono-3")
  const icono_4 = document.getElementById("icono-4")

  const caja_icono_1 = document.getElementById("caja_icono1")
  const caja_icono_2 = document.getElementById("caja_icono2")
  const caja_icono_3 = document.getElementById("caja_icono3")
  const caja_icono_4 = document.getElementById("caja_icono4")

  let matchMediaMobile = gsap.matchMedia();
  let matchMediaDesktop = gsap.matchMedia();

  //funciones touch
  let function_touch_in = function (tween_orbita, tween_caja, icono, caja_icono) {
    tween_orbita.pause();
    tween_caja.pause();
    gsap.to(icono, { scale: 1.1, transformOrigin: "50% 50%" })
    caja_icono.style.display = "block"
  }

  let function_touch_out = function (tween_orbita, tween_caja, icono, caja_icono) {
    tween_orbita.resume();
    tween_caja.resume();
    gsap.to(icono, { scale: 1, transformOrigin: "50% 50%" })
    caja_icono.style.display = "none"
  }

  //tweens
  /////////////////////
  const orbita1 = gsap.to(icono_1, {
    duration: 10,
    delay: 0,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#orbita-1",
      start: 0.7,
      end: 1.25,
    }
  });

  const caja1 = gsap.to(caja_icono_1, {
    duration: 10,
    delay: 0,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#orbita-1",
      start: 0.7,
      end: 1.25,
      align: "#orbita-1",
      offsetX: 50,
      offsetY: -20,
    }
  });
  /////////////////////
  const orbita2 = gsap.to(icono_2, {
    duration: 15,
    delay: 4,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#orbita-2",
      start: 0.7,
      end: 1.25,
    }
  });

  const caja2 = gsap.to(caja_icono_2, {
    duration: 15,
    delay: 4,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#orbita-2",
      start: 0.7,
      end: 1.25,
      align: "#orbita-2",
      offsetX: 50,
      offsetY: -20,
    }
  });
  /////////////////////
  const orbita3 = gsap.to(icono_3, {
    duration: 20,
    delay: 2,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#orbita-3",
      start: 0.7,
      end: 1.25,
    }
  });

  const caja3 = gsap.to(caja_icono_3, {
    duration: 20,
    delay: 2,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#orbita-3",
      start: 0.7,
      end: 1.25,
      align: "#orbita-3",
      offsetX: 50,
      offsetY: -20,
    }
  });

  ///////////////////////////
  const orbita4 = gsap.to("#icono-4", {
    duration: 25,
    delay: 2,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#orbita-4",
      start: 0.7,
      end: 1.25,
    }
  });

  const caja4 = gsap.to(caja_icono_4, {
    duration: 25,
    delay: 2,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#orbita-4",
      start: 0.7,
      end: 1.25,
      align: "#orbita-4",
      offsetX: 50,
      offsetY: -20,
    }
  });


  matchMediaDesktop.add("(min-width: 1280px", () => {
    gsap.set(icono_1, { scale: .5, xPercent: 25, yPercent: 25 })
    gsap.set(icono_2, { scale: .5, xPercent: 25, yPercent: 25 })
    gsap.set(icono_3, { scale: .5, xPercent: 25, yPercent: 25 })
    gsap.set(icono_4, { scale: .5, xPercent: 25, yPercent: 25 })


    let caja1Play = true;

    icono_1.addEventListener("click", function () {
      if (caja1Play) {
        caja_icono_1.style.display = "none"
      }
      else {
        caja_icono_1.style.display = "block"
      }
      caja1Play = !caja1Play;

    })


    icono_2.addEventListener("mouseenter", function () {
      orbita2.pause();
      caja2.pause();
      caja_icono_2.style.display = "block"

    })
    icono_2.addEventListener("mouseleave", function () {
      orbita2.resume()
      caja2.resume();
      caja_icono_2.style.display = "none"
    })

    icono_3.addEventListener("mouseenter", function () {
      orbita3.pause();
      caja3.pause();
      caja_icono_3.style.display = "block"

    })
    icono_3.addEventListener("mouseleave", function () {
      orbita3.resume()
      caja3.resume();
      caja_icono_3.style.display = "none"
    })

    icono_4.addEventListener("mouseenter", function () {
      orbita4.pause();
      caja4.pause();
      caja_icono_4.style.display = "block"

    })
    icono_4.addEventListener("mouseleave", function () {
      orbita4.resume()
      caja4.resume();
      caja_icono_4.style.display = "none"
    })

  });


  matchMediaMobile.add("(max-width: 1279px", () => {

  

  //eventListeners
    icono_1.addEventListener("touchstart", function () {
      function_touch_in(orbita1, caja1, icono_1, caja_icono_1)
    });

    icono_1.addEventListener("touchend", function () {
      function_touch_out(orbita1, caja1, icono_1, caja_icono_1)
    });


    icono_2.addEventListener("touchstart", function () {
      function_touch_in(orbita2, caja2, icono_2, caja_icono_2)
    });

    icono_2.addEventListener("touchend", function () {
      function_touch_out(orbita2, caja2, icono_2, caja_icono_2)
    });

    icono_3.addEventListener("touchstart", function () {
      function_touch_in(orbita3, caja3, icono_3, caja_icono_3)
    });

    icono_3.addEventListener("touchend", function () {
      function_touch_out(orbita3, caja3, icono_3, caja_icono_3)
    });


    icono_4.addEventListener("touchstart", function () {
      function_touch_in(orbita4, caja4, icono_4, caja_icono_4)
    });

    icono_4.addEventListener("touchend", function () {
      function_touch_out(orbita4, caja4, icono_4, caja_icono_4)
    });


  });

});
