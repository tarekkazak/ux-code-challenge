;(function() {

  angular
    .module('priceRequest')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'QueryService'];

  function MainController($scope, QueryService) {

    var self = this;

    $scope.showUserSymbolData = function(msg, symbolData) {
      if(msg && symbolData) {
        window.alert(msg);
        $scope.getSymbolDataObj(symbolData);
      }
    };

    $scope.getSymbolDataObj = function(symbolData) {
      console.log('--- The data object for this symbol is: ', symbolData);
    };

    $scope.utilityFuncs = {
      // To convert date that is passed to 
      formatDate: function(date, formating) {
        if(moment && date && formating) {
          return moment(date).format(formating);
        }
        else {
          return null;
        }
      }
    };

    /**
     * Load symbols' price data
     */
    QueryService.query('GET', 'data/prices.json', {}, {})
      .then(function(pricesServiceReqObj) {
        self.pricesServiceReqObj = pricesServiceReqObj.data;
        $scope.pricesServiceReqObj = self.pricesServiceReqObj;
        console.log('The data object received for all symbols via http service call: ', pricesServiceReqObj);
      });
  }


})();