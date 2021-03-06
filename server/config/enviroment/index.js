'use strict';
const path = require('path');

module.exports = {
  'port' : process.env.PORT || 8080,
  'root' : path.normalize(`${__dirname}/../../..`),
  'mongo' : {
    'uri' : 'mongodb://localhost/homes-dev',
    'options' : {
      'db' : {
        'safe' : true
      }
    }
  }
}
