// SELECTION OF ELEMENTS
const timer = document.querySelector(".timer");
const startTime = 25;

// BTNS

let playBtn = document.querySelector(".fa-play-circle");
let stopBtn = document.querySelector(".fa-stop-circle");

// STOP BTN
stopBtn.addEventListener("click", () => clearInterval(workTimer));

// TIMER

let workTime = startTime * 60;

// FUNCTIONS;
playBtn.addEventListener("click", () => {
  setInterval(workTimer, 1000);
});

function workTimer() {
  let mins = Math.floor(workTime / 60);
  let secs = workTime % 60;

  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  timer.innerHTML = `${mins} : ${secs}`;
  workTime--;
}
