// function sayHi(){
//     console.log("Hi")
//     return function sayHello(){
//         return function mannu(){
//             console.log("Shivam")
//         }
//     }
// }

// let a= sayHi()
// a()()


function outer(){
    let a=10;
    
    function inner(){
        a+=1;
        console.log(a)
        return a
    }

    return inner
}

let a=outer()
console.log(a())

