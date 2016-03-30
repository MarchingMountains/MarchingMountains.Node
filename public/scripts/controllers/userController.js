myApp.controller('UserController', ['$scope', '$window', 'UserService', function($scope, $window, UserService ) {

    $scope.UserService = UserService;

    $scope.userName;

}]);

