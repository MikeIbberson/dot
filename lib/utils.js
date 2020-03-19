const check = require('check-types');
const get = require('lodash.get');

const getOnDeepest = (initialLevel, path) => {
  const recurse = (level) =>
    Array.isArray(level)
      ? level.map(recurse).filter(Boolean)
      : get(level, path);

  return recurse(initialLevel);
};

const filterByExcludes = (arr = [], v) =>
  arr.filter((item) => !item.includes(v));

const filterByIncludes = (arr = [], v) =>
  arr.filter((item) => item.includes(v));

const numberOfAppearances = (str, v) => str.split(v).length - 1;

const runModifiers = (modifiers, originalValue, context) => {
  let newValue = originalValue;
  if (check.nonEmptyArray(modifiers))
    modifiers.forEach((fn) => {
      if (typeof fn === 'function')
        newValue = fn(originalValue, context);
    });

  return newValue;
};

const hasProps = (a) => a && check.nonEmptyObject(a);

module.exports = {
  getOnDeepest,
  filterByExcludes,
  filterByIncludes,
  numberOfAppearances,
  runModifiers,
  hasProps,
};
