// Tries to read a JS file and return the contents.
// If it fails it tries reads a coffee file and return the compiled contents.
// If that fails it gives up and returns a 404

'use strict';

var fs = require('fs'),
    coffee = require('coffee-script');

function compile (data) {
  try {
    // Try to compile the coffee file
    data = coffee.compile(data.toString('utf-8'));
    return [200, data];
  }
  catch (compileError) {
    // Bad coffeescript, send a 500
    return [500, compileError];
  }
}

module.exports = function readFile (reqPath) {
  var data;
  // Remove any query params before trying to read file
  reqPath = reqPath.split('?')[0];

  try {
    // Try and read the path (ususally *.js)
    data = fs.readFileSync(reqPath, 'utf-8');
    return [200, data];
  }
  catch (jsErr) {
    try {
      // Try a .coffee file is .js wasn't found
      reqPath = reqPath.replace('.js', '.coffee');
      data = fs.readFileSync(reqPath, 'utf-8');
      return compile(data);
    }
    catch (coffeeErr) {
      // 404 if there's no .coffee file either
      return [404, 'Not found'];
    }
  }
};
