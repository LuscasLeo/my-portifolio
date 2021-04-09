import express from 'express';
import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import AppConfig from './config/app.config';
import * as log4js from 'log4js';
import startLoader from './loaders';

const { main } = AppConfig.loggerNames;

log4js.configure({
  appenders: {
    [main]: {
      type: 'stdout',
    },
  },
  categories: {
    default: {
      level: 'all',
      appenders: [main],
    },
  },
});

const logger = log4js.getLogger(main);

async function init() {
  logger.info('INITIALIING EXPRESS SERVER');
  await startLoader();
}

init().catch((err) => logger.error(err));
