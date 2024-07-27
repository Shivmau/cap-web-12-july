console.log('*********Question no-1**********')
class Person{
    constructor(name, age){
       this.name=name;
       this.age=age;
    }

    static greet(){
        return "Hello there!"
    }

    canSleep(){
        return `${this.name} is sleeping`
    }
}

let a=new Person("Shivam", 22)
console.log(a)

console.log(Person.greet())

console.log(a.canSleep())


console.log('********Question no-2********')


class Employee extends Person{
    #salary;
    constructor(name,age,salary){
        super(name,age)
        this.#salary=salary;
    }

    get salary(){

       return this.#salary
    }

    set salary(val){
        if(val>0){
            this.#salary=val
        }else{
            console.log("Salary must be a positive number")
        }
        
    }

    working(){
        return `${this.name} is working`
    }
}

let b=new Employee("shivam", 22, 500000);
console.log(b)

b.salary=-1000000;
console.log(b.salary)

console.log(b.working())



console.log('********Question no-3********')


class Manager extends Employee{
    constructor(name,age,salary){
        super(name,age,salary)
    }


    static getRole(){
        return "Manager"
    }

    managing(){
        return `${this.name} is managing`
    }



}

let c= new Manager("shivam", 25, "5LPA")

console.log(c)
console.log(Manager.getRole())

console.log(c.managing())



console.log('********Question no-4********')

class Executive extends Manager{
    #bonus
    constructor(name,age,salary,bonus){
        super(name,age,salary)
        this.#bonus=bonus;
    }

    get Bonus1(){
        return this.#bonus
    }

    set Bonus1(val){
        if(val>0){
            this.#bonus+=val
        }
      
    }


}

let d=new Executive("shivam",25, 45000,5000)
console.log(d)
console.log(d.Bonus1)

d.Bonus1=1000;

console.log(d.Bonus1)