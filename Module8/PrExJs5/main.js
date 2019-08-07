const elementsSize = ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'Extra Extra Large'];

const result = document.createElement('div');
result.classList.add('result');

const collectInputData = (inputs) => {
  const elem = document.createElement('li');
  elem.classList.add('li-item');

  const elemLi = document.createElement('input');
  elemLi.type = 'checkbox';
  elemLi.name = 'size';
  elemLi.value = inputs;

  const elemLabel = document.createElement('label');
  elemLabel.classList.add();
  elemLabel.textContent = inputs;


  elem.append(elemLi, elemLabel);
  return elem;
};

const list = document.querySelector('.size-filter');
const listAll = elementsSize.map(elem => collectInputData(elem));
/* battons OK & Reset */
const btn = document.createElement('div');
btn.classList.add('btns');
const btnOk = document.createElement('input');
btnOk.type = 'submit';
btnOk.value = 'ok';
const btnReset = document.createElement('input');
btnReset.type = 'reset';
btnReset.value = 'res';
btn.append(btnOk, btnReset);
list.append(...listAll, btn, result);

const values = document.querySelectorAll('input[type="checkbox"]');
console.log(values);
const sbmt = document.querySelector('input[type="submit"]');
console.log(sbmt);

const getValues = (e) => {
  console.log(values);
  e.preventDefault();
  const checked = [...values].filter(e => e.checked);
  result.textContent = checked.map(e => e.value).join(', ');
};

sbmt.addEventListener('click', getValues);
