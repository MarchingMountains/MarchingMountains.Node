//var app = angular.module('myApp', [])

myApp.controller('TestController', ['$scope', function($scope) {
    $scope.state = {};
    $scope.state.number = 42;
}]);