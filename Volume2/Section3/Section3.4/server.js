const http = require('http'),
      routes = require('./routes.js');

//actual responses
var log = (req, res) => {
  console.log(`${req.method} ${req.url}`);
  return false;
};

var poweredBy = (req, res) => {
  res.setHeader('X-Powered-By', 'Complete Guide to Node.js');
  return false;
};

var index = (req, res) => {
  res.write("<html><head><title>Page" +
"</title><head><body><h1>Our Web Application</h1>" +
"</body></html>");
  res.end();
  return true;
};

var static = (req, res) => {
  const fs = require('fs');
  var file = fs.createReadStream('static.html');
  res.setHeader('Content-Type', 'text/html');
  file.pipe(res);
  return true;
};

var defaultRoute = (req, res) => {
  res.end();
  return true;
};

routes.registerRoute(undefined, undefined, log);
routes.registerRoute(undefined, undefined, poweredBy);
routes.registerRoute('GET', '/', index);
routes.registerRoute('GET', '/static.html', static);
routes.registerRoute(undefined, undefined, defaultRoute);

var server = http.createServer();
server.on('request', routes.handleRequest);
server.listen(8080, '127.0.0.1');
