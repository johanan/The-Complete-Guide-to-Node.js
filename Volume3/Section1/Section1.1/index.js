const express = require('express');

var app = express();

app.get('/', (req, res) => {
  //the same exact req and res
  console.log(req);
  console.log(res);
  res.setHeader('X-Powered-By', 'Express and Node.js');
  res.statusCode = 500;
  res.write("<html><head><title>Page" +
"</title><head><body><h1>Our Express Web Application</h1>" +
"</body></html>");
  res.end();
});

app.listen(8080);
