const http = require('http');

// creating a server
const mainServer = http.createServer(function(request, response) {

   if(request.method == 'GET' && request.url == '/'){
       response.end("This is the backend response for starting page");
    }
    else if(request.method == 'GET' && request.url == '/Home'){
        response.end("This is the backend response for home page");

    }
    else if(request.method == 'GET' && request.url == '/About'){
        response.end("This is the backend response for about page");
   }
    else if(request.method == 'GET' && request.url == '/Profile'){
        response.end("This is the backend response for profile page");
   }
   else{
    response.end("404 Error! page not found");
   }
});

// run the server
mainServer.listen(5000, function() {
    console.log("Server is running on port 5000")
});
