const set = require('lodash.set');
const extract = require('./extract');
const { hasProps, isDefined } = require('./utils');

module.exports = (a = {}, b = {}) => {
  if (!hasProps(b)) return a;

  return Object.entries(b).reduce((acc, [key, value]) => {
    const v = extract(a, value);
    return isDefined(v) ? set(acc, key, v) : acc;
  }, {});
};
