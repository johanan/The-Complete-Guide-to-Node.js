const stream = require('stream');

module.exports.UpperTransform = class UpperTransform extends stream.Transform {
  constructor(opt){
    super(opt);
  }
  _transform(chunk, encoding, callback) {
    callback(null, chunk.toString('utf8').toUpperCase());
  }
}
