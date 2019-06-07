/* eslint-disable no-alert */
const value = prompt('введите случайное число: ');
// eslint-disable-next-line prefer-const
let type = value;

const a = 'even';
const b = 'odd';

type = type % 2 === 0 ? a : b;

alert(type);
