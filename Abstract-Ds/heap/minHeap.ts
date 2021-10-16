const swap = require("./swap.ts");

module.exports = (array, item) => {
  array.push(item);
  let n = array.length - 1;
  let i = n;

  while(i > 0) {
    const parent = Math.floor((i - 1) / 2);
    array[parent] > array[i] && swap(parent, i, array);
    i = parent;
  }
  return array;
}