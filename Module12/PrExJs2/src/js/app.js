import { clearInterval } from 'timers';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  addClass: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

const changeColor = {
  stopInter: null,
  btnStartActive() {
    this.stopInter = setInterval(() => {
      const rand = colors[Math.floor(Math.random() * colors.length)];
      refs.addClass.style.backgroundColor = rand;
      if (refs.addClass.style.backgroundColor) {
        refs.addClass.style.backgroundColor = rand;
      }
    }, 1000);
    refs.btnStart.disabled = true;
    refs.addClass.style.active = false;
  },
  btnStopActive() {
    if (refs.addClass.style.backgroundColor) {
      refs.btnStart.disabled = false;
    }
    clearTimeout(this.stopInter);
  },
};

console.log(refs.btnStart);

refs.btnStart.addEventListener('click', changeColor.btnStartActive.bind(changeColor));
refs.btnStop.addEventListener('click', changeColor.btnStopActive.bind(changeColor));
