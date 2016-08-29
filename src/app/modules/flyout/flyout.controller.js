/**
 * @ngdoc controller
 * @name flyout.controller:FlyoutController
 */
class FlyoutController {
  constructor($timeout, flyoutOutputService, $scope) {
    this.$timeout = $timeout;
    this.flyoutOutputService = flyoutOutputService;
    this.$scope = $scope;
  }

  /**
   * @ngdoc method
   * @name $onInit
   * @methodOf flyout.controller:FlyoutController
   * @description
   * This function is part of Angular's component lifecycle. It is executed
   * when the component is initialized.
   */
  $onInit() {
    this.stock = this.data;
    this.isActive = false;
  }

  /**
   * @ngdoc method
   * @name toggleFlyoutPannel
   * @methodOf flyout.controller:FlyoutController
   * @param {object} event Angular DOM event
   * @param {object} stock The select stock data object
   * @description
   * This function will toggle the visibility of the stock detail, as well as
   * set or clear the selected data on the `flyoutOutputService` service.
   */
  toggleFlyoutPannel(event, stock) {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.flyoutOutputService.setData(stock.data);
    } else {
      this.flyoutOutputService.clearData();
    }
  }

  /**
   * @ngdoc method
   * @name handleClick
   * @methodOf flyout.controller:FlyoutController
   * @param  {object} data  The stock data object
   * @param  {number} units The clicked unit
   * @description
   * This function will output the data of the stock when you click on an action
   * button (units), as well as set the clicked unit on the `flyoutOutputData`
   * service.
   */
  handleClick(data, units) {
    console.log(data);
    this.flyoutOutputService.setData(angular.extend(data, {
      units: units,
    }));
  }
}

FlyoutController.$inject = [
  '$timeout',
  'flyoutOutputService',
  '$scope',
];

export default FlyoutController;
