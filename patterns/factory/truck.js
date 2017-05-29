module.exports = ({ licensePlate, brand, colour, maxWeight }) => {

  return {
    printTruck: () => console.log({ licensePlate, brand, colour, maxWeight })
  };

};
