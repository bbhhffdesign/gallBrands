const countRun = document.getElementById("countRun");
const countEnd = document.getElementById("countEnd");
const daysBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");

const countMsj = document.getElementById("counter_msj")

let countdownInterval;

function updateVisibility() {
    const targetDate = new Date("May 5, 2025 12:32:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countRun.style.display = "none";
    countEnd.style.display = "flex";

    daysBox.innerText = '00:';
    hoursBox.innerText = '00:';
    minutesBox.innerText = '00:';
    secondsBox.innerText = '00';
  } else {
    countRun.style.display = "flex";
    countEnd.style.display = "none";

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

    daysBox.innerText = days + ":";
    hoursBox.innerText = hours + ":";
    minutesBox.innerText = minutes + ":";
    secondsBox.innerText = seconds;
  }
}

updateVisibility();
countdownInterval = setInterval(updateVisibility, 1000);




const tl_countText = gsap.timeline({repeat:-1});

tl_countText
  .to(countRun,{y:"-100%", delay:3})
  .to(countMsj, {y:"-100%"}, "<")
  .to(countRun, {y: 0, delay:5})
  .to(countMsj, {y: 0}, "<")
  
