
/*
 * GET home page.
 */

var models = require('../models/models');

exports.index = function (req, res) {
  console.log('homepage loaded');
  var tasks = models.Task.find({}).populate('_user').exec(function (err, docs) {
    if (err)
      return console.log('error listing tasks');
    console.log(docs);
    res.render('index', { title: 'DiViS Task Management System', tasks: docs });
  });
};