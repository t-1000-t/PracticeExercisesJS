const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];


const updateActiveState = () => {
  const updatedUsers = users.map(user => ({ ...user, active: !user.active }));
  return Promise.resolve(updatedUsers);
};

updateActiveState(users).then(console.table);


// const updateActiveState = (users, callback) => {
//   const updatedUsers = users.map(user => ({ ...user, active: !user.active }));

//   callback(updatedUsers);
// };

// updateActiveState(users, console.table);
