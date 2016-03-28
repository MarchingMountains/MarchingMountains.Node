myApp.factory('UserService', ['$http', function($http) {

    var isLogged = false;
    var factoryUserName = '';

    function returnIsLogged() {
        return isLogged;
    }

    function returnFactoryUserName() {
        return factoryUserName;
    }

    $http.get('/user').then(function(response) {
        if(response.data) {
            isLogged = true;
            factoryUserName = response.data.username;
            console.log('User Data: ', factoryUser.userName);

        } else {
            isLogged = false;

        }
    });

    return {
        isLogged: returnIsLogged,
        factoryUserName: returnFactoryUserName
    }


}]);
