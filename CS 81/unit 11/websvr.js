/**
 * Created by toor on 7/23/17.
 */
var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World, my name is Yu Tian\n');
}).listen(8001);

console.log('Server running at http://127.0.0.1:8001/');