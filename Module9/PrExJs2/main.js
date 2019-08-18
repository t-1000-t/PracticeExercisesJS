const numInputs0 = document.querySelector('.expression > input');
const numInputs1 = document.querySelector('.expression > input');
const btnSum = document.querySelector('button');
const resultSum = document.querySelector('.result');

function hendlerBtnSum() {
  const	firstInput = numInputs0.value;
  const secondInput = numInputs1.nextElementSibling.nextElementSibling.value;
  return resultSum.textContent = parseInt(firstInput) + parseInt(secondInput);
}

btnSum.addEventListener('click', hendlerBtnSum);
