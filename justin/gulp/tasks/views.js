'use strict';

const config = require('../config');
const gulp = require('gulp');

function buildViews(appName) {
  gulp.src(config.view.src)
    .pipe(gulp.dest(config.view.dest));
}

gulp.task('views', () => gulp.src(config.view.src)
  .pipe(gulp.dest(config.view.dest)));
