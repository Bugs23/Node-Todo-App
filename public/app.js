/* global $ */
$(document).ready(function() {
    // Get data from todos
    $.getJSON("/api/todos")
    .then(function(addTodos)
});

// Add todos to page
function addTodos(todos) {
    // Loop through each todo
    todos.forEach(function(todo) {
        // Create new list item with the name of the todo
        var newTodo = $('<li class="task">' + todo.name + '</li>');
        // Add new item to the list
        $('.list').append(newTodo);
    });
};