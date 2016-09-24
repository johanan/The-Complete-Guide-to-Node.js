const express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/layout', (req, res) => {
  res.render('use_layout', {title: 'Uses Layout',
    message: 'From the server'});
});

const users = require('./routes/users.js');
app.use('/users', users);

app.listen(8080);
