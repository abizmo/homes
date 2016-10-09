'use strict';
const path = require('path');

module.exports = {
  'port' : process.env.PORT || 8080,
  'root' : path.normalize(`${__dirname}/../../..`)
}
