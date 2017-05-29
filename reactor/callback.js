const russianRulette = (ms, next) => {
  setTimeout(() => {
    console.log('This is asynchronous! :');
    const die = Math.floor((Math.random() * 1000)) % 10 === 0;
    // by convention, error ALWAYS goes first
    if (die) return next(new Error('The operation died!'));
    next(null);
  }, ms);
};

module.exports = russianRulette;
