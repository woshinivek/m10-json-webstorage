import '../css/common.css';

// const objA = {
//   name: 'mango',
//   age: 23,
// };

// const jsonObjA = JSON.stringify(objA);
// console.log(jsonObjA);

// const reversJson = JSON.parse(jsonObjA);
// console.log(reversJson);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// console.log(localStorage);

// localStorage.setItem('name', 'mango');

// const objA = {
//   name: 'mango',
//   age: 23,
// };

// localStorage.setItem('user', JSON.stringify(objA));

// console.log(JSON.parse(localStorage.getItem('user')));

// localStorage.clear();
// console.log(localStorage);

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// localStorage.clear();

// const objB = {
//   composers: ['Igor Stravinsky', 'Nikolai Rimsky-Korsakov'],
//   countries: ['France', 'USA'],
// };

// localStorage.setItem('name', 'tupang');
// localStorage.setItem('immigrants', JSON.stringify(objB));

// const parssedImmigrants = JSON.parse(localStorage.getItem('immigrants'));
// console.log('parssedImmigrants', parssedImmigrants);

// console.log(localStorage);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// console.log('sessionStorage', sessionStorage);

// console.log(typeof bar);

// let bar = null;

// // console.log(typeof bar === 'object');

// console.log(bar !== null && typeof bar === 'object');

// var a = (b = 3);

// let b = 20;

// if (true) {
//   console.log(b);
//   let b = 10;
// }

// console.dir(Object);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// class User {
//   constructor({ name, age } = {}) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Programmer extends User {
//   constructor({ name, age, gender, job } = {}) {
//     super({ name, age });
//     this.gender = gender;
//     this.job = job;
//   }
// }

// const mango = new Programmer({
//   name: 'Mango',
//   age: 10,
//   gender: 'Female',
//   job: 'Programmer',
// });

// console.log(mango);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// const a = 2;

// (function () {
//   var a = (b = 3);
// })();

// console.log(typeof a === 'undefined');
// console.log(typeof a);
// console.log(typeof b === 'undefined');

// (function () {})();

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// const fn = function () {
//   console.log('fn this', this);
// };

// console.log(fn());

// --------------------------------

// const objA = {
//   a: 45,
//   fn() {
//     console.log('this in fn: ', this);
//   },
// };

// objA.fn();

// --------------------------------

// (function () {
//   console.log(this);
// })();

// --------------------------------

// const fn = () => {
//   console.log(this);
// };

// fn();

// --------------------------------

// const objA = {
//   a: 45,
//   b: 56,

//   sum(x, y) {
//     console.log('mult ~ this.a + x', this.a + x);
//     console.log('mult ~ this.b + y', this.b + y);
//   },

//   mult(j, k) {
//     console.log('sum ~ this.a * x', this.a * j);
//     console.log('sum ~ this.b * y', this.b * k);
//   },
// };

// const copyOfInnerSumFunction = objA.sum;
// const copyOfInnerMultFunction = objA.mult;

// copyOfInnerMultFunction(32, 32);

// copyOfInnerSumFunction.call(objA, 2, 2);
// copyOfInnerMultFunction.call(objB, 3, 3);

// copyOfInnerMultFunction.apply(objA, [2, 2]);

// --------------------------------

// const user = {
//   name: 'Mango',
//   age: 34,

//   greetUser() {
//     return `Name: ${this.name}, age: ${this.age}`;
//   },
// };

// const user2 = {
//   name: 'nik',
//   age: 54,
// };

// const greetUserMango = function (cb) {
//   console.log('process application from: ', cb());
// };

// console.log(greetUserMango(user.greetUser.bind(user)));
// console.log(greetUserMango(user.greetUser.bind(user2)));

// --------------------------------
