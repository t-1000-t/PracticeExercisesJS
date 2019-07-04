
function countProps(obj) {
  const key = Object.keys(obj).length;
  return key;
}

console.log(
  countProps({}),
); // 0

console.log(
  countProps({ a: 1, b: 3, c: 'hello' }),
); // 3
