# Welcome to the Campground Review App!

## This README file currently tracks the progress made and steps taken in the development of this project. Once completed, this information will be moved to a separate text file, and the README will become an in-depth description of the application.

## Steps taken so far:

### Basic Set Up
- Necessary npm packages added (express, mongoose, ejs)
- Express set up and link tested, renders ejs from the 'views' folder
- Models folder created to export Mongoose Schema to be linked in main app.js file
- Placeholder Schema creation made to test link between the app and mongodb

### Seeding
- Seed folder added containing:
    - cities.js: contains object data of cities in the United States
    - seedHelpers.js: contains places and descriptors to be used later in creating fictional locations for the database
    - index.js: contains a script that populates the database in MongoDB with 50 cities as a test

### CRUD Functionality and Routing
- CRUD (Create, Read, Update, Delete) functionality added
    - Create: new.ejs allows creation of new campgrounds to database
    - Read: show.ejs is an informative page for each campground and it contains links to the database and editing
    - Update: edit.ejs allows the specified campground to be updated
    - Delete: delete functionality added within the show.ejs file

- Basic links added to navigate between the different views

### Basic Styling
- Installed ejs-mate (node package) 


### Troubleshooting
- nodemon not working as expected with my mac devices
    - Resolved. Work-around created by adding a script to package.json that allows the same thing to execute with 'npm run auto'
- Due to the newer versions of MongoDB changing how MongoDB works, I ran into issues linking Mongoose and MongoDB on my Windows devices
    - Resolved. I reinstalled MongoDB and the newer Shell file, and added the mongosh.exe file to the MongoDB folder. Additionally, I updated the paths in the 'Environment Variables' on Windows.

