// Connect to mongoose

// Require mongoose
var mongoose = require('mongoose');
mongoose.set('debug', true);
// Connect to database server
mongoose.connect('mongodb://localhost/todo-api');
// Tell mongoose we're going to use promises
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");