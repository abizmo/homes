'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('serve-favicon');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');

const config = require('./enviroment');

exports.default = function (app) {

  // Setting up app path
  app.set('appPath', path.join(config.root, 'client'));

  // favicon
  app.use(favicon(path.join(app.get('appPath'),'favicon.ico')));

  // statics
  app.use(express.static(app.get('appPath')));

  // morgan
  app.use(morgan('dev'));

  // bodyparser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // methodoverride
  app.use(methodOverride());

  // views
  app.set('views', path.join(app.get('appPath'),'app'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
};
