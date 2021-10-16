const minHeap = require("./minHeap.ts");
const maxHeap = require("./maxHeap.ts");
const heapify = require("./heapify.ts");
const deleteH = require("./deleteHeap.ts");

class Heap {
  #collection = [];
  #type = "min";

  min = (el) => {
    this.collection = minHeap(this.#collection, el);
    this.#type = "min";
  }
  max = (el) => {
    this.#collection = maxHeap(this.#collection, el);
    this.#type = "max";
  }
  print = () => console.log({ type: this.#type, data: this.#collection })
  heapify = (array) =>  this.#collection = heapify(array);
  deleteHeap = () => this.#collection = deleteH(this.#collection, this.#type);
  clear = () => this.#collection = [];
}

const heap = new Heap();
[0, -4, 2, 1, 9, -1].forEach(x => {
  heap.max(x)
})

console.log(heap.deleteHeap());
heap.print();