// config/production.mjs
import { common } from './config.common';

export const production = {
  env: 'production',
  port: common.port || 8000,
  dir: common.dir,
  db: {
    ...common.db,
    url: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
  },
};
