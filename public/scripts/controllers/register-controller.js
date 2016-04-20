myApp.controller('RegisterController', ['$scope', 'UserService', '$mdDialog', '$window',
'$location', function($scope, UserService, $mdDialog) {

    $scope.UserService = UserService;
    // $scope.loginErrorMessage;
    // $scope.loggedInUser;

    $scope.register = function(isValid) {
        if (isValid) {
            var newUser = {
                username: $scope.username,
                password: $scope.password
            };
            $scope.UserService.postRegister(newUser).then(function() {
                $mdDialog.hide();
            })
      .catch(function() {
          //Do something here. Dialog.
      });
        }
    };
}]);
