var promiseReadFile = require('./promiseReadFile.js');

promiseReadFile('test.txt').then((data)=> console.log(`Data: ${data}`));
promiseReadFile('nonexistent').then((data)=> console.log(data),
(err) => console.log(`Error: ${err}`));
