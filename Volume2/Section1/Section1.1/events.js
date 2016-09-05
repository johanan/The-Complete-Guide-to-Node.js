var fs = require('fs');

//create a stream
var fileStream = fs.createReadStream('test.txt', 'utf8');
fileStream.on('open', () => {
  console.log('File is open');
});

fileStream.on('data', (data) => {
  console.log(data);
});

fileStream.on('close', () => {
  console.log('File is closed');
});
