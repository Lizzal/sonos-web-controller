const app = require('express')();
const bodyParser = require('body-parser');

module.exports = function express() {
  // use middleware for json processing
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  return app;
};
