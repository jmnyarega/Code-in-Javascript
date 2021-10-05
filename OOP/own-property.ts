function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

const b = new Bird("name", "red");

let ownProps = [];
for (let prop in b) {
  if (b.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

console.log(ownProps)