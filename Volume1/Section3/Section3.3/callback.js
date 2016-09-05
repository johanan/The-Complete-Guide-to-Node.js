var fs = require('fs');

fs.readFile('nonexistent', (err, data) => {
  console.log('--nonexistent');
  console.log(err);
  console.log(data);
});

fs.readFile('test.txt', 'utf8', (err, data) => {
  console.log('--exists');
  console.log(err);
  console.log(data);
});
