// ORIGINAL code:
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

// Jane's code:
var express = require('express');
var router = express.Router();
var users = require('../models');

router.get('/members', function (req, res, next) {
  models.member.findAll({}).then(memberAsPlainObject => {
    const mappedMember = memberAsPlainObject.map(member => ({
      memberId: member.memberId,
      Name: member.Name
    }));
    res.send(JSON.stringify(mappedMembers));
  });
});

router.post('/member', (req, res) => {
  models.member
    .findOrCreate({
      where: {
        Name: req.body.name,
        DateFormed: req.body.dateFormed
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('/member');
      } else {
        res.send('This member already exists!');
      }
    });
});

module.exports = router;