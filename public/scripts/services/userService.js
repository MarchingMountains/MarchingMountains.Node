myApp.factory('UserService', ['$http', '$rootScope', function($http, $rootScope) {

    var CurrentUser = {
        isLogged: false,
        factoryUserName: '',
        factoryFirstName: '',
        factoryUserId: ''
    };

    function returnCurrentUser() {
        return CurrentUser;
    }


    function login(user) {
        console.log(user);
        var promise = $http.post('/', user).then(function(response) {
            console.log(response.data);
            CurrentUser = {
                isLogged: true,
                factoryUserName: response.data.email,
                factoryFirstName: response.data.first_name,
                factoryUserId: response.data.user_id
             };
            console.log(CurrentUser);
        });

    }

    return {
        askForCurrentUser: returnCurrentUser,
        postLogin: login,
        CurrentUser: function(data) {
                $rootScope.$broadcast(CurrentUser);
            }
    }


}]);
