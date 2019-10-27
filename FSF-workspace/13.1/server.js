
// We require/import the HTTP module
var http = require("http");

// Then define the ports we want to listen to
const PORT = 7000;
const PORT2 = 7500;

// We need two different functions to handle requests, one for each server.
function handleRequest(request, response) {
    response.end("it works!!  Path Hit: " + request.url);
}
function handleRequestTwo(request, response) {
    response.end("you did it again! Path Hit: " + request.url);
}

// Create our servers
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequestTwo);

// Starting our servers
server.listen(PORT, function () {
    console.log("server listening on: http://localhost:" + PORT)
});

server2.listen(PORT2, function () {
    console.log("server listening on: http://localhost:" + PORT2)
});
