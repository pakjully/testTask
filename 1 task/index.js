const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return function (seconds) {
    transformSeconds(seconds);
  let timerId = setInterval(function() {
    if (seconds > 0) {
      seconds = seconds - 1;
      transformSeconds(seconds);
    } else {
      clearInterval(timerId);
    }
  }, 1000)
  }
  };

  function transformSeconds(sec) {
    let hours = Math.floor(sec / 60 / 60);
    let minutes = Math.floor(sec / 60) - (hours * 60);
    let seconds = sec % 60;
    if (String(hours).length < 2) {
       hours = '0' + hours;
    }
    if (String(minutes).length < 2) {
      minutes = '0' + minutes;
    }
    if (String(seconds).length < 2) {
      seconds = '0' +  seconds;
    }
  console.log(hours, minutes,seconds);
  timerEl.innerHTML = hours + ':' + minutes + ':' + seconds;
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d.]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
