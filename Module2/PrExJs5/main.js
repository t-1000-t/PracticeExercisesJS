const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// eslint-disable-next-line no-unused-vars
const num = 10;
// eslint-disable-next-line no-unused-vars
const matched = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 10) {
    matched.push(numbers[i]);
    // eslint-disable-next-line no-continue
    continue;
  }
}
console.log(matched);
