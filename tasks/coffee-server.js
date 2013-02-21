/*
 * grunt-coffee-server
 * https://github.com/mrappleton/grunt-coffee-server
 *
 * Copyright (c) 2012 Andy Appleton
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var config = grunt.config('server'),
    express = require('express'),
    compiler = require('./lib/compiler'),
    path = require('path');

  config = (config || {});
  config.base = (config.base || './');
  config.port = (config.port || 3000);
  config.tryCoffeeFirst = (config.tryCoffeeFirst || false);

  // ==========================================================================
  // TASKS
  // ==========================================================================
  grunt.registerTask('coffee-server', 'Your task description goes here.', function() {
    var done = this.async(),
      server = express();

    server.configure(function() {
      server.use(compiler(config.base, grunt));
      server.use(express.static(path.resolve(config.base)));
    });

    server.listen(config.port);

    grunt.log.write('Listening on port ' + config.port);

    server.on('close', done);
  });

};