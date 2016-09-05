var OurReader = require('./ourreader.js');

//as text
//var reader = new OurReader({encoding: 'utf8'});
//as a buffer
var reader = new OurReader();
//data event will start the flow
reader.on('data', (data) => {
  console.log(data);
});

//pauses the flow
reader.pause();

//resumes the flow
setTimeout(() => {reader.resume()}, 500)
