var app = angular.module('myApp', []);

app.controller('UserController', ['$scope', function($scope) {
    $scope.state = {};
    $scope.state.number = 42;
}]);