const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('root');
  res.end();
});

app.get('/error', (req, res, next) => {
  //throw new Error('Something is wrong.');
  //or
  //we could capture this from an async call
  //call.((err, data)) call next with the error
  next(new Error('Something is wrong.'));
});

app.use((req, res, next) => {
  console.log(req.url);
  next();
});


app.use((err, req, res, next) => {
  console.log(err);
  res.statusCode = 500;
  res.send('There was an error');
  res.end();
});


app.listen(8080);
