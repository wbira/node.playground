var through = require('through2');
var split = require('split')

var counter = 0;

var tr = through(function (buf, _, next) {
    var line = buf.toString()
    this.push(counter % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n' );
    counter++
    next();
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);