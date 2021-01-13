var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

//variables to hold reservation and waitlist objects
const reservations = [
    {
        routeName: "", 
        name: "", 
        phoneNumber: "",
        email: "",
        id: "",
    }, 
    { 
    routeName: "", 
    name: "", 
    phoneNumber: "",
    email: "",
    id: "",
    }
];
const waitlist = [
    {
        routeName: "", 
        name: "", 
        phoneNumber: "",
        email: "",
        id: "",
    }
];
//-----------------------Routes for different pages------------------
//route for main page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'))
});

//route for reserving a table
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname + '/reserve.html'))
});

//route for tables page
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname + '/tables.html'))
});

//-------------------Ajax Requests-----------------------------
//GET data from user input 
$.ajax({
    url: "", 
    type:'GET',
    dataType: 'json',
});

//POST requests add to either the reservation array or waitlist array 



//-----------------Server listener------------------------------
//app listener to console og the app is running on port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


// Create the logic that handles reservation requests. Your code should work such that POST 
//requests take in JSON objects, checks if there is any space left, then adds the JSON object to 
//either the reservation array or the waitlist array. Your POST route should also respond to requests with 
//a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).
//You should be using Postman to do all your testing at this point.