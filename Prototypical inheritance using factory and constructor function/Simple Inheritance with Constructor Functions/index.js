Animal.prototype.makeSound=function(){
  return this.sound
}

function Animal(name,sound){

  this.name=name;
  this.sound=sound;
}

// let a=new Animal("Buffalo", "bobo")
// console.log(a)
// console.log(a.makeSound())

Dog.prototype.fetch=function(){
  return this.name
}

Object.setPrototypeOf(Dog.prototype,Animal.prototype)

function Dog(name,sound,bread){
  Animal.call(this,name,sound,bread)
  this.bread=bread;

}

let b=new Dog("Tiger", "brabra", "yes")
console.log(b)
console.log(b.makeSound())
console.log(b.fetch())