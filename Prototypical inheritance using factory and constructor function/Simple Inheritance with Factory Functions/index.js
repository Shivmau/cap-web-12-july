let soundObj={
    makeSound:function(){
        return this.sound;
    }
}

function createAnimal(name,sound){

    let obj={}

    obj.name=name;
    obj.sound=sound;
   Object.setPrototypeOf(obj,soundObj)

    return obj
}

// let a=createAnimal("bufallos", "boo")

// console.log(a)
let fetchObj={
    fetch:function(){
        return this.name
    }
}
function createDog(name,sound,breed){

    let obj=createAnimal(name,sound)
    obj.breed=breed;

   Object.setPrototypeOf(obj,fetchObj)

    return obj
}

Object.setPrototypeOf(fetchObj,soundObj)

let animal=createDog("Buddy","Woof","Labrador")
console.log(animal)

let makeSound=animal.makeSound();
console.log(makeSound)

let fetch=animal.fetch();
console.log(fetch)