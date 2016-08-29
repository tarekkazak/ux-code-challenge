'use strict';

const config = require('../config');
const http = require('http');
const express = require('express');
const gulp = require('gulp');
const gutil = require('gulp-util');
const morgan = require('morgan');

gulp.task('server', () => {
  const server = express();

  // log all requests to the console
  server.use(morgan('dev'));
  server.use(express.static('build'));

  server.get('/data/prices', (req, res) => {
    res.sendFile('prices.json', { root: 'data' });
  });
  
  // Serve index.html for all routes to leave routing up to Angular
  server.all('/*', (req, res) => {
    res.sendFile('index.html', { root: 'build' });
  });

  // Start webserver if not already running
  const s = http.createServer(server);

  s.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      gutil.log(`Server is already started at port ${config.serverPort}`);
    } else {
      throw err;
    }
  });

  s.listen(config.serverPort);
});
