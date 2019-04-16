var express = require('express');

var router = express.Router();
//var users = require('../models/users');
//var userRouter = require("./routes/users");



/* GET home page. */

router.get('/', function (req, res, next) {

  res.render('home')

});



module.exports = router
