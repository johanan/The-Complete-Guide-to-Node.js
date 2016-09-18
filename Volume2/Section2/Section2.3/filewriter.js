const fs = require('fs');

var fileWriter = fs.createWriteStream('test.txt');

fileWriter.write('This is a first line.');
fileWriter.write('This is the next line.');
fileWriter.end();

fs.readFile('test.txt', 'utf8', (err, data) =>
console.log(`Before: ${data}`));
fileWriter.on('finish', () => {
  fs.readFile('test.txt', 'utf8', (err, data) =>
    console.log(`During: ${data}`));
});
