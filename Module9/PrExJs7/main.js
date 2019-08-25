const ref = {
  inputs: document.querySelectorAll('.input'),
};

[...ref.inputs].map(elem => elem.addEventListener('blur', onChangeClick));

function onChangeClick({ target }) {
  if (+target.dataset.length === target.value.length) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.add('invalid');
    target.classList.remove('valid');
  }
}
