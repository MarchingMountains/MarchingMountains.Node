myApp.controller('LoginController', ['$scope', 'UserService', '$mdDialog',
'$window', function($scope, UserService, $mdDialog, $window) {

    $scope.UserService = UserService;
    $scope.loginErrorMessage;
    $scope.loggedInUser;
    $scope.password_confirm;

    $scope.login = function(isValid) {
        if (isValid) {
            var user = {
                username: $scope.username,
                password: $scope.password
            };
            $scope.UserService.postLogin(user).then(
                function (response) {
                    if (response === false) {
                        console.log("bad login");
                        $scope.loginErrorMessage = 'Invalid Username or Password';
                    } else {
                        $mdDialog.hide();
                    }
                }
            );
        }

    };

    $scope.register = function(isValid) {
        $mdDialog.hide();
        if (isValid) {
            var newUser = {
                username: $scope.username,
                password: $scope.password
            };
            $scope.UserService.postRegister(newUser).then(function () {
                $mdDialog.hide();
                $window.location.href = '/#/home';
            });
        }
    };
}]);
