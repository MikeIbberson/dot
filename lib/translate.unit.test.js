const translate = require('./translate');

const complexObject = {
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

describe('"Translate"', () => {
  it("should map the first parameter keys to the second parameters's values", () => {
    expect(
      translate(complexObject, {
        foo: 'foo',
        quuz: 'qux.quux',
        bongo: 'bar.baz.bongo',
      }),
    ).toMatchObject({
      foo: 1,
      quuz: 1,
      bongo: 1,
    });
  });

  it('should map nested arrays correctly', () => {
    expect(
      translate(complexObject, {
        grault: 'plugh.$.grault',
        garply: 'plugh.$$.grault.$$.garply',
        thud: 'waldo.$$.plugh.$$.thud.xyzzy.$$.',
      }),
    ).toMatchObject({
      grault: [[{ garply: 1 }, { garply: 2 }]],
      garply: [1, 2],
      thud: [1, 2, 3, 4],
    });
  });
});
