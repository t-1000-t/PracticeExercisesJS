function formatString(str) {
  let result;
  if (str.length < 40) {
    result = str;
  } else {
    // eslint-disable-next-line prefer-template
    result = str.slice(0, 40) + '...';
  }
  return result;
}

// Вызовы функции для проверки
console.log(
  formatString('Curabitur ligula sapien, tincidunt non.'),
); // вернется оригинальная строка

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'),
); // вернется форматированная строка

console.log(
  formatString('Curabitur ligula sapien.'),
); // вернется оригинальная строка

console.log(
  formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'),
); // вернется форматированная строка
