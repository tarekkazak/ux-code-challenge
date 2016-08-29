/**
 * @ngdoc service
 * @name core.service:CoreService
 */
class CoreService {
  constructor($http) {
    this.$http = $http;
  }

  /**
   * @ngdoc method
   * @name http
   * @methodOf core.service:CoreService
   * @param  {object} params The AJAX request parameters
   * @return {promise} Return a promise
   * @description
   * This function is a wrapper around Angular's `$HTTP` service. In a real app,
   * you can "intercept" the call and process the request, the response, and
   * handle errors.
   */
  http(params) {
    // some pre-configuration could be done here prior to performing the http
    // request.
    return this.$http(params)
      .catch((err) => {
        console.error('An error occured. Please try refreshing the page.');
      });
  }
}

CoreService.$inject = [
  '$http',
];

export default CoreService;
