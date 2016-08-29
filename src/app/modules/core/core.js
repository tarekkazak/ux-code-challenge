import CoreService from './core.service.js';

/**
 * @ngdoc overview
 * @name core
 */
export default angular
  .module('core', [])
  .service('coreService', CoreService)
  .name;
