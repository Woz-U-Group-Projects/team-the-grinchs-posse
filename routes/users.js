var express = require("express");
var router = express.Router();
//var models = require('../models/user');
//const auth = require('../config/auth');
const bcrypt = require('bcrypt');

const userRoutes = require('/routes/users')

var models = require("../models"); //<--- Add models
var authService = require("../services/auth"); //<--- Add authentication service

// create new user if one doesn't exist
// attempt to find the user by their username, then add the rest of the values from the request
router.post("/signup", function(req, res, next) {
  models.users
    .findOrCreate({
      where: {
        username: req.body.username
      },
      defaults: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: authService.hashPassword(req.body.password) // encrypt the user password
      }
    })
    .spread(function(result, created) {
      if (created) {
        // if the user was created, positive response
        res.json("User successfully created");
      } else {
        // if the user was not created, negative response
        res.json("This user already exists");
      }
    });
});

// login user and return JWT as cookie
// attempt to find the user by their username, if not found then respond "User not found"
//
router.post("/login", function(req, res, next) {
  models.users
    .findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      if (!user) {
        console.log("User not found");
        return res.status(401).json("Login Failed");
      } else {
        // check to see if the passwords match
        let passwordMatch = authService.comparePasswords(
          req.body.password,
          user.password
        );
        if (passwordMatch) {
          // passwords match, create a jwt token as a cookie and attach to the response
          let token = authService.signUser(user);
          res.cookie("jwt", token);
          res.json("Login successful");
        } else {
          // wrong password, negative response
          console.log("Wrong password");
          res.json("Wrong password");
        }
      }
    });
});

// find a profile from a user (their user object) based on the received jtw cookie
router.get("/profile", function(req, res, next) {
  // read the cookie from the request
  let token = req.cookies.jwt;
  // if we have a cookie we can proceed
  if (token) {
    // validate the cookie
    authService.verifyUser(token).then(user => {
      if (user) {
        // empty the password field, do not send this property to the front-end
        user.password = "";
        // return the user object
        res.send(JSON.stringify(user));
      } else {
        res.status(401);
        res.json("Invalid authentication token");
      }
    });
  } else {
    // no jwt cookie, assume user is not logged in
    res.status(401);
    res.json("Must be logged in");
  }
});

// logout
router.get("/logout", function(req, res, next) {
  // set a new jwt cookie that will immediately expire
  res.cookie("jwt", "", { expires: new Date(0) });
  res.json("Logged out");
});

// validate a token
router.get("/validateToken", function(req, res, next) {
  // check to see if there is a token
  let token = req.cookies.jwt;
  if (token) {
    // validate the user from the token (same as finding profile)
    authService.verifyUser(token).then(user => {
      if (user) {
        // token valid, return true
        res.json(true);
      } else {
        // token invalid, return false
        res.json(false);
      }
    });
  } else {
    // no token, return false
    res.json(false);
  }
});
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

router.get('/profile/:id', auth.verifyUser, function (req, res, next) {
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
  const hashedPassword = auth.hashPassword(req.body.password);
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
  res.redirect('/users/login');
});

users.associate = function (models) {
  // associations can be defined here
};

users.associate = function (models) {
  // associations can be defined here
};

users.prototype.comparePassword = function (plainTextPassword) {
  let user = this;
  return bcrypt.compareSync(plainTextPassword, user.Password)
};

return users;

app.use('/api/user', userRoutes)

module.exports = router;
