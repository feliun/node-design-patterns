module.exports = ({ emitter }) => {
  const publishSportNews = () => {
    emitter.emit('sport', { content: 'This is a random content' });
  };
  const startPublishing = () => setInterval(publishSportNews, 2000);
  return { startPublishing };
};
