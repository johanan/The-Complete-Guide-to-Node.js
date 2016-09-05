var fs = require('fs');

function multipleCallbacks(firstFile, callback){
  fs.readFile(firstFile, 'utf8', (err, data) => {
    fs.readFile(data.trim(), 'utf8', (err, data) => {
      fs.readFile(data.trim(), 'utf8', (err, data) => {
        callback(data);
      });
    });
  });
}

function multipleCallbacksError(firstFile, callback){
  fs.readFile(firstFile, 'utf8', (err, data) => {
    if(err){
      callback(err, null);
      return;
    }
    fs.readFile(data.trim(), 'utf8', (err, data) => {
      if(err){
        callback(err, null);
        return;
      }
      fs.readFile(data.trim(), 'utf8', (err, data) => {
        if(err){
          callback(err, null);
          return;
        }
        callback(null, data);
      });
    });
  });
}

//multipleCallbacks('networkcall', (data) => console.log(data));
//multipleCallbacks('nonexistent', (data) => console.log(err));
multipleCallbacksError('nonexistent', (err, data) => console.log(err));
