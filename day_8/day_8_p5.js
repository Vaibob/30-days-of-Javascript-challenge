// Challenge 8 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197148

// This code file will only contain feature request 4 i.e. tasks 8 , 9

// Task 8

const name = "Alice";
const age = 30;
const city = "Wonderland";

const person = {
  name, // Property shorthand
  age,
  city,
  greet() { // Method definition shorthand
    console.log(`Hello, my name is ${this.name} and I live in ${this.city}.`);
  },
  getDetails() {
    return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
  }
};

console.log(person);
person.greet();
console.log(person.getDetails());

// Task 9

const propName = "favoriteFruit";
const favoriteFruit = "Apple";

const personWithComputedProp = {
  ...person, // Spread operator to include previous properties and methods
  [propName]: favoriteFruit // Computed property name
//   favoriteFruit, // This works too ... favoriteFruit: 'Apple'
};

console.log(personWithComputedProp);
