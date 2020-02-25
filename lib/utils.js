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

module.exports = {
  getOnDeepest,
  filterByExcludes,
  filterByIncludes,
  numberOfAppearances,
};
