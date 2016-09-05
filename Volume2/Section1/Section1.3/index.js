var OurEmitter = require('./ouremitter.js');

var emitter = new OurEmitter();
var log = (l) => console.log(l);

//emitter.on('second', log);

emitter.on('end', log);

emitter.on('error', log);
