const express = require('express');

var app = express();

//add middleware with use
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

//we have already been using middleware
app.get('/', (req, res) => {
  res.send('root');
  res.end();
});

//and with routers
var router = express.Router();
router.use((req, res, next) => {
  console.log(`router log ${req.url}`);
  next();
});
router.get('/', (req, res) => {
  res.send('dogs!');
  res.end();
});
app.use('/dogs', router);

//useful middleware
app.use(express.static('static'));

//order matters
app.get('/test.html', (req, res) => {
  console.log('this is from the get method');
  res.send('test.html');
  res.end();
});

app.listen(8080);
