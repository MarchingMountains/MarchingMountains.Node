var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngStorage', 'material.svgAssetsCache', 'angAccordion', 'ngPassword', 'wj', 'smart-table', 'xeditable']);
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
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController'
    })
    .when('/admin', {
      templateUrl: '/views/templates/admin.html',
      controller: 'AdminController'
    })
    .when('/logout', {
      templateUrl: '/views/templates/home.html',
      controller: 'SchoolSearchController'
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);

myApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});