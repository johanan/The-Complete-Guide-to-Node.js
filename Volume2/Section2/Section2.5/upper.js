const process = require('process'),
      zlib = require('zlib');
const transform = require('./transform.js');

process.stdin.pipe(new transform.UpperTransform()).pipe(process.stdout);
process.stdin.pipe(zlib.createGzip()).pipe(process.stdout);
