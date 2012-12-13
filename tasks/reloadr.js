/*
 * grunt-reloadr
 * https://github.com/jgallen23/grunt-reloadr
 *
 * Copyright (c) 2012 Greg Allen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task
  // creation: https://github.com/gruntjs/grunt/blob/devel/docs/toc.md

  var reloadr = require('reloadr');

  grunt.registerMultiTask('reloadr', 'LiveReload grunt plugin', function() {

    var self = this;
    var done = this.async();

    if (typeof this.data == 'string') {
      this.data = [this.data];
    }

    reloadr.start(this.data, function() {
      grunt.log.writeln('LiveReload server started');
      grunt.log.writeln('Watching: '+self.data.join(', '));
    });

    reloadr.changed(function(filepath) {
      grunt.log.writeln('File changed: '+filepath);
    });
  });

};
