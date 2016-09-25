const express = require('express'),
  session = require('express-session'),
  bodyParser = require('body-parser');

//function to require authentication
var requireAuthentication = (req, res, next) => {
  if(false)
  {
    next();
  }else{
    res.redirect('/login');
  }
};

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

//allows forms to be processed
app.use(bodyParser.urlencoded({ extended: false }))
//keep a session to track authentication
app.use(session({
  secret: 'make this a good secret',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/', (req, res) => {
  res.render('index', {title: 'Welcome!'});
});

app.get('/login', (req, res) => {
  res.render('login', {title: 'Login'});
});

app.post('/login', (req, res) => {
  //we will use these shortly
  console.log(req.body);
  res.end();
});

app.get('/profile', [requireAuthentication, (req, res) => {
  res.render('profile');
}]);

app.listen(8080);
