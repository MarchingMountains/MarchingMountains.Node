myApp.factory('UserService', ['$http', '$window', function($http, $window) {
    function User(isLogged, factoryUserName, factoryFirstName, factoryUserId) {
        this.isLogged = isLogged;
        this.factoryUserName = factoryUserName;
        this.factoryFirstName = factoryFirstName;
        this.factoryUserId = factoryUserId;
    }

    var CurrentUser;
    var allUsers = {};

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
        var promise = $http.get('/').then(function (response) {
            if (response) {
                CurrentUser = undefined;
                $window.location.href = '/#/home';
            }
            });
        return promise;
    }

    var factoryGetAllUsers = function() {
        var promise = $http.get('/user/admin').then(function(response) {
            allUsers.list = response.data;
            console.log('factory allUsers: ', allUsers.list);
        });
        return promise;
    };

    var publicFunctions = {
        askForCurrentUser: function() {
            returnCurrentUser();
        },
        postLogin: function (user) {
            return login(user);
        },
        postRegister: function(user) {
            return register(user);
        },
        logOutUser: function() {
            return logOut();
        },
        getAllUsers: function() {
            return factoryGetAllUsers();
        },
        allUsers: allUsers
    };

    return publicFunctions;
}]);
