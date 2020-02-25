const check = require('check-types');
const extract = require('./extract');

module.exports = (a = {}, b = {}) => {
  if (check.emptyObject(b)) return a;

  return Object.entries(b).reduce((acc, [key, value]) => {
    const v = extract(a, value);

    return v
      ? Object.assign(acc, {
          [key]: v,
        })
      : acc;
  }, {});
};
