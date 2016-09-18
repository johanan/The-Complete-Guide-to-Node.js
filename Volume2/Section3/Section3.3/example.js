const http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
  //let's see what's in here
  //console.log(req);
  //headers
  //console.log(req.headers);
  //raw headers
  //console.log(req.rawHeaders);
  //HTTP version
  //console.log(req.httpVersion);
  //method
  console.log(req.method);
  //url
  console.log(req.url);
  res.end();
});

server.listen(8080, '127.0.0.1');
