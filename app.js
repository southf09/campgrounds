//Require express, mongoose, and paths
//Establish mongoose connection with MongoDB

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

//Using Express, set the view engine to 'ejs' and join the path of the 'views' folder

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Express listening on port 3000, and default route set up to test that express is working properly in the browser

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
