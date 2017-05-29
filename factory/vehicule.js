const R = require('ramda');
const Car = require('./car');
const Plane = require('./plane');
const Truck = require('./truck');

module.exports = R.curry((type, options) => {
  const vehiculeByType = {
    car: Car,
    plane: Plane,
    truck: Truck
  };
  const MyClass = vehiculeByType[type];
  return MyClass ? MyClass(options) : null;
});
