const PlaneAdapter = (myPlane) => ({
  turnLeft: () => myPlane.tiltLeft(45),
  turnRight: () => myPlane.tiltRight(45),
  start: myPlane.takeOff,
  stop: myPlane.land,
});


module.exports = PlaneAdapter;
