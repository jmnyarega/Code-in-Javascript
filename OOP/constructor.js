function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
  return this
}

const b = new Bird("Raila", "Dark red");
console.log(b instanceof Bird);