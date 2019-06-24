// eslint-disable-next-line consistent-return
function findLongestWord(str) {
  const arr = str.split(' ');
  let longestWord = '';
  for (let i = 0; arr.length > i; i += 1) {
    // longestWord = longestWord.length > arr[i].length ? longestWord : arr[i];
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
