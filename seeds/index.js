//Require express, mongoose, and paths
//places and descriptors imported from the 'seedHelpers.js' file

const mongoose = require("mongoose");
const cities = require('./cities');
const {places, descriptors} = ('./seedHelpers');
const Campground = require("../models/campground");

//Establish mongoose connection with MongoDB

mongoose.set("strictQuery", false);
// mongoose.connect("mongodb://localhost:27017/campground");
mongoose.connect("mongodb://127.0.0.1:27017/campground");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

//The async function, seedDB, deletes the objects currently contained in the campground database in mongo
//It then loops 50 times, each time adding a random city to the database as a test

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000) + 1;
        const newTest = new Campground({title: cities[random1000].city});
        await newTest.save();
    } 
}

seedDB();