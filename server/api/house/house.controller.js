'use strict';

const House = require('./house.model');

exports.index = function(req, res){
  House.find(function(err, houses){
    if (err){
      res.status(500);
      res.send(err);
    } else {
      res.json(houses);
    }
  });
};

exports.create = function(req, res){
  const house = req.body;

  house.reserve = false;
  house.sold = false;

  House.create(house, function (err, house) {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.json({
        msg : 'House added'
      });
    }
  });
};

exports.show = function(req, res){
  console.log('Welcome to my api');
};

exports.update = function(req, res){
  console.log('Welcome to my api');
};

exports.destroy = function(req, res){
  console.log('Welcome to my api');
};
