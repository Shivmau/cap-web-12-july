function outer(){
    let a=10; 
    
    function inner(){
        a+=1;
        // console.log(a)
        return a
    }

    return inner
}



let x=outer()
console.log(x())


