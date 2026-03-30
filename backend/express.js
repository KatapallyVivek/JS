const express = require('express');
const app = express();

//Starting page
app.get('/', function(req, res) {
    res.send("This is a server response using express.js")
});

// Home page
app.get('/Home', function(req, res) {
    res.send("This is a server response in home page using express.js")
});

// Profile page
app.get('/profile', function(req, res) {
    res.send("This is a server response in profile page using express.js")
});

// run the server
app.listen(5000, function() {
    console.log("Server is running on port 5000");
});