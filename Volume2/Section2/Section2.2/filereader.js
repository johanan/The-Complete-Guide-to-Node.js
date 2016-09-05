const fs = require('fs');

//a file
var reader = fs.createReadStream('test.txt', 'utf8');

reader.on('readable', () => {
  var chunk
  while(chunk = reader.read(1)){
    console.log(chunk);
  }
});
