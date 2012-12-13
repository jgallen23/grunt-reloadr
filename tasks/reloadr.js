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

    if (typeof this.data.watch == 'string') {
      this.data.watch = [this.data.watch];
    }

    reloadr.start(this.data.watch, function() {
      grunt.log.writeln('LiveReload server started');
      grunt.log.writeln('Watching: '+self.data.watch.join(', '));
    });

    reloadr.changed(function(filepath) {
      grunt.log.writeln('File changed: '+filepath);
    });
  });

};
