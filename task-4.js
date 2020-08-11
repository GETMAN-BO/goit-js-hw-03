const employees = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

const countTotalSalary = function (salary) {
  let TotalSalary = 0;
  const values = Object.values(employees);
  for (const value of values) {
    TotalSalary += value;
  }
  return TotalSalary;
};

console.log(countTotalSalary(employees));
