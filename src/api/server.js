'use strict'

const express = require('express');
const app = express();
const Router = require("./routes");
const port=3000;


function initRoutes() {
  Router(app);
}

app.listen(port, ()=>{
  console.log(`AjiraNet listening at http://localhost:${port}`);
});

initRoutes();