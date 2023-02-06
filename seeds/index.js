//This file can be run any time the database needs to be seeded
//Require express, mongoose, and paths
//places and descriptors destructured and imported from the 'seedHelpers.js' file

const mongoose = require("mongoose");
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
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

//The sample function will return a random value from either of the imported arrays

const sample = array => array[Math.floor(Math.random() * array.length)];

//The async function, seedDB, deletes the objects currently contained in the campground database in mongo
//It then loops 50 times, each time adding a random city to the database as a test

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000) + 1;
        const price = Math.floor(Math.random() * 30);
        const camp = new Campground({
          location: `${cities[random1000].city}, ${cities[random1000].state}`,
          title: `${sample(descriptors)} ${sample(places)} `,
          image: 'https://source.unsplash.com/collection/2072048',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus distinctio dolore eum totam, iure sit repellendus obcaecati magnam molestiae quam deserunt id nobis sed provident tempore optio quisquam accusantium expedita!',
          price
        });
        await camp.save();
    } 
}

//seedDB returns a promise because it is an async function

seedDB().then(() => {
  mongoose.connection.close();
});