myApp.controller('HeaderController', ['$scope', '$mdDialog', '$mdMedia', 'UserService',
    function($scope, $mdDialog, $mdMedia, UserService, LoginController) {

        $scope.UserService = UserService;
        $scope.loggedIn = false;

        $scope.openModal = function(ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

            $mdDialog.show({
                templateUrl: '../views/templates/login.html',
                controller: 'LoginController',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            });
        };

        $scope.logOut = function() {
            $scope.UserService.logOutUser();
            $scope.first_name = undefined;
            $scope.loggedIn = false;
        };

        $scope.$watch($scope.UserService.watchCurrentUser, function(newValue, oldValue){
            if ($scope.UserService.watchCurrentUser() != undefined) {
                $scope.first_name = $scope.UserService.watchCurrentUser().factoryFirstName;
                $scope.email = $scope.UserService.watchCurrentUser().factoryUserName;
                $scope.loggedIn = true;
            }
        });

    }
]);
