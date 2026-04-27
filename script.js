let time = 1500;
let timer;
let running = false;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById("timer").innerText =
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  running = false;
  updateDisplay();
}

function toggleMode() {
  document.body.classList.toggle("dark");
}

updateDisplay();