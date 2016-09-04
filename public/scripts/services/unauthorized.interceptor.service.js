(function() {
'use strict';

angular.module('myApp')
 .factory('UnauthorizedInterceptor', UnauthorizedInterceptor);

UnauthorizedInterceptor.$inject = ['$q', '$location','$timeout', '$sessionStorage'];
/* @ngInject */
function UnauthorizedInterceptor($q, $location, $timeout, $sessionStorage) {

    return {
        responseError: responseErrorHandler
    };

    function responseErrorHandler(rejection) {
        if (rejection.status === 401) {
            // Redirect to home page
            $sessionStorage.CurrentUser = null;
            $timeout(function() { $location.path('/'); });
        } else if (rejection.status === 409) {
            //You are already a registered user'
        } else {
            //Server error
        }
        return $q.reject(rejection);
    }
}
})();
