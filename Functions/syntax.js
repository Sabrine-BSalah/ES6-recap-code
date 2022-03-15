/**
 * Convert this code into Arrow functions
 */

// Example 1
// ---------
//  function expression version
const add = function (x, y) {
  return x + y;
};
// // arrow function version
// const add = (x, y) => x + y;
// console.log(add(1, 2));

// const getname = name =>`hello ${name}`;
// console.log(getname("Ali"));


// Example 2
// ---------
let people = [
  { name: 'Ahmed', age: 27 },
  { name: 'Ali', age: 22 },
  { name: 'Salah', age: 29 },
  { name: 'Ahmed', age: 28 },
  { name: 'Karim', age: 35 }
];

// // Task: 
// // we need the sum of the ages of the people
// // between 25 and 30 and their name is Ahmed

// let sumAge1= people.filter(function(el){return (el.age>25 && el.age<30)}).filter(function(el){return el.name==="Ahmed"}).map(function(el){return el.age}).reduce(function(acc, cur){
//   return ((acc || 0) + cur)
// })

// console.log(sumAge1)

// let sumAge = people.
// filter(el=> el.age>25 && el.age<30 && el.name==="Ahmed").map(el=>el.age).
// reduce((acc, curr)=> (acc || 0) + curr)
// console.log(sumAge)