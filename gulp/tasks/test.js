'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('test', () => runSequence(
  'unit'
  // 'protractor'
));
