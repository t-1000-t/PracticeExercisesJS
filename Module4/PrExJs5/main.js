function countTotalSalary(salaries) {
  let result = 0;
  const value = Object.values(salaries);
  for (const i of value) {
    if (i > 0) {
      result += i;
    } else result = 0;
  }

  return result;
}


console.log(
  countTotalSalary({}),
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
