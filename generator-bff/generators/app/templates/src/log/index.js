var Bunyan = require('bunyan');

var buildStreams = function() {
  if (process.env['DEPLOY_ENV'] === 'local') {
    return [{
      stream: process.stdout,
      level: Bunyan.DEBUG
    },
    {
      path: process.env['LOG_LOCATION'],
      level: Bunyan.DEBUG
    }];
  }
};

var BuildLogger = function(moduleName) {
  var logger = Bunyan.createLogger({
    name: process.env['APP_NAME'],
    streams: buildStreams(),
    serializers: Bunyan.stdSerializers
  });

  if (moduleName) {
    return logger.child({
      module: moduleName
    });
  }

  return logger;
};

export default {
  BuildLogger
};
