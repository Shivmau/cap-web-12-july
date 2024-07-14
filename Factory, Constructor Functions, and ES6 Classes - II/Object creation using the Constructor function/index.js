// factory function that used to create animal objects
console.log("****this part of factory function...");

function animal(noOflegs, vegetarian) {
  let obj = {};

  obj.noOflegs = noOflegs;
  obj.vegetarian = vegetarian;

  obj.eat = function () {
    return "eating...";
  };

  obj.greet = function () {
    return `Hi, I have ${this.noOflegs} legs.`;
  };

  return obj;
}

let eniaml = animal(4, true);
console.log(eniaml);

function eats() {
  console.log(eniaml.eat());
}

function greets() {
  console.log(eniaml.greet());
}

console.log("[call method]");
eats.call(eniaml);
greets.call(eniaml);

console.log("[apply method]");
eats.apply(eniaml);
greets.apply(eniaml);

// constructor function that used to create animal objects in bulk quantity
console.log("****this part of constructor function...");

function AnimalCF(noOflegs, vegetarian) {
  this.noOflegs = noOflegs;
  this.vegetarian = vegetarian;

  this.eat = function () {
    return "eating...";
  };

  this.greet = function () {
    return `Hi, I have ${this.noOflegs} legs.`;
  };
}

let a = new AnimalCF(2, true);
console.log(a);

function eating() {
  console.log(a.eat());
}

function greeting() {
  console.log(a.greet());
}

console.log("[call method]");
eating.call(a);
greeting.call(a);

console.log("[apply method]");
eating.apply(a);
greeting.apply(a);

// factory function to an ES6 class
console.log("****this part of factory function to an ES6 class...");

class AnimalES6 {
  constructor(noOflegs, vegetarian) {
    this.noOflegs = noOflegs;
    this.vegetarian = vegetarian;
  }

  eat() {
    return `eating...`;
  }

  greet() {
    return `Hi, I have ${this.noOflegs} legs.`;
  }
}

let b = new AnimalES6(4, false);
console.log(b);

function eat1() {
  console.log(b.eat());
}

function greet1() {
  console.log(b.greet());
}

console.log("[call method---]");
eat1.call(b);
greet1.call(b);

console.log("[apply method---]");
eat1.apply(b);
greet1.apply(b);
