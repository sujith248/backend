const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const productsHandler = require('./products/productsController.js');

// getting the base credentials from .env file
const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', productsHandler);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });