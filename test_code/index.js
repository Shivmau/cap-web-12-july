// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
    
//     speak() {
//       console.log(`${this.name} makes a sound.`);
//     }
//   }
  
//   const dog = new Animal('Dog');
//   const speakFunction = dog.speak;
//   speakFunction();
  

// function Person(name) {
//     this.name = name;
//   this.greet = function() {
//     console.log(`Hello, ${this.name}`);
//   }
//   }
  
  
//   const person = new Person('Alice');
//   const greetFunction = person.greet.bind(person);
//   greetFunction();

// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
    
//     area() {
//       return this.width * this.height;
//     }
//   }
  
//   const rectangle = new Rectangle(5, 10);
//   const areaFunction = rectangle.area;
//   console.log(areaFunction.call(rectangle));

// class Car {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//     }
    
//     display() {
//       console.log(`This car is a ${this.make} ${this.model}`);
//     }
//   }
  
//   const car = new Car('Toyota', 'Corolla');
//   const displayFunction = car.display;
//   displayFunction.apply(car);
  
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   User.prototype.describe = function() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
  
//   const user = new User('John', 25);
//   const describeFunction = user.describe;
//   describeFunction();
  
// function greet() {
//     console.log(this.name);
//   }
  
//   const person = { name: 'Alice' };
//   greet.call(person);

// const obj = {
//     x: 10,
//     getX: function() {
//       return this.x;
//     }
//   };
  
//   const unboundGetX = obj.getX;
//   console.log(unboundGetX()); // What will this log?
  
//   const boundGetX = unboundGetX.bind(obj);
//   console.log(boundGetX()); // What will
//  this log?


function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
      }
    };
  }
  
  const person1 = new createPerson('John', 30);
  console.log(person1.greet()); // What will this log?
  
  
  
  
  
  
  
  
  
  
  
  
  

  