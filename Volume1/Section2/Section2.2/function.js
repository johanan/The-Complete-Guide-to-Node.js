var multiple = require('./multiple.js');

var exportMe = function exportMe(){
  return 'this is a function';
};

var logToConsole = function logToConsole(message){
  console.log(message);
};

module.exports.exportMe = exportMe;
module.exports.logToConsole = logToConsole;
module.exports.first = multiple.first;
