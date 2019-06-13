// eslint-disable-next-line no-alert
const natural = prompt('Введите произвольное целое число');

const goodbay = 'Ну и ладно, пока!';
const thanks = 'Спасибо!';
const enother = 'Необходимо было ввести целое число!';


if (natural % 1 === 0 && natural !== null) {
  // eslint-disable-next-line no-alert
  alert(thanks);
} else if (natural === null) {
  // eslint-disable-next-line no-alert
  alert(goodbay);
} else {
  // eslint-disable-next-line no-alert
  alert(enother);
}
