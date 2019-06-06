const total = prompt('количество товаров на складе');
const ordered = prompt('единиц товара в заказе');

const negetiv = 'На складе недостаточно товаров!';
const normal = 'Вы забираете весь товар cо склада!';
const callManager = 'Заказ оформлен, с вами свяжется менеджер';

if (total > ordered) {
  alert(negetiv);
}
if (total === ordered) {
  alert(normal);
} else {
  alert(callManager);
}
