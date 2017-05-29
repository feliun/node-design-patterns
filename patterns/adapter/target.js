const R = require('ramda');

const Plane = {
  tiltLeft: R.curry((degrees) => {
    console.log(`Tilting ${degrees} degrees to the left`)
  }),
  tiltRight: R.curry((degrees) => {
    console.log(`Tilting ${degrees} degrees to the right`)
  }),
  takeOff: () => console.log('Taking off...'),
  land: () => console.log('Landing now...'),
};

module.exports = Plane;
