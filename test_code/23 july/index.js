
// Animal.prototype.printType=function(){
//     console.log(this.type)
// }

// function Animal(type, legs){

//     let obj={}
//     Object.setPrototypeOf(obj,Animal.prototype)
//     obj.type=type;
//     obj.legs=legs;

    
//     return obj
// }

// let a=Animal("Domestic", "four");
// console.log(a)
// console.log(a.printType())

// Bird.prototype.printLegs=function(){
//     console.log(this.legs)
// }

// Object.setPrototypeOf(Bird.prototype,Animal.prototype)
// function Bird(type,legs,canFly){
//     let obj=Animal(type,legs);

//     Object.setPrototypeOf(obj,Bird.prototype)
//     obj.canFly=canFly;
//     return obj
// }


// let b=Bird("forest", "four", "Yes")
// console.log(b)

// console.log(b.printLegs())
// console.log(b.printType())





// console.log("**************Constructor Function************")




// Animal1.prototype.printType=function(){
//     console.log(this.type)
// }

// function Animal1(type, legs){

    
   
//     this.type=type;
//     this.legs=legs;

    
   
// }

// let a1= new Animal1("Domestic", "four");
// console.log(a1)
// console.log(a1.printType())

// Bird.prototype.printLegs=function(){
//     console.log(this.legs)
// }

// Object.setPrototypeOf(Bird.prototype,Animal1.prototype)

// function Bird(type,legs,canFly){
//     Animal1.call(this,type,legs);

    
//     this.canFly=canFly;
  
// }


// let b1=new Bird("forest", "four", "Yes")
// console.log(b1)

// console.log(b1.printLegs())
// console.log(b1.printType())






// console.log("*************Es6 class constructor**********")






// class Animal5{
//     constructor(type,legs){
//         this.type=type;
//         this.legs=legs;
//     }

//     printType(){
//         console.log(this.type)
//     }
// }

// let a3=new Animal5("wild", 4, true)

// console.log(a3)
// console.log(a3.printType())

// class Bird9 extends Animal5{
//     constructor(type,legs,canFlay){
//      super(type,legs)
//      this.canFlay=canFlay
//     }

//     printlegs(){
//         console.log(this.legs)
//     }
// }

// let b5=new Bird9("domestic", 2 ,false)
// console.log(b5)
// console.log(b5.printlegs())
// console.log(b5.printType())







console.log("***********static method*****************")



// static method
// private property

class Animal{
    #legs
    constructor(type,legs){
        this.type=type;
        this.#legs=legs;
    }

    get legs(){
        return this.#legs
    }

    set legs(val){
        return this.#legs=val
    }

    printType(){
        console.log(this.type)
    }

    static PrintHi(){
        console.log("Hi....")
    }
}

let a10= new Animal("wild", 4, true)

console.log(a10)
Animal.PrintHi()
console.log(a10.legs)

a10.legs=2
console.log(a10.legs)