import FlyoutOutputComponent from './flyout-output.component.js';
import FlyoutOutputService from './flyout-output.service.js';

/**
 * @ngdoc overview
 * @name flyout-output
 */
export default angular
  .module('flyout-output', [])
  .component('flyoutOutput', FlyoutOutputComponent)
  .service('flyoutOutputService', FlyoutOutputService)
  .name;
