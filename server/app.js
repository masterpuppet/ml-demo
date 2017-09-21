require('ignore-styles');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes/v1');
const cache = require('./lib/cache');
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
})
const universalLoader = require('./universal');
/**
* Express instance
* @public
*/
const app = express();

app.use(morgan('dev'));

// parse body params and attache them to req.body
app.use(bodyParser.json());

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(validator());

app.use('/', routes.index);

app.use('/static', express.static(path.resolve(__dirname, '..', 'build', 'static')))

// mount api v1 routes
app.use('/api/v1/items', cache.route(), routes.items);

app.use('/', universalLoader);

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send('Something broke!')
})

// catch 404 and forward to error handler
//app.use(error.notFound);

// error handler, send stacktrace only during development
//app.use(error.handler);

module.exports = app;
