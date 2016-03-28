myApp.controller('LoginController', ['$scope', 'UserService', function($scope, UserService) {

        console.log('inside login controller');
        $scope.UserService = UserService;
        $scope.username = '';
        $scope.password = '';
        $scope.loggedInUser = '';

        $scope.login = function() {
            console.log("inside login function");
            var user =  {
                username: $scope.username,
                password: $scope.password
            };
            $scope.UserService.postLogin(user)

        };

        $scope.$watch($scope.UserService.askForCurrentUser, function(newValue, oldValue){
            $scope.loggedInUser = $scope.UserService.askForCurrentUser();

    });

}]);
