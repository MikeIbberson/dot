const get = require('lodash.get');
const { getOnDeepest, numberOfAppearances } = require('./utils');

module.exports = (a = {}, path) =>
  path
    .split(/\.(\${1,})\./g)
    .filter(Boolean)
    .reduce((prev, next) => {
      const isArray = Array.isArray(prev);
      const isAmpersand = next.includes('$');

      if (isAmpersand)
        return isArray && numberOfAppearances(next, '$') > 1
          ? prev.flat()
          : prev;

      if (isArray) return getOnDeepest(prev, next);
      return get(prev, next);
    }, a);
