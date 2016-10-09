'use strict';

// import modules
const express = require('express');
const http = require('http');

const config = require('./server/config/enviroment');

// setup server
const app = express();
const server = http.createServer(app);

require('./server/config/express').default(app);
require('./server/routes').default(app);

// start server
function startServer() {
  app.server = server.listen(config.port, function(){
    console.log('Express server listening on http://localhost:' + config.port);
  });
}

setImmediate(startServer);
