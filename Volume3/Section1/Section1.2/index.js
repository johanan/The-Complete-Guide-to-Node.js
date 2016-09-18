const express = require('express');

var app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.setHeader('X-Powered-By', 'Express and Node.js');
  res.write("<html><head><title>Page" +
"</title><head><body><h1>Our Express Web Application</h1>" +
"</body></html>");
  res.end();
});

app.get('/test', (req, res) => {
  res.setHeader('X-Powered-By', 'Express and Node.js');
  res.write("<html><head><title>Test Page" +
"</title><head><body><h1>Test</h1>" +
"</body></html>");
  res.end();
})

app.listen(8080);
