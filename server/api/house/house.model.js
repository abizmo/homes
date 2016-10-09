'use strict';

const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  title : String,
  description : String,
  price : Number,
  phone : Number,
  owner : String,
  reserve : Boolean,
  sold : Boolean
});

module.exports = mongoose.model('House', HouseSchema);
