// Require express
var express = require('express'),
    // Execute express and save it to app variable
    app = express(),
    // Port will default to 3000 if running code locally
    port = process.env.PORT || 3000,
    // Require body parser
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

// Allow us to access request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Serve everything in public directory as static file
app.use(express.static(__dirname + '/public'));
// Serve everything in views directory as static file
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

// Start server     
app.listen(port, function() {
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
});