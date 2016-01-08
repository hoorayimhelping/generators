'use strict';
var generators = require('yeoman-generator');

var RELATIVE_HOOKS_PATH = './.git/hooks';

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.hadInstallError = false;

    this.option('skip-install', {
      desc: 'Skips running npm install after things have been generated',
      defaults: false
    });

    this.option('skip-install-message', {
      desc: 'The Installation message shows the available commands',
      defaults: false
    });

    this.option('force', {
      desc: 'Overwrite existing hooks with the same name',
      defaults: false
    });
  },

  configuring: function () {
    this.config.save();
  },

  writing: function () {
    var prePushSample = RELATIVE_HOOKS_PATH + '/pre-push.sample';
    var prePush = RELATIVE_HOOKS_PATH + '/pre-push.sh';

    // if (!this.fs.exists(RELATIVE_HOOKS_PATH)) {
    //   this.hadInstallError = true;
    //   this.log("I can't find a .git directory. I'm expecting to see one in the same directory you ran the script.");
    //   return;
    // }

    if (this.fs.exists(prePush) && !this.options['force']) {
      this.hadInstallError = true;
      this.log("pre-push.sh already exists. Use the --force command to overwrite it.");
    }

    this.template('pre-push.sh', prePush);

    if (this.fs.exists(prePushSample)) {
      this.log("I've installed the pre-push hook. I'm attempting to remove the sample file.");
      this.fs.delete(prePushSample);
    }
  },

  end: function() {
    if (this.hadInstallError) {
      this.log("I didnt't install any git hooks.");
      return;
    }

    this.log("Installation of git hooks is all done! `ls -lh .git/hooks`");
  }
});
