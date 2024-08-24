// config/test.mjs
import { common } from './config.common.js';

export const test = {
  env: 'test',
  port: common.port || 4050,
  dir: common.dir,
  db: {
    ...common.db,
    url: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
  },
};
