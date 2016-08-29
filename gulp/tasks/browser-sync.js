'use strict';

const config = require('../config');
const browserSync = require('browser-sync');
const gulp = require('gulp');


gulp.task('browserSync', () => {
  browserSync({
    open: true,
    browser: 'google chrome',
    port: config.browserPort,
    ui: {
      port: config.UIPort,
    },
    proxy: `localhost:${config.serverPort}`,
  });
});
