myApp.controller('LoginController', ['$scope', 'UserService', '$mdDialog', '$window', '$location', function($scope, UserService, $mdDialog, $window, $location) {

    console.log('inside login controller');

    $scope.UserService = UserService;

    $scope.loggedInUser;

    $scope.login = function(isValid) {
        if(isValid) {
            var user = {
                username: $scope.username,
                password: $scope.password
            };
            $scope.UserService.postLogin(user).then(function () {
                $scope.loggedInUser = $scope.UserService.askForCurrentUser();
                $scope.first_name = $scope.loggedInUser.factoryFirstName;
                console.log('login controller first name', $scope.first_name);
                $mdDialog.hide();
            });
        }

    };

    $scope.register = function(isValid) {
        $mdDialog.hide();
        if (isValid) {
            console.log("inside register function");
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

    $scope.closeModal = function() {
        $mdDialog.hide();
    };

    //$scope.$watch($scope.UserService.watchCurrentUser, function(newValue, oldValue){
    //    $scope.loggedInUser = $scope.UserService.askForCurrentUser();
    //
    //});


}]);
