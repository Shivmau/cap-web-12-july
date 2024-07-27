
console.log("****Animal****")

class Animal{
    #type
    constructor(type){
       this.#type=type
    }

    get Type(){
        return this.#type
    }    
}


let a = new Animal("Domestic")

console.log(a)

console.log(a.Type)




console.log("****Mammal****")

class Mammal extends Animal{
    constructor(type){
        super(type)
    }
}

b= new Mammal("Jungly")
console.log(b)




console.log("****Bird****")


class Bird extends Animal{
    constructor(type){
        super(type)
    }

}

let  c = new Bird("Bird")
console.log(c)



console.log("****Lion****")


class Lion extends Mammal{
    #manColor
    constructor(type){
        super(type)
        this.#manColor="brown"
    }

    get callMethod(){
       return this.#manColor
    }

    set callMethod(val){
        this.#manColor=val
    }
}


let d = new Lion("jungly")
console.log(d)

console.log(d.callMethod)

d.callMethod= "yellow"

console.log(d.callMethod)



console.log("****Cow****")




class Cow extends Mammal{
    #milkproduction
    constructor(type){
        super(type)
        this.#milkproduction="High"
    }

    get milkPro(){
        return this.#milkproduction
    }

    set milkPro(val){
        this.#milkproduction=val
    }
}


let e = new Cow("Pet")
console.log(e)

console.log(e.milkPro)

e.milkPro="Low"

console.log(e.milkPro)





console.log("***Eagle****")




class Eagle extends Bird{
    #wingspan
    constructor(type){
        super(type)
        this.#wingspan="Large"
    }

    get eagleWings(){
        return this.#wingspan
    }

    set eagleWings(val){
        this.#wingspan=val
    }


}


let f= new Eagle("Jungly")
console.log(f)

console.log(f.eagleWings)

f.eagleWings="Small"

console.log(f.eagleWings)




console.log("****Sparrow****")


class Sparrow extends Bird{
    #wingspan
    constructor(type){
        super(type)
        this.#wingspan="small"
    }

    get sparrowWings(){
        return this.#wingspan
    }

    set sparrowWings(val){
        this.#wingspan=val
    }


}

let g= new Sparrow("Jungly")
console.log(g)

console.log(g.sparrowWings)

g.sparrowWings="Big"

console.log(g.sparrowWings)



