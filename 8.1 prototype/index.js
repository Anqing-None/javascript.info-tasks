let animal = {
  eats: true,
  walk() {
    console.log("walk");
  },
};

let dog = {
  wang: true,
};

dog.__proto__ = animal;

function Animal() {
  this.name = "name";
}

console.log(typeof Animal);

console.log(Animal.prototype);

const a = new Animal();

// console.log(a);
// console.log(typeof a);

console.log(a.__proto__ === Animal.prototype);
