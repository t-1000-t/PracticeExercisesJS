// const checkNumberType = function (num) {
//   if (num % 2 === 0) {
//     return "'Even'";
//   }
//   return "'Odd'";
// };

const checkNumberType = num => (num % 2 === 0 ? "'Even'" : "'Odd'");

console.log(checkNumberType(2)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd'
