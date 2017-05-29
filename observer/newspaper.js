module.exports = ({ name, emitter }) => {
// Dependency Injection
  const listeners = { // Another pattern applied here...
    marca: ({ content }) => console.log(`MARCA: C. Ronaldo is the best - ${content}`),
    sport: ({ content }) => console.log(`SPORT: Nope, Messi is the one - ${content}`),
    unknown: () => console.log('I don\'t know what to say ¯\_(ツ)_/¯'),
  };
  const handler = listeners[name] || listeners.unknown;
  emitter.on('sport', handler);
};
