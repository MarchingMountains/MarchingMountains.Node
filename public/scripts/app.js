var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
    })
    .when('/faq', {
      templateUrl: '/views/templates/faq.html',
    })
    .when('/donate-instrument', {
      templateUrl: '/views/templates/donate-instrument.html',
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
