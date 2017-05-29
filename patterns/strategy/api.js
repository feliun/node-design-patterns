module.exports = (store) => {

  const save = (doc) => store.save(doc);
  const update = (doc) => store.update(doc);
  const delete = (doc) => store.delete(doc);

  return { save, update, delete };

};
