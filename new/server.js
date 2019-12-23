var http = require('http');
var fs = require('fs');

function onRequest(request,response){
  if(request.method == 'GET' && request.url == '/') {
          response.writeHead(200,{"Content-Type":"text/html"});
          fs.createReadStream("./index.html").pipe(response);
  } else if(request.method == 'GET' && request.url == '/jquery-3.2.0.min.js') {
          response.writeHead(200,{"Content-Type":"text/javascript"});
          fs.createReadStream("./jquery-3.2.0.min.js").pipe(response);
  } else if(request.method == 'GET' && request.url == '/app.js') {
          response.writeHead(200,{"Content-Type":"text/javascript"});
          fs.createReadStream("./app.js").pipe(response);
  }
  else if(request.method == 'GET' && request.url == '/article.json') {
          response.writeHead(200,{"Content-Type":"text/json"});
          fs.createReadStream("./article.json").pipe(response);
  }
}

http.createServer(onRequest).listen(2341);
console.log("Server is running ....");