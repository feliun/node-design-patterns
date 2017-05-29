const target = {
  add: (a, b) => a + b,
  boom: () => {
    throw new Error('I always fail!');
  }
};

module.exports = target;
