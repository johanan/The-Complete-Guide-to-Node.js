var fs = require('fs');

console.log('start readFile: ' + new Date().getTime());
fs.readFile('test.txt', () => {
  console.log('end readFile: ' + new Date().getTime());
});

setTimeout(() => console.log('added to event loop'), 0);
console.log('after event loop');
