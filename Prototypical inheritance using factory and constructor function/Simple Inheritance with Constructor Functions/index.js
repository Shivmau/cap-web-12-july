let aniObj={
  makeSound:function(){
    return this.sound
  }
}


function createAnimal(name, sound) {
  this.name = name;
  this.sound = sound;
  Object.setPrototypeOf(this,aniObj)
}

let createObj={
  fetch:function(){
    return this.name
  }
}

function createDog(name, sound, breed) {
  createAnimal.call(this, name, sound);
  this.breed = breed;

 Object.setPrototypeOf(this,createObj)

}

Object.setPrototypeOf(createObj,aniObj)

let animal = new createDog("Buddy", "Woof", "Labrador");
console.log(animal);

let makeSound = animal.makeSound();
console.log(makeSound);

let fetch = animal.fetch();
console.log(fetch);
