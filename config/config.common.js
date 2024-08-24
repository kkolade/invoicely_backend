// config/common.mjs
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file in the root directory
config({ path: path.resolve(__dirname, '../.env') });

export const common = {
  dir: {
    root: __dirname,
    static: path.resolve(__dirname, '../', process.env.STATIC_DIR),
  },
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  port: process.env.PORT,
};
