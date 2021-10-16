module.exports = (parent, i, array) => {
  let temp = array[parent];
  array[parent] = array[i];
  array[i] = temp;
}
