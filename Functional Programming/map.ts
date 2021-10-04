Array.prototype.myMap = function(cb) {
  let newArr = [];
  this.forEach(el => newArr.push(cb(el)));
  return newArr;
}

console.log([23, 65, 98, 5].myMap((x => x * 2)));