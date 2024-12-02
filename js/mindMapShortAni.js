const heroContainer = document.getElementById("hero");
const mindMapContainer = document.getElementById("mindMapContainer");
const mindMap = document.getElementById("mindMap");
const aniStartBtn = document.getElementById("scrollDown");
const btnToEnd = document.getElementById("mindmapToEnd");

//texto
const dueño = document.getElementById("owner");
const agenda = document.getElementById("agenda");
const posicionarMarca = document.getElementById("posicionarMarca");
const posicionarMarca2 = document.getElementById("posicionarMarca2");
const branding = document.getElementById("branding");
const excelente = document.getElementById("excelente");
const aumentarVentas = document.getElementById("aumentarVentas");
const agendaBig = document.getElementById("agendaBig");
const agendaBigBg = document.getElementById("agendaBigBg");
const estrategia = document.getElementById("estrategia");
const camino = document.getElementById("camino");

//si/no
const si1 = document.getElementById("si1");
const si2 = document.getElementById("si2");
const si3 = document.getElementById("si3");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const no3 = document.getElementById("no3");

//icono like
const iconoLike = document.getElementById("iconoLike");


// flechas recorrido principal
for (let i = 1; i <= 7; i++) {
    const flecha = document.getElementById(`flecha${i}`);
    const flechaLength = flecha.getTotalLength();
  
    flecha.style.strokeDasharray = flechaLength;
    flecha.style.strokeDashoffset = flechaLength;
  
    window[`flecha${i}`] = flecha;
  }

  let tl_mindmap = gsap.timeline({
    paused: true,
  });

  tl_mindmap
  .to(mindMap, {opacity: 1})
      .to(aniStartBtn, {y: "-50vh"})
      .from(dueño, { opacity: 0 })
      .to(flecha1, { strokeDashoffset: 0 })
      .to(btnToEnd, {display: "block"})
      .from(no1, { opacity: 0 }, "<50%")
      .from(agenda, { opacity: 0 })
      .to(flecha2, { strokeDashoffset: 0 })
      .from(si1, { opacity: 0 }, "<50%")
      .from(posicionarMarca, { opacity: 0 })
      .from(posicionarMarca2, { opacity: 0 }, "<")
      .to(flecha3, { strokeDashoffset: 0 })
      .from(si2, { opacity: 0 }, "<50%")
      .from(branding, { opacity: 0 })
      .to(flecha4, { strokeDashoffset: 0 })
      .from(no2, { opacity: 0 }, "<50%")
      .from(excelente, { opacity: 0 })
      .from(
        iconoLike,
        {
          opacity: 0,
          scale: 0.5,
          transformOrigin: "50% 50%",
          ease: "bounce.out",
          duration: 0.8,
        },
        "<"
      )
      .from(aumentarVentas, { opacity: 0 })
      .to(flecha5, { strokeDashoffset: 0 })
      .from(si3, { opacity: 0 }, "<50%")
      .from(estrategia, { opacity: 0 })
      .to(flecha6, { strokeDashoffset: 0 })
      .to(flecha7, { strokeDashoffset: 0 }, "<")
      .from(agendaBig, { opacity: 0 })
      .from(agendaBigBg, { opacity: 0 }, "<")

tl_mindmap.duration(15);

aniStartBtn.addEventListener("click", ()=>{
    tl_mindmap.play()
})

btnToEnd.addEventListener("click", ()=> {
  tl_mindmap.seek("end");
})