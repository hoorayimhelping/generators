var sinonChai = require('sinon-chai');

global.chai = require('chai');
global.sinon = require('sinon');
global.expect = chai.expect;
chai.use(sinonChai);
