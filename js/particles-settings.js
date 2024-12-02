(async () => {
  await loadFull(tsParticles);

  // Verificar el ancho del viewport
  const isDesktop = window.innerWidth > 768;
  const particleQuantity = isDesktop ? 6 : 3;

  await tsParticles.load({
    id: "tsparticles",
    options: {
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 0,
        },
        color: {
          value: "#0B4599",
        },
        links: {
          color: "#003399",
        },
        move: {
          enable: true,
          speed: .5,
          outModes: {
            default: "bounce",
          },
        },
        size: {
          value: { min: 150, max: 200 },
        },
        opacity: {
          value: 1,
        },
      },
      emitters: {
        direction: "none",
        position: {
          x: 50,
          y: 50,
        },
        rate: {
          quantity: particleQuantity,
          delay: 1,
        },
        autoPlay: true,
        life: {
          duration: 1,
          count: 1,
        },
        particles: {
          move: {
            speed: 1.5,
            outModes: {
              default: "out",
            },
          },
          size: {
            value: { min: 200, max: 250 },
          },
          opacity: {
            value: 1,
          },
        },
      },
    },
  });
})();
