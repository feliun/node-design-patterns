module.exports = ({
  save: (doc) => console.log('Saving like postgres'),
  update: (doc) => console.log('Updating like postgres'),
  delete: (doc) => console.log('Deleting like postgres')
});
