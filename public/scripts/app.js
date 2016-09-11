(function() {
'use strict';

angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngStorage', 
  'angAccordion', 'ngPassword', 'smart-table', 'xeditable','ui.router',
        'ui.router.title'])
.config([
            '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
      .state('app', {
        url: '/',
        views: {
          'main' : {
            templateUrl: '/views/templates/home.html',
            controller: 'SchoolSearchController'
          }
      }
    })
      .state('app.project', {
        url: 'project',
        views: {
          'main@' : {
          templateUrl: '/views/templates/about.html'
      }
    }
    })
      .state('app.faq', {
        url: 'faq',
        views: {
          'main@' : {
        templateUrl: '/views/templates/faq.html'
      }
    }
    })
      .state('app.donate', {
        url:'donate-a-musical-instrument',
        views: {
          'main@' : {
          templateUrl: '/views/templates/donate-instrument.html'
      }
    }
    })
      .state('app.donors', {
        url:'donors',
        views: {
          'main@' : {
            templateUrl: '/views/templates/donors.html',
            controller: 'SchoolSearchController'
      }
    }
    })
      .state('app.contact', {
        url:'contact',
        views: {
          'main@' : {
            templateUrl: '/views/templates/contact.html'
      }
    }
    })
      .state('app.band-directors', {
        url:'band-directors',
        views: {
          'main@' : {
        templateUrl: '/views/templates/band-directors.html'
      }
    }
    })
      .state('app.account', {
        url:'account',
        views: {
          'main@' : {
          templateUrl: '/views/templates/account.html',
          controller: 'AccountController'
      }
    }
    })
      .state('app.my-schools', {
        url:'my-schools',
        views: {
          'main@' : {
          templateUrl: '/views/templates/my-schools.html',
          controller: 'MySchoolsController'
        }
        }
    })
      .state('app.school-info', {
        url:'school-info',
        views: {
          'main@' : {
          templateUrl: '/views/templates/school-info.html',
          controller: 'SchoolInfoController'
        }
      }
    })
      .state('login', {
        templateUrl: '/views/templates/login.html',
        controller: 'LoginController'
    })
      .state('register', {
        templateUrl: '/views/templates/register.html',
        controller: 'LoginController'
    })
      .state('app.admin', {
        url:'admin',
        views: {
          'main@' : {
            templateUrl: '/views/templates/admin.html',
            controller: 'AdminController'
          }
        }
    })
      .state('app.press', {
        url:'press',
        views: {
          'main@' : {
        templateUrl: '/views/templates/press.html'
      }
    }
    })
      .state('app.press1', {
        url:'press1',
        views: {
          'main@' : {
        templateUrl: '/views/templates/press-1.html'
      }
    }
    })
      .state('app.press2', {
        url:'press2',
        views: {
          'main@' : {
        templateUrl: '/views/templates/press-2.html'
      }
    }
    })
      .state('app.discover-areas', {
        url:'discover-areas',
        views: {
          'main@' : {
        templateUrl: '/views/templates/discover-areas.html'
      }
    }
    })
      .state('app.discover-how', {
        url:'discover-how',
        views: {
          'main@' : {
        templateUrl: '/views/templates/discover-how.html'
      }
    }
    })
      .state('app.discover-what', {
        url:'discover-what',
        views: {
          'main@' : {
        templateUrl: '/views/templates/discover-what.html'
      }
    }
    })
      .state('app.discover-who', {
        url:'discover-who',
        views: {
          'main@' : {
        templateUrl: '/views/templates/discover-who.html'
      }
    }
    })
      .state('app.success', {
        url:'instrument-donation-success-stories',
        views: {
          'main@' : {
        templateUrl: '/views/templates/success-stories.html'
      }
    }
    })
      .state('app.video', {
        url:'video',
        views: {
          'main@' : {
        templateUrl: '/views/templates/videos.html'
      }
    }
    })
      .state('app.volunteer', {
        url:'volunteer',
        views: {
          'main@' : {
        templateUrl: '/views/templates/volunteer.html'
      }
    }
    })
      .state('app.annual-reports', {
        url:'annual-reports',
        views: {
          'main@' : {
        templateUrl: '/views/templates/annual-reports.html'
      }
    }
    });
}]);

angular.module('myApp').config(HttpProviderConfiguration);
HttpProviderConfiguration.$inject = ['$httpProvider'];


angular.module('myApp').config(function($locationProvider){
  $locationProvider.html5Mode(true);
});

function HttpProviderConfiguration($httpProvider) {
    $httpProvider.interceptors.push('UnauthorizedInterceptor');
}

angular.module('myApp').run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
})();
