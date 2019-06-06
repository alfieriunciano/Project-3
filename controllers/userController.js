var db = require('../models');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Routes
// =============================================================
module.exports = {
  login: function(req, res) {
    console.log(req.body);
    db.User.findOne({ where: { userId: req.body.user } }).then(u => {
      console.log(u);
      if (!u){
        res.status(400).send({ msg: 'Invalid Email or Password' });
        return;
      }

      bcrypt.compare(req.body.password, u.password, function(err, bRes) {
        if (!bRes) res.status(400).send({ msg: 'Invalid Email or Password' });
        var token = jwt.sign({ email: u.email }, 'shhhhh');
        res.json({ userId: u.userId, email: u.email, token: token });
      });
    });
  },
  create: function(req, res) {
    // validateEmailWithRegex(req.body.email)
    // if it is invalid
    // return res.status(400).send({msg: "Invalid Email or Password"})
    db.User.findOne({ where: { email: req.body.email } }).then(u => {
      if (u) res.status(400).send({ msg: 'Invalid Email or Password' });
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          db.User.create({
            userId: req.body.userId,
            email: req.body.email,
            password: hash,
          }).then(function(user) {
            var token = jwt.sign({ email: user.email }, 'shhhhh');
            res.json({ userId: user.userId, email: user.email, token: token });
          });
        });
      });
    });
  },
};
