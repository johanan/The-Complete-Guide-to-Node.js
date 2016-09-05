const http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
  console.log(`Request for ${req.url}`);
  res.write("<html><head><title>Page" +
"</title><head><body><h1>Node's Web Server</h1>" +
"</body></html>");
  res.end();
});

server.listen(8080, '127.0.0.1');
