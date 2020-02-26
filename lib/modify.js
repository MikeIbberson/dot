const check = require('check-types');

module.exports = (values = {}, modifiers = {}) =>
  check.object(modifiers) && check.object(values)
    ? Object.entries(values).reduce((acc, [key, value]) => {
        let newValue = value;

        if (check.nonEmptyArray(modifiers[key]))
          modifiers[key].forEach((fn) => {
            if (typeof fn === 'function') newValue = fn(value);
          });

        return Object.assign(acc, {
          [key]: newValue,
        });
      }, {})
    : values;
