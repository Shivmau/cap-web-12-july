
function CreateProduct(product_name,brand,reviews,price,rating){

    let obj={}
    
    obj.product_name=product_name;
    obj.brand=brand;
    obj.reviews=reviews;
    obj.price=price;
    obj.rating=rating;

    obj.getPrice=function(){
        return this.price
    }

    obj.increasePrice=function(amount){
        return this.price+=amount
    }

    obj.decreasePrice=function(amount){
        return this.price-=amount
    }

    obj.isExpensive=function(){
        return this.price>=1000;
    }

    return obj
}

let a= CreateProduct("aloo","sky",4.00,200,3)
console.log(a)

function Electronics(product_name,brand,reviews,price,rating,warranty){

    let obj=CreateProduct(product_name,brand,reviews,price,rating);
    obj.warranty=warranty;
    obj.bill=function(){
        return (this.price-this.price*10/100);
    }

    obj.details=function(){
        return this.product_name+this.brand+this.reviews+this.price+this+this.obj.bill
    }
    return obj

}

let b=Electronics("infinix hot 11s", "indian" , 4.0 , 11999 , 3 , "1year")
console.log(b)

let discount=b.bill();
console.log(discount)

let increasePrice=b.increasePrice(1000);
console.log(increasePrice)

let dec=b.decreasePrice(2999);
console.log(dec)

let expnsive=b.isExpensive();
console.log(expnsive)