import StocksService from './stocks.service.js';

/**
 * @ngdoc overview
 * @name stocks
 */
export default angular
  .module('stocks', [])
  .service('stocksService', StocksService)
  .name;
