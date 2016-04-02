var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'angAccordion', 'ngPassword', 'wj']);
myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'SchoolSearchController'
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html'
    })
    .when('/faq', {
      templateUrl: '/views/templates/faq.html'
    })
    .when('/donate-instrument', {
      templateUrl: '/views/templates/donate-instrument.html'
    })
    .when('/donors', {
      templateUrl: '/views/templates/donors.html',
      controller: 'SchoolSearchController'
    })
    .when('/contact', {
      templateUrl: '/views/templates/contact.html'
    })
    .when('/band-directors', {
      templateUrl: '/views/templates/band-directors.html'
    })
    .when('/account', {
      templateUrl: '/views/templates/account.html',
      controller: 'AccountController'
    })
    .when('/my-schools', {
      templateUrl: '/views/templates/my-schools.html',
      controller: 'MySchoolsController'
    })
    .when('/school-info', {
      templateUrl: '/views/templates/school-info.html',
      controller: 'SchoolInfoController'
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController'
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html'
    })
    .when('/admin', {
      templateUrl: '/views/templates/admin.html',
      controller: 'AdminController'
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);
