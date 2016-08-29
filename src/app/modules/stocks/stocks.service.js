/**
 * @ngdoc controller
 * @name stocks.controller:StocksService
 */
class StocksService {
  constructor(coreService) {
    this.coreService = coreService;
  }

  /**
   * @ngdoc method
   * @name getStocks
   * @methodOf stocks.controller:StocksService
   * @return {promise} Return a promise
   * @description
   * This function executes an HTTP request to get the prices.json file.
   */
  getStocks() {
    return this.coreService.http({
        method: 'GET',
        url: '/data/prices',
      })
      .then((data) => data.data);
  }
}

StocksService.$inject = [
  'coreService',
];

export default StocksService;
