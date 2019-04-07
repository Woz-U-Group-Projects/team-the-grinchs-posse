var express = require("express");
var router = express.Router();

// Specify database engine technology:

const mysql = require('mysql').verbose();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("hello!");
});

module.exports = router;
