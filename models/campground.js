//Require mongoose for use of Schemas
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Our Schema that will be used in conjunction with a db
//tp create campground locations
const CampgroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campground", CampgroundSchema);
