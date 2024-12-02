const lenis = new Lenis({
    smooth: true,
    lerp: 0.1, // Reduce el valor de lerp para hacer el scroll más pesado
    wheelMultiplier: 0.5,
    // smoothTouch: true,
    // touchMultiplier: 10 // Aumenta este valor para que el scroll en móviles sea mucho más lento
  });

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);