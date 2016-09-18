const process = require('process');

process.stdin.on('data', (data) => {
  process.stdout.write(data);
});


//even easier
process.stdin.pipe(process.stdout);

//a little more useful
const fs = require('fs');
process.stdin.pipe(fs.createWriteStream('write.txt'));

//a little network example

const net = require('net');

var socket = new net.Socket();
var client = socket.connect(80, 'www.google.com');
client.pipe(process.stdout);
client.pipe(fs.createWriteStream('google.txt'));
client.write('GET / \n HTTP/1.1');
