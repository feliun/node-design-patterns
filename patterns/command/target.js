const R = require('ramda');

// The target
const createDocEditor = () => {

  let typedText = '';

  const add = (newChar, text) => text + newChar;

  const remove = (text) => R.dropLast(1, text);

  return {
    add: (newChar) => {
        typedText = add(newChar, typedText);
    },
    deleteOne: () => {
        typedText = remove(typedText);
    },
    replace: (text) => {
        typedText = text;
    },
    currentText: () => typedText
  };
};

module.exports = createDocEditor;
