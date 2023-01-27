//Require express, mongoose, and set paths

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/campground");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Placeholder use of the mongoose Schema. Makes a campground with title 'My Backyard'
//and description 'Free camping in my yard'. Can be accessed in mongo shell to verify
app.get("/makecampground", async (req, res) => {
  const camp = new Campground({
    title: "My Backyard",
    description: "Free camping in my yard",
    location: 'The yard...',
    price: 'Umm, well free.'
  });
  await camp.save();
  res.send(camp);
});

//Default route set up to test that express is working properly in the browser
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
