myApp.controller('HeaderController', ['$scope', '$http', '$mdDialog', '$mdMedia', 'UserService',
    function($scope, $http, $mdDialog, $mdMedia, UserService, LoginController) {
        $scope.UserService = UserService;
        $scope.first_name;
        $scope.user_name;
        $scope.isLoggedIn = false;
        $scope.displayedUser;

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
            $scope.user_name = undefined;
            $scope.isLoggedIn = false;
        };

        $scope.$watch($scope.UserService.watchCurrentUser, function(newValue, oldValue){
            if ($scope.UserService.watchCurrentUser() != undefined) {
                $scope.first_name = $scope.UserService.watchCurrentUser().factoryFirstName;
                $scope.user_name = $scope.UserService.watchCurrentUser().factoryUserName;
                $scope.isLoggedIn = $scope.UserService.watchCurrentUser().isLogged;
                welcomeText();
            }
        });

        var welcomeText = function() {
            if($scope.first_name != undefined) {
                $scope.displayedUser = $scope.first_name;
            } else {
                $scope.displayedUser = $scope.user_name;
            }
        };

        var getCachedUser = function() {
            $scope.first_name = $scope.UserService.watchCurrentUser().factoryFirstName;
            $scope.user_name = $scope.UserService.watchCurrentUser().factoryUserName;
            $scope.isLoggedIn = $scope.UserService.watchCurrentUser().isLogged;

        };

        getCachedUser();
        welcomeText();
    }
]);
