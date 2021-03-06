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

  prompting: function () {
    var done = this.async();
    this.prompt([{
      type: 'input',
      name: 'name',
      message: "The name of your project. Used for configuration",
      default: this.appname.replace(/\s+/g, '-') // yeoman makes directories with dashes 'user friendly' by replacing them with spaces which screws up literally everything
    },
    {
      type: 'input',
      name: 'description',
      message: "The description of the application for package.json",
      default: ""
    },
    {
      type: 'input',
      name: 'port',
      message: "The application's port",
      default: 62936
    }], function (answers) {
      this.appname = answers.name.toLowerCase();
      this.description = answers.description;
      this.port = answers.port;

      done();
    }.bind(this));
  },

  writing: function () {
    this.template('package', 'package.json', { name: this.appname, description: this.description, port: this.port });

    this.composeWith('config');
    this.composeWith('test');

    this.template('entrypoint.js', 'entrypoint.js',{ name: this.appname, port: this.port });
    this.template('src/server.js', 'src/server.js', { name: this.appname });

    this.template('src/log/index.js', 'src/log/index.js');
    this.template('src/middleware/index.js', 'src/middleware/index.js');

    this.spawnCommand('git', ['init']);
    this.composeWith('githooks');
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
    var signOffMessages = [
      'GLHF',
      'Have a ball, baby.',
      'ggwp pls commend',
      'This message will self destruct in 3 seconds.',
      '[Snarky self-aware sign off message #37-A2]'
    ];

    var signOffMessage = signOffMessages[Math.floor(Math.random() * signOffMessages.length)];

    this.log("Installation has finished! " + signOffMessage + "\nRun `npm start` then `open http://localhost:" + this.port + "/`");
  }
});
