
// Dependancies  
var express = require('express');
var mongoose = require('mongoose');
// Required Middleware 
var bodyParser = require('body-parser');
var logger = require('morgan');

var PORT = process.env.PORT || 3000;

// Initialize Express App
var app = express();

// Configure middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

var expHbs = require('express-handlebars');
app.engine('handlebars', expHbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Database Configuration with Mongoose 
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Return Promises (not callbacks)
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

// Start server 
app.listen(PORT, function () {
    console.log('App running on PORT ' + PORT);
});