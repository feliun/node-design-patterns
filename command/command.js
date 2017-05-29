const R = require('ramda');

// The command
const createTextEditorCmd = R.curry((editor, key) => {

  const backspace = '0x7f';
  let previous = '';

  const run = () => {
      previous = editor.currentText();
      //strategy pattern
      key === backspace ? editor.deleteOne() : editor.add(key)
  };

  const undo = () => {
      if (key === backspace) return editor.replace(previous);
      editor.deleteOne();
  }

  const serialise = () => ({ key, current: editor.currentText() });

  return { run, undo, serialise };
});

module.exports = createTextEditorCmd;
