import '../css/common.css';
import vehicles from '../js/vehicles.js';

class Car {
  constructor({ make, model, type, price } = {}) {
    this.make = make;
    this.model = model;
    this.type = type;
    this.price = price;
  }

  setThePrice(newPrice) {
    this.price = newPrice;
  }
}

const nissan = new Car({
  make: 'nissan',
  model: 'Skyline GT-R',
  type: 'Sedan',
  price: 19099,
});

// console.log(nissan);

// const toyota = vehicles
//   .filter(el => el.make === 'Toyota')
//   .map(el => new Car(el));
// console.log(toyota);

// const ford = vehicles.filter(el => el.make === 'Ford').map(el => new Car(el));
// console.log(ford);

// const fordString = JSON.stringify(ford);

//-------------------------------------------------------------------

localStorage.setItem('car', JSON.stringify(nissan));

const parsedCar = JSON.parse(localStorage.getItem('car'));
console.log(parsedCar);

//-------------------------------------------------------------------
