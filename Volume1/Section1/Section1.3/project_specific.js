const repl = require('repl');

var replServer = repl.start({prompt: 'Section1.3>'});

replServer.context.section13 = function(){console.log('Loaded a module')};
