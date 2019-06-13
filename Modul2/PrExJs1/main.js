const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
users.shift(0);
console.log(users);
users.pop();
console.log(users);
users.unshift('Lux');
console.log(users);
users.push('Jay', 'Kiwi');
console.log(users);
// eslint-disable-next-line no-unused-vars
const userToDelete = 'Ajax';
users.splice(2, 1);
console.log(users);
// eslint-disable-next-line no-unused-vars
const userToInsertBefore = 'Jay';
users.splice(2, 0, 'Kong');
console.log(users);
