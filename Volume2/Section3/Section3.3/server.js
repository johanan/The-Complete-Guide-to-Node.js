const http = require('http'),
      routes = require('./routes.js');

//actual responses
var log = (req, res) => {
  console.log(`${req.method} ${req.url}`);
  return false;
};

var index = (req, res) => {
  res.write("<html><head><title>Page" +
"</title><head><body><h1>Our Web Application</h1>" +
"</body></html>");
  res.end();
  return true;
};

var defaultRoute = (req, res) => {
  res.end();
  return true;
};

routes.registerRoute(undefined, undefined, log);
routes.registerRoute('GET', '/', index);
routes.registerRoute(undefined, undefined, defaultRoute);

var server = http.createServer();
server.on('request', routes.handleRequest);
server.listen(8080, '127.0.0.1');
