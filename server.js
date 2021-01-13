var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

//variables to hold reservation and waitlist objects
const reservations = [
    {

    }
];
const waitlist = [
    {

    }
];

//route for main page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'))
});

//route for tables page
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'))
});

//app listener to console og the app is running on port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


