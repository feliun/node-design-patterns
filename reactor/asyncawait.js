const russianRulette = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('This is asynchronous! :');
      const die = Math.floor((Math.random() * 1000)) % 10 === 0;
      if (die) return reject(new Error('The operation died!'));
      resolve();
    }, ms);
  });

module.exports = russianRulette;
