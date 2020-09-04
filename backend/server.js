const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const {DB_URI, PORT} = require('./config/db');
const {UsersRouter, ProductRouter, CategoryRouter} = require('./routes');

const allowlist = ['http://localhost:3000'];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       console.log('Origin: ', origin);
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
// var allowlist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {origin: true}; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = {origin: false}; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
const server = express();
server.use(cors());

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
server.use(express.static(path.join(__dirname, '../frontend/public')));

// server.use()
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

module.exports = server;
