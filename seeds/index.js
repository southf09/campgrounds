//Require express, mongoose, and set paths
const mongoose = require("mongoose");
const Campground = require("./models/campground");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/campground");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
    await Campground.deleteMany({});
}