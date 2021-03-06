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
    this.template('config/gitignore', '.gitignore');
    this.template('config/editorconfig', '.editorconfig');
    this.template('config/eslintrc', '.eslintrc');
  },

  installing: function() {
    if (this.options['skip-install']) {
      return;
    }

    this.installDependencies({
      bower: false,
      npm: true
    });
  },

  end: function() {
    this.log("Installation for config has finished!");
  }
});
