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
