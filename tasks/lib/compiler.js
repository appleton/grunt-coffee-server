// Express middleware function.
// If the file extension is .js then jump into the CoffeeScript compilation
// routine, otherwise skip to next middleware.

'use strict';

var path = require('path'),
    readFile = require('./read-file');

module.exports = function(base, grunt){

  return function compiler (req, res, next) {
    if (path.extname(req.url) !== '.js') {
      return next();
    }

    var url = req.url[0] === '/' ? req.url : '/' + req.url,
        result = readFile(base + req.url),
        code = result[0],
        output = result[1],
        contentType = (code === 200 ? 'application/javascript' : 'text/html');

    if (code === 500) {
      grunt.log.write("\nCoffeeScript error in: " + req.url + "\n");
      grunt.log.write(output);
    }

    res.set('Content-Type', contentType);
    res.send(code, output);
  };

};