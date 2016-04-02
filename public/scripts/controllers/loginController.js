myApp.controller('LoginController', ['$scope', 'UserService', '$mdDialog', function($scope, UserService, $mdDialog) {

    console.log('inside login controller');

    $scope.UserService = UserService;

    $scope.login = function(isValid) {
        if(isValid) {
            var user = {
                username: $scope.username,
                password: $scope.password
            };
            $scope.UserService.postLogin(user).then(function () {
                $mdDialog.hide();
            });
        }

    };

    $scope.register = function(isValid) {
        if (isValid) {
            console.log("inside register function");
            var newUser = {
                username: $scope.username,
                password: $scope.password
            };
            $scope.UserService.postRegister(newUser).then(function () {
                $mdDialog.hide();
            });
        }
    };

    //$scope.$watch($scope.UserService.askForCurrentUser, function(newValue, oldValue){
    //    $scope.loggedInUser = $scope.UserService.askForCurrentUser();
    //
    //});


    $scope.show_form = 'login';

    $scope.showRegister = function() {
        $scope.show_form = 'register';
        console.log('show register');
    };

    $scope.showLogin = function() {
        $scope.show_form = 'login';
        console.log('show login');
    };
}]);
