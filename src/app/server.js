const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Middlware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const routes = require('../routes');
app.use(routes);

module.exports = app;