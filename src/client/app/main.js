require('angular');
var MainController = require('./controllers/MainController');

var app = angular.module('MarchingMountains', ['ui.router'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
        }
        })
        .state('app.banddirectors', {
          url: 'band-directors',
          views: {
            'content@': {
                templateUrl: 'public/html/band-directors.html'
            }
        }
        })
        .state('app.project', {
          url: 'project',
          views: {
            'content@': {
                templateUrl: 'public/html/project/index.html'
            }
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
        }
        })
        .state('app.video', {
          url: 'video',
          views: {
            'content@': {
                templateUrl: 'public/html/video.html'
            }
        }
        })
        .state('app.volunteer', {
          url: 'volunteer',
          views: {
            'content@': {
                templateUrl: 'public/html/volunteer.html'
            }
        }
        })
        .state('app.success', {
          url: 'instrument-donation-success-stories',
          views: {
            'content@': {
                templateUrl: 'public/html/success-stories.html'
            }
        }
        })
        .state('app.reports', {
          url: 'annual-reports',
          views: {
            'content@': {
                templateUrl: 'public/html/annual-reports.html'
            }
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
        }
        });     
    }]);

app.controller('MainController', ['$scope', MainController]);