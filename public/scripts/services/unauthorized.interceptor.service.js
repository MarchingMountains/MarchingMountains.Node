(function () {
	'use strict';

	angular.module('myApp')
		.factory('UnauthorizedInterceptor', UnauthorizedInterceptor);

	UnauthorizedInterceptor.$inject = ['$q', '$location','$timeout'];
	/* @ngInject */
	function UnauthorizedInterceptor($q, $location, $timeout) {

		return {
			responseError: responseErrorHandler
		};

		function responseErrorHandler(rejection) {
			if (rejection.status === 401) {
				// Redirect to home page
				$timeout(function() { $location.path('/'); });
			}
			else if (rejection.status === 409) {
				//You are already a registered user'
			}
			/* jshint -W035 */
			else if (_.get(rejection, 'config.data.path') === 'login') {
				//do nothing
			}
			else {
				//Server error
			}
			return $q.reject(rejection);
		}
	}
})();
