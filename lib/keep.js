const check = require('check-types');
const pick = require('lodash.pick');

module.exports = (values = {}, pickDefinitions = []) =>
  check.nonEmptyArray(pickDefinitions)
    ? pick(values, pickDefinitions)
    : values;
