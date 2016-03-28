myApp.controller('UserController', ['$scope', '$window', 'UserService', function($scope, $window, UserService ) {

    $scope.UserService = UserService;

    $scope.userName;

    $scope.$watch($scope.UserService.isLogged, function(newVal, oldVal) {
        console.log("first stop inside watch:", $scope.UserService.returnIsLogged());
        if ($scope.UserService.returnIsLogged() == 0) {
            $scope.username = '';
            $window.location.href = '/index.html';
        }
        else if ($scope.UserService.returnIsLogged() == 1) {
            $scope.userName = $scope.UserService.factoryUserName;
        }
    },true);



    // This happens after page load, which means it has authenticated if it was ever going to
    // NOT SECURE

    //Moved to userService
    //$http.get('/user').then(function(response) {
    //    if(response.data) {
    //        $scope.userName = response.data.username;
    //        console.log('User Data: ', $scope.userName);
    //    } else {
    //        console.log(response);
    //        $window.location.href = '/index.html';
    //    }
    //});
}]);

