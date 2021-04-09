import express from 'express';
import { getLogger } from 'log4js';
import { createExpressServer, useExpressServer } from 'routing-controllers';
import AppConfig from '../config/app.config';
import vhost from 'vhost';
// import subdomain from 'vhost';

const logger = getLogger(AppConfig.loggerNames.apiLoader);

const { port, controllers, domain, protocol } = AppConfig.api;
const { staticFiles } = AppConfig.webApp;

export default async function loadServer() {
  const server = express();

  const webapp = express();
  logger.debug('WebApp Files', staticFiles);
  webapp.use(express.static(staticFiles));

  const api = createExpressServer({
    controllers,
  });

  server.use(vhost('api.*', api));
  server.use(vhost('*', webapp));

  server.listen(port, () => {
    logger.info(`WEB APP LISTENING ON ${protocol}://${domain}:${port}`);
    logger.info(`API LISTENING ON ${protocol}://api.${domain}:${port}`);
  });

  return server;
}
