'use strict';

const path = require('path');

module.exports = {
  browserPort: 3000,
  UIPort: 3001,
  serverPort: 3002,

  browserify: {
    src: ['./src/app/app.js'],
    dest: 'build/js',
  },

  lint: {
    src: [
      'src/app/**/*.js',
      '!src/app/**/*.spec.js',
    ],
  },

  styles: {
    src: [
      'src/**/*.scss',
    ],
    dest: 'build/css',
  },

  view: {
    src: 'src/app/index.html',
    dest: 'build',
  },

  ngdocs: {
    src: [
      'src/app/**/*.js',
      '!src/app/**/*.spec.js',
    ],
    dest: 'documentation/',
    watchSrc: [
      'src/app/**/*.js',
    ],
    server: {
      root: 'documentation',
      fallback: 'documentation/index.html',
      port: 8888,
    },
  },

  dist: {
    root: 'build',
  },

  test: {
    karma: path.resolve(`${__dirname}/../karma.conf.js`),
  },
};
