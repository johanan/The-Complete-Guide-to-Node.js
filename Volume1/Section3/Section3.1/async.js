var fs = require('fs');

var fileA;
var fileS;

fileS = fs.readFileSync('test.txt', 'utf8');
//console.log(fileS);

fs.readFile('test.txt', 'utf8', (err, data) => {
  fileA = data;
});
console.log(fileA);
setTimeout(() => console.log(fileA), 100);
