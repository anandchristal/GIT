'use strict';

/**
 * @ngdoc overview
 * @name demoappApp
 * @description
 * # demoappApp
 *
 * Main module of the application.
 */
angular
  .module('demoappApp', ['ui.bootstrap','ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'dynform'
  ])
  .config(['$urlRouterProvider','$stateProvider',function ($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('app', {
    url: '/',
    views: {
      '': {
        templateUrl : 'views/1stmain.html'
      },
      'header@app':{
        templateUrl : 'views/1stmainsub1.html',
        controller : '1stmainsub1Ctrl'
      },
      'content@app':{
        templateUrl : 'views/1stmainsub2.html',
        controller : '1stmainsub2Ctrl'
      },
      'footer@app':{
        templateUrl : 'views/1stmainsub3.html',
        controller : '1stmainsub3Ctrl'
      }
    
    }
/*    controller: 'WeatherCtrl',
    templateUrl: 'partials/hourly.html'*/
    })
    .state('breakfast',{
      url:'breakfast',
      views:{
        'content@breakfast':{
          templateUrl : 'views/1stmainsub3.html'
        }
      }
    });
 /*   .state('', {
    url: '',
    controller: '',
    templateUrl: ''
    });*/
  }]);
