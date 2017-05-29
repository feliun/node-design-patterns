const assert = require('assert');
const target = require('./target');
const createMock = require('./proxy');

const myMock = createMock(target, { add: 8, boom: 'Avoiding an error' });

assert.equal(myMock.add(2, 3), 8);
assert.equal(myMock.boom(), 'Avoiding an error');
