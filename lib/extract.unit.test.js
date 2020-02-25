const extract = require('./extract');

const fixture = {
  foo: 1,
  bar: {
    baz: {
      bongo: 1,
    },
  },
  qux: {
    quux: 1,
  },
  plugh: [
    {
      grault: [
        {
          garply: 1,
        },
        {
          garply: 2,
        },
      ],
    },
  ],
  waldo: [
    {
      plugh: [
        {
          thud: {
            xyzzy: [1, 2],
          },
        },
        {
          thud: {
            xyzzy: [3, 4],
          },
        },
      ],
    },
    {
      plugh: [
        {
          thud: 2,
        },
      ],
    },
  ],
};

describe('"Extract"', () => {
  it('should get keys in nested objects', () => {
    const out = extract(fixture, 'waldo.$.plugh');

    expect(out).toEqual([
      [{ thud: { xyzzy: [1, 2] } }, { thud: { xyzzy: [3, 4] } }],
      [{ thud: 2 }],
    ]);
  });

  it('should flatten keys in some objects', () => {
    const out = extract(fixture, 'waldo.$$.plugh.$$.');

    expect(out).toEqual([
      { thud: { xyzzy: [1, 2] } },
      { thud: { xyzzy: [3, 4] } },
      { thud: 2 },
    ]);
  });
});

module.exports = {
  fixture,
};
