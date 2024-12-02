// const bg_form_paths = [
//   document.getElementById("borde-ext-form"),
//   document.getElementById("borde-int-form"),
//   document.getElementById("gall-form"),
//   document.getElementById("gemstone-sup-form"),
//   document.getElementById("gemstone-inf-form"),
// ];



const bg_form_paths = document.getElementsByClassName("bgpath"); 

for (let i = 0; i < bg_form_paths.length; i++) {
  let length = bg_form_paths[i].getTotalLength();
  bg_form_paths[i].style.strokeDasharray = length;
  bg_form_paths[i].style.strokeDashoffset = length;
}


// // Inicializar el strokeDasharray y strokeDashoffset para cada elemento
// for (let i = 0; i < bg_form_paths.length; i++) {
//   let length = bg_form_paths[i].getTotalLength();
//   bg_form_paths[i].style.strokeDasharray = length;
//   bg_form_paths[i].style.strokeDashoffset = length;
// }

const tl_gemstone_bg = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2 });

// Función para agregar will-change
function addWillChange(element) {
  element.style.willChange = 'stroke-dashoffset';
}

// Función para eliminar will-change
function removeWillChange(element) {
  element.style.willChange = 'auto';
}

tl_gemstone_bg
  .to(bg_form_paths[0], {
    strokeDashoffset: 0,
    duration: 3,
    onStart: () => addWillChange(bg_form_paths[0]), // Agregar will-change al inicio
    onComplete: () => removeWillChange(bg_form_paths[0]), // Eliminar will-change al finalizar
  })
  .to(bg_form_paths[1], {
    strokeDashoffset: 0,
    duration: 3,
    onStart: () => addWillChange(bg_form_paths[1]),
    onComplete: () => removeWillChange(bg_form_paths[1]),
  }, "<")
  .to(bg_form_paths[2], {
    strokeDashoffset: 0,
    duration: 3,
    onStart: () => addWillChange(bg_form_paths[2]),
    onComplete: () => removeWillChange(bg_form_paths[2]),
  })
  .to(bg_form_paths[2], {
    strokeDashoffset: bg_form_paths[2].getTotalLength(),
    duration: 4,
    delay: 2,
    onStart: () => addWillChange(bg_form_paths[2]),
    onComplete: () => removeWillChange(bg_form_paths[2]),
  })
  .to(bg_form_paths[3], {
    ease: "power1.inOut",
    strokeDashoffset: 0,
    duration: 5,
    delay: 1,
    onStart: () => addWillChange(bg_form_paths[3]),
    onComplete: () => removeWillChange(bg_form_paths[3]),
  })
  .to(bg_form_paths[4], {
    ease: "power1.inOut",
    strokeDashoffset: 0,
    duration: 5,
    onStart: () => addWillChange(bg_form_paths[4]),
    onComplete: () => removeWillChange(bg_form_paths[4]),
  }, "<");
