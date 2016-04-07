myApp.controller('LoginController', ['$scope', 'UserService', '$mdDialog', '$mdMedia',
'$window', '$location', function($scope, UserService, $mdDialog, $mdMedia, $window, $location) {

    $scope.UserService = UserService;
    $scope.loginErrorMessage;
    $scope.loggedInUser;

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

    $scope.closeModal = function(ev) {
        $mdDialog.hide();
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
            templateUrl: '../views/templates/register.html',
            controller: 'RegisterController',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        });
    };


}]);
