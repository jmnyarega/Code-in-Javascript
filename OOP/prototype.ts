/*
  - Use prototype to reduce duplication of code.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.legs = 5;

let ruto = new Dog("Ruto");
let raila = new Dog("Raila");

/*
 - legs prototype is available in both instances(ruto, raila)
*/

console.log(ruto.legs)
console.log(raila.legs)