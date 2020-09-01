const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {DB_URI, PORT} = require('./config/db');
const {UsersRouter, ProductRouter, CategoryRouter} = require('./routes');

const server = express();

// config
server.set('port', PORT || 5000);

// Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

// Routes.
server.use('/api/users', UsersRouter);
server.use('/api/products', ProductRouter);
server.use('/api/categories', CategoryRouter);

// Static
console.log(path.join(__dirname, '../frontend/public'));
server.get('/', (req, res) => {
  res.send({message: 'Welcome'});
});

module.exports = server;
