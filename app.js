var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import models for database:

var models = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Configure synchronization of database using Sequelize:

models.sequelize.sync().then( function()  {

    console.log('DB Synced up.');

}); // end models.sequelize.sync().then()

module.exports = app;
