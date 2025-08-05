'use strict';

// we start our constructor function with the Capital letter

// ////////////////////////////////////
// // Constructor Method.

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this as it is gonna create 10000 copies of it along with the cunstrunctor function if we are gonna make that.
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// // Inheritance between classes Constructor function
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking ProtoType
// Student.prototype = Object.create(Person.prototype);
// // Student.prototype = Person.prototype; => We should not use thos directly because we want to inherut it but not want as exact the same as the otherone so we should use the upper one we should use Object.create
// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and i am currently doing my degree in ${this.course}`
//   );
// };

// const Moavia = new Student('Moavia', 1993, 'Charted Accountant');
// Moavia.introduce();
// Moavia.calcAge();

// console.log(Moavia.__proto__);
// console.log(Moavia.__proto__.__proto__);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// const ahmed = new Person('Ahmed', 2002);
// console.log(ahmed);

// // 1. New Empty Object {} is created.
// // 2. function is called new {} is created
// // 3. {} linked to prototype
// // 4. Function automatically returned

// const ibrahim = new Person('Ibrahim', 2003);
// console.log(ibrahim);

// const abdullah = new Person('abdullah', 2001);
// console.log(abdullah);

// const akbar = 'akbar';

// console.log(ahmed instanceof Person);
// console.log(akbar instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋🏻');
// };

// Person.hey();

// // Prototpyes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// ahmed.calcAge();
// ibrahim.calcAge();
// abdullah.calcAge();

// console.log(ahmed.__proto__);
// console.log(ahmed.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(ahmed));
// console.log(Person.prototype.isPrototypeOf(akbar));
// console.log(Person.prototype.isPrototypeOf(ibrahim));
// console.log(Person.prototype.isPrototypeOf(Person));

// // protoTypeOfLinkedObject

// // prototypes also have properties
// Person.prototype.species = 'Homo-Sapiens';
// console.log(ahmed.species, ibrahim);

// console.log(ahmed.hasOwnProperty('firstName'));
// console.log(ahmed.hasOwnProperty('species'));

// // Protypal Inheritence.
// console.log(ahmed.__proto__);
// console.log(ahmed.__proto__.__proto__);
// console.log(ahmed.__proto__ / __proto__.__proto__);
// console.dir(Person.prototype.constructor);

// const arr = [3, 5, 2, 5, 8, 5, 2];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// // Custom made method for unique values of arrays
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// // Just random Proptypal features ot h1
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.acelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };
// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// BMW.acelerate();
// BMW.brake();

// Mercedes.acelerate();
// Mercedes.brake();

// // ES6 class declaration
// ////////////////////////////////////
// // Classes Declaration

// // Class expression.
// // const PersonCl = class{}

// // Class Declaration.
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Method will be added to proptype class
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // Another function (note without any , comma)
//   greet() {
//     console.log(`Hi ${this.firstName}`);
//   }

//   // Getter for a calcAge function
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Setter for fullName logic
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   // Getter for the above fullName setter to avoid _fullName to combine wuth the orignal constructor's fullName.
//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('peekaboo 🫣');
//     console.log(this);
//   }
// }

// const ahmed2 = new PersonCl('Syed Muhammad Ahmed Bukhari', 2002);
// console.log(ahmed2.__proto__ === PersonCl.prototype);
// console.log(ahmed2);
// ahmed2.calcAge();
// console.log(ahmed2.age);

// // GrrenMessage  using prototypal insheritance
// ahmed2.greet();

// // Calling static methids
// PersonCl.hey();

// // classes are not hoisted
// // classes are first class citizen
// // classes are executed in strict view

// const walter = new PersonCl('Walter White', 1969);

// const accounts = {
//   owner: 'Ahmed',
//   movements: [10, 20, 26, 43],

//   get latest() {
//     return this.movements.slice(1);
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(accounts.latest);

// accounts.latest = 24346460;
// console.log(accounts.movements);

// ////////////////////////////////////
// // Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const azlan = Object.create(PersonProto);
// console.log(PersonProto);
// azlan.name = 'Azlan';
// azlan.birthYear = 2002;
// azlan.calcAge();

// console.log(azlan.__proto__ === PersonProto);

// const fatima = Object.create(PersonProto);
// fatima.init('Fatima', 1939);
// fatima.calcAge();

