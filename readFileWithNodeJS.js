var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {
	response.writeHead(200);
	var callBack = (function (err, content) {
		response.write(content);
		response.end();
	});
	fs.readFile('1.txt', callBack);
}).listen(8080);

console.log('Listing to port 8080...');