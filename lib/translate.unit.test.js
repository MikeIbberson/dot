const translate = require('./translate');
const { fixture } = require('./extract.unit.test.js');

describe('"Translate"', () => {
  it("should map the first parameter keys to the second parameters's values", () => {
    expect(
      translate(fixture, {
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
      translate(fixture, {
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

  it('should set on dot-notation keys', () => {
    expect(
      translate(fixture, {
        'grault.garply': 'plugh.$$.grault.$$.garply',
        'grault.thud': 'waldo.$$.plugh.$$.thud.xyzzy',
      }),
    ).toMatchObject({
      grault: {
        garply: [1, 2],
        thud: [
          [1, 2],
          [3, 4],
        ],
      },
    });
  });
});
