const Readable = require('stream').Readable;

function* reading() {
  yield "This is the first line";
  yield "Here is the second line";
  yield "Here is the next line";
  yield "Here is the final line";
}

module.exports = class OurReader extends Readable {
  constructor(opt){
    super(opt);
    this.generator = reading();
  }

  _read() {
    var line = this.generator.next().value;
    this.push(line);
  }
}
