'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  compose: function() {
    this.composeWith('test');
  }
});
