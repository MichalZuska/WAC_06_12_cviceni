/*setInterval(() =>  {
    const date = new Date();
    const time = "#" + timeToHex(date.getHours())
        + timeToHex(date.getMinutes())
        + timeToHex(date.getSeconds());
    document.querySelector("body").style["background-color"] = time;
    document.querySelector("#centerPart").innerHTML = time;
}, 1000);
*/
function timeToHex(digits) {
    return digits.toString().padStart(2, "0");
}
function updateHexClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const hexColor = `#${hours}${minutes}${seconds}`;

  document.getElementById('hexClock').textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  setTimeout(updateHexClock, 1000);
}

function openTimerSettings() {
  document.getElementById('timerSettings').style.display = 'block';
}

function setTimer() {
  const seconds = parseInt(document.getElementById('timerInput').value);
  if (!isNaN(seconds) && seconds > 0) {
    document.getElementById('timerSettings').style.display = 'none';
    startTimer(seconds);
  } else {
    alert('Zadejte platné číslo (větší než 0) pro nastavení timeru.');
  }
}

function startTimer(seconds) {
  const endTime = new Date().getTime() + seconds * 1000;

  function updateTimer() {
    const now = new Date().getTime();
    const remainingSeconds = Math.max(0, Math.floor((endTime - now) / 1000));

    if (remainingSeconds === 0) {
      document.body.style.backgroundColor = '#000';
    } else {
      const hexColor = `#${remainingSeconds.toString().padStart(6, '0')}`;
      document.body.style.backgroundColor = hexColor;
      setTimeout(updateTimer, 1000);
    }
  }

  updateTimer();
}

function cancelTimer() {
  document.getElementById('timerSettings').style.display = 'none';
}
