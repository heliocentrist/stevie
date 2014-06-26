'use strict';

angular.module('stevieApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);

    $sceDelegateProvider.resourceUrlWhitelist(['self', '//www.youtube.com/embed/**', 'http://www.youtube.com/embed/**']);
  });