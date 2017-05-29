const createVehicule = require('./vehicule');


const createCar = createVehicule('car');
const createPlane = createVehicule('plane');
const createTruck = createVehicule('truck');

const myCar = createCar({ licensePlate: 'AAAA', brand: 'Audi', colour: 'black', model: 'A3' });
const myPlane = createPlane({ owner: 'Lufthansa', brand: 'Boeing', colour: 'white', type: '747', wings: 4 });
const myTruck = createTruck({ licensePlate: 'BBBB', brand: 'Citröen', colour: 'red', maxWeight: 1250 });

// Different interfaces (potentially)


myCar.printCar();
myPlane.printPlane();
myTruck.printTruck();
