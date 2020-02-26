const translateAndModify = require('./translateAndModify');
const { fixture } = require('./extract.unit.test.js');

describe('"TranslateAndModify"', () => {
  it("should map the first parameter keys to the second parameters's values", () => {
    const o = translateAndModify(fixture, {
      foo: 'foo',
      quuz: 'qux.quux',
      bongo: [() => 'OVERRIDE'],
    });

    expect(Object.keys(o)).toHaveLength(3);

    expect(o).toMatchObject({
      foo: 1,
      quuz: 1,
      bongo: 'OVERRIDE',
    });
  });
});
