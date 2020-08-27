const express = require('express');
const morgan = require('morgan');
const {DB_URI, PORT} = require('./config/db');

const server = express();

// config
server.set('port', PORT || 5000);

// Middlewares
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));

// Routes

// Route Static
server.get('/', (req, res) => {
  res.send({message: 'Welcome'});
});

module.exports = server;
