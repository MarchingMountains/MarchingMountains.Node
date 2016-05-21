angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngStorage',
 'angAccordion', 'ngPassword', 'smart-table', 'xeditable'])
.config(['$routeProvider', function($routeProvider) {

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
      .when('/press', {
        templateUrl: '/views/templates/press.html'
    })
      .when('/press1', {
        templateUrl: '/views/templates/press-1.html'
    })
      .when('/press2', {
        templateUrl: '/views/templates/press-2.html'
    })
      .when('/stories', {
        templateUrl: '/views/templates/stories.html'
    })
      .when('/discover-areas', {
        templateUrl: '/views/templates/discover-areas.html'
    })
      .when('/discover-how', {
        templateUrl: '/views/templates/discover-how.html'
    })
      .when('/discover-what', {
        templateUrl: '/views/templates/discover-what.html'
    })
      .when('/discover-who', {
        templateUrl: '/views/templates/discover-who.html'
    })
      .when('/success-stories', {
        templateUrl: '/views/templates/success-stories.html'
    })
      .when('/videos', {
        templateUrl: '/views/templates/videos.html'
    })
      .when('/volunteer', {
        templateUrl: '/views/templates/volunteer.html'
    })
      .when('/reports', {
        templateUrl: '/views/templates/annual-reports.html'
    })
      .otherwise({
        redirectTo: '/home'
    });

}]);

angular.module('myApp').config(HttpProviderConfiguration);

HttpProviderConfiguration.$inject = ['$httpProvider'];

function HttpProviderConfiguration($httpProvider) {
    $httpProvider.interceptors.push('UnauthorizedInterceptor');
}

angular.module('myApp').run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
