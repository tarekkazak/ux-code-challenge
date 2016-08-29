/**
 * @ngdoc controller
 * @name app.controller:AppController
 */
class AppController {
  constructor(stocksService) {
    this.stocksService = stocksService;
  }

  /**
   * @ngdoc method
   * @name $onInit
   * @methodOf app.controller:AppController
   * @description
   * This function is part of Angular's component lifecycle. It is executed
   * when the component is initialized.
   *
   * In this case, we are making an HTTP request to get the stocks data.
   */
  $onInit() {
    this.stocksService
      .getStocks()
      .then((data) => {
        this.stocks = data;
      });
  }
}

AppController.$inject = [
  'stocksService',
];

export default AppController;
