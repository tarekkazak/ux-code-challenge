'use strict';

const config = require('../config');
const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', () => gulp
  .src(config.lint.src)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));
