'use strict';

require('babel/register')({
  stage: 0
});

process.env['APP_NAME'] = '<%= name %>';
process.env['LOG_LOCATION'] = '<%= name %>.log';
process.env['DEPLOY_ENV'] = 'local';
process.env['PORT'] = <%= port %>;

module.exports = require('./src/server');
