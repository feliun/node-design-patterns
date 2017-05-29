const assert = require('assert');
const async = require('async');
const stampDate = require('./plugins/stampDate');
const inflate = require('./plugins/inflate');
const deinflate = require('./plugins/deinflate');

const myContext = {};
// the Middleware manager is responsible for assembling the pieces
// each plugin or piece is unaware of the rest of them
// they are only bound by a common context
async.series([
    stampDate.bind(null, myContext),
    inflate.bind(null, myContext, 5),
    inflate.bind(null, myContext, 2),
    deinflate.bind(null, myContext, 3)
], (err) => {
  if (err) throw err;
  assert.equal(myContext.accumulator, 4);
  assert.equal(myContext.stamp > 0, true);
  console.log('ALL GOOD!');
});
