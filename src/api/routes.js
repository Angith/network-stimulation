'use strict'

const bodyParser = require("body-parser");
const ProcessController = require("../controller/processController");

const routes = (app) => {

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.post('/ajiranet/process', (request, response) => {
    new ProcessController(request, response).process();
  });
}

module.exports = routes;