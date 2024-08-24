const indexPage = (req, res) => {
  res.json({
    pageTitle: 'Invoicely | Homepage',
    title: 'Invoicely',
    message:
      'By separating middleware and routes into different methods, you promote a clear structure where each part of the server setup has a specific responsibility. This enhances readability and maintainability.',
  });
};

const dashboard = (req, res) => {
  res.json({
    pageTitle: 'Invoicely | Dashboard',
    title: 'Invoicely Dashboard',
    message:
      'By separating middleware and routes into different methods, you promote a clear structure where each part of the server setup has a specific responsibility. This enhances readability and maintainability.',
  });
};

export { dashboard, indexPage };
