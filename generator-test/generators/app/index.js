'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('skip-install', {
      desc: 'Skips running npm install after things have been generated',
      defaults: false
    });

    this.option('skip-install-message', {
      desc: 'The Installation message shows the available commands',
      defaults: false
    });
  },

  configuring: function () {
    this.config.save();
  },

  writing: function () {
    this.template('package', 'package.json');
    this.template('test/environment.js', 'test/environment.js');
    this.template('test/mocha.opts', 'test/mocha.opts');
  },

  installing: function() {
    if (this.options['skip-install']) {
      return;
    }

    this.installDependencies({ bower: false });
  },

  end: function() {
    this.log("Installation of test generator has finished!");
  }
});
