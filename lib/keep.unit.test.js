const keep = require('./keep');

const monos = { foo: 1, bar: 1, qux: 1 };

describe('"Keep"', () => {
  it('should execute pick if given defs', () => {
    const values = keep(monos, ['foo', 'bar']);
    expect(values).toHaveProperty('foo');
    expect(values).toHaveProperty('bar');
    expect(values).not.toHaveProperty('quuz');
  });

  it('should return unmodified', () => {
    expect(Object.keys(keep(monos))).toHaveLength(3);
  });
});
