const createMock = (subject, expectation) => {

  const add = (a, b) => expectation.add || subject.add.apply(subject, [ a, b ]);

  const boom = () => expectation.boom || subject.boom.apply(subject);

  return { add, boom };

};

module.exports = createMock;
