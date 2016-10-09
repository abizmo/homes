'use strict';

exports.default = function(app) {
  app.use('/api/houses', require('./api/house'));
  
  app.get('/*', function (req, res) {
    res.render('index', {title: 'Homes'});
  });
};
