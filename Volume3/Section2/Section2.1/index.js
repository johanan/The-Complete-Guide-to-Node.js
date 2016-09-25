const express = require('express'),
  session = require('express-session');

//function to require authentication
var requireAuthentication = (req, res, next) => {
  //we will add the correct logic here
  if(false)
  {
    next();
  }else{
    //this will be the login page eventually
    res.redirect('/');
  }
};

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');
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

app.get('/profile', [requireAuthentication, (req, res) => {
  res.render('profile');
}]);

app.listen(8080);
