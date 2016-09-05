var fs = require('fs'),
    net = require('net');

//synchronous error
try{
  JSON.parse('not a valid json string');
} catch(ex) {
  console.log(ex);
}

//asynchonous
fs.readFile('nonexistent', (err, data)=>{
  if(err) console.log(err);
});

//event emitter
var server = net.createServer();
server.on('error', (err) => {
  console.log(err);
});
server.listen(80, 'localhost');
