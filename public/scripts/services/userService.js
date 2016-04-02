myApp.factory('UserService', ['$http', '$window', function($http, $window) {


    var CurrentUser;

    function returnCurrentUser() {
        return CurrentUser;
    }


    function login(user) {
        console.log(user);
        var promise = $http.post('/', user).then(function (response) {
            console.log(response);
            CurrentUser = {
                isLogged: true,
                factoryUserName: response.data.email,
                factoryFirstName: response.data.first_name,
                factoryUserId: response.data.user_id
            };
            console.log(CurrentUser);
        });
        return promise;
    }

    function register(user) {
        console.log(user);
        var promise = $http.post('/register', user).then(function (response) {
            console.log(response.data);
            CurrentUser = {
                isLogged: true,
                factoryUserName: response.data.email,
                factoryFirstName: response.data.first_name,
                factoryUserId: response.data.user_id
            };
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
        },
        watchCurrentUser: returnCurrentUser

    };

    return publicFunctions;


}]);