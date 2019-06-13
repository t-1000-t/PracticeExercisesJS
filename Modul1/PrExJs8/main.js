// eslint-disable-next-line no-alert
const pressNumber = +prompt('введите число от 1 до 5');
let result = '';
switch (pressNumber) {
  case 1:
    result = 'Каталог хостелов';
    // eslint-disable-next-line no-alert
    alert(result);
    break;
  case 2:
    result = 'Каталог бюджетных отелей';
    // eslint-disable-next-line no-alert
    alert(result);
    break;
  case 3:
    result = 'Каталог отелей ***';
    // eslint-disable-next-line no-alert
    alert(result);
    break;
  case 4:
    result = 'Каталог отелей ****';
    // eslint-disable-next-line no-alert
    alert(result);
    break;
  case 5:
    result = 'Каталог лучших отелей';
    // eslint-disable-next-line no-alert
    alert(result);
    break;
  default:
    result = 'null';
    // eslint-disable-next-line no-alert
    alert('Очень жаль, приходите еще!');
}
