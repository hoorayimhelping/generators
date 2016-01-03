import express from 'express';
import superagent from 'superagent';
import Middleware from './middleware';

import { BuildLogger } from './log';

const APP_PORT = process.env['PORT'];
const logger = BuildLogger('<%= name %>');

const app = express();
app.use(Middleware.beforeEveryRequest);


app.get('/', (request, response) => {
  response.send("Hello, World! I'm <%= name %>");
});

app.listen(APP_PORT);
logger.info({ port: APP_PORT }, "Server started");
