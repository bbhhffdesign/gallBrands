const btns_next = [
  document.getElementById("input_a_next"),
  document.getElementById("input_b_next"),
  document.getElementById("input_c_next"),
  document.getElementById("input_d_next"),
  document.getElementById("input_e_next"),
];
const btns_back = [
  document.getElementById("input_b_back"),
  document.getElementById("input_c_back"),
  document.getElementById("input_d_back"),
  document.getElementById("input_e_back"),
];
const input_frame = document.getElementById("input_frame");

const inputs = [
  document.getElementById("input_a"),
  document.getElementById("input_b"),
  document.getElementById("input_c"),
  document.getElementById("input_d"),
  document.getElementById("input_e"),
];
const inputs_containers = [
  document.getElementById("input_a_container"),
  document.getElementById("input_b_container"),
  document.getElementById("input_c_container"),
  document.getElementById("input_d_container"),
  document.getElementById("input_e_container"),
  document.getElementById("input_f_container"),
];

const btnTerms = document.getElementById("btnTerms");
const btnTermsBack = document.getElementById("termsBack");
const acceptTerms = document.getElementById("acceptTerms");
const termsContainer = document.getElementById("termsContainer");

const place_holders = [
  "Nombre y apellido",
  "Email",
  "¿A qué industria pertenece?\n¿Cuál es su producto o servicio?\n¿Qué pretende lograr con su producto/servicio?",
  "Seleccioná una opción",
];
const nameDisplay = document.getElementById("display_name");
const emailDisplay = document.getElementById("display_email");

const btn_home = document.getElementById("btn_home");
const btn_wpp = document.getElementById("btn_wpp");

const tl_wpp = gsap.timeline({ delay: 0.5, repeat: 3, repeatDelay: 3 });
tl_wpp.to(btn_wpp, { x: "+=7", yoyo: true, repeat: 5, duration: 0.03 });

const tl_close = gsap.timeline({ paused: true, delay: 0.5 });
tl_close.to(input_frame, { height: 0 }).to(input_frame, { width: 0 });

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tl_wpp.play();
      } else {
        tl_wpp.pause();
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(btn_wpp);

const error = function (input, placeholder) {
  gsap.to(input, { x: "+=7", yoyo: true, repeat: 3, duration: 0.03 });
  input.value = "";
  input.placeholder = "\n\nInvalido";
  input.style.borderBottom = "1px solid red";

  setTimeout(() => {
    input.value = "";
    input.placeholder = placeholder;
    input.style.borderBottom = "1px solid var(--textoPrincipal)";
  }, 1000);
};
const errorSelect = function (input) {
  gsap.to(input, { x: "+=7", yoyo: true, repeat: 3, duration: 0.03 });
  input.style.borderBottom = "1px solid red";

  setTimeout(() => {
    input.value = "none";
    input.style.borderBottom = "1px solid var(--textoPrincipal)";
  }, 1000);
};

function addWillChange(element, property) {
  element.style.willChange = property;
}

function removeWillChange(element) {
  element.style.willChange = "";
}

function animateToNextContainer(index) {
  gsap.to(inputs_containers[index], {
    x: `${-100 * (index + 1)}%`,
    onStart: () => addWillChange(inputs_containers[index], "transform"),
    onComplete: () => removeWillChange(inputs_containers[index]),
  });
  gsap.to(inputs_containers[index + 1], {
    x: `${-100 * (index + 1)}%`,
    onStart: () => addWillChange(inputs_containers[index + 1], "transform"),
    onComplete: () => removeWillChange(inputs_containers[index + 1]),
  });
}

function animateToPreviousContainer(index) {
  gsap.to(inputs_containers[index], {
    x: `${-1 * (index * 100)}%`,
    onStart: () => addWillChange(inputs_containers[index], "transform"),
    onComplete: () => removeWillChange(inputs_containers[index]),
  });
  gsap.to(inputs_containers[index + 1], {
    x: `${-1 * (index * 100)}%`,
    onStart: () => addWillChange(inputs_containers[index + 1], "transform"),
    onComplete: () => removeWillChange(inputs_containers[index + 1]),
  });
}

function validateInput(input, placeholder, index) {
  let value = String(input.value.trim());

  if (index === 0 && (value === "" || value.length < 10)) {
    error(input, placeholder);
    return false;
  } else if (
    index === 1 &&
    (value === "" || value.length < 10 || !value.includes("@"))
  ) {
    error(input, placeholder);
    return false;
  } else if (index === 2 && (value === "" || value.length < 10)) {
    error(input, placeholder);
    return false;
  } else if (index === 3 && value === "none") {
    errorSelect(input);
    return false;
  }
  return true;
}

for (let i = 0; i < btns_next.length; i++) {
  btns_next[i].addEventListener("click", () => {
    if (validateInput(inputs[i], place_holders[i], i)) {
      animateToNextContainer(i);
      if (btns_next[i] === btns_next[3]) {
        nameDisplay.innerText = String(inputs[0].value);
        emailDisplay.innerText = String(inputs[1].value);
      }

      if (btns_next[i] === btns_next[4]) {
        gsap.to(input_frame, {
          height: "420px",
          onStart: () => addWillChange(input_frame, "height"),
          onComplete: () => removeWillChange(input_frame),
        }),
          tl_wpp.play();
      }
    }
  });

  if (btns_back[i]) {
    btns_back[i].addEventListener("click", () => {
      animateToPreviousContainer(i);
    });
  }
}

//elimino la funcion del enter en el formulario
document.querySelector("#form").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

//funcion whatsapp
btn_wpp.addEventListener("click", () => {
  const message = `Hola, soy ${inputs[0].value}!`;
  const messageFormatted = message.replaceAll(" ", "%20");

  tl_close.play();
  setTimeout(() => {
    window.location.href = `https://wa.me/2224533928?text=${messageFormatted}`;
  }, 3000);
});

//animacion close
btn_home.addEventListener("click", () => {
  tl_close.play();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});

// logica checkbox
acceptTerms.addEventListener("click", () => {
  acceptTerms.checked
    ? btns_next[4].disabled = false
    : btns_next[4].disabled = true ;
});

const tl_terms = gsap.timeline({ paused: true });
tl_terms
.to(input_frame, { height: 0, duration: 1 })
.to(inputs_containers[4], { opacity: 0, duration: 0 })
.to(termsContainer, { opacity: 1, duration: 0 })
.to(input_frame, { height: "80lvh", duration: 1 });

btnTerms.addEventListener("click", () => {
  termsContainer.style.pointerEvents = "auto";
  tl_terms.play();
});

btnTermsBack.addEventListener("click", () => {
  termsContainer.style.pointerEvents = "none";
  tl_terms.reverse();
});

