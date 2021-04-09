import { getLogger } from 'log4js';
import AppConfig from '../config/app.config';
import loadServer from './server.loader';
import loadIoC from './ioc.loader';

const logger = getLogger(AppConfig.loggerNames.loader);
export default async function startLoader() {
  await loadIoC();
  await loadServer();
}
