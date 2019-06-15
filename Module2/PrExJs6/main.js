const message = 'May the force be with you';
let longestWord = '';

const arr = message.split(' ');
console.log(arr);
for (let i = 0; i < arr.length; i += 1) {
  longestWord = longestWord.length > arr[i].length ? longestWord : arr[i];
}
console.log(longestWord); // 'force'
