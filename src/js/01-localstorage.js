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

const objB = {
  composers: ['Igor Stravinsky', 'Nikolai Rimsky-Korsakov'],
  countries: ['France', 'USA'],
};

localStorage.setItem('name', 'agent');
// localStorage.setItem('immigrants', JSON.stringify(objB));

const string = JSON.stringify(objB);
localStorage.setItem('dessidents', string);

const parsed = JSON.parse(localStorage.getItem('dessidents'));
console.log(parsed);

console.log('localStorage', localStorage);
// -----------------------------------------------------------------
// -----------------------------------------------------------------

console.log('sessionStorage', sessionStorage);
