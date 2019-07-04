const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};


let max = 0;
// eslint-disable-next-line prefer-const
let maxName = '';

const entri = Object.entries(tasksCompleted);
for (const name of entri) {
  if (name[1] > max) {
    max = name[1];
    maxName = name;
  }
}
console.log(maxName[0]);

// let max = 0;
// let maxName = '';
// for (const name in tasksCompleted) {
//   if (max < tasksCompleted[name]) {
//     max = tasksCompleted[name];
//     maxName = name;
//   }
// }

// console.log(maxName);
