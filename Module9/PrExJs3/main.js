const refs = {
  btn: document.querySelector('body'),
  valueTextSum: document.querySelector('.value'),
};

class User {
  constructor(value = 0, increment = 1, decrement = -1) {
    this.value = value;
    this.increment = increment;
    this.decrement = decrement;
  }
}

const Counter = new User();

function onChenge(event) {
  const target = event.target.dataset.action;
  if (target === 'sub') {
    Counter.value += Counter.decrement;
    return refs.valueTextSum.textContent = Counter.value;
  }
  if (target === 'add') {
    Counter.value += Counter.increment;
    return refs.valueTextSum.textContent = Counter.value;
  }
}

refs.btn.addEventListener('click', onChenge);
