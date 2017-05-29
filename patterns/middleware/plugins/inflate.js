module.exports = (context, quantity, next) => {
  const { accumulator } = context;
  context.accumulator = (accumulator || 0) + quantity;
  next();
};
