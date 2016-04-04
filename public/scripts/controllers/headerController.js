myApp.controller('HeaderController', ['$scope', '$http', '$mdDialog', '$mdMedia', 'UserService',
    function($scope, $http, $mdDialog, $mdMedia, UserService, LoginController) {


        $scope.UserService = UserService;
        $scope.first_name;
        $scope.user_name;
        $scope.isLoggedIn = false;


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
            if (newValue !== oldValue) {
                $scope.first_name = $scope.UserService.watchCurrentUser().factoryFirstName;
                $scope.user_name = $scope.UserService.watchCurrentUser().factoryUserName;
                $scope.isLoggedIn = $scope.UserService.watchCurrentUser().isLogged;
            }
        });

        var getUserData = function() {
            $scope.UserService.getUser().then(function() {
                if ($scope.UserService.watchCurrentUser() != undefined) {

                    $scope.first_name = $scope.UserService.watchCurrentUser().factoryFirstName;
                    $scope.user_name = $scope.UserService.watchCurrentUser().factoryUserName;
                    $scope.isLoggedIn = $scope.UserService.watchCurrentUser().isLogged;
                }
                console.log($scope.UserService.watchCurrentUser());
            });
        };

        //var toggleLoginText = function() {
        //  if($scope.isLoggedIn = false) {
        //      $scope.login.text = "Login / Register"
        //  }
        //  else if($scope.isLoggedIn = true) {
        //      $scope.login.text = "Logout"
        //  }
        //};

        getUserData();

    }
]);
