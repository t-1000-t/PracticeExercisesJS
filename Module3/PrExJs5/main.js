// eslint-disable-next-line consistent-return
function findLongestWord(str) {
  const arr = str.split(' ');
  // eslint-disable-next-line prefer-const
  let longestWord = '';
  let result = '';
  for (let i = 0; arr.length > i; i += 1) {
    longestWord = longestWord.length > arr[i].length ? longestWord : arr[i];
    result = longestWord;
    return result;
    // if (arr[i].length > longestWord.length) {
    //   longestWord = arr[i];
    //   result = longestWord;
    //   return result;
    // }
  }
  return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
