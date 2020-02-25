const utils = require('./utils');

describe('Dot utility functionss', () => {
  describe('"getOnDeepest"', () => {
    it('should execute get on deepest array', () => {
      const out = utils.getOnDeepest([[[[[{ value: 1 }]]]]], 'value');
      expect(out).toEqual([[[[[1]]]]]);
    });
  });
});
