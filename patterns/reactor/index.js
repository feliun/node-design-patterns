const callback = require('./callback');
const promise = require('./promise');
const asyncawait = require('./asyncawait');

async function testAsyncAwait() {
  await Promise.resolve(asyncawait(2000));
}

console.log('Calling a callback...');
callback(2000, (err) => { // CALLBACK
    if (err) console.error(err); // This is ESSENTIAL
    console.log('Now I can do stuff after 2 secs...');

    console.log('Calling a promise...');
    promise(2000) // PROMISE
      .then(() => {
        console.log('Now I can do stuff after 2 secs...');
        console.log('Calling async/await...');
        try {
           testAsyncAwait(); // ASYNC/AWAIT
        } catch(err) { console.error(err) }
      })
      .catch(console.error);
});
