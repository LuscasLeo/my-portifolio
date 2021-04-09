import dotenv from 'dotenv';
import { getLogger } from 'log4js';
import path from 'path';

dotenv.config();
const logger = getLogger('[CONFIG]');
logger.level = 'all';

const {
  APP_BASE_PATH,
  API_PORT,
  API_CONTROLLERS,
  API_PROTOCOL,
  API_DOMAIN,
  WEBAPP_STATIC_FILES,
} = process.env;

const AppConfig = {
  app: {
    basePath: APP_BASE_PATH,
  },

  api: {
    port: Number(API_PORT),
    protocol: API_PROTOCOL,
    domain: API_DOMAIN,
    controllers: (API_CONTROLLERS || '')
      ?.split(',')
      .filter((v) => v.length)
      .map((v) => path.resolve(v)),
  },

  webApp: {
    staticFiles: path.resolve(WEBAPP_STATIC_FILES || ''),
  },

  loggerNames: {
    main: '[MAIN]',
    loader: '[LOADER]',
    apiLoader: '[LOADER->API]',
  },
};

export default AppConfig;
