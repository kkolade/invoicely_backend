// config/development.mjs
import { common } from './config.common.js';

export const development = {
  env: 'development',
  port: common.port || 5050,
  dir: common.dir,
  secret: common.secret,
  db: {
    ...common.db,
    url: `mongodb://${common.db.host}:${process.env.DB_PORT}/${common.db.database}`,
  },
};
