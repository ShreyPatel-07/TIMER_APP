let timerInterval = null;
function startTimer() {
  const hours = parseInt(document.getElementById("Hours").value);
  const minutes = parseInt(document.getElementById("Minutes").value);
  const seconds = parseInt(document.getElementById("Seconds").value);
  console.log(hours, minutes, seconds);

  let totalSeconds = hours * 3600 + minutes * 60 + seconds -1;
  console.log(totalSeconds);

  if (totalSeconds <= 0) {
    alert("Please enter a valid time");
    return;
  }

  timerInterval = setInterval(() => {
    const hoursLeft = Math.floor(totalSeconds / 3600);
    document.getElementById("Hours").value = hoursLeft;
    const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
    document.getElementById("Minutes").value = minutesLeft;
    const secondsLeft = totalSeconds % 60;
    document.getElementById("Seconds").value = secondsLeft;

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      document.getElementById("aud").play();
        alert("Time's up!");
    } else {
      totalSeconds--;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer").textContent = "";
}

function ResetTime() {
  clearInterval(timerInterval);
  document.getElementById("Hours").value = 0;
  document.getElementById("Minutes").value = 0;
  document.getElementById("Seconds").value = 0;
}

document.getElementById("Start").addEventListener("click", startTimer);
document.getElementById("Pause").addEventListener("click", pauseTimer);
document.getElementById("Reset").addEventListener("click", ResetTime);
