'use strict';

const config = require('../config');
const gulp = require('gulp');
const ngDocs = require('gulp-ngdocs');
const connect = require('gulp-connect');

gulp.task('ngdocs', () => gulp
  .src(config.ngdocs.src)
  .pipe(ngDocs.process({
    html5Mode: true,
  }))
  .pipe(gulp.dest(config.ngdocs.dest)));

// Appeler cette tâche pour démarrer un serveur afin de lire la documentation.
gulp.task('ngdocs-server', ['ngdocs'], () => {
  connect.server({
    root: config.ngdocs.server.root,
    livereload: true,
    fallback: config.ngdocs.server.fallback,
    port: config.ngdocs.server.port,
  });
});

// Cette tâche écoute pour les changements dans les fichier .js
// afin de redémarrer la tâche ngdocs.
gulp.task('watch-ngdocs', ['ngdocs', 'ngdocs-server'], () => {
  gulp.watch(config.ngdocs.watchSrc, ['ngdocs']);
});
