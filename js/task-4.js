// const countTotalSalary = function (employees) {
//   let sumSalary = 0;
//   for (const key in employees) {
//     sumSalary += employees[key];
//   }
//   return console.log('sumSalary:', sumSalary);
// };

const countTotalSalary = function (employees) {
  const salaries = Object.values(employees);
  let sumSalaries = 0;
  for (const salary of salaries) {
    sumSalaries += salary;
  }
  return console.log('sumSalaries:', sumSalaries);
};



console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330



