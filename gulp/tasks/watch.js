'use strict';

const config = require('../config');
const gulp = require('gulp');

gulp.task('watch', ['browserSync', 'server'], () => {
  // Scripts are automatically watched and rebundled by Watchify inside
  // Browserify task
  // gulp.watch(config.lint.src, ['lint']);
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.ngdocs.src, ['ngdocs']);
});
