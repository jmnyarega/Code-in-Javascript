class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    while(size > 0) {
      this.queue.push(null);
      size--;
    }
    this.max = this.queue.length - 1;
  }
  print = () => console.log(this.queue);
  enqueue = (item) => {
    if (this.write > this.max) this.write = 0;
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;
      return item;
    }
    return null;
  }

  dequeue = () => {
    if (this.read > this.max) this.read = 0;
    if (this.queue[this.read] !== null) {
      const item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read++;
      return item;
    }
    return null;
  }
}

const cq = new CircularQueue(5);
cq.enqueue("a");
cq.enqueue("b");
cq.enqueue("c");

cq.dequeue("a");
cq.dequeue("b");
cq.dequeue("c");

cq.enqueue("d");
cq.enqueue("e");
cq.enqueue("f");

cq.print();