const findBestEmployee = function (employees) {
  let maxValue = 0;
  let best = '';
  for (const key in employees) {
    if (employees[key] > maxValue) {
      maxValue = employees[key];
      best = key;
    }
  }
  return best;
};


// для проверки
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango
