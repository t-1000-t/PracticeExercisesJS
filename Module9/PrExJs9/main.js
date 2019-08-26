const ref = {
  btn: document.querySelector('.btn'),
  modal: document.querySelector('.modal'),
  closeBtn: document.querySelector('.close-btn'),
};

function onClassRemove() {
  ref.modal.classList.remove('modal-hidden');
}

function onClickClose() {
  ref.modal.classList.add('modal-hidden');
}

ref.btn.addEventListener('click', onClassRemove);
ref.closeBtn.addEventListener('click', onClickClose);
