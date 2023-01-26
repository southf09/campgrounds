//Require express, mongoose, and set paths
const mongoose = require("mongoose");
const cities = require('./cities');
const {places, descriptors} = ('./seedHelpers');
const Campground = require("../models/campground");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/campground");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDb = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000) + 1;
        const newTest = new Campground({title: cities[random1000].city});
        await newTest.save();
    } 
}

seedDb();