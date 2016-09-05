const net = require('net');

var socket = new net.Socket();
var client = socket.connect(80, 'www.google.com');
client.pipe(process.stdout);
client.write('GET / \n HTTP/1.1');
client.end();
