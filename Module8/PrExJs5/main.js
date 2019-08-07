const elementsSize = ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'Extra Extra Large'];


const collectInputData = (inputs) => {
  const elem = document.createElement('li');
  elem.classList.add('li-item');

  const elemLi = document.createElement('input');
  elemLi.type = 'checkbox';
  elemLi.name = 'size';
  elemLi.value = 'xs';

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
list.append(...listAll, btnOk, btnReset);

// const values = document.querySelectorAll('input[type="checkbox"]');
// const sbmt = document.querySelector('input[type="submit"]');

// sbmt.addEventListener('click', getvalues(e));

// const getvalues = (e) => {
//   console.log(values);
//   e.prevenDefault();
//   const checked = [...values].filter(e => e.checked);
//   list.textContent = checked.map(e => e.value).join(' ');
// };
