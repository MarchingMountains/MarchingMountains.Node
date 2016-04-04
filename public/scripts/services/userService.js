myApp.factory('UserService', ['$http', '$window', '$localStorage', '$sessionStorage', function($http, $window, $localStorage, $sessionStorage) {

    var allUsers = {};
    var CurrentUser = {
        isLogged: false,
        factoryUserName: undefined,
        factoryFirstName: undefined,
        factoryUserId: undefined
    };
    restoreSession();


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
            persistSession();
            console.log("CurrentUser inside Login:", CurrentUser);
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
            persistSession();
            console.log(CurrentUser);
        });
        return promise;
    }

    function logOut() {
        CurrentUser = {
            isLogged: false,
            factoryUserName: undefined,
            factoryFirstName: undefined,
            factoryUserId: undefined
        };
        delete $localStorage.CurrentUser;
        $window.location.href = '/#/home';
    }
    //var getUserData = function() {
    //    var promise = $http.get('/user').then(function(response) {
    //        console.log("response from getUserData:", response);
    //        if (response.data.user_id != undefined) {
    //            $localStorage.CurrentUser = {
    //                isLogged: true,
    //                factoryUserName: response.data.email,
    //                factoryFirstName: response.data.first_name,
    //                factoryUserId: response.data.user_id
    //                };
    //            persistSession();
    //        }
    //        else if (response.data == false) {
    //            $window.location.href = '/#/home';
    //        }
    //    });
    //
    //    return promise;
    //};

    function persistSession() {
        console.log("LocalStroage:", $localStorage);
        $localStorage.CurrentUser = CurrentUser;
        console.log("localSorage.CurrentUser:", $localStorage.CurrentUser);
    }

    function restoreSession() {
        if($localStorage.CurrentUser != undefined) {
            CurrentUser = $localStorage.CurrentUser;
        }
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
        getUser: function() {
            return getUserData();
        },
        getAllUsers: function() {
            return factoryGetAllUsers();
        },
        allUsers: allUsers,
        watchCurrentUser: returnCurrentUser

    };

    return publicFunctions;
}]);