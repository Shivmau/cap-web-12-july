function createAnimal(name, sound) {
  this.name = name;
  this.sound = sound;
  this.makeSound = function () {
    return `${this.sound}`;
  };
}

function createDog(name, sound, breed) {
  createAnimal.call(this, name, sound);
  this.breed = breed;

  this.fetch = function () {
    return `${this.name}`;
  };
}

let animal = new createDog("Buddy", "Woof", "Labrador");
console.log(animal);

let makeSound = animal.makeSound();
console.log(makeSound);

let fetch = animal.fetch();
console.log(fetch);
