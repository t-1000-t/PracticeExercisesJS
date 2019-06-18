/* eslint-disable no-unused-vars */
const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
const min = numbers[0];
const max = numbers[numbers.length - 1];
let message;
// eslint-disable-next-line prefer-const
let input = prompt(`Enter number: ${min} и ${max}`);
input = (Number(input));
if (numbers.includes(input)) {
  alert('Поздравляем, Вы угадали!');
} else {
  alert('Сожалеем, Вы не угадали!');
}
