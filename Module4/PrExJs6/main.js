const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

function getAllPropValues(arr, prop) {
  // eslint-disable-next-line prefer-const
  let result = [];
  if (arr.length === 0) {
    return result = [];
  }
  for (const user of arr) {
    if (prop in user) {
      result.push(user[prop]);
    }
  }
  return result;
}

// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name'),
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood'),
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active'),
); // []
