const set = require('lodash.set');
const extract = require('./extract');
const { runModifiers, hasProps } = require('./utils');

module.exports = (a = {}, b = {}) => {
  if (!hasProps(b)) return a;

  return Object.entries(b).reduce((acc, [key, value]) => {
    let newValue;

    if (Array.isArray(value)) {
      newValue = runModifiers(value, a[key], a);
    } else {
      newValue = extract(a, value);
    }

    return newValue ? set(acc, key, newValue) : acc;
  }, {});
};
