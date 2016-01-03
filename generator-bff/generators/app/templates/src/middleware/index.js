import { BuildLogger } from '../log';

const logger = BuildLogger('request');

let beforeEveryRequest = (request, response, next) => {
  logger.info({ req: request, res: response });

  next();
};

export default {
  beforeEveryRequest
};
