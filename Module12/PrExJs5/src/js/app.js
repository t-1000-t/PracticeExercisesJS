import { isNumber } from 'util';

// const DELAY = 1000;
const quantity = 100;


function getValueNum(value) {
  if (value <= quantity) {
    console.log('Ваш заказ готов!');
  }
  if (value > quantity) {
    console.log('К сожалению на складе недостаточно товаров!');
  }
}

function getValueStr() {
  console.log('Некорректный ввод!');
}

const processOrder = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      isNumber(value) ? resolve(getValueNum(value)) : reject(getValueStr(value));
    }, 500);
  });
  return promise;
};

console.log(processOrder());
// Вызовы функции для проверки
processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(500)
  .then(console.log) // К сожалению на складе недостаточно товаров!
  .catch(console.log);

processOrder('lorem')
  .then(console.log)
  .catch(console.log); // Некорректный ввод!
