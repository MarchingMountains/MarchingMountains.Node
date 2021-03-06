(function() {
'use strict';

angular.module('myApp').factory('UserService', 
    ['$http', '$window', '$sessionStorage', function($http, $window, $sessionStorage) {
    var CurrentUser = {
        isLogged: false,
        factoryUserName: undefined,
        factoryFirstName: undefined,
        factoryUserId: undefined
    };

    function login(user) {
        var promise = $http.post('/', user).then(function(response) {
            if (response.data === false) {
                return response.data;
            } else {
                CurrentUser = {
                    isLogged: true,
                    factoryUserName: response.data.email,
                    factoryFirstName: response.data.first_name,
                    factoryUserId: response.data.user_id
                };
                persistSession();
                return response.data;
            }
        });
        return promise;
    }

    function register(user) {
        var promise = $http.post('/api/register', user).then(function(response) {
            CurrentUser = {
                isLogged: true,
                factoryUserName: response.data.email,
                factoryFirstName: response.data.first_name,
                factoryUserId: response.data.user_id
            };
            persistSession();
        });
        return promise;
    }

    function logOut() {
        CurrentUser = undefined;
        delete $sessionStorage.CurrentUser;
        return $http.post('/api/logout');
    }

    function persistSession() {
        $sessionStorage.CurrentUser = CurrentUser;
    }

    var publicFunctions = {
        postLogin: function(user) {
            return login(user);
        },
        postRegister: function(user) {
            return register(user);
        },
        logOutUser: function() {
            return logOut();
        }
    };

    return publicFunctions;
}]);
})();
