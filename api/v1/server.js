// Node core modules

// Express
import express from 'express';

// Dependencies modules
import compression from 'compression';
import cors from 'cors';
import session from 'express-session';
import logger from 'morgan';

// Other imports
import cfg from '../../config/cfg/index.js';

// import routes
import authRoute from './routes/authRoute.js';
import indexRoute from './routes/indexRoute.js';

// Import error handlers
import {
  respondNoResourceFound,
  respondServerError,
} from './middleware/errorMiddleware.js';

const app = express();

// Static Files
app.use(express.static(cfg.dir.static));
console.log(cfg);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(
  session({
    secret: cfg.secret,
    saveUninitialized: true,
    resave: false,
  }),
);
app.use(logger('dev'));

// Routes
app.use('/', indexRoute);
app.use('/', authRoute);

// Error Handler
app.use(respondNoResourceFound);
app.use(respondServerError);

export default app;
