const R = require('ramda');

// The invoker: proxy that gets record of everything
const createInvoker = () => {
  const history = [];
  const run = (cmd) => {
    history.push(cmd);
    cmd.run();
    console.log(`Command executed: ${JSON.stringify(cmd.serialise(), null, 2)}`);
  };
  // reverts the last command
  const undo = () => {
    const cmd = history.pop();
    cmd.undo();
    console.log(`Command undone: ${JSON.stringify(cmd.serialise(), null, 2)}`);
  };
  const runRemotely = (cmd) => {
    request('http://localhost:3000')
    .post('/cmd')
    .json(cmd.serialise())
    .then(() => {
      console.log('I just ran remotely')
    });
  };
  const printHistory = () => console.log(JSON.stringify(history));
  return { run, undo, runRemotely, printHistory };
};

module.exports = createInvoker;