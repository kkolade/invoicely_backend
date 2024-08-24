// Node core modules

// Express
import express from 'express';

// Dependencies modules
import compression from 'compression';
import cors from 'cors';
import logger from 'morgan';

// Other imports
import cfg from '../../config/cfg/index.js';

// import routes

// Import error handlers
// import {
//   respondNoResourceFound,
//   respondServerError,
// } from './api/v1/middleware/errorMiddleware.js';

const app = express();

// Static Files
app.use(express.static(cfg.dir.static));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(logger('dev'));

// Routes

// Error Handler
// app.use(respondNoResourceFound);
// app.use(respondServerError);

export default app;
