import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import appConfig from './app.config.js';
import AppComponent from './app.component.js';
import coreModule from './modules/core/core.js';
import flyoutModule from './modules/flyout/flyout.js';
import stocksModule from './modules/stocks/stocks.js';

/**
 * @ngdoc overview
 * @name app
 */
const app = angular
  .module('app', [
    ngSanitize,
    uiRouter,
    coreModule,
    flyoutModule,
    stocksModule,
  ])
  .config(appConfig)
  .component('app', AppComponent);

angular.bootstrap(document, ['app'], {
  strictDi: true,
});

export default app;