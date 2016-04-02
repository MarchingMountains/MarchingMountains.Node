myApp.factory('UserService', ['$http', '$window', function($http, $window) {

    function User(isLogged, factoryUserName, factoryFirstName, factoryUserId) {
        this.isLogged = isLogged;
        this.factoryUserName = factoryUserName;
        this.factoryFirstName = factoryFirstName;
        this.factoryUserId = factoryUserId;
    }

    var CurrentUser;

    function returnCurrentUser() {
        return CurrentUser;
    }


    function login(user) {
        console.log(user);
        var promise = $http.post('/', user).then(function (response) {
            console.log(response);
            CurrentUser = new User (true, response.data.email, response.data.first_name, response.data.user_id);
            console.log(CurrentUser);
        });
        return promise;
    }

    function register(user) {
        console.log(user);
        var promise = $http.post('/register', user).then(function (response) {
            console.log(response.data);
            CurrentUser = new User (true, response.data.email, response.data.first_name, response.data.user_id);
            console.log(CurrentUser);
        });
        return promise;
    }

    function logOut() {
        CurrentUser = undefined;
        $window.location.href = '/#/home';
    }

    var publicFunctions = {
        askForCurrentUser: function() {
            return CurrentUser;
        },
        postLogin: function (user) {
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