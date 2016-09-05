var fs = require('fs');

module.exports = function promiseReadFile(fileName){
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
