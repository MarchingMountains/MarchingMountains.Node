angular.module('myApp').controller('RegisterController', ['$scope', 'UserService', '$mdDialog', function($scope, UserService, $mdDialog) {

    $scope.UserService = UserService;

    $scope.register = function(isValid) {
        if (isValid) {
            var newUser = {
                username: $scope.username,
                password: $scope.password
            };
            $scope.UserService.postRegister(newUser)
            .then(function() {
                $mdDialog.hide();
            },function() {
            });
        }
    };
}]);
