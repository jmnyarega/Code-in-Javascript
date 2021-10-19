function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };

  this.isEmpty = function() {
    return this.collection.length === 0;
  }

  this.enqueue = function(el) {
    let j;
    if (this.isEmpty()) {
      this.collection.push(el);
      return;
    }

    let found;
    let index;
    for(let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][1] > el[1]) {
        found = true;
        index = i;
        break;
      }
    }
    if (found)this.collection.splice(index, 0 ,el)
    else this.collection.push(el);
  }

  this.dequeue = () => {
    if (this.isEmpty()) throw("collection is empty")
    return this.collection.shift()[0];
  }

  this.size = () => this.collection.length;
  this.front = () => this.collection[0][0];
}

const p = new PriorityQueue();
const data = [['human', 1],['kitten', -1],['dog', 2],['rabbit', 1]]


console.log(p.isEmpty());
data.forEach(x => p.enqueue(x));
p.dequeue();
p.printCollection()