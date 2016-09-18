var OurWritable = require('./ourwriter.js');

//var writer = new OurWritable();
var writer = new OurWritable({decodeStrings: false});

writer.write('Here is a line.');
writer.write('And another line.');

console.log(writer.getSource());
