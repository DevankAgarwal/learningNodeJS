var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {
	response.writeHead(200);
	response.write('Hello World');
	response.end();
}).listen(8080);

console.log('Listing to port 8080...');