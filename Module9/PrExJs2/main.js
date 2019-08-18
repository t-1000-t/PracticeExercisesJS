const numInputs0 = document.querySelector('.expression > input');
const numInputs1 = document.querySelector('.expression > input');
const btnSum = document.querySelector('button');
const resultSum = document.querySelector('.result');

// console.log(numInputs0.value);
// console.log(numInputs1);
// console.log(btnSum);
// console.log(resultSum);
function hendlerBtnSum() {
  const	firstInput = numInputs0.value;
  const secondInput = numInputs1.nextElementSibling.nextElementSibling.value;
  return resultSum.textContent = parseInt(firstInput) + parseInt(secondInput);
}

btnSum.addEventListener('click', hendlerBtnSum);
