const draft = require('./states/draft');
const pending = require('./states/pending');
const published = require('./states/published');

module.exports = () => {

  const init = () => draft;

  const transition = (current) => {
    if (current.getName() === 'draft') return pending;
    return published;
  };

  return { init, transition };

};
