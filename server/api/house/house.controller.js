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
  const id = req.params.id;

  House.findById(id, function(err, house) {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.json(house);
    }
  });
};

exports.update = function(req, res){
  const id = req.params.id;

  House.findById(id, function(err, house) {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      if (req.body.title)
        house.title = req.body.title;
      if (req.body.description)
        house.description = req.body.description;
      if (req.body.price)
        house.price = req.body.price;
      if (req.body.phone)
        house.phone = req.body.phone;
      if (req.body.owner)
        house.owner = req.body.owner;
      if (req.body.reserve)
        house.reserve = req.body.reserve;
      if (req.body.sold)
        house.sold = req.body.sold;
      house.save(function(err) {
        if (err) {
          res.status(500);
          res.send(err);
        } else {
          res.status(200);
          res.json({
            msg : 'House updated!'
          });
        }
      });
    }
  });
};

exports.destroy = function(req, res){
  const id = req.params.id;

  House.findByIdAndRemove(id, function (err) {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.json({
        msg : 'House updated!'
      });
    }
  });
};
