import { StatusCodes } from 'http-status-codes';

const respondNoResourceFound = (req, res) => {
  let errorCode = StatusCodes.NOT_FOUND;
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
  // res.sendFile(`./${errorCode}.html`, {
  //   root: '/',
  // });
};

const respondServerError = (err, req, res, _next) => {
  let errorCode = StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${err.stack}`);
  res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
  // res.sendFile(`../public/html/500.html`, {
  //   root: '/',
  // });
};

export { respondNoResourceFound, respondServerError };
