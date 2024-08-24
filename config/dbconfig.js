import chalk from 'chalk';
import mongoose from 'mongoose';

import cfg from '@config/cfg/index.js';
const MONGO_URI = cfg.db.url;

const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error('MONGODB_URI is missing!');
    }
    const connect = await mongoose.connect(MONGO_URI, {
      dbName: 'invoicely_app_db',
      bufferCommands: false,
    });
    console.log(
      chalk.yellow(`       MongoDB Connected: ${connect.connection.host}`) +
        '\n\\*/---------------_*oOo*_---------------\\*/',
    );
  } catch (error) {
    console.error(chalk.red('MongoDB connection error:', error));
    process.exit(1);
  }
};

export default connectDB;