// ///////////////////////////////////////
// // Coding Challenge #2

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a class to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class CarC {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   // Acelerate Method.
//   acelerate() {
//     console.log((this.speed += 10));
//   }

//   // Brake Method.
//   brake() {
//     console.log((this.speed -= 5));
//   }

//   // Getter SppedUS.
//   get SpeedUS() {
//     return this.speed / 1.6;
//   }

//   // Setter method
//   set SpeedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const BMWCl = new CarC('BMW', 120);
// const MercedeseCl = new CarC('Mercedes', 100);
// const ford = new CarC('Ford', 130);

// console.log(ford.SpeedUS);
// ford.SpeedUS = 50;
// console.log(ford);

////////////////////////////////////
// Constructor Method.

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this as it is gonna create 10000 copies of it along with the cunstrunctor function if we are gonna make that.
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// // Inheritance between classes Constructor function
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking ProtoType
// Student.prototype = Object.create(Person.prototype);
// // Student.prototype = Person.prototype; => We should not use thos directly because we want to inherut it but not want as exact the same as the otherone so we should use the upper one we should use Object.create
// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and i am currently doing my degree in ${this.course}`
//   );
// };

// const Moavia = new Student('Moavia', 1993, 'Charted Accountant');
// Moavia.introduce();
// Moavia.calcAge();

// console.log(Moavia.__proto__);
// console.log(Moavia.__proto__.__proto__);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const CarC = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const EV = function (make, speed, charge) {
//   CarC.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(CarC.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.acelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed}, with a charge of ${this.charge}%`
//   );
// };

// const Tesla = new EV('Tesla', 120, 90);
// Tesla.acelerate();

// ES6 class declaration
////////////////////////////////////
// Classes Inheritance with child Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Method will be added to proptype class
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // Another function (note without any , comma)
//   greet() {
//     console.log(`Hi ${this.firstName}`);
//   }

//   // Getter for a calcAge function
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Setter for fullName logic
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   // Getter for the above fullName setter to avoid _fullName to combine wuth the orignal constructor's fullName.
//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('peekaboo 🫣');
//     console.log(this);
//   }
// }

// class Studentcl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first because this call will allow to happen this keyword to the class
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(
//       `My name is ${this.fullName} and i am currently doing my degree in ${this.course}`
//     );
//   }

//   calcAge() {
//     console.log(
//       `I,m ${2037 - this.birthYear} years old, but i feel more like a ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const amar = new Studentcl('Amar bin alaas', 1992, 'Computer Science');
// amar.introduce();
// amar.calcAge();

// ////////////////////////////////////
// // Object.Create Inheritance
// const PersonProto = {
//   cacAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const sulman = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and i am currently doing my degree in ${this.course}`
//   );
// };
// const jamal = Object.create(StudentProto);
// jamal.init('Jamal', 2002, 'Physcology');
// jamal.introduce();
// jamal.cacAge();

// ////////////////////////////////////
// // more classes Functions

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;
//   }

//   deposite(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposite(-val);
//   }

//   approvLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approvLoan(val)) {
//       this.deposite(val);
//       console.log(`Loan Approved!`);
//     }
//   }
// }

// const ahmed = new Account('Syed Muhammad Ahmed Bukhari', 'PKR', 1111);

// ahmed.deposite(123);
// ahmed.withdraw(252);

// console.log(ahmed);
// ahmed.requestLoan();
// console.log(ahmed);

////////////////////////////////////
// Encapsulation: Private class fields and methods.

// 1) Public fields
// 2) Private fields
// 1) Public Methods
// 1) Public Methods
// STATIC VERSION OF ALL THESE 4

class Account {
  locale = navigator.language;
  bank = 'Al Habib bank'; // This is also a very good candidate to appear in all our account therefore is the public fields

  // Private fields
  #movements = [];

  #pin; // but now we really need to specify it inside the constructor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language; // We do make it public fields so tht it is gonaa appear on every accounts
  }

  getMovements() {
    return this.#movements;
  }

  // These all are the public methods
  deposite(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposite(-val);
    return this;
  }

  #approvLoan(val) {
    // Fake method really which can t be approved by the developers and other user so we do make it private by using # symbol in it
    return true;
  }

  requestLoan(val) {
    if (this.#approvLoan(val)) {
      this.deposite(val);
      console.log(`Loan Approved!`);
    }
    return this;
  }

  static #Test() {
    console.log('Test');
  }
}

const ahmed = new Account('Syed Muhammad Ahmed Bukhari', 'PKR', 1111);

// ahmed.deposite(123);
// ahmed.withdraw(252);
// console.log(ahmed.#movements); Now we can't access or mutate the movements array from outside the classfield
const movementsAhmed = ahmed
  .deposite(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(2300)
  .deposite(4000)
  .getMovements();

console.log(ahmed);
console.log(ahmed.pin);
// ahmed.#approvLoan(233); // see we can't manupulate or mutate it by using someother thinge
console.log(movementsAhmed);

///////////////////////////////////////
// Coding Challenge #4
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class,
 and also update the 'brake' method in the 'CarCl' class. They experiment with chaining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarC {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}
class EVCL extends CarC {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(charge) {
    this.#charge = charge;
    return this;
  }

  acelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const Rivian = new EVCL('Rivian', 120, 30);

console.log(Rivian);
// console.log(Rivian.#charge);
Rivian.acelerate().acelerate().acelerate().chargeBattery(50).acelerate();
