const myPlane = require('./target');
const myCar = require('./reference');
const adapter = require('./adapter');

const adaptedPlane = adapter(myPlane);

myCar.start();
myCar.turnLeft();

adaptedPlane.start();
adaptedPlane.turnLeft();


