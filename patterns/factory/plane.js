module.exports = ({ owner, brand, colour, type, wings }) => {

  return {
    printPlane: () => console.log({ owner, brand, colour, type, wings })
  };

};
