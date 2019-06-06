const quest = prompt('Введите пароль доступа', '');

const correctPassword = '123';
const correct = 'Доступ в секретный бункер разрешен!';
const close = 'Неверный пароль, активирована система защиты!';
const nothing = 'Была нажата отмена!';

if (quest === correctPassword) {
  alert(correct);
}
if (quest === null) {
  alert(nothing);
} else {
  alert(close);
}
