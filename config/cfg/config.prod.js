// config/production.mjs
import { common } from './config.common.js';

export const production = {
  env: 'production',
  port: common.port || 8000,
  dir: common.dir,
  secret: common.secret,
  db: {
    ...common.db,
    url: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
  },
};
