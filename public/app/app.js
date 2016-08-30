;(function() {

  angular
    .module('priceRequest', [
      'ngRoute'
    ])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // route
    $routeProvider
      .when('/', {
        templateUrl: 'views/request-price.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }

  angular
    .module('priceRequest')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', '$location'];

  function authInterceptor($rootScope, $q, $location) {
    return {
      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },
      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }

  /**
   * Run
   */
  angular
    .module('priceRequest')
    .run(run);

  run.$inject = ['$rootScope', '$location'];
  function run($rootScope, $location) {
    if(!$rootScope) { new Error('Stock Symbol Price Request application failed. Most likely this error is due to failure in loading resources.'); }
  }

})();