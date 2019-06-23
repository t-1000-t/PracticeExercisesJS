function checkForSpam(str) {
  let lowerStr;
  let hasFindWord;
  // eslint-disable-next-line prefer-const
  lowerStr = str.toLowerCase();
  // eslint-disable-next-line prefer-const
  hasFindWord = lowerStr.includes('spam') || lowerStr.includes('sale');
  return hasFindWord;
}


// Вызовы функции для проверки
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
