function Bird() {
  this.name = "bird";
}

/*
 - There is a side effect when setting prototype to a new object
 - It erases the constructor property!
 - To fix this, whenever a prototype is manually set to a new object, 
    remember to define the constructor property
*/

Bird.prototype = {
  constructor: Bird,
  numLegs: 100,
  eat() {
    console.log("nom nom nom");
  },
  describe() {
    console.log(`My name is ${this.name}`)
  }
}

console.log(Bird)