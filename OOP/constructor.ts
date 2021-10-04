/*
 - The constructor is a reference to the constructor function that created the instance
 - One of the use cases of constructor property is to find out what kind of object it is
*/

function Dog(name) {
  this.name = name
}

const uhuru = new Dog();
console.log(uhuru.constructor) // Dog

console.log(uhuru.constructor === Dog) // true