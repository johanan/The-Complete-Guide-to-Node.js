const express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

//mw can add to the objects
app.use(cookieParser());
app.use((req, res, next) => {
  req.custom = {};
  req.custom.can_you_see_this = 'yes';
  next();
});

app.use((req, res, next) => {
  console.log(req.cookies);
  console.log(req.custom);
  next();
});

app.get('/', (req, res) => {
  res.send('root');
  res.end();
});

app.listen(8080);
