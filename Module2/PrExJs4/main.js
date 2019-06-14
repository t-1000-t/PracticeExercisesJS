let input = 0;

do {
  // eslint-disable-next-line no-alert
  input = prompt('Введите число больше 100', '');
  if (input === null) {
    // eslint-disable-next-line no-alert
    alert('exit');
    break;
  }
} while (Number(input) <= 100);

alert(`Ввели число: ${input}`);
