Array.prototype.myFilter = function(cb) {
  const newArray = [];
  this.forEach(el => cb(el) && (newArray.push(el)))
  return newArray;
}

const greaterThan100 = [1, 2, 43, 5, 6, 7, 12, 3, 5000].myFilter(x => x > 100)

console.log(greaterThan100);