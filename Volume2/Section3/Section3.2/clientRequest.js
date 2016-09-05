var http = require('http');

var options = {
  hostname: 'www.google.com',
  method: 'GET'
};

var req = http.request(options, (response) =>{
  response.setEncoding('utf8');
  response.on('data', (data) => console.log(data));
});

req.end();
