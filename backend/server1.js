const http = require('http');

// creating a server
const mainServer = http.createServer(function(request, response) {
    response.end("This is a Server which we have created by our own.")
});

// run the server
mainServer.listen(3000, function() {
    console.log("Server is running on port 3000")
});
