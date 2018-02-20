var db = require('../models');

exports.getTodos = function(req, res) {
    // Find all todos
    db.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.createTodo = function(req, res) {
    // Take what's in request body and insert it into database
    db.Todo.create(req.body)
    .then(function(newTodo) {
        // Send created success status and send json of new todo
        res.status(201).json(newTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.getTodo = function(req, res) {
    // Find based off todo id
    db.Todo.findById(req.params.todoId)
    // If it finds a todo with that id
    .then(function(foundTodo) {
        res.json(foundTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.updateTodo = function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo) {
        res.json(todo);
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.deleteTodo = function(req, res) {
    db.Todo.remove({_id: req.params.todoId})
    .then(function() {
        res.json({message: 'we deleted it'})
    })
    .catch(function(err) {
        res.send(err);
    });
};

module.exports = exports;