const R = require('ramda');

const createDocEditor = require('./target');
const createTextEditorCmd = require('./command');
const createInvoker = require('./invoker');

// The Client
const myEditor = createDocEditor();
const createCmd = createTextEditorCmd(myEditor);
const a_stroke = createCmd('a');
const b_stroke = createCmd('b');
const space_stroke = createCmd(' ');
const backspace_stroke = createCmd('0x7f');
const invoker = createInvoker();

console.log(`Current text: ${myEditor.currentText()}`);
invoker.run(a_stroke);
invoker.run(a_stroke);
invoker.run(space_stroke);
invoker.run(b_stroke);
invoker.run(b_stroke);
invoker.run(b_stroke);
console.log(`Current text: ${myEditor.currentText()}`);
invoker.undo();
console.log(`Current text: ${myEditor.currentText()}`);
invoker.run(backspace_stroke);
console.log(`Current text: ${myEditor.currentText()}`);