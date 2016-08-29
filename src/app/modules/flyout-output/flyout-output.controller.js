/**
 * @ngdoc controller
 * @name flyout-output.controller:FlyoutOutputController
 */
class FlyoutOutputController {
  constructor(flyoutOutputService, $scope) {
    this.flyoutOutputService = flyoutOutputService;
    this.$scope = $scope;
  }

  /**
   * @ngdoc method
   * @name $onInit
   * @methodOf flyout-output.controller:FlyoutOutputController
   * @description
   * This function is part of Angular's component lifecycle. It is executed
   * when the component is initialized.
   *
   * In this case, it instantiates a watcher on the `flyoutOutputService` data
   * object.
   */
  $onInit() {
    this.watchFlyoutOutput = this.$scope.$watch(this.flyoutOutputService.getData(), (currVal) => {
      this.output = this.flyoutOutputService.outputData;
      this.hasOutput = Object.keys(this.output).length > 0;

      if (this.output.hasOwnProperty('price')) {

        // if the user clicks on action buttons with numbers, it will calculate
        // a quote price.
        if (this.isAbsoluteUnits(this.output.units)) {
          this.quotePrice = this.output.units * this.output.price.indicative;
        }

        // if the user clicks the "n" action button, it will display an input
        // where the user can enter a number.
        if (this.isCustomUnit(this.output.units)) {
          this.quotePrice = this.customUnits * this.output.price.indicative;
        }
      }
    }, true);
  }

  $onDestroy() {
    this.watchFlyoutOutput();
  }

  /**
   * @ngdoc method
   * @name isAbsoluteUnits
   * @methodOf flyout-output.controller:FlyoutOutputController
   * @param {number} units Number of units
   * @description
   * This function will determine if the units are numbers of "n".
   * @return {boolean} Returns true if the unit is a number
   */
  isAbsoluteUnits(units) {
    return !isNaN(units);
  }

  /**
   * @ngdoc method
   * @name isCustomUnit
   * @methodOf flyout-output.controller:FlyoutOutputController
   * @param {number} units Number of units
   * @description
   * This function will determine if the units are numbers of "n".
   * @return {boolean} Returns true if the unit is "n".
   */
  isCustomUnit(units) {
    return !this.isAbsoluteUnits(units);
  }

  /**
   * @ngdoc method
   * @name calculateCustomQuote
   * @methodOf flyout-output.controller:FlyoutOutputController
   * @description
   * This function will calculate the quote price based on the number the user
   * input in the number field.
   */
  calculateCustomQuote() {
    this.quotePrice = this.customUnits * this.output.price.indicative;
  }
}

FlyoutOutputController.$inject = [
  'flyoutOutputService',
  '$scope',
];

export default FlyoutOutputController;
