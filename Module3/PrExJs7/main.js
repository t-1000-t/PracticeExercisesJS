// eslint-disable-next-line no-multi-spaces
const uniqueNumbers = [2, 1, 4, 9];
function addUniqueNumbers(...args) {
  let result;
  for (let i = 0; args.length > i; i += 1) {
    if (!uniqueNumbers.includes(args[i])) {
      result = uniqueNumbers.push(args[i]);
    }
  }
  return result;
}


addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers);
// [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers,
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers,
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
