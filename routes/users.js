var express = require("express");
var router = express.Router();
//var models = require('../models/user');
//const auth = require('../config/auth');
const bcrypt = require('bcrypt');

//var userRouter = require("/routes/users");

var models = require("../models"); //<--- Add models
var authService = require("../services/auth"); //<--- Add authentication service

router.get("/signup", function (req, res, next) {
  res.render('signup')
});

router.post('/signup', function (req, res, next) {
  bcrypt.hash(req.body.password, 8) 
    .then(hash => {

    })
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.send('this user already exists')
    } else {
      models.users.create({
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Username: req.body.username,
        Password: req.body.password
      }).then(createdUser => {

        //Add code here

      });
    }
  });

});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: {
      Username: req.body.username,
      Password: req.body.password
    }
  }).then(user => {
    console.log('login found a user')
    if (!user) {
      return res.status(401).json({
        message: "Login Failed"
      });
    }
    if (user) {
      //Add code here

    } else {
      console.log(req.body.password);
      res.redirect('login')
    }

  });
});

router.get('/profile/:id', authService.verifyUser, function (req, res, next) {
  if (req.params.id !== String(req.user.UserId)) {
    res.send('This is not your profile')
  } else {
    res.render('profile', {
      FirstName: req.user.FirstName,
      LastName: req.user.LastName,
      Email: req.user.Email,
      UserId: req.user.UserId,
      Username: req.user.Username
    });
  }

});

module.exports = router;



router.post('/signup', function(req, res, next) {
  const hashedPassword = authService.hashPassword(req.body.password);
  models.users
    .findOne({
      where: {
        Username: req.body.username
      
      }
    })
    .then(user => {
      if (user) {
        res.send('this user already exists');
      } else {
        models.users
          .create({
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Email: req.body.email,
            Username: req.body.username,
            Password: hashedPassword
          })
          .then(createdUser => {
            const isMatch = createdUser.comparePassword(req.body.password);

            if (isMatch) {
              const userId = createdUser.UserId;
              console.log(userId);
              const token = auth.signUser(createdUser);
              res.cookie('jwt', token);
              res.redirect('profile/' + userId);
            } else {
              console.error('not a match');
            }
          });
      }
    });
});

router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: {
      Username: req.body.username,
      Password: req.body.password
    }
  }).then(user => {
    console.log('login found a user')
    if (!user) {
      return res.status(401).json({
        message: "Login Failed"
      });
    }
    if (user) {
      const userId = user.UserId;
      const token = auth.signUser(user);
      res.cookie('jwt', token);
      res.redirect('profile/' + userId)
    } else {
      console.log(req.body.password);
      res.redirect('login')
    }

  });
});



router.get('/logout', function (req, res) {
  res.cookie('jwt', null);
  res.redirect('users/login');
});

// users.associate = function (models) {
//   // associations can be defined here
// };

// users.associate = function (models) {
//   // associations can be defined here
// };

// users.prototype.comparePassword = function (plainTextPassword) {
//   let user = this;
//   return bcrypt.compareSync(plainTextPassword, user.Password)
// };

// return users;

//app.use('/api/user', userRoutes)

module.exports = router;
