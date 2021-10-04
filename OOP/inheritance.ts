function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat() { console.log('nom nom nom') },
}

// STEP 01
const dog = Object.create(Animal.prototype)
const cat = Object.create(Animal.prototype)
cat.eat()

// STEP 02
function Bird() { }
// bird's prototype now includes all Animal's properties + methods
Bird.prototype = Object.create(Animal.prototype)
const b = new Bird();
b.eat()