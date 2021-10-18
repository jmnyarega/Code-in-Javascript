const minHeap = require("./minHeap.ts");
const maxHeap = require("./maxHeap.ts");
const heapify = require("./heapify.ts");
const deleteH = require("./deleteHeap.ts");

class Heap {
  #collection = [];
  #type = "min";
  #sorted = [];

  min = (el) => {
    minHeap(this.#collection, el);
    this.#type = "min";
  }
  max = (el) => {
    maxHeap(this.#collection, el);
    this.#type = "max";
  }
  print = () => console.log({ type: this.#type, data: this.#collection })
  heapify = (array) => heapify(array);
  deleteHeap = () => {
    const [deleted] = deleteH(this.#collection, this.#type);
    this.#sorted.push(deleted);
  }
  getSorted = () => this.#sorted;
  clear = () => this.#collection = [];
}

const heap = new Heap();
[0, -4, 2, 1, 9, -1].forEach(x => {
  heap.min(x)
})

for(let i = 0; i < 6; i++) {
  heap.deleteHeap();
}

console.log(heap.getSorted())