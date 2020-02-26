const modify = require('./modify');

describe('"Modify"', () => {
  it('should run modifiers sequentially', () => {
    const values = modify(
      {
        foo: 1,
        bar: ' 2. ',
      },
      {
        foo: [(v) => v + 4],
        bar: [
          (v) => v.trim(),
          (v) => v.replace('[^0-9]', ''),
          (v) => ({ value: Number(v) }),
        ],
      },
    );

    expect(values).toHaveProperty('foo', 5);
    expect(values).toHaveProperty('bar', { value: 2 });
  });
});
