var express = require('express');
var router = express.Router();
var users = require('../models/member');

 router.get('/artists', function(req, res, next) {
      models.member.findAll({}).then(memberAsPlainObject => {
        const mappedMember = memberAsPlainObject.map(member => ({
          memberId: member.memberd,
          Name: member.Name
        }));
        res.send(JSON.stringify(mappedArtists));
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
    .spread(function(result, created) {
      if (created) {
        res.redirect('/member');
      } else {
        res.send('This member already exists!');
      }
    });
});

module.exports = router;
