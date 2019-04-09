var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");


// Import models for database:


var models = require('./models');


var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");


var app = express();

// serve the react application
//app.use(express.static(path.join(__dirname, "client/build")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:4200", credentials: true }));

app.use("/", indexRouter);
app.use("/users", userRouter);

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

// Configure synchronization of database using Sequelize:

models.sequelize.sync().then( function()  {

    console.log('DB Synced up.');

}); // end models.sequelize.sync().then()

models.sequelize.sync().then(function() {
    console.log("DB Sync'd up")
  });
  

module.exports = app;
