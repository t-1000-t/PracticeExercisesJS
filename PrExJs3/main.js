const NAME = prompt('name', '');
const DATE = prompt('date', '');
const roomType = prompt('type', '');

const MESSEGE = `"${NAME}" прибывает на отдых "${DATE}" в "${roomType}".`;
const test = '"имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".';

alert.assert(MESSEGE === test, 'error in MESSEGE');
console.assert(MESSEGE === test, 'error in MESSEGE');

alert(MESSEGE);
console.log(MESSEGE);
