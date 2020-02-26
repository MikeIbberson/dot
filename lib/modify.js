const check = require('check-types');
const { runModifiers } = require('./utils');

module.exports = (values = {}, modifiers = {}) =>
  check.object(modifiers) && check.object(values)
    ? Object.entries(values).reduce(
        (acc, [key, value]) =>
          Object.assign(acc, {
            [key]: runModifiers(modifiers[key], value),
          }),
        {},
      )
    : values;
