import app from '@api/server.js';
import cfg from '@config/cfg/index.js';
import connectDB from '@config/dbconfig.js';

import chalk from 'chalk';

// let port = config.development.port;
const normalizePort = (val) => {
  let port = parseInt(val, 10);

  if (isNaN(val)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(cfg.port);
app.set('port', port);

// Connect to database and start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(
      chalk.blue(
        `  Server started and running on port ${port}` +
          '\n       Press ctrl+C to terminate',
      ),
    );
  });
});
