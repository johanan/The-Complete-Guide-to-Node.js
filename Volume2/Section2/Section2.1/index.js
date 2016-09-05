var FakeReader = require('./fakereader.js');

var fakeReader = new FakeReader();

fakeReader.on('data', (data) => {
  console.log(data);
});
