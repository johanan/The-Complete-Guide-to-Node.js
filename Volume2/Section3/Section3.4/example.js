const http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
  //let's see what's in here
  console.log(res);
  //headers can be created
  res.setHeader('Our-Header', 'anything we want');
  res.statusCode = 404;
  res.end();
});

server.listen(8080, '127.0.0.1');
