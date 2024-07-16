

function createAnimal(name,sound){

    let obj={}

    obj.name=name;
    obj.sound=sound;
    obj.makeSound=function(){
        return `${this.sound}`
    }

    return obj
}

// let a=createAnimal("bufallos", "boo")

// console.log(a)

function createDog(name,sound,breed){

    let obj=createAnimal(name,sound)
    obj.breed=breed;

    obj.fetch=function(){
        return `${this.name}`
    }

    return obj
}

let animal=createDog("Buddy","Woof","Labrador")
console.log(animal)

let makeSound=animal.makeSound();
console.log(makeSound)

let fetch=animal.fetch();
console.log(fetch)