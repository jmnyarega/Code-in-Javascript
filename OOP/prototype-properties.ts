/*
 - hasOwnProperty function checks for the constructor's own property,
  it doesn't cascade the prototype chain.
*/
function Dog(name) {
  this.name = name;
}

Dog.prototype.legs = 5
Dog.prototype.bark = function() { return "Woof!"; }

const dog = new Dog("Raila");

const prototypeProps = [];

for (let i in dog) {
  dog.hasOwnProperty(i) ? null : prototypeProps.push(i);
}

console.log(prototypeProps);