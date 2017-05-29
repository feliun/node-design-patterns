module.exports = (context, next) => {
  context.stamp = new Date();
  next();
};
