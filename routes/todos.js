// Require express
var express = require('express');
// Allow us to break our routes into modular chunks
var router = express.Router();
var helpers = require("../helpers/todos");

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;