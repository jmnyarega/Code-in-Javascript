const swap = require("./swap.ts");

module.exports = (A, el) => {
  A.push(el);
  let n = A.length - 1;
  let i = n;

  while(i > 0) {
    let p = Math.floor((i - 1) / 2);
    A[p] < A[i] && swap(p, i, A);
    i = p;
  }
  return A;
}