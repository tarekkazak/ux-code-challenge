'use strict';

const path = require('path');
const gulp = require('gulp');
// const config = require('../config');
const gutil = require('gulp-util');
const KarmaServer = require('karma').Server;

gulp.task(
  'unit',
  ['browserify'],
  (done) => {
    const server = new KarmaServer({
      configFile: path.resolve(`${__dirname}/../../karma.conf.js`),
      // showStack: true,
      singleRun: true,
    });

    /* eslint-env es6 */
    server.on('browser_error', (browser, err) => {
      gutil.log(`Karma Run Failed: ${err.message}`);
      throw err;
    });

    server.on('run_complete', (browsers, results) => {
      if (results.failed) {
        throw new Error('Karma: Tests Failed');
      }

      gutil.log('Karma Run Complete: No Failures');
      done();
    });

    server.start();
  });
