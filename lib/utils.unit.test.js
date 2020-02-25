const utils = require('./utils');

describe('Dot utility functionss', () => {
  describe('"getOnDeepest"', () => {
    it('should execute get on deepest array', () => {
      const out = utils.getOnDeepest([[[[[{ value: 1 }]]]]], 'value');
      expect(out).toEqual([[[[[1]]]]]);
    });
  });

  describe('"filterByIncludes"', () => {
    it('should reduce length via inclusion', () => {
      const out = utils.filterByIncludes(['A', 'B', 'C'], 'A');
      expect(out).toHaveLength(1);
    });
  });

  describe('"filterByExcludes"', () => {
    it('should reduce length via inclusion', () => {
      const out = utils.filterByExcludes(['A', 'B', 'C'], 'A');
      expect(out).toHaveLength(2);
    });
  });

  describe('"numberOfAppearances"', () => {
    it('should count number of instances of a character in a string', () => {
      const out = utils.numberOfAppearances('Hello world', 'l');
      expect(out).toBe(3);
    });
  });
});
