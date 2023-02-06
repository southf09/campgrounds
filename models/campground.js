//Require mongoose for use of Schemas
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Our Schema that will be used in conjunction with a db
//to create campground locations
const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campground", CampgroundSchema);
