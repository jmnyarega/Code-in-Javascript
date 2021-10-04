/*
 * A mixin allows other objects to use a collection of functions.
 *
 */

let bird = {
  name: "Donald",
  numLegs: 3,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
}

const mixin = (obj) => {
  obj.glide = () => "pst...";
}

mixin(bird)
mixin(boat)

console.log(boat.glide())
console.log(bird.glide())