;(function() {

  'use strict';

  angular
    .module('priceRequest')
    .directive('symbolPriceInfo', symbolPriceInfo);

  function symbolPriceInfo() {
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/symbol-price-info-directive.html'
    };
    return directiveDefinitionObject;
  }

})();