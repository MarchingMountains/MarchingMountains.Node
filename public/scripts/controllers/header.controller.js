myApp.controller('HeaderController', ['$scope', '$http', '$mdDialog', '$mdMedia', 'UserService', '$sessionStorage', '$window',
    function($scope, $http, $mdDialog, $mdMedia, UserService,  $sessionStorage, $window) {

        $scope.UserService = UserService;
        $scope.first_name;
        $scope.user_name;
        $scope.isLoggedIn = false;
        $scope.userID;
        $scope.storage = $sessionStorage;

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
            $scope.UserService.logOutUser().then(function(response){
                $window.location.href=response.data.uri;
            });
        };

        $scope.$watch($scope.UserService.watchCurrentUser, function(newValue, oldValue){
            if (newValue != undefined) {
                console.log("newValue"+JSON.stringify(newValue));
                $scope.first_name = $scope.UserService.watchCurrentUser().factoryFirstName;
                $scope.user_name = $scope.UserService.watchCurrentUser().factoryUserName;
                $scope.isLoggedIn = $scope.UserService.watchCurrentUser().isLogged;
                $scope.userID = $scope.UserService.watchCurrentUser().factoryUserId;
                welcomeText();
            }
        });

        var welcomeText = function() {
            if($scope.first_name != undefined && $scope.first_name != '') {
                $scope.displayedUser = $scope.first_name;
            } else {
                $scope.displayedUser = $scope.user_name;
            }
        };

        var getCachedUser = function() {
            $scope.first_name = $scope.UserService.watchCurrentUser().factoryFirstName;
            $scope.user_name = $scope.UserService.watchCurrentUser().factoryUserName;
            $scope.isLoggedIn = $scope.UserService.watchCurrentUser().isLogged;
            $scope.userID = $scope.UserService.watchCurrentUser().factoryUserId;
            console.log("On Load getCachedUser, Factory Logged In:", $scope.isLoggedIn);
        };
        
        getCachedUser();
    }
]);
