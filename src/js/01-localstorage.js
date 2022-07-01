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

console.log(localStorage);

localStorage.setItem('name', 'mango');

const objA = {
  name: 'mango',
  age: 23,
};

localStorage.setItem('user', JSON.stringify(objA));

console.log(JSON.parse(localStorage.getItem('user')));

// -----------------------------------------------------------------
// -----------------------------------------------------------------
