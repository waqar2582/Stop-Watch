let displayTimer = document.querySelector(".displayTimer");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
// let timerId = document.getElementById('timer');

let msec = 0;
let secs = 0;
let mins = 0;
// let mis = 00;

let timerId = null;

startBtn.addEventListener("click", function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});
stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});
resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  displayTimer.innerHTML = `00 : 00 : 00`;
  msec = secs = mins = "0";
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;

    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }

  let minsString = mins < 10 ? `0${mins}` : mins;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let msecString = msec < 10 ? `0${msec}` : msec;

  displayTimer.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
