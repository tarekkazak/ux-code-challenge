;(function() {

  angular
    .module('priceRequest')
    .factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http'];

  function getDataFromAPI($http) {
    return {
      loadData: loadData
    };
  }

})();
