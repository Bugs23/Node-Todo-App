/* global $ */
$(document).ready(function() {
    // Get data from todos
    $.getJSON("/api/todos")
    // Add the todos to the page
    .then(addTodos)
    
    // When a button on the keyboard is pressed
    $('#todoInput').keypress(function(e) {
        // If the button pressed is the enter key
        if (e.which == 13) {
            // Call createTodo function
            createTodo();
        }
    })
});

// Loop through each todo
function addTodos(todos) {
    todos.forEach(function(todo) {
        // Call addTodo function to add them to the page
        addTodo(todo);
    });
};

// Add todos to the list
function addTodo(todo) {
    // Create a new todo with the value from the name property
    var newTodo = $('<li class="task">' + todo.name + '</li>');
    // If the todo is completed
    if (todo.completed) {
        // Add the done class to the todo
        newTodo.addClass('done');
    }
    // Add the todo to the list of todos
    $('.list').append(newTodo);
    
}

// Send request to create new todo
function createTodo() {
    // Get the new todo text from the input field
    var usrInput = $('#todoInput').val();
    // Set name property to what the user entered (usrInput) and add it to the database
    $.post('/api/todos', {name: usrInput})
    .then(function(newTodo) {
        addTodo(newTodo);
    })
    .catch(function(err) {
        console.log(err);
    });
}