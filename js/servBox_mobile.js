const cajasServicio = [
  document.getElementById("services-box-1"),
  document.getElementById("services-box-2"),
  document.getElementById("services-box-3"),
];

for (let i = 0; i < cajasServicio.length; i++) {
  cajasServicio[i].addEventListener("touchstart", () => {
    cajasServicio[i].classList.add("active");
  });
  cajasServicio[i].addEventListener("touchend", () => {
    cajasServicio[i].classList.remove("active");
  });
}

const cajaPasos = [
  document.getElementById("paso-1-content"),
  document.getElementById("paso-2-content"),
  document.getElementById("paso-3-content"),
];
const pasosNum = [
  document.getElementById("paso-number-1"),
  document.getElementById("paso-number-2"),
  document.getElementById("paso-number-3"),
];

for (let i = 0; i < cajaPasos.length; i++) {
  cajaPasos[i].addEventListener("touchstart", () => {
    pasosNum[i].classList.add("paso__active");
  });
  cajaPasos[i].addEventListener("touchend", () => {
    pasosNum[i].classList.remove("paso__active");
  });
}

