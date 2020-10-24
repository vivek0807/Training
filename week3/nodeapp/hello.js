const data=require("./data.json")
var http = require('http');
const fs = require("fs");
function handleRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    //response.setHeader("content-type", "text/plain");
    // fs.readFile("data.json", "utf-8", (err, data) => {
    response.write("<h1>User Data</h1>")
    response.write(JSON.stringify(data));
    response.end();
    //response.write("This is not sent")
}

http.createServer(handleRequest)
.listen(8081, ()=>console.log('Server running at http://127.0.0.1:8081/'));