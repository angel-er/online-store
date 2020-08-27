const mongoose = require('mongoose');
const chalk = require('chalk');

const {DB_URI} = require('./config/db');

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => {
    console.log(chalk.black.bgYellow('Database connected...'));
  })
  .catch((err) => {
    console.log(chalk.white.bgRedBright('Database is not connected...'));
  });
