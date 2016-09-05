var fs = require('fs');

//create a stream
var fileStream = fs.createReadStream('test.txt', 'utf8');

//listeners
//executed in order
var firstListener = (fd) => {
  console.log('File is open, first listener');
};

fileStream.on('open', firstListener);

fileStream.on('open', (fd) => {
  console.log('File is open, second listener');
});

fileStream.on('data', (data) => {
  console.log(data);
});


//fileStream.on('close', () => {
fileStream.once('close', () => {
  console.log('File is closed');
});

//call an event
fileStream.emit('close');


//list of events listened to
console.log(fileStream.eventNames());

//check listeners of event
console.log(fileStream.listeners('open'));
fileStream.listeners('open')[1]();

//listeners max, 10
console.log(fileStream.getMaxListeners());
fileStream.setMaxListeners(20);
console.log(fileStream.getMaxListeners());

console.log('Asynchronous calls now----');

//now time to remove listeners
//need to set this in a different event loop
setTimeout(() => {fileStream.removeListener('open', firstListener);
console.log('Removed one listener');
fileStream.emit('open');}, 1000);

//remove all
setTimeout(() => {fileStream.removeAllListeners('open');
console.log('Removed all listeners');
fileStream.emit('open');}, 2000);
/*
*/
