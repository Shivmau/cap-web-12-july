
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     sayName(){
//         console.log(this.name)
//     }
// }

// let p1=new Person("Shivam", 22)

// class Student extends Person{
//     constructor(name,age,id){
//         super(name,age)
//         this.id=id
//     }

//     printId(){
//         console.log(this.id)
//     }
// }

// let s1= new Student("Avinash", 22 , "cap04")
// console.log(s1)



// Static Mehthod

// private property

// get and set method , that's called getter and setter


class Person{
    #age;
    constructor(name,age){
        this.name=name;
        this.#age=age;
    }


    get age(){
        return this.#age
    }

    set age(val){
       this.#age=val
    }

    sayName(){
        console.log(this.name)
    }

    static greetings(){
        console.log("...greetings")
    }
}

let p1 = new Person("Shivam", 22)
console.log(p1.age)

p1.age=21
console.log(p1.age)











