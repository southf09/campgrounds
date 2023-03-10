//Require express, mongoose, ejs-mate, method-override and paths
//Make our model folder containing campground.js accessible

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Campground = require("./models/campground");

//Establish mongoose connection with MongoDB

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/campground");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

//Using Express, set the view engine to 'ejs' and join the path of the 'views' folder

const app = express();

app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//Default route set up to test that express is working properly in the browser

app.get("/", (req, res) => {
  res.render("home");
});

//Two separate routes, one that populates our seeded campgrounds on the page, with links to each individual one, and
//one that renders an individual campground with more data 

app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render('campgrounds/index', { campgrounds });
});

app.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/new');
});

app.post('/campgrounds', async (req, res) => {
  console.log(req.body.campground);
  console.log(req.params);
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
})

app.get('/campgrounds/:id', async(req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render('campgrounds/show', { campground });
});

app.get('/campgrounds/:id/edit', async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render('campgrounds/edit', { campground });
});

app.put('/campgrounds/:id', async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
  res.redirect(`/campgrounds/${campground._id}`);
})

app.delete('/campgrounds/:id', async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect('/campgrounds');
})


//Listening on localhost port 3000

app.listen(3000, () => {
  console.log("listening on port 3000");
});
