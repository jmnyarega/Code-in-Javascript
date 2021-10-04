function Bird(name) {
  this.name = name;
}

/*
 - Because a prototype is an object, a prototype can have its own prototype!
  In this case, the prototype of Bird.prototype is Object.prototype:

  - prototype chains enable code re-use
  - Gives us useful methods and properties defined in Function/Object construction [[Prototype]]
*/
const chains = Object.prototype.isPrototypeOf(Bird.prototype); // true
console.log(chains);