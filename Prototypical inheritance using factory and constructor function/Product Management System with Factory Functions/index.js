
console.log("******************Part-1**********************")


let pricObj = {
  getPrice: function () {
    return this.price;
  },
};

let incPriceObj = {
  increasePrice: function (amount) {
    return (this.price += amount);
  },
};

let decPriceObj = {
  decreasePrice: function (amount) {
    return (this.price -= amount);
  },
};

let expObj = {
  isExpensive: function () {
    return this.price >= 1000;
  },
};
function CreateProduct(product_name, brand, reviews, price, rating) {
  let obj = {};

  obj.product_name = product_name;
  obj.brand = brand;
  obj.reviews = reviews;
  obj.price = price;
  obj.rating = rating;

  Object.setPrototypeOf(obj, pricObj);

  Object.setPrototypeOf(pricObj, incPriceObj);

  Object.setPrototypeOf(incPriceObj, decPriceObj);

  Object.setPrototypeOf(decPriceObj, expObj);

  return obj;
}

let a= CreateProduct("aloo","sky",4.00,200,3)
console.log(a)

console.log(a.getPrice())
console.log(a.increasePrice(600))
console.log(a.decreasePrice(300))
console.log(a.isExpensive())

let billObj = {
  bill: function () {
    return this.price - (this.price * 10) / 100;
  },
};

let detailsObj = {
  details: function () {
    return `${this.product_name}of brand ${this.brand} with warranty of ${
      this.warranty
    } at a price ${this.bill()} having a discount of 10%`;
  },
};




console.log("******************Part-2**********************")




function Electronics(product_name, brand, reviews, price, rating, warranty) {
  let obj = CreateProduct(product_name, brand, reviews, price, rating);
  obj.warranty = warranty;

  Object.setPrototypeOf(obj, billObj);

  Object.setPrototypeOf(billObj, detailsObj);

  Object.setPrototypeOf(detailsObj, pricObj);

  Object.setPrototypeOf(pricObj, incPriceObj);

  Object.setPrototypeOf(incPriceObj, decPriceObj);

  Object.setPrototypeOf(decPriceObj, expObj);

  return obj;
}

let b=Electronics("infinix hot 11s", "indian" , 4.0 , 11999 , 3 , "1year")
console.log(b)

console.log(b.getPrice())

let increasePrice=b.increasePrice(1000);
console.log(increasePrice)

let expnsive=b.isExpensive();
console.log(expnsive)

let dec=b.decreasePrice(2999);
console.log(dec)

let expnsive2=b.isExpensive();
console.log(expnsive2)

let bill1=b.bill();
console.log(bill1)

console.log(b.details())

let materials = {
  bill2: function () {
    return this.price - (this.price * 15) / 100;
  },
  details1: function () {
    return `${this.product_name} of brand ${
      this.brand
    } of materail at price ${this.bill2()} having a discount of 15%`;
  },
};





console.log("******************Part-3*********************")




function crockery1(product_name, brand, reviews, price, rating, warranty) {
  let obj = Electronics(product_name, brand, reviews, price, rating, warranty);

  Object.setPrototypeOf(obj, materials);

  Object.setPrototypeOf(materials, billObj);

  Object.setPrototypeOf(billObj, detailsObj);

  Object.setPrototypeOf(detailsObj, pricObj);

  Object.setPrototypeOf(pricObj, incPriceObj);

  Object.setPrototypeOf(incPriceObj, decPriceObj);

  Object.setPrototypeOf(decPriceObj, expObj);
  return obj;
}

let crockery = crockery1("20cell ", "indian", 5.0, 14000, 4.0, "3years");

console.log(crockery);

console.log(crockery.getPrice());

console.log(crockery.increasePrice(500));

console.log(crockery.isExpensive());

console.log(crockery.decreasePrice(200));

console.log(crockery.isExpensive());

console.log(crockery.bill2());

console.log(crockery.details1());
