function isObjectEmpty(obj) {
  // eslint-disable-next-line prefer-const
  let result;
  const key = Object.keys(obj).length;
  if (!key > 0) {
    result = true;
  } else result = false;


  return result;
}


console.log(
  isObjectEmpty({}),
); // true

console.log(
  isObjectEmpty({ a: 1 }),
); // false

console.log(
  isObjectEmpty({ a: 1, b: 2 }),
); // false
