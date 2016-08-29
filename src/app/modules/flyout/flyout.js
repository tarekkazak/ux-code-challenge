import FlyoutOutputModule from '../flyout-output/flyout-output.js';
import FlyoutComponent from './flyout.component.js';

/**
 * @ngdoc overview
 * @name flyout
 */
export default angular
  .module('flyout', [
    FlyoutOutputModule,
  ])
  .component('flyout', FlyoutComponent)
  .name;
