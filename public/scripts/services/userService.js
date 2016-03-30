myApp.factory('UserService', ['$http', '$rootScope', function($http, $rootScope) {

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
        }

    function register(user) {
        console.log(user);
            var promise = $http.post('/register', user).then(function (response) {
                console.log(response);
                CurrentUser = new User (true, response.data.email, response.data.first_name, response.data.user_id);
                console.log(CurrentUser);
            });
    }


    return {
        askForCurrentUser: returnCurrentUser,
        postLogin: login,
        postRegister: register,
        CurrentUser: function(data) {
                $rootScope.$broadcast(CurrentUser);
            }
    }


}]);
