  gsap.config({
    autoSleep: 1,
  });
  
  const system_desktop = gsap.matchMedia();
  
  system_desktop.add("(min-width: 769px)", () => {
  
  
    ScrollTrigger.create({
        trigger: ".orbitas__svg__container",
        start: "top 50%",
        end: "200% 50%",
        //   markers: true,

      onEnter: () => {
        iconos.forEach((el) => {
          el.style.willChange = "transform";
        });
        cajas.forEach((el) => {
          el.style.willChange = "transform";
        });
        animaciones.forEach((el) => {
          el.play()
        });
        cajas.forEach((el) => {
          el.style.display = "none"
        })
      },
      onEnterBack: () => {
        iconos.forEach((el) => {
          el.style.willChange = "transform";
        });
        cajas.forEach((el) => {
          el.style.willChange = "transform";
        });
        animaciones.forEach((el) => {
          el.play()
        });
        cajas.forEach((el) => {
          el.style.display = "none"
        })
      },
      onLeave: () => {
        iconos.forEach((el) => {
          el.style.willChange = "auto";
        });
        cajas.forEach((el) => {
          el.style.willChange = "auto";
        });
        animaciones.forEach((el) => {
          el.pause()
        })
      },
      onLeaveBack: () => {
        iconos.forEach((el) => {
          el.style.willChange = "auto";
        });
        cajas.forEach((el) => {
          el.style.willChange = "auto";
        });
        animaciones.forEach((el) => {
          el.pause()
        })
      },
    })
  
    const animaciones = []
  
    for (let i = 0; i < iconos.length; i++) {
      gsap.set([iconos[i]], { rotate: 90, xPercent: -50, yPercent: -50 });
  
      const animacion = gsap.to(iconos[i], {
        paused: true,
        repeat: -1,
        ease: "none",
        duration: duraciones[i],
        delay: delays[i],
        motionPath: {
          path: orbitas[i],
          align: orbitas[i],
          start: 0.72,
          end: 1.4,
        },
      });
  
      const animacionCaja = gsap.to(cajas[i], {
        paused: true,
        repeat: -1,
        ease: "none",
        duration: duraciones[i],
        delay: delays[i],
        motionPath: {
          path: orbitas[i],
          align: orbitas[i],
          start: 0.72,
          end: 1.4,
        },
      });
  
      animaciones.push(animacion, animacionCaja)
  
      iconos[i].addEventListener("click", () => {
        animacion.paused(!animacion.paused());
        animacionCaja.paused(!animacionCaja.paused());
  
        let display_caja = window.getComputedStyle(cajas[i]).display;
  
        if (animacion.paused()) {
          if (display_caja === "none") {
            cajas[i].style.display = "block";
            gsap.to(iconos[i], { transformOrigin: "50% 50%", scale: 1.1, duration: .3 })
  
            const posicionIcono = iconos[i].getBoundingClientRect();
            const anchoPantalla = window.innerWidth / 2;
  
  
            if (posicionIcono.left > anchoPantalla) {
              cajas[i].style.left = "-10%"
            } else {
              cajas[i].style.left = "1%"
            }
          }
        } else {
          gsap.to(iconos[i], { transformOrigin: "50% 50%", scale: 1 })
          cajas[i].style.display = "none";
          gsap.set(cajas[i], { x: 0 });
        }
      });
    }
  
  
  });
  