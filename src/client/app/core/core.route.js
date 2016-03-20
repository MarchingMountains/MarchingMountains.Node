	(function () {
  'use strict';

	angular
		.module('app.core')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		
      $locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/');
      $stateProvider
        .state('app', {
        	 url: '/',
          views: {
            'header': {
              templateUrl: 'public/html/header.html'
            },
            'content': {
            	templateUrl: 'public/html/home.html'
            },
            'footer':{
              templateUrl: 'public/html/footer.html'
            }
          }
        })
        .state('app.donate', {
          url: 'donate-a-musical-instrument',
          views: {
            'content@': {
                templateUrl: 'public/html/donate-instrument.html'
            }
        },
        resolve: {
		      $title: function() { return 'Donate a musical instrument'; }
		    }
        })
        .state('app.banddirectors', {
          url: 'band-directors',
          views: {
            'content@': {
                templateUrl: 'public/html/band-directors.html'
            }
        },
        resolve: {
		      $title: function() { return 'Band Directors'; }
		    }
        })
        .state('app.project', {
          url: 'project',
          views: {
            'content@': {
                templateUrl: 'public/html/project/index.html'
            }
        },
        resolve: {
		      $title: function() { return 'About the organization'; }
		    }
        })
        .state('app.project.who', {
          url: '/who',
          views: {
            'content@': {
                templateUrl: 'public/html/project/who.html'
            }
        }
        })
        .state('app.project.what', {
          url: '/what',
          views: {
            'content@': {
                templateUrl: 'public/html/project/what.html'
            }
        }
        })
        .state('app.project.how', {
          url: '/how',
          views: {
            'content@': {
                templateUrl: 'public/html/project/how.html'
            }
        }
        })
        .state('app.project.areas', {
          url: '/areas',
          views: {
            'content@': {
                templateUrl: 'public/html/project/areas.html'
            }
        }
        })
        .state('app.faq', {
          url: 'faq',
          views: {
            'content@': {
                templateUrl: 'public/html/faq.html'
            }
        },
        resolve: {
		      $title: function() { return 'Frequently Asked Questions'; }
		    }
        })
        .state('app.video', {
          url: 'video',
          views: {
            'content@': {
                templateUrl: 'public/html/video.html'
            }
        },
        resolve: {
		      $title: function() { return 'Videos'; }
		    }
        })
        .state('app.volunteer', {
          url: 'volunteer',
          views: {
            'content@': {
                templateUrl: 'public/html/volunteer.html'
            }
        },
        resolve: {
		      $title: function() { return 'Volunteer'; }
		    }
        })
        .state('app.success', {
          url: 'instrument-donation-success-stories',
          views: {
            'content@': {
                templateUrl: 'public/html/success-stories.html'
            }
        },
        resolve: {
		      $title: function() { return 'Success Stories'; }
		    }
        })
        .state('app.reports', {
          url: 'annual-reports',
          views: {
            'content@': {
                templateUrl: 'public/html/annual-reports.html'
            }
        },
        resolve: {
		      $title: function() { return 'Annual Reports'; }
		    }
        })
        .state('app.news', {
          url: 'news',
          views: {
            'content@': {
                templateUrl: 'public/html/annual-reports.html'
            }
        }
        })
        .state('app.news.one', {
          url: '/2010/donated-instrument-distribution',
          views: {
            'content@': {
                templateUrl: 'public/html/news/n20101.html'
            }
        }
        })
        .state('app.news.two', {
          url: '/2013/Donating-Musical-Instruments-Changes-Childrens-Lives',
          views: {
            'content@': {
                templateUrl: 'public/html/news/n20131.html'
            }
        }
        })
        .state('app.contact', {
          url: 'contact',
          views: {
            'content@': {
                templateUrl: 'public/html/contact.html'
            }
        },
        resolve: {
		      $title: function() { return 'Contact'; }
		    }
    });
	}]);
})();
