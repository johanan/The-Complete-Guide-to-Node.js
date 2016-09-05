const net = require('net');

var server = net.createServer();

server.on('connection', (socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log(data);
  });

  socket.write("HTTP/1.0 200 OK\n");
  socket.write("Content-Type: text/html\n\n");
  socket.write("<html><head><title>Page" +
"</title><head><body><h1>Our Web Server</h1>" +
"</body></html>");
  socket.end();
});

server.listen(8080, '127.0.0.1');
