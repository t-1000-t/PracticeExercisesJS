/* eslint-disable quotes */
function getPx(str) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(str) === true) {
    // eslint-disable-next-line radix
    return parseInt(str);
  }
  if (typeof (str) === 'string') {
    return Number(str);
  }
  return null;
}

console.log(getPx("10px")); // true
console.log(getPx("10.5")); // true
console.log(getPx("0")); // true
console.log(getPx(-1)); // null
console.log(getPx(10)); // null
