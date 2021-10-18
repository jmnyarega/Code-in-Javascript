const swap = require("./swap.ts");

const getMax = (array, sibs) => {
  const element1 = array[sibs[0]];
  const element2 = array[sibs[1]];

  if (sibs.length === 1) return sibs[0];
  if (element1 > element2) return sibs[0];
  return sibs[1];
}

const getMin = (array, sibs) => {
  const element1 = array[sibs[0]];
  const element2 = array[sibs[1]];

  if (sibs.length === 1) return sibs[0];
  if (element1 > element2) return sibs[1];
  return sibs[0];
}

module.exports = (array, type) => {
  const deleted = array.shift();
  let n = array.length - 1;
  let i = n;

  while(i > 0) {
    const p = Math.floor((i - 1) / 2);
    const sibs = [];

    if (i % 2 === 0) {
      sibs.push(i, i - 1);
    } else {
      sibs.push(i);
    }

    if (type === "min") {
      let minElement = getMin(array, sibs);
      array[p] > array[minElement] && swap(p, minElement, array);
    } else {
      let maxElement = getMax(array, sibs);
      array[p] < array[maxElement] && swap(p, maxElement, array);
    }
    i = p;
  }
  return [deleted, array]
}