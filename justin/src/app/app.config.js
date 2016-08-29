function appConfig($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>',
    });
}

appConfig.$inject = [
  '$urlRouterProvider',
  '$stateProvider',
  '$locationProvider',
];

export default appConfig;
