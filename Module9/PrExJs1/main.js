/* eslint-disable radix */
const btn = document.querySelector('.button');

function hendleBtnClick(event) {
  event.preventDefault();
  // eslint-disable-next-line prefer-const
  let counteClickBtn = btn.textContent;
  btn.textContent = parseInt(counteClickBtn) + 1;
}

btn.addEventListener('click', hendleBtnClick);
