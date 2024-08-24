// config/index.mjs
import { development } from './config.dev.js';
import { production } from './config.prod.js';
import { test } from './config.testing.js';

const env = process.env.NODE_ENV || 'development';

let config;

switch (env) {
  case 'production':
    config = production;
    break;
  case 'test':
    config = test;
    break;
  default:
    config = development;
}

export default config;
