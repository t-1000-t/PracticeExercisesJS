const btn = document.querySelector('.button');

function hendleBtnClick() {
  event.preventDefault();
  // eslint-disable-next-line prefer-const
  let counteText = btn.textContent;
  btn.textContent = parseInt(counteText) + 1;
}

btn.addEventListener('click', hendleBtnClick);
