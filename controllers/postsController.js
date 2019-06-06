var db = require('../models');

// Routes
// =============================================================
module.exports = {
  findAll: function(req, res) {
    db.Message.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  },
  create: function(req, res) {
    db.Message.create({
      user: req.body.user,
      text: req.body.text
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  },
};
