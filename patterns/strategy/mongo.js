module.exports = ({
  save: (doc) => console.log('Saving like mongo'),
  update: (doc) => console.log('Updating like mongo'),
  delete: (doc) => console.log('Deleting like mongo')
});
