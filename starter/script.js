'use strict';

// we start our constructor function with the Capital letter
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this as it is gonna create 10000 copies of it along with the cunstrunctor function if we are gonna make that.
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const ahmed = new Person('Ahmed', 2002);
console.log(ahmed);

// 1. New Empty Object {} is created.
// 2. function is called new {} is created
// 3. {} linked to prototype
// 4. Function automatically returned

const ibrahim = new Person('Ibrahim', 2003);
console.log(ibrahim);

const abdullah = new Person('abdullah', 2001);
console.log(abdullah);

const akbar = 'akbar';

console.log(ahmed instanceof Person);
console.log(akbar instanceof Person);

// Prototpyes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

ahmed.calcAge();
ibrahim.calcAge();
abdullah.calcAge();

console.log(ahmed.__proto__);
console.log(ahmed.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ahmed));
console.log(Person.prototype.isPrototypeOf(akbar));
console.log(Person.prototype.isPrototypeOf(ibrahim));
console.log(Person.prototype.isPrototypeOf(Person));

// protoTypeOfLinkedObject

// prototypes also have properties
Person.prototype.species = 'Homo-Sapiens';
console.log(ahmed.species, ibrahim);

console.log(ahmed.hasOwnProperty('firstName'));
console.log(ahmed.hasOwnProperty('species'));

// Protypal Inheritence.
console.log(ahmed.__proto__);
console.log(ahmed.__proto__.__proto__);
console.log(ahmed.__proto__ / __proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 5, 2, 5, 8, 5, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// Custom made method for unique values of arrays
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// Just random Proptypal features ot h1
const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.acelerate();
BMW.brake();

Mercedes.acelerate();
Mercedes.brake();

// ES6 class declaration

// Class expression.
// const PersonCl = class{}

// Class Declaration.
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method will be added to proptype class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // Another function (note without any , comma)
  greet() {
    console.log(`Hi ${this.firstName}`);
  }
}

const ahmed2 = new PersonCl('Ahmed', 2002);
console.log(ahmed2.__proto__ === PersonCl.prototype);
console.log(ahmed2);
ahmed2.calcAge();

// GrrenMessage  using prototypal insheritance
ahmed2.greet();

// classes are not hoisted
// classes are first class citizen
// classes are executed in strict view

const accounts = {
  owner: 'Ahmed',
  movements: [10, 20, 26, 43],

  get latest() {
    return this.movements.slice(1);
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(accounts.latest);

accounts.latest = 24346460;
console.log(accounts.movements);
