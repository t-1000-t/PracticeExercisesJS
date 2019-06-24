function findLargestNumber(numbers) {
  // eslint-disable-next-line prefer-const
  let max = numbers[0];
  let result;
  for (let i = 0; numbers.length > i; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
      result = max;
    } else {
      result = max;
    }
  }
  return result;
}
console.log(
  findLargestNumber([1, 2, 3]),
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5]),
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74, 54]),
); // 128
