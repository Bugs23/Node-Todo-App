var mongoose = require('mongoose');

// Create new todo
var todoSchema = new mongoose.Schema({
    // Give todo a name
    name: {
        // The name is a string
        type: String,
        // The name is required
        required: 'Name cannot be blank!'
    },
    // Give todo a completed value
    completed: {
        // The completed value is a boolean
        type: Boolean,
        // The value is automatically set to false
        default: false
    },
    // Give todo a created date
    created_date: {
        type: Date,
        // The date is the current time the todo is inserted
        default: Date.now
    }
    
});

// Compile todo into model
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
