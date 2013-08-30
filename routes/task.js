
/*
 * GET users listing.
 */

exports.add = function (req, res) {
  res.render('index', { title: 'DiViS Task Management System'});
};

exports.create = function(req, res) {
  var newOrder = new models.Order({ name: req.body.name, ingreds: req.body.ingreds });

  newOrder.save(function(err) {
    if (err)
      return console.log("error saving order", err);
  });
};

exports.create = function (req, res) {
  console.log('new task created');

  var existingUser = models.User.find({ name: req.body.rep }, function (err, docs) {
      if (err)
        return console.log('error looking up user', err);
      var newTask = new models.Task({
        name: req.body.name,
        requestDate: req.body.requestDate,
        category: req.body.category,
        _user: docs[0]._id
      });

      newTask.save(function (err) {
        if (err)
          return console.log('error saving new task', err);
        
        console.log('created new user');
        res.redirect('/');
      });
    });
  }
};