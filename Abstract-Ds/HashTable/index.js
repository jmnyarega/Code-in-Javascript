const hash = (str = "") => {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res += str.charCodeAt(i);
  }
  return res;
};


class HashTable {
  #collection = {};

  add = (key, val) => {
    const hashValue = hash(key);
    if (!this.#collection[hashValue]) {
      this.#collection[hashValue] = {};
    }
    this.#collection[hashValue][key] = val;
  };

  remove = (key) => {
    const hashObj = this.#collection[hash(key)];
    if (hashObj.hasOwnProperty(key)) {
      delete hashObj[key];
    }

    if (!Object.keys(hashObj).length) {
      delete this.#collection[hash(key)];
    }
  };

  lookup = (key) => {
    const hashObj = this.#collection[hash(key)];
    if (hashObj.hasOwnProperty(key)) {
      return hashObj[key];
    }
    return null;
  };

  print = () => console.log(this.#collection);
}