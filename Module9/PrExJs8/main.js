const ref = {
  message: document.querySelector('.message'),
  input: document.querySelector('.input'),
  inputValue: document.querySelector('.input-value'),
};

function onRenText() {
  console.log(ref.message);
  ref.message.textContent = 'Input is in focus!';
}

function onViewText(e) {
  e.preventDefault();
  const { value } = ref.input;
  ref.inputValue.textContent = `Current input value: ${value}`;
}

ref.input.addEventListener('focus', onRenText);
ref.input.addEventListener('input', onViewText);
