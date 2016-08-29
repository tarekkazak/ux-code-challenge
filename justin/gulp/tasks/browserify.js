'use strict';

const config = require('../config');
const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const watchify = require('watchify');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const handleErrors = require('../util/handleErrors');
const browserSync = require('browser-sync');
const babel = require('babelify');
const stringify = require('stringify');

gulp.task('browserify', ['views'], () => {
  let bundler = browserify({
    entries: config.browserify.src,
    debug: true,
    fullPaths: true,
  }, watchify.args)
  .transform(babel)
  .transform(stringify, {
    appliesTo: { includeExtensions: ['.html'] },
    minify: true,
  });

  bundler = watchify(bundler);
  bundler.on('update', () => {
    rebundle();
  });

  function rebundle() {
    const stream = bundler.bundle();

    gutil.log('Rebundle...');

    return stream.on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: false,
      }))
      // .pipe(uglify({
      //   mangle: true,
      // }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.browserify.dest))
      .pipe(browserSync.stream({ once: true }));
  }

  return rebundle();
});
