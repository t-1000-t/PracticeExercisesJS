const message = 'Proin sociis natoque et magnis parturient montes mus';
// eslint-disable-next-line prefer-const
let price = 0;
const words = message.split(' ');
console.log(words);
console.log(words.length);
price = words.length * 10;
console.log(price);
