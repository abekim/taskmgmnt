var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/tasks');

var taskSchema = mongoose.Schema({
  title: String,
  _users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isComplete: Boolean,
  requestDate: String,
  category: String
});

var Task = mongoose.model('Task', taskSchema);

var userSchema = mongoose.Schema({
  name: String
});

var User = mongoose.model('User', userSchema);

//why does this use module.exports instead of exports? 
//http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs
exports.Task = Task;
exports.User = User;