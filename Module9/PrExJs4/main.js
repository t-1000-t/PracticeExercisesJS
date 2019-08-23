const refs = {
  input: document.querySelectorAll('input'),
  result: document.querySelector('.result'),
  btn: document.querySelector('.btn'),
};


function hendlerBtnClick(event) {
  event.preventDefault();
  const resultInput = [...refs.input].filter(e => e.checked === true).map(e => e.value);
  refs.result.textContent += ` ${resultInput}`;
}

refs.btn.addEventListener('click', hendlerBtnClick);
