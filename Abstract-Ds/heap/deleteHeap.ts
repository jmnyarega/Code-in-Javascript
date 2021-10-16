const swap = require("./swap.ts");

module.exports = (array, type) => {
  const deleted = array.shift();
  let n = array.length - 1;
  let i = n;

  while(i > 0) {
    let p = Math.floor((i - 1) / 2);
    if (type === "min") {
      array[p] > array[i] && swap(p, i, array);
    } else {
      array[p] < array[i] && swap(p, i, array);
    }
    i = p;
  }
  return [deleted, array]
}