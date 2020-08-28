const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {DB_URI, PORT} = require('./config/db');
const {UsersRoutes} = require('./routes');

const server = express();

// config
server.set('port', PORT || 5000);

// Middlewares
server.use(morgan('dev'));
server.use(express.urlencoded({extended: true}));
server.use(express.json());

// Routes.
server.use('/api/users', UsersRoutes);

// Static
console.log(path.join(__dirname, '../frontend/public'));
server.get('/', (req, res) => {
  res.send({message: 'Welcome'});
});

module.exports = server;
