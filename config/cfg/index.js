// config/index.mjs
import { development } from './config.dev.js';
import { production } from './config.prod.js';
import { test } from './config.testing.js';

const env = process.env.NODE_ENV || 'development';

let cfg;

switch (env) {
  case 'production':
    cfg = production;
    break;
  case 'test':
    cfg = test;
    break;
  default:
    cfg = development;
}

export default cfg;
