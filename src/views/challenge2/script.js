let clockInterval = null;

function ready(callback) {
  if (document.readyState !== 'loading') callback();
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  else document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') callback();
    });
}

ready(function () {
  if (location.hash === "#/challenge/2/clock") {
    initClock();
  }
});

window.addEventListener("hashchange", () => {
  if (location.hash === "#/challenge/2/clock") {
    setTimeout(initClock, 50);
  } else {
    clockDestroy();
  }
});

function initClock() {
  const hourElement = document.querySelector('.hand-hour');
  const minuteElement = document.querySelector('.hand-minute');
  const secondElement = document.querySelector('.hand-second');

  if (!hourElement || !minuteElement || !secondElement) return;

  function updateClock() {
    const now = new Date();
    let hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDegree = ((360 / 12) * hour) + ((360 / (12 * 60)) * minute);
    hourElement.style.transform = `rotate(${hourDegree}deg)`;

    const minuteDegree = (360 / 60) * minute;
    minuteElement.style.transform = `rotate(${minuteDegree}deg)`;

    const secondDegree = (360 / 60) * second;
    secondElement.style.transform = `rotate(${secondDegree}deg)`;
  }

  updateClock();
  clockInterval = setInterval(updateClock, 1000);

}

function clockDestroy() {
  if (clockInterval) {
    clearInterval(clockInterval);
    clockInterval = null;
  }
}
