const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.write("Root");
  res.end();
});

app.post('/', (req, res) => {
  res.write("Post");
  res.end();
});

//many more, but we will just
// GET, POST, PUT, DELETE

app.all('/all', (req, res) => {
  res.write('all');
  res.end();
});

//match any character and multiple characters
app.get('/abc*', (req, res) => {
  res.write('ABCs');
  res.end();
})

//reg ex
app.get(/(cats?|dogs?)/, (req, res) => {
  res.write('cat or dog');
  res.end();
});

//add a parameter
app.get('/:animal(fish|pony)', (req, res) => {
  res.write(req.params.animal);
  res.end();
});

app.get('/user/:username', (req, res) =>{
  res.write(req.params.username);
  res.end();
});

//app.route
app.route('/dexter')
  .get((req, res) => { res.send('GET a Dexter');})
  .post((req, res) => { res.send('POST a dog');});

var gizmo = require('./router_module.js');
app.use('/gizmo', gizmo);

app.listen(8080);
