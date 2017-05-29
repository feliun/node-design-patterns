module.exports = ({ licensePlate, brand, colour, model }) => {

  return {
    printCar: () => console.log({ licensePlate, brand, colour, model })
  };

};
