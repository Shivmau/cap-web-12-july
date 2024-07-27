console.log("Question no5")


class Bank{
    #name
    constructor(name){
        this.#name=name;
    }

    get accountName(){
        return this.#name
    }

    set accountName(val){
       this.#name=val
    }
}

let a = new Bank("SBI")

console.log(a)

console.log(a.accountName)
a.accountName="HDFC Bank"
console.log(a.accountName)




console.log("Question no6")


class Account extends Bank{
    #balance
    constructor(name,balance){
        super(name)
        this.#balance=balance;
    }

    get Balance1(){
        return this.#balance
    }
}

let b=new Account("PNB Bank", 30000)
console.log(b)

console.log(b.Balance1)


console.log("Question no7")


class SavingsAccount extends Account{
    #interstRate
        constructor(name,balance,interest){
          super(name,balance)
          this.#interstRate=interest
        }

        get interestRate1(){
            return this.#interstRate
        }

        set interestRate1(val){
            
            this.#interstRate=val
        }
}

let c= new SavingsAccount("SBI Bank" , 40000, 5)
console.log(c)

console.log(c.interestRate1)

c.interestRate1=10

console.log(c.interestRate1)