const EventEmitter = require('events');

module.exports = class FakeReader extends EventEmitter{
  constructor(){
    super();
    setTimeout(() => {
      this.emit('data', 'First ~20 bytes')
    }, 250);
    setTimeout(() => {
      this.emit('data', 'Next ~20 bytes')
    }, 500);
    setTimeout(() => {
      this.emit('data', 'Next ~20 bytes')
    }, 750);
    setTimeout(() => {
      this.emit('data', 'Last ~20 bytes')
    }, 1000);
  }
}
