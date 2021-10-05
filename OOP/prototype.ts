/*
  - Use prototype to reduce duplication of code.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.legs = 5;

let dog1 = new Dog("dog 1");
let dog2 = new Dog("dog 2");

/*
 - legs prototype is available in both instances(ruto, raila)
*/

console.log(dog1.legs)
console.log(dog2.legs)