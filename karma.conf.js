'use strict';

// var path = require('path');
const stringify = require('stringify');
// var browserifyShim = require('browserify-shim');
// const istanbul = require('browserify-istanbul');
// const brfs = require('brfs');
const babelify = require('babelify');

// var preprocessors = {};
// preprocessors[__dirname.concat('/app/**/*.js')] = ['browserify'];

module.exports = function karma(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],

    files: [
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app/app.js',
      'src/**/*.spec.js',
    ],

    preprocessors: {
      'src/app/app.js': ['browserify'],
      'src/**/*.spec.js': ['browserify'],
    },

    browsers: ['PhantomJS'],

    // reporters: ['mocha', 'coverage'],

    plugins: [
      // 'karma-chrome-launcher',
      // 'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-browserify',
      // 'karma-coverage',
      // 'karma-mocha-reporter',
    ],

    browserify: {
      debug: true,
      transform: [
        babelify,
        stringify,
      ],
    },

    proxies: {
      '/': 'http://localhost:9876/'
    },
    
    urlRoot: '/__karma__/',

    // coverageReporter: {
    //   dir: 'coverage/',
    //   reporters: [{
    //     type: 'html',
    //   }],
    // },

    // singleRun: false,

    // proxies: {
    //   '/': 'http://localhost:9876/',
    // },

    // colors: true,

    // autoWatch: true,

    // port: 9876,

    // urlRoot: '/__karma__/',
  });
};
