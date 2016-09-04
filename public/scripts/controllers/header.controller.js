(function() {
    'use strict';

angular.module('myApp').controller('HeaderController', 
    ['$scope', '$http', '$mdDialog', '$mdMedia', '$sessionStorage', 'UserService', '$window',
    function($scope, $http, $mdDialog, $mdMedia, $sessionStorage, UserService, $window) {


        if ($sessionStorage.CurrentUser) {
                $scope.first_name = $sessionStorage.CurrentUser.factoryFirstName;
                $scope.user_name = $sessionStorage.CurrentUser.factoryUserName;
                $scope.isLoggedIn = $sessionStorage.CurrentUser.isLogged;
                $scope.userID = $sessionStorage.CurrentUser.factoryUserId;
            }
            else {
                $scope.first_name = '';
                $scope.user_name = '';
                $scope.isLoggedIn = false;
                $scope.userID = -1;
            }

            $scope.user = function() {
                return $sessionStorage.CurrentUser;
            };

        $scope.openLoginModal = function(ev) {
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

        $scope.openRegisterModal = function(ev) {
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

        $scope.logOut = function() {
            $scope.first_name = undefined;
            $scope.user_name = undefined;
            $scope.isLoggedIn = false;
            $scope.userID = undefined;
            UserService.logOutUser().then(function(response) {
                $window.location.href = response.data.uri;
            });
        };

        $scope.$watch($scope.user, function(newValue) {
            if (newValue !== undefined && newValue !== null) {
                $scope.first_name = $sessionStorage.CurrentUser.factoryFirstName;
                $scope.user_name = $sessionStorage.CurrentUser.factoryUserName;
                $scope.isLoggedIn = $sessionStorage.CurrentUser.isLogged;
                $scope.userID = $sessionStorage.CurrentUser.factoryUserId;
                welcomeText();
            }
        });

        var welcomeText = function() {
            if ($scope.first_name !== undefined && $scope.first_name !== '') {
                $scope.displayedUser = $scope.first_name;
            } else {
                $scope.displayedUser = $scope.user_name;
            }
        };
    }
]);
})();
